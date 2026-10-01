//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function A(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var j = /\/+/g;
	function M(e, t) {
		return typeof e == "object" && e && e.key != null ? A("" + e.key) : t.toString(36);
	}
	function N(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function P(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, P(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + M(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(j, "$&/") + "/"), P(o, r, i, "", function(e) {
			return e;
		})) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + M(a, u), c += P(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + M(a, u++), c += P(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return P(N(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function F(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return P(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ee(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var I = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function te(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, I);
		} catch (e) {
			I(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function L(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else te(L.bind(null, e));
	}
	var ne = {
		map: F,
		forEach: function(e, t, n) {
			F(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return F(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return F(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ne, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = L, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ee
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = te, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), d = /* @__PURE__ */ o(((e, t) => {
	t.exports = u();
})), f = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, O());
			else {
				var t = n(l);
				t !== null && j(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && j(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function j(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), p = /* @__PURE__ */ o(((e, t) => {
	t.exports = f();
})), m = /* @__PURE__ */ o(((e) => {
	var t = d();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function u(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = u(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = u(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), h = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = m();
})), g = /* @__PURE__ */ o(((e) => {
	var t = p(), n = d(), r = h();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function f(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = f(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function m(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && m(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function E(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var D = Object.assign, O = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), F = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), re = Symbol.for("react.legacy_hidden"), ie = Symbol.for("react.memo_cache_sentinel"), ae = Symbol.for("react.view_transition"), oe = Symbol.for("react.recoverable"), se = Symbol.iterator;
	function ce(e) {
		return typeof e != "object" || !e ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var le = Symbol.for("react.client.reference");
	function ue(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === le ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case j: return "Fragment";
			case N: return "Profiler";
			case M: return "StrictMode";
			case I: return "Suspense";
			case te: return "SuspenseList";
			case R: return "Activity";
			case ae: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case A: return "Portal";
			case F: return e.displayName || "Context";
			case P: return (e._context.displayName || "Context") + ".Consumer";
			case ee:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case L: return t = e.displayName || null, t === null ? ue(e.type) || "Memo" : t;
			case ne:
				t = e._payload, e = e._init;
				try {
					return ue(e(t));
				} catch {}
		}
		return null;
	}
	var z = Array.isArray, B = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, fe = [], pe = -1;
	function me(e) {
		return { current: e };
	}
	function H(e) {
		0 > pe || (e.current = fe[pe], fe[pe] = null, pe--);
	}
	function he(e, t) {
		pe++, fe[pe] = e.current, e.current = t;
	}
	var ge = me(null), _e = me(null), ve = me(null), ye = me(null);
	function be(e, t) {
		switch (he(ve, t), he(_e, e), he(ge, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? fp(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = fp(t), e = pp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		H(ge), he(ge, e);
	}
	function xe() {
		H(ge), H(_e), H(ve);
	}
	function Se(e) {
		var t = e.memoizedState;
		t !== null && (ch._currentValue = t.memoizedState, he(ye, e)), t = ge.current;
		var n = pp(t, e.type);
		t !== n && (he(_e, e), he(ge, n));
	}
	function Ce(e) {
		_e.current === e && (H(ge), H(_e)), ye.current === e && (H(ye), ch._currentValue = de);
	}
	var we, Te;
	function Ee(e) {
		if (we === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			we = t && t[1] || "", Te = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + we + e + Te;
	}
	var De = !1;
	function Oe(e, t) {
		if (!e || De) return "";
		De = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			De = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ee(n) : "";
	}
	function ke(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ee(e.type);
			case 16: return Ee("Lazy");
			case 13: return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
			case 19: return Ee("SuspenseList");
			case 0:
			case 15: return Oe(e.type, !1);
			case 11: return Oe(e.type.render, !1);
			case 1: return Oe(e.type, !0);
			case 31: return Ee("Activity");
			case 30: return Ee("ViewTransition");
			default: return "";
		}
	}
	function Ae(e) {
		try {
			var t = "", n = null;
			do
				t += ke(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var je = Object.prototype.hasOwnProperty, Me = t.unstable_scheduleCallback, Ne = t.unstable_cancelCallback, Pe = t.unstable_shouldYield, Fe = t.unstable_requestPaint, Ie = t.unstable_now, Le = t.unstable_getCurrentPriorityLevel, Re = t.unstable_ImmediatePriority, ze = t.unstable_UserBlockingPriority, Be = t.unstable_NormalPriority, Ve = t.unstable_LowPriority, He = t.unstable_IdlePriority, Ue = t.log, We = t.unstable_setDisableYieldValue, Ge = null, Ke = null;
	function qe(e) {
		if (typeof Ue == "function" && We(e), Ke && typeof Ke.setStrictMode == "function") try {
			Ke.setStrictMode(Ge, e);
		} catch {}
	}
	var Je = Math.clz32 ? Math.clz32 : Ze, Ye = Math.log, Xe = Math.LN2;
	function Ze(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ye(e) / Xe | 0) | 0;
	}
	var Qe = 256, $e = 262144, et = 4194304;
	function tt(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function nt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = tt(n))) : i = tt(o) : i = tt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = tt(n))) : i = tt(o)) : i = tt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function rt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function it(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Je(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function at(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ot() {
		var e = et;
		return et <<= 1, !(et & 62914560) && (et = 4194304), e;
	}
	function st(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function ct(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function lt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Je(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ut(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ut(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Je(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function dt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Je(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function ft(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : pt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function pt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function mt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function ht() {
		var e = V.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : wh(e.type)) : e;
	}
	function gt(e, t) {
		var n = V.p;
		try {
			return V.p = e, t();
		} finally {
			V.p = n;
		}
	}
	var _t = Math.random().toString(36).slice(2), vt = "__reactFiber$" + _t, yt = "__reactProps$" + _t, bt = "__reactContainer$" + _t, xt = "__reactEvents$" + _t, St = "__reactListeners$" + _t, Ct = "__reactHandles$" + _t, wt = "__reactResources$" + _t, Tt = "__reactMarker$" + _t, Et = "__reactLoad$" + _t;
	function Dt(e) {
		delete e[vt], delete e[yt], delete e[St], delete e[Ct];
	}
	function Ot(e) {
		var t;
		if (t = e[vt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[bt] || n[vt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mm(e); e !== null;) {
					if (n = e[vt]) return n;
					e = mm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function kt(e) {
		if (e = e[vt] || e[bt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function At(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function jt(e) {
		var t = e[wt];
		return t ||= e[wt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Mt(e) {
		e[Tt] = !0;
	}
	function Nt(e) {
		e[Et] = void 0;
	}
	var Pt = /* @__PURE__ */ new Set(), Ft = {};
	function It(e, t) {
		Lt(e, t), Lt(e + "Capture", t);
	}
	function Lt(e, t) {
		for (Ft[e] = t, e = 0; e < t.length; e++) Pt.add(t[e]);
	}
	var Rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zt = {}, Bt = {};
	function Vt(e) {
		return je.call(Bt, e) ? !0 : je.call(zt, e) ? !1 : Rt.test(e) ? Bt[e] = !0 : (zt[e] = !0, !1);
	}
	var Ht = !1;
	function Ut() {
		var e = Ht;
		return Ht = !1, e;
	}
	function Wt(e, t, n) {
		if (Vt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Gt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Kt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function qt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Jt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Yt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Xt(e) {
		if (!e._valueTracker) {
			var t = Jt(e) ? "checked" : "value";
			e._valueTracker = Yt(e, t, "" + e[t]);
		}
	}
	function Zt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Jt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Qt = /[\n"\\]/g;
	function $t(e) {
		return e.replace(Qt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function en(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : nn(e, qt(n)) : o === "number" && e.value == t ? nn(e, qt(e.value)) : nn(e, qt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + qt(s) : e.removeAttribute("name");
	}
	function tn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Xt(e);
				return;
			}
			n = n == null ? "" : "" + qt(n), t = t == null ? n : "" + qt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Xt(e);
	}
	function nn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function rn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function an(e, t, n) {
		if (t != null && (t = "" + qt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + qt(n);
	}
	function on(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (z(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = qt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Xt(e);
	}
	function sn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var cn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function ln(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function un(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Ht = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (ln(e, a, r), Ht = !0);
		} else for (var o in t) t.hasOwnProperty(o) && ln(e, o, t[o]);
	}
	function dn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var fn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), pn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function mn(e) {
		return pn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function hn() {}
	var gn = null;
	function _n(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var U = null, vn = null;
	function yn(e) {
		var t = kt(e);
		if (t && (e = t.stateNode)) {
			var n = e[yt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (en(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + $t("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[yt] || null;
								if (!a) throw Error(i(90));
								en(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Zt(r);
					}
					break a;
				case "textarea":
					an(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && rn(e, !!n.multiple, t, !1);
			}
		}
	}
	var bn = !1;
	function xn(e, t, n) {
		if (bn) return e(t, n);
		bn = !0;
		try {
			return e(t);
		} finally {
			if (bn = !1, (U !== null || vn !== null) && (zd(), U && (t = U, e = vn, vn = U = null, yn(t), e))) for (t = 0; t < e.length; t++) yn(e[t]);
		}
	}
	function Sn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[yt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Cn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, wn = !1;
	if (Cn) try {
		var Tn = {};
		Object.defineProperty(Tn, "passive", { get: function() {
			wn = !0;
		} }), window.addEventListener("test", Tn, Tn), window.removeEventListener("test", Tn, Tn);
	} catch {
		wn = !1;
	}
	var En = null, Dn = null, On = null;
	function kn() {
		if (On) return On;
		var e, t = Dn, n = t.length, r, i = "value" in En ? En.value : En.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return On = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function An(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function jn() {
		return !0;
	}
	function Mn() {
		return !1;
	}
	function Nn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? jn : Mn, this.isPropagationStopped = Mn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = jn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = jn);
			},
			persist: function() {},
			isPersistent: jn
		}), t;
	}
	var Pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Fn = Nn(Pn), In = D({}, Pn, {
		view: 0,
		detail: 0
	}), Ln = Nn(In), Rn, zn, Bn, Vn = D({}, In, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Qn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Bn && (Bn && e.type === "mousemove" ? (Rn = e.screenX - Bn.screenX, zn = e.screenY - Bn.screenY) : zn = Rn = 0, Bn = e), Rn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : zn;
		}
	}), Hn = Nn(Vn), Un = Nn(D({}, Vn, { dataTransfer: 0 })), Wn = Nn(D({}, In, { relatedTarget: 0 })), Gn = Nn(D({}, Pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Kn = Nn(D({}, Pn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), qn = Nn(D({}, Pn, { data: 0 })), Jn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Yn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Xn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Zn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Xn[e]) ? !!t[e] : !1;
	}
	function Qn() {
		return Zn;
	}
	var $n = Nn(D({}, In, {
		key: function(e) {
			if (e.key) {
				var t = Jn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = An(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Qn,
		charCode: function(e) {
			return e.type === "keypress" ? An(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? An(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), er = Nn(D({}, Vn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), tr = Nn(D({}, Pn, { submitter: 0 })), nr = Nn(D({}, In, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Qn
	})), rr = Nn(D({}, Pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), ir = Nn(D({}, Vn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ar = Nn(D({}, Pn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), or = [
		9,
		13,
		27,
		32
	], sr = Cn && "CompositionEvent" in window, cr = null;
	Cn && "documentMode" in document && (cr = document.documentMode);
	var lr = Cn && "TextEvent" in window && !cr, ur = Cn && (!sr || cr && 8 < cr && 11 >= cr), dr = " ", fr = !1;
	function pr(e, t) {
		switch (e) {
			case "keyup": return or.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function mr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var hr = !1;
	function gr(e, t) {
		switch (e) {
			case "compositionend": return mr(t);
			case "keypress": return t.which === 32 ? (fr = !0, dr) : null;
			case "textInput": return e = t.data, e === dr && fr ? null : e;
			default: return null;
		}
	}
	function _r(e, t) {
		if (hr) return e === "compositionend" || !sr && pr(e, t) ? (e = kn(), On = Dn = En = null, hr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return ur && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var vr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!vr[e.type] : t === "textarea";
	}
	function br(e, t, n, r) {
		U ? vn ? vn.push(r) : vn = [r] : U = r, t = Yf(t, "onChange"), 0 < t.length && (n = new Fn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var xr = null, Sr = null;
	function Cr(e) {
		Hf(e, 0);
	}
	function wr(e) {
		if (Zt(At(e))) return e;
	}
	function Tr(e, t) {
		if (e === "change") return t;
	}
	var Er = !1;
	if (Cn) {
		var Dr;
		if (Cn) {
			var Or = "oninput" in document;
			if (!Or) {
				var kr = document.createElement("div");
				kr.setAttribute("oninput", "return;"), Or = typeof kr.oninput == "function";
			}
			Dr = Or;
		} else Dr = !1;
		Er = Dr && (!document.documentMode || 9 < document.documentMode);
	}
	function Ar() {
		xr && (xr.detachEvent("onpropertychange", jr), Sr = xr = null);
	}
	function jr(e) {
		if (e.propertyName === "value" && wr(Sr)) {
			var t = [];
			br(t, Sr, e, _n(e)), xn(Cr, t);
		}
	}
	function Mr(e, t, n) {
		e === "focusin" ? (Ar(), xr = t, Sr = n, xr.attachEvent("onpropertychange", jr)) : e === "focusout" && Ar();
	}
	function Nr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return wr(Sr);
	}
	function Pr(e, t) {
		if (e === "click") return wr(t);
	}
	function Fr(e, t) {
		if (e === "input" || e === "change") return wr(t);
	}
	function Ir(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Lr = typeof Object.is == "function" ? Object.is : Ir;
	function Rr(e, t) {
		if (Lr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!je.call(t, i) || !Lr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function zr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Br(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Vr(e, t) {
		var n = Br(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Br(n);
		}
	}
	function W(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? W(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Hr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = zr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = zr(e.document);
		}
		return t;
	}
	function Ur(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Wr = Cn && "documentMode" in document && 11 >= document.documentMode, Gr = null, Kr = null, qr = null, Jr = !1;
	function Yr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Jr || Gr == null || Gr !== zr(r) || (r = Gr, "selectionStart" in r && Ur(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), qr && Rr(qr, r) || (qr = r, r = Yf(Kr, "onSelect"), 0 < r.length && (t = new Fn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Gr)));
	}
	function Xr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Zr = {
		animationend: Xr("Animation", "AnimationEnd"),
		animationiteration: Xr("Animation", "AnimationIteration"),
		animationstart: Xr("Animation", "AnimationStart"),
		transitionrun: Xr("Transition", "TransitionRun"),
		transitionstart: Xr("Transition", "TransitionStart"),
		transitioncancel: Xr("Transition", "TransitionCancel"),
		transitionend: Xr("Transition", "TransitionEnd")
	}, Qr = {}, $r = {};
	Cn && ($r = document.createElement("div").style, "AnimationEvent" in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), "TransitionEvent" in window || delete Zr.transitionend.transition);
	function ei(e) {
		if (Qr[e]) return Qr[e];
		if (!Zr[e]) return e;
		var t = Zr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in $r) return Qr[e] = t[n];
		return e;
	}
	var ti = ei("animationend"), ni = ei("animationiteration"), ri = ei("animationstart"), ii = ei("transitionrun"), ai = ei("transitionstart"), oi = ei("transitioncancel"), si = ei("transitionend"), ci = /* @__PURE__ */ new Map(), li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	li.push("scrollEnd");
	function ui(e, t) {
		ci.set(e, t), It(t, [e]);
	}
	var di = 0;
	function fi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = di++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function pi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function mi(e, t) {
		return e = pi(e), t = pi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var hi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, gi = [], _i = 0, vi = 0;
	function yi() {
		for (var e = _i, t = vi = _i = 0; t < e;) {
			var n = gi[t];
			gi[t++] = null;
			var r = gi[t];
			gi[t++] = null;
			var i = gi[t];
			gi[t++] = null;
			var a = gi[t];
			if (gi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Ci(n, i, a);
		}
	}
	function bi(e, t, n, r) {
		gi[_i++] = e, gi[_i++] = t, gi[_i++] = n, gi[_i++] = r, vi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function xi(e, t, n, r) {
		return bi(e, t, n, r), wi(e);
	}
	function Si(e, t) {
		return bi(e, null, null, t), wi(e);
	}
	function Ci(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Je(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function wi(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ti = {};
	function Ei(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Di(e, t, n, r) {
		return new Ei(e, t, n, r);
	}
	function Oi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ki(e, t) {
		var n = e.alternate;
		return n === null ? (n = Di(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ai(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ji(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Oi(r) && (s = 1);
		else if (typeof r == "string") s = Jm(e, n, ge.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case R: return e = Di(31, n, t, a), e.elementType = R, e.lanes = o, e;
			case j: return Mi(n.children, a, o, t);
			case M:
				s = 8, a |= 24;
				break;
			case N: return e = Di(12, n, t, a | 2), e.elementType = N, e.lanes = o, e;
			case I: return e = Di(13, n, t, a), e.elementType = I, e.lanes = o, e;
			case te: return e = Di(19, n, t, a), e.elementType = te, e.lanes = o, e;
			case re:
			case ae: return e = a | 32, e = Di(30, n, t, e), e.elementType = ae, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case F:
						s = 10;
						break a;
					case P:
						s = 9;
						break a;
					case ee:
						s = 11;
						break a;
					case L:
						s = 14;
						break a;
					case ne:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Di(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Mi(e, t, n, r) {
		return e = Di(7, e, r, t), e.lanes = n, e;
	}
	function Ni(e, t, n) {
		return e = Di(6, e, null, t), e.lanes = n, e;
	}
	function Pi(e) {
		var t = Di(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Fi(e, t, n) {
		return t = Di(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Ii = /* @__PURE__ */ new WeakMap();
	function Li(e, t) {
		if (typeof e == "object" && e) {
			var n = Ii.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Ae(t)
			}, Ii.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Ae(t)
		};
	}
	var Ri = [], zi = 0, Bi = null, Vi = 0, Hi = [], Ui = 0, Wi = null, Gi = 1, Ki = "";
	function qi(e, t) {
		Ri[zi++] = Vi, Ri[zi++] = Bi, Bi = e, Vi = t;
	}
	function Ji(e, t, n) {
		Hi[Ui++] = Gi, Hi[Ui++] = Ki, Hi[Ui++] = Wi, Wi = e;
		var r = Gi;
		e = Ki;
		var i = 32 - Je(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Je(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Gi = 1 << 32 - Je(t) + i | n << i | r, Ki = a + e;
		} else Gi = 1 << a | n << i | r, Ki = e;
	}
	function Yi(e) {
		e.return !== null && (qi(e, 1), Ji(e, 1, 0));
	}
	function Xi(e) {
		for (; e === Bi;) Bi = Ri[--zi], Ri[zi] = null, Vi = Ri[--zi], Ri[zi] = null;
		for (; e === Wi;) Wi = Hi[--Ui], Hi[Ui] = null, Ki = Hi[--Ui], Hi[Ui] = null, Gi = Hi[--Ui], Hi[Ui] = null;
	}
	function Zi(e, t) {
		Hi[Ui++] = Gi, Hi[Ui++] = Ki, Hi[Ui++] = Wi, Gi = t.id, Ki = t.overflow, Wi = e;
	}
	var Qi = null, $i = null, G = !1, ea = null, ta = !1, na = Error(i(519));
	function ra(e) {
		throw la(Li(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), na;
	}
	function ia(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[vt] = e, t[yt] = r, n) {
			case "dialog":
				Z("cancel", t), Z("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Z("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Bf.length; n++) Z(Bf[n], t);
				break;
			case "source":
				Z("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Z("error", t), Z("load", t);
				break;
			case "details":
				Z("toggle", t);
				break;
			case "input":
				Z("invalid", t), tn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Z("invalid", t);
				break;
			case "textarea": Z("invalid", t), on(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || tp(t.textContent, n) ? (r.popover != null && (Z("beforetoggle", t), Z("toggle", t)), r.onScroll != null && Z("scroll", t), r.onScrollEnd != null && Z("scrollend", t), r.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || ra(e, !0);
	}
	function aa(e) {
		for (Qi = e.return; Qi;) switch (Qi.tag) {
			case 5:
			case 31:
			case 13:
				ta = !1;
				return;
			case 27:
			case 3:
				ta = !0;
				return;
			default: Qi = Qi.return;
		}
	}
	function oa(e) {
		if (e !== Qi) return !1;
		if (!G) return aa(e), G = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || hp(e.type, e.memoizedProps)), n = !n), n && $i && ra(e), aa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			$i = pm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			$i = pm(e);
		} else t === 27 ? (t = $i, wp(e.type) ? (e = fm, fm = null, $i = e) : $i = t) : $i = Qi ? dm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function sa() {
		$i = Qi = null, G = !1;
	}
	function ca() {
		var e = ea;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), ea = null), e;
	}
	function la(e) {
		ea === null ? ea = [e] : ea.push(e);
	}
	var ua = me(null), da = null, fa = null;
	function pa(e, t, n) {
		he(ua, t._currentValue), t._currentValue = n;
	}
	function ma(e) {
		e._currentValue = ua.current, H(ua);
	}
	function ha(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ga(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ha(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ha(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ha(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function _a(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Lr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ye.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [ch] : e.push(ch));
			}
			a = a.return;
		}
		return e !== null && ga(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function va(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Lr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function ya(e) {
		da = e, fa = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function ba(e) {
		return Sa(da, e);
	}
	function xa(e, t) {
		return da === null && ya(e), Sa(e, t);
	}
	function Sa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, fa === null) {
			if (e === null) throw Error(i(308));
			fa = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else fa = fa.next = t;
		return n;
	}
	var Ca = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, wa = t.unstable_scheduleCallback, Ta = t.unstable_NormalPriority, Ea = {
		$$typeof: F,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Da() {
		return {
			controller: new Ca(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Oa(e) {
		e.refCount--, e.refCount === 0 && wa(Ta, function() {
			e.controller.abort();
		});
	}
	function ka(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Aa = null;
	function ja(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Ma = null, Na = 0, Pa = 0, Fa = null;
	function Ia(e, t) {
		if (Ma === null) {
			var n = Ma = [];
			Na = 0, Pa = Ff(), Fa = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Na++, t.then(La, La), t;
	}
	function La() {
		if (--Na === 0 && (Aa = null, Ma !== null)) {
			Fa !== null && (Fa.status = "fulfilled");
			var e = Ma;
			Ma = null, Pa = 0, Fa = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ra(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var za = B.S;
	B.S = function(e, t) {
		if (hd = Ie(), typeof t == "object" && t && typeof t.then == "function" && Ia(e, t), Aa !== null) for (var n = xf; n !== null;) ka(n, Aa), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = xf; r !== null;) ka(r, n), r = r.next;
			if (Pa !== 0) {
				r = Aa, r === null && (r = Aa = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		za !== null && za(e, t);
	};
	var Ba = me(null);
	function Va() {
		var e = Ba.current;
		return e === null ? Qu.pooledCache : e;
	}
	function Ha(e, t) {
		t === null ? he(Ba, Ba.current) : he(Ba, t.pool);
	}
	function Ua() {
		var e = Va();
		return e === null ? null : {
			parent: Ea._currentValue,
			pool: e
		};
	}
	var Wa = Error(i(460)), Ga = Error(i(474)), Ka = Error(i(542)), K = { then: function() {} };
	function qa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Ja(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(hn, hn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Qa(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(hn, hn);
				else {
					if (e = Qu, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Qa(e), e;
				}
				throw Xa = t, Wa;
		}
	}
	function Ya(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Xa = e, Wa) : e;
		}
	}
	var Xa = null;
	function Za() {
		if (Xa === null) throw Error(i(459));
		var e = Xa;
		return Xa = null, e;
	}
	function Qa(e) {
		if (e === Wa || e === Ka) throw Error(i(483));
	}
	var $a = null, eo = 0;
	function to(e) {
		var t = eo;
		return eo += 1, $a === null && ($a = []), Ja($a, e, t);
	}
	function no(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function ro(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function io(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ki(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Ni(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === j ? (e = d(e, t, n.props.children, r, n.key), no(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ne && Ya(i) === t.type) ? (t = a(t, n.props), no(t, n), t.return = e, t) : (t = ji(n.type, n.key, n.props, null, e.mode, r), no(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Fi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Mi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Ni("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = ji(t.type, t.key, t.props, null, e.mode, n), no(n, t), n.return = e, n;
					case A: return t = Fi(t, e.mode, n), t.return = e, t;
					case ne: return t = Ya(t), f(e, t, n);
				}
				if (z(t) || ce(t)) return t = Mi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, to(t), n);
				if (t.$$typeof === F) return f(e, xa(e, t), n);
				ro(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case k: return n.key === i ? l(e, t, n, r) : null;
					case A: return n.key === i ? u(e, t, n, r) : null;
					case ne: return n = Ya(n), p(e, t, n, r);
				}
				if (z(n) || ce(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, to(n), r);
				if (n.$$typeof === F) return p(e, t, xa(e, n), r);
				ro(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case A: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ne: return r = Ya(r), m(e, t, n, r, i);
				}
				if (z(r) || ce(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, to(r), i);
				if (r.$$typeof === F) return m(e, t, n, xa(t, r), i);
				ro(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), G && qi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return G && qi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), G && qi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), G && qi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return G && qi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), G && qi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === j && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case k:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === j) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), no(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ne && Ya(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), no(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === j ? (c = Mi(o.props.children, e.mode, c, o.key), no(c, o), c.return = e, e = c) : (c = ji(o.type, o.key, o.props, null, e.mode, c), no(c, o), c.return = e, e = c);
						}
						return s(e);
					case A:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Fi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ne: return o = Ya(o), _(e, r, o, c);
				}
				if (z(o)) return h(e, r, o, c);
				if (ce(o)) {
					if (l = ce(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, to(o), c);
				if (o.$$typeof === F) return _(e, r, xa(e, o), c);
				ro(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Ni(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				eo = 0;
				var i = _(e, t, n, r);
				return $a = null, i;
			} catch (t) {
				if (t === Wa || t === Ka) throw t;
				var a = Di(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var ao = io(!0), oo = io(!1), so = !1;
	function co(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function lo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function uo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function fo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Zu & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = wi(e), Ci(e, null, n), t;
		}
		return bi(e, r, t, n), wi(e);
	}
	function po(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, dt(e, n);
		}
	}
	function mo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var ho = !1;
	function go() {
		if (ho) {
			var e = Fa;
			if (e !== null) throw e;
		}
	}
	function _o(e, t, n, r) {
		ho = !1;
		var i = e.updateQueue;
		so = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (X & f) === f : (r & f) === f) {
					f !== 0 && f === Pa && (ho = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = D({}, d, f);
								break a;
							case 2: so = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function vo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function yo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) vo(n[e], t);
	}
	var bo = me(null), xo = me(0);
	function So(e, t) {
		e = id, he(xo, e), he(bo, t), id = e | t.baseLanes;
	}
	function Co() {
		he(xo, id), he(bo, bo.current);
	}
	function wo() {
		id = xo.current, H(bo), H(xo);
	}
	var To = me(null), Eo = null;
	function Do(e) {
		var t = e.alternate;
		he(Mo, Mo.current & 1), he(To, e), Eo === null && (t === null || bo.current !== null || t.memoizedState !== null) && (Eo = e);
	}
	function Oo(e) {
		he(Mo, Mo.current), he(To, e), Eo === null && (Eo = e);
	}
	function ko(e) {
		e.tag === 22 ? (he(Mo, Mo.current), he(To, e), Eo === null && (Eo = e)) : Ao();
	}
	function Ao() {
		he(Mo, Mo.current), he(To, To.current);
	}
	function jo(e) {
		H(To), Eo === e && (Eo = null), H(Mo);
	}
	var Mo = me(0);
	function No(e, t) {
		he(To, To.current), he(Mo, t);
	}
	function Po(e) {
		H(Mo), H(To), Eo === e && (Eo = null);
	}
	function Fo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || cm(n) || lm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Io = 0, q = null, Lo = null, Ro = null, zo = !1, Bo = !1, Vo = !1, Ho = 0, Uo = 0, Wo = null, Go = 0;
	function Ko() {
		throw Error(i(321));
	}
	function qo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Lr(e[n], t[n])) return !1;
		return !0;
	}
	function Jo(e, t, n, r, i, a) {
		return Io = a, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? uc : dc, Vo = !1, a = n(r, i), Vo = !1, Bo && (a = Xo(t, n, r, i)), Yo(e), a;
	}
	function Yo(e) {
		B.H = lc;
		var t = Lo !== null && Lo.next !== null;
		if (Io = 0, Ro = Lo = q = null, zo = !1, Uo = 0, Wo = null, t) throw Error(i(300));
		e === null || Oc || (e = e.dependencies, e !== null && va(e) && (Oc = !0));
	}
	function Xo(e, t, n, r) {
		q = e;
		var a = 0;
		do {
			if (Bo && (Wo = null), Uo = 0, Bo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Ro = Lo = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			B.H = fc, o = t(n, r);
		} while (Bo);
		return o;
	}
	function Zo() {
		var e = B.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? rs(t) : t, e = e.useState()[0], (Lo === null ? null : Lo.memoizedState) !== e && (q.flags |= 1024), t;
	}
	function Qo() {
		var e = Ho !== 0;
		return Ho = 0, e;
	}
	function $o(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function J(e) {
		if (zo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			zo = !1;
		}
		Io = 0, Ro = Lo = q = null, Bo = !1, Uo = Ho = 0, Wo = null;
	}
	function es() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Ro === null ? q.memoizedState = Ro = e : Ro = Ro.next = e, Ro;
	}
	function ts() {
		if (Lo === null) {
			var e = q.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Lo.next;
		var t = Ro === null ? q.memoizedState : Ro.next;
		if (t !== null) Ro = t, Lo = e;
		else {
			if (e === null) throw q.alternate === null ? Error(i(467)) : Error(i(310));
			Lo = e, e = {
				memoizedState: Lo.memoizedState,
				baseState: Lo.baseState,
				baseQueue: Lo.baseQueue,
				queue: Lo.queue,
				next: null
			}, Ro === null ? q.memoizedState = Ro = e : Ro = Ro.next = e;
		}
		return Ro;
	}
	function ns() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function rs(e) {
		var t = Uo;
		return Uo += 1, Wo === null && (Wo = []), e = Ja(Wo, e, t), t = q, (Ro === null ? t.memoizedState : Ro.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? uc : dc), e;
	}
	function is(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return rs(e);
			if (e.$$typeof === oe) return;
			if (e.$$typeof === F) return ba(e);
		}
		throw Error(i(438, String(e)));
	}
	function as(e) {
		var t = null, n = q.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = q.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = ns(), q.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
		return t.index++, n;
	}
	function os(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ss(e) {
		return cs(ts(), Lo, e);
	}
	function cs(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Io & f) === f : (X & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Pa && (d = !0);
					else if ((Io & p) === p) {
						u = u.next, p === Pa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, q.lanes |= p, od |= p;
					f = u.action, Vo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, q.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Lr(o, e.memoizedState) && (Oc = !0, d && (n = Fa, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ls(e) {
		var t = ts(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Lr(o, t.memoizedState) || (Oc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function us(e, t, n) {
		var r = q, a = ts(), o = G;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Lr((Lo || a).memoizedState, n);
		if (s && (a.memoizedState = n, Oc = !0), a = a.queue, Fs(ps.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Ro !== null && !!(Ro.memoizedState.tag & 1), As(e ? 9 : 8, { destroy: void 0 }, fs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Qu === null) throw Error(i(349));
			o || Io & 127 || ds(r, t, n);
		}
		return n;
	}
	function ds(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = q.updateQueue, t === null ? (t = ns(), q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function fs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ms(t) && hs(e);
	}
	function ps(e, t, n) {
		return n(function() {
			ms(t) && hs(e);
		});
	}
	function ms(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Lr(e, n);
		} catch {
			return !0;
		}
	}
	function hs(e) {
		var t = Si(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function gs(e) {
		var t = es();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Vo) {
				qe(!0);
				try {
					n();
				} finally {
					qe(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: os,
			lastRenderedState: e
		}, t;
	}
	function _s(e, t, n, r) {
		return e.baseState = n, cs(e, Lo, typeof r == "function" ? r : os);
	}
	function vs(e, t, n, r, a) {
		if (oc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			B.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ys(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function ys(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = B.T, o = {};
			o.types = a === null ? null : a.types, B.T = o;
			try {
				var s = n(i, r), c = B.S;
				c !== null && c(o, s), bs(e, t, s);
			} catch (n) {
				Ss(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), B.T = a;
			}
		} else try {
			a = n(i, r), bs(e, t, a);
		} catch (n) {
			Ss(e, t, n);
		}
	}
	function bs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			xs(e, t, n);
		}, function(n) {
			return Ss(e, t, n);
		}) : xs(e, t, n);
	}
	function xs(e, t, n) {
		t.status = "fulfilled", t.value = n, Cs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ys(e, n)));
	}
	function Ss(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Cs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Cs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ws(e, t) {
		return t;
	}
	function Ts(e, t) {
		if (G) {
			var n = Qu.formState;
			if (n !== null) {
				a: {
					var r = q;
					if (G) {
						if ($i) {
							b: {
								for (var i = $i, a = ta; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = dm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								$i = dm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ra(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = es(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ws,
			lastRenderedState: t
		}, n.queue = r, n = rc.bind(null, q, r), r.dispatch = n, r = gs(!1), a = ac.bind(null, q, !1, r.queue), r = es(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = vs.bind(null, q, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Es(e) {
		return Ds(ts(), Lo, e);
	}
	function Ds(e, t, n) {
		if (t = cs(e, t, ws)[0], e = ss(os)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = rs(t);
		} catch (e) {
			throw e === Wa ? Ka : e;
		}
		else r = t;
		t = ts();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (q.flags |= 2048, As(9, { destroy: void 0 }, Os.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Os(e, t) {
		e.action = t;
	}
	function ks(e) {
		var t = ts(), n = Lo;
		if (n !== null) return Ds(t, n, e);
		ts(), t = t.memoizedState, n = ts();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function As(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = q.updateQueue, t === null && (t = ns(), q.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function js() {
		return ts().memoizedState;
	}
	function Ms(e, t, n, r) {
		var i = es();
		q.flags |= e, i.memoizedState = As(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Ns(e, t, n, r) {
		var i = ts();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		Lo !== null && r !== null && qo(r, Lo.memoizedState.deps) ? i.memoizedState = As(t, a, n, r) : (q.flags |= e, i.memoizedState = As(1 | t, a, n, r));
	}
	function Ps(e, t) {
		Ms(8390656, 8, e, t);
	}
	function Fs(e, t) {
		Ns(2048, 8, e, t);
	}
	function Is(e) {
		q.flags |= 4;
		var t = q.updateQueue;
		if (t === null) t = ns(), q.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Ls(e) {
		var t = ts().memoizedState;
		return Is({
			ref: t,
			nextImpl: e
		}), function() {
			if (Zu & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Rs(e, t) {
		return Ns(4, 2, e, t);
	}
	function zs(e, t) {
		return Ns(4, 4, e, t);
	}
	function Bs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Vs(e, t, n) {
		n = n == null ? null : n.concat([e]), Ns(4, 4, Bs.bind(null, t, e), n);
	}
	function Hs() {}
	function Us(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ws(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && qo(t, r[1])) return r[0];
		if (r = e(), Vo) {
			qe(!0);
			try {
				e();
			} finally {
				qe(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Gs(e, t, n) {
		return n === void 0 || Io & 1073741824 && !(X & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), q.lanes |= e, od |= e, n);
	}
	function Ks(e, t, n, r) {
		return Lr(n, t) ? n : bo.current === null ? !(Io & 106) || Io & 1073741824 && !(X & 261930) ? (Oc = !0, e.memoizedState = n) : (e = Md(), q.lanes |= e, od |= e, t) : (e = Gs(e, n, r), Lr(e, t) || (Oc = !0), e);
	}
	function qs(e, t, n, r, i) {
		var a = V.p;
		V.p = a !== 0 && 8 > a ? a : 8;
		var o = B.T, s = {};
		s.types = o === null ? null : o.types, B.T = s, ac(e, !1, t, n);
		try {
			var c = i(), l = B.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? ic(e, t, Ra(c, r), jd(e)) : ic(e, t, r, jd(e));
		} catch (n) {
			ic(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			V.p = a, o !== null && s.types !== null && (o.types = s.types), B.T = o;
		}
	}
	function Js() {}
	function Ys(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Xs(e).queue;
		qs(e, a, t, de, n === null ? Js : function() {
			return Zs(e), n(r);
		});
	}
	function Xs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: de,
			baseState: de,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: de
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Zs(e) {
		var t = Xs(e);
		t.next === null && (t = e.alternate.memoizedState), ic(e, t.next.queue, {}, jd());
	}
	function Qs() {
		return ba(ch);
	}
	function $s() {
		return ts().memoizedState;
	}
	function ec() {
		return ts().memoizedState;
	}
	function tc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = uo(n);
					var r = fo(t, e, n);
					r !== null && (Pd(r, t, n), po(r, t, n)), t = { cache: Da() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function nc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e) ? sc(t, n) : (n = xi(e, t, n, r), n !== null && (Pd(n, e, r), cc(n, t, r)));
	}
	function rc(e, t, n) {
		ic(e, t, n, jd());
	}
	function ic(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (oc(e)) sc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Lr(s, o)) return bi(e, t, i, 0), Qu === null && yi(), !1;
			} catch {}
			if (n = xi(e, t, i, r), n !== null) return Pd(n, e, r), cc(n, t, r), !0;
		}
		return !1;
	}
	function ac(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Ff(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e)) {
			if (t) throw Error(i(479));
		} else t = xi(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function oc(e) {
		var t = e.alternate;
		return e === q || t !== null && t === q;
	}
	function sc(e, t) {
		Bo = zo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function cc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, dt(e, n);
		}
	}
	var lc = {
		readContext: ba,
		use: is,
		useCallback: Ko,
		useContext: Ko,
		useEffect: Ko,
		useImperativeHandle: Ko,
		useLayoutEffect: Ko,
		useInsertionEffect: Ko,
		useMemo: Ko,
		useReducer: Ko,
		useRef: Ko,
		useState: Ko,
		useDebugValue: Ko,
		useDeferredValue: Ko,
		useTransition: Ko,
		useSyncExternalStore: Ko,
		useId: Ko,
		useHostTransitionStatus: Ko,
		useFormState: Ko,
		useActionState: Ko,
		useOptimistic: Ko,
		useMemoCache: Ko,
		useCacheRefresh: Ko,
		useEffectEvent: Ko
	}, uc = {
		readContext: ba,
		use: is,
		useCallback: function(e, t) {
			return es().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: ba,
		useEffect: Ps,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Ms(4194308, 4, Bs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ms(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Ms(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = es();
			t = t === void 0 ? null : t;
			var r = e();
			if (Vo) {
				qe(!0);
				try {
					e();
				} finally {
					qe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = es();
			if (n !== void 0) {
				var i = n(t);
				if (Vo) {
					qe(!0);
					try {
						n(t);
					} finally {
						qe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = nc.bind(null, q, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = es();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = gs(e);
			var t = e.queue, n = rc.bind(null, q, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Gs(es(), e, t);
		},
		useTransition: function() {
			var e = gs(!1);
			return e = qs.bind(null, q, e.queue, !0, !1), es().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = q, a = es();
			if (G) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Qu === null) throw Error(i(349));
				X & 127 || ds(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ps(ps.bind(null, r, o, e), [e]), r.flags |= 2048, As(9, { destroy: void 0 }, fs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = es(), t = Qu.identifierPrefix;
			if (G) {
				var n = Ki, r = Gi;
				n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ho++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Go++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Qs,
		useFormState: Ts,
		useActionState: Ts,
		useOptimistic: function(e) {
			var t = es();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = ac.bind(null, q, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: as,
		useCacheRefresh: function() {
			return es().memoizedState = tc.bind(null, q);
		},
		useEffectEvent: function(e) {
			var t = es(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Zu & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, dc = {
		readContext: ba,
		use: is,
		useCallback: Us,
		useContext: ba,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ss,
		useRef: js,
		useState: function() {
			return ss(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Ks(ts(), Lo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ss(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: Es,
		useActionState: Es,
		useOptimistic: function(e, t) {
			return _s(ts(), Lo, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	}, fc = {
		readContext: ba,
		use: is,
		useCallback: Us,
		useContext: ba,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ls,
		useRef: js,
		useState: function() {
			return ls(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			var n = ts();
			return Lo === null ? Gs(n, e, t) : Ks(n, Lo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ls(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			var n = ts();
			return Lo === null ? (n.baseState = e, [e, n.queue.dispatch]) : _s(n, Lo, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	};
	function pc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var mc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = uo(r);
			i.payload = t, n != null && (i.callback = n), t = fo(e, i, r), t !== null && (Pd(t, e, r), po(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = uo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = fo(e, i, r), t !== null && (Pd(t, e, r), po(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = uo(n);
			r.tag = 2, t != null && (r.callback = t), t = fo(e, r, n), t !== null && (Pd(t, e, n), po(t, e, n));
		}
	};
	function hc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(i, a) : !0;
	}
	function gc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
	}
	function _c(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function vc(e) {
		hi(e);
	}
	function yc(e) {
		console.error(e);
	}
	function bc(e) {
		hi(e);
	}
	function xc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Sc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Cc(e, t, n) {
		return n = uo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			xc(e, t);
		}, n;
	}
	function wc(e) {
		return e = uo(e), e.tag = 3, e;
	}
	function Tc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Sc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Sc(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ec(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && _a(t, n, a, !0), n = To.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Eo === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === K ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), hf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === K ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), hf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return hf(e, r, a), Kd(), !1;
		}
		if (G) return t = To.current, t === null ? (r !== na && (t = Error(i(423), { cause: r }), la(Li(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Li(r, n), a = Cc(e.stateNode, r, a), mo(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== na && (e = Error(i(422), { cause: r }), la(Li(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Li(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return !0;
		r = Li(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Cc(n.stateNode, r, e), mo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = wc(a), Tc(a, e, n, r), mo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Dc = Error(i(461)), Oc = !1;
	function kc(e, t, n, r) {
		t.child = e === null ? oo(t, null, n, r) : ao(t, e.child, n, r);
	}
	function Ac(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return ya(t), r = Jo(e, t, n, o, a, i), s = Qo(), e !== null && !Oc ? ($o(e, t, i), il(e, t, i)) : (G && s && Yi(t), t.flags |= 1, kc(e, t, r, i), t.child);
	}
	function jc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Oi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Mc(e, t, a, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !al(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Rr : n, n(o, r) && e.ref === t.ref) return il(e, t, i);
		}
		return t.flags |= 1, e = ki(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Mc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Rr(a, r) && e.ref === t.ref) {
				if (Oc = !1, t.pendingProps = r = a, al(e, i)) e.flags & 131072 && (Oc = !0);
				else return t.lanes = e.lanes, il(e, t, i);
			}
		}
		return Bc(e, t, n, r, i);
	}
	function Nc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Fc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ha(t, a === null ? null : a.cachePool), a === null ? Co() : So(t, a), ko(t);
			else return r = t.lanes = 536870912, Fc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ha(t, null), Co(), Ao()) : (Ha(t, a.cachePool), So(t, a), Ao(), t.memoizedState = null);
		return kc(e, t, i, n), t.child;
	}
	function Pc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Fc(e, t, n, r, i) {
		var a = Va();
		return a = a === null ? null : {
			parent: Ea._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ha(t, null), Co(), ko(t), e !== null && _a(e, t, r, !0), t.childLanes = i, null;
	}
	function Ic(e, t) {
		return t = Yc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Lc(e, t, n) {
		return ao(t, e.child, null, n), e = Ic(t, t.pendingProps), e.flags |= 2, jo(t), t.memoizedState = null, e;
	}
	function Rc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (G) {
				if (r.mode === "hidden") return e = Ic(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Pc(null, e);
				if (Oo(t), (e = $i) ? (e = sm(e, ta), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Wi === null ? null : {
						id: Gi,
						overflow: Ki
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Pi(e), n.return = t, t.child = n, Qi = t, $i = null)) : e = null, e === null) throw ra(t);
				return t.lanes = 536870912, null;
			}
			return Ic(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Oo(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Lc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Oc || _a(e, t, n, !1), a = (n & e.childLanes) !== 0, Oc || a) {
				if (bo.current === null) {
					if (r = Qu, r !== null && (s = ft(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Si(e, s), Pd(r, e, s), Dc;
					Kd();
				}
				t = Lc(e, t, n);
			} else e = o.treeContext, $i = dm(s.nextSibling), Qi = t, G = !0, ea = null, ta = !1, e !== null && Zi(t, e), t = Ic(t, r), t.flags |= 134221824;
			return t;
		}
		return e = ki(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function zc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Bc(e, t, n, r, i) {
		return ya(t), n = Jo(e, t, n, r, void 0, i), r = Qo(), e !== null && !Oc ? ($o(e, t, i), il(e, t, i)) : (G && r && Yi(t), t.flags |= 1, kc(e, t, n, i), t.child);
	}
	function Vc(e, t, n, r, i, a) {
		return ya(t), t.updateQueue = null, n = Xo(t, r, n, i), Yo(e), r = Qo(), e !== null && !Oc ? ($o(e, t, a), il(e, t, a)) : (G && r && Yi(t), t.flags |= 1, kc(e, t, n, a), t.child);
	}
	function Hc(e, t, n, r, i) {
		if (ya(t), t.stateNode === null) {
			var a = Ti, o = n.contextType;
			typeof o == "object" && o && (a = ba(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = mc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, co(t), o = n.contextType, a.context = typeof o == "object" && o ? ba(o) : Ti, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (pc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && mc.enqueueReplaceState(a, a.state, null), _o(t, r, a, i), go(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = _c(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ti, typeof u == "object" && u && (o = ba(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && gc(t, a, r, o), so = !1;
			var f = t.memoizedState;
			a.state = f, _o(t, r, a, i), go(), l = t.memoizedState, s || f !== l || so ? (typeof d == "function" && (pc(t, n, d, r), l = t.memoizedState), (c = so || hc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, lo(e, t), o = t.memoizedProps, u = _c(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ti, typeof l == "object" && l && (c = ba(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && gc(t, a, r, c), so = !1, f = t.memoizedState, a.state = f, _o(t, r, a, i), go();
			var p = t.memoizedState;
			o !== d || f !== p || so || e !== null && e.dependencies !== null && va(e.dependencies) ? (typeof s == "function" && (pc(t, n, s, r), p = t.memoizedState), (u = so || hc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && va(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, zc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = ao(t, e.child, null, i), t.child = ao(t, null, n, i)) : kc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = il(e, t, i), e;
	}
	function Uc(e, t, n, r) {
		return sa(), t.flags |= 256, kc(e, t, n, r), t.child;
	}
	var Wc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Gc(e) {
		return {
			baseLanes: e,
			cachePool: Ua()
		};
	}
	function Kc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function qc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Mo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (G) {
				if (i ? Do(t) : Ao(), (e = $i) ? (e = sm(e, ta), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Wi === null ? null : {
						id: Gi,
						overflow: Ki
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Pi(e), n.return = t, t.child = n, Qi = t, $i = null)) : e = null, e === null) throw ra(t);
				return t.lanes = lm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Ao(), i = t.mode, a = Yc({
				mode: "hidden",
				children: a
			}, i), r = Mi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Gc(n), r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(null, r)) : (Do(t), Jc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return Zc(e, t, a, o, r, c, s, n);
		}
		return i ? (Ao(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = ki(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Mi(i, a, n, null), i.flags |= 2) : i = ki(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Pc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Gc(n) : (a = i.cachePool, a === null ? a = Ua() : (s = Ea._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(e.child, r)) : (Do(t), n = e.child, e = n.sibling, n = ki(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Jc(e, t) {
		return t = Yc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Yc(e, t) {
		return e = Di(22, e, null, t), e.lanes = 0, e;
	}
	function Xc(e, t, n) {
		return ao(t, e.child, null, n), e = Jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Do(t), t.flags &= -257, Xc(e, t, c)) : t.memoizedState === null ? (Ao(), o = a.fallback, s = t.mode, a = Yc({
			mode: "visible",
			children: a.children
		}, s), o = Mi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, ao(t, e.child, null, c), a = t.child, a.memoizedState = Gc(c), a.childLanes = Kc(e, r, c), t.memoizedState = Wc, Pc(null, a)) : (Ao(), t.child = e.child, t.flags |= 128, null);
		if (Do(t), lm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, la({
				value: a,
				source: null,
				stack: null
			})), Xc(e, t, c);
		}
		if (Oc || _a(e, t, c, !1), r = (c & e.childLanes) !== 0, Oc || r) {
			if (bo.current !== null) return Xc(e, t, c);
			if (r = Qu, r !== null && (a = ft(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Si(e, a), Pd(r, e, a), Dc;
			return cm(o) || Kd(), Xc(e, t, c);
		}
		return cm(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, $i = dm(o.nextSibling), Qi = t, G = !0, ea = null, ta = !1, e !== null && Zi(t, e), t = Jc(t, a.children), t.flags |= 134221824, t);
	}
	function Qc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ha(e.return, t, n);
	}
	function $c(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Fo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function el(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function tl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function nl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Mo.current;
		if (t.flags & 128) return No(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, No(t, o), i === "backwards" && e !== null ? (tl(e), kc(e, t, r, n), tl(e)) : kc(e, t, r, n), r = G ? Vi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Qc(e, n, t);
			else if (e.tag === 19) Qc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, tl(t)), el(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Fo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				el(t, !0, n, null, a, r);
				break;
			case "together":
				el(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), el(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function rl(e, t, n) {
		var r = t.pendingProps;
		return pa(t, t.type, r.value), kc(e, t, r.children, n), t.child;
	}
	function il(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (_a(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ki(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ki(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function al(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && va(e)));
	}
	function ol(e, t, n) {
		switch (t.tag) {
			case 3:
				be(t, t.stateNode.containerInfo), pa(t, Ea, e.memoizedState.cache), sa();
				break;
			case 27:
			case 5:
				Se(t);
				break;
			case 4:
				be(t, t.stateNode.containerInfo);
				break;
			case 10:
				pa(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Oo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Do(t), t.flags |= 128, null;
					r = _a(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? qc(e, t, n) : (Do(t), e = il(e, t, n), e === null ? null : e.sibling);
				}
				Do(t);
				break;
			case 19:
				if (t.flags & 128) return nl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (_a(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return nl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), No(t, Mo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Nc(e, t, n, t.pendingProps);
			case 24: pa(t, Ea, e.memoizedState.cache);
		}
		return il(e, t, n);
	}
	function sl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Oc = !0;
			else {
				if (!al(e, n) && !(t.flags & 128)) return Oc = !1, ol(e, t, n);
				Oc = !!(e.flags & 131072);
			}
		} else Oc = !1, G && t.flags & 1048576 && Ji(t, Vi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ya(t.elementType), t.type = e, typeof e == "function") Oi(e) ? (r = _c(e, r), t.tag = 1, t = Hc(null, t, e, r, n)) : (t.tag = 0, t = Bc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === ee) {
								t.tag = 11, t = Ac(null, t, e, r, n);
								break a;
							}
							if (a === L) {
								t.tag = 14, t = jc(null, t, e, r, n);
								break a;
							}
							if (a === F) {
								t.tag = 10, t.type = e, t = rl(null, t, n);
								break a;
							}
						}
						throw t = ue(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Bc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = _c(r, t.pendingProps), Hc(e, t, r, a, n);
			case 3:
				a: {
					if (be(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, lo(e, t), _o(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, pa(t, Ea, r), r !== o.cache && ga(t, [Ea], n, !0), go(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Uc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Li(Error(i(424)), t), la(a), t = Uc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for ($i = dm(e.firstChild), Qi = t, G = !0, ea = null, ta = !0, n = oo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (sa(), r === a) {
							t = il(e, t, n);
							break a;
						}
						kc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return zc(e, t), e === null ? (n = Pm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : G || (t.stateNode = mp(t.type, t.pendingProps, ve.current, t)) : t.memoizedState = Pm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Se(t), e === null && G && (r = t.stateNode = Q(t.type, t.pendingProps, ve.current), Qi = t, ta = !0, a = $i, wp(t.type) ? (fm = a, $i = dm(r.firstChild)) : $i = a), kc(e, t, t.pendingProps.children, n), zc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && G && ((a = r = $i) && (r = am(r, t.type, t.pendingProps, ta), r === null ? a = !1 : (t.stateNode = r, Qi = t, $i = dm(r.firstChild), ta = !1, a = !0)), a || ra(t)), Se(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, hp(a, o) ? r = null : s !== null && hp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Jo(e, t, Zo, null, null, n), ch._currentValue = a), zc(e, t), kc(e, t, r, n), t.child;
			case 6: return e === null && G && ((e = n = $i) && (n = om(n, t.pendingProps, ta), n === null ? e = !1 : (t.stateNode = n, Qi = t, $i = null, e = !0)), e || ra(t)), null;
			case 13: return qc(e, t, n);
			case 4: return be(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ao(t, null, r, n) : kc(e, t, r, n), t.child;
			case 11: return Ac(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, zc(e, t), kc(e, t, r, n), t.child;
			case 8: return kc(e, t, t.pendingProps.children, n), t.child;
			case 12: return kc(e, t, t.pendingProps.children, n), t.child;
			case 10: return rl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, ya(t), a = ba(a), r = r(a), t.flags |= 1, kc(e, t, r, n), t.child;
			case 14: return jc(e, t, t.type, t.pendingProps, n);
			case 15: return Mc(e, t, t.type, t.pendingProps, n);
			case 19: return nl(e, t, n);
			case 31: return Rc(e, t, n);
			case 22: return Nc(e, t, n, t.pendingProps);
			case 24: return ya(t), r = ba(Ea), e === null ? (a = Va(), a === null && (a = Qu, o = Da(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, co(t), pa(t, Ea, a)) : ((e.lanes & n) !== 0 && (lo(e, t), _o(t, null, null, n), go()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, pa(t, Ea, r), r !== a.cache && ga(t, [Ea], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), pa(t, Ea, r))), kc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : G && Yi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : zc(e, t), kc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function cl(e) {
		e.flags |= 4;
	}
	function ll(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Ym(t, r) : Ym(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw Xa = K, Ga;
			}
		} else e.flags &= -16777217;
	}
	function ul(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Xm(t)) {
			if (Ud()) e.flags |= 8192;
			else throw Xa = K, Ga;
		}
	}
	function dl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ot(), e.lanes |= t, ud |= t);
	}
	function fl(e, t) {
		if (!G) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function pl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function ml(e, t, n) {
		var r = t.pendingProps;
		switch (Xi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return pl(t), null;
			case 1: return pl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ma(Ea), xe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (oa(t) ? cl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ca())), pl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (cl(t), o === null ? (pl(t), ll(t, a, null, r, n)) : (pl(t), ul(t, o))) : o ? o === e.memoizedState ? (pl(t), t.flags &= -16777217) : (cl(t), pl(t), ul(t, o)) : (e = e.memoizedProps, e !== r && cl(t), pl(t), ll(t, a, e, r, n)), null;
			case 27:
				if (Ce(t), n = ve.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					e = ge.current, oa(t) ? ia(t, e) : (e = Q(a, r, n), t.stateNode = e, cl(t));
				}
				return pl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ce(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = ge.current, oa(t)) ia(t, o);
					else {
						var s = dp(ve.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[vt] = t, o[yt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (ip(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && cl(t);
					}
				}
				return pl(t), t.subtreeFlags &= -33554433, ll(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = ve.current, oa(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Qi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[vt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || tp(e.nodeValue, n)), e || ra(t, !0);
					} else e = dp(e).createTextNode(r), e[vt] = t, t.stateNode = e;
				}
				return pl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = oa(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[vt] = t;
						} else sa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), e = !1;
					} else n = ca(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (jo(t), t) : (jo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return pl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = oa(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[vt] = t;
						} else sa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), a = !1;
					} else a = ca(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (jo(t), t) : (jo(t), null);
				}
				return jo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dl(t, t.updateQueue), pl(t), null);
			case 4: return xe(), e === null && Gf(t.stateNode.containerInfo), t.flags |= 67108864, pl(t), null;
			case 10: return ma(t.type), pl(t), null;
			case 19:
				if (Po(t), r = t.memoizedState, r === null) return pl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) fl(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Fo(e), o !== null) {
								for (t.flags |= 128, fl(r, !1), e = o.updateQueue, t.updateQueue = e, dl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ai(n, e), n = n.sibling;
								return No(t, Mo.current & 1 | 2), G && qi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ie() > gd && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Fo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, dl(t, e), fl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !G) return pl(t), null;
						} else 2 * Ie() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ie(), e.sibling = null, o = Mo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || G ? No(t, o) : (n = o, he(To, t), he(Mo, n), Eo === null && (Eo = t)), G && qi(t, r.treeForkCount), e;
				}
				return pl(t), null;
			case 22:
			case 23: return jo(t), wo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pl(t), n = t.updateQueue, n !== null && dl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && H(Ba), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ma(Ea), pl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, pl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function hl(e, t) {
		switch (Xi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ma(Ea), xe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ce(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (jo(t), t.alternate === null) throw Error(i(340));
					sa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (jo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					sa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Po(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return xe(), null;
			case 10: return ma(t.type), null;
			case 22:
			case 23: return jo(t), wo(), e !== null && H(Ba), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ma(Ea), null;
			case 25: return null;
			default: return null;
		}
	}
	function gl(e, t) {
		switch (Xi(t), t.tag) {
			case 3:
				ma(Ea), xe();
				break;
			case 26:
			case 27:
			case 5:
				Ce(t);
				break;
			case 4:
				xe();
				break;
			case 31:
				t.memoizedState !== null && jo(t);
				break;
			case 13:
				jo(t);
				break;
			case 19:
				Po(t);
				break;
			case 10:
				ma(t.type);
				break;
			case 22:
			case 23:
				jo(t), wo(), e !== null && H(Ba);
				break;
			case 24: ma(Ea);
		}
	}
	function _l(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			mf(t, t.return, e);
		}
	}
	function vl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								mf(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			mf(t, t.return, e);
		}
	}
	function yl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				yo(t, n);
			} catch (t) {
				mf(e, e.return, t);
			}
		}
	}
	function bl(e, t, n) {
		n.props = _c(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			mf(e, t, n);
		}
	}
	function xl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = fi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Ip(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Lp(e);
							m(e.child, !1, em, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			mf(e, t, n);
		}
	}
	function Sl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				mf(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				mf(e, t, n);
			}
			else n.current = null;
		}
	}
	function Cl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) nm(e.stateNode, t[n]);
	}
	function wl(e) {
		for (var t = e.return; t !== null && (Dl(t) && nm(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function Tl(e) {
		for (var t = e.return; t !== null && (Dl(t) && rm(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function El(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Dl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ol(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			mf(e, e.return, t);
		}
	}
	function kl(e, t, n) {
		try {
			var r = e.stateNode;
			op(r, e.type, n, t), r[yt] = t;
		} catch (t) {
			mf(e, e.return, t);
		}
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wp(e.type) || e.tag === 4;
	}
	function jl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Al(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && wp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ml(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hn)), Cl(e, r), Ht = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, wp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ml(e, t, n, r), e = e.sibling; e !== null;) Ml(e, t, n, r), e = e.sibling;
	}
	function Nl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Cl(e, r), Ht = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, wp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Nl(e, t, n, r), e = e.sibling; e !== null;) Nl(e, t, n, r), e = e.sibling;
	}
	function Pl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			ip(t, r, n), t[vt] = e, t[yt] = n;
		} catch (t) {
			mf(e, e.return, t);
		}
	}
	var Fl = !1, Il = null;
	function Ll(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Fl = !0);
	}
	var Rl = null;
	function zl() {
		var e = Rl;
		return Rl = null, e;
	}
	var Bl = 0;
	function Vl(e, t, n, r, i) {
		return Bl = 0, Hl(e.child, t, n, r, i);
	}
	function Hl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Ap(o);
					r.push(s), s.view && (a = !0);
				} else a || Ap(o).view && (a = !0);
				Fl = !0, Dp(o, Bl === 0 ? t : t + "_" + Bl, n), Bl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Hl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Ul(e, t) {
		for (; e !== null;) e.tag === 5 ? Op(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Ul(e.child, t)), e = e.sibling;
	}
	function Wl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Wl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = mi(t.default, t.share), t !== "none" && (Vl(e, n, t, null, !1) || Ul(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Gl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = fi(r, n), a = mi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Wl(e) : Vl(e, i, a, null, !1) ? (Wl(e), n.paired || t || Nd(e, r.onEnter)) : Ul(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Gl(e, t), e = e.sibling;
		else Wl(e);
	}
	function Kl(e) {
		if (Il !== null && Il.size !== 0) {
			var t = Il;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = mi(n.default, n.share);
								if (a !== "none" && (Vl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : Ul(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Kl(e);
				}
				e = e.sibling;
			}
		}
	}
	function ql(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = fi(t, e.stateNode), r = Il === null ? void 0 : Il.get(n), i = mi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Vl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Il.delete(n), Nd(e, t.onShare)) : Ul(e.child, !1)), Il !== null && Kl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e), e = e.sibling;
		else Il !== null && Kl(e);
	}
	function Jl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = fi(t, e.stateNode);
				t = mi(t.default, t.update), e.flags &= -5, t !== "none" && Vl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Jl(e);
			e = e.sibling;
		}
	}
	function Yl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Ul(e.child, !1));
				}
				Yl(e);
			}
			e = e.sibling;
		}
	}
	function Xl(e) {
		if (e.tag === 30) e.stateNode.paired = null, Ul(e.child, !1), Yl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e), e = e.sibling;
		else Yl(e);
	}
	function Zl(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Ul(e.child, !1) : e.subtreeFlags & 33554432 && Zl(e), e = e.sibling;
	}
	function Ql(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Bl < a.length) {
					var l = a[Bl], u = Ap(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Dp(c, Bl === 0 ? n : n + "_" + Bl, i), s && e.flags & 4 || (Rl === null && (Rl = []), Rl.push(c, Bl === 0 ? r : r + "_" + Bl, t.memoizedProps)), Bl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Ql(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function $l(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = fi(n, r), a = mi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(jp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Bl = 0, i = Ql(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && $l(e, t);
			e = e.sibling;
		}
	}
	var eu = !1, tu = !1, nu = !1, ru = !1, iu = typeof WeakSet == "function" ? WeakSet : Set, au = null, ou = !1, su = !1, cu = !1, lu = !1;
	function uu(e, t, n) {
		if (e = e.containerInfo, lp = _h, e = Hr(e), Ur(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (up = {
			focusedElem: e,
			selectionRange: r
		}, _h = !1, n = (n & 335544064) === n, au = t, t = n ? 9270 : 1024; au !== null;) {
			if (e = au, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && ql(r[a]);
			if (e.alternate === null && e.flags & 2) n && Ll(e), du(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && ql(r), du(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Ll(e), du(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, au = r) : (n && Jl(e), du(n));
			}
		}
		Il = null;
	}
	function du(e) {
		for (; au !== null;) {
			var t = au, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = _c(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							mf(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) im(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								im(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = fi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = mi(a.default, a.update), a !== "none" && Vl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, au = r;
				break;
			}
			au = t.return;
		}
	}
	function fu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Mu(e, n), r & 4 && _l(5, n);
				break;
			case 1:
				if (Mu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						mf(n, n.return, e);
					}
					else {
						var i = _c(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							mf(n, n.return, e);
						}
					}
				}
				r & 64 && yl(n), r & 512 && xl(n, n.return);
				break;
			case 3:
				if (Mu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						yo(e, t);
					} catch (e) {
						mf(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Pl(n);
			case 26:
			case 5:
				Mu(e, n), t === null && r & 4 && Ol(n), r & 512 && xl(n, n.return);
				break;
			case 12:
				Mu(e, n);
				break;
			case 31:
				Mu(e, n), r & 4 && xu(e, n);
				break;
			case 13:
				Mu(e, n), r & 4 && Su(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = vf.bind(null, n), um(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || eu, !r) {
					var a = t !== null && t.memoizedState !== null || tu;
					t = eu, i = tu, eu = r, (tu = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Pu(e, n, r)) : Mu(e, n), eu = t, tu = i;
				}
				break;
			case 30:
				Mu(e, n), r & 512 && xl(n, n.return);
				break;
			case 7: r & 512 && xl(n, n.return);
			default: Mu(e, n);
		}
	}
	function pu(e, t) {
		for (e = e.child; e !== null;) mu(e, t), e = e.sibling;
	}
	function mu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					mf(e, e.return, t);
				}
				hu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ht = !0;
				} catch (t) {
					mf(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? Ep(s, !0) : Ep(e.stateNode, !1);
				} catch (t) {
					mf(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && pu(e, t);
				break;
			default: pu(e, t);
		}
	}
	function hu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						mu(n, r);
						break a;
					case 22:
						n.memoizedState === null && hu(n, r);
						break a;
					default: hu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function gu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, gu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Dt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var _u = null, vu = !1;
	function yu(e, t, n) {
		for (n = n.child; n !== null;) bu(e, t, n), n = n.sibling;
	}
	function bu(e, t, n) {
		if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
			Ke.onCommitFiberUnmount(Ge, n);
		} catch {}
		switch (n.tag) {
			case 26:
				tu || Sl(n, t), yu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !tu && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				tu || Sl(n, t), Tl(n);
				var r = _u, i = vu;
				wp(n.type) && (_u = n.stateNode, vu = !1), yu(e, t, n), _m(n.stateNode, n.type, n.memoizedProps), _u = r, vu = i;
				break;
			case 5: tu || Sl(n, t), Tl(n);
			case 6:
				if (n.tag === 6 && Tl(n), r = _u, i = vu, _u = null, yu(e, t, n), _u = r, vu = i, _u !== null) {
					if (vu) try {
						(_u.nodeType === 9 ? _u.body : _u.nodeName === "HTML" ? _u.ownerDocument.body : _u).removeChild(n.stateNode), Ht = !0;
					} catch (e) {
						mf(n, t, e);
					}
					else try {
						_u.removeChild(n.stateNode), Ht = !0;
					} catch (e) {
						mf(n, t, e);
					}
				}
				break;
			case 18:
				_u !== null && (vu ? (e = _u, Tp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Tp(_u, n.stateNode));
				break;
			case 4:
				r = _u, i = vu, _u = n.stateNode.containerInfo, vu = !0, yu(e, t, n), _u = r, vu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				vl(2, n, t), tu || vl(4, n, t), yu(e, t, n);
				break;
			case 1:
				tu || (Sl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && bl(n, t, r)), yu(e, t, n);
				break;
			case 21:
				yu(e, t, n);
				break;
			case 22:
				tu = (r = tu) || n.memoizedState !== null, yu(e, t, n), tu = r;
				break;
			case 30:
				Sl(n, t), yu(e, t, n);
				break;
			case 7:
				tu || Sl(n, t), yu(e, t, n);
				break;
			default: yu(e, t, n);
		}
	}
	function xu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				mf(t, t.return, e);
			}
		}
	}
	function Su(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			mf(t, t.return, e);
		}
	}
	function Cu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new iu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new iu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function wu(e, t) {
		var n = Cu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = yf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Tu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (wp(l.type)) {
							_u = l.stateNode, vu = !1;
							break a;
						}
						break;
					case 5:
						_u = l.stateNode, vu = !1;
						break a;
					case 3:
					case 4:
						_u = l.stateNode.containerInfo, vu = !0;
						break a;
				}
				l = l.return;
			}
			if (_u === null) throw Error(i(160));
			bu(s, c, o), _u = null, vu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Du(t, e, n), t = t.sibling;
	}
	var Eu = null;
	function Du(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Tu(t, e, n), Ou(e), a & 4 && (vl(3, e, e.return), _l(3, e), vl(5, e, e.return));
				break;
			case 1:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 64 && eu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Eu, Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (eu) e.stateNode = mp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Tt] || r[vt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), ip(r, t, n), r[vt] = e, Mt(r), t = r;
												break a;
											case "link":
												if (o = Km("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), ip(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Km("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), ip(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[vt] = e, Mt(r), t = r;
									}
									e.stateNode = t;
								}
							} else eu || qm(o, e.type, e.stateNode);
						} else e.stateNode = Vm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && kl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || tu || t.parentNode.removeChild(t)) : a.count--, n === null ? eu || qm(o, e.type, e.stateNode) : Vm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), r !== null && a & 4 && kl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = nu, nu = !1, Tu(t, e, n), nu = o, Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						sn(t, ""), Ht = !0;
					} catch (t) {
						mf(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, kl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ru = !0);
				break;
			case 6:
				if (Tu(t, e, n), Ou(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, Ht = !0;
					} catch (t) {
						mf(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Ht = !1, Gm = null, o = Eu, Eu = xm(t.containerInfo), Tu(t, e, n), Eu = o, Ou(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					mf(e, e.return, t);
				}
				ru && (ru = !1, ku(e)), Ht = !1;
				break;
			case 4:
				a = nu, nu = eu, r = Ut(), o = Eu, Eu = xm(e.stateNode.containerInfo), Tu(t, e, n), Ou(e), Eu = o, Ht && su && (cu = !0), Ht = r, nu = a;
				break;
			case 12:
				Tu(t, e, n), Ou(e);
				break;
			case 31:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 13:
				Tu(t, e, n), Ou(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = Ie()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = eu, l = tu, u = nu;
				eu = c || o, nu = u || o, tu = l || s, Tu(t, e, n), tu = l, nu = u, eu = c, Ou(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || eu || tu || (t = s || tu, n = eu, r = tu, eu = o || eu, tu = t, Nu(e, 2), eu = n, tu = r), !o && nu || pu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, wu(e, n))));
				break;
			case 19:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 30:
				a & 512 && (tu || r === null || Sl(r, r.return)), a = Ut(), o = su, s = (n & 335544064) === n, c = e.memoizedProps, su = s && mi(c.default, c.update) !== "none", Tu(t, e, n), Ou(e), s && r !== null && Ht && (e.flags |= 4), su = o, Ht = a;
				break;
			case 21: break;
			case 7: a & 512 && (tu || r === null || Sl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Tu(t, e, n), Ou(e);
		}
	}
	function Ou(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Al(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Dl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (El(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Nl(e, jl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (sn(l, ""), n.flags &= -33), Nl(e, jl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ml(e, jl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				mf(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function ku(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			ku(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, _h = !0, t.reset(), _h = !1), e = e.sibling;
		}
	}
	function Au(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) ju(t, e), t = t.sibling;
		else $l(t, !1);
	}
	function ju(e, t) {
		var n = e.alternate;
		if (n === null) Gl(e, !1);
		else switch (e.tag) {
			case 3:
				if (lu = ou = !1, zl(), Au(t, e), !ou && !cu) {
					if (e = Rl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Op(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), lu = !0;
				}
				Rl = null;
				break;
			case 5:
				Au(t, e);
				break;
			case 4:
				r = ou, ou = !1, Au(t, e), ou && (cu = !0), ou = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Au(t, e) : Gl(e, !1));
				break;
			case 30:
				r = ou, i = zl(), ou = !1, Au(t, e), ou && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = fi(a, o), o = fi(n.memoizedProps, o);
				var s = mi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Bl = 0, t = Ql(e, n, t, o, s, a, !0), Bl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Rl = i) : i !== null && (i.push.apply(i, Rl), Rl = i), ou = e.flags & 32 ? !0 : r;
				break;
			default: Au(t, e);
		}
	}
	function Mu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) fu(e, t.alternate, t), t = t.sibling;
	}
	function Nu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					vl(4, n, n.return), Nu(n, r);
					break;
				case 1:
					Sl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && bl(n, n.return, i), Nu(n, r);
					break;
				case 27: r & 2 && _m(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Sl(n, n.return), n.tag !== 5 && n.tag !== 27 || Tl(n), Nu(n, r);
					break;
				case 6:
					Tl(n);
					break;
				case 26:
					Sl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || tu || i.parentNode.removeChild(i), Nu(n, r);
					break;
				case 22:
					n.memoizedState === null && Nu(n, r);
					break;
				case 30:
					Sl(n, n.return), Nu(n, r);
					break;
				case 7: Sl(n, n.return);
				default: Nu(n, r);
			}
			e = e.sibling;
		}
	}
	function Pu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Pu(i, a, n), _l(4, a);
					break;
				case 1:
					if (Pu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						mf(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) vo(l[i], c);
						} catch (e) {
							mf(r, r.return, e);
						}
					}
					s && o & 64 && yl(a), xl(a, a.return);
					break;
				case 27: n & 2 && Pl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || wl(a), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 6:
					wl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || eu || qm(xm(c.ownerDocument), a.type, c), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 12:
					Pu(i, a, n);
					break;
				case 31:
					Pu(i, a, n), s && o & 4 && xu(i, a);
					break;
				case 13:
					Pu(i, a, n), s && o & 4 && Su(i, a);
					break;
				case 22:
					a.memoizedState === null && Pu(i, a, n), xl(a, a.return);
					break;
				case 30:
					Pu(i, a, n), xl(a, a.return);
					break;
				case 7: xl(a, a.return);
				default: Pu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Fu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Oa(n));
	}
	function Iu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oa(e));
	}
	function Lu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Ru(e, t, n, r), t = t.sibling;
		else i && Zl(t);
	}
	function Ru(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Xl(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Lu(e, t, n, r), a & 2048 && _l(9, t);
				break;
			case 1:
				Lu(e, t, n, r);
				break;
			case 3:
				Lu(e, t, n, r), i && lu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Oa(a)));
				break;
			case 12:
				if (a & 2048) {
					Lu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						mf(t, t.return, e);
					}
				} else Lu(e, t, n, r);
				break;
			case 31:
				Lu(e, t, n, r);
				break;
			case 13:
				Lu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Xl(t), o._visibility & 2 ? Lu(e, t, n, r) : (o._visibility |= 2, zu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Xl(s), o._visibility & 2 ? Lu(e, t, n, r) : Bu(e, t)), a & 2048 && Fu(s, t);
				break;
			case 24:
				Lu(e, t, n, r), a & 2048 && Iu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Ul(a.child, !0), Ul(t.child, !0))), Lu(e, t, n, r);
				break;
			default: Lu(e, t, n, r);
		}
	}
	function zu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					zu(a, o, s, c, i), _l(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, zu(a, o, s, c, i)) : u._visibility & 2 ? zu(a, o, s, c, i) : Bu(a, o), i && l & 2048 && Fu(o.alternate, o);
					break;
				case 24:
					zu(a, o, s, c, i), i && l & 2048 && Iu(o.alternate, o);
					break;
				default: zu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Bu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Bu(n, r), i & 2048 && Fu(r.alternate, r);
					break;
				case 24:
					Bu(n, r), i & 2048 && Iu(r.alternate, r);
					break;
				default: Bu(n, r);
			}
			t = t.sibling;
		}
	}
	var Vu = 8192;
	function Hu(e, t, n) {
		if (e.subtreeFlags & Vu) for (e = e.child; e !== null;) Uu(e, t, n), e = e.sibling;
	}
	function Uu(e, t, n) {
		switch (e.tag) {
			case 26:
				Hu(e, t, n), e.flags & Vu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Qm(n, e)) : $m(n, Eu, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Hu(e, t, n), e.flags & Vu && (e = e.stateNode, (t & 335544128) === t && Qm(n, e));
				break;
			case 3:
			case 4:
				var r = Eu;
				Eu = xm(e.stateNode.containerInfo), Hu(e, t, n), Eu = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Vu, Vu = 16777216, Hu(e, t, n), Vu = r) : Hu(e, t, n));
				break;
			case 30:
				if ((e.flags & Vu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Il === null && (Il = /* @__PURE__ */ new Map()), Il.set(r, i);
				}
				Hu(e, t, n);
				break;
			default: Hu(e, t, n);
		}
	}
	function Wu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Gu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ku(e), e = e.sibling;
	}
	function Ku(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Gu(e), e.flags & 2048 && vl(9, e, e.return);
				break;
			case 3:
				Gu(e);
				break;
			case 12:
				Gu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : Gu(e);
				break;
			default: Gu(e);
		}
	}
	function qu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, t, t.return), qu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qu(t));
					break;
				default: qu(t);
			}
			e = e.sibling;
		}
	}
	function Ju(e, t) {
		for (; au !== null;) {
			var n = au;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Oa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, au = r;
			else a: for (n = e; au !== null;) {
				r = au;
				var i = r.sibling, a = r.return;
				if (gu(r), r === n) {
					au = null;
					break a;
				}
				if (i !== null) {
					i.return = a, au = i;
					break a;
				}
				au = a;
			}
		}
	}
	var Yu = {
		getCacheForType: function(e) {
			var t = ba(Ea), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return ba(Ea).controller.signal;
		}
	}, Xu = typeof WeakMap == "function" ? WeakMap : Map, Zu = 0, Qu = null, Y = null, X = 0, $u = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return Zu & 2 && X !== 0 ? X & -X : B.T === null ? ht() : Ff();
	}
	function Md() {
		if (ld === 0) {
			if (!(X & 536870912) || G) {
				var e = $e;
				$e <<= 1, !($e & 3932160) && ($e = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = To.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Ip(fi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === Qu && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, X, ld, !1)), ct(e, n), (!(Zu & 2) || e !== Qu) && (e === Qu && (!(Zu & 2) && (sd |= n), ad === 4 && Rd(e, X, ld, !1)), Df(e));
	}
	function Fd(e, t, n) {
		if (Zu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || rt(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (rd && !l) {
								c.errorRecoveryDisabledLanes |= o, sd |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !td);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - Ie(), 10 < a)) {
					if (Rd(r, t, ld, !td), nt(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = vp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
			}
			break;
		} while (1);
		Df(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: hn
		}, Il = null, Uu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = rh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - Ie() : (a & 4194048) === a ? hd - Ie() : 0, m = th(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Lr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = it(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Je(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ut(e, n, t);
	}
	function zd() {
		return Zu & 6 ? !0 : (Of(0, !1), !1);
	}
	function Bd() {
		if (Y !== null) {
			if ($u === 0) var e = Y.return;
			else e = Y, fa = da = null, J(e), $a = null, eo = 0, e = Y;
			for (; e !== null;) gl(e.alternate, e), e = e.return;
			Y = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, yp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), Qu = e, Y = n = ki(e.current, null), X = t, $u = 0, ed = null, td = !1, nd = rt(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = it(e, t), yi(), n;
	}
	function Hd(e, t) {
		q = null, B.H = lc, t === Wa || t === Ka ? (t = Za(), $u = 3) : t === Ga ? (t = Za(), $u = 4) : $u = t === Dc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, Y === null && (ad = 1, xc(e, Li(t, e.current)));
	}
	function Ud() {
		var e = To.current;
		return e === null ? !0 : (X & 4194048) === X ? Eo === null : (X & 62914560) === X || X & 536870912 ? e === Eo : !1;
	}
	function Wd() {
		var e = B.H;
		return B.H = lc, e === null ? lc : e;
	}
	function Gd() {
		var e = B.A;
		return B.A = Yu, e;
	}
	function Kd() {
		ad = 4, td || (X & 4194048) !== X && To.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || Qu === null || Rd(Qu, X, ld, !1);
	}
	function qd(e, t, n) {
		var r = Zu;
		Zu |= 2;
		var i = Wd(), a = Gd();
		(Qu !== e || X !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if ($u !== 0 && Y !== null) {
					var s = Y, c = ed;
					switch ($u) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							To.current === null && (t = !0);
							var l = $u;
							if ($u = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = $u, $u = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, fa = da = null, Zu = r, B.H = i, B.A = a, Y === null && (Qu = null, X = 0, yi()), o;
	}
	function Jd() {
		for (; Y !== null;) Zd(Y);
	}
	function Yd(e, t) {
		var n = Zu;
		Zu |= 2;
		var r = Wd(), a = Gd();
		Qu !== e || X !== t ? (_d = null, gd = Ie() + 500, Vd(e, t)) : nd = rt(e, t);
		a: do
			try {
				if ($u !== 0 && Y !== null) {
					t = Y;
					var o = ed;
					b: switch ($u) {
						case 1:
							$u = 0, ed = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (qa(o)) {
								$u = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								$u !== 2 && $u !== 9 || Qu !== e || ($u = 7), Df(e);
							}, o.then(t, t);
							break a;
						case 3:
							$u = 7;
							break a;
						case 4:
							$u = 5;
							break a;
						case 7:
							qa(o) ? ($u = 0, ed = null, Qd(t)) : ($u = 0, ed = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Y.tag) {
								case 26: s = Y.memoizedState;
								case 5:
								case 27:
									var c = Y;
									if (s ? Xm(s) : c.stateNode.complete) {
										$u = 0, ed = null;
										var l = c.sibling;
										if (l !== null) Y = l;
										else {
											var u = c.return;
											u === null ? Y = null : (Y = u, ef(u));
										}
										break b;
									}
							}
							$u = 0, ed = null, $d(e, t, o, 5);
							break;
						case 6:
							$u = 0, ed = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return fa = da = null, B.H = r, B.A = a, Zu = n, Y === null ? (Qu = null, X = 0, yi(), ad) : 0;
	}
	function Xd() {
		for (; Y !== null && !Pe();) Zd(Y);
	}
	function Zd(e) {
		var t = sl(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : Y = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Vc(n, t, t.pendingProps, t.type, void 0, X);
				break;
			case 11:
				t = Vc(n, t, t.pendingProps, t.type.render, t.ref, X);
				break;
			case 5:
				J(t);
				var r = t;
				r === Qi && (G ? (aa(r), r.tag === 5 && r.stateNode != null && ($i = r.stateNode)) : (aa(r), G = !0));
			default: gl(n, t), t = Y = Ai(t, id), t = sl(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : Y = t;
	}
	function $d(e, t, n, r) {
		fa = da = null, J(t), $a = null, eo = 0;
		var i = t.return;
		try {
			if (Ec(e, i, t, n, X)) {
				ad = 1, xc(e, Li(n, e.current)), Y = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Y = i, t;
			ad = 1, xc(e, Li(n, e.current)), Y = null;
			return;
		}
		t.flags & 32768 ? (G || r === 1 ? e = !0 : nd || X & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = To.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = ml(t.alternate, t, id);
			if (n !== null) {
				Y = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Y = t;
				return;
			}
			Y = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = hl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Y = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Y = e;
				return;
			}
			Y = e = n;
		} while (e !== null);
		ad = 6, Y = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (Zu & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Qu && (Y = Qu = null, X = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= vi, lt(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = ja(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, bf(Be, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Fl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = B.T, B.T = null, i = V.p, V.p = 2, a = Zu, Zu |= 4;
			try {
				uu(e, t, n);
			} finally {
				Zu = a, V.p = i, B.T = r;
			}
		}
		yd = 1, Fl ? Ed = Pp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, ju(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = B.T, B.T = null;
				var i = V.p;
				V.p = 2;
				var a = Zu;
				Zu |= 4;
				try {
					su = cu = !1, Du(t, e, n), n = up;
					var o = Hr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && W(s.ownerDocument.documentElement, s)) {
						if (c !== null && Ur(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Vr(s, h), v = Vr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					_h = !!lp, up = lp = null;
				} finally {
					Zu = a, V.p = i, B.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = B.T, B.T = null;
				var r = V.p;
				V.p = 2;
				var i = Zu;
				Zu |= 4;
				try {
					fu(e, t.alternate, t);
				} finally {
					Zu = i, V.p = r, B.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, Fe();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), mt(r), n = n.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function") try {
				Ke.onCommitFiberRoot(Ge, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = B.T, a = V.p, V.p = 2, B.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					B.T = n, V.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Df(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Of(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Oa(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = mt(Sd), r = B.T, a = V.p;
		try {
			V.p = 32 > n ? 32 : n, B.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, Zu & 6) throw Error(i(331));
			var c = Zu;
			if (Zu |= 4, Ku(o.current), Ru(o, o.current, s, n), Zu = c, Of(0, !1), Ke && typeof Ke.onPostCommitFiberRoot == "function") try {
				Ke.onPostCommitFiberRoot(Ge, o);
			} catch {}
			return !0;
		} finally {
			V.p = a, B.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Li(n, t), t = Cc(e.stateNode, t, 2), e = fo(e, t, 2), e !== null && (ct(e, 2), Df(e));
	}
	function mf(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Li(n, e), n = wc(2), r = fo(t, n, 2), r !== null && (Tc(n, r, t, e), ct(r, 2), Df(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Xu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = gf.bind(null, e, t, n), t.then(e, e));
	}
	function gf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Qu === e && (X & n) === n && (ad === 4 || ad === 3 && (X & 62914560) === X && 300 > Ie() - md ? Zu & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === X && (ud = 0)), Df(e);
	}
	function _f(e, t) {
		t === 0 && (t = ot()), e = Si(e, t), e !== null && (ct(e, t), Df(e));
	}
	function vf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), _f(e, n);
	}
	function yf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), _f(e, n);
	}
	function bf(e, t) {
		return Me(e, t);
	}
	var xf = null, Sf = null, Cf = !1, wf = !1, Tf = !1, Ef = 0;
	function Df(e) {
		e !== Sf && e.next === null && (Sf === null ? xf = Sf = e : Sf = Sf.next = e), wf = !0, Cf || (Cf = !0, Pf());
	}
	function Of(e, t) {
		if (!Tf && wf) {
			Tf = !0;
			do
				for (var n = !1, r = xf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Je(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Nf(r, a));
						} else a = X, a = nt(r, r === Qu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || rt(r, a) || (n = !0, Nf(r, a));
					}
					r = r.next;
				}
			while (n);
			Tf = !1;
		}
	}
	function kf() {
		Af();
	}
	function Af() {
		wf = Cf = !1;
		var e = 0;
		Ef !== 0 && _p() && (e = Ef);
		for (var t = Ie(), n = null, r = xf; r !== null;) {
			var i = r.next, a = jf(r, t);
			a === 0 ? (r.next = null, n === null ? xf = i : n.next = i, i === null && (Sf = n)) : (n = r, (e !== 0 || a & 3) && (wf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Of(e, !1), Ef !== 0 && (Ef = 0);
	}
	function jf(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Je(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = at(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Qu, n = X, n = nt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && ($u === 2 || $u === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ne(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || rt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ne(r), mt(n)) {
				case 2:
				case 8:
					n = ze;
					break;
				case 32:
					n = Be;
					break;
				case 268435456:
					n = He;
					break;
				default: n = Be;
			}
			return r = Mf.bind(null, e), n = Me(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ne(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Mf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = X;
		return r = nt(e, e === Qu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), jf(e, Ie()), e.callbackNode != null && e.callbackNode === n ? Mf.bind(null, e) : null);
	}
	function Nf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Pf() {
		Sp(function() {
			Zu & 6 ? Me(Re, kf) : Af();
		});
	}
	function Ff() {
		if (Ef === 0) {
			var e = Pa;
			e === 0 && (e = Qe, Qe <<= 1, !(Qe & 261888) && (Qe = 256)), Ef = e;
		}
		return Ef;
	}
	function If(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mn(e);
	}
	function Lf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = If((i[yt] || null).action), o = r.submitter;
			o && (t = (t = o[yt] || null) ? If(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Fn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Ef !== 0) {
								var e = new FormData(i, o);
								Ys(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Ys(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Rf = 0; Rf < li.length; Rf++) {
		var zf = li[Rf];
		ui(zf.toLowerCase(), "on" + (zf[0].toUpperCase() + zf.slice(1)));
	}
	ui(ti, "onAnimationEnd"), ui(ni, "onAnimationIteration"), ui(ri, "onAnimationStart"), ui("dblclick", "onDoubleClick"), ui("focusin", "onFocus"), ui("focusout", "onBlur"), ui(ii, "onTransitionRun"), ui(ai, "onTransitionStart"), ui(oi, "onTransitionCancel"), ui(si, "onTransitionEnd"), Lt("onMouseEnter", ["mouseout", "mouseover"]), Lt("onMouseLeave", ["mouseout", "mouseover"]), Lt("onPointerEnter", ["pointerout", "pointerover"]), Lt("onPointerLeave", ["pointerout", "pointerover"]), It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), It("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Bf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bf));
	function Hf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						hi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						hi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Z(e, t) {
		var n = t[xt];
		n === void 0 && (n = t[xt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Kf(t, e, 2, !1), n.add(r));
	}
	function Uf(e, t, n) {
		var r = 0;
		t && (r |= 4), Kf(n, e, r, t);
	}
	var Wf = "_reactListening" + Math.random().toString(36).slice(2);
	function Gf(e) {
		if (!e[Wf]) {
			e[Wf] = !0, Pt.forEach(function(t) {
				t !== "selectionchange" && (Vf.has(t) || Uf(t, !1, e), Uf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Wf] || (t[Wf] = !0, Uf("selectionchange", !1, t));
		}
	}
	function Kf(e, t, n, r) {
		switch (wh(t)) {
			case 2:
				var i = vh;
				break;
			case 8:
				i = yh;
				break;
			default: i = bh;
		}
		n = i.bind(null, t, n, e), i = void 0, !wn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function qf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Ot(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		xn(function() {
			var r = a, i = _n(n), s = [];
			a: {
				var c = ci.get(e);
				if (c !== void 0) {
					var l = Fn, u = e;
					switch (e) {
						case "keypress": if (An(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = $n;
							break;
						case "focusin":
							u = "focus", l = Wn;
							break;
						case "focusout":
							u = "blur", l = Wn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Wn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Hn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Un;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = nr;
							break;
						case ti:
						case ni:
						case ri:
							l = Gn;
							break;
						case si:
							l = rr;
							break;
						case "scroll":
						case "scrollend":
							l = Ln;
							break;
						case "wheel":
							l = ir;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Kn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = er;
							break;
						case "submit":
							l = tr;
							break;
						case "toggle":
						case "beforetoggle": l = ar;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Sn(m, p), g != null && d.push(Jf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== gn && (u = n.relatedTarget || n.fromElement) && (Ot(u) || u[bt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ot(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Hn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = er, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : At(c), h = l == null ? u : At(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Ot(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Xf) : null, c !== null && Zf(s, u, c, d, !1), l !== null && f !== null && Zf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? At(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Tr;
					else if (yr(c)) {
						if (Er) _ = Fr;
						else {
							_ = Nr;
							var v = Mr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && dn(r.elementType) && (_ = Tr) : _ = Pr;
					if (_ &&= _(e, r)) {
						br(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? At(r) : window, e) {
					case "focusin":
						(yr(v) || v.contentEditable === "true") && (Gr = v, Kr = r, qr = null);
						break;
					case "focusout":
						qr = Kr = Gr = null;
						break;
					case "mousedown":
						Jr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Jr = !1, Yr(s, n, i);
						break;
					case "selectionchange": if (Wr) break;
					case "keydown":
					case "keyup": Yr(s, n, i);
				}
				var y;
				if (sr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else hr ? pr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (ur && n.locale !== "ko" && (hr || b !== "onCompositionStart" ? b === "onCompositionEnd" && hr && (y = kn()) : (En = i, Dn = "value" in En ? En.value : En.textContent, hr = !0)), v = Yf(r, b), 0 < v.length && (b = new qn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = mr(n), y !== null && (b.data = y)))), (y = lr ? gr(e, n) : _r(e, n)) && (b = Yf(r, "onBeforeInput"), 0 < b.length && (v = new qn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Lf(s, e, r, n, i);
			}
			Hf(s, t);
		});
	}
	function Jf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Yf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Sn(e, n), i != null && r.unshift(Jf(e, i, a)), i = Sn(e, t), i != null && r.push(Jf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Xf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Zf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Sn(n, a), l != null && o.unshift(Jf(n, l, c))) : i || (l = Sn(n, a), l != null && o.push(Jf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Qf = /\r\n?/g, $f = /\u0000|\uFFFD/g;
	function ep(e) {
		return (typeof e == "string" ? e : "" + e).replace(Qf, "\n").replace($f, "");
	}
	function tp(e, t) {
		return t = ep(t), ep(e) === t;
	}
	function np(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && sn(e, "" + r);
				else return;
				break;
			case "className":
				Gt(e, "class", r);
				break;
			case "tabIndex":
				Gt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Gt(e, n, r);
				break;
			case "style":
				un(e, r, o);
				return;
			case "data": if (t !== "object") {
				Gt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && np(e, t, "name", a.name, a, null), np(e, t, "formEncType", a.formEncType, a, null), np(e, t, "formMethod", a.formMethod, a, null), np(e, t, "formTarget", a.formTarget, a, null)) : (np(e, t, "encType", a.encType, a, null), np(e, t, "method", a.method, a, null), np(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = mn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "onScroll":
				r != null && Z("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Z("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = mn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Z("beforetoggle", e), Z("toggle", e), Wt(e, "popover", r);
				break;
			case "xlinkActuate":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Wt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = fn.get(n) || n, Wt(e, n, r);
			else return;
		}
		Ht = !0;
	}
	function rp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				un(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") sn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") sn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Z("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Z("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = hn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Ft.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[yt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					Ht = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Wt(e, n, r);
				}
				return;
		}
		Ht = !0;
	}
	function ip(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Z("error", e), Z("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: np(e, t, o, s, n, null);
					}
				}
				a && np(e, t, "srcSet", n.srcSet, n, null), r && np(e, t, "src", n.src, n, null);
				return;
			case "input":
				Z("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: np(e, t, r, d, n, null);
					}
				}
				tn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Z("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: np(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && rn(e, !!r, n, !0) : rn(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Z("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: np(e, t, s, c, n, null);
				}
				on(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: np(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Z("beforetoggle", e), Z("toggle", e), Z("cancel", e), Z("close", e);
				break;
			case "iframe":
			case "object":
				Z("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Bf.length; r++) Z(Bf[r], e);
				break;
			case "image":
				Z("error", e), Z("load", e);
				break;
			case "details":
				Z("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Z("error", e), Z("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: np(e, t, u, r, n, null);
				}
				return;
			default: if (dn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && rp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && np(e, t, c, r, n, null));
	}
	var ap = {};
	function op(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || np(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (Ht = !0), o = m;
							break;
						case "name":
							m !== f && (Ht = !0), a = m;
							break;
						case "checked":
							m !== f && (Ht = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (Ht = !0), d = m;
							break;
						case "value":
							m !== f && (Ht = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (Ht = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && np(e, t, p, m, r, f);
					}
				}
				en(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || np(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (Ht = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (Ht = !0), c = o;
						break;
					case "multiple": o !== l && (Ht = !0), s = o;
					default: o !== l && np(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? rn(e, !!n, n ? [] : "", !1) : rn(e, !!n, t, !0)) : rn(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: np(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (Ht = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (Ht = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && np(e, t, s, a, r, o);
				}
				an(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: np(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (Ht = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: np(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && np(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: np(e, t, u, p, r, m);
				}
				return;
			default: if (dn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && rp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || rp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && np(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || np(e, t, f, p, r, m);
	}
	function sp(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function cp() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && sp(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && sp(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var lp = null, up = null;
	function dp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function fp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function pp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function mp(e, t, n, r) {
		return n = dp(n).createElement(e), n[vt] = r, n[yt] = t, ip(n, e, t), Mt(n), n;
	}
	function hp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var gp = null;
	function _p() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== gp && (gp = e, !0) : (gp = null, !1);
	}
	var vp = typeof setTimeout == "function" ? setTimeout : void 0, yp = typeof clearTimeout == "function" ? clearTimeout : void 0, bp = typeof Promise == "function" ? Promise : void 0, xp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : vp, Sp = typeof queueMicrotask == "function" ? queueMicrotask : bp === void 0 ? vp : function(e) {
		return bp.resolve(null).then(e).catch(Cp);
	};
	function Cp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function wp(e) {
		return e === "head";
	}
	function Tp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") vm(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, vm(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Tt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && vm(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function Ep(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Dp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Op(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function kp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Ap(e) {
		return kp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function jp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return kp(t, n, e);
	}
	function Mp(e) {
		return e.documentElement.clientHeight;
	}
	function Np(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Pp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Mp(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Zm(f), u > eh) {
									s.length = o;
									break;
								}
								f = new Promise(Np.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Fp(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Fp.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Fp.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Fp.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Ip(e) {
		return {
			name: e,
			group: new Fp("group", e),
			imagePair: new Fp("image-pair", e),
			old: new Fp("old", e),
			new: new Fp("new", e)
		};
	}
	function Lp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Lp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Hp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Bp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), m(this._fragmentFiber.child, !1, Rp, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Rp(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Lp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Hp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Bp(i.optionsOrUseCapture), m(this._fragmentFiber.child, !1, zp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function zp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Bp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function Vp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Hp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = Vp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && Vp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Lp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Bp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Bp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Lp.prototype.focus = function(e) {
		m(this._fragmentFiber.child, !0, Up, e, void 0, void 0);
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), hm(e, t));
	}
	Lp.prototype.focusLast = function(e) {
		var t = [];
		m(this._fragmentFiber.child, !0, Wp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Up(t[n], e); n--);
	};
	function Wp(e, t) {
		return t.push(e), !1;
	}
	Lp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = dp(e).activeElement, e !== null && m(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Lp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), m(this._fragmentFiber.child, !1, Kp, e, void 0, void 0);
	};
	function Kp(e, t) {
		return e.tag !== 6 && (e = b(e), t.observe(e), !1);
	}
	Lp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), m(this._fragmentFiber.child, !1, qp, e, void 0, void 0);
			for (var n = t = 0; n < Jp.length; n++) {
				var r = Jp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Jp[t++] = r;
			}
			Jp.length = t;
		}
	};
	function qp(e, t) {
		return e.tag !== 6 && (e = b(e), t.unobserve(e), !1);
	}
	var Jp = [], Yp = !1;
	function Xp(e, t, n) {
		Jp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), Yp || (Yp = !0, gm(function() {
			Yp = !1;
			var e = Jp;
			Jp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Lp.prototype.getClientRects = function() {
		var e = [];
		return m(this._fragmentFiber.child, !1, Zp, e, void 0, void 0), e;
	};
	function Zp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Lp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Lp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		m(this._fragmentFiber.child, !1, Wp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Qp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Qp(e, t, n, r, i) {
		var a = Ot(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (m(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (m(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function $p(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Lp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		m(this._fragmentFiber.child, !1, Wp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), $p(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), $p(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function em(e, t) {
		return e = b(e), tm(e, t), !1;
	}
	function tm(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function nm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Bp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Jp.length; i++) {
				var a = Jp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Jp[r++] = a);
			}
			Jp.length = r, n.observe(e);
		}), tm(e, t));
	}
	function rm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Bp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Xp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function im(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					im(n), Dt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function am(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Tt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = dm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function om(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dm(e.nextSibling), e === null)) return null;
		return e;
	}
	function sm(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dm(e.nextSibling), e === null)) return null;
		return e;
	}
	function cm(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function lm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function um(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function dm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var fm = null;
	function pm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return dm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function mm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function hm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function gm(e) {
		xp(function() {
			xp(function(t) {
				return e(t);
			});
		});
	}
	function Q(e, t, n) {
		switch (t = dp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function _m(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && np(e, t, r, null, ap, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === hn && (e.onclick = null), Dt(e);
	}
	function vm(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Dt(e);
	}
	var ym = /* @__PURE__ */ new Map(), bm = /* @__PURE__ */ new Set();
	function xm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Sm = V.d;
	V.d = {
		f: Cm,
		r: wm,
		D: Dm,
		C: Om,
		L: km,
		m: Am,
		X: Mm,
		S: jm,
		M: Nm
	};
	function Cm() {
		var e = Sm.f(), t = zd();
		return e || t;
	}
	function wm(e) {
		var t = kt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Zs(t) : Sm.r(e);
	}
	var Tm = typeof document > "u" ? null : document;
	function Em(e, t, n) {
		var r = Tm;
		if (r && typeof t == "string" && t) {
			var i = $t(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), bm.has(i) || (bm.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), ip(t, "link", e), Mt(t), r.head.appendChild(t)));
		}
	}
	function Dm(e) {
		Sm.D(e), Em("dns-prefetch", e, null);
	}
	function Om(e, t) {
		Sm.C(e, t), Em("preconnect", e, t);
	}
	function km(e, t, n) {
		Sm.L(e, t, n);
		var r = Tm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + $t(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + $t(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + $t(n.imageSizes) + "\"]")) : i += "[href=\"" + $t(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Fm(e);
					break;
				case "script": a = zm(e);
			}
			if (!(ym.has(a) || (e = D({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), ym.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Im(a)) || t === "script" && r.querySelector(Bm(a))))) {
				var o = r.createElement("link");
				ip(o, "link", e), t === "style" && (o[Et] = !0, o.onload = o.onerror = function() {
					Nt(o);
				}), Mt(o), r.head.appendChild(o);
			}
		}
	}
	function Am(e, t) {
		Sm.m(e, t);
		var n = Tm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + $t(r) + "\"][href=\"" + $t(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = zm(e);
			}
			if (!ym.has(a) && (e = D({
				rel: "modulepreload",
				href: e
			}, t), ym.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Bm(a))) return;
				}
				r = n.createElement("link"), ip(r, "link", e), Mt(r), n.head.appendChild(r);
			}
		}
	}
	function jm(e, t, n) {
		Sm.S(e, t, n);
		var r = Tm;
		if (r && e) {
			var i = jt(r).hoistableStyles, a = Fm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Im(a))) s.loading = 5;
				else {
					e = D({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = ym.get(a)) && Um(e, n);
					var c = o = r.createElement("link");
					Mt(c), ip(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Hm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Mm(e, t) {
		Sm.X(e, t);
		var n = Tm;
		if (n && e) {
			var r = jt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = ym.get(i)) && Wm(e, t), a = n.createElement("script"), Mt(a), ip(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t) {
		Sm.M(e, t);
		var n = Tm;
		if (n && e) {
			var r = jt(n).hoistableScripts, i = zm(e), a = r.get(i);
			a || (a = n.querySelector(Bm(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = ym.get(i)) && Wm(e, t), a = n.createElement("script"), Mt(a), ip(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Pm(e, t, n, r) {
		var a = (a = ve.current) ? xm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Fm(n.href), t = jt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Fm(n.href);
					var o = jt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Im(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = ym.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, ym.set(e, o)), Rm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = zm(n), t = jt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Fm(e) {
		return "href=\"" + $t(e) + "\"";
	}
	function Im(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Lm(e) {
		return D({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Rm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Et]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Et] = !0, t.onload = t.onerror = Nt.bind(null, t), ip(t, "link", n), Mt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function zm(e) {
		return "[src=\"" + $t(e) + "\"]";
	}
	function Bm(e) {
		return "script[async]" + e;
	}
	function Vm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + $t(n.href) + "\"]");
				if (r) return t.instance = r, Mt(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Mt(r), ip(r, "style", a), Hm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Fm(n.href);
				var o = e.querySelector(Im(a));
				if (o) return t.state.loading |= 4, t.instance = o, Mt(o), o;
				r = Lm(n), (a = ym.get(a)) && Um(r, a), o = (e.ownerDocument || e).createElement("link"), Mt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), ip(o, "link", r), t.state.loading |= 4, Hm(o, n.precedence, e), t.instance = o;
			case "script": return o = zm(n.src), (a = e.querySelector(Bm(o))) ? (t.instance = a, Mt(a), a) : (r = n, (a = ym.get(o)) && (r = D({}, n), Wm(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Mt(a), ip(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Hm(r, n.precedence, e));
		return t.instance;
	}
	function Hm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Wm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Gm = null;
	function Km(e, t, n) {
		if (Gm === null) {
			var r = /* @__PURE__ */ new Map(), i = Gm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Gm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Tt] || a[vt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function qm(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Jm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Ym(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Xm(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Zm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Qm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Zm(t), e.suspenseyImages.push(t)), e = ih.bind(e), t.decode().then(e, e));
	}
	function $m(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Fm(r.href), a = t.querySelector(Im(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = rh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Mt(a);
					return;
				}
				a = t.ownerDocument || t, r = Lm(r), (i = ym.get(i)) && Um(r, i), a = a.createElement("link"), Mt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), ip(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = rh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var eh = 0;
	function th(e, t) {
		return e.stylesheets && e.count === 0 && oh(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && oh(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && eh === 0 && (eh = 62500 * cp());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && oh(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > eh ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function nh(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) oh(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function rh() {
		this.count--, nh(this);
	}
	function ih() {
		this.imgCount--, nh(this);
	}
	var ah = null;
	function oh(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ah = /* @__PURE__ */ new Map(), t.forEach(sh, e), ah = null, rh.call(e));
	}
	function sh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ah.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ah.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = rh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var ch = {
		$$typeof: F,
		Provider: null,
		Consumer: null,
		_currentValue: de,
		_currentValue2: de,
		_threadCount: 0
	};
	function lh(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = st(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = st(0), this.hiddenUpdates = st(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function uh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new lh(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Di(3, null, null, t), e.current = a, a.stateNode = e, t = Da(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, co(a), e;
	}
	function dh(e) {
		return e ? (e = Ti, e) : Ti;
	}
	function fh(e, t, n, r, i, a) {
		i = dh(i), r.context === null ? r.context = i : r.pendingContext = i, r = uo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = fo(e, r, t), n !== null && (Pd(n, e, t), po(n, e, t));
	}
	function ph(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function mh(e, t) {
		ph(e, t), (e = e.alternate) && ph(e, t);
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Si(e, 67108864);
			t !== null && Pd(t, e, 67108864), mh(e, 67108864);
		}
	}
	function gh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = pt(t);
			var n = Si(e, t);
			n !== null && Pd(n, e, t), mh(e, t);
		}
	}
	var _h = !0;
	function vh(e, t, n, r) {
		var i = B.T;
		B.T = null;
		var a = V.p;
		try {
			V.p = 2, bh(e, t, n, r);
		} finally {
			V.p = a, B.T = i;
		}
	}
	function yh(e, t, n, r) {
		var i = B.T;
		B.T = null;
		var a = V.p;
		try {
			V.p = 8, bh(e, t, n, r);
		} finally {
			V.p = a, B.T = i;
		}
	}
	function bh(e, t, n, r) {
		if (_h) {
			var i = xh(r);
			if (i === null) qf(e, t, r, Sh, n), Nh(e, r);
			else if (Fh(i, e, t, n, r)) r.stopPropagation();
			else if (Nh(e, r), t & 4 && -1 < Mh.indexOf(e)) {
				for (; i !== null;) {
					var a = kt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = tt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Je(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Df(a), !(Zu & 6) && (gd = Ie() + 500, Of(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Si(a, 2), s !== null && Pd(s, a, 2), zd(), mh(a, 2);
					}
					if (a = xh(r), a === null && qf(e, t, r, Sh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else qf(e, t, r, null, n);
		}
	}
	function xh(e) {
		return e = _n(e), Ch(e);
	}
	var Sh = null;
	function Ch(e) {
		if (Sh = null, e = Ot(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return Sh = e, null;
	}
	function wh(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Le()) {
				case Re: return 2;
				case ze: return 8;
				case Be:
				case Ve: return 32;
				case He: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var Th = !1, Eh = null, Dh = null, Oh = null, kh = /* @__PURE__ */ new Map(), Ah = /* @__PURE__ */ new Map(), jh = [], Mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Nh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Eh = null;
				break;
			case "dragenter":
			case "dragleave":
				Dh = null;
				break;
			case "mouseover":
			case "mouseout":
				Oh = null;
				break;
			case "pointerover":
			case "pointerout":
				kh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Ah.delete(t.pointerId);
		}
	}
	function Ph(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = kt(t), t !== null && hh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Fh(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Eh = Ph(Eh, e, t, n, r, i), !0;
			case "dragenter": return Dh = Ph(Dh, e, t, n, r, i), !0;
			case "mouseover": return Oh = Ph(Oh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return kh.set(a, Ph(kh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Ah.set(a, Ph(Ah.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ih(e) {
		var t = Ot(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, gt(e.priority, function() {
							gh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, gt(e.priority, function() {
							gh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Lh(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = xh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				gn = r, n.target.dispatchEvent(r), gn = null;
			} else return t = kt(n), t !== null && hh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Rh(e, t, n) {
		Lh(e) && n.delete(t);
	}
	function zh() {
		Th = !1, Eh !== null && Lh(Eh) && (Eh = null), Dh !== null && Lh(Dh) && (Dh = null), Oh !== null && Lh(Oh) && (Oh = null), kh.forEach(Rh), Ah.forEach(Rh);
	}
	function Bh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, Th || (Th = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, zh)));
	}
	var $ = null;
	function Vh(e) {
		$ !== e && ($ = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			$ === e && ($ = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Ch(r || n) === null) continue;
					break;
				}
				var a = kt(n);
				a !== null && (e.splice(t, 3), t -= 3, Ys(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return Bh(t, e);
		}
		Eh !== null && Bh(Eh, e), Dh !== null && Bh(Dh, e), Oh !== null && Bh(Oh, e), kh.forEach(t), Ah.forEach(t);
		for (var n = 0; n < jh.length; n++) {
			var r = jh[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < jh.length && (n = jh[0], n.blockedOn === null);) Ih(n), n.blockedOn === null && jh.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[yt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[yt] || null) s = o.formAction;
					else if (Ch(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		fh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			fh(e.current, 2, null, e, null, null), zd(), t[bt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ht();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < jh.length && t !== 0 && t < jh[n].priority; n++);
			jh.splice(n, 0, e), n === 0 && Ih(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	V.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : f(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: B,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			Ge = Jh.inject(qh), Ke = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = vc, s = yc, c = bc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = uh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[bt] = t.current, Gf(e), new Wh(t);
	};
})), _ = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = g();
})), v = /* @__PURE__ */ l(d(), 1), y = typeof window < "u" ? v.useLayoutEffect : v.useEffect, b = {}, x;
function S() {
	if (x) return b;
	x = 1, Object.defineProperty(b, "__esModule", { value: !0 }), b.styleq = void 0;
	var e = /* @__PURE__ */ new WeakMap(), t = "$$css";
	function n(n) {
		var r, i, a;
		return n != null && (r = n.disableCache === !0, i = n.disableMix === !0, a = n.transform), function() {
			for (var n = [], o = "", s = null, c = "", l = r ? null : e, u = Array(arguments.length), d = 0; d < arguments.length; d++) u[d] = arguments[d];
			for (; u.length > 0;) {
				var f = u.pop();
				if (f != null && f !== !1) {
					if (Array.isArray(f)) {
						for (var p = 0; p < f.length; p++) u.push(f[p]);
						continue;
					}
					var m = a == null ? f : a(f);
					if (m.$$css != null) {
						var h = "";
						if (l != null && l.has(m)) {
							var g = l.get(m);
							g != null && (h = g[0], c = g[2], n.push.apply(n, g[1]), l = g[3]);
						} else {
							var _ = [];
							for (var v in m) {
								var y = m[v];
								if (v === t) {
									var b = m[v];
									b !== !0 && (c = c ? b + "; " + c : b);
									continue;
								}
								typeof y == "string" || y === null ? n.includes(v) || (n.push(v), l != null && _.push(v), typeof y == "string" && (h += h ? " " + y : y)) : console.error(`styleq: ${v} typeof ${String(y)} is not "string" or "null".`);
							}
							if (l != null) {
								var x = /* @__PURE__ */ new WeakMap();
								l.set(m, [
									h,
									_,
									c,
									x
								]), l = x;
							}
						}
						h && (o = o ? h + " " + o : h);
					} else if (i) s ??= {}, s = Object.assign({}, m, s);
					else {
						var S = null;
						for (var C in m) {
							var w = m[C];
							w !== void 0 && (n.includes(C) || (w != null && (s ??= {}, S ??= {}, S[C] = w), n.push(C), l = null));
						}
						S != null && (s = Object.assign(S, s));
					}
				}
			}
			return [
				o,
				s,
				c
			];
		};
	}
	var r = b.styleq = n();
	return r.factory = n, b;
}
var C = /*@__PURE__*/ S();
function w(...e) {
	let [t, n, r] = C.styleq(e), i = {};
	return t != null && t !== "" && (i.className = t), n != null && Object.keys(n).length > 0 && (i.style = n), r != null && r !== "" && (i["data-style-src"] = r), i;
}
Object.freeze({});
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/tokens.stylex.js
var T = {
	"--color-accent": "light-dark(#0064E0, #2694FE)",
	"--color-accent-muted": "light-dark(#0082FB33, #0082FB3F)",
	"--color-on-accent": "light-dark(#FFFFFF, #FFFFFF)",
	"--color-neutral": "light-dark(rgba(5, 54, 89, 0.1), rgba(223, 226, 229, 0.2))",
	"--color-background-surface": "light-dark(#FFFFFF, #1F1F22)",
	"--color-background-body": "light-dark(#F1F4F7, #111112)",
	"--color-overlay": "light-dark(#01122866, #11111299)",
	"--color-overlay-hover": "light-dark(#0536590C, #FFFFFF0C)",
	"--color-overlay-pressed": "light-dark(#05365919, #FFFFFF19)",
	"--color-background-muted": "light-dark(#0536590C, #1111127F)",
	"--color-text-primary": "light-dark(#0A1317, #DFE2E5)",
	"--color-text-secondary": "light-dark(#4E606F, #AAAFB5)",
	"--color-text-disabled": "light-dark(#A4B0BC, #6F747C)",
	"--color-text-accent": "light-dark(#0064E0, #3E9EFB)",
	"--color-on-dark": "light-dark(#FFFFFF, #FFFFFF)",
	"--color-on-light": "light-dark(#000000, #000000)",
	"--color-icon-accent": "light-dark(#0064E0, #2694FE)",
	"--color-icon-primary": "light-dark(#0A1317, #DFE2E5)",
	"--color-icon-secondary": "light-dark(#4E606F, #AAAFB5)",
	"--color-icon-disabled": "light-dark(#A4B0BC, #6F747C)",
	"--color-background-card": "light-dark(#FFFFFF, #1F1F22)",
	"--color-background-popover": "light-dark(#FFFFFF, #28292C)",
	"--color-background-inverted": "light-dark(#0A1317, #FFFFFF)",
	"--color-background-error-inverted": "light-dark(#AA071E, #E3193B)",
	"--color-success": "light-dark(#0D8626, #0D8626)",
	"--color-success-muted": "light-dark(#0B991F33, #0B991F3F)",
	"--color-on-success": "light-dark(#FFFFFF, #FFFFFF)",
	"--color-error": "light-dark(#E3193B, #F5394F)",
	"--color-error-muted": "light-dark(#E3193B33, #F5394F3F)",
	"--color-on-error": "light-dark(#FFFFFF, #FFFFFF)",
	"--color-warning": "light-dark(#E9AF08, #F2C00B)",
	"--color-warning-muted": "light-dark(#E2A40033, #E2A4003F)",
	"--color-on-warning": "light-dark(#0A1317, #0A1317)",
	"--color-border": "light-dark(#05365919, #F2F4F619)",
	"--color-border-emphasized": "light-dark(#CCD3DB, #494D53)",
	"--color-skeleton": "light-dark(#CCD3DB, #5A5E66)",
	"--color-track": "light-dark(#CCD3DB, #5A5E66)",
	"--color-shadow": "light-dark(rgba(5, 54, 89, 0.1), rgba(0, 0, 0, 0.3))",
	"--color-tint-hover": "light-dark(black, white)",
	"--color-background-blue": "light-dark(#0171E333, #0171E333)",
	"--color-border-blue": "light-dark(#0064E0, #2694FE)",
	"--color-icon-blue": "light-dark(#0064E0, #2694FE)",
	"--color-text-blue": "light-dark(#042F97, #AFD7FF)",
	"--color-background-cyan": "light-dark(#03A7D733, #03A7D733)",
	"--color-border-cyan": "light-dark(#089DD0, #0171A4)",
	"--color-icon-cyan": "light-dark(#00ACC1, #26C6DA)",
	"--color-text-cyan": "light-dark(#014975, #A1EEF9)",
	"--color-background-gray": "light-dark(#0A131733, #666A724C)",
	"--color-border-gray": "light-dark(#647685, #748695)",
	"--color-icon-gray": "light-dark(#4E606F, #AAAFB5)",
	"--color-text-gray": "light-dark(#0A1317, #E7EAED)",
	"--color-background-green": "light-dark(#24BB5E33, #24BB5E33)",
	"--color-border-green": "light-dark(#0D8626, #0B991F)",
	"--color-icon-green": "light-dark(#0D8626, #26A756)",
	"--color-text-green": "light-dark(#09441F, #A5F690)",
	"--color-background-orange": "light-dark(#F2790233, #F2790233)",
	"--color-border-orange": "light-dark(#EB6E00, #B34A01)",
	"--color-icon-orange": "light-dark(#E9690B, #FB8C00)",
	"--color-text-orange": "light-dark(#6B2203, #FDB876)",
	"--color-background-pink": "light-dark(#E638B333, #E638B333)",
	"--color-border-pink": "light-dark(#F351C0, #C02294)",
	"--color-icon-pink": "light-dark(#C2185B, #EC407A)",
	"--color-text-pink": "light-dark(#650053, #FEADE3)",
	"--color-background-purple": "light-dark(#7952FF33, #7952FF33)",
	"--color-border-purple": "light-dark(#9081FF, #7340FE)",
	"--color-icon-purple": "light-dark(#5B08D8, #7952FF)",
	"--color-text-purple": "light-dark(#3E0697, #B3B0FE)",
	"--color-background-red": "light-dark(#E3193B33, #E3193B33)",
	"--color-border-red": "light-dark(#E3193B, #F5394F)",
	"--color-icon-red": "light-dark(#D31130, #E3193B)",
	"--color-text-red": "light-dark(#7B0210, #FFB2B8)",
	"--color-background-teal": "light-dark(#0DB7AF33, #0DB7AF33)",
	"--color-border-teal": "light-dark(#08A3A3, #08767D)",
	"--color-icon-teal": "light-dark(#009688, #26A69A)",
	"--color-text-teal": "light-dark(#083943, #40DCCD)",
	"--color-background-yellow": "light-dark(#E2A40033, #E2A40033)",
	"--color-border-yellow": "light-dark(#C58600, #B47700)",
	"--color-icon-yellow": "light-dark(#FBC02D, #FFEE58)",
	"--color-text-yellow": "light-dark(#753F07, #FBCE03)"
}, E = {
	"--color-accent": "var(--color-accent)",
	"--color-accent-muted": "var(--color-accent-muted)",
	"--color-on-accent": "var(--color-on-accent)",
	"--color-neutral": "var(--color-neutral)",
	"--color-background-surface": "var(--color-background-surface)",
	"--color-background-body": "var(--color-background-body)",
	"--color-overlay": "var(--color-overlay)",
	"--color-overlay-hover": "var(--color-overlay-hover)",
	"--color-overlay-pressed": "var(--color-overlay-pressed)",
	"--color-background-muted": "var(--color-background-muted)",
	"--color-text-primary": "var(--color-text-primary)",
	"--color-text-secondary": "var(--color-text-secondary)",
	"--color-text-disabled": "var(--color-text-disabled)",
	"--color-text-accent": "var(--color-text-accent)",
	"--color-on-dark": "var(--color-on-dark)",
	"--color-on-light": "var(--color-on-light)",
	"--color-icon-accent": "var(--color-icon-accent)",
	"--color-icon-primary": "var(--color-icon-primary)",
	"--color-icon-secondary": "var(--color-icon-secondary)",
	"--color-icon-disabled": "var(--color-icon-disabled)",
	"--color-background-card": "var(--color-background-card)",
	"--color-background-popover": "var(--color-background-popover)",
	"--color-background-inverted": "var(--color-background-inverted)",
	"--color-background-error-inverted": "var(--color-background-error-inverted)",
	"--color-success": "var(--color-success)",
	"--color-success-muted": "var(--color-success-muted)",
	"--color-on-success": "var(--color-on-success)",
	"--color-error": "var(--color-error)",
	"--color-error-muted": "var(--color-error-muted)",
	"--color-on-error": "var(--color-on-error)",
	"--color-warning": "var(--color-warning)",
	"--color-warning-muted": "var(--color-warning-muted)",
	"--color-on-warning": "var(--color-on-warning)",
	"--color-border": "var(--color-border)",
	"--color-border-emphasized": "var(--color-border-emphasized)",
	"--color-skeleton": "var(--color-skeleton)",
	"--color-track": "var(--color-track)",
	"--color-shadow": "var(--color-shadow)",
	"--color-tint-hover": "var(--color-tint-hover)",
	"--color-background-blue": "var(--color-background-blue)",
	"--color-border-blue": "var(--color-border-blue)",
	"--color-icon-blue": "var(--color-icon-blue)",
	"--color-text-blue": "var(--color-text-blue)",
	"--color-background-cyan": "var(--color-background-cyan)",
	"--color-border-cyan": "var(--color-border-cyan)",
	"--color-icon-cyan": "var(--color-icon-cyan)",
	"--color-text-cyan": "var(--color-text-cyan)",
	"--color-background-gray": "var(--color-background-gray)",
	"--color-border-gray": "var(--color-border-gray)",
	"--color-icon-gray": "var(--color-icon-gray)",
	"--color-text-gray": "var(--color-text-gray)",
	"--color-background-green": "var(--color-background-green)",
	"--color-border-green": "var(--color-border-green)",
	"--color-icon-green": "var(--color-icon-green)",
	"--color-text-green": "var(--color-text-green)",
	"--color-background-orange": "var(--color-background-orange)",
	"--color-border-orange": "var(--color-border-orange)",
	"--color-icon-orange": "var(--color-icon-orange)",
	"--color-text-orange": "var(--color-text-orange)",
	"--color-background-pink": "var(--color-background-pink)",
	"--color-border-pink": "var(--color-border-pink)",
	"--color-icon-pink": "var(--color-icon-pink)",
	"--color-text-pink": "var(--color-text-pink)",
	"--color-background-purple": "var(--color-background-purple)",
	"--color-border-purple": "var(--color-border-purple)",
	"--color-icon-purple": "var(--color-icon-purple)",
	"--color-text-purple": "var(--color-text-purple)",
	"--color-background-red": "var(--color-background-red)",
	"--color-border-red": "var(--color-border-red)",
	"--color-icon-red": "var(--color-icon-red)",
	"--color-text-red": "var(--color-text-red)",
	"--color-background-teal": "var(--color-background-teal)",
	"--color-border-teal": "var(--color-border-teal)",
	"--color-icon-teal": "var(--color-icon-teal)",
	"--color-text-teal": "var(--color-text-teal)",
	"--color-background-yellow": "var(--color-background-yellow)",
	"--color-border-yellow": "var(--color-border-yellow)",
	"--color-icon-yellow": "var(--color-icon-yellow)",
	"--color-text-yellow": "var(--color-text-yellow)",
	__varGroupHash__: "xj0fimd"
}, D = {
	"--spacing-0": "0px",
	"--spacing-0-5": "2px",
	"--spacing-1": "4px",
	"--spacing-1-5": "6px",
	"--spacing-2": "8px",
	"--spacing-3": "12px",
	"--spacing-4": "16px",
	"--spacing-5": "20px",
	"--spacing-6": "24px",
	"--spacing-7": "28px",
	"--spacing-8": "32px",
	"--spacing-9": "36px",
	"--spacing-10": "40px",
	"--spacing-11": "44px",
	"--spacing-12": "48px"
}, O = {
	"--spacing-0": "var(--spacing-0)",
	"--spacing-0-5": "var(--spacing-0-5)",
	"--spacing-1": "var(--spacing-1)",
	"--spacing-1-5": "var(--spacing-1-5)",
	"--spacing-2": "var(--spacing-2)",
	"--spacing-3": "var(--spacing-3)",
	"--spacing-4": "var(--spacing-4)",
	"--spacing-5": "var(--spacing-5)",
	"--spacing-6": "var(--spacing-6)",
	"--spacing-7": "var(--spacing-7)",
	"--spacing-8": "var(--spacing-8)",
	"--spacing-9": "var(--spacing-9)",
	"--spacing-10": "var(--spacing-10)",
	"--spacing-11": "var(--spacing-11)",
	"--spacing-12": "var(--spacing-12)",
	__varGroupHash__: "x1kvdh9l"
}, k = {
	"--size-element-sm": "28px",
	"--size-element-md": "32px",
	"--size-element-lg": "36px"
}, A = { "--border-width": "1px" }, j = {
	"--focus-outline-width": "2px",
	"--focus-outline-style": "solid",
	"--focus-outline-color": "var(--color-accent)",
	"--focus-outline-offset": "3px"
}, M = {
	"--focus-outline-width": "var(--focus-outline-width)",
	"--focus-outline-style": "var(--focus-outline-style)",
	"--focus-outline-color": "var(--focus-outline-color)",
	"--focus-outline-offset": "var(--focus-outline-offset)",
	__varGroupHash__: "xzxs3qz"
}, N = {
	"--radius-none": "0px",
	"--radius-inner": "4px",
	"--radius-element": "8px",
	"--radius-container": "12px",
	"--radius-page": "28px",
	"--radius-chat": "28px",
	"--radius-full": "9999px"
}, P = {
	"--shadow-low": "0px 1px 1px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), 0px 2px 8px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
	"--shadow-med": "0px 1px 2px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), 0px 2px 12px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
	"--shadow-high": "0px 2px 2px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), 0px 8px 24px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
	"--shadow-inset-hover": "inset 0px 0px 0px 2px light-dark(rgba(5, 54, 89, 0.15), rgba(223, 226, 229, 0.2))",
	"--shadow-inset-selected": "inset 0px 0px 0px 2px rgba(1, 113, 227, 0.5)",
	"--shadow-inset-success": "inset 0px 0px 0px 2px rgba(38, 167, 86, 0.3)",
	"--shadow-inset-warning": "inset 0px 0px 0px 2px rgba(226, 164, 0, 0.3)",
	"--shadow-inset-error": "inset 0px 0px 0px 2px rgba(227, 25, 59, 0.3)"
}, F = {
	"--duration-fast-min": "130ms",
	"--duration-fast": "175ms",
	"--duration-fast-max": "230ms",
	"--duration-medium-min": "310ms",
	"--duration-medium": "410ms",
	"--duration-medium-max": "550ms",
	"--duration-slow-min": "730ms",
	"--duration-slow": "975ms",
	"--duration-slow-max": "1300ms"
}, ee = {
	"--duration-fast-min": "var(--duration-fast-min)",
	"--duration-fast": "var(--duration-fast)",
	"--duration-fast-max": "var(--duration-fast-max)",
	"--duration-medium-min": "var(--duration-medium-min)",
	"--duration-medium": "var(--duration-medium)",
	"--duration-medium-max": "var(--duration-medium-max)",
	"--duration-slow-min": "var(--duration-slow-min)",
	"--duration-slow": "var(--duration-slow)",
	"--duration-slow-max": "var(--duration-slow-max)",
	__varGroupHash__: "x14lkjui"
}, I = { "--ease-standard": "cubic-bezier(0.24, 1, 0.4, 1)" }, te = {
	"--ease-standard": "var(--ease-standard)",
	__varGroupHash__: "xf09i69"
}, L = {
	"--font-family-body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
	"--font-family-code": "\"SF Mono\", Monaco, Consolas, monospace",
	"--font-family-heading": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
}, ne = {
	"--font-size-4xs": "0.375rem",
	"--font-size-3xs": "0.4375rem",
	"--font-size-2xs": "0.5rem",
	"--font-size-xs": "0.625rem",
	"--font-size-sm": "0.75rem",
	"--font-size-base": "0.875rem",
	"--font-size-lg": "1.0625rem",
	"--font-size-xl": "1.25rem",
	"--font-size-2xl": "1.5rem",
	"--font-size-3xl": "1.8125rem",
	"--font-size-4xl": "2.1875rem",
	"--font-size-5xl": "2.625rem"
}, R = {
	"--font-weight-normal": "400",
	"--font-weight-medium": "500",
	"--font-weight-semibold": "600",
	"--font-weight-bold": "700"
}, re = {
	"--text-heading-1-size": "var(--font-size-2xl)",
	"--text-heading-1-weight": "var(--font-weight-semibold)",
	"--text-heading-1-leading": "1.3333",
	"--text-heading-2-size": "var(--font-size-xl)",
	"--text-heading-2-weight": "var(--font-weight-semibold)",
	"--text-heading-2-leading": "1.4",
	"--text-heading-3-size": "var(--font-size-lg)",
	"--text-heading-3-weight": "var(--font-weight-semibold)",
	"--text-heading-3-leading": "1.4118",
	"--text-heading-4-size": "var(--font-size-base)",
	"--text-heading-4-weight": "var(--font-weight-semibold)",
	"--text-heading-4-leading": "1.4286",
	"--text-heading-5-size": "var(--font-size-sm)",
	"--text-heading-5-weight": "var(--font-weight-semibold)",
	"--text-heading-5-leading": "1.6667",
	"--text-heading-6-size": "var(--font-size-xs)",
	"--text-heading-6-weight": "var(--font-weight-semibold)",
	"--text-heading-6-leading": "1.6",
	"--text-body-size": "var(--font-size-base)",
	"--text-body-weight": "var(--font-weight-normal)",
	"--text-body-leading": "1.4286",
	"--text-large-size": "var(--font-size-lg)",
	"--text-large-weight": "var(--font-weight-semibold)",
	"--text-large-leading": "1.4118",
	"--text-label-size": "var(--font-size-base)",
	"--text-label-weight": "var(--font-weight-medium)",
	"--text-label-leading": "1.4286",
	"--text-code-size": "var(--font-size-base)",
	"--text-code-weight": "var(--font-weight-normal)",
	"--text-code-leading": "1.4286",
	"--text-supporting-size": "var(--font-size-sm)",
	"--text-supporting-weight": "var(--font-weight-normal)",
	"--text-supporting-leading": "1.6667",
	"--text-display-1-size": "var(--font-size-5xl)",
	"--text-display-1-weight": "var(--font-weight-normal)",
	"--text-display-1-leading": "1.2381",
	"--text-display-2-size": "var(--font-size-4xl)",
	"--text-display-2-weight": "var(--font-weight-normal)",
	"--text-display-2-leading": "1.2571",
	"--text-display-3-size": "var(--font-size-3xl)",
	"--text-display-3-weight": "var(--font-weight-normal)",
	"--text-display-3-leading": "1.2414"
};
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/mergeComponents.js
function ie(e, t) {
	if (!e && !t) return;
	if (!e) return t;
	if (!t) return e;
	let n = {};
	for (let [t, r] of Object.entries(e)) n[t] = { ...r };
	for (let [e, r] of Object.entries(t)) if (!n[e]) n[e] = { ...r };
	else for (let [t, i] of Object.entries(r)) n[e][t] = {
		...n[e][t],
		...i
	};
	return n;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/onMediaTokens.js
var ae = {
	"color-scheme": "dark",
	"--color-text-primary": "var(--color-on-dark)",
	"--color-icon-primary": "var(--color-on-dark)",
	"--color-accent": "var(--color-on-dark)"
}, oe = {
	"color-scheme": "light",
	"--color-text-primary": "var(--color-on-light)",
	"--color-icon-primary": "var(--color-on-light)",
	"--color-accent": "var(--color-on-light)"
};
function se(e) {
	return Array.isArray(e) ? `light-dark(${e[0]}, ${e[1]})` : e;
}
function ce(e, t, n) {
	let r = {
		...e === "dark" ? ae : oe,
		...n?.tokens
	};
	if (t?.tokens) for (let [e, n] of Object.entries(t.tokens)) n !== void 0 && (r[e] = se(n));
	return {
		tokens: r,
		components: ie(n?.components, t?.components)
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/expandTypeScale.js
var le = {
	[-5]: "--font-size-4xs",
	[-4]: "--font-size-3xs",
	[-3]: "--font-size-2xs",
	[-2]: "--font-size-xs",
	[-1]: "--font-size-sm",
	0: "--font-size-base",
	1: "--font-size-lg",
	2: "--font-size-xl",
	3: "--font-size-2xl",
	4: "--font-size-3xl",
	5: "--font-size-4xl",
	6: "--font-size-5xl"
}, ue = {
	1: 3,
	2: 2,
	3: 1,
	4: 0,
	5: -1,
	6: -2
}, z = {
	body: 0,
	large: 1,
	label: 0,
	code: 0,
	supporting: -1,
	"display-1": 6,
	"display-2": 5,
	"display-3": 4
}, B = {
	1: "var(--font-weight-semibold)",
	2: "var(--font-weight-semibold)",
	3: "var(--font-weight-semibold)",
	4: "var(--font-weight-semibold)",
	5: "var(--font-weight-semibold)",
	6: "var(--font-weight-semibold)"
}, V = {
	body: "var(--font-weight-normal)",
	large: "var(--font-weight-semibold)",
	label: "var(--font-weight-medium)",
	code: "var(--font-weight-normal)",
	supporting: "var(--font-weight-normal)",
	"display-1": "var(--font-weight-normal)",
	"display-2": "var(--font-weight-normal)",
	"display-3": "var(--font-weight-normal)"
};
function de(e, t, n) {
	return Math.round(e * t ** +n);
}
function fe(e) {
	return `${Math.round(e / 16 * 1e4) / 1e4}rem`;
}
function pe(e) {
	return e < 20 ? 1.5 : e < 32 ? 1.4 : 1.25;
}
function me(e) {
	let t = e * pe(e), n = Math.max(Math.round(t / 4) * 4, Math.ceil((e + 4) / 4) * 4);
	return Math.round(n / e * 1e4) / 1e4;
}
function H(e) {
	let { base: t, ratio: n, weights: r } = e, i = {}, a = {
		...B,
		...r?.heading
	}, o = {
		...V,
		...r?.text
	};
	for (let e = -5; e <= 6; e++) {
		let r = de(t, n, e);
		i[le[e]] = fe(r);
	}
	for (let [e, r] of Object.entries(ue)) {
		let o = Number(e), s = me(de(t, n, r));
		i[`--text-heading-${o}-size`] = `var(${le[r]})`, i[`--text-heading-${o}-weight`] = a[o], i[`--text-heading-${o}-leading`] = `${s}`;
	}
	for (let [e, r] of Object.entries(z)) {
		let a = me(de(t, n, r));
		i[`--text-${e}-size`] = `var(${le[r]})`, i[`--text-${e}-weight`] = o[e], i[`--text-${e}-leading`] = `${a}`;
	}
	return i;
}
var he = {
	body: "var(--font-family-body)",
	large: "var(--font-family-body)",
	label: "var(--font-family-body)",
	code: "var(--font-family-code)",
	supporting: "var(--font-family-body)",
	"display-1": "var(--font-family-heading)",
	"display-2": "var(--font-family-heading)",
	"display-3": "var(--font-family-heading)"
};
function ge(e) {
	let t = {}, n = {};
	for (let e of [
		1,
		2,
		3,
		4,
		5,
		6
	]) n[`level:${e}`] = {
		fontFamily: "var(--font-family-heading)",
		fontSize: `var(--text-heading-${e}-size)`,
		fontWeight: `var(--text-heading-${e}-weight)`,
		lineHeight: `var(--text-heading-${e}-leading)`
	};
	for (let e of [
		"display-1",
		"display-2",
		"display-3"
	]) n[`type:${e}`] = {
		fontFamily: "var(--font-family-heading)",
		fontSize: `var(--text-${e}-size)`,
		lineHeight: `var(--text-${e}-leading)`
	};
	t.heading = n;
	let r = {};
	for (let e of [
		"body",
		"large",
		"label",
		"code",
		"supporting",
		"display-1",
		"display-2",
		"display-3"
	]) r[`type:${e}`] = {
		fontFamily: he[e],
		fontSize: `var(--text-${e}-size)`,
		lineHeight: `var(--text-${e}-leading)`
	};
	return t.text = r, t;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/expandMotionScale.js
function _e(e) {
	return Math.round(e / 5) * 5;
}
function ve(e) {
	let { fast: t, medium: n, slow: r, ratio: i, easing: a } = e, o = {
		"--duration-fast-min": `${_e(t * i)}ms`,
		"--duration-fast": `${_e(t)}ms`,
		"--duration-fast-max": `${_e(t / i)}ms`,
		"--duration-medium-min": `${_e(n * i)}ms`,
		"--duration-medium": `${_e(n)}ms`,
		"--duration-medium-max": `${_e(n / i)}ms`
	};
	return r != null && (o["--duration-slow-min"] = `${_e(r * i)}ms`, o["--duration-slow"] = `${_e(r)}ms`, o["--duration-slow-max"] = `${_e(r / i)}ms`), a && (o["--ease-standard"] = a), o;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/expandRadiusScale.js
function ye(e) {
	let { base: t, multiplier: n } = e;
	return {
		"--radius-none": "0px",
		"--radius-inner": `${Math.round(t * 1 * n)}px`,
		"--radius-element": `${Math.round(t * 2 * n)}px`,
		"--radius-container": `${Math.round(t * 3 * n)}px`,
		"--radius-page": `${Math.round(t * 7 * n)}px`,
		"--radius-chat": `${Math.round(t * 7 * n)}px`,
		"--radius-full": "9999px"
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/color.js
var be = {
	transparent: {
		r: 0,
		g: 0,
		b: 0,
		a: 0
	},
	black: {
		r: 0,
		g: 0,
		b: 0,
		a: 1
	},
	white: {
		r: 255,
		g: 255,
		b: 255,
		a: 1
	}
}, xe = (e, t, n) => Math.max(t, Math.min(n, e));
function Se(e) {
	return e.split("").map((e) => e + e).join("");
}
function Ce(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, ""), n = t.length === 3 || t.length === 4 ? Se(t) : t;
	return n.length !== 6 && n.length !== 8 || !/^[0-9a-fA-F]+$/.test(n) ? null : {
		r: parseInt(n.slice(0, 2), 16),
		g: parseInt(n.slice(2, 4), 16),
		b: parseInt(n.slice(4, 6), 16),
		a: n.length === 8 ? parseInt(n.slice(6, 8), 16) / 255 : 1
	};
}
function we(e) {
	let t = e.indexOf("(");
	if (t === -1 || !e.trim().endsWith(")")) return null;
	let n = e.slice(t + 1, e.lastIndexOf(")")).replace(/\//g, " ").split(/[\s,]+/).map((e) => e.trim()).filter(Boolean);
	if (n.length < 3) return null;
	let r = (e) => xe(e.endsWith("%") ? parseFloat(e) / 100 * 255 : parseFloat(e), 0, 255), i = r(n[0]), a = r(n[1]), o = r(n[2]);
	if ([
		i,
		a,
		o
	].some(Number.isNaN)) return null;
	let s = 1;
	if (n.length >= 4) {
		let e = n[3];
		if (s = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e), Number.isNaN(s)) return null;
		s = xe(s, 0, 1);
	}
	return {
		r: i,
		g: a,
		b: o,
		a: s
	};
}
function Te(e) {
	let t = e.trim(), n = be[t.toLowerCase()];
	return n ? { ...n } : t.startsWith("#") ? Ce(t) : /^rgba?\(/i.test(t) ? we(t) : null;
}
function Ee(e, t, n) {
	let r = (e) => xe(Math.round(e), 0, 255).toString(16).padStart(2, "0").toUpperCase();
	return `#${r(e)}${r(t)}${r(n)}`;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/contrast.js
function De(e) {
	let t = (e) => {
		let t = e / 255;
		return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	};
	return .2126 * t(e.r) + .7152 * t(e.g) + .0722 * t(e.b);
}
function Oe(e, t) {
	let n = e.a;
	return {
		r: e.r * n + t.r * (1 - n),
		g: e.g * n + t.g * (1 - n),
		b: e.b * n + t.b * (1 - n),
		a: 1
	};
}
function ke(e, t) {
	if (typeof e != "string") return e;
	let n = Te(e);
	if (n === null) throw TypeError(`contrastRatio: could not parse ${t} "${e}"`);
	return n;
}
function Ae(e, t) {
	let n = ke(t, "background");
	if (n.a < 1) throw TypeError("contrastRatio: background must be opaque — composite it over its backdrop first");
	let r = ke(e, "foreground");
	r.a < 1 && (r = Oe(r, n));
	let i = De(r), a = De(n), o = Math.max(i, a), s = Math.min(i, a);
	return (o + .05) / (s + .05);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/hct.js
function je(e) {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}
function Me(e) {
	let t = e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055;
	return Math.round(Math.min(255, Math.max(0, t * 255)));
}
function Ne(e, t, n) {
	return [
		.4124564 * e + .3575761 * t + .1804375 * n,
		.2126729 * e + .7151522 * t + .072175 * n,
		.0193339 * e + .119192 * t + .9503041 * n
	];
}
function Pe(e, t, n) {
	return [
		3.2404542 * e - 1.5371385 * t - .4985314 * n,
		-.969266 * e + 1.8760108 * t + .041556 * n,
		.0556434 * e - .2040259 * t + 1.0572252 * n
	];
}
var Fe = [
	.95047,
	1,
	1.08883
];
function Ie(e) {
	let t = 6 / 29;
	return e > t * t * t ? Math.cbrt(e) : e / (3 * t * t) + 4 / 29;
}
function Le(e) {
	let t = 6 / 29;
	return e > t ? e * e * e : 3 * t * t * (e - 4 / 29);
}
function Re(e, t, n) {
	let r = Ie(e / Fe[0]), i = Ie(t / Fe[1]), a = Ie(n / Fe[2]);
	return [
		116 * i - 16,
		500 * (r - i),
		200 * (i - a)
	];
}
function ze(e, t, n) {
	let r = (e + 16) / 116, i = t / 500 + r, a = r - n / 200;
	return [
		Le(i) * Fe[0],
		Le(r) * Fe[1],
		Le(a) * Fe[2]
	];
}
function Be(e) {
	return Le((e + 16) / 116);
}
function Ve(e) {
	let t = Ce(e);
	return t === null ? [
		0,
		0,
		0
	] : [
		t.r,
		t.g,
		t.b
	];
}
function He(e) {
	let [t, n, r] = Ve(e), [i, a, o] = Ne(je(t), je(n), je(r)), [s, c, l] = Re(i, a, o), u = Math.atan2(l, c) * 180 / Math.PI;
	u < 0 && (u += 360);
	let d = Math.sqrt(c * c + l * l);
	return {
		hue: u,
		chroma: d,
		tone: Math.max(0, Math.min(100, s))
	};
}
function Ue(e) {
	let { hue: t, chroma: n, tone: r } = e;
	if (r <= 0) return "#000000";
	if (r >= 100) return "#FFFFFF";
	if (n < .5) {
		let e = We(r);
		return Ee(e, e, e);
	}
	let i = 0, a = n, o = "#000000";
	for (let e = 0; e < 16; e++) {
		let e = (i + a) / 2, n = Ge(t, e, r);
		n === null ? a = e : (o = n, i = e);
	}
	return o;
}
function We(e) {
	return Me(Be(e));
}
function Ge(e, t, n) {
	let r = e * Math.PI / 180, [i, a, o] = ze(n, Math.cos(r) * t, Math.sin(r) * t), [s, c, l] = Pe(i, a, o), u = Me(s), d = Me(c), f = Me(l), p = je(u), m = je(d), h = je(f), g = .02;
	return Math.abs(p - s) > g || Math.abs(m - c) > g || Math.abs(h - l) > g || u < 0 || u > 255 || d < 0 || d > 255 || f < 0 || f > 255 ? null : Ee(u, d, f);
}
var Ke = [
	0,
	5,
	10,
	20,
	30,
	40,
	50,
	60,
	70,
	80,
	90,
	95,
	99,
	100
];
function qe(e, t) {
	let n = {};
	for (let r of Ke) n[r] = Ue({
		hue: e,
		chroma: t,
		tone: r
	});
	return n;
}
function Je(e, t) {
	return e + Math.round(t * 255).toString(16).padStart(2, "0").toUpperCase();
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/expandColorScale.js
var Ye = {
	warm: 7,
	cool: 5,
	neutral: 3
}, Xe = {
	warm: 10,
	cool: 8,
	neutral: 6
}, Ze = "#0064E0";
function Qe(e, t) {
	return `light-dark(${e}, ${t})`;
}
function $e(e) {
	return `color-mix(in srgb, var(--color-accent) ${e * 100}%, transparent)`;
}
var et = 3;
function tt(e, t, n, r, i, a) {
	let o = n, s = Ue({
		hue: e,
		chroma: t,
		tone: o
	});
	for (; Ae(s, i) < a && o + r >= 0 && o + r <= 100;) o += r, s = Ue({
		hue: e,
		chroma: t,
		tone: o
	});
	return s;
}
function nt(e) {
	let { accent: t, neutralStyle: n = "cool", contrast: r = "standard" } = e, [i, a] = Array.isArray(t) ? t : [t, t], o = He(i ?? Ze), s = a === i, c = s ? o : He(a ?? Ze), l = Ye[n] ?? 5, u = Xe[n] ?? 8, d = qe(o.hue, Math.max(o.chroma, 48)), f = qe(o.hue, l), p = qe(o.hue, u), m = s ? d : qe(c.hue, Math.max(c.chroma, 48)), h = s ? f : qe(c.hue, l), g = s ? p : qe(c.hue, u), _ = r === "high", v = _ ? 0 : 10, y = _ ? 99 : 90, b = _ ? 20 : 30, x = _ ? 80 : 70, S = _ ? .2 : .1, C = _ ? 50 : 70, w = _ ? 50 : 30, T = Qe(tt(o.hue, u, C, -1, f[99], et), tt(c.hue, u, w, 1, h[10], et));
	return {
		...t == null ? null : {
			"--color-accent": Qe(d[40], m[80]),
			"--color-accent-muted": Qe($e(.2), $e(.25)),
			"--color-on-accent": Qe(d[100], m[20])
		},
		"--color-neutral": Qe(Je(f[10], .1), Je(h[90], .2)),
		"--color-background-surface": Qe(f[99], h[10]),
		"--color-background-body": Qe(f[95], h[5]),
		"--color-overlay": Qe(Je(f[10], .4), Je(h[10], .6)),
		"--color-overlay-hover": Qe(Je(f[10], .05), Je(h[100], .05)),
		"--color-overlay-pressed": Qe(Je(f[10], .1), Je(h[100], .1)),
		"--color-background-muted": Qe(Je(f[10], .05), Je(h[10], .5)),
		"--color-text-primary": Qe(f[v], h[y]),
		"--color-text-secondary": Qe(p[b], g[x]),
		"--color-text-disabled": Qe(p[60], g[40]),
		"--color-text-accent": "var(--color-accent)",
		"--color-icon-accent": "var(--color-accent)",
		"--color-icon-primary": Qe(f[v], h[y]),
		"--color-icon-secondary": Qe(p[b], g[x]),
		"--color-icon-disabled": Qe(p[60], g[40]),
		"--color-background-card": Qe(f[99], h[10]),
		"--color-background-popover": Qe(f[99], h[20]),
		"--color-background-inverted": Qe(f[10], h[99]),
		"--color-border": Qe(Je(f[10], S), Je(h[95], S)),
		"--color-border-emphasized": T,
		"--color-skeleton": Qe(p[70], g[30]),
		"--color-track": Qe(p[70], g[30]),
		"--color-shadow": Qe(Je(f[0], .1), Je(h[0], .3)),
		"--color-tint-hover": Qe("black", "white")
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/resolveThemeValues.js
function rt(e, { strict: t = !1 } = {}) {
	if (typeof e == "string") return e;
	if (Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string") return `light-dark(${e[0]}, ${e[1]})`;
	if (t) throw Error("Theme token values must be CSS strings or [light, dark] string tuples.");
	return Array.isArray(e) ? `light-dark(${e[0]}, ${e[1]})` : e;
}
function it(e) {
	return {
		normal: "var(--font-weight-normal)",
		medium: "var(--font-weight-medium)",
		semibold: "var(--font-weight-semibold)",
		bold: "var(--font-weight-bold)"
	}[e] ?? e;
}
function at(e, t) {
	if (!e) return;
	let n = e.includes(" ") ? `"${e}"` : e;
	return t ? `${n}, ${t}` : n;
}
function ot(e) {
	if (!e.scale) return;
	let t = {}, n = e.heading;
	if (n?.weights) for (let [e, r] of Object.entries(n.weights)) r && (t[Number(e)] = it(r));
	let r = n?.weight ? it(n.weight) : void 0;
	if (r) for (let e = 1; e <= 6; e++) e in t || (t[e] = r);
	let i = {};
	return e.body?.weight && (i.body = it(e.body.weight)), e.code?.weight && (i.code = it(e.code.weight)), {
		base: e.scale.base,
		ratio: e.scale.ratio,
		weights: {
			...Object.keys(t).length > 0 ? { heading: t } : {},
			...Object.keys(i).length > 0 ? { text: i } : {}
		}
	};
}
function st(e) {
	let t = {}, n = at(e.body?.family, e.body?.fallbacks), r = at(e.heading?.family, e.heading?.fallbacks) ?? n, i = at(e.code?.family, e.code?.fallbacks);
	return n && (t["--font-family-body"] = n), r && (t["--font-family-heading"] = r), i && (t["--font-family-code"] = i), t;
}
function ct(e, t, { strictTokens: n = !1 } = {}) {
	let r = { ...t?.tokens }, i = e.typography, a = i ? ot(i) : void 0;
	if (e.color && Object.assign(r, nt(e.color)), a && Object.assign(r, H(a)), e.radius && Object.assign(r, ye(e.radius)), e.motion && Object.assign(r, ve(e.motion)), i && Object.assign(r, st(i)), e.syntax) for (let [t, n] of Object.entries(e.syntax.tokens)) r["--color-syntax-" + t] = n;
	if (e.tokens) for (let [t, i] of Object.entries(e.tokens)) i !== void 0 && (r[t] = rt(i, { strict: n }));
	let o = e.components;
	return a && (o = ie(ge(a), e.components)), t?.components && (o = ie(t.components, o)), {
		tokens: r,
		components: o
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/localTokens.js
var lt = String.raw`(?:[-_a-zA-Z0-9]|\P{ASCII}|\\(?:[0-9a-fA-F]{1,6}[ \t\r\n\f]?|[^\r\n\f]))`, ut = RegExp(`^--${lt}*$`, "u"), dt = RegExp(`var\\(\\s*(--${lt}*)(?=\\s*(?:,|\\)))`, "giu");
function ft(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function pt(e) {
	return !e.includes("\0") && ut.test(e);
}
function mt(e, t) {
	if (typeof e == "string") return e;
	if (Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string") return `light-dark(${e[0]}, ${e[1]})`;
	throw Error(`${t} must be a CSS string or a [light, dark] string tuple.`);
}
function ht(e, t) {
	if (typeof e == "string") {
		dt.lastIndex = 0;
		for (let n = dt.exec(e); n; n = dt.exec(e)) t.add(n[1]);
		return;
	}
	if (Array.isArray(e)) {
		for (let n of e) ht(n, t);
		return;
	}
	if (e && typeof e == "object") for (let n of Object.values(e)) ht(n, t);
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let [t, n] of Object.entries(e)) {
		let i = /* @__PURE__ */ new Set();
		ht(n, i), r.set(t, [...i].filter((t) => ft(e, t)));
	}
	let i = (e, t) => {
		let n = [e], i = new Set(n), a = (o) => {
			for (let s of r.get(o) ?? []) if (t.has(s)) {
				if (s === e) return n.push(e), !0;
				if (!i.has(s)) {
					if (n.push(s), i.add(s), a(s)) return !0;
					i.delete(s), n.pop();
				}
			}
			return !1;
		};
		return a(e), n;
	}, a = 0, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = [], l = /* @__PURE__ */ new Set(), u = (e) => {
		let d = a++;
		o.set(e, d), s.set(e, d), c.push(e), l.add(e);
		for (let t of r.get(e) ?? []) o.has(t) ? l.has(t) && s.set(e, Math.min(s.get(e) ?? d, o.get(t) ?? 0)) : (u(t), s.set(e, Math.min(s.get(e) ?? d, s.get(t) ?? 0)));
		if (s.get(e) !== d) return;
		let f = [], p;
		do
			p = c.pop() ?? e, l.delete(p), f.push(p);
		while (p !== e);
		if (!(f.length > 1 || (r.get(f[0]) ?? []).includes(f[0])) || n && !f.some((e) => n.has(e))) return;
		let m = f.find((e) => n?.has(e)) ?? f[0], h = i(m, new Set(f)).join(" -> ");
		throw Error(`${t ? `${t}: ` : ""}Theme token cycle detected: ${h}.`);
	};
	for (let t of Object.keys(e)) o.has(t) || u(t);
}
function _t(e, t) {
	let n = t.__localTokenLineage;
	if (!Array.isArray(n) || n.length === 0 || n[n.length - 1] !== t.name || n.some((e) => typeof e != "string" || e.length === 0)) throw Error(`defineTheme("${e}"): the base theme has invalid theme-local token lineage metadata.`);
	if (!t.localTokens || typeof t.localTokens != "object" || Array.isArray(t.localTokens) || !t.__localTokenOwners || typeof t.__localTokenOwners != "object" || Array.isArray(t.__localTokenOwners)) throw Error(`defineTheme("${e}"): the base theme has incomplete theme-local token metadata.`);
	for (let [r, i] of Object.entries(t.localTokens)) {
		let a = t.__localTokenOwners[r];
		if (typeof i != "string" || !a || !n.includes(a) || !pt(r)) throw Error(`defineTheme("${e}"): inherited local token "${r}" does not match its exact lineage metadata.`);
	}
	for (let n of Object.keys(t.__localTokenOwners)) if (!ft(t.localTokens, n)) throw Error(`defineTheme("${e}"): inherited local-token owner metadata names undeclared token "${n}".`);
}
function vt(e, t, n, r) {
	let i = ft(e, "localTokens"), a = t?.__localTokenLineage !== void 0;
	if (!i && !a) return;
	a && t && _t(e.name, t);
	let o = { ...t?.localTokens }, s = { ...t?.__localTokenOwners }, c = e.localTokens;
	if (i && (typeof c != "object" || !c || Array.isArray(c))) throw Error(`defineTheme("${e.name}"): localTokens must be a token map.`);
	for (let [t, n] of Object.entries(c ?? {})) {
		let r = s[t];
		if (!pt(t)) throw Error(`defineTheme("${e.name}"): local token "${t}" must be a valid CSS custom-property name.`);
		r || (s[t] = e.name), o[t] = mt(n, `defineTheme("${e.name}").localTokens["${t}"]`);
	}
	for (let t of Object.keys(o)) {
		if (!s[t]) throw Error(`defineTheme("${e.name}"): inherited local token "${t}" has no owner metadata.`);
		if (ft(n, t) || ft(r, t)) throw Error(`defineTheme("${e.name}"): token "${t}" cannot be declared in both tokens and localTokens.`);
	}
	return gt(o, `defineTheme("${e.name}").localTokens`), {
		localTokens: o,
		owners: s,
		lineage: [...t?.__localTokenLineage ?? [], e.name]
	};
}
function yt(e, t, n, r) {
	let i = `defineTheme("${e}").adaptations.rules[${t}].value.localTokens`;
	if (n === void 0) return;
	if (typeof n != "object" || !n || Array.isArray(n)) throw Error(`${i} must be a token map.`);
	let a = {};
	for (let [e, t] of Object.entries(n)) {
		if (!r || !ft(r, e)) throw Error(`${i}["${e}"] cannot enroll a theme-local token. Declare it in the root theme or an exact enrolled base first.`);
		a[e] = mt(t, `${i}["${e}"]`);
	}
	return Object.keys(a).length > 0 ? a : void 0;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/themeAdaptations.js
var bt = [
	"sm",
	"md",
	"lg",
	"xl",
	"2xl"
], xt = Object.freeze({
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536
});
function St(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ct(e, t) {
	if (!St(e)) throw Error(`${t} must be an object.`);
}
function wt(e, t, n) {
	for (let r of Object.keys(e)) if (!t.has(r)) throw Error(`${n}.${r} is not supported.`);
}
function Tt(e) {
	if (Array.isArray(e)) {
		let t = [];
		for (let n of e) t.push(Tt(n));
		return t;
	}
	return St(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Tt(t)])) : e;
}
var Et = new Set(bt), Dt = /* @__PURE__ */ new Set(["widthBreakpoints", "rules"]), Ot = /* @__PURE__ */ new Set(["when", "value"]), kt = /* @__PURE__ */ new Set([
	"width",
	"pointer",
	"contrast",
	"motion"
]), At = /* @__PURE__ */ new Set(["from", "below"]), jt = /* @__PURE__ */ new Set([
	"typography",
	"color",
	"radius",
	"motion",
	"tokens",
	"localTokens",
	"components"
]);
function Mt(e, t) {
	Ct(e, t), wt(e, Et, t);
	let n = {};
	for (let r of bt) {
		let i = e[r];
		if (i !== void 0) {
			if (typeof i != "number" || !Number.isFinite(i) || i <= 0) throw Error(`${t}.${r} must be a finite positive number of CSS pixels.`);
			n[r] = i;
		}
	}
	return n;
}
function Nt(e, t) {
	let n = Mt(e, t);
	for (let e of bt) if (n[e] === void 0) throw Error(`${t}.${e} is missing from the effective breakpoint map.`);
	return n;
}
function Pt(e, t) {
	let n;
	for (let r of bt) {
		if (n !== void 0 && e[r] <= e[n]) throw Error(`${t} must be strictly increasing: ${r} (${e[r]}) is not above ${n} (${e[n]}).`);
		n = r;
	}
}
function Ft(e, t) {
	Ct(e, t), wt(e, kt, t);
	let n = Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
	if (Object.keys(n).length === 0) throw Error(`${t} must contain at least one condition.`);
	let r = Tt(n);
	if (r.width !== void 0) {
		if (Ct(r.width, `${t}.width`), wt(r.width, At, `${t}.width`), r.width.from === void 0 && r.width.below === void 0) throw Error(`${t}.width must contain \`from\`, \`below\`, or both.`);
		for (let e of ["from", "below"]) {
			let n = r.width[e];
			if (n !== void 0 && (typeof n != "string" || !Et.has(n))) throw Error(`${t}.width.${e} must be one of ${bt.join(", ")}.`);
		}
	}
	if (r.pointer !== void 0 && r.pointer !== "coarse" && r.pointer !== "fine") throw Error(`${t}.pointer must be 'coarse' or 'fine'.`);
	if (r.contrast !== void 0 && r.contrast !== "more" && r.contrast !== "less" && r.contrast !== "no-preference") throw Error(`${t}.contrast must be 'more', 'less', or 'no-preference'.`);
	if (r.motion !== void 0 && r.motion !== "reduce" && r.motion !== "no-preference") throw Error(`${t}.motion must be 'reduce' or 'no-preference'.`);
	return r;
}
function It(e, t) {
	Ct(e, t), wt(e, jt, t);
	for (let n of jt) {
		let r = e[n];
		if (r !== void 0 && !St(r)) throw Error(`${t}.${n} must be an object.`);
	}
	return Tt(e);
}
function Lt(e, t) {
	if (Ct(e, t), wt(e, Ot, t), !Object.prototype.hasOwnProperty.call(e, "when")) throw Error(`${t}.when is required.`);
	if (!Object.prototype.hasOwnProperty.call(e, "value")) throw Error(`${t}.value is required.`);
	return {
		when: Ft(e.when, `${t}.when`),
		value: It(e.value, `${t}.value`)
	};
}
function Rt(e, t) {
	if (!Array.isArray(e)) throw Error(`${t} must be an array of {when, value} objects.`);
	for (let n = 0; n < e.length; n++) if (!Object.prototype.hasOwnProperty.call(e, n)) throw Error(`${t}[${n}] must be present.`);
	return e.map((e, n) => Lt(e, `${t}[${n}]`));
}
function zt(e, t, n) {
	let r = `defineTheme("${e}").adaptations`, i = { ...xt }, a = [];
	t !== void 0 && (Ct(t, `defineTheme("${e}").extends.__adaptations`), wt(t, /* @__PURE__ */ new Set(["widthBreakpoints", "rules"]), `defineTheme("${e}").extends.__adaptations`), i = Nt(t.widthBreakpoints, `defineTheme("${e}").extends.__adaptations.widthBreakpoints`), a = Rt(t.rules, `defineTheme("${e}").extends.__adaptations.rules`));
	let o = {}, s = [];
	n !== void 0 && (Ct(n, r), wt(n, Dt, r), n.widthBreakpoints !== void 0 && (o = Mt(n.widthBreakpoints, `${r}.widthBreakpoints`)), n.rules !== void 0 && (s = Rt(n.rules, `${r}.rules`)));
	let c = {
		...i,
		...o
	};
	return Pt(c, `${r}.widthBreakpoints`), {
		widthBreakpoints: c,
		rules: [...a, ...s]
	};
}
function Bt(e, t) {
	return e ? t ? {
		...e,
		...t,
		weights: e.weights || t.weights ? {
			...e.weights,
			...t.weights
		} : void 0
	} : e : t;
}
function Vt(e, t) {
	if (typeof e != "number" || !Number.isFinite(e)) throw Error(`${t} must be a finite number.`);
}
function Ht(e, t, n) {
	let r = t.scale !== void 0 || [
		t.body,
		t.heading,
		t.code
	].some((e) => e?.weight !== void 0 || e?.weights !== void 0), i = r ? e?.scale : void 0;
	if (t.scale !== void 0) {
		let r = t.scale.base ?? e?.scale?.base, a = t.scale.ratio ?? e?.scale?.ratio;
		if (r === void 0 || a === void 0) throw Error(`${n}.scale must supply both \`base\` and \`ratio\` unless the missing field exists on the effective root typography axis.`);
		Vt(r, `${n}.scale.base`), Vt(a, `${n}.scale.ratio`), i = {
			base: r,
			ratio: a
		};
	} else if (r && i === void 0) throw Error(`${n} sets typography weights without an effective root scale. Supply \`scale.base\` and \`scale.ratio\` in the same rule.`);
	return {
		...i ? { scale: i } : {},
		body: Bt(e?.body, t.body),
		heading: Bt(e?.heading, t.heading),
		code: Bt(e?.code, t.code)
	};
}
function Ut(e, t, n) {
	let r = t.base ?? e?.base, i = t.multiplier ?? e?.multiplier;
	if (r === void 0 || i === void 0) throw Error(`${n} must supply both \`base\` and \`multiplier\` unless the missing field exists on the effective root radius axis.`);
	return Vt(r, `${n}.base`), Vt(i, `${n}.multiplier`), {
		base: r,
		multiplier: i
	};
}
function Wt(e, t, n) {
	let r = t.fast ?? e?.fast, i = t.medium ?? e?.medium, a = t.ratio ?? e?.ratio;
	if (r === void 0 || i === void 0 || a === void 0) throw Error(`${n} must supply \`fast\`, \`medium\`, and \`ratio\` unless each missing field exists on the effective root motion axis.`);
	Vt(r, `${n}.fast`), Vt(i, `${n}.medium`), Vt(a, `${n}.ratio`);
	let o = t.slow ?? e?.slow;
	o !== void 0 && Vt(o, `${n}.slow`);
	let s = t.easing ?? e?.easing;
	return {
		fast: r,
		medium: i,
		ratio: a,
		...o === void 0 ? {} : { slow: o },
		...s === void 0 ? {} : { easing: s }
	};
}
function Gt(e, t, n, r) {
	let i = `defineTheme("${e}").adaptations.rules[${t}].value`;
	return {
		typography: n.typography ? Ht(r.typography, n.typography, `${i}.typography`) : void 0,
		color: n.color ? {
			...r.color,
			...n.color
		} : void 0,
		radius: n.radius ? Ut(r.radius, n.radius, `${i}.radius`) : void 0,
		motion: n.motion ? Wt(r.motion, n.motion, `${i}.motion`) : void 0,
		tokens: n.tokens,
		components: n.components
	};
}
function Kt(e, t) {
	if (typeof e == "string") {
		if (/\b(?:NaN|undefined)\b/.test(e)) throw Error(`${t} resolved to the invalid CSS value "${e}".`);
		return;
	}
	if (St(e)) {
		for (let [n, r] of Object.entries(e)) Kt(r, `${t}.${n}`);
		return;
	}
	throw Error(`${t} must resolve to a concrete CSS string.`);
}
function qt(e, t, n, r) {
	let i = `defineTheme("${e}").adaptations.rules[${t}].when`, a = [];
	if (n.width) {
		let e = n.width.from, t = n.width.below;
		if (e !== void 0 && t !== void 0 && r[e] >= r[t]) throw Error(`${i}.width must resolve to \`from < below\`; ${e} is ${r[e]}px and ${t} is ${r[t]}px.`);
		e !== void 0 && a.push(`(width >= ${r[e]}px)`), t !== void 0 && a.push(`(width < ${r[t]}px)`);
	}
	if (n.pointer !== void 0 && a.push(`(pointer: ${n.pointer})`), n.contrast !== void 0 && a.push(`(prefers-contrast: ${n.contrast})`), n.motion !== void 0 && a.push(`(prefers-reduced-motion: ${n.motion})`), a.length === 0) throw Error(`${i} must contain at least one concrete condition.`);
	return a.join(" and ");
}
var Jt = {
	pointer: [
		"coarse",
		"fine",
		"none"
	],
	contrast: [
		"more",
		"less",
		"no-preference",
		"custom"
	],
	motion: ["reduce", "no-preference"]
};
function Yt(e, t, n) {
	let r = e.width?.from;
	if (r !== void 0 && n.width < t[r]) return !1;
	let i = e.width?.below;
	return !(i !== void 0 && n.width >= t[i] || e.pointer !== void 0 && e.pointer !== n.pointer || e.contrast !== void 0 && e.contrast !== n.contrast || e.motion !== void 0 && e.motion !== n.motion);
}
function Xt(e, t, n, r, i) {
	let a = i.flatMap((e, t) => Object.keys(e.tokens).length > 0 || e.localTokens && Object.keys(e.localTokens).length > 0 ? [t] : []);
	if (a.length === 0) return;
	let o = [0, ...bt.map((e) => t[e])], s = /* @__PURE__ */ new Set();
	for (let c of o) for (let o of Jt.pointer) for (let l of Jt.contrast) for (let u of Jt.motion) {
		let d = {
			width: c,
			pointer: o,
			contrast: l,
			motion: u
		}, f = a.filter((e) => Yt(i[e].when, t, d));
		if (f.length === 0) continue;
		let p = f.join(",");
		if (s.has(p)) continue;
		s.add(p);
		let m = {
			...n,
			...r
		}, h = /* @__PURE__ */ new Set();
		for (let e of f) {
			let t = i[e];
			Object.assign(m, t.tokens, t.localTokens);
			for (let e of Object.keys(t.tokens)) h.add(e);
			for (let e of Object.keys(t.localTokens ?? {})) h.add(e);
		}
		let g = f.join(", "), _ = f.map((e) => i[e].query).join("; ");
		gt(m, `defineTheme("${e}").adaptations ${f.length === 1 ? "rule" : "overlapping rules"} [${g}] (${_})`, h);
	}
}
function Zt(e, t) {
	let n = e?.typography, r = t.typography, i = (e, t, n = !1) => {
		let r = Bt(e, t);
		if (r) return t?.family ? {
			...r,
			family: t.family,
			fallbacks: t.fallbacks
		} : n ? {
			...r,
			family: void 0,
			fallbacks: void 0
		} : {
			...r,
			family: e?.family,
			fallbacks: e?.fallbacks
		};
	}, a = i(n?.body, r?.body), o = i(n?.heading, r?.heading, !(!r?.body?.family || r?.heading?.family)), s = i(n?.code, r?.code), c = r?.scale ? r : n?.scale ? n : void 0, l = (e, t) => e ? {
		...e,
		weight: t?.weight,
		weights: t?.weights
	} : void 0;
	a = l(a, c?.body), o = l(o, c?.heading), s = l(s, c?.code);
	let u = n || r ? {
		...n,
		...r,
		scale: r?.scale ?? n?.scale,
		body: a,
		heading: o,
		code: s
	} : void 0, d = t.color ?? e?.color, f = t.radius ? {
		...e?.radius,
		...t.radius
	} : e?.radius, p = t.motion ? {
		...e?.motion,
		...t.motion
	} : e?.motion;
	return {
		...u ? { typography: u } : {},
		...d ? { color: d } : {},
		...f ? { radius: f } : {},
		...p ? { motion: p } : {}
	};
}
function Qt(e, t, n) {
	if (!e || !t) return e;
	let r = {};
	for (let [i, a] of Object.entries(e)) for (let [e, o] of Object.entries(a)) {
		let a = Object.fromEntries(Object.entries(o).filter(([r]) => t[i]?.[e]?.[r] === void 0 || Object.hasOwn(n?.[i]?.[e] ?? {}, r)));
		Object.keys(a).length > 0 && ((r[i] ??= {})[e] = a);
	}
	return Object.keys(r).length > 0 ? r : void 0;
}
function $t(e, t, n, r, i, a) {
	if (t.rules.length === 0) return;
	let o = t.rules.map((r, o) => {
		let s = Gt(e, o, r.value, n), c = ct(s, void 0, { strictTokens: !0 });
		for (let [t, n] of Object.entries(c.tokens)) Kt(n, `defineTheme("${e}").adaptations.rules[${o}].value.tokens["${t}"]`);
		c.components && Kt(c.components, `defineTheme("${e}").adaptations.rules[${o}].value.components`);
		for (let t of Object.keys(r.value.tokens ?? {})) if (i && Object.prototype.hasOwnProperty.call(i, t)) throw Error(`defineTheme("${e}").adaptations.rules[${o}].value.tokens["${t}"] matches an enrolled theme-local declaration; write it through value.localTokens instead.`);
		let l = yt(e, o, r.value.localTokens, i);
		return {
			when: r.when,
			query: qt(e, o, r.when, t.widthBreakpoints),
			tokens: c.tokens,
			localTokens: l,
			components: s.typography?.scale ? Qt(c.components, a, r.value.components) : c.components
		};
	});
	return Xt(e, t.widthBreakpoints, r, i, o), o;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/syntax/tokens.js
var en = {
	"--color-syntax-keyword": "var(--color-text-accent)",
	"--color-syntax-string": "var(--color-text-green)",
	"--color-syntax-comment": "var(--color-text-secondary)",
	"--color-syntax-number": "var(--color-text-orange)",
	"--color-syntax-function": "var(--color-text-blue)",
	"--color-syntax-type": "var(--color-text-purple)",
	"--color-syntax-variable": "var(--color-text-primary)",
	"--color-syntax-operator": "var(--color-text-cyan)",
	"--color-syntax-constant": "var(--color-text-orange)",
	"--color-syntax-tag": "var(--color-text-red)",
	"--color-syntax-attribute": "var(--color-text-teal)",
	"--color-syntax-property": "var(--color-text-cyan)",
	"--color-syntax-punctuation": "var(--color-text-secondary)",
	"--color-syntax-background": "var(--color-background-muted)"
}, tn = {
	"--color-data-categorical-blue": "light-dark(#0171E3, #0171E3)",
	"--color-data-categorical-orange": "light-dark(#EB6E00, #EB6E00)",
	"--color-data-categorical-purple": "light-dark(#6B1EFD, #6B1EFD)",
	"--color-data-categorical-green": "light-dark(#0B991F, #0B991F)",
	"--color-data-categorical-pink": "light-dark(#F351C0, #F351C0)",
	"--color-data-categorical-cyan": "light-dark(#0171A4, #0171A4)",
	"--color-data-categorical-red": "light-dark(#F5394F, #F5394F)",
	"--color-data-categorical-teal": "light-dark(#08A3A3, #08A3A3)",
	"--color-data-categorical-brown": "light-dark(#965E03, #965E03)",
	"--color-data-categorical-indigo": "light-dark(#6F8AFF, #6F8AFF)",
	"--color-data-neutral": "light-dark(#8494A3, #8C939B)",
	"--color-data-blue-5": "light-dark(#02165E, #02165E)",
	"--color-data-blue-4": "light-dark(#004CBC, #004CBC)",
	"--color-data-blue-3": "light-dark(#2694FE, #2694FE)",
	"--color-data-blue-2": "light-dark(#78BEFF, #78BEFF)",
	"--color-data-blue-1": "light-dark(#DBECFF, #DBECFF)",
	"--color-data-shamrock-5": "light-dark(#0B603D, #0B603D)",
	"--color-data-shamrock-4": "light-dark(#138546, #138546)",
	"--color-data-shamrock-3": "light-dark(#24BB5E, #24BB5E)",
	"--color-data-shamrock-2": "light-dark(#8EF7AA, #8EF7AA)",
	"--color-data-shamrock-1": "light-dark(#D6FEE4, #D6FEE4)",
	"--color-data-orange-5": "light-dark(#A13F04, #A13F04)",
	"--color-data-orange-4": "light-dark(#D66100, #D66100)",
	"--color-data-orange-3": "light-dark(#FD9537, #FD9537)",
	"--color-data-orange-2": "light-dark(#FDB876, #FDB876)",
	"--color-data-orange-1": "light-dark(#FFE6CF, #FFE6CF)",
	"--color-data-pink-5": "light-dark(#8E1073, #8E1073)",
	"--color-data-pink-4": "light-dark(#D123A1, #D123A1)",
	"--color-data-pink-3": "light-dark(#F989D3, #F989D3)",
	"--color-data-pink-2": "light-dark(#FEADE3, #FEADE3)",
	"--color-data-pink-1": "light-dark(#FCE3F4, #FCE3F4)",
	"--color-data-purple-5": "light-dark(#3E0697, #3E0697)",
	"--color-data-purple-4": "light-dark(#6B1EFD, #6B1EFD)",
	"--color-data-purple-3": "light-dark(#9081FF, #9081FF)",
	"--color-data-purple-2": "light-dark(#B3B0FE, #B3B0FE)",
	"--color-data-purple-1": "light-dark(#E8E8FB, #E8E8FB)",
	"--color-data-red-5": "light-dark(#9D0519, #9D0519)",
	"--color-data-red-4": "light-dark(#D31130, #D31130)",
	"--color-data-red-3": "light-dark(#FB7D87, #FB7D87)",
	"--color-data-red-2": "light-dark(#FFB2B8, #FFB2B8)",
	"--color-data-red-1": "light-dark(#FEE4E6, #FEE4E6)",
	"--color-data-teal-5": "light-dark(#08767D, #08767D)",
	"--color-data-teal-4": "light-dark(#0C9293, #0C9293)",
	"--color-data-teal-3": "light-dark(#0DB7AF, #0DB7AF)",
	"--color-data-teal-2": "light-dark(#6CE6D8, #6CE6D8)",
	"--color-data-teal-1": "light-dark(#D7FCF8, #D7FCF8)",
	"--color-data-yellow-5": "light-dark(#8A5001, #8A5001)",
	"--color-data-yellow-4": "light-dark(#D69804, #D69804)",
	"--color-data-yellow-3": "light-dark(#FBCE03, #FBCE03)",
	"--color-data-yellow-2": "light-dark(#FCEC85, #FCEC85)",
	"--color-data-yellow-1": "light-dark(#FDF6BA, #FDF6BA)",
	"--color-data-gray-5": "light-dark(#25363F, #333338)",
	"--color-data-gray-4": "light-dark(#5D6C7B, #666A72)",
	"--color-data-gray-3": "light-dark(#AFB9C4, #B2B8BE)",
	"--color-data-gray-2": "light-dark(#CCD3DB, #D0D3D6)",
	"--color-data-gray-1": "light-dark(#F1F4F7, #F2F4F6)"
}, nn = {
	...en,
	...tn
}, rn = /* @__PURE__ */ new Map();
function an(e) {
	rn.set(e.name, e);
}
function on(e) {
	return e == null || e === "" ? null : rn.get(e) ?? null;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/naming.js
var sn = "astryx", cn = sn, ln = sn, un = sn;
function dn(e) {
	return `${cn}-${e}`;
}
function fn(e) {
	return `data-${ln}-${e}`;
}
function pn(e) {
	return `--${un}-${e}`;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/themeProps.js
function mn(e) {
	return `data-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`;
}
function hn(e, t) {
	return /^\d/.test(t) ? `${e}-${t}` : t;
}
function gn(e, t) {
	let n = [dn(e)];
	if (t) for (let [e, r] of Object.entries(t)) r != null && n.push(hn(e, String(r)));
	return n.join(" ");
}
function _n(e) {
	let t = {};
	if (e) for (let [n, r] of Object.entries(e)) r != null && (t[mn(n)] = String(r));
	return t;
}
function U(e, t, n) {
	let r = gn(e, t), i = n?.legacyNames?.map((e) => dn(e)) ?? [];
	return {
		className: i.length > 0 ? [r, ...i].join(" ") : r,
		..._n(t)
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/parseStyleKey.js
function vn(e) {
	let t = "";
	for (let n of e) {
		let e = n.codePointAt(0) ?? 0;
		t += n === "\"" || n === "\\" || e < 32 || e === 127 ? `\\${(e === 0 ? 65533 : e).toString(16)} ` : n;
	}
	return t;
}
function yn(e) {
	return e === "base" ? "" : e.split("+").map((e) => {
		let t = e.indexOf(":"), n = t === -1 ? e : e.slice(0, t), r = t === -1 ? e : e.slice(t + 1);
		return `[${mn(n)}="${vn(r)}"]`;
	}).join("");
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/derivedVarRegistry.js
var bn = {
	avatar: [{
		property: "borderRadius",
		vars: ["--_avatar-radius"]
	}],
	banner: [{
		property: "borderRadius",
		vars: ["--_banner-radius"]
	}],
	button: [{
		property: "borderRadius",
		vars: ["--_button-radius"]
	}],
	card: [{
		property: "borderRadius",
		vars: ["--_card-radius"]
	}, {
		property: "padding",
		expand: "container"
	}],
	chat: [{
		property: "borderRadius",
		vars: ["--_chat-composer-radius"]
	}, {
		property: "padding",
		vars: ["--_chat-composer-padding"]
	}],
	dialog: [{
		property: "borderRadius",
		vars: ["--_dialog-radius"]
	}, {
		property: "padding",
		expand: "container"
	}],
	"context-menu": [{
		property: "borderRadius",
		vars: ["--_dropdown-menu-radius"]
	}, {
		property: "padding",
		vars: ["--_dropdown-menu-padding"]
	}],
	"dropdown-menu": [{
		property: "borderRadius",
		vars: ["--_dropdown-menu-radius"]
	}, {
		property: "padding",
		vars: ["--_dropdown-menu-padding"]
	}],
	field: [{
		property: "borderRadius",
		vars: ["--_field-radius"]
	}],
	"hover-card": [{
		property: "borderRadius",
		vars: ["--_hovercard-radius"]
	}],
	item: [{
		property: "paddingInline",
		vars: ["--_item-inset-inline"]
	}],
	"number-input": [{
		property: "padding",
		expand: "container"
	}, {
		property: "borderRadius",
		vars: ["--_field-radius"]
	}],
	popover: [{
		property: "borderRadius",
		vars: ["--_popover-radius"]
	}],
	"progress-bar-mark": [{
		property: "width",
		vars: ["--_progressbar-mark-width"],
		replaces: !0
	}, {
		property: "height",
		vars: ["--_progressbar-mark-height"],
		replaces: !0
	}],
	section: [{
		property: "padding",
		expand: "container"
	}],
	"segmented-control": [{
		property: "borderRadius",
		vars: ["--_segmented-control-radius"]
	}, {
		property: "padding",
		vars: ["--_segmented-control-padding"]
	}],
	"text-area": [{
		property: "paddingInline",
		vars: ["--_textarea-inline-padding"],
		replaces: !0
	}]
}, xn = {
	hovercard: "hover-card",
	"progressbar-mark": "progress-bar-mark",
	textarea: "text-area"
};
function Sn(e, t) {
	let n = xn[e], r = bn[e] ?? (n ? bn[n] : void 0);
	return r ? r.filter((e) => e.property === t) : [];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/declarationBoundary.js
function Cn(e) {
	return e === "\n" || e === "\r" || e === "\f";
}
function wn(e) {
	return e === " " || e === "	" || Cn(e);
}
function Tn(e) {
	return /^[0-9a-fA-F]$/.test(e);
}
function En(e) {
	return /^[A-Za-z_]$/.test(e) || e.charCodeAt(0) >= 128;
}
function Dn(e) {
	return En(e) || /^[0-9-]$/.test(e);
}
function On(e) {
	return e.replace(/\r\n?|\f/g, "\n").replace(/\0/g, "�");
}
var kn = /[\x01-\x08\x0b\x0e-\x1f\x7f]/;
function An(e, t) {
	return e[t] === "\\" && t + 1 < e.length && !Cn(e[t + 1]);
}
function jn(e, t) {
	let n = e[t];
	if (n === "-") {
		let n = e[t + 1];
		return n !== void 0 && (n === "-" || En(n) || An(e, t + 1));
	}
	return n === "\\" ? An(e, t) : n !== void 0 && En(n);
}
function Mn(e, t) {
	if (Tn(e[t])) {
		let n = t;
		for (; n < e.length && n - t < 6 && Tn(e[n]);) n++;
		return n < e.length && wn(e[n]) && n++, n;
	}
	return t + ((e.codePointAt(t) ?? 0) > 65535 ? 2 : 1);
}
function Nn(e, t) {
	let n = "", r = t;
	for (; r < e.length;) {
		let t = e[r];
		if (Dn(t)) n += t, r++;
		else if (An(e, r)) {
			let t = Mn(e, r + 1);
			if (Tn(e[r + 1])) {
				let i = e.slice(r + 1, t).trim(), a = parseInt(i, 16);
				n += a === 0 || a > 1114111 || a >= 55296 && a <= 57343 ? "�" : String.fromCodePoint(a);
			} else n += e.slice(r + 1, t);
			r = t;
		} else break;
	}
	return {
		end: r,
		name: n
	};
}
function Pn(e, t) {
	let n = e[t], r = t + 1;
	for (; r < e.length;) {
		let t = e[r];
		if (t === n) return { end: r + 1 };
		if (Cn(t)) return { reason: "a newline inside a quoted string makes a bad string" };
		if (t === "\\") {
			if (r + 1 >= e.length) break;
			r = Cn(e[r + 1]) ? r + 2 : Mn(e, r + 1);
			continue;
		}
		r++;
	}
	return { reason: `an unclosed ${n} string would swallow the rest of the rule` };
}
function Fn(e, t) {
	let n = t;
	for (; n < e.length;) {
		let t = e[n];
		if (t === ")") return { end: n + 1 };
		if (wn(t)) {
			for (; n < e.length && wn(e[n]);) n++;
			if (n >= e.length) break;
			return e[n] === ")" ? { end: n + 1 } : { reason: "whitespace inside an unquoted url() makes a bad url" };
		}
		if (kn.test(t)) return { reason: "a non-printable character inside url() makes a bad url" };
		if (t === "\"" || t === "'" || t === "(") return { reason: `"${t}" inside an unquoted url() makes a bad url; quote the URL instead` };
		if (t === "\\") {
			if (!An(e, n)) return { reason: "a stray backslash inside url() makes a bad url" };
			n = Mn(e, n + 1);
			continue;
		}
		n++;
	}
	return { reason: "an unclosed url( would swallow the rest of the rule" };
}
var In = {
	"(": ")",
	"[": "]",
	"{": "}"
};
function Ln(e) {
	let t = On(e), n = [], r = 0;
	for (; r < t.length;) {
		let e = t[r];
		if (e === "/" && t[r + 1] === "*") {
			let e = t.indexOf("*/", r + 2);
			if (e === -1) return "an unclosed /* comment would swallow the rest of the rule";
			r = e + 2;
			continue;
		}
		if (e === "\"" || e === "'") {
			let e = Pn(t, r);
			if ("reason" in e) return e.reason;
			r = e.end;
			continue;
		}
		if (jn(t, r)) {
			let e = Nn(t, r);
			if (r = e.end, t[r] === "(" && e.name.toLowerCase() === "url") {
				let e = r + 1;
				for (; e < t.length && wn(t[e]);) e++;
				if (t[e] === "\"" || t[e] === "'") {
					n.push(")"), r += 1;
					continue;
				}
				let i = Fn(t, e);
				if ("reason" in i) return i.reason;
				r = i.end;
			}
			continue;
		}
		if (e === "\\") {
			if (r + 1 >= t.length) return "a trailing backslash would escape the declaration terminator";
			r = Cn(t[r + 1]) ? r + 1 : Mn(t, r + 1);
			continue;
		}
		if (e === "(" || e === "[" || e === "{") {
			if (e === "{" && n.length === 0) return "an unquoted \"{\" would open a nested block";
			n.push(In[e]), r++;
			continue;
		}
		if (e === ")" || e === "]" || e === "}") {
			if (n.length === 0) return e === "}" ? "an unquoted \"}\" would close the rule" : `an unbalanced "${e}" has nothing to close`;
			let t = n.pop();
			if (t !== e) return `"${e}" does not close the open "${t === ")" ? "(" : t === "]" ? "[" : "{"}"`;
			r++;
			continue;
		}
		if (e === ";" && n.length === 0) return "an unquoted \";\" would end the declaration";
		r++;
	}
	if (n.length > 0) {
		let e = n[n.length - 1];
		return `an unclosed "${e === ")" ? "(" : e === "]" ? "[" : "{"}" would swallow the rest of the rule`;
	}
	return null;
}
function Rn(e) {
	let t = On(e);
	if (t.length === 0 || !jn(t, 0)) return "a property name must be a CSS identifier";
	let { end: n } = Nn(t, 0);
	return n === t.length ? null : `a property name must be one CSS identifier; "${t[n]}" cannot appear in one`;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/generateThemeRules.js
function zn(e) {
	return `[data-${ln}-theme="${e}"]`;
}
var Bn = `[data-${ln}-theme]`;
function Vn(e) {
	return `[data-${ln}-media="${e}"]`;
}
function Hn(e, t) {
	return `.${cn}-${e}${t}`;
}
function Un(e, t, n) {
	let r = Hn(e, t);
	return n ? `:is(${Vn(n)}) :is(${r})` : r;
}
var Wn = ":where(:not(:disabled,[aria-disabled=\"true\"]))";
function Gn(e, t) {
	let n = [], r = 0, i = 0;
	for (let t = 0; t < e.length; t++) {
		let a = e[t];
		a === "(" ? r++ : a === ")" ? r = Math.max(0, r - 1) : a === "," && r === 0 && (n.push(e.slice(i, t).trim()), i = t + 1);
	}
	n.push(e.slice(i).trim());
	let a = Kn(t);
	return n.map((e) => `${e}${a}`).join(", ");
}
function Kn(e) {
	if (!/^:hover(?![-\w])/.test(e) || e.includes("[aria-disabled")) return e;
	let t = e.indexOf("::");
	return t === -1 ? e + Wn : e.slice(0, t) + Wn + e.slice(t);
}
function qn(e) {
	return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
var Jn = /* @__PURE__ */ new Set([
	"padding",
	"paddingBlock",
	"paddingInline",
	"paddingBlockStart",
	"paddingBlockEnd",
	"paddingInlineStart",
	"paddingInlineEnd"
]), Yn = {
	paddingTop: "paddingBlockStart",
	paddingBottom: "paddingBlockEnd"
}, Xn = /* @__PURE__ */ new Set([...Jn, ...Object.keys(Yn)]);
function Zn(e) {
	let t = {};
	for (let [n, r] of e) switch (Yn[n] ?? n) {
		case "padding": {
			let e = r.trim().split(/\s+/);
			e.length === 1 ? (t.blockStart = e[0], t.blockEnd = e[0], t.inline = e[0]) : e.length === 2 ? (t.blockStart = e[0], t.blockEnd = e[0], t.inline = e[1]) : e.length >= 3 && (t.blockStart = e[0], t.inline = e[1], t.blockEnd = e[2]);
			break;
		}
		case "paddingBlock": {
			let e = r.trim().split(/\s+/);
			t.blockStart = e[0], t.blockEnd = e[1] ?? e[0];
			break;
		}
		case "paddingInline": {
			let e = r.trim().split(/\s+/);
			e.length === 1 ? t.inline = e[0] : (t.inlineStart = e[0], t.inlineEnd = e[1]);
			break;
		}
		case "paddingBlockStart":
			t.blockStart = r;
			break;
		case "paddingBlockEnd":
			t.blockEnd = r;
			break;
		case "paddingInlineStart":
			t.inlineStart = r;
			break;
		case "paddingInlineEnd": t.inlineEnd = r;
	}
	return t;
}
function Qn(e, t, n = !1) {
	let r = pn(`${e}-padding`), i = [], a = t.inlineStart ?? t.inline, o = t.inlineEnd ?? t.inline;
	if (a != null && o != null && a === o && t.blockStart != null && t.blockEnd != null && a === t.blockStart && t.blockStart === t.blockEnd ? i.push([r, a ?? ""]) : (t.inlineStart != null || t.inlineEnd != null ? (a != null && i.push([`${r}-inline-start`, a]), o != null && i.push([`${r}-inline-end`, o])) : t.inline != null && i.push([`${r}-inline`, t.inline]), t.blockStart != null && i.push([`${r}-block-start`, t.blockStart]), t.blockEnd != null && i.push([`${r}-block-end`, t.blockEnd])), n) {
		let e = new Set(i.map(([e]) => e)), t = e.has(r) ? [
			`${r}-inline`,
			`${r}-inline-start`,
			`${r}-inline-end`,
			`${r}-block-start`,
			`${r}-block-end`
		] : e.has(`${r}-inline`) ? [`${r}-inline-start`, `${r}-inline-end`] : [];
		for (let n of t) e.has(n) || i.push([n, "initial"]);
	}
	return i;
}
var $n = (e) => {
	console.warn(`[astryx theme] ${e}`);
};
function er(e) {
	return e ? (t) => e.push(t) : $n;
}
function tr(e) {
	let t = JSON.stringify(e);
	return t.length > 80 ? `${t.slice(0, 77)}..."` : t;
}
function nr(e, t, n, r, i) {
	e(`dropped "${t}" in ${r}: ${i} (value: ${tr(n)})`);
}
function rr(e, t, n, r) {
	let i = Rn(e) ?? Ln(t);
	return i === null || (nr(r, e, t, n, i), !1);
}
function ir(e, t, n, r = (e) => e) {
	let i = [];
	for (let [a, o] of e) {
		let e = `${o}`, s = r(a);
		rr(s, e, t, n) && i.push(`    ${s}: ${e};`);
	}
	return i.join("\n");
}
function ar(e, t, n) {
	let r = [ir(Object.entries(e.tokens), `${t}tokens`, n), ir(Object.entries(e.localTokens ?? {}), `${t}localTokens`, n)].filter((e) => e.length > 0).join("\n");
	return Object.keys(e.tokens).length > 0 || Object.keys(e.localTokens ?? {}).length > 0 ? `  :scope {\n${r}\n  }` : null;
}
function or(e, t, n) {
	return `${e}components.${t}[${JSON.stringify(n)}]`;
}
function sr(e, t) {
	let n = [], r = er(t), i = (e) => `var(${e})`, a = ar(e, "", r);
	return a !== null && n.push(a), e.tokens["--font-family-body"] && n.push("  :scope {\n    font-family: var(--font-family-body);\n  }"), e.components && dr(e.components, n, { sink: r }), fr(i, n), pr(e.components || {}, n), hr(e.components || {}, n), lr(e.components || {}, n), n;
}
var cr = {
	normal: "var(--font-weight-normal)",
	medium: "var(--font-weight-medium)",
	semibold: "var(--font-weight-semibold)",
	bold: "var(--font-weight-bold)"
};
function lr(e, t, { surface: n, inheritedComponents: r, forceAll: i = !1, authoredOnly: a = !1 } = {}) {
	let o = e.heading, s = o && typeof o == "object" && !Array.isArray(o) ? o : void 0;
	if (!s && !i) return;
	let c = r?.heading, l = c && typeof c == "object" ? c : void 0;
	for (let [e, r] of Object.entries(cr)) {
		let i = `weight:${e}`, o = s ? ur(s, i) : void 0;
		if (a && o === void 0) continue;
		let c = l ? ur(l, i) : void 0, u = o ?? c ?? r, d = Un("heading", yn(i), n);
		t.push(`  ${d} { font-weight: ${u}; }`);
	}
}
function ur(e, t) {
	let n = e[t];
	if (typeof n != "object" || !n || Array.isArray(n)) return;
	let r = n.fontWeight;
	return typeof r == "string" && Ln(r) === null ? r : void 0;
}
function dr(e, t, { resetInheritedPaddingSpecificity: n = !1, surface: r, sink: i = $n, location: a = "" } = {}) {
	for (let [o, s] of Object.entries(e)) for (let [e, c] of Object.entries(s)) {
		let s = Object.entries(c);
		if (s.length === 0) continue;
		let l = Un(o, yn(e), r), u = or(a, o, e), d = [], f = [];
		for (let [e, t] of s) e.startsWith(":") && typeof t == "object" ? f.push([e, t]) : rr(qn(e), `${t}`, u, i) && d.push([e, t]);
		let p = d, m = [], h = !1, g = /* @__PURE__ */ new Set();
		for (let [e, t] of d) {
			let n = Sn(o, e), r = Jn.has(e) && e !== "padding" ? Sn(o, "padding") : [];
			for (let i of [...n, ...r]) if (i.expand === "container" && Jn.has(e) && (h = !0), i.replaces && g.add(e), i.vars) for (let e of i.vars) m.push([e, t]);
			e in Yn && Sn(o, "padding").some((e) => e.expand === "container") && (h = !0);
		}
		if (h) {
			let e = d.filter(([e]) => Xn.has(e)), t = d.filter(([e]) => !Xn.has(e)), r = Qn(o, Zn(e), n);
			p = [...t, ...r];
		}
		if (g.size > 0 && (p = p.filter(([e]) => !g.has(e))), m.length > 0 && (p = [...p, ...m]), p.length > 0) {
			let e = ir(p, u, i, qn);
			t.push(`  ${l} {\n${e}\n  }`);
		}
		for (let [e, n] of f) {
			let r = Object.entries(n);
			if (r.length > 0) {
				let n = ir(r, `${u}[${JSON.stringify(e)}]`, i, qn);
				t.push(`  ${Gn(l, e)} {\n${n}\n  }`);
			}
		}
	}
}
function fr(e, t) {
	t.push("  :where(h1, h2, h3, h4, h5, h6) {\n    font-family: var(--font-family-heading);\n    color: var(--color-text-primary);\n  }");
	for (let n = 1; n <= 6; n++) t.push(`  :where(h${n}) {
    font-size: ${e(`--text-heading-${n}-size`)};
    font-weight: ${e(`--text-heading-${n}-weight`)};
    line-height: ${e(`--text-heading-${n}-leading`)};
  }`);
	t.push(`  :where(p) {
    font-family: var(--font-family-body);
    font-size: ${e("--text-body-size")};
    font-weight: ${e("--text-body-weight")};
    line-height: ${e("--text-body-leading")};
    color: var(--color-text-primary);
  }`), t.push(`  :where(small) {
    font-size: ${e("--text-supporting-size")};
    font-weight: ${e("--text-supporting-weight")};
    line-height: ${e("--text-supporting-leading")};
    color: var(--color-text-secondary);
  }`), t.push(`  :where(code, pre) {
    font-family: var(--font-family-code);
    font-size: ${e("--text-code-size")};
    line-height: ${e("--text-code-leading")};
  }`), t.push("  :where(hr) {\n    border: none;\n    border-top: 1px solid var(--color-border);\n  }");
}
function pr(e, t, n) {
	let r = {
		primary: "var(--color-text-primary)",
		secondary: "var(--color-text-secondary)",
		disabled: "var(--color-text-disabled)",
		placeholder: "var(--color-text-secondary)",
		accent: "var(--color-text-accent)"
	}, i = "text" in e, a = "heading" in e, o = "link" in e;
	if (i || a || o) for (let [e, s] of Object.entries(r)) i && t.push(`  ${Un("text", yn(`color:${e}`), n)} { color: ${s}; }`), a && t.push(`  ${Un("heading", yn(`color:${e}`), n)} { color: ${s}; }`), o && t.push(`  ${Un("link", yn(`color:${e}`), n)} { color: ${s}; }`);
}
var mr = {
	"4xs": "var(--font-size-4xs)",
	"3xs": "var(--font-size-3xs)",
	"2xs": "var(--font-size-2xs)",
	xsm: "var(--font-size-xs)",
	sm: "var(--font-size-sm)",
	base: "var(--font-size-base)",
	lg: "var(--font-size-lg)",
	xl: "var(--font-size-xl)",
	"2xl": "var(--font-size-2xl)",
	"3xl": "var(--font-size-3xl)",
	"4xl": "var(--font-size-4xl)"
};
function hr(e, t, n) {
	if ("text" in e) for (let [e, r] of Object.entries(mr)) {
		let i = yn(`size:${e}`);
		t.push(`  ${Un("text", i, n)} { font-size: ${r}; }`);
	}
}
function gr(e, t) {
	let n = sr(e, t), r = [], i = [];
	for (let e of n) e.trimStart().startsWith(":where(") ? r.push(e) : i.push(e);
	return {
		component: i,
		prose: r
	};
}
function _r(e, t) {
	let n = [], r = zn(e.name), i = er(t);
	for (let t of ["dark", "light"]) {
		let r = t === "dark" ? e.__onDark : e.__onLight;
		if (!r) continue;
		let a = t === "dark" ? "onDark." : "onLight.", o = Object.entries(r.tokens);
		if (o.length > 0) {
			let e = ir(o, `${a}tokens`, i);
			n.push(`  ${Vn(t)} {\n${e}\n  }`);
		}
		r.components && (dr(r.components, n, {
			resetInheritedPaddingSpecificity: !0,
			surface: t,
			sink: i,
			location: a
		}), pr(r.components, n, t), hr(r.components, n, t), lr(r.components, n, {
			surface: t,
			inheritedComponents: e.components
		}));
	}
	return n.length === 0 ? "" : `@scope (${r}) to (${Bn}) {\n${n.join("\n\n")}\n}`;
}
function vr(e, t, n) {
	let r = [], i = ar(e, t, n);
	return i !== null && r.push(i), e.components && (dr(e.components, r, {
		resetInheritedPaddingSpecificity: !0,
		sink: n,
		location: t
	}), pr(e.components, r), hr(e.components, r)), r;
}
function yr(e) {
	let t = e?.heading;
	return typeof t == "object" && !!t && !Array.isArray(t);
}
function br(e, t, n) {
	return `@media ${e} {\n  @scope (${n}) to (${Bn}) {\n${t.map(Sr).join("\n\n")}\n  }\n}`;
}
function xr(e, t) {
	let n = er(t), r = e.__adaptations === void 0 ? void 0 : zt(e.name, e.__adaptations, void 0), i = e.__adaptationRules ?? (r ? $t(e.name, r, e.__axes ?? {}, e.tokens, e.localTokens, e.components) : void 0);
	if (!i || i.length === 0) return {
		prose: "",
		component: ""
	};
	let a = zn(e.name), o = [], s = i.some((e) => yr(e.components));
	for (let [e, t] of i.entries()) {
		let r = vr(t, `adaptations[${e}].`, n);
		r.length !== 0 && o.push(br(t.query, r, a));
	}
	if (s) {
		let t = [];
		lr(e.components ?? {}, t, { forceAll: !0 }), o.push(`@scope (${a}) to (${Bn}) {\n${t.join("\n\n")}\n}`);
		for (let e of i) {
			let t = [];
			lr(e.components ?? {}, t, { authoredOnly: !0 }), t.length > 0 && o.push(br(e.query, t, a));
		}
	}
	return {
		prose: "",
		component: o.join("\n\n")
	};
}
function Sr(e) {
	return `  ${e}`;
}
function Cr() {
	return `:root {\n${Object.entries(tn).map(([e, t]) => `  ${e}: ${t};`).join("\n")}\n}`;
}
function wr(e, t) {
	let { component: n, prose: r } = gr(e, t), i = zn(e.name), a = Bn, o = "";
	r.length > 0 && (o = `@scope (${i}) to (${a}) {\n${r.join("\n\n")}\n}`);
	let s = "";
	n.length > 0 && (s = `@scope (${i}) to (${a}) {\n${n.join("\n\n")}\n}`);
	let c = xr(e, t);
	c.component && (s = s ? `${s}\n\n${c.component}` : c.component);
	let l = _r(e, t);
	return l && (s = s ? `${s}\n\n${l}` : l), {
		prose: o,
		component: s
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/defineTheme.js
var Tr = {
	...T,
	...D,
	...k,
	...A,
	...j,
	...N,
	...P,
	...F,
	...I,
	...L,
	...ne,
	...R,
	...re,
	...nn
};
function Er(e) {
	if (e === void 0) return "undefined";
	if (e === null) return "null";
	if (typeof e != "object") return typeof e;
	let t = Object.keys(e);
	return `an object with keys [${t.slice(0, 4).join(", ")}${t.length > 4 ? ", …" : ""}]`;
}
function Dr(e) {
	if ("extends" in e && !Or(e.extends)) throw Error(`defineTheme("${e.name}"): \`extends\` must be a theme from defineTheme(), got ${Er(e.extends)}. Check that the import naming your base theme resolves to its source and exports that name — a generated \`<theme>.js\` artifact sitting next to the source exports \`<name>Theme\`, not the source's own export.`);
	let t = e.extends, n = {
		typography: e.typography,
		color: e.color,
		radius: e.radius,
		motion: e.motion,
		syntax: e.syntax,
		tokens: e.tokens,
		components: e.components
	}, r = {
		typography: e.typography,
		color: e.color,
		radius: e.radius,
		motion: e.motion
	}, { tokens: i, components: a } = ct(n, t ? {
		tokens: t.tokens,
		components: t.components
	} : void 0), o = ce("dark", e.onDark, t?.__onDark), s = ce("light", e.onLight, t?.__onLight), c = vt(e, t, i, Tr), l = Zt(t?.__axes, r), u = zt(e.name, t?.__adaptations, e.adaptations), d = $t(e.name, u, l, i, c?.localTokens, a), f = e.icons && t?.icons ? {
		...t.icons,
		...e.icons
	} : e.icons ?? t?.icons, p = e.indicators && t?.indicators ? {
		...t.indicators,
		...e.indicators
	} : e.indicators ?? t?.indicators, m = {
		name: e.name,
		tokens: i,
		...c ? {
			localTokens: c.localTokens,
			__localTokenOwners: c.owners,
			__localTokenLineage: c.lineage
		} : {},
		components: a,
		icons: f,
		indicators: p,
		__inputTokens: t?.__inputTokens || e.tokens ? {
			...t?.__inputTokens,
			...e.tokens
		} : void 0,
		__onDark: o,
		__onLight: s,
		__adaptations: u,
		__adaptationRules: d,
		__axes: l
	};
	return an(m), m;
}
function Or(e) {
	return typeof e == "object" && !!e && "name" in e && "tokens" in e && !("styles" in e);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useMediaQuery.js
function kr(e, t = !1) {
	let n = (0, v.useCallback)((t) => {
		let n = window.matchMedia(e);
		return n.addEventListener("change", t), () => n.removeEventListener("change", t);
	}, [e]), r = (0, v.useCallback)(() => window.matchMedia(e).matches, [e]), i = (0, v.useCallback)(() => t, [t]);
	return (0, v.useSyncExternalStore)(n, r, i);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/useTheme.js
var Ar = /*#__PURE__*/ (0, v.createContext)(null);
Ar.displayName = "ThemeContext";
function jr() {
	return typeof document > "u" ? null : document.documentElement.getAttribute(fn("theme"));
}
function Mr() {
	return null;
}
function Nr() {
	return null;
}
var Pr = /* @__PURE__ */ new Set(), Fr = null;
function Ir() {
	for (let e of Pr) e();
}
function Lr(e) {
	return Pr.add(e), Pr.size === 1 && typeof MutationObserver < "u" && (Fr = new MutationObserver(Ir), Fr.observe(document.documentElement, {
		attributes: !0,
		attributeFilter: [fn("theme")]
	})), () => {
		Pr.delete(e), Pr.size === 0 && Fr && (Fr.disconnect(), Fr = null);
	};
}
function Rr() {
	return () => {};
}
function zr(e) {
	return (0, v.useSyncExternalStore)(e ? Rr : Lr, e ? Nr : jr, Mr);
}
function Br() {
	let e = (0, v.use)(Ar), t = zr(e != null);
	return e?.theme.name ?? t;
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
var Vr = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), W = (/* @__PURE__ */ o(((e, t) => {
	t.exports = Vr();
})))(), Hr = {
	base: {
		k1xSpc: "xjp7ctv",
		kMwMTN: "x1tgivj0",
		kMv6JI: "x9ynric",
		$$css: !0
	},
	light: {
		kQNsl9: "x19aimcq",
		$$css: !0
	},
	dark: {
		kQNsl9: "xntwwlm",
		$$css: !0
	},
	system: {
		kQNsl9: "x108lcm5",
		$$css: !0
	}
}, Ur = /*#__PURE__*/ v.createContext(!1);
Ur.displayName = "ThemeNestingContext";
var Wr = /* @__PURE__ */ new Set(), Gr = 0;
function Kr(e) {
	let t = (0, v.useId)();
	(0, v.useInsertionEffect)(() => {
		if (e.__built) return;
		let n = `astryx-theme-${e.name}`;
		if (Wr.has(n)) return;
		`${e.name}`, `${e.name}${e.name}${e.name}${e.name}`;
		let { prose: r, component: i } = wr(e), a = Cr();
		Wr.add(n);
		let o = [() => Wr.delete(n)];
		if (a) {
			if (Gr++ === 0) {
				let e = document.createElement("style");
				e.setAttribute(fn("theme-base"), ""), e.textContent = `@layer astryx-base {\n${a}\n}`, document.head.appendChild(e);
			}
			o.push(() => {
				--Gr === 0 && document.querySelector(`style[${fn("theme-base")}]`)?.remove();
			});
		}
		if (r) {
			let n = document.createElement("style");
			n.setAttribute(fn("theme-prose"), e.name), n.setAttribute(fn("id"), t), n.textContent = `@layer reset {\n${r}\n}`, document.head.appendChild(n);
		}
		if (i) {
			let n = document.createElement("style");
			n.setAttribute(fn("theme"), e.name), n.setAttribute(fn("id"), t), n.textContent = `@layer astryx-theme {\n${i}\n}`, document.head.appendChild(n);
		}
		return (r || i) && o.push(() => {
			let n = document.querySelector(`style[${fn("theme-prose")}="${e.name}"][${fn("id")}="${t}"]`), r = document.querySelector(`style[${fn("theme")}="${e.name}"][${fn("id")}="${t}"]`);
			n?.remove(), r?.remove();
		}), () => {
			for (let e of o) e();
		};
	}, [e, t]);
}
function qr(e, t, n) {
	y(() => {
		if (!e && typeof document < "u") return t === "light" || t === "dark" ? document.documentElement.setAttribute("data-theme", t) : document.documentElement.removeAttribute("data-theme"), document.documentElement.setAttribute(fn("theme"), n), () => {
			document.documentElement.removeAttribute("data-theme"), document.documentElement.removeAttribute(fn("theme"));
		};
	}, [
		e,
		t,
		n
	]);
}
function Jr({ theme: e, mode: t = "system", children: n }) {
	let r = (0, v.use)(Ur);
	an(e), Kr(e), qr(r, t, e.name);
	let i = t === "dark" ? Hr.dark : t === "light" ? Hr.light : Hr.system, a = (0, v.useMemo)(() => ({
		theme: e,
		mode: t
	}), [e, t]);
	return /*#__PURE__*/ (0, W.jsx)(Ar, {
		value: a,
		children: /*#__PURE__*/ (0, W.jsx)(Ur, {
			value: !0,
			children: /*#__PURE__*/ (0, W.jsx)("div", {
				...w(Hr.base, i),
				"data-astryx-theme": e.name,
				"data-theme": t === "system" ? void 0 : t,
				children: n
			})
		})
	});
}
Jr.displayName = "Theme";
//#endregion
//#region node_modules/@astryxdesign/core/dist/theme/syntax/defineSyntaxTheme.js
var Yr = "--color-syntax-", Xr = Object.keys(en).map((e) => e.replace(Yr, ""));
function Zr(e) {
	return Array.isArray(e) ? `light-dark(${e[0]}, ${e[1]})` : e;
}
function Qr(e) {
	let t = Xr.filter((t) => !(t in e.tokens));
	t.length > 0 && `${e.name}${t.join(", ")}`;
	let n = {};
	for (let t of Xr) n[t] = Zr(e.tokens[t]);
	return {
		name: e.name,
		tokens: n,
		__inputTokens: { ...e.tokens }
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/layerScopedContext.js
var $r = [];
function ei(e) {
	let t = /*#__PURE__*/ (0, v.createContext)(e);
	return t.displayName = "LayerScopedContext", $r.push((n) => /*#__PURE__*/ (0, W.jsx)(t, {
		value: e,
		children: n
	})), t;
}
function ti({ children: e }) {
	let [t] = (0, v.useState)(() => $r.slice());
	return t.reduceRight((e, t) => t(e), e);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/anchorName.js
function ni(e) {
	return (e.style.anchorName ?? "").split(",").map((e) => e.trim()).filter(Boolean);
}
function ri(e, t) {
	e.style.anchorName = t.join(", ");
}
function ii(e, t) {
	let n = ni(e);
	n.includes(t) || (n.push(t), ri(e, n));
}
function ai(e, t) {
	ri(e, ni(e).filter((e) => e !== t));
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/gestureCounter.js
var oi = 0, si = null, ci = !1;
function li() {
	oi += 1;
}
function ui() {
	si = oi;
}
function di() {
	ci || typeof document > "u" || (ci = !0, document.addEventListener("pointerdown", li, !0), document.addEventListener("keydown", li, !0), document.addEventListener("click", ui, !0));
}
function fi() {
	return di(), oi;
}
function pi() {
	return di(), si === oi;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/layerHost.js
var mi = /* @__PURE__ */ new Set(/* @__PURE__ */ "p.h1.h2.h3.h4.h5.h6.dt.pre.legend.data.dfn.meter.output.progress.option.optgroup.table.thead.tbody.tfoot.tr.colgroup.ul.ol.menu.dl.select.datalist.picture.hgroup.ruby.rt.rp.a.button.label.summary.span.em.strong.b.i.u.s.small.mark.code.kbd.samp.var.sub.sup.abbr.cite.q.time.bdi.bdo.ins.del".split("."));
function hi(e) {
	if (!e) return null;
	let t = null, n = e;
	for (; n;) mi.has(n.tagName.toLowerCase()) && (t = n), n = n.parentElement;
	return t?.parentElement ?? null;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/layerTextReset.stylex.js
var gi = { reset: {
	kMv6JI: "x9ynric",
	kGuDYH: "xjm74w1",
	k63SB2: "xxovm9e",
	kLWn49: "xw6l6zx",
	kKX8nH: "x1j61x8r",
	k9WMMc: "x1yc453h",
	kJI5tL: "x7ssn7h",
	kTHuQy: "xzugeeo",
	kP9fke: "x6mezaz",
	kb6lSQ: "x1i21sxh",
	k4JVr9: "xp3md9m",
	kKMj4B: "x19pm5ym",
	khDVqt: "xeaf4i8",
	kTgw9: "x1lldw8n",
	kHjlTd: "x1h4wwuj",
	kE4Cay: "xxydokm",
	$$css: !0
} }, _i = {
	0: "spacing0",
	.5: "spacing0_5",
	1: "spacing1",
	1.5: "spacing1_5",
	2: "spacing2",
	3: "spacing3",
	4: "spacing4",
	5: "spacing5",
	6: "spacing6",
	8: "spacing8",
	10: "spacing10"
}, vi = {
	0: {
		kZCmMZ: "x18gyask",
		kwRFfy: "x1s0aq8i",
		kLKAdn: "x1ydh6w3",
		kGO01o: "x1l20ajd",
		$$css: !0
	},
	1: {
		kZCmMZ: "x1vsv5vr",
		kwRFfy: "x1nryj5t",
		kLKAdn: "xfsso4q",
		kGO01o: "xy143xn",
		$$css: !0
	},
	2: {
		kZCmMZ: "x12gdq22",
		kwRFfy: "x1djylfy",
		kLKAdn: "x1xye8es",
		kGO01o: "x1wesfrj",
		$$css: !0
	},
	3: {
		kZCmMZ: "x126nfab",
		kwRFfy: "x1t818jl",
		kLKAdn: "x1vlblms",
		kGO01o: "xvmdzux",
		$$css: !0
	},
	4: {
		kZCmMZ: "x1rey3nv",
		kwRFfy: "xnjyzlh",
		kLKAdn: "x1oa1p4a",
		kGO01o: "x1awphl8",
		$$css: !0
	},
	5: {
		kZCmMZ: "x1blguxw",
		kwRFfy: "xdbrk9v",
		kLKAdn: "xx7rijo",
		kGO01o: "x1hk98q",
		$$css: !0
	},
	6: {
		kZCmMZ: "x31w388",
		kwRFfy: "x1we12cn",
		kLKAdn: "x1adxfkp",
		kGO01o: "xjpqqx5",
		$$css: !0
	},
	8: {
		kZCmMZ: "x1j3hnjz",
		kwRFfy: "x1q91b2g",
		kLKAdn: "xoxd1wu",
		kGO01o: "x2oz4g1",
		$$css: !0
	},
	10: {
		kZCmMZ: "xqp078j",
		kwRFfy: "x160ivqr",
		kLKAdn: "xk6660b",
		kGO01o: "x2izi54",
		$$css: !0
	},
	"0.5": {
		kZCmMZ: "x138rykx",
		kwRFfy: "x1le3yxw",
		kLKAdn: "xbx876j",
		kGO01o: "xij103a",
		$$css: !0
	},
	"1.5": {
		kZCmMZ: "xfti1ec",
		kwRFfy: "x17hk9do",
		kLKAdn: "x1kwdpsa",
		kGO01o: "x1opdxmq",
		$$css: !0
	}
}, yi = {
	0: {
		"--container-padding-inline-start": "x1gu2k80",
		"--container-padding-inline-end": "x91ghl5",
		$$css: !0
	},
	1: {
		"--container-padding-inline-start": "x1cvlban",
		"--container-padding-inline-end": "x2oyxnl",
		$$css: !0
	},
	2: {
		"--container-padding-inline-start": "x1xlrr2o",
		"--container-padding-inline-end": "xcas3b9",
		$$css: !0
	},
	3: {
		"--container-padding-inline-start": "xfdwxua",
		"--container-padding-inline-end": "xu0ipoa",
		$$css: !0
	},
	4: {
		"--container-padding-inline-start": "x1dlhslv",
		"--container-padding-inline-end": "xs0pscg",
		$$css: !0
	},
	5: {
		"--container-padding-inline-start": "x1s81nki",
		"--container-padding-inline-end": "xgkj7vj",
		$$css: !0
	},
	6: {
		"--container-padding-inline-start": "x1ep0dkj",
		"--container-padding-inline-end": "x94cj42",
		$$css: !0
	},
	8: {
		"--container-padding-inline-start": "xw1diwv",
		"--container-padding-inline-end": "x1b9k1pi",
		$$css: !0
	},
	10: {
		"--container-padding-inline-start": "xserb3f",
		"--container-padding-inline-end": "xx5lg5w",
		$$css: !0
	},
	"0.5": {
		"--container-padding-inline-start": "x14ws0sr",
		"--container-padding-inline-end": "x1wz3t3y",
		$$css: !0
	},
	"1.5": {
		"--container-padding-inline-start": "x176g23i",
		"--container-padding-inline-end": "xntetml",
		$$css: !0
	}
}, bi = {
	0: {
		"--container-padding-block-start": "x1i3qcxz",
		$$css: !0
	},
	1: {
		"--container-padding-block-start": "xnsckjb",
		$$css: !0
	},
	2: {
		"--container-padding-block-start": "xa8b4fq",
		$$css: !0
	},
	3: {
		"--container-padding-block-start": "x11k4f5r",
		$$css: !0
	},
	4: {
		"--container-padding-block-start": "xm01sq8",
		$$css: !0
	},
	5: {
		"--container-padding-block-start": "xp8wdkl",
		$$css: !0
	},
	6: {
		"--container-padding-block-start": "x1hmud4d",
		$$css: !0
	},
	8: {
		"--container-padding-block-start": "xfv60at",
		$$css: !0
	},
	10: {
		"--container-padding-block-start": "x17h9kl7",
		$$css: !0
	},
	"0.5": {
		"--container-padding-block-start": "xvdf9ev",
		$$css: !0
	},
	"1.5": {
		"--container-padding-block-start": "x1kbx601",
		$$css: !0
	}
}, xi = {
	0: {
		"--container-padding-block-end": "xkunwnr",
		$$css: !0
	},
	1: {
		"--container-padding-block-end": "x57a7ii",
		$$css: !0
	},
	2: {
		"--container-padding-block-end": "x1lsgcmx",
		$$css: !0
	},
	3: {
		"--container-padding-block-end": "x1q3ppug",
		$$css: !0
	},
	4: {
		"--container-padding-block-end": "x4hfsld",
		$$css: !0
	},
	5: {
		"--container-padding-block-end": "xbib2ws",
		$$css: !0
	},
	6: {
		"--container-padding-block-end": "x1q8d17g",
		$$css: !0
	},
	8: {
		"--container-padding-block-end": "x8lgq76",
		$$css: !0
	},
	10: {
		"--container-padding-block-end": "x15vxphk",
		$$css: !0
	},
	"0.5": {
		"--container-padding-block-end": "x1cao3zv",
		$$css: !0
	},
	"1.5": {
		"--container-padding-block-end": "xv53x8y",
		$$css: !0
	}
}, Si = {
	0: {
		kZCmMZ: "x18gyask",
		kwRFfy: "x1s0aq8i",
		$$css: !0
	},
	1: {
		kZCmMZ: "x1vsv5vr",
		kwRFfy: "x1nryj5t",
		$$css: !0
	},
	2: {
		kZCmMZ: "x12gdq22",
		kwRFfy: "x1djylfy",
		$$css: !0
	},
	3: {
		kZCmMZ: "x126nfab",
		kwRFfy: "x1t818jl",
		$$css: !0
	},
	4: {
		kZCmMZ: "x1rey3nv",
		kwRFfy: "xnjyzlh",
		$$css: !0
	},
	5: {
		kZCmMZ: "x1blguxw",
		kwRFfy: "xdbrk9v",
		$$css: !0
	},
	6: {
		kZCmMZ: "x31w388",
		kwRFfy: "x1we12cn",
		$$css: !0
	},
	8: {
		kZCmMZ: "x1j3hnjz",
		kwRFfy: "x1q91b2g",
		$$css: !0
	},
	10: {
		kZCmMZ: "xqp078j",
		kwRFfy: "x160ivqr",
		$$css: !0
	},
	"0.5": {
		kZCmMZ: "x138rykx",
		kwRFfy: "x1le3yxw",
		$$css: !0
	},
	"1.5": {
		kZCmMZ: "xfti1ec",
		kwRFfy: "x17hk9do",
		$$css: !0
	}
}, Ci = {
	0: {
		kLKAdn: "x1ydh6w3",
		kGO01o: "x1l20ajd",
		$$css: !0
	},
	1: {
		kLKAdn: "xfsso4q",
		kGO01o: "xy143xn",
		$$css: !0
	},
	2: {
		kLKAdn: "x1xye8es",
		kGO01o: "x1wesfrj",
		$$css: !0
	},
	3: {
		kLKAdn: "x1vlblms",
		kGO01o: "xvmdzux",
		$$css: !0
	},
	4: {
		kLKAdn: "x1oa1p4a",
		kGO01o: "x1awphl8",
		$$css: !0
	},
	5: {
		kLKAdn: "xx7rijo",
		kGO01o: "x1hk98q",
		$$css: !0
	},
	6: {
		kLKAdn: "x1adxfkp",
		kGO01o: "xjpqqx5",
		$$css: !0
	},
	8: {
		kLKAdn: "xoxd1wu",
		kGO01o: "x2oz4g1",
		$$css: !0
	},
	10: {
		kLKAdn: "xk6660b",
		kGO01o: "x2izi54",
		$$css: !0
	},
	"0.5": {
		kLKAdn: "xbx876j",
		kGO01o: "xij103a",
		$$css: !0
	},
	"1.5": {
		kLKAdn: "x1kwdpsa",
		kGO01o: "x1opdxmq",
		$$css: !0
	}
}, wi = {
	0: {
		kZCmMZ: "x18gyask",
		$$css: !0
	},
	1: {
		kZCmMZ: "x1vsv5vr",
		$$css: !0
	},
	2: {
		kZCmMZ: "x12gdq22",
		$$css: !0
	},
	3: {
		kZCmMZ: "x126nfab",
		$$css: !0
	},
	4: {
		kZCmMZ: "x1rey3nv",
		$$css: !0
	},
	5: {
		kZCmMZ: "x1blguxw",
		$$css: !0
	},
	6: {
		kZCmMZ: "x31w388",
		$$css: !0
	},
	8: {
		kZCmMZ: "x1j3hnjz",
		$$css: !0
	},
	10: {
		kZCmMZ: "xqp078j",
		$$css: !0
	},
	"0.5": {
		kZCmMZ: "x138rykx",
		$$css: !0
	},
	"1.5": {
		kZCmMZ: "xfti1ec",
		$$css: !0
	}
}, Ti = {
	0: {
		kwRFfy: "x1s0aq8i",
		$$css: !0
	},
	1: {
		kwRFfy: "x1nryj5t",
		$$css: !0
	},
	2: {
		kwRFfy: "x1djylfy",
		$$css: !0
	},
	3: {
		kwRFfy: "x1t818jl",
		$$css: !0
	},
	4: {
		kwRFfy: "xnjyzlh",
		$$css: !0
	},
	5: {
		kwRFfy: "xdbrk9v",
		$$css: !0
	},
	6: {
		kwRFfy: "x1we12cn",
		$$css: !0
	},
	8: {
		kwRFfy: "x1q91b2g",
		$$css: !0
	},
	10: {
		kwRFfy: "x160ivqr",
		$$css: !0
	},
	"0.5": {
		kwRFfy: "x1le3yxw",
		$$css: !0
	},
	"1.5": {
		kwRFfy: "x17hk9do",
		$$css: !0
	}
}, Ei = {
	0: {
		"--container-padding-inline-start": "x1gu2k80",
		$$css: !0
	},
	1: {
		"--container-padding-inline-start": "x1cvlban",
		$$css: !0
	},
	2: {
		"--container-padding-inline-start": "x1xlrr2o",
		$$css: !0
	},
	3: {
		"--container-padding-inline-start": "xfdwxua",
		$$css: !0
	},
	4: {
		"--container-padding-inline-start": "x1dlhslv",
		$$css: !0
	},
	5: {
		"--container-padding-inline-start": "x1s81nki",
		$$css: !0
	},
	6: {
		"--container-padding-inline-start": "x1ep0dkj",
		$$css: !0
	},
	8: {
		"--container-padding-inline-start": "xw1diwv",
		$$css: !0
	},
	10: {
		"--container-padding-inline-start": "xserb3f",
		$$css: !0
	},
	"0.5": {
		"--container-padding-inline-start": "x14ws0sr",
		$$css: !0
	},
	"1.5": {
		"--container-padding-inline-start": "x176g23i",
		$$css: !0
	}
}, Di = {
	0: {
		"--container-padding-inline-end": "x91ghl5",
		$$css: !0
	},
	1: {
		"--container-padding-inline-end": "x2oyxnl",
		$$css: !0
	},
	2: {
		"--container-padding-inline-end": "xcas3b9",
		$$css: !0
	},
	3: {
		"--container-padding-inline-end": "xu0ipoa",
		$$css: !0
	},
	4: {
		"--container-padding-inline-end": "xs0pscg",
		$$css: !0
	},
	5: {
		"--container-padding-inline-end": "xgkj7vj",
		$$css: !0
	},
	6: {
		"--container-padding-inline-end": "x94cj42",
		$$css: !0
	},
	8: {
		"--container-padding-inline-end": "x1b9k1pi",
		$$css: !0
	},
	10: {
		"--container-padding-inline-end": "xx5lg5w",
		$$css: !0
	},
	"0.5": {
		"--container-padding-inline-end": "x1wz3t3y",
		$$css: !0
	},
	"1.5": {
		"--container-padding-inline-end": "xntetml",
		$$css: !0
	}
}, Oi = {
	0: {
		kLKAdn: "x1ydh6w3",
		$$css: !0
	},
	1: {
		kLKAdn: "xfsso4q",
		$$css: !0
	},
	2: {
		kLKAdn: "x1xye8es",
		$$css: !0
	},
	3: {
		kLKAdn: "x1vlblms",
		$$css: !0
	},
	4: {
		kLKAdn: "x1oa1p4a",
		$$css: !0
	},
	5: {
		kLKAdn: "xx7rijo",
		$$css: !0
	},
	6: {
		kLKAdn: "x1adxfkp",
		$$css: !0
	},
	8: {
		kLKAdn: "xoxd1wu",
		$$css: !0
	},
	10: {
		kLKAdn: "xk6660b",
		$$css: !0
	},
	"0.5": {
		kLKAdn: "xbx876j",
		$$css: !0
	},
	"1.5": {
		kLKAdn: "x1kwdpsa",
		$$css: !0
	}
}, ki = {
	0: {
		kGO01o: "x1l20ajd",
		$$css: !0
	},
	1: {
		kGO01o: "xy143xn",
		$$css: !0
	},
	2: {
		kGO01o: "x1wesfrj",
		$$css: !0
	},
	3: {
		kGO01o: "xvmdzux",
		$$css: !0
	},
	4: {
		kGO01o: "x1awphl8",
		$$css: !0
	},
	5: {
		kGO01o: "x1hk98q",
		$$css: !0
	},
	6: {
		kGO01o: "xjpqqx5",
		$$css: !0
	},
	8: {
		kGO01o: "x2oz4g1",
		$$css: !0
	},
	10: {
		kGO01o: "x2izi54",
		$$css: !0
	},
	"0.5": {
		kGO01o: "xij103a",
		$$css: !0
	},
	"1.5": {
		kGO01o: "x1opdxmq",
		$$css: !0
	}
}, Ai = {
	0: {
		"--_section-padding-propagated": "x7mo41q",
		$$css: !0
	},
	1: {
		"--_section-padding-propagated": "x1j3iakl",
		$$css: !0
	},
	2: {
		"--_section-padding-propagated": "xezgk69",
		$$css: !0
	},
	3: {
		"--_section-padding-propagated": "x1wtz8uf",
		$$css: !0
	},
	4: {
		"--_section-padding-propagated": "x5wdj8h",
		$$css: !0
	},
	5: {
		"--_section-padding-propagated": "xgjndll",
		$$css: !0
	},
	6: {
		"--_section-padding-propagated": "x15i4jqh",
		$$css: !0
	},
	8: {
		"--_section-padding-propagated": "xmb9lpv",
		$$css: !0
	},
	10: {
		"--_section-padding-propagated": "x4h2jfd",
		$$css: !0
	},
	"0.5": {
		"--_section-padding-propagated": "x2ccaqq",
		$$css: !0
	},
	"1.5": {
		"--_section-padding-propagated": "xxa843v",
		$$css: !0
	}
}, ji = { reset: {
	"--container-padding-inline-start": "xrhngw9",
	"--container-padding-inline-end": "xjsfl84",
	"--container-padding-block-start": "x1047aw6",
	"--container-padding-block-end": "xax9j7h",
	"--layout-padding-outer-x": "xdt8ak2",
	"--layout-padding-outer-y": "x1rs4lu4",
	"--layout-padding-inner-x": "x1qfll2g",
	"--layout-padding-inner-y": "xyvxpqs",
	"--_section-padding-propagated": "x1f17rg1",
	$$css: !0
} }, Mi = h(), Ni = {
	keoZOQ: "x1vhfslr",
	k1K539: "xlm3tn6",
	$$css: !0
}, Pi = {
	base: {
		keoZOQ: "xdj266r",
		k1K539: "xat24cr",
		keTefX: "x1lziwak",
		k71WvV: "x14z9mp",
		kLKAdn: "xexx8yu",
		kGO01o: "x18d9i69",
		kZCmMZ: "x1c1uobl",
		kwRFfy: "xyri2b",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kVQacm: "x1rea2x4",
		kWkggS: "xjbqb8w",
		$$css: !0
	},
	fixed: {
		kVAEAm: "xixxii4",
		$$css: !0
	},
	offsetBlock: (e) => [Ni, {
		"--x-marginBlockStart": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e),
		"--x-marginBlockEnd": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e)
	}],
	offsetInline: (e) => [{
		keTefX: e == null ? e : "x4lel18",
		k71WvV: e == null ? e : "x1c9tiao",
		$$css: !0
	}, {
		"--x-marginInlineStart": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e),
		"--x-marginInlineEnd": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e)
	}]
};
function Fi(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function Ii(e, t) {
	let n = e.ownerDocument.defaultView;
	if (!n) return {};
	let r = n.getComputedStyle(e), i = n.getComputedStyle(t);
	return {
		...r.direction !== i.direction && { direction: r.direction },
		...r.writingMode !== i.writingMode && { writingMode: r.writingMode }
	};
}
function Li(e = "above", t = "center") {
	if (e === "above" || e === "below") {
		let n = e === "above" ? "self-block-start" : "self-block-end";
		return t === "start" ? `${n} span-self-inline-end` : t === "end" ? `${n} span-self-inline-start` : n;
	}
	let n = e === "start" ? "self-inline-start" : "self-inline-end";
	return t === "start" ? `${n} span-self-block-end` : t === "end" ? `${n} span-self-block-start` : n;
}
function Ri(e = "above", t = "center") {
	let n = "flip-block, flip-inline, flip-block flip-inline";
	if (t !== "center") return n;
	if (e === "above" || e === "below") {
		let [t, r] = e === "above" ? ["top", "bottom"] : ["bottom", "top"];
		return `${n}, ${t} span-left, ${t} span-right, ${r} span-left, ${r} span-right`;
	}
	let [r, i] = e === "start" ? ["left", "right"] : ["right", "left"];
	return `${n}, ${r} span-top, ${r} span-bottom, ${i} span-top, ${i} span-bottom`;
}
function zi(e) {
	let { mode: t, onShow: n, onHide: r, lightDismiss: i = !1 } = e, a = t === "context" ? e.lazyMount ?? !1 : !1, o = (0, v.useId)(), s = `--astryx-layer-${o.replace(/:/g, "")}`, [c, l] = (0, v.useState)(!1), u = (0, v.useRef)(null), d = (0, v.useRef)(null), f = (0, v.useRef)(null), p = (0, v.useRef)(null), m = (0, v.useRef)(null), [h, g] = (0, v.useState)(null), _ = (0, v.useRef)(!1), y = (0, v.useRef)(!1), b = (0, v.useRef)(null), x = (0, v.useRef)(null), S = (0, v.useCallback)(() => {
		let e = fi();
		return b.current === e;
	}, []), C = (0, v.useCallback)((e) => {
		typeof e.showPopover == "function" ? e.showPopover({ source: f.current ?? void 0 }) : e.style.display = "block", d.current = e;
	}, []), T = (0, v.useCallback)((e) => {
		if (t !== "context") return !0;
		let n = m.current;
		if (n === null) return !1;
		let r = n.portalTarget ?? p.current?.parentElement ?? null;
		return e.parentElement === r;
	}, [t]), E = (0, v.useCallback)(() => {
		if (t !== "context") return;
		let e = p.current, n = e?.parentElement ?? null;
		if (!e || !n) return;
		let r = hi(n), i = {
			portalTarget: r,
			portalStyle: r ? Ii(e, r) : {}
		};
		m.current = i, g(i);
	}, [t]), D = (0, v.useCallback)(() => {
		t === "context" && a && (m.current = null, g(null));
	}, [t, a]), O = (0, v.useCallback)(() => {
		if (S()) return;
		let e = u.current, t = e && T(e) ? e : null;
		if (!t) {
			_.current = !0, E();
			return;
		}
		y.current || (C(t), y.current = !0, l(!0), n?.());
	}, [
		n,
		E,
		C,
		T,
		S
	]), k = (0, v.useCallback)(() => {
		if (_.current = !1, y.current) {
			let e = u.current;
			d.current = null, y.current = !1, e && (typeof e.hidePopover == "function" ? e.hidePopover() : e.style.display = "none"), l(!1), r?.();
		}
		D();
	}, [r, D]), A = (0, v.useCallback)((e) => {
		f.current && f.current !== e && ai(f.current, s), e && ii(e, s), f.current = e;
	}, [s]), j = (0, v.useCallback)((e) => {
		if (x.current?.(), pi()) return;
		b.current = fi();
		let t = e.defaultView, n = null, r = () => {
			b.current = null, e.removeEventListener("click", i, !0), n !== null && (t?.clearTimeout(n), n = null), x.current === r && (x.current = null);
		}, i = () => {
			e.removeEventListener("click", i, !0), t ? n = t.setTimeout(() => {
				n = null, x.current === r && r();
			}, 0) : r();
		};
		e.addEventListener("click", i, !0), x.current = r;
	}, []);
	(0, v.useEffect)(() => (fi(), () => x.current?.()), []);
	let M = (0, v.useCallback)((e) => {
		e.newState === "closed" && y.current && (d.current = null, y.current = !1, j(e.currentTarget?.ownerDocument ?? document), l(!1), r?.(), D());
	}, [
		r,
		D,
		j
	]), N = (0, v.useRef)(null), P = (0, v.useRef)(null), F = (0, v.useCallback)((e, t) => {
		N.current && P.current && (N.current !== e || P.current !== t) && (N.current.removeEventListener("toggle", P.current), N.current = null, P.current = null), e && N.current !== e && (e.addEventListener("toggle", t), N.current = e, P.current = t);
	}, []), ee = (0, v.useCallback)((e) => {
		u.current = e, F(e, M), e && _.current ? (_.current = !1, O()) : e && y.current && d.current !== e && T(e) && C(e);
	}, [
		M,
		F,
		O,
		C,
		T
	]), I = (0, v.useCallback)((e) => {
		p.current = e, e && (!a || _.current || y.current) && E();
	}, [a, E]);
	(0, v.useEffect)(() => (u.current && F(u.current, M), () => {
		N.current && P.current && (N.current.removeEventListener("toggle", P.current), N.current = null, P.current = null);
	}), [M, F]);
	let te = (0, v.useCallback)((e, t) => {
		let n = /*#__PURE__*/ (0, W.jsx)("template", { ref: I });
		if (h === null) return /*#__PURE__*/ (0, W.jsx)(W.Fragment, { children: n });
		let { placement: r = "above", alignment: a = "center", positioning: c = "anchor", offset: l, role: u, "aria-label": d, xstyle: f, className: p, style: m, as: g = "div", onMouseEnter: _, onMouseLeave: v } = t || {}, y = c === "custom" ? { positionAnchor: s } : {
			positionAnchor: s,
			positionArea: Li(r, a),
			positionTryFallbacks: Ri(r, a)
		}, b = c === "anchor" && l ? r === "above" || r === "below" ? Pi.offsetBlock(Fi(l)) : Pi.offsetInline(Fi(l)) : null, x = w(gi.reset, Pi.base, ji.reset, b, f), S = p ? `${p} ${x.className ?? ""}` : x.className, C = /*#__PURE__*/ (0, W.jsx)(g, {
			ref: ee,
			id: o,
			role: u,
			"aria-label": d,
			popover: i ? "auto" : "manual",
			className: S,
			style: {
				...x.style,
				...y,
				...h.portalStyle,
				...m
			},
			onMouseEnter: _,
			onMouseLeave: v,
			children: /*#__PURE__*/ (0, W.jsx)(ti, { children: e })
		});
		return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [n, h.portalTarget ? /*#__PURE__*/ (0, Mi.createPortal)(C, h.portalTarget) : C] });
	}, [
		s,
		h,
		o,
		i,
		ee,
		I
	]), L = (0, v.useCallback)((e, t) => {
		let { x: n, y: r, xstyle: a, className: s, style: c } = t, l = {
			top: r,
			left: n
		}, u = w(gi.reset, Pi.base, ji.reset, Pi.fixed, a), d = s ? `${s} ${u.className ?? ""}` : u.className;
		return /*#__PURE__*/ (0, W.jsx)("div", {
			ref: ee,
			id: o,
			popover: i ? "auto" : "manual",
			className: d,
			style: {
				...u.style,
				...l,
				...c
			},
			children: /*#__PURE__*/ (0, W.jsx)(ti, { children: e })
		});
	}, [
		ee,
		o,
		i
	]), ne = (0, v.useMemo)(() => ({
		ref: A,
		anchorId: s,
		show: O,
		hide: k,
		isOpen: c,
		wasJustDismissed: S,
		id: o,
		render: te
	}), [
		A,
		s,
		O,
		k,
		c,
		S,
		o,
		te
	]), R = (0, v.useMemo)(() => ({
		ref: void 0,
		show: O,
		hide: k,
		isOpen: c,
		wasJustDismissed: S,
		id: o,
		render: L
	}), [
		O,
		k,
		c,
		S,
		o,
		L
	]);
	return t === "context" ? ne : R;
}
function Bi(e) {
	let t = zi(e);
	return (0, v.useMemo)(() => {
		let { wasJustDismissed: e, ...n } = t;
		return n;
	}, [t]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/interactionModality.js
var Vi = Symbol.for("@astryxdesign/core/interaction-modality/v1");
function Hi(e) {
	let t = e, n = t[Vi];
	if (n != null) return n;
	let r = {
		modality: "keyboard",
		isListening: !1,
		onPointerDown: () => {
			r.modality = "pointer";
		},
		onKeyDown: (e) => {
			e.metaKey || e.altKey || e.ctrlKey || (r.modality = "keyboard");
		}
	};
	return Object.defineProperty(t, Vi, { value: r }), r;
}
function Ui() {
	if (typeof document > "u") return () => {};
	let e = document, t = Hi(e);
	return t.isListening || (t.isListening = !0, e.addEventListener("pointerdown", t.onPointerDown, {
		capture: !0,
		passive: !0
	}), e.addEventListener("keydown", t.onKeyDown, {
		capture: !0,
		passive: !0
	})), () => {};
}
function Wi() {
	(0, v.useEffect)(() => Ui(), []);
}
function Gi() {
	return typeof document > "u" ? "keyboard" : Hi(document).modality;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/useTouchTrigger.js
var Ki = /* @__PURE__ */ new Set(["touch", "pen"]), qi = /* @__PURE__ */ new Set([
	"button",
	"checkbox",
	"combobox",
	"link",
	"menuitem",
	"menuitemcheckbox",
	"menuitemradio",
	"option",
	"radio",
	"searchbox",
	"slider",
	"spinbutton",
	"switch",
	"tab",
	"textbox"
]);
function Ji(e) {
	let t = e.getAttribute("role");
	if (t != null && t !== "") return qi.has(t);
	switch (e.tagName) {
		case "BUTTON":
		case "INPUT":
		case "LABEL":
		case "SELECT":
		case "SUMMARY":
		case "TEXTAREA": return !0;
		case "A":
		case "AREA": return e.hasAttribute("href");
		default: return Yi(e);
	}
}
function Yi(e) {
	if (e.isContentEditable === !0) return !0;
	let t = e.getAttribute("contenteditable");
	return t != null && t !== "false";
}
function Xi(e) {
	let { touchTrigger: t, isEnabled: n, isControlled: r, isOpen: i, layerId: a, triggerRef: o, show: s, hide: c } = e, l = (0, v.useRef)(!1), u = (0, v.useRef)(i);
	u.current = i;
	let d = (0, v.useRef)(c);
	d.current = c;
	let f = (0, v.useRef)(a);
	f.current = a;
	let p = (0, v.useRef)(!1), m = (0, v.useRef)(null);
	Wi();
	let h = (0, v.useCallback)(() => {
		p.current = !1;
		let e = m.current;
		e != null && (m.current = null, document.removeEventListener("pointerdown", e, !0));
	}, []), g = (0, v.useCallback)(() => {
		if (p.current = !0, m.current != null) return;
		let e = (e) => {
			let t = e.target;
			(t == null || o.current?.contains(t) !== !0 && document.getElementById(f.current)?.contains(t) !== !0) && (h(), d.current());
		};
		m.current = e, document.addEventListener("pointerdown", e, !0);
	}, [o, h]);
	(0, v.useEffect)(() => h, [h]);
	let _ = (0, v.useCallback)(() => l.current && Gi() === "pointer", []), y = (0, v.useCallback)((e) => {
		l.current = e.pointerType === "touch";
	}, []), b = (0, v.useCallback)((e) => {
		let i = Ki.has(e.pointerType);
		if (l.current = i, !i || r) return !1;
		let a = o.current;
		return (t === "auto" ? a != null && Ji(a) ? "none" : "tap" : t) === "none" || !n || u.current || p.current ? (h(), c(), !0) : (g(), s(), !0);
	}, [
		t,
		n,
		r,
		o,
		s,
		c,
		g,
		h
	]), x = (0, v.useRef)(i);
	return (0, v.useEffect)(() => {
		x.current && !i && h(), x.current = i;
	}, [i, h]), {
		isTouchPointerRef: l,
		isTouchInteraction: _,
		handlePointerEnter: y,
		handlePointerDown: b,
		clearTapOpen: h
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/layerAnimations.stylex.js
ee["--duration-fast-max"], te["--ease-standard"];
var Zi = {
	below: {
		kKVMdj: "xl1vlw0 x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	above: {
		kKVMdj: "x3psbcj x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	end: {
		kKVMdj: "x1i331go x1vxsm5i x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	start: {
		kKVMdj: "xck01x9 x18lne9g x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	}
}, Qi = /*#__PURE__*/ (0, v.createContext)(0);
Qi.displayName = "LayerDepthContext";
function $i() {
	return (0, v.use)(Qi);
}
function G({ children: e }) {
	let t = (0, v.use)(Qi);
	return /*#__PURE__*/ (0, W.jsx)(Qi, {
		value: t + 1,
		children: e
	});
}
G.displayName = "LayerDepthProvider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/ime.js
var ea = 229;
function ta(e) {
	return e.isComposing === !0 || e.keyCode === ea;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/layerStack.js
var na = [], ra = /* @__PURE__ */ new WeakMap(), ia = 0, aa = !1;
function oa(e) {
	let t = ra.get(e);
	if (t !== void 0) return t;
	let n = ia++;
	return ra.set(e, n), n;
}
function sa(e, t) {
	if (e.depth !== t.depth) return e.depth - t.depth;
	let n = e.getContainer?.() ?? null, r = t.getContainer?.() ?? null;
	if (n != null && r != null && n !== r) {
		if (r.contains(n)) return 1;
		if (n.contains(r)) return -1;
	}
	return e.seq - t.seq;
}
function ca(e) {
	return e.isPresent?.() ?? !0;
}
var la = !1;
function ua() {
	return la;
}
function da() {
	la = !0;
}
function fa() {
	la = !1;
}
function pa() {
	let e = null;
	for (let t of na) ca(t) && (e == null || sa(t, e) > 0) && (e = t);
	return e;
}
function ma(e) {
	return pa()?.token === e;
}
function ha() {
	let e = pa();
	return e != null && (e.behavior === "block" || e.dismiss(), !0);
}
function ga(e) {
	if (e.key === "Escape") {
		if (ta(e)) {
			pa() != null && e.preventDefault();
			return;
		}
		e.defaultPrevented || ha() && e.preventDefault();
	}
}
function _a() {
	aa || typeof document > "u" || (document.addEventListener("keydown", ga), document.addEventListener("compositionstart", da, !0), document.addEventListener("compositionend", fa, !0), document.addEventListener("blur", fa, !0), aa = !0);
}
function va() {
	aa && typeof document < "u" && (document.removeEventListener("keydown", ga), document.removeEventListener("compositionstart", da, !0), document.removeEventListener("compositionend", fa, !0), document.removeEventListener("blur", fa, !0), la = !1, aa = !1);
}
function ya(e) {
	let t = {
		...e,
		seq: oa(e.token)
	};
	return na.push(t), _a(), () => {
		let e = na.indexOf(t);
		e !== -1 && na.splice(e, 1), na.length === 0 && va();
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layer/useLayerDismissal.js
function ba(e) {
	let { isActive: t, onDismiss: n, escapeBehavior: r = "close", getContainer: i, isPresent: a, isEnabled: o = !0 } = e, s = $i(), c = (0, v.useRef)({}), l = (0, v.useRef)(!1), u = (0, v.useRef)(n), d = (0, v.useRef)(i), f = (0, v.useRef)(a);
	(0, v.useEffect)(() => {
		u.current = n, d.current = i, f.current = a;
	});
	let p = t && o;
	return (0, v.useEffect)(() => {
		if (!p) {
			l.current = !1;
			return;
		}
		return l.current ||= (c.current = {}, !0), ya({
			token: c.current,
			depth: s,
			behavior: r,
			getContainer: () => d.current?.() ?? null,
			isPresent: () => f.current?.() ?? !0,
			dismiss: () => u.current()
		});
	}, [
		p,
		s,
		r
	]), { shouldDismissOnCloseRequest: (0, v.useCallback)(() => p && !ua() && ma(c.current), [p]) };
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Tooltip/useTooltip.js
var xa = 100, Sa = { container: {
	kWkggS: "x19aspcf",
	kMwMTN: "xrkvqaz",
	kaIpWk: "x1hviunn",
	kMv6JI: "x9ynric",
	kGuDYH: "xjm74w1",
	kLWn49: "xw6l6zx",
	$$css: !0
} };
function Ca(e) {
	return e.hasAttribute("tabindex") ? e.tabIndex >= 0 : [
		"A",
		"BUTTON",
		"INPUT",
		"SELECT",
		"TEXTAREA"
	].includes(e.tagName) ? !e.disabled : !!e.isContentEditable;
}
function wa(e = {}) {
	let { placement: t = "above", alignment: n = "center", delay: r = 200, hideDelay: i = 0, focusTrigger: a = "auto", touchTrigger: o = "auto", isEnabled: s = !0, isOpen: c, isDefaultOpen: l = !1, onShow: u, onHide: d } = e, { ref: f, anchorId: p, show: m, hide: h, isOpen: g, id: _, render: y } = Bi({
		mode: "context",
		onShow: u,
		onHide: d
	}), b = Sa.container, x = (0, v.useRef)(null), S = (0, v.useRef)(null), C = (0, v.useRef)(null), w = (0, v.useCallback)(() => {
		x.current &&= (clearTimeout(x.current), null), S.current &&= (clearTimeout(S.current), null);
	}, []), T = (0, v.useCallback)(() => {
		w(), m();
	}, [w, m]), E = (0, v.useCallback)(() => {
		w(), h();
	}, [w, h]), { isTouchPointerRef: D, isTouchInteraction: k, handlePointerEnter: A, handlePointerDown: j, clearTapOpen: M } = Xi({
		touchTrigger: o,
		isEnabled: s,
		isControlled: c !== void 0,
		isOpen: g,
		layerId: _,
		triggerRef: C,
		show: T,
		hide: E
	}), N = (0, v.useCallback)(() => {
		s && c !== !1 && (w(), x.current = setTimeout(() => {
			m();
		}, r));
	}, [
		s,
		c,
		w,
		m,
		r
	]), P = (0, v.useCallback)(() => {
		c !== !0 && (w(), S.current = setTimeout(() => {
			h();
		}, i > 0 ? i : xa));
	}, [
		c,
		w,
		h,
		i
	]), F = (0, v.useCallback)(() => {
		S.current &&= (clearTimeout(S.current), null);
	}, []), ee = (0, v.useCallback)(() => {
		D.current || N();
	}, [D, N]), I = (0, v.useCallback)(() => {
		D.current || P();
	}, [D, P]), te = (0, v.useCallback)((e) => {
		s && (k() || e.target.matches(":focus-visible") && (w(), m()));
	}, [
		s,
		k,
		w,
		m
	]), L = (0, v.useCallback)(() => {
		P();
	}, [P]), ne = (0, v.useCallback)((e) => {
		j(e) || c === void 0 && (w(), h());
	}, [
		j,
		c,
		w,
		h
	]), R = (0, v.useCallback)((e) => {
		C.current && (C.current.removeEventListener("mouseenter", ee), C.current.removeEventListener("mouseleave", I), C.current.removeEventListener("focusin", te), C.current.removeEventListener("focusout", L), C.current.removeEventListener("pointerenter", A), C.current.removeEventListener("pointerdown", ne)), e && (e.addEventListener("pointerenter", A), e.addEventListener("mouseenter", ee), e.addEventListener("mouseleave", I), e.addEventListener("pointerdown", ne), (a === "always" || a === "auto" && Ca(e)) && (e.addEventListener("focusin", te), e.addEventListener("focusout", L))), C.current = e;
	}, [
		a,
		ee,
		I,
		te,
		L,
		A,
		ne
	]), re = (0, v.useCallback)((e) => {
		f(e), R(e);
	}, [f, R]);
	return (0, v.useEffect)(() => () => {
		w();
	}, [w]), (0, v.useEffect)(() => {
		l && m();
	}, []), (0, v.useEffect)(() => {
		c !== void 0 && (c ? (w(), m()) : (w(), h()));
	}, [
		c,
		w,
		m,
		h
	]), ba({
		isActive: !0,
		isPresent: () => {
			let e = typeof document > "u" ? null : document.getElementById(_);
			if (e == null) return !1;
			try {
				return e.matches(":popover-open");
			} catch {
				return g;
			}
		},
		onDismiss: () => {
			if (w(), M(), c !== void 0) {
				d?.();
				return;
			}
			h();
		}
	}), {
		ref: re,
		positionRef: f,
		interactionRef: R,
		anchorId: p,
		describedBy: _,
		renderTooltip: (0, v.useCallback)((e, r) => {
			let i = r?.placement ?? t, a = {
				placement: i,
				alignment: r?.alignment ?? n,
				offset: O["--spacing-1"],
				role: "tooltip",
				xstyle: [b, Zi[i]],
				className: U("tooltip").className,
				onMouseEnter: F,
				onMouseLeave: P
			};
			return y(/*#__PURE__*/ (0, W.jsx)("div", {
				className: "xfsso4q xy143xn x12gdq22 x1djylfy xw5ewwj x13faqbe",
				children: e
			}), a);
		}, [
			y,
			t,
			n,
			b,
			F,
			P
		])
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Text/text.stylex.js
var Ta = {
	primary: {
		kMwMTN: "x1tgivj0",
		$$css: !0
	},
	secondary: {
		kMwMTN: "xv1l7n4",
		$$css: !0
	},
	disabled: {
		kMwMTN: "xnbbluu",
		$$css: !0
	},
	placeholder: {
		kMwMTN: "xv1l7n4",
		$$css: !0
	},
	accent: {
		kMwMTN: "xjse4m1",
		$$css: !0
	},
	inherit: {
		kMwMTN: "x1heor9g",
		$$css: !0
	}
}, Ea = {
	normal: {
		k63SB2: "x1sodnla",
		$$css: !0
	},
	medium: {
		k63SB2: "x1e4wzip",
		$$css: !0
	},
	semibold: {
		k63SB2: "x2mo6ok",
		$$css: !0
	},
	bold: {
		k63SB2: "x1lvx875",
		$$css: !0
	}
}, Da = {
	body: {
		k63SB2: "xxovm9e",
		$$css: !0
	},
	large: {
		k63SB2: "x149oux8",
		$$css: !0
	},
	label: {
		k63SB2: "xmhvcl5",
		$$css: !0
	},
	code: {
		k63SB2: "xx3eeay",
		$$css: !0
	},
	supporting: {
		k63SB2: "xv8on6e",
		$$css: !0
	},
	"display-1": {
		k63SB2: "x1txul5o",
		$$css: !0
	},
	"display-2": {
		k63SB2: "x1y36c3f",
		$$css: !0
	},
	"display-3": {
		k63SB2: "x1on40hk",
		$$css: !0
	},
	inherit: {
		k63SB2: "x1pd3egz",
		$$css: !0
	}
}, Oa = {
	body: {
		kGuDYH: "xjm74w1",
		kLWn49: "xw6l6zx",
		$$css: !0
	},
	large: {
		kGuDYH: "x18juvz8",
		kLWn49: "xf74fhv",
		$$css: !0
	},
	label: {
		kGuDYH: "xcr08ib",
		kLWn49: "x1kq96og",
		$$css: !0
	},
	code: {
		kGuDYH: "xp03k98",
		kLWn49: "x17iicif",
		kMv6JI: "x9m5x89",
		$$css: !0
	},
	supporting: {
		kGuDYH: "x141an7d",
		kLWn49: "x1ltkj2j",
		$$css: !0
	},
	"display-1": {
		kGuDYH: "xsub3ws",
		kLWn49: "x112ttwr",
		$$css: !0
	},
	"display-2": {
		kGuDYH: "x1yego12",
		kLWn49: "xh0iwvy",
		$$css: !0
	},
	"display-3": {
		kGuDYH: "xlgnzhf",
		kLWn49: "x1ujwuaq",
		$$css: !0
	},
	inherit: {
		kGuDYH: "x1qlqyl8",
		kLWn49: "x15bjb6t",
		$$css: !0
	}
}, ka = {
	"4xs": {
		kGuDYH: "xxc45ev",
		$$css: !0
	},
	"3xs": {
		kGuDYH: "x10p7juq",
		$$css: !0
	},
	"2xs": {
		kGuDYH: "x16a80zy",
		$$css: !0
	},
	xsm: {
		kGuDYH: "x51wmvv",
		$$css: !0
	},
	sm: {
		kGuDYH: "x1eqnyfr",
		$$css: !0
	},
	base: {
		kGuDYH: "x1j29vfg",
		$$css: !0
	},
	lg: {
		kGuDYH: "xc7cgfe",
		$$css: !0
	},
	xl: {
		kGuDYH: "x1wqms48",
		$$css: !0
	},
	"2xl": {
		kGuDYH: "xhs0kqb",
		$$css: !0
	},
	"3xl": {
		kGuDYH: "x10srzze",
		$$css: !0
	},
	"4xl": {
		kGuDYH: "xqcvi3d",
		$$css: !0
	}
}, Aa = {
	1: {
		kGuDYH: "xcg7oai",
		kLWn49: "xfmsba7",
		k63SB2: "x1v68xuy",
		$$css: !0
	},
	2: {
		kGuDYH: "x1xvnhcw",
		kLWn49: "x1cpk1wn",
		k63SB2: "x12yy4cs",
		$$css: !0
	},
	3: {
		kGuDYH: "xii13ha",
		kLWn49: "xwjzt0u",
		k63SB2: "x1jcxfy8",
		$$css: !0
	},
	4: {
		kGuDYH: "x8tkxat",
		kLWn49: "xqerer",
		k63SB2: "x2hcmsi",
		$$css: !0
	},
	5: {
		kGuDYH: "xsgqta0",
		kLWn49: "xo3gurs",
		k63SB2: "xno150v",
		$$css: !0
	},
	6: {
		kGuDYH: "xw5ohdf",
		kLWn49: "xeixjfn",
		k63SB2: "x1pw4frv",
		$$css: !0
	}
}, ja = {
	inline: {
		k1xSpc: "xt0psk2",
		$$css: !0
	},
	block: {
		k1xSpc: "x1lliihq",
		$$css: !0
	}
}, Ma = {
	singleLine: {
		kVQacm: "xb3r6kr",
		kg5iWk: "xlyipyv",
		khDVqt: "xuxw1ft",
		k1xSpc: "x1lliihq",
		$$css: !0
	},
	multiLine: {
		kVQacm: "xb3r6kr",
		k1xSpc: "x104kibb",
		kgKLqz: "x1ua5tub",
		$$css: !0
	}
}, Na = {
	"break-word": {
		kTgw9: "x1lldw8n",
		kHjlTd: "x1mzt3pk",
		$$css: !0
	},
	"break-all": {
		kTgw9: "x1yn0g08",
		$$css: !0
	}
}, Pa = {
	wrap: {
		kN2L0X: "xk4td0m",
		$$css: !0
	},
	nowrap: {
		kN2L0X: "xebhuq6",
		$$css: !0
	},
	balance: {
		kN2L0X: "x1w2vvpw",
		$$css: !0
	},
	pretty: {
		kN2L0X: "x1fzhlzt",
		$$css: !0
	}
}, Fa = { enabled: {
	kxwWH2: "x1b2iylo",
	kzeHkT: "xwgcxoh",
	k1xSpc: "x1lliihq",
	$$css: !0
} }, Ia = { strikethrough: {
	kybGjl: "xmqliwb",
	$$css: !0
} }, La = { enabled: {
	kcqcaj: "xss6m8b",
	$$css: !0
} }, Ra = {
	start: {
		k9WMMc: "x1yc453h",
		$$css: !0
	},
	center: {
		k9WMMc: "x2b8uid",
		$$css: !0
	},
	end: {
		k9WMMc: "xp4054r",
		$$css: !0
	}
}, za = { content: {
	ks0D6T: "xw5ewwj",
	kTgw9: "x13faqbe",
	$$css: !0
} }, Ba = null, Va = /* @__PURE__ */ new Map();
function Ha() {
	return typeof ResizeObserver > "u" ? null : (Ba ||= new ResizeObserver((e) => {
		for (let t of e) {
			let e = Va.get(t.target);
			if (e) for (let n of [...e.keys()]) n(t);
		}
	}), Ba);
}
function Ua(e, t) {
	let n = Va.get(e);
	n ? n.set(t, (n.get(t) ?? 0) + 1) : Va.set(e, /* @__PURE__ */ new Map([[t, 1]])), Ha()?.observe(e), t({ target: e });
	let r = !0;
	return () => {
		r && (r = !1, Wa(e, t));
	};
}
function Wa(e, t) {
	let n = Va.get(e);
	if (t != null) {
		let e = n?.get(t);
		if (n == null || e == null) return;
		if (e > 1) {
			n.set(t, e - 1);
			return;
		}
		if (n.delete(t), n.size > 0) return;
	}
	Va.delete(e), Ba && (Ba.unobserve(e), Va.size === 0 && (Ba.disconnect(), Ba = null));
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Text/useTruncation.js
function Ga(e) {
	let { maxLines: t } = e, [n, r] = (0, v.useState)(!1), [i, a] = (0, v.useState)(""), o = (0, v.useRef)(null), s = (0, v.useRef)(null), c = (0, v.useCallback)((e) => {
		if (t === 0) {
			r(!1);
			return;
		}
		if (a(e.textContent ?? ""), t === 1) r(e.scrollWidth > e.offsetWidth);
		else {
			let t = e.scrollHeight;
			try {
				let n = document.createRange();
				n.selectNodeContents(e), t = n.getBoundingClientRect().height, n.detach();
			} catch {}
			r(t > e.offsetHeight);
		}
	}, [t]);
	return {
		ref: (0, v.useCallback)((e) => {
			s.current?.(), s.current = null, o.current = e, e && t > 0 ? typeof ResizeObserver < "u" ? s.current = Ua(e, () => {
				c(e);
			}) : c(e) : (r(!1), a(""));
		}, [t, c]),
		isTruncated: n,
		fullText: i
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/mergeProps.js
function Ka(e, t) {
	let n = {
		...e,
		...t
	}, r = [e.className, t.className].filter(Boolean).join(" ");
	r ? n.className = r : delete n.className;
	let i = t.style && e.style ? {
		...e.style,
		...t.style
	} : t.style || e.style;
	return i ? n.style = i : delete n.style, n;
}
function K(e, t, n, r) {
	if (typeof e == "string") {
		let i = e, a = t ?? { className: "" }, o = n, s = a.className ? `${i} ${a.className}` : i;
		o && (s = `${s} ${o}`);
		let c = r && a.style ? {
			...a.style,
			...r
		} : r || a.style;
		return {
			...a,
			className: s,
			style: c
		};
	}
	let i = Ka(e, typeof t == "string" ? { className: t } : t ?? {});
	return typeof n == "string" ? i = Ka(i, { className: n }) : n != null && (i = Ka(i, { style: n })), r != null && (i = Ka(i, { style: r })), i;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/mergeRefs.js
function qa(...e) {
	return (t) => {
		let n = [];
		for (let r of e) if (typeof r == "function") {
			let e = r(t);
			n.push(typeof e == "function" ? e : () => r(null));
		} else if (r != null) {
			let e = r;
			e.current = t, n.push(() => {
				e.current = null;
			});
		}
		if (t != null && n.length > 0) return () => {
			for (let e of n) e();
		};
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/composeEventHandlers.js
function Ja(...e) {
	return (t) => {
		for (let n of e) if (n?.(t), t.defaultPrevented) return;
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/isRenderable.js
function Ya(e) {
	return e != null && typeof e != "boolean" && e !== "";
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/rtlStyles.js
var Xa = {
	kbCHJM: "x1nrll8i",
	k3aq6I: "xsqj5wx",
	$$css: !0
}, Za = {
	mirror: {
		k3aq6I: "xgtlewx",
		$$css: !0
	},
	centerInline: (e) => [Xa, { "--x-transform": `translate(-50%, ${e})` == null ? void 0 : `translate(-50%, ${e})` }]
}, Qa = M["--focus-outline-width"], $a = M["--focus-outline-style"], eo = M["--focus-outline-color"];
M["--focus-outline-offset"], `${Qa}${$a}${eo}`;
var to = {
	focusVisible: {
		kMeerF: "x1k57tk5 x1vidyx5",
		k3XXqK: "x1t137rt x1jhp3zv",
		kjBf7l: "xx47ajj",
		kInvED: "x1wfwxd8 x1vwwbsn",
		$$css: !0
	},
	focusWithin: {
		kMeerF: "x1k57tk5 x11j6mr8",
		k3XXqK: "x1t137rt xciu248",
		kjBf7l: "x1uy843r",
		kInvED: "x1wfwxd8 x1jumodi",
		$$css: !0
	},
	focusWithinFirstChild: {
		kMeerF: "x1k57tk5 xmmisi4",
		k3XXqK: "x1t137rt xfd04fr",
		kjBf7l: "xobxmqy",
		kInvED: "x1wfwxd8 x2vr5qc",
		$$css: !0
	},
	suppressed: {
		kMeerF: "x1k57tk5",
		k3XXqK: "x1t137rt",
		kInvED: "x1wfwxd8",
		$$css: !0
	},
	publishFocusVisibleVars: {
		"--_focus-outline": "x17wzz1v xqih627",
		"--_focus-outline-offset": "xgzxwq1 xqchwus",
		$$css: !0
	},
	focusWithinOrPublished: {
		kI3sdo: "xaw4jrz x16s19ga",
		kInvED: "x1kvmbwa x1jumodi",
		$$css: !0
	}
};
function no(e) {
	return (...t) => w(e, ...t);
}
var ro = {
	focusVisible: no(to.focusVisible),
	focusWithin: no(to.focusWithin),
	focusWithinFirstChild: no(to.focusWithinFirstChild),
	suppressed: no(to.suppressed),
	publishFocusVisibleVars: no(to.publishFocusVisibleVars),
	focusWithinOrPublished: no(to.focusWithinOrPublished)
};
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useMergedRefs.js
function io(e, t, n, r, i, a) {
	return (0, v.useMemo)(() => qa(e, t, n, r, i, a), [
		e,
		t,
		n,
		r,
		i,
		a
	]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Text/Text.js
var ao = /*#__PURE__*/ (0, v.lazy)(async () => Promise.resolve().then(() => rl).then((e) => ({ default: e.Tooltip }))), oo = {
	body: "primary",
	large: "primary",
	label: "primary",
	supporting: "secondary",
	code: "primary",
	"display-1": "primary",
	"display-2": "primary",
	"display-3": "primary",
	inherit: "inherit"
};
function so(e) {
	return e in Oa ? e : "body";
}
function co(e) {
	return e in Ta ? e : "primary";
}
function lo({ type: e = "body", size: t, color: n, weight: r, display: i = "inline", maxLines: a = 0, hasTruncateTooltip: o = !0, wordBreak: s, textWrap: c, justify: l = "start", hasCapsize: u = !1, hasStrikethrough: d = !1, hasTabularNumbers: f = !1, xstyle: p, className: m, style: h, as: g = "span", children: _, ref: y, ...b }) {
	let x = n ?? oo[e] ?? "primary", S = so(e), C = co(x), T = s ?? (a === 1 ? "break-all" : "break-word"), E = a > 0 || u ? "block" : i, D = Ga({ maxLines: a }), O = typeof o == "string" ? o : "above", k = a > 0 && o !== !1 && D.isTruncated, A = (0, v.useRef)(null), j = io(y, D.ref, A), M = a > 1 ? { WebkitLineClamp: a } : void 0;
	return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(g, {
		ref: j,
		...K(U("text", {
			type: e,
			size: t,
			color: x
		}), w(Ta[C], Oa[S], t && ka[t], Da[S], r && Ea[r], a === 1 ? Ma.singleLine : a > 1 ? Ma.multiLine : ja[E], a > 0 && Na[T], c && Pa[c], l !== "start" && Ra[l], u && Fa.enabled, d && Ia.strikethrough, f && La.enabled, p), m, {
			...h,
			...M
		}),
		...b,
		children: _
	}), k && /*#__PURE__*/ (0, W.jsx)(v.Suspense, {
		fallback: null,
		children: /*#__PURE__*/ (0, W.jsx)(ao, {
			anchorRef: A,
			content: /*#__PURE__*/ (0, W.jsx)("span", {
				...w(za.content),
				children: D.fullText
			}),
			placement: O
		})
	})] });
}
lo.displayName = "Text";
//#endregion
//#region node_modules/@formatjs/fast-memoize/index.js
function uo(e, t) {
	let n = t && t.cache ? t.cache : xo, r = t && t.serializer ? t.serializer : yo;
	return (t && t.strategy ? t.strategy : go)(e, {
		cache: n,
		serializer: r
	});
}
function fo(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function po(e, t, n, r) {
	let i = fo(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function mo(e, t, n) {
	let r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function ho(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function go(e, t) {
	let n = e.length === 1 ? po : mo;
	return ho(e, this, n, t.cache.create(), t.serializer);
}
function _o(e, t) {
	return ho(e, this, mo, t.cache.create(), t.serializer);
}
function vo(e, t) {
	return ho(e, this, po, t.cache.create(), t.serializer);
}
var yo = function() {
	return JSON.stringify(arguments);
}, bo = class {
	constructor() {
		this.cache = Object.create(null);
	}
	get(e) {
		return this.cache[e];
	}
	set(e, t) {
		this.cache[e] = t;
	}
}, xo = { create: function() {
	return new bo();
} }, So = {
	variadic: _o,
	monadic: vo
}, Co = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function wo(e) {
	let t = {};
	return e.replace(Co, (e) => {
		let n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 3];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 3];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var To = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Eo(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	let t = e.split(To).filter((e) => e.length > 0), n = [];
	for (let e of t) {
		let t = e.split("/");
		if (t.length === 0) throw Error("Invalid number skeleton");
		let [r, ...i] = t;
		for (let e of i) if (e.length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: r,
			options: i
		});
	}
	return n;
}
function Do(e) {
	return e.replace(/^(.*?)-/, "");
}
var Oo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ko = /^(@+)?(\+|#+)?[rs]?$/g, Ao = /(\*)(0+)|(#+)(0+)|(0+)/g, jo = /^(0+)$/;
function Mo(e) {
	let t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ko, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function No(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function Po(e) {
	let t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		let n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !jo.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Fo(e) {
	return No(e) || {};
}
function Io(e) {
	let t = {};
	for (let n of e) {
		switch (n.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = n.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = Do(n.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = {
					...t,
					notation: "scientific",
					...n.options.reduce((e, t) => ({
						...e,
						...Fo(t)
					}), {})
				};
				continue;
			case "engineering":
				t = {
					...t,
					notation: "engineering",
					...n.options.reduce((e, t) => ({
						...e,
						...Fo(t)
					}), {})
				};
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(n.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				n.options[0].replace(Ao, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (jo.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (Oo.test(n.stem)) {
			if (n.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			n.stem.replace(Oo, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			let e = n.options[0];
			e === "w" ? t = {
				...t,
				trailingZeroDisplay: "stripIfInteger"
			} : e && (t = {
				...t,
				...Mo(e)
			});
			continue;
		}
		if (ko.test(n.stem)) {
			t = {
				...t,
				...Mo(n.stem)
			};
			continue;
		}
		let e = No(n.stem);
		e && (t = {
			...t,
			...e
		});
		let r = Po(n.stem);
		r && (t = {
			...t,
			...r
		});
	}
	return t;
}
//#endregion
//#region node_modules/@formatjs/icu-messageformat-parser/index.js
var q = /* @__PURE__ */ function(e) {
	return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e;
}({});
function Lo(e) {
	return e.type === 0;
}
function Ro(e) {
	return e.type === 1;
}
function zo(e) {
	return e.type === 2;
}
function Bo(e) {
	return e.type === 3;
}
function Vo(e) {
	return e.type === 4;
}
function Ho(e) {
	return e.type === 5;
}
function Uo(e) {
	return e.type === 6;
}
function Wo(e) {
	return e.type === 7;
}
function Go(e) {
	return e.type === 8;
}
function Ko(e) {
	return !!(e && typeof e == "object" && e.type === 0);
}
function qo(e) {
	return !!(e && typeof e == "object" && e.type === 1);
}
var Jo = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Yo = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ku-SY": ["H", "hB"],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function Xo(e, t) {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "j") {
			let a = 0;
			for (; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			let o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = Zo(t);
			for ((c == "H" || c == "k") && (s = 0); s-- > 0;) n += "a";
			for (; o-- > 0;) n = c + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function Zo(e) {
	let t = e.hourCycle;
	if (t === void 0) {
		let n = e;
		t = n.getHourCycles?.()[0] ?? n.hourCycles?.[0];
	}
	if (t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	let n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Yo[`${n}-${r}`] || Yo[r || ""] || Yo[n || ""] || Yo[`${n}-001`] || Yo["001"])[0].charAt(0);
}
var Qo = RegExp(`^${Jo.source}*`), $o = RegExp(`${Jo.source}*$`);
function J(e, t) {
	return {
		start: e,
		end: t
	};
}
var es = !!Object.fromEntries, ts = !!String.prototype.trimStart, ns = !!String.prototype.trimEnd, rs = es ? Object.fromEntries : function(e) {
	let t = {};
	for (let [n, r] of e) t[n] = r;
	return t;
}, is = ts ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Qo, "");
}, as = ns ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace($o, "");
}, os = /* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function ss(e, t) {
	return os.lastIndex = t, os.exec(e)[1] ?? "";
}
function cs(e) {
	if (e.length === 0) return null;
	let t = 1, n = 1;
	for (let r = 0; r < e.length;) {
		let i = e.charCodeAt(r);
		switch (i) {
			case 35:
			case 39:
			case 60:
			case 123:
			case 125: return null;
		}
		if (i === 10) t++, n = 1, r++;
		else if (n++, i >= 55296 && i <= 56319 && r + 1 < e.length) {
			let t = e.charCodeAt(r + 1);
			r += t >= 56320 && t <= 57343 ? 2 : 1;
		} else r++;
	}
	return {
		offset: e.length,
		line: t,
		column: n
	};
}
var ls = class {
	constructor(e, t = {}) {
		this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	parse() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		if (this.message.length > 0) {
			let e = this.message.charCodeAt(0);
			if (e !== 35 && e !== 39 && e !== 60 && e !== 123 && e !== 125) {
				let e = cs(this.message);
				if (e) {
					let t = this.clonePosition();
					return this.position = e, {
						val: [{
							type: 0,
							value: this.message,
							location: J(t, this.clonePosition())
						}],
						err: null
					};
				}
			}
		}
		return this.parseMessage(0, "", !1);
	}
	parseMessage(e, t, n) {
		let r = [];
		for (; !this.isEOF();) {
			let i = this.char();
			if (i === 123) {
				let t = this.parseArgument(e, n);
				if (t.err) return t;
				r.push(t.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				let e = this.clonePosition();
				this.bump(), r.push({
					type: 7,
					location: J(e, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(26, J(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && us(this.peek() || 0)) {
				let n = this.parseTag(e, t);
				if (n.err) return n;
				r.push(n.val);
			} else {
				let n = this.parseLiteral(e, t);
				if (n.err) return n;
				r.push(n.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}
	parseTag(e, t) {
		let n = this.clonePosition();
		this.bump();
		let r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: 0,
				value: `<${r}/>`,
				location: J(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			let i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			let a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !us(this.char())) return this.error(23, J(o, this.clonePosition()));
				let e = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: 8,
						value: r,
						children: a,
						location: J(n, this.clonePosition())
					},
					err: null
				} : this.error(23, J(o, this.clonePosition()))) : this.error(26, J(e, this.clonePosition()));
			}
			return this.error(27, J(n, this.clonePosition()));
		}
		return this.error(23, J(n, this.clonePosition()));
	}
	parseTagName() {
		let e = this.offset();
		for (this.bump(); !this.isEOF() && fs(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}
	parseLiteral(e, t) {
		let n = this.clonePosition(), r = "";
		for (;;) {
			let n = this.tryParseQuote(t);
			if (n) {
				r += n;
				continue;
			}
			let i = this.tryParseUnquoted(e, t);
			if (i) {
				r += i;
				continue;
			}
			let a = this.tryParseLeftAngleBracket();
			if (a) {
				r += a;
				continue;
			}
			break;
		}
		let i = J(n, this.clonePosition());
		return {
			val: {
				type: 0,
				value: r,
				location: i
			},
			err: null
		};
	}
	tryParseLeftAngleBracket() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !ds(this.peek() || 0)) ? (this.bump(), "<") : null;
	}
	tryParseQuote(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		let t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			let e = this.char();
			if (e === 39) {
				if (this.peek() === 39) t.push(39), this.bump();
				else {
					this.bump();
					break;
				}
			} else t.push(e);
			this.bump();
		}
		return String.fromCodePoint(...t);
	}
	tryParseUnquoted(e, t) {
		if (this.isEOF()) return null;
		let n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), String.fromCodePoint(n));
	}
	parseArgument(e, t) {
		let n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, J(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(2, J(n, this.clonePosition()));
		let r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(3, J(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(1, J(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: 1,
					value: r,
					location: J(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(1, J(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(3, J(n, this.clonePosition()));
		}
	}
	parseIdentifierIfPossible() {
		let e = this.clonePosition(), t = this.offset(), n = ss(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: J(e, this.clonePosition())
		};
	}
	parseArgumentOptions(e, t, n, r) {
		let i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(4, J(i, o));
			case "number":
			case "date":
			case "time": {
				this.bumpSpace();
				let e = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					let t = this.clonePosition(), n = this.parseSimpleArgStyleIfPossible();
					if (n.err) return n;
					let r = as(n.val);
					if (r.length === 0) return this.error(6, J(this.clonePosition(), this.clonePosition()));
					e = {
						style: r,
						styleLocation: J(t, this.clonePosition())
					};
				}
				let t = this.tryParseArgumentClose(r);
				if (t.err) return t;
				let i = J(r, this.clonePosition());
				if (e && e.style.startsWith("::")) {
					let t = is(e.style.slice(2));
					if (a === "number") {
						let r = this.parseNumberSkeletonFromString(t, e.styleLocation);
						return r.err ? r : {
							val: {
								type: 2,
								value: n,
								location: i,
								style: r.val
							},
							err: null
						};
					}
					{
						if (t.length === 0) return this.error(10, i);
						let r = t;
						this.locale && (r = Xo(t, this.locale));
						let o = {
							type: 1,
							pattern: r,
							location: e.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? wo(r) : {}
						};
						return {
							val: {
								type: a === "date" ? 3 : 4,
								value: n,
								location: i,
								style: o
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: a === "number" ? 2 : a === "date" ? 3 : 4,
						value: n,
						location: i,
						style: e?.style ?? null
					},
					err: null
				};
			}
			case "plural":
			case "selectordinal":
			case "select": {
				let i = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, J(i, { ...i }));
				this.bumpSpace();
				let o = this.parseIdentifierIfPossible(), s = 0;
				if (a !== "select" && o.value === "offset") {
					if (!this.bumpIf(":")) return this.error(13, J(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					let e = this.tryParseDecimalInteger(13, 14);
					if (e.err) return e;
					this.bumpSpace(), o = this.parseIdentifierIfPossible(), s = e.val;
				}
				let c = this.tryParsePluralOrSelectOptions(e, a, t, o);
				if (c.err) return c;
				let l = this.tryParseArgumentClose(r);
				if (l.err) return l;
				let u = J(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: 5,
						value: n,
						options: rs(c.val),
						location: u
					},
					err: null
				} : {
					val: {
						type: 6,
						value: n,
						options: rs(c.val),
						offset: s,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: u
					},
					err: null
				};
			}
			default: return this.error(5, J(i, o));
		}
	}
	tryParseArgumentClose(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(1, J(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}
	parseSimpleArgStyleIfPossible() {
		let e = 0, t = this.clonePosition();
		for (; !this.isEOF();) switch (this.char()) {
			case 39: {
				this.bump();
				let e = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(11, J(e, this.clonePosition()));
				this.bump();
				break;
			}
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (e > 0) --e;
				else return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}
	parseNumberSkeletonFromString(e, t) {
		let n = [];
		try {
			n = Eo(e);
		} catch {
			return this.error(7, t);
		}
		return {
			val: {
				type: 0,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Io(n) : {}
			},
			err: null
		};
	}
	tryParsePluralOrSelectOptions(e, t, n, r) {
		let i = !1, a = [], o = /* @__PURE__ */ new Set(), { value: s, location: c } = r;
		for (;;) {
			if (s.length === 0) {
				let e = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					let t = this.tryParseDecimalInteger(16, 19);
					if (t.err) return t;
					c = J(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset());
				} else break;
			}
			if (o.has(s)) return this.error(t === "select" ? 21 : 20, c);
			s === "other" && (i = !0), this.bumpSpace();
			let r = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? 17 : 18, J(this.clonePosition(), this.clonePosition()));
			let l = this.parseMessage(e + 1, t, n);
			if (l.err) return l;
			let u = this.tryParseArgumentClose(r);
			if (u.err) return u;
			a.push([s, {
				value: l.val,
				location: J(r, this.clonePosition())
			}]), o.add(s), this.bumpSpace(), {value: s, location: c} = this.parseIdentifierIfPossible();
		}
		return a.length === 0 ? this.error(t === "select" ? 15 : 16, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(22, J(this.clonePosition(), this.clonePosition())) : {
			val: a,
			err: null
		};
	}
	tryParseDecimalInteger(e, t) {
		let n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		let i = !1, a = 0;
		for (; !this.isEOF();) {
			let e = this.char();
			if (e >= 48 && e <= 57) i = !0, a = a * 10 + (e - 48), this.bump();
			else break;
		}
		let o = J(r, this.clonePosition());
		return i ? (a *= n, Number.isSafeInteger(a) ? {
			val: a,
			err: null
		} : this.error(t, o)) : this.error(e, o);
	}
	offset() {
		return this.position.offset;
	}
	isEOF() {
		return this.offset() === this.message.length;
	}
	clonePosition() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}
	char() {
		let e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		let t = this.message.codePointAt(e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
		return t;
	}
	error(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}
	bump() {
		if (this.isEOF()) return;
		let e = this.char();
		e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
	}
	bumpIf(e) {
		if (this.message.startsWith(e, this.offset())) {
			for (let t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}
	bumpUntil(e) {
		let t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}
	bumpTo(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			let t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}
	bumpSpace() {
		for (; !this.isEOF() && ps(this.char());) this.bump();
	}
	peek() {
		if (this.isEOF()) return null;
		let e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}
};
function us(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ds(e) {
	return us(e) || e === 47;
}
function fs(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function ps(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ms(e) {
	e.forEach((e) => {
		if (delete e.location, Ho(e) || Uo(e)) for (let t in e.options) delete e.options[t].location, ms(e.options[t].value);
		else zo(e) && Ko(e.style) || (Bo(e) || Vo(e)) && qo(e.style) ? delete e.style.location : Go(e) && ms(e.children);
	});
}
function hs(e, t = {}) {
	t = {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	};
	let n = new ls(e, t).parse();
	if (n.err) {
		let e = SyntaxError(q[n.err.kind]);
		throw e.location = n.err.location, e.originalMessage = n.err.message, e;
	}
	return t?.captureLocation || ms(n.val), n.val;
}
//#endregion
//#region node_modules/intl-messageformat/index.js
var gs = class extends Error {
	constructor(e, t, n) {
		super(e), this.code = t, this.originalMessage = n;
	}
	toString() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}
}, _s = class extends gs {
	constructor(e, t, n, r) {
		super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join("\", \"")}"`, "INVALID_VALUE", r);
	}
}, vs = class extends gs {
	constructor(e, t, n) {
		super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", n);
	}
}, ys = class extends gs {
	constructor(e, t) {
		super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t);
	}
};
function bs(e) {
	return e.length < 2 ? e : e.reduce((e, t) => {
		let n = e[e.length - 1];
		return !n || n.type !== 0 || t.type !== 0 ? e.push(t) : n.value += t.value, e;
	}, []);
}
function xs(e) {
	return typeof e == "function";
}
function Ss(e, t, n, r, i, a, o) {
	if (e.length === 1 && Lo(e[0])) return [{
		type: 0,
		value: e[0].value
	}];
	let s = [];
	for (let c of e) {
		if (Lo(c)) {
			s.push({
				type: 0,
				value: c.value
			});
			continue;
		}
		if (Wo(c)) {
			typeof a == "number" && s.push({
				type: 0,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		let { value: e } = c;
		if (!(i && e in i)) throw new ys(e, o);
		let l = i[e];
		if (Ro(c)) {
			(!l || typeof l == "string" || typeof l == "number" || typeof l == "bigint") && (l = typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? String(l) : ""), s.push({
				type: typeof l == "string" ? 0 : 1,
				value: l
			});
			continue;
		}
		if (Bo(c)) {
			let e = typeof c.style == "string" ? r.date[c.style] : qo(c.style) ? c.style.parsedOptions : void 0;
			s.push({
				type: 0,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (Vo(c)) {
			let e = typeof c.style == "string" ? r.time[c.style] : qo(c.style) ? c.style.parsedOptions : r.time.medium;
			s.push({
				type: 0,
				value: n.getDateTimeFormat(t, e).format(l)
			});
			continue;
		}
		if (zo(c)) {
			let e = typeof c.style == "string" ? r.number[c.style] : Ko(c.style) ? c.style.parsedOptions : void 0;
			if (e && e.scale) {
				let t = e.scale || 1;
				if (typeof l == "bigint") {
					if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
					l *= BigInt(t);
				} else l *= t;
			}
			s.push({
				type: 0,
				value: n.getNumberFormat(t, e).format(l)
			});
			continue;
		}
		if (Go(c)) {
			let { children: e, value: l } = c, u = i[l];
			if (!xs(u)) throw new vs(l, "function", o);
			let d = u(Ss(e, t, n, r, i, a).map((e) => e.value));
			Array.isArray(d) || (d = [d]), s.push(...d.map((e) => ({
				type: typeof e == "string" ? 0 : 1,
				value: e
			})));
		}
		if (Ho(c)) {
			let e = l, a = (Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0) || c.options.other;
			if (!a) throw new _s(c.value, l, Object.keys(c.options), o);
			s.push(...Ss(a.value, t, n, r, i));
			continue;
		}
		if (Uo(c)) {
			let e = `=${l}`, a = Object.prototype.hasOwnProperty.call(c.options, e) ? c.options[e] : void 0;
			if (!a) {
				if (!Intl.PluralRules) throw new gs("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API", o);
				let e = typeof l == "bigint" ? Number(l) : l, r = n.getPluralRules(t, { type: c.pluralType }).select(e - (c.offset || 0));
				a = (Object.prototype.hasOwnProperty.call(c.options, r) ? c.options[r] : void 0) || c.options.other;
			}
			if (!a) throw new _s(c.value, l, Object.keys(c.options), o);
			let u = typeof l == "bigint" ? Number(l) : l;
			s.push(...Ss(a.value, t, n, r, i, u - (c.offset || 0)));
			continue;
		}
	}
	return bs(s);
}
function Cs(e, t) {
	return t ? {
		...e,
		...t,
		...Object.keys(e).reduce((n, r) => (n[r] = {
			...e[r],
			...t[r]
		}, n), {})
	} : e;
}
function ws(e, t) {
	return t ? Object.keys(e).reduce((n, r) => (n[r] = Cs(e[r], t[r]), n), { ...e }) : e;
}
function Ts(e) {
	return { create() {
		return {
			get(t) {
				return e[t];
			},
			set(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Es(e = {
	number: {},
	dateTime: {},
	pluralRules: {}
}) {
	return {
		getNumberFormat: uo((...e) => new Intl.NumberFormat(...e), {
			cache: Ts(e.number),
			strategy: So.variadic
		}),
		getDateTimeFormat: uo((...e) => new Intl.DateTimeFormat(...e), {
			cache: Ts(e.dateTime),
			strategy: So.variadic
		}),
		getPluralRules: uo((...e) => new Intl.PluralRules(...e), {
			cache: Ts(e.pluralRules),
			strategy: So.variadic
		})
	};
}
var Ds = class e {
	constructor(t, n = e.defaultLocale, r, i) {
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = (e) => {
			let t = this.formatToParts(e);
			if (t.length === 1) return t[0].value;
			let n = t.reduce((e, t) => (!e.length || t.type !== 0 || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e), []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = (e) => Ss(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] }), this.getAst = () => this.ast, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			let { ...n } = i || {};
			this.ast = e.__parse(t, {
				...n,
				locale: this.resolvedLocale
			});
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = ws(e.formats, r), this.formatters = i && i.formatters || Es(this.formatterCache);
	}
	static {
		this.memoizedDefaultLocale = null;
	}
	static get defaultLocale() {
		return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
	}
	static {
		this.resolveLocale = (e) => {
			if (Intl.Locale === void 0) return;
			let t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		};
	}
	static {
		this.__parse = hs;
	}
	static {
		this.formats = {
			number: {
				integer: { maximumFractionDigits: 0 },
				currency: { style: "currency" },
				percent: { style: "percent" }
			},
			date: {
				short: {
					month: "numeric",
					day: "numeric",
					year: "2-digit"
				},
				medium: {
					month: "short",
					day: "numeric",
					year: "numeric"
				},
				long: {
					month: "long",
					day: "numeric",
					year: "numeric"
				},
				full: {
					weekday: "long",
					month: "long",
					day: "numeric",
					year: "numeric"
				}
			},
			time: {
				short: {
					hour: "numeric",
					minute: "numeric"
				},
				medium: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				},
				long: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					timeZoneName: "short"
				},
				full: {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					timeZoneName: "short"
				}
			}
		};
	}
}, Os = {
	"@astryx.pagination.label": {
		defaultMessage: "Pagination",
		description: "Aria label for the pagination navigation region."
	},
	"@astryx.pagination.previous": {
		defaultMessage: "Go to previous page",
		description: "Aria label for the previous-page button."
	},
	"@astryx.pagination.next": {
		defaultMessage: "Go to next page",
		description: "Aria label for the next-page button."
	},
	"@astryx.pagination.previousBy": {
		defaultMessage: "Go back {step, number} {step, plural, one {page} other {pages}}",
		description: "Aria label for the previous button when it advances more than one page per click (the `step` prop > 1). `step` is the number of pages skipped."
	},
	"@astryx.pagination.nextBy": {
		defaultMessage: "Go forward {step, number} {step, plural, one {page} other {pages}}",
		description: "Aria label for the next button when it advances more than one page per click (the `step` prop > 1). `step` is the number of pages skipped."
	},
	"@astryx.pagination.first": {
		defaultMessage: "Go to first page",
		description: "Aria label for the first-page button (« double chevron) in the input pagination variant."
	},
	"@astryx.pagination.last": {
		defaultMessage: "Go to last page",
		description: "Aria label for the last-page button (» double chevron) in the input pagination variant."
	},
	"@astryx.pagination.goToPage": {
		defaultMessage: "Go to page {page, number}",
		description: "Aria label for an individual page-number button. `page` is 1-based."
	},
	"@astryx.pagination.goToPageInput": {
		defaultMessage: "Go to page",
		description: "Aria label for the editable page/row number box in the input pagination variant. No number — the box holds the value itself."
	},
	"@astryx.pagination.pageLabel": {
		defaultMessage: "Page",
		description: "Visible label before the editable box in the input pagination variant. Example: \"Page [ 1 ] / 10\"."
	},
	"@astryx.pagination.ofTotalPages": {
		defaultMessage: "/ {total, number}",
		description: "Visible total shown after the editable box in the input pagination variant. Example: the \"/ 10\" in \"Page [ 1 ] / 10\"."
	},
	"@astryx.pagination.pageIndicators": {
		defaultMessage: "Page indicators",
		description: "Aria label for the dots-variant page-indicator group."
	},
	"@astryx.pagination.itemsPerPage": {
		defaultMessage: "Items per page",
		description: "Label for the page-size selector."
	},
	"@astryx.pagination.count": {
		defaultMessage: "{from, number}–{to, number} of {total, number}",
		description: "Visible range-of-total text on a pagination bar. Example: \"1–20 of 347\"; the en-dash is translator's choice."
	},
	"@astryx.pagination.pageOfTotal": {
		defaultMessage: "Page {current, number} of {total, number}",
		description: "Visible \"Page X of Y\" text on the compact pagination variant; also announced by screen readers. Keep short — sits in a compact toolbar."
	},
	"@astryx.pagination.pageAnnounce": {
		defaultMessage: "Page {current, number}",
		description: "Screen-reader announcement when a page changes and total is unknown."
	},
	"@astryx.powersearch.editor.field": {
		defaultMessage: "Field",
		description: "Noun form-label above the field-picker dropdown in the PowerSearch filter-builder popover (which data column to filter on). Not an action."
	},
	"@astryx.powersearch.editor.operator": {
		defaultMessage: "Operator",
		description: "Noun form-label above the operator dropdown in the PowerSearch filter-builder popover. Refers to a comparison verb (\"is\", \"contains\"), not a math or phone operator."
	},
	"@astryx.powersearch.editor.addFilter": {
		defaultMessage: "+ Add filter",
		description: "Button label inside a group in the PowerSearch filter-builder; adds another filter row (e.g. \"Status = Active\"). The leading \"+ \" is a plus-sign character."
	},
	"@astryx.powersearch.editor.removeFilter": {
		defaultMessage: "Remove filter",
		description: "Screen-reader-only label on the \"×\" icon button next to a filter row in the PowerSearch editor; removes that row. Imperative verb."
	},
	"@astryx.powersearch.editor.groupOperator": {
		defaultMessage: "Group operator",
		description: "Screen-reader-only label for the AND/OR toggle that combines sibling filters inside a filter group. Sighted users see just \"AND\" or \"OR\"."
	},
	"@astryx.powersearch.editor.group": {
		defaultMessage: "Group",
		description: "Fallback noun label shown on a nested filter-group chip when no AND/OR combining operator has been chosen. Use the noun (\"a cluster\"), not the verb \"to group\"."
	},
	"@astryx.powersearch.editor.delete": {
		defaultMessage: "Delete",
		description: "Button label inside the PowerSearch filter-editor popover; deletes the currently-edited filter row. Imperative verb form."
	},
	"@astryx.powersearch.editor.cancel": {
		defaultMessage: "Cancel",
		description: "Button label inside the PowerSearch filter-editor popover; closes the popover and discards pending edits. Imperative verb form."
	},
	"@astryx.powersearch.editor.apply": {
		defaultMessage: "Apply",
		description: "Primary button label inside the PowerSearch filter-editor popover; confirms the edited filter. Imperative verb; consumers may override to \"Save\"."
	},
	"@astryx.powersearch.valueEditor.value": {
		defaultMessage: "Value",
		description: "Noun form-label above a single free-text/number input in the PowerSearch value editor (e.g. the \"acme\" in `Name contains acme`). Not a verb or \"worth\"."
	},
	"@astryx.powersearch.valueEditor.values": {
		defaultMessage: "Values",
		description: "Plural noun form-label above a multi-value chip input in the PowerSearch value editor. Should match its singular counterpart `Value` in your language."
	},
	"@astryx.powersearch.valueEditor.time": {
		defaultMessage: "Time",
		description: "Noun form-label above a time-of-day (HH:MM) picker in the PowerSearch value editor. Clock time, not duration or era."
	},
	"@astryx.powersearch.valueEditor.date": {
		defaultMessage: "Date",
		description: "Noun form-label above a calendar-date picker in the PowerSearch value editor. Calendar date, not romantic date or fruit."
	},
	"@astryx.powersearch.valueEditor.relativeDate": {
		defaultMessage: "Relative date",
		description: "Label for the relative-date selector (e.g. \"Last 7 days\") in the PowerSearch value editor."
	},
	"@astryx.powersearch.valueEditor.startDate": {
		defaultMessage: "Start date",
		description: "Noun form-label above the start-of-range date picker in the PowerSearch value editor. Pairs with `End date` — keep the two parallel in your language."
	},
	"@astryx.powersearch.valueEditor.endDate": {
		defaultMessage: "End date",
		description: "Noun form-label above the end-of-range date picker in the PowerSearch value editor. Pairs with `Start date` — keep the two parallel."
	},
	"@astryx.powersearch.valueEditor.entities": {
		defaultMessage: "Entities",
		description: "\"Entities\" is jargon — plural noun form-label above an entity picker (people, teams, projects). Prefer a natural collective like \"items\" if your language has no equivalent."
	},
	"@astryx.powersearch.valueEditor.searchPlaceholder": {
		defaultMessage: "Search…",
		description: "Placeholder inside the search input in the PowerSearch entity/typeahead picker. Imperative verb; trailing `…` is one character."
	},
	"@astryx.powersearch.valueEditor.enterValuePlaceholder": {
		defaultMessage: "Enter value…",
		description: "Placeholder inside a free-text single-value input in the PowerSearch value editor. Imperative verb; trailing `…` is one character."
	},
	"@astryx.powersearch.valueEditor.addValuesPlaceholder": {
		defaultMessage: "Add values…",
		description: "Placeholder inside a multi-value chip input where the user types items and presses Enter to add each as a chip. Imperative verb; trailing `…` is one character."
	},
	"@astryx.powersearch.valueEditor.enterNumberPlaceholder": {
		defaultMessage: "Enter number…",
		description: "Placeholder inside a numeric input in the PowerSearch value editor. Imperative verb; trailing `…` is one character."
	},
	"@astryx.powersearch.valueEditor.selectValuesPlaceholder": {
		defaultMessage: "Select values…",
		description: "Placeholder on a dropdown for choosing values from a fixed enum list in the PowerSearch value editor. Imperative verb (user selects, not types)."
	},
	"@astryx.powersearch.operator.contains": {
		defaultMessage: "contains",
		description: "PowerSearch string operator, rendered inline as `<field> contains <value>` (e.g. `Name contains acme`). Lowercase verb form."
	},
	"@astryx.powersearch.operator.notContains": {
		defaultMessage: "does not contain",
		description: "PowerSearch negated string operator. Example: `Name does not contain test`. Lowercase; pairs with `contains`."
	},
	"@astryx.powersearch.operator.startsWith": {
		defaultMessage: "starts with",
		description: "PowerSearch string prefix operator. Example: `Email starts with admin@`. Lowercase."
	},
	"@astryx.powersearch.operator.notStartsWith": {
		defaultMessage: "does not start with",
		description: "PowerSearch negated prefix operator. Example: `Email does not start with test`. Lowercase; pairs with `starts with`."
	},
	"@astryx.powersearch.operator.endsWith": {
		defaultMessage: "ends with",
		description: "PowerSearch string suffix operator. Example: `Email ends with @meta.com`. Lowercase."
	},
	"@astryx.powersearch.operator.notEndsWith": {
		defaultMessage: "does not end with",
		description: "PowerSearch negated suffix operator. Example: `Email does not end with @gmail.com`. Lowercase; pairs with `ends with`."
	},
	"@astryx.powersearch.operator.is": {
		defaultMessage: "is",
		description: "PowerSearch equality operator for strings/enums. Example: `Status is Active`. Separate from `operator.equals` (numbers) — translations may diverge."
	},
	"@astryx.powersearch.operator.isNot": {
		defaultMessage: "is not",
		description: "PowerSearch inequality operator for strings/enums. Example: `Status is not Draft`. Pairs with `is`; separate from `operator.notEquals`."
	},
	"@astryx.powersearch.operator.equals": {
		defaultMessage: "is",
		description: "PowerSearch numeric equality operator. Example: `Age is 30`. Ships same English \"is\" as `operator.is` but is separate so numbers may diverge (e.g. \"equals\")."
	},
	"@astryx.powersearch.operator.notEquals": {
		defaultMessage: "is not",
		description: "PowerSearch numeric inequality operator. Example: `Count is not 0`. Same divergence option as `operator.equals`."
	},
	"@astryx.powersearch.operator.greaterThan": {
		defaultMessage: "is greater than",
		description: "PowerSearch numeric operator, strictly greater than. Example: `Age is greater than 18`. Lowercase."
	},
	"@astryx.powersearch.operator.lessThan": {
		defaultMessage: "is less than",
		description: "PowerSearch numeric operator, strictly less than. Example: `Priority is less than 5`. Lowercase."
	},
	"@astryx.powersearch.operator.greaterThanOrEqual": {
		defaultMessage: "is greater than or equal to",
		description: "PowerSearch numeric operator, ≥. Example: `Age is greater than or equal to 21`. A shorter form (e.g. \"≥\") is fine if idiomatic."
	},
	"@astryx.powersearch.operator.lessThanOrEqual": {
		defaultMessage: "is less than or equal to",
		description: "PowerSearch numeric operator, ≤. Example: `Priority is less than or equal to 3`. A shorter form is fine if idiomatic."
	},
	"@astryx.powersearch.operator.before": {
		defaultMessage: "is before",
		description: "PowerSearch date operator, strictly earlier. Example: `Created is before 2024-01-01`. Temporal, not spatial."
	},
	"@astryx.powersearch.operator.after": {
		defaultMessage: "is after",
		description: "PowerSearch date operator, strictly later. Example: `Updated is after 2024-06-01`. Temporal."
	},
	"@astryx.powersearch.operator.between": {
		defaultMessage: "is between",
		description: "PowerSearch date operator, inclusive range. Example: `Created is between 2024-01-01 and 2024-06-30`. The `and <end>` portion is composed separately."
	},
	"@astryx.powersearch.operator.isTrue": {
		defaultMessage: "is true",
		description: "PowerSearch boolean operator: matches truthy. Example: `Is admin is true`. Pairs with `is false`; field may be affirmative or a yes/no question."
	},
	"@astryx.powersearch.operator.isFalse": {
		defaultMessage: "is false",
		description: "PowerSearch boolean operator: matches falsy. Example: `Is admin is false`. Pairs with `is true`."
	},
	"@astryx.powersearch.operator.isAnyOf": {
		defaultMessage: "is any of",
		description: "PowerSearch list operator: value is in the set. Example: `Status is any of [Active, Paused, Draft]`. The value list is composed separately; pairs with `is none of`."
	},
	"@astryx.powersearch.operator.isNoneOf": {
		defaultMessage: "is none of",
		description: "PowerSearch negated list operator: value not in the set. Example: `Status is none of [Archived, Deleted]`. Pairs with `is any of`."
	},
	"@astryx.powersearch.valueEditor.itemsCount": {
		defaultMessage: "{count, number} {count, plural, one {item} other {items}}",
		description: "Overflow summary on a compact filter chip when the list of selected items is too long. Example: `3 items` or `1 item`."
	},
	"@astryx.powersearch.valueEditor.entitiesCount": {
		defaultMessage: "{count, number} {count, plural, one {entity} other {entities}}",
		description: "Overflow summary on a compact filter chip when the list of selected entities is too long. Example: `5 entities` or `1 entity`. Pair with `itemsCount` translation."
	},
	"@astryx.powersearch.valueEditor.dateRange": {
		defaultMessage: "date range",
		description: "Fallback lowercase noun rendered inline in a filter chip when a date-range value can't be formatted (e.g. `Created is between date range`). Keep lowercase."
	},
	"@astryx.powersearch.valueEditor.filtersCount": {
		defaultMessage: "{count, number} {count, plural, one {filter} other {filters}}",
		description: "Summary inside a filter chip when the value is a nested set of filters. Example: `3 filters` or `1 filter`."
	},
	"@astryx.powersearch.resultCount": {
		defaultMessage: "{count, number} {count, plural, one {result} other {results}}",
		description: "Live result-count text next to the PowerSearch input, announced to screen readers on change. Example: `12 results`, `1 result`; keep compact."
	},
	"@astryx.alertDialog.cancel": {
		defaultMessage: "Cancel",
		description: "Button label on the secondary/dismiss button of an AlertDialog (modal confirmation). Imperative verb; consumers usually override with task-specific text."
	},
	"@astryx.appShell.mobileNavigation": {
		defaultMessage: "Mobile navigation",
		description: "Screen-reader-only accessible name for the mobile-only navigation region on small viewports. \"Mobile\" = phone/tablet (small screen), not \"movable\"."
	},
	"@astryx.appShell.skipToContent": {
		defaultMessage: "Skip to content",
		description: "Text of the skip link — the first focusable element on the page, visible only while keyboard-focused. Activating it jumps focus past the navigation to the main content area. Imperative verb; keep short."
	},
	"@astryx.avatar.nameWithStatus": {
		defaultMessage: "{name}, {status}",
		description: "Screen-reader accessible name for an Avatar showing a status indicator; composes the person's name with the status label, e.g. \"Jane Doe, Online\". {name} = the avatar's name/alt text, {status} = the status dot's label. Adjust separator and order per locale."
	},
	"@astryx.avatarGroup.label": {
		defaultMessage: "Avatars",
		description: "Screen-reader-only fallback name for a horizontal cluster of user avatar images. Plural noun; consumers usually override with \"Team members\", \"Attendees\", etc."
	},
	"@astryx.avatarGroup.keyboardHint": {
		defaultMessage: "Use arrow keys to move between avatars",
		description: "Screen-reader-only instruction attached (via aria-describedby) to a group of interactive avatars that share a single Tab stop. Tells keyboard users the Left/Right arrow keys move focus between the avatars. Only announced when the group has interactive (link/button) avatars."
	},
	"@astryx.avatarGroup.overflow": {
		defaultMessage: "{count, number} more",
		description: "Accessible name for the \"+N\" overflow indicator at the end of an AvatarGroup — announces how many additional avatars are not shown. Example: `5 more`. The visible \"+N\" text is unaffected; this is the aria-label only."
	},
	"@astryx.banner.dismiss": {
		defaultMessage: "Dismiss",
		description: "\"Dismiss\" = close/hide this notification (not \"reject a person\"). Tooltip on the small X button on a Banner, and its aria label when the banner's title is not plain text."
	},
	"@astryx.banner.dismissTitled": {
		defaultMessage: "{dismiss} {title}",
		description: "Aria label on the small X button on a Banner, naming which banner it closes so stacked banners are distinguishable. `{dismiss}` is the already-translated tooltip text from `banner.dismiss`; keep it verbatim in the message so visible and accessible labels match. `{title}` is the banner's own title text — example: `Dismiss Upload failed`. Reorder the placeholders freely."
	},
	"@astryx.calendar.previousMonth": {
		defaultMessage: "Previous month",
		description: "Screen-reader-only label on the left-arrow button in a Calendar's month header (navigates one month back). Pairs with `calendar.nextMonth`."
	},
	"@astryx.calendar.nextMonth": {
		defaultMessage: "Next month",
		description: "Screen-reader-only label on the right-arrow button in a Calendar's month header (navigates one month forward). Pairs with `calendar.previousMonth`."
	},
	"@astryx.calendar.daySelected": {
		defaultMessage: "{date}, selected",
		description: "Accessible name for the Calendar day button that is the current single-mode selection. `{date}` is the localized full date, e.g. \"Thursday, January 15, 2026\". The trailing state word tells screen-reader users the focused day is selected."
	},
	"@astryx.calendar.dayRangeStart": {
		defaultMessage: "{date}, range start",
		description: "Accessible name for the Calendar day button that begins the selected date range (or the first pick of an in-progress range). `{date}` is the localized full date."
	},
	"@astryx.calendar.dayRangeEnd": {
		defaultMessage: "{date}, range end",
		description: "Accessible name for the Calendar day button that ends the selected date range. `{date}` is the localized full date. Pairs with `calendar.dayRangeStart`."
	},
	"@astryx.calendar.dayRangeStartAndEnd": {
		defaultMessage: "{date}, range start and range end",
		description: "Accessible name for a Calendar day button that both begins and ends a completed one-day range. `{date}` is the localized full date."
	},
	"@astryx.calendar.dayInRange": {
		defaultMessage: "{date}, in range",
		description: "Accessible name for a Calendar day button strictly inside the selected date range (not an endpoint). `{date}` is the localized full date."
	},
	"@astryx.calendar.rangeStartAnnounce": {
		defaultMessage: "Start date {date}. Select an end date.",
		description: "Screen-reader announcement after the first pick of a Calendar range selection. `{date}` is the localized full date. Prompts the user that a second pick completes the range."
	},
	"@astryx.calendar.rangeCompleteAnnounce": {
		defaultMessage: "Selected range: {start} to {end}.",
		description: "Screen-reader announcement after the second pick completes a Calendar range selection. `{start}` and `{end}` are localized full dates in chronological order."
	},
	"@astryx.calendar.rangeClearedAnnounce": {
		defaultMessage: "Cleared start date {date}. Select a start date.",
		description: "Screen-reader announcement when the user clicks the in-progress range start again, which clears it instead of completing a zero-length range. `{date}` is the localized full date."
	},
	"@astryx.carousel.label": {
		defaultMessage: "Carousel",
		description: "Screen-reader-only fallback name for a horizontally-scrolling row of items. If \"carousel\" is unfamiliar in your locale, prefer the standard term (e.g. \"slider\")."
	},
	"@astryx.carousel.scrollLeft": {
		defaultMessage: "Scroll left",
		description: "Screen-reader-only label on the left arrow button in a Carousel. Pairs with `carousel.scrollRight`; in RTL locales, coordinate the two so left/right match layout."
	},
	"@astryx.carousel.scrollRight": {
		defaultMessage: "Scroll right",
		description: "Screen-reader-only label on the right arrow button in a Carousel. Pairs with `carousel.scrollLeft`; same RTL note."
	},
	"@astryx.carousel.slideLabel": {
		defaultMessage: "Slide {current, number} of {total, number}",
		description: "Screen-reader accessible name for one slide in a Carousel, giving its position. `current` is the 1-based slide number; `total` is the slide count."
	},
	"@astryx.chart.label": {
		defaultMessage: "Chart",
		description: "Generic screen-reader name for a Chart with no primary series and no consumer-supplied title. Noun (a data visualization), not a verb."
	},
	"@astryx.chart.labelWithSeries": {
		defaultMessage: "Chart of {series} by {xKey}",
		description: "Generated screen-reader name for a Chart without a consumer-supplied title. `{series}` is a locale-formatted list of series labels; `{xKey}` is the consumer's horizontal data-field name."
	},
	"@astryx.chart.dataTableCaption": {
		defaultMessage: "{label} data",
		description: "Screen-reader-only caption for the small-data table that mirrors a Chart. `{label}` is the Chart's resolved accessible name."
	},
	"@astryx.chartLegend.label": {
		defaultMessage: "Chart legend",
		description: "Screen-reader-only accessible name for the list of series labels and swatches rendered by ChartLegend."
	},
	"@astryx.chat.status.sending": {
		defaultMessage: "Sending",
		description: "Chat send-status caption under an outgoing message while it is being transmitted. Part of the set sending → sent → delivered → read (or failed) — keep tense/aspect consistent."
	},
	"@astryx.chat.status.sent": {
		defaultMessage: "Sent",
		description: "Chat send-status caption shown once the message reaches the server. Part of the set sending → **sent** → delivered → read (or failed) — keep tense consistent."
	},
	"@astryx.chat.status.delivered": {
		defaultMessage: "Delivered",
		description: "Chat send-status caption shown once the recipient's device received the message. Part of the set sending → sent → **delivered** → read (or failed)."
	},
	"@astryx.chat.status.read": {
		defaultMessage: "Read",
		description: "Chat send-status caption shown once the recipient opened the message. English past-participle (\"has been read\", /rɛd/), not the present verb — part of the set sending → sent → delivered → **read**."
	},
	"@astryx.chat.status.failed": {
		defaultMessage: "Failed",
		description: "Chat send-status caption shown when the send attempt errored. Part of the set — the terminal failure branch, orthogonal to the sent → delivered → read success track."
	},
	"@astryx.chat.messageAriaLabel": {
		defaultMessage: "Message {status}",
		description: "Screen-reader-only accessible name for a chat message row. `{status}` interpolates the localized status word (e.g. `Message sent`, `Message delivered`) — reorder if needed."
	},
	"@astryx.chat.pastedText.expand": {
		defaultMessage: "Expand",
		description: "Button label on a chip in the chat composer representing a long pasted text block; clicking reveals full content. \"Expand\" here means reveal more, not grow physically."
	},
	"@astryx.checkboxList.item.checkbox": {
		defaultMessage: "Checkbox",
		description: "Localized hidden text used internally when a rich visible label names the checkbox through aria-labelledby. It does not become the computed name; callers must provide aria-label when rich content has no text."
	},
	"@astryx.commandPalette.emptySearch": {
		defaultMessage: "No results",
		description: "Fallback empty-state text inside a CommandPalette when the user's query has no matches. Very short (2 words); neutral tone."
	},
	"@astryx.commandPalette.emptyBootstrap": {
		defaultMessage: "Type to search",
		description: "Onboarding empty-state text shown inside a CommandPalette on first open, before the user has typed anything. Imperative sentence fragment."
	},
	"@astryx.commandPalette.resultCount": {
		defaultMessage: "{count, number} {count, plural, one {result} other {results}}",
		description: "Screen-reader-only announcement of how many commands match the CommandPalette query as the user types. Example: `12 results`, `1 result`; keep compact."
	},
	"@astryx.commandPalette.noResultsFor": {
		defaultMessage: "No results for {query}",
		description: "Screen-reader-only announcement when a CommandPalette query matches nothing. `{query}` is the user's verbatim search text; keep it last if your language allows so truncation-by-AT still conveys the outcome."
	},
	"@astryx.commandPalette.loading": {
		defaultMessage: "Loading",
		description: "Screen-reader-only announcement that a CommandPalette search has started and results are being fetched. Present-progressive form; matches the visible spinner."
	},
	"@astryx.dateRangeInput.presetDateRanges": {
		defaultMessage: "Preset date ranges",
		description: "Screen-reader-only accessible name for the sidebar of quick-pick preset ranges inside a DateRangeInput popover (e.g. \"Last 7 days\", \"This month\")."
	},
	"@astryx.dateTimeInput.timePlaceholder": {
		defaultMessage: "Select a time",
		description: "Grey placeholder inside the empty time-of-day slot in a DateTimeInput. \"Time\" = clock time (HH:MM), not duration."
	},
	"@astryx.dialog.close": {
		defaultMessage: "Close",
		description: "\"Close\" = shut/dismiss the dialog, not \"nearby\" (English homograph). Aria label AND tooltip on the X at the top-right of a Dialog."
	},
	"@astryx.dropdownMenu.label": {
		defaultMessage: "Menu",
		description: "Screen-reader-only fallback name for a dropdown menu popover. Very generic; consumers usually override. Noun (\"a menu\"), not the imperative."
	},
	"@astryx.dropdownMenu.back": {
		defaultMessage: "Back",
		description: "Button label that returns from a nested action list to its parent inside a DropdownMenu bottom sheet. Imperative navigation action."
	},
	"@astryx.lightbox.close": {
		defaultMessage: "Close",
		description: "\"Close\" = shut/dismiss (not \"nearby\"). Screen-reader-only label on the X button that dismisses a Lightbox."
	},
	"@astryx.lightbox.previous": {
		defaultMessage: "Previous",
		description: "Screen-reader-only label on the left-arrow button in a Lightbox (navigates to previous media item). Pairs with `lightbox.next`."
	},
	"@astryx.lightbox.next": {
		defaultMessage: "Next",
		description: "Screen-reader-only label on the right-arrow button in a Lightbox (navigates to next media item). Pairs with `lightbox.previous`."
	},
	"@astryx.chatTypingIndicator.one": {
		defaultMessage: "{name} is typing…",
		description: "Politely announced status naming the single person currently typing in a chat. `name` is a display name supplied by the app. Present-progressive form; the trailing ellipsis is the single … character."
	},
	"@astryx.chatTypingIndicator.many": {
		defaultMessage: "{names} are typing…",
		description: "Politely announced status when more than one person is typing in a chat. `names` is already joined for the locale by Intl.ListFormat, so translations must not add their own conjunction — place `{names}` where the joined list belongs."
	},
	"@astryx.chatTypingIndicator.others": {
		defaultMessage: "{count, number} {count, plural, one {other} other {others}}",
		description: "Overflow element for the chat typing status when three or more people type: the first name is shown and the rest collapse into this phrase, which is then joined to the name by Intl.ListFormat. Renders as the last list item, e.g. \"Ana and 2 others\"."
	},
	"@astryx.listInput.emptyTitle": {
		defaultMessage: "No {itemName}s yet",
		description: "EmptyState title shown inside a lab ListInput when its collection has no records. `{itemName}` is the consumer's singular noun for one record (e.g. \"guest\"); the source appends a literal \"s\" to pluralize it, which only works for regular English plurals. If your language cannot pluralize an interpolated noun this way, rephrase around `{itemName}` instead (e.g. \"No {itemName} added yet\")."
	},
	"@astryx.listInput.emptyDescription": {
		defaultMessage: "Add a {itemName} to get started.",
		description: "EmptyState supporting text shown inside a lab ListInput when its collection has no records. `{itemName}` is the consumer's singular noun for one record (e.g. \"guest\")."
	},
	"@astryx.listInput.addItem": {
		defaultMessage: "Add {itemName}",
		description: "Accessible label on the button that appends a new record to a lab ListInput. `{itemName}` is the consumer's singular noun for one record (e.g. \"guest\")."
	},
	"@astryx.listInput.removeItem": {
		defaultMessage: "Remove {itemName} {position, number}",
		description: "Accessible label and tooltip on the button that deletes one record from a lab ListInput. `{itemName}` is the consumer's singular noun for one record; `{position}` is its 1-based row number (e.g. \"Remove guest 2\")."
	},
	"@astryx.listInput.removeUnavailable": {
		defaultMessage: "Remove is unavailable while the list is disabled",
		description: "Tooltip shown on the Remove button when the ListInput is disabled or loading, explaining why the action cannot be performed."
	},
	"@astryx.listInput.reorderItem": {
		defaultMessage: "Reorder {itemName} {position, number}",
		description: "Accessible label on the drag-handle button that reorders one record in a lab ListInput. `{itemName}` is the consumer's singular noun for one record; `{position}` is its 1-based row number (e.g. \"Reorder guest 2\")."
	},
	"@astryx.listInput.fieldLabelWithPosition": {
		defaultMessage: "{header}, {itemName} {position, number} of {total, number}",
		description: "Accessible name for a field inside a lab ListInput row after the first row, disambiguating repeated column labels. `{header}` is the column's own label (e.g. \"Name\"); `{itemName}` is the consumer's singular noun for one record; `{position}`/`{total}` are the row's 1-based index and the total row count (e.g. \"Name, guest 2 of 3\")."
	},
	"@astryx.listInput.reorderInstructions": {
		defaultMessage: "Use Arrow Up or Arrow Down to move this item one position. Press Space or Enter to pick it up for extended keyboard reordering.",
		description: "Visually-hidden instructions describing how to use a lab ListInput row's keyboard reorder handle, referenced via aria-describedby from every reorder button."
	},
	"@astryx.listInput.announceAdded": {
		defaultMessage: "Added {itemName} {position, number}.",
		description: "Screen-reader-only live announcement after a new record is appended to a lab ListInput. `{itemName}` is the consumer's singular noun for one record; `{position}` is the new record's 1-based row number."
	},
	"@astryx.listInput.announceRemoved": {
		defaultMessage: "Removed {itemName} {position, number}.",
		description: "Screen-reader-only live announcement after a record is deleted from a lab ListInput. `{itemName}` is the consumer's singular noun for one record; `{position}` is the removed record's former 1-based row number."
	},
	"@astryx.listInput.announceGrabbed": {
		defaultMessage: "{itemName} {position, number} grabbed. Use arrow keys to move, Space or Enter to drop, and Escape to cancel.",
		description: "Screen-reader-only live announcement when a lab ListInput record's keyboard reorder handle enters extended \"lift\" mode. `{itemName}` is the consumer's singular noun for one record; `{position}` is its 1-based row number."
	},
	"@astryx.listInput.announceMovedToPosition": {
		defaultMessage: "{itemName} moved to position {position, number} of {total, number}.",
		description: "Screen-reader-only live announcement each time a lab ListInput record's reorder position changes (arrow-key step, keyboard lift-mode preview, or pointer drag). `{itemName}` is the consumer's singular noun for one record; `{position}`/`{total}` are the record's new 1-based position and the total row count."
	},
	"@astryx.listInput.announceReorderCancelled": {
		defaultMessage: "Reordering cancelled.",
		description: "Screen-reader-only live announcement when a lab ListInput reorder in progress is cancelled (Escape key, blur, or the collection becoming disabled/loading mid-drag)."
	},
	"@astryx.listInput.announceReturnedToPosition": {
		defaultMessage: "{itemName} returned to position {position, number}.",
		description: "Screen-reader-only live announcement when a lab ListInput reorder is committed without the record's position actually changing. `{itemName}` is the consumer's singular noun for one record; `{position}` is its unchanged 1-based row number."
	},
	"@astryx.listInput.announceDropped": {
		defaultMessage: "{itemName} dropped at position {position, number} of {total, number}.",
		description: "Screen-reader-only live announcement when a lab ListInput reorder is committed with the record's position actually changing. `{itemName}` is the consumer's singular noun for one record; `{position}`/`{total}` are its new 1-based position and the total row count."
	},
	"@astryx.listInput.announceAlreadyAtBoundary": {
		defaultMessage: "This {itemName} is already {boundary, select, first {first} last {last} other {}}.",
		description: "Screen-reader-only live announcement when an arrow-key reorder attempt has no effect because the record is already at that end of the list. `{itemName}` is the consumer's singular noun for one record; `{boundary}` is always exactly \"first\" or \"last\"."
	},
	"@astryx.markdown.taskList": {
		defaultMessage: "Task list",
		description: "Screen-reader-only accessible name for a GitHub-flavored Markdown task list (rendered from `- [ ] item` / `- [x] done` syntax)."
	},
	"@astryx.markdown.table": {
		defaultMessage: "Table",
		description: "Screen-reader-only accessible name for a table rendered inside a Markdown block. Noun (\"a table\"), not the verb. Separate from `@astryx.table.label` — translations may diverge."
	},
	"@astryx.mobileNav.closeNavigation": {
		defaultMessage: "Close navigation",
		description: "Screen-reader-only label on the X/close button that dismisses the MobileNav overlay. Pairs with `mobileNav.toggle.open`."
	},
	"@astryx.multiSelector.selectAll": {
		defaultMessage: "Select all",
		description: "Label on the checkbox/toggle at the top of a MultiSelector dropdown that selects every option. \"All\" is a determiner here (as in \"all the options\"), not the pronoun."
	},
	"@astryx.multiSelector.searchPlaceholder": {
		defaultMessage: "Search…",
		description: "Placeholder inside the search input at the top of a MultiSelector's dropdown panel. Imperative verb; trailing `…` is one character."
	},
	"@astryx.multiSelector.searchOptions": {
		defaultMessage: "Search options",
		description: "Screen-reader-only accessible name for that same search input inside a MultiSelector."
	},
	"@astryx.multiSelector.empty": {
		defaultMessage: "No options",
		description: "Shown in a MultiSelector's dropdown panel when it was given no options at all, and announced in a polite live region on open. Very short (2 words); neutral tone, not error-y."
	},
	"@astryx.multiSelector.selectAllPartiallySelected": {
		defaultMessage: "{label}, partially selected",
		description: "Accessible name for the MultiSelector select-all option while only some options are selected. `{label}` is the visible select-all label (e.g. \"Select all\"). ARIA forbids aria-selected=\"mixed\" on options, so the indeterminate state is conveyed through the name instead. \"Partially\" = some but not all."
	},
	"@astryx.popover.close": {
		defaultMessage: "Close popover",
		description: "\"Close\" = shut/dismiss, not \"nearby\". Screen-reader-only label on the close button inside a Popover."
	},
	"@astryx.selector.searchPlaceholder": {
		defaultMessage: "Search…",
		description: "Placeholder inside the search input at the top of a Selector's dropdown panel (for filtering options). Imperative verb; trailing `…` is one character."
	},
	"@astryx.selector.searchOptions": {
		defaultMessage: "Search options",
		description: "\"Options\" = the list of choices in the dropdown. Screen-reader-only accessible name for the search input inside a Selector."
	},
	"@astryx.selector.empty": {
		defaultMessage: "No options",
		description: "Shown in a Selector's dropdown panel when it was given no options at all, and announced in a polite live region on open. Very short (2 words); neutral tone, not error-y."
	},
	"@astryx.sideNav.label": {
		defaultMessage: "Side navigation",
		description: "Screen-reader-only accessible name for the primary vertical sidebar nav (usually on the left)."
	},
	"@astryx.sideNav.resizeSidebar": {
		defaultMessage: "Resize sidebar",
		description: "Screen-reader-only label on the vertical drag handle at the right edge of the SideNav that lets the user resize the sidebar's width."
	},
	"@astryx.sideNav.heading.openMenu": {
		defaultMessage: "Open menu",
		description: "Screen-reader-only label on the `⋯` overflow-menu button embedded in a SideNav section heading. Same string as `topNav.heading.openMenu` — translations may share."
	},
	"@astryx.tabList.label": {
		defaultMessage: "Tabs",
		description: "Screen-reader-only fallback name for a horizontal tab bar. Plural noun; \"Tabs\" here = UI tab panels, not browser tabs or the Tab key."
	},
	"@astryx.table.label": {
		defaultMessage: "Table",
		description: "Fallback screen-reader-only accessible name for a data-table region when the consumer provides none. Noun (\"a table\"), not the verb \"to table\"."
	},
	"@astryx.table.noData": {
		defaultMessage: "No data",
		description: "Fallback empty-state text in the table body when there are zero rows. Neutral tone (not error-y); consumers commonly override with something specific like \"No results\"."
	},
	"@astryx.table.filter.allPlaceholder": {
		defaultMessage: "All",
		description: "Placeholder on a per-column filter dropdown when nothing is selected, meaning \"no filter — all rows match\". Determiner form (as in \"all values\"), not the pronoun."
	},
	"@astryx.table.filter.reset": {
		defaultMessage: "Reset",
		description: "Button label inside a table's filter panel/popover; clears pending filter values back to defaults. Imperative verb."
	},
	"@astryx.table.filter.apply": {
		defaultMessage: "Apply",
		description: "Primary button label inside a table's filter panel/popover; commits pending filter values. Imperative verb; pairs with `Reset`."
	},
	"@astryx.table.rowStatus.columnHeader": {
		defaultMessage: "Row status",
		description: "Screen-reader-only column header for the narrow status-indicator gutter a Table gains from useTableRowStatus. Sighted users see a blank gutter; assistive tech announces this as the column name."
	},
	"@astryx.table.selection.bulkActionsLabel": {
		defaultMessage: "Bulk actions",
		description: "Accessible name for the contextual Toolbar shown while Table rows are selected."
	},
	"@astryx.table.selection.clearAll": {
		defaultMessage: "Unselect All",
		description: "Visible button label that clears the complete controlled Table row selection, including keys outside the current view."
	},
	"@astryx.table.selection.selectedCount": {
		defaultMessage: "{count, number} selected",
		description: "Visible status in TableSelectionToolbar showing the number of selected rows."
	},
	"@astryx.table.selection.selectAllRows": {
		defaultMessage: "Select all rows",
		description: "Aria label for the \"select all rows\" checkbox in a Table header."
	},
	"@astryx.table.selection.selectRow": {
		defaultMessage: "Select row",
		description: "Aria label for the \"select row\" checkbox on a Table row."
	},
	"@astryx.table.selection.selectRowNamed": {
		defaultMessage: "Select {label}",
		description: "Aria label for a Table row's selection checkbox when a per-row label is available (via getRowLabel). `label` is the row's human-readable identity, e.g. \"Alice\"."
	},
	"@astryx.table.sort.ascending": {
		defaultMessage: "Sort ascending",
		description: "Screen-reader-only label on a column header button that will sort the column ascending. Part of a set with `sort.descending` and `sort.clear` — keep parallel."
	},
	"@astryx.table.sort.descending": {
		defaultMessage: "Sort descending",
		description: "Screen-reader-only label on a column header button that will sort the column descending. Part of a set with `sort.ascending` and `sort.clear`."
	},
	"@astryx.table.sort.clear": {
		defaultMessage: "Clear sort",
		description: "Screen-reader-only label on a column header button that will remove the current sort. \"Clear\" here means remove, not transparent. Part of the sort set."
	},
	"@astryx.table.sort.direction.ascending": {
		defaultMessage: "ascending",
		description: "Localized direction word interpolated as `direction` into @astryx.table.sort.sortedBy and @astryx.table.sort.sortedByWithPriority."
	},
	"@astryx.table.sort.direction.descending": {
		defaultMessage: "descending",
		description: "Localized direction word interpolated as `direction` into @astryx.table.sort.sortedBy and @astryx.table.sort.sortedByWithPriority."
	},
	"@astryx.table.sort.sortBy": {
		defaultMessage: "Sort by {label}",
		description: "Aria label for a sortable Table header button when the column is unsorted. `label` is the column header text."
	},
	"@astryx.table.sort.sortedBy": {
		defaultMessage: "Sort by {label}, sorted {direction}",
		description: "Aria label for a sorted Table header button. `direction` is the localized direction word from @astryx.table.sort.direction.*."
	},
	"@astryx.table.sort.sortedByWithPriority": {
		defaultMessage: "Sort by {label}, sorted {direction}, priority {rank, number} of {total, number}",
		description: "Aria label for a sorted Table header button in multi-sort. `rank` is the 1-based position of this column in the sort order; `total` is the number of sorted columns."
	},
	"@astryx.toast.dismiss": {
		defaultMessage: "Dismiss notification",
		description: "Screen-reader-only label on the X button of a Toast (transient notification popup). Distinct from `banner.dismiss` (persistent banner)."
	},
	"@astryx.toast.viewport": {
		defaultMessage: "Notifications",
		description: "Screen-reader-only accessible name for the invisible landmark region hosting the stack of Toast popups (usually pinned to a screen corner)."
	},
	"@astryx.tokenizer.clearAll": {
		defaultMessage: "Clear all",
		description: "Label on the \"×\" button that removes every token/chip from a Tokenizer input. Imperative verb + determiner \"all\"; short."
	},
	"@astryx.topNav.heading.openMenu": {
		defaultMessage: "Open menu",
		description: "Screen-reader-only label on the `⋯` overflow button in a TopNav section heading. Kept separate from `sideNav.heading.openMenu` so translations may diverge."
	},
	"@astryx.topNav.landmarkLabel": {
		defaultMessage: "Top navigation",
		description: "Default accessible name (aria-label) for the <nav> landmark rendered by TopNav when no label is provided."
	},
	"@astryx.treeList.toggleChildren": {
		defaultMessage: "Toggle children",
		description: "\"Children\" = child nodes in the tree, not human children. Screen-reader-only label on the chevron next to a TreeList item that has children — toggles the sub-list."
	},
	"@astryx.typeahead.emptySearchResults": {
		defaultMessage: "No results found",
		description: "Fallback empty-state message inside a Typeahead's suggestion popover when the current query has no matches. Neutral tone (not error-y)."
	},
	"@astryx.typeahead.loading": {
		defaultMessage: "Loading",
		description: "Screen-reader-only name for a spinner shown inside a Typeahead dropdown while suggestions are being fetched. Present-progressive form."
	},
	"@astryx.typeahead.searchResults": {
		defaultMessage: "Search results",
		description: "Screen-reader-only accessible name for the list of suggestions inside a Typeahead dropdown."
	},
	"@astryx.typeahead.clearSelection": {
		defaultMessage: "Clear selection",
		description: "\"Selection\" = the chosen value (not highlighted text). Screen-reader-only label on the X that clears the currently-selected value from a Typeahead."
	},
	"@astryx.breadcrumbs.label": {
		defaultMessage: "Breadcrumb",
		description: "Screen-reader-only fallback name for the breadcrumb trail (e.g. `Home > Section > Page`). Singular in English per ARIA convention; plural is fine if natural in your locale."
	},
	"@astryx.chat.composer.placeholder": {
		defaultMessage: "Type a message…",
		description: "Grey placeholder text inside the empty chat composer textarea. Imperative verb; trailing `…` is one character."
	},
	"@astryx.chat.composerDrawer.label": {
		defaultMessage: "Items",
		description: "Fallback aria label for the ChatComposerDrawer — a horizontal list of attachment/tool chips. Consumers usually override with \"Attachments\", \"Tools\", etc."
	},
	"@astryx.chat.composerInput.label": {
		defaultMessage: "Message input",
		description: "Screen-reader-only accessible name for the chat composer textarea. Reorder freely if your language uses one word for \"message field\"."
	},
	"@astryx.chat.speechRecognition.noSpeechDetected": {
		defaultMessage: "No speech was detected.",
		description: "Full-sentence error shown inline in the chat composer after voice input captured silence. Soft-error tone (not alarming); keep terminal period."
	},
	"@astryx.commandPalette.label": {
		defaultMessage: "Command palette",
		description: "Screen-reader-only fallback name for a keyboard-driven command menu (usually opened with Cmd/Ctrl-K). If unfamiliar, prefer a natural equivalent like \"quick actions\"."
	},
	"@astryx.commandPalette.input.placeholder": {
		defaultMessage: "Search…",
		description: "Grey placeholder inside the CommandPalette's search input. Imperative verb; trailing `…` is one character."
	},
	"@astryx.commandPalette.list.label": {
		defaultMessage: "Commands",
		description: "\"Command\" = an app action a user can invoke (metaphor from CLI), not a Unix command. Screen-reader-only name for the matching-commands list."
	},
	"@astryx.contextMenu.label": {
		defaultMessage: "Context menu",
		description: "Screen-reader-only fallback name for the right-click / long-press popup menu. \"Context\" = context-specific to the activated element, not linguistic context."
	},
	"@astryx.dateInput.placeholder": {
		defaultMessage: "Select a date",
		description: "Grey placeholder inside an empty DateInput field. \"Date\" = calendar date, not romantic or fruit. Imperative verb."
	},
	"@astryx.dateInput.dialogLabel": {
		defaultMessage: "Choose date",
		description: "Screen-reader-only accessible name for the popover dialog opened from a DateInput's calendar toggle. Imperative verb + noun."
	},
	"@astryx.dateInput.closeCalendar": {
		defaultMessage: "Close calendar",
		description: "Screen-reader-only label on the X inside the DateInput calendar popover (dismisses the popover). Distinct from `dateInput.toggleCalendarClose`, which labels the outer toggle."
	},
	"@astryx.dateInput.openCalendar": {
		defaultMessage: "Open calendar",
		description: "Aria label for the DateInput / DateRangeInput / DateTimeInput calendar toggle button when the popover is closed."
	},
	"@astryx.dateInput.toggleCalendarClose": {
		defaultMessage: "Close calendar",
		description: "Aria label for the DateInput / DateRangeInput / DateTimeInput calendar toggle button when the popover is open. Distinct from closeCalendar (which labels the X inside the popover) so translators can differentiate the toggle vs the close-X UI."
	},
	"@astryx.dateInput.clear": {
		defaultMessage: "Clear {label}",
		description: "Aria label for the clear-value button in DateInput / DateRangeInput / DateTimeInput. `{label}` is the field's own label so screen readers announce e.g. 'Clear Start date'."
	},
	"@astryx.dateInput.invalidDate": {
		defaultMessage: "Invalid date",
		description: "Screen-reader-only live-region alert in DateInput / DateTimeInput when the typed date cannot be parsed. The field silently reverts on blur, so this is the only rejection feedback a screen-reader user gets."
	},
	"@astryx.dateInput.resetPicking": {
		defaultMessage: "Reset",
		description: "Ghost button in the mobile date picker's header, at the trailing corner beside the month arrows. Removes the chosen date AND returns the calendar to the current month — it undoes the picking done so far and puts the picker back to how it opens, so prefer a word covering both, not one that only means emptying a field. Not cancel: the picker stays open afterwards and nothing is dismissed. Keep it short; it shares one line with the month title and two arrows."
	},
	"@astryx.dateInput.savePicking": {
		defaultMessage: "Save",
		description: "Full-width primary button that closes the mobile date picker, on the calendar. The date is already committed by the tap that chose it, so this only dismisses — but it is worded as saving because that is how the action reads to someone finishing a form. Use the word your platform uses for accepting and closing a sheet."
	},
	"@astryx.dateInput.doneChoosingMonth": {
		defaultMessage: "Done",
		description: "Full-width button under the month and year wheels in the mobile date picker. It does NOT close the picker — it returns to the calendar, having set the month. Word it as finishing this step, not as finishing the whole task; the calendar's own button is the one that closes."
	},
	"@astryx.dateInput.chooseMonthYear": {
		defaultMessage: "{monthYear}, Choose month and year",
		description: "Accessible name for the mobile date picker's header button, which swaps the calendar for month and year wheels. {monthYear} is the currently shown month and year, already localized (e.g. \"March 2026\"). The whole label is one string so the separator and word order can change per locale."
	},
	"@astryx.dateInput.monthWheel": {
		defaultMessage: "Month",
		description: "Accessible name for the scrollable month column in the mobile date picker. Single word; a calendar month, not a duration."
	},
	"@astryx.dateInput.yearWheel": {
		defaultMessage: "Year",
		description: "Accessible name for the scrollable year column in the mobile date picker. Single word; a calendar year, not a duration."
	},
	"@astryx.dateTimeInput.timeHint12h": {
		defaultMessage: "e.g., 2:30 PM",
		description: "Placeholder hint shown in the DateTimeInput time field when focused and empty with 12-hour format. Gives an example of expected input format."
	},
	"@astryx.dateTimeInput.timeHint24h": {
		defaultMessage: "e.g., 14:30",
		description: "Placeholder hint shown in the DateTimeInput time field when focused and empty with 24-hour format. Gives an example of expected input format."
	},
	"@astryx.dateTimeInput.timeSuffix": {
		defaultMessage: "{label} time",
		description: "Screen-reader-only accessible name for the time-of-day slot in a DateTimeInput. Example: `Start date time`; reorder freely (e.g. \"time of {label}\")."
	},
	"@astryx.dateTimeInput.timeOptionsLabel": {
		defaultMessage: "{label} options",
		description: "Screen-reader-only accessible name for the list of preset times that drops down from a DateTimeInput's time slot. `{label}` is the accessible name of the time field itself, already ending in the word for time — example: `Meeting time options`. Plural: the list holds every selectable time."
	},
	"@astryx.dateRangeInput.placeholder": {
		defaultMessage: "Select date range",
		description: "Grey placeholder inside an empty DateRangeInput field. Represents picking a start–end date pair. Imperative verb."
	},
	"@astryx.dateRangeInput.dialogLabel": {
		defaultMessage: "Choose date range",
		description: "Screen-reader-only accessible name for the popover dialog opened from a DateRangeInput. Imperative verb + noun phrase."
	},
	"@astryx.dateTimeInput.placeholder": {
		defaultMessage: "Select a date",
		description: "Grey placeholder inside an empty DateTimeInput field. Note: the English says only \"date\" though the field is date+time — do not add \"and time\" unless natural."
	},
	"@astryx.dateTimeInput.dialogLabel": {
		defaultMessage: "Choose date and time",
		description: "Screen-reader-only accessible name for the DateTimeInput picker dialog. On desktop this labels the date calendar popover inside the date+time field; on touch devices it labels the full Date/Time bottom sheet."
	},
	"@astryx.dateTimeInput.pickerMode": {
		defaultMessage: "Date/time section",
		description: "Screen-reader-only label for the segmented Date/Time switch at the top of the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.dateTab": {
		defaultMessage: "Date",
		description: "Visible label for the Date segment in the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.timeTab": {
		defaultMessage: "Time",
		description: "Visible label for the Time segment in the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.openTimePicker": {
		defaultMessage: "Open {label}",
		description: "Aria label for the clock button in the mobile DateTimeInput closed time segment. `{label}` is the accessible name of the time input, for example `Meeting time`."
	},
	"@astryx.dateTimeInput.saveDatePicking": {
		defaultMessage: "Save date",
		description: "Primary button at the bottom of the Date panel in the mobile DateTimeInput bottom sheet. It does not close the sheet; it accepts the date step and moves to the Time panel. Use sentence case in English and title case only when appropriate for the locale."
	},
	"@astryx.dateTimeInput.hourWheel": {
		defaultMessage: "Hour",
		description: "Accessible name for the hour wheel in the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.minuteWheel": {
		defaultMessage: "Minute",
		description: "Accessible name for the minute wheel in the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.secondWheel": {
		defaultMessage: "Second",
		description: "Accessible name for the optional seconds wheel in the mobile DateTimeInput bottom sheet."
	},
	"@astryx.dateTimeInput.meridiemWheel": {
		defaultMessage: "AM/PM",
		description: "Accessible name for the AM/PM wheel in the mobile DateTimeInput bottom sheet when using 12-hour time."
	},
	"@astryx.dateTimeInput.meridiemAM": {
		defaultMessage: "AM",
		description: "Label for the morning half of the AM/PM wheel in the mobile DateTimeInput bottom sheet. Use the locale's concise ante-meridiem marker."
	},
	"@astryx.dateTimeInput.meridiemPM": {
		defaultMessage: "PM",
		description: "Label for the afternoon/evening half of the AM/PM wheel in the mobile DateTimeInput bottom sheet. Use the locale's concise post-meridiem marker."
	},
	"@astryx.link.newTab": {
		defaultMessage: "(opens in new tab)",
		description: "Visually-hidden (screen-reader-only) suffix appended to a Link's accessible name when it opens in a new tab. Example: `Documentation (opens in new tab)`."
	},
	"@astryx.mobileNav.toggle.open": {
		defaultMessage: "Open navigation",
		description: "Screen-reader-only label on the hamburger button that opens the MobileNav overlay (rendered when the overlay is closed). Pairs with `mobileNav.closeNavigation`."
	},
	"@astryx.moreMenu.label": {
		defaultMessage: "More options",
		description: "Screen-reader-only name for the small `⋯` (three-dots) overflow button that opens a menu of additional actions. Very short — sits on a tiny icon button."
	},
	"@astryx.multiSelector.selectPlaceholder": {
		defaultMessage: "Select…",
		description: "Placeholder on an empty MultiSelector trigger button. Same English as `selector.placeholder` but a separate key — plural phrasing like \"Choose items…\" is fine."
	},
	"@astryx.outline.label": {
		defaultMessage: "Table of contents",
		description: "Screen-reader-only fallback name for a page's outline / table-of-contents sidebar (list of in-page headings). Rendered as `aria-label` on a `<nav>` landmark."
	},
	"@astryx.powersearch.label": {
		defaultMessage: "Search",
		description: "Screen-reader-only accessible name for the PowerSearch input (a filter-builder). The visible placeholder is separate; noun form often reads better than the verb."
	},
	"@astryx.powersearch.placeholder": {
		defaultMessage: "Search…",
		description: "Grey placeholder text inside the empty PowerSearch input. Imperative verb; trailing `…` is one character."
	},
	"@astryx.resizable.collapsed": {
		defaultMessage: "Collapsed",
		description: "aria-valuetext for the Resizable drag handle (role=separator) while its panel is collapsed to zero size. Replaces the numeric value announcement, since the numeric value is clamped to the minimum while collapsed. Adjective describing the panel state, not a verb/command."
	},
	"@astryx.resizable.handle.label": {
		defaultMessage: "Resize handle",
		description: "Screen-reader-only accessible name for the small draggable divider between two Resizable panels (users drag it to change the split ratio)."
	},
	"@astryx.selector.placeholder": {
		defaultMessage: "Select…",
		description: "Placeholder text on an empty Selector trigger button (a dropdown). Imperative verb; trailing `…` is one character. Very short — appears on the button face."
	},
	"@astryx.sideNav.heading.dialogLabel": {
		defaultMessage: "Navigation menu",
		description: "Screen-reader-only accessible name for the dropdown dialog opened from a SideNavHeading's overflow menu."
	},
	"@astryx.table.pagination.label": {
		defaultMessage: "Table pagination",
		description: "Screen-reader-only accessible name for a table's pagination `<nav>` (rendered below and/or above the table per the plugin's position config). Kept separate from `@astryx.pagination.label` so translations may diverge. When position='both', this string is interpolated as the {label} value into `@astryx.table.pagination.labelAbove`/`labelBelow` — keep it compatible with those suffix templates."
	},
	"@astryx.table.pagination.labelAbove": {
		defaultMessage: "{label} (top)",
		description: "Accessible name for the pagination `<nav>` rendered above the table when position='both' renders two navs. `label` is the resolved base label (default \"Table pagination\" or consumer-supplied); the suffix keeps the two same-type landmarks distinguishable."
	},
	"@astryx.table.pagination.labelBelow": {
		defaultMessage: "{label} (bottom)",
		description: "Accessible name for the pagination `<nav>` rendered below the table when position='both' renders two navs. `label` is the resolved base label (default \"Table pagination\" or consumer-supplied); the suffix keeps the two same-type landmarks distinguishable."
	},
	"@astryx.timeInput.placeholder": {
		defaultMessage: "Select a time",
		description: "\"Time\" = clock time (HH:MM), not duration or era. Grey placeholder inside an empty TimeInput field; imperative verb."
	},
	"@astryx.timeInput.invalidTime": {
		defaultMessage: "Invalid time",
		description: "Screen-reader-only live-region alert in TimeInput / DateTimeInput when the typed time cannot be parsed. \"Time\" = clock time (HH:MM). The field silently reverts on blur, so this is the only rejection feedback a screen-reader user gets."
	},
	"@astryx.timeInput.openPicker": {
		defaultMessage: "Open {label}",
		description: "Aria label for the clock button that opens TimeInput's browser/OS time picker. `{label}` is the field label, for example `Start time`."
	},
	"@astryx.topNav.heading.dialogLabel": {
		defaultMessage: "Navigation menu",
		description: "Screen-reader-only accessible name for the dropdown dialog opened from a TopNavHeading's overflow menu. Kept separate from the SideNav sibling."
	},
	"@astryx.typeahead.searchPlaceholder": {
		defaultMessage: "Search…",
		description: "Placeholder inside an empty Typeahead input (a search field that suggests results as the user types). Imperative verb; trailing `…` is one character."
	},
	"@astryx.banner.collapse": {
		defaultMessage: "Collapse",
		description: "\"Collapse\" = fold up, not crumble. Aria label AND tooltip on the Banner expand/collapse toggle when currently expanded. Pairs with `banner.expand`."
	},
	"@astryx.banner.expand": {
		defaultMessage: "Expand",
		description: "\"Expand\" = reveal more, not grow physically. Aria label AND tooltip on the same toggle when currently collapsed. Pairs with `banner.collapse`."
	},
	"@astryx.button.loading": {
		defaultMessage: "Loading",
		description: "Screen-reader-only live-region announcement while a Button is in its loading state (spinner shown, action in flight). Progressive sense (\"work in progress\"), not a noun. Kept separate from `typeahead.loading` — translations may diverge."
	},
	"@astryx.spinner.loading": {
		defaultMessage: "Loading",
		description: "Screen-reader-only default name for a standalone Spinner's role=\"status\" element, used when the consumer supplies neither `aria-label` nor a visible string label. Present-progressive form. Kept separate from `button.loading` and `typeahead.loading` — translations may diverge."
	},
	"@astryx.chatComposerDrawer.expand": {
		defaultMessage: "Expand {label}",
		description: "Screen-reader-only label on the ChatComposerDrawer toggle when the drawer is collapsed. `{label}` is the drawer's visible name — example: `Expand Attachments`. Pairs with `collapse`."
	},
	"@astryx.chatComposerDrawer.collapse": {
		defaultMessage: "Collapse {label}",
		description: "Screen-reader-only label on the ChatComposerDrawer toggle when the drawer is expanded. Example: `Collapse Attachments`. Pairs with `expand`."
	},
	"@astryx.chatDictationButton.startDictation": {
		defaultMessage: "Start dictation",
		description: "Accessible label for the microphone button when idle (not listening)."
	},
	"@astryx.chatDictationButton.stopDictation": {
		defaultMessage: "Stop dictation",
		description: "Accessible label for the microphone button when actively listening."
	},
	"@astryx.chatLayout.newMessages": {
		defaultMessage: "New messages",
		description: "Text on a floating pill at the bottom of a chat viewport when unseen messages arrive below the fold; clicking scrolls to bottom. Keep short — narrow pill."
	},
	"@astryx.chatLayoutScrollButton.scrollToBottom": {
		defaultMessage: "Scroll to bottom",
		description: "Visible tooltip AND screen-reader label for a small down-arrow button that scrolls the chat viewport to its latest message."
	},
	"@astryx.chatMessage.messageFrom": {
		defaultMessage: "Message from {sender}",
		description: "Screen-reader-only accessible name for a chat message when the sender name isn't visible. Example: `Message from Sarah`, `Message from Bot` — reorder freely."
	},
	"@astryx.chatSendButton.stop": {
		defaultMessage: "Stop",
		description: "Button label that replaces `Send` on the chat send button while an AI response is streaming; clicking aborts generation. Short — appears on a small button."
	},
	"@astryx.chatSendButton.send": {
		defaultMessage: "Send",
		description: "Primary button label on the chat submit button (paperplane icon). Imperative verb; pairs with `Stop`. Very short."
	},
	"@astryx.chatToolCalls.error": {
		defaultMessage: "Error: {message}",
		description: "Screen-reader text for a tool call that failed. {message} is the error detail."
	},
	"@astryx.chatToolCalls.status.pending": {
		defaultMessage: "Pending",
		description: "Screen-reader-only status label for a tool call that is waiting to begin."
	},
	"@astryx.chatToolCalls.status.running": {
		defaultMessage: "Running",
		description: "Screen-reader-only status label for a tool call that is currently running."
	},
	"@astryx.chatToolCalls.status.complete": {
		defaultMessage: "Complete",
		description: "Screen-reader-only status label for a tool call that completed successfully."
	},
	"@astryx.chatToolCalls.status.error": {
		defaultMessage: "Failed",
		description: "Screen-reader-only status label for a failed tool call when no error detail is supplied."
	},
	"@astryx.chatToolCalls.groupLabel": {
		defaultMessage: "{count} tool calls",
		description: "Summary label shown in the group header when multiple tool calls are expanded. {count} is the number of calls."
	},
	"@astryx.chatTriggerMenu.suggestions": {
		defaultMessage: "Suggestions",
		description: "Screen-reader-only fallback label for the popover listbox opened by a trigger character (`@`, `/`) in the chat composer when the trigger provides no specific label."
	},
	"@astryx.citation.label": {
		defaultMessage: "Citation {number}: {title}",
		description: "Screen-reader-only accessible name for a Citation chip (a small numbered link to a source). Example: `Citation 1: OpenAI research paper`. Reorder freely."
	},
	"@astryx.codeBlock.copied": {
		defaultMessage: "Copied",
		description: "Screen-reader-only label on the CodeBlock copy button for ~2s after a successful copy. Past-participle (\"has been copied\"); pairs with `codeBlock.copyCode`."
	},
	"@astryx.codeBlock.copyCode": {
		defaultMessage: "Copy code",
		description: "\"Code\" = source code. Aria label AND tooltip on the CodeBlock copy button in its default state. Pairs with `codeBlock.copied` (post-click state)."
	},
	"@astryx.codeBlock.code": {
		defaultMessage: "Code",
		description: "Screen-reader-only fallback name for a code-snippet scroll container when the code's language is unknown. \"Code\" = source code, not secret code or code of conduct."
	},
	"@astryx.field.optional": {
		defaultMessage: "Optional",
		description: "Visible indicator shown next to a form field's label when the field is optional (isOptional). Mutually exclusive with the required indicator. Very short — appears inline after the label text."
	},
	"@astryx.field.required": {
		defaultMessage: "Required",
		description: "Visible indicator shown next to a form field's label when the field must be filled in (isRequired). Mutually exclusive with the optional indicator. Very short — appears inline after the label text."
	},
	"@astryx.fileInput.clearLabel": {
		defaultMessage: "Clear {label}",
		description: "Screen-reader-only label on the X that removes the selected file from a FileInput. Example: `Clear Attachment`, `Clear Résumé`."
	},
	"@astryx.fileInput.dropHint": {
		defaultMessage: "Drop files here",
		description: "Text shown in the dropzone area when a user is dragging files over the FileInput."
	},
	"@astryx.fileInput.errorInvalidType": {
		defaultMessage: "\"{fileName}\" is not an accepted file type",
		description: "Validation error shown when a selected file does not match the accepted types."
	},
	"@astryx.fileInput.errorMaxFiles": {
		defaultMessage: "Maximum {maxFiles} files allowed",
		description: "Validation error shown when the number of selected files exceeds the maximum."
	},
	"@astryx.fileInput.errorMaxSize": {
		defaultMessage: "\"{fileName}\" exceeds {maxSize} limit",
		description: "Validation error shown when a selected file exceeds the maximum size. {maxSize} is a formatted size string like \"2.0 MB\"."
	},
	"@astryx.fileInput.fileSelected": {
		defaultMessage: "1 file selected: {fileName}",
		description: "Live-region announcement when a single file is successfully selected."
	},
	"@astryx.fileInput.filesSelected": {
		defaultMessage: "{count} files selected",
		description: "Live-region announcement when multiple files are successfully selected."
	},
	"@astryx.fileInput.placeholder": {
		defaultMessage: "Choose file",
		description: "Default placeholder text shown when no file is selected in a single-file FileInput."
	},
	"@astryx.fileInput.placeholderMultiple": {
		defaultMessage: "Choose files",
		description: "Default placeholder text shown when no files are selected in a multi-file FileInput."
	},
	"@astryx.fileInput.required": {
		defaultMessage: "Required",
		description: "Screen-reader-only description on the FileInput trigger indicating the field must be filled in. Mirrors the visible `Required` indicator next to the field label; conveyed via description because aria-required is not supported on role=\"button\"."
	},
	"@astryx.fileInput.triggerWithFiles": {
		defaultMessage: "{label}, {fileNames}",
		description: "Accessible name for a FileInput trigger that has files attached, composing the field label with the selected filenames. Example: `Attachments, report.pdf, notes.txt`."
	},
	"@astryx.keyboardHint.toNavigate": {
		defaultMessage: "to navigate",
		description: "Trailing text in the keyboard-hint badge, shown after arrow-key icons — reads as `← → to navigate`. Lowercase sentence fragment completing the visual phrase; the badge is aria-hidden, so this is for sighted users only."
	},
	"@astryx.lightbox.mediaViewer": {
		defaultMessage: "Media viewer",
		description: "Screen-reader-only fallback name for the Lightbox dialog when the current media item has no alt text. Should rarely render — consumers should provide alt."
	},
	"@astryx.lightbox.zoom": {
		defaultMessage: "Zoom",
		description: "Screen-reader-only label on the Lightbox image acting as a zoom toggle button (aria-pressed reflects zoomed state). Verb (\"to zoom\"), very short."
	},
	"@astryx.lightbox.zoomedIn": {
		defaultMessage: "Zoomed in, use arrow keys to pan",
		description: "Polite screen-reader announcement after zooming into a Lightbox image, including a hint that arrow keys pan while zoomed. Pairs with `lightbox.zoomedOut`."
	},
	"@astryx.lightbox.zoomedOut": {
		defaultMessage: "Zoomed out",
		description: "Polite screen-reader announcement after zooming back out of a Lightbox image. Pairs with `lightbox.zoomedIn`."
	},
	"@astryx.metadataList.showMore": {
		defaultMessage: "Show more",
		description: "Button label under a MetadataList that reveals items hidden beyond the configured maximum. Toggles with `metadataList.showLess` — keep the pair parallel in your language."
	},
	"@astryx.metadataList.showLess": {
		defaultMessage: "Show less",
		description: "Button label under a MetadataList that re-hides the extra items revealed by `metadataList.showMore`. Keep the pair parallel."
	},
	"@astryx.mobileNav.navigation": {
		defaultMessage: "Navigation",
		description: "Screen-reader-only fallback name for the MobileNav overlay dialog when no explicit label was passed."
	},
	"@astryx.multiSelector.clearAll": {
		defaultMessage: "Clear all {label}",
		description: "Screen-reader-only label on the X that clears every selected value from a MultiSelector. Example: `Clear all Countries`. `{label}` is typically already plural in English."
	},
	"@astryx.input.readOnly": {
		defaultMessage: "Read only",
		description: "Screen-reader-only description appended to a read-only form control when the platform does not expose aria-readonly for that control's host element. Short state label, not an instruction."
	},
	"@astryx.input.statusButton.error": {
		defaultMessage: "Error details",
		description: "Accessible name for the focusable status icon button inside an input when statusVariant is 'tooltip' and the status type is error. Activating or focusing the button reveals the error message in a tooltip. Keep it short — it labels an icon-only button."
	},
	"@astryx.input.statusButton.warning": {
		defaultMessage: "Warning details",
		description: "Accessible name for the focusable status icon button inside an input when statusVariant is 'tooltip' and the status type is warning. Activating or focusing the button reveals the warning message in a tooltip."
	},
	"@astryx.input.statusButton.success": {
		defaultMessage: "Success details",
		description: "Accessible name for the focusable status icon button inside an input when statusVariant is 'tooltip' and the status type is success. Activating or focusing the button reveals the success message in a tooltip."
	},
	"@astryx.numberInput.clearLabel": {
		defaultMessage: "Clear {label}",
		description: "Screen-reader-only label on the X that clears the value from a NumberInput. Example: `Clear Age`, `Clear Quantity`."
	},
	"@astryx.numberInput.decrementLabel": {
		defaultMessage: "Decrement {label}",
		description: "Accessible label for the NumberInput button that decreases the value by one configured step. Example: `Decrement Quantity`."
	},
	"@astryx.numberInput.incrementLabel": {
		defaultMessage: "Increment {label}",
		description: "Accessible label for the NumberInput button that increases the value by one configured step. Example: `Increment Quantity`."
	},
	"@astryx.selector.clearLabel": {
		defaultMessage: "Clear {label}",
		description: "Screen-reader-only label on the X that clears the selected value from a Selector. `{label}` is the selector's visible label — example: `Clear Country`."
	},
	"@astryx.sideNavCollapseButton.expandSidebar": {
		defaultMessage: "Expand sidebar",
		description: "Aria label AND tooltip on the SideNav collapse/expand toggle when the sidebar is currently collapsed (clicking expands it). Pairs with `collapseSidebar`."
	},
	"@astryx.sideNavCollapseButton.collapseSidebar": {
		defaultMessage: "Collapse sidebar",
		description: "Aria label AND tooltip on the same toggle when the sidebar is currently expanded (clicking collapses it). Pairs with `expandSidebar`."
	},
	"@astryx.sideNavItem.expand": {
		defaultMessage: "Expand {label}",
		description: "Screen-reader-only label on the chevron next to a SideNav item with children when the group is collapsed. Example: `Expand Settings`. Pairs with `sideNavItem.collapse`."
	},
	"@astryx.sideNavItem.collapse": {
		defaultMessage: "Collapse {label}",
		description: "Screen-reader-only label on the same chevron when the group is expanded. Example: `Collapse Settings`. Pairs with `sideNavItem.expand`."
	},
	"@astryx.sideNavItem.submenuLabel": {
		defaultMessage: "{label} submenu",
		description: "Accessible name for the flyout dialog that opens from a collapsed (icon-only) SideNav item to show its sub-items. {label} is the parent item's label. Example: `Settings submenu`."
	},
	"@astryx.tableFiltering.filterByColumn": {
		defaultMessage: "Filter {header}",
		description: "Triple-use string on per-column filter controls: visible label, placeholder, AND aria label. `{header}` is the column header — example: `Filter Name`. Keep short."
	},
	"@astryx.tableGroupedRows.expandGroup": {
		defaultMessage: "Expand group {groupKey}",
		description: "Screen-reader-only label on the chevron next to a grouped table's group header when collapsed. Example: `Expand group Q1 2024`. Pairs with `collapseGroup`."
	},
	"@astryx.tableGroupedRows.collapseGroup": {
		defaultMessage: "Collapse group {groupKey}",
		description: "Screen-reader-only label on the same chevron when the group is expanded. Example: `Collapse group Q1 2024`. Pairs with `expandGroup`."
	},
	"@astryx.tableRowExpansion.collapseRow": {
		defaultMessage: "Collapse row",
		description: "Screen-reader-only label on the row-expand chevron when the row is currently expanded. Part of the four-way expand/collapse set."
	},
	"@astryx.tableRowExpansion.expandRow": {
		defaultMessage: "Expand row",
		description: "Screen-reader-only label on the row-expand chevron when the row is currently collapsed. Part of a four-way set with `collapseRow`, `expandAllRows`, `collapseAllRows`."
	},
	"@astryx.tableRowExpansion.columnHeader": {
		defaultMessage: "Row expansion",
		description: "Screen-reader-only header for the leading column that holds the per-row expand/collapse chevrons. The column shows no visible label."
	},
	"@astryx.tableRowExpansion.collapseAllRows": {
		defaultMessage: "Collapse all rows",
		description: "Screen-reader-only label on the same header button when every row is expanded. Part of the four-way set."
	},
	"@astryx.tableRowExpansion.expandAllRows": {
		defaultMessage: "Expand all rows",
		description: "Screen-reader-only label on the header expand-all/collapse-all button when at least one row is collapsed (clicking expands every expandable row). Part of the four-way set."
	},
	"@astryx.stepper.label": {
		defaultMessage: "Progress",
		description: "Screen-reader-only fallback name for the Stepper's ordered list of steps, describing the sequence as a whole (e.g. `Progress`). Used as the aria-label when the consumer does not pass a `label`. Singular per ARIA convention."
	},
	"@astryx.stepper.previousStep": {
		defaultMessage: "Previous step",
		description: "Accessible name and tooltip for the button that moves a Stepper back one step. Only rendered when the stepper is narrow enough that step labels have collapsed, and only when the stepper is navigable at all."
	},
	"@astryx.stepper.nextStep": {
		defaultMessage: "Next step",
		description: "Accessible name and tooltip for the button that moves a Stepper forward one step. Counterpart to `stepper.previousStep`; keep the two parallel."
	},
	"@astryx.step.goToStep": {
		defaultMessage: "Go to step {stepNumber, number}: {label}",
		description: "Accessible name for a clickable step in the Stepper. {stepNumber} is the 1-based position, {label} is the step's visible label."
	},
	"@astryx.step.goToStepWithStatus": {
		defaultMessage: "Go to step {stepNumber, number}: {label}, {status}",
		description: "Accessible name for a clickable Stepper step that also carries a status. {status} is one of the translated `step.status.*` words (completed/warning/error). Keep the pattern parallel to `step.goToStep`."
	},
	"@astryx.step.optional": {
		defaultMessage: "Optional",
		description: "Visible indicator appended after a Stepper step's label when the step is optional (isOptional). Very short; appears inline after the label text."
	},
	"@astryx.step.status.completed": {
		defaultMessage: "completed",
		description: "Screen-reader-only status word rendered next to a Stepper step label when the step is done (either progress-completed or status=success). Lowercase adjective; it is read mid-sentence after the step label."
	},
	"@astryx.step.status.warning": {
		defaultMessage: "warning",
		description: "Screen-reader-only status word rendered next to a Stepper step label when status=warning. Lowercase noun/adjective; read mid-sentence after the step label."
	},
	"@astryx.step.status.error": {
		defaultMessage: "error",
		description: "Screen-reader-only status word rendered next to a Stepper step label when status=error. Lowercase noun; read mid-sentence after the step label."
	},
	"@astryx.tableTree.collapseRow": {
		defaultMessage: "Collapse row",
		description: "Aria label for the Table tree-data expander chevron when the row is currently expanded."
	},
	"@astryx.tableTree.expandRow": {
		defaultMessage: "Expand row",
		description: "Aria label for the Table tree-data expander chevron when the row is currently collapsed."
	},
	"@astryx.tableTree.collapseAllRows": {
		defaultMessage: "Collapse all rows",
		description: "Aria label for the Table tree-data header toggle when all rows are expanded and clicking it collapses them."
	},
	"@astryx.tableTree.expandAllRows": {
		defaultMessage: "Expand all rows",
		description: "Aria label for the Table tree-data header toggle when rows are collapsed and clicking it expands them."
	},
	"@astryx.textArea.charactersRemaining": {
		defaultMessage: "{count, number} {count, plural, one {character} other {characters}} remaining",
		description: "Screen-reader-only announcement of how many characters the user can still type before hitting a TextArea's maxLength. Announced politely as the count nears the limit. `{count}` is the number remaining — example: `12 characters remaining`."
	},
	"@astryx.textArea.charactersOverLimit": {
		defaultMessage: "{count, number} {count, plural, one {character} other {characters}} over the limit",
		description: "Screen-reader-only assertive announcement when the user has typed past a TextArea's maxLength. `{count}` is how many characters over — example: `3 characters over the limit`."
	},
	"@astryx.textInput.clearLabel": {
		defaultMessage: "Clear {label}",
		description: "Screen-reader-only label on the X that clears the value from a TextInput. Example: `Clear Email`, `Clear Name`."
	},
	"@astryx.thumbnail.remove": {
		defaultMessage: "Remove {accessibleName}",
		description: "Screen-reader-only label on the \"×\" on a Thumbnail (image preview chip). `{accessibleName}` is the thumbnail's name — example: `Remove profile.jpg`."
	},
	"@astryx.thumbnail.open": {
		defaultMessage: "Open {accessibleName}",
		description: "\"Open\" = launch/reveal (not \"unfold\" or the adjective). Screen-reader-only name on a clickable Thumbnail — example: `Open Sunset photo`."
	},
	"@astryx.thumbnail.fallbackName": {
		defaultMessage: "Thumbnail",
		description: "Generic screen-reader name for a Thumbnail (image preview) that has no `alt` or `label`. Last-resort fallback so the control is never nameless; prefer a real name via `alt` or `label`."
	},
	"@astryx.timeInput.clearLabel": {
		defaultMessage: "Clear {label}",
		description: "Screen-reader-only label on the X that clears the value from a TimeInput. Example: `Clear Start time`."
	},
	"@astryx.timestamp.copyValue": {
		defaultMessage: "Copy {value}",
		description: "Aria label on a Timestamp copyable-hover-card row's copy button, in its default state. `value` is the formatted instant that row shows (e.g. `Copy February 19, 2026 at 5:00:00 PM UTC`). Imperative verb. Pairs with `timestamp.copied` (post-click state)."
	},
	"@astryx.timestamp.copy": {
		defaultMessage: "Copy",
		description: "Short label shown in the tooltip on a Timestamp copyable-hover-card row's copy button (hover/focus), in its default state. Imperative verb. Pairs with `timestamp.copied` (post-click state). The full `copyValue` string remains the button's aria-label for assistive tech."
	},
	"@astryx.timestamp.copied": {
		defaultMessage: "Copied",
		description: "Aria label on a Timestamp copy button for ~1.5s after a successful copy, and the text announced to a polite live region. Past-participle (\"has been copied\"); pairs with `timestamp.copyValue`."
	},
	"@astryx.timestamp.detailsLabel": {
		defaultMessage: "Timestamp details",
		description: "Accessible name for the Timestamp copyable hover card popup, which lists the instant in the configured time zones/formats with a copy button per row."
	},
	"@astryx.token.remove": {
		defaultMessage: "Remove {label}",
		description: "Screen-reader-only label on the \"×\" on an individual Token/chip. Example: `Remove John Smith`, `Remove Active`. Imperative verb."
	},
	"@astryx.commandPalette.footer.navigate": {
		defaultMessage: "Navigate",
		description: "Keyboard hint in the CommandPalette footer, paired with up/down arrow key icons. Tells users arrow keys move between items."
	},
	"@astryx.commandPalette.footer.select": {
		defaultMessage: "Select",
		description: "Keyboard hint in the CommandPalette footer, paired with the Enter key icon. Tells users Enter activates the highlighted item."
	},
	"@astryx.commandPalette.footer.close": {
		defaultMessage: "Close",
		description: "Keyboard hint in the CommandPalette footer, paired with the Escape key icon. Tells users Escape dismisses the palette."
	},
	"@astryx.multiSelector.selectionCleared": {
		defaultMessage: "Selection cleared",
		description: "Polite screen-reader announcement after the last selected option in a MultiSelector is deselected. Live-region text, never shown on screen; past participle (\"has been cleared\")."
	},
	"@astryx.multiSelector.allSelected": {
		defaultMessage: "All selected",
		description: "Polite screen-reader announcement after every option in a MultiSelector becomes selected. Live-region text, never shown on screen; \"all\" is a determiner (as in \"all the options\")."
	},
	"@astryx.multiSelector.selectionCount": {
		defaultMessage: "{count, number} of {total, number} selected",
		description: "Polite screen-reader announcement of how many MultiSelector options are selected out of the total, spoken after each toggle. Live-region text, never shown on screen; example: `3 of 12 selected`."
	},
	"@astryx.multiSelector.emptySearchResults": {
		defaultMessage: "No results found",
		description: "Shown in a MultiSelector's dropdown panel when the search query matches no options, and announced in a polite live region at the same time. Short; neutral tone (not error-y)."
	},
	"@astryx.multiSelector.resultCount": {
		defaultMessage: "{count, number} {count, plural, one {result} other {results}}",
		description: "Polite screen-reader announcement of how many MultiSelector options match the search query, spoken as the user types. Live-region text, never shown on screen; example: `1 result`, `12 results`."
	},
	"@astryx.selector.emptySearchResults": {
		defaultMessage: "No results found",
		description: "Shown in a Selector's dropdown panel when the search query matches no options, and announced in a polite live region at the same time. Short; neutral tone (not error-y)."
	},
	"@astryx.selector.resultCount": {
		defaultMessage: "{count, number} {count, plural, one {result} other {results}}",
		description: "Polite screen-reader announcement of how many Selector options match the search query, spoken as the user types. Live-region text, never shown on screen; example: `1 result`, `12 results`."
	},
	"@astryx.typeahead.resultCount": {
		defaultMessage: "{count, number} {count, plural, one {result} other {results}}",
		description: "Polite screen-reader announcement of how many suggestions a Typeahead search returned. Live-region text, never shown on screen; example: `1 result`, `12 results`."
	},
	"@astryx.tokenizer.tokenAdded": {
		defaultMessage: "Added {label}",
		description: "Polite screen-reader announcement after a token is added to a Tokenizer, either picked from the suggestions or newly created. Live-region text, never shown on screen; `{label}` is the token's visible text."
	},
	"@astryx.tokenizer.tokenRemoved": {
		defaultMessage: "Removed {label}",
		description: "Polite screen-reader announcement after a token is removed from a Tokenizer, by its × button or by Backspace. Live-region text, never shown on screen; `{label}` is the token's visible text."
	},
	"@astryx.lightbox.imagePosition": {
		defaultMessage: "Image {index, number} of {total, number}",
		description: "Polite screen-reader announcement when a Lightbox moves to a media item that has no alt text. Live-region text, never shown on screen; `{index}` is 1-based, example: `Image 3 of 12`."
	},
	"@astryx.lightbox.mediaPosition": {
		defaultMessage: "{alt}, {index, number} of {total, number}",
		description: "Polite screen-reader announcement when a Lightbox moves to a media item that has alt text, composing that alt with the item's position. Live-region text, never shown on screen; example: `Sunset over the bay, 3 of 12`."
	},
	"@astryx.transferList.selectedLabel": {
		defaultMessage: "Selected",
		description: "Default heading above the right-hand panel of a lab TransferList, which holds the options the user has chosen. Consumers usually override this with a domain noun (e.g. \"Shown columns\")."
	},
	"@astryx.transferList.availableLabel": {
		defaultMessage: "Available",
		description: "Default heading above the left-hand panel of a lab TransferList, which holds the options not yet chosen. Consumers usually override this with a domain noun (e.g. \"Hidden columns\")."
	},
	"@astryx.transferList.ungroupedLabel": {
		defaultMessage: "Other",
		description: "Heading for the bucket of available options that have no `group` set, shown only when some options are grouped and some are not so the ungrouped ones still have a heading."
	},
	"@astryx.transferList.searchPlaceholder": {
		defaultMessage: "Search…",
		description: "Placeholder in the single search field that filters both panels of a lab TransferList. Same English as `selector.searchPlaceholder` but a separate key so it can be phrased for two lists."
	},
	"@astryx.transferList.searchLabel": {
		defaultMessage: "Search {label}",
		description: "Screen-reader-only label on the search field of a lab TransferList, naming what is being searched. `{label}` is the component's own label (e.g. \"Search Table columns\")."
	},
	"@astryx.transferList.selectedEmpty": {
		defaultMessage: "No selected options",
		description: "Message shown inside the selected panel of a lab TransferList when the user has chosen nothing yet."
	},
	"@astryx.transferList.availableEmpty": {
		defaultMessage: "No available options",
		description: "Message shown inside the available panel of a lab TransferList when every option has already been moved to the selected panel."
	},
	"@astryx.transferList.noResults": {
		defaultMessage: "No results",
		description: "Message shown inside either panel of a lab TransferList when the search query matches nothing in that panel."
	},
	"@astryx.transferList.clear": {
		defaultMessage: "Clear",
		description: "Label on the bulk action in a lab TransferList's selected-panel header that removes every option that is allowed to be removed. Locked options stay."
	},
	"@astryx.transferList.addAll": {
		defaultMessage: "Add all",
		description: "Label on the bulk action in a lab TransferList's available-panel header that moves every remaining option into the selected panel."
	},
	"@astryx.transferList.addOption": {
		defaultMessage: "Add {label}",
		description: "Accessible label on the per-row + button that moves one option into the selected panel of a lab TransferList. `{label}` is that option's visible text (e.g. \"Add Owner\")."
	},
	"@astryx.transferList.removeOption": {
		defaultMessage: "Remove {label}",
		description: "Accessible label on the per-row × button that moves one option out of the selected panel of a lab TransferList. `{label}` is that option's visible text (e.g. \"Remove Name\")."
	},
	"@astryx.transferList.reorderOption": {
		defaultMessage: "Reorder {label}",
		description: "Accessible label on the per-row drag handle that reorders one option within the selected panel of a lab TransferList. `{label}` is that option's visible text (e.g. \"Reorder Name\")."
	},
	"@astryx.transferList.transferDisabled": {
		defaultMessage: "{label} cannot be moved",
		description: "Default tooltip explaining why a locked option in a lab TransferList cannot be transferred between panels. `{label}` is the option's visible text. Consumers may override per option."
	},
	"@astryx.transferList.reorderDisabled": {
		defaultMessage: "{label} cannot be reordered",
		description: "Default tooltip explaining why a locked option in a lab TransferList cannot be moved within the selected panel. `{label}` is the option's visible text. Consumers may override per option."
	},
	"@astryx.transferList.reorderInstructions": {
		defaultMessage: "Press Space or Enter to pick up an item. Use Arrow Up, Arrow Down, Home, or End to move it. Press Space or Enter to drop, or Escape to cancel.",
		description: "Screen-reader-only instructions describing the keyboard reorder contract, referenced by every drag handle in a lab TransferList. Never shown on screen. Name the actual keys your locale's users press."
	},
	"@astryx.transferList.announceAdded": {
		defaultMessage: "{label} added. {count, number} {count, plural, one {item} other {items}} selected.",
		description: "Polite screen-reader announcement after one option moves into the selected panel of a lab TransferList. Live-region text, never shown on screen; `{label}` is the option's visible text and `{count}` is the new selected total."
	},
	"@astryx.transferList.announceRemoved": {
		defaultMessage: "{label} removed. {count, number} {count, plural, one {item} other {items}} selected.",
		description: "Polite screen-reader announcement after one option moves out of the selected panel of a lab TransferList. Live-region text, never shown on screen; `{label}` is the option's visible text and `{count}` is the new selected total."
	},
	"@astryx.transferList.announceBulkAdded": {
		defaultMessage: "{count, number} {count, plural, one {item} other {items}} added.",
		description: "Polite screen-reader announcement after the Add all bulk action in a lab TransferList. Live-region text, never shown on screen; `{count}` is how many options moved."
	},
	"@astryx.transferList.announceBulkRemoved": {
		defaultMessage: "{count, number} {count, plural, one {item} other {items}} removed.",
		description: "Polite screen-reader announcement after the Clear bulk action in a lab TransferList. Live-region text, never shown on screen; `{count}` is how many options moved."
	},
	"@astryx.transferList.announceGrabbed": {
		defaultMessage: "{label} picked up, position {position, number} of {total, number}. Use arrow keys to move, Space or Enter to drop, or Escape to cancel.",
		description: "Polite screen-reader announcement when a lab TransferList row enters keyboard reorder mode. Live-region text, never shown on screen; `{position}` is 1-based within the selected panel."
	},
	"@astryx.transferList.announceMoveCancelled": {
		defaultMessage: "{label} move cancelled.",
		description: "Polite screen-reader announcement when a lab TransferList reorder is abandoned with Escape or a cancelled pointer drag, restoring the original order. Live-region text, never shown on screen."
	},
	"@astryx.transferList.announceDropped": {
		defaultMessage: "{label} dropped at position {position, number} of {total, number}.",
		description: "Polite screen-reader announcement when a lab TransferList reorder commits at a new position. Live-region text, never shown on screen; `{position}` is 1-based within the selected panel."
	},
	"@astryx.transferList.announceReturned": {
		defaultMessage: "{label} returned to position {position, number}.",
		description: "Polite screen-reader announcement when a lab TransferList pointer drag ends where it began, so the order did not change. Live-region text, never shown on screen; `{position}` is 1-based."
	},
	"@astryx.transferList.announceMovedToPosition": {
		defaultMessage: "{label}, position {position, number} of {total, number}.",
		description: "Polite screen-reader announcement after each arrow-key step of an in-progress lab TransferList reorder. Live-region text, never shown on screen; `{position}` is 1-based within the selected panel."
	},
	"@astryx.transferList.announceSearchResults": {
		defaultMessage: "{count, number} {count, plural, one {item} other {items}} found.",
		description: "Polite screen-reader announcement of how many options a lab TransferList search matched across both panels. Live-region text, never shown on screen."
	},
	"@astryx.transferListSelector.apply": {
		defaultMessage: "Apply",
		description: "Label on the button that commits the staged draft of a lab TransferListSelector and closes it. Only rendered in staged commit mode."
	},
	"@astryx.transferListSelector.cancel": {
		defaultMessage: "Cancel",
		description: "Label on the button that discards the staged draft of a lab TransferListSelector and closes it. Only rendered in staged commit mode."
	},
	"@astryx.transferListSelector.triggerLabel": {
		defaultMessage: "{count, number} selected",
		description: "Default summary on the closed trigger of a lab TransferListSelector, stating how many options are currently chosen. Consumers usually override this with a domain phrase (e.g. \"7 columns\")."
	}
}, ks = /* @__PURE__ */ new Map();
function As(e, t) {
	let n = `${t}::${e}`, r = ks.get(n);
	return r === void 0 && (r = new Ds(e, t), ks.set(n, r)), r;
}
function js(e) {
	let t;
	try {
		t = new Intl.Locale(e).baseName;
	} catch {
		t = e;
	}
	let n = t.split("-"), r = [];
	for (let e = n.length; e > 0; e--) r.push(n.slice(0, e).join("-"));
	return r;
}
function Ms(e, t, n) {
	let r = {}, i = js(e);
	if (n !== void 0) {
		for (let e of i) if (n[e]) for (let [t, i] of Object.entries(n[e])) r[t] === void 0 && i !== null && (r[t] = i);
	}
	for (let e of i) if (t[e]) for (let [n, i] of Object.entries(t[e])) r[n] === void 0 && i?.defaultMessage !== null && (r[n] = i?.defaultMessage);
	return r;
}
function Ns(e, t, n) {
	let r = Ms(e, t, n);
	return (t, n) => {
		let i = r[t] ?? Os[t]?.defaultMessage;
		return i === void 0 ? (`${e}${t}`, `${t}${e}`, t) : n === void 0 ? i : As(i, e).format(n);
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/i18n/InternationalizationContext.js
var Ps = /*#__PURE__*/ (0, v.createContext)({
	locale: "en",
	direction: "ltr",
	messages: {},
	translate: Ns("en", {})
});
Ps.displayName = "InternationalizationContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/i18n/useTranslator.js
function Fs() {
	return (0, v.use)(Ps).translate;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Spinner/Spinner.js
var Is = .375, Ls = {
	sm: {
		diameter: 10,
		border: 2
	},
	md: {
		diameter: 14,
		border: 3
	},
	lg: {
		diameter: 18,
		border: 3
	},
	xl: {
		diameter: 28,
		border: 4
	}
}, Rs = ["--_spinner-ring-diameter", "--_spinner-ring-stroke"], zs = "--_spinner-box-size";
function Bs() {
	if (typeof CSS < "u" && typeof CSS.registerProperty == "function") for (let e of Rs) try {
		CSS.registerProperty({
			name: e,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		});
	} catch {}
}
Bs();
var Vs = /* @__PURE__ */ new Set(), Hs = !1;
function Us() {
	Hs = !1;
	let e = [];
	for (let t of Vs) e.push(...t.getAnimations({ subtree: !0 }));
	Vs.clear();
	for (let t of e) t.startTime = 0;
}
function Ws(e) {
	if (e != null && typeof e.getAnimations == "function") return Vs.add(e), Hs || (Hs = !0, requestAnimationFrame(Us)), () => {
		Vs.delete(e);
	};
}
var Gs = {
	wrapper: {
		k1xSpc: "x3nfvp2",
		kXwgrk: "xdt5ytf",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		$$css: !0
	},
	spinner: {
		k1xSpc: "xwz0xwf",
		kgQiWS: "x1ku5rj1",
		kXLuUW: "xxymvpz",
		"--_spinner-ring-diameter": "x2lq4xu",
		"--_spinner-ring-stroke": "x10qssua",
		"--_spinner-box-size": "x69vvuq",
		kmuXW: "x2lah0s",
		$$css: !0
	},
	circle: {
		kDwRjp: "xbh8q5q",
		kR8GR0: "x1764fhq",
		k3nNDw: "x1g0ag68",
		kU5bRw: "x1owpc8m",
		kPFa82: "xio8zfp",
		kfJifR: "xgw3ha0",
		$$css: !0
	},
	track: {
		kjVXCG: "xalkhop",
		$$css: !0
	}
}, Ks = {
	sm: {
		"--spinner-diameter": "x11wm0hx",
		"--spinner-stroke-width": "xls98ul",
		"--spinner-arc-fraction": "x7o5821",
		$$css: !0
	},
	md: {
		"--spinner-diameter": "x15pu9g6",
		"--spinner-stroke-width": "xr0wkrm",
		"--spinner-arc-fraction": "x7o5821",
		$$css: !0
	},
	lg: {
		"--spinner-diameter": "x1w424tr",
		"--spinner-stroke-width": "xr0wkrm",
		"--spinner-arc-fraction": "x7o5821",
		$$css: !0
	},
	xl: {
		"--spinner-diameter": "x1orj1z9",
		"--spinner-stroke-width": "x7y2bof",
		"--spinner-arc-fraction": "x7o5821",
		$$css: !0
	}
}, qs = {
	default: {
		"--spinner-color": "xt1b8mc",
		"--spinner-track-color": "xspt9s2",
		$$css: !0
	},
	subtle: {
		"--spinner-color": "x1jevo6s",
		"--spinner-track-color": "xspt9s2",
		$$css: !0
	},
	onMedia: {
		"--spinner-color": "x13u6jys",
		"--spinner-track-color": "x1ufpcf6",
		$$css: !0
	},
	inherit: {
		"--spinner-color": "x1uzk0gl",
		"--spinner-track-color": "xbfzqbu",
		$$css: !0
	}
}, Js = {
	default: {
		kDd8S0: "x1g350g8",
		$$css: !0
	},
	subtle: {
		kDd8S0: "x1g350g8",
		$$css: !0
	},
	onMedia: {
		kDd8S0: "x1smxkh6",
		$$css: !0
	},
	inherit: {
		kDd8S0: "x7bo2k",
		$$css: !0
	}
};
function Ys({ size: e = "md", shade: t = "default", label: n, xstyle: r, className: i, style: a, "aria-label": o, "data-testid": s, ref: c, ...l }) {
	let { border: u, diameter: d } = Ls[e], f = d + u * 2, p = Math.PI * d, m = p * Is, h = n != null, g = (0, v.useId)(), _ = Fs(), y = h && typeof n == "string" && o == null, b = o ?? (typeof n == "string" ? n : void 0) ?? _("@astryx.spinner.loading"), x = /*#__PURE__*/ (0, W.jsx)("span", {
		ref: h ? void 0 : c,
		role: "status",
		"aria-label": y ? void 0 : b,
		"aria-labelledby": y ? g : void 0,
		"data-testid": h ? void 0 : s,
		...h ? {} : l,
		...K(h ? "" : U("spinner", {
			size: e,
			shade: t
		}), w(Gs.spinner, !h && Ks[e], !h && qs[t], !h && r), h ? void 0 : i, {
			...h ? {} : a,
			width: `var(${zs}, ${f}px)`,
			height: `var(${zs}, ${f}px)`
		}),
		children: /*#__PURE__*/ (0, W.jsxs)("svg", {
			ref: Ws,
			width: f,
			height: f,
			"aria-hidden": "true",
			className: "xlp1x4z x1lliihq x6v0vjy x7yyq19 x1rea2x4",
			children: [/*#__PURE__*/ (0, W.jsx)("circle", {
				cx: "50%",
				cy: "50%",
				r: d / 2,
				strokeWidth: u,
				...w(Gs.circle, Gs.track, Js[t])
			}), /*#__PURE__*/ (0, W.jsx)("circle", {
				cx: "50%",
				cy: "50%",
				r: d / 2,
				strokeWidth: u,
				strokeDasharray: `${m} ${p - m}`,
				className: "xbh8q5q x1764fhq x1g0ag68 x1owpc8m xio8zfp xgw3ha0 x14qxm4i xnh0sag xa4qsjk x1nlxm0d x1esw782 xtve3lm x9tu13d xdv9ggb"
			})]
		})
	});
	return h ? /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: c,
		"data-testid": s,
		...l,
		...K(U("spinner", {
			size: e,
			shade: t
		}), w(Gs.wrapper, Ks[e], qs[t], r), i, a),
		children: [x, typeof n == "string" ? /*#__PURE__*/ (0, W.jsx)(lo, {
			id: g,
			type: "body",
			weight: "bold",
			children: n
		}) : n]
	}) : x;
}
Ys.displayName = "Spinner";
//#endregion
//#region node_modules/@astryxdesign/core/dist/VisuallyHidden/VisuallyHidden.js
function Xs({ children: e, as: t = "span", ref: n, ...r }) {
	return /*#__PURE__*/ (0, v.createElement)(t, {
		ref: n,
		...r,
		className: "x10l6tqk x1i1rx1s xjm9jq1 xkdpibf x1717udv xb3r6kr xzpqnlu xuxw1ft xng3xce x13vifvy x1o0tod x47corl x87ps6o"
	}, e);
}
Xs.displayName = "VisuallyHidden";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Icon/IconDefaultSizeContext.js
var Zs = ei(null);
Zs.displayName = "IconDefaultSizeContext";
var Qs = Zs.Provider;
function $s(e) {
	let t = (0, v.use)(Zs);
	return e ?? t ?? "md";
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Icon/IconSize.stylex.js
var ec = {
	xsm: {
		kzqmXN: "x1jw3ynk",
		kZKoxP: "xvle69y",
		$$css: !0
	},
	sm: {
		kzqmXN: "xcdlrvm",
		kZKoxP: "x1l36t39",
		$$css: !0
	},
	md: {
		kzqmXN: "xwqq7k2",
		kZKoxP: "xmll18r",
		$$css: !0
	},
	lg: {
		kzqmXN: "xp8d6y2",
		kZKoxP: "xam5rvr",
		$$css: !0
	}
}, tc = {
	xsm: {
		kzqmXN: "x1jw3ynk",
		kZKoxP: "xvle69y",
		kGuDYH: "xboafo0",
		$$css: !0
	},
	sm: {
		kzqmXN: "xcdlrvm",
		kZKoxP: "x1l36t39",
		kGuDYH: "x1jchvi3",
		$$css: !0
	},
	md: {
		kzqmXN: "xwqq7k2",
		kZKoxP: "xmll18r",
		kGuDYH: "x1603h9y",
		$$css: !0
	},
	lg: {
		kzqmXN: "xp8d6y2",
		kZKoxP: "xam5rvr",
		kGuDYH: "xngnso2",
		$$css: !0
	}
}, nc = "data-astryx-edge-comp", rc = ei(null);
rc.displayName = "SizeContext";
function ic(e, t = "md") {
	let n = (0, v.use)(rc);
	return e ?? n ?? t;
}
rc.Provider;
//#endregion
//#region node_modules/@astryxdesign/core/dist/ButtonGroup/ButtonGroupContext.js
var ac = ei(null);
ac.displayName = "ButtonGroupContext";
function oc() {
	return (0, v.use)(ac);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Link/LinkContext.js
var sc = /*#__PURE__*/ (0, v.createContext)(null);
sc.displayName = "LinkContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/safeUrl.js
function cc(e) {
	return e.replace(/[\x00-\x1f\x7f]/g, "").trim();
}
function lc(e) {
	let t = cc(e), n = t.toLowerCase();
	return n.startsWith("javascript:") || n.startsWith("vbscript:") || n.startsWith("data:text/html") ? null : t;
}
function uc(e) {
	return lc(e) !== null;
}
function dc(e) {
	if (e == null) return !0;
	if (typeof e == "string") return uc(e);
	if (typeof e != "object") return !1;
	let { pathname: t, href: n, protocol: r, host: i, hostname: a } = e;
	for (let e of [
		t,
		n,
		r,
		i,
		a
	]) if (e != null && typeof e != "string") return !1;
	if (typeof t == "string" && !uc(t) || typeof n == "string" && !uc(n)) return !1;
	if (typeof r == "string" && r !== "") {
		let e = cc(r), n = e.endsWith(":") ? e : `${e}:`;
		if (!uc(n) || !uc(`${n}${i || a || ""}${typeof t == "string" ? t : ""}`)) return !1;
	}
	return !0;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Link/useLinkComponent.js
function fc(e) {
	function t({ href: t, to: n, ref: r, ...i }) {
		return !dc(t) || !dc(n) ? /*#__PURE__*/ (0, v.createElement)("a", {
			ref: r,
			...i
		}) : e === "a" ? /*#__PURE__*/ (0, v.createElement)("a", {
			ref: r,
			...i,
			href: t
		}) : /*#__PURE__*/ (0, v.createElement)(e, {
			ref: r,
			...i,
			href: t,
			to: n ?? t
		});
	}
	return t.displayName = `SafeLink(${typeof e == "string" ? e : e.displayName || e.name || "Component"})`, t;
}
function pc(e) {
	let t = (0, v.use)(sc), n = e ?? t?.component ?? "a";
	return (0, v.useMemo)(() => fc(n), [n]);
}
`${E["--color-overlay-hover"]}${E["--color-overlay-hover"]}`, `${E["--color-overlay-pressed"]}${E["--color-overlay-pressed"]}`, `${E["--color-neutral"]}${E["--color-neutral"]}`;
var mc = {
	backgroundColor: {
		kWkggS: "xjbqb8w x1anq1lc xoevpu5 xprvw0a",
		$$css: !0
	},
	backgroundImage: {
		kKwaWg: "x7uyq82 xmvprkv xetgvay",
		$$css: !0
	},
	backgroundImageOnNeutral: {
		kKwaWg: "x14bno8m xzmimnh x1otsd3y xo3fi6e",
		$$css: !0
	},
	pressedBackgroundColor: {
		kWkggS: "x1anq1lc",
		$$css: !0
	}
}, hc = {
	base: {
		"--button-focus-offset": "x16bblx1",
		kInvED: "x1wfwxd8 x13aywxo",
		kVAEAm: "x1n2onr6",
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kOIVth: "x1txdalj",
		k8WAf4: "xce4md1",
		kg3NbH: "xrrkdod",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kaIpWk: "x1jxw6zd",
		kMv6JI: "xjb2p0i",
		kGuDYH: "xcr08ib",
		kLWn49: "x1kq96og",
		k63SB2: "x1e4wzip",
		khDVqt: "xuxw1ft",
		kkrTdU: "x1ypdohk x16khyan",
		k1ekBW: "xrafxwg",
		kIyJzY: "xuedmi6 x12w9bfk",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	pressable: {
		k3aq6I: "x3oybdh x8ppqj",
		$$css: !0
	},
	inactive: {
		kkrTdU: "xt0e3qv",
		kKwaWg: "x18o3ruo",
		k3aq6I: "x1c071of x1pdlv7q",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		$$css: !0
	},
	ariaDisabled: {
		kKwaWg: "x18o3ruo xuqm82a",
		$$css: !0
	},
	iconOnly: {
		"--button-icon-only-aspect": "x1v15ycx",
		kOBAk4: "xioom0i",
		kg3NbH: "xnjsko4",
		k8WAf4: "xt970qd",
		$$css: !0
	},
	iconWrapper: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		$$css: !0
	},
	contentWrapper: {
		k1xSpc: "xjp7ctv",
		$$css: !0
	},
	link: {
		kybGjl: "x1hl2dhg",
		$$css: !0
	}
}, gc = { width: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] }, _c = {
	sm: {
		kZKoxP: "x6k0iem",
		$$css: !0
	},
	md: {
		kZKoxP: "x1ueg155",
		$$css: !0
	},
	lg: {
		kZKoxP: "xssyfek",
		$$css: !0
	}
}, vc = {
	none: {
		kGVxlE: "x1gnnqk1",
		$$css: !0
	},
	low: {
		kGVxlE: "x1i5ehqx",
		$$css: !0
	},
	med: {
		kGVxlE: "x14hfi27",
		$$css: !0
	},
	high: {
		kGVxlE: "x1kcpxr7",
		$$css: !0
	}
}, yc = {
	primary: {
		kWkggS: "x1ewilqj",
		kMwMTN: "x17wrial",
		$$css: !0
	},
	secondary: {
		kWkggS: "x17x4s8c",
		kMwMTN: "x1tgivj0",
		$$css: !0
	},
	ghost: {
		kWkggS: "xjbqb8w",
		kMwMTN: "x1tgivj0",
		$$css: !0
	},
	destructive: {
		kWkggS: "x1pjz0fi",
		kMwMTN: "x1m024r3",
		kjBf7l: "x1e0x2sz",
		$$css: !0
	}
}, bc = {
	sm: "sm",
	md: "sm",
	lg: "md"
};
ee["--duration-medium-min"];
var xc = {
	hiddenContent: {
		kMwMTN: "x19co3pv",
		$$css: !0
	},
	hiddenContentDelayed: {
		kKVMdj: "x1ffowhz",
		k44tkh: "xjlvqhv",
		kWV6AL: "x10e4vud",
		kKxzle: "x17yabm6 x14q22ui",
		$$css: !0
	}
}, Sc = {
	horizontal: {
		krdFHd: "x15mokao x8eehn2",
		kVL7Gh: "xbiv7yw x1xrp5p4",
		kfmiAY: "x1ga7v0g x149bkfe",
		kT0f0o: "x16uus16 x1ursds5",
		k2ei4v: "xgbv0en x1pjv70x",
		kVhnKS: "x1t7ytsu xyf0ibl",
		kGJrpR: "x1j92z86",
		$$css: !0
	},
	vertical: {
		krdFHd: "x15mokao x8eehn2",
		kfmiAY: "x1ga7v0g x2qxyot",
		kVL7Gh: "xbiv7yw xy2bsav",
		kT0f0o: "x16uus16 x1ursds5",
		kEafiO: "x11xkdxz x1g31smg",
		kPef9Z: "x13fuv20 x1d9v4yf",
		kLZC3w: "x1pc3f07",
		$$css: !0
	},
	onSolidHorizontal: {
		kGJrpR: "xrvmtm5",
		$$css: !0
	},
	onSolidVertical: {
		kLZC3w: "x11npmm7",
		$$css: !0
	}
};
function Cc({ label: e, variant: t = "secondary", size: n, type: r = "button", isDisabled: i = !1, isLoading: a = !1, isInterruptible: o = !1, clickAction: s, icon: c, isIconOnly: l = !1, width: u, elevation: d = "none", children: f, endContent: p, tooltip: m, href: h, as: g, target: _, rel: y, xstyle: b, className: x, style: S, ref: C, ...T }) {
	let E = Fs(), D = ic(n, "md"), O = oc(), [k, A] = (0, v.useTransition)(), j = (0, v.useRef)(!1), M = a || k, N = k || o, P = O?.isDisabled ?? !1, F = i || P || M && !o, ee = i || P, I = pc(g), te = h != null && !F, L = m != null && F, ne = wa({
		placement: "above",
		isEnabled: m != null
	}), R = (e) => {
		if (F || j.current && !o) {
			e.preventDefault();
			return;
		}
		T.onClick?.(e), s && !e.defaultPrevented && (j.current = !0, A(async () => {
			try {
				await s(e);
			} finally {
				j.current = !1;
			}
		}));
	}, re = L ? (e) => {
		e.key === "Enter" || e.key === " " ? e.preventDefault() : T.onKeyDown?.(e);
	} : void 0, ie = t === "ghost" ? { [nc]: "" } : null, ae = ro.focusVisible(hc.base, _c[D], l && hc.iconOnly, mc.backgroundImage, F && hc.inactive, ee && hc.disabled, L && hc.ariaDisabled, te && hc.link, !O && hc.pressable, O && (O.orientation === "horizontal" ? Sc.horizontal : Sc.vertical), O && (t === "primary" || t === "destructive") && (O.orientation === "horizontal" ? Sc.onSolidHorizontal : Sc.onSolidVertical), !O && vc[d], u != null && gc.width(u), yc[t], b), oe = K(U("button", {
		variant: t,
		size: D,
		elevation: O ? "none" : d
	}), ae, x, S), se = bc[D], ce = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [
		M && /*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c xrvj5dj x1ku5rj1" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c xrvj5dj x1ku5rj1 xqcmdr3 xb2rp9n xskzprw x17yabm6 x14q22ui" }
			}[!!N << 0],
			"aria-hidden": "true",
			children: /*#__PURE__*/ (0, W.jsx)(Ys, {
				size: "sm",
				shade: "inherit"
			})
		}),
		/*#__PURE__*/ (0, W.jsxs)("span", {
			...w(hc.contentWrapper, M && (N ? xc.hiddenContentDelayed : xc.hiddenContent)),
			"aria-hidden": M || void 0,
			children: [
				c && /*#__PURE__*/ (0, W.jsx)("span", {
					...w(hc.iconWrapper, tc[se]),
					children: /*#__PURE__*/ (0, W.jsx)(Qs, {
						value: se,
						children: c
					})
				}),
				l ? null : /*#__PURE__*/ (0, W.jsx)("span", {
					className: "xb3r6kr xlyipyv xeuugli",
					children: f ?? e
				}),
				!l && p && /*#__PURE__*/ (0, W.jsx)("span", {
					className: "x3nfvp2 x6s0dn4 x1heor9g",
					children: p
				})
			]
		}),
		/*#__PURE__*/ (0, W.jsx)(Xs, {
			role: "status",
			"aria-live": "polite",
			children: M ? E("@astryx.button.loading") : ""
		})
	] }), le = l && e !== "" || M && !l || f != null && f !== e ? { "aria-label": e } : null, ue = m == null ? null : { "aria-describedby": [T["aria-describedby"], ne.describedBy].filter(Boolean).join(" ") || void 0 }, z = io(C, m == null ? void 0 : ne.ref), B;
	return B = te ? /*#__PURE__*/ (0, W.jsx)(I, {
		ref: z,
		href: h,
		target: _,
		rel: y,
		...oe,
		...T,
		...le,
		...ue,
		...ie,
		"aria-busy": M || void 0,
		onClick: R,
		children: ce
	}) : /*#__PURE__*/ (0, W.jsx)("button", {
		ref: z,
		type: r,
		disabled: L ? void 0 : F,
		...oe,
		...T,
		...le,
		...ue,
		...ie,
		"aria-busy": M || void 0,
		"aria-disabled": L || void 0,
		onClick: R,
		...re ? { onKeyDown: re } : null,
		children: ce
	}), m ? /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [B, ne.renderTooltip(m)] }) : B;
}
Cc.displayName = "Button";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Icon/defaultIcons.js
var wc = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	width: "1em",
	height: "1em",
	"aria-hidden": !0
}, Tc = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	width: "1em",
	height: "1em",
	"aria-hidden": !0
}, Ec = {
	close: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M6 6l12 12M6 18L18 6" })
	}),
	chevronDown: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M6 9l6 6 6-6" })
	}),
	"numberInput:stepperDown": /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M7.5 9.75l4.5 4.5 4.5-4.5" })
	}),
	chevronLeft: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M15 6l-6 6 6 6" })
	}),
	chevronRight: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M9 6l6 6-6 6" })
	}),
	chevronsLeft: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M18 6l-6 6 6 6M11 6l-6 6 6 6" })
	}),
	chevronsRight: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M6 6l6 6-6 6M13 6l6 6-6 6" })
	}),
	check: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M5 13l4 4L19 7" })
	}),
	success: /*#__PURE__*/ (0, W.jsx)("svg", {
		...Tc,
		children: /*#__PURE__*/ (0, W.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 3a9 9 0 100 18 9 9 0 000-18zm4.06 6.56a.75.75 0 00-1.12-1l-3.94 4.4-1.94-1.94a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.09-.03l4.47-5z"
		})
	}),
	error: /*#__PURE__*/ (0, W.jsx)("svg", {
		...Tc,
		children: /*#__PURE__*/ (0, W.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 3a9 9 0 100 18 9 9 0 000-18zm-2.47 5.47a.75.75 0 00-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 101.06 1.06L12 13.06l2.47 2.47a.75.75 0 101.06-1.06L13.06 12l2.47-2.47a.75.75 0 00-1.06-1.06L12 10.94l-2.47-2.47z"
		})
	}),
	warning: /*#__PURE__*/ (0, W.jsx)("svg", {
		...Tc,
		children: /*#__PURE__*/ (0, W.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.29 3.86L2.07 19.05A2 2 0 003.78 22h16.44a2 2 0 001.71-2.95L13.71 3.86a2 2 0 00-3.42 0zM12 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 9zm0 9a1 1 0 100-2 1 1 0 000 2z"
		})
	}),
	info: /*#__PURE__*/ (0, W.jsx)("svg", {
		...Tc,
		children: /*#__PURE__*/ (0, W.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a1 1 0 100 2 1 1 0 000-2zm-.75 3.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5z"
		})
	}),
	calendar: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [/*#__PURE__*/ (0, W.jsx)("rect", {
			x: "3",
			y: "4",
			width: "18",
			height: "18",
			rx: "2"
		}), /*#__PURE__*/ (0, W.jsx)("path", { d: "M16 2v4M8 2v4M3 10h18" })]
	}),
	clock: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [/*#__PURE__*/ (0, W.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /*#__PURE__*/ (0, W.jsx)("path", { d: "M12 7v5l3 3" })]
	}),
	externalLink: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M15 3h6v6" }),
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M10 14L21 3" })
		]
	}),
	menu: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		strokeWidth: 2,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" })
	}),
	moreHorizontal: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...Tc,
		children: [
			/*#__PURE__*/ (0, W.jsx)("circle", {
				cx: "5",
				cy: "12",
				r: "1.5"
			}),
			/*#__PURE__*/ (0, W.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "1.5"
			}),
			/*#__PURE__*/ (0, W.jsx)("circle", {
				cx: "19",
				cy: "12",
				r: "1.5"
			})
		]
	}),
	search: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [/*#__PURE__*/ (0, W.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "8"
		}), /*#__PURE__*/ (0, W.jsx)("path", { d: "M21 21l-4.35-4.35" })]
	}),
	arrowUp: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M12 19V5m0 0l-7 7m7-7l7 7" })
	}),
	arrowDown: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M12 5v14m0 0l7-7m-7 7l-7-7" })
	}),
	arrowsUpDown: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" })
	}),
	funnel: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" })
	}),
	eyeSlash: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" })
	}),
	viewColumns: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" })
	}),
	copy: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [/*#__PURE__*/ (0, W.jsx)("path", { d: "M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" }), /*#__PURE__*/ (0, W.jsx)("path", { d: "M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" })]
	}),
	checkDouble: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [/*#__PURE__*/ (0, W.jsx)("path", { d: "M2 13l4 4L14 7" }), /*#__PURE__*/ (0, W.jsx)("path", { d: "M9 13l4 4L21 7" })]
	}),
	wrench: /*#__PURE__*/ (0, W.jsx)("svg", {
		...wc,
		children: /*#__PURE__*/ (0, W.jsx)("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
	}),
	stop: /*#__PURE__*/ (0, W.jsx)("svg", {
		...Tc,
		children: /*#__PURE__*/ (0, W.jsx)("rect", {
			x: "6",
			y: "6",
			width: "12",
			height: "12",
			rx: "2"
		})
	}),
	microphone: /*#__PURE__*/ (0, W.jsxs)("svg", {
		...wc,
		children: [
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" }),
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M19 10v1a7 7 0 01-14 0v-1" }),
			/*#__PURE__*/ (0, W.jsx)("path", { d: "M12 18v4m-4 0h8" })
		]
	})
}, Dc = {};
function Oc(e) {
	return e == null ? null : typeof e == "string" ? on(e)?.icons ?? null : e.icons ?? null;
}
function kc(e, t) {
	return Oc(t)?.[e] ?? Dc[e] ?? Ec[e];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Icon/Icon.js
var Ac = {
	root: {
		kmuXW: "x2lah0s",
		$$css: !0
	},
	span: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		$$css: !0
	}
}, jc = {
	primary: {
		kMwMTN: "xtbr613",
		$$css: !0
	},
	secondary: {
		kMwMTN: "xv9yike",
		$$css: !0
	},
	tertiary: {
		kMwMTN: "xv9yike",
		$$css: !0
	},
	disabled: {
		kMwMTN: "xqa6c3m",
		$$css: !0
	},
	accent: {
		kMwMTN: "xqwr325",
		$$css: !0
	},
	success: {
		kMwMTN: "xtjic6",
		$$css: !0
	},
	error: {
		kMwMTN: "xjt36v0",
		$$css: !0
	},
	warning: {
		kMwMTN: "xs3pv69",
		$$css: !0
	},
	inherit: {
		kMwMTN: "x1heor9g",
		$$css: !0
	},
	blue: {
		kMwMTN: "x1fns2mt",
		$$css: !0
	},
	red: {
		kMwMTN: "xeffzf7",
		$$css: !0
	},
	green: {
		kMwMTN: "xmxeech",
		$$css: !0
	},
	gray: {
		kMwMTN: "x1eyinzz",
		$$css: !0
	},
	cyan: {
		kMwMTN: "x157w0xa",
		$$css: !0
	},
	teal: {
		kMwMTN: "x1f3zxcb",
		$$css: !0
	},
	yellow: {
		kMwMTN: "x1g6zdft",
		$$css: !0
	},
	orange: {
		kMwMTN: "xxu74a4",
		$$css: !0
	},
	pink: {
		kMwMTN: "x1kxxfg5",
		$$css: !0
	},
	purple: {
		kMwMTN: "xzdw94u",
		$$css: !0
	}
};
function Mc(e) {
	return e != null && e !== "" ? {
		role: "img",
		"aria-label": e
	} : { "aria-hidden": "true" };
}
function Nc({ icon: e, color: t = "inherit", size: n, label: r, ref: i, className: a, style: o, xstyle: s, ...c }) {
	let l = $s(n), u = Mc(r);
	return typeof e == "string" ? /*#__PURE__*/ (0, W.jsx)(Pc, {
		name: e,
		color: t,
		size: l,
		a11yProps: u,
		className: a,
		style: o,
		xstyle: s,
		spanProps: c
	}) : /*#__PURE__*/ (0, W.jsx)(e, {
		ref: i,
		...u,
		...K(U("icon", {
			size: l,
			color: t
		}), w(Ac.root, jc[t], ec[l], s), a ?? void 0, o),
		...c
	});
}
Nc.displayName = "Icon";
function Pc({ name: e, color: t, size: n, a11yProps: r, className: i, style: a, xstyle: o, spanProps: s }) {
	let c = kc(e, Br());
	if (c == null) return null;
	let l = s ?? {};
	return /*#__PURE__*/ (0, W.jsx)("span", {
		...r,
		...l,
		...K(U("icon", {
			size: n,
			color: t
		}), w(Ac.span, jc[t], tc[n], o), i ?? void 0, a),
		children: c
	});
}
function Fc(e, t) {
	return typeof e == "string" || typeof e == "function" || typeof e == "object" && e && "render" in e ? /*#__PURE__*/ (0, W.jsx)(Nc, {
		icon: e,
		...t
	}) : e;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/SegmentedControl/SegmentedControlContext.js
var Ic = ei(null);
Ic.displayName = "SegmentedControlContext";
function Lc() {
	let e = (0, v.use)(Ic);
	if (e == null) throw Error("useSegmentedControlContext must be used within SegmentedControl. Wrap your SegmentedControlItem in <SegmentedControl>.");
	return e;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/isRtlElement.js
function Rc(e) {
	return !e || typeof window > "u" ? !1 : window.getComputedStyle(e).direction === "rtl";
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useListFocus.js
var zc = /* @__PURE__ */ new Set([
	"text",
	"search",
	"url",
	"tel",
	"email",
	"password",
	"number"
]);
function Bc(e) {
	if (e.isContentEditable) return e;
	let t = e.closest("[contenteditable]");
	return t && t.getAttribute("contenteditable") !== "false" ? t : null;
}
function Vc(e, t) {
	if (!(e instanceof HTMLElement)) return !1;
	let n = Bc(e);
	if (n) {
		let e = typeof window < "u" ? window.getSelection() : null;
		return e && e.rangeCount > 0 && !e.isCollapsed ? !0 : (n.textContent ?? "").length > 0;
	}
	let r = e.tagName === "TEXTAREA", i = e.tagName === "INPUT" && zc.has(e.type);
	if (!r && !i) return !1;
	let { selectionStart: a, selectionEnd: o, value: s } = e;
	return a !== o || a == null ? !0 : t === "ArrowLeft" || t === "ArrowUp" || t === "Home" ? a > 0 : t === "ArrowRight" || t === "ArrowDown" || t === "End" ? a < s.length : !1;
}
function Hc(e = {}) {
	let { itemSelector: t = "[role=\"menuitem\"]", boundarySelector: n, wrap: r = !0, onEscape: i, orientation: a = "vertical", hasHomeEnd: o = !0, hasRovingTabIndex: s = !1, hasCaretGuard: c = !1 } = e, l = (0, v.useRef)(null), u = (0, v.useCallback)((e) => e.getAttribute("aria-disabled") === "true" || e.disabled === !0 || e.hasAttribute("disabled"), []), d = (0, v.useCallback)(() => {
		let e = l.current;
		if (!e) return [];
		let r = Array.from(e.querySelectorAll(t));
		return n ? r.filter((t) => t.closest(n) === e) : r;
	}, [t, n]), f = (0, v.useCallback)((e) => {
		let t = l.current;
		if (!t || !n) return !0;
		let r = e.target;
		return !r || r.closest(n) === t;
	}, [n]), p = (0, v.useCallback)((e, t, n, r) => {
		let i = e.length;
		if (i === 0) return -1;
		let a = t;
		for (let t = 0; t < i; t++) {
			if (a < 0 || a >= i) {
				if (!r) return -1;
				a = (a + i) % i;
			}
			let t = e[a];
			if (t && !u(t)) return a;
			a += n;
		}
		return -1;
	}, [u]), m = (0, v.useCallback)(() => {
		let e = d(), t = document.activeElement;
		return e.findIndex((e) => e === t || e.contains(t));
	}, [d]), h = (0, v.useCallback)((e, t) => {
		e.getAttribute("tabindex") !== String(t) && e.setAttribute("tabindex", String(t));
	}, []), g = (0, v.useCallback)(() => {
		let e = d(), t = e.filter((e) => !u(e));
		if (t.length === 0) return;
		let n = t.find((e) => e.getAttribute("tabindex") === "0") ?? t[0];
		for (let t of e) h(t, t === n ? 0 : -1);
	}, [
		d,
		u,
		h
	]);
	y(() => {
		s && g();
	});
	let _ = (0, v.useCallback)((e, t) => {
		let n = e[t];
		if (n) {
			if (s) for (let t of e) h(t, t === n ? 0 : -1);
			n.focus();
		}
	}, [s, h]), b = (0, v.useCallback)((e) => {
		let t = d();
		if (t.length === 0) return;
		let n = Math.max(0, Math.min(e, t.length - 1));
		_(t, n);
	}, [d, _]), x = (0, v.useCallback)(() => {
		let e = d(), t = p(e, 0, 1, !1);
		return t !== -1 && (_(e, t), !0);
	}, [
		d,
		p,
		_
	]), S = (0, v.useCallback)(() => {
		let e = d(), t = p(e, e.length - 1, -1, !1);
		return t !== -1 && (_(e, t), !0);
	}, [
		d,
		p,
		_
	]), C = (0, v.useCallback)(() => {
		s && g();
	}, [s, g]);
	return {
		listRef: l,
		handleKeyDown: (0, v.useCallback)((e) => {
			if (e.ctrlKey || e.metaKey || e.altKey || !f(e)) return;
			if (e.key === "Escape") {
				i && (e.preventDefault(), i());
				return;
			}
			let t = a === "horizontal" || a === "both", n = a === "vertical" || a === "both", s = [], u = [];
			if (t) {
				let t = e.key === "ArrowLeft" || e.key === "ArrowRight" ? Rc(l.current) : !1;
				s.push(t ? "ArrowLeft" : "ArrowRight"), u.push(t ? "ArrowRight" : "ArrowLeft");
			}
			n && (s.push("ArrowDown"), u.push("ArrowUp"));
			let h = s.includes(e.key), g = u.includes(e.key), v = o && e.key === "Home", y = o && e.key === "End";
			if (!h && !g && !v && !y || c && (Vc(e.target, e.key) || Vc(document.activeElement, e.key))) return;
			let b = m(), C = d();
			if (h) {
				let e = b === -1 ? 0 : b + 1, t = p(C, e, 1, r);
				t !== -1 && _(C, t);
			} else if (g) {
				let e = b === -1 ? C.length - 1 : b - 1, t = p(C, e, -1, r);
				t !== -1 && _(C, t);
			} else v ? x() : y && S();
			e.preventDefault();
		}, [
			m,
			d,
			r,
			a,
			o,
			c,
			p,
			_,
			x,
			S,
			i,
			f
		]),
		handleFocus: C,
		focusItem: b,
		focusFirst: x,
		focusLast: S,
		ownsEvent: f,
		getItems: d
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/isApplePlatform.js
function Uc() {
	if (typeof navigator > "u") return !1;
	let e = "userAgentData" in navigator ? navigator.userAgentData : null;
	if (e && typeof e == "object" && "platform" in e) {
		let t = e.platform, n = typeof t == "string" ? t.trim() : "";
		if (n !== "" && n.toLowerCase() !== "unknown") return /mac/i.test(n);
	}
	return /Mac|iPhone|iPad|iPod/.test(navigator.platform ?? "");
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Kbd/Kbd.js
var Wc = { wrapper: {
	k1xSpc: "x3nfvp2",
	kGNEyG: "x6s0dn4",
	kOIVth: "xzye2dw",
	kmuXW: "x2lah0s",
	$$css: !0
} }, Gc = /* @__PURE__ */ new Map([
	["ctrl", "⌃"],
	["alt", "⌥"],
	["shift", "⇧"],
	["enter", "↵"],
	["backspace", "⌫"],
	["escape", "Esc"],
	["tab", "⇥"],
	["up", "↑"],
	["down", "↓"],
	["left", "←"],
	["right", "→"],
	["plus", "+"]
]), Kc = /* @__PURE__ */ new Map([["esc", "escape"], ["return", "enter"]]);
function qc(e, t) {
	return e === "mod" ? t ? "⌘" : "Ctrl" : Gc.get(e) ?? e.toUpperCase();
}
var Jc = /* @__PURE__ */ new Map([
	["ctrl", "Control"],
	["alt", "Alt"],
	["shift", "Shift"],
	["enter", "Enter"],
	["backspace", "Backspace"],
	["escape", "Escape"],
	["tab", "Tab"],
	["up", "Up arrow"],
	["down", "Down arrow"],
	["left", "Left arrow"],
	["right", "Right arrow"],
	["plus", "Plus"]
]);
function Yc(e, t) {
	return e === "mod" ? t ? "Command" : "Control" : Jc.get(e) ?? e.toUpperCase();
}
function Xc() {
	return () => {};
}
function Zc() {
	return !1;
}
function Qc({ keys: e, ref: t, xstyle: n, className: r, style: i, ...a }) {
	let o = (0, v.useSyncExternalStore)(Xc, Uc, Zc), s = /* @__PURE__ */ new Map(), c = e.split("+").map((e) => e.trim().toLowerCase()).map((e) => {
		let t = s.get(e) ?? 0;
		return s.set(e, t + 1), {
			key: Kc.get(e) ?? e,
			reactKey: `${e}:${t}`
		};
	}), l = c.map(({ key: e }) => Yc(e, o)).join(" + ");
	return /*#__PURE__*/ (0, W.jsx)("span", {
		...a,
		ref: t,
		role: "img",
		"aria-label": l,
		...K(U("kbd"), w(Wc.wrapper, n), r, i),
		children: c.map(({ key: e, reactKey: t }) => /*#__PURE__*/ (0, W.jsx)("kbd", {
			"aria-hidden": "true",
			className: "x3nfvp2 x6s0dn4 xl56j7k x16asifk x1grt7ep x7a5moj xx3sua9 x17x4s8c xlxy82 x1q0q8m5 xib2hle xv1l7n4 x9ynric x141an7d x1e4wzip x1ltkj2j x87ps6o",
			children: qc(e, o)
		}, t))
	});
}
Qc.displayName = "Kbd";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useKeyboardHint.js
var $c = /* @__PURE__ */ new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown"
]), el = {
	horizontal: ["left", "right"],
	vertical: ["up", "down"],
	both: [
		"left",
		"right",
		"up",
		"down"
	]
}, tl = { hint: {
	kVAEAm: "xixxii4",
	kpwlN0: "x1anvkwx",
	kogj98: "x1ghz6dp",
	kMzoRj: "xc342km",
	ksu8eU: "xng3xce",
	kWkggS: "x1prclbq",
	kaIpWk: "xh6dtrn",
	kGVxlE: "x1i5ehqx",
	kLKAdn: "xfsso4q",
	kGO01o: "xy143xn",
	kZCmMZ: "x12gdq22",
	kwRFfy: "x1djylfy",
	kGuDYH: "x141an7d",
	kLWn49: "x1ltkj2j",
	kMwMTN: "xv1l7n4",
	khDVqt: "xuxw1ft",
	kSiTet: "xg01cxk xofkqq2",
	k1ekBW: "xsm4mo9",
	kIyJzY: "xx6bhzk",
	kzIqYQ: "xd00j3c",
	kfzvcC: "x47corl",
	$$css: !0
} };
function nl(e = {}) {
	let { orientation: t = "horizontal", dismissAfterMs: n = 3e3, isEnabled: r = !0 } = e, i = Fs(), a = (0, v.useRef)(null), o = (0, v.useRef)(!1), s = (0, v.useRef)(!1), c = (0, v.useRef)(() => {}), l = (0, v.useCallback)(() => {
		a.current &&= (clearTimeout(a.current), null);
	}, []), u = Bi({
		mode: "context",
		onShow: (0, v.useCallback)(() => {
			s.current = !0;
		}, []),
		onHide: (0, v.useCallback)(() => {
			s.current = !1, l(), c.current(null);
		}, [l])
	});
	c.current = u.ref;
	let d = (0, v.useCallback)(() => {
		o.current = !0, l(), u.hide(), s.current = !1, c.current(null);
	}, [l, u]), f = (0, v.useCallback)((e) => {
		!o.current && r && (c.current(e), u.show(), l(), a.current = setTimeout(() => {
			d();
		}, n));
	}, [
		l,
		d,
		n,
		r,
		u
	]);
	(0, v.useEffect)(() => () => {
		l(), c.current(null);
	}, [l]);
	let p = (0, v.useCallback)((e) => {
		if (o.current || !r) return;
		let t = e.target;
		if (!t.matches(":focus-visible")) return;
		let n = e.currentTarget;
		e.relatedTarget instanceof Node && n.contains(e.relatedTarget) || f(t);
	}, [f, r]), m = (0, v.useCallback)((e) => {
		if (!s.current) return;
		let t = e.currentTarget;
		if (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) {
			!o.current && e.relatedTarget instanceof HTMLElement && c.current(e.relatedTarget);
			return;
		}
		d();
	}, [d]), h = (0, v.useCallback)((e) => {
		s.current && $c.has(e.key) && d();
	}, [d]), g = /*#__PURE__*/ (0, W.jsx)("span", {
		className: "x3nfvp2 x6s0dn4 xzye2dw",
		children: el[t].map((e) => /*#__PURE__*/ (0, W.jsx)(Qc, { keys: e }, e))
	});
	return {
		hintElement: u.render(/*#__PURE__*/ (0, W.jsxs)("span", {
			"aria-hidden": "true",
			children: [g, /*#__PURE__*/ (0, W.jsx)("span", {
				className: "x11g1kdw",
				children: i("@astryx.keyboardHint.toNavigate")
			})]
		}), {
			placement: "below",
			alignment: "start",
			xstyle: tl.hint,
			style: { marginBlockStart: O["--spacing-2"] }
		}),
		onFocus: p,
		onBlur: m,
		onKeyDown: h
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Tooltip/Tooltip.js
var rl = /* @__PURE__ */ s({ Tooltip: () => ol });
function il(e) {
	return typeof e == "string" || typeof e == "number";
}
function al(...e) {
	let t = e.filter(Boolean);
	return t.length > 0 ? t.join(" ") : void 0;
}
function ol({ children: e, anchorRef: t, content: n, placement: r = "above", alignment: i = "center", delay: a = 200, hideDelay: o = 0, focusTrigger: s = "auto", touchTrigger: c = "auto", isEnabled: l = !0, onOpenChange: u, hasHoverIndication: d = "auto", isOpen: f, isDefaultOpen: p }) {
	let m = (0, v.useRef)(null), h = e != null && il(e), g = d === !0 || d === "auto" && h, _ = wa({
		placement: r,
		alignment: i,
		delay: a,
		hideDelay: o,
		focusTrigger: s,
		touchTrigger: c,
		isEnabled: l,
		isOpen: f,
		isDefaultOpen: p,
		onShow: (0, v.useCallback)(() => {
			u?.(!0);
		}, [u]),
		onHide: (0, v.useCallback)(() => {
			u?.(!1);
		}, [u])
	});
	return y(() => {
		if (!t) return;
		let e = t.current;
		if (!e) return;
		_.ref(e);
		let n = e.getAttribute("aria-describedby");
		return e.setAttribute("aria-describedby", al(n, _.describedBy) ?? ""), () => {
			_.ref(null), n ? e.setAttribute("aria-describedby", n) : e.removeAttribute("aria-describedby");
		};
	}, [
		t,
		_.ref,
		_.describedBy
	]), y(() => {
		if (t || h) return;
		let e = m.current;
		if (!e) return;
		let n = e.firstElementChild;
		if (!n) return;
		_.ref(n);
		let r = n.getAttribute("aria-describedby");
		return n.setAttribute("aria-describedby", al(r, _.describedBy) ?? ""), () => {
			_.ref(null), r ? n.setAttribute("aria-describedby", r) : n.removeAttribute("aria-describedby");
		};
	}, [
		t,
		h,
		_.ref,
		_.describedBy
	]), t && e == null ? /*#__PURE__*/ (0, W.jsx)(W.Fragment, { children: _.renderTooltip(n) }) : h ? /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)("span", {
		ref: _.ref,
		tabIndex: 0,
		"aria-describedby": _.describedBy,
		...{
			0: { className: "xt0psk2" },
			1: { className: "xt0psk2 xujl8zx xev0dqp xycaml9 xrys4gj" }
		}[!!g << 0],
		children: e
	}), _.renderTooltip(n)] }) : /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)("div", {
		ref: m,
		className: "xjp7ctv",
		children: e
	}), _.renderTooltip(n)] });
}
ol.displayName = "Tooltip";
//#endregion
//#region node_modules/@astryxdesign/core/dist/SegmentedControl/SegmentedControl.js
var sl = {
	container: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kzqmXN: "xeq5yr9",
		kOIVth: "x1lsbc85",
		"--_segmented-control-padding": "x18jk3ff",
		kmVPX3: "xpoxszi",
		kWkggS: "x17x4s8c",
		$$css: !0
	},
	fill: {
		k1xSpc: "x78zum5",
		kzqmXN: "xh8yej3",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		kfzvcC: "x47corl",
		$$css: !0
	},
	disabledWithMessage: {
		kSiTet: "xbyyjgo",
		$$css: !0
	}
}, cl = {
	sm: {
		"--_segmented-control-radius": "x9icjy1",
		kaIpWk: "x1hapoqb",
		$$css: !0
	},
	md: {
		"--_segmented-control-radius": "x9icjy1",
		kaIpWk: "x1hapoqb",
		$$css: !0
	},
	lg: {
		"--_segmented-control-radius": "x9icjy1",
		kaIpWk: "x1hapoqb",
		$$css: !0
	}
};
function ll({ ref: e, value: t, onChange: n, label: r, size: i, layout: a = "hug", isDisabled: o = !1, disabledMessage: s, children: c, xstyle: l, className: u, style: d, onKeyDown: f, onFocus: p, onBlur: m, ...h }) {
	let g = ic(i, "md"), _ = o && !!s, y = wa({
		placement: "above",
		focusTrigger: "always",
		isEnabled: _
	}), { listRef: b, handleKeyDown: x, handleFocus: S } = Hc({
		itemSelector: "[role=\"radio\"]:not([aria-disabled=\"true\"])",
		hasRovingTabIndex: !0,
		wrap: !0,
		orientation: "horizontal"
	}), C = nl({
		orientation: "horizontal",
		isEnabled: !o
	}), T = (0, v.useCallback)((e) => {
		f?.(e), !e.defaultPrevented && (C.onKeyDown(e), x(e));
	}, [
		f,
		C,
		x
	]), E = (0, v.useCallback)((e) => {
		if (p?.(e), e.defaultPrevented || (C.onFocus(e), S(e), o) || !e.currentTarget.contains(e.relatedTarget)) return;
		let r = e.target?.closest("[role=\"radio\"][data-value]");
		if (!r || r.getAttribute("aria-disabled") === "true") return;
		let i = r.dataset.value;
		i != null && i !== t && n(i);
	}, [
		p,
		C,
		S,
		o,
		n,
		t
	]), D = (0, v.useMemo)(() => ({
		value: t,
		onChange: n,
		size: g,
		layout: a,
		isDisabled: o,
		hasDisabledMessage: _
	}), [
		t,
		n,
		g,
		a,
		o,
		_
	]);
	return /*#__PURE__*/ (0, W.jsxs)(Ic, {
		value: D,
		children: [/*#__PURE__*/ (0, W.jsxs)("div", {
			ref: io(e, b, y.ref),
			...h,
			role: "radiogroup",
			"aria-label": r,
			"aria-disabled": o || void 0,
			"aria-describedby": _ ? y.describedBy : void 0,
			onKeyDown: T,
			onFocus: E,
			onBlur: Ja(m, C.onBlur),
			...K(U("segmented-control", { size: g }), w(sl.container, cl[g], a === "fill" && sl.fill, o && (_ ? sl.disabledWithMessage : sl.disabled), l), u, d),
			children: [c, C.hintElement]
		}), _ && y.renderTooltip(s)]
	});
}
ll.displayName = "SegmentedControl";
//#endregion
//#region node_modules/@astryxdesign/core/dist/SegmentedControl/SegmentedControlItem.js
var ul = {
	base: {
		kVAEAm: "x1n2onr6",
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kOIVth: "xzye2dw",
		kg3NbH: "xrrkdod",
		kWkggS: "xjbqb8w",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kMv6JI: "xjb2p0i",
		kGuDYH: "xcr08ib",
		kLWn49: "x1kq96og",
		k63SB2: "x1e4wzip",
		kMwMTN: "xv1l7n4",
		kkrTdU: "x1ypdohk x16khyan",
		khDVqt: "xuxw1ft",
		k1ekBW: "x1vix5yk",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	selected: {
		kAXs8y: "x1kzknox",
		kMwMTN: "x1tgivj0 x1k5gbb1",
		k63SB2: "x2mo6ok",
		kWkggS: "x10xzikg x1jzqe4",
		kGVxlE: "x1i5ehqx",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kMwMTN: "xnbbluu",
		$$css: !0
	},
	fill: {
		kUk6DE: "x98rzlu",
		k7Eaqz: "xeuugli",
		kjj79g: "xl56j7k",
		$$css: !0
	},
	icon: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		$$css: !0
	}
}, dl = {
	sm: {
		kZKoxP: "xzj98nu",
		kaIpWk: "xc910v0",
		kg3NbH: "xf314gf",
		kGuDYH: "x141an7d",
		$$css: !0
	},
	md: {
		kZKoxP: "x184gfjb",
		kaIpWk: "xc910v0",
		kg3NbH: "xrrkdod",
		$$css: !0
	},
	lg: {
		kZKoxP: "x1uiybsj",
		kaIpWk: "xc910v0",
		kg3NbH: "xrrkdod",
		$$css: !0
	}
}, fl = {
	sm: {
		kzqmXN: "x6jxa94",
		kZKoxP: "x1v9usgg",
		$$css: !0
	},
	md: {
		kzqmXN: "x1kky2od",
		kZKoxP: "xlup9mm",
		$$css: !0
	},
	lg: {
		kzqmXN: "x1xp8n7a",
		kZKoxP: "xmix8c7",
		$$css: !0
	}
};
function pl({ ref: e, value: t, label: n, isLabelHidden: r = !1, icon: i, isDisabled: a = !1, onClick: o, xstyle: s, ...c }) {
	let l = Lc(), u = l.value === t, d = a || l.isDisabled, f = u && (l.hasDisabledMessage ?? !1) && !a, p = l.size, m = l.layout === "fill", h = Ja(o, () => {
		!d && !u && l.onChange(t);
	}), g = i ? /*#__PURE__*/ (0, W.jsx)("span", {
		...w(ul.icon, fl[p]),
		children: i
	}) : null;
	return /*#__PURE__*/ (0, W.jsxs)("button", {
		ref: e,
		...c,
		type: "button",
		role: "radio",
		"aria-checked": u,
		"aria-disabled": d || void 0,
		"aria-label": r ? n : void 0,
		"data-value": t,
		tabIndex: u && !d || f ? 0 : -1,
		onClick: h,
		...K(U("segmented-control-item", {
			size: p,
			selected: u ? "selected" : null,
			disabled: d ? "disabled" : null
		}), ro.focusVisible(ul.base, dl[p], m && ul.fill, u && ul.selected, !u && !d && mc.backgroundColor, d && ul.disabled, s)),
		children: [g, !r && /*#__PURE__*/ (0, W.jsx)("span", {
			className: "xb3r6kr xlyipyv xeuugli",
			children: n
		})]
	});
}
pl.displayName = "SegmentedControlItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/focusableSelector.js
var ml = "button:not([disabled]), a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"]):not([disabled]), [contenteditable]:not([contenteditable=\"false\"]), audio[controls], video[controls], iframe, details > summary:first-child", hl = 0;
function gl(e) {
	(0, v.useEffect)(() => {
		if (e) return hl += 1, () => {
			--hl;
		};
	}, [e]);
}
function _l(e) {
	if (e.hasAttribute("inert") || e.closest("[inert]") || e.hidden || e.closest("[hidden]") || e.closest("[aria-hidden=\"true\"]")) return !1;
	if (typeof window < "u" && window.getComputedStyle) {
		let t = window.getComputedStyle(e);
		if (t.visibility === "hidden" || t.display === "none") return !1;
	}
	return !0;
}
function vl(e) {
	return Array.from(e.querySelectorAll(ml)).filter(_l);
}
function yl(e) {
	try {
		e.focus();
	} catch {}
	return document.activeElement === e;
}
function bl(e) {
	let t = vl(e);
	for (let e of t) if (yl(e)) return !0;
	return !1;
}
function xl(e) {
	let t = vl(e);
	for (let e = t.length - 1; e >= 0; e--) if (yl(t[e])) return !0;
	return !1;
}
function Sl(e) {
	let { isActive: t, onEscape: n } = e, r = (0, v.useRef)(null), i = (0, v.useRef)(null), a = (0, v.useRef)(!1), o = t && n != null;
	ba({
		isActive: o,
		onDismiss: () => {
			n?.();
		},
		getContainer: () => r.current
	}), gl(o);
	let s = (0, v.useCallback)(() => {
		r.current && bl(r.current);
	}, []);
	return (0, v.useEffect)(() => {
		if (!t) return;
		let e = document.activeElement, n = r.current, i = n != null && n.contains(document.activeElement), a = (e) => {
			let t = e.target;
			t != null && r.current?.contains(t) && (i = !0);
		};
		return document.addEventListener("focusin", a, !0), () => {
			if (document.removeEventListener("focusin", a, !0), !i) return;
			let t = document.activeElement;
			(t == null || t === document.body || t === document.documentElement || n != null && n.contains(t)) && e != null && e.isConnected && typeof e.focus == "function" && e.focus();
		};
	}, [t]), (0, v.useEffect)(() => {
		if (!t) return;
		let e = (e) => {
			let t = r.current;
			if (!t) return;
			let n = e.target;
			if (t.contains(n)) i.current = n;
			else if (a.current) {
				let e = bl(t);
				e && i.current === document.activeElement ? xl(t) : !e && i.current instanceof HTMLElement && t.contains(i.current) && yl(i.current), i.current = document.activeElement;
			}
			a.current = !1;
		};
		return document.addEventListener("focus", e, !0), () => {
			document.removeEventListener("focus", e, !0);
		};
	}, [t]), (0, v.useEffect)(() => {
		if (!t) return;
		let e = (e) => {
			let t = r.current;
			if (t && e.key === "Tab") {
				a.current = !0;
				let n = vl(t);
				if (n.length === 0) {
					let n = document.activeElement;
					if (!(n instanceof HTMLElement) || !t.contains(n)) return;
					e.preventDefault(), i.current = n, a.current = !1;
					return;
				}
				let r = n[0], o = n[n.length - 1];
				if (document.activeElement === t) {
					e.preventDefault(), e.shiftKey ? o.focus() : r.focus();
					return;
				}
				e.shiftKey ? document.activeElement === r && (e.preventDefault(), o.focus()) : document.activeElement === o && (e.preventDefault(), r.focus());
			}
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [t, n]), {
		containerRef: r,
		focusFirst: s
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useAnnounce.js
var Cl = "data-astryx-live-region", wl = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;inset-block-start:0;inset-inline-start:0;pointer-events:none;user-select:none;", Tl = 2e3, El = {
	polite: null,
	assertive: null
};
function Dl(e) {
	let t = El[e];
	t != null && (clearTimeout(t), El[e] = null);
}
function Ol(e, t) {
	Dl(e), El[e] = setTimeout(() => {
		El[e] = null, t.textContent = "";
	}, Tl);
}
var kl = null;
function Al(e) {
	let t = document.createElement("div");
	return t.setAttribute(Cl, e), t.setAttribute("aria-live", e), t.setAttribute("aria-atomic", "true"), t.setAttribute("role", e === "assertive" ? "alert" : "status"), t.style.cssText = wl, document.body.appendChild(t), t;
}
function jl() {
	return typeof document > "u" ? null : kl ? (kl.polite.isConnected || document.body.appendChild(kl.polite), kl.assertive.isConnected || document.body.appendChild(kl.assertive), kl) : (kl = {
		polite: Al("polite"),
		assertive: Al("assertive")
	}, kl);
}
function Ml(e, t) {
	let n = jl();
	if (!n) return;
	let r = t === "assertive" ? n.assertive : n.polite;
	r.textContent = "", requestAnimationFrame(() => {
		r.textContent = e;
	}), Ol(t, r);
}
function Nl(e) {
	if (Dl(e), !kl) return;
	let t = e === "assertive" ? kl.assertive : kl.polite;
	t.textContent = "";
}
function Pl() {
	return (0, v.useCallback)((e, t = "polite") => {
		if (!e) {
			Nl(t);
			return;
		}
		Ml(e, t);
	}, []);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useTypeahead.js
function Fl(e) {
	return e.key.length === 1 && !e.ctrlKey && !e.metaKey && e.key !== " ";
}
function Il(e) {
	let { getItemLabels: t, onMatch: n, getCurrentIndex: r, resetMs: i = 750, isDisabled: a } = e, o = (0, v.useRef)(""), s = (0, v.useRef)(void 0), c = (0, v.useCallback)(() => {
		o.current = "", s.current &&= (clearTimeout(s.current), void 0);
	}, []), l = (0, v.useCallback)(() => {
		s.current && clearTimeout(s.current), s.current = setTimeout(() => {
			o.current = "", s.current = void 0;
		}, i);
	}, [i]);
	return {
		onKeyDown: (0, v.useCallback)((e) => {
			let i = e.key === " " && !e.ctrlKey && !e.metaKey && o.current.length > 0;
			if (!Fl(e) && !i) return !1;
			let s = t();
			if (s.length === 0) return !1;
			let c = e.key.toLowerCase(), u = o.current.length > 0 && o.current.split("").every((e) => e === c) ? c : o.current + c;
			o.current = u, l();
			let d = r?.() ?? -1, f = s.length, p = d >= 0, m = p ? d : 0, h = p && u.length === 1 ? 1 : 0;
			for (let e = 0; e < f; e++) {
				let t = (m + h + e + f) % f;
				if (a?.(t)) continue;
				let r = s[t];
				if (r != null && r.trim().toLowerCase().startsWith(u)) return n(t), !0;
			}
			return !0;
		}, [
			t,
			n,
			r,
			l,
			a
		]),
		reset: c
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useDevWarning.js
function Ll(e, t, n = !0) {
	let r = (0, v.useRef)(!1);
	(0, v.useEffect)(() => {
		n && !r.current && (r.current = !0);
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/scrollOwnerRegistry.js
var Rl = /* @__PURE__ */ new WeakMap();
function zl(e, t) {
	Rl.set(e, t);
}
function Bl(e) {
	Rl.delete(e);
}
function Vl(e) {
	return Rl.get(e);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/scrollKeyboardDelegation.js
var Hl = /* @__PURE__ */ new Set([
	"article",
	"banner",
	"complementary",
	"contentinfo",
	"definition",
	"directory",
	"document",
	"figure",
	"form",
	"generic",
	"group",
	"heading",
	"list",
	"listitem",
	"main",
	"navigation",
	"none",
	"note",
	"paragraph",
	"presentation",
	"region",
	"section",
	"status",
	"table",
	"term"
]);
function Ul(e) {
	if (e.tabIndex < 0 || e.matches(":disabled") || e.closest("[inert], [hidden]") != null || e.getClientRects().length === 0) return !1;
	let t = getComputedStyle(e).visibility;
	return t !== "hidden" && t !== "collapse";
}
function Wl(e, t) {
	let n = t.querySelectorAll(ml), r = t.matches("button:not([disabled]), a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"]):not([disabled]), [contenteditable]:not([contenteditable=\"false\"]), audio[controls], video[controls], iframe, details > summary:first-child") && Ul(t) ? t : null;
	for (let e of n) if (!(r != null && e.tabIndex <= 0) && Ul(e)) {
		if (e.tabIndex > 0) return null;
		r ??= e;
	}
	if (r == null || r.tabIndex !== 0 || !r.matches("a[href], button") || r.closest("[aria-hidden=\"true\"]") != null || r.matches("[aria-disabled=\"true\"], [aria-haspopup]:not([aria-haspopup=\"false\"])")) return null;
	let i = r;
	for (; i != null && i !== e;) {
		let e = i.getAttribute("role")?.trim().toLowerCase(), t = i === r && (e === "button" && r.localName === "button" || e === "link" && r.localName === "a");
		if (e != null && e !== "" && !t && !Hl.has(e) || i === r && e != null && e !== "" && !t || i.hasAttribute("aria-activedescendant") || i.isContentEditable || i.matches("[contenteditable]:not([contenteditable=\"false\"])") || Vl(i) != null) return null;
		let n = getComputedStyle(i);
		if (/^(auto|scroll|overlay)$/.test(n.overflowX) && i.scrollWidth > i.clientWidth + 1 || /^(auto|scroll|overlay)$/.test(n.overflowY) && i.scrollHeight > i.clientHeight + 1) return null;
		i = i.parentElement;
	}
	return i === e ? r : null;
}
function Gl(e, t) {
	let n = e.ownerDocument, r = n.defaultView;
	if (r == null) return () => {};
	let i = null, a = null, o = null, s, c, l = () => {
		i = null, a = null, r.clearTimeout(s), c?.(), c = void 0;
	}, u = (t) => {
		if (l(), !(t.key !== "Tab" || t.ctrlKey || t.metaKey)) {
			if (i = t, a = t.target, t.shiftKey && o != null && n.activeElement === o && e.contains(o)) {
				let t = e.getAttribute("tabindex");
				e.tabIndex = -1, c = () => {
					e.getAttribute("tabindex") === "-1" && (t == null ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t));
				};
			}
			s = r.setTimeout(l, 0);
		}
	}, d = (r) => {
		let s = i, c = a;
		if (l(), r.target !== e) {
			e.contains(r.target) || (o = null);
			return;
		}
		if (o = null, s == null || s.shiftKey || s.defaultPrevented || s.eventPhase !== 0 || r.relatedTarget != null && r.relatedTarget !== c) return;
		let u = Wl(e, t);
		u != null && (o = u, u.focus(), n.activeElement !== u && (o = null));
	};
	return n.addEventListener("keydown", u, !0), n.addEventListener("keyup", l, !0), n.addEventListener("pointerdown", l, !0), n.addEventListener("focusin", d, !0), r.addEventListener("blur", l), () => {
		l(), n.removeEventListener("keydown", u, !0), n.removeEventListener("keyup", l, !0), n.removeEventListener("pointerdown", l, !0), n.removeEventListener("focusin", d, !0), r.removeEventListener("blur", l);
	};
}
var Kl = {
	isScrollable: !1,
	atStart: !0,
	atEnd: !0
};
function ql(e, t) {
	let n = e.toLowerCase(), r = n.startsWith("vertical") || n.startsWith("sideways"), i = t === "rtl";
	return r ? {
		inline: "y",
		block: "x",
		inlineReversed: n === "sideways-lr" ? !i : i,
		blockReversed: n.endsWith("-rl")
	} : {
		inline: "x",
		block: "y",
		inlineReversed: i,
		blockReversed: !1
	};
}
function Jl(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
function Yl(e, t) {
	let n = getComputedStyle(e);
	return t === "x" ? {
		clientExtent: e.clientWidth,
		contentExtent: e.scrollWidth,
		offset: e.scrollLeft,
		overflow: n.overflowX
	} : {
		clientExtent: e.clientHeight,
		contentExtent: e.scrollHeight,
		offset: e.scrollTop,
		overflow: n.overflowY
	};
}
function Xl(e, t) {
	return e.isConnected && t.display !== "none" && e.clientWidth > 0 && e.clientHeight > 0;
}
function Zl(e, t, n) {
	if (!Xl(e, getComputedStyle(e))) return null;
	let r = n[t], i = r === "x" ? e.clientWidth : e.clientHeight;
	return (r === "x" ? e.scrollWidth : e.scrollHeight) - i > 1;
}
function Ql(e, t, n) {
	if (!Xl(e, getComputedStyle(e))) return null;
	let r = n[t], i = Yl(e, r), a = i.contentExtent - i.clientExtent;
	if (!Jl(i.overflow) || a <= 1) return Kl;
	let o = n[`${t}Reversed`], s = Math.min(a, Math.max(0, o ? Math.abs(i.offset) : i.offset));
	return {
		isScrollable: !0,
		atStart: s <= 1,
		atEnd: s >= a - 1
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useScrollableArea.js
var $l = {
	isScrollable: !1,
	atStart: !0,
	atEnd: !0
}, eu = {
	inline: $l,
	block: $l
}, tu = {
	inline: !1,
	block: !1
}, nu = {
	inline: "x",
	block: "y",
	inlineReversed: !1,
	blockReversed: !1
}, ru = { overflow: (e, t) => [{
	kXHlph: e == null ? e : "xyto64x",
	kORKVm: t == null ? t : "x4ncuvb",
	$$css: !0
}, {
	"--x-overflowX": e ?? void 0,
	"--x-overflowY": t ?? void 0
}] };
function iu(e, t) {
	return e === t || e === "both";
}
function au(e, t) {
	return e.inline.isScrollable === t.inline.isScrollable && e.inline.atStart === t.inline.atStart && e.inline.atEnd === t.inline.atEnd && e.block.isScrollable === t.block.isScrollable && e.block.atStart === t.block.atStart && e.block.atEnd === t.block.atEnd;
}
function ou(e, t) {
	return e.inline === t.inline && e.block === t.block;
}
function su(e, t) {
	return e.inline === t.inline && e.block === t.block && e.inlineReversed === t.inlineReversed && e.blockReversed === t.blockReversed;
}
function cu(e) {
	if (e == null) return;
	let t = { ...e };
	return delete t.overflow, delete t.overflowX, delete t.overflowY, delete t.overflowInline, delete t.overflowBlock, t;
}
function lu(e) {
	let t = (0, v.useRef)(void 0), n = (0, v.useRef)(null);
	return (0, v.useCallback)((r) => {
		if (n.current != null && Object.is(t.current, r)) return n.current;
		let i = qa(r, e);
		return t.current = r, n.current = i, i;
	}, [e]);
}
function uu({ axis: e, keyboardAccess: t, overscroll: n = "allow", stickyContainment: r = "whenScrollable" }) {
	let [i, a] = (0, v.useState)(null), [o, s] = (0, v.useState)(null), [c, l] = (0, v.useState)(eu), [u, d] = (0, v.useState)(tu), [f, p] = (0, v.useState)(nu), m = (0, v.useRef)(eu), h = (0, v.useCallback)((e) => {
		a((t) => t === e ? t : e);
	}, []), g = (0, v.useCallback)((e) => {
		s((t) => t === e ? t : e);
	}, []), _ = lu(h), b = lu(g);
	y(() => {
		if (i == null || o == null) return;
		let t = null, n = !0, r = () => {
			t = null;
			let n = getComputedStyle(i), r = ql(n.writingMode, n.direction), a = iu(e, "inline") ? Zl(i, "inline", r) : !1, o = iu(e, "block") ? Zl(i, "block", r) : !1, s = iu(e, "inline") ? Ql(i, "inline", r) : $l, c = iu(e, "block") ? Ql(i, "block", r) : $l;
			if (a == null || o == null || s == null || c == null) return;
			let u = {
				inline: a,
				block: o
			}, f = {
				inline: s,
				block: c
			};
			m.current = f, zl(i, f), d((e) => ou(e, u) ? e : u), l((e) => au(e, f) ? e : f), p((e) => su(e, r) ? e : r);
		}, a = () => {
			n && t == null && (t = window.requestAnimationFrame(r));
		};
		zl(i, m.current), r();
		let s = Ua(i, a), c = Ua(o, a);
		i.addEventListener("scroll", a, { passive: !0 }), window.addEventListener("resize", a), window.visualViewport?.addEventListener("resize", a), o.addEventListener("load", a, !0), i.addEventListener("transitionend", a), i.addEventListener("animationend", a), o.addEventListener("transitionend", a), o.addEventListener("animationend", a);
		let u = typeof MutationObserver > "u" ? null : new MutationObserver(a);
		u?.observe(i, {
			attributes: !0,
			attributeFilter: [
				"class",
				"dir",
				"hidden",
				"style"
			]
		}), u?.observe(o, {
			attributes: !0,
			attributeFilter: [
				"class",
				"dir",
				"hidden",
				"style"
			],
			characterData: !0,
			childList: !0,
			subtree: !0
		});
		let f = i.parentElement;
		for (; f != null;) u?.observe(f, {
			attributes: !0,
			attributeFilter: [
				"class",
				"dir",
				"hidden",
				"style"
			]
		}), f = f.parentElement;
		let h = document.fonts;
		return h?.addEventListener?.("loadingdone", a), h?.ready.then(a), () => {
			n = !1, Bl(i), s(), c(), u?.disconnect(), i.removeEventListener("scroll", a), window.removeEventListener("resize", a), window.visualViewport?.removeEventListener("resize", a), o.removeEventListener("load", a, !0), i.removeEventListener("transitionend", a), i.removeEventListener("animationend", a), o.removeEventListener("transitionend", a), o.removeEventListener("animationend", a), h?.removeEventListener?.("loadingdone", a), t != null && window.cancelAnimationFrame(t);
		};
	}, [
		e,
		o,
		i
	]);
	let x = (0, v.useMemo)(() => ({
		inline: iu(e, "inline") ? c.inline : $l,
		block: iu(e, "block") ? c.block : $l
	}), [e, c]), S = x.inline.isScrollable || x.block.isScrollable;
	return y(() => {
		if (t.owner === "contentOrViewport" && S && i != null && o != null) return Gl(i, o);
	}, [
		o,
		S,
		t.owner,
		i
	]), {
		getViewportProps: (0, v.useCallback)((a = {}) => {
			let o = x.inline.isScrollable || x.block.isScrollable, s = iu(e, "inline") && f.inline === "x" || iu(e, "block") && f.block === "x", c = iu(e, "inline") && f.inline === "y" || iu(e, "block") && f.block === "y", l = u.inline && f.inline === "x" || u.block && f.block === "x", d = u.inline && f.inline === "y" || u.block && f.block === "y", p = l || d || r === "always", m = r === "always" ? s : l, h = r === "always" ? c : d, { xstyle: g, ...v } = a, y = K({
				...v,
				style: cu(v.style)
			}, w(g, ru.overflow(p ? m ? "auto" : "hidden" : "clip", p ? h ? "auto" : "hidden" : "clip"))), b = t.owner !== "content", S = (!b || !o) && i != null && typeof document < "u" && document.activeElement === i, C = { ...y.style }, T = n === "contain" && x.inline.isScrollable, E = n === "contain" && x.block.isScrollable, D = f.inline, O = f.block;
			iu(e, "inline") && (C[D === "x" ? "overscrollBehaviorX" : "overscrollBehaviorY"] = T ? "contain" : "auto"), iu(e, "block") && (C[O === "x" ? "overscrollBehaviorX" : "overscrollBehaviorY"] = E ? "contain" : "auto");
			let k = t.owner === "content" ? {} : {
				role: t.role ?? "group",
				"aria-label": t.label,
				tabIndex: b && o ? 0 : S ? -1 : void 0
			};
			return {
				...y,
				...k,
				ref: _(y.ref),
				style: C,
				"data-scroll-axis": e,
				"data-scrollable-inline": x.inline.isScrollable ? "true" : void 0,
				"data-scrollable-block": x.block.isScrollable ? "true" : void 0,
				"data-scroll-inline-start": x.inline.atStart ? "true" : void 0,
				"data-scroll-inline-end": x.inline.atEnd ? "true" : void 0,
				"data-scroll-block-start": x.block.atStart ? "true" : void 0,
				"data-scroll-block-end": x.block.atEnd ? "true" : void 0
			};
		}, [
			e,
			_,
			t,
			f,
			u,
			n,
			x,
			r,
			i
		]),
		getContentProps: (0, v.useCallback)((e = {}) => ({
			...e,
			ref: b(e.ref),
			"data-scroll-content": ""
		}), [b]),
		state: x
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/scrollbarGutter.js
var du = {
	settle() {},
	release() {}
};
function fu(e) {
	if (typeof window > "u" || typeof document > "u") return du;
	let t = document.documentElement, n = t.clientWidth;
	if (n === 0) return du;
	let r = t.style.scrollbarGutter, i = e.style.paddingRight, a = e.getBoundingClientRect().width, o = !1, s = !1, c = !1;
	return window.innerWidth > n && (t.style.scrollbarGutter = "stable", o = !0), {
		settle() {
			if (c) return;
			c = !0;
			let t = e.getBoundingClientRect().width - a;
			if (t <= 0) return;
			let n = Number.parseFloat(window.getComputedStyle(e).paddingRight) || 0;
			e.style.paddingRight = `${n + t}px`, s = !0;
		},
		release() {
			s &&= (e.style.paddingRight = i, !1), o &&= (t.style.scrollbarGutter = r, !1);
		}
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useScrollLock.js
var pu = 0, mu = null;
function hu(e) {
	(0, v.useEffect)(() => {
		if (!e) return;
		let { body: t } = document;
		if (pu === 0) {
			let e = window.scrollX, n = window.scrollY, r = fu(t);
			mu = {
				scrollX: e,
				scrollY: n,
				overflow: t.style.overflow,
				position: t.style.position,
				top: t.style.top,
				left: t.style.left,
				right: t.style.right,
				gutter: r
			}, t.style.overflow = "hidden", t.style.position = "fixed", t.style.top = `-${n}px`, t.style.left = "0", t.style.right = "0", r.settle();
		}
		return pu += 1, () => {
			if (--pu, pu !== 0 || mu == null) return;
			let e = mu;
			mu = null, t.style.overflow = e.overflow, t.style.position = e.position, t.style.top = e.top, t.style.left = e.left, t.style.right = e.right, e.gutter.release(), window.scrollTo(e.scrollX, e.scrollY);
		};
	}, [e]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useEntryAnimation.js
var gu = !1;
typeof window < "u" && requestAnimationFrame(() => {
	gu = !0;
});
var _u = {
	slideDown: {
		kKVMdj: "x1srr2gu x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	slideUp: {
		kKVMdj: "x1dvww92 x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	fadeIn: {
		kKVMdj: "xqcmdr3 x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	scaleIn: {
		kKVMdj: "x97zbip x1aquc0h",
		k44tkh: "x9uej1z",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	}
};
function vu(e = "slideDown") {
	let [t] = (0, v.useState)(() => gu);
	return t ? _u[e] : null;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useClickableContainer.js
var yu = [
	"button",
	"a",
	"input",
	"select",
	"textarea",
	"[role=\"button\"]",
	"[role=\"link\"]",
	"[role=\"checkbox\"]",
	"[role=\"radio\"]",
	"[role=\"switch\"]",
	"[role=\"tab\"]",
	"[role=\"menuitem\"]",
	"[role=\"option\"]",
	"[role=\"combobox\"]",
	"[role=\"listbox\"]",
	"[role=\"slider\"]",
	"[role=\"spinbutton\"]",
	"[data-pressable-container]"
].join(","), bu = "[aria-readonly=\"true\"]";
function xu(e, t) {
	let n = e;
	for (; n != null && n !== t && n !== document.body;) {
		if (n.matches(yu) && !n.matches(bu)) return !0;
		n = n.parentElement;
	}
	return !1;
}
function Su(e) {
	if (typeof document > "u" || !("getSelection" in document)) return !1;
	let t = document.getSelection();
	return t == null || t.isCollapsed ? !1 : e.contains(t.anchorNode);
}
function Cu({ containerRef: e, interactiveRef: t, onClick: n, href: r, target: i, disabled: a = !1 }) {
	return (0, v.useEffect)(() => {
		let t = e.current;
		t && t.setAttribute("data-pressable-container", "true");
	}, [e]), {
		onClick: (0, v.useCallback)((o) => {
			if (a) return;
			let s = e.current;
			if (!s || Su(s)) return;
			let c = o.target;
			if (c instanceof Element && !(c !== o.currentTarget && xu(c, s)) && (n?.(o), !o.defaultPrevented && (r != null && uc(r) && (i === "_blank" || o.ctrlKey || o.metaKey ? window.open(r, "_blank", "noopener") : t?.current ? t.current.click() : window.location.href = r), r == null && n == null && t?.current))) {
				let e = new MouseEvent("click", {
					bubbles: o.bubbles,
					cancelable: o.cancelable,
					ctrlKey: o.ctrlKey,
					metaKey: o.metaKey,
					shiftKey: o.shiftKey,
					altKey: o.altKey,
					button: o.button
				});
				t.current.dispatchEvent(e), o.stopPropagation();
			}
		}, [
			e,
			t,
			n,
			r,
			i,
			a
		]),
		onMouseUp: (0, v.useCallback)((t) => {
			if (a) return;
			let n = e.current;
			if (!n) return;
			let i = t.target;
			i instanceof Element && t.button === 1 && r != null && uc(r) && (i === t.currentTarget || !xu(i, n)) && window.open(r, "_blank", "noopener");
		}, [
			e,
			r,
			a
		])
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useInputContainer.js
var wu = /* @__PURE__ */ new Set([
	"text",
	"password",
	"email",
	"number",
	"search",
	"tel",
	"url",
	"date",
	"datetime-local",
	"month",
	"time",
	"week"
]), Tu = /* @__PURE__ */ new Set([
	"true",
	"menu",
	"listbox",
	"tree",
	"grid",
	"dialog"
]);
function Eu(e) {
	if (e.getAttribute("role") === "combobox") return !0;
	let t = e.getAttribute("aria-haspopup");
	return t != null && Tu.has(t);
}
function Du({ containerRef: e, inputRef: t, disabled: n = !1 }) {
	return Cu({
		containerRef: e,
		interactiveRef: t,
		onClick: (0, v.useCallback)(() => {
			let e = t.current;
			e != null && (e instanceof HTMLElement && Eu(e) ? e.click() : e instanceof HTMLInputElement && wu.has(e.type) || e instanceof HTMLTextAreaElement ? e.focus() : e instanceof HTMLElement ? e.click() : "focus" in e && e.focus());
		}, [t]),
		disabled: n
	});
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/FormLayout/FormLayoutContext.js
var Ou = ei({ direction: "vertical" });
Ou.displayName = "FormLayoutContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Field/FieldLabel.js
var ku = {
	label: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "xzye2dw",
		kMv6JI: "x9ynric",
		kGuDYH: "xcr08ib",
		kLWn49: "x1kq96og",
		k63SB2: "x1e4wzip",
		kMwMTN: "xv1l7n4",
		kkrTdU: "x1ypdohk x16khyan",
		$$css: !0
	},
	labelDisabled: {
		kMwMTN: "xnbbluu",
		kkrTdU: "xt0e3qv",
		$$css: !0
	},
	srOnly: {
		ksu8eU: "xng3xce",
		kMcinP: "xzpqnlu",
		kZKoxP: "xjm9jq1",
		kLqNvP: "x1o0tod",
		kogj98: "xkdpibf",
		kVQacm: "xb3r6kr",
		kmVPX3: "x1717udv",
		kfzvcC: "x47corl",
		kVAEAm: "x10l6tqk",
		k87sOh: "x13vifvy",
		kfSwDN: "x87ps6o",
		khDVqt: "xuxw1ft",
		kzqmXN: "x1i1rx1s",
		$$css: !0
	}
};
function Au({ label: e, inputID: t, labelID: n, isGroupLabel: r = !1, isLabelHidden: i = !1, isDisabled: a = !1, isOptional: o = !1, isRequired: s = !1, labelIcon: c, labelTooltip: l, description: u, descriptionID: d, className: f, style: p, xstyle: m, ref: h, ...g }) {
	let _ = Fs(), { defaultOptionality: y } = (0, v.use)(Ou), b = o && y !== "optional" ? _("@astryx.field.optional") : s && y !== "required" ? _("@astryx.field.required") : null, x = r ? "span" : "label", S = !r && t != null, C = (0, v.useRef)(null), T = Du({
		containerRef: C,
		inputRef: (0, v.useMemo)(() => ({
			get current() {
				return t == null ? null : C.current?.ownerDocument.getElementById(t) ?? null;
			},
			set current(e) {}
		}), [t]),
		disabled: !S
	}), E = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [
		c && Fc(c, {
			size: "sm",
			color: "inherit"
		}),
		e,
		b && /*#__PURE__*/ (0, W.jsxs)("span", {
			className: "x1sodnla x141an7d x1ltkj2j xv1l7n4",
			children: [/*#__PURE__*/ (0, W.jsx)("span", {
				"aria-hidden": "true",
				children: " ∙ "
			}), b]
		}),
		l && /*#__PURE__*/ (0, W.jsx)(ol, {
			content: l,
			placement: "above",
			children: /*#__PURE__*/ (0, W.jsx)(Nc, {
				icon: "info",
				size: "sm",
				color: "inherit"
			})
		})
	] }), D = /*#__PURE__*/ (0, W.jsx)(x, {
		ref: h,
		id: n,
		htmlFor: r ? void 0 : t,
		...g,
		...K(U("field-label"), w(ku.label, a && ku.labelDisabled, i && ku.srOnly, m), f, p),
		children: E
	});
	return u ? /*#__PURE__*/ (0, W.jsxs)("div", {
		...{
			0: { className: "x78zum5 xdt5ytf" },
			1: { className: "xdt5ytf xjp7ctv" }
		}[!!i << 0],
		children: [D, /*#__PURE__*/ (0, W.jsx)("span", {
			ref: S ? C : void 0,
			id: d,
			...S ? T : void 0,
			...{
				0: { className: "x9ynric x141an7d x1ltkj2j x1sodnla xv1l7n4" },
				2: { className: "x9ynric x141an7d x1ltkj2j x1sodnla xv1l7n4 x1ypdohk x16khyan" },
				1: { className: "x9ynric x141an7d x1ltkj2j x1sodnla xv1l7n4 xng3xce xzpqnlu xjm9jq1 x1o0tod xkdpibf xb3r6kr x1717udv x47corl x10l6tqk x13vifvy x87ps6o xuxw1ft x1i1rx1s" },
				3: { className: "x9ynric x141an7d x1ltkj2j x1sodnla xv1l7n4 x1ypdohk x16khyan xng3xce xzpqnlu xjm9jq1 x1o0tod xkdpibf xb3r6kr x1717udv x47corl x10l6tqk x13vifvy x87ps6o xuxw1ft x1i1rx1s" }
			}[!!S << 1 | !!i << 0],
			children: u
		})]
	}) : D;
}
Au.displayName = "FieldLabel";
//#endregion
//#region node_modules/@astryxdesign/core/dist/FieldStatus/FieldStatus.js
var ju = {
	warning: "warning",
	error: "error",
	success: "success"
};
`${O["--spacing-1-5"]}`;
var Mu = {
	base: {
		kMv6JI: "x9ynric",
		kGuDYH: "x141an7d",
		kLWn49: "x1ltkj2j",
		$$css: !0
	},
	attached: {
		keoZOQ: "x3dbumh",
		kLKAdn: "xdgtoc0",
		kGO01o: "x1wesfrj",
		kg3NbH: "xf314gf",
		kVL7Gh: "xquck67",
		kT0f0o: "x14i3lts",
		kfzvcC: "x47corl",
		$$css: !0
	},
	detached: {
		keoZOQ: "xcsaf9d",
		k8WAf4: "xce4md1",
		kg3NbH: "xf314gf",
		kaIpWk: "xh6dtrn",
		$$css: !0
	}
}, Nu = {
	warning: {
		kWkggS: "x24i8r5",
		kMwMTN: "xdhq94a",
		$$css: !0
	},
	error: {
		kWkggS: "x1pritpl",
		kMwMTN: "x1joocv1",
		$$css: !0
	},
	success: {
		kWkggS: "xu13z74",
		kMwMTN: "xltfdvo",
		$$css: !0
	}
};
function Pu({ ref: e, type: t, message: n, id: r, variant: i = "attached", xstyle: a, className: o, style: s, ...c }) {
	let l = vu("slideDown"), u = Pl();
	return (0, v.useEffect)(() => {
		n && u(n, t === "error" ? "assertive" : "polite");
	}, [
		u,
		n,
		t
	]), /*#__PURE__*/ (0, W.jsx)("div", {
		ref: e,
		id: r,
		...c,
		...K(U("field-status", {
			type: t,
			variant: i
		}), w(Mu.base, l, i === "attached" ? Mu.attached : Mu.detached, Nu[t], a), o, s),
		children: i === "detached" ? /*#__PURE__*/ (0, W.jsxs)("span", {
			className: "x78zum5 x1cy8zhl xzye2dw",
			children: [/*#__PURE__*/ (0, W.jsx)("span", {
				className: "x3nfvp2 x6s0dn4 x14o5nre x2lah0s",
				children: /*#__PURE__*/ (0, W.jsx)(Nc, {
					icon: ju[t],
					size: "sm",
					color: "inherit",
					...U("field-status-icon", { type: t })
				})
			}), /*#__PURE__*/ (0, W.jsx)("span", { children: n })]
		}) : n
	});
}
Pu.displayName = "FieldStatus";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Heading/Heading.js
var Fu = /*#__PURE__*/ (0, v.lazy)(async () => Promise.resolve().then(() => rl).then((e) => ({ default: e.Tooltip })));
function Iu(e) {
	return e === "display-1" || e === "display-2" || e === "display-3";
}
var Lu = {
	1: "h1",
	2: "h2",
	3: "h3",
	4: "h4",
	5: "h5",
	6: "h6"
};
function Ru({ level: e, type: t, weight: n, accessibilityLevel: r, color: i = "primary", display: a = "block", maxLines: o = 0, hasTruncateTooltip: s = !0, wordBreak: c, textWrap: l, justify: u = "start", hasCapsize: d = !1, hasStrikethrough: f = !1, xstyle: p, className: m, style: h, children: g, ref: _, ...y }) {
	let b = Lu[e], x = r && r !== e ? { "aria-level": r } : {}, S = c ?? (o === 1 ? "break-all" : "break-word"), C = o > 0 || d ? "block" : a, T = t && Iu(t) ? t : void 0, E = Ga({ maxLines: o }), D = typeof s == "string" ? s : "above", O = o > 0 && s !== !1 && E.isTruncated, k = (0, v.useRef)(null), A = io(_, E.ref, k), j = o > 1 ? { WebkitLineClamp: o } : void 0;
	return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(b, {
		ref: A,
		...K(U("heading", {
			level: e,
			color: i,
			type: t,
			weight: n
		}), w(Ta[co(i)], T ? Oa[T] : Aa[e], T && Da[T], n && Ea[n], o === 1 ? Ma.singleLine : o > 1 ? Ma.multiLine : ja[C], o > 0 && Na[S], l && Pa[l], u !== "start" && Ra[u], d && Fa.enabled, f && Ia.strikethrough, p), m, {
			...h,
			...j
		}),
		...x,
		...y,
		children: g
	}), O && /*#__PURE__*/ (0, W.jsx)(v.Suspense, {
		fallback: null,
		children: /*#__PURE__*/ (0, W.jsx)(Fu, {
			anchorRef: k,
			content: /*#__PURE__*/ (0, W.jsx)("span", {
				...w(za.content),
				children: E.fullText
			}),
			placement: D
		})
	})] });
}
Ru.displayName = "Heading";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Field/Field.js
var zu = {
	container: {
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kHBbk8: "xc8icb0",
		$$css: !0
	},
	containerGap: {
		kOIVth: "xzye2dw",
		$$css: !0
	},
	horizontalLabels: {
		k1xSpc: "xjp7ctv",
		$$css: !0
	},
	attachedStatusLayer: {
		kVAEAm: "x1n2onr6",
		kY2c9j: "x8knxv4",
		$$css: !0
	}
}, Bu = { width: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function Vu({ label: e, isLabelHidden: t = !1, description: n, inputID: r, labelID: i, isGroupLabel: a = !1, descriptionID: o, isOptional: s = !1, isRequired: c = !1, isDisabled: l = !1, labelIcon: u, status: d, labelTooltip: f, statusVariant: p = "attached", width: m, xstyle: h, children: g, className: _, style: y, ref: b, ...x }) {
	let { direction: S } = (0, v.use)(Ou), C = S === "horizontal-labels", T = o ?? (n ? `${r}-desc` : void 0), E = d?.messageID ?? (d?.message ? `${r}-status` : void 0);
	Ll("Field", "isOptional and isRequired are mutually exclusive. isOptional takes precedence.", s && c);
	let D = /*#__PURE__*/ (0, W.jsx)(Au, {
		label: e,
		inputID: r,
		labelID: i,
		isGroupLabel: a,
		isLabelHidden: t,
		isDisabled: l,
		isOptional: s,
		isRequired: c,
		labelIcon: u,
		labelTooltip: f,
		description: C ? void 0 : n,
		descriptionID: C ? void 0 : T
	}), O = d?.message && p !== "tooltip" ? /*#__PURE__*/ (0, W.jsx)(Pu, {
		type: d.type,
		message: d.message,
		id: E,
		variant: p,
		xstyle: p === "attached" ? zu.attachedStatusLayer : void 0
	}) : null;
	return C ? /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: b,
		...K(U("field", { layout: "horizontal-labels" }), w(zu.horizontalLabels, h), _, y),
		...x,
		children: [/*#__PURE__*/ (0, W.jsx)("div", {
			className: "x1enrzb7",
			children: D
		}), /*#__PURE__*/ (0, W.jsxs)("div", {
			className: "x78zum5 xdt5ytf xc8icb0 x19nvjgn xlumz0n x1qs65gq",
			children: [
				n && /*#__PURE__*/ (0, W.jsx)(lo, {
					type: "supporting",
					display: "block",
					id: T,
					children: n
				}),
				g,
				O
			]
		})]
	}) : /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: b,
		...K(U("field"), w(zu.container, !t && zu.containerGap, m != null && Bu.width(m), h), _, y),
		...x,
		children: [D, p === "attached" ? /*#__PURE__*/ (0, W.jsxs)("div", {
			className: "x78zum5 xdt5ytf xc8icb0 x19nvjgn xlumz0n x1qs65gq",
			children: [g, O]
		}) : /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [g, O] })]
	});
}
Vu.displayName = "Field";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Slider/Slider.js
var Hu = 20, Uu = {
	track: {
		kVAEAm: "x10l6tqk",
		kWkggS: "xdsb6cv",
		kaIpWk: "xjspbzw",
		$$css: !0
	},
	trackHorizontal: {
		kLqNvP: "x1o0tod",
		kt4wiu: "xtijo5x",
		kZKoxP: "xqu0tyb",
		k87sOh: "xwa60dl",
		k3aq6I: "x1cb1t30",
		$$css: !0
	},
	trackVertical: {
		k87sOh: "x13vifvy",
		krVfgx: "x1ey2m1c",
		kzqmXN: "x51ohtg",
		$$css: !0
	},
	filledTrack: {
		kVAEAm: "x10l6tqk",
		kWkggS: "x1ewilqj",
		kaIpWk: "xjspbzw",
		$$css: !0
	},
	filledTrackHorizontal: {
		kZKoxP: "xqu0tyb",
		k87sOh: "xwa60dl",
		k3aq6I: "x1cb1t30",
		$$css: !0
	},
	filledTrackVertical: {
		kzqmXN: "x51ohtg",
		$$css: !0
	},
	thumb: {
		kVAEAm: "x10l6tqk",
		kzqmXN: "xw4jnvo",
		kZKoxP: "x1qx5ct2",
		kaIpWk: "xjspbzw",
		kWkggS: "x1ewilqj",
		k3aq6I: "x11lhmoz",
		k1ekBW: "x106061f",
		kIyJzY: "xuedmi6 x12w9bfk",
		kAMwcw: "xlr8y92",
		kI3sdo: "x1a2a7pz",
		kkrTdU: "x1jm3nie x16khyan",
		kY2c9j: "x1vjfegm",
		$$css: !0
	},
	thumbHorizontal: {
		k87sOh: "xwa60dl",
		k3aq6I: "x11lhmoz xoffwj3",
		$$css: !0
	},
	thumbHover: {
		kWkggS: "x1ewilqj xvxo0qp",
		$$css: !0
	},
	thumbPressed: {
		kKwaWg: "xpl5ynk",
		$$css: !0
	},
	thumbDisabled: {
		kWkggS: "xwmxj5m",
		kkrTdU: "xt0e3qv",
		$$css: !0
	}
};
function Wu(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Gu(e) {
	if (Math.abs(e) < 1) {
		let t = e.toExponential().split("e-");
		if (t.length === 2) return (t[0].split(".")[1]?.length ?? 0) + parseInt(t[1], 10);
	}
	let t = String(e).split(".")[1];
	return t ? t.length : 0;
}
function Ku(e, t, n) {
	if (n <= 0) return e;
	let r = t + Math.round((e - t) / n) * n, i = Math.min(Math.max(Gu(t), Gu(n)), 20);
	return Number(r.toFixed(i));
}
function qu(e, t, n) {
	return n === t ? 0 : (e - t) / (n - t) * 100;
}
var Ju = Hu / 2;
function Yu(e) {
	return Qu(e, Ju - e / 100 * Hu);
}
function Xu(e, t) {
	let n = t - e;
	return Qu(n, -(n / 100) * Hu);
}
function Zu(e, t) {
	let n = t - Hu;
	return n > 0 ? (e - Ju) / n : t > 0 ? e / t : 0;
}
function Qu(e, t) {
	let n = (e) => Number(e.toFixed(3));
	return `calc(${n(e)}% ${t < 0 ? "-" : "+"} ${Math.abs(n(t))}px)`;
}
function Y({ ref: e, ...t }) {
	let { label: n, isLabelHidden: r = !1, description: i, isDisabled: a = !1, disabledMessage: o, isOptional: s = !1, isRequired: c = !1, status: l, labelTooltip: u, min: d = 0, max: f = 100, step: p = 1, orientation: m = "horizontal", formatValue: h, htmlName: g, valueDisplay: _ = "tooltip", marks: y, width: b, xstyle: x, className: S, style: C, "data-testid": T, value: E, onChange: D, onChangeEnd: O } = t, k = Array.isArray(E), A = k && "minStepsBetweenThumbs" in t ? t.minStepsBetweenThumbs ?? 0 : 0, j = m === "horizontal", M = (0, v.useId)(), N = (0, v.useId)(), P = (0, v.useId)(), F = (0, v.useId)(), ee = (0, v.useId)(), I = (0, v.useRef)(null), te = (0, v.useRef)(null), [L, ne] = (0, v.useState)(null), [R, re] = (0, v.useState)(null);
	Wi();
	let ie = (0, v.useCallback)((e, t) => {
		re(!a && Gi() === "keyboard" ? e : null);
	}, [a]), ae = (0, v.useCallback)((e) => {
		re(null);
	}, []), oe = a && !!o, se = wa({
		placement: "above",
		focusTrigger: "always",
		isEnabled: oe
	}), ce = c && !s, le = [];
	i && le.push(P), l?.message && le.push(F), ce && le.push(ee), oe && le.push(se.describedBy);
	let ue = le.length > 0 ? le.join(" ") : void 0, z = (0, v.useMemo)(() => (Array.isArray(E) ? E : [E ?? d]).map((e) => Wu(e, d, f)), [
		E,
		d,
		f
	]), B = (0, v.useRef)(z);
	B.current = z;
	let V = (0, v.useCallback)((e, t) => {
		let n = I.current;
		if (!n) return d;
		let r = n.getBoundingClientRect(), i;
		return i = j ? Zu(Rc(n) ? r.right - e : e - r.left, r.width) : 1 - Zu(t - r.top, r.height), i = Wu(i, 0, 1), Wu(Ku(d + i * (f - d), d, p), d, f);
	}, [
		d,
		f,
		p,
		j
	]), de = (0, v.useCallback)((e) => {
		if (!k) return 0;
		let [t, n] = z;
		return Math.abs(e - t) <= Math.abs(e - n) ? 0 : 1;
	}, [k, z]), fe = (0, v.useCallback)((e, t) => {
		if (a) return;
		let n = Wu(Ku(t, d, p), d, f);
		if (k) {
			let t = [...z];
			t[e] = n;
			let r = A * p;
			e === 0 ? t[0] = Math.min(t[0], t[1] - r) : t[1] = Math.max(t[1], t[0] + r), t[0] = Wu(t[0], d, f), t[1] = Wu(t[1], d, f), D?.(t);
		} else D?.(n);
	}, [
		a,
		k,
		z,
		d,
		f,
		p,
		A,
		D
	]), pe = (0, v.useRef)(O);
	pe.current = O;
	let me = (0, v.useCallback)((e) => {
		let t = e ?? B.current, n = pe.current;
		k ? n?.(t) : n?.(t[0]);
	}, [k]), H = (0, v.useCallback)((e) => {
		if (a) return;
		e.preventDefault();
		let t = e.target.closest("[data-mark-value]"), n = t ? Number(t.dataset.markValue) : V(e.clientX, e.clientY), r = I.current?.querySelectorAll("[role=\"slider\"]"), i = e.target.closest("[role=\"slider\"]"), o = i == null || r == null ? -1 : Array.from(r).indexOf(i), s = o >= 0 ? o : de(n);
		te.current = s, ne(s), fe(s, n), r?.[s]?.focus(), re(null), typeof e.currentTarget.setPointerCapture == "function" && e.currentTarget.setPointerCapture(e.pointerId);
	}, [
		a,
		V,
		de,
		fe
	]), he = (0, v.useCallback)((e) => {
		if (te.current === null || a) return;
		let t = V(e.clientX, e.clientY);
		fe(te.current, t);
	}, [
		a,
		V,
		fe
	]), ge = (0, v.useCallback)((e) => {
		te.current !== null && (te.current = null, ne(null), me());
	}, [me]), _e = (0, v.useCallback)((e, t) => {
		if (a) return;
		t.key !== "Shift" && !t.metaKey && !t.altKey && !t.ctrlKey && Gi() === "keyboard" && re(e);
		let n = z[e], r;
		switch (t.key) {
			case "ArrowRight":
			case "ArrowUp":
				r = n + p;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				r = n - p;
				break;
			case "PageUp":
				r = n + p * 10;
				break;
			case "PageDown":
				r = n - p * 10;
				break;
			case "Home":
				r = d;
				break;
			case "End":
				r = f;
				break;
			default: return;
		}
		t.preventDefault();
		let i = Wu(Ku(r, d, p), d, f);
		if (fe(e, r), k) {
			let t = [...z];
			t[e] = i;
			let n = A * p;
			e === 0 ? t[0] = Math.min(t[0], t[1] - n) : t[1] = Math.max(t[1], t[0] + n), t[0] = Wu(t[0], d, f), t[1] = Wu(t[1], d, f), me(t);
		} else me([i]);
	}, [
		a,
		k,
		z,
		p,
		d,
		f,
		A,
		fe,
		me
	]), ve = (e) => h ? h(e) : String(e), ye = (e) => {
		let t = z[e], n = qu(t, d, f), r = j ? { insetInlineStart: Yu(n) } : {
			bottom: Yu(n),
			left: "50%"
		}, i = k ? e === 0 ? "Minimum value" : "Maximum value" : void 0, o = A * p, s = k && e === 1 ? Wu(z[0] + o, d, f) : d, c = k && e === 0 ? Wu(z[1] - o, d, f) : f, u = _ === "tooltip" && !oe, g = j ? "above" : "start", v = /*#__PURE__*/ (0, W.jsx)("div", {
			id: k ? void 0 : M,
			role: "slider",
			tabIndex: a && !oe ? -1 : 0,
			"aria-valuemin": s,
			"aria-valuemax": c,
			"aria-valuenow": t,
			"aria-valuetext": h ? h(t) : void 0,
			"aria-orientation": m,
			"aria-disabled": a || void 0,
			"aria-invalid": l?.type === "error" || void 0,
			"aria-label": i,
			"aria-labelledby": k ? void 0 : N,
			"aria-describedby": ue,
			onKeyDown: (t) => _e(e, t),
			onFocus: (t) => ie(e, t),
			onBlur: ae,
			...K(U("slider-thumb", {
				orientation: m,
				disabled: a ? "disabled" : null
			}), w(Uu.thumb, j ? Uu.thumbHorizontal : Za.centerInline("50%"), !a && Uu.thumbHover, !a && L === e && Uu.thumbPressed, !a && R === e && to.focusVisible, a && Uu.thumbDisabled), void 0, r)
		}, e);
		return u ? /*#__PURE__*/ (0, W.jsx)(ol, {
			content: ve(t),
			placement: g,
			delay: 0,
			focusTrigger: "always",
			isOpen: L === e || void 0,
			children: v
		}, e) : v;
	}, be = (() => {
		if (k) {
			let [e, t] = z, n = qu(e, d, f), r = qu(t, d, f);
			return j ? {
				insetInlineStart: Yu(n),
				width: Xu(n, r)
			} : {
				bottom: Yu(n),
				height: Xu(n, r)
			};
		}
		let e = qu(z[0], d, f);
		return j ? {
			insetInlineStart: "0%",
			width: Yu(e)
		} : {
			bottom: "0%",
			height: Yu(e)
		};
	})(), xe = _ === "text" ? /*#__PURE__*/ (0, W.jsx)("span", {
		className: "x9ynric xcr08ib x1tgivj0 xuxw1ft x2lah0s",
		children: k ? `${ve(z[0])} – ${ve(z[1])}` : ve(z[0])
	}) : null;
	return /*#__PURE__*/ (0, W.jsxs)(Vu, {
		"data-testid": T,
		label: n,
		isLabelHidden: r,
		description: i,
		inputID: M,
		labelID: N,
		isGroupLabel: !0,
		descriptionID: i ? P : void 0,
		isOptional: s,
		isRequired: c,
		isDisabled: a,
		status: l ? {
			type: l.type,
			message: l.message,
			messageID: l.message ? F : void 0
		} : void 0,
		labelTooltip: u,
		statusVariant: "detached",
		width: b,
		xstyle: x,
		className: S,
		style: C,
		children: [
			/*#__PURE__*/ (0, W.jsxs)("div", {
				...K(U("slider", {
					orientation: m,
					disabled: a ? "disabled" : null
				}), { className: "x78zum5 x6s0dn4 x1txdalj" }),
				children: [
					g != null && z.map((e, t) => /*#__PURE__*/ (0, W.jsx)("input", {
						type: "hidden",
						name: g,
						value: String(e),
						disabled: a
					}, t === 0 ? "start" : "end")),
					/*#__PURE__*/ (0, W.jsxs)("div", {
						ref: io(e, I, se.ref),
						...k ? {
							role: "group",
							"aria-labelledby": N
						} : void 0,
						onPointerDown: H,
						onPointerMove: he,
						onPointerUp: ge,
						onPointerCancel: ge,
						...K(U("slider-control", {
							orientation: m,
							disabled: a ? "disabled" : null
						}), {
							0: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k x1ypdohk x16khyan" },
							2: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 x1ypdohk x16khyan" },
							1: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k xbyyjgo xt0e3qv" },
							3: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 xbyyjgo xt0e3qv" }
						}[!!j << 1 | !!a << 0]),
						children: [
							/*#__PURE__*/ (0, W.jsx)("div", {
								"aria-hidden": "true",
								...K(U("slider-track", { orientation: m }), w(Uu.track, j ? Uu.trackHorizontal : [Uu.trackVertical, Za.centerInline("0px")]))
							}),
							/*#__PURE__*/ (0, W.jsx)("div", {
								"aria-hidden": "true",
								...K(w(Uu.filledTrack, j ? Uu.filledTrackHorizontal : [Uu.filledTrackVertical, Za.centerInline("0px")]), { style: be })
							}),
							y && /*#__PURE__*/ (0, W.jsx)("div", {
								"aria-hidden": "true",
								...{
									0: { className: "x10l6tqk x13vifvy x1ey2m1c xbudbmw" },
									1: { className: "x10l6tqk x1o0tod xtijo5x xwa60dl" }
								}[!!j << 0],
								children: y.map((e) => {
									let t = qu(e.value, d, f), n = j ? { insetInlineStart: Yu(t) } : { bottom: Yu(t) }, r = k ? e.value >= z[0] && e.value <= z[1] : e.value <= z[0];
									return /*#__PURE__*/ (0, W.jsxs)("div", { children: [/*#__PURE__*/ (0, W.jsx)("div", {
										"data-testid": "slider-mark",
										"data-mark-value": e.value,
										...K({
											0: { className: "x10l6tqk xdsb6cv xjspbzw x36qwtl x1xc55vz x1m9mm8y" },
											2: { className: "x10l6tqk xdsb6cv xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3" },
											1: { className: "x10l6tqk xjspbzw x36qwtl x1xc55vz x1m9mm8y x1ewilqj" },
											3: { className: "x10l6tqk xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3 x1ewilqj" }
										}[!!j << 1 | !!r << 0], { style: n })
									}), e.label && /*#__PURE__*/ (0, W.jsx)("span", {
										"data-testid": "slider-mark-label",
										"data-mark-value": e.value,
										...K({
											0: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft x131p8rn x9p6ekw" },
											1: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft xuuh30 x1nyx83j xuivejd" }
										}[!!j << 0], { style: n }),
										children: e.label
									})] }, e.value);
								})
							}),
							z.map((e, t) => ye(t))
						]
					}),
					xe
				]
			}),
			ce && /*#__PURE__*/ (0, W.jsx)(Xs, {
				id: ee,
				children: "Required"
			}),
			oe && se.renderTooltip(o)
		]
	});
}
Y.displayName = "Slider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Popover/usePopover.js
var X = "[data-astryx-popover-fallback-close]";
function $u(e) {
	try {
		e.focus();
	} catch {}
	return document.activeElement === e;
}
function ed(e) {
	let t = Array.from(e.querySelectorAll(ml)).filter((e) => e.closest(X) == null);
	for (let e of t) if ($u(e)) return !0;
	return !1;
}
var td = {
	surface: {
		kWkggS: "x1prclbq",
		"--_popover-radius": "xiki222",
		kaIpWk: "x11m9jtl",
		kGVxlE: "x1i5ehqx",
		$$css: !0
	},
	contentWrapper: {
		kVAEAm: "x1n2onr6",
		$$css: !0
	},
	closeButtonWrapper: {
		kVAEAm: "x10l6tqk",
		krVfgx: "x1ey2m1c",
		kY2c9j: "x1vjfegm",
		kzqmXN: "x1i1rx1s x10okhzq",
		kZKoxP: "xjm9jq1 x132qfvm",
		kVQacm: "xb3r6kr x1dordxg",
		kz4h6p: "x1hyvwdk x10wafsz",
		kfzvcC: "x47corl xbt4iw",
		kLKAdn: "xexx8yu x1kw28su",
		$$css: !0
	}
};
function nd(e = {}) {
	let { onShow: t, onHide: n, xstyle: r, className: i, style: a, hasLightDismiss: o = !0, hasEscapeDismiss: s = !0, hasAutoFocus: c = !0, hasSurface: l = !0, surfaceTarget: u, hasCloseButton: d = !0, closeButtonLabel: f, dialogLabel: p, role: m = "dialog", isModal: h = !0 } = e, g = Fs(), _ = f ?? g("@astryx.popover.close"), y = (0, v.useRef)(null), b = (0, v.useRef)(!1), x = Bi({
		mode: "context",
		lightDismiss: o,
		onShow: t,
		onHide: n
	}), { containerRef: S, focusFirst: C } = Sl({
		isActive: x.isOpen,
		onEscape: s || o ? x.hide : void 0
	}), T = (0, v.useCallback)(() => {
		let e = S.current;
		if (e && !ed(e)) {
			if (m === "dialog") {
				$u(e);
				return;
			}
			C();
		}
	}, [
		S,
		C,
		m
	]);
	(0, v.useEffect)(() => {
		x.isOpen && c && !b.current && requestAnimationFrame(T), x.isOpen || (b.current = !1);
	}, [
		x.isOpen,
		c,
		T
	]);
	let E = (0, v.useCallback)((e) => {
		y.current = e, x.ref(e);
	}, [x]), D = (0, v.useCallback)((e) => {
		b.current = e?.skipAutoFocus ?? !1, x.show();
	}, [x]), O = (0, v.useCallback)(() => {
		x.isOpen ? x.hide() : D();
	}, [x, D]), k = {
		"aria-haspopup": m === "dialog" ? "dialog" : "true",
		"aria-expanded": x.isOpen,
		"aria-controls": x.id
	};
	Ll("usePopover", "role=\"dialog\" without a `dialogLabel` renders an unnamed dialog. Pass `dialogLabel`, or use `role: \"none\"` for listbox/menu popups whose content already carries its own role.", m === "dialog" && !p);
	let A = (0, v.useCallback)((e, t) => {
		let n = U("popover", void 0, { legacyNames: ["popover-surface"] }), o = u != null && u !== "popover" ? `${n.className} ${dn(u)}` : n.className;
		return x.render(/*#__PURE__*/ (0, W.jsx)(G, { children: /*#__PURE__*/ (0, W.jsxs)("div", {
			ref: S,
			role: m === "dialog" ? "dialog" : void 0,
			"aria-modal": m === "dialog" && h ? !0 : void 0,
			"aria-label": m === "dialog" ? p : void 0,
			tabIndex: m === "dialog" ? -1 : void 0,
			...K({
				...n,
				className: o
			}, ro.focusVisible(td.contentWrapper, l && td.surface, r), i, a),
			children: [e, d && /*#__PURE__*/ (0, W.jsx)("div", {
				"data-astryx-popover-fallback-close": "",
				...w(td.closeButtonWrapper, Za.centerInline("100%")),
				children: /*#__PURE__*/ (0, W.jsx)(Cc, {
					variant: "secondary",
					label: _,
					onClick: x.hide
				})
			})]
		}) }), {
			...t,
			xstyle: t?.xstyle
		});
	}, [
		x,
		d,
		l,
		u,
		i,
		a,
		_,
		S,
		p,
		m,
		h,
		r
	]);
	return {
		triggerRef: E,
		contentRef: S,
		anchorId: x.anchorId,
		show: D,
		hide: x.hide,
		toggle: O,
		isOpen: x.isOpen,
		id: x.id,
		render: A,
		triggerProps: k
	};
}
function rd(e = {}) {
	return nd(e);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Item/ItemDescriptionContext.js
var id = /*#__PURE__*/ (0, v.createContext)(null);
id.displayName = "ItemDescriptionContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Link/computeTargetAndRel.js
var ad = ["noopener", "noreferrer"];
function od(e, t) {
	if (e !== "_blank") return {
		target: e,
		rel: t
	};
	let n = t?.split(/\s+/).filter(Boolean) ?? [];
	for (let e of ad) n.includes(e) || n.push(e);
	return {
		target: e,
		rel: n.join(" ")
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Item/Item.js
var sd = /* @__PURE__ */ new Set([
	"option",
	"tab",
	"row",
	"gridcell",
	"columnheader",
	"rowheader",
	"treeitem"
]), cd = {
	root: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		"--_item-inset-inline": "xw1s368",
		kg3NbH: "xaip428",
		kVAEAm: "x1n2onr6",
		kB7OPa: "x9f619",
		k9WMMc: "x1yc453h",
		kaIpWk: "xh6dtrn",
		$$css: !0
	},
	alignStart: {
		kGNEyG: "x1cy8zhl",
		$$css: !0
	},
	interactive: {
		kkrTdU: "x1ypdohk x16khyan",
		k1ekBW: "x15406qy",
		kIyJzY: "xkvfbh3",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	highlighted: {
		kWkggS: "x1lmrjuc",
		$$css: !0
	},
	selected: {
		kWkggS: "xgcxg3y",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kfzvcC: "x47corl",
		$$css: !0
	},
	inlineLabel: {
		kmuXW: "x2lah0s",
		$$css: !0
	},
	inlineDescription: {
		kmuXW: "xs83m0k",
		k7Eaqz: "xeuugli",
		$$css: !0
	},
	label: {
		kMwMTN: "x5tbw38",
		kGuDYH: "xjm74w1",
		kLWn49: "xw6l6zx",
		$$css: !0
	},
	labelSingleTruncate: {
		kVQacm: "xb3r6kr",
		kg5iWk: "xlyipyv",
		khDVqt: "xuxw1ft",
		$$css: !0
	},
	labelMultiTruncate: {
		kVQacm: "xb3r6kr",
		k1xSpc: "x104kibb",
		kgKLqz: "x1ua5tub",
		$$css: !0
	},
	description: {
		kMwMTN: "x1gb3s7i",
		kGuDYH: "x141an7d",
		kLWn49: "x1ltkj2j",
		$$css: !0
	},
	descriptionSingleTruncate: {
		kVQacm: "xb3r6kr",
		kg5iWk: "xlyipyv",
		khDVqt: "xuxw1ft",
		$$css: !0
	},
	descriptionMultiTruncate: {
		kVQacm: "xb3r6kr",
		k1xSpc: "x104kibb",
		kgKLqz: "x1ua5tub",
		$$css: !0
	}
}, ld = { lineClamp: (e) => [{
	kJFfOR: e == null ? e : "x1yhjpo9",
	$$css: !0
}, { "--x-WebkitLineClamp": e ?? void 0 }] }, ud = {
	compact: {
		k8WAf4: "xu0wf1k",
		$$css: !0
	},
	balanced: {
		k8WAf4: "xce4md1",
		$$css: !0
	},
	spacious: {
		k8WAf4: "x8o8v82",
		"--_item-inset-inline": "x1ytau7y",
		$$css: !0
	}
};
function dd({ as: e = "div", marker: t, startContent: n, label: r, description: i, endContent: a, align: o = "center", density: s = "balanced", labelLines: c, descriptionLines: l, layout: u = "stacked", onClick: d, interactiveRef: f, href: p, target: m, rel: h, isHighlighted: g = !1, isSelected: _ = !1, isDisabled: y = !1, xstyle: b, className: x, style: S, ref: C, role: T, ...E }) {
	let D = pc(), O = f != null, k = (0, v.useRef)(null), { onClick: A } = Cu({
		containerRef: k,
		interactiveRef: f ?? void 0,
		disabled: y
	});
	Ll("Item", "`interactiveRef` is mutually exclusive with `onClick`/`href`. In delegation mode the row only forwards clicks to the referenced control, so `onClick`/`href` are ignored. Drop one of them.", O && (d != null || p != null));
	let j = d != null || p != null || O, { target: M, rel: N } = od(m, h), P = T != null, F = T != null && sd.has(T), ee = (0, v.useId)(), I = Ya(i), te = typeof r == "string", L = typeof i == "string", ne = c == null ? te ? cd.labelSingleTruncate : null : c === 1 ? cd.labelSingleTruncate : cd.labelMultiTruncate, R = u === "inline" && i != null, re = l == null ? L || R ? cd.descriptionSingleTruncate : null : l === 1 ? cd.descriptionSingleTruncate : cd.descriptionMultiTruncate, ie = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)("span", {
		...w(cd.label, R && cd.inlineLabel, ne, c != null && c > 1 && ld.lineClamp(c)),
		children: r
	}), i != null && /*#__PURE__*/ (0, W.jsx)("span", {
		id: I ? ee : void 0,
		...w(cd.description, R && cd.inlineDescription, re, l != null && l > 1 && ld.lineClamp(l)),
		children: i
	})] }), ae = (e) => {
		y || e.target.closest("button, a, input, select, textarea") || d?.(e);
	}, oe = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [
		t,
		n != null && /*#__PURE__*/ (0, W.jsx)("span", {
			className: "x3psx0u x78zum5",
			children: n
		}),
		P || O ? /*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h" },
				2: { className: "x78zum5 x98rzlu xeuugli x1yc453h x1q0g3np x6s0dn4 x1lfs0n9" },
				1: { className: "x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h xbyyjgo" },
				3: { className: "x78zum5 x98rzlu xeuugli x1yc453h x1q0g3np x6s0dn4 x1lfs0n9 xbyyjgo" }
			}[!!R << 1 | !!y << 0],
			children: ie
		}) : p == null ? d == null ? /*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h" },
				2: { className: "x78zum5 x98rzlu xeuugli x1yc453h x1q0g3np x6s0dn4 x1lfs0n9" },
				1: { className: "x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h xbyyjgo" },
				3: { className: "x78zum5 x98rzlu xeuugli x1yc453h x1q0g3np x6s0dn4 x1lfs0n9 xbyyjgo" }
			}[!!R << 1 | !!y << 0],
			children: ie
		}) : /*#__PURE__*/ (0, W.jsx)("button", {
			type: "button",
			onClick: d,
			disabled: y,
			...{
				0: { className: "xmper1u x16khyan x1heor9g x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h x1a2a7pz" },
				2: { className: "xmper1u x16khyan x1heor9g x78zum5 x98rzlu xeuugli x1yc453h x1a2a7pz x1q0g3np x6s0dn4 x1lfs0n9" },
				1: { className: "xmper1u x16khyan x1heor9g x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h x1a2a7pz xbyyjgo" },
				3: { className: "xmper1u x16khyan x1heor9g x78zum5 x98rzlu xeuugli x1yc453h x1a2a7pz x1q0g3np x6s0dn4 x1lfs0n9 xbyyjgo" }
			}[!!R << 1 | !!y << 0],
			children: ie
		}) : /*#__PURE__*/ (0, W.jsx)(D, {
			href: p,
			target: M,
			rel: N,
			"aria-disabled": y || void 0,
			tabIndex: y ? -1 : void 0,
			...{
				0: { className: "xmper1u x16khyan x1heor9g x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h x1hl2dhg x1a2a7pz" },
				2: { className: "xmper1u x16khyan x1heor9g x78zum5 x98rzlu xeuugli x1yc453h x1hl2dhg x1a2a7pz x1q0g3np x6s0dn4 x1lfs0n9" },
				1: { className: "xmper1u x16khyan x1heor9g x78zum5 xdt5ytf x98rzlu xeuugli x1yc453h x1hl2dhg x1a2a7pz xbyyjgo" },
				3: { className: "xmper1u x16khyan x1heor9g x78zum5 x98rzlu xeuugli x1yc453h x1hl2dhg x1a2a7pz x1q0g3np x6s0dn4 x1lfs0n9 xbyyjgo" }
			}[!!R << 1 | !!y << 0],
			children: ie
		}),
		a != null && /*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "x3psx0u x78zum5 xvc5jky" },
				1: { className: "x3psx0u x78zum5 xvc5jky xbyyjgo" }
			}[!!y << 0],
			children: a
		})
	] }), se = io(C, k);
	return /*#__PURE__*/ (0, W.jsx)(e, {
		ref: O ? se : C,
		...E,
		"aria-selected": F && _ || void 0,
		"aria-current": E["aria-current"] ?? (_ && !F ? !0 : void 0),
		"aria-disabled": y || void 0,
		...K(U("item", {
			density: s,
			align: o
		}), ro.focusWithin(cd.root, ud[s], o === "start" && cd.alignStart, j && cd.interactive, j && mc.backgroundColor, g && cd.highlighted, _ && cd.selected, y && !P && cd.disabled, b), x, S),
		role: T,
		onClick: O ? A : P ? d : j ? ae : void 0,
		children: /*#__PURE__*/ (0, W.jsx)(id, {
			value: I ? ee : null,
			children: oe
		})
	});
}
dd.displayName = "Item";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/DropdownMenuContext.js
var fd = ei(null);
fd.displayName = "DropdownMenuContext";
function pd() {
	return (0, v.use)(fd);
}
var md = /*#__PURE__*/ (0, v.createContext)(null);
md.displayName = "DropdownMenuRadioGroupContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/menuItemHover.js
function hd(e, t) {
	if (t || e.pointerType !== "mouse") return;
	let n = e.currentTarget;
	n !== n.ownerDocument.activeElement && n.focus({ preventScroll: !0 });
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/DropdownMenuItem.js
var gd = {
	root: {
		kB7OPa: "x9f619",
		kzqmXN: "xh8yej3",
		k8WAf4: "xce4md1",
		kg3NbH: "xf314gf",
		kaIpWk: "x1ws5lxm",
		kMv6JI: "x9ynric",
		kGuDYH: "xcr08ib",
		kMwMTN: "x1tgivj0",
		kWkggS: "xjbqb8w x1c52tdz x1anq1lc",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kkrTdU: "x1ypdohk x16khyan",
		k9WMMc: "x1yc453h",
		kI3sdo: "x1a2a7pz",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		kkrTdU: "xt0e3qv",
		$$css: !0
	},
	destructive: {
		kMwMTN: "xjt36v0",
		"--_item-label-color": "xufyqxy",
		"--_item-description-color": "xqlix59",
		$$css: !0
	}
}, _d = {
	sm: {
		k8WAf4: "xu0wf1k",
		kg3NbH: "xf314gf",
		$$css: !0
	},
	md: {
		k8WAf4: "x1vofgu7",
		$$css: !0
	},
	lg: { $$css: !0 }
};
function vd({ icon: e, label: t, description: n, onClick: r, isDisabled: i = !1, endContent: a, hasCloseOnSelect: o = !0, variant: s = "default", xstyle: c, className: l, style: u, ref: d }) {
	let f = pd(), p = f?.menuSize ?? "md", m = (0, v.useCallback)(() => {
		i || (r?.(), o && f?.closeMenu());
	}, [
		i,
		r,
		o,
		f
	]), h = (0, v.useCallback)((e) => hd(e, i), [i]), g = s === "destructive";
	return /*#__PURE__*/ (0, W.jsx)(dd, {
		ref: d,
		role: "menuitem",
		tabIndex: i ? void 0 : -1,
		onPointerMove: h,
		startContent: e ? Fc(e, {
			size: "sm",
			color: g ? "error" : "secondary"
		}) : void 0,
		label: t,
		description: n,
		endContent: a,
		onClick: m,
		isDisabled: i,
		xstyle: [
			gd.root,
			_d[p],
			g && gd.destructive,
			i && gd.disabled,
			c
		],
		...K(U("dropdown-menu-item", {
			size: p,
			variant: g ? "destructive" : null
		}), {
			className: l,
			style: u
		})
	});
}
vd.displayName = "DropdownMenuItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Divider/Divider.js
var yd = {
	horizontal: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kzqmXN: "xh8yej3",
		$$css: !0
	},
	vertical: {
		k1xSpc: "x3nfvp2",
		kXwgrk: "xdt5ytf",
		kGNEyG: "x6s0dn4",
		kZKoxP: "x5yr21d",
		$$css: !0
	}
}, bd = {
	horizontalLine: {
		kZKoxP: "xsyqizj",
		kzQI83: "x1iyjqo2",
		kmuXW: "xs83m0k",
		$$css: !0
	},
	verticalLine: {
		kzqmXN: "xjk4fl7",
		kzQI83: "x1iyjqo2",
		kmuXW: "xs83m0k",
		$$css: !0
	},
	subtle: {
		kWkggS: "x1m4xfpy",
		$$css: !0
	},
	strong: {
		kWkggS: "x7njt3n",
		$$css: !0
	}
}, xd = {
	horizontal: {
		keTefX: "xojxgvx",
		k71WvV: "x1fcf3bl",
		kzqmXN: "xx6qvi6",
		$$css: !0
	},
	vertical: {
		keoZOQ: "x1sa9bsh",
		k1K539: "x6h7pi7",
		kZKoxP: "x12qplqi",
		$$css: !0
	}
};
function Sd({ orientation: e = "horizontal", label: t, variant: n = "subtle", isFullBleed: r = !1, xstyle: i, className: a, style: o, ref: s, "aria-label": c, "aria-labelledby": l, ...u }) {
	let d = e === "horizontal", f = (0, v.useId)(), p = l ?? (t && c == null ? f : void 0);
	return /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: s,
		...u,
		role: "separator",
		"aria-orientation": e,
		"aria-label": c,
		"aria-labelledby": p,
		...K(U("divider", {
			variant: n,
			orientation: e
		}), w(d ? yd.horizontal : yd.vertical, r && (d ? xd.horizontal : xd.vertical), i), a, o),
		children: [
			/*#__PURE__*/ (0, W.jsx)("div", { ...w(d ? bd.horizontalLine : bd.verticalLine, bd[n]) }),
			t && /*#__PURE__*/ (0, W.jsx)("div", {
				id: f,
				...{
					0: { className: "x2lah0s xrrkdod x141an7d x1ltkj2j xv1l7n4" },
					1: { className: "x2lah0s x141an7d x1ltkj2j xv1l7n4 xnjsko4 x8o8v82" }
				}[!d << 0],
				children: t
			}),
			t && /*#__PURE__*/ (0, W.jsx)("div", { ...w(d ? bd.horizontalLine : bd.verticalLine, bd[n]) })
		]
	});
}
Sd.displayName = "Divider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/DropdownMenuDivider.js
var Cd = { divider: {
	kqGvvJ: "xsq74q5",
	$$css: !0
} }, wd = U("dropdown-menu-divider").className;
function Td({ xstyle: e, className: t, style: n, ref: r }) {
	return /*#__PURE__*/ (0, W.jsx)(Sd, {
		ref: r,
		xstyle: [Cd.divider, e],
		className: t ? `${wd} ${t}` : wd,
		style: n
	});
}
Td.displayName = "DropdownMenuDivider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useMenuHover.js
var Ed = 500, Dd = 300;
function Od(e) {
	let { show: t, hide: n, isOpen: r, isEnabled: i, showDelay: a = 150, hideDelay: o = 200, clickGuardMs: s = Ed, itemSelector: c, popoverId: l, ownsFocus: u = !0 } = e, d = kr("(hover: hover)"), f = (0, v.useRef)(null), p = (0, v.useRef)(null), m = (0, v.useRef)(null), h = (0, v.useRef)(!1), g = (0, v.useRef)(0), _ = (0, v.useRef)(0), b = (0, v.useRef)(r);
	y(() => {
		let e = b.current;
		b.current = r, e && !r && (h.current = !1, _.current = 0, g.current = Date.now());
	}, [r]);
	let x = (0, v.useCallback)(() => {
		f.current &&= (clearTimeout(f.current), null), p.current &&= (clearTimeout(p.current), null);
	}, []), S = (0, v.useRef)(() => {}), { listRef: C, handleKeyDown: w, focusFirst: T } = Hc({
		itemSelector: c,
		onEscape: () => S.current()
	}), E = (0, v.useCallback)(() => {
		let e = C.current?.contains(document.activeElement) ?? !1;
		n(), e && m.current?.focus();
	}, [n, C]);
	(0, v.useEffect)(() => {
		S.current = () => {
			x(), E();
		};
	}, [x, E]), (0, v.useEffect)(() => () => x(), [x]);
	let D = (0, v.useCallback)(() => {
		T() || C.current?.focus();
	}, [T, C]), O = (0, v.useCallback)(() => {
		if (!u) {
			t();
			return;
		}
		t({ skipAutoFocus: !0 }), D();
	}, [
		u,
		t,
		D
	]), k = (0, v.useCallback)(() => s > 0 && _.current > 0 && Date.now() - _.current < s && (h.current = !1, _.current = 0, !0), [s]), A = (0, v.useCallback)((e) => {
		if (l && e?.preventDefault(), x(), e != null && e.detail === 0) {
			g.current = 0, h.current = !1, _.current = 0, r ? u && D() : O();
			return;
		}
		if (!r) {
			g.current = 0, h.current = !1, _.current = 0, O();
			return;
		}
		if (k()) {
			u && D();
			return;
		}
		E();
	}, [
		l,
		x,
		r,
		u,
		k,
		O,
		D,
		E
	]), j = (0, v.useCallback)(() => {
		if (!d || g.current > 0 && Date.now() - g.current < Dd) return;
		if (r) {
			x();
			return;
		}
		h.current = !0, x();
		let e = () => {
			_.current = Date.now(), t({ skipAutoFocus: !0 });
		};
		a > 0 ? f.current = setTimeout(e, a) : e();
	}, [
		d,
		r,
		x,
		t,
		a
	]), M = (0, v.useCallback)(() => {
		g.current = 0, h.current && (x(), p.current = setTimeout(() => {
			n();
		}, o));
	}, [
		x,
		n,
		o
	]), N = (0, v.useCallback)(() => {
		x();
	}, [x]), P = (0, v.useCallback)((e) => {
		m.current = e;
	}, []), F = (0, v.useCallback)(() => {}, []), ee = (0, v.useCallback)((e) => {}, []), I = (0, v.useCallback)((e) => {}, []);
	return i ? {
		triggerProps: {
			onClick: A,
			onMouseEnter: j,
			onMouseLeave: M,
			...l ? { popoverTarget: l } : null
		},
		contentProps: {
			onMouseEnter: N,
			onMouseLeave: M,
			onKeyDown: w
		},
		menuRef: C,
		focusFirst: T,
		focusMenu: D,
		confirmHoverOpen: k,
		close: E,
		setTriggerEl: P
	} : {
		triggerProps: {
			onClick: F,
			onMouseEnter: F,
			onMouseLeave: F
		},
		contentProps: {
			onMouseEnter: F,
			onMouseLeave: F,
			onKeyDown: I
		},
		menuRef: C,
		focusFirst: T,
		focusMenu: D,
		confirmHoverOpen: k,
		close: E,
		setTriggerEl: ee
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/useMenuOverflow.js
function kd(e, t, n) {
	let [r, i] = (0, v.useState)(!1), a = (0, v.useCallback)(() => {
		let t = e.current;
		if (!t) return;
		let n = t.scrollHeight > t.clientHeight + 1;
		i((e) => e === n ? e : n);
	}, [e]);
	return y(() => {
		if (!n) return;
		let t = e.current;
		if (!t) return;
		a();
		let r = typeof ResizeObserver > "u" ? null : new ResizeObserver(a), i = typeof MutationObserver > "u" ? null : new MutationObserver(a);
		return r?.observe(t), i?.observe(t, {
			childList: !0,
			characterData: !0,
			subtree: !0
		}), t.addEventListener("load", a, !0), window.addEventListener("resize", a), window.visualViewport?.addEventListener("resize", a), () => {
			r?.disconnect(), i?.disconnect(), t.removeEventListener("load", a, !0), window.removeEventListener("resize", a), window.visualViewport?.removeEventListener("resize", a);
		};
	}, [
		n,
		a,
		e
	]), y(() => {
		n && a();
	}, [
		t,
		n,
		a
	]), r;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/menuWidth.js
var Ad = /* @__PURE__ */ new Set([
	"auto",
	"contain",
	"fit-content",
	"inherit",
	"initial",
	"max-content",
	"min-content",
	"revert",
	"revert-layer",
	"stretch",
	"unset"
]);
function jd(e, t) {
	if (typeof e == "number") return {
		property: "minWidth",
		value: `min(${e}px, ${t})`
	};
	let n = e.trim(), r = n.toLowerCase();
	return Ad.has(r) || r.startsWith("fit-content(") ? {
		property: "inlineSize",
		value: n
	} : {
		property: "minWidth",
		value: `min(${n}, ${t})`
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/menuItemRoles.js
var Md = /* @__PURE__ */ new Set([
	"menuitem",
	"menuitemradio",
	"menuitemcheckbox"
]), Nd = [...Md].map((e) => `[role="${e}"]:not([aria-disabled="true"])`).join(","), Pd = "[role=\"menu\"]", Fd = O["--spacing-4"];
`${Fd}${Fd}`;
var Id = `calc(100vw - ${Fd} - ${Fd})`;
`${Fd}${Fd}`, `${Fd}${Fd}`;
var Ld = {
	root: {
		kB7OPa: "x9f619",
		kzqmXN: "xh8yej3",
		k8WAf4: "xce4md1",
		kg3NbH: "xf314gf",
		kaIpWk: "x1ws5lxm",
		kMv6JI: "x9ynric",
		kGuDYH: "xcr08ib",
		kMwMTN: "x1tgivj0",
		kWkggS: "xjbqb8w x1c52tdz",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kkrTdU: "x1ypdohk x16khyan",
		k9WMMc: "x1yc453h",
		kI3sdo: "x1a2a7pz",
		$$css: !0
	},
	open: {
		kWkggS: "x1lmrjuc",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		kkrTdU: "xt0e3qv",
		$$css: !0
	}
}, Rd = {
	sm: {
		k8WAf4: "xu0wf1k",
		kg3NbH: "xf314gf",
		$$css: !0
	},
	md: {
		k8WAf4: "x1vofgu7",
		$$css: !0
	},
	lg: { $$css: !0 }
}, zd = {
	kzqmXN: "x1uyokj7",
	$$css: !0
}, Bd = {
	popoverViewport: {
		kB7OPa: "x9f619",
		kskxy: "x1hkkhfe",
		$$css: !0
	},
	popover: {
		k7Eaqz: "x12knhqr",
		$$css: !0
	},
	popoverCustomWidth: (e) => [{
		k7Eaqz: e == null ? e : "xkj4a21",
		$$css: !0
	}, { "--x-minWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }],
	popoverCustomIntrinsicWidth: (e) => [zd, { "--x-inlineSize": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }]
};
function Vd(e) {
	let { icon: t, label: n, description: r, isDisabled: i = !1, hasSpinner: a = !1, menuWidth: o, onOpenChange: s, children: c, xstyle: l, className: u, style: d, "data-testid": f, menuDataTestId: p } = e, m = pd(), h = m?.menuSize ?? "md", g = !i, _ = (0, v.useId)(), y = (0, v.useId)(), b = (0, v.useRef)(null), [x, S] = (0, v.useState)(!1), C = Bi({
		mode: "context",
		lightDismiss: !1,
		onShow: (0, v.useCallback)(() => {
			S(!0), s?.(!0);
		}, [s]),
		onHide: (0, v.useCallback)(() => {
			S(!1), s?.(!1);
		}, [s])
	}), w = (0, v.useCallback)(() => {
		g && C.show();
	}, [g, C]), T = (0, v.useCallback)(() => {
		C.hide();
	}, [C]), { listRef: E, handleKeyDown: D, focusFirst: k, focusItem: A, ownsEvent: j, getItems: M } = Hc({
		itemSelector: Nd,
		boundarySelector: Pd,
		wrap: !1,
		onEscape: () => L({ focusTrigger: !0 })
	}), N = kd(E, c, x), P = Il({
		getItemLabels: () => M().map((e) => e.textContent),
		onMatch: A,
		getCurrentIndex: () => M().findIndex((e) => e === document.activeElement || e.contains(document.activeElement))
	}), { triggerProps: F, contentProps: ee, confirmHoverOpen: I } = Od({
		show: w,
		hide: T,
		isOpen: x,
		isEnabled: g
	}), te = (0, v.useCallback)((e) => {
		g && (C.show(), e?.focusFirst && (k() || E.current?.focus()));
	}, [
		g,
		C,
		k,
		E
	]), L = (0, v.useCallback)((e) => {
		C.hide(), e?.focusTrigger !== !1 && b.current?.focus();
	}, [C]), ne = (0, v.useCallback)((e) => {
		b.current = e, C.ref(e);
	}, [C]), R = (0, v.useCallback)(() => {
		if (!i) {
			if (x) {
				if (I()) {
					k() || E.current?.focus();
					return;
				}
				L({ focusTrigger: !0 });
			} else te({ focusFirst: !0 });
		}
	}, [
		i,
		x,
		te,
		L,
		I,
		k,
		E
	]), re = (0, v.useCallback)((e) => {
		if (i) return;
		let t = typeof window < "u" && b.current && window.getComputedStyle(b.current).direction === "rtl" ? "ArrowLeft" : "ArrowRight";
		(e.key === t || e.key === "Enter" || e.key === " ") && (e.preventDefault(), e.stopPropagation(), te({ focusFirst: !0 }));
	}, [i, te]), ie = (0, v.useCallback)((e) => hd(e, i), [i]), ae = (0, v.useCallback)((e) => {
		if (!j(e)) return;
		if (e.key === "Escape") {
			e.preventDefault(), e.stopPropagation(), L({ focusTrigger: !0 });
			return;
		}
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			let t = document.activeElement;
			t && Md.has(t.getAttribute("role") ?? "") && t.click();
			return;
		}
		let t = typeof window < "u" && E.current && window.getComputedStyle(E.current).direction === "rtl" ? "ArrowRight" : "ArrowLeft";
		if (e.key === t) {
			e.preventDefault(), L({ focusTrigger: !0 });
			return;
		}
		if (P.onKeyDown(e)) {
			e.preventDefault();
			return;
		}
		D(e);
	}, [
		j,
		L,
		D,
		P,
		E
	]), oe = (0, v.useMemo)(() => ({
		menuSize: h,
		closeMenu: () => {
			L({ focusTrigger: !1 }), m?.closeMenu();
		}
	}), [
		h,
		L,
		m
	]), se = a ? /*#__PURE__*/ (0, W.jsx)("span", {
		className: "x78zum5 x6s0dn4",
		children: /*#__PURE__*/ (0, W.jsx)(Ys, { size: "sm" })
	}) : /*#__PURE__*/ (0, W.jsx)("span", {
		className: "x78zum5 x6s0dn4",
		children: /*#__PURE__*/ (0, W.jsx)(Nc, {
			icon: "chevronRight",
			size: "sm",
			color: "secondary",
			xstyle: Za.mirror,
			...U("dropdown-menu-indicator-icon")
		})
	}), ce = o ? jd(o, Id) : null, le = ce ? ce.property === "inlineSize" ? Bd.popoverCustomIntrinsicWidth(ce.value) : Bd.popoverCustomWidth(ce.value) : Bd.popover;
	return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(dd, {
		ref: (e) => ne(e),
		id: y,
		role: "menuitem",
		tabIndex: i ? void 0 : -1,
		"aria-haspopup": "menu",
		"aria-expanded": x,
		"aria-controls": x ? _ : void 0,
		"aria-disabled": i || void 0,
		"data-testid": f,
		onMouseEnter: F.onMouseEnter,
		onMouseLeave: F.onMouseLeave,
		onPointerMove: ie,
		startContent: t ? Fc(t, {
			size: "sm",
			color: "secondary"
		}) : void 0,
		label: n,
		description: r,
		endContent: se,
		onClick: R,
		onKeyDown: re,
		isDisabled: i,
		xstyle: [
			Ld.root,
			Rd[h],
			x && Ld.open,
			i && Ld.disabled,
			l
		],
		...K(U("dropdown-menu-item", { size: h }), {
			className: u,
			style: d
		})
	}), C.render(/*#__PURE__*/ (0, W.jsx)("div", {
		ref: E,
		id: _,
		role: "menu",
		tabIndex: N ? 0 : -1,
		"aria-labelledby": y,
		onKeyDown: ae,
		onMouseEnter: ee.onMouseEnter,
		onMouseLeave: ee.onMouseLeave,
		"data-testid": p,
		...K(U("dropdown-menu"), {
			0: { className: "x9f619 x78zum5 xdt5ytf x1lsbc85 xs2v1xk x1hkkhfe x1fcsqxe xgory14 x9epnlk x1n97fys x1prclbq x1i5ehqx x1hc1fzr x19991ni xuedmi6 xlr8y92" },
			1: { className: "x9f619 x78zum5 xdt5ytf x1lsbc85 xs2v1xk x1hkkhfe x1fcsqxe xgory14 x9epnlk x1n97fys x1prclbq x1i5ehqx x1hc1fzr x19991ni xuedmi6 xlr8y92 x1odjw0f x6ikm8r xish69e" }
		}[!!N << 0]),
		children: /*#__PURE__*/ (0, W.jsx)(fd, {
			value: oe,
			children: c
		})
	}), {
		placement: "end",
		alignment: "start",
		offset: O["--spacing-1"],
		xstyle: [
			Bd.popoverViewport,
			le,
			Zi.end
		]
	})] });
}
Vd.displayName = "DropdownMenuSubMenu";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/renderDropdownItems.js
function Hd(e, t) {
	return `item-${e.id ?? t}`;
}
function Ud(e, t) {
	return `section-${e.id ?? t}`;
}
function Wd(e, t) {
	let { items: n, id: r, ...i } = e;
	return /*#__PURE__*/ (0, W.jsx)(vd, { ...i }, Hd(e, t));
}
function Gd(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		"type" in r && r.type === "divider" ? t.push(/*#__PURE__*/ (0, W.jsx)(Td, {}, `divider-${n}`)) : "type" in r && r.type === "section" ? t.push(/*#__PURE__*/ (0, W.jsxs)("div", {
			role: "group",
			"aria-label": r.title,
			children: [r.title && /*#__PURE__*/ (0, W.jsx)("div", {
				"aria-hidden": "true",
				...K(U("dropdown-menu-section-heading"), { className: "xu0wf1k xf314gf x9ynric x141an7d x1ltkj2j xv1l7n4 x87ps6o" }),
				children: r.title
			}), r.items.map(Wd)]
		}, Ud(r, n))) : "type" in r || (r.items && r.items.length > 0 ? t.push(/*#__PURE__*/ (0, W.jsx)(Vd, {
			icon: r.icon,
			label: r.label,
			isDisabled: r.isDisabled,
			children: Gd(r.items)
		}, Hd(r, n))) : t.push(Wd(r, n)));
	}
	return t;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useFocusReturnVisibility.js
function Kd() {
	let [e, t] = (0, v.useState)(!1);
	Wi();
	let n = (0, v.useCallback)(() => {
		t(Gi() === "pointer");
	}, []), r = (0, v.useCallback)(() => {
		t(!1);
	}, []);
	return {
		isFocusRingSuppressed: e,
		onFocusReturnTargetFocus: (0, v.useCallback)(() => {
			Gi() === "keyboard" && t(!1);
		}, []),
		prepareFocusReturn: n,
		resetFocusReturn: r
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useAdaptivePresentation.js
var qd = "(max-width: 768px) and (pointer: coarse)";
function Jd(e) {
	let t = kr(qd);
	return e === "adaptive" ? t ? "bottom-sheet" : "popover" : e;
}
var Yd = /^(\d+(?:\.\d+)?|\.\d+)(px|%)$/i;
function Xd(e, t) {
	if (typeof e == "number") return Number.isFinite(e) && e > 0 && e <= 1 ? e * t : null;
	let n = Yd.exec(e.trim());
	if (n === null) return null;
	let r = Number.parseFloat(n[1]);
	return r > 0 ? n[2].toLowerCase() === "%" ? r / 100 * t : r : null;
}
function Zd(e) {
	return Xd(e, 1) !== null;
}
function Qd(e, t) {
	let n = [];
	for (let r of e) {
		let e = Xd(r, t);
		e !== null && n.push(e);
	}
	return n;
}
function $d(e, t, n = 48) {
	let r = [0, ...t.filter((t) => t > 0 && t < e).map((t) => e - t)].sort((e, t) => e - t), i = [];
	for (let e of r) {
		let t = i[i.length - 1];
		(t === void 0 || e - t >= n) && i.push(e);
	}
	return i;
}
function ef(e, t) {
	return t.reduce((t, n) => Math.abs(n - e) < Math.abs(t - e) ? n : t, t[0]);
}
var tf = .3;
function nf(e, t) {
	if (e.length < 2 || t <= 0) return null;
	let n = e[e.length - 1];
	return t - n <= .25 * t ? n : null;
}
function rf(e, t, n, r) {
	let i = r !== null, a = i ? t[t.length - 2] : t[t.length - 1], o = i ? r : n, s = i ? tf : 0;
	return e <= a ? 1 : e >= o ? s : 1 - (1 - s) * ((e - a) / (o - a));
}
function af(e, t, n, r) {
	let i = t;
	if (n > 0) {
		let e = t.filter((e) => e >= r);
		e.length > 0 && (i = e);
	} else if (n < 0) {
		let e = t.filter((e) => e <= r);
		e.length > 0 && (i = e);
	}
	return ef(e, i);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/useMobileKeyboard.js
var of = "--_sheet-keyboard-inset", sf = /* @__PURE__ */ new Set([
	"button",
	"checkbox",
	"color",
	"file",
	"hidden",
	"image",
	"radio",
	"range",
	"reset",
	"submit"
]);
function cf() {
	return window.visualViewport?.height ?? window.innerHeight;
}
function lf() {
	return cf() >= window.innerHeight - .5;
}
function uf() {
	let e = window.navigator.userAgent;
	return /iPad|iPhone|iPod/.test(e) || e.includes("Macintosh") && window.navigator.maxTouchPoints > 1;
}
function df(e) {
	return e instanceof HTMLTextAreaElement ? !e.disabled && !e.readOnly : e instanceof HTMLInputElement ? !e.disabled && !e.readOnly && !sf.has((e.getAttribute("type") ?? "text").toLowerCase()) : e instanceof HTMLElement && e.matches("[contenteditable]:not([contenteditable=\"false\"])");
}
function ff(e, t) {
	if (!(e instanceof Element)) return null;
	let n = e.closest("input, textarea, [contenteditable]:not([contenteditable=\"false\"])");
	if (t.contains(n) && df(n)) return n;
	let r = e.closest("label"), i = r instanceof HTMLLabelElement ? r.control : null;
	return t.contains(i) && df(i) ? i : null;
}
function pf({ bodyRef: e, bottomClearance: t, isEnabled: n, isFullyExpanded: r, isPageScrollLocked: i, isSheetTraveling: a, isOpen: o, isPresented: s, sheetRef: c }) {
	let l = (0, v.useRef)(!1), u = (0, v.useRef)(!1), d = (0, v.useRef)(r), f = (0, v.useRef)(o);
	d.current = r, f.current = o, (0, v.useEffect)(() => {
		if (!n || !a) return;
		let e = c.current, t = document.activeElement;
		e && t instanceof HTMLElement && t !== e && e.contains(t) && (u.current = l.current, e.focus({ preventScroll: !0 }));
	}, [
		n,
		a,
		c
	]), (0, v.useEffect)(() => {
		if (!n || !s || o) return;
		let e = c.current, t = document.activeElement;
		e && t instanceof HTMLElement && t !== e && e.contains(t) && (u.current = l.current, t.blur());
	}, [
		n,
		o,
		s,
		c
	]), (0, v.useEffect)(() => {
		let r = e.current, a = c.current;
		if (!n || !s || !r) return;
		let o = null, p = null, m = uf(), h = () => {
			r.style.setProperty(of, "0px"), o = null, p = null, l.current = !1, u.current = !1;
		}, g = (e, t) => {
			if (typeof r.scrollBy != "function") {
				r.scrollTop += e;
				return;
			}
			let n = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			r.scrollBy({
				top: e,
				behavior: t && !n ? "smooth" : "instant"
			});
		}, _ = (e, n) => {
			let i = r.getBoundingClientRect(), a = e.getBoundingClientRect(), o = cf(), s = Math.max(0, i.bottom - o) > 0 ? t : 0, c = i.top, l = Math.min(i.bottom, o - s);
			l <= c || (a.bottom > l ? g(a.bottom - l, n) : a.top < c && g(a.top - c, n));
		}, v = (e) => {
			let n = cf();
			if (lf()) {
				h();
				return;
			}
			if (Math.max(0, e.bodyBottom - n) === 0) {
				h();
				return;
			}
			let i = Math.max(0, e.bodyBottom - (n - t));
			r.style.setProperty(of, `${i}px`);
		}, y = (e) => {
			if (!d.current) return;
			let t = ff(e.relatedTarget, r);
			if (t) {
				t !== document.activeElement && t.focus({ preventScroll: !0 });
				return;
			}
			let n = ff(e.target, r);
			f.current && n && !e.relatedTarget && a?.focus({ preventScroll: !0 });
		}, b = () => {
			let e = document.activeElement;
			if (!d.current || !(e instanceof HTMLElement) || !r.contains(e) || !df(e)) {
				if (u.current && o) {
					v(o);
					return;
				}
				h();
				return;
			}
			u.current = !1;
			let n = r.getBoundingClientRect(), a = cf(), s = Math.max(0, n.bottom - a), c = s > 0 ? t : 0;
			o = s > 0 ? { bodyBottom: n.bottom } : null, i && s > 0 && !l.current && (p = {
				x: window.scrollX,
				y: window.scrollY
			}), l.current = s > 0;
			let f = s > 0 ? Math.max(0, n.bottom - (a - c)) : 0;
			r.style.setProperty(of, `${f}px`), _(e, s > 0);
		}, x = 0, S = () => {
			cancelAnimationFrame(x), x = requestAnimationFrame(b);
		}, C = () => {
			let e = p;
			if (e == null || window.scrollX === e.x && window.scrollY === e.y) return;
			window.scrollTo(e.x, e.y);
			let t = document.activeElement;
			t instanceof HTMLElement && r.contains(t) && df(t) && _(t, !1);
		}, w = typeof ResizeObserver > "u" ? null : new ResizeObserver(S), T = () => {
			if (!w) return;
			w.disconnect();
			let e = /* @__PURE__ */ new Set([r]);
			a && e.add(a);
			for (let t of r.children) e.add(t);
			let t = document.activeElement;
			if (t instanceof HTMLElement && r.contains(t)) for (let n = t; n && n !== r; n = n.parentElement) e.add(n);
			for (let t of e) w.observe(t);
		}, E = typeof MutationObserver > "u" ? null : new MutationObserver((e) => {
			e.every((e) => e.type === "attributes" && e.target === r) || (T(), S());
		}), D = () => {
			T(), S();
		}, O = () => {
			u.current = l.current, S();
		}, k = (e) => {
			e.target === a && e.propertyName === "transform" && S();
		}, A = window.visualViewport;
		return m && document.addEventListener("blur", y, !0), r.addEventListener("focusin", D), r.addEventListener("focusout", O), a?.addEventListener("transitionend", k), A?.addEventListener("resize", S), A?.addEventListener("scroll", S), window.addEventListener("scroll", C), window.addEventListener("resize", S), E?.observe(r, {
			attributes: !0,
			characterData: !0,
			childList: !0,
			subtree: !0
		}), T(), S(), () => {
			cancelAnimationFrame(x), m && document.removeEventListener("blur", y, !0), r.removeEventListener("focusin", D), r.removeEventListener("focusout", O), a?.removeEventListener("transitionend", k), A?.removeEventListener("resize", S), A?.removeEventListener("scroll", S), window.removeEventListener("scroll", C), window.removeEventListener("resize", S), w?.disconnect(), E?.disconnect(), r.style.removeProperty(of), l.current = !1, u.current = !1;
		};
	}, [
		e,
		t,
		n,
		i,
		s,
		c
	]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/useSheetGestures.js
var mf = 1.2, hf = 48, gf = .4, _f = 40;
function vf(e) {
	return e.syntheticTouch === !0;
}
var yf = .35, bf = 4, xf = 8;
function Sf() {
	typeof navigator < "u" && typeof navigator.vibrate == "function" && (Of() || navigator.vibrate(8));
}
function Cf(e, t) {
	let n = t[0], r = Math.abs(e - n);
	for (let i of t) {
		let t = Math.abs(e - i);
		t < r && (r = t, n = i);
	}
	if (r >= _f) return e;
	let i = r / _f, a = 1 - i * i;
	return e + (n - e) * a;
}
function wf(e, t, n) {
	return Math.max(0, e - t - n);
}
function Tf(e) {
	let t = Number.parseFloat(getComputedStyle(e).paddingBlockEnd);
	return Number.isFinite(t) ? t : 0;
}
function Ef(e) {
	if (!e) return 0;
	let t = Tf(e);
	return Math.max(0, e.scrollHeight - e.clientHeight - t) - e.scrollTop;
}
function Df(e, t, n) {
	return Math.max(0, e - n - t);
}
function Of() {
	return typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function kf({ isOpen: e, canDismiss: t = !0, offscreenBlockEndInset: n = 0, onDismiss: r, snapHeights: i, onSnap: a, onScrimOpacity: o }) {
	let [s, c] = (0, v.useState)(0), [l, u] = (0, v.useState)(0), [d, f] = (0, v.useState)(!1), [p, m] = (0, v.useState)(0), [h, g] = (0, v.useState)(0), [_, y] = (0, v.useState)(0), b = (0, v.useRef)(0), x = (0, v.useRef)(0), [S, C] = (0, v.useState)(null), [w, T] = (0, v.useState)(!1), E = (0, v.useRef)(0), D = (0, v.useRef)(null), O = (0, v.useRef)(null), k = (0, v.useRef)(n);
	k.current = Math.max(0, n);
	let A = (0, v.useCallback)((e) => {
		let t = Math.max(0, e);
		b.current = t, y(t);
	}, []), j = (0, v.useCallback)((e) => {
		let t = Math.max(0, e);
		Math.abs(t - E.current) > .5 && (E.current = t, g(t));
	}, []), M = (0, v.useCallback)(() => {
		T(!0), D.current = null, C(null);
		let e = O.current;
		O.current = null, e != null && j(e);
	}, [j]), N = (0, v.useCallback)((e, t, n, r, i, a, o) => {
		let s = wf(e, n, a);
		if (o && Math.abs(r - t) > .5 && !Of()) {
			O.current = s, D.current = i, C(i);
			return;
		}
		O.current = null, D.current = null, C(null), T(Math.abs(i - n) > .5), j(s);
	}, [j]), P = (0, v.useRef)(0);
	P.current = d ? s : l;
	let F = (0, v.useRef)(e);
	F.current = e;
	let ee = (0, v.useRef)(i);
	ee.current = i;
	let I = (0, v.useRef)(r), te = (0, v.useRef)(t), L = (0, v.useRef)(a), ne = (0, v.useRef)(o);
	(0, v.useEffect)(() => {
		I.current = r, te.current = t, L.current = a, ne.current = o;
	});
	let R = (0, v.useRef)(null), re = (0, v.useRef)(0), ie = (0, v.useRef)(null), ae = (0, v.useRef)(null), oe = (0, v.useRef)(null);
	(0, v.useLayoutEffect)(() => {
		if (!w) return;
		ie.current?.offsetHeight;
		let e = requestAnimationFrame(() => {
			T(!1);
		});
		return () => cancelAnimationFrame(e);
	}, [w]);
	let se = (0, v.useCallback)((e) => {
		e <= 0 || !F.current || P.current > 0 || (re.current = e, m((t) => t === e ? t : e));
	}, []), ce = (0, v.useCallback)((e) => {
		if (oe.current?.disconnect(), oe.current = null, ie.current = e, !e || typeof ResizeObserver > "u") {
			e && se(e.getBoundingClientRect().height);
			return;
		}
		se(e.getBoundingClientRect().height);
		let t = new ResizeObserver((e) => {
			let t = e[0];
			if (t) {
				let e = t.borderBoxSize?.[0]?.blockSize;
				se(e ?? t.target.getBoundingClientRect().height);
			}
		});
		t.observe(e), oe.current = t;
	}, [se]);
	(0, v.useEffect)(() => () => oe.current?.disconnect(), []), (0, v.useEffect)(() => {
		e && (c(0), u(0), f(!1), T(!1), A(0), x.current = 0, E.current = 0, D.current = null, O.current = null, g(0), C(null));
	}, [e, A]);
	let le = (0, v.useCallback)(() => re.current > 0 ? re.current : ie.current?.getBoundingClientRect().height ?? 0, []), ue = (0, v.useCallback)((e) => {
		let t = Df(e, 0, k.current), n = $d(t, ee.current?.() ?? []);
		return {
			offsets: n,
			peekOffset: nf(n, t)
		};
	}, []), z = (0, v.useCallback)(() => {
		let e = ie.current;
		if (!e) return re.current;
		let t = e.style.height;
		if (t === "") return e.getBoundingClientRect().height;
		e.style.height = "";
		let n = e.getBoundingClientRect().height;
		return e.style.height = t, n;
	}, []), B = (0, v.useCallback)(() => {
		if (!F.current || R.current != null || D.current != null) return;
		let e = z();
		if (e <= 0) return;
		let { offsets: t, peekOffset: n } = ue(e), r = Math.min(x.current, t.length - 1), i = t[r], a = i === n ? 0 : i, o = b.current;
		if (e === re.current && Math.abs(i - P.current) <= .5 && Math.abs(a - o) <= .5) return;
		re.current = e, m(e), x.current = r, N(o, i, a, i, o, Ef(ae.current), !1), A(a), u(i), L.current?.(Df(e, i, k.current));
		let s = t[t.length - 1], c = Df(e, s, k.current);
		ne.current?.(rf(i, t, s + c * gf, n));
	}, [
		z,
		N,
		A,
		ue
	]);
	(0, v.useEffect)(() => {
		if (e && typeof window < "u") return window.addEventListener("resize", B), window.addEventListener("orientationchange", B), () => {
			window.removeEventListener("resize", B), window.removeEventListener("orientationchange", B);
		};
	}, [e, B]);
	let V = (0, v.useRef)(!1);
	(0, v.useLayoutEffect)(() => {
		if (!V.current) {
			V.current = !0;
			return;
		}
		B();
	}, [B, i]);
	let de = (0, v.useCallback)((e) => {
		let t = R.current;
		if (t == null) return;
		R.current = null, e?.hasPointerCapture?.(t.pointerId) && e.releasePointerCapture(t.pointerId), c(t.baseOffset), f(!1), N(t.baseLayoutOffset, t.baseOffset, t.baseLayoutOffset, t.renderedOffset, t.layoutOffset, t.naturalEndGap, !0);
		let { offsets: n, peekOffset: r } = ue(t.height), i = n[n.length - 1], a = i + Df(t.height, i, k.current) * gf;
		ne.current?.(rf(t.baseOffset, n, a, r));
	}, [N, ue]);
	(0, v.useEffect)(() => {
		let e = () => de(), t = () => {
			document.visibilityState === "hidden" && de();
		};
		return window.addEventListener("blur", e), document.addEventListener("visibilitychange", t), () => {
			window.removeEventListener("blur", e), document.removeEventListener("visibilitychange", t);
		};
	}, [de]);
	let fe = (0, v.useCallback)((e, t, n, r, i, a, o, s, l, d) => {
		let { offsets: f, peekOffset: p } = ue(n), m = f[f.length - 1], h = Df(n, m, k.current), g = Math.abs(t) > mf && i > hf, _ = (e) => {
			let t = e === p ? 0 : e;
			N(o, e, t, s, l, d, !0), A(t), x.current = Math.max(0, f.indexOf(e)), u(e), L.current?.(Df(n, e, k.current));
			let r = m + h * gf;
			ne.current?.(rf(e, f, r, p)), e !== a && Sf();
		};
		if (r > 0 && g) {
			te.current ? (N(o, a, o, o, o, d, !1), I.current()) : _(m);
			return;
		}
		if (r < 0 && g) {
			N(o, 0, 0, s, l, d, !0), A(0), x.current = 0, c(0), u(0), L.current?.(Df(n, 0, k.current)), ne.current?.(1), Sf();
			return;
		}
		if (e > m + h * gf) {
			te.current ? (N(o, a, o, o, o, d, !1), I.current()) : _(m);
			return;
		}
		_(af(e, f, r, a));
	}, [
		N,
		A,
		ue
	]), pe = (0, v.useCallback)((e, t, n) => {
		let r = e.currentTarget, i = vf(e);
		i || r.setPointerCapture?.(e.pointerId);
		let a = n ?? e.clientY, o = Ef(ae.current), s = b.current;
		R.current = {
			syntheticTouch: i,
			pointerId: e.pointerId,
			startCoord: a,
			lastCoord: e.clientY,
			lastTime: e.timeStamp,
			velocity: 0,
			height: t,
			baseOffset: l,
			baseLayoutOffset: s,
			renderedOffset: l,
			layoutOffset: s,
			naturalEndGap: o
		}, j(wf(s, s, o)), c(l), f(!0);
	}, [l, j]), me = (0, v.useCallback)((e) => {
		e.button === 0 && e.isPrimary && (e.preventDefault(), pe(e, le()));
	}, [pe, le]), H = (0, v.useCallback)((e) => {
		R.current != null && (e.preventDefault(), de(e.currentTarget));
	}, [de]), he = (0, v.useCallback)((e) => {
		R.current?.syntheticTouch || R.current?.pointerId === e.pointerId && de();
	}, [de]), ge = (0, v.useCallback)((e) => {
		let t = R.current;
		if (!t || t.pointerId !== e.pointerId || t.syntheticTouch && !vf(e)) return;
		let n = e.clientY - t.startCoord, r = e.timeStamp - t.lastTime;
		r > 0 && (t.velocity = (e.clientY - t.lastCoord) / r, t.lastCoord = e.clientY, t.lastTime = e.timeStamp);
		let { offsets: i, peekOffset: a } = ue(t.height), o = t.baseOffset + n, s = i[i.length - 1], l;
		l = o < 0 ? Math.max(-48, o * yf) : o > s ? o : Cf(o, i);
		let u = l < t.baseOffset ? 0 : t.baseLayoutOffset;
		t.renderedOffset = l, t.layoutOffset = u, c(l), j(wf(t.baseLayoutOffset, u, t.naturalEndGap));
		let d = i[i.length - 1], f = d + Df(t.height, d, k.current) * gf;
		ne.current?.(rf(l, i, f, a));
	}, [ue, j]), _e = (0, v.useCallback)((e) => {
		let t = R.current;
		if (!t || t.pointerId !== e.pointerId || t.syntheticTouch && !vf(e)) return;
		let n = e.currentTarget, r = e.clientY - t.startCoord, i = Math.max(0, t.baseOffset + r), a = r === 0 ? 0 : r > 0 ? 1 : -1;
		R.current = null, t.syntheticTouch || n.releasePointerCapture?.(e.pointerId), f(!1), fe(i, t.velocity, t.height || 1, a, Math.abs(r), t.baseOffset, t.baseLayoutOffset, t.renderedOffset, t.layoutOffset, t.naturalEndGap);
	}, [fe]), ve = (0, v.useRef)(null), ye = (0, v.useCallback)((e) => {
		if (e.button !== 0 || !e.isPrimary) return;
		let t = e.currentTarget;
		if (t.scrollTop > 0) {
			ve.current = null;
			return;
		}
		ve.current = {
			pointerId: e.pointerId,
			startCoord: e.clientY,
			scroller: t
		};
	}, []), be = (0, v.useCallback)((e) => {
		if (R.current) {
			ge(e);
			return;
		}
		let t = ve.current;
		if (!t || t.pointerId !== e.pointerId) return;
		let n = e.clientY - t.startCoord;
		n > xf && t.scroller.scrollTop <= 0 ? (ve.current = null, pe(e, le(), t.startCoord), ge(e)) : n < 0 && (ve.current = null);
	}, [
		pe,
		ge,
		le
	]), xe = (0, v.useCallback)((e) => {
		ve.current = null, !R.current?.syntheticTouch && R.current && _e(e);
	}, [_e]), Se = (0, v.useRef)(null), Ce = (0, v.useRef)(null), we = (0, v.useRef)(pe), Te = (0, v.useRef)(de), Ee = (0, v.useRef)(ge), De = (0, v.useRef)(_e), Oe = (0, v.useRef)(le);
	(0, v.useEffect)(() => {
		we.current = pe, Te.current = de, Ee.current = ge, De.current = _e, Oe.current = le;
	});
	let ke = (0, v.useCallback)((e) => {
		let t = (e, t) => ({
			syntheticTouch: !0,
			pointerId: e.identifier,
			clientY: e.clientY,
			timeStamp: Date.now(),
			currentTarget: t,
			setPointerCapture: () => {},
			releasePointerCapture: () => {}
		}), n = (e) => e.scrollTop <= 0, r = (e) => e.scrollTop + e.clientHeight >= e.scrollHeight - 1, i = (e) => {
			let t = e.currentTarget, i = e.changedTouches[0];
			if (!i) {
				Se.current = null;
				return;
			}
			let a = n(t), o = r(t) && P.current > 0;
			Se.current = {
				id: i.identifier,
				startY: i.clientY,
				top: a,
				bottom: o,
				contentEndY: null,
				promotedAtContentEnd: !1
			};
		}, a = (e) => {
			let i = e.currentTarget, a = Se.current;
			if (R.current) {
				let n = [...e.changedTouches].find((e) => e.identifier === R.current?.pointerId);
				if (!n) return;
				if (a?.promotedAtContentEnd && a.contentEndY != null) {
					if (n.clientY >= a.contentEndY) {
						a.contentEndY = null, a.promotedAtContentEnd = !1, Te.current(i);
						return;
					}
					Ee.current(t(n, i));
					return;
				}
				e.preventDefault(), Ee.current(t(n, i));
				return;
			}
			if (!a) return;
			let o = [...e.changedTouches].find((e) => e.identifier === a.id);
			if (!o) return;
			let s = o.clientY - a.startY, c = a.top && s > xf && n(i), l = a.bottom && s < -8 && r(i);
			if (c || l) {
				e.preventDefault(), Se.current = null, we.current(t(o, i), Oe.current(), a.startY), Ee.current(t(o, i));
				return;
			}
			(a.top && s < 0 || a.bottom && s > 0) && (a.top = !1, a.bottom = !1), P.current > 0 && r(i) ? a.contentEndY == null ? a.contentEndY = o.clientY : a.contentEndY - o.clientY >= bf && (a.promotedAtContentEnd = !0, we.current(t(o, i), Oe.current(), a.contentEndY), Ee.current(t(o, i))) : a.contentEndY = null;
		}, o = (e) => {
			Se.current = null;
			let n = R.current?.pointerId;
			if (n == null) return;
			let r = [...e.changedTouches].find((e) => e.identifier === n), i = e.currentTarget;
			r ? De.current(t(r, i)) : e.touches.length === 0 && Te.current(i);
		}, s = ae.current;
		if (s && Ce.current) {
			let e = Ce.current;
			s.removeEventListener("touchstart", e.start), s.removeEventListener("touchmove", e.move), s.removeEventListener("touchend", e.end), s.removeEventListener("touchcancel", e.end);
		}
		ae.current = e, e ? (e.addEventListener("touchstart", i, { passive: !0 }), e.addEventListener("touchmove", a, { passive: !1 }), e.addEventListener("touchend", o, { passive: !0 }), e.addEventListener("touchcancel", o, { passive: !0 }), Ce.current = {
			start: i,
			move: a,
			end: o
		}) : Ce.current = null;
	}, []), Ae = kr("(prefers-reduced-motion: reduce)"), je = (0, v.useCallback)((e) => {
		if (E.current <= 0) return;
		let t = Tf(e), n = Math.max(0, e.scrollHeight - e.clientHeight - t), r = Math.max(0, e.scrollTop - n);
		r < E.current - .5 && j(r);
	}, [j]), Me = (0, v.useCallback)((e) => {
		R.current == null && D.current == null && je(e.currentTarget);
	}, [je]), Ne = d ? s : l;
	return {
		sheetRef: ce,
		contentProps: (0, v.useMemo)(() => ({ style: {
			transform: Ne === 0 ? void 0 : `translateY(${Ne}px)`,
			transition: e && (d || w || Ae) ? "none" : void 0,
			touchAction: "none",
			overscrollBehavior: "contain"
		} }), [
			Ne,
			d,
			e,
			w,
			Ae
		]),
		handleProps: (0, v.useMemo)(() => ({
			style: {
				touchAction: "none",
				cursor: "grab"
			},
			onContextMenu: H,
			onLostPointerCapture: he,
			onPointerDown: me,
			onPointerMove: ge,
			onPointerUp: _e,
			onPointerCancel: _e
		}), [
			_e,
			H,
			he,
			me,
			ge
		]),
		bodyProps: (0, v.useMemo)(() => ({
			ref: ke,
			onContextMenu: H,
			onLostPointerCapture: he,
			onPointerDown: ye,
			onPointerMove: be,
			onPointerUp: xe,
			onPointerCancel: xe,
			onScroll: Me
		}), [
			ke,
			xe,
			ye,
			be,
			Me,
			H,
			he
		]),
		bodyElementRef: ae,
		dragOffset: s,
		settledOffset: l,
		isDragging: d,
		sheetHeight: p,
		scrollPreservationInset: h,
		settlingLayoutOffset: S,
		settledLayoutOffset: _,
		completeScrollAreaSettle: M
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/BottomSheetPanel.js
var Af = {
	hug: "92dvh",
	capped: "62dvh",
	tall: "92dvh"
}, jf = 48, Mf = 48, Nf = 50;
O["--spacing-6"];
function Pf() {
	return typeof window > "u" ? 0 : window.innerHeight;
}
function Ff(e) {
	let t = "";
	for (let n of e ?? []) t += `${typeof n}:${n}|`;
	return t;
}
var If = {
	sheet: {
		kfzvcC: "x67bb7w",
		kB7OPa: "x9f619",
		kVAEAm: "x1n2onr6",
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kAzted: "x2lwn1j",
		kzqmXN: "xh8yej3",
		ks0D6T: "x11gisft",
		kWkggS: "x10xzikg",
		kEafiO: "x11xkdxz",
		kPef9Z: "x13fuv20",
		kLZC3w: "x1pc3f07",
		k2ei4v: "xgbv0en",
		kVhnKS: "x1t7ytsu",
		kGJrpR: "x1j92z86",
		ke9TFa: "xw8tdv1",
		k8ry5P: "x18b5jzi",
		kBCPoo: "x1gejf6u",
		krdFHd: "x81l70g",
		kfmiAY: "x7hs6f1",
		kGVxlE: "x1kcpxr7",
		kI3sdo: "x1a2a7pz",
		kVQacm: "xb3r6kr",
		kGO01o: "x1wkw6tp",
		k1K539: "x1if0o47",
		k3aq6I: "xnn1q72 xhbqy3z",
		kSiTet: "x1hc1fzr",
		k1ekBW: "xwcsmn1",
		kIyJzY: "x80gvsz",
		kAMwcw: "xlr8y92",
		k6sLGO: "x1q1rmc8",
		k6CgDc: "xzg1mie",
		$$css: !0
	},
	sheetClosing: {
		k3aq6I: "x1weeur4",
		kAMwcw: "xv2sgk5",
		$$css: !0
	},
	sheetFading: {
		kSiTet: "xg01cxk",
		$$css: !0
	},
	sheetInactive: {
		kfzvcC: "x47corl",
		$$css: !0
	},
	body: {
		kzQI83: "x1iyjqo2",
		kAzted: "x2lwn1j",
		kB7OPa: "x9f619",
		kFalU9: "xx69xxh",
		kInvED: "x1wfwxd8 x1nw7mhf",
		kWkggS: "x10xzikg",
		kGO01o: "x18d9i69",
		$$css: !0
	},
	tallKeyboardBody: {
		kFlMNQ: "xrw9175",
		k5JduY: "x1s928wv",
		kc3QkE: "xhkezso",
		k4zj60: "xu6fald",
		kloYau: "x2q1x1w",
		$$css: !0
	},
	budget: {
		kZKoxP: "x1tpcejd",
		$$css: !0
	},
	hugHeight: {
		kZKoxP: "xg7h5cd",
		kskxy: "x14bu9tk",
		$$css: !0
	}
};
function Lf(e) {
	return e.kind === "open" ? e.entering ? "entering" : null : e.kind === "retained" ? e.motion === "covered" ? null : e.motion : e.kind === "exiting" ? "exiting" : null;
}
function Rf(e, t, n) {
	if (e == null) return n(), () => {};
	let r = !1, i = null, a = () => {
		r || (r = !0, i != null && clearTimeout(i), e.removeEventListener("transitionend", o), e.removeEventListener("transitioncancel", o), n());
	}, o = (n) => {
		n.target === e && n.propertyName === t && a();
	};
	e.addEventListener("transitionend", o), e.addEventListener("transitioncancel", o);
	let s = getComputedStyle(e);
	if (e.style.transition.trim() === "none" || s.transition.trim() === "none") return a(), () => {};
	let c = s.transitionProperty.split(",").map((e) => e.trim()), l = s.transitionDuration.split(",").map(zf), u = s.transitionDelay.split(",").map(zf), d = !1, f = c.reduce((e, n, r) => {
		if (n !== t && n !== "all") return e;
		let i = l[r % l.length], a = u[r % u.length];
		return i == null || a == null ? (d = !0, e) : Math.max(e, i + a);
	}, 0);
	return d ? () => {
		e.removeEventListener("transitionend", o), e.removeEventListener("transitioncancel", o);
	} : f <= 0 ? (a(), () => {}) : (i = setTimeout(a, f + Nf), () => {
		i != null && clearTimeout(i), e.removeEventListener("transitionend", o), e.removeEventListener("transitioncancel", o);
	});
}
function zf(e) {
	let t = e.trim();
	if (!/^-?(?:\d+|\d*\.\d+)(?:ms|s)$/.test(t)) return null;
	let n = Number.parseFloat(e);
	return t.endsWith("ms") ? n : n * 1e3;
}
function Bf({ ref: e, state: t, height: n, label: r, children: i, snapPoints: a, className: o, style: s, tabIndex: c, xstyle: l, isSwipeDismissAllowed: u = !0, isPageScrollLocked: d = !1, onDismiss: f, onScrimOpacity: p, onElementChange: m, onMotionStart: h, onMotionComplete: g, ..._ }) {
	let y = (0, v.useRef)(null), b = (0, v.useRef)(t), x = (0, v.useRef)(!1), S = (0, v.useRef)(h), C = (0, v.useRef)(g), T = (0, v.useRef)(null), E = (0, v.useRef)(null), D = t.kind === "open" && t.entering, O = b.current, k = O.kind === "open" && O.entering;
	D && !k ? x.current = O.kind === "retained" : D || (x.current = !1), (0, v.useLayoutEffect)(() => {
		b.current = t, S.current = h, C.current = g;
	}, [
		g,
		h,
		t
	]);
	let A = t.kind === "open", j = t.kind !== "hidden", M = t.kind === "retained", N = M || t.kind === "exiting", P = t.kind === "exiting", F = M && t.motion === "fading", ee = M ? t.alignmentOffset : 0, I = Ff(a), te = (0, v.useRef)(a);
	te.current = a;
	let { snapHeights: L, ignoredSnapPointsMessage: ne } = (0, v.useMemo)(() => {
		if (I === "") return {
			snapHeights: void 0,
			ignoredSnapPointsMessage: ""
		};
		let e = (te.current ?? []).filter((e) => !Zd(e));
		return {
			snapHeights: () => Qd(te.current ?? [], Pf()),
			ignoredSnapPointsMessage: e.length === 0 ? "" : `snapPoints ignored ${JSON.stringify(e)}. A snap point is a viewport fraction above 0 and up to 1 (0.5 is half the screen), a px length ('320px'), or a percentage ('50%').`
		};
	}, [I]);
	Ll("BottomSheet", ne, ne !== "");
	let { contentProps: R, handleProps: re, bodyProps: ie, bodyElementRef: ae, sheetRef: oe, dragOffset: se, settledOffset: ce, isDragging: le, sheetHeight: ue, scrollPreservationInset: z, settlingLayoutOffset: B, settledLayoutOffset: V, completeScrollAreaSettle: de } = kf({
		isOpen: A,
		canDismiss: u,
		offscreenBlockEndInset: jf,
		onDismiss: f,
		snapHeights: L,
		onScrimOpacity: p
	}), { getViewportProps: fe, getContentProps: pe } = uu({
		axis: "both",
		keyboardAccess: {
			owner: "contentOrViewport",
			label: r
		},
		overscroll: "contain",
		stickyContainment: "always"
	}), me = (0, v.useCallback)((e) => {
		oe(e), y.current = e, m?.(e);
	}, [m, oe]);
	pf({
		bodyRef: ae,
		bottomClearance: Mf,
		isEnabled: n === "tall",
		isFullyExpanded: ce === 0,
		isPageScrollLocked: d,
		isSheetTraveling: le && se !== ce,
		isOpen: A,
		isPresented: j,
		sheetRef: y
	}), (0, v.useImperativeHandle)(e, () => y.current, []);
	let H = Lf(t);
	(0, v.useLayoutEffect)(() => {
		if (H != null) {
			if (T.current = null, E.current = null, H === "entering" && x.current) {
				E.current = H;
				return;
			}
			return Rf(y.current, H === "fading" ? "opacity" : "transform", () => {
				T.current === H ? C.current?.(H) : E.current = H;
			});
		}
	}, [H]), (0, v.useLayoutEffect)(() => {
		if (B != null) return Rf(y.current, "transform", de);
	}, [de, B]), (0, v.useEffect)(() => {
		if (H != null) return S.current?.(H), T.current = H, E.current === H && (E.current = null, C.current?.(H)), () => {
			T.current === H && (T.current = null), E.current === H && (E.current = null);
		};
	}, [H]);
	let he = typeof n == "string" && n in Af ? Af[n] : typeof n == "number" ? `${n}px` : n, ge = ue > 0, _e = R.style.transform, ve;
	if (ge) {
		let e = le ? se < ce ? 0 : V : B ?? V, t = (le ? se : ce) - e;
		ve = e > 0 || le || B != null ? `${Math.max(0, ue - Math.max(0, e))}px` : void 0, _e = t === 0 ? void 0 : `translateY(${t}px)`;
	}
	let ye = ee > 0 ? [_e, `translateY(${ee}px)`].filter(Boolean).join(" ") : _e, be = {
		...R.style,
		transform: _e,
		height: ve
	};
	return /*#__PURE__*/ (0, W.jsxs)("div", {
		..._,
		ref: me,
		tabIndex: c ?? -1,
		...K(U("bottom-sheet"), w(gi.reset, If.sheet, ji.reset, n === "hug" ? If.hugHeight : If.budget, P && If.sheetClosing, F && If.sheetFading, N && If.sheetInactive, l), o, {
			"--_sheet-budget": he,
			...A ? be : M ? {
				transform: ye,
				height: ve
			} : P ? { height: ve } : {},
			...s
		}),
		children: [/*#__PURE__*/ (0, W.jsx)("div", {
			className: "x10l6tqk x13vifvy x1o0tod xtijo5x x1vjfegm x78zum5 x6s0dn4 xl56j7k xvpftlf xafqdz2 x5ve5x3 x1jm3nie x16khyan",
			...re,
			"aria-hidden": "true",
			children: /*#__PURE__*/ (0, W.jsx)("div", { className: "x1m747yf x11c6zpc xjspbzw x1m4xfpy" })
		}), /*#__PURE__*/ (0, W.jsx)("div", {
			...fe({
				...ie,
				...K(w(to.focusVisible, If.body, n === "tall" && If.tallKeyboardBody), z > 0 ? { style: { paddingBlockEnd: `${z}px` } } : {})
			}),
			children: /*#__PURE__*/ (0, W.jsx)("div", {
				...pe({ className: "xufnvkl x9f619 x5yr21d x121v3j4" }),
				children: /*#__PURE__*/ (0, W.jsx)(ti, { children: i })
			})
		})]
	});
}
Bf.displayName = "BottomSheetPanel";
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/BottomSheetEdgeTint.js
function Vf() {
	return /*#__PURE__*/ (0, W.jsx)("div", {
		className: "xixxii4 x17y0mx6 x1ey2m1c x1kpxq89 x10xzikg xhtitgo x47corl x1cb67k9 xt2iwb0",
		"data-sheet-edge-tint": "",
		"aria-hidden": "true"
	});
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/BottomSheetSwitcherContext.js
var Hf = /*#__PURE__*/ (0, v.createContext)(null);
Hf.displayName = "BottomSheetSwitcherContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/BottomSheet/BottomSheet.js
function Z(e, t) {
	switch (e) {
		case "active": return {
			kind: "open",
			entering: !1
		};
		case "entering": return {
			kind: "open",
			entering: !0
		};
		case "covered":
		case "aligning":
		case "fading": return {
			kind: "retained",
			motion: e,
			alignmentOffset: t
		};
		case "exiting": return { kind: "exiting" };
		case "hidden": return { kind: "hidden" };
	}
}
function Uf(e, t) {
	let n = document.activeElement;
	if (n != null && e?.contains(n)) return;
	let r = e?.querySelector("[data-autofocus]");
	r == null ? t && e?.focus({ preventScroll: !0 }) : r.focus({ preventScroll: !0 });
}
function Wf({ ref: e, isOpen: t, onOpenChange: n, label: r, children: i, height: a = "capped", snapPoints: o, hasScrim: s = !0, finalFocusRef: c, purpose: l = "info", xstyle: u, ...d }) {
	let f = (0, v.useRef)(null), p = (0, v.useRef)(null), m = (0, v.useRef)(null), [h, g] = (0, v.useState)(t), _ = t || h, y = t ? {
		kind: "open",
		entering: !1
	} : h ? { kind: "exiting" } : { kind: "hidden" }, b = (0, v.useCallback)(() => {
		l !== "required" && n(!1);
	}, [n, l]), x = (0, v.useCallback)(() => {
		l === "info" && n(!1);
	}, [n, l]), S = (0, v.useCallback)((e) => {
		p.current = e;
	}, []), C = (0, v.useCallback)((e) => {
		f.current?.style.setProperty("--_sheet-scrim-opacity", String(e));
	}, []);
	(0, v.useEffect)(() => {
		let e = f.current;
		e != null && t && (g(!0), e.style.setProperty("--_sheet-scrim-opacity", "1"), e.open || (s ? (m.current = document.activeElement, e.showModal()) : e.show(), Uf(p.current, s)));
	}, [s, t]), (0, v.useEffect)(() => {
		!t && h && s && C(0);
	}, [
		C,
		s,
		t,
		h
	]);
	let w = (0, v.useCallback)((e) => {
		if (e !== "exiting" || t) return;
		let n = f.current;
		n?.open && n.close(), g(!1), (c?.current ?? m.current)?.focus(), m.current = null;
	}, [c, t]);
	hu(_ && s), Ll("BottomSheet", "requires a non-empty `label` for an accessible name; the open sheet has no built-in heading to derive one from.", t && !r);
	let T = (0, v.useCallback)((e) => {
		e.preventDefault(), b();
	}, [b]), E = (0, v.useCallback)((e) => {
		e.key === "Escape" && (e.preventDefault(), !ta(e.nativeEvent) && b());
	}, [b]), D = (0, v.useCallback)((e) => {
		s && e.target === e.currentTarget && x();
	}, [x, s]);
	return /*#__PURE__*/ (0, W.jsxs)("dialog", {
		...{
			0: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz" },
			8: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq" },
			4: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x15h3t91 x142juwg x1viac0w" },
			12: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x15h3t91 x142juwg x1viac0w" },
			2: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz x1cz9k3x" },
			10: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq x1cz9k3x" },
			6: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x142juwg x1viac0w x1cz9k3x" },
			14: { className: "xixxii4 x10a8y8t x1o6l61p xtdtrs8 x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x142juwg x1viac0w x1cz9k3x" },
			1: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz x47corl xfo81ep xh8yej3 x5yr21d" },
			9: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq x47corl xfo81ep xh8yej3 x5yr21d" },
			5: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x15h3t91 x142juwg x1viac0w x47corl xfo81ep xh8yej3 x5yr21d" },
			13: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x15h3t91 x142juwg x1viac0w x47corl xfo81ep xh8yej3 x5yr21d" },
			3: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz x1cz9k3x x47corl xfo81ep xh8yej3 x5yr21d" },
			11: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq x1cz9k3x x47corl xfo81ep xh8yej3 x5yr21d" },
			7: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1s85apg x1a2a7pz xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x142juwg x1viac0w x1cz9k3x x47corl xfo81ep xh8yej3 x5yr21d" },
			15: { className: "xixxii4 x10a8y8t x1x1rfll x7ab17h x1ghz6dp x1717udv xc342km xng3xce xjbqb8w x1rea2x4 x1a2a7pz x1lliihq xnixb3f xni466t xxiuuzi xc0dz0a xft5bk6 x142juwg x1viac0w x1cz9k3x x47corl xfo81ep xh8yej3 x5yr21d" }
		}[!!_ << 3 | !!s << 2 | !!(s && !t && h) << 1 | !s << 0],
		ref: f,
		"aria-label": r,
		"aria-hidden": !t && h ? "true" : void 0,
		"aria-modal": s && t ? "true" : void 0,
		role: l === "required" ? "alertdialog" : void 0,
		inert: !t && h ? !0 : void 0,
		onCancel: T,
		onClick: D,
		onKeyDown: E,
		children: [/*#__PURE__*/ (0, W.jsx)("div", {
			className: "x10l6tqk x17y0mx6 x1ey2m1c x78zum5 xl56j7k x47corl",
			children: /*#__PURE__*/ (0, W.jsx)(Bf, {
				...d,
				ref: e,
				state: y,
				height: a,
				label: r,
				snapPoints: o,
				isSwipeDismissAllowed: l === "info",
				isPageScrollLocked: _ && s,
				xstyle: u,
				onDismiss: x,
				onScrimOpacity: C,
				onElementChange: S,
				onMotionComplete: w,
				children: i
			})
		}), /*#__PURE__*/ (0, W.jsx)(Vf, {})]
	});
}
function Gf({ switcher: e, ref: t, sheetId: n, label: r, children: i, height: a = "capped", snapPoints: o, purpose: s = "info", xstyle: c, ...l }) {
	let { activeSheet: u, hasScrim: d, onActiveSheetChange: f, getSheetPhase: p, getSheetAlignmentOffset: m, registerSheetElement: h, registerSheetLabel: g, registerSheetPurpose: _, onSheetEnterStart: y, onSheetTransitionComplete: b, onSheetScrimOpacityChange: x } = e, S = typeof n == "string" && n.length > 0, C = S ? p(n) : "hidden", w = Z(C, S ? m(n) : 0), T = C === "active" || C === "entering", E = C === "covered" || C === "aligning" || C === "fading" || C === "exiting", D = C !== "hidden", O = C === "active" || C === "entering", k = (0, v.useRef)(null), A = (0, v.useRef)(C), j = A.current, M = (0, v.useRef)(!1);
	(0, v.useLayoutEffect)(() => {
		A.current = C;
	}, [C]);
	let N = (0, v.useCallback)(() => {
		s === "info" && S && u === n && f(null);
	}, [
		u,
		S,
		f,
		s,
		n
	]), P = (0, v.useCallback)((e) => {
		k.current = e, S && h(n, e);
	}, [
		S,
		h,
		n
	]), F = (0, v.useCallback)((e) => {
		e === "entering" && S && y(n);
	}, [
		S,
		y,
		n
	]), ee = (0, v.useCallback)((e) => {
		S && b({
			sheetId: n,
			phase: e
		});
	}, [
		S,
		b,
		n
	]), I = (0, v.useCallback)((e) => {
		S && x(n, e);
	}, [
		S,
		x,
		n
	]);
	return (0, v.useLayoutEffect)(() => {
		if (S) return g(n, r), () => g(n, null);
	}, [
		S,
		r,
		g,
		n
	]), (0, v.useLayoutEffect)(() => {
		if (S) return _(n, s), () => _(n, null);
	}, [
		S,
		s,
		_,
		n
	]), (0, v.useEffect)(() => {
		if (T) {
			let e = j === "active" || j === "entering";
			(!M.current || !e) && Uf(k.current, d), M.current = !0;
		} else C === "hidden" && (M.current = !1);
	}, [
		d,
		T,
		C,
		j
	]), Ll("BottomSheet", "requires a non-empty `label` for an accessible name; the open sheet has no built-in heading to derive one from.", T && !r), /*#__PURE__*/ (0, W.jsx)("div", {
		...{
			0: { className: "x10l6tqk x17y0mx6 x1ey2m1c x78zum5 xl56j7k x47corl" },
			2: { className: "x10l6tqk x17y0mx6 x1ey2m1c xl56j7k x47corl x1s85apg" },
			1: { className: "x10l6tqk x17y0mx6 x1ey2m1c x78zum5 xl56j7k x47corl x1vjfegm" },
			3: { className: "x10l6tqk x17y0mx6 x1ey2m1c xl56j7k x47corl x1s85apg x1vjfegm" }
		}[!D << 1 | !!O << 0],
		hidden: !D,
		"aria-hidden": E ? "true" : void 0,
		inert: E ? !0 : void 0,
		children: /*#__PURE__*/ (0, W.jsx)(Bf, {
			...l,
			ref: t,
			state: w,
			height: a,
			label: r,
			snapPoints: o,
			isSwipeDismissAllowed: s === "info",
			isPageScrollLocked: d,
			xstyle: c,
			onDismiss: N,
			onScrimOpacity: I,
			onElementChange: P,
			onMotionStart: F,
			onMotionComplete: ee,
			children: /*#__PURE__*/ (0, W.jsx)(Hf, {
				value: null,
				children: i
			})
		})
	});
}
function Kf(e) {
	let t = (0, v.use)(Hf), n = e.sheetId, r = typeof n == "string" && n.length > 0;
	return Ll("BottomSheet", "requires a non-empty `sheetId` when nested in BottomSheetSwitcher; standalone `isOpen` / `onOpenChange` props are ignored there.", t != null && !r), Ll("BottomSheet", "`sheetId` only works inside BottomSheetSwitcher. Use `isOpen` and `onOpenChange` for a standalone sheet.", t == null && n != null), t == null ? /*#__PURE__*/ (0, W.jsx)(Wf, { ...e }) : /*#__PURE__*/ (0, W.jsx)(Gf, {
		...e,
		switcher: t
	});
}
Kf.displayName = "BottomSheet";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/container.stylex.js
var qf = { container: {
	kB7OPa: "x9f619",
	kZCmMZ: "x1c35znw",
	kwRFfy: "x64h4k7",
	kLKAdn: "x14m0hsi",
	kGO01o: "xc1wllq",
	$$css: !0
} }, Jf = O["--spacing-4"], Yf = `var(--astryx-card-padding, ${Jf})`, Xf = `var(--astryx-card-padding-inline, ${Yf})`;
`${Xf}`, `${Xf}`, `${Yf}`, `${Yf}`;
var Zf = `var(--_section-padding-propagated, ${`var(--astryx-section-padding, ${Jf})`})`, Qf = `var(--astryx-section-padding-inline, ${Zf})`;
`${Qf}`, `${Qf}`, `${Zf}`, `${Zf}`;
var $f = `var(--astryx-dialog-padding, ${Jf})`, ep = `var(--astryx-dialog-padding-inline, ${$f})`;
`${ep}`, `${ep}`, `${$f}`, `${$f}`;
var tp = {
	card: {
		containerPaddingInlineStart: {
			"--container-padding-inline-start": "xjmlhfd",
			$$css: !0
		},
		containerPaddingInlineEnd: {
			"--container-padding-inline-end": "x1ihxwbr",
			$$css: !0
		},
		containerPaddingBlockStart: {
			"--container-padding-block-start": "x1rqz8me",
			$$css: !0
		},
		containerPaddingBlockEnd: {
			"--container-padding-block-end": "x1omyuck",
			$$css: !0
		},
		layoutPaddingOuterX: {
			"--layout-padding-outer-x": "x14rzhog",
			$$css: !0
		},
		layoutPaddingOuterY: {
			"--layout-padding-outer-y": "xjej9fs",
			$$css: !0
		},
		layoutPaddingInnerX: {
			"--layout-padding-inner-x": "x4poyjn",
			$$css: !0
		},
		layoutPaddingInnerY: {
			"--layout-padding-inner-y": "x1u1kw4e",
			$$css: !0
		}
	},
	section: {
		containerPaddingInlineStart: {
			"--container-padding-inline-start": "x19lemt0",
			$$css: !0
		},
		containerPaddingInlineEnd: {
			"--container-padding-inline-end": "xu1wldr",
			$$css: !0
		},
		containerPaddingBlockStart: {
			"--container-padding-block-start": "xnw7zt4",
			$$css: !0
		},
		containerPaddingBlockEnd: {
			"--container-padding-block-end": "xek4msv",
			$$css: !0
		},
		layoutPaddingOuterX: {
			"--layout-padding-outer-x": "x15i0zw9",
			$$css: !0
		},
		layoutPaddingOuterY: {
			"--layout-padding-outer-y": "x1vw4zgg",
			$$css: !0
		},
		layoutPaddingInnerX: {
			"--layout-padding-inner-x": "x1v3gmnx",
			$$css: !0
		},
		layoutPaddingInnerY: {
			"--layout-padding-inner-y": "x15yx5hm",
			$$css: !0
		}
	},
	dialog: {
		containerPaddingInlineStart: {
			"--container-padding-inline-start": "x1tewnwq",
			$$css: !0
		},
		containerPaddingInlineEnd: {
			"--container-padding-inline-end": "x11h1f2o",
			$$css: !0
		},
		containerPaddingBlockStart: {
			"--container-padding-block-start": "x1g2kccc",
			$$css: !0
		},
		containerPaddingBlockEnd: {
			"--container-padding-block-end": "x1gvthzm",
			$$css: !0
		},
		layoutPaddingOuterX: {
			"--layout-padding-outer-x": "x1hsjncj",
			$$css: !0
		},
		layoutPaddingOuterY: {
			"--layout-padding-outer-y": "x1pui4bz",
			$$css: !0
		},
		layoutPaddingInnerX: {
			"--layout-padding-inner-x": "x2so38",
			$$css: !0
		},
		layoutPaddingInnerY: {
			"--layout-padding-inner-y": "xinu7xd",
			$$css: !0
		}
	}
}, np = {
	spacing0: {
		"--container-padding-inline-start": "x1gu2k80",
		$$css: !0
	},
	spacing0_5: {
		"--container-padding-inline-start": "x14ws0sr",
		$$css: !0
	},
	spacing1: {
		"--container-padding-inline-start": "x1cvlban",
		$$css: !0
	},
	spacing1_5: {
		"--container-padding-inline-start": "x176g23i",
		$$css: !0
	},
	spacing2: {
		"--container-padding-inline-start": "x1xlrr2o",
		$$css: !0
	},
	spacing3: {
		"--container-padding-inline-start": "xfdwxua",
		$$css: !0
	},
	spacing4: {
		"--container-padding-inline-start": "x1dlhslv",
		$$css: !0
	},
	spacing5: {
		"--container-padding-inline-start": "x1s81nki",
		$$css: !0
	},
	spacing6: {
		"--container-padding-inline-start": "x1ep0dkj",
		$$css: !0
	},
	spacing7: {
		"--container-padding-inline-start": "x157xojc",
		$$css: !0
	},
	spacing8: {
		"--container-padding-inline-start": "xw1diwv",
		$$css: !0
	},
	spacing9: {
		"--container-padding-inline-start": "xraca2a",
		$$css: !0
	},
	spacing10: {
		"--container-padding-inline-start": "xserb3f",
		$$css: !0
	},
	spacing11: {
		"--container-padding-inline-start": "xziclwo",
		$$css: !0
	},
	spacing12: {
		"--container-padding-inline-start": "x1iiwihq",
		$$css: !0
	}
}, rp = {
	spacing0: {
		"--container-padding-inline-end": "x91ghl5",
		$$css: !0
	},
	spacing0_5: {
		"--container-padding-inline-end": "x1wz3t3y",
		$$css: !0
	},
	spacing1: {
		"--container-padding-inline-end": "x2oyxnl",
		$$css: !0
	},
	spacing1_5: {
		"--container-padding-inline-end": "xntetml",
		$$css: !0
	},
	spacing2: {
		"--container-padding-inline-end": "xcas3b9",
		$$css: !0
	},
	spacing3: {
		"--container-padding-inline-end": "xu0ipoa",
		$$css: !0
	},
	spacing4: {
		"--container-padding-inline-end": "xs0pscg",
		$$css: !0
	},
	spacing5: {
		"--container-padding-inline-end": "xgkj7vj",
		$$css: !0
	},
	spacing6: {
		"--container-padding-inline-end": "x94cj42",
		$$css: !0
	},
	spacing7: {
		"--container-padding-inline-end": "x11tj35w",
		$$css: !0
	},
	spacing8: {
		"--container-padding-inline-end": "x1b9k1pi",
		$$css: !0
	},
	spacing9: {
		"--container-padding-inline-end": "x19w02kr",
		$$css: !0
	},
	spacing10: {
		"--container-padding-inline-end": "xx5lg5w",
		$$css: !0
	},
	spacing11: {
		"--container-padding-inline-end": "x1nmgbqg",
		$$css: !0
	},
	spacing12: {
		"--container-padding-inline-end": "x1wsfsk2",
		$$css: !0
	}
}, ip = {
	spacing0: {
		"--container-padding-block-start": "x1i3qcxz",
		$$css: !0
	},
	spacing0_5: {
		"--container-padding-block-start": "xvdf9ev",
		$$css: !0
	},
	spacing1: {
		"--container-padding-block-start": "xnsckjb",
		$$css: !0
	},
	spacing1_5: {
		"--container-padding-block-start": "x1kbx601",
		$$css: !0
	},
	spacing2: {
		"--container-padding-block-start": "xa8b4fq",
		$$css: !0
	},
	spacing3: {
		"--container-padding-block-start": "x11k4f5r",
		$$css: !0
	},
	spacing4: {
		"--container-padding-block-start": "xm01sq8",
		$$css: !0
	},
	spacing5: {
		"--container-padding-block-start": "xp8wdkl",
		$$css: !0
	},
	spacing6: {
		"--container-padding-block-start": "x1hmud4d",
		$$css: !0
	},
	spacing7: {
		"--container-padding-block-start": "x1c00sag",
		$$css: !0
	},
	spacing8: {
		"--container-padding-block-start": "xfv60at",
		$$css: !0
	},
	spacing9: {
		"--container-padding-block-start": "x14fzdu7",
		$$css: !0
	},
	spacing10: {
		"--container-padding-block-start": "x17h9kl7",
		$$css: !0
	},
	spacing11: {
		"--container-padding-block-start": "x1rdjxae",
		$$css: !0
	},
	spacing12: {
		"--container-padding-block-start": "xecwdl6",
		$$css: !0
	}
}, ap = {
	spacing0: {
		"--container-padding-block-end": "xkunwnr",
		$$css: !0
	},
	spacing0_5: {
		"--container-padding-block-end": "x1cao3zv",
		$$css: !0
	},
	spacing1: {
		"--container-padding-block-end": "x57a7ii",
		$$css: !0
	},
	spacing1_5: {
		"--container-padding-block-end": "xv53x8y",
		$$css: !0
	},
	spacing2: {
		"--container-padding-block-end": "x1lsgcmx",
		$$css: !0
	},
	spacing3: {
		"--container-padding-block-end": "x1q3ppug",
		$$css: !0
	},
	spacing4: {
		"--container-padding-block-end": "x4hfsld",
		$$css: !0
	},
	spacing5: {
		"--container-padding-block-end": "xbib2ws",
		$$css: !0
	},
	spacing6: {
		"--container-padding-block-end": "x1q8d17g",
		$$css: !0
	},
	spacing7: {
		"--container-padding-block-end": "x1yqogew",
		$$css: !0
	},
	spacing8: {
		"--container-padding-block-end": "x8lgq76",
		$$css: !0
	},
	spacing9: {
		"--container-padding-block-end": "x1f7f9rt",
		$$css: !0
	},
	spacing10: {
		"--container-padding-block-end": "x15vxphk",
		$$css: !0
	},
	spacing11: {
		"--container-padding-block-end": "x4bg2x9",
		$$css: !0
	},
	spacing12: {
		"--container-padding-block-end": "x186mjxr",
		$$css: !0
	}
}, op = {
	spacing0: {
		"--layout-padding-outer-x": "xswhm3q",
		$$css: !0
	},
	spacing0_5: {
		"--layout-padding-outer-x": "xihiwg7",
		$$css: !0
	},
	spacing1: {
		"--layout-padding-outer-x": "xc96xmq",
		$$css: !0
	},
	spacing1_5: {
		"--layout-padding-outer-x": "x1u93lgd",
		$$css: !0
	},
	spacing2: {
		"--layout-padding-outer-x": "x15dxnc0",
		$$css: !0
	},
	spacing3: {
		"--layout-padding-outer-x": "xadgj3j",
		$$css: !0
	},
	spacing4: {
		"--layout-padding-outer-x": "x1v56qcf",
		$$css: !0
	},
	spacing5: {
		"--layout-padding-outer-x": "x1nzs0gl",
		$$css: !0
	},
	spacing6: {
		"--layout-padding-outer-x": "x1c3n52a",
		$$css: !0
	},
	spacing7: {
		"--layout-padding-outer-x": "x1gfiokx",
		$$css: !0
	},
	spacing8: {
		"--layout-padding-outer-x": "x1t3kfz",
		$$css: !0
	},
	spacing9: {
		"--layout-padding-outer-x": "xzr4qsh",
		$$css: !0
	},
	spacing10: {
		"--layout-padding-outer-x": "x1jdf5a4",
		$$css: !0
	},
	spacing11: {
		"--layout-padding-outer-x": "x1hct0t0",
		$$css: !0
	},
	spacing12: {
		"--layout-padding-outer-x": "x11cyqoe",
		$$css: !0
	}
}, sp = {
	spacing0: {
		"--layout-padding-outer-y": "x1mzf5mb",
		$$css: !0
	},
	spacing0_5: {
		"--layout-padding-outer-y": "x1vj96e0",
		$$css: !0
	},
	spacing1: {
		"--layout-padding-outer-y": "x1gpfxoh",
		$$css: !0
	},
	spacing1_5: {
		"--layout-padding-outer-y": "xd3dqby",
		$$css: !0
	},
	spacing2: {
		"--layout-padding-outer-y": "x10pz7y9",
		$$css: !0
	},
	spacing3: {
		"--layout-padding-outer-y": "x1p6yq3h",
		$$css: !0
	},
	spacing4: {
		"--layout-padding-outer-y": "xx738ci",
		$$css: !0
	},
	spacing5: {
		"--layout-padding-outer-y": "x6yxws5",
		$$css: !0
	},
	spacing6: {
		"--layout-padding-outer-y": "x180vrwl",
		$$css: !0
	},
	spacing7: {
		"--layout-padding-outer-y": "x1q6rme1",
		$$css: !0
	},
	spacing8: {
		"--layout-padding-outer-y": "xid7e43",
		$$css: !0
	},
	spacing9: {
		"--layout-padding-outer-y": "x1t5kicu",
		$$css: !0
	},
	spacing10: {
		"--layout-padding-outer-y": "x26l4wa",
		$$css: !0
	},
	spacing11: {
		"--layout-padding-outer-y": "x10zktp0",
		$$css: !0
	},
	spacing12: {
		"--layout-padding-outer-y": "x1yz3n6a",
		$$css: !0
	}
}, cp = {
	spacing0: {
		"--layout-padding-inner-x": "xj1bl4l",
		$$css: !0
	},
	spacing0_5: {
		"--layout-padding-inner-x": "xlriy2h",
		$$css: !0
	},
	spacing1: {
		"--layout-padding-inner-x": "x6uuyak",
		$$css: !0
	},
	spacing1_5: {
		"--layout-padding-inner-x": "xd38f90",
		$$css: !0
	},
	spacing2: {
		"--layout-padding-inner-x": "xxqksqd",
		$$css: !0
	},
	spacing3: {
		"--layout-padding-inner-x": "x1fyui2f",
		$$css: !0
	},
	spacing4: {
		"--layout-padding-inner-x": "x1i2ajwi",
		$$css: !0
	},
	spacing5: {
		"--layout-padding-inner-x": "x1tac27u",
		$$css: !0
	},
	spacing6: {
		"--layout-padding-inner-x": "x1ntgf3t",
		$$css: !0
	},
	spacing7: {
		"--layout-padding-inner-x": "xhjd9tl",
		$$css: !0
	},
	spacing8: {
		"--layout-padding-inner-x": "xn7c84u",
		$$css: !0
	},
	spacing9: {
		"--layout-padding-inner-x": "xeqkbsz",
		$$css: !0
	},
	spacing10: {
		"--layout-padding-inner-x": "x1vf4qco",
		$$css: !0
	},
	spacing11: {
		"--layout-padding-inner-x": "xsmamsf",
		$$css: !0
	},
	spacing12: {
		"--layout-padding-inner-x": "x2xk2xj",
		$$css: !0
	}
}, lp = {
	spacing0: {
		"--layout-padding-inner-y": "xwuefyo",
		$$css: !0
	},
	spacing0_5: {
		"--layout-padding-inner-y": "x180h0y5",
		$$css: !0
	},
	spacing1: {
		"--layout-padding-inner-y": "xmpug6m",
		$$css: !0
	},
	spacing1_5: {
		"--layout-padding-inner-y": "x1g8jpzm",
		$$css: !0
	},
	spacing2: {
		"--layout-padding-inner-y": "x1lksgje",
		$$css: !0
	},
	spacing3: {
		"--layout-padding-inner-y": "x4j7gld",
		$$css: !0
	},
	spacing4: {
		"--layout-padding-inner-y": "x1s3ehtl",
		$$css: !0
	},
	spacing5: {
		"--layout-padding-inner-y": "x1rj5eim",
		$$css: !0
	},
	spacing6: {
		"--layout-padding-inner-y": "x1ftgg6u",
		$$css: !0
	},
	spacing7: {
		"--layout-padding-inner-y": "x1ho74vh",
		$$css: !0
	},
	spacing8: {
		"--layout-padding-inner-y": "xm2cs6f",
		$$css: !0
	},
	spacing9: {
		"--layout-padding-inner-y": "x1vsq92b",
		$$css: !0
	},
	spacing10: {
		"--layout-padding-inner-y": "x18gbwmk",
		$$css: !0
	},
	spacing11: {
		"--layout-padding-inner-y": "x14zymzj",
		$$css: !0
	},
	spacing12: {
		"--layout-padding-inner-y": "xzfpkx9",
		$$css: !0
	}
}, up = { containerMaxHeight: (e) => [{
	"--container-max-height": e == null ? e : "x18nyedi",
	$$css: !0
}, { "--x---container-max-height": e ?? void 0 }] };
function dp({ padding: e = "spacing4", paddingOuterX: t, paddingOuterY: n, paddingInnerX: r, paddingInnerY: i, useThemeDefault: a, maxHeight: o }) {
	let s = t ?? e, c = n ?? e, l = r ?? e, u = i ?? e, d = o ? up.containerMaxHeight(o) : null;
	if (a) {
		let e = tp[a];
		return [
			qf.container,
			e.containerPaddingInlineStart,
			e.containerPaddingInlineEnd,
			e.containerPaddingBlockStart,
			e.containerPaddingBlockEnd,
			e.layoutPaddingOuterX,
			e.layoutPaddingOuterY,
			e.layoutPaddingInnerX,
			e.layoutPaddingInnerY,
			d
		];
	}
	return [
		qf.container,
		np[s],
		rp[s],
		ip[c],
		ap[c],
		op[s],
		sp[c],
		cp[l],
		lp[u],
		d
	];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Section/Section.js
var fp = {
	section: {
		kWkggS: "x10xzikg",
		$$css: !0
	},
	transparent: {
		kWkggS: "xjbqb8w",
		$$css: !0
	},
	muted: {
		kWkggS: "xwmxj5m",
		$$css: !0
	}
}, pp = {
	outer: {
		keTefX: "xojxgvx",
		k71WvV: "x1fcf3bl",
		keoZOQ: "xkibk3",
		k1K539: "xlayyun",
		$$css: !0
	},
	inner: {
		"--container-padding-inline-start": "xrhngw9",
		"--container-padding-inline-end": "xjsfl84",
		"--container-padding-block-start": "x1047aw6",
		"--container-padding-block-end": "xax9j7h",
		kZKoxP: "x5yr21d",
		$$css: !0
	}
}, mp = {
	top: {
		kEafiO: "x178xt8z",
		kPef9Z: "x13fuv20",
		kLZC3w: "x1pc3f07",
		$$css: !0
	},
	bottom: {
		kt9PQ7: "xso031l",
		kfdmCh: "x1q0q8m5",
		kL6WhQ: "xw8gpjh",
		$$css: !0
	},
	start: {
		k2ei4v: "xpilrb4",
		kVhnKS: "x1t7ytsu",
		kGJrpR: "x1j92z86",
		$$css: !0
	},
	end: {
		ke9TFa: "x1lun4ml",
		k8ry5P: "x18b5jzi",
		kBCPoo: "x1gejf6u",
		$$css: !0
	}
}, hp = { sizing: (e, t, n, r) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	kZKoxP: t == null ? t : "x16ye13r",
	ks0D6T: n == null ? n : "xf68679",
	kAzted: r == null ? r : "x82snj4",
	$$css: !0
}, {
	"--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e),
	"--x-height": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t),
	"--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(n),
	"--x-minHeight": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(r)
}] };
function gp({ variant: e = "section", width: t, height: n, maxWidth: r, minHeight: i, children: a, dividers: o, padding: s, paddingInline: c, paddingInlineStart: l, paddingInlineEnd: u, paddingBlock: d, paddingBlockStart: f, paddingBlockEnd: p, xstyle: m, className: h, style: g, ref: _, ...v }) {
	let y = s == null, b = s ?? 4, x = _i[b], S = w(pp.outer, hp.sizing(t ?? null, n ?? null, r ?? null, i ?? null), m);
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: _,
		className: [S.className, h].filter(Boolean).join(" ") || void 0,
		style: g && S.style ? {
			...S.style,
			...g
		} : g || S.style,
		...v,
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			...K(U("section", { variant: e }), w(pp.inner, ...dp(y ? { useThemeDefault: "section" } : {
				paddingInnerX: x,
				paddingInnerY: x,
				paddingOuterX: x,
				paddingOuterY: x
			}), !y && b !== 4 && vi[b], !y && b !== 4 && yi[b], !y && b !== 4 && bi[b], !y && b !== 4 && xi[b], !y && Ai[b], c != null && Si[c], c != null && yi[c], d != null && Ci[d], d != null && bi[d], d != null && xi[d], f != null && Oi[f], f != null && bi[f], p != null && ki[p], p != null && xi[p], l != null && wi[l], l != null && Ei[l], u != null && Ti[u], u != null && Di[u], fp[e], o?.includes("top") && mp.top, o?.includes("bottom") && mp.bottom, o?.includes("start") && mp.start, o?.includes("end") && mp.end)),
			children: a
		})
	});
}
gp.displayName = "Section";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/MenuBottomSheet.js
function _p({ finalFocusRef: e, isOpen: t, onOpenChange: n, label: r, children: i }) {
	return /*#__PURE__*/ (0, W.jsx)(Kf, {
		finalFocusRef: e,
		isOpen: t,
		onOpenChange: n,
		label: r,
		height: "hug",
		purpose: "info",
		children: /*#__PURE__*/ (0, W.jsx)(gp, {
			paddingBlockStart: 4,
			paddingBlockEnd: 0,
			paddingInline: 1,
			children: i
		})
	});
}
_p.displayName = "MenuBottomSheet";
//#endregion
//#region node_modules/@astryxdesign/core/dist/List/ListContext.js
var vp = ei(null);
vp.displayName = "ListContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/List/List.js
var yp = {
	list: {
		kogj98: "x1ghz6dp",
		kZCmMZ: "x1c1uobl",
		kH6xsr: "x3ct3a4",
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kOIVth: "x1lsbc85",
		$$css: !0
	},
	withDividers: {
		kOIVth: "xxhr3t",
		$$css: !0
	},
	withCounter: {
		kt6KFK: "xif0320",
		$$css: !0
	}
}, bp = {
	kt6KFK: "x1khind5",
	$$css: !0
}, xp = { counterStart: (e) => [bp, { "--x-counterReset": `astryx-list ${e}` == null ? void 0 : `astryx-list ${e}` }] };
function Sp({ children: e, density: t = "balanced", hasDividers: n = !1, edgeCompensation: r, header: i, listStyle: a = "none", start: o, xstyle: s, className: c, style: l, "data-testid": u, ref: d, ...f }) {
	let p = (0, v.useId)(), m = a === "decimal", h = m ? "ol" : "ul", g = (0, v.useMemo)(() => ({
		density: t,
		hasDividers: n,
		listStyle: a,
		edgeCompensation: r
	}), [
		t,
		n,
		a,
		r
	]), _ = /*#__PURE__*/ (0, W.jsx)(h, {
		ref: d,
		...f,
		"data-testid": u,
		...i == null ? null : { "aria-labelledby": p },
		...m && o != null && o !== 1 ? { start: o } : {},
		role: "list",
		...K(U("list", {
			density: t,
			listStyle: a
		}), w(yp.list, n && yp.withDividers, a !== "none" && (o != null && o !== 1 ? xp.counterStart(o - 1) : yp.withCounter), s), c, l),
		children: e
	});
	return i == null ? /*#__PURE__*/ (0, W.jsx)(vp, {
		value: g,
		children: _
	}) : /*#__PURE__*/ (0, W.jsx)(vp, {
		value: g,
		children: /*#__PURE__*/ (0, W.jsxs)("div", {
			className: "x78zum5 xdt5ytf",
			children: [/*#__PURE__*/ (0, W.jsx)("div", {
				id: p,
				className: "x1p37lm5",
				children: i
			}), _]
		})
	});
}
Sp.displayName = "List";
//#endregion
//#region node_modules/@astryxdesign/core/dist/List/ListItem.js
var Cp = {
	withCounter: {
		kAmcRD: "xfrknyr",
		$$css: !0
	},
	inlineEdgeCompensation: {
		keTefX: "x1t1czy8",
		k71WvV: "x1cphv78",
		$$css: !0
	},
	withDivider: {
		kt9PQ7: "x92x3c3",
		kfdmCh: "x1q0q8m5",
		kL6WhQ: "xw8gpjh",
		kx8K5S: "x1t1lzn6",
		$$css: !0
	}
}, wp = { noRadius: {
	kaIpWk: "x2u8bby",
	$$css: !0
} };
function Tp({ label: e, description: t, startContent: n, endContent: r, onClick: i, interactiveRef: a, href: o, target: s, rel: c, isDisabled: l = !1, isSelected: u = !1, xstyle: d, className: f, style: p, ref: m, ...h }) {
	let g = (0, v.use)(vp), _ = g?.density ?? "balanced", y = g?.hasDividers ?? !1, b = g?.listStyle ?? "none", x = g?.edgeCompensation;
	return /*#__PURE__*/ (0, W.jsx)(dd, {
		as: "li",
		ref: m,
		marker: b === "disc" ? /*#__PURE__*/ (0, W.jsx)("span", {
			className: "xoi2r2e x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s x12xnipv x1233pnv",
			children: /*#__PURE__*/ (0, W.jsx)("span", { className: "x1v4s8kt xols6we x16rqkct x19aspcf" })
		}) : b === "circle" ? /*#__PURE__*/ (0, W.jsx)("span", {
			className: "xoi2r2e x9f619 x78zum5 x6s0dn4 xl56j7k x2lah0s x12xnipv x1233pnv",
			children: /*#__PURE__*/ (0, W.jsx)("span", { className: "x1v4s8kt xols6we x16rqkct xmkeg23 x1y0btm7 xqcx1ss xjbqb8w" })
		}) : b === "decimal" ? /*#__PURE__*/ (0, W.jsx)("span", { className: "xoi2r2e x2lah0s x1tgivj0 xjm74w1 xw6l6zx x12xnipv xc2ndz5" }) : null,
		startContent: n,
		label: e,
		description: t,
		endContent: r,
		onClick: i,
		interactiveRef: a,
		href: o,
		target: s,
		rel: c,
		isDisabled: l,
		isSelected: u,
		density: _,
		xstyle: [
			b !== "none" && Cp.withCounter,
			y && Cp.withDivider,
			y && wp.noRadius,
			x === "inline" && Cp.inlineEdgeCompensation,
			d
		],
		...K(U("list-item"), {
			className: f,
			style: p
		}),
		...h
	});
}
Tp.displayName = "ListItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/MenuBottomSheetActionList.js
var Ep = {
	destructiveAction: {
		"--_item-label-color": "xufyqxy",
		"--_item-description-color": "xqlix59",
		kMwMTN: "xjt36v0",
		$$css: !0
	},
	divider: {
		kqGvvJ: "xsq74q5",
		$$css: !0
	},
	sectionHeading: {
		kg3NbH: "xrrkdod",
		$$css: !0
	}
};
function Dp(e, t) {
	return `item-${e.id ?? t}`;
}
function Op({ items: e, onSelect: t, onOpenSubmenu: n }) {
	let r = (e, r) => {
		let i = e.items != null && e.items.length > 0, a = e.variant === "destructive";
		return /*#__PURE__*/ (0, W.jsx)(Tp, {
			label: e.label,
			description: e.description,
			startContent: e.icon ? Fc(e.icon, {
				size: "sm",
				color: a ? "error" : "secondary"
			}) : void 0,
			endContent: i ? /*#__PURE__*/ (0, W.jsx)(Nc, {
				icon: "chevronRight",
				size: "sm",
				color: "secondary",
				xstyle: Za.mirror
			}) : e.endContent,
			isDisabled: e.isDisabled,
			onClick: (r) => {
				Gi() === "pointer" && r.currentTarget.blur(), i ? n(e) : t(e);
			},
			xstyle: a && Ep.destructiveAction
		}, Dp(e, r));
	};
	return /*#__PURE__*/ (0, W.jsx)(Sp, {
		density: "spacious",
		children: e.map((e, t) => "type" in e && e.type === "divider" ? /*#__PURE__*/ (0, W.jsx)("li", {
			role: "presentation",
			className: "x3ct3a4",
			children: /*#__PURE__*/ (0, W.jsx)(Sd, { xstyle: Ep.divider })
		}, `divider-${t}`) : "type" in e && e.type === "section" ? /*#__PURE__*/ (0, W.jsx)("li", {
			className: "x3ct3a4",
			children: /*#__PURE__*/ (0, W.jsxs)("div", {
				role: "group",
				"aria-label": e.title,
				className: "x78zum5 xdt5ytf xzye2dw",
				children: [e.title && /*#__PURE__*/ (0, W.jsx)(Ru, {
					level: 4,
					xstyle: Ep.sectionHeading,
					children: e.title
				}), /*#__PURE__*/ (0, W.jsx)(Sp, {
					density: "spacious",
					children: e.items.map(r)
				})]
			})
		}, `section-${e.id ?? t}`) : r(e, t))
	});
}
Op.displayName = "MenuBottomSheetActionList";
//#endregion
//#region node_modules/@astryxdesign/core/dist/DropdownMenu/DropdownMenu.js
var kp = O["--spacing-4"];
`${kp}${kp}`;
var Ap = `calc(100vw - ${kp} - ${kp})`;
`${kp}${kp}`, `${kp}${kp}`, `${kp}`;
var jp = `calc(100% - ${kp})`;
`${kp}`, `${E["--color-overlay-pressed"]}${E["--color-overlay-pressed"]}`;
var Mp = {
	kzqmXN: "x1uyokj7",
	$$css: !0
}, Np = {
	triggerOpen: {
		kKwaWg: "xpl5ynk",
		$$css: !0
	},
	dropdown: {
		kB7OPa: "x9f619",
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kOIVth: "x1lsbc85",
		kI3sdo: "x1a2a7pz",
		ks0D6T: "xs2v1xk",
		kskxy: "x1hkkhfe",
		"--_dropdown-menu-radius": "x1fcsqxe",
		"--_dropdown-menu-padding": "xgory14",
		kmVPX3: "x9epnlk",
		kaIpWk: "x1n97fys",
		kSiTet: "x1hc1fzr",
		k1ekBW: "x19991ni",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	scrollable: {
		kORKVm: "x1odjw0f",
		kXHlph: "x6ikm8r",
		kZeWKH: "xish69e",
		$$css: !0
	},
	popoverViewport: {
		kB7OPa: "x9f619",
		kskxy: "x1hkkhfe",
		$$css: !0
	},
	popoverViewportAligned: {
		ks0D6T: "xbd96yr",
		$$css: !0
	},
	popoverViewportStart: {
		k71WvV: "xxeicf8",
		$$css: !0
	},
	popoverViewportEnd: {
		keTefX: "x47fqr9",
		$$css: !0
	},
	popoverViewportBlockStart: {
		k1K539: "x1kps3mo",
		$$css: !0
	},
	popoverViewportBlockEnd: {
		keoZOQ: "xsoubt3",
		$$css: !0
	},
	popoverViewportCentered: {
		keTefX: "x47fqr9",
		k71WvV: "xxeicf8",
		ks0D6T: "xs2v1xk",
		$$css: !0
	},
	popoverViewportBlockCentered: {
		keoZOQ: "xsoubt3",
		k1K539: "x1kps3mo",
		ks0D6T: "xs2v1xk",
		$$css: !0
	},
	popoverAligned: {
		k7Eaqz: "x1ks9poc",
		$$css: !0
	},
	popoverCentered: {
		k7Eaqz: "xagy28z",
		$$css: !0
	},
	popoverCustomWidth: (e) => [{
		k7Eaqz: e == null ? e : "xkj4a21",
		$$css: !0
	}, { "--x-minWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }],
	popoverCustomIntrinsicWidth: (e) => [Mp, { "--x-inlineSize": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }]
}, Pp = {
	content: {
		kzqmXN: "xh8yej3",
		$$css: !0
	},
	rootHeading: {
		keTefX: "x6i7dpz",
		$$css: !0
	},
	viewHeading: {
		kI3sdo: "x1a2a7pz",
		$$css: !0
	}
}, Fp = "@astryx.dropdownMenu.label";
function Ip({ button: e, isMenuOpen: t, onOpenChange: n, onClick: r, hasChevron: i = !0, items: a, presentation: o, menuWidth: s, placement: c, alignment: l, className: u, style: d, xstyle: f, "data-testid": p, ...m }) {
	let h = Fs(), g = e ?? { label: h(Fp) }, _ = h("@astryx.dropdownMenu.back"), y = (0, v.useRef)(null), b = (0, v.useRef)(null), x = (0, v.useRef)("pointer"), { isFocusRingSuppressed: S, onFocusReturnTargetFocus: C, prepareFocusReturn: T, resetFocusReturn: E } = Kd(), D = (0, v.useRef)(null), O = (0, v.useRef)(0), [k, A] = (0, v.useState)(!1), [j, M] = (0, v.useState)([]), N = t !== void 0, P = N ? t : k, [F, ee] = (0, v.useState)(P);
	F !== P && (ee(P), !P && j.length > 0 && M([]));
	let I = j.at(-1), te = I?.items ?? a, L = I?.label ?? g.label, ne = typeof L == "string" ? L : g.label, R = (0, v.useCallback)((e) => {
		e ? E() : (M([]), T()), n?.(e), N || A(e);
	}, [
		N,
		n,
		T,
		E
	]), re = (0, v.useCallback)((e) => {
		e.isDisabled || (e.onClick?.(), e.hasCloseOnSelect !== !1 && R(!1));
	}, [R]), ie = g.isIconOnly === !0, ae = g.endContent ?? (i && !ie ? /*#__PURE__*/ (0, W.jsx)(Nc, {
		icon: "chevronDown",
		size: "sm",
		color: "inherit"
	}) : void 0);
	return (0, v.useEffect)(() => {
		if (!P || x.current !== "keyboard") return;
		let e = requestAnimationFrame(() => {
			b.current?.querySelector("button:not(:disabled), a[href]")?.focus({ preventScroll: !0 });
		});
		return () => cancelAnimationFrame(e);
	}, [te, P]), (0, v.useEffect)(() => {
		if (!P) {
			O.current = 0;
			return;
		}
		if (j.length === O.current) return;
		O.current = j.length;
		let e = requestAnimationFrame(() => {
			D.current?.focus({ preventScroll: !0 });
		});
		return () => cancelAnimationFrame(e);
	}, [P, j.length]), /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(Cc, {
		...g,
		ref: y,
		xstyle: [
			P && Np.triggerOpen,
			g.xstyle,
			S && to.suppressed
		],
		tooltip: P ? void 0 : g.tooltip,
		endContent: ae,
		onPointerDown: (e) => {
			g.onPointerDown?.(e), x.current = "pointer";
		},
		onKeyDown: (e) => {
			g.onKeyDown?.(e), (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (x.current = "keyboard");
		},
		onFocus: (e) => {
			g.onFocus?.(e), C();
		},
		onClick: () => {
			r?.(), R(!P);
		},
		"aria-haspopup": "dialog",
		"aria-expanded": P,
		"data-testid": p
	}), /*#__PURE__*/ (0, W.jsx)(_p, {
		isOpen: P,
		onOpenChange: R,
		finalFocusRef: y,
		label: ne,
		children: /*#__PURE__*/ (0, W.jsxs)("div", {
			ref: b,
			...m,
			...K(U("dropdown-menu", { presentation: "bottom-sheet" }), w(Pp.content, f), u, d),
			children: [/*#__PURE__*/ (0, W.jsxs)("div", {
				className: "x78zum5 x1q0g3np x6s0dn4 xzye2dw x1p37lm5",
				children: [j.length > 0 && /*#__PURE__*/ (0, W.jsx)(Cc, {
					label: _,
					variant: "ghost",
					size: "sm",
					icon: /*#__PURE__*/ (0, W.jsx)(Nc, {
						icon: "chevronLeft",
						size: "sm",
						xstyle: Za.mirror
					}),
					isIconOnly: !0,
					onClick: () => M((e) => e.slice(0, -1))
				}), /*#__PURE__*/ (0, W.jsx)(Ru, {
					ref: D,
					level: 3,
					tabIndex: -1,
					xstyle: [Pp.viewHeading, j.length === 0 && Pp.rootHeading],
					children: L
				})]
			}), /*#__PURE__*/ (0, W.jsx)(Op, {
				items: te,
				onSelect: re,
				onOpenSubmenu: (e) => M((t) => [...t, e])
			})]
		})
	})] });
}
function Lp({ button: e, isMenuOpen: t, onOpenChange: n, menuWidth: r, onClick: i, hasChevron: a = !0, placement: o = "below", alignment: s = "start", presentation: c, className: l, style: u, xstyle: d, "data-testid": f, ...p }) {
	let m = Fs(), h = e ?? { label: m(Fp) }, g = ("items" in p ? p.items : void 0) ?? [], _ = p.children, { items: b, children: x, ...S } = p, C = (0, v.useId)(), T = h.size ?? "md", E = (0, v.useRef)(null), [D, k] = (0, v.useState)(!1), A = t !== void 0, j = A ? t : D, M = (0, v.useRef)(!1), N = (0, v.useRef)(!1), P = (0, v.useRef)(!1), F = (0, v.useRef)(!1);
	Wi();
	let ee = (0, v.useCallback)(() => {
		if (F.current) {
			F.current = !1;
			return;
		}
		P.current = !1, n?.(!1), A || k(!1);
		let e = E.current;
		Gi() === "keyboard" ? e?.focus() : document.activeElement === e && e?.blur();
	}, [A, n]), I = (0, v.useRef)(!1), te = (0, v.useRef)("keyboard"), L = rd({
		onHide: ee,
		onShow: (0, v.useCallback)(() => {
			M.current = !0, N.current && (N.current = !1, i?.()), n?.(!0), A || k(!0);
		}, [
			A,
			i,
			n
		]),
		hasLightDismiss: !0,
		hasCloseButton: !1,
		hasAutoFocus: !1,
		role: "none"
	}), ne = (0, v.useCallback)(() => {
		L.hide();
	}, [L]), { listRef: R, handleKeyDown: re, focusFirst: ie, focusItem: ae, ownsEvent: oe, getItems: se } = Hc({
		itemSelector: Nd,
		boundarySelector: Pd,
		wrap: !1,
		onEscape: ne
	}), ce = Il({
		getItemLabels: () => se().map((e) => e.textContent),
		onMatch: ae,
		getCurrentIndex: () => se().findIndex((e) => e === document.activeElement || e.contains(document.activeElement))
	}), le = (0, v.useRef)(A && t === !0);
	y(() => {
		A && (t ? (P.current = !1, L.isOpen || (I.current = !le.current, L.show())) : (le.current = !1, L.isOpen && (F.current = P.current, P.current = !1, L.hide())));
	}, [
		t,
		A,
		L
	]), (0, v.useEffect)(() => {
		L.isOpen && I.current && (I.current = !1, requestAnimationFrame(() => {
			(te.current === "pointer" || !ie()) && R.current?.focus(), te.current = "keyboard";
		}));
	}, [
		L.isOpen,
		ie,
		R
	]);
	let ue = (0, v.useCallback)((e) => {
		if (oe(e)) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				let t = document.activeElement;
				t && Md.has(t.getAttribute("role") ?? "") && t.click();
				return;
			}
			if (e.key === "Tab") {
				ne();
				return;
			}
			if (ce.onKeyDown(e)) {
				e.preventDefault();
				return;
			}
			re(e);
		}
	}, [
		re,
		ne,
		ce,
		oe
	]), z = (0, v.useCallback)((e = "keyboard", t = !1) => (M.current = !1, N.current = t, P.current = A, te.current = e, I.current = !0, L.show(), M.current ? !0 : (N.current = !1, P.current = !1, te.current = "keyboard", I.current = !1, !1)), [A, L]), B = (0, v.useCallback)((e) => {
		let r = e.detail === 0 ? "keyboard" : "pointer";
		A ? t ? (i?.(), n?.(!1)) : z(r, !0) : L.isOpen ? (i?.(), L.hide()) : z(r, !0);
	}, [
		i,
		A,
		n,
		t,
		L,
		z
	]), V = (0, v.useCallback)((e) => {
		if (!L.isOpen) {
			(e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), z());
			return;
		}
		e.key === "ArrowDown" && (e.preventDefault(), ie() || R.current?.focus());
	}, [
		L.isOpen,
		z,
		ie,
		R
	]), de = h.isIconOnly === !0, fe = h.endContent ?? (a && !de ? /*#__PURE__*/ (0, W.jsx)(Nc, {
		icon: "chevronDown",
		size: "sm",
		color: "inherit"
	}) : void 0), pe = r ? jd(r, s === "center" ? Ap : jp) : null, me = pe ? pe.property === "inlineSize" ? Np.popoverCustomIntrinsicWidth(pe.value) : Np.popoverCustomWidth(pe.value) : s === "center" ? Np.popoverCentered : Np.popoverAligned, H = o === "start" || o === "end", he = (0, v.useMemo)(() => ({
		closeMenu: ne,
		menuSize: T
	}), [ne, T]), ge = p.items === void 0 ? _ : Gd(g), _e = kd(R, ge, L.isOpen);
	return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(Cc, {
		...h,
		ref: (e) => {
			E.current = e, L.triggerRef(e);
			let t = h.ref;
			typeof t == "function" ? t(e) : t && (t.current = e);
		},
		xstyle: [j && Np.triggerOpen, h.xstyle],
		tooltip: j ? void 0 : h.tooltip,
		endContent: fe,
		onClick: B,
		onKeyDown: V,
		"aria-haspopup": "menu",
		"aria-expanded": j,
		"aria-controls": C,
		"data-testid": f
	}), L.render(/*#__PURE__*/ (0, W.jsx)("div", {
		...S,
		ref: R,
		id: C,
		role: "menu",
		tabIndex: _e ? 0 : -1,
		"aria-label": h.label,
		onKeyDown: ue,
		...K(U("dropdown-menu"), w(Np.dropdown, _e && Np.scrollable, d), l, u),
		children: /*#__PURE__*/ (0, W.jsx)(fd, {
			value: he,
			children: ge
		})
	}), {
		placement: o,
		alignment: s,
		offset: O["--spacing-1"],
		xstyle: [
			Np.popoverViewport,
			s === "center" ? H ? Np.popoverViewportBlockCentered : Np.popoverViewportCentered : [Np.popoverViewportAligned, H ? s === "start" ? Np.popoverViewportBlockStart : Np.popoverViewportBlockEnd : s === "start" ? Np.popoverViewportStart : Np.popoverViewportEnd],
			me,
			Zi[o]
		]
	})] });
}
function Rp(e) {
	let { onOpenChange: t } = e, n = Jd("items" in e ? e.presentation ?? "popover" : "popover"), r = e.isMenuOpen !== void 0, [i, a] = (0, v.useState)(!1), o = r ? e.isMenuOpen : i, s = (0, v.useCallback)((e) => {
		t?.(e), r || a(e);
	}, [r, t]), c = {
		...e,
		isMenuOpen: o,
		onOpenChange: s
	};
	return n === "bottom-sheet" && "items" in e && e.items !== void 0 ? /*#__PURE__*/ (0, W.jsx)(Ip, {
		...c,
		presentation: "bottom-sheet"
	}) : /*#__PURE__*/ (0, W.jsx)(Lp, {
		...c,
		presentation: "popover"
	});
}
Rp.displayName = "DropdownMenu";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogContext.js
var zp = /*#__PURE__*/ (0, v.createContext)(null);
zp.displayName = "DialogContext";
function Bp() {
	return (0, v.use)(zp);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/Dialog.js
function Vp(e, t = 16) {
	let n = e.getBoundingClientRect(), r = n.left + n.width / 2 - window.innerWidth / 2, i = n.top + n.height / 2 - window.innerHeight / 2, a = Math.sqrt(r * r + i * i) || 1;
	return {
		x: Math.round(r / a * t),
		y: Math.round(i / a * t)
	};
}
`${O["--spacing-4"]}`, `${O["--spacing-4"]}`, `${O["--spacing-4"]}`, `${O["--spacing-4"]}`, `${O["--spacing-4"]}`, `${O["--spacing-4"]}`;
var Hp = {
	dialog: {
		kVAEAm: "xixxii4",
		kogj98: "x1bpp3o7",
		kmVPX3: "x1717udv",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kWkggS: "x10xzikg",
		"--_dialog-radius": "xvuvksw",
		kaIpWk: "xuacgfc",
		kGVxlE: "x1kcpxr7",
		k1xSpc: "x1s85apg",
		kXwgrk: "xdt5ytf",
		kZKoxP: "xg7h5cd",
		kZeWKH: "xish69e",
		kSiTet: "xg01cxk",
		k44tkh: "xqgcaz",
		kyAemX: "x128ha8g",
		kWV6AL: "xskzprw",
		$$css: !0
	},
	open: {
		k1xSpc: "x78zum5",
		kSiTet: "x1hc1fzr",
		kKVMdj: "x1ewfqum x1aquc0h",
		$$css: !0
	},
	backdrop: {
		kGyWv1: "xnixb3f",
		kba3nw: "x1abwkk1",
		$$css: !0
	},
	fullscreen: {
		kzqmXN: "x1o6l61p",
		kZKoxP: "xtdtrs8",
		ks0D6T: "xlbgzzq",
		kskxy: "x1wj9ous",
		kaIpWk: "x2u8bby",
		kogj98: "x1ghz6dp",
		kpwlN0: "x10a8y8t",
		$$css: !0
	},
	fullscreenOpen: {
		kKVMdj: "xqcmdr3 x1aquc0h",
		$$css: !0
	},
	fullscreenSafeArea: {
		kLKAdn: "x15ld1ci",
		kGO01o: "x1rgxemn",
		kZCmMZ: "xqmdmw x1i7f2ot",
		kwRFfy: "x1by8st6 xtjjor6",
		$$css: !0
	},
	inner: {
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kUk6DE: "x12lumcd",
		kAzted: "x2lwn1j",
		kVQacm: "xb3r6kr",
		kaIpWk: "x1pjcqnp",
		$$css: !0
	},
	inlineWrapper: {
		kmVPX3: "x1717udv",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kWkggS: "x10xzikg",
		"--_dialog-radius": "xvuvksw",
		kaIpWk: "xuacgfc",
		kGVxlE: "x1kcpxr7",
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kZKoxP: "xg7h5cd",
		kZeWKH: "xish69e",
		$$css: !0
	}
}, Up = O["--spacing-4"], Wp = `min(100%, ${`calc(100dvw - ${Up} - ${Up})`})`;
function Gp(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function Kp(e, t) {
	return {
		width: Gp(e),
		maxWidth: Wp,
		maxHeight: Gp(t)
	};
}
var qp = {
	kogj98: "x1ghz6dp",
	$$css: !0
}, Jp = {
	sizing: (e, t, n) => [{
		kzqmXN: e == null ? e : "x5lhr3w",
		ks0D6T: t == null ? t : "xf68679",
		kskxy: n == null ? n : "x1jols5v",
		$$css: !0
	}, {
		"--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e),
		"--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t),
		"--x-maxHeight": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(n)
	}],
	position: (e, t, n, r) => [
		qp,
		{
			k87sOh: e == null ? e : "xjbys53",
			kLqNvP: t == null ? t : "x1lxsm33",
			kt4wiu: n == null ? n : "xqxgn94",
			krVfgx: r == null ? r : "x1nqzi6q",
			$$css: !0
		},
		{
			"--x-top": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e),
			"--x-insetInlineStart": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t),
			"--x-insetInlineEnd": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(n),
			"--x-bottom": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(r)
		}
	]
};
function Yp(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function Xp(e) {
	let { top: t, bottom: n, start: r, end: i } = e;
	return {
		top: t === void 0 ? "auto" : Yp(t),
		bottom: n === void 0 ? "auto" : Yp(n),
		insetInlineStart: r === void 0 ? "auto" : Yp(r),
		insetInlineEnd: i === void 0 ? "auto" : Yp(i)
	};
}
function Zp({ isOpen: e, isInline: t = !1, onOpenChange: n, width: r = 400, maxHeight: i = "75dvh", position: a, variant: o = "standard", purpose: s = "info", padding: c, children: l, xstyle: u, className: d, style: f, ref: p, ...m }) {
	let h = c == null, g = c ?? 4, _ = _i[g], y = o === "fullscreen", b = y ? null : Kp(r, i), x = (0, v.useId)(), S = (0, v.useMemo)(() => ({
		isInline: t,
		titleId: x
	}), [t, x]), C = m["aria-label"] != null || m["aria-labelledby"] != null, T = (0, v.useRef)(null), E = io(p, (0, v.useCallback)((e) => {
		T.current = e, e && !C && (e.querySelector(`#${CSS.escape(x)}`) == null ? e.removeAttribute("aria-labelledby") : e.setAttribute("aria-labelledby", x));
	}, [x, C])), D = (0, v.useRef)(null), O = s !== "required", k = s === "info";
	(0, v.useEffect)(() => {
		if (t) return;
		let n = T.current;
		if (n) {
			if (e) {
				D.current = document.activeElement;
				let e = D.current;
				if (e && e !== document.body) {
					let t = Vp(e);
					n.style.setProperty("--dialog-dir-x", `${t.x}px`), n.style.setProperty("--dialog-dir-y", `${t.y}px`);
				} else n.style.setProperty("--dialog-dir-x", "0px"), n.style.setProperty("--dialog-dir-y", "16px");
				if (!n.open) {
					n.showModal();
					let e = n.querySelector("[data-autofocus]");
					e && e.focus();
				}
			} else n.open && n.close(), D.current?.focus(), D.current = null;
		}
	}, [e, t]), hu(e && !t);
	let { shouldDismissOnCloseRequest: A } = ba({
		isActive: e,
		isEnabled: !t,
		escapeBehavior: O ? "close" : "block",
		onDismiss: () => {
			n(!1);
		}
	}), j = (0, v.useRef)(!1);
	(0, v.useEffect)(() => {
		let n = T.current?.querySelector(`#${CSS.escape(x)}`) != null;
		e && !t && !C && !n && !j.current && (j.current = !0);
	}, [
		e,
		t,
		C,
		x
	]);
	let M = (e) => {
		e.target === e.currentTarget && k && n(!1);
	}, N = (e) => {
		e.preventDefault(), A() && O && n(!1);
	}, P = /*#__PURE__*/ (0, W.jsx)("div", {
		...w(Hp.inner, ...dp(h ? {
			useThemeDefault: "dialog",
			maxHeight: b?.maxHeight
		} : {
			paddingInnerX: _,
			paddingInnerY: _,
			paddingOuterX: _,
			paddingOuterY: _,
			maxHeight: b?.maxHeight
		}), !h && g !== 4 && vi[g], !h && g !== 4 && yi[g], !h && g !== 4 && bi[g], !h && g !== 4 && xi[g], y && h && Hp.fullscreenSafeArea),
		children: /*#__PURE__*/ (0, W.jsx)(zp, {
			value: S,
			children: l
		})
	}), F = a != null && !y, { open: ee, ...I } = m;
	return t ? e ? /*#__PURE__*/ (0, W.jsx)("div", {
		...I,
		...K(U("dialog", { variant: o }), w(gi.reset, Hp.inlineWrapper, ji.reset, b && Jp.sizing(b.width, b.maxWidth, b.maxHeight), y && Hp.fullscreen, u), d, f),
		"data-testid": m["data-testid"],
		children: /*#__PURE__*/ (0, W.jsx)(G, { children: /*#__PURE__*/ (0, W.jsx)(ti, { children: P }) })
	}) : null : /*#__PURE__*/ (0, W.jsx)("dialog", {
		ref: E,
		...I,
		...K(U("dialog", { variant: o }), ro.focusVisible(gi.reset, Hp.dialog, ji.reset, e && Hp.open, Hp.backdrop, b && Jp.sizing(b.width, b.maxWidth, b.maxHeight), F && (() => {
			let e = Xp(a);
			return Jp.position(e.top, e.insetInlineStart, e.insetInlineEnd, e.bottom);
		})(), y && Hp.fullscreen, y && e && Hp.fullscreenOpen, u), d, f),
		onClick: M,
		onCancel: N,
		"aria-modal": "true",
		...s === "required" ? { role: "alertdialog" } : void 0,
		children: /*#__PURE__*/ (0, W.jsx)(G, { children: /*#__PURE__*/ (0, W.jsx)(ti, { children: P }) })
	});
}
Zp.displayName = "Dialog";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutDividerContext.js
var Qp = ei(null);
Qp.displayName = "LayoutDividerContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutHeader.js
var $p = {
	header: {
		kmuXW: "x2lah0s",
		$$css: !0
	},
	inner: {
		kB7OPa: "x9f619",
		ks0D6T: "xjl2t3p",
		kUOVxO: "xvueqy4",
		kZCmMZ: "x139j0dd",
		kwRFfy: "xpc6k2p",
		kLKAdn: "x81pis9",
		kGO01o: "xg476vw",
		"--container-padding-inline-start": "xdvaxxn",
		"--container-padding-inline-end": "xqpvj4r",
		"--container-padding-block-start": "xzz8v79",
		"--container-padding-block-end": "xi9ns85",
		$$css: !0
	},
	fullBleed: {
		kZCmMZ: "x1c1uobl",
		kwRFfy: "xyri2b",
		kLKAdn: "xexx8yu",
		kGO01o: "x18d9i69",
		"--container-padding-inline-start": "xrhngw9",
		"--container-padding-inline-end": "xjsfl84",
		"--container-padding-block-start": "x1047aw6",
		"--container-padding-block-end": "xax9j7h",
		$$css: !0
	},
	divider: {
		kt9PQ7: "xso031l",
		kfdmCh: "x1q0q8m5",
		kL6WhQ: "xw8gpjh",
		$$css: !0
	}
}, em = { sizing: (e) => [{
	kZKoxP: e == null ? e : "x16ye13r",
	$$css: !0
}, { "--x-height": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function tm({ children: e, hasDivider: t, height: n, label: r, padding: i, paddingBlockEnd: a, role: o, xstyle: s, className: c, style: l, ref: u, ...d }) {
	let f = (0, v.use)(Qp), p = t ?? f?.defaultHasDividers ?? !1, m = i === 0;
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: u,
		role: o,
		"aria-label": r,
		"data-divider": p || void 0,
		...K(U("layout-header"), w($p.header, em.sizing(n ?? null), p && $p.divider, s), c, l),
		...d,
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			...w($p.inner, m && $p.fullBleed, i != null && vi[i], i != null && yi[i], i != null && bi[i], i != null && xi[i], a != null && ki[a], a != null && xi[a]),
			children: e
		})
	});
}
tm.displayName = "LayoutHeader";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogHeader.js
var nm = { titleFocusable: {
	kI3sdo: "x1a2a7pz",
	$$css: !0
} };
function rm({ title: e, subtitle: t, onOpenChange: n, startContent: r, endContent: i, endContentEdgeCompensation: a, hasDivider: o, xstyle: s, className: c, style: l, ref: u, ...d }) {
	let f = Fs(), p = (0, v.useRef)(null), m = Bp(), h = m?.isInline !== !0, g = m?.titleId, _ = t != null && typeof t != "boolean" && t !== "", y = a == null ? n != null : a === "block" || a === "all", b = a == null ? n != null : a === "inline" || a === "all";
	return (0, v.useEffect)(() => {
		h && p.current && p.current.focus();
	}, [h]), /*#__PURE__*/ (0, W.jsx)(tm, {
		ref: u,
		hasDivider: o,
		xstyle: s,
		className: c,
		style: l,
		...d,
		children: /*#__PURE__*/ (0, W.jsxs)("div", {
			...K(U("dialog-header"), { className: "x78zum5 x1cy8zhl x1qughib xjcht0a" }),
			children: [
				r && /*#__PURE__*/ (0, W.jsx)("div", {
					...K(U("dialog-header-start-content"), { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" }),
					children: r
				}),
				/*#__PURE__*/ (0, W.jsxs)("div", {
					...K(U("dialog-header-title-block"), { className: "x78zum5 xdt5ytf xsn7fz1 x98rzlu xeuugli xqixskq" }),
					children: [/*#__PURE__*/ (0, W.jsx)(Ru, {
						ref: p,
						id: g,
						level: 2,
						tabIndex: -1,
						xstyle: nm.titleFocusable,
						children: e
					}), _ && /*#__PURE__*/ (0, W.jsx)(lo, {
						type: "body",
						size: "sm",
						color: "secondary",
						children: t
					})]
				}),
				(i || n) && /*#__PURE__*/ (0, W.jsxs)("div", {
					...K(U("dialog-header-end-content"), {
						0: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" },
						2: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f" },
						1: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s x3kzqx6" },
						3: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f x3kzqx6" }
					}[!!y << 1 | !!b << 0]),
					children: [i, n && /*#__PURE__*/ (0, W.jsx)(Cc, {
						variant: "ghost",
						label: f("@astryx.dialog.close"),
						tooltip: f("@astryx.dialog.close"),
						icon: /*#__PURE__*/ (0, W.jsx)(Nc, {
							icon: "close",
							color: "inherit",
							...U("dialog-header-close-icon")
						}),
						onClick: () => {
							n?.(!1);
						},
						isIconOnly: !0
					})]
				})
			]
		})
	});
}
rm.displayName = "DialogHeader";
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var im = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function am(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: im(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var om = (e) => {
	let t = "", n = !1;
	for (let r of e) {
		if (r === "-" || r === "_" || r <= " ") {
			n = t.length > 0;
			continue;
		}
		t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1;
	}
	return t;
}, sm = (e) => {
	let t = om(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, cm = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), lm = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function um(e) {
	return e != null;
}
function dm(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? lm.width, a = e.size ?? e.height ?? lm.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? cm(...c) : cm("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? lm["stroke-width"]) * Number(e.size ?? e.width ?? lm.width) / Number(t.size ?? t.width ?? lm.width) : t.strokeWidth ?? lm["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(lm).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && um(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && um(t.width) && { [r("width")]: t.width },
			..."height" in t && um(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function fm(e, t = {}) {
	return dm(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var pm = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, mm = (0, v.createContext)({}), hm = () => (0, v.useContext)(mm), gm = (0, v.forwardRef)(({ color: e, size: t, width: n, height: r, strokeWidth: i, absoluteStrokeWidth: a, nonScalingStroke: o, className: s = "", children: c, iconNode: l = [], icon: u = {
	node: l,
	aliases: [],
	size: 24
}, ...d }, f) => {
	let { size: p = 24, strokeWidth: m = 2, absoluteStrokeWidth: h = !1, nonScalingStroke: g = !1, color: _ = "currentColor", className: y = "" } = hm() ?? {}, b = !!c || pm(d), [x, S, C = []] = fm(u, {
		color: e ?? _,
		width: n ?? t ?? p,
		height: r ?? t ?? p,
		strokeWidth: i ?? m,
		absoluteStrokeWidth: a ?? h,
		nonScalingStroke: o ?? g,
		className: cm(y, s),
		hasA11yProp: b,
		attributes: d
	});
	return (0, v.createElement)(x, {
		ref: f,
		...S
	}, [...C.map(([e, t]) => (0, v.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function Q(e, t = [], n = []) {
	let r = typeof e == "string" ? am(e, t, n) : e, i = (0, v.forwardRef)(({ className: e, ...t }, n) => (0, v.createElement)(gm, {
		ref: n,
		icon: r,
		className: e,
		...t
	}));
	return r.name && (i.displayName = sm(r.name)), i;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var _m = {
	name: "arrow-down",
	size: 24,
	node: [["path", {
		d: "M12 5v14",
		key: "s699le"
	}], ["path", {
		d: "m19 12-7 7-7-7",
		key: "1idqje"
	}]]
};
_m.node;
var vm = Q(_m), ym = {
	name: "arrow-up-down",
	size: 24,
	node: [
		["path", {
			d: "m21 16-4 4-4-4",
			key: "f6ql7i"
		}],
		["path", {
			d: "M17 20V4",
			key: "1ejh1v"
		}],
		["path", {
			d: "m3 8 4-4 4 4",
			key: "11wl7u"
		}],
		["path", {
			d: "M7 4v16",
			key: "1glfcx"
		}]
	]
};
ym.node;
var bm = Q(ym), xm = {
	name: "arrow-up",
	size: 24,
	node: [["path", {
		d: "m5 12 7-7 7 7",
		key: "hav0vg"
	}], ["path", {
		d: "M12 19V5",
		key: "x0mq9r"
	}]]
};
xm.node;
var Sm = Q(xm), Cm = {
	name: "book-open",
	size: 24,
	node: [["path", {
		d: "M12 5v16",
		key: "1f6ucr"
	}], ["path", {
		d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
		key: "1fyvmf"
	}]]
};
Cm.node;
var wm = Q(Cm), Tm = {
	name: "bookmark-check",
	size: 24,
	node: [["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}], ["path", {
		d: "m9 10 2 2 4-4",
		key: "1gnqz4"
	}]]
};
Tm.node;
var Em = Q(Tm), Dm = {
	name: "bookmark",
	size: 24,
	node: [["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}]]
};
Dm.node;
var Om = Q(Dm), km = {
	name: "calendar",
	size: 24,
	node: [
		["path", {
			d: "M8 2v3",
			key: "1ioesn"
		}],
		["path", {
			d: "M16 2v3",
			key: "otl347"
		}],
		["rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			key: "h1oib"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}]
	]
};
km.node;
var Am = Q(km), jm = {
	name: "check-check",
	size: 24,
	node: [["path", {
		d: "M18 6 7 17l-5-5",
		key: "116fxf"
	}], ["path", {
		d: "m22 10-7.5 7.5L13 16",
		key: "ke71qq"
	}]]
};
jm.node;
var Mm = Q(jm), Nm = {
	name: "check",
	size: 24,
	node: [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]]
};
Nm.node;
var Pm = Q(Nm), Fm = {
	name: "chevron-down",
	size: 24,
	node: [["path", {
		d: "m6 9 6 6 6-6",
		key: "qrunsl"
	}]]
};
Fm.node;
var Im = Q(Fm), Lm = {
	name: "chevron-left",
	size: 24,
	node: [["path", {
		d: "m15 18-6-6 6-6",
		key: "1wnfg3"
	}]]
};
Lm.node;
var Rm = Q(Lm), zm = {
	name: "chevron-right",
	size: 24,
	node: [["path", {
		d: "m9 18 6-6-6-6",
		key: "mthhwq"
	}]]
};
zm.node;
var Bm = Q(zm), Vm = {
	name: "chevrons-left",
	size: 24,
	node: [["path", {
		d: "m11 17-5-5 5-5",
		key: "13zhaf"
	}], ["path", {
		d: "m18 17-5-5 5-5",
		key: "h8a8et"
	}]]
};
Vm.node;
var Hm = Q(Vm), Um = {
	name: "chevrons-right",
	size: 24,
	node: [["path", {
		d: "m6 17 5-5-5-5",
		key: "xnjwq"
	}], ["path", {
		d: "m13 17 5-5-5-5",
		key: "17xmmf"
	}]]
};
Um.node;
var Wm = Q(Um), Gm = {
	name: "circle-check-big",
	size: 24,
	node: [["path", {
		d: "M21.801 10A10 10 0 1 1 17 3.335",
		key: "yps3ct"
	}], ["path", {
		d: "m9 11 3 3L22 4",
		key: "1pflzl"
	}]],
	aliases: ["check-circle"]
};
Gm.node;
var Km = Q(Gm), qm = {
	name: "circle-x",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["path", {
			d: "m15 9-6 6",
			key: "1uzhvr"
		}],
		["path", {
			d: "m9 9 6 6",
			key: "z0biqf"
		}]
	],
	aliases: ["x-circle"]
};
qm.node;
var Jm = Q(qm), Ym = {
	name: "clock",
	size: 24,
	node: [["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}], ["path", {
		d: "M12 6v6l4 2",
		key: "mmk7yg"
	}]]
};
Ym.node;
var Xm = Q(Ym), Zm = {
	name: "columns-2",
	size: 24,
	node: [["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}], ["path", {
		d: "M12 3v18",
		key: "108xh3"
	}]],
	aliases: ["columns"]
};
Zm.node;
var Qm = Q(Zm), $m = {
	name: "copy",
	size: 24,
	node: [["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}], ["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]]
};
$m.node;
var eh = Q($m), th = {
	name: "ellipsis",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "1",
			key: "41hilf"
		}],
		["circle", {
			cx: "19",
			cy: "12",
			r: "1",
			key: "1wjl8i"
		}],
		["circle", {
			cx: "5",
			cy: "12",
			r: "1",
			key: "1pcz8c"
		}]
	],
	aliases: ["more-horizontal"]
};
th.node;
var nh = Q(th), rh = {
	name: "external-link",
	size: 24,
	node: [
		["path", {
			d: "M15 3h6v6",
			key: "1q9fwt"
		}],
		["path", {
			d: "M10 14 21 3",
			key: "gplh6r"
		}],
		["path", {
			d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
			key: "a6xqqp"
		}]
	]
};
rh.node;
var ih = Q(rh), ah = {
	name: "eye-off",
	size: 24,
	node: [
		["path", {
			d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
			key: "ct8e1f"
		}],
		["path", {
			d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
			key: "151rxh"
		}],
		["path", {
			d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
			key: "13bj9a"
		}],
		["path", {
			d: "m2 2 20 20",
			key: "1ooewy"
		}]
	]
};
ah.node;
var oh = Q(ah), sh = {
	name: "funnel",
	size: 24,
	node: [["path", {
		d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
		key: "sc7q7i"
	}]],
	aliases: ["filter"]
};
sh.node;
var ch = Q(sh), lh = {
	name: "hard-drive",
	size: 24,
	node: [
		["path", {
			d: "M10 16h.01",
			key: "1bzywj"
		}],
		["path", {
			d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
			key: "18tbho"
		}],
		["path", {
			d: "M21.946 12.013H2.054",
			key: "zqlbp7"
		}],
		["path", {
			d: "M6 16h.01",
			key: "1pmjb7"
		}]
	]
};
lh.node;
var uh = Q(lh), dh = {
	name: "info",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["path", {
			d: "M12 16v-4",
			key: "1dtifu"
		}],
		["path", {
			d: "M12 8h.01",
			key: "e9boi3"
		}]
	]
};
dh.node;
var fh = Q(dh), ph = {
	name: "keyboard",
	size: 24,
	node: [
		["path", {
			d: "M10 8h.01",
			key: "1r9ogq"
		}],
		["path", {
			d: "M12 12h.01",
			key: "1mp3jc"
		}],
		["path", {
			d: "M14 8h.01",
			key: "1primd"
		}],
		["path", {
			d: "M16 12h.01",
			key: "1l6xoz"
		}],
		["path", {
			d: "M18 8h.01",
			key: "emo2bl"
		}],
		["path", {
			d: "M6 8h.01",
			key: "x9i8wu"
		}],
		["path", {
			d: "M7 16h10",
			key: "wp8him"
		}],
		["path", {
			d: "M8 12h.01",
			key: "czm47f"
		}],
		["rect", {
			width: "20",
			height: "16",
			x: "2",
			y: "4",
			rx: "2",
			key: "18n3k1"
		}]
	]
};
ph.node;
var mh = Q(ph), hh = {
	name: "layout-grid",
	size: 24,
	node: [
		["rect", {
			width: "7",
			height: "7",
			x: "3",
			y: "3",
			rx: "1",
			key: "1g98yp"
		}],
		["rect", {
			width: "7",
			height: "7",
			x: "14",
			y: "3",
			rx: "1",
			key: "6d4xhi"
		}],
		["rect", {
			width: "7",
			height: "7",
			x: "14",
			y: "14",
			rx: "1",
			key: "nxv5o0"
		}],
		["rect", {
			width: "7",
			height: "7",
			x: "3",
			y: "14",
			rx: "1",
			key: "1bb6yr"
		}]
	]
};
hh.node;
var gh = Q(hh), _h = {
	name: "library",
	size: 24,
	node: [
		["path", {
			d: "m16 6 4 14",
			key: "ji33uf"
		}],
		["path", {
			d: "M12 6v14",
			key: "1n7gus"
		}],
		["path", {
			d: "M8 8v12",
			key: "1gg7y9"
		}],
		["path", {
			d: "M4 4v16",
			key: "6qkkli"
		}]
	]
};
_h.node;
var vh = Q(_h), yh = {
	name: "menu",
	size: 24,
	node: [
		["path", {
			d: "M4 5h16",
			key: "1tepv9"
		}],
		["path", {
			d: "M4 12h16",
			key: "1lakjw"
		}],
		["path", {
			d: "M4 19h16",
			key: "1djgab"
		}]
	]
};
yh.node;
var bh = Q(yh), xh = {
	name: "mic",
	size: 24,
	node: [
		["path", {
			d: "M12 19v3",
			key: "npa21l"
		}],
		["path", {
			d: "M19 10v2a7 7 0 0 1-14 0v-2",
			key: "1vc78b"
		}],
		["rect", {
			x: "9",
			y: "2",
			width: "6",
			height: "13",
			rx: "3",
			key: "s6n7sd"
		}]
	]
};
xh.node;
var Sh = Q(xh), Ch = {
	name: "scroll-text",
	size: 24,
	node: [
		["path", {
			d: "M15 12h-5",
			key: "r7krc0"
		}],
		["path", {
			d: "M15 8h-5",
			key: "1khuty"
		}],
		["path", {
			d: "M19 17V5a2 2 0 0 0-2-2H4",
			key: "zz82l3"
		}],
		["path", {
			d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
			key: "1ph1d7"
		}]
	]
};
Ch.node;
var wh = Q(Ch), Th = {
	name: "search",
	size: 24,
	node: [["path", {
		d: "m21 21-4.34-4.34",
		key: "14j7rj"
	}], ["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]]
};
Th.node;
var Eh = Q(Th), Dh = {
	name: "square",
	size: 24,
	node: [["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}]]
};
Dh.node;
var Oh = Q(Dh), kh = {
	name: "triangle-alert",
	size: 24,
	node: [
		["path", {
			d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
			key: "wmoenq"
		}],
		["path", {
			d: "M12 9v4",
			key: "juzpu7"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}]
	],
	aliases: ["alert-triangle"]
};
kh.node;
var Ah = Q(kh), jh = {
	name: "wrench",
	size: 24,
	node: [["path", {
		d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
		key: "1ngwbx"
	}]]
};
jh.node;
var Mh = Q(jh), Nh = {
	name: "x",
	size: 24,
	node: [["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}], ["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]]
};
Nh.node;
var Ph = Q(Nh), Fh = _(), Ih = {
	size: "1em",
	"aria-hidden": !0
}, Lh = {
	close: /* @__PURE__ */ (0, W.jsx)(Ph, { ...Ih }),
	chevronDown: /* @__PURE__ */ (0, W.jsx)(Im, { ...Ih }),
	chevronLeft: /* @__PURE__ */ (0, W.jsx)(Rm, { ...Ih }),
	chevronRight: /* @__PURE__ */ (0, W.jsx)(Bm, { ...Ih }),
	chevronsLeft: /* @__PURE__ */ (0, W.jsx)(Hm, { ...Ih }),
	chevronsRight: /* @__PURE__ */ (0, W.jsx)(Wm, { ...Ih }),
	check: /* @__PURE__ */ (0, W.jsx)(Pm, { ...Ih }),
	success: /* @__PURE__ */ (0, W.jsx)(Km, { ...Ih }),
	error: /* @__PURE__ */ (0, W.jsx)(Jm, { ...Ih }),
	warning: /* @__PURE__ */ (0, W.jsx)(Ah, { ...Ih }),
	info: /* @__PURE__ */ (0, W.jsx)(fh, { ...Ih }),
	calendar: /* @__PURE__ */ (0, W.jsx)(Am, { ...Ih }),
	clock: /* @__PURE__ */ (0, W.jsx)(Xm, { ...Ih }),
	externalLink: /* @__PURE__ */ (0, W.jsx)(ih, { ...Ih }),
	menu: /* @__PURE__ */ (0, W.jsx)(bh, { ...Ih }),
	moreHorizontal: /* @__PURE__ */ (0, W.jsx)(nh, { ...Ih }),
	search: /* @__PURE__ */ (0, W.jsx)(Eh, { ...Ih }),
	arrowUp: /* @__PURE__ */ (0, W.jsx)(Sm, { ...Ih }),
	arrowDown: /* @__PURE__ */ (0, W.jsx)(vm, { ...Ih }),
	arrowsUpDown: /* @__PURE__ */ (0, W.jsx)(bm, { ...Ih }),
	funnel: /* @__PURE__ */ (0, W.jsx)(ch, { ...Ih }),
	eyeSlash: /* @__PURE__ */ (0, W.jsx)(oh, { ...Ih }),
	viewColumns: /* @__PURE__ */ (0, W.jsx)(Qm, { ...Ih }),
	copy: /* @__PURE__ */ (0, W.jsx)(eh, { ...Ih }),
	checkDouble: /* @__PURE__ */ (0, W.jsx)(Mm, { ...Ih }),
	wrench: /* @__PURE__ */ (0, W.jsx)(Mh, { ...Ih }),
	stop: /* @__PURE__ */ (0, W.jsx)(Oh, { ...Ih }),
	microphone: /* @__PURE__ */ (0, W.jsx)(Sh, { ...Ih })
}, { blue: Rh, cyan: zh, green: Bh, neutral: $, orange: Vh, pink: Hh, purple: Uh, red: Wh, teal: Gh, yellow: Kh } = {
	purple: {
		light: {
			25: "#5c0e6c",
			30: "#6b187c",
			70: "#d885eb",
			75: "#e496f6",
			80: "#efa8ff",
			85: "#f3bfff",
			90: "#f7d5ff"
		},
		dark: {
			25: "#4a2f51",
			80: "#eaacf8"
		}
	},
	green: {
		light: {
			25: "#00490b",
			30: "#0b5615",
			40: "#237028",
			45: "#2f7d33",
			65: "#6ab26b",
			75: "#90ca90",
			80: "#a4d6a3"
		},
		dark: {
			25: "#2b422b",
			80: "#aad4a9",
			85: "#bce0bb"
		}
	},
	neutral: {
		light: {
			0: "#000000",
			5: "#111111",
			10: "#1b1b1b",
			15: "#262626",
			30: "#474747",
			35: "#525252",
			45: "#6a6a6a",
			50: "#777777",
			60: "#919191",
			65: "#9e9e9e",
			85: "#d4d4d4",
			90: "#e2e2e2",
			95: "#f1f1f1",
			100: "#ffffff"
		},
		dark: {
			0: "#000000",
			5: "#111111",
			10: "#1b1b1b",
			15: "#262626",
			20: "#303030",
			35: "#525252",
			65: "#9e9e9e",
			85: "#d4d4d4",
			90: "#e2e2e2",
			95: "#f1f1f1",
			100: "#ffffff"
		}
	},
	orange: {
		light: {
			25: "#622700",
			30: "#733100",
			75: "#ff9e55",
			85: "#ffc7a1"
		},
		dark: {
			25: "#503424",
			65: "#df843f",
			80: "#ffb37e"
		}
	},
	blue: {
		light: {
			25: "#003978",
			30: "#00458c",
			50: "#0074e2",
			80: "#a1caff",
			85: "#b9d7ff"
		},
		dark: {
			25: "#253c5a",
			65: "#5aa0f8",
			75: "#88bcff",
			80: "#a1caff"
		}
	},
	red: {
		light: {
			25: "#76000c",
			30: "#8a0011",
			35: "#9e0015",
			55: "#de4745",
			65: "#fa6762",
			70: "#ff7f77",
			80: "#ffaea7",
			85: "#ffc4be"
		},
		dark: {
			25: "#5b2b28",
			65: "#ee736c",
			75: "#ff9890",
			80: "#ffaea7",
			85: "#ffc4be"
		}
	},
	yellow: {
		light: {
			25: "#4b3900",
			30: "#584400",
			40: "#745b00",
			65: "#c29900",
			75: "#e2b623",
			80: "#eec448",
			85: "#f8d36a"
		},
		dark: {
			25: "#453a1c",
			80: "#e3c36c",
			90: "#fae19e"
		}
	},
	teal: {
		light: {
			25: "#00463d",
			30: "#005348",
			80: "#90d7c8",
			85: "#a9e2d6"
		},
		dark: {
			25: "#28413c",
			65: "#4fb1a0",
			75: "#81c9bb"
		}
	},
	cyan: {
		dark: {
			25: "#274046",
			65: "#49adc4",
			75: "#71c7dd",
			80: "#85d5e9",
			85: "#9ae2f4"
		},
		light: {
			25: "#004351",
			30: "#00505f"
		}
	},
	pink: {
		light: {
			25: "#70003f",
			30: "#83004b",
			70: "#fc78b1",
			85: "#ffc0d7"
		},
		dark: {
			25: "#572b3d",
			75: "#fd92bd",
			80: "#ffa9ca"
		}
	}
}, qh = (e, t) => `${e}${t}`, Jh = Qr({
	name: "astryx-neutral",
	tokens: {
		keyword: [Uh.light[30], Uh.light[80]],
		string: [Bh.light[30], Bh.light[80]],
		comment: [$.light[45], $.dark[65]],
		number: [Vh.light[30], Vh.dark[80]],
		function: [Rh.light[30], Rh.dark[80]],
		type: [Uh.light[30], Uh.light[80]],
		variable: [$.light[5], $.dark[90]],
		operator: [$.light[45], $.dark[65]],
		constant: [Vh.light[30], Vh.dark[80]],
		tag: [Wh.light[30], Wh.dark[80]],
		attribute: [Kh.light[30], Kh.light[80]],
		property: [Gh.light[30], Gh.light[80]],
		punctuation: [$.light[45], $.dark[65]],
		background: [$.light[100], $.dark[5]]
	}
}), Yh = {
	"--astryx-theme-neutral-color-status-fill-accent": ["#0074e2", "#6d9cfe"],
	"--astryx-theme-neutral-color-status-fill-success": ["#198100", "#64af4c"],
	"--astryx-theme-neutral-color-status-fill-warning": "#ffce2f",
	"--astryx-theme-neutral-color-status-fill-error": ["#c9303a", "#ff705d"],
	"--astryx-theme-neutral-color-status-muted-accent": [Rh.light[85], qh(Rh.dark[75], "3D")],
	"--astryx-theme-neutral-color-on-tint-neutral": ["#fafafa4D", "#0a0a0a4D"],
	"--astryx-theme-neutral-color-on-tint-overlay-hover": ["#fafafa1A", "#0a0a0a1A"],
	"--astryx-theme-neutral-color-on-tint-overlay-pressed": ["#fafafa33", "#0a0a0a33"],
	"--astryx-theme-neutral-color-destructive-overlay-hover": [qh(Wh.light[70], "0D"), qh(Wh.dark[65], "0D")],
	"--astryx-theme-neutral-color-destructive-overlay-pressed": [qh(Wh.light[70], "1A"), qh(Wh.dark[65], "1A")]
}, Xh = {
	accent: "var(--astryx-theme-neutral-color-status-fill-accent)",
	success: "var(--astryx-theme-neutral-color-status-fill-success)",
	warning: "var(--astryx-theme-neutral-color-status-fill-warning)",
	error: "var(--astryx-theme-neutral-color-status-fill-error)"
}, Zh = Dr({
	name: "neutral",
	localTokens: Yh,
	typography: {
		scale: {
			base: 14,
			ratio: 1.2
		},
		body: {
			family: "Figtree",
			fallbacks: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
		},
		heading: {
			family: "Figtree",
			fallbacks: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
			weights: {
				3: "bold",
				4: "bold"
			}
		},
		code: {
			family: "ui-monospace",
			fallbacks: "\"SF Mono\", Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
		}
	},
	motion: {
		fast: 125,
		medium: 300,
		slow: 700,
		ratio: .75
	},
	syntax: Jh,
	tokens: {
		"--color-background-surface": [$.light[100], $.dark[15]],
		"--color-background-body": [$.light[95], $.dark[10]],
		"--color-background-card": [$.light[100], $.dark[10]],
		"--color-background-popover": [$.light[100], $.dark[10]],
		"--color-background-muted": [$.light[95], $.dark[10]],
		"--color-accent": [$.light[10], $.dark[95]],
		"--color-accent-muted": [$.light[95], $.dark[15]],
		"--color-neutral": [qh($.light[0], "0F"), qh($.dark[100], "1A")],
		"--color-overlay": [qh($.light[0], "80"), qh($.dark[0], "CC")],
		"--color-overlay-hover": [qh($.light[0], "0D"), qh($.dark[100], "0D")],
		"--color-overlay-pressed": [qh($.light[0], "1A"), qh($.dark[100], "1A")],
		"--color-text-primary": [$.light[0], $.dark[100]],
		"--color-text-secondary": [$.light[30], $.dark[65]],
		"--color-text-disabled": [$.light[60], $.dark[35]],
		"--color-text-accent": [$.light[10], $.dark[95]],
		"--color-on-dark": $.light[100],
		"--color-on-light": $.light[5],
		"--color-on-accent": [$.light[100], $.dark[5]],
		"--color-on-success": [$.light[100], $.dark[5]],
		"--color-on-error": [$.light[100], $.dark[5]],
		"--color-on-warning": $.light[5],
		"--color-icon-accent": [$.light[10], $.dark[95]],
		"--color-icon-primary": [$.light[0], $.dark[100]],
		"--color-icon-secondary": [$.light[45], $.dark[65]],
		"--color-icon-disabled": [$.light[60], $.dark[35]],
		"--color-success": [Bh.light[25], Bh.light[80]],
		"--color-error": [Wh.light[25], Wh.dark[85]],
		"--color-warning": [Kh.light[25], Kh.light[85]],
		"--color-success-muted": [Bh.dark[85], qh(Bh.light[75], "3D")],
		"--color-error-muted": [Wh.light[85], qh(Wh.dark[75], "3D")],
		"--color-warning-muted": [Kh.dark[90], qh(Kh.light[75], "3D")],
		"--color-border": [qh($.light[0], "14"), qh($.dark[100], "1A")],
		"--color-border-emphasized": [$.light[85], $.dark[35]],
		"--color-skeleton": [$.light[95], $.dark[35]],
		"--color-shadow": [qh($.light[0], "1A"), qh($.dark[0], "4D")],
		"--color-tint-hover": ["black", "white"],
		"--color-background-red": [Wh.light[85], Wh.dark[25]],
		"--color-border-red": [Wh.light[80], Wh.light[65]],
		"--color-icon-red": [Wh.light[25], Wh.dark[75]],
		"--color-text-red": [Wh.light[25], Wh.dark[80]],
		"--color-background-orange": [Vh.light[85], Vh.dark[25]],
		"--color-border-orange": [Vh.light[85], Vh.dark[65]],
		"--color-icon-orange": [Vh.light[25], Vh.light[75]],
		"--color-text-orange": [Vh.light[25], Vh.dark[80]],
		"--color-background-yellow": [Kh.dark[90], Kh.dark[25]],
		"--color-border-yellow": [Kh.dark[80], Kh.light[65]],
		"--color-icon-yellow": [Kh.light[25], Kh.light[75]],
		"--color-text-yellow": [Kh.light[25], Kh.light[80]],
		"--color-background-green": [Bh.dark[85], Bh.dark[25]],
		"--color-border-green": [Bh.dark[80], Bh.light[65]],
		"--color-icon-green": [Bh.light[25], Bh.light[75]],
		"--color-text-green": [Bh.light[25], Bh.light[75]],
		"--color-background-teal": [Gh.light[85], Gh.dark[25]],
		"--color-border-teal": [Gh.light[80], Gh.dark[65]],
		"--color-icon-teal": [Gh.light[25], Gh.dark[75]],
		"--color-text-teal": [Gh.light[25], Gh.light[80]],
		"--color-background-cyan": [zh.dark[85], zh.dark[25]],
		"--color-border-cyan": [zh.dark[80], zh.dark[65]],
		"--color-icon-cyan": [zh.light[25], zh.dark[75]],
		"--color-text-cyan": [zh.light[25], zh.dark[80]],
		"--color-background-blue": [Rh.light[85], Rh.dark[25]],
		"--color-border-blue": [Rh.light[80], Rh.dark[65]],
		"--color-icon-blue": [Rh.light[25], Rh.dark[75]],
		"--color-text-blue": [Rh.light[25], Rh.dark[80]],
		"--color-background-purple": [Uh.light[90], Uh.dark[25]],
		"--color-border-purple": [Uh.light[85], Uh.light[70]],
		"--color-icon-purple": [Uh.light[25], Uh.light[75]],
		"--color-text-purple": [Uh.light[25], Uh.dark[80]],
		"--color-background-pink": [Hh.light[85], Hh.dark[25]],
		"--color-border-pink": [Hh.light[85], Hh.light[70]],
		"--color-icon-pink": [Hh.light[25], Hh.dark[75]],
		"--color-text-pink": [Hh.light[25], Hh.dark[80]],
		"--color-background-gray": [$.light[90], $.dark[20]],
		"--color-border-gray": [$.light[85], $.dark[15]],
		"--color-icon-gray": [$.light[30], $.dark[65]],
		"--color-text-gray": [$.light[10], $.dark[85]],
		"--radius-none": "0px",
		"--radius-inner": "0.375rem",
		"--radius-element": "0.625rem",
		"--radius-container": "0.75rem",
		"--radius-page": "1.75rem",
		"--radius-full": "9999px",
		"--shadow-low": "0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 25%)), 0 4px 8px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 40%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 8%))",
		"--shadow-med": "0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 35%)), 0 4px 12px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 12%))",
		"--shadow-high": "0 4px 6px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), 0 12px 24px light-dark(oklch(0 0 0 / 15%), oklch(0 0 0 / 70%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 15%))",
		"--shadow-inset-hover": `inset 0px 0px 0px 2px ${qh(Rh.light[50], "4D")}`,
		"--shadow-inset-selected": `inset 0px 0px 0px 2px ${qh(Rh.light[50], "80")}`,
		"--shadow-inset-success": `inset 0px 0px 0px 2px ${qh(Bh.light[45], "4D")}`,
		"--shadow-inset-warning": `inset 0px 0px 0px 2px ${qh(Kh.light[85], "4D")}`,
		"--shadow-inset-error": `inset 0px 0px 0px 2px ${qh(Wh.light[55], "4D")}`
	},
	components: {
		button: { "variant:destructive": {
			backgroundColor: "var(--color-error-muted)",
			color: "var(--color-error)",
			"--color-overlay-hover": "var(--astryx-theme-neutral-color-destructive-overlay-hover)",
			"--color-overlay-pressed": "var(--astryx-theme-neutral-color-destructive-overlay-pressed)"
		} },
		badge: {
			"variant:info": {
				backgroundColor: Xh.accent,
				color: "var(--color-on-accent)"
			},
			"variant:neutral": {
				backgroundColor: "var(--color-background-gray)",
				color: "var(--color-text-gray)"
			},
			"variant:success": {
				backgroundColor: Xh.success,
				color: "var(--color-on-success)"
			},
			"variant:warning": {
				backgroundColor: Xh.warning,
				color: "var(--color-on-warning)"
			},
			"variant:error": {
				backgroundColor: Xh.error,
				color: "var(--color-on-error)"
			},
			"variant:red": {
				backgroundColor: "var(--color-background-red)",
				color: "var(--color-text-red)"
			},
			"variant:orange": {
				backgroundColor: "var(--color-background-orange)",
				color: "var(--color-text-orange)"
			},
			"variant:yellow": {
				backgroundColor: "var(--color-background-yellow)",
				color: "var(--color-text-yellow)"
			},
			"variant:green": {
				backgroundColor: "var(--color-background-green)",
				color: "var(--color-text-green)"
			},
			"variant:teal": {
				backgroundColor: "var(--color-background-teal)",
				color: "var(--color-text-teal)"
			},
			"variant:cyan": {
				backgroundColor: "var(--color-background-cyan)",
				color: "var(--color-text-cyan)"
			},
			"variant:blue": {
				backgroundColor: "var(--color-background-blue)",
				color: "var(--color-text-blue)"
			},
			"variant:purple": {
				backgroundColor: "var(--color-background-purple)",
				color: "var(--color-text-purple)"
			},
			"variant:pink": {
				backgroundColor: "var(--color-background-pink)",
				color: "var(--color-text-pink)"
			},
			"variant:gray": {
				backgroundColor: "var(--color-background-gray)",
				color: "var(--color-text-gray)"
			}
		},
		"status-dot": {
			"variant:success": { backgroundColor: Xh.success },
			"variant:warning": { backgroundColor: Xh.warning },
			"variant:error": { backgroundColor: Xh.error },
			"variant:accent": { backgroundColor: Xh.accent }
		},
		"avatar-status-dot": {
			"variant:success": { backgroundColor: Xh.success },
			"variant:error": { backgroundColor: Xh.error }
		},
		"segmented-control": { base: { padding: "var(--spacing-1)" } },
		"segmented-control-item": {
			"size:sm": { height: "calc(var(--size-element-sm) - 8px)" },
			"size:md": { height: "calc(var(--size-element-md) - 8px)" },
			"size:lg": { height: "calc(var(--size-element-lg) - 8px)" },
			selected: { boxShadow: "none" }
		},
		banner: {
			base: {
				"--color-neutral": "var(--astryx-theme-neutral-color-on-tint-neutral)",
				"--color-overlay-hover": "var(--astryx-theme-neutral-color-on-tint-overlay-hover)",
				"--color-overlay-pressed": "var(--astryx-theme-neutral-color-on-tint-overlay-pressed)"
			},
			"status:info": {
				"--color-accent-muted": "var(--astryx-theme-neutral-color-status-muted-accent)",
				"--color-text-primary": "var(--color-text-blue)",
				"--color-text-secondary": "var(--color-text-blue)",
				"--color-accent": "var(--color-text-blue)"
			},
			"status:success": {
				"--color-text-primary": "var(--color-text-green)",
				"--color-text-secondary": "var(--color-text-green)",
				"--color-success": "var(--color-text-green)"
			},
			"status:warning": {
				"--color-text-primary": "var(--color-text-yellow)",
				"--color-text-secondary": "var(--color-text-yellow)",
				"--color-warning": "var(--color-text-yellow)"
			},
			"status:error": {
				"--color-text-primary": "var(--color-text-red)",
				"--color-text-secondary": "var(--color-text-red)",
				"--color-error": "var(--color-text-red)"
			}
		},
		"step-indicator": {
			"status:accent": { "--color-accent": Xh.accent },
			"status:success": { "--color-success": Xh.success },
			"status:warning": { "--color-warning": Xh.warning },
			"status:error": { "--color-error": Xh.error }
		},
		switch: { base: { "--color-background-gray": "var(--color-border-emphasized)" } },
		"progress-bar": {
			base: { "--color-background-muted": "var(--color-border-emphasized)" },
			"variant:accent": { "--color-accent": Xh.accent },
			"variant:success": { "--color-success": Xh.success },
			"variant:warning": { "--color-warning": Xh.warning },
			"variant:error": { "--color-error": Xh.error }
		},
		card: { base: { padding: "var(--spacing-3)" } },
		section: { base: { padding: "var(--spacing-3)" } }
	},
	icons: Lh
}), Qh = "#1e1b2c", $h = "#393047", eg = "#5a356a", tg = "#ecc1c2", ng = "#f49c58", rg = Dr({
	name: "snadiya-reader",
	extends: Zh,
	typography: {
		scale: {
			base: 18,
			ratio: 1.2
		},
		body: {
			family: "Instrument Sans",
			fallbacks: "Helvetica, Arial, sans-serif",
			url: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap"
		},
		heading: {
			family: "Newsreader",
			fallbacks: "Georgia, serif",
			url: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,420;6..72,600&display=swap"
		}
	},
	tokens: {
		"--color-background-body": Qh,
		"--color-background-surface": $h,
		"--color-background-card": $h,
		"--color-background-popover": $h,
		"--color-background-muted": eg,
		"--color-text-primary": tg,
		"--color-text-secondary": tg,
		"--color-icon-primary": tg,
		"--color-icon-secondary": tg,
		"--color-accent": ng,
		"--color-accent-muted": "rgba(244,156,88,.22)",
		"--color-text-accent": ng,
		"--color-icon-accent": ng,
		"--color-on-accent": Qh,
		"--color-border": "rgba(236,193,194,.22)",
		"--color-border-emphasized": "rgba(236,193,194,.6)",
		"--color-track": "rgba(236,193,194,.22)",
		"--color-overlay-hover": "rgba(236,193,194,.12)",
		"--color-overlay-pressed": "rgba(236,193,194,.2)"
	}
}), ig = window.CONFIG, ag = "snadiya:" + location.pathname.split("/").pop().replace(".html", "") + ":", og = (e, t) => {
	try {
		let n = localStorage.getItem(ag + e);
		return n == null ? t : JSON.parse(n);
	} catch {
		return t;
	}
}, sg = (e, t) => {
	try {
		localStorage.setItem(ag + e, JSON.stringify(t));
	} catch {}
}, cg = (e, t) => String(e).padStart(t, "0");
function lg() {
	let e = [], t = [], n = (e) => ig.cfOnly === !0 || ig.cfOnly && ig.cfOnly[e];
	return (ig.chapters || []).forEach((r, i) => {
		let a = e.length;
		for (let t = r.from; t <= r.to; t++) {
			let a = e.length, o = (ig.base || "") + r.folder + r.prefix + cg(t, r.pad) + "." + r.ext, s = !!(ig.srcs && ig.srcs[a] && (n(a) || window.innerWidth >= 1024)), c = s && ig.bigDims && ig.bigDims[a] || ig.dims && ig.dims[a] || [1600, 2400];
			e.push({
				src: s ? ig.cf + ig.srcs[a] : o,
				thumb: n(a) ? ig.cf + ig.srcs[a] : o,
				pv: ig.pv ? (ig.base || "") + "pv/" + r.folder + r.prefix + cg(t, r.pad) + ".webp" : null,
				w: c[0],
				h: c[1],
				chapter: i
			});
		}
		t.push({
			title: r.title,
			from: a,
			to: e.length - 1
		});
	}), {
		pages: e,
		chapters: t
	};
}
function ug(e, t) {
	(0, v.useEffect)(() => {
		let n = e.find((e) => e.src !== e.thumb);
		if (!n) return;
		let r = !1, i = () => {
			r || (r = !0, e.forEach((e) => {
				e.src = e.thumb;
			}), t((e) => e + 1));
		}, a = new Image(), o = setTimeout(i, 5e3);
		return a.onload = () => {
			r = !0, clearTimeout(o);
		}, a.onerror = () => {
			clearTimeout(o), i();
		}, a.src = n.src, () => clearTimeout(o);
	}, [e, t]);
}
function dg() {
	let e = "(max-width: 620px)", [t, n] = (0, v.useState)(() => window.matchMedia(e).matches);
	return (0, v.useEffect)(() => {
		let t = window.matchMedia(e), r = () => n(t.matches);
		return t.addEventListener("change", r), () => t.removeEventListener("change", r);
	}, []), t;
}
function fg() {
	let e = dg(), { pages: t, chapters: n } = (0, v.useMemo)(lg, []), r = t.length, i = n.length > 1, [, a] = (0, v.useState)(0);
	ug(t, a);
	let [o, s] = (0, v.useState)(() => og("mode", window.matchMedia("(max-width:620px)").matches ? "scroll" : "pages")), [c, l] = (0, v.useState)(() => Math.min(r - 1, Math.max(0, og("page", 0)))), [u, d] = (0, v.useState)(null), [f, p] = (0, v.useState)(!1), [m, h] = (0, v.useState)(!1), [g, _] = (0, v.useState)(!1), [y, b] = (0, v.useState)(() => og("marks", [])), x = (0, v.useRef)(null), S = (0, v.useRef)([]), C = (0, v.useRef)(!1);
	(0, v.useEffect)(() => sg("mode", o), [o]), (0, v.useEffect)(() => sg("page", c), [c]), (0, v.useEffect)(() => sg("marks", y), [y]);
	let w = (0, v.useRef)(c);
	w.current = c;
	let T = (e) => E(w.current + e), E = (0, v.useCallback)((e, t = !1) => {
		e = Math.max(0, Math.min(r - 1, e)), w.current = e, l(e), o === "scroll" && S.current[e] && x.current && (C.current = !0, x.current.scrollTo({
			top: S.current[e].offsetTop,
			behavior: t ? "smooth" : "auto"
		}), setTimeout(() => {
			C.current = !1;
		}, t ? 600 : 50));
	}, [o, r]);
	(0, v.useLayoutEffect)(() => {
		o === "scroll" && x.current && S.current[w.current] && (x.current.scrollTop = S.current[w.current].offsetTop);
	}, [o]), (0, v.useEffect)(() => {
		if (o !== "scroll" || !x.current) return;
		let e = x.current, t = () => {
			if (C.current) return;
			let t = e.scrollTop + 4, n = 0;
			for (let e = 0; e < S.current.length; e++) {
				let r = S.current[e];
				if (r && r.offsetTop <= t) n = e;
				else break;
			}
			l(n);
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [o]), (0, v.useEffect)(() => {
		if (o === "pages") for (let e = 1; e <= 5; e++) {
			let n = t[c + e];
			if (n) {
				let e = new Image();
				e.src = n.src;
			}
		}
	}, [
		c,
		o,
		t
	]), (0, v.useEffect)(() => {
		let e = (e) => {
			e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName) || (e.key === "ArrowRight" ? (e.preventDefault(), T(1)) : e.key === "ArrowLeft" ? (e.preventDefault(), T(-1)) : e.key === "Home" ? (e.preventDefault(), E(0)) : e.key === "End" ? (e.preventDefault(), E(r - 1)) : e.key === "?" ? h(!0) : e.key === "b" || e.key === "B" ? D() : e.key === "t" || e.key === "T" ? p(!0) : (e.key === "v" || e.key === "V") && s((e) => e === "pages" ? "scroll" : "pages"));
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	});
	let D = () => b((e) => e.includes(c) ? e.filter((e) => e !== c) : [...e, c].sort((e, t) => e - t)), O = y.includes(c), k = u ?? c, A = (e) => n[t[e].chapter], j = [
		{
			label: "All pages",
			icon: /* @__PURE__ */ (0, W.jsx)(gh, { size: 18 }),
			onClick: () => p(!0)
		},
		{
			label: O ? "Remove bookmark" : "Bookmark this page",
			icon: O ? /* @__PURE__ */ (0, W.jsx)(Em, { size: 18 }) : /* @__PURE__ */ (0, W.jsx)(Om, { size: 18 }),
			onClick: D
		},
		{
			label: "Bookmarks",
			icon: /* @__PURE__ */ (0, W.jsx)(Om, { size: 18 }),
			onClick: () => _(!0),
			isDisabled: !y.length
		},
		...ig.driveUrl ? [{
			label: "Snadiya's Drive Link",
			icon: /* @__PURE__ */ (0, W.jsx)(uh, { size: 18 }),
			onClick: () => window.open(ig.driveUrl, "_blank", "noopener")
		}] : [],
		{
			label: "Keyboard shortcuts",
			icon: /* @__PURE__ */ (0, W.jsx)(mh, { size: 18 }),
			onClick: () => h(!0)
		}
	];
	return /* @__PURE__ */ (0, W.jsxs)("div", {
		className: "shell",
		children: [
			/* @__PURE__ */ (0, W.jsxs)("header", {
				className: "bar top",
				children: [
					/* @__PURE__ */ (0, W.jsx)(Cc, {
						label: "All comics",
						variant: "ghost",
						href: ig.gallery || "index.html",
						icon: /* @__PURE__ */ (0, W.jsx)(Nc, { icon: "chevronLeft" }),
						isIconOnly: e
					}),
					/* @__PURE__ */ (0, W.jsx)("div", {
						className: "title",
						children: i ? /* @__PURE__ */ (0, W.jsx)(Rp, {
							button: {
								label: ig.title,
								variant: "ghost"
							},
							menuWidth: 280,
							items: n.map((e) => ({
								label: e.title,
								description: `${e.from + 1} to ${e.to + 1}`,
								onClick: () => E(e.from)
							}))
						}) : /* @__PURE__ */ (0, W.jsx)(lo, {
							type: "large",
							weight: "semibold",
							children: ig.title
						})
					}),
					/* @__PURE__ */ (0, W.jsxs)(ll, {
						label: "Reading mode",
						value: o,
						onChange: s,
						children: [/* @__PURE__ */ (0, W.jsx)(pl, {
							value: "scroll",
							label: "Scroll",
							icon: /* @__PURE__ */ (0, W.jsx)(wh, { size: 18 }),
							isLabelHidden: e
						}), /* @__PURE__ */ (0, W.jsx)(pl, {
							value: "pages",
							label: "Pages",
							icon: /* @__PURE__ */ (0, W.jsx)(wm, { size: 18 }),
							isLabelHidden: e
						})]
					}),
					/* @__PURE__ */ (0, W.jsx)(Rp, {
						button: {
							label: "Options",
							icon: /* @__PURE__ */ (0, W.jsx)(bh, { size: 18 }),
							isIconOnly: e
						},
						hasChevron: !1,
						alignment: "end",
						menuWidth: 260,
						presentation: "adaptive",
						items: j
					})
				]
			}),
			/* @__PURE__ */ (0, W.jsx)("main", {
				className: "content",
				children: o === "pages" ? /* @__PURE__ */ (0, W.jsx)("div", {
					className: "stage",
					onClick: (e) => {
						let t = e.currentTarget.getBoundingClientRect();
						T(e.clientX - t.left > t.width / 2 ? 1 : -1);
					},
					children: /* @__PURE__ */ (0, W.jsx)("img", {
						src: t[c].src,
						width: t[c].w,
						height: t[c].h,
						alt: ""
					}, t[c].src)
				}) : /* @__PURE__ */ (0, W.jsxs)("div", {
					className: "scroll",
					ref: x,
					children: [t.map((e, t) => /* @__PURE__ */ (0, W.jsx)("div", {
						className: "panel",
						ref: (e) => {
							S.current[t] = e;
						},
						style: { aspectRatio: `${e.w} / ${e.h}` },
						children: /* @__PURE__ */ (0, W.jsx)("img", {
							src: e.src,
							width: e.w,
							height: e.h,
							loading: "lazy",
							decoding: "async",
							alt: ""
						})
					}, t)), /* @__PURE__ */ (0, W.jsx)(pg, {})]
				})
			}),
			/* @__PURE__ */ (0, W.jsxs)("footer", {
				className: "bar bottom",
				children: [
					/* @__PURE__ */ (0, W.jsx)(Cc, {
						label: "Previous",
						icon: /* @__PURE__ */ (0, W.jsx)(Nc, { icon: "chevronLeft" }),
						onClick: () => T(-1),
						isDisabled: c === 0
					}),
					/* @__PURE__ */ (0, W.jsxs)("div", {
						className: "scrub",
						children: [u != null && /* @__PURE__ */ (0, W.jsxs)("div", {
							className: "peek",
							style: { left: `${u / Math.max(1, r - 1) * 100}%` },
							children: [
								t[u].pv && /* @__PURE__ */ (0, W.jsx)("img", {
									src: t[u].pv,
									alt: ""
								}),
								/* @__PURE__ */ (0, W.jsxs)(lo, {
									type: "label",
									children: [
										u + 1,
										" of ",
										r
									]
								}),
								i && /* @__PURE__ */ (0, W.jsx)(lo, {
									type: "supporting",
									color: "primary",
									children: A(u).title
								})
							]
						}), /* @__PURE__ */ (0, W.jsx)(Y, {
							label: "Page",
							isLabelHidden: !0,
							valueDisplay: "none",
							min: 1,
							max: r,
							value: k + 1,
							width: "100%",
							onChange: (e) => d(e - 1),
							onChangeEnd: (e) => {
								d(null), E(e - 1);
							}
						})]
					}),
					/* @__PURE__ */ (0, W.jsx)("span", {
						className: "count",
						children: /* @__PURE__ */ (0, W.jsxs)(lo, {
							type: "label",
							children: [
								k + 1,
								" / ",
								r
							]
						})
					}),
					/* @__PURE__ */ (0, W.jsx)(Cc, {
						label: "Next",
						variant: "primary",
						endContent: /* @__PURE__ */ (0, W.jsx)(Nc, { icon: "chevronRight" }),
						onClick: () => T(1),
						isDisabled: c === r - 1
					})
				]
			}),
			/* @__PURE__ */ (0, W.jsxs)(Zp, {
				isOpen: f,
				onOpenChange: p,
				variant: "fullscreen",
				padding: 4,
				children: [/* @__PURE__ */ (0, W.jsx)(rm, {
					title: "All pages",
					onOpenChange: p
				}), n.map((e, n) => /* @__PURE__ */ (0, W.jsxs)("section", { children: [i && /* @__PURE__ */ (0, W.jsx)(lo, {
					type: "large",
					weight: "semibold",
					as: "div",
					children: e.title
				}), /* @__PURE__ */ (0, W.jsx)("div", {
					className: "grid",
					children: t.slice(e.from, e.to + 1).map((t, n) => {
						let r = e.from + n;
						return /* @__PURE__ */ (0, W.jsxs)("button", {
							className: "thumb" + (r === c ? " on" : ""),
							onClick: () => {
								p(!1), E(r);
							},
							children: [/* @__PURE__ */ (0, W.jsx)("img", {
								src: t.pv || t.thumb,
								loading: "lazy",
								alt: "",
								style: { aspectRatio: `${t.w} / ${t.h}` }
							}), /* @__PURE__ */ (0, W.jsx)("span", { children: r + 1 })]
						}, r);
					})
				})] }, n))]
			}),
			/* @__PURE__ */ (0, W.jsxs)(Zp, {
				isOpen: g,
				onOpenChange: _,
				children: [/* @__PURE__ */ (0, W.jsx)(rm, {
					title: "Bookmarks",
					onOpenChange: _
				}), /* @__PURE__ */ (0, W.jsx)("div", {
					className: "marks",
					children: y.map((e) => /* @__PURE__ */ (0, W.jsx)(Cc, {
						label: `Page ${e + 1}`,
						variant: "ghost",
						onClick: () => {
							_(!1), E(e);
						}
					}, e))
				})]
			}),
			/* @__PURE__ */ (0, W.jsxs)(Zp, {
				isOpen: m,
				onOpenChange: h,
				children: [/* @__PURE__ */ (0, W.jsx)(rm, {
					title: "Keyboard shortcuts",
					onOpenChange: h
				}), /* @__PURE__ */ (0, W.jsx)("dl", {
					className: "keys",
					children: [
						["left", "Previous picture"],
						["right", "Next picture"],
						["home", "First picture"],
						["end", "Last picture"],
						["v", "Switch Scroll / Pages"],
						["t", "All pages"],
						["b", "Bookmark this page"],
						["?", "Keyboard shortcuts"]
					].map(([e, t]) => /* @__PURE__ */ (0, W.jsxs)("div", { children: [/* @__PURE__ */ (0, W.jsx)("dt", { children: /* @__PURE__ */ (0, W.jsx)(Qc, { keys: e }) }), /* @__PURE__ */ (0, W.jsx)("dd", { children: /* @__PURE__ */ (0, W.jsx)(lo, { children: t }) })] }, e))
				})]
			})
		]
	});
}
function pg() {
	return /* @__PURE__ */ (0, W.jsxs)("div", {
		className: "end",
		children: [
			/* @__PURE__ */ (0, W.jsx)(lo, {
				type: "display-3",
				children: ig.endText || "The End"
			}),
			/* @__PURE__ */ (0, W.jsx)(Cc, {
				label: "All comics",
				href: ig.gallery || "index.html",
				icon: /* @__PURE__ */ (0, W.jsx)(vh, { size: 18 })
			}),
			(ig.related || []).map((e) => /* @__PURE__ */ (0, W.jsx)(Cc, {
				label: e.title,
				variant: "ghost",
				href: e.href,
				target: e.external ? "_blank" : void 0
			}, e.href))
		]
	});
}
(0, Fh.createRoot)(document.getElementById("reader")).render(/* @__PURE__ */ (0, W.jsx)(v.StrictMode, { children: /* @__PURE__ */ (0, W.jsx)(Jr, {
	theme: rg,
	mode: "dark",
	children: /* @__PURE__ */ (0, W.jsx)(fg, {})
}) }));
//#endregion
