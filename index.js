var handlebars = require('handlebars');
var through = require('through');

var filenamePattern = /\.(html|handlebars|hbs)$/;

var wrap = function (template) {
    return 'var templater = require("handlebars/runtime")["default"].template;' +
        'module.exports = templater(' + template + ');'
}

module.exports = function (file, options) {
    if (!options.filenamePattern) {
        options.filenamePattern = filenamePattern;
    }

    var regexp = new RegExp(options.filnamePattern);
    if (!regexp.test(file)) return through();

    var input = '';
    var write = function (buffer) {
        input += buffer;
    };

    var end = function () {
        this.queue(wrap(handlebars.precompile(input)));
        this.queue(null);
    };

    return through(write, end);

};
