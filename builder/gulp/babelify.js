const stream = require("stream");
const babelCore = require("@babel/core");
const path = require("path");

function buildTransform(opts) {
  return function (filename, transformOpts) {
    const babelOpts = normalizeOptions(opts, transformOpts, filename);
    if (babelOpts === null) {
      return stream.PassThrough();
    }

    return new BabelifyStream(babelOpts);
  };
}

function normalizeOptions(preconfiguredOpts, transformOpts, filename) {
  const basedir = normalizeTransformBasedir(transformOpts);
  const opts = normalizeTransformOpts(transformOpts);

  // Transform options override preconfigured options unless they are undefined.
  if (preconfiguredOpts) {
    for (const key of Object.keys(preconfiguredOpts)) {
      if (opts[key] === undefined) {
        opts[key] = preconfiguredOpts[key];
      }
    }
  }

  // babelify specific options
  const extensions = opts.extensions || babelCore.DEFAULT_EXTENSIONS;
  const sourceMapsAbsolute = opts.sourceMapsAbsolute;
  delete opts.sourceMapsAbsolute;
  delete opts.extensions;

  const extname = path.extname(filename);
  if (extensions.indexOf(extname) === -1) {
    return null;
  }

  // Browserify doesn't actually always normalize the filename passed
  // to transforms, so we manually ensure that the filename is relative
  const absoluteFilename = path.resolve(basedir, filename);

  Object.assign(opts, {
    cwd: opts.cwd === undefined ? basedir : opts.cwd,
    caller: Object.assign(
      {
        name: "babelify",
      },
      opts.caller
    ),
    filename: absoluteFilename,

    sourceFileName:
      sourceMapsAbsolute
        ? absoluteFilename
        : undefined,
  });

  return opts;
}

function normalizeTransformBasedir(opts) {
  return path.resolve(opts._flags && opts._flags.basedir || ".");
}

function normalizeTransformOpts(opts) {
  opts = Object.assign({}, opts);

  // browserify cli options
  delete opts._;
  // "--opt [ a b ]" and "--opt a --opt b" are allowed:
  if (opts.ignore && opts.ignore._) opts.ignore = opts.ignore._;
  if (opts.only && opts.only._) opts.only = opts.only._;
  if (opts.plugins && opts.plugins._) opts.plugins = opts.plugins._;
  if (opts.presets && opts.presets._) opts.presets = opts.presets._;

  // browserify specific options
  delete opts._flags;
  delete opts.basedir;
  delete opts.global;

  return opts;
}

class BabelifyStream extends stream.Transform {
  constructor(opts) {
    super();
    this._data = [];
    this._opts = opts;
  }

  _transform(buf, enc, callback) {
    this._data.push(buf);
    callback();
  }

  _flush(callback) {
    // Merge the buffer pieces after all are available, instead of one at a time,
    // to avoid corrupting multibyte characters.
    const data = Buffer.concat(this._data).toString();

    transform(data, this._opts, (err, result) => {
      if (err) {
        callback(err);
      } else {
        this.emit("babelify", result, this._opts.filename);
        const code = result !== null ? result.code : data;

        // Note: Node 8.x allows passing 'code' to the callback instead of
        // manually pushing, but we need to support Node 6.x.
        this.push(code);
        callback();
      }
    });
  }
}

function transform(data, inputOpts, done) {
  let cfg;
  try {
    cfg = babelCore.loadPartialConfig(inputOpts);
    if (!cfg) return done(null, null);
  } catch (err) {
    return done(err);
  }
  const opts = cfg.options;

  // Since Browserify can only handle inline sourcemaps, we override any other
  // values to force inline sourcemaps unless they've been disabled.
  if (opts.sourceMaps !== false) {
    opts.sourceMaps = "inline";
  }

  babelCore.transform(prepare(data, opts.filename), opts, done);
}

function prepare(data, filename) {
  let ext = path.extname(filename);

  if ([".js"].indexOf(ext) !== -1) {
    return data;
  }
  if ([".html"].indexOf(ext) !== -1) {
    return preparePlain(data);
  }
  if ([".json"].indexOf(ext) !== -1) {
    return prepareJson(data);
  }
  if ([".po"].indexOf(ext) !== -1) {
    return preparePo(data);
  }
}

function preparePlain(data) {
  return Buffer.from("export default function(options){\n\treturn `\n" + data.toString() + "`;\n};\n");
}

function prepareJson(data) {
  return Buffer.from("export default " + data.toString() + ";\n");
}

function preparePo(data) {
  let current_key;
  let result = {};
  data.toString().split(/\n/).forEach(function (line) {
    let t;
    if (t = line.match(/^msgid\s+"(.+)"\s*$/)) {
      current_key = t[1];
    }
    if (t = line.match(/^msgstr\s+"(.+)"\s*$/)) {
      result[current_key] = t[1];
    }
  });
  return Buffer.from("export default " + JSON.stringify(result, null, 2) + ";\n");
}

module.exports = buildTransform();
