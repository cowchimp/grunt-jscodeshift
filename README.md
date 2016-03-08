# grunt-jscodeshift

> Grunt task to run codemods using jscodeshift

## Common Usage

[jscodeshift](https://github.com/facebook/jscodeshift) is a tool for running codemods over multiple js files in parallel, which is great for refactoring large codebases. Read more about it [here](https://github.com/sejoker/awesome-jscodeshift).  
`grunt-jscodeshift` is a simple [Grunt](http://gruntjs.com) task that wraps the jscodeshift runner and lets you execute transformations as part of your Grunt workflow.

## Example (somewhat contrived)

Original source code file
`code.js`

```js
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```

Transform file
`transform.js`

```js
module.exports = function transformer(file, api) {
  var j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .replaceWith(function(p) {
      return j.identifier(p.node.name.split('').reverse().join('')); })
    .toSource();
};
```

Transformed source code file 
`code.js`

```js
var gnidaeHym = tnemucod.rotceleSyreuq('h1');
gnidaeHym.tnetnoCtxet = 'Hello world!';
```

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jscodeshift --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jscodeshift');
```

## The "jscodeshift" task

```js
grunt.initConfig({
  "jscodeshift": {
    "some-target": {
      "options": {
        "transform": "./transform.js"
      },
      "src": ["src/**/*.js"]
    }
  },
});
```

Since jscodeshift is designed for code-modifications, it overwrites the source files it iterates over.  
If this is not your desired behavior, clone the files beforehand with [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy).

### Options

The `options` object is passed to `jscodeshift`. See the [jscodeshift documentation](https://github.com/facebook/jscodeshift#usage-cli) for all options.

#### options.transform
Type: `String`
Default value: `'./transform.js'`

Path to the transform file.

## Contributing
Feel free to open issues and send pull-requests.

## Running tests
Run `npm test`