var path = require('path');

var handlebars = require('handlebars');
var through = require('through');

var filenamePattern = /\.(html|handlebars|hbs)$/;

var ps = path.sep;

var runtimePath = path.resolve(require.resolve('handlebars')
                              ,'..' + ps + '..' + ps + 'dist' + ps + 'cjs' + ps + 'handlebars.runtime');

var wrap = function (template) {
  return 'var templater = require("' + runtimePath + '").default.template;' +
         'module.exports = templater(' + template + ');'
}

module.exports = function (file) {
  if (!filenamePattern.test(file)) return through();

  var input = '';
  var write = function (buffer) {
    input += buffer;
  }

  var end = function () {
    this.queue(wrap(handlebars.precompile(input)));
    this.queue(null);
  }

  return through(write, end);

}