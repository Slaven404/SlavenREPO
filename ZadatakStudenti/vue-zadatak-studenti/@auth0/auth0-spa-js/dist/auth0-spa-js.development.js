(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.createAuth0Client = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var check = function (it) {
      return it && it.Math == Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global_1 =
      // eslint-disable-next-line no-undef
      check(typeof globalThis == 'object' && globalThis) ||
      check(typeof window == 'object' && window) ||
      check(typeof self == 'object' && self) ||
      check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
      // eslint-disable-next-line no-new-func
      Function('return this')();

    var fails = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var descriptors = !fails(function () {
      return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
    });

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
    var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;

    var objectPropertyIsEnumerable = {
    	f: f
    };

    var createPropertyDescriptor = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var toString = {}.toString;

    var classofRaw = function (it) {
      return toString.call(it).slice(8, -1);
    };

    var split = ''.split;

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };

    // toObject with fallback for non-array-like ES3 strings



    var toIndexedObject = function (it) {
      return indexedObject(requireObjectCoercible(it));
    };

    var isObject = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var toPrimitive = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var hasOwnProperty = {}.hasOwnProperty;

    var has = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    var document$1 = global_1.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document$1) && isObject(document$1.createElement);

    var documentCreateElement = function (it) {
      return EXISTS ? document$1.createElement(it) : {};
    };

    // Thank's IE8 for his funny defineProperty
    var ie8DomDefine = !descriptors && !fails(function () {
      return Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () { return 7; }
      }).a != 7;
    });

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
    var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (ie8DomDefine) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) { /* empty */ }
      if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = {
    	f: f$1
    };

    var anObject = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      } return it;
    };

    var nativeDefineProperty = Object.defineProperty;

    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (ie8DomDefine) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var objectDefineProperty = {
    	f: f$2
    };

    var createNonEnumerableProperty = descriptors ? function (object, key, value) {
      return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var setGlobal = function (key, value) {
      try {
        createNonEnumerableProperty(global_1, key, value);
      } catch (error) {
        global_1[key] = value;
      } return value;
    };

    var SHARED = '__core-js_shared__';
    var store = global_1[SHARED] || setGlobal(SHARED, {});

    var sharedStore = store;

    var functionToString = Function.toString;

    // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
    if (typeof sharedStore.inspectSource != 'function') {
      sharedStore.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    var inspectSource = sharedStore.inspectSource;

    var WeakMap = global_1.WeakMap;

    var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

    var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.4',
      mode:  'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    });

    var id = 0;
    var postfix = Math.random();

    var uid = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };

    var keys = shared('keys');

    var sharedKey = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys = {};

    var WeakMap$1 = global_1.WeakMap;
    var set, get, has$1;

    var enforce = function (it) {
      return has$1(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
      return function (it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        } return state;
      };
    };

    if (nativeWeakMap) {
      var store$1 = new WeakMap$1();
      var wmget = store$1.get;
      var wmhas = store$1.has;
      var wmset = store$1.set;
      set = function (it, metadata) {
        wmset.call(store$1, it, metadata);
        return metadata;
      };
      get = function (it) {
        return wmget.call(store$1, it) || {};
      };
      has$1 = function (it) {
        return wmhas.call(store$1, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;
      set = function (it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function (it) {
        return has(it, STATE) ? it[STATE] : {};
      };
      has$1 = function (it) {
        return has(it, STATE);
      };
    }

    var internalState = {
      set: set,
      get: get,
      has: has$1,
      enforce: enforce,
      getterFor: getterFor
    };

    var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
      if (O === global_1) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;
      else createNonEnumerableProperty(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
    });

    var path = global_1;

    var aFunction = function (variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    var getBuiltIn = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
        : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
    };

    var ceil = Math.ceil;
    var floor = Math.floor;

    // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger
    var toInteger = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };

    var min = Math.min;

    // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength
    var toLength = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var max = Math.max;
    var min$1 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var arrayIncludes = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };

    var indexOf = arrayIncludes.indexOf;


    var objectKeysInternal = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (has(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ];

    var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys$1);
    };

    var objectGetOwnPropertyNames = {
    	f: f$3
    };

    var f$4 = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = {
    	f: f$4
    };

    // all object keys, includes non-enumerable and symbols
    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = objectDefineProperty.f;
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };

    var replacement = /#|\.prototype\./;

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true
        : value == NATIVE ? false
        : typeof detection == 'function' ? fails(detection)
        : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';

    var isForced_1 = isForced;

    var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */
    var _export = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global_1;
      } else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global_1[TARGET] || {}).prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        // extend global
        redefine(target, key, sourceProperty, options);
      }
    };

    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });

    var useSymbolAsUid = nativeSymbol
      // eslint-disable-next-line no-undef
      && !Symbol.sham
      // eslint-disable-next-line no-undef
      && typeof Symbol.iterator == 'symbol';

    var WellKnownSymbolsStore = shared('wks');
    var Symbol$1 = global_1.Symbol;
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

    var wellKnownSymbol = function (name) {
      if (!has(WellKnownSymbolsStore, name)) {
        if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      } return WellKnownSymbolsStore[name];
    };

    var MATCH = wellKnownSymbol('match');

    // `IsRegExp` abstract operation
    // https://tc39.github.io/ecma262/#sec-isregexp
    var isRegexp = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
    };

    var notARegexp = function (it) {
      if (isRegexp(it)) {
        throw TypeError("The method doesn't accept regular expressions");
      } return it;
    };

    var MATCH$1 = wellKnownSymbol('match');

    var correctIsRegexpLogic = function (METHOD_NAME) {
      var regexp = /./;
      try {
        '/./'[METHOD_NAME](regexp);
      } catch (e) {
        try {
          regexp[MATCH$1] = false;
          return '/./'[METHOD_NAME](regexp);
        } catch (f) { /* empty */ }
      } return false;
    };

    var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;






    var nativeStartsWith = ''.startsWith;
    var min$2 = Math.min;

    var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
    // https://github.com/zloirock/core-js/pull/702
    var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
      var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'startsWith');
      return descriptor && !descriptor.writable;
    }();

    // `String.prototype.startsWith` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.startswith
    _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      startsWith: function startsWith(searchString /* , position = 0 */) {
        var that = String(requireObjectCoercible(this));
        notARegexp(searchString);
        var index = toLength(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return nativeStartsWith
          ? nativeStartsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search;
      }
    });

    var aFunction$1 = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      } return it;
    };

    // optional / simple context binding
    var functionBindContext = function (fn, that, length) {
      aFunction$1(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 0: return function () {
          return fn.call(that);
        };
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var call = Function.call;

    var entryUnbind = function (CONSTRUCTOR, METHOD, length) {
      return functionBindContext(call, global_1[CONSTRUCTOR].prototype[METHOD], length);
    };

    var startsWith = entryUnbind('String', 'startsWith');

    // `String.prototype.{ codePointAt, at }` methods implementation
    var createMethod$1 = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size
          || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
            ? CONVERT_TO_STRING ? S.charAt(position) : first
            : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    var stringMultibyte = {
      // `String.prototype.codePointAt` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod$1(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod$1(true)
    };

    // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject
    var toObject = function (argument) {
      return Object(requireObjectCoercible(argument));
    };

    var correctPrototypeGetter = !fails(function () {
      function F() { /* empty */ }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });

    var IE_PROTO = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype;

    // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof
    var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectPrototype : null;
    };

    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    var returnThis = function () { return this; };

    // `%IteratorPrototype%` object
    // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    if ([].keys) {
      arrayIterator = [].keys();
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    if (IteratorPrototype == undefined) IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    if ( !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    }

    var iteratorsCore = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };

    // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys
    var objectKeys = Object.keys || function keys(O) {
      return objectKeysInternal(O, enumBugKeys);
    };

    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
      return O;
    };

    var html = getBuiltIn('document', 'documentElement');

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO$1 = sharedKey('IE_PROTO');

    var EmptyConstructor = function () { /* empty */ };

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak
      return temp;
    };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe);
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    };

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument;
    var NullProtoObject = function () {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) { /* ignore */ }
      NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };

    hiddenKeys[IE_PROTO$1] = true;

    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    var objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
      } else result = NullProtoObject();
      return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

    var defineProperty = objectDefineProperty.f;



    var TO_STRING_TAG = wellKnownSymbol('toStringTag');

    var setToStringTag = function (it, TAG, STATIC) {
      if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
        defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
      }
    };

    var iterators = {};

    var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





    var returnThis$1 = function () { return this; };

    var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
      iterators[TO_STRING_TAG] = returnThis$1;
      return IteratorConstructor;
    };

    var aPossiblePrototype = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      } return it;
    };

    // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) { /* empty */ }
      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    }() : undefined);

    var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$1 = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis$2 = function () { return this; };

    var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
          case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
          case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
        } return function () { return new IteratorConstructor(this); };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR$1]
        || IterablePrototype['@@iterator']
        || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
          if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
            if (objectSetPrototypeOf) {
              objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
            } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
        }
      }

      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return nativeIterator.call(this); };
      }

      // define iterator
      if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
      }
      iterators[NAME] = defaultIterator;

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
      }

      return methods;
    };

    var charAt = stringMultibyte.charAt;



    var STRING_ITERATOR = 'String Iterator';
    var setInternalState = internalState.set;
    var getInternalState = internalState.getterFor(STRING_ITERATOR);

    // `String.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
      });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return { value: undefined, done: true };
      point = charAt(string, index);
      state.index += point.length;
      return { value: point, done: false };
    });

    // call something on iterator step with safe closing on error
    var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch (error) {
        var returnMethod = iterator['return'];
        if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
        throw error;
      }
    };

    var ITERATOR$2 = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype;

    // check on default Array iterator
    var isArrayIteratorMethod = function (it) {
      return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
    };

    var createProperty = function (object, key, value) {
      var propertyKey = toPrimitive(key);
      if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
      else object[propertyKey] = value;
    };

    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
    var test = {};

    test[TO_STRING_TAG$1] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (error) { /* empty */ }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof = toStringTagSupport ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
        // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O)
        // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };

    var ITERATOR$3 = wellKnownSymbol('iterator');

    var getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR$3]
        || it['@@iterator']
        || iterators[classof(it)];
    };

    // `Array.from` method implementation
    // https://tc39.github.io/ecma262/#sec-array.from
    var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
      // if the target is not iterable or it's an array with the default iterator - use a simple case
      if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();
        for (;!(step = next.call(iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = toLength(O.length);
        result = new C(length);
        for (;length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };

    var ITERATOR$4 = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function () {
          return { done: !!called++ };
        },
        'return': function () {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR$4] = function () {
        return this;
      };
      // eslint-disable-next-line no-throw-literal
      Array.from(iteratorWithReturn, function () { throw 2; });
    } catch (error) { /* empty */ }

    var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR$4] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT;
    };

    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
      Array.from(iterable);
    });

    // `Array.from` method
    // https://tc39.github.io/ecma262/#sec-array.from
    _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
      from: arrayFrom
    });

    var from_1 = path.Array.from;

    var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

    var defineProperty$1 = objectDefineProperty.f;





    var Int8Array$1 = global_1.Int8Array;
    var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
    var Uint8ClampedArray = global_1.Uint8ClampedArray;
    var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
    var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
    var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
    var ObjectPrototype$1 = Object.prototype;
    var isPrototypeOf = ObjectPrototype$1.isPrototypeOf;

    var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
    var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
    // Fixing native typed arrays in Opera Presto crashes the browser, see #595
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
    var TYPED_ARRAY_TAG_REQIRED = false;
    var NAME;

    var TypedArrayConstructorsList = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    };

    var isView = function isView(it) {
      var klass = classof(it);
      return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
    };

    var isTypedArray = function (it) {
      return isObject(it) && has(TypedArrayConstructorsList, classof(it));
    };

    var aTypedArray = function (it) {
      if (isTypedArray(it)) return it;
      throw TypeError('Target is not a typed array');
    };

    var aTypedArrayConstructor = function (C) {
      if (objectSetPrototypeOf) {
        if (isPrototypeOf.call(TypedArray, C)) return C;
      } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
          return C;
        }
      } throw TypeError('Target is not a typed array constructor');
    };

    var exportTypedArrayMethod = function (KEY, property, forced) {
      if (!descriptors) return;
      if (forced) for (var ARRAY in TypedArrayConstructorsList) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
          delete TypedArrayConstructor.prototype[KEY];
        }
      }
      if (!TypedArrayPrototype[KEY] || forced) {
        redefine(TypedArrayPrototype, KEY, forced ? property
          : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
      }
    };

    var exportTypedArrayStaticMethod = function (KEY, property, forced) {
      var ARRAY, TypedArrayConstructor;
      if (!descriptors) return;
      if (objectSetPrototypeOf) {
        if (forced) for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global_1[ARRAY];
          if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
            delete TypedArrayConstructor[KEY];
          }
        }
        if (!TypedArray[KEY] || forced) {
          // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
          try {
            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array$1[KEY] || property);
          } catch (error) { /* empty */ }
        } else return;
      }
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
          redefine(TypedArrayConstructor, KEY, property);
        }
      }
    };

    for (NAME in TypedArrayConstructorsList) {
      if (!global_1[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
    }

    // WebKit bug - typed arrays constructors prototype is Object.prototype
    if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
      // eslint-disable-next-line no-shadow
      TypedArray = function TypedArray() {
        throw TypeError('Incorrect invocation');
      };
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
      }
    }

    if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$1) {
      TypedArrayPrototype = TypedArray.prototype;
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
      }
    }

    // WebKit bug - one more object in Uint8ClampedArray prototype chain
    if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
      objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
    }

    if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$3)) {
      TYPED_ARRAY_TAG_REQIRED = true;
      defineProperty$1(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
        return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
      } });
      for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
        createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
      }
    }

    var arrayBufferViewCore = {
      NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
      TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
      aTypedArray: aTypedArray,
      aTypedArrayConstructor: aTypedArrayConstructor,
      exportTypedArrayMethod: exportTypedArrayMethod,
      exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
      isView: isView,
      isTypedArray: isTypedArray,
      TypedArray: TypedArray,
      TypedArrayPrototype: TypedArrayPrototype
    };

    var SPECIES = wellKnownSymbol('species');

    // `SpeciesConstructor` abstract operation
    // https://tc39.github.io/ecma262/#sec-speciesconstructor
    var speciesConstructor = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction$1(S);
    };

    var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
    var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
    var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
    var $slice = [].slice;

    var FORCED = fails(function () {
      // eslint-disable-next-line no-undef
      new Int8Array(1).slice();
    });

    // `%TypedArray%.prototype.slice` method
    // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
    exportTypedArrayMethod$1('slice', function slice(start, end) {
      var list = $slice.call(aTypedArray$1(this), start, end);
      var C = speciesConstructor(this, this.constructor);
      var index = 0;
      var length = list.length;
      var result = new (aTypedArrayConstructor$1(C))(length);
      while (length > index) result[index] = list[index++];
      return result;
    }, FORCED);

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype$1 = Array.prototype;

    // Array.prototype[@@unscopables]
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
      objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
      });
    }

    // add a key to Array.prototype[@@unscopables]
    var addToUnscopables = function (key) {
      ArrayPrototype$1[UNSCOPABLES][key] = true;
    };

    var defineProperty$2 = Object.defineProperty;
    var cache = {};

    var thrower = function (it) { throw it; };

    var arrayMethodUsesToLength = function (METHOD_NAME, options) {
      if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
      if (!options) options = {};
      var method = [][METHOD_NAME];
      var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
      var argument0 = has(options, 0) ? options[0] : thrower;
      var argument1 = has(options, 1) ? options[1] : undefined;

      return cache[METHOD_NAME] = !!method && !fails(function () {
        if (ACCESSORS && !descriptors) return true;
        var O = { length: -1 };

        if (ACCESSORS) defineProperty$2(O, 1, { enumerable: true, get: thrower });
        else O[1] = 1;

        method.call(O, argument0, argument1);
      });
    };

    var $includes = arrayIncludes.includes;



    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    _export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('includes');

    var includes = entryUnbind('Array', 'includes');

    // `String.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.includes
    _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~String(requireObjectCoercible(this))
          .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var includes$1 = entryUnbind('String', 'includes');

    var freezing = !fails(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });

    var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;



    var METADATA = uid('meta');
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var setMetadata = function (it) {
      defineProperty(it, METADATA, { value: {
        objectID: 'O' + ++id, // object ID
        weakData: {}          // weak collections IDs
      } });
    };

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
      // return object ID
      } return it[METADATA].objectID;
    };

    var getWeakData = function (it, create) {
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
      // return the store of weak collections IDs
      } return it[METADATA].weakData;
    };

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
      return it;
    };

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };

    hiddenKeys[METADATA] = true;
    });
    var internalMetadata_1 = internalMetadata.REQUIRED;
    var internalMetadata_2 = internalMetadata.fastKey;
    var internalMetadata_3 = internalMetadata.getWeakData;
    var internalMetadata_4 = internalMetadata.onFreeze;

    var iterate_1 = createCommonjsModule(function (module) {
    var Result = function (stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
      var iterator, iterFn, index, length, result, next, step;

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = AS_ENTRIES
              ? boundFunction(anObject(step = iterable[index])[0], step[1])
              : boundFunction(iterable[index]);
            if (result && result instanceof Result) return result;
          } return new Result(false);
        }
        iterator = iterFn.call(iterable);
      }

      next = iterator.next;
      while (!(step = next.call(iterator)).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
        if (typeof result == 'object' && result && result instanceof Result) return result;
      } return new Result(false);
    };

    iterate.stop = function (result) {
      return new Result(true, result);
    };
    });

    var anInstance = function (it, Constructor, name) {
      if (!(it instanceof Constructor)) {
        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
      } return it;
    };

    // makes subclassing work correct for wrapped built-ins
    var inheritIfRequired = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        objectSetPrototypeOf &&
        // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' &&
        NewTarget !== Wrapper &&
        isObject(NewTargetPrototype = NewTarget.prototype) &&
        NewTargetPrototype !== Wrapper.prototype
      ) objectSetPrototypeOf($this, NewTargetPrototype);
      return $this;
    };

    var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
      var ADDER = IS_MAP ? 'set' : 'add';
      var NativeConstructor = global_1[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};

      var fixMethod = function (KEY) {
        var nativeMethod = NativePrototype[KEY];
        redefine(NativePrototype, KEY,
          KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          }
        );
      };

      // eslint-disable-next-line max-len
      if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      })))) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        internalMetadata.REQUIRED = true;
      } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
      }

      exported[CONSTRUCTOR_NAME] = Constructor;
      _export({ global: true, forced: Constructor != NativeConstructor }, exported);

      setToStringTag(Constructor, CONSTRUCTOR_NAME);

      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

      return Constructor;
    };

    var redefineAll = function (target, src, options) {
      for (var key in src) redefine(target, key, src[key], options);
      return target;
    };

    var SPECIES$1 = wellKnownSymbol('species');

    var setSpecies = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = objectDefineProperty.f;

      if (descriptors && Constructor && !Constructor[SPECIES$1]) {
        defineProperty(Constructor, SPECIES$1, {
          configurable: true,
          get: function () { return this; }
        });
      }
    };

    var defineProperty$3 = objectDefineProperty.f;








    var fastKey = internalMetadata.fastKey;


    var setInternalState$1 = internalState.set;
    var internalStateGetterFor = internalState.getterFor;

    var collectionStrong = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME);
          setInternalState$1(that, {
            type: CONSTRUCTOR_NAME,
            index: objectCreate(null),
            first: undefined,
            last: undefined,
            size: 0
          });
          if (!descriptors) that.size = 0;
          if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
        });

        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

        var define = function (that, key, value) {
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          var previous, index;
          // change existing entry
          if (entry) {
            entry.value = value;
          // create new entry
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key: key,
              value: value,
              previous: previous = state.last,
              next: undefined,
              removed: false
            };
            if (!state.first) state.first = entry;
            if (previous) previous.next = entry;
            if (descriptors) state.size++;
            else that.size++;
            // add to index
            if (index !== 'F') state.index[index] = entry;
          } return that;
        };

        var getEntry = function (that, key) {
          var state = getInternalState(that);
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== 'F') return state.index[index];
          // frozen object case
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key) return entry;
          }
        };

        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            var that = this;
            var state = getInternalState(that);
            var data = state.index;
            var entry = state.first;
            while (entry) {
              entry.removed = true;
              if (entry.previous) entry.previous = entry.previous.next = undefined;
              delete data[entry.index];
              entry = entry.next;
            }
            state.first = state.last = undefined;
            if (descriptors) state.size = 0;
            else that.size = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function (key) {
            var that = this;
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev) prev.next = next;
              if (next) next.previous = prev;
              if (state.first == entry) state.first = next;
              if (state.last == entry) state.last = prev;
              if (descriptors) state.size--;
              else that.size--;
            } return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /* , that = undefined */) {
            var state = getInternalState(this);
            var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this);
              // revert to the last existing entry
              while (entry && entry.removed) entry = entry.previous;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });

        redefineAll(C.prototype, IS_MAP ? {
          // 23.1.3.6 Map.prototype.get(key)
          get: function get(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          // 23.1.3.9 Map.prototype.set(key, value)
          set: function set(key, value) {
            return define(this, key === 0 ? 0 : key, value);
          }
        } : {
          // 23.2.3.1 Set.prototype.add(value)
          add: function add(value) {
            return define(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (descriptors) defineProperty$3(C.prototype, 'size', {
          get: function () {
            return getInternalState(this).size;
          }
        });
        return C;
      },
      setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
          setInternalState$1(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind: kind,
            last: undefined
          });
        }, function () {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last;
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
          // get next entry
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            // or finish the iteration
            state.target = undefined;
            return { value: undefined, done: true };
          }
          // return step by kind
          if (kind == 'keys') return { value: entry.key, done: false };
          if (kind == 'values') return { value: entry.value, done: false };
          return { value: [entry.key, entry.value], done: false };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(CONSTRUCTOR_NAME);
      }
    };

    // `Set` constructor
    // https://tc39.github.io/ecma262/#sec-set-objects
    var es_set = collection('Set', function (init) {
      return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
    }, collectionStrong);

    // `Object.prototype.toString` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    var objectToString = toStringTagSupport ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };

    // `Object.prototype.toString` method
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    if (!toStringTagSupport) {
      redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
    }

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState$2 = internalState.set;
    var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

    // `Array.prototype.entries` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.github.io/ecma262/#sec-createarrayiterator
    var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState$2(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0,                          // next index
        kind: kind                         // kind
      });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState$1(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = undefined;
        return { value: undefined, done: true };
      }
      if (kind == 'keys') return { value: index, done: false };
      if (kind == 'values') return { value: target[index], done: false };
      return { value: [index, target[index]], done: false };
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
    iterators.Arguments = iterators.Array;

    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

    var ITERATOR$5 = wellKnownSymbol('iterator');
    var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
    var ArrayValues = es_array_iterator.values;

    for (var COLLECTION_NAME in domIterables) {
      var Collection = global_1[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype;
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
          createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR$5] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG$4]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
        }
        if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
          }
        }
      }
    }

    var set$1 = path.Set;

    /**
     * @this {Promise}
     */
    function finallyConstructor(callback) {
      var constructor = this.constructor;
      return this.then(
        function(value) {
          // @ts-ignore
          return constructor.resolve(callback()).then(function() {
            return value;
          });
        },
        function(reason) {
          // @ts-ignore
          return constructor.resolve(callback()).then(function() {
            // @ts-ignore
            return constructor.reject(reason);
          });
        }
      );
    }

    // Store setTimeout reference so promise-polyfill will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var setTimeoutFunc = setTimeout;

    function isArray(x) {
      return Boolean(x && typeof x.length !== 'undefined');
    }

    function noop() {}

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
      return function() {
        fn.apply(thisArg, arguments);
      };
    }

    /**
     * @constructor
     * @param {Function} fn
     */
    function Promise$1(fn) {
      if (!(this instanceof Promise$1))
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function') throw new TypeError('not a function');
      /** @type {!number} */
      this._state = 0;
      /** @type {!boolean} */
      this._handled = false;
      /** @type {Promise|undefined} */
      this._value = undefined;
      /** @type {!Array<!Function>} */
      this._deferreds = [];

      doResolve(fn, this);
    }

    function handle(self, deferred) {
      while (self._state === 3) {
        self = self._value;
      }
      if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
      }
      self._handled = true;
      Promise$1._immediateFn(function() {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
          return;
        }
        var ret;
        try {
          ret = cb(self._value);
        } catch (e) {
          reject(deferred.promise, e);
          return;
        }
        resolve(deferred.promise, ret);
      });
    }

    function resolve(self, newValue) {
      try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (
          newValue &&
          (typeof newValue === 'object' || typeof newValue === 'function')
        ) {
          var then = newValue.then;
          if (newValue instanceof Promise$1) {
            self._state = 3;
            self._value = newValue;
            finale(self);
            return;
          } else if (typeof then === 'function') {
            doResolve(bind(then, newValue), self);
            return;
          }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
      } catch (e) {
        reject(self, e);
      }
    }

    function reject(self, newValue) {
      self._state = 2;
      self._value = newValue;
      finale(self);
    }

    function finale(self) {
      if (self._state === 2 && self._deferreds.length === 0) {
        Promise$1._immediateFn(function() {
          if (!self._handled) {
            Promise$1._unhandledRejectionFn(self._value);
          }
        });
      }

      for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
      }
      self._deferreds = null;
    }

    /**
     * @constructor
     */
    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
      var done = false;
      try {
        fn(
          function(value) {
            if (done) return;
            done = true;
            resolve(self, value);
          },
          function(reason) {
            if (done) return;
            done = true;
            reject(self, reason);
          }
        );
      } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
      }
    }

    Promise$1.prototype['catch'] = function(onRejected) {
      return this.then(null, onRejected);
    };

    Promise$1.prototype.then = function(onFulfilled, onRejected) {
      // @ts-ignore
      var prom = new this.constructor(noop);

      handle(this, new Handler(onFulfilled, onRejected, prom));
      return prom;
    };

    Promise$1.prototype['finally'] = finallyConstructor;

    Promise$1.all = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray(arr)) {
          return reject(new TypeError('Promise.all accepts an array'));
        }

        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;

        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(
                  val,
                  function(val) {
                    res(i, val);
                  },
                  reject
                );
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }

        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };

    Promise$1.resolve = function(value) {
      if (value && typeof value === 'object' && value.constructor === Promise$1) {
        return value;
      }

      return new Promise$1(function(resolve) {
        resolve(value);
      });
    };

    Promise$1.reject = function(value) {
      return new Promise$1(function(resolve, reject) {
        reject(value);
      });
    };

    Promise$1.race = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray(arr)) {
          return reject(new TypeError('Promise.race accepts an array'));
        }

        for (var i = 0, len = arr.length; i < len; i++) {
          Promise$1.resolve(arr[i]).then(resolve, reject);
        }
      });
    };

    // Use polyfill for setImmediate for performance gains
    Promise$1._immediateFn =
      // @ts-ignore
      (typeof setImmediate === 'function' &&
        function(fn) {
          // @ts-ignore
          setImmediate(fn);
        }) ||
      function(fn) {
        setTimeoutFunc(fn, 0);
      };

    Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
      }
    };

    /** @suppress {undefinedVars} */
    var globalNS = (function() {
      // the only reliable means to get the global object is
      // `Function('return this')()`
      // However, this causes CSP violations in Chrome apps.
      if (typeof self !== 'undefined') {
        return self;
      }
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
      throw new Error('unable to locate global object');
    })();

    if (!('Promise' in globalNS)) {
      globalNS['Promise'] = Promise$1;
    } else if (!globalNS.Promise.prototype['finally']) {
      globalNS.Promise.prototype['finally'] = finallyConstructor;
    }

    (function(l){function m(){}function k(b,a){b=void 0===b?"utf-8":b;a=void 0===a?{fatal:!1}:a;if(-1==n.indexOf(b.toLowerCase()))throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('"+b+"') is invalid.");if(a.fatal)throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");}if(l.TextEncoder&&l.TextDecoder)return !1;var n=["utf-8","utf8","unicode-1-1-utf-8"];Object.defineProperty(m.prototype,"encoding",{value:"utf-8"});m.prototype.encode=function(b,
    a){a=void 0===a?{stream:!1}:a;if(a.stream)throw Error("Failed to encode: the 'stream' option is unsupported.");a=0;for(var g=b.length,f=0,c=Math.max(32,g+(g>>1)+7),e=new Uint8Array(c>>3<<3);a<g;){var d=b.charCodeAt(a++);if(55296<=d&&56319>=d){if(a<g){var h=b.charCodeAt(a);56320===(h&64512)&&(++a,d=((d&1023)<<10)+(h&1023)+65536);}if(55296<=d&&56319>=d)continue}f+4>e.length&&(c+=8,c*=1+a/b.length*2,c=c>>3<<3,h=new Uint8Array(c),h.set(e),e=h);if(0===(d&4294967168))e[f++]=d;else {if(0===(d&4294965248))e[f++]=
    d>>6&31|192;else if(0===(d&4294901760))e[f++]=d>>12&15|224,e[f++]=d>>6&63|128;else if(0===(d&4292870144))e[f++]=d>>18&7|240,e[f++]=d>>12&63|128,e[f++]=d>>6&63|128;else continue;e[f++]=d&63|128;}}return e.slice?e.slice(0,f):e.subarray(0,f)};Object.defineProperty(k.prototype,"encoding",{value:"utf-8"});Object.defineProperty(k.prototype,"fatal",{value:!1});Object.defineProperty(k.prototype,"ignoreBOM",{value:!1});k.prototype.decode=function(b,a){a=void 0===a?{stream:!1}:a;if(a.stream)throw Error("Failed to decode: the 'stream' option is unsupported.");
    b.buffer instanceof ArrayBuffer&&(b=b.buffer);b=new Uint8Array(b);a=0;for(var g=[],f=[];;){var c=a<b.length;if(!c||a&65536){f.push(String.fromCharCode.apply(null,g));if(!c)return f.join("");g=[];b=b.subarray(a);a=0;}c=b[a++];if(0===c)g.push(0);else if(0===(c&128))g.push(c);else if(192===(c&224)){var e=b[a++]&63;g.push((c&31)<<6|e);}else if(224===(c&240)){e=b[a++]&63;var d=b[a++]&63;g.push((c&31)<<12|e<<6|d);}else if(240===(c&248)){e=b[a++]&63;d=b[a++]&63;var h=b[a++]&63;c=(c&7)<<18|e<<12|d<<6|h;65535<
    c&&(c-=65536,g.push(c>>>10&1023|55296),c=56320|c&1023);g.push(c);}}};l.TextEncoder=m;l.TextDecoder=k;})("undefined"!==typeof window?window:"undefined"!==typeof commonjsGlobal?commonjsGlobal:commonjsGlobal);

    (function (factory) {
      
      factory();
    }((function () {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      var Emitter =
      /*#__PURE__*/
      function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          Object.defineProperty(this, 'listeners', {
            value: {},
            writable: true,
            configurable: true
          });
        }

        _createClass(Emitter, [{
          key: "addEventListener",
          value: function addEventListener(type, callback) {
            if (!(type in this.listeners)) {
              this.listeners[type] = [];
            }

            this.listeners[type].push(callback);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
              return;
            }

            var stack = this.listeners[type];

            for (var i = 0, l = stack.length; i < l; i++) {
              if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
              }
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            var _this = this;

            if (!(event.type in this.listeners)) {
              return;
            }

            var debounce = function debounce(callback) {
              setTimeout(function () {
                return callback.call(_this, event);
              });
            };

            var stack = this.listeners[event.type];

            for (var i = 0, l = stack.length; i < l; i++) {
              debounce(stack[i]);
            }

            return !event.defaultPrevented;
          }
        }]);

        return Emitter;
      }();

      var AbortSignal =
      /*#__PURE__*/
      function (_Emitter) {
        _inherits(AbortSignal, _Emitter);

        function AbortSignal() {
          var _this2;

          _classCallCheck(this, AbortSignal);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AbortSignal).call(this)); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
          // constructor has failed to run, then "this.listeners" will still be undefined and then we call
          // the parent constructor directly instead as a workaround. For general details, see babel bug:
          // https://github.com/babel/babel/issues/3041
          // This hack was added as a fix for the issue described here:
          // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

          if (!_this2.listeners) {
            Emitter.call(_assertThisInitialized(_this2));
          } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
          // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


          Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
            value: false,
            writable: true,
            configurable: true
          });
          Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
            value: null,
            writable: true,
            configurable: true
          });
          return _this2;
        }

        _createClass(AbortSignal, [{
          key: "toString",
          value: function toString() {
            return '[object AbortSignal]';
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            if (event.type === 'abort') {
              this.aborted = true;

              if (typeof this.onabort === 'function') {
                this.onabort.call(this, event);
              }
            }

            _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
          }
        }]);

        return AbortSignal;
      }(Emitter);
      var AbortController =
      /*#__PURE__*/
      function () {
        function AbortController() {
          _classCallCheck(this, AbortController);

          // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
          // we want Object.keys(new AbortController()) to be [] for compat with the native impl
          Object.defineProperty(this, 'signal', {
            value: new AbortSignal(),
            writable: true,
            configurable: true
          });
        }

        _createClass(AbortController, [{
          key: "abort",
          value: function abort() {
            var event;

            try {
              event = new Event('abort');
            } catch (e) {
              if (typeof document !== 'undefined') {
                if (!document.createEvent) {
                  // For Internet Explorer 8:
                  event = document.createEventObject();
                  event.type = 'abort';
                } else {
                  // For Internet Explorer 11:
                  event = document.createEvent('Event');
                  event.initEvent('abort', false, false);
                }
              } else {
                // Fallback where document isn't available:
                event = {
                  type: 'abort',
                  bubbles: false,
                  cancelable: false
                };
              }
            }

            this.signal.dispatchEvent(event);
          }
        }, {
          key: "toString",
          value: function toString() {
            return '[object AbortController]';
          }
        }]);

        return AbortController;
      }();

      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // These are necessary to make sure that we get correct output for:
        // Object.prototype.toString.call(new AbortController())
        AbortController.prototype[Symbol.toStringTag] = 'AbortController';
        AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
      }

      function polyfillNeeded(self) {
        if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
          console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
          return true;
        } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
        // defining window.Request, and this polyfill need to work on top of unfetch
        // so the below feature detection needs the !self.AbortController part.
        // The Request.prototype check is also needed because Safari versions 11.1.2
        // up to and including 12.1.x has a window.AbortController present but still
        // does NOT correctly implement abortable fetch:
        // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


        return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
      }

      (function (self) {

        if (!polyfillNeeded(self)) {
          return;
        }

        self.AbortController = AbortController;
        self.AbortSignal = AbortSignal;
      })(typeof self !== 'undefined' ? self : commonjsGlobal);

    })));

    var processLock = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProcessLocking = /** @class */ (function () {
        function ProcessLocking() {
            var _this = this;
            this.locked = new Map();
            this.addToLocked = function (key, toAdd) {
                var callbacks = _this.locked.get(key);
                if (callbacks === undefined) {
                    if (toAdd === undefined) {
                        _this.locked.set(key, []);
                    }
                    else {
                        _this.locked.set(key, [toAdd]);
                    }
                }
                else {
                    if (toAdd !== undefined) {
                        callbacks.unshift(toAdd);
                        _this.locked.set(key, callbacks);
                    }
                }
            };
            this.isLocked = function (key) {
                return _this.locked.has(key);
            };
            this.lock = function (key) {
                return new Promise(function (resolve, reject) {
                    if (_this.isLocked(key)) {
                        _this.addToLocked(key, resolve);
                    }
                    else {
                        _this.addToLocked(key);
                        resolve();
                    }
                });
            };
            this.unlock = function (key) {
                var callbacks = _this.locked.get(key);
                if (callbacks === undefined || callbacks.length === 0) {
                    _this.locked.delete(key);
                    return;
                }
                var toCall = callbacks.pop();
                _this.locked.set(key, callbacks);
                if (toCall !== undefined) {
                    setTimeout(toCall, 0);
                }
            };
        }
        ProcessLocking.getInstance = function () {
            if (ProcessLocking.instance === undefined) {
                ProcessLocking.instance = new ProcessLocking();
            }
            return ProcessLocking.instance;
        };
        return ProcessLocking;
    }());
    function getLock() {
        return ProcessLocking.getInstance();
    }
    exports.default = getLock;
    });

    unwrapExports(processLock);

    var browserTabsLock = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });

    /**
     * @author: SuperTokens (https://github.com/supertokens)
     * This library was created as a part of a larger project, SuperTokens(https://supertokens.io) - the best session management solution.
     * You can also check out our other projects on https://github.com/supertokens
     *
     * To contribute to this package visit https://github.com/supertokens/browser-tabs-lock
     * If you face any problems you can file an issue on https://github.com/supertokens/browser-tabs-lock/issues
     *
     * If you have any questions or if you just want to say hi visit https://supertokens.io/discord
     */
    /**
     * @constant
     * @type {string}
     * @default
     * @description All the locks taken by this package will have this as prefix
    */
    var LOCK_STORAGE_KEY = 'browser-tabs-lock-key';
    /**
     * @function delay
     * @param {number} milliseconds - How long the delay should be in terms of milliseconds
     * @returns {Promise<void>}
     */
    function delay(milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    }
    /**
     * @function generateRandomString
     * @params {number} length - How long the random string should be
     * @returns {string}
     * @description returns random string whose length is equal to the length passed as parameter
     */
    function generateRandomString(length) {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var randomstring = '';
        for (var i = 0; i < length; i++) {
            var INDEX = Math.floor(Math.random() * CHARS.length);
            randomstring += CHARS[INDEX];
        }
        return randomstring;
    }
    /**
     * @function getLockId
     * @returns {string}
     * @description Generates an id which will be unique for the browser tab
     */
    function getLockId() {
        return Date.now().toString() + generateRandomString(15);
    }
    var SuperTokensLock = /** @class */ (function () {
        function SuperTokensLock() {
            this.acquiredIatSet = new Set();
            this.id = getLockId();
            this.acquireLock = this.acquireLock.bind(this);
            this.releaseLock = this.releaseLock.bind(this);
            this.releaseLock__private__ = this.releaseLock__private__.bind(this);
            this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this);
            this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this);
            if (SuperTokensLock.waiters === undefined) {
                SuperTokensLock.waiters = [];
            }
        }
        /**
         * @async
         * @memberOf Lock
         * @function acquireLock
         * @param {string} lockKey - Key for which the lock is being acquired
         * @param {number} [timeout=5000] - Maximum time for which the function will wait to acquire the lock
         * @returns {Promise<boolean>}
         * @description Will return true if lock is being acquired, else false.
         *              Also the lock can be acquired for maximum 10 secs
         */
        SuperTokensLock.prototype.acquireLock = function (lockKey, timeout) {
            if (timeout === void 0) { timeout = 5000; }
            return __awaiter(this, void 0, void 0, function () {
                var iat, MAX_TIME, STORAGE_KEY, STORAGE, lockObj, TIMEOUT_KEY, lockObjPostDelay;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            iat = Date.now() + generateRandomString(4);
                            MAX_TIME = Date.now() + timeout;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            STORAGE = window.localStorage;
                            _a.label = 1;
                        case 1:
                            if (!(Date.now() < MAX_TIME)) return [3 /*break*/, 8];
                            return [4 /*yield*/, delay(30)];
                        case 2:
                            _a.sent();
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (!(lockObj === null)) return [3 /*break*/, 5];
                            TIMEOUT_KEY = this.id + "-" + lockKey + "-" + iat;
                            // there is a problem if setItem happens at the exact same time for 2 different processes.. so we add some random delay here.
                            return [4 /*yield*/, delay(Math.floor(Math.random() * 25))];
                        case 3:
                            // there is a problem if setItem happens at the exact same time for 2 different processes.. so we add some random delay here.
                            _a.sent();
                            STORAGE.setItem(STORAGE_KEY, JSON.stringify({
                                id: this.id,
                                iat: iat,
                                timeoutKey: TIMEOUT_KEY,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            }));
                            return [4 /*yield*/, delay(30)];
                        case 4:
                            _a.sent(); // this is to prevent race conditions. This time must be more than the time it takes for storage.setItem
                            lockObjPostDelay = STORAGE.getItem(STORAGE_KEY);
                            if (lockObjPostDelay !== null) {
                                lockObjPostDelay = JSON.parse(lockObjPostDelay);
                                if (lockObjPostDelay.id === this.id && lockObjPostDelay.iat === iat) {
                                    this.acquiredIatSet.add(iat);
                                    this.refreshLockWhileAcquired(STORAGE_KEY, iat);
                                    return [2 /*return*/, true];
                                }
                            }
                            return [3 /*break*/, 7];
                        case 5:
                            SuperTokensLock.lockCorrector();
                            return [4 /*yield*/, this.waitForSomethingToChange(MAX_TIME)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            iat = Date.now() + generateRandomString(4);
                            return [3 /*break*/, 1];
                        case 8: return [2 /*return*/, false];
                    }
                });
            });
        };
        SuperTokensLock.prototype.refreshLockWhileAcquired = function (storageKey, iat) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var STORAGE, lockObj;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, processLock.default().lock(iat)];
                                case 1:
                                    _a.sent();
                                    if (!this.acquiredIatSet.has(iat)) {
                                        processLock.default().unlock(iat);
                                        return [2 /*return*/];
                                    }
                                    STORAGE = window.localStorage;
                                    lockObj = STORAGE.getItem(storageKey);
                                    if (lockObj !== null) {
                                        lockObj = JSON.parse(lockObj);
                                        lockObj.timeRefreshed = Date.now();
                                        STORAGE.setItem(storageKey, JSON.stringify(lockObj));
                                        processLock.default().unlock(iat);
                                    }
                                    else {
                                        processLock.default().unlock(iat);
                                        return [2 /*return*/];
                                    }
                                    this.refreshLockWhileAcquired(storageKey, iat);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000);
                    return [2 /*return*/];
                });
            });
        };
        SuperTokensLock.prototype.waitForSomethingToChange = function (MAX_TIME) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                var resolvedCalled = false;
                                var startedAt = Date.now();
                                var MIN_TIME_TO_WAIT = 50; // ms
                                var removedListeners = false;
                                function stopWaiting() {
                                    if (!removedListeners) {
                                        window.removeEventListener('storage', stopWaiting);
                                        SuperTokensLock.removeFromWaiting(stopWaiting);
                                        clearTimeout(timeOutId);
                                        removedListeners = true;
                                    }
                                    if (!resolvedCalled) {
                                        resolvedCalled = true;
                                        var timeToWait = MIN_TIME_TO_WAIT - (Date.now() - startedAt);
                                        if (timeToWait > 0) {
                                            setTimeout(resolve, timeToWait);
                                        }
                                        else {
                                            resolve();
                                        }
                                    }
                                }
                                window.addEventListener('storage', stopWaiting);
                                SuperTokensLock.addToWaiting(stopWaiting);
                                var timeOutId = setTimeout(stopWaiting, Math.max(0, MAX_TIME - Date.now()));
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SuperTokensLock.addToWaiting = function (func) {
            this.removeFromWaiting(func);
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            SuperTokensLock.waiters.push(func);
        };
        SuperTokensLock.removeFromWaiting = function (func) {
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            SuperTokensLock.waiters = SuperTokensLock.waiters.filter(function (i) { return i !== func; });
        };
        SuperTokensLock.notifyWaiters = function () {
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            var waiters = SuperTokensLock.waiters.slice(); // so that if Lock.waiters is changed it's ok.
            waiters.forEach(function (i) { return i(); });
        };
        /**
         * @function releaseLock
         * @memberOf Lock
         * @param {string} lockKey - Key for which lock is being released
         * @returns {void}
         * @description Release a lock.
         */
        SuperTokensLock.prototype.releaseLock = function (lockKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.releaseLock__private__(lockKey)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @function releaseLock
         * @memberOf Lock
         * @param {string} lockKey - Key for which lock is being released
         * @returns {void}
         * @description Release a lock.
         */
        SuperTokensLock.prototype.releaseLock__private__ = function (lockKey) {
            return __awaiter(this, void 0, void 0, function () {
                var STORAGE, STORAGE_KEY, lockObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            STORAGE = window.localStorage;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (lockObj === null) {
                                return [2 /*return*/];
                            }
                            lockObj = JSON.parse(lockObj);
                            if (!(lockObj.id === this.id)) return [3 /*break*/, 2];
                            return [4 /*yield*/, processLock.default().lock(lockObj.iat)];
                        case 1:
                            _a.sent();
                            this.acquiredIatSet.delete(lockObj.iat);
                            STORAGE.removeItem(STORAGE_KEY);
                            processLock.default().unlock(lockObj.iat);
                            SuperTokensLock.notifyWaiters();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @function lockCorrector
         * @returns {void}
         * @description If a lock is acquired by a tab and the tab is closed before the lock is
         *              released, this function will release those locks
         */
        SuperTokensLock.lockCorrector = function () {
            var MIN_ALLOWED_TIME = Date.now() - 5000;
            var STORAGE = window.localStorage;
            var KEYS = Object.keys(STORAGE);
            var notifyWaiters = false;
            for (var i = 0; i < KEYS.length; i++) {
                var LOCK_KEY = KEYS[i];
                if (LOCK_KEY.includes(LOCK_STORAGE_KEY)) {
                    var lockObj = STORAGE.getItem(LOCK_KEY);
                    if (lockObj !== null) {
                        lockObj = JSON.parse(lockObj);
                        if ((lockObj.timeRefreshed === undefined && lockObj.timeAcquired < MIN_ALLOWED_TIME) ||
                            (lockObj.timeRefreshed !== undefined && lockObj.timeRefreshed < MIN_ALLOWED_TIME)) {
                            STORAGE.removeItem(LOCK_KEY);
                            notifyWaiters = true;
                        }
                    }
                }
            }
            if (notifyWaiters) {
                SuperTokensLock.notifyWaiters();
            }
        };
        SuperTokensLock.waiters = undefined;
        return SuperTokensLock;
    }());
    exports.default = SuperTokensLock;
    });

    var Lock = unwrapExports(browserTabsLock);

    function fetch(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return {ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t;}),t(a());},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null);})}

    /**
     * @ignore
     */
    var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
    /**
     * @ignore
     */
    var DEFAULT_POPUP_CONFIG_OPTIONS = {
        timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
    };
    /**
     * @ignore
     */
    var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
    /**
     * @ignore
     */
    var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
    /**
     * @ignore
     */
    var DEFAULT_FETCH_TIMEOUT_MS = 10000;
    var CACHE_LOCATION_MEMORY = 'memory';
    var MISSING_REFRESH_TOKEN_ERROR_MESSAGE = 'The web worker is missing the refresh token';
    /**
     * @ignore
     */
    var DEFAULT_SCOPE = 'openid profile email';
    /**
     * A list of errors that can be issued by the authorization server which the
     * user can recover from by signing in interactively.
     * https://openid.net/specs/openid-connect-core-1_0.html#AuthError
     * @ignore
     */
    var RECOVERABLE_ERRORS = [
        'login_required',
        'consent_required',
        'interaction_required',
        'account_selection_required',
        // Strictly speaking the user can't recover from `access_denied` - but they
        // can get more information about their access being denied by logging in
        // interactively.
        'access_denied'
    ];

    var TIMEOUT_ERROR = { error: 'timeout', error_description: 'Timeout' };
    var createAbortController = function () { return new AbortController(); };
    var parseQueryResult = function (queryString) {
        if (queryString.indexOf('#') > -1) {
            queryString = queryString.substr(0, queryString.indexOf('#'));
        }
        var queryParams = queryString.split('&');
        var parsedQuery = {};
        queryParams.forEach(function (qp) {
            var _a = qp.split('='), key = _a[0], val = _a[1];
            parsedQuery[key] = decodeURIComponent(val);
        });
        return __assign(__assign({}, parsedQuery), { expires_in: parseInt(parsedQuery.expires_in) });
    };
    var runIframe = function (authorizeUrl, eventOrigin, timeoutInSeconds) {
        if (timeoutInSeconds === void 0) { timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS; }
        return new Promise(function (res, rej) {
            var iframe = window.document.createElement('iframe');
            iframe.setAttribute('width', '0');
            iframe.setAttribute('height', '0');
            iframe.style.display = 'none';
            var removeIframe = function () {
                if (window.document.body.contains(iframe)) {
                    window.document.body.removeChild(iframe);
                }
            };
            var timeoutSetTimeoutId = setTimeout(function () {
                rej(TIMEOUT_ERROR);
                removeIframe();
            }, timeoutInSeconds * 1000);
            var iframeEventHandler = function (e) {
                if (e.origin != eventOrigin)
                    return;
                if (!e.data || e.data.type !== 'authorization_response')
                    return;
                var eventSource = e.source;
                if (eventSource) {
                    eventSource.close();
                }
                e.data.response.error ? rej(e.data.response) : res(e.data.response);
                clearTimeout(timeoutSetTimeoutId);
                window.removeEventListener('message', iframeEventHandler, false);
                // Delay the removal of the iframe to prevent hanging loading status
                // in Chrome: https://github.com/auth0/auth0-spa-js/issues/240
                setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1000);
            };
            window.addEventListener('message', iframeEventHandler, false);
            window.document.body.appendChild(iframe);
            iframe.setAttribute('src', authorizeUrl);
        });
    };
    var openPopup = function (url) {
        var width = 400;
        var height = 600;
        var left = window.screenX + (window.innerWidth - width) / 2;
        var top = window.screenY + (window.innerHeight - height) / 2;
        return window.open(url, 'auth0:authorize:popup', "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ",resizable,scrollbars=yes,status=1");
    };
    var runPopup = function (authorizeUrl, config) {
        var popup = config.popup;
        if (popup) {
            popup.location.href = authorizeUrl;
        }
        else {
            popup = openPopup(authorizeUrl);
        }
        if (!popup) {
            throw new Error('Could not open popup');
        }
        return new Promise(function (resolve, reject) {
            var timeoutId = setTimeout(function () {
                reject(__assign(__assign({}, TIMEOUT_ERROR), { popup: popup }));
            }, (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1000);
            window.addEventListener('message', function (e) {
                if (!e.data || e.data.type !== 'authorization_response') {
                    return;
                }
                clearTimeout(timeoutId);
                popup.close();
                if (e.data.response.error) {
                    return reject(e.data.response);
                }
                resolve(e.data.response);
            });
        });
    };
    var createRandomString = function () {
        var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.';
        var random = '';
        var randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
        randomValues.forEach(function (v) { return (random += charset[v % charset.length]); });
        return random;
    };
    var encode = function (value) { return btoa(value); };
    var createQueryParams = function (params) {
        return Object.keys(params)
            .filter(function (k) { return typeof params[k] !== 'undefined'; })
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
            .join('&');
    };
    var sha256 = function (s) { return __awaiter(void 0, void 0, void 0, function () {
        var digestOp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    digestOp = getCryptoSubtle().digest({ name: 'SHA-256' }, new TextEncoder().encode(s));
                    // msCrypto (IE11) uses the old spec, which is not Promise based
                    // https://msdn.microsoft.com/en-us/expression/dn904640(v=vs.71)
                    // Instead of returning a promise, it returns a CryptoOperation
                    // with a result property in it.
                    // As a result, the various events need to be handled in the event that we're
                    // working in IE11 (hence the msCrypto check). These events just call resolve
                    // or reject depending on their intention.
                    if (window.msCrypto) {
                        return [2 /*return*/, new Promise(function (res, rej) {
                                digestOp.oncomplete = function (e) {
                                    res(e.target.result);
                                };
                                digestOp.onerror = function (e) {
                                    rej(e.error);
                                };
                                digestOp.onabort = function () {
                                    rej('The digest operation was aborted');
                                };
                            })];
                    }
                    return [4 /*yield*/, digestOp];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var urlEncodeB64 = function (input) {
        var b64Chars = { '+': '-', '/': '_', '=': '' };
        return input.replace(/[\+\/=]/g, function (m) { return b64Chars[m]; });
    };
    // https://stackoverflow.com/questions/30106476/
    var decodeB64 = function (input) {
        return decodeURIComponent(atob(input)
            .split('')
            .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    var urlDecodeB64 = function (input) {
        return decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
    };
    var bufferToBase64UrlEncoded = function (input) {
        var ie11SafeInput = new Uint8Array(input);
        return urlEncodeB64(window.btoa(String.fromCharCode.apply(String, Array.from(ie11SafeInput))));
    };
    var sendMessage = function (message, to) {
        return new Promise(function (resolve, reject) {
            var messageChannel = new MessageChannel();
            messageChannel.port1.onmessage = function (event) {
                // Only for fetch errors, as these get retried
                if (event.data.error) {
                    reject(new Error(event.data.error));
                }
                else {
                    resolve(event.data);
                }
            };
            to.postMessage(message, [messageChannel.port2]);
        });
    };
    var switchFetch = function (url, opts, timeout, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!worker) return [3 /*break*/, 1];
                    // AbortSignal is not serializable, need to implement in the Web Worker
                    delete opts.signal;
                    return [2 /*return*/, sendMessage(__assign({ url: url, timeout: timeout }, opts), worker)];
                case 1: return [4 /*yield*/, fetch(url, opts)];
                case 2:
                    response = _b.sent();
                    _a = {
                        ok: response.ok
                    };
                    return [4 /*yield*/, response.json()];
                case 3: return [2 /*return*/, (_a.json = _b.sent(),
                        _a)];
            }
        });
    }); };
    var fetchWithTimeout = function (url, options, worker, timeout) {
        if (timeout === void 0) { timeout = DEFAULT_FETCH_TIMEOUT_MS; }
        var controller = createAbortController();
        var signal = controller.signal;
        var fetchOptions = __assign(__assign({}, options), { signal: signal });
        var timeoutId;
        // The promise will resolve with one of these two promises (the fetch or the timeout), whichever completes first.
        return Promise.race([
            switchFetch(url, fetchOptions, timeout, worker),
            new Promise(function (_, reject) {
                timeoutId = setTimeout(function () {
                    controller.abort();
                    reject(new Error("Timeout when executing 'fetch'"));
                }, timeout);
            })
        ]).finally(function () {
            clearTimeout(timeoutId);
        });
    };
    var getJSON = function (url, timeout, options, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var fetchError, response, i, e_1, _a, error, error_description, success, ok, errorMessage, e;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fetchWithTimeout(url, options, worker, timeout)];
                case 3:
                    response = _b.sent();
                    fetchError = null;
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _b.sent();
                    // Fetch only fails in the case of a network issue, so should be
                    // retried here. Failure status (4xx, 5xx, etc) return a resolved Promise
                    // with the failure in the body.
                    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
                    fetchError = e_1;
                    return [3 /*break*/, 5];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (fetchError) {
                        throw fetchError;
                    }
                    _a = response.json, error = _a.error, error_description = _a.error_description, success = __rest(_a, ["error", "error_description"]), ok = response.ok;
                    if (!ok) {
                        errorMessage = error_description || "HTTP error. Unable to fetch " + url;
                        e = new Error(errorMessage);
                        e.error = error || 'request_error';
                        e.error_description = errorMessage;
                        throw e;
                    }
                    return [2 /*return*/, success];
            }
        });
    }); };
    var oauthToken = function (_a, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var baseUrl = _a.baseUrl, timeout = _a.timeout, options = __rest(_a, ["baseUrl", "timeout"]);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getJSON(baseUrl + "/oauth/token", timeout, {
                        method: 'POST',
                        body: JSON.stringify(__assign({ redirect_uri: window.location.origin }, options)),
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }, worker)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    }); };
    var getCrypto = function () {
        //ie 11.x uses msCrypto
        return (window.crypto || window.msCrypto);
    };
    var getCryptoSubtle = function () {
        var crypto = getCrypto();
        //safari 10.x uses webkitSubtle
        return crypto.subtle || crypto.webkitSubtle;
    };
    var validateCrypto = function () {
        if (!getCrypto()) {
            throw new Error('For security reasons, `window.crypto` is required to run `auth0-spa-js`.');
        }
        if (typeof getCryptoSubtle() === 'undefined') {
            throw new Error("\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    ");
        }
    };

    /**
     * @ignore
     */
    var dedupe = function (arr) { return Array.from(new Set(arr)); };
    /**
     * @ignore
     */
    var getUniqueScopes = function () {
        var scopes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scopes[_i] = arguments[_i];
        }
        return dedupe(scopes.join(' ').trim().split(/\s+/)).join(' ');
    };

    var keyPrefix = '@@auth0spajs@@';
    var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
    var createKey = function (e) {
        return keyPrefix + "::" + e.client_id + "::" + e.audience + "::" + e.scope;
    };
    /**
     * Wraps the specified cache entry and returns the payload
     * @param entry The cache entry to wrap
     */
    var wrapCacheEntry = function (entry) {
        var expiresInTime = Math.floor(Date.now() / 1000) + entry.expires_in;
        var expirySeconds = Math.min(expiresInTime, entry.decodedToken.claims.exp);
        return {
            body: entry,
            expiresAt: expirySeconds
        };
    };
    var LocalStorageCache = /** @class */ (function () {
        function LocalStorageCache() {
        }
        LocalStorageCache.prototype.save = function (entry) {
            var cacheKey = createKey(entry);
            var payload = wrapCacheEntry(entry);
            window.localStorage.setItem(cacheKey, JSON.stringify(payload));
        };
        LocalStorageCache.prototype.get = function (key, expiryAdjustmentSeconds) {
            if (expiryAdjustmentSeconds === void 0) { expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS; }
            var cacheKey = createKey(key);
            var payload = this.readJson(cacheKey);
            var nowSeconds = Math.floor(Date.now() / 1000);
            if (!payload)
                return;
            if (payload.expiresAt - expiryAdjustmentSeconds < nowSeconds) {
                if (payload.body.refresh_token) {
                    var newPayload = this.stripData(payload);
                    this.writeJson(cacheKey, newPayload);
                    return newPayload.body;
                }
                localStorage.removeItem(cacheKey);
                return;
            }
            return payload.body;
        };
        LocalStorageCache.prototype.clear = function () {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                if (localStorage.key(i).startsWith(keyPrefix)) {
                    localStorage.removeItem(localStorage.key(i));
                }
            }
        };
        /**
         * Retrieves data from local storage and parses it into the correct format
         * @param cacheKey The cache key
         */
        LocalStorageCache.prototype.readJson = function (cacheKey) {
            var json = window.localStorage.getItem(cacheKey);
            var payload;
            if (!json) {
                return;
            }
            payload = JSON.parse(json);
            if (!payload) {
                return;
            }
            return payload;
        };
        /**
         * Writes the payload as JSON to localstorage
         * @param cacheKey The cache key
         * @param payload The payload to write as JSON
         */
        LocalStorageCache.prototype.writeJson = function (cacheKey, payload) {
            localStorage.setItem(cacheKey, JSON.stringify(payload));
        };
        /**
         * Produce a copy of the payload with everything removed except the refresh token
         * @param payload The payload
         */
        LocalStorageCache.prototype.stripData = function (payload) {
            var refresh_token = payload.body.refresh_token;
            var strippedPayload = {
                body: { refresh_token: refresh_token },
                expiresAt: payload.expiresAt
            };
            return strippedPayload;
        };
        return LocalStorageCache;
    }());
    var InMemoryCache = /** @class */ (function () {
        function InMemoryCache() {
            this.enclosedCache = (function () {
                var cache = {
                    body: {},
                    expiresAt: 0
                };
                return {
                    save: function (entry) {
                        var key = createKey(entry);
                        var payload = wrapCacheEntry(entry);
                        cache[key] = payload;
                    },
                    get: function (key, expiryAdjustmentSeconds) {
                        if (expiryAdjustmentSeconds === void 0) { expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS; }
                        var cacheKey = createKey(key);
                        var wrappedEntry = cache[cacheKey];
                        var nowSeconds = Math.floor(Date.now() / 1000);
                        if (!wrappedEntry) {
                            return;
                        }
                        if (wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds) {
                            if (wrappedEntry.body.refresh_token) {
                                wrappedEntry.body = {
                                    refresh_token: wrappedEntry.body.refresh_token
                                };
                                return wrappedEntry.body;
                            }
                            delete cache[cacheKey];
                            return;
                        }
                        return wrappedEntry.body;
                    },
                    clear: function () {
                        cache = {
                            body: {},
                            expiresAt: 0
                        };
                    }
                };
            })();
        }
        return InMemoryCache;
    }());

    var esCookie = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    exports.__esModule = true;
    function stringifyAttribute(name, value) {
        if (!value) {
            return '';
        }
        var stringified = '; ' + name;
        if (value === true) {
            return stringified; // boolean attributes shouldn't have a value
        }
        return stringified + '=' + value;
    }
    function stringifyAttributes(attributes) {
        if (typeof attributes.expires === 'number') {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
            attributes.expires = expires;
        }
        return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
            + stringifyAttribute('Domain', attributes.domain)
            + stringifyAttribute('Path', attributes.path)
            + stringifyAttribute('Secure', attributes.secure)
            + stringifyAttribute('SameSite', attributes.sameSite);
    }
    function encode(name, value, attributes) {
        return encodeURIComponent(name)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
            .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
            + '=' + encodeURIComponent(value)
            // allowed special characters
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
            + stringifyAttributes(attributes);
    }
    exports.encode = encode;
    function parse(cookieString) {
        var result = {};
        var cookies = cookieString ? cookieString.split('; ') : [];
        var rdecode = /(%[\dA-F]{2})+/gi;
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
            }
            try {
                var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                result[name_1] = cookie.replace(rdecode, decodeURIComponent);
            }
            catch (e) {
                // ignore cookies with invalid name/value encoding
            }
        }
        return result;
    }
    exports.parse = parse;
    function getAll() {
        return parse(document.cookie);
    }
    exports.getAll = getAll;
    function get(name) {
        return getAll()[name];
    }
    exports.get = get;
    function set(name, value, attributes) {
        document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
    }
    exports.set = set;
    function remove(name, attributes) {
        set(name, '', __assign(__assign({}, attributes), { expires: -1 }));
    }
    exports.remove = remove;
    });

    unwrapExports(esCookie);
    var esCookie_1 = esCookie.encode;
    var esCookie_2 = esCookie.parse;
    var esCookie_3 = esCookie.getAll;
    var esCookie_4 = esCookie.get;
    var esCookie_5 = esCookie.set;
    var esCookie_6 = esCookie.remove;

    var getAllKeys = function () { return Object.keys(esCookie_3() || {}); };
    var get$1 = function (key) {
        var value = esCookie_4(key);
        if (typeof value === 'undefined') {
            return;
        }
        return JSON.parse(value);
    };
    var save = function (key, value, options) {
        var cookieAttributes = {};
        if ('https:' === window.location.protocol) {
            cookieAttributes = {
                secure: true,
                sameSite: 'none'
            };
        }
        cookieAttributes.expires = options.daysUntilExpire;
        esCookie_5(key, JSON.stringify(value), cookieAttributes);
    };
    var remove = function (key) {
        esCookie_6(key);
    };

    var COOKIE_KEY = 'a0.spajs.txs.';
    var getTransactionKey = function (state) { return "" + COOKIE_KEY + state; };
    var TransactionManager = /** @class */ (function () {
        function TransactionManager() {
            var _this = this;
            this.transactions = {};
            typeof window !== 'undefined' &&
                getAllKeys()
                    .filter(function (k) { return k.startsWith(COOKIE_KEY); })
                    .forEach(function (k) {
                    var state = k.replace(COOKIE_KEY, '');
                    _this.transactions[state] = get$1(k);
                });
        }
        TransactionManager.prototype.create = function (state, transaction) {
            this.transactions[state] = transaction;
            save(getTransactionKey(state), transaction, {
                daysUntilExpire: 1
            });
        };
        TransactionManager.prototype.get = function (state) {
            return this.transactions[state];
        };
        TransactionManager.prototype.remove = function (state) {
            delete this.transactions[state];
            remove(getTransactionKey(state));
        };
        return TransactionManager;
    }());

    var isNumber = function (n) { return typeof n === 'number'; };
    var idTokendecoded = [
        'iss',
        'aud',
        'exp',
        'nbf',
        'iat',
        'jti',
        'azp',
        'nonce',
        'auth_time',
        'at_hash',
        'c_hash',
        'acr',
        'amr',
        'sub_jwk',
        'cnf',
        'sip_from_tag',
        'sip_date',
        'sip_callid',
        'sip_cseq_num',
        'sip_via_branch',
        'orig',
        'dest',
        'mky',
        'events',
        'toe',
        'txn',
        'rph',
        'sid',
        'vot',
        'vtm'
    ];
    var decode = function (token) {
        var parts = token.split('.');
        var header = parts[0], payload = parts[1], signature = parts[2];
        if (parts.length !== 3 || !header || !payload || !signature) {
            throw new Error('ID token could not be decoded');
        }
        var payloadJSON = JSON.parse(urlDecodeB64(payload));
        var claims = { __raw: token };
        var user = {};
        Object.keys(payloadJSON).forEach(function (k) {
            claims[k] = payloadJSON[k];
            if (!idTokendecoded.includes(k)) {
                user[k] = payloadJSON[k];
            }
        });
        return {
            encoded: { header: header, payload: payload, signature: signature },
            header: JSON.parse(urlDecodeB64(header)),
            claims: claims,
            user: user
        };
    };
    var verify = function (options) {
        if (!options.id_token) {
            throw new Error('ID token is required but missing');
        }
        var decoded = decode(options.id_token);
        if (!decoded.claims.iss) {
            throw new Error('Issuer (iss) claim must be a string present in the ID token');
        }
        if (decoded.claims.iss !== options.iss) {
            throw new Error("Issuer (iss) claim mismatch in the ID token; expected \"" + options.iss + "\", found \"" + decoded.claims.iss + "\"");
        }
        if (!decoded.user.sub) {
            throw new Error('Subject (sub) claim must be a string present in the ID token');
        }
        if (decoded.header.alg !== 'RS256') {
            throw new Error("Signature algorithm of \"" + decoded.header.alg + "\" is not supported. Expected the ID token to be signed with \"RS256\".");
        }
        if (!decoded.claims.aud ||
            !(typeof decoded.claims.aud === 'string' ||
                Array.isArray(decoded.claims.aud))) {
            throw new Error('Audience (aud) claim must be a string or array of strings present in the ID token');
        }
        if (Array.isArray(decoded.claims.aud)) {
            if (!decoded.claims.aud.includes(options.aud)) {
                throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but was not one of \"" + decoded.claims.aud.join(', ') + "\"");
            }
            if (decoded.claims.aud.length > 1) {
                if (!decoded.claims.azp) {
                    throw new Error('Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values');
                }
                if (decoded.claims.azp !== options.aud) {
                    throw new Error("Authorized Party (azp) claim mismatch in the ID token; expected \"" + options.aud + "\", found \"" + decoded.claims.azp + "\"");
                }
            }
        }
        else if (decoded.claims.aud !== options.aud) {
            throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but found \"" + decoded.claims.aud + "\"");
        }
        if (options.nonce) {
            if (!decoded.claims.nonce) {
                throw new Error('Nonce (nonce) claim must be a string present in the ID token');
            }
            if (decoded.claims.nonce !== options.nonce) {
                throw new Error("Nonce (nonce) claim mismatch in the ID token; expected \"" + options.nonce + "\", found \"" + decoded.claims.nonce + "\"");
            }
        }
        if (options.max_age && !isNumber(decoded.claims.auth_time)) {
            throw new Error('Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified');
        }
        /* istanbul ignore next */
        if (!isNumber(decoded.claims.exp)) {
            throw new Error('Expiration Time (exp) claim must be a number present in the ID token');
        }
        if (!isNumber(decoded.claims.iat)) {
            throw new Error('Issued At (iat) claim must be a number present in the ID token');
        }
        var leeway = options.leeway || 60;
        var now = new Date(Date.now());
        var expDate = new Date(0);
        var nbfDate = new Date(0);
        var authTimeDate = new Date(0);
        authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
        expDate.setUTCSeconds(decoded.claims.exp + leeway);
        nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
        if (now > expDate) {
            throw new Error("Expiration Time (exp) claim error in the ID token; current time (" + now + ") is after expiration time (" + expDate + ")");
        }
        if (isNumber(decoded.claims.nbf) && now < nbfDate) {
            throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" + now + ") is before " + nbfDate);
        }
        if (isNumber(decoded.claims.auth_time) && now > authTimeDate) {
            throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (" + now + ") is after last auth at " + authTimeDate);
        }
        return decoded;
    };

    var GenericError = /** @class */ (function (_super) {
        __extends(GenericError, _super);
        function GenericError(error, error_description) {
            var _this = _super.call(this, error_description) || this;
            _this.error = error;
            _this.error_description = error_description;
            Object.setPrototypeOf(_this, GenericError.prototype);
            return _this;
        }
        return GenericError;
    }(Error));
    var AuthenticationError = /** @class */ (function (_super) {
        __extends(AuthenticationError, _super);
        function AuthenticationError(error, error_description, state, appState) {
            if (appState === void 0) { appState = null; }
            var _this = _super.call(this, error, error_description) || this;
            _this.state = state;
            _this.appState = appState;
            //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(_this, AuthenticationError.prototype);
            return _this;
        }
        return AuthenticationError;
    }(GenericError));

    var version = '1.10.0';

    function decodeBase64(base64, enableUnicode) {
        var binaryString = atob(base64);
        if (enableUnicode) {
            var binaryView = new Uint8Array(binaryString.length);
            for (var i = 0, n = binaryString.length; i < n; ++i) {
                binaryView[i] = binaryString.charCodeAt(i);
            }
            return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
        }
        return binaryString;
    }

    function createURL(base64, sourcemapArg, enableUnicodeArg) {
        var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
        var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
        var source = decodeBase64(base64, enableUnicode);
        var start = source.indexOf('\n', 10) + 1;
        var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
        var blob = new Blob([body], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
        var url;
        return function WorkerFactory(options) {
            url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
            return new Worker(url, options);
        };
    }

    var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLg0KTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7IHlvdSBtYXkgbm90IHVzZQ0KdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUNCkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wDQoNClRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkNCktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRUQNCldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsDQpNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULg0KDQpTZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMNCmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovDQoNCnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkgew0KICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7DQogICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykgew0KICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTsNCiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07DQogICAgICAgIH0NCiAgICAgICAgcmV0dXJuIHQ7DQogICAgfTsNCiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTsNCn07DQoNCmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7DQogICAgdmFyIHQgPSB7fTsNCiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkNCiAgICAgICAgdFtwXSA9IHNbcF07DQogICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gImZ1bmN0aW9uIikNCiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgew0KICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKQ0KICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dOw0KICAgICAgICB9DQogICAgcmV0dXJuIHQ7DQp9DQoNCmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHsNCiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsNCiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQ0KICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9DQogICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTsNCiAgICB9KTsNCn0NCg0KZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkgew0KICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7DQogICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksICJ0aHJvdyI6IHZlcmIoMSksICJyZXR1cm4iOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7DQogICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9DQogICAgZnVuY3Rpb24gc3RlcChvcCkgew0KICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLiIpOw0KICAgICAgICB3aGlsZSAoXykgdHJ5IHsNCiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbInJldHVybiJdIDogb3BbMF0gPyB5WyJ0aHJvdyJdIHx8ICgodCA9IHlbInJldHVybiJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDsNCiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTsNCiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHsNCiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhazsNCiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9Ow0KICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTsNCiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7DQogICAgICAgICAgICAgICAgZGVmYXVsdDoNCiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9DQogICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfQ0KICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTsNCiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pOw0KICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9DQogICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9Ow0KICAgIH0NCn0KCi8qKg0KICogQGlnbm9yZQ0KICovDQp2YXIgTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UgPSAnVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbic7CgovKioNCiAqIEBpZ25vcmUNCiAqLw0KdmFyIHJlZnJlc2hUb2tlbjsNCi8qKg0KICogQGlnbm9yZQ0KICovDQp2YXIgd2FpdCA9IGZ1bmN0aW9uICh0aW1lKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTsgfSk7IH07DQovKioNCiAqIEBpZ25vcmUNCiAqLw0KdmFyIG1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKF9hKSB7IHZhciBfYiwgdXJsLCB0aW1lb3V0LCBvcHRzLCBwb3J0OyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsNCiAgICB2YXIganNvbiwgYm9keSwgYWJvcnRDb250cm9sbGVyLCBzaWduYWwsIHJlc3BvbnNlLCBlcnJvcl8xLCBlcnJvcl8yOw0KICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHsNCiAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkgew0KICAgICAgICAgICAgY2FzZSAwOg0KICAgICAgICAgICAgICAgIF9iID0gX2EuZGF0YSwgKHVybCA9IF9iLnVybCwgdGltZW91dCA9IF9iLnRpbWVvdXQsIF9iKSwgb3B0cyA9IF9fcmVzdChfYiwgWyJ1cmwiLCAidGltZW91dCJdKSwgKHBvcnQgPSBfYS5wb3J0c1swXSwgX2EpOw0KICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTsNCiAgICAgICAgICAgIGNhc2UgMToNCiAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDcsICwgOF0pOw0KICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7DQogICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZnJlc2hfdG9rZW4gJiYgYm9keS5ncmFudF90eXBlID09PSAncmVmcmVzaF90b2tlbicpIHsNCiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSk7DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoX19hc3NpZ24oX19hc3NpZ24oe30sIGJvZHkpLCB7IHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbiB9KSk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsNCiAgICAgICAgICAgICAgICBzaWduYWwgPSBhYm9ydENvbnRyb2xsZXIuc2lnbmFsOw0KICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdm9pZCAwOw0KICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjsNCiAgICAgICAgICAgIGNhc2UgMjoNCiAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDQsICwgNV0pOw0KICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmFjZShbDQogICAgICAgICAgICAgICAgICAgICAgICB3YWl0KHRpbWVvdXQpLA0KICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0cyksIHsgc2lnbmFsOiBzaWduYWwgfSkpDQogICAgICAgICAgICAgICAgICAgIF0pXTsNCiAgICAgICAgICAgIGNhc2UgMzoNCiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jLnNlbnQoKTsNCiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTsNCiAgICAgICAgICAgIGNhc2UgNDoNCiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Muc2VudCgpOw0KICAgICAgICAgICAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5Lg0KICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMS5tZXNzYWdlDQogICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dOw0KICAgICAgICAgICAgY2FzZSA1Og0KICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHsNCiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LCBhYm9ydCBpdCBhbmQgbGV0IGBmZXRjaFdpdGhUaW1lb3V0YCByYWlzZSB0aGUgZXJyb3IuDQogICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpOw0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07DQogICAgICAgICAgICBjYXNlIDY6DQogICAgICAgICAgICAgICAganNvbiA9IF9jLnNlbnQoKTsNCiAgICAgICAgICAgICAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7DQogICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IGpzb24ucmVmcmVzaF90b2tlbjsNCiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbiA9IG51bGw7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICBvazogcmVzcG9uc2Uub2ssDQogICAgICAgICAgICAgICAgICAgIGpzb246IGpzb24NCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTsNCiAgICAgICAgICAgIGNhc2UgNzoNCiAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Muc2VudCgpOw0KICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICBvazogZmFsc2UsDQogICAgICAgICAgICAgICAgICAgIGpzb246IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvcl8yLm1lc3NhZ2UNCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdOw0KICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgIH0NCiAgICB9KTsNCn0pOyB9Ow0KLy8gRG9uJ3QgcnVuIGBhZGRFdmVudExpc3RlbmVyYCBpbiBvdXIgdGVzdHMgKHRoaXMgaXMgcmVwbGFjZWQgaW4gcm9sbHVwKQ0KLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovDQp7DQogICAgLy8gQHRzLWlnbm9yZQ0KICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7DQp9Cgo=', null, false);
    /* eslint-enable */

    /**
     * @ignore
     */
    var lock = new Lock();
    /**
     * @ignore
     */
    var GET_TOKEN_SILENTLY_LOCK_KEY = 'auth0.lock.getTokenSilently';
    /**
     * @ignore
     */
    var cacheLocationBuilders = {
        memory: function () { return new InMemoryCache().enclosedCache; },
        localstorage: function () { return new LocalStorageCache(); }
    };
    /**
     * @ignore
     */
    var cacheFactory = function (location) {
        return cacheLocationBuilders[location];
    };
    /**
     * @ignore
     */
    var isIE11 = function () { return /Trident.*rv:11\.0/.test(navigator.userAgent); };
    /**
     * Auth0 SDK for Single Page Applications using [Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce).
     */
    var Auth0Client = /** @class */ (function () {
        function Auth0Client(options) {
            var _a, _b;
            this.options = options;
            typeof window !== 'undefined' && validateCrypto();
            this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
            if (!cacheFactory(this.cacheLocation)) {
                throw new Error("Invalid cache location \"" + this.cacheLocation + "\"");
            }
            this.cache = cacheFactory(this.cacheLocation)();
            this.scope = this.options.scope;
            this.transactionManager = new TransactionManager();
            this.domainUrl = "https://" + this.options.domain;
            this.tokenIssuer = this.options.issuer
                ? "https://" + this.options.issuer + "/"
                : this.domainUrl + "/";
            this.defaultScope = getUniqueScopes('openid', ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedOptions) === null || _b === void 0 ? void 0 : _b.defaultScope) !== undefined
                ? this.options.advancedOptions.defaultScope
                : DEFAULT_SCOPE);
            // If using refresh tokens, automatically specify the `offline_access` scope.
            // Note we cannot add this to 'defaultScope' above as the scopes are used in the
            // cache keys - changing the order could invalidate the keys
            if (this.options.useRefreshTokens) {
                this.scope = getUniqueScopes(this.scope, 'offline_access');
            }
            // Don't use web workers unless using refresh tokens in memory and not IE11
            if (typeof window !== 'undefined' &&
                window.Worker &&
                this.options.useRefreshTokens &&
                this.cacheLocation === CACHE_LOCATION_MEMORY &&
                !isIE11()) {
                this.worker = new WorkerFactory();
            }
        }
        Auth0Client.prototype._url = function (path) {
            var auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || {
                name: 'auth0-spa-js',
                version: version
            })));
            return "" + this.domainUrl + path + "&auth0Client=" + auth0Client;
        };
        Auth0Client.prototype._getParams = function (authorizeOptions, state, nonce, code_challenge, redirect_uri) {
            var _a = this.options, domain = _a.domain, leeway = _a.leeway, useRefreshTokens = _a.useRefreshTokens, auth0Client = _a.auth0Client, cacheLocation = _a.cacheLocation, advancedOptions = _a.advancedOptions, withoutDomain = __rest(_a, ["domain", "leeway", "useRefreshTokens", "auth0Client", "cacheLocation", "advancedOptions"]);
            return __assign(__assign(__assign({}, withoutDomain), authorizeOptions), { scope: getUniqueScopes(this.defaultScope, this.scope, authorizeOptions.scope), response_type: 'code', response_mode: 'query', state: state,
                nonce: nonce, redirect_uri: redirect_uri || this.options.redirect_uri, code_challenge: code_challenge, code_challenge_method: 'S256' });
        };
        Auth0Client.prototype._authorizeUrl = function (authorizeOptions) {
            return this._url("/authorize?" + createQueryParams(authorizeOptions));
        };
        Auth0Client.prototype._verifyIdToken = function (id_token, nonce) {
            return verify({
                iss: this.tokenIssuer,
                aud: this.options.client_id,
                id_token: id_token,
                nonce: nonce,
                leeway: this.options.leeway,
                max_age: this._parseNumber(this.options.max_age)
            });
        };
        Auth0Client.prototype._parseNumber = function (value) {
            if (typeof value !== 'string') {
                return value;
            }
            return parseInt(value, 10) || undefined;
        };
        /**
         * ```js
         * await auth0.buildAuthorizeUrl(options);
         * ```
         *
         * Builds an `/authorize` URL for loginWithRedirect using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated.
         *
         * @param options
         */
        Auth0Client.prototype.buildAuthorizeUrl = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var redirect_uri, appState, authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, fragment, params, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            redirect_uri = options.redirect_uri, appState = options.appState, authorizeOptions = __rest(options, ["redirect_uri", "appState"]);
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            fragment = options.fragment ? "#" + options.fragment : '';
                            params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, redirect_uri);
                            url = this._authorizeUrl(params);
                            this.transactionManager.create(stateIn, {
                                nonce: nonceIn,
                                code_verifier: code_verifier,
                                appState: appState,
                                scope: params.scope,
                                audience: params.audience || 'default',
                                redirect_uri: params.redirect_uri
                            });
                            return [2 /*return*/, url + fragment];
                    }
                });
            });
        };
        /**
         * ```js
         * await auth0.loginWithPopup(options);
         * ```
         *
         * Opens a popup with the `/authorize` URL using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated. If the response is successful,
         * results will be valid according to their expiration times.
         *
         * IMPORTANT: This method has to be called from an event handler
         * that was started by the user like a button click, for example,
         * otherwise the popup will be blocked in most browsers.
         *
         * @param options
         */
        Auth0Client.prototype.loginWithPopup = function (options, config) {
            if (options === void 0) { options = {}; }
            if (config === void 0) { config = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, codeResult, authResult, decodedToken, cacheEntry;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            authorizeOptions = __rest(options, []);
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, this.options.redirect_uri || window.location.origin);
                            url = this._authorizeUrl(__assign(__assign({}, params), { response_mode: 'web_message' }));
                            return [4 /*yield*/, runPopup(url, __assign(__assign({}, config), { timeoutInSeconds: config.timeoutInSeconds ||
                                        this.options.authorizeTimeoutInSeconds ||
                                        DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS }))];
                        case 2:
                            codeResult = _a.sent();
                            if (stateIn !== codeResult.state) {
                                throw new Error('Invalid state');
                            }
                            return [4 /*yield*/, oauthToken({
                                    baseUrl: this.domainUrl,
                                    client_id: this.options.client_id,
                                    code_verifier: code_verifier,
                                    code: codeResult.code,
                                    grant_type: 'authorization_code',
                                    redirect_uri: params.redirect_uri
                                }, this.worker)];
                        case 3:
                            authResult = _a.sent();
                            decodedToken = this._verifyIdToken(authResult.id_token, nonceIn);
                            cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default', client_id: this.options.client_id });
                            this.cache.save(cacheEntry);
                            save('auth0.is.authenticated', true, { daysUntilExpire: 1 });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const user = await auth0.getUser();
         * ```
         *
         * Returns the user information if available (decoded
         * from the `id_token`).
         *
         * @param options
         */
        Auth0Client.prototype.getUser = function (options) {
            if (options === void 0) { options = {
                audience: this.options.audience || 'default',
                scope: this.scope || this.defaultScope
            }; }
            return __awaiter(this, void 0, void 0, function () {
                var cache;
                return __generator(this, function (_a) {
                    options.scope = getUniqueScopes(this.defaultScope, options.scope);
                    cache = this.cache.get(__assign({ client_id: this.options.client_id }, options));
                    return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.user];
                });
            });
        };
        /**
         * ```js
         * const claims = await auth0.getIdTokenClaims();
         * ```
         *
         * Returns all claims from the id_token if available.
         *
         * @param options
         */
        Auth0Client.prototype.getIdTokenClaims = function (options) {
            if (options === void 0) { options = {
                audience: this.options.audience || 'default',
                scope: this.scope || this.defaultScope
            }; }
            return __awaiter(this, void 0, void 0, function () {
                var cache;
                return __generator(this, function (_a) {
                    options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    cache = this.cache.get(__assign({ client_id: this.options.client_id }, options));
                    return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.claims];
                });
            });
        };
        /**
         * ```js
         * await auth0.loginWithRedirect(options);
         * ```
         *
         * Performs a redirect to `/authorize` using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated.
         *
         * @param options
         */
        Auth0Client.prototype.loginWithRedirect = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.buildAuthorizeUrl(options)];
                        case 1:
                            url = _a.sent();
                            window.location.assign(url);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * After the browser redirects back to the callback page,
         * call `handleRedirectCallback` to handle success and error
         * responses from Auth0. If the response is successful, results
         * will be valid according to their expiration times.
         */
        Auth0Client.prototype.handleRedirectCallback = function (url) {
            if (url === void 0) { url = window.location.href; }
            return __awaiter(this, void 0, void 0, function () {
                var queryStringFragments, _a, state, code, error, error_description, transaction, tokenOptions, authResult, decodedToken, cacheEntry;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            queryStringFragments = url.split('?').slice(1);
                            if (queryStringFragments.length === 0) {
                                throw new Error('There are no query params available for parsing.');
                            }
                            _a = parseQueryResult(queryStringFragments.join('')), state = _a.state, code = _a.code, error = _a.error, error_description = _a.error_description;
                            transaction = this.transactionManager.get(state);
                            if (!transaction) {
                                throw new Error('Invalid state');
                            }
                            if (error) {
                                this.transactionManager.remove(state);
                                throw new AuthenticationError(error, error_description, state, transaction.appState);
                            }
                            this.transactionManager.remove(state);
                            tokenOptions = {
                                baseUrl: this.domainUrl,
                                client_id: this.options.client_id,
                                code_verifier: transaction.code_verifier,
                                grant_type: 'authorization_code',
                                code: code
                            };
                            // some old versions of the SDK might not have added redirect_uri to the
                            // transaction, we dont want the key to be set to undefined.
                            if (undefined !== transaction.redirect_uri) {
                                tokenOptions.redirect_uri = transaction.redirect_uri;
                            }
                            return [4 /*yield*/, oauthToken(tokenOptions, this.worker)];
                        case 1:
                            authResult = _b.sent();
                            decodedToken = this._verifyIdToken(authResult.id_token, transaction.nonce);
                            cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, audience: transaction.audience, scope: transaction.scope, client_id: this.options.client_id });
                            this.cache.save(cacheEntry);
                            save('auth0.is.authenticated', true, { daysUntilExpire: 1 });
                            return [2 /*return*/, {
                                    appState: transaction.appState
                                }];
                    }
                });
            });
        };
        /**
         * ```js
         * await auth0.checkSession();
         * ```
         *
         * Check if the user is logged in using `getTokenSilently`. The difference
         * with `getTokenSilently` is that this doesn't return a token, but it will
         * pre-fill the token cache.
         *
         * It should be used for silently logging in the user when you instantiate the
         * `Auth0Client` constructor. You should not need this if you are using the
         * `createAuth0Client` factory.
         *
         * @param options
         */
        Auth0Client.prototype.checkSession = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.cacheLocation === CACHE_LOCATION_MEMORY &&
                                !get$1('auth0.is.authenticated')) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.getTokenSilently(options)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            if (!RECOVERABLE_ERRORS.includes(error_1.error)) {
                                throw error_1;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const token = await auth0.getTokenSilently(options);
         * ```
         *
         * If there's a valid token stored, return it. Otherwise, opens an
         * iframe with the `/authorize` URL using the parameters provided
         * as arguments. Random and secure `state` and `nonce` parameters
         * will be auto-generated. If the response is successful, results
         * will be valid according to their expiration times.
         *
         * If refresh tokens are used, the token endpoint is called directly with the
         * 'refresh_token' grant. If no refresh token is available to make this call,
         * the SDK falls back to using an iframe to the '/authorize' URL.
         *
         * This method may use a web worker to perform the token call if the in-memory
         * cache is used.
         *
         * If an `audience` value is given to this function, the SDK always falls
         * back to using an iframe to make the token exchange.
         *
         * Note that in all cases, falling back to an iframe requires access to
         * the `auth0` cookie.
         *
         * @param options
         */
        Auth0Client.prototype.getTokenSilently = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, ignoreCache, getTokenOptions, cache, authResult, _b, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = __assign(__assign({ audience: this.options.audience, ignoreCache: false }, options), { scope: getUniqueScopes(this.defaultScope, this.scope, options.scope) }), ignoreCache = _a.ignoreCache, getTokenOptions = __rest(_a, ["ignoreCache"]);
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 7, 8, 10]);
                            if (!ignoreCache) {
                                cache = this.cache.get({
                                    scope: getTokenOptions.scope,
                                    audience: getTokenOptions.audience || 'default',
                                    client_id: this.options.client_id
                                }, 60 // get a new token if within 60 seconds of expiring
                                );
                                if (cache && cache.access_token) {
                                    return [2 /*return*/, cache.access_token];
                                }
                            }
                            return [4 /*yield*/, lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5000)];
                        case 2:
                            _c.sent();
                            if (!(this.options.useRefreshTokens && !options.audience)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this._getTokenUsingRefreshToken(getTokenOptions)];
                        case 3:
                            _b = _c.sent();
                            return [3 /*break*/, 6];
                        case 4: return [4 /*yield*/, this._getTokenFromIFrame(getTokenOptions)];
                        case 5:
                            _b = _c.sent();
                            _c.label = 6;
                        case 6:
                            authResult = _b;
                            this.cache.save(__assign({ client_id: this.options.client_id }, authResult));
                            save('auth0.is.authenticated', true, {
                                daysUntilExpire: 1
                            });
                            return [2 /*return*/, authResult.access_token];
                        case 7:
                            e_1 = _c.sent();
                            throw e_1;
                        case 8: return [4 /*yield*/, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY)];
                        case 9:
                            _c.sent();
                            return [7 /*endfinally*/];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const token = await auth0.getTokenWithPopup(options);
         * ```
         * Opens a popup with the `/authorize` URL using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated. If the response is successful,
         * results will be valid according to their expiration times.
         *
         * @param options
         */
        Auth0Client.prototype.getTokenWithPopup = function (options, config) {
            if (options === void 0) { options = {
                audience: this.options.audience,
                scope: this.scope || this.defaultScope
            }; }
            if (config === void 0) { config = DEFAULT_POPUP_CONFIG_OPTIONS; }
            return __awaiter(this, void 0, void 0, function () {
                var cache;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                            return [4 /*yield*/, this.loginWithPopup(options, config)];
                        case 1:
                            _a.sent();
                            cache = this.cache.get({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            });
                            return [2 /*return*/, cache.access_token];
                    }
                });
            });
        };
        /**
         * ```js
         * const isAuthenticated = await auth0.isAuthenticated();
         * ```
         *
         * Returns `true` if there's valid information stored,
         * otherwise returns `false`.
         *
         */
        Auth0Client.prototype.isAuthenticated = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUser()];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, !!user];
                    }
                });
            });
        };
        /**
         * ```js
         * auth0.logout();
         * ```
         *
         * Clears the application session and performs a redirect to `/v2/logout`, using
         * the parameters provided as arguments, to clear the Auth0 session.
         * If the `federated` option is specified it also clears the Identity Provider session.
         * If the `localOnly` option is specified, it only clears the application session.
         * It is invalid to set both the `federated` and `localOnly` options to `true`,
         * and an error will be thrown if you do.
         * [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
         *
         * @param options
         */
        Auth0Client.prototype.logout = function (options) {
            if (options === void 0) { options = {}; }
            if (options.client_id !== null) {
                options.client_id = options.client_id || this.options.client_id;
            }
            else {
                delete options.client_id;
            }
            var federated = options.federated, localOnly = options.localOnly, logoutOptions = __rest(options, ["federated", "localOnly"]);
            if (localOnly && federated) {
                throw new Error('It is invalid to set both the `federated` and `localOnly` options to `true`');
            }
            this.cache.clear();
            remove('auth0.is.authenticated');
            if (localOnly) {
                return;
            }
            var federatedQuery = federated ? "&federated" : '';
            var url = this._url("/v2/logout?" + createQueryParams(logoutOptions));
            window.location.assign("" + url + federatedQuery);
        };
        Auth0Client.prototype._getTokenFromIFrame = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, timeout, codeResult, scope, audience, redirect_uri, ignoreCache, timeoutInSeconds, customOptions, tokenResult, decodedToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            params = this._getParams(options, stateIn, nonceIn, code_challenge, options.redirect_uri ||
                                this.options.redirect_uri ||
                                window.location.origin);
                            url = this._authorizeUrl(__assign(__assign({}, params), { prompt: 'none', response_mode: 'web_message' }));
                            timeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                            return [4 /*yield*/, runIframe(url, this.domainUrl, timeout)];
                        case 2:
                            codeResult = _a.sent();
                            if (stateIn !== codeResult.state) {
                                throw new Error('Invalid state');
                            }
                            scope = options.scope, audience = options.audience, redirect_uri = options.redirect_uri, ignoreCache = options.ignoreCache, timeoutInSeconds = options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "redirect_uri", "ignoreCache", "timeoutInSeconds"]);
                            return [4 /*yield*/, oauthToken(__assign(__assign({}, customOptions), { baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: code_verifier, code: codeResult.code, grant_type: 'authorization_code', redirect_uri: params.redirect_uri }), this.worker)];
                        case 3:
                            tokenResult = _a.sent();
                            decodedToken = this._verifyIdToken(tokenResult.id_token, nonceIn);
                            return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default' })];
                    }
                });
            });
        };
        Auth0Client.prototype._getTokenUsingRefreshToken = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var cache, redirect_uri, tokenResult, scope, audience, ignoreCache, timeoutInSeconds, customOptions, e_2, decodedToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options.scope = getUniqueScopes(this.defaultScope, this.options.scope, options.scope);
                            cache = this.cache.get({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            });
                            if (!((!cache || !cache.refresh_token) && !this.worker)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this._getTokenFromIFrame(options)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            redirect_uri = options.redirect_uri ||
                                this.options.redirect_uri ||
                                window.location.origin;
                            scope = options.scope, audience = options.audience, ignoreCache = options.ignoreCache, timeoutInSeconds = options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "ignoreCache", "timeoutInSeconds"]);
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 8]);
                            return [4 /*yield*/, oauthToken(__assign(__assign({}, customOptions), { baseUrl: this.domainUrl, client_id: this.options.client_id, grant_type: 'refresh_token', refresh_token: cache && cache.refresh_token, redirect_uri: redirect_uri }), this.worker)];
                        case 4:
                            tokenResult = _a.sent();
                            return [3 /*break*/, 8];
                        case 5:
                            e_2 = _a.sent();
                            if (!(e_2.message === MISSING_REFRESH_TOKEN_ERROR_MESSAGE)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this._getTokenFromIFrame(options)];
                        case 6: return [2 /*return*/, _a.sent()];
                        case 7: throw e_2;
                        case 8:
                            decodedToken = this._verifyIdToken(tokenResult.id_token);
                            return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: options.scope, audience: options.audience || 'default' })];
                    }
                });
            });
        };
        return Auth0Client;
    }());

    function createAuth0Client(options) {
        return __awaiter(this, void 0, void 0, function () {
            var auth0;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth0 = new Auth0Client(options);
                        return [4 /*yield*/, auth0.checkSession()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, auth0];
                }
            });
        });
    }

    /**
     * @ignore
     */
    var wrapper = createAuth0Client;
    wrapper.Auth0Client = Auth0Client;
    wrapper.createAuth0Client = createAuth0Client;

    return wrapper;

})));
('Auth0Client' in this) && this.console && this.console.warn && this.console.warn('Auth0Client already declared on the global namespace');
this && this.createAuth0Client && (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.development.js.map
