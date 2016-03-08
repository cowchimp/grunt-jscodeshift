module.exports = function transformer(file, api) {
  var j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .replaceWith(function(p) {
      return j.identifier(p.node.name.split('').reverse().join('')); })
    .toSource({ lineTerminator: '\n' });
};
