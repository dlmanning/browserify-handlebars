var testTemplate = require('./templates/test.handlebars');
var testTemplate2 = require('./templates/test2.handlebars');

console.log(testTemplate({title: "Hello World", name: "David"}));
console.log(testTemplate2({name: "Tully"}));