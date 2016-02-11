const normalizeDeco = require("./index");

describe("normalizeDecorator", () => {
  it("should allow the target class to be passed directly to the decorator (@deco class)", () => {
    function TestClass() {}
    const testDeco = normalizeDeco((Target) => {
      if(Target !== TestClass) {
        throw new Error("Target class wasn't passed to decorator function");
      }
    });

    testDeco(TestClass);
  });

  it("should allow options to be passed to the decorator before passing the target class to the resulting function (@deco(options) class)", () => {
    function TestClass() {}
    const decoOptionsA = {a: "b"};
    const decoOptionsB = {c: "d"};
    const testDeco = normalizeDeco((Target, a, b) => {
      if(Target !== TestClass) {
        throw new Error("Target class wasn't passed to decorator function");
      }
      if(a !== decoOptionsA || b !== decoOptionsB) {
        throw new Error("Options not passed to decorator function");
      }
    });

    testDeco(decoOptionsA, decoOptionsB)(TestClass);
  });
});
