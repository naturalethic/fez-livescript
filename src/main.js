var xtend      = require("xtend"),
    Promise    = require("bluebird"),
    LiveScript = require("LiveScript");

module.exports = function(options) {
  options = xtend({
    separator: "\n"
  }, options);

  return function livescript(inputs) {
    return Promise.all(inputs.asBuffers()).then(function(buffers) {
      return buffers.map(function(b) { return LiveScript.compile(b.toString()); }).join(options.separator);
    });
  };
};
