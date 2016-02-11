
module.exports = function normalizeDeco(decoFn) {
  return function normalizedDecoWrapper() {
    var args;
    var length;
    var i;
    if(typeof arguments[0] === "function") {
      return decoFn(arguments[0])
    } else {
      args = [];
      length = arguments.length;
      for(i = 0; i < length; i++) {
        args.push(arguments[i]);
      }

      return function(Target) {
        return decoFn.apply(null, [Target].concat(args));
      };
    }
  };
}
