/******/ var __webpack_modules__ = ({

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GRAPHQL_ENDPOINT: () => (/* binding */ GRAPHQL_ENDPOINT),
/* harmony export */   PUBLIC_STOREFRONT_API_TOKEN: () => (/* binding */ PUBLIC_STOREFRONT_API_TOKEN),
/* harmony export */   PUBLIC_STORE_DOMAIN: () => (/* binding */ PUBLIC_STORE_DOMAIN)
/* harmony export */ });
var PUBLIC_STOREFRONT_API_TOKEN = '0f3a32c356f27e7ab24a28674bc60492';
var PUBLIC_STORE_DOMAIN = 'https://slalom-aem.myshopify.com';
var GRAPHQL_ENDPOINT = 'https://slalom-aem.myshopify.com/api/2024-07/graphql.json';

/***/ }),

/***/ "./scripts/htm.js":
/*!************************!*\
  !*** ./scripts/htm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _n = function n(t, s, r, e) {
    var u;
    s[0] = 0;
    for (var h = 1; h < s.length; h++) {
      var p = s[h++],
        a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
      3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, _n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
    }
    return e;
  },
  t = new Map();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {
  var r = t.get(this);
  return r || (r = new Map(), t.set(this, r)), (r = _n(this, r.get(s) || (r.set(s, r = function (n) {
    for (var t, s, r = 1, e = "", u = "", h = [0], p = function p(n) {
        1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";
      }, a = 0; a < n.length; a++) {
      a && (1 === r && p(), p(a));
      for (var l = 0; l < n[a].length; l++) t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
    }
    return p(), h;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}

/***/ }),

/***/ "./scripts/preact.js":
/*!***************************!*\
  !*** ./scripts/preact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ d),
/* harmony export */   Fragment: () => (/* binding */ p),
/* harmony export */   cloneElement: () => (/* binding */ q),
/* harmony export */   createContext: () => (/* binding */ B),
/* harmony export */   createElement: () => (/* binding */ h),
/* harmony export */   createRef: () => (/* binding */ y),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   hydrate: () => (/* binding */ S),
/* harmony export */   isValidElement: () => (/* binding */ i),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ P),
/* harmony export */   toChildArray: () => (/* binding */ x)
/* harmony export */ });
var n,
  l,
  u,
  i,
  t,
  o,
  r,
  f = {},
  e = [],
  c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function h(l, u, i) {
  var t,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return v(l, f, t, o, null);
}
function v(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function y() {
  return {
    current: null
  };
}
function p(n) {
  return n.children;
}
function d(n, l) {
  this.props = n, this.context = l;
}
function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? _(n) : null;
}
function k(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return k(n);
  }
}
function b(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
  });
}
function w(n, l, u, i, t, o, r, c, s, a) {
  var h,
    y,
    d,
    k,
    b,
    g,
    w,
    x = i && i.__k || e,
    C = x.length;
  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
      if ((d = x[y]) && k.key == d.key && k.type === d.type) {
        x[y] = void 0;
        break;
      }
      d = null;
    }
    j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
  }
  for (u.__e = g, h = C; h--;) null != x[h] && N(x[h], x[h]);
  if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
}
function m(n, l, u) {
  for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));
  return l;
}
function x(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    x(n, l);
  }) : l.push(n)), l;
}
function A(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}
function C(n, l, u, i, t) {
  var o;
  for (o in u) "children" === o || "key" === o || o in l || H(n, o, null, u[o], i);
  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}
function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}
function H(n, l, u, i, t) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}
function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}
function j(n, u, i, t, o, r, f, e, c) {
  var a,
    h,
    v,
    y,
    _,
    k,
    b,
    g,
    m,
    x,
    A,
    C,
    $,
    H,
    I,
    T = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);
  try {
    n: if ("function" == typeof T) {
      if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
          for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
          h._sb = [], h.__h.length && f.push(h);
          break n;
        }
        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, _, k);
        });
      }
      if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
        for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
        h._sb = [];
      } else do {
        h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
      } while (h.__d && ++$ < 25);
      h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);
    (a = l.diffed) && a(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
  }
}
function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function L(l, u, i, t, o, r, e, c) {
  var s,
    h,
    v,
    y = i.props,
    p = u.props,
    d = u.type,
    k = 0;
  if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, r[k] = null;
    break;
  }
  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }
  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
      (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }
    if (C(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a(r[k]);
    c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
  }
  return l;
}
function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}
function N(n, u, i) {
  var t, o;
  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null, n.__c = void 0;
  }
  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N(t[o], u, i || "function" != typeof n.type);
  i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;
}
function O(n, l, u) {
  return this.constructor(n, u);
}
function P(u, i, t) {
  var o, r, e;
  l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}
function S(n, l) {
  P(n, l, S);
}
function q(l, u, i) {
  var t,
    o,
    r,
    f = s({}, l.props);
  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}
function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(b);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = e.slice, l = {
  __e: function __e(n, l, u, i) {
    for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, i = function i(n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;


/***/ }),

/***/ "./scripts/shopify.js":
/*!****************************!*\
  !*** ./scripts/shopify.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shopifyClient: () => (/* binding */ shopifyClient)
/* harmony export */ });
/* harmony import */ var _storefront_api_client_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storefront-api-client.min.js */ "./scripts/storefront-api-client.min.js");
/* harmony import */ var _storefront_api_client_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storefront_api_client_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index.js */ "./constants/index.js");


var shopifyClient = ShopifyStorefrontAPIClient.createStorefrontApiClient({
  storeDomain: "".concat(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.PUBLIC_STORE_DOMAIN),
  apiVersion: '2024-04',
  publicAccessToken: "".concat(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.PUBLIC_STOREFRONT_API_TOKEN)
});

/***/ }),

/***/ "./scripts/storefront-api-client.min.js":
/*!**********************************************!*\
  !*** ./scripts/storefront-api-client.min.js ***!
  \**********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! shopify/storefront-api-client@0.2.3 -- Copyright (c) 2023-present, Shopify Inc. -- license (MIT): https://github.com/Shopify/shopify-api-js/blob/main/LICENSE.md */
!function (e, r) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? r(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  var r = "GraphQL Client",
    t = 0,
    n = 3,
    o = "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
    s = "Response returned unexpected Content-Type:",
    i = "An unknown error has occurred. The API did not return a data object or any errors in its response.",
    a = {
      json: "application/json",
      multipart: "multipart/mixed"
    },
    c = 1e3,
    u = [429, 503];
  function p(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : r;
    return e.startsWith("".concat(t)) ? e : "".concat(t, ": ").concat(e);
  }
  function l(e) {
    return e instanceof Error ? e.message : JSON.stringify(e);
  }
  function f(_ref) {
    var e = _ref.client,
      r = _ref.retries;
    if (void 0 !== r && ("number" != typeof r || r < t || r > n)) throw new Error("".concat(e, ": The provided \"retries\" value (").concat(r, ") is invalid - it cannot be less than ").concat(t, " or greater than ").concat(n));
  }
  function d(e, r) {
    return r && ("object" != _typeof(r) || Array.isArray(r) || "object" == _typeof(r) && Object.keys(r).length > 0) ? _defineProperty({}, e, r) : {};
  }
  function h(_ref3) {
    var e = _ref3.clientLogger,
      _ref3$customFetchApi = _ref3.customFetchApi,
      t = _ref3$customFetchApi === void 0 ? fetch : _ref3$customFetchApi,
      _ref3$client = _ref3.client,
      n = _ref3$client === void 0 ? r : _ref3$client,
      _ref3$defaultRetryWai = _ref3.defaultRetryWaitTime,
      o = _ref3$defaultRetryWai === void 0 ? c : _ref3$defaultRetryWai,
      _ref3$retriableCodes = _ref3.retriableCodes,
      s = _ref3$retriableCodes === void 0 ? u : _ref3$retriableCodes;
    var _i = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(r, a, c) {
        var u, f, d, _d, _t;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              u = a + 1, f = c + 1;
              _context2.prev = 1;
              _context2.next = 4;
              return t.apply(void 0, _toConsumableArray(r));
            case 4:
              d = _context2.sent;
              e({
                type: "HTTP-Response",
                content: {
                  requestParams: r,
                  response: d
                }
              });
              if (!(!d.ok && s.includes(d.status) && u <= f)) {
                _context2.next = 8;
                break;
              }
              throw new Error();
            case 8:
              return _context2.abrupt("return", d);
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              if (!(u <= f)) {
                _context2.next = 19;
                break;
              }
              _t = (_d = d) === null || _d === void 0 ? void 0 : _d.headers.get("Retry-After");
              _context2.next = 17;
              return function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (r) {
                          return setTimeout(r, e);
                        }));
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x4) {
                  return _ref5.apply(this, arguments);
                };
              }()(_t ? parseInt(_t, 10) : o);
            case 17:
              e({
                type: "HTTP-Retry",
                content: {
                  requestParams: r,
                  lastResponse: d,
                  retryAttempt: a,
                  maxRetries: c
                }
              });
              return _context2.abrupt("return", _i(r, u, c));
            case 19:
              throw new Error(p("".concat(c > 0 ? "Attempted maximum number of ".concat(c, " network retries. Last message - ") : "").concat(l(_context2.t0)), n));
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 11]]);
      }));
      return function i(_x, _x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }();
    return _i;
  }
  function m(_ref6) {
    var e = _ref6.headers,
      t = _ref6.url,
      _ref6$customFetchApi = _ref6.customFetchApi,
      n = _ref6$customFetchApi === void 0 ? $ : _ref6$customFetchApi,
      _ref6$retries = _ref6.retries,
      u = _ref6$retries === void 0 ? 0 : _ref6$retries,
      m = _ref6.logger;
    return function () {
      f({
        client: r,
        retries: u
      });
      var y = {
          headers: e,
          url: t,
          retries: u
        },
        g = function (e) {
          return function (r) {
            e && e(r);
          };
        }(m),
        $ = function (e, _ref7) {
          var t = _ref7.url,
            n = _ref7.headers,
            o = _ref7.retries;
          return /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(s) {
              var i,
                a,
                c,
                u,
                p,
                l,
                d,
                _args3 = arguments;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    i = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                    a = i.variables, c = i.headers, u = i.url, p = i.retries, l = JSON.stringify({
                      query: s,
                      variables: a
                    });
                    f({
                      client: r,
                      retries: p
                    });
                    d = Object.fromEntries(Object.entries(_objectSpread(_objectSpread({}, n), c)).map(function (_ref9) {
                      var _ref10 = _slicedToArray(_ref9, 2),
                        e = _ref10[0],
                        r = _ref10[1];
                      return [e, Array.isArray(r) ? r.join(", ") : r.toString()];
                    }));
                    return _context3.abrupt("return", e([u !== null && u !== void 0 ? u : t, {
                      method: "POST",
                      headers: d,
                      body: l
                    }], 1, p !== null && p !== void 0 ? p : o));
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x5) {
              return _ref8.apply(this, arguments);
            };
          }();
        }(h({
          customFetchApi: n,
          clientLogger: g,
          defaultRetryWaitTime: c
        }), y),
        w = function (e) {
          return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _t2,
              _n,
              _c,
              _u,
              _args5 = arguments;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return e.apply(void 0, _args5);
                case 3:
                  _t2 = _context5.sent;
                  _n = _t2.status;
                  _c = _t2.statusText;
                  _u = _t2.headers.get("content-type") || "";
                  return _context5.abrupt("return", _t2.ok ? _u.includes(a.json) ? function () {
                    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
                      var _yield$e$json, r, t, n;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return e.json();
                          case 2:
                            _yield$e$json = _context4.sent;
                            r = _yield$e$json.errors;
                            t = _yield$e$json.data;
                            n = _yield$e$json.extensions;
                            return _context4.abrupt("return", _objectSpread(_objectSpread(_objectSpread({}, d("data", t)), d("extensions", n)), r || !t ? {
                              errors: _objectSpread(_objectSpread({
                                networkStatusCode: e.status,
                                message: p(r ? o : i)
                              }, d("graphQLErrors", r)), {}, {
                                response: e
                              })
                            } : {}));
                          case 7:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    }));
                    return function (_x6) {
                      return _ref12.apply(this, arguments);
                    };
                  }()(_t2) : {
                    errors: {
                      networkStatusCode: _n,
                      message: p("".concat(s, " ").concat(_u)),
                      response: _t2
                    }
                  } : {
                    errors: {
                      networkStatusCode: _n,
                      message: p(_c),
                      response: _t2
                    }
                  });
                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](0);
                  return _context5.abrupt("return", {
                    errors: {
                      message: l(_context5.t0)
                    }
                  });
                case 13:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, null, [[0, 10]]);
          }));
        }($);
      return {
        config: y,
        fetch: $,
        request: w
      };
    }();
  }
  function y(_ref13) {
    var e = _ref13.client,
      r = _ref13.currentSupportedApiVersions,
      t = _ref13.apiVersion,
      n = _ref13.logger;
    var o = "".concat(e, ": the provided apiVersion (\"").concat(t, "\")"),
      s = "Currently supported API versions: ".concat(r.join(", "));
    if (!t || "string" != typeof t) throw new Error("".concat(o, " is invalid. ").concat(s));
    var i = t.trim();
    r.includes(i) || (n ? n({
      type: "Unsupported_Api_Version",
      content: {
        apiVersion: t,
        supportedApiVersions: r
      }
    }) : console.warn("".concat(o, " is likely deprecated or not supported. ").concat(s)));
  }
  function g(e) {
    var r = 3 * e - 2;
    return 10 === r ? r : "0".concat(r);
  }
  function $(e, r, t) {
    var n = r - t;
    return n <= 0 ? "".concat(e - 1, "-").concat(g(n + 4)) : "".concat(e, "-").concat(g(n));
  }
  function w() {
    var _ref14 = function () {
        var e = new Date(),
          r = e.getUTCMonth(),
          t = e.getUTCFullYear(),
          n = Math.floor(r / 3 + 1);
        return {
          year: t,
          quarter: n,
          version: "".concat(t, "-").concat(g(n))
        };
      }(),
      e = _ref14.year,
      r = _ref14.quarter,
      t = _ref14.version,
      n = 4 === r ? "".concat(e + 1, "-01") : "".concat(e, "-").concat(g(r + 1));
    return [$(e, r, 3), $(e, r, 2), $(e, r, 1), t, n, "unstable"];
  }
  var A = "application/json",
    b = "Storefront API Client";
  e.createStorefrontApiClient = function (_ref15) {
    var e = _ref15.storeDomain,
      r = _ref15.apiVersion,
      t = _ref15.publicAccessToken,
      n = _ref15.privateAccessToken,
      o = _ref15.clientName,
      _ref15$retries = _ref15.retries,
      s = _ref15$retries === void 0 ? 0 : _ref15$retries,
      i = _ref15.customFetchApi,
      a = _ref15.logger;
    var c = w(),
      u = function (_ref16) {
        var e = _ref16.client,
          r = _ref16.storeDomain;
        try {
          if (!r || "string" != typeof r) throw new Error();
          var _e = r.trim(),
            _t3 = _e.startsWith("http") ? _e : "https://".concat(_e),
            _n2 = new URL(_t3);
          return _n2.protocol = "https", _n2.origin;
        } catch (t) {
          throw new Error("".concat(e, ": a valid store domain (\"").concat(r, "\") must be provided"));
        }
      }({
        client: b,
        storeDomain: e
      }),
      p = {
        client: b,
        currentSupportedApiVersions: c,
        logger: a
      };
    y(_objectSpread(_objectSpread({}, p), {}, {
      apiVersion: r
    })), function (e, r) {
      if (!e && !r) throw new Error("".concat(b, ": a public or private access token must be provided"));
      if (e && r) throw new Error("".concat(b, ": only provide either a public or private access token"));
    }(t, n), function (e) {
      if (e && "undefined" != typeof window) throw new Error("".concat(b, ": private access tokens and headers should only be used in a server-to-server implementation. Use the public API access token in nonserver environments."));
    }(n);
    var l = function (e, r, t) {
        return function (n) {
          n && y(_objectSpread(_objectSpread({}, t), {}, {
            apiVersion: n
          }));
          var o = (n !== null && n !== void 0 ? n : r).trim();
          return "".concat(e, "/api/").concat(o, "/graphql.json");
        };
      }(u, r, p),
      f = _objectSpread(_objectSpread({
        storeDomain: u,
        apiVersion: r
      }, t ? {
        publicAccessToken: t
      } : {
        privateAccessToken: n
      }), {}, {
        headers: _objectSpread(_objectSpread({
          "Content-Type": A,
          Accept: A,
          "X-SDK-Variant": "storefront-api-client",
          "X-SDK-Version": "0.2.3"
        }, o ? {
          "X-SDK-Variant-Source": o
        } : {}), t ? {
          "X-Shopify-Storefront-Access-Token": t
        } : {
          "Shopify-Storefront-Private-Token": n
        }),
        apiUrl: l(),
        clientName: o
      }),
      d = m({
        headers: f.headers,
        url: f.apiUrl,
        retries: s,
        customFetchApi: i,
        logger: a
      }),
      h = function (e) {
        return function (r) {
          return _objectSpread(_objectSpread({}, r !== null && r !== void 0 ? r : {}), e.headers);
        };
      }(f),
      g = function (e, r) {
        return function (t) {
          return t ? r(t) : e.apiUrl;
        };
      }(f, l),
      $ = function (_ref17) {
        var e = _ref17.getHeaders,
          r = _ref17.getApiUrl;
        return function (t, n) {
          var o = [t];
          if (n && Object.keys(n).length > 0) {
            var _t4 = n.variables,
              _s = n.apiVersion,
              _i2 = n.headers,
              _a = n.retries;
            o.push(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _t4 ? {
              variables: _t4
            } : {}), _i2 ? {
              headers: e(_i2)
            } : {}), _s ? {
              url: r(_s)
            } : {}), _a ? {
              retries: _a
            } : {}));
          }
          return o;
        };
      }({
        getHeaders: h,
        getApiUrl: g
      }),
      v = {
        config: f,
        getHeaders: h,
        getApiUrl: g,
        fetch: function fetch() {
          return d.fetch.apply(d, _toConsumableArray($.apply(void 0, arguments)));
        },
        request: function request() {
          return d.request.apply(d, _toConsumableArray($.apply(void 0, arguments)));
        }
      };
    return Object.freeze(v);
  };
});

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./scripts/product-list.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decorate)
/* harmony export */ });
/* harmony import */ var _preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preact */ "./scripts/preact.js");
/* harmony import */ var _htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htm */ "./scripts/htm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _shopify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopify */ "./scripts/shopify.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

// eslint-disable-next-line import/no-unresolved,import/extensions



console.log(_shopify__WEBPACK_IMPORTED_MODULE_3__.storefrontClient);
var html = _htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(_preact__WEBPACK_IMPORTED_MODULE_0__.h);
var performGraphqlRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(featuredProducts) {
    var _result$data;
    var idsQueryPart, query, headers, response, result, products;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Construct the 'ids' part of the GraphQL query
          idsQueryPart = featuredProducts.map(function (id) {
            return "\"".concat(id, "\"");
          }).join(',');
          query = "\n    {\n      nodes(ids: [".concat(idsQueryPart, "]) {\n        ... on Product {\n          id\n          title\n          featuredImage {\n            url\n            altText\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  ");
          headers = {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': _constants__WEBPACK_IMPORTED_MODULE_2__.PUBLIC_STOREFRONT_API_TOKEN
          };
          _context.next = 5;
          return fetch(_constants__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
              query: query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' ')
            })
          });
        case 5:
          response = _context.sent;
          if (response.ok) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", null);
        case 8:
          _context.next = 10;
          return response.json();
        case 10:
          result = _context.sent;
          products = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.nodes;
          return _context.abrupt("return", products);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function performGraphqlRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var ProductDetails = /*#__PURE__*/function (_Component) {
  function ProductDetails(props) {
    var _this;
    _classCallCheck(this, ProductDetails);
    _this = _callSuper(this, ProductDetails, [props]);
    _this.state = {
      products: [],
      ids: props.productIds || []
    };
    return _this;
  }
  _inherits(ProductDetails, _Component);
  return _createClass(ProductDetails, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var featuredProducts, products;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              featuredProducts = this.state.ids;
              _context2.next = 3;
              return performGraphqlRequest(featuredProducts);
            case 3:
              products = _context2.sent;
              this.setState({
                products: products
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }() // async componentDidUpdate() {
    //   console.log('Component updated...', this);
    // }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <", ">\n        <div class=\"product-grid featured\">\n          ", "\n        </div>\n      <//>\n    "])), _preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, this.state.products.length > 0 && this.state.products.map(function (product) {
        return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <div class=\"product-item\" key=", ">\n              ", "\n              <h4 class=\"product-title\">", "</h4>\n              <p class=\"product-price\">Price: ", " ", "</p>\n              <button type=\"button\" class=\"product-button\">Add to cart</button>\n            </div>\n          "])), product.id, product.featuredImage && html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<img class=\"product-image\" src=", " alt=", " />"])), product.featuredImage.url, product.featuredImage.altText), product.title, product.priceRange.minVariantPrice.currencyCode, product.priceRange.minVariantPrice.amount);
      }));
    }
  }]);
}(_preact__WEBPACK_IMPORTED_MODULE_0__.Component);
function decorate(block) {
  var _block$querySelector;
  var productIdsText = (_block$querySelector = block.querySelector('p')) === null || _block$querySelector === void 0 ? void 0 : _block$querySelector.innerText;
  var productIds = productIdsText.split(',');
  var productDetails = html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<", " productIds=", "/>"])), ProductDetails, productIds);
  (0,_preact__WEBPACK_IMPORTED_MODULE_0__.render)(productDetails, block);
}
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
