(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/new-platform/node_modules/@zag-js/utils/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/array.ts
__turbopack_context__.s([
    "add",
    ()=>add,
    "addOrRemove",
    ()=>addOrRemove,
    "callAll",
    ()=>callAll,
    "cast",
    ()=>cast,
    "chunk",
    ()=>chunk,
    "clampPercent",
    ()=>clampPercent,
    "clampValue",
    ()=>clampValue,
    "clear",
    ()=>clear,
    "compact",
    ()=>compact,
    "createSplitProps",
    ()=>createSplitProps,
    "createStore",
    ()=>createStore,
    "debounce",
    ()=>debounce,
    "decrementValue",
    ()=>decrementValue,
    "diff",
    ()=>diff,
    "ensure",
    ()=>ensure,
    "ensureProps",
    ()=>ensureProps,
    "first",
    ()=>first,
    "flatArray",
    ()=>flatArray,
    "fromLength",
    ()=>fromLength,
    "getClosestValue",
    ()=>getClosestValue,
    "getClosestValueIndex",
    ()=>getClosestValueIndex,
    "getMaxValueAtIndex",
    ()=>getMaxValueAtIndex,
    "getMinValueAtIndex",
    ()=>getMinValueAtIndex,
    "getNextStepValue",
    ()=>getNextStepValue,
    "getPercentValue",
    ()=>getPercentValue,
    "getPreviousStepValue",
    ()=>getPreviousStepValue,
    "getValuePercent",
    ()=>getValuePercent,
    "getValueRanges",
    ()=>getValueRanges,
    "getValueSetterAtIndex",
    ()=>getValueSetterAtIndex,
    "getValueTransformer",
    ()=>getValueTransformer,
    "has",
    ()=>has,
    "hasProp",
    ()=>hasProp,
    "identity",
    ()=>identity,
    "incrementValue",
    ()=>incrementValue,
    "insertAt",
    ()=>insertAt,
    "invariant",
    ()=>invariant,
    "isArray",
    ()=>isArray,
    "isBoolean",
    ()=>isBoolean,
    "isDev",
    ()=>isDev,
    "isEmpty",
    ()=>isEmpty,
    "isEqual",
    ()=>isEqual,
    "isFunction",
    ()=>isFunction,
    "isNaN",
    ()=>isNaN,
    "isNull",
    ()=>isNull,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "isObjectLike",
    ()=>isObjectLike,
    "isPlainObject",
    ()=>isPlainObject,
    "isString",
    ()=>isString,
    "isValueAtMax",
    ()=>isValueAtMax,
    "isValueAtMin",
    ()=>isValueAtMin,
    "isValueWithinRange",
    ()=>isValueWithinRange,
    "json",
    ()=>json,
    "last",
    ()=>last,
    "match",
    ()=>match,
    "mod",
    ()=>mod,
    "nan",
    ()=>nan,
    "next",
    ()=>next,
    "nextIndex",
    ()=>nextIndex,
    "noop",
    ()=>noop,
    "omit",
    ()=>omit,
    "partition",
    ()=>partition,
    "pick",
    ()=>pick,
    "prev",
    ()=>prev,
    "prevIndex",
    ()=>prevIndex,
    "remove",
    ()=>remove,
    "removeAt",
    ()=>removeAt,
    "roundToDpr",
    ()=>roundToDpr,
    "roundToStepPrecision",
    ()=>roundToStepPrecision,
    "roundValue",
    ()=>roundValue,
    "runIfFn",
    ()=>runIfFn,
    "setRafInterval",
    ()=>setRafInterval,
    "setRafTimeout",
    ()=>setRafTimeout,
    "setValueAtIndex",
    ()=>setValueAtIndex,
    "snapValueToStep",
    ()=>snapValueToStep,
    "splitProps",
    ()=>splitProps,
    "throttle",
    ()=>throttle,
    "toArray",
    ()=>toArray,
    "toFixedNumber",
    ()=>toFixedNumber,
    "toPx",
    ()=>toPx,
    "tryCatch",
    ()=>tryCatch,
    "uniq",
    ()=>uniq,
    "uuid",
    ()=>uuid,
    "warn",
    ()=>warn,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function toArray(v) {
    if (v == null) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
var fromLength = (length)=>Array.from(Array(length).keys());
var first = (v)=>v[0];
var last = (v)=>v[v.length - 1];
var isEmpty = (v)=>v.length === 0;
var has = (v, t)=>v.indexOf(t) !== -1;
var add = function(v) {
    for(var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        items[_key - 1] = arguments[_key];
    }
    return v.concat(items);
};
var remove = function(v) {
    for(var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        items[_key - 1] = arguments[_key];
    }
    return v.filter((t)=>!items.includes(t));
};
var removeAt = (v, i)=>v.filter((_, idx)=>idx !== i);
var insertAt = function(v, i) {
    for(var _len = arguments.length, items = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        items[_key - 2] = arguments[_key];
    }
    return [
        ...v.slice(0, i),
        ...items,
        ...v.slice(i)
    ];
};
var uniq = (v)=>Array.from(new Set(v));
var diff = (a, b)=>{
    const set = new Set(b);
    return a.filter((t)=>!set.has(t));
};
var addOrRemove = (v, item)=>has(v, item) ? remove(v, item) : add(v, item);
function clear(v) {
    while(v.length > 0)v.pop();
    return v;
}
function nextIndex(v, idx) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { step = 1, loop = true } = opts;
    const next2 = idx + step;
    const len = v.length;
    const last2 = len - 1;
    if (idx === -1) return step > 0 ? 0 : last2;
    if (next2 < 0) return loop ? last2 : 0;
    if (next2 >= len) return loop ? 0 : idx > len ? len : idx;
    return next2;
}
function next(v, idx) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return v[nextIndex(v, idx, opts)];
}
function prevIndex(v, idx) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { step = 1, loop = true } = opts;
    return nextIndex(v, idx, {
        step: -step,
        loop
    });
}
function prev(v, index) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return v[prevIndex(v, index, opts)];
}
function chunk(v, size) {
    return v.reduce((rows, value, index)=>{
        var _last;
        if (index % size === 0) rows.push([
            value
        ]);
        else (_last = last(rows)) === null || _last === void 0 ? void 0 : _last.push(value);
        return rows;
    }, []);
}
function flatArray(arr) {
    return arr.reduce((flat, item)=>{
        if (Array.isArray(item)) {
            return flat.concat(flatArray(item));
        }
        return flat.concat(item);
    }, []);
}
function partition(arr, fn) {
    return arr.reduce((param, value)=>{
        let [pass, fail] = param;
        if (fn(value)) pass.push(value);
        else fail.push(value);
        return [
            pass,
            fail
        ];
    }, [
        [],
        []
    ]);
}
// src/equal.ts
var isArrayLike = (value)=>(value === null || value === void 0 ? void 0 : value.constructor.name) === "Array";
var isArrayEqual = (a, b)=>{
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (!isEqual(a[i], b[i])) return false;
    }
    return true;
};
var isEqual = (a, b)=>{
    if (Object.is(a, b)) return true;
    if (a == null && b != null || a != null && b == null) return false;
    if (typeof (a === null || a === void 0 ? void 0 : a.isEqual) === "function" && typeof (b === null || b === void 0 ? void 0 : b.isEqual) === "function") {
        return a.isEqual(b);
    }
    if (typeof a === "function" && typeof b === "function") {
        return a.toString() === b.toString();
    }
    if (isArrayLike(a) && isArrayLike(b)) {
        return isArrayEqual(Array.from(a), Array.from(b));
    }
    if (!(typeof a === "object") || !(typeof b === "object")) return false;
    const keys = Object.keys(b !== null && b !== void 0 ? b : /* @__PURE__ */ Object.create(null));
    const length = keys.length;
    for(let i = 0; i < length; i++){
        const hasKey = Reflect.has(a, keys[i]);
        if (!hasKey) return false;
    }
    for(let i = 0; i < length; i++){
        const key = keys[i];
        if (!isEqual(a[key], b[key])) return false;
    }
    return true;
};
// src/guard.ts
var isDev = ()=>("TURBOPACK compile-time value", "development") !== "production";
var isArray = (v)=>Array.isArray(v);
var isBoolean = (v)=>v === true || v === false;
var isObjectLike = (v)=>v != null && typeof v === "object";
var isObject = (v)=>isObjectLike(v) && !isArray(v);
var isNumber = (v)=>typeof v === "number" && !Number.isNaN(v);
var isString = (v)=>typeof v === "string";
var isFunction = (v)=>typeof v === "function";
var isNull = (v)=>v == null;
var hasProp = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
var baseGetTag = (v)=>Object.prototype.toString.call(v);
var fnToString = Function.prototype.toString;
var objectCtorString = fnToString.call(Object);
var isPlainObject = (v)=>{
    if (!isObjectLike(v) || baseGetTag(v) != "[object Object]" || isFrameworkElement(v)) return false;
    const proto = Object.getPrototypeOf(v);
    if (proto === null) return true;
    const Ctor = hasProp(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && fnToString.call(Ctor) == objectCtorString;
};
var isReactElement = (x)=>typeof x === "object" && x !== null && "$$typeof" in x && "props" in x;
var isVueElement = (x)=>typeof x === "object" && x !== null && "__v_isVNode" in x;
var isFrameworkElement = (x)=>isReactElement(x) || isVueElement(x);
// src/functions.ts
var runIfFn = function(v) {
    for(var _len = arguments.length, a = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        a[_key - 1] = arguments[_key];
    }
    const res = typeof v === "function" ? v(...a) : v;
    return res !== null && res !== void 0 ? res : void 0;
};
var cast = (v)=>v;
var identity = (v)=>v();
var noop = ()=>{};
var callAll = function() {
    for(var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++){
        fns[_key] = arguments[_key];
    }
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
            a[_key] = arguments[_key];
        }
        fns.forEach(function(fn) {
            fn === null || fn === void 0 ? void 0 : fn(...a);
        });
    };
};
var uuid = /* @__PURE__ */ (()=>{
    let id = 0;
    return ()=>{
        id++;
        return id.toString(36);
    };
})();
function match(key, record) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    var _Error_captureStackTrace, _Error;
    if (key in record) {
        const fn = record[key];
        return isFunction(fn) ? fn(...args) : fn;
    }
    const error = new Error("No matching key: ".concat(JSON.stringify(key), " in ").concat(JSON.stringify(Object.keys(record))));
    (_Error_captureStackTrace = (_Error = Error).captureStackTrace) === null || _Error_captureStackTrace === void 0 ? void 0 : _Error_captureStackTrace.call(_Error, error, match);
    throw error;
}
var tryCatch = (fn, fallback)=>{
    try {
        return fn();
    } catch (error) {
        if (error instanceof Error) {
            var _Error_captureStackTrace, _Error;
            (_Error_captureStackTrace = (_Error = Error).captureStackTrace) === null || _Error_captureStackTrace === void 0 ? void 0 : _Error_captureStackTrace.call(_Error, error, tryCatch);
        }
        return fallback === null || fallback === void 0 ? void 0 : fallback();
    }
};
function throttle(fn) {
    let wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let lastCall = 0;
    let timeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const now = Date.now();
        const timeSinceLastCall = now - lastCall;
        if (timeSinceLastCall >= wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            fn(...args);
            lastCall = now;
        } else if (!timeout) {
            timeout = setTimeout(()=>{
                fn(...args);
                lastCall = Date.now();
                timeout = null;
            }, wait - timeSinceLastCall);
        }
    };
}
function debounce(fn) {
    let wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    let timeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(()=>{
            fn(...args);
        }, wait);
    };
}
// src/number.ts
var { floor, abs, round, min, max, pow, sign } = Math;
var isNaN = (v)=>Number.isNaN(v);
var nan = (v)=>isNaN(v) ? 0 : v;
var mod = (v, m)=>(v % m + m) % m;
var wrap = (v, vmax)=>(v % vmax + vmax) % vmax;
var getMinValueAtIndex = (i, v, vmin)=>i === 0 ? vmin : v[i - 1];
var getMaxValueAtIndex = (i, v, vmax)=>i === v.length - 1 ? vmax : v[i + 1];
var isValueAtMax = (v, vmax)=>nan(v) >= vmax;
var isValueAtMin = (v, vmin)=>nan(v) <= vmin;
var isValueWithinRange = (v, vmin, vmax)=>{
    const value = nan(v);
    const minCheck = vmin == null || value >= vmin;
    const maxCheck = vmax == null || value <= vmax;
    return minCheck && maxCheck;
};
var roundValue = (v, vmin, step)=>round((nan(v) - vmin) / step) * step + vmin;
var clampValue = (v, vmin, vmax)=>min(max(nan(v), vmin), vmax);
var clampPercent = (v)=>clampValue(v, 0, 1);
var getValuePercent = (v, vmin, vmax)=>(nan(v) - vmin) / (vmax - vmin);
var getPercentValue = (p, vmin, vmax, step)=>clampValue(roundValue(p * (vmax - vmin) + vmin, vmin, step), vmin, vmax);
var roundToStepPrecision = (v, step)=>{
    let rv = v;
    let ss = step.toString();
    let pi = ss.indexOf(".");
    let p = pi >= 0 ? ss.length - pi : 0;
    if (p > 0) {
        let pw = pow(10, p);
        rv = round(rv * pw) / pw;
    }
    return rv;
};
var roundToDpr = (v, dpr)=>typeof dpr === "number" ? floor(v * dpr + 0.5) / dpr : round(v);
var snapValueToStep = (v, vmin, vmax, step)=>{
    const min2 = vmin != null ? Number(vmin) : 0;
    const max2 = Number(vmax);
    const remainder = (v - min2) % step;
    let snapped = abs(remainder) * 2 >= step ? v + sign(remainder) * (step - abs(remainder)) : v - remainder;
    snapped = roundToStepPrecision(snapped, step);
    if (!isNaN(min2) && snapped < min2) {
        snapped = min2;
    } else if (!isNaN(max2) && snapped > max2) {
        const stepsInRange = floor((max2 - min2) / step);
        const largestValidStep = min2 + stepsInRange * step;
        snapped = stepsInRange <= 0 || largestValidStep < min2 ? max2 : largestValidStep;
    }
    return roundToStepPrecision(snapped, step);
};
var setValueAtIndex = (vs, i, v)=>{
    if (vs[i] === v) return vs;
    return [
        ...vs.slice(0, i),
        v,
        ...vs.slice(i + 1)
    ];
};
function getValueSetterAtIndex(index, ctx) {
    const minValueAtIndex = getMinValueAtIndex(index, ctx.values, ctx.min);
    const maxValueAtIndex = getMaxValueAtIndex(index, ctx.values, ctx.max);
    let nextValues = ctx.values.slice();
    return function setValue(value) {
        let nextValue = snapValueToStep(value, minValueAtIndex, maxValueAtIndex, ctx.step);
        nextValues = setValueAtIndex(nextValues, index, value);
        nextValues[index] = nextValue;
        return nextValues;
    };
}
function getNextStepValue(index, ctx) {
    const nextValue = ctx.values[index] + ctx.step;
    return getValueSetterAtIndex(index, ctx)(nextValue);
}
function getPreviousStepValue(index, ctx) {
    const nextValue = ctx.values[index] - ctx.step;
    return getValueSetterAtIndex(index, ctx)(nextValue);
}
var getClosestValueIndex = (vs, t)=>{
    let i = vs.findIndex((v)=>t - v < 0);
    if (i === 0) return i;
    if (i === -1) return vs.length - 1;
    let vLeft = vs[i - 1];
    let vRight = vs[i];
    if (abs(vLeft - t) < abs(vRight - t)) return i - 1;
    return i;
};
var getClosestValue = (vs, t)=>vs[getClosestValueIndex(vs, t)];
var getValueRanges = (vs, vmin, vmax, gap)=>vs.map((v, i)=>({
            min: i === 0 ? vmin : vs[i - 1] + gap,
            max: i === vs.length - 1 ? vmax : vs[i + 1] - gap,
            value: v
        }));
var getValueTransformer = (va, vb)=>{
    const [a, b] = va;
    const [c, d] = vb;
    return (v)=>a === b || c === d ? c : c + (d - c) / (b - a) * (v - a);
};
var toFixedNumber = function(v) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
    const pow2 = Math.pow(b, d);
    return round(v * pow2) / pow2;
};
var countDecimals = (value)=>{
    if (!Number.isFinite(value)) return 0;
    let e = 1, p = 0;
    while(Math.round(value * e) / e !== value){
        e *= 10;
        p += 1;
    }
    return p;
};
var decimalOp = (a, op, b)=>{
    let result = op === "+" ? a + b : a - b;
    if (a % 1 !== 0 || b % 1 !== 0) {
        const multiplier = 10 ** Math.max(countDecimals(a), countDecimals(b));
        a = Math.round(a * multiplier);
        b = Math.round(b * multiplier);
        result = op === "+" ? a + b : a - b;
        result /= multiplier;
    }
    return result;
};
var incrementValue = (v, s)=>decimalOp(nan(v), "+", s);
var decrementValue = (v, s)=>decimalOp(nan(v), "-", s);
var toPx = (v)=>v != null ? "".concat(v, "px") : void 0;
// src/object.ts
function compact(obj) {
    if (!isPlainObject(obj) || obj === void 0) return obj;
    const keys = Reflect.ownKeys(obj).filter((key)=>typeof key === "string");
    const filtered = {};
    for (const key of keys){
        const value = obj[key];
        if (value !== void 0) {
            filtered[key] = compact(value);
        }
    }
    return filtered;
}
var json = (v)=>JSON.parse(JSON.stringify(v));
function pick(obj, keys) {
    const filtered = {};
    for (const key of keys){
        const value = obj[key];
        if (value !== void 0) {
            filtered[key] = value;
        }
    }
    return filtered;
}
function splitProps(props, keys) {
    const rest = {};
    const result = {};
    const keySet = new Set(keys);
    for(const key in props){
        if (keySet.has(key)) {
            result[key] = props[key];
        } else {
            rest[key] = props[key];
        }
    }
    return [
        result,
        rest
    ];
}
var createSplitProps = (keys)=>{
    return function split(props) {
        return splitProps(props, keys);
    };
};
function omit(obj, keys) {
    return createSplitProps(keys)(obj)[1];
}
// src/store.ts
function createStore(initialState) {
    let compare = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Object.is;
    let state = {
        ...initialState
    };
    const listeners = /* @__PURE__ */ new Set();
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const publish = ()=>{
        listeners.forEach((listener)=>listener());
    };
    const get = (key)=>{
        return state[key];
    };
    const set = (key, value)=>{
        if (!compare(state[key], value)) {
            state[key] = value;
            publish();
        }
    };
    const update = (updates)=>{
        let hasChanges = false;
        for(const key in updates){
            const value = updates[key];
            if (value !== void 0 && !compare(state[key], value)) {
                state[key] = value;
                hasChanges = true;
            }
        }
        if (hasChanges) {
            publish();
        }
    };
    const snapshot = ()=>({
            ...state
        });
    return {
        subscribe,
        get,
        set,
        update,
        snapshot
    };
}
// src/timers.ts
function setRafInterval(callback, interval) {
    let start = performance.now();
    let handle;
    function loop(now) {
        const delta = now - start;
        if (delta >= interval) {
            start = interval > 0 ? now - delta % interval : now;
            callback({
                startMs: start,
                deltaMs: delta
            });
        }
        handle = requestAnimationFrame(loop);
    }
    handle = requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(handle);
}
function setRafTimeout(callback, delay) {
    const start = performance.now();
    let handle;
    function loop(now) {
        const delta = now - start;
        if (delta >= delay) {
            callback();
            return;
        }
        handle = requestAnimationFrame(loop);
    }
    handle = requestAnimationFrame(loop);
    return ()=>cancelAnimationFrame(handle);
}
// src/warning.ts
function warn() {
    for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
        a[_key] = arguments[_key];
    }
    const m = a.length === 1 ? a[0] : a[1];
    const c = a.length === 2 ? a[0] : true;
    if (c && ("TURBOPACK compile-time value", "development") !== "production") {
        console.warn(m);
    }
}
function invariant() {
    for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
        a[_key] = arguments[_key];
    }
    const m = a.length === 1 ? a[0] : a[1];
    const c = a.length === 2 ? a[0] : true;
    if (c && ("TURBOPACK compile-time value", "development") !== "production") {
        throw new Error(m);
    }
}
function ensure(c, m) {
    if (c == null) throw new Error(m());
}
function ensureProps(props, keys, scope) {
    let missingKeys = [];
    for (const key of keys){
        if (props[key] == null) missingKeys.push(key);
    }
    if (missingKeys.length > 0) throw new Error("[zag-js".concat(scope ? " > ".concat(scope) : "", "] missing required props: ").concat(missingKeys.join(", ")));
}
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/dom-query/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/caret.ts
__turbopack_context__.s([
    "MAX_Z_INDEX",
    ()=>MAX_Z_INDEX,
    "addDomEvent",
    ()=>addDomEvent,
    "ariaAttr",
    ()=>ariaAttr,
    "clickIfLink",
    ()=>clickIfLink,
    "contains",
    ()=>contains,
    "createScope",
    ()=>createScope,
    "dataAttr",
    ()=>dataAttr,
    "defaultItemToId",
    ()=>defaultItemToId,
    "disableTextSelection",
    ()=>disableTextSelection,
    "dispatchInputCheckedEvent",
    ()=>dispatchInputCheckedEvent,
    "dispatchInputValueEvent",
    ()=>dispatchInputValueEvent,
    "getActiveElement",
    ()=>getActiveElement,
    "getBeforeInputValue",
    ()=>getBeforeInputValue,
    "getByText",
    ()=>getByText,
    "getByTypeahead",
    ()=>getByTypeahead,
    "getComputedStyle",
    ()=>getComputedStyle,
    "getDataUrl",
    ()=>getDataUrl,
    "getDocument",
    ()=>getDocument,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getEventKey",
    ()=>getEventKey,
    "getEventPoint",
    ()=>getEventPoint,
    "getEventStep",
    ()=>getEventStep,
    "getEventTarget",
    ()=>getEventTarget,
    "getFirstFocusable",
    ()=>getFirstFocusable,
    "getFirstTabbable",
    ()=>getFirstTabbable,
    "getFocusables",
    ()=>getFocusables,
    "getInitialFocus",
    ()=>getInitialFocus,
    "getLastTabbable",
    ()=>getLastTabbable,
    "getNativeEvent",
    ()=>getNativeEvent,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNextTabbable",
    ()=>getNextTabbable,
    "getNodeName",
    ()=>getNodeName,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getPlatform",
    ()=>getPlatform,
    "getRelativePoint",
    ()=>getRelativePoint,
    "getScrollPosition",
    ()=>getScrollPosition,
    "getTabIndex",
    ()=>getTabIndex,
    "getTabbableEdges",
    ()=>getTabbableEdges,
    "getTabbables",
    ()=>getTabbables,
    "getUserAgent",
    ()=>getUserAgent,
    "getWindow",
    ()=>getWindow,
    "indexOfId",
    ()=>indexOfId,
    "isActiveElement",
    ()=>isActiveElement,
    "isAnchorElement",
    ()=>isAnchorElement,
    "isAndroid",
    ()=>isAndroid,
    "isApple",
    ()=>isApple,
    "isCaretAtStart",
    ()=>isCaretAtStart,
    "isChrome",
    ()=>isChrome,
    "isComposingEvent",
    ()=>isComposingEvent,
    "isContextMenuEvent",
    ()=>isContextMenuEvent,
    "isCtrlOrMetaKey",
    ()=>isCtrlOrMetaKey,
    "isDocument",
    ()=>isDocument,
    "isDom",
    ()=>isDom,
    "isDownloadingEvent",
    ()=>isDownloadingEvent,
    "isEditableElement",
    ()=>isEditableElement,
    "isElementVisible",
    ()=>isElementVisible,
    "isFirefox",
    ()=>isFirefox,
    "isFocusable",
    ()=>isFocusable,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isIPad",
    ()=>isIPad,
    "isIPhone",
    ()=>isIPhone,
    "isInView",
    ()=>isInView,
    "isInputElement",
    ()=>isInputElement,
    "isIos",
    ()=>isIos,
    "isKeyboardClick",
    ()=>isKeyboardClick,
    "isLeftClick",
    ()=>isLeftClick,
    "isMac",
    ()=>isMac,
    "isModifierKey",
    ()=>isModifierKey,
    "isNode",
    ()=>isNode,
    "isOpeningInNewTab",
    ()=>isOpeningInNewTab,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isPrintableKey",
    ()=>isPrintableKey,
    "isRootElement",
    ()=>isRootElement,
    "isSafari",
    ()=>isSafari,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTabbable",
    ()=>isTabbable,
    "isTouchDevice",
    ()=>isTouchDevice,
    "isTouchEvent",
    ()=>isTouchEvent,
    "isValidTabEvent",
    ()=>isValidTabEvent,
    "isVirtualClick",
    ()=>isVirtualClick,
    "isVirtualPointerEvent",
    ()=>isVirtualPointerEvent,
    "isVisualViewport",
    ()=>isVisualViewport,
    "isWebKit",
    ()=>isWebKit,
    "isWindow",
    ()=>isWindow,
    "itemById",
    ()=>itemById,
    "nextById",
    ()=>nextById,
    "nextTick",
    ()=>nextTick,
    "observeAttributes",
    ()=>observeAttributes,
    "observeChildren",
    ()=>observeChildren,
    "prevById",
    ()=>prevById,
    "proxyTabFocus",
    ()=>proxyTabFocus,
    "query",
    ()=>query,
    "queryAll",
    ()=>queryAll,
    "queueBeforeEvent",
    ()=>queueBeforeEvent,
    "raf",
    ()=>raf,
    "requestPointerLock",
    ()=>requestPointerLock,
    "restoreTextSelection",
    ()=>restoreTextSelection,
    "scrollIntoView",
    ()=>scrollIntoView,
    "setAttribute",
    ()=>setAttribute,
    "setCaretToEnd",
    ()=>setCaretToEnd,
    "setElementChecked",
    ()=>setElementChecked,
    "setElementValue",
    ()=>setElementValue,
    "setProperty",
    ()=>setProperty,
    "setStyle",
    ()=>setStyle,
    "setStyleProperty",
    ()=>setStyleProperty,
    "setVisuallyHidden",
    ()=>setVisuallyHidden,
    "trackElementRect",
    ()=>trackElementRect,
    "trackFormControl",
    ()=>trackFormControl,
    "trackPointerMove",
    ()=>trackPointerMove,
    "trackPress",
    ()=>trackPress,
    "trackVisualViewport",
    ()=>trackVisualViewport,
    "visuallyHiddenStyle",
    ()=>visuallyHiddenStyle,
    "waitForElement",
    ()=>waitForElement,
    "waitForPromise",
    ()=>waitForPromise
]);
function isCaretAtStart(input) {
    if (!input) return false;
    try {
        return input.selectionStart === 0 && input.selectionEnd === 0;
    } catch (e) {
        return input.value === "";
    }
}
function setCaretToEnd(input) {
    if (!input) return;
    var _input_selectionStart;
    const start = (_input_selectionStart = input.selectionStart) !== null && _input_selectionStart !== void 0 ? _input_selectionStart : 0;
    var _input_selectionEnd;
    const end = (_input_selectionEnd = input.selectionEnd) !== null && _input_selectionEnd !== void 0 ? _input_selectionEnd : 0;
    if (Math.abs(end - start) !== 0) return;
    if (start !== 0) return;
    input.setSelectionRange(input.value.length, input.value.length);
}
// src/shared.ts
var clamp = (value)=>Math.max(0, Math.min(1, value));
var wrap = (v, idx)=>{
    return v.map((_, index)=>v[(Math.max(idx, 0) + index) % v.length]);
};
var pipe = function() {
    for(var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++){
        fns[_key] = arguments[_key];
    }
    return (arg)=>fns.reduce((acc, fn)=>fn(acc), arg);
};
var noop = ()=>void 0;
var isObject = (v)=>typeof v === "object" && v !== null;
var MAX_Z_INDEX = 2147483647;
var dataAttr = (guard)=>guard ? "" : void 0;
var ariaAttr = (guard)=>guard ? "true" : void 0;
// src/node.ts
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
var isHTMLElement = (el)=>isObject(el) && el.nodeType === ELEMENT_NODE && typeof el.nodeName === "string";
var isDocument = (el)=>isObject(el) && el.nodeType === DOCUMENT_NODE;
var isWindow = (el)=>isObject(el) && el === el.window;
var isVisualViewport = (el)=>isObject(el) && el.constructor.name === "VisualViewport";
var getNodeName = (node)=>{
    if (isHTMLElement(node)) return node.localName || "";
    return "#document";
};
function isRootElement(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes(getNodeName(node));
}
var isNode = (el)=>isObject(el) && el.nodeType !== void 0;
var isShadowRoot = (el)=>isNode(el) && el.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in el;
var isInputElement = (el)=>isHTMLElement(el) && el.localName === "input";
var isAnchorElement = (el)=>!!(el === null || el === void 0 ? void 0 : el.matches("a[href]"));
var isElementVisible = (el)=>{
    if (!isHTMLElement(el)) return false;
    return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
};
function isActiveElement(element) {
    if (!element) return false;
    const rootNode = element.getRootNode();
    return getActiveElement(rootNode) === element;
}
var TEXTAREA_SELECT_REGEX = /(textarea|select)/;
function isEditableElement(el) {
    if (el == null || !isHTMLElement(el)) return false;
    try {
        return isInputElement(el) && el.selectionStart != null || TEXTAREA_SELECT_REGEX.test(el.localName) || el.isContentEditable || el.getAttribute("contenteditable") === "true" || el.getAttribute("contenteditable") === "";
    } catch (e) {
        return false;
    }
}
function contains(parent, child) {
    var _child_getRootNode;
    if (!parent || !child) return false;
    if (!isHTMLElement(parent) || !isHTMLElement(child)) return false;
    const rootNode = (_child_getRootNode = child.getRootNode) === null || _child_getRootNode === void 0 ? void 0 : _child_getRootNode.call(child);
    if (parent === child) return true;
    if (parent.contains(child)) return true;
    if (rootNode && isShadowRoot(rootNode)) {
        let next = child;
        while(next){
            if (parent === next) return true;
            next = next.parentNode || next.host;
        }
    }
    return false;
}
function getDocument(el) {
    if (isDocument(el)) return el;
    if (isWindow(el)) return el.document;
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
}
function getDocumentElement(el) {
    return getDocument(el).documentElement;
}
function getWindow(el) {
    var _el_ownerDocument;
    if (isShadowRoot(el)) return getWindow(el.host);
    var _el_defaultView;
    if (isDocument(el)) return (_el_defaultView = el.defaultView) !== null && _el_defaultView !== void 0 ? _el_defaultView : window;
    var _el_ownerDocument_defaultView;
    if (isHTMLElement(el)) return (_el_ownerDocument_defaultView = (_el_ownerDocument = el.ownerDocument) === null || _el_ownerDocument === void 0 ? void 0 : _el_ownerDocument.defaultView) !== null && _el_ownerDocument_defaultView !== void 0 ? _el_ownerDocument_defaultView : window;
    return window;
}
function getActiveElement(rootNode) {
    let activeElement = rootNode.activeElement;
    while(activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot){
        const el = activeElement.shadowRoot.activeElement;
        if (!el || el === activeElement) break;
        else activeElement = el;
    }
    return activeElement;
}
function getParentNode(node) {
    if (getNodeName(node) === "html") return node;
    const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
// src/computed-style.ts
var styleCache = /* @__PURE__ */ new WeakMap();
function getComputedStyle(el) {
    if (!styleCache.has(el)) {
        styleCache.set(el, getWindow(el).getComputedStyle(el));
    }
    return styleCache.get(el);
}
// src/data-url.ts
function getDataUrl(svg, opts) {
    const { type, quality = 0.92, background } = opts;
    if (!svg) throw new Error("[zag-js > getDataUrl]: Could not find the svg element");
    const win = getWindow(svg);
    const doc = win.document;
    const svgBounds = svg.getBoundingClientRect();
    const svgClone = svg.cloneNode(true);
    if (!svgClone.hasAttribute("viewBox")) {
        svgClone.setAttribute("viewBox", "0 0 ".concat(svgBounds.width, " ").concat(svgBounds.height));
    }
    const serializer = new win.XMLSerializer();
    const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(svgClone);
    const svgString = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    if (type === "image/svg+xml") {
        return Promise.resolve(svgString).then((str)=>{
            svgClone.remove();
            return str;
        });
    }
    const dpr = win.devicePixelRatio || 1;
    const canvas = doc.createElement("canvas");
    const image = new win.Image();
    image.src = svgString;
    canvas.width = svgBounds.width * dpr;
    canvas.height = svgBounds.height * dpr;
    const context = canvas.getContext("2d");
    if (type === "image/jpeg" || background) {
        context.fillStyle = background || "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    return new Promise((resolve)=>{
        image.onload = ()=>{
            context === null || context === void 0 ? void 0 : context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(type, quality));
            svgClone.remove();
        };
    });
}
// src/platform.ts
var isDom = ()=>typeof document !== "undefined";
function getPlatform() {
    const agent = navigator.userAgentData;
    var _agent_platform;
    return (_agent_platform = agent === null || agent === void 0 ? void 0 : agent.platform) !== null && _agent_platform !== void 0 ? _agent_platform : navigator.platform;
}
function getUserAgent() {
    const ua2 = navigator.userAgentData;
    if (ua2 && Array.isArray(ua2.brands)) {
        return ua2.brands.map((param)=>{
            let { brand, version } = param;
            return "".concat(brand, "/").concat(version);
        }).join(" ");
    }
    return navigator.userAgent;
}
var pt = (v)=>isDom() && v.test(getPlatform());
var ua = (v)=>isDom() && v.test(getUserAgent());
var vn = (v)=>isDom() && v.test(navigator.vendor);
var isTouchDevice = ()=>isDom() && !!navigator.maxTouchPoints;
var isIPhone = ()=>pt(/^iPhone/i);
var isIPad = ()=>pt(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
var isIos = ()=>isIPhone() || isIPad();
var isApple = ()=>isMac() || isIos();
var isMac = ()=>pt(/^Mac/i);
var isSafari = ()=>isApple() && vn(/apple/i);
var isFirefox = ()=>ua(/Firefox/i);
var isChrome = ()=>ua(/Chrome/i);
var isWebKit = ()=>ua(/AppleWebKit/i) && !isChrome();
var isAndroid = ()=>ua(/Android/i);
// src/event.ts
function getBeforeInputValue(event) {
    const { selectionStart, selectionEnd, value } = event.currentTarget;
    const data = event.data;
    return value.slice(0, selectionStart) + (data !== null && data !== void 0 ? data : "") + value.slice(selectionEnd);
}
function getComposedPath(event) {
    var _event_composedPath, _event_nativeEvent_composedPath, _event_nativeEvent;
    var _event_composedPath1;
    return (_event_composedPath1 = (_event_composedPath = event.composedPath) === null || _event_composedPath === void 0 ? void 0 : _event_composedPath.call(event)) !== null && _event_composedPath1 !== void 0 ? _event_composedPath1 : (_event_nativeEvent = event.nativeEvent) === null || _event_nativeEvent === void 0 ? void 0 : (_event_nativeEvent_composedPath = _event_nativeEvent.composedPath) === null || _event_nativeEvent_composedPath === void 0 ? void 0 : _event_nativeEvent_composedPath.call(_event_nativeEvent);
}
function getEventTarget(event) {
    const composedPath = getComposedPath(event);
    var _composedPath_;
    return (_composedPath_ = composedPath === null || composedPath === void 0 ? void 0 : composedPath[0]) !== null && _composedPath_ !== void 0 ? _composedPath_ : event.target;
}
function isOpeningInNewTab(event) {
    const element = event.currentTarget;
    if (!element) return false;
    const validElement = element.matches("a[href], button[type='submit'], input[type='submit']");
    if (!validElement) return false;
    const isMiddleClick = event.button === 1;
    const isModKeyClick = isCtrlOrMetaKey(event);
    return isMiddleClick || isModKeyClick;
}
function isDownloadingEvent(event) {
    const element = event.currentTarget;
    if (!element) return false;
    const localName = element.localName;
    if (!event.altKey) return false;
    if (localName === "a") return true;
    if (localName === "button" && element.type === "submit") return true;
    if (localName === "input" && element.type === "submit") return true;
    return false;
}
function isComposingEvent(event) {
    return getNativeEvent(event).isComposing || event.keyCode === 229;
}
function isKeyboardClick(e) {
    return e.detail === 0 || e.clientX === 0 && e.clientY === 0;
}
function isCtrlOrMetaKey(e) {
    if (isMac()) return e.metaKey;
    return e.ctrlKey;
}
function isPrintableKey(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function isVirtualPointerEvent(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function isVirtualClick(e) {
    if (e.pointerType === "" && e.isTrusted) return true;
    if (isAndroid() && e.pointerType) {
        return e.type === "click" && e.buttons === 1;
    }
    return e.detail === 0 && !e.pointerType;
}
var isLeftClick = (e)=>e.button === 0;
var isContextMenuEvent = (e)=>{
    return e.button === 2 || isMac() && e.ctrlKey && e.button === 0;
};
var isModifierKey = (e)=>e.ctrlKey || e.altKey || e.metaKey;
var isTouchEvent = (event)=>"touches" in event && event.touches.length > 0;
var keyMap = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Esc: "Escape",
    " ": "Space",
    ",": "Comma",
    Left: "ArrowLeft",
    Right: "ArrowRight"
};
var rtlKeyMap = {
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft"
};
function getEventKey(event) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { dir = "ltr", orientation = "horizontal" } = options;
    let key = event.key;
    var _keyMap_key;
    key = (_keyMap_key = keyMap[key]) !== null && _keyMap_key !== void 0 ? _keyMap_key : key;
    const isRtl = dir === "rtl" && orientation === "horizontal";
    if (isRtl && key in rtlKeyMap) key = rtlKeyMap[key];
    return key;
}
function getNativeEvent(event) {
    var _event_nativeEvent;
    return (_event_nativeEvent = event.nativeEvent) !== null && _event_nativeEvent !== void 0 ? _event_nativeEvent : event;
}
var pageKeys = /* @__PURE__ */ new Set([
    "PageUp",
    "PageDown"
]);
var arrowKeys = /* @__PURE__ */ new Set([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
]);
function getEventStep(event) {
    if (event.ctrlKey || event.metaKey) {
        return 0.1;
    } else {
        const isPageKey = pageKeys.has(event.key);
        const isSkipKey = isPageKey || event.shiftKey && arrowKeys.has(event.key);
        return isSkipKey ? 10 : 1;
    }
}
function getEventPoint(event) {
    let type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "client";
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
    return {
        x: point["".concat(type, "X")],
        y: point["".concat(type, "Y")]
    };
}
var addDomEvent = (target, eventName, handler, options)=>{
    const node = typeof target === "function" ? target() : target;
    node === null || node === void 0 ? void 0 : node.addEventListener(eventName, handler, options);
    return ()=>{
        node === null || node === void 0 ? void 0 : node.removeEventListener(eventName, handler, options);
    };
};
// src/form.ts
function getDescriptor(el, options) {
    const { type = "HTMLInputElement", property = "value" } = options;
    const proto = getWindow(el)[type].prototype;
    var _Object_getOwnPropertyDescriptor;
    return (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(proto, property)) !== null && _Object_getOwnPropertyDescriptor !== void 0 ? _Object_getOwnPropertyDescriptor : {};
}
function getElementType(el) {
    if (el.localName === "input") return "HTMLInputElement";
    if (el.localName === "textarea") return "HTMLTextAreaElement";
    if (el.localName === "select") return "HTMLSelectElement";
}
function setElementValue(el, value) {
    let property = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "value";
    if (!el) return;
    const type = getElementType(el);
    if (type) {
        var _descriptor_set;
        const descriptor = getDescriptor(el, {
            type,
            property
        });
        (_descriptor_set = descriptor.set) === null || _descriptor_set === void 0 ? void 0 : _descriptor_set.call(el, value);
    }
    el.setAttribute(property, value);
}
function setElementChecked(el, checked) {
    var _descriptor_set;
    if (!el) return;
    const descriptor = getDescriptor(el, {
        type: "HTMLInputElement",
        property: "checked"
    });
    (_descriptor_set = descriptor.set) === null || _descriptor_set === void 0 ? void 0 : _descriptor_set.call(el, checked);
    if (checked) el.setAttribute("checked", "");
    else el.removeAttribute("checked");
}
function dispatchInputValueEvent(el, options) {
    const { value, bubbles = true } = options;
    if (!el) return;
    const win = getWindow(el);
    if (!(el instanceof win.HTMLInputElement)) return;
    setElementValue(el, "".concat(value));
    el.dispatchEvent(new win.Event("input", {
        bubbles
    }));
}
function dispatchInputCheckedEvent(el, options) {
    const { checked, bubbles = true } = options;
    if (!el) return;
    const win = getWindow(el);
    if (!(el instanceof win.HTMLInputElement)) return;
    setElementChecked(el, checked);
    el.dispatchEvent(new win.Event("click", {
        bubbles
    }));
}
function getClosestForm(el) {
    return isFormElement(el) ? el.form : el.closest("form");
}
function isFormElement(el) {
    return el.matches("textarea, input, select, button");
}
function trackFormReset(el, callback) {
    if (!el) return;
    const form = getClosestForm(el);
    const onReset = (e)=>{
        if (e.defaultPrevented) return;
        callback();
    };
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset, {
        passive: true
    });
    return ()=>form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
}
function trackFieldsetDisabled(el, callback) {
    const fieldset = el === null || el === void 0 ? void 0 : el.closest("fieldset");
    if (!fieldset) return;
    callback(fieldset.disabled);
    const win = getWindow(fieldset);
    const obs = new win.MutationObserver(()=>callback(fieldset.disabled));
    obs.observe(fieldset, {
        attributes: true,
        attributeFilter: [
            "disabled"
        ]
    });
    return ()=>obs.disconnect();
}
function trackFormControl(el, options) {
    if (!el) return;
    const { onFieldsetDisabledChange, onFormReset } = options;
    const cleanups = [
        trackFormReset(el, onFormReset),
        trackFieldsetDisabled(el, onFieldsetDisabledChange)
    ];
    return ()=>cleanups.forEach((cleanup)=>cleanup === null || cleanup === void 0 ? void 0 : cleanup());
}
// src/tabbable.ts
var isFrame = (el)=>isHTMLElement(el) && el.tagName === "IFRAME";
var hasTabIndex = (el)=>!Number.isNaN(parseInt(el.getAttribute("tabindex") || "0", 10));
var hasNegativeTabIndex = (el)=>parseInt(el.getAttribute("tabindex") || "0", 10) < 0;
var focusableSelector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var getFocusables = function(container) {
    let includeContainer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!container) return [];
    const elements = Array.from(container.querySelectorAll(focusableSelector));
    const include = includeContainer == true || includeContainer == "if-empty" && elements.length === 0;
    if (include && isHTMLElement(container) && isFocusable(container)) {
        elements.unshift(container);
    }
    const focusableElements = elements.filter(isFocusable);
    focusableElements.forEach((element, i)=>{
        if (isFrame(element) && element.contentDocument) {
            const frameBody = element.contentDocument.body;
            focusableElements.splice(i, 1, ...getFocusables(frameBody));
        }
    });
    return focusableElements;
};
function isFocusable(element) {
    if (!element || element.closest("[inert]")) return false;
    return element.matches(focusableSelector) && isElementVisible(element);
}
function getFirstFocusable(container, includeContainer) {
    const [first] = getFocusables(container, includeContainer);
    return first || null;
}
function getTabbables(container, includeContainer) {
    if (!container) return [];
    const elements = Array.from(container.querySelectorAll(focusableSelector));
    const tabbableElements = elements.filter(isTabbable);
    if (includeContainer && isTabbable(container)) {
        tabbableElements.unshift(container);
    }
    tabbableElements.forEach((element, i)=>{
        if (isFrame(element) && element.contentDocument) {
            const frameBody = element.contentDocument.body;
            const allFrameTabbable = getTabbables(frameBody);
            tabbableElements.splice(i, 1, ...allFrameTabbable);
        }
    });
    if (!tabbableElements.length && includeContainer) {
        return elements;
    }
    return tabbableElements;
}
function isTabbable(el) {
    if (el != null && el.tabIndex > 0) return true;
    return isFocusable(el) && !hasNegativeTabIndex(el);
}
function getFirstTabbable(container, includeContainer) {
    const [first] = getTabbables(container, includeContainer);
    return first || null;
}
function getLastTabbable(container, includeContainer) {
    const elements = getTabbables(container, includeContainer);
    return elements[elements.length - 1] || null;
}
function getTabbableEdges(container, includeContainer) {
    const elements = getTabbables(container, includeContainer);
    const first = elements[0] || null;
    const last = elements[elements.length - 1] || null;
    return [
        first,
        last
    ];
}
function getNextTabbable(container, current) {
    const tabbables = getTabbables(container);
    const doc = (container === null || container === void 0 ? void 0 : container.ownerDocument) || document;
    const currentElement = current !== null && current !== void 0 ? current : getActiveElement(doc);
    if (!currentElement) return null;
    const index = tabbables.indexOf(currentElement);
    return tabbables[index + 1] || null;
}
function getTabIndex(node) {
    if (node.tabIndex < 0) {
        if ((/^(audio|video|details)$/.test(node.localName) || isEditableElement(node)) && !hasTabIndex(node)) {
            return 0;
        }
    }
    return node.tabIndex;
}
// src/initial-focus.ts
function getInitialFocus(options) {
    const { root, getInitialEl, filter, enabled = true } = options;
    if (!enabled) return;
    let node = null;
    node || (node = typeof getInitialEl === "function" ? getInitialEl() : getInitialEl);
    node || (node = root === null || root === void 0 ? void 0 : root.querySelector("[data-autofocus],[autofocus]"));
    if (!node) {
        const tabbables = getTabbables(root);
        node = filter ? tabbables.filter(filter)[0] : tabbables[0];
    }
    return node || root || void 0;
}
function isValidTabEvent(event) {
    const container = event.currentTarget;
    if (!container) return false;
    const [firstTabbable, lastTabbable] = getTabbableEdges(container);
    if (isActiveElement(firstTabbable) && event.shiftKey) return false;
    if (isActiveElement(lastTabbable) && !event.shiftKey) return false;
    if (!firstTabbable && !lastTabbable) return false;
    return true;
}
// src/raf.ts
function nextTick(fn) {
    const set = /* @__PURE__ */ new Set();
    function raf2(fn2) {
        const id = globalThis.requestAnimationFrame(fn2);
        set.add(()=>globalThis.cancelAnimationFrame(id));
    }
    raf2(()=>raf2(fn));
    return function cleanup() {
        set.forEach((fn2)=>fn2());
    };
}
function raf(fn) {
    let cleanup;
    const id = globalThis.requestAnimationFrame(()=>{
        cleanup = fn();
    });
    return ()=>{
        globalThis.cancelAnimationFrame(id);
        cleanup === null || cleanup === void 0 ? void 0 : cleanup();
    };
}
function queueBeforeEvent(el, type, cb) {
    const cancelTimer = raf(()=>{
        el.removeEventListener(type, exec, true);
        cb();
    });
    const exec = ()=>{
        cancelTimer();
        cb();
    };
    el.addEventListener(type, exec, {
        once: true,
        capture: true
    });
    return cancelTimer;
}
// src/mutation-observer.ts
function observeAttributesImpl(node, options) {
    if (!node) return;
    const { attributes, callback: fn } = options;
    const win = node.ownerDocument.defaultView || window;
    const obs = new win.MutationObserver((changes)=>{
        for (const change of changes){
            if (change.type === "attributes" && change.attributeName && attributes.includes(change.attributeName)) {
                fn(change);
            }
        }
    });
    obs.observe(node, {
        attributes: true,
        attributeFilter: attributes
    });
    return ()=>obs.disconnect();
}
function observeAttributes(nodeOrFn, options) {
    const { defer } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
        cleanups.push(observeAttributesImpl(node, options));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn === null || fn === void 0 ? void 0 : fn());
    };
}
function observeChildrenImpl(node, options) {
    const { callback: fn } = options;
    if (!node) return;
    const win = node.ownerDocument.defaultView || window;
    const obs = new win.MutationObserver(fn);
    obs.observe(node, {
        childList: true,
        subtree: true
    });
    return ()=>obs.disconnect();
}
function observeChildren(nodeOrFn, options) {
    const { defer } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
        cleanups.push(observeChildrenImpl(node, options));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn === null || fn === void 0 ? void 0 : fn());
    };
}
// src/navigate.ts
function clickIfLink(el) {
    const click = ()=>{
        const win = getWindow(el);
        el.dispatchEvent(new win.MouseEvent("click"));
    };
    if (isFirefox()) {
        queueBeforeEvent(el, "keyup", click);
    } else {
        queueMicrotask(click);
    }
}
// src/overflow.ts
function getNearestOverflowAncestor(el) {
    const parentNode = getParentNode(el);
    if (isRootElement(parentNode)) return getDocument(parentNode).body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(el) {
    let list = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    const scrollableAncestor = getNearestOverflowAncestor(el);
    const isBody = scrollableAncestor === el.ownerDocument.body;
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
var getElementRect = (el)=>{
    if (isHTMLElement(el)) return el.getBoundingClientRect();
    if (isVisualViewport(el)) return {
        top: 0,
        left: 0,
        bottom: el.height,
        right: el.width
    };
    return {
        top: 0,
        left: 0,
        bottom: el.innerHeight,
        right: el.innerWidth
    };
};
function isInView(el, ancestor) {
    if (!isHTMLElement(el)) return true;
    const ancestorRect = getElementRect(ancestor);
    const elRect = el.getBoundingClientRect();
    return elRect.top >= ancestorRect.top && elRect.left >= ancestorRect.left && elRect.bottom <= ancestorRect.bottom && elRect.right <= ancestorRect.right;
}
var OVERFLOW_RE = /auto|scroll|overlay|hidden|clip/;
var nonOverflowValues = /* @__PURE__ */ new Set([
    "inline",
    "contents"
]);
function isOverflowElement(el) {
    const win = getWindow(el);
    const { overflow, overflowX, overflowY, display } = win.getComputedStyle(el);
    return OVERFLOW_RE.test(overflow + overflowY + overflowX) && !nonOverflowValues.has(display);
}
function isScrollable(el) {
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
}
function scrollIntoView(el, options) {
    const { rootEl, ...scrollOptions } = options || {};
    if (!el || !rootEl) return;
    if (!isOverflowElement(rootEl) || !isScrollable(rootEl)) return;
    el.scrollIntoView(scrollOptions);
}
function getScrollPosition(element) {
    if (isHTMLElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
// src/point.ts
function getRelativePoint(point, element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    const offset = {
        x: point.x - left,
        y: point.y - top
    };
    const percent = {
        x: clamp(offset.x / width),
        y: clamp(offset.y / height)
    };
    function getPercentValue() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const { dir = "ltr", orientation = "horizontal", inverted } = options;
        const invertX = typeof inverted === "object" ? inverted.x : inverted;
        const invertY = typeof inverted === "object" ? inverted.y : inverted;
        if (orientation === "horizontal") {
            return dir === "rtl" || invertX ? 1 - percent.x : percent.x;
        }
        return invertY ? 1 - percent.y : percent.y;
    }
    return {
        offset,
        percent,
        getPercentValue
    };
}
// src/pointer-lock.ts
function requestPointerLock(doc, fn) {
    const body = doc.body;
    const supported = "pointerLockElement" in doc || "mozPointerLockElement" in doc;
    const isLocked = ()=>!!doc.pointerLockElement;
    function onPointerChange() {
        fn === null || fn === void 0 ? void 0 : fn(isLocked());
    }
    function onPointerError(event) {
        if (isLocked()) fn === null || fn === void 0 ? void 0 : fn(false);
        console.error("PointerLock error occurred:", event);
        doc.exitPointerLock();
    }
    if (!supported) return;
    try {
        body.requestPointerLock();
    } catch (e) {}
    const cleanup = [
        addDomEvent(doc, "pointerlockchange", onPointerChange, false),
        addDomEvent(doc, "pointerlockerror", onPointerError, false)
    ];
    return ()=>{
        cleanup.forEach((cleanup2)=>cleanup2());
        doc.exitPointerLock();
    };
}
// src/text-selection.ts
var state = "default";
var userSelect = "";
var elementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelectionImpl() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { target, doc } = options;
    const docNode = doc !== null && doc !== void 0 ? doc : document;
    const rootEl = docNode.documentElement;
    if (isIos()) {
        if (state === "default") {
            userSelect = rootEl.style.webkitUserSelect;
            rootEl.style.webkitUserSelect = "none";
        }
        state = "disabled";
    } else if (target) {
        elementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
    return ()=>restoreTextSelection({
            target,
            doc: docNode
        });
}
function restoreTextSelection() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { target, doc } = options;
    const docNode = doc !== null && doc !== void 0 ? doc : document;
    const rootEl = docNode.documentElement;
    if (isIos()) {
        if (state !== "disabled") return;
        state = "restoring";
        setTimeout(()=>{
            nextTick(()=>{
                if (state === "restoring") {
                    if (rootEl.style.webkitUserSelect === "none") {
                        rootEl.style.webkitUserSelect = userSelect || "";
                    }
                    userSelect = "";
                    state = "default";
                }
            });
        }, 300);
    } else {
        if (target && elementMap.has(target)) {
            const prevUserSelect = elementMap.get(target);
            if (target.style.userSelect === "none") {
                target.style.userSelect = prevUserSelect !== null && prevUserSelect !== void 0 ? prevUserSelect : "";
            }
            if (target.getAttribute("style") === "") {
                target.removeAttribute("style");
            }
            elementMap.delete(target);
        }
    }
}
function disableTextSelection() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { defer, target, ...restOptions } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof target === "function" ? target() : target;
        cleanups.push(disableTextSelectionImpl({
            ...restOptions,
            target: node
        }));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn === null || fn === void 0 ? void 0 : fn());
    };
}
// src/pointer-move.ts
function trackPointerMove(doc, handlers) {
    const { onPointerMove, onPointerUp } = handlers;
    const handleMove = (event)=>{
        const point = getEventPoint(event);
        const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
        const moveBuffer = event.pointerType === "touch" ? 10 : 5;
        if (distance < moveBuffer) return;
        if (event.pointerType === "mouse" && event.button === 0) {
            handleUp(event);
            return;
        }
        onPointerMove({
            point,
            event
        });
    };
    const handleUp = (event)=>{
        const point = getEventPoint(event);
        onPointerUp({
            point,
            event
        });
    };
    const cleanups = [
        addDomEvent(doc, "pointermove", handleMove, false),
        addDomEvent(doc, "pointerup", handleUp, false),
        addDomEvent(doc, "pointercancel", handleUp, false),
        addDomEvent(doc, "contextmenu", handleUp, false),
        disableTextSelection({
            doc
        })
    ];
    return ()=>{
        cleanups.forEach((cleanup)=>cleanup());
    };
}
// src/press.ts
function trackPress(options) {
    const { pointerNode, keyboardNode = pointerNode, onPress, onPressStart, onPressEnd, isValidKey = (e)=>e.key === "Enter" } = options;
    if (!pointerNode) return noop;
    const win = getWindow(pointerNode);
    let removeStartListeners = noop;
    let removeEndListeners = noop;
    let removeAccessibleListeners = noop;
    const getInfo = (event)=>({
            point: getEventPoint(event),
            event
        });
    function startPress(event) {
        onPressStart === null || onPressStart === void 0 ? void 0 : onPressStart(getInfo(event));
    }
    function cancelPress(event) {
        onPressEnd === null || onPressEnd === void 0 ? void 0 : onPressEnd(getInfo(event));
    }
    const startPointerPress = (startEvent)=>{
        removeEndListeners();
        const endPointerPress = (endEvent)=>{
            const target = getEventTarget(endEvent);
            if (contains(pointerNode, target)) {
                onPress === null || onPress === void 0 ? void 0 : onPress(getInfo(endEvent));
            } else {
                onPressEnd === null || onPressEnd === void 0 ? void 0 : onPressEnd(getInfo(endEvent));
            }
        };
        const removePointerUpListener = addDomEvent(win, "pointerup", endPointerPress, {
            passive: !onPress,
            once: true
        });
        const removePointerCancelListener = addDomEvent(win, "pointercancel", cancelPress, {
            passive: !onPressEnd,
            once: true
        });
        removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
        if (isActiveElement(keyboardNode) && startEvent.pointerType === "mouse") {
            startEvent.preventDefault();
        }
        startPress(startEvent);
    };
    const removePointerListener = addDomEvent(pointerNode, "pointerdown", startPointerPress, {
        passive: !onPressStart
    });
    const removeFocusListener = addDomEvent(keyboardNode, "focus", startAccessiblePress);
    removeStartListeners = pipe(removePointerListener, removeFocusListener);
    function startAccessiblePress() {
        const handleKeydown = (keydownEvent)=>{
            if (!isValidKey(keydownEvent)) return;
            const handleKeyup = (keyupEvent)=>{
                if (!isValidKey(keyupEvent)) return;
                const evt2 = new win.PointerEvent("pointerup");
                const info = getInfo(evt2);
                onPress === null || onPress === void 0 ? void 0 : onPress(info);
                onPressEnd === null || onPressEnd === void 0 ? void 0 : onPressEnd(info);
            };
            removeEndListeners();
            removeEndListeners = addDomEvent(keyboardNode, "keyup", handleKeyup);
            const evt = new win.PointerEvent("pointerdown");
            startPress(evt);
        };
        const handleBlur = ()=>{
            const evt = new win.PointerEvent("pointercancel");
            cancelPress(evt);
        };
        const removeKeydownListener = addDomEvent(keyboardNode, "keydown", handleKeydown);
        const removeBlurListener = addDomEvent(keyboardNode, "blur", handleBlur);
        removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    }
    return ()=>{
        removeStartListeners();
        removeEndListeners();
        removeAccessibleListeners();
    };
}
// src/proxy-tab-focus.ts
function proxyTabFocusImpl(container) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { triggerElement, onFocus, onFocusEnter } = options;
    const doc = (container === null || container === void 0 ? void 0 : container.ownerDocument) || document;
    const body = doc.body;
    function onKeyDown(event) {
        if (event.key !== "Tab") return;
        let elementToFocus = null;
        const [firstTabbable, lastTabbable] = getTabbableEdges(container, true);
        const nextTabbableAfterTrigger = getNextTabbable(body, triggerElement);
        const noTabbableElements = !firstTabbable && !lastTabbable;
        if (event.shiftKey && isActiveElement(nextTabbableAfterTrigger)) {
            onFocusEnter === null || onFocusEnter === void 0 ? void 0 : onFocusEnter();
            elementToFocus = lastTabbable;
        } else if (event.shiftKey && (isActiveElement(firstTabbable) || noTabbableElements)) {
            elementToFocus = triggerElement;
        } else if (!event.shiftKey && isActiveElement(triggerElement)) {
            onFocusEnter === null || onFocusEnter === void 0 ? void 0 : onFocusEnter();
            elementToFocus = firstTabbable;
        } else if (!event.shiftKey && (isActiveElement(lastTabbable) || noTabbableElements)) {
            elementToFocus = nextTabbableAfterTrigger;
        }
        if (!elementToFocus) return;
        event.preventDefault();
        if (typeof onFocus === "function") {
            onFocus(elementToFocus);
        } else {
            elementToFocus.focus();
        }
    }
    return addDomEvent(doc, "keydown", onKeyDown, true);
}
function proxyTabFocus(container, options) {
    const { defer, triggerElement, ...restOptions } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof container === "function" ? container() : container;
        const trigger = typeof triggerElement === "function" ? triggerElement() : triggerElement;
        cleanups.push(proxyTabFocusImpl(node, {
            triggerElement: trigger,
            ...restOptions
        }));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn === null || fn === void 0 ? void 0 : fn());
    };
}
// src/query.ts
function queryAll(root, selector) {
    var _root_querySelectorAll;
    return Array.from((_root_querySelectorAll = root === null || root === void 0 ? void 0 : root.querySelectorAll(selector)) !== null && _root_querySelectorAll !== void 0 ? _root_querySelectorAll : []);
}
function query(root, selector) {
    var _root_querySelector;
    return (_root_querySelector = root === null || root === void 0 ? void 0 : root.querySelector(selector)) !== null && _root_querySelector !== void 0 ? _root_querySelector : null;
}
var defaultItemToId = (v)=>v.id;
function itemById(v, id) {
    let itemToId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultItemToId;
    return v.find((item)=>itemToId(item) === id);
}
function indexOfId(v, id) {
    let itemToId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultItemToId;
    const item = itemById(v, id, itemToId);
    return item ? v.indexOf(item) : -1;
}
function nextById(v, id) {
    let loop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    let idx = indexOfId(v, id);
    idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);
    return v[idx];
}
function prevById(v, id) {
    let loop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    let idx = indexOfId(v, id);
    if (idx === -1) return loop ? v[v.length - 1] : null;
    idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);
    return v[idx];
}
// src/resize-observer.ts
function trackElementRect(elements, options) {
    const { onEntry, measure, box = "border-box" } = options;
    const elems = (Array.isArray(elements) ? elements : [
        elements
    ]).filter(isHTMLElement);
    const win = getWindow(elems[0]);
    const trigger = (entries)=>{
        const rects = elems.map((el)=>measure(el));
        onEntry({
            rects,
            entries
        });
    };
    trigger([]);
    const obs = new win.ResizeObserver(trigger);
    elems.forEach((el)=>obs.observe(el, {
            box
        }));
    return ()=>obs.disconnect();
}
// src/scope.ts
function createScope(methods) {
    const dom = {
        getRootNode: (ctx)=>{
            var _ctx_getRootNode;
            var _ctx_getRootNode1;
            return (_ctx_getRootNode1 = (_ctx_getRootNode = ctx.getRootNode) === null || _ctx_getRootNode === void 0 ? void 0 : _ctx_getRootNode.call(ctx)) !== null && _ctx_getRootNode1 !== void 0 ? _ctx_getRootNode1 : document;
        },
        getDoc: (ctx)=>getDocument(dom.getRootNode(ctx)),
        getWin: (ctx)=>{
            var _dom_getDoc_defaultView;
            return (_dom_getDoc_defaultView = dom.getDoc(ctx).defaultView) !== null && _dom_getDoc_defaultView !== void 0 ? _dom_getDoc_defaultView : window;
        },
        getActiveElement: (ctx)=>getActiveElement(dom.getRootNode(ctx)),
        isActiveElement,
        getById: (ctx, id)=>dom.getRootNode(ctx).getElementById(id),
        setValue: (elem, value)=>{
            if (elem == null || value == null) return;
            setElementValue(elem, value.toString());
        }
    };
    return {
        ...dom,
        ...methods
    };
}
// src/searchable.ts
var sanitize = (str)=>str.split("").map((char)=>{
        const code = char.charCodeAt(0);
        if (code > 0 && code < 128) return char;
        if (code >= 128 && code <= 255) return "/x".concat(code.toString(16)).replace("/", "\\");
        return "";
    }).join("").trim();
var getValueText = (el)=>{
    var _el_dataset;
    var _el_dataset_valuetext, _ref;
    return sanitize((_ref = (_el_dataset_valuetext = (_el_dataset = el.dataset) === null || _el_dataset === void 0 ? void 0 : _el_dataset.valuetext) !== null && _el_dataset_valuetext !== void 0 ? _el_dataset_valuetext : el.textContent) !== null && _ref !== void 0 ? _ref : "");
};
var match = (valueText, query2)=>{
    return valueText.trim().toLowerCase().startsWith(query2.toLowerCase());
};
function getByText(v, text, currentId) {
    let itemToId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : defaultItemToId;
    const index = currentId ? indexOfId(v, currentId, itemToId) : -1;
    let items = currentId ? wrap(v, index) : v;
    const isSingleKey = text.length === 1;
    if (isSingleKey) {
        items = items.filter((item)=>itemToId(item) !== currentId);
    }
    return items.find((item)=>match(getValueText(item), text));
}
// src/set.ts
function setAttribute(el, attr, v) {
    const prev = el.getAttribute(attr);
    const exists = prev != null;
    el.setAttribute(attr, v);
    return ()=>{
        if (!exists) {
            el.removeAttribute(attr);
        } else {
            el.setAttribute(attr, prev);
        }
    };
}
function setProperty(el, prop, v) {
    const exists = prop in el;
    const prev = el[prop];
    el[prop] = v;
    return ()=>{
        if (!exists) {
            delete el[prop];
        } else {
            el[prop] = prev;
        }
    };
}
function setStyle(el, style) {
    if (!el) return noop;
    const prev = Object.keys(style).reduce((acc, key)=>{
        acc[key] = el.style.getPropertyValue(key);
        return acc;
    }, {});
    Object.assign(el.style, style);
    return ()=>{
        Object.assign(el.style, prev);
        if (el.style.length === 0) {
            el.removeAttribute("style");
        }
    };
}
function setStyleProperty(el, prop, value) {
    if (!el) return noop;
    const prev = el.style.getPropertyValue(prop);
    el.style.setProperty(prop, value);
    return ()=>{
        el.style.setProperty(prop, prev);
        if (el.style.length === 0) {
            el.removeAttribute("style");
        }
    };
}
// src/typeahead.ts
function getByTypeaheadImpl(baseItems, options) {
    const { state: state2, activeId, key, timeout = 350, itemToId } = options;
    const search = state2.keysSoFar + key;
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const query2 = isRepeated ? search[0] : search;
    let items = baseItems.slice();
    const next = getByText(items, query2, activeId, itemToId);
    function cleanup() {
        clearTimeout(state2.timer);
        state2.timer = -1;
    }
    function update(value) {
        state2.keysSoFar = value;
        cleanup();
        if (value !== "") {
            state2.timer = +setTimeout(()=>{
                update("");
                cleanup();
            }, timeout);
        }
    }
    update(search);
    return next;
}
var getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {
    defaultOptions: {
        keysSoFar: "",
        timer: -1
    },
    isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
    return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
// src/visual-viewport.ts
function trackVisualViewport(doc, fn) {
    const win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
    const onResize = ()=>{
        fn === null || fn === void 0 ? void 0 : fn(getViewportSize(win));
    };
    onResize();
    var _win_visualViewport;
    return addDomEvent((_win_visualViewport = win.visualViewport) !== null && _win_visualViewport !== void 0 ? _win_visualViewport : win, "resize", onResize);
}
function getViewportSize(win) {
    var _win_visualViewport, _win_visualViewport1;
    return {
        width: ((_win_visualViewport = win.visualViewport) === null || _win_visualViewport === void 0 ? void 0 : _win_visualViewport.width) || win.innerWidth,
        height: ((_win_visualViewport1 = win.visualViewport) === null || _win_visualViewport1 === void 0 ? void 0 : _win_visualViewport1.height) || win.innerHeight
    };
}
// src/visually-hidden.ts
var visuallyHiddenStyle = {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
    wordWrap: "normal"
};
function setVisuallyHidden(el) {
    Object.assign(el.style, visuallyHiddenStyle);
}
// src/wait-for.ts
function waitForPromise(promise, controller, timeout) {
    const { signal } = controller;
    const wrappedPromise = new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            reject(new Error("Timeout of ".concat(timeout, "ms exceeded")));
        }, timeout);
        signal.addEventListener("abort", ()=>{
            clearTimeout(timeoutId);
            reject(new Error("Promise aborted"));
        });
        promise.then((result)=>{
            if (!signal.aborted) {
                clearTimeout(timeoutId);
                resolve(result);
            }
        }).catch((error)=>{
            if (!signal.aborted) {
                clearTimeout(timeoutId);
                reject(error);
            }
        });
    });
    const abort = ()=>controller.abort();
    return [
        wrappedPromise,
        abort
    ];
}
function waitForElement(target, options) {
    const { timeout, rootNode } = options;
    const win = getWindow(rootNode);
    const doc = getDocument(rootNode);
    const controller = new win.AbortController();
    return waitForPromise(new Promise((resolve)=>{
        const el = target();
        if (el) {
            resolve(el);
            return;
        }
        const observer = new win.MutationObserver(()=>{
            const el2 = target();
            if (el2 && el2.isConnected) {
                observer.disconnect();
                resolve(el2);
            }
        });
        observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }), controller, timeout);
}
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INIT_STATE",
    ()=>INIT_STATE,
    "MachineStatus",
    ()=>MachineStatus,
    "createGuards",
    ()=>createGuards,
    "createMachine",
    ()=>createMachine,
    "createScope",
    ()=>createScope,
    "memo",
    ()=>memo,
    "mergeProps",
    ()=>mergeProps,
    "setup",
    ()=>setup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/dom-query/dist/index.mjs [app-client] (ecmascript)");
;
;
// src/merge-props.ts
var clsx = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.map((str)=>{
        var _str_trim;
        return str === null || str === void 0 ? void 0 : (_str_trim = str.trim) === null || _str_trim === void 0 ? void 0 : _str_trim.call(str);
    }).filter(Boolean).join(" ");
};
var CSS_REGEX = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var serialize = (style)=>{
    const res = {};
    let match;
    while(match = CSS_REGEX.exec(style)){
        res[match[1]] = match[2];
    }
    return res;
};
var css = (a, b)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(a)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(b)) return "".concat(a, ";").concat(b);
        a = serialize(a);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(b)) {
        b = serialize(b);
    }
    return Object.assign({}, a !== null && a !== void 0 ? a : {}, b !== null && b !== void 0 ? b : {});
};
function mergeProps() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let result = {};
    for (let props of args){
        if (!props) continue;
        for(let key in result){
            if (key.startsWith("on") && typeof result[key] === "function" && typeof props[key] === "function") {
                result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAll"])(props[key], result[key]);
                continue;
            }
            if (key === "className" || key === "class") {
                result[key] = clsx(result[key], props[key]);
                continue;
            }
            if (key === "style") {
                result[key] = css(result[key], props[key]);
                continue;
            }
            result[key] = props[key] !== void 0 ? props[key] : result[key];
        }
        for(let key in props){
            if (result[key] === void 0) {
                result[key] = props[key];
            }
        }
        const symbols = Object.getOwnPropertySymbols(props);
        for (let symbol of symbols){
            result[symbol] = props[symbol];
        }
    }
    return result;
}
function memo(getDeps, fn, opts) {
    let deps = [];
    let result;
    return (depArgs)=>{
        var _opts_onChange;
        const newDeps = getDeps(depArgs);
        const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(deps[index], dep));
        if (!depsChanged) return result;
        deps = newDeps;
        result = fn(newDeps, depArgs);
        opts === null || opts === void 0 ? void 0 : (_opts_onChange = opts.onChange) === null || _opts_onChange === void 0 ? void 0 : _opts_onChange.call(opts, result);
        return result;
    };
}
// src/create-machine.ts
function createGuards() {
    return {
        and: function() {
            for(var _len = arguments.length, guards = new Array(_len), _key = 0; _key < _len; _key++){
                guards[_key] = arguments[_key];
            }
            return function andGuard(params) {
                return guards.every((str)=>params.guard(str));
            };
        },
        or: function() {
            for(var _len = arguments.length, guards = new Array(_len), _key = 0; _key < _len; _key++){
                guards[_key] = arguments[_key];
            }
            return function orGuard(params) {
                return guards.some((str)=>params.guard(str));
            };
        },
        not: (guard)=>{
            return function notGuard(params) {
                return !params.guard(guard);
            };
        }
    };
}
function createMachine(config) {
    return config;
}
function setup() {
    return {
        guards: createGuards(),
        createMachine: (config)=>{
            return createMachine(config);
        },
        choose: (transitions)=>{
            return function chooseFn(param) {
                let { choose } = param;
                var _choose;
                return (_choose = choose(transitions)) === null || _choose === void 0 ? void 0 : _choose.actions;
            };
        }
    };
}
// src/types.ts
var MachineStatus = /* @__PURE__ */ ((MachineStatus2)=>{
    MachineStatus2["NotStarted"] = "Not Started";
    MachineStatus2["Started"] = "Started";
    MachineStatus2["Stopped"] = "Stopped";
    return MachineStatus2;
})(MachineStatus || {});
var INIT_STATE = "__init__";
function createScope(props) {
    const getRootNode = ()=>{
        var _props_getRootNode;
        var _props_getRootNode1;
        return (_props_getRootNode1 = (_props_getRootNode = props.getRootNode) === null || _props_getRootNode === void 0 ? void 0 : _props_getRootNode.call(props)) !== null && _props_getRootNode1 !== void 0 ? _props_getRootNode1 : document;
    };
    const getDoc = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(getRootNode());
    const getWin = ()=>{
        var _getDoc_defaultView;
        return (_getDoc_defaultView = getDoc().defaultView) !== null && _getDoc_defaultView !== void 0 ? _getDoc_defaultView : window;
    };
    const getActiveElementFn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])(getRootNode());
    const getById = (id)=>getRootNode().getElementById(id);
    return {
        ...props,
        getRootNode,
        getDoc,
        getWin,
        getActiveElement: getActiveElementFn,
        isActiveElement: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveElement"],
        getById
    };
}
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-split-props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSplitProps",
    ()=>createSplitProps
]);
'use client';
const createSplitProps = ()=>(props, keys)=>keys.reduce((previousValue, currentValue)=>{
            const [target, source] = previousValue;
            const key = currentValue;
            if (source[key] !== void 0) {
                target[key] = source[key];
            }
            delete source[key];
            return [
                target,
                source
            ];
        }, [
            {},
            {
                ...props
            }
        ]);
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function getErrorMessage(hook, provider) {
    return "".concat(hook, " returned `undefined`. Seems you forgot to wrap component within ").concat(provider);
}
function createContext() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { name, strict = true, hookName = "useContext", providerName = "Provider", errorMessage, defaultValue } = options;
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue);
    Context.displayName = name;
    function useContext$1() {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
        if (!context && strict) {
            var _Error_captureStackTrace, _Error;
            const error = new Error(errorMessage !== null && errorMessage !== void 0 ? errorMessage : getErrorMessage(hookName, providerName));
            error.name = "ContextError";
            (_Error_captureStackTrace = (_Error = Error).captureStackTrace) === null || _Error_captureStackTrace === void 0 ? void 0 : _Error_captureStackTrace.call(_Error, error, useContext$1);
            throw error;
        }
        return context;
    }
    return [
        Context.Provider,
        useContext$1,
        Context
    ];
}
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/render-strategy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderStrategyPropsProvider",
    ()=>RenderStrategyPropsProvider,
    "splitRenderStrategyProps",
    ()=>splitRenderStrategyProps,
    "useRenderStrategyPropsContext",
    ()=>useRenderStrategyPropsContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-split-props.js [app-client] (ecmascript)");
'use client';
;
;
const [RenderStrategyPropsProvider, useRenderStrategyPropsContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "RenderStrategyContext",
    hookName: "useRenderStrategyContext",
    providerName: "<RenderStrategyPropsProvider />"
});
const splitRenderStrategyProps = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])()(props, [
        "lazyMount",
        "unmountOnExit"
    ]);
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/compose-refs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs
]);
function composeRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return (node)=>{
        const cleanUps = [];
        for (const ref of refs){
            if (typeof ref === "function") {
                const cb = ref(node);
                if (typeof cb === "function") {
                    cleanUps.push(cb);
                }
            } else if (ref) {
                ref.current = node;
            }
        }
        if (cleanUps.length) {
            return ()=>{
                for (const cleanUp of cleanUps){
                    cleanUp();
                }
            };
        }
    };
}
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ark",
    ()=>ark,
    "jsxFactory",
    ()=>jsxFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/compose-refs.js [app-client] (ecmascript)");
;
;
;
function getRef(element) {
    var _Object_getOwnPropertyDescriptor, _Object_getOwnPropertyDescriptor1;
    let getter = (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(element.props, "ref")) === null || _Object_getOwnPropertyDescriptor === void 0 ? void 0 : _Object_getOwnPropertyDescriptor.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = (_Object_getOwnPropertyDescriptor1 = Object.getOwnPropertyDescriptor(element, "ref")) === null || _Object_getOwnPropertyDescriptor1 === void 0 ? void 0 : _Object_getOwnPropertyDescriptor1.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
const withAsChild = (Component)=>{
    const Comp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
        const { asChild, children, ...restProps } = props;
        if (!asChild) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
                ...restProps,
                ref
            }, children);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
            return null;
        }
        const onlyChild = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
        const childRef = getRef(onlyChild);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(onlyChild, {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(restProps, onlyChild.props),
            ref: ref ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(ref, childRef) : childRef
        });
    }));
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
};
const jsxFactory = ()=>{
    const cache = /* @__PURE__ */ new Map();
    return new Proxy(withAsChild, {
        apply (_target, _thisArg, argArray) {
            return withAsChild(argArray[0]);
        },
        get (_, element) {
            const asElement = element;
            if (!cache.has(asElement)) {
                cache.set(asElement, withAsChild(asElement));
            }
            return cache.get(asElement);
        }
    });
};
const ark = jsxFactory();
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/types/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/prop-types.ts
__turbopack_context__.s([
    "createNormalizer",
    ()=>createNormalizer,
    "createProps",
    ()=>createProps
]);
function createNormalizer(fn) {
    return new Proxy({}, {
        get (_target, key) {
            if (key === "style") return (props)=>{
                return fn({
                    style: props
                }).style;
            };
            return fn;
        }
    });
}
// src/create-props.ts
var createProps = ()=>(props)=>Array.from(new Set(props));
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/react/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "normalizeProps",
    ()=>normalizeProps,
    "useMachine",
    ()=>useMachine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/types/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// src/index.ts
var useSafeLayoutEffect = typeof globalThis.document !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
// src/bindable.ts
function useBindable(props) {
    var _props_value;
    const initial = (_props_value = props().value) !== null && _props_value !== void 0 ? _props_value : props().defaultValue;
    var _props_isEqual;
    const eq = (_props_isEqual = props().isEqual) !== null && _props_isEqual !== void 0 ? _props_isEqual : Object.is;
    const [initialValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const controlled = props().value !== void 0;
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    valueRef.current = controlled ? props().value : value;
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(valueRef.current);
    useSafeLayoutEffect({
        "useBindable.useSafeLayoutEffect": ()=>{
            prevValue.current = valueRef.current;
        }
    }["useBindable.useSafeLayoutEffect"], [
        value,
        props().value
    ]);
    const setFn = (value2)=>{
        const prev = prevValue.current;
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(value2) ? value2(prev) : value2;
        if (props().debug) {
            console.log("[bindable > ".concat(props().debug, "] setValue"), {
                next,
                prev
            });
        }
        if (!controlled) setValue(next);
        if (!eq(next, prev)) {
            var _props_onChange, _props;
            (_props_onChange = (_props = props()).onChange) === null || _props_onChange === void 0 ? void 0 : _props_onChange.call(_props, next, prev);
        }
    };
    function get() {
        return controlled ? props().value : value;
    }
    return {
        initial: initialValue,
        ref: valueRef,
        get,
        set (value2) {
            const exec = props().sync ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
            exec(()=>setFn(value2));
        },
        invoke (nextValue, prevValue2) {
            var _props_onChange, _props;
            (_props_onChange = (_props = props()).onChange) === null || _props_onChange === void 0 ? void 0 : _props_onChange.call(_props, nextValue, prevValue2);
        },
        hash (value2) {
            var _props_hash, _props;
            var _props_hash1;
            return (_props_hash1 = (_props_hash = (_props = props()).hash) === null || _props_hash === void 0 ? void 0 : _props_hash.call(_props, value2)) !== null && _props_hash1 !== void 0 ? _props_hash1 : String(value2);
        }
    };
}
useBindable.cleanup = (fn)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>fn, []);
};
useBindable.ref = (defaultValue)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(defaultValue);
    return {
        get: ()=>value.current,
        set: (next)=>{
            value.current = next;
        }
    };
};
function useRefs(refs) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(refs);
    return {
        get (key) {
            return ref.current[key];
        },
        set (key, value) {
            ref.current[key] = value;
        }
    };
}
var useTrack = (deps, effect)=>{
    const render = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const called = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTrack.useEffect": ()=>{
            const mounted = render.current;
            const run = mounted && called.current;
            if (run) return effect();
            called.current = true;
        }
    }["useTrack.useEffect"], [
        ...(deps !== null && deps !== void 0 ? deps : []).map({
            "useTrack.useEffect": (d)=>typeof d === "function" ? d() : d
        }["useTrack.useEffect"])
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTrack.useEffect": ()=>{
            render.current = true;
            return ({
                "useTrack.useEffect": ()=>{
                    render.current = false;
                }
            })["useTrack.useEffect"];
        }
    }["useTrack.useEffect"], []);
};
// src/machine.ts
function useMachine(machine) {
    let userProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _machine_props, _machine_context, _machine_refs, _machine_watch;
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMachine.useMemo[scope]": ()=>{
            const { id, ids, getRootNode } = userProps;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScope"])({
                id,
                ids,
                getRootNode
            });
        }
    }["useMachine.useMemo[scope]"], [
        userProps
    ]);
    const debug = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (machine.debug) console.log(...args);
    };
    var _machine_props1;
    const props = (_machine_props1 = (_machine_props = machine.props) === null || _machine_props === void 0 ? void 0 : _machine_props.call(machine, {
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])(userProps),
        scope
    })) !== null && _machine_props1 !== void 0 ? _machine_props1 : userProps;
    const prop = useProp(props);
    const context = (_machine_context = machine.context) === null || _machine_context === void 0 ? void 0 : _machine_context.call(machine, {
        prop,
        bindable: useBindable,
        scope,
        flush,
        getContext () {
            return ctx;
        },
        getComputed () {
            return computed;
        },
        getRefs () {
            return refs;
        },
        getEvent () {
            return getEvent();
        }
    });
    const contextRef = useLiveRef(context);
    const ctx = {
        get (key) {
            var _contextRef_current;
            return (_contextRef_current = contextRef.current) === null || _contextRef_current === void 0 ? void 0 : _contextRef_current[key].ref.current;
        },
        set (key, value) {
            var _contextRef_current;
            (_contextRef_current = contextRef.current) === null || _contextRef_current === void 0 ? void 0 : _contextRef_current[key].set(value);
        },
        initial (key) {
            var _contextRef_current;
            return (_contextRef_current = contextRef.current) === null || _contextRef_current === void 0 ? void 0 : _contextRef_current[key].initial;
        },
        hash (key) {
            var _contextRef_current, _contextRef_current1;
            const current = (_contextRef_current = contextRef.current) === null || _contextRef_current === void 0 ? void 0 : _contextRef_current[key].get();
            return (_contextRef_current1 = contextRef.current) === null || _contextRef_current1 === void 0 ? void 0 : _contextRef_current1[key].hash(current);
        }
    };
    const effects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map());
    const transitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousEventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        type: ""
    });
    const getEvent = ()=>({
            ...eventRef.current,
            current () {
                return eventRef.current;
            },
            previous () {
                return previousEventRef.current;
            }
        });
    const getState = ()=>({
            ...state,
            matches () {
                for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                    values[_key] = arguments[_key];
                }
                return values.includes(state.ref.current);
            },
            hasTag (tag) {
                var _machine_states_state_ref_current_tags, _machine_states_state_ref_current;
                return !!((_machine_states_state_ref_current = machine.states[state.ref.current]) === null || _machine_states_state_ref_current === void 0 ? void 0 : (_machine_states_state_ref_current_tags = _machine_states_state_ref_current.tags) === null || _machine_states_state_ref_current_tags === void 0 ? void 0 : _machine_states_state_ref_current_tags.includes(tag));
            }
        });
    var _machine_refs1;
    const refs = useRefs((_machine_refs1 = (_machine_refs = machine.refs) === null || _machine_refs === void 0 ? void 0 : _machine_refs.call(machine, {
        prop,
        context: ctx
    })) !== null && _machine_refs1 !== void 0 ? _machine_refs1 : {});
    const getParams = ()=>({
            state: getState(),
            context: ctx,
            event: getEvent(),
            prop,
            send,
            action,
            guard,
            track: useTrack,
            refs,
            computed,
            flush,
            scope,
            choose
        });
    const action = (keys)=>{
        const strs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(keys) ? keys(getParams()) : keys;
        if (!strs) return;
        const fns = strs.map((s)=>{
            var _machine_implementations_actions, _machine_implementations;
            const fn = (_machine_implementations = machine.implementations) === null || _machine_implementations === void 0 ? void 0 : (_machine_implementations_actions = _machine_implementations.actions) === null || _machine_implementations_actions === void 0 ? void 0 : _machine_implementations_actions[s];
            if (!fn) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('[zag-js] No implementation found for action "'.concat(JSON.stringify(s), '"'));
            return fn;
        });
        for (const fn of fns){
            fn === null || fn === void 0 ? void 0 : fn(getParams());
        }
    };
    const guard = (str)=>{
        var _machine_implementations_guards, _machine_implementations;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(str)) return str(getParams());
        return (_machine_implementations = machine.implementations) === null || _machine_implementations === void 0 ? void 0 : (_machine_implementations_guards = _machine_implementations.guards) === null || _machine_implementations_guards === void 0 ? void 0 : _machine_implementations_guards[str](getParams());
    };
    const effect = (keys)=>{
        const strs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(keys) ? keys(getParams()) : keys;
        if (!strs) return;
        const fns = strs.map((s)=>{
            var _machine_implementations_effects, _machine_implementations;
            const fn = (_machine_implementations = machine.implementations) === null || _machine_implementations === void 0 ? void 0 : (_machine_implementations_effects = _machine_implementations.effects) === null || _machine_implementations_effects === void 0 ? void 0 : _machine_implementations_effects[s];
            if (!fn) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('[zag-js] No implementation found for effect "'.concat(JSON.stringify(s), '"'));
            return fn;
        });
        const cleanups = [];
        for (const fn of fns){
            const cleanup = fn === null || fn === void 0 ? void 0 : fn(getParams());
            if (cleanup) cleanups.push(cleanup);
        }
        return ()=>cleanups.forEach((fn)=>fn === null || fn === void 0 ? void 0 : fn());
    };
    const choose = (transitions)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(transitions).find((t)=>{
            let result = !t.guard;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(t.guard)) result = !!guard(t.guard);
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(t.guard)) result = t.guard(getParams());
            return result;
        });
    };
    const computed = (key)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensure"])(machine.computed, ()=>"[zag-js] No computed object found on machine");
        const fn = machine.computed[key];
        return fn({
            context: ctx,
            event: getEvent(),
            prop,
            refs,
            scope,
            computed
        });
    };
    const state = useBindable({
        "useMachine.useBindable[state]": ()=>({
                defaultValue: machine.initialState({
                    prop
                }),
                onChange (nextState, prevState) {
                    var _transitionRef_current, _machine_states_nextState, _machine_states_nextState1;
                    if (prevState) {
                        const exitEffects = effects.current.get(prevState);
                        exitEffects === null || exitEffects === void 0 ? void 0 : exitEffects();
                        effects.current.delete(prevState);
                    }
                    if (prevState) {
                        var _machine_states_prevState;
                        action((_machine_states_prevState = machine.states[prevState]) === null || _machine_states_prevState === void 0 ? void 0 : _machine_states_prevState.exit);
                    }
                    action((_transitionRef_current = transitionRef.current) === null || _transitionRef_current === void 0 ? void 0 : _transitionRef_current.actions);
                    const cleanup = effect((_machine_states_nextState = machine.states[nextState]) === null || _machine_states_nextState === void 0 ? void 0 : _machine_states_nextState.effects);
                    if (cleanup) effects.current.set(nextState, cleanup);
                    if (prevState === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_STATE"]) {
                        action(machine.entry);
                        const cleanup2 = effect(machine.effects);
                        if (cleanup2) effects.current.set(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_STATE"], cleanup2);
                    }
                    action((_machine_states_nextState1 = machine.states[nextState]) === null || _machine_states_nextState1 === void 0 ? void 0 : _machine_states_nextState1.entry);
                }
            })
    }["useMachine.useBindable[state]"]);
    const hydratedStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MachineStatus"].NotStarted);
    useSafeLayoutEffect({
        "useMachine.useSafeLayoutEffect": ()=>{
            queueMicrotask({
                "useMachine.useSafeLayoutEffect": ()=>{
                    const started = statusRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MachineStatus"].Started;
                    statusRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MachineStatus"].Started;
                    debug(started ? "rehydrating..." : "initializing...");
                    var _hydratedStateRef_current;
                    const initialState = (_hydratedStateRef_current = hydratedStateRef.current) !== null && _hydratedStateRef_current !== void 0 ? _hydratedStateRef_current : state.initial;
                    state.invoke(initialState, started ? state.get() : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INIT_STATE"]);
                }
            }["useMachine.useSafeLayoutEffect"]);
            const fns = effects.current;
            const currentState = state.ref.current;
            return ({
                "useMachine.useSafeLayoutEffect": ()=>{
                    debug("unmounting...");
                    hydratedStateRef.current = currentState;
                    statusRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MachineStatus"].Stopped;
                    fns.forEach({
                        "useMachine.useSafeLayoutEffect": (fn)=>fn === null || fn === void 0 ? void 0 : fn()
                    }["useMachine.useSafeLayoutEffect"]);
                    effects.current = /* @__PURE__ */ new Map();
                    transitionRef.current = null;
                    queueMicrotask({
                        "useMachine.useSafeLayoutEffect": ()=>{
                            action(machine.exit);
                        }
                    }["useMachine.useSafeLayoutEffect"]);
                }
            })["useMachine.useSafeLayoutEffect"];
        }
    }["useMachine.useSafeLayoutEffect"], []);
    const getCurrentState = ()=>{
        if ("ref" in state) return state.ref.current;
        return state.get();
    };
    const send = (event)=>{
        queueMicrotask(()=>{
            var // @ts-ignore
            _machine_states_currentState_on, // @ts-ignore
            _machine_on;
            if (statusRef.current !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MachineStatus"].Started) return;
            previousEventRef.current = eventRef.current;
            eventRef.current = event;
            let currentState = getCurrentState();
            var _machine_states_currentState_on_event_type;
            const transitions = (_machine_states_currentState_on_event_type = (_machine_states_currentState_on = machine.states[currentState].on) === null || _machine_states_currentState_on === void 0 ? void 0 : _machine_states_currentState_on[event.type]) !== null && _machine_states_currentState_on_event_type !== void 0 ? _machine_states_currentState_on_event_type : (_machine_on = machine.on) === null || _machine_on === void 0 ? void 0 : _machine_on[event.type];
            const transition = choose(transitions);
            if (!transition) return;
            transitionRef.current = transition;
            var _transition_target;
            const target = (_transition_target = transition.target) !== null && _transition_target !== void 0 ? _transition_target : currentState;
            debug("transition", event.type, transition.target || currentState, "(".concat(transition.actions, ")"));
            const changed = target !== currentState;
            if (changed) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>state.set(target));
            } else if (transition.reenter && !changed) {
                state.invoke(currentState, currentState);
            } else {
                var _transition_actions;
                action((_transition_actions = transition.actions) !== null && _transition_actions !== void 0 ? _transition_actions : []);
            }
        });
    };
    (_machine_watch = machine.watch) === null || _machine_watch === void 0 ? void 0 : _machine_watch.call(machine, getParams());
    return {
        state: getState(),
        send,
        context: ctx,
        prop,
        scope,
        refs,
        computed,
        event: getEvent(),
        getStatus: ()=>statusRef.current
    };
}
function useLiveRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    ref.current = value;
    return ref;
}
function useProp(value) {
    const ref = useLiveRef(value);
    return function get(key) {
        return ref.current[key];
    };
}
function flush(fn) {
    queueMicrotask(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>fn());
    });
}
var normalizeProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNormalizer"])((v)=>v);
var Portal = (props)=>{
    const { children, container, disabled, getRootNode } = props;
    const isServer = typeof window === "undefined";
    if (isServer || disabled) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
    var _getRootNode_ownerDocument;
    const doc = (_getRootNode_ownerDocument = getRootNode === null || getRootNode === void 0 ? void 0 : getRootNode().ownerDocument) !== null && _getRootNode_ownerDocument !== void 0 ? _getRootNode_ownerDocument : document;
    var _container_current;
    const mountNode = (_container_current = container === null || container === void 0 ? void 0 : container.current) !== null && _container_current !== void 0 ? _container_current : doc.body;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(child, mountNode))
    });
};
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/anatomy/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/create-anatomy.ts
__turbopack_context__.s([
    "createAnatomy",
    ()=>createAnatomy
]);
var createAnatomy = function(name) {
    let parts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return {
        parts: function() {
            for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                values[_key] = arguments[_key];
            }
            if (isEmpty(parts)) {
                return createAnatomy(name, values);
            }
            throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
        },
        extendWith: function() {
            for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                values[_key] = arguments[_key];
            }
            return createAnatomy(name, [
                ...parts,
                ...values
            ]);
        },
        omit: function() {
            for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                values[_key] = arguments[_key];
            }
            return createAnatomy(name, parts.filter((part)=>!values.includes(part)));
        },
        rename: (newName)=>createAnatomy(newName, parts),
        keys: ()=>parts,
        build: ()=>[
                ...new Set(parts)
            ].reduce((prev, part)=>Object.assign(prev, {
                    [part]: {
                        selector: [
                            '&[data-scope="'.concat(toKebabCase(name), '"][data-part="').concat(toKebabCase(part), '"]'),
                            '& [data-scope="'.concat(toKebabCase(name), '"][data-part="').concat(toKebabCase(part), '"]')
                        ].join(", "),
                        attrs: {
                            "data-scope": toKebabCase(name),
                            "data-part": toKebabCase(part)
                        }
                    }
                }), {})
    };
};
var toKebabCase = (value)=>value.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
var isEmpty = (v)=>v.length === 0;
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/tabs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anatomy",
    ()=>anatomy,
    "connect",
    ()=>connect,
    "contentProps",
    ()=>contentProps,
    "machine",
    ()=>machine,
    "props",
    ()=>props,
    "splitContentProps",
    ()=>splitContentProps,
    "splitProps",
    ()=>splitProps,
    "splitTriggerProps",
    ()=>splitTriggerProps,
    "triggerProps",
    ()=>triggerProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/anatomy/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/dom-query/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/utils/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/types/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
// src/tabs.anatomy.ts
var anatomy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$anatomy$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnatomy"])("tabs").parts("root", "list", "trigger", "content", "indicator");
var parts = anatomy.build();
var getRootId = (ctx)=>{
    var _ctx_ids;
    var _ctx_ids_root;
    return (_ctx_ids_root = (_ctx_ids = ctx.ids) === null || _ctx_ids === void 0 ? void 0 : _ctx_ids.root) !== null && _ctx_ids_root !== void 0 ? _ctx_ids_root : "tabs:".concat(ctx.id);
};
var getListId = (ctx)=>{
    var _ctx_ids;
    var _ctx_ids_list;
    return (_ctx_ids_list = (_ctx_ids = ctx.ids) === null || _ctx_ids === void 0 ? void 0 : _ctx_ids.list) !== null && _ctx_ids_list !== void 0 ? _ctx_ids_list : "tabs:".concat(ctx.id, ":list");
};
var getContentId = (ctx, id)=>{
    var _ctx_ids_content, _ctx_ids;
    var _ctx_ids_content1;
    return (_ctx_ids_content1 = (_ctx_ids = ctx.ids) === null || _ctx_ids === void 0 ? void 0 : (_ctx_ids_content = _ctx_ids.content) === null || _ctx_ids_content === void 0 ? void 0 : _ctx_ids_content.call(_ctx_ids, id)) !== null && _ctx_ids_content1 !== void 0 ? _ctx_ids_content1 : "tabs:".concat(ctx.id, ":content-").concat(id);
};
var getTriggerId = (ctx, id)=>{
    var _ctx_ids_trigger, _ctx_ids;
    var _ctx_ids_trigger1;
    return (_ctx_ids_trigger1 = (_ctx_ids = ctx.ids) === null || _ctx_ids === void 0 ? void 0 : (_ctx_ids_trigger = _ctx_ids.trigger) === null || _ctx_ids_trigger === void 0 ? void 0 : _ctx_ids_trigger.call(_ctx_ids, id)) !== null && _ctx_ids_trigger1 !== void 0 ? _ctx_ids_trigger1 : "tabs:".concat(ctx.id, ":trigger-").concat(id);
};
var getIndicatorId = (ctx)=>{
    var _ctx_ids;
    var _ctx_ids_indicator;
    return (_ctx_ids_indicator = (_ctx_ids = ctx.ids) === null || _ctx_ids === void 0 ? void 0 : _ctx_ids.indicator) !== null && _ctx_ids_indicator !== void 0 ? _ctx_ids_indicator : "tabs:".concat(ctx.id, ":indicator");
};
var getListEl = (ctx)=>ctx.getById(getListId(ctx));
var getContentEl = (ctx, id)=>ctx.getById(getContentId(ctx, id));
var getTriggerEl = (ctx, id)=>ctx.getById(getTriggerId(ctx, id));
var getIndicatorEl = (ctx)=>ctx.getById(getIndicatorId(ctx));
var getElements = (ctx)=>{
    const ownerId = CSS.escape(getListId(ctx));
    const selector = "[role=tab][data-ownedby='".concat(ownerId, "']:not([disabled])");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryAll"])(getListEl(ctx), selector);
};
var getFirstTriggerEl = (ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["first"])(getElements(ctx));
var getLastTriggerEl = (ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(getElements(ctx));
var getNextTriggerEl = (ctx, opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextById"])(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getPrevTriggerEl = (ctx, opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prevById"])(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getOffsetRect = (el)=>{
    var _el_offsetLeft, _el_offsetTop, _el_offsetWidth, _el_offsetHeight;
    return {
        left: (_el_offsetLeft = el === null || el === void 0 ? void 0 : el.offsetLeft) !== null && _el_offsetLeft !== void 0 ? _el_offsetLeft : 0,
        top: (_el_offsetTop = el === null || el === void 0 ? void 0 : el.offsetTop) !== null && _el_offsetTop !== void 0 ? _el_offsetTop : 0,
        width: (_el_offsetWidth = el === null || el === void 0 ? void 0 : el.offsetWidth) !== null && _el_offsetWidth !== void 0 ? _el_offsetWidth : 0,
        height: (_el_offsetHeight = el === null || el === void 0 ? void 0 : el.offsetHeight) !== null && _el_offsetHeight !== void 0 ? _el_offsetHeight : 0
    };
};
var getRectById = (ctx, id)=>{
    const tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemById"])(getElements(ctx), getTriggerId(ctx, id));
    return resolveRect(getOffsetRect(tab));
};
var resolveRect = (rect)=>({
        width: "".concat(rect.width, "px"),
        height: "".concat(rect.height, "px"),
        left: "".concat(rect.left, "px"),
        top: "".concat(rect.top, "px")
    });
// src/tabs.connect.ts
function connect(service, normalize) {
    const { state, send, context, prop, scope } = service;
    const translations = prop("translations");
    const focused = state.matches("focused");
    const isVertical = prop("orientation") === "vertical";
    const isHorizontal = prop("orientation") === "horizontal";
    const composite = prop("composite");
    function getTriggerState(props2) {
        return {
            selected: context.get("value") === props2.value,
            focused: context.get("focusedValue") === props2.value,
            disabled: !!props2.disabled
        };
    }
    return {
        value: context.get("value"),
        focusedValue: context.get("focusedValue"),
        setValue (value) {
            send({
                type: "SET_VALUE",
                value
            });
        },
        clearValue () {
            send({
                type: "CLEAR_VALUE"
            });
        },
        setIndicatorRect (value) {
            const id = getTriggerId(scope, value);
            send({
                type: "SET_INDICATOR_RECT",
                id
            });
        },
        syncTabIndex () {
            send({
                type: "SYNC_TAB_INDEX"
            });
        },
        selectNext (fromValue) {
            send({
                type: "TAB_FOCUS",
                value: fromValue,
                src: "selectNext"
            });
            send({
                type: "ARROW_NEXT",
                src: "selectNext"
            });
        },
        selectPrev (fromValue) {
            send({
                type: "TAB_FOCUS",
                value: fromValue,
                src: "selectPrev"
            });
            send({
                type: "ARROW_PREV",
                src: "selectPrev"
            });
        },
        focus () {
            var _getTriggerEl;
            const value = context.get("value");
            if (!value) return;
            (_getTriggerEl = getTriggerEl(scope, value)) === null || _getTriggerEl === void 0 ? void 0 : _getTriggerEl.focus();
        },
        getRootProps () {
            return normalize.element({
                ...parts.root.attrs,
                id: getRootId(scope),
                "data-orientation": prop("orientation"),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(focused),
                dir: prop("dir")
            });
        },
        getListProps () {
            return normalize.element({
                ...parts.list.attrs,
                id: getListId(scope),
                role: "tablist",
                dir: prop("dir"),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(focused),
                "aria-orientation": prop("orientation"),
                "data-orientation": prop("orientation"),
                "aria-label": translations === null || translations === void 0 ? void 0 : translations.listLabel,
                onKeyDown (event) {
                    if (event.defaultPrevented) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isComposingEvent"])(event)) return;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(event.currentTarget, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventTarget"])(event))) return;
                    const keyMap = {
                        ArrowDown () {
                            if (isHorizontal) return;
                            send({
                                type: "ARROW_NEXT",
                                key: "ArrowDown"
                            });
                        },
                        ArrowUp () {
                            if (isHorizontal) return;
                            send({
                                type: "ARROW_PREV",
                                key: "ArrowUp"
                            });
                        },
                        ArrowLeft () {
                            if (isVertical) return;
                            send({
                                type: "ARROW_PREV",
                                key: "ArrowLeft"
                            });
                        },
                        ArrowRight () {
                            if (isVertical) return;
                            send({
                                type: "ARROW_NEXT",
                                key: "ArrowRight"
                            });
                        },
                        Home () {
                            send({
                                type: "HOME"
                            });
                        },
                        End () {
                            send({
                                type: "END"
                            });
                        }
                    };
                    let key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventKey"])(event, {
                        dir: prop("dir"),
                        orientation: prop("orientation")
                    });
                    const exec = keyMap[key];
                    if (exec) {
                        event.preventDefault();
                        exec(event);
                        return;
                    }
                }
            });
        },
        getTriggerState,
        getTriggerProps (props2) {
            const { value, disabled } = props2;
            const triggerState = getTriggerState(props2);
            return normalize.button({
                ...parts.trigger.attrs,
                role: "tab",
                type: "button",
                disabled,
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(disabled),
                "aria-disabled": disabled,
                "data-value": value,
                "aria-selected": triggerState.selected,
                "data-selected": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(triggerState.selected),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(triggerState.focused),
                "aria-controls": triggerState.selected ? getContentId(scope, value) : void 0,
                "data-ownedby": getListId(scope),
                "data-ssr": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(context.get("ssr")),
                id: getTriggerId(scope, value),
                tabIndex: triggerState.selected && composite ? 0 : -1,
                onFocus () {
                    send({
                        type: "TAB_FOCUS",
                        value
                    });
                },
                onBlur (event) {
                    const target = event.relatedTarget;
                    if ((target === null || target === void 0 ? void 0 : target.getAttribute("role")) !== "tab") {
                        send({
                            type: "TAB_BLUR"
                        });
                    }
                },
                onClick (event) {
                    if (event.defaultPrevented) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOpeningInNewTab"])(event)) return;
                    if (disabled) return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) {
                        event.currentTarget.focus();
                    }
                    send({
                        type: "TAB_CLICK",
                        value
                    });
                }
            });
        },
        getContentProps (props2) {
            const { value } = props2;
            const selected = context.get("value") === value;
            return normalize.element({
                ...parts.content.attrs,
                dir: prop("dir"),
                id: getContentId(scope, value),
                tabIndex: composite ? 0 : -1,
                "aria-labelledby": getTriggerId(scope, value),
                role: "tabpanel",
                "data-ownedby": getListId(scope),
                "data-selected": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(selected),
                "data-orientation": prop("orientation"),
                hidden: !selected
            });
        },
        getIndicatorProps () {
            const indicatorRect = context.get("indicatorRect");
            const indicatorTransition = context.get("indicatorTransition");
            return normalize.element({
                id: getIndicatorId(scope),
                ...parts.indicator.attrs,
                dir: prop("dir"),
                "data-orientation": prop("orientation"),
                style: {
                    "--transition-property": "left, right, top, bottom, width, height",
                    "--left": indicatorRect.left,
                    "--top": indicatorRect.top,
                    "--width": indicatorRect.width,
                    "--height": indicatorRect.height,
                    position: "absolute",
                    willChange: "var(--transition-property)",
                    transitionProperty: "var(--transition-property)",
                    transitionDuration: indicatorTransition ? "var(--transition-duration, 150ms)" : "0ms",
                    transitionTimingFunction: "var(--transition-timing-function)",
                    [isHorizontal ? "left" : "top"]: isHorizontal ? "var(--left)" : "var(--top)"
                }
            });
        }
    };
}
var { createMachine } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setup"])();
var machine = createMachine({
    props (param) {
        let { props: props2 } = param;
        return {
            dir: "ltr",
            orientation: "horizontal",
            activationMode: "automatic",
            loopFocus: true,
            composite: true,
            navigate (details) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clickIfLink"])(details.node);
            },
            defaultValue: null,
            ...props2
        };
    },
    initialState () {
        return "idle";
    },
    context (param) {
        let { prop, bindable } = param;
        return {
            value: bindable(()=>({
                    defaultValue: prop("defaultValue"),
                    value: prop("value"),
                    onChange (value) {
                        var _prop;
                        (_prop = prop("onValueChange")) === null || _prop === void 0 ? void 0 : _prop({
                            value
                        });
                    }
                })),
            focusedValue: bindable(()=>({
                    defaultValue: prop("value") || prop("defaultValue"),
                    sync: true,
                    onChange (value) {
                        var _prop;
                        (_prop = prop("onFocusChange")) === null || _prop === void 0 ? void 0 : _prop({
                            focusedValue: value
                        });
                    }
                })),
            ssr: bindable(()=>({
                    defaultValue: true
                })),
            indicatorTransition: bindable(()=>({
                    defaultValue: false
                })),
            indicatorRect: bindable(()=>({
                    defaultValue: {
                        left: "0px",
                        top: "0px",
                        width: "0px",
                        height: "0px"
                    }
                }))
        };
    },
    watch (param) {
        let { context, prop, track, action } = param;
        track([
            ()=>context.get("value")
        ], ()=>{
            action([
                "allowIndicatorTransition",
                "syncIndicatorRect",
                "syncTabIndex",
                "navigateIfNeeded"
            ]);
        });
        track([
            ()=>prop("dir"),
            ()=>prop("orientation")
        ], ()=>{
            action([
                "syncIndicatorRect"
            ]);
        });
    },
    on: {
        SET_VALUE: {
            actions: [
                "setValue"
            ]
        },
        CLEAR_VALUE: {
            actions: [
                "clearValue"
            ]
        },
        SET_INDICATOR_RECT: {
            actions: [
                "setIndicatorRect"
            ]
        },
        SYNC_TAB_INDEX: {
            actions: [
                "syncTabIndex"
            ]
        }
    },
    entry: [
        "syncIndicatorRect",
        "syncTabIndex",
        "syncSsr"
    ],
    exit: [
        "cleanupObserver"
    ],
    states: {
        idle: {
            on: {
                TAB_FOCUS: {
                    target: "focused",
                    actions: [
                        "setFocusedValue"
                    ]
                },
                TAB_CLICK: {
                    target: "focused",
                    actions: [
                        "setFocusedValue",
                        "setValue"
                    ]
                }
            }
        },
        focused: {
            on: {
                TAB_CLICK: {
                    actions: [
                        "setFocusedValue",
                        "setValue"
                    ]
                },
                ARROW_PREV: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusPrevTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusPrevTab"
                        ]
                    }
                ],
                ARROW_NEXT: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusNextTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusNextTab"
                        ]
                    }
                ],
                HOME: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusFirstTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusFirstTab"
                        ]
                    }
                ],
                END: [
                    {
                        guard: "selectOnFocus",
                        actions: [
                            "focusLastTab",
                            "selectFocusedTab"
                        ]
                    },
                    {
                        actions: [
                            "focusLastTab"
                        ]
                    }
                ],
                TAB_FOCUS: {
                    actions: [
                        "setFocusedValue"
                    ]
                },
                TAB_BLUR: {
                    target: "idle",
                    actions: [
                        "clearFocusedValue"
                    ]
                }
            }
        }
    },
    implementations: {
        guards: {
            selectOnFocus: (param)=>{
                let { prop } = param;
                return prop("activationMode") === "automatic";
            }
        },
        actions: {
            selectFocusedTab (param) {
                let { context, prop } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const focusedValue = context.get("focusedValue");
                    if (!focusedValue) return;
                    const nullable = prop("deselectable") && context.get("value") === focusedValue;
                    const value = nullable ? null : focusedValue;
                    context.set("value", value);
                });
            },
            setFocusedValue (param) {
                let { context, event, flush } = param;
                if (event.value == null) return;
                flush(()=>{
                    context.set("focusedValue", event.value);
                });
            },
            clearFocusedValue (param) {
                let { context } = param;
                context.set("focusedValue", null);
            },
            setValue (param) {
                let { context, event, prop } = param;
                const nullable = prop("deselectable") && context.get("value") === context.get("focusedValue");
                context.set("value", nullable ? null : event.value);
            },
            clearValue (param) {
                let { context } = param;
                context.set("value", null);
            },
            focusFirstTab (param) {
                let { scope } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    var _getFirstTriggerEl;
                    (_getFirstTriggerEl = getFirstTriggerEl(scope)) === null || _getFirstTriggerEl === void 0 ? void 0 : _getFirstTriggerEl.focus();
                });
            },
            focusLastTab (param) {
                let { scope } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    var _getLastTriggerEl;
                    (_getLastTriggerEl = getLastTriggerEl(scope)) === null || _getLastTriggerEl === void 0 ? void 0 : _getLastTriggerEl.focus();
                });
            },
            focusNextTab (param) {
                let { context, prop, scope, event } = param;
                var _event_value;
                const focusedValue = (_event_value = event.value) !== null && _event_value !== void 0 ? _event_value : context.get("focusedValue");
                if (!focusedValue) return;
                const triggerEl = getNextTriggerEl(scope, {
                    value: focusedValue,
                    loopFocus: prop("loopFocus")
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    if (prop("composite")) {
                        triggerEl === null || triggerEl === void 0 ? void 0 : triggerEl.focus();
                    } else if ((triggerEl === null || triggerEl === void 0 ? void 0 : triggerEl.dataset.value) != null) {
                        context.set("focusedValue", triggerEl.dataset.value);
                    }
                });
            },
            focusPrevTab (param) {
                let { context, prop, scope, event } = param;
                var _event_value;
                const focusedValue = (_event_value = event.value) !== null && _event_value !== void 0 ? _event_value : context.get("focusedValue");
                if (!focusedValue) return;
                const triggerEl = getPrevTriggerEl(scope, {
                    value: focusedValue,
                    loopFocus: prop("loopFocus")
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    if (prop("composite")) {
                        triggerEl === null || triggerEl === void 0 ? void 0 : triggerEl.focus();
                    } else if ((triggerEl === null || triggerEl === void 0 ? void 0 : triggerEl.dataset.value) != null) {
                        context.set("focusedValue", triggerEl.dataset.value);
                    }
                });
            },
            syncTabIndex (param) {
                let { context, scope } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    const value = context.get("value");
                    if (!value) return;
                    const contentEl = getContentEl(scope, value);
                    if (!contentEl) return;
                    const focusables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusables"])(contentEl);
                    if (focusables.length > 0) {
                        contentEl.removeAttribute("tabindex");
                    } else {
                        contentEl.setAttribute("tabindex", "0");
                    }
                });
            },
            cleanupObserver (param) {
                let { refs } = param;
                const cleanup = refs.get("indicatorCleanup");
                if (cleanup) cleanup();
            },
            allowIndicatorTransition (param) {
                let { context } = param;
                context.set("indicatorTransition", true);
            },
            setIndicatorRect (param) {
                let { context, event, scope } = param;
                var _event_id;
                const value = (_event_id = event.id) !== null && _event_id !== void 0 ? _event_id : context.get("value");
                const indicatorEl = getIndicatorEl(scope);
                if (!indicatorEl) return;
                if (!value) {
                    context.set("indicatorTransition", false);
                    return;
                }
                const triggerEl = getTriggerEl(scope, value);
                if (!triggerEl) return;
                context.set("indicatorRect", getRectById(scope, value));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                    context.set("indicatorTransition", false);
                });
            },
            syncSsr (param) {
                let { context } = param;
                context.set("ssr", false);
            },
            syncIndicatorRect (param) {
                let { context, refs, scope } = param;
                const cleanup = refs.get("indicatorCleanup");
                if (cleanup) cleanup();
                const value = context.get("value");
                if (!value) {
                    context.set("indicatorTransition", false);
                    return;
                }
                const triggerEl = getTriggerEl(scope, value);
                const indicatorEl = getIndicatorEl(scope);
                if (!triggerEl || !indicatorEl) return;
                const indicatorCleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackElementRect"])([
                    triggerEl
                ], {
                    measure (el) {
                        return getOffsetRect(el);
                    },
                    onEntry (param) {
                        let { rects } = param;
                        const [rect] = rects;
                        context.set("indicatorRect", resolveRect(rect));
                    }
                });
                refs.set("indicatorCleanup", indicatorCleanup);
            },
            navigateIfNeeded (param) {
                let { context, prop, scope } = param;
                const value = context.get("value");
                if (!value) return;
                const triggerEl = getTriggerEl(scope, value);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnchorElement"])(triggerEl)) {
                    var _prop;
                    (_prop = prop("navigate")) === null || _prop === void 0 ? void 0 : _prop({
                        value,
                        node: triggerEl,
                        href: triggerEl.href
                    });
                }
            }
        }
    }
});
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProps"])()([
    "activationMode",
    "composite",
    "deselectable",
    "dir",
    "getRootNode",
    "id",
    "ids",
    "loopFocus",
    "navigate",
    "onFocusChange",
    "onValueChange",
    "orientation",
    "translations",
    "value",
    "defaultValue"
]);
var splitProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])(props);
var triggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProps"])()([
    "disabled",
    "value"
]);
var splitTriggerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])(triggerProps);
var contentProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProps"])()([
    "value"
]);
var splitContentProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])(contentProps);
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/providers/environment/use-environment-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvironmentContextProvider",
    ()=>EnvironmentContextProvider,
    "useEnvironmentContext",
    ()=>useEnvironmentContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)");
'use client';
;
const [EnvironmentContextProvider, useEnvironmentContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "EnvironmentContext",
    hookName: "useEnvironmentContext",
    providerName: "<EnvironmentProvider />",
    strict: false,
    defaultValue: {
        getRootNode: ()=>document,
        getDocument: ()=>document,
        getWindow: ()=>window
    }
});
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/providers/locale/use-locale-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleContextProvider",
    ()=>LocaleContextProvider,
    "useLocaleContext",
    ()=>useLocaleContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)");
'use client';
;
const [LocaleContextProvider, useLocaleContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "LocaleContext",
    hookName: "useLocaleContext",
    providerName: "<LocaleProvider />",
    strict: false,
    defaultValue: {
        dir: "ltr",
        locale: "en-US"
    }
});
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTabs",
    ()=>useTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$providers$2f$environment$2f$use$2d$environment$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/providers/environment/use-environment-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$providers$2f$locale$2f$use$2d$locale$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/providers/locale/use-locale-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const useTabs = (props)=>{
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const { getRootNode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$providers$2f$environment$2f$use$2d$environment$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironmentContext"])();
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$providers$2f$locale$2f$use$2d$locale$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleContext"])();
    const machineProps = {
        id,
        dir,
        getRootNode,
        ...props
    };
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMachine"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["machine"], machineProps);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"](service, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeProps"]);
};
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsProvider",
    ()=>TabsProvider,
    "useTabsContext",
    ()=>useTabsContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)");
'use client';
;
const [TabsProvider, useTabsContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "TabsContext",
    hookName: "useTabsContext",
    providerName: "<TabsProvider />"
});
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/tabs-root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsRoot",
    ()=>TabsRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-split-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$render$2d$strategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/render-strategy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const TabsRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const [renderStrategyProps, tabsProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$render$2d$strategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitRenderStrategyProps"])(props);
    const [useTabsProps, localprops] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])()(tabsProps, [
        "activationMode",
        "composite",
        "defaultValue",
        "deselectable",
        "id",
        "ids",
        "loopFocus",
        "navigate",
        "onFocusChange",
        "onValueChange",
        "orientation",
        "translations",
        "value"
    ]);
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabs"])(useTabsProps);
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tabs.getRootProps(), localprops);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsProvider"], {
        value: tabs,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$render$2d$strategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategyPropsProvider"], {
            value: renderStrategyProps,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ark"].div, {
                ...mergedProps,
                ref
            })
        })
    });
});
TabsRoot.displayName = "TabsRoot";
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/tab-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabList",
    ()=>TabList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const TabList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabsContext"])();
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tabs.getListProps(), props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ark"].div, {
        ...mergedProps,
        ref
    });
});
TabList.displayName = "TabList";
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/tab-trigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabTrigger",
    ()=>TabTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-split-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const TabTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const [tabProps, localProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])()(props, [
        "disabled",
        "value"
    ]);
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabsContext"])();
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tabs.getTriggerProps(tabProps), localProps);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ark"].button, {
        ...mergedProps,
        ref
    });
});
TabTrigger.displayName = "TabTrigger";
;
}),
"[project]/Documents/new-platform/node_modules/@zag-js/presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect,
    "machine",
    ()=>machine,
    "props",
    ()=>props
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/dom-query/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/types/dist/index.mjs [app-client] (ecmascript)");
;
;
;
// src/presence.connect.ts
function connect(service, _normalize) {
    const { state, send, context } = service;
    const present = state.matches("mounted", "unmountSuspended");
    return {
        skip: !context.get("initial"),
        present,
        setNode (node) {
            if (!node) return;
            send({
                type: "NODE.SET",
                node
            });
        },
        unmount () {
            send({
                type: "UNMOUNT"
            });
        }
    };
}
var machine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMachine"])({
    props (param) {
        let { props: props2 } = param;
        return {
            ...props2,
            present: !!props2.present
        };
    },
    initialState (param) {
        let { prop } = param;
        return prop("present") ? "mounted" : "unmounted";
    },
    refs () {
        return {
            node: null,
            styles: null
        };
    },
    context (param) {
        let { bindable } = param;
        return {
            unmountAnimationName: bindable(()=>({
                    defaultValue: null
                })),
            prevAnimationName: bindable(()=>({
                    defaultValue: null
                })),
            present: bindable(()=>({
                    defaultValue: false
                })),
            initial: bindable(()=>({
                    sync: true,
                    defaultValue: false
                }))
        };
    },
    exit: [
        "clearInitial",
        "cleanupNode"
    ],
    watch (param) {
        let { track, prop, send } = param;
        track([
            ()=>prop("present")
        ], ()=>{
            send({
                type: "PRESENCE.CHANGED"
            });
        });
    },
    on: {
        "NODE.SET": {
            actions: [
                "setupNode"
            ]
        },
        "PRESENCE.CHANGED": {
            actions: [
                "setInitial",
                "syncPresence"
            ]
        }
    },
    states: {
        mounted: {
            on: {
                UNMOUNT: {
                    target: "unmounted",
                    actions: [
                        "clearPrevAnimationName",
                        "invokeOnExitComplete"
                    ]
                },
                "UNMOUNT.SUSPEND": {
                    target: "unmountSuspended"
                }
            }
        },
        unmountSuspended: {
            effects: [
                "trackAnimationEvents"
            ],
            on: {
                MOUNT: {
                    target: "mounted",
                    actions: [
                        "setPrevAnimationName"
                    ]
                },
                UNMOUNT: {
                    target: "unmounted",
                    actions: [
                        "clearPrevAnimationName",
                        "invokeOnExitComplete"
                    ]
                }
            }
        },
        unmounted: {
            on: {
                MOUNT: {
                    target: "mounted",
                    actions: [
                        "setPrevAnimationName"
                    ]
                }
            }
        }
    },
    implementations: {
        actions: {
            setInitial: (param)=>{
                let { context } = param;
                if (context.get("initial")) return;
                queueMicrotask(()=>{
                    context.set("initial", true);
                });
            },
            clearInitial: (param)=>{
                let { context } = param;
                context.set("initial", false);
            },
            invokeOnExitComplete: (param)=>{
                let { prop } = param;
                var _prop;
                (_prop = prop("onExitComplete")) === null || _prop === void 0 ? void 0 : _prop();
            },
            setupNode: (param)=>{
                let { refs, event } = param;
                if (refs.get("node") === event.node) return;
                refs.set("node", event.node);
                refs.set("styles", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(event.node));
            },
            cleanupNode: (param)=>{
                let { refs } = param;
                refs.set("node", null);
                refs.set("styles", null);
            },
            syncPresence: (param)=>{
                let { context, refs, send, prop } = param;
                const presentProp = prop("present");
                if (presentProp) {
                    return send({
                        type: "MOUNT",
                        src: "presence.changed"
                    });
                }
                const node = refs.get("node");
                if (!presentProp && (node === null || node === void 0 ? void 0 : node.ownerDocument.visibilityState) === "hidden") {
                    return send({
                        type: "UNMOUNT",
                        src: "visibilitychange"
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    var _refs_get, _refs_get1;
                    const animationName = getAnimationName(refs.get("styles"));
                    context.set("unmountAnimationName", animationName);
                    if (animationName === "none" || animationName === context.get("prevAnimationName") || ((_refs_get = refs.get("styles")) === null || _refs_get === void 0 ? void 0 : _refs_get.display) === "none" || ((_refs_get1 = refs.get("styles")) === null || _refs_get1 === void 0 ? void 0 : _refs_get1.animationDuration) === "0s") {
                        send({
                            type: "UNMOUNT",
                            src: "presence.changed"
                        });
                    } else {
                        send({
                            type: "UNMOUNT.SUSPEND"
                        });
                    }
                });
            },
            setPrevAnimationName: (param)=>{
                let { context, refs } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"])(()=>{
                    context.set("prevAnimationName", getAnimationName(refs.get("styles")));
                });
            },
            clearPrevAnimationName: (param)=>{
                let { context } = param;
                context.set("prevAnimationName", null);
            }
        },
        effects: {
            trackAnimationEvents: (param)=>{
                let { context, refs, send } = param;
                const node = refs.get("node");
                if (!node) return;
                const onStart = (event)=>{
                    var _event_composedPath, _event_composedPath1;
                    var _event_composedPath_;
                    const target = (_event_composedPath_ = (_event_composedPath1 = event.composedPath) === null || _event_composedPath1 === void 0 ? void 0 : (_event_composedPath = _event_composedPath1.call(event)) === null || _event_composedPath === void 0 ? void 0 : _event_composedPath[0]) !== null && _event_composedPath_ !== void 0 ? _event_composedPath_ : event.target;
                    if (target === node) {
                        context.set("prevAnimationName", getAnimationName(refs.get("styles")));
                    }
                };
                const onEnd = (event)=>{
                    const animationName = getAnimationName(refs.get("styles"));
                    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventTarget"])(event);
                    if (target === node && animationName === context.get("unmountAnimationName")) {
                        send({
                            type: "UNMOUNT",
                            src: "animationend"
                        });
                    }
                };
                node.addEventListener("animationstart", onStart);
                node.addEventListener("animationcancel", onEnd);
                node.addEventListener("animationend", onEnd);
                const cleanupStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"])(node, {
                    animationFillMode: "forwards"
                });
                return ()=>{
                    node.removeEventListener("animationstart", onStart);
                    node.removeEventListener("animationcancel", onEnd);
                    node.removeEventListener("animationend", onEnd);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>cleanupStyles());
                };
            }
        }
    }
});
function getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}
var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$types$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProps"])()([
    "onExitComplete",
    "present",
    "immediate"
]);
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/use-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>useEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useEvent(callback) {
    let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { sync = false } = opts;
    const callbackRef = useLatestRef(callback);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEvent.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _callbackRef_current;
            if (sync) return queueMicrotask({
                "useEvent.useCallback": ()=>{
                    var _callbackRef_current;
                    return (_callbackRef_current = callbackRef.current) === null || _callbackRef_current === void 0 ? void 0 : _callbackRef_current.call(callbackRef, ...args);
                }
            }["useEvent.useCallback"]);
            return (_callbackRef_current = callbackRef.current) === null || _callbackRef_current === void 0 ? void 0 : _callbackRef_current.call(callbackRef, ...args);
        }
    }["useEvent.useCallback"], [
        sync,
        callbackRef
    ]);
}
function useLatestRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    ref.current = value;
    return ref;
}
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/presence/use-presence.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePresence",
    ()=>usePresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/use-event.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const usePresence = function() {
    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { lazyMount, unmountOnExit, present, skipAnimationOnMount = false, ...rest } = props;
    const wasEverPresent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const machineProps = {
        ...rest,
        present,
        onExitComplete: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(props.onExitComplete)
    };
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMachine"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["machine"], machineProps);
    const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"](service, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeProps"]);
    if (api.present) {
        wasEverPresent.current = true;
    }
    const unmounted = !api.present && !wasEverPresent.current && lazyMount || unmountOnExit && !api.present && wasEverPresent.current;
    const getPresenceProps = ()=>({
            "data-state": api.skip && skipAnimationOnMount ? void 0 : present ? "open" : "closed",
            hidden: !api.present
        });
    return {
        ref: api.setNode,
        getPresenceProps,
        present: api.present,
        unmounted
    };
};
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/presence/use-presence-context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresenceProvider",
    ()=>PresenceProvider,
    "usePresenceContext",
    ()=>usePresenceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-context.js [app-client] (ecmascript)");
'use client';
;
const [PresenceProvider, usePresenceContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "PresenceContext",
    hookName: "usePresenceContext",
    providerName: "<PresenceProvider />"
});
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/tab-content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabContent",
    ()=>TabContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/compose-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/create-split-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$render$2d$strategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/utils/render-strategy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$presence$2f$use$2d$presence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/presence/use-presence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$presence$2f$use$2d$presence$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/presence/use-presence-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const TabContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const [contentProps, localProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$create$2d$split$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSplitProps"])()(props, [
        "value"
    ]);
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabsContext"])();
    const renderStrategyProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$render$2d$strategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderStrategyPropsContext"])();
    const presence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$presence$2f$use$2d$presence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])({
        ...renderStrategyProps,
        present: tabs.value === props.value,
        immediate: true
    });
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tabs.getContentProps(contentProps), presence.getPresenceProps(), localProps);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$presence$2f$use$2d$presence$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceProvider"], {
        value: presence,
        children: presence.unmounted ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ark"].div, {
            ...mergedProps,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(presence.ref, ref)
        })
    });
});
TabContent.displayName = "TabContent";
;
}),
"[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/tab-indicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabIndicator",
    ()=>TabIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@zag-js/core/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/new-platform/node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const TabIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$tabs$2f$use$2d$tabs$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabsContext"])();
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(tabs.getIndicatorProps(), props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$new$2d$platform$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$components$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ark"].div, {
        ...mergedProps,
        ref
    });
});
TabIndicator.displayName = "TabIndicator";
;
}),
]);

//# sourceMappingURL=ec17f_240eab1b._.js.map