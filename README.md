# Normalize Deco

A utility function for normalizing the way <a href="https://github.com/wycats/javascript-decorators">es2016 decorator functions</a> receive their arguments.

## Usage
Wrap your decorator function in `normalizeDeco`.

The wrapper will determine whether or not your decorator is being called with or without options and handle them accordingly.

```javascript
import normalizeDeco from "normalize-deco";

const myDeco = normalizeDeco((Target, options) => {
  Target.someCoolFunctionality = { ... };
  return Target;
});

// both cases will work the same:
@myDeco // no options
class A {}

@myDeco({a: 1, b: 2}) // with options
class B {}
```

### Caveat
Decorators that require function options are not supported because there's no way to determine if the function is an option argument or the target class argument. For example:

```javascript
@myDeco(function() {}) // this will not work
class A {}
```
