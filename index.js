
module.exports = function normalizeDeco(decoFn) {
  return function normalizedDecoWrapper() {
    var length = arguments.length;
    var args;
    var i;
    if(length === 1 && typeof arguments[0] === "function") {
      return decoFn(arguments[0])
    } else {
      args = [];
      for(i = 0; i < length; i++) {
        args.push(arguments[i]);
      }

      return function(Target) {
        return decoFn.apply(null, [Target].concat(args));
      };
    }
  };
}
