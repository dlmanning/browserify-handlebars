#browserify-handlebars

A browserify transform for handlebar templates! Yay!

## How do I use it?

Install:

`npm install browserify-handlebars`

template.handlebars:

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
<p>Hello there, {{name}}</p>
</body>
</html>
```

Now do something like this:

```javascript
var aTemplateFunction = require('./template.handlebars');

var html = aTemplateFunction({title: "An instantiated template!", name: "David"});
```

That's all!

