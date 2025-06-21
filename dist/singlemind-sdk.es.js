import xt, { createContext as _t, useContext as _e, useState as Pt } from "react";
var Re = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ct() {
  if (ve) return W;
  ve = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var c in s)
        c !== "key" && (o[c] = s[c]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return W.Fragment = t, W.jsx = r, W.jsxs = r, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Nt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === Tt ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case b:
          return "Fragment";
        case R:
          return "Profiler";
        case m:
          return "StrictMode";
        case x:
          return "Suspense";
        case j:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case h:
            return "Portal";
          case A:
            return (u.displayName || "Context") + ".Provider";
          case T:
            return (u._context.displayName || "Context") + ".Consumer";
          case F:
            var E = u.render;
            return u = u.displayName, u || (u = E.displayName || E.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case v:
            return E = u.displayName || null, E !== null ? E : e(u.type) || "Memo";
          case I:
            E = u._payload, u = u._init;
            try {
              return e(u(E));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var S = E.error, _ = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return S.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(u);
      }
    }
    function n(u) {
      if (u === b) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === I)
        return "<...>";
      try {
        var E = e(u);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = de.A;
      return u === null ? null : u.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (ke.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, E) {
      function S() {
        Fe || (Fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: S,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return Ue[u] || (Ue[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, E, S, _, B, D, he, me) {
      return S = D.ref, u = {
        $$typeof: g,
        type: u,
        key: E,
        props: D,
        _owner: B
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function l(u, E, S, _, B, D, he, me) {
      var P = E.children;
      if (P !== void 0)
        if (_)
          if (Ot(P)) {
            for (_ = 0; _ < P.length; _++)
              p(P[_]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(P);
      if (ke.call(E, "key")) {
        P = e(u);
        var H = Object.keys(E).filter(function(At) {
          return At !== "key";
        });
        _ = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", Le[P + _] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          P,
          H,
          P
        ), Le[P + _] = !0);
      }
      if (P = null, S !== void 0 && (r(S), P = "" + S), i(E) && (r(E.key), P = "" + E.key), "key" in E) {
        S = {};
        for (var be in E)
          be !== "key" && (S[be] = E[be]);
      } else S = E;
      return P && c(
        S,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        P,
        D,
        B,
        s(),
        S,
        he,
        me
      );
    }
    function p(u) {
      typeof u == "object" && u !== null && u.$$typeof === g && u._store && (u._store.validated = 1);
    }
    var w = xt, g = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), A = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), Tt = Symbol.for("react.client.reference"), de = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ke = Object.prototype.hasOwnProperty, Ot = Array.isArray, pe = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var Fe, Ue = {}, je = w["react-stack-bottom-frame"].bind(
      w,
      o
    )(), De = pe(n(o)), Le = {};
    V.Fragment = b, V.jsx = function(u, E, S, _, B) {
      var D = 1e4 > de.recentlyCreatedOwnerStacks++;
      return l(
        u,
        E,
        S,
        !1,
        _,
        B,
        D ? Error("react-stack-top-frame") : je,
        D ? pe(n(u)) : De
      );
    }, V.jsxs = function(u, E, S, _, B) {
      var D = 1e4 > de.recentlyCreatedOwnerStacks++;
      return l(
        u,
        E,
        S,
        !0,
        _,
        B,
        D ? Error("react-stack-top-frame") : je,
        D ? pe(n(u)) : De
      );
    };
  }()), V;
}
process.env.NODE_ENV === "production" ? Re.exports = Ct() : Re.exports = Nt();
var kt = Re.exports;
const se = _t(void 0), pn = ({ children: e, clientId: t, apiEndpoint: r }) => /* @__PURE__ */ kt.jsx(se.Provider, { value: { clientId: t, apiEndpoint: r }, children: e });
function hn() {
  const e = _e(se);
  if (!e)
    throw new Error("useSingleMind must be used within an SingleMindProvider");
  return e;
}
const Ft = () => {
  const e = _e(se);
  if (!e) throw new Error("useClientId must be used within SingleMindProvider");
  return e.clientId;
}, Ut = () => {
  const e = _e(se);
  if (!e) throw new Error("useApiEndpoint must be used within SingleMindProvider");
  return e.apiEndpoint;
};
function Qe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jt } = Object.prototype, { getPrototypeOf: Pe } = Object, { iterator: oe, toStringTag: Ze } = Symbol, ie = /* @__PURE__ */ ((e) => (t) => {
  const r = jt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => ie(t) === e), ae = (e) => (t) => typeof t === e, { isArray: z } = Array, K = ae("undefined");
function Dt(e) {
  return e !== null && !K(e) && e.constructor !== null && !K(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const et = U("ArrayBuffer");
function Lt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && et(e.buffer), t;
}
const vt = ae("string"), N = ae("function"), tt = ae("number"), ce = (e) => e !== null && typeof e == "object", Bt = (e) => e === !0 || e === !1, Z = (e) => {
  if (ie(e) !== "object")
    return !1;
  const t = Pe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ze in e) && !(oe in e);
}, It = U("Date"), qt = U("File"), Mt = U("Blob"), $t = U("FileList"), Ht = (e) => ce(e) && N(e.pipe), zt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((t = ie(e)) === "formdata" || // detect form-data instance
  t === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, Jt = U("URLSearchParams"), [Wt, Vt, Yt, Kt] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Xt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), z(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (n = 0; n < i; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function rt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nt = (e) => !K(e) && e !== q;
function Se() {
  const { caseless: e } = nt(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && rt(t, s) || s;
    Z(t[o]) && Z(n) ? t[o] = Se(t[o], n) : Z(n) ? t[o] = Se({}, n) : z(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && X(arguments[n], r);
  return t;
}
const Gt = (e, t, r, { allOwnKeys: n } = {}) => (X(t, (s, o) => {
  r && N(s) ? e[o] = Qe(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), Qt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zt = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, er = (e, t, r, n) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = r !== !1 && Pe(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, tr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, rr = (e) => {
  if (!e) return null;
  if (z(e)) return e;
  let t = e.length;
  if (!tt(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, nr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pe(Uint8Array)), sr = (e, t) => {
  const n = (e && e[oe]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, or = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ir = U("HTMLFormElement"), ar = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Ie = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), cr = U("RegExp"), st = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  X(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, lr = (e) => {
  st(e, (t, r) => {
    if (N(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (N(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ur = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return z(e) ? n(e) : n(String(e).split(t)), r;
}, fr = () => {
}, dr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function pr(e) {
  return !!(e && N(e.append) && e[Ze] === "FormData" && e[oe]);
}
const hr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (ce(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = z(n) ? [] : {};
        return X(n, (i, c) => {
          const d = r(i, s + 1);
          !K(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, mr = U("AsyncFunction"), br = (e) => e && (ce(e) || N(e)) && N(e.then) && N(e.catch), ot = ((e, t) => e ? setImmediate : t ? ((r, n) => (q.addEventListener("message", ({ source: s, data: o }) => {
  s === q && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), q.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  N(q.postMessage)
), yr = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || ot, Er = (e) => e != null && N(e[oe]), a = {
  isArray: z,
  isArrayBuffer: et,
  isBuffer: Dt,
  isFormData: zt,
  isArrayBufferView: Lt,
  isString: vt,
  isNumber: tt,
  isBoolean: Bt,
  isObject: ce,
  isPlainObject: Z,
  isReadableStream: Wt,
  isRequest: Vt,
  isResponse: Yt,
  isHeaders: Kt,
  isUndefined: K,
  isDate: It,
  isFile: qt,
  isBlob: Mt,
  isRegExp: cr,
  isFunction: N,
  isStream: Ht,
  isURLSearchParams: Jt,
  isTypedArray: nr,
  isFileList: $t,
  forEach: X,
  merge: Se,
  extend: Gt,
  trim: Xt,
  stripBOM: Qt,
  inherits: Zt,
  toFlatObject: er,
  kindOf: ie,
  kindOfTest: U,
  endsWith: tr,
  toArray: rr,
  forEachEntry: sr,
  matchAll: or,
  isHTMLForm: ir,
  hasOwnProperty: Ie,
  hasOwnProp: Ie,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: st,
  freezeMethods: lr,
  toObjectSet: ur,
  toCamelCase: ar,
  noop: fr,
  toFiniteNumber: dr,
  findKey: rt,
  global: q,
  isContextDefined: nt,
  isSpecCompliantForm: pr,
  toJSONObject: hr,
  isAsyncFn: mr,
  isThenable: br,
  setImmediate: ot,
  asap: yr,
  isIterable: Er
};
function y(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const it = y.prototype, at = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  at[e] = { value: e };
});
Object.defineProperties(y, at);
Object.defineProperty(it, "isAxiosError", { value: !0 });
y.from = (e, t, r, n, s, o) => {
  const i = Object.create(it);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), y.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const wr = null;
function ge(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ct(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qe(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ct(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Rr(e) {
  return a.isArray(e) && !e.some(ge);
}
const Sr = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function le(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, m) {
    return !a.isUndefined(m[b]);
  });
  const n = r.metaTokens, s = r.visitor || l, o = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (a.isBoolean(h))
      return h.toString();
    if (!d && a.isBlob(h))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, b, m) {
    let R = h;
    if (h && !m && typeof h == "object") {
      if (a.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && Rr(h) || (a.isFileList(h) || a.endsWith(b, "[]")) && (R = a.toArray(h)))
        return b = ct(b), R.forEach(function(A, F) {
          !(a.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? qe([b], F, o) : i === null ? b : b + "[]",
            f(A)
          );
        }), !1;
    }
    return ge(h) ? !0 : (t.append(qe(m, b, o), f(h)), !1);
  }
  const p = [], w = Object.assign(Sr, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: ge
  });
  function g(h, b) {
    if (!a.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      p.push(h), a.forEach(h, function(R, T) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(T) ? T.trim() : T,
          b,
          w
        )) === !0 && g(R, b ? b.concat(T) : [T]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Me(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ce(e, t) {
  this._pairs = [], e && le(e, this, t);
}
const lt = Ce.prototype;
lt.append = function(t, r) {
  this._pairs.push([t, r]);
};
lt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Me);
  } : Me;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function gr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ut(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || gr;
  a.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new Ce(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class $e {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ft = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Tr = typeof URLSearchParams < "u" ? URLSearchParams : Ce, Or = typeof FormData < "u" ? FormData : null, Ar = typeof Blob < "u" ? Blob : null, xr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Tr,
    FormData: Or,
    Blob: Ar
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ne = typeof window < "u" && typeof document < "u", Te = typeof navigator == "object" && navigator || void 0, _r = Ne && (!Te || ["ReactNative", "NativeScript", "NS"].indexOf(Te.product) < 0), Pr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cr = Ne && window.location.href || "http://localhost", Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ne,
  hasStandardBrowserEnv: _r,
  hasStandardBrowserWebWorkerEnv: Pr,
  navigator: Te,
  origin: Cr
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...Nr,
  ...xr
};
function kr(e, t) {
  return le(e, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return C.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Fr(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ur(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function dt(e) {
  function t(r, n, s, o) {
    let i = r[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= r.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = Ur(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, s) => {
      t(Fr(n), s, r, 0);
    }), r;
  }
  return null;
}
function jr(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const G = {
  transitional: ft,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(dt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return kr(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return le(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), jr(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || G.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  G.headers[e] = {};
});
const Dr = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Lr = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && Dr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, He = Symbol("internals");
function Y(e) {
  return e && String(e).trim().toLowerCase();
}
function ee(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ee) : String(e);
}
function vr(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Br = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ye(e, t, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function Ir(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function qr(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(c, d, f) {
      const l = Y(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || f === !0 || f === void 0 && s[p] !== !1) && (s[p || d] = ee(c));
    }
    const i = (c, d) => a.forEach(c, (f, l) => o(f, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (a.isString(t) && (t = t.trim()) && !Br(t))
      i(Lr(t), r);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, f;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = l[0]] = (d = c[f]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      i(c, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Y(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return vr(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Y(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ye(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = Y(i), i) {
        const c = a.findKey(n, i);
        c && (!r || ye(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || ye(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(n, o);
      if (i) {
        r[i] = ee(s), delete r[o];
        return;
      }
      const c = t ? Ir(o) : String(o).trim();
      c !== o && delete r[o], r[c] = ee(s), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[He] = this[He] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = Y(i);
      n[c] || (qr(s, i), n[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(k);
function Ee(e, t) {
  const r = this || G, n = t || r, s = k.from(n.headers);
  let o = n.data;
  return a.forEach(e, function(c) {
    o = c.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function pt(e) {
  return !!(e && e.__CANCEL__);
}
function J(e, t, r) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(J, y, {
  __CANCEL__: !0
});
function ht(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new y(
    "Request failed with status code " + r.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Mr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function $r(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), l = n[o];
    i || (i = f), r[s] = d, n[s] = f;
    let p = o, w = 0;
    for (; p !== s; )
      w += r[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const g = l && f - l;
    return g ? Math.round(w * 1e3 / g) : void 0;
  };
}
function Hr(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const i = (f, l = Date.now()) => {
    r = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, f);
  };
  return [(...f) => {
    const l = Date.now(), p = l - r;
    p >= n ? i(f, l) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, n - p)));
  }, () => s && i(s)];
}
const re = (e, t, r = 3) => {
  let n = 0;
  const s = $r(50, 250);
  return Hr((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - n, f = s(d), l = i <= c;
    n = i;
    const p = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && l ? (c - i) / f : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, ze = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Je = (e) => (...t) => a.asap(() => e(...t)), zr = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, C.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, Jr = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Wr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mt(e, t, r) {
  let n = !Wr(t);
  return e && (n || r == !1) ? Vr(e, t) : t;
}
const We = (e) => e instanceof k ? { ...e } : e;
function $(e, t) {
  t = t || {};
  const r = {};
  function n(f, l, p, w) {
    return a.isPlainObject(f) && a.isPlainObject(l) ? a.merge.call({ caseless: w }, f, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(f, l, p, w) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f, p, w);
    } else return n(f, l, p, w);
  }
  function o(f, l) {
    if (!a.isUndefined(l))
      return n(void 0, l);
  }
  function i(f, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, l);
  }
  function c(f, l, p) {
    if (p in t)
      return n(f, l);
    if (p in e)
      return n(void 0, f);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (f, l, p) => s(We(f), We(l), p, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = d[l] || s, w = p(e[l], t[l], l);
    a.isUndefined(w) && p !== c || (r[l] = w);
  }), r;
}
const bt = (e) => {
  const t = $({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = k.from(i), t.url = ut(mt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(r)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [f, ...l] = d ? d.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(t)), n || n !== !1 && zr(t.url))) {
    const f = s && o && Jr.read(o);
    f && i.set(s, f);
  }
  return t;
}, Yr = typeof XMLHttpRequest < "u", Kr = Yr && function(e) {
  return new Promise(function(r, n) {
    const s = bt(e);
    let o = s.data;
    const i = k.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, l, p, w, g, h;
    function b() {
      g && g(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function R() {
      if (!m)
        return;
      const A = k.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), x = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: A,
        config: e,
        request: m
      };
      ht(function(v) {
        r(v), b();
      }, function(v) {
        n(v), b();
      }, x), m = null;
    }
    "onloadend" in m ? m.onloadend = R : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, m.onabort = function() {
      m && (n(new y("Request aborted", y.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new y("Network Error", y.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let F = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || ft;
      s.timeoutErrorMessage && (F = s.timeoutErrorMessage), n(new y(
        F,
        x.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && a.forEach(i.toJSON(), function(F, x) {
      m.setRequestHeader(x, F);
    }), a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), f && ([w, h] = re(f, !0), m.addEventListener("progress", w)), d && m.upload && ([p, g] = re(d), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (l = (A) => {
      m && (n(!A || A.type ? new J(null, e, m) : A), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const T = Mr(s.url);
    if (T && C.protocols.indexOf(T) === -1) {
      n(new y("Unsupported protocol " + T + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, Xr = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, c();
        const l = f instanceof Error ? f : this.reason;
        n.abort(l instanceof y ? l : new J(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: d } = n;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, Gr = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, Qr = async function* (e, t) {
  for await (const r of Zr(e))
    yield* Gr(r, t);
}, Zr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ve = (e, t, r, n) => {
  const s = Qr(e, t);
  let o = 0, i, c = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: l } = await s.next();
        if (f) {
          c(), d.close();
          return;
        }
        let p = l.byteLength;
        if (r) {
          let w = o += p;
          r(w);
        }
        d.enqueue(new Uint8Array(l));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, ue = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", yt = ue && typeof ReadableStream == "function", en = ue && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Et = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, tn = yt && Et(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ye = 64 * 1024, Oe = yt && Et(() => a.isReadableStream(new Response("").body)), ne = {
  stream: Oe && ((e) => e.body)
};
ue && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ne[t] && (ne[t] = a.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const rn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(C.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await en(e)).byteLength;
}, nn = async (e, t) => {
  const r = a.toFiniteNumber(e.getContentLength());
  return r ?? rn(t);
}, sn = ue && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: f,
    headers: l,
    withCredentials: p = "same-origin",
    fetchOptions: w
  } = bt(e);
  f = f ? (f + "").toLowerCase() : "text";
  let g = Xr([s, o && o.toAbortSignal()], i), h;
  const b = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let m;
  try {
    if (d && tn && r !== "get" && r !== "head" && (m = await nn(l, n)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), j;
      if (a.isFormData(n) && (j = x.headers.get("content-type")) && l.setContentType(j), x.body) {
        const [v, I] = ze(
          m,
          re(Je(d))
        );
        n = Ve(x.body, Ye, v, I);
      }
    }
    a.isString(p) || (p = p ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    h = new Request(t, {
      ...w,
      signal: g,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: R ? p : void 0
    });
    let T = await fetch(h, w);
    const A = Oe && (f === "stream" || f === "response");
    if (Oe && (c || A && b)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Q) => {
        x[Q] = T[Q];
      });
      const j = a.toFiniteNumber(T.headers.get("content-length")), [v, I] = c && ze(
        j,
        re(Je(c), !0)
      ) || [];
      T = new Response(
        Ve(T.body, Ye, v, () => {
          I && I(), b && b();
        }),
        x
      );
    }
    f = f || "text";
    let F = await ne[a.findKey(ne, f) || "text"](T, e);
    return !A && b && b(), await new Promise((x, j) => {
      ht(x, j, {
        data: F,
        headers: k.from(T.headers),
        status: T.status,
        statusText: T.statusText,
        config: e,
        request: h
      });
    });
  } catch (R) {
    throw b && b(), R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, h),
      {
        cause: R.cause || R
      }
    ) : y.from(R, R && R.code, e, h);
  }
}), Ae = {
  http: wr,
  xhr: Kr,
  fetch: sn
};
a.forEach(Ae, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ke = (e) => `- ${e}`, on = (e) => a.isFunction(e) || e === null || e === !1, wt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !on(r) && (n = Ae[(i = String(r)).toLowerCase()], n === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ke).join(`
`) : " " + Ke(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ae
};
function we(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new J(null, e);
}
function Xe(e) {
  return we(e), e.headers = k.from(e.headers), e.data = Ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wt.getAdapter(e.adapter || G.adapter)(e).then(function(n) {
    return we(e), n.data = Ee.call(
      e,
      e.transformResponse,
      n
    ), n.headers = k.from(n.headers), n;
  }, function(n) {
    return pt(n) || (we(e), n && n.response && (n.response.data = Ee.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = k.from(n.response.headers))), Promise.reject(n);
  });
}
const Rt = "1.10.0", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fe[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ge = {};
fe.transitional = function(t, r, n) {
  function s(o, i) {
    return "[Axios v" + Rt + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !Ge[i] && (Ge[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
fe.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function an(e, t, r) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new y("option " + o + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const te = {
  assertOptions: an,
  validators: fe
}, L = te.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $e(),
      response: new $e()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = $(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && te.assertOptions(n, {
      silentJSONParsing: L.transitional(L.boolean),
      forcedJSONParsing: L.transitional(L.boolean),
      clarifyTimeoutError: L.transitional(L.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : te.assertOptions(s, {
      encode: L.function,
      serialize: L.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), te.assertOptions(r, {
      baseUrl: L.spelling("baseURL"),
      withXsrfToken: L.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), r.headers = k.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(r) === !1 || (d = d && b.synchronous, c.unshift(b.fulfilled, b.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(b) {
      f.push(b.fulfilled, b.rejected);
    });
    let l, p = 0, w;
    if (!d) {
      const h = [Xe.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, f), w = h.length, l = Promise.resolve(r); p < w; )
        l = l.then(h[p++], h[p++]);
      return l;
    }
    w = c.length;
    let g = r;
    for (p = 0; p < w; ) {
      const h = c[p++], b = c[p++];
      try {
        g = h(g);
      } catch (m) {
        b.call(this, m);
        break;
      }
    }
    try {
      l = Xe.call(this, g);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, w = f.length; p < w; )
      l = l.then(f[p++], f[p++]);
    return l;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const r = mt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ut(r, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(r, n) {
    return this.request($(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, c) {
      return this.request($(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = r(), M.prototype[t + "Form"] = r(!0);
});
let cn = class St {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      n.reason || (n.reason = new J(o, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new St(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function ln(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function un(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const xe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(xe).forEach(([e, t]) => {
  xe[t] = e;
});
function gt(e) {
  const t = new M(e), r = Qe(M.prototype.request, t);
  return a.extend(r, M.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return gt($(e, s));
  }, r;
}
const O = gt(G);
O.Axios = M;
O.CanceledError = J;
O.CancelToken = cn;
O.isCancel = pt;
O.VERSION = Rt;
O.toFormData = le;
O.AxiosError = y;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = ln;
O.isAxiosError = un;
O.mergeConfig = $;
O.AxiosHeaders = k;
O.formToJSON = (e) => dt(a.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = wt.getAdapter;
O.HttpStatusCode = xe;
O.default = O;
const {
  Axios: yn,
  AxiosError: En,
  CanceledError: wn,
  isCancel: Rn,
  CancelToken: Sn,
  VERSION: gn,
  all: Tn,
  Cancel: On,
  isAxiosError: An,
  spread: xn,
  toFormData: _n,
  AxiosHeaders: Pn,
  HttpStatusCode: Cn,
  formToJSON: Nn,
  getAdapter: kn,
  mergeConfig: Fn
} = O, fn = `
query PortfolioData($address: String!, $clientId: String!) {
  getPortfolio(
    data: {
      address: $address,
      clientId: $clientId
    }
  ) {
    tvlUSD
    profile {
      avatar
      username
      xAccount
      displayName
      description
    }
    topChains {
      name
      tvlUSD
    }
    topTokens {
      balance
      balanceInUSD
      name
      symbol
      tokenAddress
    }
    topCategories {
      name
      tvlUSD
    }
    walletAgeInDays
    walletAddress
  }
}
`, Un = () => {
  const e = Ft(), t = Ut(), [r, n] = Pt(!1);
  return {
    fetchWalletProfile: async (o) => {
      var d, f;
      if (!(o != null && o.trim()))
        return {
          success: !1,
          error: {
            message: "Wallet address is required",
            code: "INVALID_INPUT"
          }
        };
      n(!0);
      const i = `${t}/graphql`, c = {
        address: o,
        clientId: e
      };
      try {
        const l = await O.post(
          i,
          {
            query: fn,
            variables: c
          },
          {
            timeout: 1e4,
            // 10 second timeout
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (l.data.errors)
          throw new Error(((d = l.data.errors[0]) == null ? void 0 : d.message) || "Failed to fetch wallet profile");
        if (!((f = l.data.data) != null && f.getPortfolio))
          throw new Error("No data received from server");
        return {
          success: !0,
          data: l.data.data.getPortfolio
        };
      } catch (l) {
        const p = l;
        let w = "Failed to fetch wallet profile";
        throw p.response ? (w = `Server responded with status ${p.response.status}`, `${p.response.status}`) : p.request ? w = "No response from server" : p.code === "ECONNABORTED" && (w = "Request timeout"), new Error(w);
      } finally {
        n(!1);
      }
    },
    isLoading: r
  };
};
export {
  pn as SingleMindProvider,
  hn as useSingleMind,
  Un as useSingleMindWalletProfile
};
