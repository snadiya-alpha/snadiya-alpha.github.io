import { $ as e, A as t, At as n, Bt as r, C as i, D as a, Dt as o, E as s, Et as c, F as l, Ft as u, H as d, Ht as f, I as p, It as m, J as h, K as g, L as _, Lt as v, M as y, Mt as b, N as x, Nt as S, O as C, Ot as w, P as T, Pt as E, Q as D, R as O, Rt as k, S as A, St as j, T as M, Tt as N, U as P, V as F, Vt as ee, W as I, Y as L, Z as te, _ as ne, _t as R, a as re, at as ie, b as z, bt as B, c as ae, ct as oe, d as se, dt as ce, et as V, f as le, ft as ue, g as de, gt as fe, h as pe, ht as me, i as he, it as ge, j as _e, jt as ve, k as ye, l as be, lt as xe, m as Se, mt as Ce, n as we, nt as Te, o as Ee, ot as De, p as Oe, pt as ke, q as Ae, rt as je, s as Me, st as Ne, t as Pe, tt as Fe, u as Ie, ut as Le, v as Re, vt as ze, w as Be, wt as Ve, x as He, xt as Ue, y as We, yt as Ge, zt as Ke } from "./source-CXVsiJkf.js";
//#region node_modules/@astryxdesign/core/dist/utils/inputAria.js
function qe(...e) {
	let t = e.flatMap((e) => typeof e == "string" ? e.trim().split(/\s+/) : []).filter(Boolean);
	if (t.length !== 0) return Array.from(new Set(t)).join(" ");
}
function Je(e, t = [], n) {
	return {
		ariaLabelledBy: n ? qe(n.labelID, e) : void 0,
		ariaDescribedBy: qe(n?.describedByIDs, ...t)
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/computeOverflow.js
function Ye(e, t, n) {
	return Math.max(Math.min(e, n), t);
}
function Xe(e, t, n) {
	return {
		floor: Math.max(0, Math.min(t, e)),
		ceiling: Math.max(0, Math.min(n ?? e, e))
	};
}
function Ze(e, t, n, r, i, a) {
	let o = 0, s = 0;
	for (let c = 0; c < e.length && !(s >= a); c++) {
		let a = e[c], l = c > 0 ? t : 0, u = o + a + l;
		if (u + (c === e.length - 1 ? 0 : r + (s > 0 || r > 0 ? t : 0)) > n && s >= i) break;
		o = u, s++;
	}
	return s;
}
function Qe(e, t, n, r, i) {
	let a = 0, o = 1, s = 0;
	for (let c = 0; c < e.length; c++) {
		let l = e[c], u = s === 0, d = u ? l : s + t + l, f = o === i, p = f && r > 0 ? r + t : 0;
		if (d + p <= n) {
			s = d, a++;
			continue;
		}
		if (u) {
			if (f && p > 0) break;
			s = d, a++;
			continue;
		}
		if (o >= i) break;
		o++, s = 0, c--;
	}
	return {
		placed: a,
		rows: o
	};
}
function $e(e, t, n) {
	if (e.length === 0) return 0;
	let r = 1, i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = i === 0, c = s ? o : i + t + o;
		c <= n || s ? i = c : (r++, i = o);
	}
	return r;
}
function et(e, t, n, r, i) {
	let a = e.length;
	if (a === 0) return {
		count: 0,
		rows: 0
	};
	let o = Qe(e, t, n, 0, i);
	if (o.placed === a) return {
		count: a,
		rows: o.rows
	};
	let s = Qe(e, t, n, r, i).placed, c = $e(e.slice(0, s), t, n);
	return {
		count: s,
		rows: Math.max(+(s > 0), c)
	};
}
function tt(e) {
	let { widths: t, gap: n, availableWidth: r, indicatorWidth: i, minVisibleItems: a, maxVisibleItems: o, maxRows: s, collapseFrom: c } = e, l = t.length;
	if (l === 0) return {
		visibleCount: 0,
		rows: 0
	};
	let { floor: u, ceiling: d } = Xe(l, a, o), f = c === "end" ? t : [...t].reverse();
	if (!(s != null && s > 1)) {
		let e = Ye(Ze(f, n, r, i, u, d), u, d);
		return {
			visibleCount: e,
			rows: +(e > 0)
		};
	}
	let { count: p, rows: m } = et(f, n, r, i, s), h = Ye(p, u, d), g = h === p ? m : $e(f.slice(0, h), n, r);
	return {
		visibleCount: h,
		rows: h > 0 ? Math.max(1, g) : 0
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useOverflow.js
var H = /* @__PURE__ */ f(ee(), 1);
function nt(e, t = {}) {
	let { gap: n = 0, minVisibleItems: r = 0, maxVisibleItems: i, maxRows: a, collapseFrom: o = "end", behavior: s = "observeSelf" } = t;
	Ae("useOverflow", `maxVisibleItems (${i}) is less than minVisibleItems (${r}); the floor wins and minVisibleItems items will be shown.`, i != null && i < r);
	let c = s === "observeParent", [l, u] = (0, H.useState)(e), [d, f] = (0, H.useState)(1), [p, m] = (0, H.useState)(0), h = (0, H.useRef)(null), g = (0, H.useRef)(null), _ = (0, H.useRef)(null), v = (0, H.useRef)(null), y = (0, H.useRef)(null), b = (0, H.useRef)(null), x = (0, H.useCallback)(() => {
		let t = h.current, s = g.current;
		if (!t || !s) return;
		let l;
		if (c && t.parentElement) {
			let e = t.parentElement, n = getComputedStyle(e);
			l = e.clientWidth - parseFloat(n.paddingLeft) - parseFloat(n.paddingRight);
		} else l = t.offsetWidth;
		let d = Array.from(s.children), p = d.length > e, _ = p ? d.slice(0, e) : d, v = p ? d[d.length - 1].offsetWidth : 0;
		if (_.length === 0) {
			u(0), f(0);
			return;
		}
		let y = _.map((e) => e.offsetWidth), b = _.reduce((e, t) => Math.max(e, t.offsetHeight || 0), 0), { visibleCount: x, rows: S } = tt({
			widths: y,
			gap: n,
			availableWidth: l,
			indicatorWidth: v,
			minVisibleItems: r,
			maxVisibleItems: i,
			maxRows: a,
			collapseFrom: o
		});
		u(x), f((e) => e === S ? e : S), m((e) => e === b ? e : b);
	}, [
		e,
		n,
		r,
		i,
		a,
		o,
		c
	]), S = (0, H.useCallback)((e) => {
		if (h.current = e, y.current?.(), y.current = null, _.current = null, e) {
			let t = c && e.parentElement ? e.parentElement : e;
			y.current = ze(t, () => {
				x();
			}), _.current = t;
		}
	}, [x, c]), C = (0, H.useCallback)((e) => {
		b.current?.(), b.current = null, v.current = null, g.current = e, e && (b.current = ze(e, () => {
			x();
		}), v.current = e);
	}, [x]);
	return Ke(() => {
		x();
	}, [x]), {
		containerRef: S,
		measureRef: C,
		visibleCount: l,
		hasOverflow: l < e,
		rows: d,
		rowHeight: p
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useInputStatusIcon.js
var U = w(), rt = {
	warning: "warning",
	error: "error",
	success: "success"
}, it = {
	warning: "@astryx.input.statusButton.warning",
	error: "@astryx.input.statusButton.error",
	success: "@astryx.input.statusButton.success"
}, at = { statusButton: {
	k1xSpc: "x3nfvp2",
	kGNEyG: "x6s0dn4",
	kjj79g: "xl56j7k",
	kmVPX3: "x1717udv",
	kogj98: "x1ghz6dp",
	kMzoRj: "xc342km",
	ksu8eU: "xng3xce",
	kWkggS: "xjbqb8w",
	kMwMTN: "x1heor9g",
	kkrTdU: "x1ypdohk x16khyan",
	kfzvcC: "x67bb7w",
	kaIpWk: "xjspbzw",
	kInvED: "x7s97pk",
	$$css: !0
} };
function ot({ status: e, statusVariant: t = "attached", isInGroup: n = !1, size: r = "md" }) {
	let i = L(), a = t === "tooltip" && !!e?.message, [o, s] = (0, H.useState)(void 0), c = _({
		placement: "above",
		isEnabled: a,
		isOpen: o
	}), l = (0, H.useCallback)(() => {
		s(void 0);
	}, []), u = (0, H.useCallback)(() => {
		typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(hover: none)").matches && s((e) => e !== !0);
	}, []);
	if ((0, H.useEffect)(() => {
		if (o !== !0) return;
		let e = (e) => {
			e.key === "Escape" && s(void 0);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [o]), !e || n || t === "detached") return {
		statusIcon: null,
		describedBy: void 0
	};
	let d = /*#__PURE__*/ (0, U.jsx)(F, {
		icon: rt[e.type],
		size: r,
		color: e.type,
		...E("input-status-icon", {
			size: r,
			status: e.type
		})
	});
	return a ? {
		statusIcon: /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsx)("button", {
			type: "button",
			ref: c.ref,
			"aria-label": i(it[e.type]),
			"aria-describedby": c.describedBy,
			onClick: u,
			onBlur: l,
			...k(me.focusVisible, at.statusButton),
			children: d
		}), c.renderTooltip(e.message)] }),
		describedBy: c.describedBy
	} : {
		statusIcon: d,
		describedBy: void 0
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/InteractiveRoleContext/InteractiveRoleContext.js
var st = /*#__PURE__*/ (0, H.createContext)(null);
st.displayName = "InteractiveRoleContext";
function ct() {
	return (0, H.use)(st);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useInteractiveRole.js
function lt({ href: e, onClick: t, isDisabled: n = !1 }) {
	let r = ct();
	return e != null && !n ? "link" : t == null ? r ?? "inert" : "button";
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useIndicatorFocusRing.js
function ut(e, t = !1) {
	let n = (0, H.useCallback)((t) => {
		let n = e.current?.firstElementChild;
		n instanceof HTMLElement && Object.assign(n.style, t ? ue : ke);
	}, [e]), r = (0, H.useCallback)((e) => {
		if (t) return;
		let r = e.target;
		r instanceof HTMLElement && !r.matches(":focus-visible") || n(!0);
	}, [t, n]), i = (0, H.useCallback)(() => n(!1), [n]);
	return (0, H.useMemo)(() => ({ focusProps: {
		onFocus: r,
		onBlur: i
	} }), [r, i]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutAreaContext.js
var dt = /*#__PURE__*/ (0, H.createContext)(null);
dt.displayName = "LayoutAreaContext";
var ft = ce({
	hasHeader: !1,
	hasFooter: !1,
	hasStart: !1,
	hasEnd: !1
});
ft.displayName = "LayoutSlotsContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/stack.stylex.js
var pt = {
	center: {
		kGNEyG: "x6s0dn4",
		$$css: !0
	},
	end: {
		kGNEyG: "xuk3077",
		$$css: !0
	},
	start: {
		kGNEyG: "x1cy8zhl",
		$$css: !0
	},
	stretch: {
		kGNEyG: "x1qjc9v5",
		$$css: !0
	}
}, mt = {
	start: {
		kjj79g: "x1nhvcw1",
		$$css: !0
	},
	center: {
		kjj79g: "xl56j7k",
		$$css: !0
	},
	end: {
		kjj79g: "x13a6bvl",
		$$css: !0
	},
	between: {
		kjj79g: "x1qughib",
		$$css: !0
	},
	around: {
		kjj79g: "x1l1ennw",
		$$css: !0
	},
	evenly: {
		kjj79g: "xaw8158",
		$$css: !0
	}
}, ht = {
	horizontal: {
		kXwgrk: "x1q0g3np",
		$$css: !0
	},
	vertical: {
		kXwgrk: "xdt5ytf",
		$$css: !0
	}
}, gt = {
	nowrap: {
		kwnvtZ: "xozqiw3",
		$$css: !0
	},
	wrap: {
		kwnvtZ: "x1a02dak",
		$$css: !0
	},
	"wrap-reverse": {
		kwnvtZ: "x8hhl5t",
		$$css: !0
	}
}, _t = { stack: {
	k1xSpc: "x78zum5",
	$$css: !0
} }, vt = {
	0: {
		k1C7PZ: "x1o57wo1",
		khm7nJ: "x6yxi7o",
		$$css: !0
	},
	1: {
		k1C7PZ: "x1lfs0n9",
		khm7nJ: "x1ngg2t4",
		$$css: !0
	},
	2: {
		k1C7PZ: "xak3so",
		khm7nJ: "x1x7z4sm",
		$$css: !0
	},
	3: {
		k1C7PZ: "xewh9hi",
		khm7nJ: "x4olc9o",
		$$css: !0
	},
	4: {
		k1C7PZ: "xty4p9g",
		khm7nJ: "xtx9w7w",
		$$css: !0
	},
	5: {
		k1C7PZ: "x1eqhezk",
		khm7nJ: "x1iu6piu",
		$$css: !0
	},
	6: {
		k1C7PZ: "x3qlgwd",
		khm7nJ: "xczp1bk",
		$$css: !0
	},
	8: {
		k1C7PZ: "xicv188",
		khm7nJ: "xgx0vcf",
		$$css: !0
	},
	10: {
		k1C7PZ: "x1p37tyl",
		khm7nJ: "x1xpicb7",
		$$css: !0
	},
	"0.5": {
		k1C7PZ: "x1kihgfc",
		khm7nJ: "x1tw44j4",
		$$css: !0
	},
	"1.5": {
		k1C7PZ: "x1thn6ci",
		khm7nJ: "xhq53yo",
		$$css: !0
	}
};
function yt({ crossAlign: e, direction: t, gap: n, mainAlign: r, wrap: i }) {
	return [
		_t.stack,
		ht[t],
		n != null && vt[n],
		e != null && pt[e],
		r != null && mt[r],
		i != null && gt[i]
	];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/stackItem.stylex.js
var bt = { reset: {
	kAzted: "x2lwn1j",
	k7Eaqz: "xeuugli",
	$$css: !0
} }, xt = {
	center: {
		kSGwAc: "xamitd3",
		$$css: !0
	},
	end: {
		kSGwAc: "xpvyfi4",
		$$css: !0
	},
	start: {
		kSGwAc: "xqcrz7y",
		$$css: !0
	},
	stretch: {
		kSGwAc: "xkh2ocl",
		$$css: !0
	}
}, St = {
	fill: {
		kzQI83: "x1iyjqo2",
		$$css: !0
	},
	static: {
		kzQI83: "x1c4vz4f",
		kmuXW: "x2lah0s",
		$$css: !0
	}
};
function Ct({ crossAlignSelf: e, size: t } = {}) {
	return [
		bt.reset,
		St[t ?? "static"],
		e != null && xt[e]
	];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/Layout.js
function wt(e) {
	if (e == null || typeof e == "number") return !0;
	let t = e.trim().toLowerCase();
	return t.includes("%") ? !1 : t === "0" || /^-?(?:\d+(?:\.\d+)?|\.\d+)[a-z]+$/.test(t) || /^(?:calc|min|max|clamp)\(/.test(t);
}
var Tt = {
	layoutOuter: {
		keTefX: "xojxgvx",
		k71WvV: "x1fcf3bl",
		keoZOQ: "x1sa9bsh",
		k1K539: "x6h7pi7",
		$$css: !0
	},
	layoutInner: {
		"--container-padding-inline-start": "xrhngw9",
		"--container-padding-inline-end": "xjsfl84",
		"--container-padding-block-start": "x1047aw6",
		"--container-padding-block-end": "xax9j7h",
		"--layout-content-width": "x15lplax",
		"--layout-alignment-width": "x19kr0ht",
		$$css: !0
	},
	fill: {
		kZKoxP: "x12qplqi",
		kskxy: "xenllk4",
		$$css: !0
	},
	auto: {
		kAzted: "x1us19tq",
		$$css: !0
	},
	middle: {
		kUk6DE: "x98rzlu",
		kAzted: "x2lwn1j",
		$$css: !0
	},
	middleQuery: {
		k9g6sI: "xsw3flo",
		$$css: !0
	},
	singleColumnContent: {
		kzqmXN: "xh8yej3",
		ks0D6T: "xjl2t3p xpgkkid",
		kUOVxO: "xvueqy4",
		$$css: !0
	},
	singlePanelMiddle: {
		kB7OPa: "x9f619",
		kzqmXN: "xh8yej3",
		ks0D6T: "xjl2t3p xnpzo02",
		kUOVxO: "xvueqy4 xb0m1lw",
		$$css: !0
	},
	singleStartPanel: {
		kZCmMZ: "x1vvd0s7",
		$$css: !0
	},
	singleEndPanel: {
		kwRFfy: "xxdn8bs",
		$$css: !0
	},
	fullBleed: {
		"--layout-padding-outer-x": "x1wbjvqu",
		"--layout-padding-outer-y": "xzxxx64",
		$$css: !0
	}
}, Et = {
	kzqmXN: "xh8yej3",
	kUOVxO: "xvueqy4",
	$$css: !0
}, Dt = {
	contentWidthVar: (e) => [{
		"--layout-content-width": (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "x4906uf",
		$$css: !0
	}, { "--x---layout-content-width": (typeof e == "number" ? `${e}px` : e) == null ? void 0 : typeof e == "number" ? `${e}px` : e }],
	contentAlignmentWidthVar: (e) => [{
		"--layout-alignment-width": (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "x1b1nz06",
		$$css: !0
	}, { "--x---layout-alignment-width": (typeof e == "number" ? `${e}px` : e) == null ? void 0 : typeof e == "number" ? `${e}px` : e }],
	contentWidth: (e) => [
		Et,
		{
			ks0D6T: (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "xf68679",
			$$css: !0
		},
		{ "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(typeof e == "number" ? `${e}px` : e) }
	]
};
function Ot({ area: e, children: t }) {
	return t == null ? null : /*#__PURE__*/ (0, U.jsx)(dt, {
		value: e,
		children: t
	});
}
var kt = {
	"x-default-marker": "x-default-marker",
	$$css: !0
};
function At({ children: e, content: t, contentWidth: n, defaultHasDividers: r, end: i, footer: a, header: o, height: s = "fill", padding: c, ref: u, start: d, xstyle: f, className: p, style: m }) {
	let h = s === "fill", g = t ?? e, _ = (0, H.useMemo)(() => r == null ? null : { defaultHasDividers: r }, [r]), v = o != null, y = a != null, b = d != null, x = i != null, S = b && x, C = b !== x, w = n != null && wt(n), T = (0, H.useMemo)(() => ({
		hasHeader: v,
		hasFooter: y,
		hasStart: b,
		hasEnd: x
	}), [
		v,
		y,
		b,
		x
	]), D = /*#__PURE__*/ (0, U.jsx)(ft, {
		value: T,
		children: /*#__PURE__*/ (0, U.jsx)("div", {
			ref: u,
			...B(E("layout", { height: s }), k(Tt.layoutOuter, h ? Tt.fill : Tt.auto, f), p, m),
			children: /*#__PURE__*/ (0, U.jsxs)("div", {
				...k(kt, Tt.layoutInner, ...yt({ direction: "vertical" }), h ? Tt.fill : Tt.auto, c === 0 && Tt.fullBleed, c != null && V[c], c != null && Fe[c], n != null && Dt.contentWidthVar(n), w && Dt.contentAlignmentWidthVar(n)),
				children: [
					/*#__PURE__*/ (0, U.jsx)(Ot, {
						area: "header",
						children: o
					}),
					/*#__PURE__*/ (0, U.jsxs)("div", {
						...k(...yt({ direction: "horizontal" }), Tt.middle, n != null && (!w || S) && Dt.contentWidth(n), w && !S && Tt.middleQuery, w && C && Tt.singlePanelMiddle, w && b && !x && Tt.singleStartPanel, w && !b && x && Tt.singleEndPanel),
						children: [
							/*#__PURE__*/ (0, U.jsx)(Ot, {
								area: "start",
								children: d
							}),
							/*#__PURE__*/ (0, U.jsx)("div", {
								...k(...Ct({ size: "fill" }), w && !b && !x && Tt.singleColumnContent),
								children: /*#__PURE__*/ (0, U.jsx)(Ot, {
									area: "content",
									children: g
								})
							}),
							/*#__PURE__*/ (0, U.jsx)(Ot, {
								area: "end",
								children: i
							})
						]
					}),
					/*#__PURE__*/ (0, U.jsx)(Ot, {
						area: "footer",
						children: a
					})
				]
			})
		})
	});
	return _ == null ? D : /*#__PURE__*/ (0, U.jsx)(l, {
		value: _,
		children: D
	});
}
At.displayName = "Layout";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutPanel.js
var jt = {
	panel: {
		kB7OPa: "x9f619",
		kmuXW: "x2lah0s",
		kVQacm: "x7giv3",
		kZCmMZ: "xwjyata",
		kwRFfy: "x1peupej",
		kLKAdn: "xqty4a",
		kGO01o: "xg476vw",
		"--container-padding-inline-start": "x408pgh",
		"--container-padding-inline-end": "xikqloz",
		"--container-padding-block-start": "xjmgx01",
		"--container-padding-block-end": "xi9ns85",
		$$css: !0
	},
	startPanel: {
		kZCmMZ: "x139j0dd",
		$$css: !0
	},
	endPanel: {
		kwRFfy: "xpc6k2p",
		$$css: !0
	},
	noHeader: {
		kLKAdn: "x81pis9",
		$$css: !0
	},
	noFooter: {
		kGO01o: "xon7vh3",
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
	scrollable: {
		kVQacm: "xysyzu8",
		$$css: !0
	},
	dividerEnd: {
		ke9TFa: "x1lun4ml",
		k8ry5P: "x18b5jzi",
		kBCPoo: "x1gejf6u",
		$$css: !0
	},
	dividerStart: {
		k2ei4v: "xpilrb4",
		kVhnKS: "x1t7ytsu",
		kGJrpR: "x1j92z86",
		$$css: !0
	},
	collapseStart: {
		keTefX: "x1wim8z0",
		$$css: !0
	},
	collapseEnd: {
		k71WvV: "x1kpg4um",
		$$css: !0
	}
}, Mt = { sizing: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function Nt({ children: t, hasDivider: n = !1, isScrollable: r = !0, label: i, padding: a, role: o, width: s, resizable: c, xstyle: l, className: u, style: d, ref: f, ...p }) {
	let m = (0, H.use)(dt), { hasHeader: h, hasFooter: g } = (0, H.use)(ft), _ = c ? c._size : s, v = m === "start", y = m === "end", b = a === 0, x = !n && !b && a == null, S = v ? jt.dividerEnd : y ? jt.dividerStart : null, C = v ? jt.collapseEnd : y ? jt.collapseStart : null;
	return /*#__PURE__*/ (0, U.jsx)("div", {
		ref: f,
		role: o,
		"aria-label": i,
		...B(E("layout-panel"), k(jt.panel, Mt.sizing(_ ?? null), v && !b && a == null && jt.startPanel, y && !b && a == null && jt.endPanel, !h && !b && a == null && jt.noHeader, !g && !b && a == null && jt.noFooter, r && jt.scrollable, b && jt.fullBleed, a != null && Ne[a], a != null && e[a], a != null && D[a], a != null && te[a], n && S, x && C, l), u, d),
		...p,
		children: t
	});
}
Nt.displayName = "LayoutPanel";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutContent.js
var Pt = {
	content: {
		kB7OPa: "x9f619",
		kZKoxP: "x5yr21d",
		kUk6DE: "x98rzlu",
		kAzted: "x2lwn1j",
		kVQacm: "x7giv3",
		kZCmMZ: "xwjyata",
		kwRFfy: "x1peupej",
		kLKAdn: "xqty4a x1ioh5az",
		kGO01o: "xg476vw xsg11nj",
		"--container-padding-inline-start": "x408pgh",
		"--container-padding-inline-end": "xikqloz",
		"--container-padding-block-start": "xjmgx01",
		"--container-padding-block-end": "xi9ns85",
		$$css: !0
	},
	noStart: {
		kZCmMZ: "x139j0dd",
		"--container-padding-inline-start": "xdvaxxn",
		"--container-padding-inline-end": "xqpvj4r",
		$$css: !0
	},
	noEnd: {
		kwRFfy: "xpc6k2p",
		$$css: !0
	},
	noHeader: {
		kLKAdn: "x81pis9",
		"--container-padding-block-start": "xzz8v79",
		$$css: !0
	},
	noFooter: {
		kGO01o: "xon7vh3",
		"--container-padding-block-end": "x1xjq73n",
		$$css: !0
	},
	scrollable: {
		kVQacm: "xysyzu8",
		$$css: !0
	},
	constrainedNoPanelsStart: {
		kZCmMZ: "xhlv5e7",
		$$css: !0
	},
	constrainedNoPanelsEnd: {
		kwRFfy: "x1ahicqp",
		$$css: !0
	},
	constrainedSingleStartPanel: {
		kwRFfy: "xy07wb4",
		$$css: !0
	},
	constrainedSingleEndPanel: {
		kZCmMZ: "xxjme2g",
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
	}
};
function Ft({ children: t, isScrollable: n = !0, padding: r, label: i, role: a, xstyle: o, className: s, style: c, ref: l, ...u }) {
	let { hasHeader: d, hasFooter: f, hasStart: p, hasEnd: m } = (0, H.use)(ft), h = r === 0;
	return /*#__PURE__*/ (0, U.jsx)("div", {
		ref: l,
		role: a,
		"aria-label": i,
		...B(E("layout-content"), k(Pt.content, !p && !h && r == null && Pt.noStart, !m && !h && r == null && Pt.noEnd, !d && !h && r == null && Pt.noHeader, !f && !h && r == null && Pt.noFooter, n && Pt.scrollable, h && Pt.fullBleed, r != null && Ne[r], r != null && e[r], r != null && D[r], r != null && te[r], !p && !m && !h && Pt.constrainedNoPanelsStart, !p && !m && !h && Pt.constrainedNoPanelsEnd, p && !m && !h && Pt.constrainedSingleStartPanel, !p && m && !h && Pt.constrainedSingleEndPanel, o), s, c),
		...u,
		children: t
	});
}
Ft.displayName = "LayoutContent";
var It = /*#__PURE__*/ (0, H.createContext)({
	isMobile: !1,
	isMobileNavOpen: !1,
	toggleMobileNav: () => {},
	openMobileNav: () => {},
	closeMobileNav: () => {},
	isMobileNavEnabled: !1,
	hasAutoToggle: !0
});
It.displayName = "AppShellMobileContext";
function Lt() {
	return (0, H.use)(It);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/MobileNav/MobileNavToggle.js
function Rt({ ref: e, children: t, label: n, "data-testid": r, xstyle: i, className: o, style: s }) {
	let c = L(), l = n ?? c("@astryx.mobileNav.toggle.open"), { isMobile: u, isMobileNavEnabled: d, isMobileNavOpen: f, mobileNavId: p, toggleMobileNav: m } = Lt();
	return !u || !d ? null : /*#__PURE__*/ (0, U.jsx)(a, {
		ref: e,
		variant: "ghost",
		label: l,
		icon: t ?? /*#__PURE__*/ (0, U.jsx)(F, {
			icon: "menu",
			color: "inherit"
		}),
		onClick: m,
		"aria-expanded": f,
		"aria-controls": p || void 0,
		"data-testid": r ?? "mobile-nav-toggle",
		xstyle: i,
		className: o,
		style: s,
		isIconOnly: !0
	});
}
Rt.displayName = "MobileNavToggle";
//#endregion
//#region node_modules/@astryxdesign/core/dist/SideNav/SideNavRenderContext.js
var zt = /*#__PURE__*/ (0, H.createContext)("default");
zt.displayName = "SideNavRenderContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavRenderContext.js
var Bt = /*#__PURE__*/ (0, H.createContext)("default");
Bt.displayName = "TopNavRenderContext";
function Vt() {
	return (0, H.use)(Bt);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavMobileContentContext.js
var Ht = /*#__PURE__*/ (0, H.createContext)(null);
Ht.displayName = "TopNavMobileContentContext";
function Ut() {
	return (0, H.use)(Ht);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/AppShell/AppShell.js
var Wt = H.Activity === void 0 ? ({ children: e }) => /*#__PURE__*/ (0, U.jsx)(U.Fragment, { children: e }) : ({ mode: e, children: t }) => /*#__PURE__*/ (0, U.jsx)(H.Activity, {
	mode: e,
	children: t
}), Gt = "astryx-app-shell-main", W = {
	root: {
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kVAEAm: "x1n2onr6",
		kVQacm: "x7giv3",
		$$css: !0
	},
	variantWash: {
		kWkggS: "x1eiddq6",
		$$css: !0
	},
	variantSurface: {
		kWkggS: "x10xzikg",
		$$css: !0
	},
	variantSection: {
		kWkggS: "x10xzikg",
		$$css: !0
	},
	variantElevated: {
		kWkggS: "x1eiddq6",
		$$css: !0
	},
	rootFill: {
		kZKoxP: "xtdtrs8",
		$$css: !0
	},
	rootAuto: {
		kAzted: "x1ov3xa9",
		$$css: !0
	},
	skipLink: {
		kVAEAm: "x10l6tqk x1xrnuwo",
		kzqmXN: "x1i1rx1s x1jqxupm",
		kZKoxP: "xjm9jq1 x15cytp8",
		k8WAf4: "xt970qd xh2mrf5",
		kg3NbH: "xnjsko4 x1cf3d6k",
		kogj98: "xkdpibf x1y5lnwp",
		kVQacm: "xb3r6kr xomzh7y",
		kz4h6p: "x1hyvwdk x1rsz1da",
		khDVqt: "xuxw1ft x1hbpcn8",
		kMzoRj: "xc342km",
		k87sOh: "x13vifvy x1rw3289",
		kLqNvP: "x1o0tod xodanix",
		kWkggS: "x10xzikg",
		kMwMTN: "xjse4m1",
		kY2c9j: "x1q2oy4v",
		kybGjl: "x1hl2dhg",
		k63SB2: "x2mo6ok",
		kGuDYH: "xjm74w1",
		$$css: !0
	},
	mainFocusTarget: {
		kI3sdo: "x1uvtmcs",
		$$css: !0
	},
	contentBgSurface: {
		kWkggS: "x10xzikg",
		$$css: !0
	},
	contentBgWash: {
		kWkggS: "x1eiddq6",
		$$css: !0
	},
	contentBgTransparent: {
		kWkggS: "xjbqb8w",
		kHBbk8: "xc8icb0",
		$$css: !0
	},
	navAreaWash: {
		kWkggS: "x1eiddq6",
		$$css: !0
	},
	navAreaSurface: {
		kWkggS: "x10xzikg",
		$$css: !0
	},
	banner: {
		kmuXW: "x2lah0s",
		$$css: !0
	},
	headerSticky: {
		kVAEAm: "x7wzq59",
		k87sOh: "x13vifvy",
		kY2c9j: "x1vjfegm",
		$$css: !0
	},
	panelAutoFill: {
		kUk6DE: "x98rzlu",
		kVQacm: "xysyzu8",
		$$css: !0
	}
};
function Kt({ variant: e = "elevated", banner: t, children: r, contentPadding: i, "data-testid": a, height: o = "fill", mobileNav: s, sideNav: c, topNav: l, xstyle: u, className: d, style: f, ref: p, ...g }) {
	let _ = L(), v = n(), y = s === !1, x = s != null && s !== !1 && typeof s == "object" && !/*#__PURE__*/ (0, H.isValidElement)(s) ? s : null, S = x?.breakpoint ?? "md", C = s != null && s !== !1 && (/*#__PURE__*/ (0, H.isValidElement)(s) || typeof s == "string") ? s : null, w = x?.content ?? null, D = x?.hasToggle !== !1, O = x?.isOpen !== void 0, A = v?.__adaptations?.widthBreakpoints, j = S === "none" ? "(width < 0px)" : `(width < ${A?.[S] ?? m[S]}px)`, M = b(j, S !== "none" && x?.defaultIsMobile), [N, P] = (0, H.useState)(!1), F = x?.isOpen ?? N, ee = x?.onOpenChange, I = (0, H.useCallback)((e) => {
		O || P(e), ee?.(e);
	}, [O, ee]), te = (0, H.useCallback)(() => {
		document.getElementById(Gt)?.focus();
	}, []), ne = o === "fill", re = o === "auto", ie = R(t), z = R(l), ae = R(c), oe = !y && (z || ae) && C == null, se = e === "section", ce = e === "elevated", V = e === "wash" || e === "elevated" ? W.navAreaWash : e === "surface" ? W.navAreaSurface : void 0, le = V ?? (re && e === "section" ? W.navAreaSurface : void 0), ue = e === "wash" ? W.contentBgWash : e === "elevated" && z && ae && !M ? W.contentBgTransparent : e === "surface" || e === "elevated" ? W.contentBgSurface : void 0, de = V ?? W.navAreaSurface, fe = (0, H.useRef)(null), pe = (0, H.useRef)(null);
	(0, H.useEffect)(() => {
		if (!re || !fe.current || !pe.current) return;
		let e = fe.current, t = pe.current, n = () => {
			let n = e.getBoundingClientRect().height;
			t.style.setProperty("--_app-shell-header-height", `${n}px`);
		};
		return ze(e, () => n());
	}, [re]);
	let me = ae && !M, he = C != null, ge = oe && w != null && M, _e = (0, H.useId)(), ve = (0, H.useMemo)(() => ({
		isMobile: M,
		isMobileNavOpen: F,
		mobileNavId: _e,
		toggleMobileNav: () => oe && I(!F),
		openMobileNav: () => oe && I(!0),
		closeMobileNav: () => I(!1),
		isMobileNavEnabled: oe,
		hasAutoToggle: D
	}), [
		M,
		F,
		_e,
		I,
		oe,
		D
	]), ye = ae && D ? /*#__PURE__*/ (0, U.jsx)(zt, {
		value: "drawer-content",
		children: c
	}) : null, be = ae ? /*#__PURE__*/ (0, U.jsx)(zt, {
		value: "drawer-content",
		children: c
	}) : null, xe = z ? M && !y && C == null ? /*#__PURE__*/ (0, U.jsx)(Ht, {
		value: ye,
		children: /*#__PURE__*/ (0, U.jsx)(Bt, {
			value: "mobile-bar",
			children: l
		})
	}) : l : null, Se = z || ie ? /*#__PURE__*/ (0, U.jsxs)(T, {
		padding: 0,
		hasDivider: se && z,
		children: [ie && /*#__PURE__*/ (0, U.jsx)("div", {
			...k(W.banner, V),
			children: t
		}), z && xe]
	}) : void 0, we = R(Se) ? /*#__PURE__*/ (0, U.jsx)("div", {
		ref: fe,
		role: "banner",
		...B(E("app-shell-header", { variant: e }), k(le, re && W.headerSticky)),
		children: Se
	}) : void 0, Te = me ? /*#__PURE__*/ (0, U.jsx)(Nt, {
		padding: 0,
		hasDivider: se,
		isScrollable: ne,
		...E("app-shell-sidenav", { variant: e }),
		xstyle: [
			V,
			re && de,
			re && W.panelAutoFill
		],
		children: c
	}) : void 0, Ee = Te != null && re ? /*#__PURE__*/ (0, U.jsx)("div", {
		className: "x2lah0s x7giv3 x7wzq59 xht72ud xpa73km x78zum5 xdt5ytf",
		children: Te
	}) : Te, De = ce && z && me, Oe = /*#__PURE__*/ (0, U.jsx)(Ft, {
		padding: i ?? 0,
		role: "main",
		id: Gt,
		tabIndex: -1,
		isScrollable: ne,
		xstyle: [ue, W.mainFocusTarget],
		children: r
	}), ke = De ? /*#__PURE__*/ (0, U.jsxs)("div", {
		className: "x1n2onr6 x78zum5 x98rzlu x2lwn1j x5yr21d",
		children: [/*#__PURE__*/ (0, U.jsx)("div", { className: "x10l6tqk x10a8y8t x10xzikg x183tx6i x47corl" }), Oe]
	}) : Oe, Ae = !y && D && M && !z && ae ? /*#__PURE__*/ (0, U.jsx)("div", {
		role: we == null ? "banner" : void 0,
		...B(E("app-shell-header", { variant: e }), k(le, re && W.headerSticky)),
		children: /*#__PURE__*/ (0, U.jsx)(T, {
			padding: 0,
			hasDivider: se,
			children: /*#__PURE__*/ (0, U.jsxs)("div", {
				className: "x78zum5 x6s0dn4 x1k15mir xf314gf",
				role: "navigation",
				"aria-label": _("@astryx.appShell.mobileNavigation"),
				children: [/*#__PURE__*/ (0, U.jsx)(zt, {
					value: "topbar",
					children: c
				}), /*#__PURE__*/ (0, U.jsx)(Rt, {})]
			})
		})
	}) : void 0;
	return /*#__PURE__*/ (0, U.jsx)(It, {
		value: ve,
		children: /*#__PURE__*/ (0, U.jsxs)("div", {
			...g,
			ref: h(p, pe),
			"data-testid": a,
			...B(E("app-shell", { variant: e }), k(W.root, e === "wash" ? W.variantWash : e === "surface" ? W.variantSurface : e === "section" ? W.variantSection : W.variantElevated, ne ? W.rootFill : W.rootAuto, u), d, f),
			children: [
				/*#__PURE__*/ (0, U.jsx)("a", {
					href: `#${Gt}`,
					onClick: te,
					...Ce.focusVisible(W.skipLink),
					"data-testid": "skip-to-content",
					children: _("@astryx.appShell.skipToContent")
				}),
				/*#__PURE__*/ (0, U.jsx)(At, {
					height: o,
					padding: 0,
					header: /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [we, Ae] }),
					start: Ee,
					content: ke
				}),
				he && C,
				ge && w,
				M && !y && C == null && !w && /*#__PURE__*/ (0, U.jsxs)(Wt, {
					mode: F ? "visible" : "hidden",
					children: [ae && !z && /*#__PURE__*/ (0, U.jsx)(zt, {
						value: "drawer",
						children: c
					}), z && /*#__PURE__*/ (0, U.jsx)(Ht, {
						value: be,
						children: /*#__PURE__*/ (0, U.jsx)(Bt, {
							value: "drawer",
							children: l
						})
					})]
				})
			]
		})
	});
}
Kt.displayName = "AppShell";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavContext.js
var qt = ce("start");
qt.displayName = "TopNavSlotContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/MobileNav/MobileNav.js
var Jt = {
	dialog: {
		kVAEAm: "xixxii4",
		kogj98: "x1ghz6dp",
		kmVPX3: "x1717udv",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		ks0D6T: "x1x1rfll",
		kskxy: "x7ab17h",
		kpwlN0: "x10a8y8t",
		kzqmXN: "xn9wirt",
		kZKoxP: "xtdtrs8",
		kWkggS: "xjbqb8w",
		kVQacm: "x7giv3",
		kZeWKH: "xish69e",
		kFalU9: "x5ve5x3",
		kI3sdo: "x1a2a7pz",
		k1xSpc: "x1s85apg",
		k1ekBW: "xrgi2yo",
		kIyJzY: "x80gvsz",
		kzIqYQ: "xd00j3c",
		$$css: !0
	},
	open: {
		k1xSpc: "x78zum5",
		$$css: !0
	},
	backdrop: {
		kGyWv1: "xnixb3f",
		kba3nw: "x1abwkk1",
		k5sjJv: "xph5o2a",
		kND0Po: "x167zut7",
		k9an0g: "xft5bk6",
		kb4ib: "x15h3t91",
		kA5Tbj: "x1viac0w",
		$$css: !0
	},
	backdropOpen: {
		k5sjJv: "xb3n6bw xxiuuzi",
		$$css: !0
	},
	drawer: {
		kVAEAm: "x10l6tqk",
		k87sOh: "x13vifvy",
		krVfgx: "x1ey2m1c",
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kWkggS: "x10xzikg",
		kB7OPa: "x9f619",
		kVQacm: "xb3r6kr",
		k1ekBW: "x11xpdln",
		kIyJzY: "x80gvsz",
		kAMwcw: "xlr8y92",
		kI3sdo: "x1a2a7pz",
		k6CgDc: "xzg1mie",
		$$css: !0
	},
	drawerStart: {
		kLqNvP: "x1o0tod",
		ke9TFa: "xw8tdv1",
		k8ry5P: "x18b5jzi",
		kBCPoo: "x1gejf6u",
		k3aq6I: "x5i6ehr xttggg",
		$$css: !0
	},
	drawerStartOpen: {
		k3aq6I: "xbryuvx x6mt36l x14gflnl",
		$$css: !0
	},
	drawerEnd: {
		kt4wiu: "xtijo5x",
		k2ei4v: "xgbv0en",
		kVhnKS: "x1t7ytsu",
		kGJrpR: "x1j92z86",
		k3aq6I: "xumwmo6 x1df3fe5",
		$$css: !0
	},
	drawerEndOpen: {
		k3aq6I: "xbryuvx x1yqmsfc x1lymnkk",
		$$css: !0
	},
	headerText: {
		keTefX: "x11g1kdw",
		$$css: !0
	}
}, Yt = {
	kzqmXN: "xn9wirt",
	ks0D6T: "xf68679",
	$$css: !0
}, Xt = { width: (e) => [Yt, { "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`${e}px`) }] }, Zt = 250, Qt = .6;
function $t(e) {
	let t = e.split(",").map((e) => {
		let t = e.trim(), n = Number.parseFloat(t);
		return Number.isFinite(n) ? t.endsWith("ms") ? n : t.endsWith("s") ? n * 1e3 : null : null;
	}).filter((e) => e !== null);
	return t.length ? Math.min(...t) : null;
}
function en(e) {
	let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Zt, n = $t(window.getComputedStyle(e).transitionDuration);
	return n === null ? t : n <= 0 ? 0 : Math.min(t, n * Qt);
}
function tn({ isOpen: e, onOpenChange: t, children: n, header: r, width: i = 320, side: o = "auto", label: s, "data-testid": l, xstyle: u, className: d, style: f, onClick: p, ref: m, ..._ }) {
	let v = L(), y = Lt(), b = e ?? y.isMobileNavOpen, x = (0, H.useId)(), S = y.mobileNavId || x, C = (0, H.useMemo)(() => t ?? ((e) => {
		e ? y.openMobileNav() : y.closeMobileNav();
	}), [t, y]), w = (0, H.useRef)(null), T = (0, H.useRef)(null), D = (0, H.useRef)(null), O = (0, H.useCallback)(() => {
		D.current &&= (D.current.release(), null);
	}, []), [A, j] = (0, H.useState)(o === "auto" ? "end" : o);
	(0, H.useEffect)(() => {
		if (b) {
			if (o === "auto") {
				let e = document.activeElement;
				if (e && e !== document.body) {
					let t = e.getBoundingClientRect(), n = t.left + t.width / 2;
					j(n < window.innerWidth / 2 ? "start" : "end");
				}
			} else j(o);
		}
	}, [b, o]), (0, H.useEffect)(() => {
		let e = w.current;
		if (e) return b ? (D.current ??= g(document.documentElement), e.open || e.showModal(), document.documentElement.style.overflow = "clip", D.current.settle()) : e.open && (document.documentElement.style.overflow = "", O(), T.current = setTimeout(() => {
			e.close();
		}, en(e))), () => {
			T.current &&= (clearTimeout(T.current), null), document.documentElement.style.overflow = "", O();
		};
	}, [b, O]), (0, H.useEffect)(() => {
		let e = w.current;
		return () => {
			e?.open && e.close();
		};
	}, []);
	let { shouldDismissOnCloseRequest: N } = Ve({
		isActive: b,
		onDismiss: () => C(!1)
	}), P = (0, H.useCallback)((e) => {
		e.preventDefault(), N() && C(!1);
	}, [C, N]), ee = (0, H.useCallback)((e) => {
		e.target === e.currentTarget && C(!1);
	}, [C]), I = A === "start";
	return /*#__PURE__*/ (0, U.jsx)("dialog", {
		ref: h(m, w),
		id: S,
		...B(E("mobile-nav", { side: A }), k(xe.reset, Jt.dialog, Te.reset, b && Jt.open, Jt.backdrop, b && Jt.backdropOpen, u), d, f),
		..._,
		"data-testid": l,
		"aria-label": s ?? (typeof r == "string" ? r : v("@astryx.mobileNav.navigation")),
		onClick: Ge(p, ee),
		onCancel: P,
		children: /*#__PURE__*/ (0, U.jsx)(c, { children: /*#__PURE__*/ (0, U.jsx)(Le, { children: /*#__PURE__*/ (0, U.jsxs)("div", {
			tabIndex: -1,
			...k(Jt.drawer, Xt.width(i), I && Jt.drawerStart, I && b && Jt.drawerStartOpen, !I && Jt.drawerEnd, !I && b && Jt.drawerEndOpen),
			children: [/*#__PURE__*/ (0, U.jsxs)("div", {
				...{
					0: { className: "x78zum5 x6s0dn4 x1qughib x1k15mir xf314gf x2lah0s x92x3c3 x1q0q8m5 xw8gpjh" },
					1: { className: "x78zum5 x6s0dn4 x1k15mir xf314gf x2lah0s x92x3c3 x1q0q8m5 xw8gpjh x13a6bvl" }
				}[!r << 0],
				children: [typeof r == "string" ? /*#__PURE__*/ (0, U.jsx)(M, {
					level: 2,
					xstyle: Jt.headerText,
					children: r
				}) : r ?? null, /*#__PURE__*/ (0, U.jsx)(a, {
					variant: "ghost",
					label: v("@astryx.mobileNav.closeNavigation"),
					icon: /*#__PURE__*/ (0, U.jsx)(F, {
						icon: "close",
						color: "inherit"
					}),
					onClick: () => C(!1),
					isIconOnly: !0
				})]
			}), /*#__PURE__*/ (0, U.jsx)("div", {
				className: "x98rzlu x1odjw0f x6ikm8r xish69e xx69xxh xf314gf xce4md1",
				children: n
			})]
		}) }) })
	});
}
tn.displayName = "MobileNav";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNav.js
var nn = {
	base: {
		kGNEyG: "x6s0dn4",
		kzqmXN: "xh8yej3",
		kmVPX3: "xlsj2fj",
		kB7OPa: "x9f619",
		$$css: !0
	},
	baseFlex: {
		k1xSpc: "x78zum5",
		$$css: !0
	},
	baseGrid: {
		k1xSpc: "xrvj5dj",
		kumcoG: "x134kloy",
		$$css: !0
	},
	mobileBar: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kzqmXN: "xh8yej3",
		kmVPX3: "xlsj2fj",
		kB7OPa: "x9f619",
		$$css: !0
	},
	drawerDivider: {
		kqGvvJ: "x1g06x3t",
		$$css: !0
	}
};
function rn({ heading: e, startContent: t, children: n, centerContent: r, endContent: i, label: a, xstyle: o, className: c, style: l, ref: u, ...d }) {
	let f = L(), p = a ?? f("@astryx.topNav.landmarkLabel"), m = Vt(), h = Ut(), { hasAutoToggle: g } = Lt(), _ = t ?? n, v = r != null, y = _ != null || r != null, b = y || h != null;
	return m === "mobile-bar" ? /*#__PURE__*/ (0, U.jsxs)("nav", {
		ref: u,
		role: "navigation",
		"aria-label": p,
		...B(E("top-nav", { mode: "mobile-bar" }), k(nn.mobileBar, o), c, l),
		...d,
		children: [e && /*#__PURE__*/ (0, U.jsx)("div", {
			className: "x78zum5 x6s0dn4 x2lah0s",
			children: e
		}), /*#__PURE__*/ (0, U.jsxs)("div", {
			className: "x78zum5 x6s0dn4 xzye2dw xvc5jky",
			children: [i, b && g && /*#__PURE__*/ (0, U.jsx)(Rt, {})]
		})]
	}) : m === "drawer" ? !y && !h ? null : /*#__PURE__*/ (0, U.jsxs)(tn, {
		header: e,
		children: [
			y && /*#__PURE__*/ (0, U.jsxs)("div", {
				className: "x78zum5 xdt5ytf x1lsbc85",
				children: [_, r]
			}),
			y && h && /*#__PURE__*/ (0, U.jsx)(s, { xstyle: nn.drawerDivider }),
			h && /*#__PURE__*/ (0, U.jsx)("div", { children: h })
		]
	}) : /*#__PURE__*/ (0, U.jsxs)("nav", {
		ref: u,
		role: "navigation",
		"aria-label": p,
		...B(E("top-nav"), k(nn.base, v ? nn.baseGrid : nn.baseFlex, o), c, l),
		...d,
		children: [
			/*#__PURE__*/ (0, U.jsxs)("div", {
				className: "x78zum5 x6s0dn4 x18g69wz x845mor xeuugli",
				children: [e && /*#__PURE__*/ (0, U.jsx)("div", {
					className: "x78zum5 x6s0dn4 x2lah0s",
					children: e
				}), _ && /*#__PURE__*/ (0, U.jsx)(qt, {
					value: "start",
					children: /*#__PURE__*/ (0, U.jsx)("div", {
						className: "x78zum5 x6s0dn4 xzye2dw",
						children: _
					})
				})]
			}),
			v && /*#__PURE__*/ (0, U.jsx)(qt, {
				value: "center",
				children: /*#__PURE__*/ (0, U.jsx)("div", {
					className: "x78zum5 x6s0dn4 xl56j7k xzye2dw",
					children: r
				})
			}),
			v ? /*#__PURE__*/ (0, U.jsx)("div", {
				className: "x78zum5 x6s0dn4 x13a6bvl xzye2dw",
				children: /*#__PURE__*/ (0, U.jsx)(qt, {
					value: "end",
					children: i
				})
			}) : i && /*#__PURE__*/ (0, U.jsx)("div", {
				className: "x78zum5 x6s0dn4 xzye2dw x2lah0s xvc5jky",
				children: /*#__PURE__*/ (0, U.jsx)(qt, {
					value: "end",
					children: i
				})
			})
		]
	});
}
rn.displayName = "TopNav";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Link/Link.js
var an = {
	base: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1lsbc85",
		kMv6JI: "xjb2p0i",
		kGuDYH: "x1qlqyl8",
		kLWn49: "x15bjb6t",
		k63SB2: "x1pd3egz",
		kybGjl: "x1hl2dhg x13nosk6",
		kkrTdU: "x1ypdohk x16khyan",
		k1ekBW: "x1mpt4pi",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	buttonReset: {
		kWkggS: "xjbqb8w",
		ksu8eU: "xng3xce",
		kmVPX3: "x1717udv",
		kfzvcC: "x67bb7w",
		kVAEAm: "x1n2onr6",
		$$css: !0
	},
	hasUnderline: {
		kybGjl: "x1bvjpef",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kSiTet: "xbyyjgo",
		kfzvcC: "x47corl",
		$$css: !0
	},
	standalone: {
		kGuDYH: "xjm74w1",
		kLWn49: "xw6l6zx",
		$$css: !0
	}
}, on = {
	primary: {
		kMwMTN: "x1tgivj0 xcunlro",
		$$css: !0
	},
	secondary: {
		kMwMTN: "xv1l7n4 x7jm8ul",
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
		kMwMTN: "xjse4m1 x1rfoswn",
		$$css: !0
	},
	inherit: {
		kMwMTN: "x1heor9g",
		$$css: !0
	}
};
function sn(e) {
	e.preventDefault();
}
function cn({ as: e, label: t, href: n, hasUnderline: r = !1, isDisabled: a = !1, isExternalLink: o = !1, newTabLabel: s, target: c, onClick: l, tooltip: u, isStandalone: d = !1, type: f = "body", size: m, weight: h, color: g = "accent", display: _ = "inline", maxLines: v = 0, children: y, rel: b, xstyle: S, className: w, style: T, ref: D, ...O }) {
	let k = L(), A = s ?? k("@astryx.link.newTab"), j = ye(e), M = lt({
		href: n,
		onClick: l,
		isDisabled: a
	}), { target: N, rel: P } = i(o ? "_blank" : c, b), ee = M === "button" || M === "inert" && n == null, I = /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsx)(x, {
		type: f,
		size: m,
		weight: h,
		color: g,
		display: _,
		maxLines: v,
		children: y
	}), o && !ee && /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsx)(F, {
		icon: "externalLink",
		size: "xsm",
		color: "inherit"
	}), /*#__PURE__*/ (0, U.jsx)(_e, { children: A })] })] }), te;
	return te = ee ? /*#__PURE__*/ (0, U.jsx)("button", {
		ref: D,
		type: "button",
		onClick: l,
		"aria-label": t || void 0,
		"aria-disabled": a || void 0,
		tabIndex: a ? -1 : void 0,
		disabled: a,
		...B(E("link", { color: g }), Ce.focusVisible(an.base, an.buttonReset, on[g], !a && C.pressedBackgroundColor, r && an.hasUnderline, d && an.standalone, a && an.disabled, S), w, T),
		...O,
		children: I
	}) : a ? /*#__PURE__*/ (0, U.jsx)("a", {
		ref: D,
		onClick: sn,
		"aria-label": t || void 0,
		"aria-disabled": !0,
		tabIndex: -1,
		...B(E("link", { color: g }), Ce.focusVisible(an.base, on[g], r && an.hasUnderline, d && an.standalone, an.disabled, S), w, T),
		...O,
		children: I
	}) : /*#__PURE__*/ (0, U.jsx)(j, {
		ref: D,
		href: n,
		target: N,
		rel: P,
		onClick: l,
		"aria-label": t || void 0,
		"aria-disabled": a || void 0,
		tabIndex: a ? -1 : void 0,
		...B(E("link", { color: g }), Ce.focusVisible(an.base, on[g], !a && C.pressedBackgroundColor, r && an.hasUnderline, d && an.standalone, a && an.disabled, S), w, T),
		...O,
		children: I
	}), u ? /*#__PURE__*/ (0, U.jsx)(p, {
		content: u,
		placement: "above",
		children: te
	}) : te;
}
cn.displayName = "Link";
//#endregion
//#region node_modules/@astryxdesign/core/dist/NavMenu/NavMenuContext.js
var ln = /*#__PURE__*/ (0, H.createContext)(null);
ln.displayName = "NavHeadingCloseContext";
var un = ce(null);
un.displayName = "NavHeadingMenuContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavHeading.js
var G = {
	root: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		kAzted: "xkoleio",
		kZCmMZ: "x12gdq22 xmnmr5y",
		kwRFfy: "x1djylfy",
		k8WAf4: "xt970qd",
		kB7OPa: "x9f619",
		kybGjl: "x1hl2dhg",
		kMwMTN: "x1tgivj0",
		kkrTdU: "xt0e3qv",
		$$css: !0
	},
	menuTrigger: {
		kkrTdU: "x1ypdohk x16khyan",
		kaIpWk: "xh6dtrn",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kWkggS: "xjbqb8w",
		kMv6JI: "xjb2p0i",
		kGuDYH: "x1qlqyl8",
		k63SB2: "x1sodnla",
		k9WMMc: "x1yc453h",
		$$css: !0
	},
	chevron: {
		kmuXW: "x2lah0s",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		k7Eaqz: "xy8csz5",
		kAzted: "ximsjs8",
		kMwMTN: "xv9yike",
		$$css: !0
	},
	chevronGlyph: {
		kzqmXN: "x15vhz18",
		kZKoxP: "xlzyvqe",
		kGuDYH: "x1qlqyl8",
		$$css: !0
	},
	popoverChevron: {
		k3aq6I: "x19jd1h0",
		$$css: !0
	},
	popoverOverlap: {
		k7Eaqz: "x8wyhu6",
		keoZOQ: "xvyqdj1",
		keTefX: "x1qfufaz",
		$$css: !0
	}
};
function dn({ as: e, logo: t, logoLabel: n, heading: r, headingHref: i, superheading: a, superheadingHref: o, subheading: s, subheadingHref: c, headerEndContent: l, menu: u, xstyle: d, className: f, style: p, "data-testid": m, ref: g, ..._ }) {
	let v = L(), y = ye(e), b = n ?? r, x = (0, H.useRef)(null), S = Be({
		dialogLabel: v("@astryx.topNav.heading.dialogLabel"),
		role: "none",
		hasCloseButton: !1
	}), { triggerProps: C, contentProps: w, menuRef: T, setTriggerEl: D, close: O } = A({
		show: S.show,
		hide: S.hide,
		isOpen: S.isOpen,
		isEnabled: !!u,
		showDelay: 0
	}), j = (0, H.useMemo)(() => ({ closeMenu: O }), [O]), M = h(x, g, u ? S.triggerRef : void 0), N = !!u, P = !!(i || o || c), ee = !!u && !P, I = !!i && !u && !o && !c, te = (e) => /*#__PURE__*/ (0, U.jsxs)("span", {
		className: "x78zum5 xdt5ytf xeuugli",
		children: [
			a && (P && o && u ? /*#__PURE__*/ (0, U.jsx)(cn, {
				href: o,
				onClick: (e) => e.stopPropagation(),
				color: "secondary",
				size: "xsm",
				children: a
			}) : /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x141an7d x1ltkj2j xv1l7n4 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
				children: a
			})),
			/*#__PURE__*/ (0, U.jsxs)("span", {
				className: "x78zum5 x6s0dn4 xzye2dw",
				children: [P && i && u ? /*#__PURE__*/ (0, U.jsx)(y, {
					href: i,
					onClick: (e) => e.stopPropagation(),
					className: "x18juvz8 x2mo6ok xf74fhv x1hl2dhg x1heor9g xb3r6kr xlyipyv xuxw1ft",
					children: r
				}) : /*#__PURE__*/ (0, U.jsx)("span", {
					className: "x18juvz8 x2mo6ok xf74fhv x1tgivj0 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
					children: r
				}), e]
			}),
			s && (P && c && u ? /*#__PURE__*/ (0, U.jsx)(cn, {
				href: c,
				onClick: (e) => e.stopPropagation(),
				color: "secondary",
				size: "xsm",
				children: s
			}) : /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x141an7d x1ltkj2j xv1l7n4 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
				children: s
			}))
		]
	}), ne = N && /*#__PURE__*/ (0, U.jsx)(F, {
		icon: "chevronDown",
		size: "sm",
		color: "secondary",
		xstyle: [G.chevron, G.chevronGlyph]
	}), R = l && /*#__PURE__*/ (0, U.jsx)("span", {
		className: "x2lah0s x78zum5 x6s0dn4 xvc5jky",
		children: l
	}), re = /*#__PURE__*/ (0, U.jsxs)("button", {
		type: "button",
		className: "x78zum5 x6s0dn4 x1txdalj xh8yej3 xc342km xng3xce xjbqb8w xjb2p0i x1qlqyl8 x1heor9g x1yc453h xkoleio x12gdq22 xmnmr5y x1djylfy xt970qd xcsaf9d x1p37lm5 xhrcg97 x1ypdohk x16khyan",
		onClick: O,
		children: [t && /*#__PURE__*/ (0, U.jsx)("span", {
			className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
			children: t
		}), te(/*#__PURE__*/ (0, U.jsx)(F, {
			icon: "chevronDown",
			size: "sm",
			color: "secondary",
			xstyle: [
				G.chevron,
				G.chevronGlyph,
				G.popoverChevron
			]
		}))]
	});
	return !r && !u ? /*#__PURE__*/ (0, U.jsx)(i ? y : "div", {
		ref: g,
		href: i,
		"aria-label": i ? n : void 0,
		"data-testid": m,
		...B(E("top-nav-heading"), k(G.root, !!i && G.menuTrigger, d), f, p),
		..._,
		children: t && /*#__PURE__*/ (0, U.jsx)("span", {
			className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
			children: t
		})
	}) : I && i ? /*#__PURE__*/ (0, U.jsxs)(y, {
		ref: g,
		href: i,
		"data-testid": m,
		...B(E("top-nav-heading"), k(G.root, G.menuTrigger, d), f, p),
		..._,
		children: [
			t && /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			}),
			te(),
			R,
			ne
		]
	}) : ee ? /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsxs)("div", {
		ref: M,
		"data-testid": m,
		...C,
		...B(E("top-nav-heading"), k(G.root, G.menuTrigger, d), f, p),
		children: [
			t && /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			}),
			te(/*#__PURE__*/ (0, U.jsx)("button", {
				ref: D,
				type: "button",
				"aria-label": v("@astryx.topNav.heading.openMenu"),
				onClick: (e) => {
					e.stopPropagation(), C.onClick();
				},
				...S.triggerProps,
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k xy8csz5 ximsjs8 xv9yike x1ypdohk x16khyan xh6dtrn xc342km xng3xce xjbqb8w xjb2p0i x1qlqyl8 x1sodnla x1yc453h xoevpu5",
				children: /*#__PURE__*/ (0, U.jsx)(F, {
					icon: "chevronDown",
					size: "sm",
					color: "inherit",
					xstyle: G.chevronGlyph
				})
			})),
			R
		]
	}), S.render(/*#__PURE__*/ (0, U.jsxs)("div", {
		ref: T,
		className: "x9epnlk xb3r6kr",
		...w,
		children: [re, /*#__PURE__*/ (0, U.jsx)("div", {
			role: "menu",
			"aria-label": r ?? v("@astryx.topNav.heading.dialogLabel"),
			children: /*#__PURE__*/ (0, U.jsx)(ln, {
				value: j,
				children: u
			})
		})]
	}), {
		placement: "below",
		alignment: "start",
		xstyle: G.popoverOverlap
	})] }) : u && P ? /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsxs)("div", {
		ref: M,
		"data-testid": m,
		...C,
		...B(E("top-nav-heading"), k(G.root, d), f, p),
		children: [
			t && (i ? /*#__PURE__*/ (0, U.jsx)(y, {
				href: i,
				"aria-label": b,
				onClick: (e) => e.stopPropagation(),
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			}) : /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			})),
			te(N ? /*#__PURE__*/ (0, U.jsx)("button", {
				ref: D,
				type: "button",
				"aria-label": v("@astryx.topNav.heading.openMenu"),
				onClick: (e) => {
					e.stopPropagation(), C.onClick();
				},
				...S.triggerProps,
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k xy8csz5 ximsjs8 xv9yike x1ypdohk x16khyan xh6dtrn xc342km xng3xce xjbqb8w xjb2p0i x1qlqyl8 x1sodnla x1yc453h xoevpu5",
				children: /*#__PURE__*/ (0, U.jsx)(F, {
					icon: "chevronDown",
					size: "sm",
					color: "inherit",
					xstyle: G.chevronGlyph
				})
			}) : void 0),
			R
		]
	}), S.render(/*#__PURE__*/ (0, U.jsxs)("div", {
		ref: T,
		className: "x9epnlk xb3r6kr",
		...w,
		children: [re, /*#__PURE__*/ (0, U.jsx)("div", {
			role: "menu",
			"aria-label": r ?? v("@astryx.topNav.heading.dialogLabel"),
			children: /*#__PURE__*/ (0, U.jsx)(ln, {
				value: j,
				children: u
			})
		})]
	}), {
		placement: "below",
		alignment: "start",
		xstyle: G.popoverOverlap
	})] }) : P && !I ? /*#__PURE__*/ (0, U.jsxs)("div", {
		ref: g,
		"data-testid": m,
		...B(E("top-nav-heading"), k(G.root, d), f, p),
		..._,
		children: [
			t && (i ? /*#__PURE__*/ (0, U.jsx)(y, {
				href: i,
				"aria-label": b,
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			}) : /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			})),
			/*#__PURE__*/ (0, U.jsxs)("span", {
				className: "x78zum5 xdt5ytf xeuugli",
				children: [
					a && (o ? /*#__PURE__*/ (0, U.jsx)(cn, {
						href: o,
						color: "secondary",
						size: "xsm",
						children: a
					}) : /*#__PURE__*/ (0, U.jsx)("span", {
						className: "x141an7d x1ltkj2j xv1l7n4 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
						children: a
					})),
					i ? /*#__PURE__*/ (0, U.jsx)(cn, {
						href: i,
						color: "primary",
						weight: "semibold",
						children: r
					}) : /*#__PURE__*/ (0, U.jsx)("span", {
						className: "x18juvz8 x2mo6ok xf74fhv x1tgivj0 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
						children: r
					}),
					s && (c ? /*#__PURE__*/ (0, U.jsx)(cn, {
						href: c,
						color: "secondary",
						size: "xsm",
						children: s
					}) : /*#__PURE__*/ (0, U.jsx)("span", {
						className: "x141an7d x1ltkj2j xv1l7n4 x1hl2dhg xb3r6kr xlyipyv xuxw1ft",
						children: s
					}))
				]
			}),
			R,
			ne
		]
	}) : /*#__PURE__*/ (0, U.jsxs)("div", {
		ref: g,
		"data-testid": m,
		...B(E("top-nav-heading"), k(G.root, d), f, p),
		..._,
		children: [
			t && /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x2lah0s x78zum5 x6s0dn4 xl56j7k",
				children: t
			}),
			te(),
			R,
			ne
		]
	});
}
dn.displayName = "TopNavHeading";
//#endregion
//#region node_modules/@astryxdesign/core/dist/NavItem/navItemStyles.stylex.js
var fn = {
	item: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		kzqmXN: "xh8yej3",
		kZKoxP: "x1ueg155",
		kg3NbH: "xf314gf",
		k8WAf4: "xt970qd",
		kaIpWk: "xh6dtrn",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kWkggS: "xjbqb8w",
		kMwMTN: "x1tgivj0",
		kybGjl: "x1hl2dhg",
		kkrTdU: "x1ypdohk x16khyan",
		kMv6JI: "xjb2p0i",
		kGuDYH: "xcr08ib",
		k63SB2: "x1sodnla",
		kLWn49: "x1kq96og",
		k9WMMc: "x1yc453h",
		kB7OPa: "x9f619",
		$$css: !0
	},
	selected: {
		kWkggS: "x17x4s8c x1jzqe4",
		kMwMTN: "x1k5gbb1",
		k63SB2: "x1e4wzip",
		kRL5z6: "xcu6dpe x1d42zcn",
		kSReZ0: "xjtnuge x1vo6n7o",
		$$css: !0
	},
	disabled: {
		kMwMTN: "xnbbluu",
		kkrTdU: "xt0e3qv",
		kfzvcC: "x47corl",
		$$css: !0
	},
	sm: {
		kZKoxP: "x6k0iem",
		kg3NbH: "x7a5moj",
		$$css: !0
	},
	md: {
		kZKoxP: "x1ueg155",
		kg3NbH: "xf314gf",
		$$css: !0
	},
	lg: {
		kZKoxP: "xssyfek",
		kg3NbH: "xf314gf",
		$$css: !0
	}
}, pn = {
	base: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		k8WAf4: "x1vofgu7",
		kg3NbH: "xrrkdod",
		kaIpWk: "xh6dtrn",
		kGuDYH: "xcr08ib",
		kLWn49: "x1kq96og",
		k63SB2: "x1e4wzip",
		kMwMTN: "xv1l7n4",
		kybGjl: "x1hl2dhg",
		kkrTdU: "x1ypdohk x16khyan",
		k1ekBW: "xs2xxs2",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	selected: {
		kMwMTN: "x1tgivj0",
		k63SB2: "x2mo6ok",
		kWkggS: "x17x4s8c xcu6dpe xjtnuge",
		$$css: !0
	},
	iconOnly: {
		kg3NbH: "xf314gf",
		$$css: !0
	}
};
function mn(e) {
	e.preventDefault();
}
function hn({ as: e, href: t, target: n, onClick: r, label: i, isSelected: a = !1, isDisabled: o = !1, isIconOnly: s = !1, icon: c, children: l, size: u = "md", xstyle: d, className: f, style: p, ref: m, ...h }) {
	let g = ye(e), _ = Vt(), { closeMobileNav: v } = Lt(), y = o ? "a" : g;
	if (_ === "drawer") {
		let e = (e) => {
			if (o) {
				mn(e);
				return;
			}
			r?.(e), v();
		};
		return /*#__PURE__*/ (0, U.jsxs)(y, {
			ref: m,
			href: o ? void 0 : t,
			target: o ? void 0 : n,
			"aria-label": s ? i : void 0,
			"aria-current": a ? "page" : void 0,
			"aria-disabled": o || void 0,
			tabIndex: o ? -1 : void 0,
			...B(E("top-nav-item", {
				mode: "drawer",
				selected: a ? "selected" : null
			}), Ce.focusVisible(fn.item, C.backgroundColor, fn[u], a && fn.selected, o && fn.disabled, d), f, p),
			...h,
			onClick: e,
			children: [c, !s && (l ?? i)]
		});
	}
	return /*#__PURE__*/ (0, U.jsxs)(y, {
		ref: m,
		href: o ? void 0 : t,
		target: o ? void 0 : n,
		onClick: o ? mn : r,
		"aria-label": s ? i : void 0,
		"aria-current": a ? "page" : void 0,
		"aria-disabled": o || void 0,
		tabIndex: o ? -1 : void 0,
		...B(E("top-nav-item", { selected: a ? "selected" : null }), Ce.focusVisible(pn.base, C.backgroundColor, a && pn.selected, o && fn.disabled, s && pn.iconOnly, d), f, p),
		...h,
		children: [c, !s && (l ?? i)]
	});
}
hn.displayName = "TopNavItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Grid/Grid.js
var gn = { grid: {
	k1xSpc: "xrvj5dj",
	$$css: !0
} }, _n = {
	kJBjZk: "xhij9v2",
	$$css: !0
}, vn = {
	templateColumns: (e) => [{
		kumcoG: e == null ? e : "xqketvx",
		$$css: !0
	}, { "--x-gridTemplateColumns": e ?? void 0 }],
	autoRows: (e) => [_n, { "--x-gridAutoRows": `${e}px` == null ? void 0 : `${e}px` }]
}, yn = {
	start: {
		kGNEyG: "x7a106z",
		$$css: !0
	},
	center: {
		kGNEyG: "x6s0dn4",
		$$css: !0
	},
	end: {
		kGNEyG: "xpqajaz",
		$$css: !0
	},
	stretch: {
		kGNEyG: "x1qjc9v5",
		$$css: !0
	}
}, bn = {
	start: {
		kAPf3g: "x619ttb",
		$$css: !0
	},
	center: {
		kAPf3g: "x1o2pa38",
		$$css: !0
	},
	end: {
		kAPf3g: "x4xo5sw",
		$$css: !0
	},
	stretch: {
		kAPf3g: "xl4xnwh",
		$$css: !0
	}
}, xn = {
	0: {
		kOIVth: "xsn7fz1",
		$$css: !0
	},
	1: {
		kOIVth: "xzye2dw",
		$$css: !0
	},
	2: {
		kOIVth: "x1txdalj",
		$$css: !0
	},
	3: {
		kOIVth: "xjcht0a",
		$$css: !0
	},
	4: {
		kOIVth: "x18g69wz",
		$$css: !0
	},
	5: {
		kOIVth: "x9mgr7n",
		$$css: !0
	},
	6: {
		kOIVth: "x1qh66ti",
		$$css: !0
	},
	8: {
		kOIVth: "x4t41sb",
		$$css: !0
	},
	10: {
		kOIVth: "x3hoi3v",
		$$css: !0
	},
	"0.5": {
		kOIVth: "x1lsbc85",
		$$css: !0
	},
	"1.5": {
		kOIVth: "x1s4dlld",
		$$css: !0
	}
}, Sn = {
	0: {
		khm7nJ: "x6yxi7o",
		$$css: !0
	},
	1: {
		khm7nJ: "x1ngg2t4",
		$$css: !0
	},
	2: {
		khm7nJ: "x1x7z4sm",
		$$css: !0
	},
	3: {
		khm7nJ: "x4olc9o",
		$$css: !0
	},
	4: {
		khm7nJ: "xtx9w7w",
		$$css: !0
	},
	5: {
		khm7nJ: "x1iu6piu",
		$$css: !0
	},
	6: {
		khm7nJ: "xczp1bk",
		$$css: !0
	},
	8: {
		khm7nJ: "xgx0vcf",
		$$css: !0
	},
	10: {
		khm7nJ: "x1xpicb7",
		$$css: !0
	},
	"0.5": {
		khm7nJ: "x1tw44j4",
		$$css: !0
	},
	"1.5": {
		khm7nJ: "xhq53yo",
		$$css: !0
	}
}, Cn = {
	0: {
		k1C7PZ: "x1o57wo1",
		$$css: !0
	},
	1: {
		k1C7PZ: "x1lfs0n9",
		$$css: !0
	},
	2: {
		k1C7PZ: "xak3so",
		$$css: !0
	},
	3: {
		k1C7PZ: "xewh9hi",
		$$css: !0
	},
	4: {
		k1C7PZ: "xty4p9g",
		$$css: !0
	},
	5: {
		k1C7PZ: "x1eqhezk",
		$$css: !0
	},
	6: {
		k1C7PZ: "x3qlgwd",
		$$css: !0
	},
	8: {
		k1C7PZ: "xicv188",
		$$css: !0
	},
	10: {
		k1C7PZ: "x1p37tyl",
		$$css: !0
	},
	"0.5": {
		k1C7PZ: "x1kihgfc",
		$$css: !0
	},
	"1.5": {
		k1C7PZ: "x1thn6ci",
		$$css: !0
	}
}, wn = {
	0: "--spacing-0",
	.5: "--spacing-0-5",
	1: "--spacing-1",
	1.5: "--spacing-1-5",
	2: "--spacing-2",
	3: "--spacing-3",
	4: "--spacing-4",
	5: "--spacing-5",
	6: "--spacing-6",
	8: "--spacing-8",
	10: "--spacing-10"
};
function Tn(e, t, n, r, i) {
	let a = i == null ? r == null ? null : wn[r] : wn[i];
	return `repeat(${n}, minmax(${`min(100%, max(${e}px, ${a ? `calc((100% - ${t - 1} * var(${a})) / ${t})` : `calc(100% / ${t})`}))`}, 1fr))`;
}
function En({ columns: e, rowHeight: t, width: n, height: r, maxWidth: i, minHeight: a, gap: o, rowGap: s, columnGap: c, align: l, justify: u, xstyle: d, className: f, style: p, children: m, ref: h, ...g }) {
	let _;
	if (typeof e == "object" && e) {
		let t = e.repeat === "fit" ? "auto-fit" : "auto-fill";
		_ = e.max != null && e.max > 0 ? Tn(e.minWidth, e.max, t, o, c) : `repeat(${t}, minmax(${e.minWidth}px, 1fr))`;
	} else _ = typeof e == "number" && e > 0 ? `repeat(${e}, 1fr)` : "1fr";
	let v = {
		...n != null && { width: typeof n == "number" ? `${n}px` : n },
		...r != null && { height: typeof r == "number" ? `${r}px` : r },
		...i != null && { maxWidth: typeof i == "number" ? `${i}px` : i },
		...a != null && { minHeight: typeof a == "number" ? `${a}px` : a }
	};
	return /*#__PURE__*/ (0, U.jsx)("div", {
		ref: h,
		...B(E("grid", {
			columns: typeof e == "number" ? e : void 0,
			gap: o,
			align: l,
			justify: u
		}), k(gn.grid, vn.templateColumns(_), t != null && vn.autoRows(t), o != null && xn[o], s != null && Sn[s], c != null && Cn[c], l != null && yn[l], u != null && bn[u], d), f, {
			...p,
			...v
		}),
		...g,
		children: m
	});
}
En.displayName = "Grid";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/Stack.js
var Dn = { scrollable: {
	kVQacm: "xysyzu8",
	$$css: !0
} };
function On({ direction: e = "vertical", hAlign: t, vAlign: n, justify: r, align: i, gap: a, padding: o, paddingInline: s, paddingInlineStart: c, paddingInlineEnd: l, paddingBlock: u, paddingBlockStart: d, paddingBlockEnd: f, isScrollable: p, width: m, height: h, maxWidth: g, minHeight: _, wrap: v, as: y = "div", xstyle: b, className: x, style: S, children: C, ref: w, ...T }) {
	let D = t ?? (e === "horizontal" ? r : i), O = n ?? (e === "horizontal" ? i : r), A = e === "horizontal" ? D : O, j = e === "horizontal" ? O : D, M = c ?? s ?? o, N = l ?? s ?? o, P = d ?? u ?? o, F = f ?? u ?? o, ee = k(...yt({
		direction: e,
		crossAlign: j,
		mainAlign: A,
		gap: a,
		wrap: v
	}), M != null && De[M], N != null && ie[N], P != null && ge[P], F != null && je[F], p && Dn.scrollable, b), I = {
		...m != null && { width: typeof m == "number" ? `${m}px` : m },
		...h != null && { height: typeof h == "number" ? `${h}px` : h },
		...g != null && { maxWidth: typeof g == "number" ? `${g}px` : g },
		..._ != null && { minHeight: typeof _ == "number" ? `${_}px` : _ }
	};
	return /*#__PURE__*/ (0, H.createElement)(y, {
		ref: w,
		...B(E("stack", {
			direction: e,
			gap: a,
			wrap: v
		}), ee, x, {
			...S,
			...I
		}),
		...T
	}, C);
}
On.displayName = "Stack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/HStack/HStack.js
function kn({ ref: e, justify: t, align: n, hAlign: r, vAlign: i, ...a }) {
	return /*#__PURE__*/ (0, U.jsx)(On, {
		...a,
		direction: "horizontal",
		hAlign: r ?? t,
		vAlign: i ?? n,
		ref: e
	});
}
kn.displayName = "HStack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/VStack/VStack.js
function K({ ref: e, justify: t, align: n, hAlign: r, vAlign: i, ...a }) {
	return /*#__PURE__*/ (0, U.jsx)(On, {
		...a,
		direction: "vertical",
		hAlign: r ?? n,
		vAlign: i ?? t,
		ref: e
	});
}
K.displayName = "VStack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/StackItem.js
var An = { scrollable: {
	kVQacm: "xysyzu8",
	$$css: !0
} };
function jn({ crossAlignSelf: e, size: t, isScrollable: n, as: r = "div", xstyle: i, className: a, style: o, children: s, ref: c, ...l }) {
	let u = k(...Ct({
		crossAlignSelf: e,
		size: t
	}), n && An.scrollable, i);
	return /*#__PURE__*/ (0, H.createElement)(r, {
		ref: c,
		...B(E("stack-item", { size: t }), u, a, o),
		...l
	}, s);
}
jn.displayName = "StackItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Card/Card.js
var Mn = {
	card: {
		"--_card-radius": "x2kkz0m",
		kaIpWk: "x153u1i6",
		kVQacm: "x7giv3",
		kGVxlE: "x1p8z4y0",
		$$css: !0
	},
	withBorder: {
		kMzoRj: "x1litavf",
		ksu8eU: "x1y0btm7",
		kVAM5u: "x14i3s5s",
		kZCmMZ: "xs19ii7",
		kwRFfy: "x12frdag",
		kLKAdn: "x1nex4ik",
		kGO01o: "xbv1mwh",
		$$css: !0
	},
	scrollable: {
		kVQacm: "xysyzu8",
		$$css: !0
	}
}, Nn = {
	default: {
		kWkggS: "x1de1mus",
		$$css: !0
	},
	transparent: {
		kWkggS: "xjbqb8w",
		$$css: !0
	},
	muted: {
		kWkggS: "xwmxj5m",
		$$css: !0
	},
	blue: {
		kWkggS: "x1o0wnni",
		$$css: !0
	},
	cyan: {
		kWkggS: "x1rgj867",
		$$css: !0
	},
	gray: {
		kWkggS: "xspzpui",
		$$css: !0
	},
	green: {
		kWkggS: "x1sqjeoo",
		$$css: !0
	},
	orange: {
		kWkggS: "x1e9xt6e",
		$$css: !0
	},
	pink: {
		kWkggS: "xnpoty2",
		$$css: !0
	},
	purple: {
		kWkggS: "x16i6n6f",
		$$css: !0
	},
	red: {
		kWkggS: "x1cibrc5",
		$$css: !0
	},
	teal: {
		kWkggS: "x1jtji5o",
		$$css: !0
	},
	yellow: {
		kWkggS: "x1bo7t0x",
		$$css: !0
	}
}, Pn = {
	none: {
		"--_card-elevation": "xw28qpl",
		$$css: !0
	},
	low: {
		"--_card-elevation": "x1nn8khe",
		$$css: !0
	},
	med: {
		"--_card-elevation": "x1ovzxg0",
		$$css: !0
	},
	high: {
		"--_card-elevation": "xnpe7fx",
		$$css: !0
	}
}, Fn = { sizing: (e, t, n, r) => [{
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
function In({ width: e, height: t, maxWidth: n, minHeight: r, children: i, padding: a, variant: o = "default", elevation: s = "none", xstyle: c, className: l, style: u, ref: d, ...f }) {
	let p = t != null && t !== "auto", m = a == null ? void 0 : oe[a];
	return /*#__PURE__*/ (0, U.jsx)("div", {
		ref: d,
		...B(E("card", {
			variant: o,
			elevation: s
		}), k(Mn.card, Nn[o], Pn[s], p && Mn.scrollable, Fn.sizing(e ?? null, t ?? null, n ?? null, r ?? null), ...He(m == null ? { useThemeDefault: "card" } : {
			paddingInnerX: m,
			paddingInnerY: m,
			paddingOuterX: m,
			paddingOuterY: m
		}), o === "default" && Mn.withBorder, c), l, u),
		...f,
		children: i
	});
}
In.displayName = "Card";
//#endregion
//#region node_modules/@astryxdesign/core/dist/AspectRatio/AspectRatio.js
var Ln = {
	container: {
		kVAEAm: "x1n2onr6",
		kzqmXN: "xh8yej3",
		kVQacm: "x7giv3",
		kAzted: "x2lwn1j",
		kmuXW: "x2lah0s",
		$$css: !0
	},
	ellipse: {
		kaIpWk: "x16rqkct",
		$$css: !0
	}
}, Rn = { ratio: (e) => [{
	kOBAk4: e == null ? e : "x10y9f9r",
	$$css: !0
}, { "--x-aspectRatio": e ?? void 0 }] };
function zn({ ratio: e, shape: t = "rectangle", fit: n, children: r, xstyle: i, className: a, style: o, ref: s, ...c }) {
	return /*#__PURE__*/ (0, U.jsx)("div", {
		ref: s,
		...B(E("aspect-ratio", { shape: t }), k(Ln.container, Rn.ratio(e), t === "ellipse" && Ln.ellipse, i), a, o),
		...c,
		children: /*#__PURE__*/ (0, U.jsx)("div", {
			"data-astryx-aspect-ratio-override": n,
			...{
				0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k" }
			}[(n === "center") << 0],
			children: r
		})
	});
}
zn.displayName = "AspectRatio";
//#endregion
//#region node_modules/@astryxdesign/core/dist/ClickableCard/ClickableCard.js
var Bn = {
	interactive: {
		kVAEAm: "x1n2onr6",
		kkrTdU: "x1ypdohk x16khyan",
		kybGjl: "x1hl2dhg",
		kMwMTN: "x1heor9g",
		$$css: !0
	},
	overlay: {
		k5JduY: "x1s928wv",
		kwXMNM: "x1j6awrg",
		kv0HGH: "xarstr8",
		kloYau: "x2q1x1w",
		kRicXK: "x1ywzrc5",
		kPNhGg: "x97pup0",
		kA8PQs: "x1dlmc9c",
		ks3ayO: "xyhc2n1",
		kAcZsS: "x1k7wiig",
		$$css: !0
	},
	hoverOnPointer: {
		k8t4tK: "x1912f9e",
		$$css: !0
	},
	borderless: {
		kMzoRj: "xc342km",
		$$css: !0
	},
	bordered: {
		kVAM5u: "x14i3s5s",
		kZCmMZ: "xs19ii7",
		kwRFfy: "x12frdag",
		kLKAdn: "x1nex4ik",
		kGO01o: "xbv1mwh",
		k1ekBW: "xshfolx",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	borderedHoverOnPointer: {
		kpsWHe: "x1xwh4np",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kSiTet: "xbyyjgo",
		$$css: !0
	}
};
function Vn({ label: e, onClick: t, onMouseUp: n, href: r, target: i, isDisabled: a = !1, children: o, padding: s, variant: c = "default", elevation: l = "none", width: u, height: d, maxWidth: f, ref: p, xstyle: m, className: g, style: _, ...v }) {
	let y = (0, H.useRef)(null), b = (0, H.useRef)(null), x = ye(), { onClick: S, onMouseUp: C } = I({
		containerRef: y,
		interactiveRef: b,
		onClick: t,
		href: r,
		target: i,
		disabled: a
	}), w = n ? (e) => {
		C(e), n(e);
	} : C, T = r != null, D = c === "default";
	return /*#__PURE__*/ (0, U.jsxs)(In, {
		ref: h(p, y),
		width: u,
		height: d,
		maxWidth: f,
		padding: s,
		variant: c,
		elevation: l,
		...B(E("clickable-card", { variant: c }), Ce.focusWithin(), g, _),
		xstyle: [
			Bn.interactive,
			D ? Bn.bordered : Bn.borderless,
			!a && Bn.overlay,
			!a && Bn.hoverOnPointer,
			!a && D && Bn.borderedHoverOnPointer,
			a && Bn.disabled,
			m
		],
		onClick: a ? void 0 : S,
		onMouseUp: a ? void 0 : w,
		...v,
		children: [T ? /*#__PURE__*/ (0, U.jsx)(x, {
			ref: b,
			href: r,
			target: i,
			"aria-label": e,
			"aria-disabled": a || void 0,
			tabIndex: a ? -1 : 0,
			className: "x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr xzpqnlu xuxw1ft xc342km"
		}) : /*#__PURE__*/ (0, U.jsx)("button", {
			ref: b,
			type: "button",
			"aria-label": e,
			disabled: a,
			onClick: t,
			className: "x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr xzpqnlu xuxw1ft xc342km"
		}), o]
	});
}
Vn.displayName = "ClickableCard";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Breadcrumbs/Breadcrumbs.js
var Hn = ce({
	variant: "default",
	separator: "/"
});
Hn.displayName = "BreadcrumbContext";
var Un = { root: {
	k1xSpc: "x1lliihq",
	$$css: !0
} };
function Wn({ children: e, separator: t = "/", variant: n = "default", xstyle: r, className: i, style: a, label: o, ref: s, ...c }) {
	let l = L(), u = o ?? l("@astryx.breadcrumbs.label"), d = (0, H.useMemo)(() => ({
		variant: n,
		separator: t
	}), [n, t]);
	return /*#__PURE__*/ (0, U.jsx)(Hn, {
		value: d,
		children: /*#__PURE__*/ (0, U.jsx)("nav", {
			ref: s,
			"aria-label": u,
			...B(E("breadcrumbs", { variant: n }), k(Un.root, r), i, a),
			...c,
			children: /*#__PURE__*/ (0, U.jsx)("ol", {
				className: "x78zum5 x6s0dn4 x1a02dak xe8uvvx x1ghz6dp x1717udv xzye2dw",
				children: e
			})
		})
	});
}
Wn.displayName = "Breadcrumbs";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Breadcrumbs/BreadcrumbItem.js
var q = {
	root: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "xzye2dw",
		kogj98: "x1ghz6dp",
		"--separator-display": "xkce8z9 x1ibt0lz",
		$$css: !0
	},
	defaultSize: {
		kGuDYH: "xjm74w1",
		kLWn49: "xw6l6zx",
		$$css: !0
	},
	supportingSize: {
		kGuDYH: "x141an7d",
		kLWn49: "x1ltkj2j",
		$$css: !0
	},
	link: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "xzye2dw",
		k8WAf4: "xu0wf1k",
		kybGjl: "x1hl2dhg x13nosk6",
		kkrTdU: "x1ypdohk x16khyan",
		$$css: !0
	},
	buttonReset: {
		kWkggS: "xjbqb8w",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kg3NbH: "xnjsko4",
		kogj98: "x1ghz6dp",
		kVVagm: "xln7xf2",
		$$css: !0
	},
	defaultLink: {
		kMwMTN: "xv1l7n4",
		$$css: !0
	},
	supportingLink: {
		kMwMTN: "xv1l7n4",
		$$css: !0
	},
	chevron: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kmuXW: "x2lah0s",
		kzqmXN: "x5livx5",
		kZKoxP: "x15rwvks",
		kGuDYH: "x141an7d",
		$$css: !0
	}
};
function Gn({ separator: e }) {
	return /*#__PURE__*/ (0, U.jsx)("span", {
		"aria-hidden": "true",
		className: "x11ke7fs x6s0dn4 xv1l7n4 xu0wf1k x87ps6o",
		children: e === "/" ? /*#__PURE__*/ (0, U.jsx)("span", {
			...k(fe.mirror),
			children: "/"
		}) : e
	});
}
var Kn = { popover: {
	k7Eaqz: "x5w4yej",
	kqGvvJ: "xsq74q5",
	$$css: !0
} };
function qn({ ref: e, as: t, children: n, href: r, onClick: i, isCurrent: a, startIcon: o, menu: s, menuSize: c, xstyle: l, className: u, style: d, "data-testid": f, ...p }) {
	let m = (0, H.use)(Hn), g = ye(t), _ = m.variant === "supporting", v = (0, H.useRef)(null), y = (0, H.useRef)(null), b = a === !0, x = a == null, S = s != null, C = c ?? (_ ? "sm" : "md");
	(0, H.useEffect)(() => {}, [
		S,
		r,
		i
	]), (0, H.useEffect)(() => {
		if (!x) return;
		let e = v.current;
		if (!e) return;
		let t = e.parentElement;
		if (!t) return;
		let n = Array.from(t.children), r = n.length > 0 && n[n.length - 1] === e, i = t.querySelector("[aria-current=\"page\"]");
		if (r && !i) {
			let t = y.current ?? e;
			return t.setAttribute("aria-current", "page"), () => {
				t.removeAttribute("aria-current");
			};
		}
	});
	let w = h(e, v), T = /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [o && /*#__PURE__*/ (0, U.jsx)("span", {
		className: "x78zum5 x6s0dn4 x2lah0s",
		children: o
	}), n] });
	return b ? /*#__PURE__*/ (0, U.jsxs)("li", {
		ref: w,
		...B(E("breadcrumb-item", { variant: m.variant }), k(q.root, _ ? q.supportingSize : q.defaultSize, l), u, d),
		"data-testid": f,
		...p,
		children: [/*#__PURE__*/ (0, U.jsx)(Gn, { separator: m.separator }), S ? /*#__PURE__*/ (0, U.jsx)(Jn, {
			ref: y,
			menu: s,
			menuSize: C,
			variant: m.variant,
			isCurrent: !0,
			children: T
		}) : /*#__PURE__*/ (0, U.jsx)("span", {
			...{
				0: { className: "x78zum5 x6s0dn4 xzye2dw x2mo6ok x1tgivj0" },
				1: { className: "x78zum5 x6s0dn4 xzye2dw x2mo6ok xv1l7n4" }
			}[!!_ << 0],
			"aria-current": "page",
			children: T
		})]
	}) : /*#__PURE__*/ (0, U.jsxs)("li", {
		ref: w,
		...B(E("breadcrumb-item", { variant: m.variant }), k(q.root, _ ? q.supportingSize : q.defaultSize, l), u, d),
		"data-testid": f,
		...p,
		children: [/*#__PURE__*/ (0, U.jsx)(Gn, { separator: m.separator }), S ? /*#__PURE__*/ (0, U.jsx)(Jn, {
			ref: y,
			menu: s,
			menuSize: C,
			variant: m.variant,
			children: T
		}) : r == null ? i == null ? /*#__PURE__*/ (0, U.jsx)("span", {
			ref: y,
			...{
				0: { className: "x78zum5 x6s0dn4 xzye2dw x2mo6ok x1tgivj0" },
				1: { className: "x78zum5 x6s0dn4 xzye2dw x2mo6ok xv1l7n4" }
			}[!!_ << 0],
			children: T
		}) : /*#__PURE__*/ (0, U.jsx)("button", {
			ref: y,
			type: "button",
			onClick: i,
			...Ce.focusVisible(q.link, q.buttonReset, _ ? q.supportingLink : q.defaultLink),
			children: T
		}) : /*#__PURE__*/ (0, U.jsx)(g, {
			ref: y,
			href: r,
			onClick: i,
			...Ce.focusVisible(q.link, _ ? q.supportingLink : q.defaultLink),
			children: T
		})]
	});
}
qn.displayName = "BreadcrumbItem";
function Jn({ ref: e, children: t, menu: n, menuSize: r, variant: i, isCurrent: a = !1 }) {
	let o = (0, H.useId)(), s = (0, H.useId)(), c = (0, H.useRef)(null), l = i === "supporting", u = Be({
		hasLightDismiss: !0,
		hasCloseButton: !1,
		hasAutoFocus: !1,
		role: "none"
	}), d = (0, H.useCallback)(() => {
		u.hide();
	}, [u]), { listRef: f, handleKeyDown: p, focusFirst: m, focusItem: g, ownsEvent: _, getItems: v } = j({
		itemSelector: ne,
		boundarySelector: pe,
		wrap: !1,
		onEscape: d
	}), y = Ue({
		getItemLabels: () => v().map((e) => e.textContent),
		onMatch: g,
		getCurrentIndex: () => v().findIndex((e) => e === document.activeElement || e.contains(document.activeElement))
	}), b = (0, H.useCallback)((e) => {
		if (_(e)) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				let t = document.activeElement;
				t && de.has(t.getAttribute("role") ?? "") && t.click();
				return;
			}
			if (e.key === "Tab") {
				d();
				return;
			}
			if (y.onKeyDown(e)) {
				e.preventDefault();
				return;
			}
			p(e);
		}
	}, [
		p,
		d,
		y,
		_
	]), x = (0, H.useCallback)(() => {
		u.show(), requestAnimationFrame(() => m());
	}, [u, m]), S = (0, H.useCallback)(() => {
		u.isOpen ? u.hide() : x();
	}, [u, x]), C = (0, H.useCallback)((e) => {
		u.isOpen || (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), x());
	}, [u.isOpen, x]), w = (0, H.useMemo)(() => ({
		closeMenu: d,
		menuSize: r
	}), [d, r]), T = Array.isArray(n) ? Se(n) : n;
	return /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsxs)("button", {
		ref: h(e, c, u.triggerRef),
		type: "button",
		onClick: S,
		onKeyDown: C,
		...u.triggerProps,
		id: s,
		"aria-haspopup": "menu",
		"aria-controls": o,
		"aria-current": a ? "page" : void 0,
		...B(E("breadcrumb-item-menu-trigger", { variant: i }), Ce.focusVisible(q.link, q.buttonReset, l ? q.supportingLink : q.defaultLink)),
		children: [t, /*#__PURE__*/ (0, U.jsx)(F, {
			icon: "chevronDown",
			size: "xsm",
			color: "inherit",
			xstyle: q.chevron
		})]
	}), u.render(/*#__PURE__*/ (0, U.jsx)("div", {
		ref: f,
		id: o,
		role: "menu",
		"aria-labelledby": s,
		onKeyDown: b,
		...B(E("breadcrumb-menu"), { className: "x9f619 x78zum5 xdt5ytf x1lsbc85 xuyqlj2 x1odjw0f x1fcsqxe xgory14 x9epnlk x1n97fys x87ps6o" }),
		children: /*#__PURE__*/ (0, U.jsx)(Re, {
			value: w,
			children: T
		})
	}), {
		placement: "below",
		alignment: "start",
		xstyle: [Kn.popover, O.below]
	})] });
}
Jn.displayName = "BreadcrumbMenuTrigger";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/indicator.markers.stylex.js
var Yn = {
	x1odsvnm: "x1odsvnm",
	$$css: !0
}, Xn = {
	box: {
		kB7OPa: "x9f619",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		kMzoRj: "x1litavf",
		ksu8eU: "x1y0btm7",
		kaIpWk: "xx3sua9",
		k1ekBW: "xts7igz",
		kIyJzY: "xuedmi6 x12w9bfk",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	unchecked: {
		kMwMTN: "xqwr325",
		kVAM5u: "xvy26l8 xilc7fp",
		kWkggS: "x10xzikg xeultfy",
		$$css: !0
	},
	checked: {
		kMwMTN: "x17wrial",
		kVAM5u: "xad5do x1ozl1p1",
		kWkggS: "x1ewilqj x17srpfb",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		kVAM5u: "x14i3s5s x61roa7",
		$$css: !0
	},
	disabledUnchecked: {
		kWkggS: "xwmxj5m xqxnq6d",
		$$css: !0
	},
	checkmark: {
		k1xSpc: "x1s85apg",
		kMwMTN: "x17wrial xs5hli",
		$$css: !0
	},
	checkmarkVisible: {
		k1xSpc: "x1lliihq",
		$$css: !0
	},
	indeterminateMark: {
		k1xSpc: "x1s85apg",
		kWkggS: "x1azo05 xwvh9j7",
		kaIpWk: "xjspbzw",
		$$css: !0
	},
	indeterminateMarkVisible: {
		k1xSpc: "x1lliihq",
		$$css: !0
	}
}, Zn = {
	sm: {
		kzqmXN: "xw4jnvo",
		kZKoxP: "x1qx5ct2",
		$$css: !0
	},
	md: {
		kzqmXN: "xvy4d1p",
		kZKoxP: "xxk0z11",
		$$css: !0
	}
}, Qn = {
	sm: {
		kzqmXN: "xsmyaan",
		kZKoxP: "x1kpxq89",
		$$css: !0
	},
	md: {
		kzqmXN: "x6jxa94",
		kZKoxP: "x1v9usgg",
		$$css: !0
	}
}, $n = {
	sm: {
		kzqmXN: "x1fsd2vl",
		kZKoxP: "x36qwtl",
		$$css: !0
	},
	md: {
		kzqmXN: "xsmyaan",
		kZKoxP: "x36qwtl",
		$$css: !0
	}
};
function er({ state: e, size: t = "md", isDisabled: n = !1, children: r, ref: i, className: a, style: o, xstyle: s, ...c }) {
	let l = e === "checked", u = e === "indeterminate", d = l || u;
	return /*#__PURE__*/ (0, U.jsx)("span", {
		...c,
		ref: i,
		"aria-hidden": "true",
		...B(E("checkbox-indicator", {
			size: t,
			checked: l ? "checked" : u ? "indeterminate" : null,
			disabled: n ? "disabled" : null
		}, { legacyNames: ["checkbox"] }), k(Xn.box, Zn[t], d ? Xn.checked : Xn.unchecked, n && Xn.disabled, n && !d && Xn.disabledUnchecked, s), a, o),
		children: R(r) ? r : /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsx)("svg", {
			viewBox: "0 0 10 10",
			...B(E("checkbox-indicator-check", { size: t }), k(Xn.checkmark, Qn[t], l && Xn.checkmarkVisible)),
			children: /*#__PURE__*/ (0, U.jsx)("path", {
				d: "M8.5 2.5L4 7.5L1.5 5",
				stroke: "currentColor",
				strokeWidth: "1.5",
				fill: "none",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		}), /*#__PURE__*/ (0, U.jsx)("span", { ...B(E("checkbox-indicator-dash", { size: t }), k(Xn.indeterminateMark, $n[t], u && Xn.indeterminateMarkVisible)) })] })
	});
}
er.displayName = "CheckboxIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/CheckIndicator.js
var tr = {
	sm: "sm",
	md: "sm"
}, nr = {
	slot: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		kzqmXN: "xcdlrvm",
		kZKoxP: "x1l36t39",
		$$css: !0
	},
	enabled: {
		kMwMTN: "xqwr325",
		$$css: !0
	},
	disabled: {
		kMwMTN: "xqa6c3m",
		$$css: !0
	}
};
function rr({ state: e, size: t = "md", isDisabled: n = !1, children: r, ref: i, className: a, style: o, xstyle: s, ...c }) {
	let l = e === "checked";
	return R(r) ? /*#__PURE__*/ (0, U.jsx)("span", {
		...c,
		ref: i,
		"aria-hidden": "true",
		...B(k(nr.slot, n ? nr.disabled : nr.enabled, s), a, o),
		children: r
	}) : l ? /*#__PURE__*/ (0, U.jsx)(F, {
		...c,
		"aria-hidden": "true",
		icon: "check",
		size: tr[t],
		color: n ? "disabled" : "accent",
		xstyle: s,
		className: a,
		style: o
	}) : null;
}
rr.displayName = "CheckIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/RadioIndicator.js
var ir = {
	circle: {
		kB7OPa: "x9f619",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		kMzoRj: "x1litavf",
		ksu8eU: "x1y0btm7",
		kaIpWk: "xjspbzw",
		k1ekBW: "xts7igz",
		kIyJzY: "xuedmi6 x12w9bfk",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	unchecked: {
		kVAM5u: "xvy26l8 xilc7fp",
		kWkggS: "x10xzikg xeultfy",
		$$css: !0
	},
	checked: {
		kVAM5u: "xad5do x1ozl1p1",
		kWkggS: "x1ewilqj x17srpfb",
		$$css: !0
	},
	disabled: {
		kSiTet: "xbyyjgo",
		kVAM5u: "x14i3s5s x61roa7",
		$$css: !0
	},
	disabledUnchecked: {
		kWkggS: "xwmxj5m xqxnq6d",
		$$css: !0
	},
	dot: {
		kaIpWk: "xjspbzw",
		kWkggS: "x1azo05 xwvh9j7",
		$$css: !0
	}
}, ar = {
	sm: {
		kzqmXN: "xw4jnvo",
		kZKoxP: "x1qx5ct2",
		$$css: !0
	},
	md: {
		kzqmXN: "xvy4d1p",
		kZKoxP: "xxk0z11",
		$$css: !0
	}
}, or = {
	sm: {
		kzqmXN: "x1xc55vz",
		kZKoxP: "xdk7pt",
		$$css: !0
	},
	md: {
		kzqmXN: "x1fsd2vl",
		kZKoxP: "x170jfvy",
		$$css: !0
	}
};
function sr({ state: e, size: t = "md", isDisabled: n = !1, children: r, ref: i, className: a, style: o, xstyle: s, ...c }) {
	let l = e !== "unchecked";
	return /*#__PURE__*/ (0, U.jsx)("span", {
		...c,
		ref: i,
		"aria-hidden": "true",
		...B(E("radio-indicator", {
			size: t,
			checked: l ? "checked" : null,
			disabled: n ? "disabled" : null
		}, { legacyNames: ["radio"] }), k(ir.circle, ar[t], l ? ir.checked : ir.unchecked, n && ir.disabled, n && !l && ir.disabledUnchecked, s), a, o),
		children: R(r) ? r : l && /*#__PURE__*/ (0, U.jsx)("span", { ...B(E("radio-indicator-dot", { size: t }, { legacyNames: ["radio-dot"] }), k(ir.dot, or[t])) })
	});
}
sr.displayName = "RadioIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/indicatorRegistry.js
var cr = {
	check: rr,
	checkbox: er,
	radio: sr
};
function lr(e) {
	return e == null ? null : typeof e == "string" ? u(e) : e;
}
function ur(e) {
	return lr(e)?.indicators ?? null;
}
function dr(e, t) {
	return ur(t)?.[e] ?? cr[e];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/useIndicator.js
function fr(e) {
	return dr(e, ve());
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Field/inputStyles.stylex.js
var pr = {
	base: {
		kB7OPa: "x9f619",
		kVAEAm: "x1n2onr6",
		kY2c9j: "x1vjfegm",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		k8WAf4: "xu0wf1k",
		kg3NbH: "xf314gf",
		kMzoRj: "x1litavf",
		ksu8eU: "x1y0btm7",
		kVAM5u: "xvy26l8 x6q1khz",
		"--_field-radius": "x1832zxr",
		kaIpWk: "xvdfih8",
		kWkggS: "x10xzikg",
		k1ekBW: "x12zzom9",
		kIyJzY: "xuedmi6 x12w9bfk",
		kAMwcw: "xlr8y92",
		kGVxlE: "x1gnnqk1 x1xqjsvb xuihb5h",
		kI3sdo: "x1a2a7pz",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kSiTet: "xbyyjgo",
		kVAM5u: "xvy26l8",
		kGVxlE: "x1gnnqk1",
		$$css: !0
	}
}, mr = {
	warning: {
		kVAM5u: "x8wg1ba",
		$$css: !0
	},
	error: {
		kVAM5u: "x1ofxpqo",
		$$css: !0
	},
	success: {
		kVAM5u: "x16m2moy",
		$$css: !0
	}
}, hr = {
	warning: {
		kGVxlE: "x1gnnqk1 x9156jc",
		$$css: !0
	},
	error: {
		kGVxlE: "x1gnnqk1 x1bgmis8",
		$$css: !0
	},
	success: {
		kGVxlE: "x1gnnqk1 x8wp45d",
		$$css: !0
	}
}, gr = {
	warning: {
		kVAM5u: "x8wg1ba xa1yw2k",
		$$css: !0
	},
	error: {
		kVAM5u: "x1ofxpqo xk2sxw7",
		$$css: !0
	},
	success: {
		kVAM5u: "x16m2moy xyq33ac",
		$$css: !0
	}
}, _r = { button: {
	kZKoxP: "x1qx5ct2",
	kmuXW: "x2lah0s",
	kVAEAm: "x1n2onr6",
	"--_input-clear-hit-inset": "xtoycft x181bpwf",
	"--_input-clear-hit-content": "xqxtgf4 xp8r40j",
	k5JduY: "xh3pasq",
	kwXMNM: "x1j6awrg",
	kv0HGH: "xht581f",
	$$css: !0
} };
function vr({ label: e, onClick: t, onPointerDown: n, onClickCapture: r, xstyle: i, iconClassName: o }) {
	let { className: s } = E("input-clear-icon"), { className: c } = E("input-clear-button");
	return /*#__PURE__*/ (0, U.jsx)(a, {
		variant: "ghost",
		size: "sm",
		label: e,
		tooltip: e,
		className: c,
		icon: /*#__PURE__*/ (0, U.jsx)(F, {
			icon: "close",
			size: "sm",
			color: "secondary",
			className: o == null ? s : `${s} ${o}`
		}),
		onPointerDown: (e) => {
			e.preventDefault(), n?.(e);
		},
		onMouseDown: (e) => e.preventDefault(),
		onClick: t,
		onClickCapture: r,
		isIconOnly: !0,
		xstyle: [_r.button, i]
	});
}
function yr(e) {
	return vr(e);
}
yr.displayName = "InputClearButton";
//#endregion
//#region node_modules/@astryxdesign/core/dist/InputGroup/groupStyles.js
var br = { inGroup: {
	kUk6DE: "x98rzlu",
	k7Eaqz: "xeuugli",
	kZKoxP: "x5yr21d",
	keTefX: "xd10s4z x1pwwqoy",
	krdFHd: "x15mokao x8eehn2",
	kVL7Gh: "xbiv7yw x1xrp5p4",
	kfmiAY: "x1ga7v0g x149bkfe",
	kT0f0o: "x16uus16 x1ursds5",
	kXnDq0: "x1rm9qnc",
	$$css: !0
} };
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useResolvedRequired.js
function xr({ isRequired: e = !1, isOptional: t = !1 }) {
	let { defaultOptionality: n } = (0, H.use)(Oe);
	return !t && (e || n === "required");
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/InputGroup/InputGroupContext.js
var Sr = ce(null);
Sr.displayName = "InputGroupContext";
function Cr() {
	return (0, H.use)(Sr);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/TextInput/TextInput.js
var wr = {
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
};
function Tr({ type: e = "text", label: n, isLabelHidden: r = !1, description: i, isOptional: a = !1, isRequired: o = !1, isDisabled: s = !1, isReadOnly: c = !1, disabledMessage: l, startIcon: u, status: f, statusVariant: p = "attached", size: m, onChange: g, changeAction: v, isLoading: b = !1, value: x, placeholder: S, labelTooltip: C, hasClear: w = !1, hasAutoFocus: T = !1, htmlName: D, onEnter: O, onKeyDown: A, width: j, xstyle: M, className: F, style: ee, ref: I, ...te }) {
	let ne = L(), R = xr({
		isRequired: o,
		isOptional: a
	}), re = t(m, "md"), ie = (0, H.useId)(), z = (0, H.useId)(), ae = (0, H.useId)(), oe = (0, H.useId)(), se = (0, H.useRef)(null), ce = (0, H.useRef)(null), V = Cr(), [, le] = (0, H.useTransition)(), [ue, de] = (0, H.useOptimistic)(x), fe = b || ue !== x, pe = s && !!l, me = _({
		placement: "above",
		focusTrigger: "always",
		isEnabled: pe
	}), { statusIcon: he, describedBy: ge } = ot({
		status: f,
		statusVariant: p,
		isInGroup: !!V
	}), { ariaLabelledBy: ve, ariaDescribedBy: ye } = Je(z, [
		i ? ae : null,
		!V && p !== "tooltip" && f?.message ? oe : null,
		ge,
		pe ? me.describedBy : null
	], V), be = (e) => {
		if (s || c) return;
		let t = e.target.value;
		g?.(t, e), v && !e.defaultPrevented && le(async () => {
			de(t), await v(t, e);
		});
	}, xe = (0, H.useCallback)((e) => {
		g?.("", null), !e || e.detail === 0 ? se.current?.focus() : requestAnimationFrame(() => {
			se.current?.focus({ preventScroll: !0 });
		});
	}, [g]), { onClick: Se, onMouseUp: Ce } = P({
		containerRef: ce,
		inputRef: se,
		disabled: s
	}), we = /*#__PURE__*/ (0, U.jsxs)("div", {
		ref: (e) => {
			ce.current = e, me.ref(e);
		},
		onClick: Se,
		onMouseUp: Ce,
		...B(E("text-input", {
			size: re,
			status: f?.type ?? null,
			disabled: s ? "disabled" : null,
			readonly: c ? "readonly" : null
		}), k(pr.base, wr[re], s && pr.disabled, f && mr[f.type], f && !s && hr[f.type], f && gr[f.type], V && br.inGroup, M), F, ee),
		children: [
			u && d(u, {
				size: "sm",
				color: "secondary"
			}),
			V && /*#__PURE__*/ (0, U.jsx)(_e, {
				id: z,
				children: n
			}),
			/*#__PURE__*/ (0, U.jsx)("input", {
				...te,
				ref: h(I, se),
				id: ie,
				name: s ? void 0 : D,
				type: e,
				value: ue,
				onChange: be,
				onKeyDown: O || A ? (e) => {
					e.key === "Enter" && !N(e.nativeEvent) && O?.(), A?.(e);
				} : void 0,
				placeholder: S,
				disabled: s && !pe,
				"aria-disabled": pe ? "true" : void 0,
				readOnly: c || pe || void 0,
				autoFocus: T,
				"data-autofocus": T || void 0,
				"aria-describedby": ye,
				"aria-required": R ? "true" : void 0,
				"aria-invalid": f?.type === "error" ? "true" : void 0,
				"aria-busy": fe || void 0,
				"aria-labelledby": ve,
				...{
					0: { className: "x1lliihq x98rzlu xeuugli xc342km xng3xce x1717udv x9ynric xjm74w1 xf9zqsd xw6l6zx x1tgivj0 xjbqb8w x1a2a7pz xeyghm5" },
					1: { className: "x1lliihq x98rzlu xeuugli xc342km xng3xce x1717udv x9ynric xjm74w1 xf9zqsd xw6l6zx x1tgivj0 xjbqb8w x1a2a7pz xeyghm5 xt0e3qv" }
				}[!!s << 0]
			}),
			w && x !== "" && !s && !c && /*#__PURE__*/ (0, U.jsx)(yr, {
				label: ne("@astryx.textInput.clearLabel", { label: n }),
				onClick: xe
			}),
			fe && /*#__PURE__*/ (0, U.jsx)(y, { size: "sm" }),
			he
		]
	});
	return V ? /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [we, pe && me.renderTooltip(l)] }) : /*#__PURE__*/ (0, U.jsxs)(Ie, {
		label: n,
		isLabelHidden: r,
		description: i,
		inputID: ie,
		descriptionID: i ? ae : void 0,
		isOptional: a,
		isRequired: o,
		isDisabled: s,
		status: f ? {
			type: f.type,
			message: f.message,
			messageID: f.message ? oe : void 0
		} : void 0,
		statusVariant: p,
		labelTooltip: C,
		width: j,
		children: [we, pe && me.renderTooltip(l)]
	});
}
Tr.displayName = "TextInput";
//#endregion
//#region node_modules/@astryxdesign/core/dist/ToggleButton/ToggleButtonGroup.js
var Er = ce(null);
Er.displayName = "ToggleButtonGroupContext";
function Dr() {
	return (0, H.use)(Er);
}
var Or = {
	group: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kOIVth: "xzye2dw",
		$$css: !0
	},
	vertical: {
		kXwgrk: "xdt5ytf",
		kGNEyG: "x1qjc9v5",
		$$css: !0
	}
};
function kr(e) {
	let { children: t, label: n, orientation: r = "horizontal", size: i, isDisabled: a = !1, xstyle: o, "data-testid": s } = e, c = e.type === "multiple", l = (0, H.useMemo)(() => {
		if (c) return new Set(e.value);
		let t = e.value;
		return t == null ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
	}, [c, e.value]), u = (0, H.useCallback)((t) => {
		if (c) {
			let n = e.value, r = e.onChange;
			n.includes(t) ? r(n.filter((e) => e !== t)) : r([...n, t]);
		} else {
			let n = e.value, r = e.onChange;
			r(n === t ? null : t);
		}
	}, [
		c,
		e.value,
		e.onChange
	]), d = (0, H.useMemo)(() => ({
		selectedValues: l,
		toggle: u,
		size: i,
		isDisabled: a
	}), [
		l,
		u,
		i,
		a
	]);
	return /*#__PURE__*/ (0, U.jsx)(Er, {
		value: d,
		children: /*#__PURE__*/ (0, U.jsx)("div", {
			role: "group",
			"aria-label": n,
			"data-testid": s,
			...B(E("toggle-button-group"), k(Or.group, r === "vertical" && Or.vertical, o)),
			children: t
		})
	});
}
kr.displayName = "ToggleButtonGroup";
//#endregion
//#region node_modules/@astryxdesign/core/dist/ToggleButton/ToggleButton.js
var Ar = { background: {
	kAXs8y: "x1kzknox",
	kWkggS: "xi89dp7 x1jzqe4",
	kMwMTN: "x1k5gbb1",
	$$css: !0
} };
function jr({ ref: e, label: t, isPressed: n, onPressedChange: r, pressedChangeAction: i, size: o, elevation: s = "none", isDisabled: c = !1, isLoading: l = !1, icon: u, isIconOnly: d = !1, pressedIcon: f, children: p, tooltip: m, value: h, xstyle: g, className: _, style: v, ...y }) {
	let b = Dr(), x = b && h != null ? b.selectedValues.has(h) : n ?? !1, S = o ?? b?.size ?? "md", C = (b?.isDisabled ?? !1) || c, [w, T] = (0, H.useOptimistic)(x), D = w, O = !D, k = D && f ? f : u, A = (e) => {
		if (!C) {
			if (b && h != null) {
				b.toggle(h), e.preventDefault();
				return;
			}
			r?.(O, e);
		}
	}, j = i && !(b && h != null) ? async () => {
		T(O), await i(O);
	} : void 0, M = p == null ? d ? void 0 : /*#__PURE__*/ (0, U.jsxs)("span", {
		className: "x3nfvp2 xdt5ytf x6s0dn4 xl56j7k",
		children: [/*#__PURE__*/ (0, U.jsx)("span", {
			...{
				0: {},
				1: { className: "x2mo6ok" }
			}[!!D << 0],
			children: t
		}), /*#__PURE__*/ (0, U.jsx)("span", {
			className: "x1lliihq x2mo6ok xqtp20y xb3r6kr xlshs6z x47corl",
			"aria-hidden": "true",
			children: t
		})]
	}) : /*#__PURE__*/ (0, U.jsxs)("span", {
		className: "x3nfvp2 xdt5ytf x6s0dn4 xl56j7k",
		children: [/*#__PURE__*/ (0, U.jsx)("span", {
			...{
				0: {},
				1: { className: "x2mo6ok" }
			}[!!D << 0],
			children: p
		}), /*#__PURE__*/ (0, U.jsx)("span", {
			className: "x1lliihq x2mo6ok xqtp20y xb3r6kr xlshs6z x47corl",
			"aria-hidden": "true",
			children: p
		})]
	});
	return /*#__PURE__*/ (0, U.jsx)(a, {
		ref: e,
		label: t,
		variant: "ghost",
		size: S,
		elevation: s,
		isDisabled: C,
		isLoading: l,
		isInterruptible: !0,
		isIconOnly: d,
		"aria-pressed": D,
		icon: k,
		tooltip: m,
		...E("toggle-button", {
			isPressed: D ? "true" : "false",
			elevation: s
		}),
		xstyle: [D ? Ar.background : void 0, g],
		style: v,
		onClick: A,
		clickAction: j,
		...y,
		children: M
	});
}
jr.displayName = "ToggleButton";
//#endregion
//#region node_modules/@astryxdesign/core/dist/OverflowList/OverflowList.js
var Mr = {
	container: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kVQacm: "xb3r6kr",
		khDVqt: "xuxw1ft",
		k7Eaqz: "xeuugli",
		$$css: !0
	},
	containerMultiRow: {
		k1xSpc: "x78zum5",
		kwnvtZ: "x1a02dak",
		kfiyM8: "x8gbvx8",
		kVQacm: "xb3r6kr",
		khDVqt: "xeaf4i8",
		k7Eaqz: "xeuugli",
		$$css: !0
	},
	fillParent: {
		kzqmXN: "xh8yej3",
		$$css: !0
	},
	measureContainer: {
		kVAEAm: "x10l6tqk",
		k33iCy: "xlshs6z",
		kZKoxP: "xqtp20y",
		kVQacm: "xb3r6kr",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		khDVqt: "xuxw1ft",
		kfzvcC: "x47corl",
		$$css: !0
	}
}, Nr = {
	kskxy: "x1jols5v",
	$$css: !0
}, Pr = { height: (e, t, n) => [Nr, { "--x-maxHeight": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${t}px * ${e} + ${n}px * ${e - 1})`) }] }, Fr = {
	0: {
		kOIVth: "xsn7fz1",
		$$css: !0
	},
	1: {
		kOIVth: "xzye2dw",
		$$css: !0
	},
	2: {
		kOIVth: "x1txdalj",
		$$css: !0
	},
	3: {
		kOIVth: "xjcht0a",
		$$css: !0
	},
	4: {
		kOIVth: "x18g69wz",
		$$css: !0
	},
	5: {
		kOIVth: "x9mgr7n",
		$$css: !0
	},
	6: {
		kOIVth: "x1qh66ti",
		$$css: !0
	},
	8: {
		kOIVth: "x4t41sb",
		$$css: !0
	},
	10: {
		kOIVth: "x3hoi3v",
		$$css: !0
	},
	"0.5": {
		kOIVth: "x1lsbc85",
		$$css: !0
	},
	"1.5": {
		kOIVth: "x1s4dlld",
		$$css: !0
	}
}, Ir = {
	0: 0,
	.5: 2,
	1: 4,
	1.5: 6,
	2: 8,
	3: 12,
	4: 16,
	5: 20,
	6: 24,
	8: 32,
	10: 40
};
function Lr({ children: e, gap: t = 2, minVisibleItems: n = 0, maxVisibleItems: r, maxRows: i, collapseFrom: a = "end", behavior: o = "observeSelf", overflowRenderer: s, onOverflowChange: c, xstyle: l, className: u, style: d, ref: f, ...p }) {
	let m = H.Children.toArray(e), g = m.length, _ = Ir[t], v = o === "observeParent", y = i != null && i > 1, { containerRef: b, measureRef: x, visibleCount: S, hasOverflow: C, rowHeight: w } = nt(g, {
		gap: _,
		minVisibleItems: n,
		maxVisibleItems: r,
		maxRows: i,
		collapseFrom: a,
		behavior: o
	}), T = m.map((e, t) => ({
		child: e,
		index: t
	})), D, O;
	a === "end" ? (D = T.slice(0, S), O = T.slice(S)) : (D = T.slice(g - S), O = T.slice(0, g - S));
	let A = s?.(T), j = c ? JSON.stringify({
		children: m.map((e, t) => [t, e.key]),
		gap: t,
		minVisibleItems: n,
		maxVisibleItems: r,
		maxRows: i,
		collapseFrom: a,
		behavior: o
	}) : "", [M, N] = (0, H.useState)(j), P = (0, H.useCallback)((e) => {
		x(e), e && N(j);
	}, [x, j]), F = c ? JSON.stringify(O.map(({ child: e, index: t }) => [t, e.key])) : "[]", ee = (0, H.useRef)("[]"), I = (0, H.useRef)(O);
	return I.current = O, Ke(() => {
		c && M === j && ee.current !== F && (ee.current = F, c(I.current));
	}, [
		M,
		j,
		F,
		c
	]), /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsxs)("div", {
		ref: P,
		"aria-hidden": "true",
		inert: !0,
		...k(Mr.measureContainer, Fr[t]),
		children: [m, A != null && /*#__PURE__*/ (0, U.jsx)("div", {
			className: "x3nfvp2",
			children: A
		})]
	}), /*#__PURE__*/ (0, U.jsxs)("div", {
		ref: h(f, b),
		...B(E("overflow-list"), k(y ? Mr.containerMultiRow : Mr.container, Fr[t], y && w > 0 && i != null && Pr.height(i, w, _), v && C && Mr.fillParent, l), u, d),
		...p,
		children: [
			a === "start" && C && s?.(O),
			D.map(({ child: e }) => e),
			a === "end" && C && s?.(O)
		]
	})] });
}
Lr.displayName = "OverflowList";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Popover/Popover.js
var Rr = "button, [role=\"button\"]", zr = v["--spacing-4"];
`${zr}${zr}`, `${zr}${zr}`, `${zr}${zr}`, `${zr}${zr}`, `${zr}`, `${zr}`, `${zr}`;
function Br(e) {
	return e.matches(Rr) ? e : e.querySelector(Rr);
}
var J = {
	viewportFit: {
		kB7OPa: "x9f619",
		kskxy: "xtm2925",
		$$css: !0
	},
	viewportAligned: {
		ks0D6T: "xbd96yr",
		$$css: !0
	},
	viewportStart: {
		k71WvV: "xxeicf8",
		$$css: !0
	},
	viewportEnd: {
		keTefX: "x47fqr9",
		$$css: !0
	},
	viewportBlockStart: {
		k1K539: "x1kps3mo",
		$$css: !0
	},
	viewportBlockEnd: {
		keoZOQ: "xsoubt3",
		$$css: !0
	},
	viewportCentered: {
		keTefX: "x47fqr9",
		k71WvV: "xxeicf8",
		ks0D6T: "xs2v1xk",
		$$css: !0
	},
	viewportBlockCentered: {
		keoZOQ: "xsoubt3",
		k1K539: "x1kps3mo",
		ks0D6T: "xs2v1xk",
		$$css: !0
	},
	surfaceViewportFit: {
		kB7OPa: "x9f619",
		ks0D6T: "xs2v1xk",
		kskxy: "xtm2925",
		$$css: !0
	},
	surfaceScrollable: {
		kVQacm: "xysyzu8",
		kZeWKH: "xish69e",
		$$css: !0
	},
	contentPadding: {
		kLKAdn: "x1vlblms",
		kGO01o: "xvmdzux",
		kZCmMZ: "x126nfab",
		kwRFfy: "x1t818jl",
		$$css: !0
	},
	customWidth: (e) => [{
		kzqmXN: (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "x5lhr3w",
		$$css: !0
	}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(typeof e == "number" ? `${e}px` : e) }],
	matchTriggerAligned: {
		k7Eaqz: "x1ks9poc",
		$$css: !0
	},
	matchTriggerCentered: {
		k7Eaqz: "xagy28z",
		$$css: !0
	}
};
function Vr({ children: e, anchorRef: t, content: n, placement: r = "below", alignment: i = "start", isOpen: a, onOpenChange: o, isEnabled: s = !0, width: c, label: l, role: u = "dialog", isModal: d, hasCloseButton: f, closeButtonLabel: p, hasAutoFocus: m, hasLightDismiss: h = !0, hasEscapeDismiss: g = !0, xstyle: _, className: y, style: b, "data-testid": x }) {
	let S = (0, H.useRef)(null), C = (0, H.useRef)(null), [w, T] = (0, H.useState)(!1), E = a !== void 0, D = (0, H.useCallback)(() => {
		o?.(!0);
	}, [o]), k = (0, H.useCallback)(() => {
		o?.(!1);
	}, [o]), A = Be({
		dialogLabel: l,
		role: u,
		isModal: d,
		hasLightDismiss: h,
		hasEscapeDismiss: g,
		hasCloseButton: f,
		closeButtonLabel: p,
		hasAutoFocus: m,
		surfaceTarget: "popover",
		xstyle: [
			J.contentPadding,
			J.surfaceViewportFit,
			w && J.surfaceScrollable,
			_
		],
		className: y,
		style: b,
		onShow: D,
		onHide: k
	}), j = (0, H.useCallback)(() => {
		let e = A.contentRef.current;
		if (!e) return;
		let t = e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1;
		T((e) => e === t ? e : t);
	}, [A.contentRef]), M = (0, H.useCallback)(() => {
		C.current ??= window.requestAnimationFrame(() => {
			C.current = null, j();
		});
	}, [j]);
	Ke(() => {
		if (!A.isOpen) return;
		let e = A.contentRef.current;
		if (!e) return;
		j();
		let t = typeof ResizeObserver > "u" ? null : new ResizeObserver(M), n = typeof MutationObserver > "u" ? null : new MutationObserver(M);
		return t?.observe(e), n?.observe(e, {
			childList: !0,
			characterData: !0,
			subtree: !0
		}), e.addEventListener("load", M, !0), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), () => {
			t?.disconnect(), n?.disconnect(), e.removeEventListener("load", M, !0), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M), C.current != null && (window.cancelAnimationFrame(C.current), C.current = null);
		};
	}, [
		j,
		A.isOpen,
		M
	]), Ke(() => {
		A.isOpen && M();
	}, [
		n,
		A.isOpen,
		M
	]);
	let N = (0, H.useCallback)(() => {
		s && A.toggle();
	}, [s, A]), P = (0, H.useCallback)((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), N());
	}, [N]), F = (0, H.useCallback)((e) => {
		e.setAttribute("aria-haspopup", A.triggerProps["aria-haspopup"]), e.setAttribute("aria-expanded", String(A.triggerProps["aria-expanded"])), e.setAttribute("aria-controls", A.triggerProps["aria-controls"]), e.addEventListener("click", N);
		let t = e.tagName !== "BUTTON" && e.getAttribute("role") === "button";
		return t && e.addEventListener("keydown", P), () => {
			e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-controls"), e.removeEventListener("click", N), t && e.removeEventListener("keydown", P);
		};
	}, [
		A,
		N,
		P
	]);
	Ke(() => {
		if (!t) return;
		let e = t.current;
		if (!e) return;
		let n = Br(e);
		if (!n) return;
		A.triggerRef(e);
		let r = F(n);
		return () => {
			A.triggerRef(null), r();
		};
	}, [
		t,
		A,
		F
	]), Ke(() => {
		if (t || typeof e == "function") return;
		let n = S.current;
		if (!n) return;
		A.triggerRef(n);
		let r = Br(n);
		if (!r) return;
		let i = F(r);
		return () => {
			A.triggerRef(null), i();
		};
	}, [
		t,
		A,
		F
	]), Ke(() => {
		E && (a && !A.isOpen ? A.show() : !a && A.isOpen && A.hide());
	}, [
		a,
		E,
		A
	]);
	let ee = c ? J.customWidth(c) : i === "center" ? J.matchTriggerCentered : J.matchTriggerAligned, I = r === "start" || r === "end", L = i === "center" ? I ? J.viewportBlockCentered : J.viewportCentered : [J.viewportAligned, I ? i === "start" ? J.viewportBlockStart : J.viewportBlockEnd : i === "start" ? J.viewportStart : J.viewportEnd];
	if (t && e == null) return /*#__PURE__*/ (0, U.jsx)(U.Fragment, { children: A.render(/*#__PURE__*/ (0, U.jsx)("div", {
		"data-testid": x,
		children: n
	}), {
		placement: r,
		alignment: i,
		offset: v["--spacing-1"],
		xstyle: [
			J.viewportFit,
			L,
			ee,
			O[r]
		]
	}) });
	if (typeof e == "function") {
		let t = {
			ref: A.triggerRef,
			onClick: N,
			"aria-haspopup": "dialog",
			"aria-expanded": A.isOpen,
			"aria-controls": A.id
		};
		return /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [e(t), A.render(/*#__PURE__*/ (0, U.jsx)("div", {
			"data-testid": x,
			children: n
		}), {
			placement: r,
			alignment: i,
			offset: v["--spacing-1"],
			xstyle: [
				J.viewportFit,
				L,
				ee,
				O[r]
			]
		})] });
	}
	return /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, U.jsx)(st, {
		value: "button",
		children: /*#__PURE__*/ (0, U.jsx)("div", {
			ref: S,
			className: "x3nfvp2",
			children: e
		})
	}), A.render(/*#__PURE__*/ (0, U.jsx)("div", {
		"data-testid": x,
		children: n
	}), {
		placement: r,
		alignment: i,
		offset: v["--spacing-1"],
		xstyle: [
			J.viewportFit,
			L,
			ee,
			O[r]
		]
	})] });
}
Vr.displayName = "Popover";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxListContext.js
var Hr = ce(null);
Hr.displayName = "CheckboxListContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxList.js
var Ur = [];
function Wr({ label: e, isLabelHidden: t = !1, description: n, status: r, value: i, onChange: a, changeAction: o, density: s = "balanced", hasDividers: c = !1, isDisabled: l = !1, disabledMessage: u, isReadOnly: d = !1, children: f, ref: p, width: m, xstyle: h, className: g, style: v, "data-testid": y, ...b }) {
	let x = (0, H.useId)(), S = (0, H.useId)(), C = (0, H.useId)(), w = (0, H.useId)(), [, T] = (0, H.useTransition)(), D = i !== void 0, [O, k] = (0, H.useOptimistic)(i ?? Ur), [A, j] = (0, H.useOptimistic)(Ur, (e, t) => e.includes(t) ? e : [...e, t]), M = l && !!u, N = _({
		placement: "above",
		focusTrigger: "always",
		isEnabled: M
	}), P = (0, H.useCallback)((e, t) => {
		a?.(e), o && T(async () => {
			k(e), t !== void 0 && j(t), await o(e);
		});
	}, [
		a,
		o,
		T,
		k,
		j
	]), F = (0, H.useMemo)(() => ({
		value: D ? O : void 0,
		onChange: D ? P : void 0,
		isDisabled: l,
		hasDisabledMessage: M,
		isReadOnly: d,
		loadingValues: A
	}), [
		D,
		O,
		P,
		l,
		M,
		d,
		A
	]);
	return /*#__PURE__*/ (0, U.jsxs)(Ie, {
		...b,
		ref: p,
		"data-testid": y,
		label: e,
		isLabelHidden: t,
		description: n,
		inputID: x,
		labelID: S,
		isGroupLabel: !0,
		descriptionID: n ? C : void 0,
		isDisabled: l,
		status: r ? {
			type: r.type,
			message: r.message,
			messageID: r.message ? w : void 0
		} : void 0,
		statusVariant: "detached",
		width: m,
		xstyle: h,
		...B(E("checkbox-list"), {
			className: g,
			style: v
		}),
		children: [/*#__PURE__*/ (0, U.jsx)(Hr, {
			value: F,
			children: /*#__PURE__*/ (0, U.jsx)("div", {
				ref: (e) => {
					N.ref(e);
				},
				role: "group",
				"aria-labelledby": S,
				"aria-describedby": [
					n ? C : null,
					r?.message ? w : null,
					M ? N.describedBy : null
				].filter(Boolean).join(" ") || void 0,
				children: /*#__PURE__*/ (0, U.jsx)(Me, {
					density: s,
					hasDividers: c,
					children: f
				})
			})
		}), M && N.renderTooltip(u)]
	});
}
Wr.displayName = "CheckboxList";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxInput/CheckboxInput.js
var Gr = {
	container: {
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kOIVth: "x1txdalj",
		$$css: !0
	},
	containerLabelHidden: {
		kOIVth: "xxhr3t",
		$$css: !0
	},
	checkboxWrapper: {
		kVAEAm: "x1n2onr6",
		k1xSpc: "x78zum5",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kmuXW: "x2lah0s",
		kHBbk8: "xc8icb0",
		$$css: !0
	},
	indicatorPressOverlay: {
		k5JduY: "x1s928wv",
		kwXMNM: "x1j6awrg",
		kv0HGH: "xarstr8",
		kUfP38: "xtb6wbx",
		kloYau: "x2q1x1w",
		ks3ayO: "xyhc2n1 xzywxsk",
		$$css: !0
	},
	input: {
		kVAEAm: "x10l6tqk",
		k87sOh: "xwa60dl",
		kogj98: "x1ghz6dp",
		kmVPX3: "x1717udv",
		kSiTet: "xg01cxk",
		kkrTdU: "x1ypdohk x16khyan",
		kY2c9j: "x1vjfegm",
		$$css: !0
	},
	inputCoarse: {
		kjFi6P: "xkagaj0",
		kHzOjL: "x80b3aj",
		$$css: !0
	},
	inputDisabled: {
		kkrTdU: "xt0e3qv",
		$$css: !0
	}
}, Kr = {
	sm: {
		kzqmXN: "xw4jnvo",
		kZKoxP: "x1qx5ct2",
		$$css: !0
	},
	md: {
		kzqmXN: "xvy4d1p",
		kZKoxP: "xxk0z11",
		$$css: !0
	}
}, qr = { width: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function Jr({ label: e, isLabelHidden: t = !1, description: n, onChange: r, changeAction: i, isLoading: a = !1, value: o, isDisabled: s = !1, htmlName: c, disabledMessage: l, isReadOnly: u = !1, isOptional: d = !1, isRequired: f = !1, size: p = "md", onFocus: m, onBlur: g, labelIcon: v, status: b, width: x, xstyle: S, className: C, style: w, ref: T, "aria-describedby": D, ...O }) {
	let A = (0, H.useId)(), j = (0, H.useId)(), M = (0, H.useId)(), N = xr({
		isRequired: f,
		isOptional: d
	}), [, P] = (0, H.useTransition)(), [F, ee] = (0, H.useOptimistic)(o), I = a || F !== o, L = s && !!l, te = (0, H.use)(Hr), ne = s && (L || (te?.hasDisabledMessage ?? !1)), R = _({
		placement: "above",
		focusTrigger: "always",
		isEnabled: L
	}), re = fr("checkbox"), ie = (0, H.useRef)(null), { focusProps: z } = ut(ie, s), ae = F === "indeterminate", oe = F === !0, ce = (0, H.useCallback)((e) => {
		e && (e.indeterminate = ae);
	}, [ae]), V = [];
	D && V.push(D), n && V.push(j), b?.message && V.push(M), L && V.push(R.describedBy);
	let ue = V.length > 0 ? V.join(" ") : void 0;
	return /*#__PURE__*/ (0, U.jsxs)("div", {
		...B(E("checkbox-input", { size: p }), k(x != null && qr.width(x), S), C, w),
		children: [
			/*#__PURE__*/ (0, U.jsxs)("div", {
				ref: (e) => {
					R.interactionRef(e);
				},
				...k(Gr.container, t && Gr.containerLabelHidden, !s && Yn),
				children: [/*#__PURE__*/ (0, U.jsxs)("div", {
					...k(Gr.checkboxWrapper, Kr[p], !s && Gr.indicatorPressOverlay),
					...z,
					children: [/*#__PURE__*/ (0, U.jsx)("input", {
						...O,
						ref: h(T, ce, R.positionRef),
						id: A,
						type: "checkbox",
						name: s ? void 0 : c,
						checked: oe,
						disabled: s && !ne,
						"aria-disabled": ne ? "true" : void 0,
						form: ne ? "" : void 0,
						readOnly: u,
						required: f,
						"aria-required": N ? "true" : void 0,
						onChange: (e) => {
							if (s || I || u) return;
							let t = e.target.checked;
							r?.(t, e), i && !e.defaultPrevented && P(async () => {
								ee(t), await i(t, e);
							});
						},
						onFocus: m,
						onBlur: g,
						"aria-readonly": u || void 0,
						"aria-describedby": ue,
						"aria-invalid": b?.type === "error" || void 0,
						"aria-busy": I || void 0,
						...k(Gr.input, fe.centerInline("-50%"), Gr.inputCoarse, Kr[p], s && Gr.inputDisabled)
					}), /*#__PURE__*/ (0, U.jsx)("span", {
						ref: ie,
						className: "xjp7ctv",
						children: /*#__PURE__*/ (0, U.jsx)(re, {
							state: ae ? "indeterminate" : oe ? "checked" : "unchecked",
							size: p,
							isDisabled: s,
							children: I ? /*#__PURE__*/ (0, U.jsx)(y, {
								size: "sm",
								shade: "inherit"
							}) : null
						})
					})]
				}), /*#__PURE__*/ (0, U.jsx)("div", {
					className: "x78zum5 xdt5ytf",
					children: /*#__PURE__*/ (0, U.jsx)(le, {
						...E("checkbox-label"),
						label: e,
						inputID: A,
						isLabelHidden: t,
						isDisabled: s,
						isOptional: d,
						isRequired: f,
						labelIcon: v,
						description: n,
						descriptionID: j
					})
				})]
			}),
			b?.message && /*#__PURE__*/ (0, U.jsx)(se, {
				type: b.type,
				message: b.message,
				id: M,
				variant: "detached"
			}),
			L && R.renderTooltip(l)
		]
	});
}
Jr.displayName = "CheckboxInput";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxListItem.js
var Yr = { selected: {
	kWkggS: "xgcxg3y",
	$$css: !0
} };
function Xr(e) {
	let t = (0, H.use)(We);
	return /*#__PURE__*/ (0, U.jsx)(Jr, {
		...e,
		"aria-describedby": t ?? void 0
	});
}
function Zr({ label: e, "aria-label": t, value: n, description: r, endContent: i, isDisabled: a = !1, isLoading: o = !1, isChecked: s, onCheck: c, ref: l, xstyle: u, className: d, style: f, onClick: p, ...m }) {
	let h = L(), g = (0, H.use)(Hr);
	if (g && g.value !== void 0 && n === void 0) throw Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");
	let _ = typeof e != "string", v = (0, H.useId)(), y = _ && t == null, b = t ?? (_ ? h("@astryx.checkboxList.item.checkbox") : e), x = ((0, H.use)(ae)?.density ?? "balanced") === "compact" ? "sm" : "md", S = (g?.isDisabled ?? !1) || a, C = g?.isReadOnly ?? !1, w = o || n !== void 0 && (g?.loadingValues?.includes(n) ?? !1), T = !1;
	g && g.value !== void 0 && n !== void 0 ? T = g.value.includes(n) : s !== void 0 && (T = s);
	let E = !C && (g != null || c != null), D = (0, H.useRef)(null), O = E || p != null, k = C && p != null ? (e) => {
		p(e), e.stopPropagation();
	} : p, A = () => {
		S || C || w || (g && g.value !== void 0 && n !== void 0 ? g.value.includes(n) ? g.onChange?.(g.value.filter((e) => e !== n), n) : g.onChange?.([...g.value, n], n) : c?.(T !== !0));
	};
	return /*#__PURE__*/ (0, U.jsx)(Ee, {
		...m,
		ref: l,
		label: y ? /*#__PURE__*/ (0, U.jsx)("span", {
			id: v,
			children: e
		}) : e,
		description: r,
		endContent: i,
		isDisabled: S,
		interactiveRef: O ? D : void 0,
		"aria-busy": w || void 0,
		xstyle: [T === !0 && !S && !C && Yr.selected, u],
		className: d,
		style: f,
		startContent: /*#__PURE__*/ (0, U.jsx)(Xr, {
			ref: D,
			label: b,
			"aria-labelledby": y ? v : void 0,
			isLabelHidden: !0,
			value: T,
			onChange: () => A(),
			onClick: k,
			isDisabled: S,
			isReadOnly: C,
			isLoading: w,
			size: x
		})
	});
}
Zr.displayName = "CheckboxListItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Token/TokenLink.js
function Qr({ ref: e, href: t, isDisabled: n, LinkComponent: r, linkStyleProps: i, labelContent: a, icon: o, endContent: s, removeButton: c, onClick: l, onMouseUp: u, ...d }) {
	let f = (0, H.useRef)(null), p = (0, H.useRef)(null), { onClick: m, onMouseUp: g } = I({
		containerRef: f,
		interactiveRef: p,
		href: t,
		disabled: n
	});
	return /*#__PURE__*/ (0, U.jsxs)("span", {
		ref: h(e, f),
		...d,
		onClick: n ? l : Ge(l, m),
		onMouseUp: n ? u : Ge(u, g),
		children: [
			o,
			/*#__PURE__*/ (0, U.jsx)(r, {
				ref: p,
				href: t,
				"aria-disabled": n || void 0,
				...i,
				children: a
			}),
			s,
			c
		]
	});
}
Qr.displayName = "TokenLink";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Token/Token.js
var $r = {
	base: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kOIVth: "xzye2dw",
		k8WAf4: "xt970qd",
		kMzoRj: "xc342km",
		ksu8eU: "xng3xce",
		kaIpWk: "xx3sua9",
		kMv6JI: "xjb2p0i",
		kGuDYH: "x141an7d",
		kLWn49: "x1ltkj2j",
		k63SB2: "x1e4wzip",
		khDVqt: "xuxw1ft",
		kybGjl: "x1hl2dhg",
		ks0D6T: "x193iq5w",
		kVQacm: "xb3r6kr",
		$$css: !0
	},
	interactive: {
		kkrTdU: "x1ypdohk x16khyan",
		k1ekBW: "x12qzo2w",
		kIyJzY: "xuedmi6",
		kAMwcw: "xlr8y92",
		$$css: !0
	},
	disabled: {
		kkrTdU: "xt0e3qv",
		kSiTet: "xbyyjgo",
		kfzvcC: "x47corl",
		$$css: !0
	},
	removeButton: {
		k1xSpc: "x3nfvp2",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		kVAEAm: "x1n2onr6",
		kmVPX3: "x1717udv",
		k71WvV: "xkd40ry",
		kkrTdU: "x1ypdohk x16khyan",
		kaIpWk: "xjspbzw",
		kzqmXN: "x1kky2od",
		kZKoxP: "xlup9mm",
		kMwMTN: "x1heor9g",
		k5JduY: "x1s928wv",
		kwXMNM: "x1j6awrg",
		kv0HGH: "x1xsm0q9",
		$$css: !0
	}
}, ei = {
	sm: {
		kZKoxP: "xzydfjl",
		kGuDYH: "x141an7d",
		kg3NbH: "xf314gf",
		$$css: !0
	},
	md: {
		kZKoxP: "xrmxcn7",
		kg3NbH: "xf314gf",
		$$css: !0
	},
	lg: {
		kZKoxP: "x102lyln",
		kg3NbH: "xf314gf",
		$$css: !0
	}
}, ti = {
	default: {
		kWkggS: "x17x4s8c",
		kMwMTN: "x1tgivj0",
		$$css: !0
	},
	red: {
		kWkggS: "x1cibrc5",
		kMwMTN: "x1joocv1",
		$$css: !0
	},
	orange: {
		kWkggS: "x1e9xt6e",
		kMwMTN: "xm47u9q",
		$$css: !0
	},
	yellow: {
		kWkggS: "x1bo7t0x",
		kMwMTN: "xdhq94a",
		$$css: !0
	},
	green: {
		kWkggS: "x1sqjeoo",
		kMwMTN: "xltfdvo",
		$$css: !0
	},
	teal: {
		kWkggS: "x1jtji5o",
		kMwMTN: "x9x0lbs",
		$$css: !0
	},
	cyan: {
		kWkggS: "x1rgj867",
		kMwMTN: "x1txnczv",
		$$css: !0
	},
	blue: {
		kWkggS: "x1o0wnni",
		kMwMTN: "x1vvqiwl",
		$$css: !0
	},
	purple: {
		kWkggS: "x16i6n6f",
		kMwMTN: "x1m9wyeb",
		$$css: !0
	},
	pink: {
		kWkggS: "xnpoty2",
		kMwMTN: "xiuofww",
		$$css: !0
	},
	gray: {
		kWkggS: "xspzpui",
		kMwMTN: "xru1t7f",
		$$css: !0
	}
};
function ni({ label: e, size: t = "md", color: n = "default", icon: r, isDisabled: i = !1, onRemove: a, onClick: o, href: s, description: c, endContent: l, isLabelHidden: u = !1, xstyle: d, className: f, style: p, "data-testid": m, ref: h, ...g }) {
	let _ = L(), v = ye(), y = lt({
		href: s,
		onClick: o,
		isDisabled: i
	}), b = o ?? (y === "button" ? () => {} : null), x = a != null && /*#__PURE__*/ (0, U.jsx)("button", {
		type: "button",
		"aria-label": _("@astryx.token.remove", { label: e }),
		onClick: (e) => {
			e.stopPropagation(), a(e);
		},
		disabled: i,
		...Ce.focusVisible($r.removeButton),
		children: /*#__PURE__*/ (0, U.jsx)(F, {
			icon: "close",
			size: "xsm",
			color: "inherit"
		})
	}), S = /*#__PURE__*/ (0, U.jsxs)(U.Fragment, { children: [
		r,
		/*#__PURE__*/ (0, U.jsx)("span", {
			...{
				0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
				1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
			}[!!u << 0],
			children: e
		}),
		l,
		x
	] }), w = {
		"data-testid": m,
		...u ? { "aria-label": e } : {},
		...c == null ? {} : { "aria-description": c }
	};
	return y === "link" ? a == null ? /*#__PURE__*/ (0, U.jsx)(v, {
		ref: h,
		href: s,
		...B(E("token", {
			color: n,
			size: t
		}), Ce.focusVisible($r.base, ei[t], ti[n], $r.interactive, C.backgroundImage, i && $r.disabled, d), f, p),
		...g,
		...i ? { "aria-disabled": !0 } : {},
		...w,
		children: S
	}) : /*#__PURE__*/ (0, U.jsx)(Qr, {
		ref: h,
		href: s,
		isDisabled: i,
		LinkComponent: v,
		icon: r,
		endContent: l,
		removeButton: x,
		linkStyleProps: { className: "xmper1u x16khyan x1heor9g x1a2a7pz xb3r6kr xeuugli" },
		labelContent: /*#__PURE__*/ (0, U.jsx)("span", {
			...{
				0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
				1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
			}[!!u << 0],
			children: e
		}),
		...B(E("token", {
			color: n,
			size: t
		}), Ce.focusWithin($r.base, ei[t], ti[n], $r.interactive, C.backgroundImage, i && $r.disabled, d), f, p),
		...g,
		...w
	}) : b == null ? /*#__PURE__*/ (0, U.jsx)("span", {
		ref: h,
		...B(E("token", {
			color: n,
			size: t
		}), k($r.base, ei[t], ti[n], i && $r.disabled, d), f, p),
		...g,
		...w,
		children: S
	}) : /*#__PURE__*/ (0, U.jsxs)("span", {
		ref: h,
		onClick: i ? void 0 : (e) => {
			e.target.closest("button, a") || b(e);
		},
		...B(E("token", {
			color: n,
			size: t
		}), Ce.focusWithin($r.base, ei[t], ti[n], $r.interactive, C.backgroundImage, i && $r.disabled, d), f, p),
		...g,
		...w,
		children: [
			r,
			/*#__PURE__*/ (0, U.jsx)("button", {
				type: "button",
				onClick: b,
				disabled: i,
				className: "xmper1u x16khyan x1heor9g x1a2a7pz xb3r6kr xeuugli",
				children: /*#__PURE__*/ (0, U.jsx)("span", {
					...{
						0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
						1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
					}[!!u << 0],
					children: e
				})
			}),
			l,
			x
		]
	});
}
ni.displayName = "Token";
//#endregion
//#region node_modules/@astryxdesign/core/dist/EmptyState/EmptyState.js
var ri = {
	container: {
		k1xSpc: "x78zum5",
		kXwgrk: "xdt5ytf",
		kGNEyG: "x6s0dn4",
		kjj79g: "xl56j7k",
		k9WMMc: "x2b8uid",
		kOIVth: "x18g69wz",
		k8WAf4: "xmfvnks",
		kg3NbH: "xm7rs69",
		$$css: !0
	},
	containerCompact: {
		kOIVth: "x1txdalj",
		k8WAf4: "x1na6nto",
		kg3NbH: "x1pzlopt",
		$$css: !0
	}
};
function ii({ title: e, description: t, icon: n, actions: r, headingLevel: i = 3, isCompact: a = !1, xstyle: o, className: s, style: c, ref: l, ...u }) {
	let d = `h${i}`;
	return /*#__PURE__*/ (0, U.jsxs)("div", {
		ref: l,
		...u,
		role: "status",
		...B(E("empty-state", { variant: a ? "compact" : null }), k(ri.container, a && ri.containerCompact, o), s, c),
		children: [
			n != null && /*#__PURE__*/ (0, U.jsx)("div", {
				"aria-hidden": "true",
				children: n
			}),
			/*#__PURE__*/ (0, U.jsxs)("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 xxc7z9f",
				children: [/*#__PURE__*/ (0, H.createElement)(d, B(E("empty-state-title", { variant: a ? "compact" : null }), {
					0: { className: "x1ghz6dp xjb2p0i x18juvz8 x2mo6ok xf74fhv x1tgivj0" },
					1: { className: "x1ghz6dp xjb2p0i x2mo6ok xf74fhv x1tgivj0 xcr08ib" }
				}[!!a << 0]), e), t != null && /*#__PURE__*/ (0, U.jsx)("div", {
					...B(E("empty-state-description", { variant: a ? "compact" : null }), {
						0: { className: "x1ghz6dp xjb2p0i xjm74w1 x1sodnla xw6l6zx xv1l7n4" },
						1: { className: "x1ghz6dp xjb2p0i x1sodnla xw6l6zx xv1l7n4 x141an7d" }
					}[!!a << 0]),
					children: t
				})]
			}),
			r != null && /*#__PURE__*/ (0, U.jsx)("div", {
				...{
					0: { className: "x78zum5 x1q0g3np x6s0dn4 x1txdalj xcsaf9d" },
					1: { className: "x78zum5 x6s0dn4 x1txdalj xcsaf9d xdt5ytf" }
				}[!!a << 0],
				children: r
			})
		]
	});
}
ii.displayName = "EmptyState";
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs
var ai = {
	name: "sliders-horizontal",
	size: 24,
	node: [
		["path", {
			d: "M10 5H3",
			key: "1qgfaw"
		}],
		["path", {
			d: "M12 19H3",
			key: "yhmn1j"
		}],
		["path", {
			d: "M14 3v4",
			key: "1sua03"
		}],
		["path", {
			d: "M16 17v4",
			key: "1q0r14"
		}],
		["path", {
			d: "M21 12h-9",
			key: "1o4lsq"
		}],
		["path", {
			d: "M21 19h-5",
			key: "1rlt1p"
		}],
		["path", {
			d: "M21 5h-7",
			key: "1oszz2"
		}],
		["path", {
			d: "M8 10v4",
			key: "tgpxqk"
		}],
		["path", {
			d: "M8 12H3",
			key: "a7s4jb"
		}]
	]
};
ai.node;
var oi = he(ai), si = r();
function ci() {
	return ci = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ci.apply(this, arguments);
}
var li = typeof global == "object" && global && global.Object === Object && global, ui = typeof self == "object" && self && self.Object === Object && self, di = li || ui || Function("return this")(), fi = di.Symbol, pi = Object.prototype, mi = pi.hasOwnProperty, hi = pi.toString, gi = fi ? fi.toStringTag : void 0, _i = Object.prototype.toString, vi = "[object Null]", yi = "[object Undefined]", bi = fi ? fi.toStringTag : void 0;
function xi(e) {
	return e == null ? e === void 0 ? yi : vi : bi && bi in Object(e) ? function(e) {
		var t = mi.call(e, gi), n = e[gi];
		try {
			e[gi] = void 0;
			var r = !0;
		} catch {}
		var i = hi.call(e);
		return r && (t ? e[gi] = n : delete e[gi]), i;
	}(e) : function(e) {
		return _i.call(e);
	}(e);
}
function Si(e) {
	return typeof e == "object" && !!e;
}
var Ci = "[object Symbol]";
function wi(e) {
	return typeof e == "symbol" || Si(e) && xi(e) == Ci;
}
function Ti(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
var Y = Array.isArray, Ei = 1 / 0, Di = fi ? fi.prototype : void 0, Oi = Di ? Di.toString : void 0;
function ki(e) {
	if (typeof e == "string") return e;
	if (Y(e)) return Ti(e, ki) + "";
	if (wi(e)) return Oi ? Oi.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Ei ? "-0" : t;
}
function Ai(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
function ji(e) {
	return e;
}
var Mi = "[object AsyncFunction]", Ni = "[object Function]", Pi = "[object GeneratorFunction]", Fi = "[object Proxy]";
function Ii(e) {
	if (!Ai(e)) return !1;
	var t = xi(e);
	return t == Ni || t == Pi || t == Mi || t == Fi;
}
var Li, Ri = di["__core-js_shared__"], zi = (Li = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Li : "", Bi = Function.prototype.toString;
function Vi(e) {
	if (e != null) {
		try {
			return Bi.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
var Hi = /^\[object .+?Constructor\]$/, Ui = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Wi(e, t) {
	var n = function(e, t) {
		return e?.[t];
	}(e, t);
	return function(e) {
		return !(!Ai(e) || (t = e, zi && zi in t)) && (Ii(e) ? Ui : Hi).test(Vi(e));
		var t;
	}(n) ? n : void 0;
}
var Gi, Ki, qi, Ji = Wi(di, "WeakMap"), Yi = Object.create, Xi = function() {
	function e() {}
	return function(t) {
		if (!Ai(t)) return {};
		if (Yi) return Yi(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}(), Zi = Date.now, Qi = function() {
	try {
		var e = Wi(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), $i = (Gi = Qi ? function(e, t) {
	return Qi(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: (n = t, function() {
			return n;
		}),
		writable: !0
	});
	var n;
} : ji, Ki = 0, qi = 0, function() {
	var e = Zi(), t = 16 - (e - qi);
	if (qi = e, t > 0) {
		if (++Ki >= 800) return arguments[0];
	} else Ki = 0;
	return Gi.apply(void 0, arguments);
});
function ea(e) {
	return e != e;
}
function ta(e, t) {
	return !(e == null || !e.length) && function(e, t, n) {
		return t == t ? function(e, t, n) {
			for (var r = -1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}(e, t) : function(e, t, n, r) {
			for (var i = e.length, a = -1; ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}(e, ea);
	}(e, t) > -1;
}
var na = 9007199254740991, ra = /^(?:0|[1-9]\d*)$/;
function ia(e, t) {
	var n = typeof e;
	return !!(t ??= na) && (n == "number" || n != "symbol" && ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function aa(e, t, n) {
	t == "__proto__" && Qi ? Qi(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
function oa(e, t) {
	return e === t || e != e && t != t;
}
var sa = Object.prototype.hasOwnProperty;
function ca(e, t, n) {
	var r = e[t];
	sa.call(e, t) && oa(r, n) && (n !== void 0 || t in e) || aa(e, t, n);
}
function la(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? aa(n, s, c) : ca(n, s, c);
	}
	return n;
}
var ua = Math.max, da = 9007199254740991;
function fa(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= da;
}
function pa(e) {
	return e != null && fa(e.length) && !Ii(e);
}
var ma = Object.prototype;
function ha(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || ma);
}
function ga(e) {
	return Si(e) && xi(e) == "[object Arguments]";
}
var _a = Object.prototype, va = _a.hasOwnProperty, ya = _a.propertyIsEnumerable, ba = ga(function() {
	return arguments;
}()) ? ga : function(e) {
	return Si(e) && va.call(e, "callee") && !ya.call(e, "callee");
}, xa = typeof exports == "object" && exports && !exports.nodeType && exports, Sa = xa && typeof module == "object" && module && !module.nodeType && module, Ca = Sa && Sa.exports === xa ? di.Buffer : void 0, wa = (Ca ? Ca.isBuffer : void 0) || function() {
	return !1;
}, X = {};
function Ta(e) {
	return function(t) {
		return e(t);
	};
}
X["[object Float32Array]"] = X["[object Float64Array]"] = X["[object Int8Array]"] = X["[object Int16Array]"] = X["[object Int32Array]"] = X["[object Uint8Array]"] = X["[object Uint8ClampedArray]"] = X["[object Uint16Array]"] = X["[object Uint32Array]"] = !0, X["[object Arguments]"] = X["[object Array]"] = X["[object ArrayBuffer]"] = X["[object Boolean]"] = X["[object DataView]"] = X["[object Date]"] = X["[object Error]"] = X["[object Function]"] = X["[object Map]"] = X["[object Number]"] = X["[object Object]"] = X["[object RegExp]"] = X["[object Set]"] = X["[object String]"] = X["[object WeakMap]"] = !1;
var Ea = typeof exports == "object" && exports && !exports.nodeType && exports, Da = Ea && typeof module == "object" && module && !module.nodeType && module, Oa = Da && Da.exports === Ea && li.process, ka = function() {
	try {
		return Da && Da.require && Da.require("util").types || Oa && Oa.binding && Oa.binding("util");
	} catch {}
}(), Aa = ka && ka.isTypedArray, ja = Aa ? Ta(Aa) : function(e) {
	return Si(e) && fa(e.length) && !!X[xi(e)];
}, Ma = Object.prototype.hasOwnProperty;
function Na(e, t) {
	var n = Y(e), r = !n && ba(e), i = !n && !r && wa(e), a = !n && !r && !i && ja(e), o = n || r || i || a, s = o ? function(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}(e.length, String) : [], c = s.length;
	for (var l in e) !t && !Ma.call(e, l) || o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || ia(l, c)) || s.push(l);
	return s;
}
function Pa(e, t) {
	return function(n) {
		return e(t(n));
	};
}
var Fa = Pa(Object.keys, Object), Ia = Object.prototype.hasOwnProperty;
function La(e) {
	return pa(e) ? Na(e) : function(e) {
		if (!ha(e)) return Fa(e);
		var t = [];
		for (var n in Object(e)) Ia.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}(e);
}
var Ra = Object.prototype.hasOwnProperty;
function za(e) {
	return pa(e) ? Na(e, !0) : function(e) {
		if (!Ai(e)) return function(e) {
			var t = [];
			if (e != null) for (var n in Object(e)) t.push(n);
			return t;
		}(e);
		var t = ha(e), n = [];
		for (var r in e) (r != "constructor" || !t && Ra.call(e, r)) && n.push(r);
		return n;
	}(e);
}
var Ba = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Va = /^\w*$/;
function Ha(e, t) {
	if (Y(e)) return !1;
	var n = typeof e;
	return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !wi(e)) || Va.test(e) || !Ba.test(e) || t != null && e in Object(t);
}
var Ua = Wi(Object, "create"), Wa = Object.prototype.hasOwnProperty, Ga = Object.prototype.hasOwnProperty;
function Ka(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
function qa(e, t) {
	for (var n = e.length; n--;) if (oa(e[n][0], t)) return n;
	return -1;
}
Ka.prototype.clear = function() {
	this.__data__ = Ua ? Ua(null) : {}, this.size = 0;
}, Ka.prototype.delete = function(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}, Ka.prototype.get = function(e) {
	var t = this.__data__;
	if (Ua) {
		var n = t[e];
		return n === "__lodash_hash_undefined__" ? void 0 : n;
	}
	return Wa.call(t, e) ? t[e] : void 0;
}, Ka.prototype.has = function(e) {
	var t = this.__data__;
	return Ua ? t[e] !== void 0 : Ga.call(t, e);
}, Ka.prototype.set = function(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Ua && t === void 0 ? "__lodash_hash_undefined__" : t, this;
};
var Ja = Array.prototype.splice;
function Ya(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ya.prototype.clear = function() {
	this.__data__ = [], this.size = 0;
}, Ya.prototype.delete = function(e) {
	var t = this.__data__, n = qa(t, e);
	return !(n < 0 || (n == t.length - 1 ? t.pop() : Ja.call(t, n, 1), --this.size, 0));
}, Ya.prototype.get = function(e) {
	var t = this.__data__, n = qa(t, e);
	return n < 0 ? void 0 : t[n][1];
}, Ya.prototype.has = function(e) {
	return qa(this.__data__, e) > -1;
}, Ya.prototype.set = function(e, t) {
	var n = this.__data__, r = qa(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
};
var Xa = Wi(di, "Map");
function Za(e, t) {
	var n, r, i = e.__data__;
	return ((r = typeof (n = t)) == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
}
function Qa(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
function $a(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError("Expected a function");
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new ($a.Cache || Qa)(), n;
}
Qa.prototype.clear = function() {
	this.size = 0, this.__data__ = {
		hash: new Ka(),
		map: new (Xa || Ya)(),
		string: new Ka()
	};
}, Qa.prototype.delete = function(e) {
	var t = Za(this, e).delete(e);
	return this.size -= +!!t, t;
}, Qa.prototype.get = function(e) {
	return Za(this, e).get(e);
}, Qa.prototype.has = function(e) {
	return Za(this, e).has(e);
}, Qa.prototype.set = function(e, t) {
	var n = Za(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}, $a.Cache = Qa;
var eo, to, no = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ro = /\\(\\)?/g, io = (eo = $a(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(no, function(e, n, r, i) {
		t.push(r ? i.replace(ro, "$1") : n || e);
	}), t;
}, function(e) {
	return to.size === 500 && to.clear(), e;
}), to = eo.cache, eo);
function ao(e, t) {
	return Y(e) ? e : Ha(e, t) ? [e] : io(function(e) {
		return e == null ? "" : ki(e);
	}(e));
}
var oo = 1 / 0;
function so(e) {
	if (typeof e == "string" || wi(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -oo ? "-0" : t;
}
function co(e, t) {
	for (var n = 0, r = (t = ao(t, e)).length; e != null && n < r;) e = e[so(t[n++])];
	return n && n == r ? e : void 0;
}
function lo(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
var uo = Pa(Object.getPrototypeOf, Object);
function fo(e) {
	var t = this.__data__ = new Ya(e);
	this.size = t.size;
}
fo.prototype.clear = function() {
	this.__data__ = new Ya(), this.size = 0;
}, fo.prototype.delete = function(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}, fo.prototype.get = function(e) {
	return this.__data__.get(e);
}, fo.prototype.has = function(e) {
	return this.__data__.has(e);
}, fo.prototype.set = function(e, t) {
	var n = this.__data__;
	if (n instanceof Ya) {
		var r = n.__data__;
		if (!Xa || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Qa(r);
	}
	return n.set(e, t), this.size = n.size, this;
};
var po = typeof exports == "object" && exports && !exports.nodeType && exports, mo = po && typeof module == "object" && module && !module.nodeType && module, ho = mo && mo.exports === po ? di.Buffer : void 0, go = ho ? ho.allocUnsafe : void 0;
function _o() {
	return [];
}
var vo = Object.prototype.propertyIsEnumerable, yo = Object.getOwnPropertySymbols, bo = yo ? function(e) {
	return e == null ? [] : (e = Object(e), function(t, n) {
		for (var r = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++r < i;) {
			var s = t[r];
			vo.call(e, s) && (o[a++] = s);
		}
		return o;
	}(yo(e)));
} : _o, xo = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) lo(t, bo(e)), e = uo(e);
	return t;
} : _o;
function So(e, t, n) {
	var r = t(e);
	return Y(e) ? r : lo(r, n(e));
}
function Co(e) {
	return So(e, La, bo);
}
function wo(e) {
	return So(e, za, xo);
}
var To = Wi(di, "DataView"), Eo = Wi(di, "Promise"), Do = Wi(di, "Set"), Oo = "[object Map]", ko = "[object Promise]", Ao = "[object Set]", jo = "[object WeakMap]", Mo = "[object DataView]", No = Vi(To), Po = Vi(Xa), Fo = Vi(Eo), Io = Vi(Do), Lo = Vi(Ji), Ro = xi;
(To && Ro(new To(/* @__PURE__ */ new ArrayBuffer(1))) != Mo || Xa && Ro(new Xa()) != Oo || Eo && Ro(Eo.resolve()) != ko || Do && Ro(new Do()) != Ao || Ji && Ro(new Ji()) != jo) && (Ro = function(e) {
	var t = xi(e), n = t == "[object Object]" ? e.constructor : void 0, r = n ? Vi(n) : "";
	if (r) switch (r) {
		case No: return Mo;
		case Po: return Oo;
		case Fo: return ko;
		case Io: return Ao;
		case Lo: return jo;
	}
	return t;
});
var zo = Ro, Bo = Object.prototype.hasOwnProperty, Vo = di.Uint8Array;
function Ho(e) {
	var t = new e.constructor(e.byteLength);
	return new Vo(t).set(new Vo(e)), t;
}
var Uo = /\w*$/, Wo = fi ? fi.prototype : void 0, Go = Wo ? Wo.valueOf : void 0, Ko = "[object Boolean]", qo = "[object Date]", Jo = "[object Map]", Yo = "[object Number]", Xo = "[object RegExp]", Zo = "[object Set]", Qo = "[object String]", $o = "[object Symbol]", es = "[object ArrayBuffer]", ts = "[object DataView]", ns = "[object Float32Array]", rs = "[object Float64Array]", is = "[object Int8Array]", as = "[object Int16Array]", os = "[object Int32Array]", ss = "[object Uint8Array]", cs = "[object Uint8ClampedArray]", ls = "[object Uint16Array]", us = "[object Uint32Array]", ds = ka && ka.isMap, fs = ds ? Ta(ds) : function(e) {
	return Si(e) && zo(e) == "[object Map]";
}, ps = ka && ka.isSet, ms = ps ? Ta(ps) : function(e) {
	return Si(e) && zo(e) == "[object Set]";
}, hs = 1, gs = 2, _s = 4, vs = "[object Arguments]", ys = "[object Function]", bs = "[object GeneratorFunction]", xs = "[object Object]", Z = {};
function Ss(e, t, n, r, i, a) {
	var o, s = t & hs, c = t & gs, l = t & _s;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Ai(e)) return e;
	var u = Y(e);
	if (u) {
		if (o = function(e) {
			var t = e.length, n = new e.constructor(t);
			return t && typeof e[0] == "string" && Bo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
		}(e), !s) return function(e, t) {
			var n = -1, r = e.length;
			for (t ||= Array(r); ++n < r;) t[n] = e[n];
			return t;
		}(e, o);
	} else {
		var d = zo(e), f = d == ys || d == bs;
		if (wa(e)) return function(e, t) {
			if (t) return e.slice();
			var n = e.length, r = go ? go(n) : new e.constructor(n);
			return e.copy(r), r;
		}(e, s);
		if (d == xs || d == vs || f && !i) {
			if (o = c || f ? {} : function(e) {
				return typeof e.constructor != "function" || ha(e) ? {} : Xi(uo(e));
			}(e), !s) return c ? function(e, t) {
				return la(e, xo(e), t);
			}(e, function(e, t) {
				return e && la(t, za(t), e);
			}(o, e)) : function(e, t) {
				return la(e, bo(e), t);
			}(e, function(e, t) {
				return e && la(t, La(t), e);
			}(o, e));
		} else {
			if (!Z[d]) return i ? e : {};
			o = function(e, t, n) {
				var r, i, a = e.constructor;
				switch (t) {
					case es: return Ho(e);
					case Ko:
					case qo: return new a(+e);
					case ts: return function(e, t) {
						var n = t ? Ho(e.buffer) : e.buffer;
						return new e.constructor(n, e.byteOffset, e.byteLength);
					}(e, n);
					case ns:
					case rs:
					case is:
					case as:
					case os:
					case ss:
					case cs:
					case ls:
					case us: return function(e, t) {
						var n = t ? Ho(e.buffer) : e.buffer;
						return new e.constructor(n, e.byteOffset, e.length);
					}(e, n);
					case Jo: return new a();
					case Yo:
					case Qo: return new a(e);
					case Xo: return (i = new (r = e).constructor(r.source, Uo.exec(r))).lastIndex = r.lastIndex, i;
					case Zo: return new a();
					case $o: return Go ? Object(Go.call(e)) : {};
				}
			}(e, d, s);
		}
	}
	a ||= new fo();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), ms(e) ? e.forEach(function(r) {
		o.add(Ss(r, t, n, r, e, a));
	}) : fs(e) && e.forEach(function(r, i) {
		o.set(i, Ss(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? wo : Co : c ? za : La)(e);
	return function(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
	}(m || e, function(r, i) {
		m && (r = e[i = r]), ca(o, i, Ss(r, t, n, i, e, a));
	}), o;
}
function Cs(e) {
	return Ss(e, 4);
}
function ws(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new Qa(); ++t < n;) this.add(e[t]);
}
function Ts(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
function Es(e, t) {
	return e.has(t);
}
Z[vs] = Z["[object Array]"] = Z["[object ArrayBuffer]"] = Z["[object DataView]"] = Z["[object Boolean]"] = Z["[object Date]"] = Z["[object Float32Array]"] = Z["[object Float64Array]"] = Z["[object Int8Array]"] = Z["[object Int16Array]"] = Z["[object Int32Array]"] = Z["[object Map]"] = Z["[object Number]"] = Z[xs] = Z["[object RegExp]"] = Z["[object Set]"] = Z["[object String]"] = Z["[object Symbol]"] = Z["[object Uint8Array]"] = Z["[object Uint8ClampedArray]"] = Z["[object Uint16Array]"] = Z["[object Uint32Array]"] = !0, Z["[object Error]"] = Z[ys] = Z["[object WeakMap]"] = !1, ws.prototype.add = ws.prototype.push = function(e) {
	return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, ws.prototype.has = function(e) {
	return this.__data__.has(e);
};
var Ds = 1, Os = 2;
function ks(e, t, n, r, i, a) {
	var o = n & Ds, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Os ? new ws() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Ts(t, function(e, t) {
				if (!Es(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (m !== h && !i(m, h, n, r, a)) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
function As(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
function js(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
var Ms = 1, Ns = 2, Ps = "[object Boolean]", Fs = "[object Date]", Is = "[object Error]", Ls = "[object Map]", Rs = "[object Number]", zs = "[object RegExp]", Bs = "[object Set]", Vs = "[object String]", Hs = "[object Symbol]", Us = "[object ArrayBuffer]", Ws = "[object DataView]", Gs = fi ? fi.prototype : void 0, Ks = Gs ? Gs.valueOf : void 0, qs = 1, Js = Object.prototype.hasOwnProperty, Ys = 1, Xs = "[object Arguments]", Zs = "[object Array]", Qs = "[object Object]", $s = Object.prototype.hasOwnProperty;
function ec(e, t, n, r, i) {
	return e === t || (e == null || t == null || !Si(e) && !Si(t) ? e != e && t != t : function(e, t, n, r, i, a) {
		var o = Y(e), s = Y(t), c = o ? Zs : zo(e), l = s ? Zs : zo(t), u = (c = c == Xs ? Qs : c) == Qs, d = (l = l == Xs ? Qs : l) == Qs, f = c == l;
		if (f && wa(e)) {
			if (!wa(t)) return !1;
			o = !0, u = !1;
		}
		if (f && !u) return a ||= new fo(), o || ja(e) ? ks(e, t, n, r, i, a) : function(e, t, n, r, i, a, o) {
			switch (n) {
				case Ws:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case Us: return !(e.byteLength != t.byteLength || !a(new Vo(e), new Vo(t)));
				case Ps:
				case Fs:
				case Rs: return oa(+e, +t);
				case Is: return e.name == t.name && e.message == t.message;
				case zs:
				case Vs: return e == t + "";
				case Ls: var s = As;
				case Bs:
					if (s ||= js, e.size != t.size && !(r & Ms)) return !1;
					var c = o.get(e);
					if (c) return c == t;
					r |= Ns, o.set(e, t);
					var l = ks(s(e), s(t), r, i, a, o);
					return o.delete(e), l;
				case Hs: if (Ks) return Ks.call(e) == Ks.call(t);
			}
			return !1;
		}(e, t, c, n, r, i, a);
		if (!(n & Ys)) {
			var p = u && $s.call(e, "__wrapped__"), m = d && $s.call(t, "__wrapped__");
			if (p || m) {
				var h = p ? e.value() : e, g = m ? t.value() : t;
				return a ||= new fo(), i(h, g, n, r, a);
			}
		}
		return !!f && (a ||= new fo(), function(e, t, n, r, i, a) {
			var o = n & qs, s = Co(e), c = s.length;
			if (c != Co(t).length && !o) return !1;
			for (var l = c; l--;) {
				var u = s[l];
				if (!(o ? u in t : Js.call(t, u))) return !1;
			}
			var d = a.get(e), f = a.get(t);
			if (d && f) return d == t && f == e;
			var p = !0;
			a.set(e, t), a.set(t, e);
			for (var m = o; ++l < c;) {
				var h = e[u = s[l]], g = t[u];
				if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
				if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
					p = !1;
					break;
				}
				m ||= u == "constructor";
			}
			if (p && !m) {
				var v = e.constructor, y = t.constructor;
				v == y || !("constructor" in e) || !("constructor" in t) || typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y || (p = !1);
			}
			return a.delete(e), a.delete(t), p;
		}(e, t, n, r, i, a));
	}(e, t, n, r, ec, i));
}
var tc = 1, nc = 2;
function rc(e) {
	return e == e && !Ai(e);
}
function ic(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
function ac(e, t) {
	return e != null && t in Object(e);
}
var oc = 1, sc = 2;
function cc(e) {
	return typeof e == "function" ? e : e == null ? ji : typeof e == "object" ? Y(e) ? function(e, t) {
		return Ha(e) && rc(t) ? ic(so(e), t) : function(n) {
			var r = function(e, t, n) {
				var r = e == null ? void 0 : co(e, t);
				return r === void 0 ? void 0 : r;
			}(n, e);
			return r === void 0 && r === t ? function(e, t) {
				return e != null && function(e, t, n) {
					for (var r = -1, i = (t = ao(t, e)).length, a = !1; ++r < i;) {
						var o = so(t[r]);
						if (!(a = e != null && n(e, o))) break;
						e = e[o];
					}
					return a || ++r != i ? a : !!(i = e == null ? 0 : e.length) && fa(i) && ia(o, i) && (Y(e) || ba(e));
				}(e, t, ac);
			}(n, e) : ec(t, r, oc | sc);
		};
	}(e[0], e[1]) : (i = function(e) {
		for (var t = La(e), n = t.length; n--;) {
			var r = t[n], i = e[r];
			t[n] = [
				r,
				i,
				rc(i)
			];
		}
		return t;
	}(r = e), i.length == 1 && i[0][2] ? ic(i[0][0], i[0][1]) : function(e) {
		return e === r || function(e, t, n, r) {
			var i = n.length, a = i;
			if (e == null) return !a;
			for (e = Object(e); i--;) {
				var o = n[i];
				if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
			}
			for (; ++i < a;) {
				var s = (o = n[i])[0], c = e[s], l = o[1];
				if (o[2]) {
					if (c === void 0 && !(s in e)) return !1;
				} else {
					var u = new fo();
					if (!ec(l, c, tc | nc, void 0, u)) return !1;
				}
			}
			return !0;
		}(e, 0, i);
	}) : Ha(t = e) ? (n = so(t), function(e) {
		return e?.[n];
	}) : function(e) {
		return function(t) {
			return co(t, e);
		};
	}(t);
	var t, n, r, i;
}
function lc(e, t) {
	return e && function(e, t, n) {
		for (var r = -1, i = Object(e), a = n(e), o = a.length; o--;) {
			var s = a[++r];
			if (!1 === t(i[s], s, i)) break;
		}
		return e;
	}(e, t, La);
}
var uc = lc, dc = function(e, t) {
	if (e == null) return e;
	if (!pa(e)) return uc(e, t);
	for (var n = e.length, r = -1, i = Object(e); ++r < n && !1 !== t(i[r], r, i););
	return e;
};
function fc(e, t) {
	var n = -1, r = pa(e) ? Array(e.length) : [];
	return dc(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
function pc(e, t) {
	return e > t;
}
var mc = Math.min;
function hc(e) {
	return function(e) {
		return Si(e) && pa(e);
	}(e) ? e : [];
}
var gc = function(e, t) {
	return $i(function(e, t, n) {
		return t = ua(t === void 0 ? e.length - 1 : t, 0), function() {
			for (var r = arguments, i = -1, a = ua(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
			i = -1;
			for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
			return s[t] = n(o), function(e, t, n) {
				switch (n.length) {
					case 0: return e.call(t);
					case 1: return e.call(t, n[0]);
					case 2: return e.call(t, n[0], n[1]);
					case 3: return e.call(t, n[0], n[1], n[2]);
				}
				return e.apply(t, n);
			}(e, this, s);
		};
	}(e, void 0, ji), e + "");
}(function(e) {
	var t = Ti(e, hc);
	return t.length && t[0] === e[0] ? function(e, t, n) {
		for (var r = ta, i = e[0].length, a = e.length, o = a, s = Array(a), c = Infinity, l = []; o--;) {
			var u = e[o];
			c = mc(u.length, c), s[o] = i >= 120 && u.length >= 120 ? new ws(o && u) : void 0;
		}
		u = e[0];
		var d = -1, f = s[0];
		t: for (; ++d < i && l.length < c;) {
			var p = u[d], m = p;
			if (p = p === 0 ? 0 : p, !(f ? Es(f, m) : r(l, m, n))) {
				for (o = a; --o;) {
					var h = s[o];
					if (!(h ? Es(h, m) : r(e[o], m, n))) continue t;
				}
				f && f.push(m), l.push(p);
			}
		}
		return l;
	}(t) : [];
});
function _c(e, t) {
	return e < t;
}
function vc(e, t, n) {
	for (var r = -1, i = e.length; ++r < i;) {
		var a = e[r], o = t(a);
		if (o != null && (s === void 0 ? o == o && !wi(o) : n(o, s))) var s = o, c = a;
	}
	return c;
}
function yc(e, t) {
	return e && e.length ? vc(e, cc(t), pc) : void 0;
}
function bc(e, t) {
	for (var n, r = -1, i = e.length; ++r < i;) {
		var a = t(e[r]);
		a !== void 0 && (n = n === void 0 ? a : n + a);
	}
	return n;
}
function xc(e, t) {
	return function(e, t) {
		var n = e == null ? 0 : e.length;
		return n ? bc(e, t) / n : NaN;
	}(e, cc(t));
}
function Sc(e, t) {
	if (e !== t) {
		var n = e !== void 0, r = e === null, i = e == e, a = wi(e), o = t !== void 0, s = t === null, c = t == t, l = wi(t);
		if (!s && !l && !a && e > t || a && o && c && !s && !l || r && o && c || !n && c || !i) return 1;
		if (!r && !a && !l && e < t || l && n && i && !r && !a || s && n && i || !o && i || !c) return -1;
	}
	return 0;
}
function Cc(e, t, n, r) {
	return e == null ? [] : (Y(t) || (t = t == null ? [] : [t]), Y(n = r ? void 0 : n) || (n = n == null ? [] : [n]), function(e, t, n) {
		t = t.length ? Ti(t, function(e) {
			return Y(e) ? function(t) {
				return co(t, e.length === 1 ? e[0] : e);
			} : e;
		}) : [ji];
		var r = -1;
		return t = Ti(t, Ta(cc)), function(e, t) {
			var r = e.length;
			for (e.sort(function(e, t) {
				return function(e, t, n) {
					for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
						var c = Sc(i[r], a[r]);
						if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
					}
					return e.index - t.index;
				}(e, t, n);
			}); r--;) e[r] = e[r].value;
			return e;
		}(fc(e, function(e, n, i) {
			return {
				criteria: Ti(t, function(t) {
					return t(e);
				}),
				index: ++r,
				value: e
			};
		}));
	}(e, t, n));
}
function wc(e, t) {
	return e && e.length ? bc(e, cc(t)) : 0;
}
function Q(e) {
	if (this.words = [], e) {
		if (Symbol && Symbol.iterator && e[Symbol.iterator] !== void 0) {
			let t = e[Symbol.iterator](), n = t.next();
			for (; !n.done;) this.add(n.value), n = t.next();
		} else for (let t = 0; t < e.length; t++) this.add(e[t]);
	}
}
Q.fromWords = function(e) {
	let t = Object.create(Q.prototype);
	return t.words = e, t;
}, Q.prototype.add = function(e) {
	this.resize(e), this.words[e >>> 5] |= 1 << e;
}, Q.prototype.flip = function(e) {
	this.resize(e), this.words[e >>> 5] ^= 1 << e;
}, Q.prototype.clear = function() {
	this.words.length = 0;
}, Q.prototype.remove = function(e) {
	this.resize(e), this.words[e >>> 5] &= ~(1 << e);
}, Q.prototype.isEmpty = function(e) {
	let t = this.words.length;
	for (let e = 0; e < t; e++) if (this.words[e] !== 0) return !1;
	return !0;
}, Q.prototype.has = function(e) {
	return !!(this.words[e >>> 5] & 1 << e);
}, Q.prototype.checkedAdd = function(e) {
	this.resize(e);
	let t = this.words[e >>> 5], n = t | 1 << e;
	return this.words[e >>> 5] = n, (n ^ t) >>> e;
}, Q.prototype.trim = function(e) {
	let t = this.words.length;
	for (; t > 0 && this.words[t - 1] === 0;) t--;
	this.words.length = t;
}, Q.prototype.resize = function(e) {
	let t = e + 32 >>> 5;
	for (let e = this.words.length; e < t; e++) this.words[e] = 0;
}, Q.prototype.hammingWeight = function(e) {
	return 16843009 * ((e = (858993459 & (e -= e >>> 1 & 1431655765)) + (e >>> 2 & 858993459)) + (e >>> 4) & 252645135) >>> 24;
}, Q.prototype.hammingWeight4 = function(e, t, n, r) {
	return 16843009 * ((e = (e = (858993459 & (e -= e >>> 1 & 1431655765)) + (e >>> 2 & 858993459)) + (e >>> 4) & 252645135) + (t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) + (n = (n = (858993459 & (n -= n >>> 1 & 1431655765)) + (n >>> 2 & 858993459)) + (n >>> 4) & 252645135) + (r = (r = (858993459 & (r -= r >>> 1 & 1431655765)) + (r >>> 2 & 858993459)) + (r >>> 4) & 252645135)) >>> 24;
}, Q.prototype.size = function() {
	let e = 0, t = this.words.length, n = this.words;
	for (let r = 0; r < t; r++) e += this.hammingWeight(n[r]);
	return e;
}, Q.prototype.array = function() {
	let e = Array(this.size()), t = 0, n = this.words.length;
	for (let r = 0; r < n; ++r) {
		let n = this.words[r];
		for (; n != 0;) {
			let i = n & -n;
			e[t++] = (r << 5) + this.hammingWeight(i - 1 | 0), n ^= i;
		}
	}
	return e;
}, Q.prototype.forEach = function(e) {
	let t = this.words.length;
	for (let n = 0; n < t; ++n) {
		let t = this.words[n];
		for (; t != 0;) {
			let r = t & -t;
			e((n << 5) + this.hammingWeight(r - 1 | 0)), t ^= r;
		}
	}
}, Q.prototype[Symbol.iterator] = function() {
	let e = this.words.length, t = 0, n = this.words[t], r = this.hammingWeight, i = this.words;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			for (; t < e;) {
				if (n !== 0) {
					let e = n & -n, i = (t << 5) + r(e - 1 | 0);
					return n ^= e, {
						done: !1,
						value: i
					};
				}
				t++, t < e && (n = i[t]);
			}
			return {
				done: !0,
				value: void 0
			};
		}
	};
}, Q.prototype.clone = function() {
	let e = Object.create(Q.prototype);
	return e.words = this.words.slice(), e;
}, Q.prototype.intersects = function(e) {
	let t = Math.min(this.words.length, e.words.length);
	for (let n = 0; n < t; ++n) if ((this.words[n] & e.words[n]) != 0) return !0;
	return !1;
}, Q.prototype.intersection = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (; n + 7 < t; n += 8) this.words[n] &= e.words[n], this.words[n + 1] &= e.words[n + 1], this.words[n + 2] &= e.words[n + 2], this.words[n + 3] &= e.words[n + 3], this.words[n + 4] &= e.words[n + 4], this.words[n + 5] &= e.words[n + 5], this.words[n + 6] &= e.words[n + 6], this.words[n + 7] &= e.words[n + 7];
	for (; n < t; ++n) this.words[n] &= e.words[n];
	let r = this.words.length;
	for (n = t; n < r; ++n) this.words[n] = 0;
	return this;
}, Q.prototype.intersection_size = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (let r = 0; r < t; ++r) n += this.hammingWeight(this.words[r] & e.words[r]);
	return n;
}, Q.prototype.new_intersection = function(e) {
	let t = Object.create(Q.prototype), n = Math.min(this.words.length, e.words.length);
	t.words = Array(n);
	let r = 0;
	for (; r + 7 < n; r += 8) t.words[r] = this.words[r] & e.words[r], t.words[r + 1] = this.words[r + 1] & e.words[r + 1], t.words[r + 2] = this.words[r + 2] & e.words[r + 2], t.words[r + 3] = this.words[r + 3] & e.words[r + 3], t.words[r + 4] = this.words[r + 4] & e.words[r + 4], t.words[r + 5] = this.words[r + 5] & e.words[r + 5], t.words[r + 6] = this.words[r + 6] & e.words[r + 6], t.words[r + 7] = this.words[r + 7] & e.words[r + 7];
	for (; r < n; ++r) t.words[r] = this.words[r] & e.words[r];
	return t;
}, Q.prototype.equals = function(e) {
	let t = Math.min(this.words.length, e.words.length);
	for (let n = 0; n < t; ++n) if (this.words[n] != e.words[n]) return !1;
	if (this.words.length < e.words.length) {
		let t = e.words.length;
		for (let n = this.words.length; n < t; ++n) if (e.words[n] != 0) return !1;
	} else if (e.words.length < this.words.length) {
		let t = this.words.length;
		for (let n = e.words.length; n < t; ++n) if (this.words[n] != 0) return !1;
	}
	return !0;
}, Q.prototype.difference = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (; n + 7 < t; n += 8) this.words[n] &= ~e.words[n], this.words[n + 1] &= ~e.words[n + 1], this.words[n + 2] &= ~e.words[n + 2], this.words[n + 3] &= ~e.words[n + 3], this.words[n + 4] &= ~e.words[n + 4], this.words[n + 5] &= ~e.words[n + 5], this.words[n + 6] &= ~e.words[n + 6], this.words[n + 7] &= ~e.words[n + 7];
	for (; n < t; ++n) this.words[n] &= ~e.words[n];
	return this;
}, Q.prototype.new_difference = function(e) {
	return this.clone().difference(e);
}, Q.prototype.difference2 = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (; n + 7 < t; n += 8) e.words[n] = this.words[n] & ~e.words[n], e.words[n + 1] = this.words[n + 1] & ~e.words[n + 1], e.words[n + 2] = this.words[n + 2] & ~e.words[n + 2], e.words[n + 3] = this.words[n + 3] & ~e.words[n + 3], e.words[n + 4] = this.words[n + 4] & ~e.words[n + 4], e.words[n + 5] = this.words[n + 5] & ~e.words[n + 5], e.words[n + 6] = this.words[n + 6] & ~e.words[n + 6], e.words[n + 7] = this.words[n + 7] & ~e.words[n + 7];
	for (; n < t; ++n) e.words[n] = this.words[n] & ~e.words[n];
	for (n = this.words.length - 1; n >= t; --n) e.words[n] = this.words[n];
	return e.words.length = this.words.length, e;
}, Q.prototype.difference_size = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0, r = 0;
	for (; r < t; ++r) n += this.hammingWeight(this.words[r] & ~e.words[r]);
	let i = this.words.length;
	for (; r < i; ++r) n += this.hammingWeight(this.words[r]);
	return n;
}, Q.prototype.change = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (; n + 7 < t; n += 8) this.words[n] ^= e.words[n], this.words[n + 1] ^= e.words[n + 1], this.words[n + 2] ^= e.words[n + 2], this.words[n + 3] ^= e.words[n + 3], this.words[n + 4] ^= e.words[n + 4], this.words[n + 5] ^= e.words[n + 5], this.words[n + 6] ^= e.words[n + 6], this.words[n + 7] ^= e.words[n + 7];
	for (; n < t; ++n) this.words[n] ^= e.words[n];
	for (n = e.words.length - 1; n >= t; --n) this.words[n] = e.words[n];
	return this;
}, Q.prototype.new_change = function(e) {
	let t = Object.create(Q.prototype), n = Math.max(this.words.length, e.words.length);
	t.words = Array(n);
	let r = Math.min(this.words.length, e.words.length), i = 0;
	for (; i + 7 < r; i += 8) t.words[i] = this.words[i] ^ e.words[i], t.words[i + 1] = this.words[i + 1] ^ e.words[i + 1], t.words[i + 2] = this.words[i + 2] ^ e.words[i + 2], t.words[i + 3] = this.words[i + 3] ^ e.words[i + 3], t.words[i + 4] = this.words[i + 4] ^ e.words[i + 4], t.words[i + 5] = this.words[i + 5] ^ e.words[i + 5], t.words[i + 6] = this.words[i + 6] ^ e.words[i + 6], t.words[i + 7] = this.words[i + 7] ^ e.words[i + 7];
	for (; i < r; ++i) t.words[i] = this.words[i] ^ e.words[i];
	let a = this.words.length;
	for (i = r; i < a; ++i) t.words[i] = this.words[i];
	let o = e.words.length;
	for (i = r; i < o; ++i) t.words[i] = e.words[i];
	return t;
}, Q.prototype.change_size = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0, r = 0;
	for (; r < t; ++r) n += this.hammingWeight(this.words[r] ^ e.words[r]);
	let i = this.words.length > e.words.length ? this : e, a = i.words.length;
	for (; r < a; ++r) n += this.hammingWeight(i.words[r]);
	return n;
}, Q.prototype.toString = function() {
	return "{" + this.array().join(",") + "}";
}, Q.prototype.union = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (; n + 7 < t; n += 8) this.words[n] |= e.words[n], this.words[n + 1] |= e.words[n + 1], this.words[n + 2] |= e.words[n + 2], this.words[n + 3] |= e.words[n + 3], this.words[n + 4] |= e.words[n + 4], this.words[n + 5] |= e.words[n + 5], this.words[n + 6] |= e.words[n + 6], this.words[n + 7] |= e.words[n + 7];
	for (; n < t; ++n) this.words[n] |= e.words[n];
	if (this.words.length < e.words.length) {
		this.resize((e.words.length << 5) - 1);
		let n = e.words.length;
		for (let r = t; r < n; ++r) this.words[r] = e.words[r];
	}
	return this;
}, Q.prototype.new_union = function(e) {
	let t = Object.create(Q.prototype), n = Math.max(this.words.length, e.words.length);
	t.words = Array(n);
	let r = Math.min(this.words.length, e.words.length), i = 0;
	for (; i + 7 < r; i += 8) t.words[i] = this.words[i] | e.words[i], t.words[i + 1] = this.words[i + 1] | e.words[i + 1], t.words[i + 2] = this.words[i + 2] | e.words[i + 2], t.words[i + 3] = this.words[i + 3] | e.words[i + 3], t.words[i + 4] = this.words[i + 4] | e.words[i + 4], t.words[i + 5] = this.words[i + 5] | e.words[i + 5], t.words[i + 6] = this.words[i + 6] | e.words[i + 6], t.words[i + 7] = this.words[i + 7] | e.words[i + 7];
	for (; i < r; ++i) t.words[i] = this.words[i] | e.words[i];
	let a = this.words.length;
	for (i = r; i < a; ++i) t.words[i] = this.words[i];
	let o = e.words.length;
	for (i = r; i < o; ++i) t.words[i] = e.words[i];
	return t;
}, Q.prototype.union_size = function(e) {
	let t = Math.min(this.words.length, e.words.length), n = 0;
	for (let r = 0; r < t; ++r) n += this.hammingWeight(this.words[r] | e.words[r]);
	if (this.words.length < e.words.length) {
		let t = e.words.length;
		for (let r = this.words.length; r < t; ++r) n += this.hammingWeight(0 | e.words[r]);
	} else {
		let t = this.words.length;
		for (let r = e.words.length; r < t; ++r) n += this.hammingWeight(0 | this.words[r]);
	}
	return n;
};
var $ = Q, Tc = function(e, t) {
	if (!e || typeof e != "object") throw Error("Invalid facets_data provided.");
	if (!t || typeof t != "object") return null;
	let n = Object.entries(t).flatMap(([e, t]) => Array.isArray(t) ? t.map((t) => ({
		field: e,
		filter: t
	})) : []);
	return n.length === 0 ? null : n.reduce((t, { field: n, filter: r }) => {
		let i = e[n]?.[r] || new $([]);
		return t.new_union(i);
	}, new $([]));
}, Ec = function(e, t, n) {
	let r = 1;
	return i = e.bits_data_temp, a = (e, i) => {
		let a, o, s, c, l, u, d;
		n[i] && (a = n[i].order, o = n[i].sort, s = n[i].size, c = n[i].title, l = n[i].show_facet_stats || !1, u = !1 !== n[i].chosen_filters_on_top, d = n[i].hide_zero_doc_count || !1);
		let f, p, m, h = Object.entries(e).map((e) => {
			let n = [];
			t && t.filters && t.filters[i] && (n = t.filters[i]);
			let r = e[1].array().length, a = n.some((t) => String(t) === String(e[0]));
			if (!d || r !== 0 || a) return {
				key: e[0],
				doc_count: r,
				selected: a
			};
		}).filter(Boolean);
		if (Y(o) ? (f = o || ["key"], p = a || ["asc"]) : (o === "term" || o === "key" ? (f = ["key"], p = [a || "asc"]) : (f = ["doc_count", "key"], p = [a || "desc", "asc"]), u && (f.unshift("selected"), p.unshift("desc"))), h = Cc(h, f, p), h = h.slice(0, s || 10), l) {
			let t = [];
			Object.entries(e).forEach((e) => {
				if (isNaN(e[0])) throw Error("You cant use chars to calculate the facet_stats.");
				e[1].array().length > 0 && e[1].forEach(() => {
					t.push(parseInt(e[0]));
				});
			}), m = {
				min: (g = t, g && g.length ? vc(g, cc(void 0), _c) : void 0),
				max: yc(t),
				avg: xc(t),
				sum: wc(t)
			};
		}
		var g, _;
		return ci({
			name: i,
			title: c || (_ = i, _.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(e) {
				return e.toUpperCase();
			})),
			position: r++,
			buckets: h
		}, l && { facet_stats: m });
	}, o = {}, a = cc(a), lc(i, function(e, t, n) {
		aa(o, t, a(e, t, n));
	}), o;
	var i, a, o;
};
function Dc(e, t) {
	var n = [];
	return e.forEach(function(e) {
		t.forEach(function(t) {
			n.push(e.concat(t));
		});
	}), n;
}
function Oc(e) {
	return !!~e.search(/\(|\)/);
}
function kc(e, t) {
	for (var n = t.split(" " + e + " "), r = [], i = [], a = 0; a < n.length; a++) if (Oc(n[a]) || i.length > 0) {
		i.push(n[a]);
		var o = "" + i;
		(o.match(/\(/g) || []).length === (o.match(/\)/g) || []).length && (r.push(i.join(" " + e + " ")), i = []);
	} else r.push(n[a]);
	return r;
}
var Ac = function e(t) {
	return function(e) {
		for (var t = e[0], n = 1; n < e.length; n++) t = t.concat(e[n]);
		return t;
	}(kc("OR", (n = t = function(e) {
		if (e.charAt(0) === "(") {
			for (var t = 0, n = 0; n < e.length; n++) if (e.charAt(n) === "(" ? t++ : e.charAt(n) === ")" && t--, t === 0) return n === e.length - 1 ? e.substring(1, e.length - 1) : e;
		}
		return e;
	}(t), t = n.replace(/[\s]+/g, " "))).map(function(t) {
		for (var n = kc("AND", t), r = [], i = [], a = 0; a < n.length; a++) Oc(n[a]) ? r.push(e(n[a])) : i.push(n[a]);
		return r.push([i]), function(e) {
			for (var t = [[]], n = 0; n < e.length; n++) t = Dc(t, e[n]);
			return t;
		}(r);
	}));
	var n;
}, jc = (e) => typeof e == "boolean" ? e ? "AND" : "OR" : typeof e == "string" && e.toUpperCase() === "OR" ? "OR" : "AND", Mc = function(e, t) {
	let n = t && t.aggregations || {}, r = Object.create(null), i = !1, a = ci({}, n);
	return Object.keys(e || {}).forEach((t) => {
		let o = n[t];
		if (!o) return;
		let s = e[t]?.selected;
		Array.isArray(s) && s.length && (r[t] = s, i = !0);
		let c = e[t]?.options;
		if (c) {
			let e = {};
			c.conjunction !== void 0 && (e.conjunction = jc(c.conjunction) === "AND"), typeof c.size == "number" && (e.size = c.size), c.sortBy === "key" ? (e.sort = "key", e.order = c.sortDir || o.order) : c.sortBy === "count" ? (e.sort = void 0, e.order = c.sortDir || o.order) : c.sortDir && (e.order = c.sortDir), typeof c.hideZero == "boolean" && (e.hide_zero_doc_count = c.hideZero), typeof c.chosenOnTop == "boolean" && (e.chosen_filters_on_top = c.chosenOnTop), typeof c.showStats == "boolean" && (e.show_facet_stats = c.showStats), Object.keys(e).length && (a[t] = ci({}, n[t], e));
		}
	}), {
		hasFilters: i,
		filters: i ? r : void 0,
		aggregations: a
	};
};
function Nc(e, t, n, r, i) {
	let a = (e) => typeof e == "number" ? e : parseInt(e, 10), o = a((t ||= Object.create(null)).per_page);
	(!Number.isFinite(o) || o < 0) && (o = 12);
	let s = a(t.page);
	(!Number.isFinite(s) || s < 1) && (s = 1), o === 0 && (s = 1);
	let c = t.is_all_filtered_items || !1;
	if (!1 === n.native_search_enabled && t.query) throw Error("The \"query\" option is not working once native search is disabled");
	let l = 0, u = (/* @__PURE__ */ new Date()).getTime(), d, f, p, m = i.bits_ids();
	if (t._ids) d = new $(t._ids), f = t._ids;
	else if (t.ids) f = i.internal_ids_from_ids_map(t.ids), t.filter && (f = e.filter((e) => f.includes(e._id)).filter(t.filter).map((e) => e._id)), d = new $(f);
	else if (r && (t.query || t.filter)) {
		let e = (/* @__PURE__ */ new Date()).getTime();
		f = r.search(t.query, t.filter), l = (/* @__PURE__ */ new Date()).getTime() - e, d = new $(f);
	}
	let h = (/* @__PURE__ */ new Date()).getTime(), g = i.search(t, { query_ids: d });
	if (h = (/* @__PURE__ */ new Date()).getTime() - h, d && (m = d), g.ids && (m = m.new_intersection(g.ids)), g.not_ids && (m = m.new_difference(g.not_ids)), o === 0 && !c && !t.sort && !f) {
		let e = m.array(), r = (/* @__PURE__ */ new Date()).getTime() - u;
		return {
			pagination: {
				per_page: o,
				page: s,
				total: e.length
			},
			timings: {
				total: r,
				facets: h,
				search: l,
				sorting: 0
			},
			data: {
				items: [],
				allFilteredItems: null,
				aggregations: Ec(g, t, n.aggregations)
			}
		};
	}
	let _ = !1, v = (/* @__PURE__ */ new Date()).getTime(), y, b = 0, x = m.array();
	t.sort ? (y = x.map((e) => i.get_item(e)), y = function(e, t, n) {
		if (n && n[t] && (t = n[t]), t.field) {
			let n = Array.isArray(t.field) ? t.field : [t.field], r = Array.isArray(t.order) ? t.order : [t.order || "asc"], i = [], a = [];
			return n.forEach((e, t) => {
				i.push((t) => +(t[e] == null)), a.push("asc"), i.push(e), a.push(r[t] || "asc");
			}), Cc(e, i, a);
		}
		return e;
	}(y, t.sort, n.sortings)) : f ? (x = f.filter((e) => m.has(e)), y = x.slice((s - 1) * o, s * o).map((e) => i.get_item(e)), _ = !0) : y = x.map((e) => i.get_item(e)), _ || (p = c ? y : null, y = y.slice((s - 1) * o, s * o)), b = (/* @__PURE__ */ new Date()).getTime() - v;
	let S = (/* @__PURE__ */ new Date()).getTime() - u;
	return {
		pagination: {
			per_page: o,
			page: s,
			total: x.length
		},
		timings: {
			total: S,
			facets: h,
			search: l,
			sorting: b
		},
		data: {
			items: y,
			allFilteredItems: p,
			aggregations: Ec(g, t, n.aggregations)
		}
	};
}
var Pc = function(e) {
	var t = { exports: {} };
	return function(e, t) {
		(function() {
			var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k = function(e) {
				var t = new k.Index();
				return t.pipeline.add(k.trimmer, k.stopWordFilter, k.stemmer), e && e.call(t, t), t;
			};
			k.version = "1.0.0", k.utils = {}, k.utils.warn = function(e) {
				return function(t) {
					e.console && console.warn && console.warn(t);
				};
			}(this), k.utils.asString = function(e) {
				return e == null ? "" : e.toString();
			}, k.EventEmitter = function() {
				this.events = {};
			}, k.EventEmitter.prototype.addListener = function() {
				var e = Array.prototype.slice.call(arguments), t = e.pop(), n = e;
				if (typeof t != "function") throw TypeError("last argument must be a function");
				n.forEach(function(e) {
					this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
				}, this);
			}, k.EventEmitter.prototype.removeListener = function(e, t) {
				if (this.hasHandler(e)) {
					var n = this.events[e].indexOf(t);
					this.events[e].splice(n, 1), this.events[e].length || delete this.events[e];
				}
			}, k.EventEmitter.prototype.emit = function(e) {
				if (this.hasHandler(e)) {
					var t = Array.prototype.slice.call(arguments, 1);
					this.events[e].forEach(function(e) {
						e.apply(void 0, t);
					});
				}
			}, k.EventEmitter.prototype.hasHandler = function(e) {
				return e in this.events;
			}, k.tokenizer = function(e) {
				return arguments.length && e != null && e != null ? Array.isArray(e) ? e.map(function(e) {
					return k.utils.asString(e).toLowerCase();
				}) : e.toString().trim().toLowerCase().split(k.tokenizer.separator) : [];
			}, k.tokenizer.separator = /[\s\-]+/, k.tokenizer.load = function(e) {
				var t = this.registeredFunctions[e];
				if (!t) throw Error("Cannot load un-registered function: " + e);
				return t;
			}, k.tokenizer.label = "default", k.tokenizer.registeredFunctions = { default: k.tokenizer }, k.tokenizer.registerFunction = function(e, t) {
				t in this.registeredFunctions && k.utils.warn("Overwriting existing tokenizer: " + t), e.label = t, this.registeredFunctions[t] = e;
			}, k.Pipeline = function() {
				this._stack = [];
			}, k.Pipeline.registeredFunctions = {}, k.Pipeline.registerFunction = function(e, t) {
				t in this.registeredFunctions && k.utils.warn("Overwriting existing registered function: " + t), e.label = t, k.Pipeline.registeredFunctions[e.label] = e;
			}, k.Pipeline.warnIfFunctionNotRegistered = function(e) {
				e.label && e.label in this.registeredFunctions || k.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e);
			}, k.Pipeline.load = function(e) {
				var t = new k.Pipeline();
				return e.forEach(function(e) {
					var n = k.Pipeline.registeredFunctions[e];
					if (!n) throw Error("Cannot load un-registered function: " + e);
					t.add(n);
				}), t;
			}, k.Pipeline.prototype.add = function() {
				Array.prototype.slice.call(arguments).forEach(function(e) {
					k.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e);
				}, this);
			}, k.Pipeline.prototype.after = function(e, t) {
				k.Pipeline.warnIfFunctionNotRegistered(t);
				var n = this._stack.indexOf(e);
				if (n == -1) throw Error("Cannot find existingFn");
				this._stack.splice(n += 1, 0, t);
			}, k.Pipeline.prototype.before = function(e, t) {
				k.Pipeline.warnIfFunctionNotRegistered(t);
				var n = this._stack.indexOf(e);
				if (n == -1) throw Error("Cannot find existingFn");
				this._stack.splice(n, 0, t);
			}, k.Pipeline.prototype.remove = function(e) {
				var t = this._stack.indexOf(e);
				t != -1 && this._stack.splice(t, 1);
			}, k.Pipeline.prototype.run = function(e) {
				for (var t = [], n = e.length, r = this._stack.length, i = 0; i < n; i++) {
					for (var a = e[i], o = 0; o < r && (a = this._stack[o](a, i, e)) !== void 0 && a !== ""; o++);
					a !== void 0 && a !== "" && t.push(a);
				}
				return t;
			}, k.Pipeline.prototype.reset = function() {
				this._stack = [];
			}, k.Pipeline.prototype.toJSON = function() {
				return this._stack.map(function(e) {
					return k.Pipeline.warnIfFunctionNotRegistered(e), e.label;
				});
			}, k.Vector = function() {
				this._magnitude = null, this.list = void 0, this.length = 0;
			}, k.Vector.Node = function(e, t, n) {
				this.idx = e, this.val = t, this.next = n;
			}, k.Vector.prototype.insert = function(e, t) {
				this._magnitude = void 0;
				var n = this.list;
				if (!n || e < n.idx) return this.list = new k.Vector.Node(e, t, n), this.length++;
				for (var r = n, i = n.next; i != null;) {
					if (e < i.idx) return r.next = new k.Vector.Node(e, t, i), this.length++;
					r = i, i = i.next;
				}
				return r.next = new k.Vector.Node(e, t, i), this.length++;
			}, k.Vector.prototype.magnitude = function() {
				if (this._magnitude) return this._magnitude;
				for (var e, t = this.list, n = 0; t;) n += (e = t.val) * e, t = t.next;
				return this._magnitude = Math.sqrt(n);
			}, k.Vector.prototype.dot = function(e) {
				for (var t = this.list, n = e.list, r = 0; t && n;) t.idx < n.idx ? t = t.next : (t.idx > n.idx || (r += t.val * n.val, t = t.next), n = n.next);
				return r;
			}, k.Vector.prototype.similarity = function(e) {
				return this.dot(e) / (this.magnitude() * e.magnitude());
			}, k.SortedSet = function() {
				this.length = 0, this.elements = [];
			}, k.SortedSet.load = function(e) {
				var t = new this();
				return t.elements = e, t.length = e.length, t;
			}, k.SortedSet.prototype.add = function() {
				for (var e = 0, t; e < arguments.length; e++) ~this.indexOf(t = arguments[e]) || this.elements.splice(this.locationFor(t), 0, t);
				this.length = this.elements.length;
			}, k.SortedSet.prototype.toArray = function() {
				return this.elements.slice();
			}, k.SortedSet.prototype.map = function(e, t) {
				return this.elements.map(e, t);
			}, k.SortedSet.prototype.forEach = function(e, t) {
				return this.elements.forEach(e, t);
			}, k.SortedSet.prototype.indexOf = function(e) {
				for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), a = this.elements[i]; r > 1;) {
					if (a === e) return i;
					a < e && (t = i), a > e && (n = i), r = n - t, i = t + Math.floor(r / 2), a = this.elements[i];
				}
				return a === e ? i : -1;
			}, k.SortedSet.prototype.locationFor = function(e) {
				for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), a = this.elements[i]; r > 1;) a < e && (t = i), a > e && (n = i), r = n - t, i = t + Math.floor(r / 2), a = this.elements[i];
				return a > e ? i : a < e ? i + 1 : void 0;
			}, k.SortedSet.prototype.intersect = function(e) {
				for (var t = new k.SortedSet(), n = 0, r = 0, i = this.length, a = e.length, o = this.elements, s = e.elements; !(n > i - 1 || r > a - 1);) o[n] === s[r] ? (t.add(o[n]), n++, r++) : o[n] < s[r] ? n++ : o[n] > s[r] && r++;
				return t;
			}, k.SortedSet.prototype.clone = function() {
				var e = new k.SortedSet();
				return e.elements = this.toArray(), e.length = e.elements.length, e;
			}, k.SortedSet.prototype.union = function(e) {
				var t, n, r;
				this.length >= e.length ? (t = this, n = e) : (t = e, n = this), r = t.clone();
				for (var i = 0, a = n.toArray(); i < a.length; i++) r.add(a[i]);
				return r;
			}, k.SortedSet.prototype.toJSON = function() {
				return this.toArray();
			}, k.Index = function() {
				this._fields = [], this._ref = "id", this.pipeline = new k.Pipeline(), this.documentStore = new k.Store(), this.tokenStore = new k.TokenStore(), this.corpusTokens = new k.SortedSet(), this.eventEmitter = new k.EventEmitter(), this.tokenizerFn = k.tokenizer, this._idfCache = {}, this.on("add", "remove", "update", function() {
					this._idfCache = {};
				}.bind(this));
			}, k.Index.prototype.on = function() {
				var e = Array.prototype.slice.call(arguments);
				return this.eventEmitter.addListener.apply(this.eventEmitter, e);
			}, k.Index.prototype.off = function(e, t) {
				return this.eventEmitter.removeListener(e, t);
			}, k.Index.load = function(e) {
				e.version !== k.version && k.utils.warn("version mismatch: current " + k.version + " importing " + e.version);
				var t = new this();
				return t._fields = e.fields, t._ref = e.ref, t.tokenizer(k.tokenizer.load(e.tokenizer)), t.documentStore = k.Store.load(e.documentStore), t.tokenStore = k.TokenStore.load(e.tokenStore), t.corpusTokens = k.SortedSet.load(e.corpusTokens), t.pipeline = k.Pipeline.load(e.pipeline), t;
			}, k.Index.prototype.field = function(e, t) {
				return this._fields.push({
					name: e,
					boost: (t ||= {}).boost || 1
				}), this;
			}, k.Index.prototype.ref = function(e) {
				return this._ref = e, this;
			}, k.Index.prototype.tokenizer = function(e) {
				return e.label && e.label in k.tokenizer.registeredFunctions || k.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"), this.tokenizerFn = e, this;
			}, k.Index.prototype.add = function(e, t) {
				var n = {}, r = new k.SortedSet(), i = e[this._ref];
				t = t === void 0 || t, this._fields.forEach(function(t) {
					var i = this.pipeline.run(this.tokenizerFn(e[t.name]));
					n[t.name] = i;
					for (var a = 0; a < i.length; a++) {
						var o = i[a];
						r.add(o), this.corpusTokens.add(o);
					}
				}, this), this.documentStore.set(i, r);
				for (var a = 0; a < r.length; a++) {
					for (var o = r.elements[a], s = 0, c = 0; c < this._fields.length; c++) {
						var l = this._fields[c], u = n[l.name], d = u.length;
						if (d) {
							for (var f = 0, p = 0; p < d; p++) u[p] === o && f++;
							s += f / d * l.boost;
						}
					}
					this.tokenStore.add(o, {
						ref: i,
						tf: s
					});
				}
				t && this.eventEmitter.emit("add", e, this);
			}, k.Index.prototype.remove = function(e, t) {
				var n = e[this._ref];
				if (t = t === void 0 || t, this.documentStore.has(n)) {
					var r = this.documentStore.get(n);
					this.documentStore.remove(n), r.forEach(function(e) {
						this.tokenStore.remove(e, n);
					}, this), t && this.eventEmitter.emit("remove", e, this);
				}
			}, k.Index.prototype.update = function(e, t) {
				t = t === void 0 || t, this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this);
			}, k.Index.prototype.idf = function(e) {
				var t = "@" + e;
				if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
				var n = this.tokenStore.count(e), r = 1;
				return n > 0 && (r = 1 + Math.log(this.documentStore.length / n)), this._idfCache[t] = r;
			}, k.Index.prototype.search = function(e) {
				var t = this.pipeline.run(this.tokenizerFn(e)), n = new k.Vector(), r = [], i = this._fields.reduce(function(e, t) {
					return e + t.boost;
				}, 0);
				return t.some(function(e) {
					return this.tokenStore.has(e);
				}, this) ? (t.forEach(function(e, t, a) {
					var o = 1 / a.length * this._fields.length * i, s = this, c = this.tokenStore.expand(e).reduce(function(t, r) {
						var i = s.corpusTokens.indexOf(r), a = s.idf(r), c = 1, l = new k.SortedSet();
						if (r !== e) {
							var u = Math.max(3, r.length - e.length);
							c = 1 / Math.log(u);
						}
						i > -1 && n.insert(i, o * a * c);
						for (var d = s.tokenStore.get(r), f = Object.keys(d), p = f.length, m = 0; m < p; m++) l.add(d[f[m]].ref);
						return t.union(l);
					}, new k.SortedSet());
					r.push(c);
				}, this), r.reduce(function(e, t) {
					return e.intersect(t);
				}).map(function(e) {
					return {
						ref: e,
						score: n.similarity(this.documentVector(e))
					};
				}, this).sort(function(e, t) {
					return t.score - e.score;
				})) : [];
			}, k.Index.prototype.documentVector = function(e) {
				for (var t = this.documentStore.get(e), n = t.length, r = new k.Vector(), i = 0; i < n; i++) {
					var a = t.elements[i], o = this.tokenStore.get(a)[e].tf, s = this.idf(a);
					r.insert(this.corpusTokens.indexOf(a), o * s);
				}
				return r;
			}, k.Index.prototype.toJSON = function() {
				return {
					version: k.version,
					fields: this._fields,
					ref: this._ref,
					tokenizer: this.tokenizerFn.label,
					documentStore: this.documentStore.toJSON(),
					tokenStore: this.tokenStore.toJSON(),
					corpusTokens: this.corpusTokens.toJSON(),
					pipeline: this.pipeline.toJSON()
				};
			}, k.Index.prototype.use = function(e) {
				var t = Array.prototype.slice.call(arguments, 1);
				t.unshift(this), e.apply(this, t);
			}, k.Store = function() {
				this.store = {}, this.length = 0;
			}, k.Store.load = function(e) {
				var t = new this();
				return t.length = e.length, t.store = Object.keys(e.store).reduce(function(t, n) {
					return t[n] = k.SortedSet.load(e.store[n]), t;
				}, {}), t;
			}, k.Store.prototype.set = function(e, t) {
				this.has(e) || this.length++, this.store[e] = t;
			}, k.Store.prototype.get = function(e) {
				return this.store[e];
			}, k.Store.prototype.has = function(e) {
				return e in this.store;
			}, k.Store.prototype.remove = function(e) {
				this.has(e) && (delete this.store[e], this.length--);
			}, k.Store.prototype.toJSON = function() {
				return {
					store: this.store,
					length: this.length
				};
			}, k.stemmer = (t = {
				ational: "ate",
				tional: "tion",
				enci: "ence",
				anci: "ance",
				izer: "ize",
				bli: "ble",
				alli: "al",
				entli: "ent",
				eli: "e",
				ousli: "ous",
				ization: "ize",
				ation: "ate",
				ator: "ate",
				alism: "al",
				iveness: "ive",
				fulness: "ful",
				ousness: "ous",
				aliti: "al",
				iviti: "ive",
				biliti: "ble",
				logi: "log"
			}, n = {
				icate: "ic",
				ative: "",
				alize: "al",
				iciti: "ic",
				ical: "ic",
				ful: "",
				ness: ""
			}, o = "^(" + (i = "[^aeiou][^aeiouy]*") + ")?" + (a = (r = "[aeiouy]") + "[aeiou]*") + i + "(" + a + ")?$", s = "^(" + i + ")?" + a + i + a + i, c = "^(" + i + ")?" + r, l = RegExp("^(" + i + ")?" + a + i), u = new RegExp(s), d = new RegExp(o), f = new RegExp(c), p = /^(.+?)(ss|i)es$/, m = /^(.+?)([^s])s$/, h = /^(.+?)eed$/, g = /^(.+?)(ed|ing)$/, _ = /.$/, v = /(at|bl|iz)$/, y = /* @__PURE__ */ RegExp("([^aeiouylsz])\\1$"), b = RegExp("^" + i + r + "[^aeiouwxy]$"), x = /^(.+?[^aeiou])y$/, S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, w = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, T = /^(.+?)(s|t)(ion)$/, E = /^(.+?)e$/, D = /ll$/, O = RegExp("^" + i + r + "[^aeiouwxy]$"), function(e) {
				var r, i, a, o, s, c, k;
				if (e.length < 3) return e;
				if ((a = e.substr(0, 1)) == "y" && (e = a.toUpperCase() + e.substr(1)), s = m, (o = p).test(e) ? e = e.replace(o, "$1$2") : s.test(e) && (e = e.replace(s, "$1$2")), s = g, (o = h).test(e)) {
					var A = o.exec(e);
					(o = l).test(A[1]) && (e = e.replace(o = _, ""));
				} else s.test(e) && (A = s.exec(e), (s = f).test(r = A[1]) && (c = y, k = b, (s = v).test(e = r) ? e += "e" : c.test(e) ? e = e.replace(o = _, "") : k.test(e) && (e += "e")));
				return (o = x).test(e) && (e = (r = (A = o.exec(e))[1]) + "i"), (o = S).test(e) && (i = (A = o.exec(e))[2], (o = l).test(r = A[1]) && (e = r + t[i])), (o = C).test(e) && (i = (A = o.exec(e))[2], (o = l).test(r = A[1]) && (e = r + n[i])), s = T, (o = w).test(e) ? (A = o.exec(e), (o = u).test(r = A[1]) && (e = r)) : s.test(e) && (A = s.exec(e), (s = u).test(r = A[1] + A[2]) && (e = r)), (o = E).test(e) && (A = o.exec(e), s = d, c = O, ((o = u).test(r = A[1]) || s.test(r) && !c.test(r)) && (e = r)), s = u, (o = D).test(e) && s.test(e) && (e = e.replace(o = _, "")), a == "y" && (e = a.toLowerCase() + e.substr(1)), e;
			}), k.Pipeline.registerFunction(k.stemmer, "stemmer"), k.generateStopWordFilter = function(e) {
				var t = e.reduce(function(e, t) {
					return e[t] = t, e;
				}, {});
				return function(e) {
					if (e && t[e] !== e) return e;
				};
			}, k.stopWordFilter = k.generateStopWordFilter(/* @__PURE__ */ "a.able.about.across.after.all.almost.also.am.among.an.and.any.are.as.at.be.because.been.but.by.can.cannot.could.dear.did.do.does.either.else.ever.every.for.from.get.got.had.has.have.he.her.hers.him.his.how.however.i.if.in.into.is.it.its.just.least.let.like.likely.may.me.might.most.must.my.neither.no.nor.not.of.off.often.on.only.or.other.our.own.rather.said.say.says.she.should.since.so.some.than.that.the.their.them.then.there.these.they.this.tis.to.too.twas.us.wants.was.we.were.what.when.where.which.while.who.whom.why.will.with.would.yet.you.your".split(".")), k.Pipeline.registerFunction(k.stopWordFilter, "stopWordFilter"), k.trimmer = function(e) {
				return e.replace(/^\W+/, "").replace(/\W+$/, "");
			}, k.Pipeline.registerFunction(k.trimmer, "trimmer"), k.TokenStore = function() {
				this.root = { docs: {} }, this.length = 0;
			}, k.TokenStore.load = function(e) {
				var t = new this();
				return t.root = e.root, t.length = e.length, t;
			}, k.TokenStore.prototype.add = function(e, t, n) {
				n ||= this.root;
				var r = e.charAt(0), i = e.slice(1);
				return r in n || (n[r] = { docs: {} }), i.length === 0 ? (n[r].docs[t.ref] = t, void (this.length += 1)) : this.add(i, t, n[r]);
			}, k.TokenStore.prototype.has = function(e) {
				if (!e) return !1;
				for (var t = this.root, n = 0; n < e.length; n++) {
					if (!t[e.charAt(n)]) return !1;
					t = t[e.charAt(n)];
				}
				return !0;
			}, k.TokenStore.prototype.getNode = function(e) {
				if (!e) return {};
				for (var t = this.root, n = 0; n < e.length; n++) {
					if (!t[e.charAt(n)]) return {};
					t = t[e.charAt(n)];
				}
				return t;
			}, k.TokenStore.prototype.get = function(e, t) {
				return this.getNode(e, t).docs || {};
			}, k.TokenStore.prototype.count = function(e, t) {
				return Object.keys(this.get(e, t)).length;
			}, k.TokenStore.prototype.remove = function(e, t) {
				if (e) {
					for (var n = this.root, r = 0; r < e.length; r++) {
						if (!(e.charAt(r) in n)) return;
						n = n[e.charAt(r)];
					}
					delete n.docs[t];
				}
			}, k.TokenStore.prototype.expand = function(e, t) {
				var n = this.getNode(e);
				return t ||= [], Object.keys(n.docs || {}).length && t.push(e), Object.keys(n).forEach(function(n) {
					n !== "docs" && t.concat(this.expand(e + n, t));
				}, this), t;
			}, k.TokenStore.prototype.toJSON = function() {
				return {
					root: this.root,
					length: this.length
				};
			}, e.exports = k;
		})();
	}(t), t.exports;
}(), Fc = class {
	constructor(e, t) {
		if (this.store = /* @__PURE__ */ new Map(), t != null && t.fulltextSnapshot) {
			let e = JSON.parse(JSON.stringify(t.fulltextSnapshot.index));
			this.idx = Pc.Index.load(e), this.store = new Map(t.fulltextSnapshot.store);
			return;
		}
		this.idx = Pc(function() {
			this.field("name", { boost: 10 }), (t?.searchableFields || []).forEach((e) => this.field(e)), this.ref("_id"), t != null && t.isExactSearch && (this.pipeline.remove(Pc.stemmer), this.pipeline.remove(Pc.stopWordFilter)), t != null && t.removeStopWordFilter && this.pipeline.remove(Pc.stopWordFilter);
		});
		let n = 1;
		(e || []).map((e) => {
			e._id ??= n, ++n, this.idx.add(e), this.store.set(e._id, e);
		});
	}
	serialize() {
		return {
			index: JSON.parse(JSON.stringify(this.idx)),
			store: [...this.store.entries()]
		};
	}
	search_full(e, t) {
		return this.search(e, t).map((e) => this.store.get(e));
	}
	search(e, t) {
		return t instanceof Function ? (e ? this.idx.search(e).map((e) => this.store.get(e.ref)) : [...this.store.values()]).filter(t).map((e) => e._id) : e ? this.idx.search(e).map((e) => e.ref) : [...this.store.keys()];
	}
}, Ic = class {
	constructor(e, t) {
		(t ||= Object.create(null)).aggregations = t.aggregations || Object.create(null), this._items = e, this.config = t.aggregations;
		let n = t.custom_id_field || "id";
		this.facets = t.facetsSnapshot ? this._loadFromSnapshot(t.facetsSnapshot) : function(e = [], t = []) {
			let n = {
				data: Object.create(null),
				bits_data: Object.create(null),
				bits_data_temp: Object.create(null)
			}, r = 1;
			return t.forEach((e) => {
				n.data[e] = Object.create(null);
			}), e.forEach((e) => {
				e._id ||= r++;
			}), e.forEach((e) => {
				t.forEach((t) => {
					let r = e[t];
					if (Array.isArray(r)) r.forEach((r) => {
						n.data[t][r] || (n.data[t][r] = []), n.data[t][r].push(e._id);
					});
					else if (r !== void 0) {
						let i = r;
						n.data[t][i] || (n.data[t][i] = []), n.data[t][i].push(e._id);
					}
				});
			}), Object.keys(n.data).forEach((e) => {
				n.bits_data[e] = Object.create(null), n.bits_data_temp[e] = Object.create(null);
				let t = n.data[e];
				Object.keys(t).forEach((r) => {
					let i = t[r].sort((e, t) => e - t);
					n.bits_data[e][r] = new $(i), n.data[e][r] = i;
				});
			}), n;
		}(e, La(t.aggregations)), this._items_map = Object.create(null), this._ids = [];
		let r = 1;
		var i;
		(Y(i = e) ? Ti : fc)(i, cc((e) => {
			var i, a;
			if ((i = t.facetsSnapshot) != null && i.idsMap && e[n]) {
				let r = t.facetsSnapshot.idsMap[e[n]];
				r !== void 0 && (e._id = r);
			} else (a = t.facetsSnapshot) != null && a.ids && t.facetsSnapshot.ids.length >= r ? e._id = t.facetsSnapshot.ids[r - 1] : e._id ??= r;
			this._ids.push(e._id), this._items_map[e._id] = e, ++r;
		})), this.ids_map = Object.create(null), e && e.forEach((e) => {
			e[n] && e._id && (this.ids_map[e[n]] = e._id);
		}), this._bits_ids = new $(this._ids);
	}
	items() {
		return this._items;
	}
	bits_ids(e) {
		return e ? new $(e) : this._bits_ids;
	}
	internal_ids_from_ids_map(e) {
		return e.map((e) => this.ids_map[e]);
	}
	index() {
		return this.facets;
	}
	serialize() {
		var e;
		let t = Object.create(null);
		if ((e = this.facets) != null && e.bits_data) for (let e in this.facets.bits_data) {
			t[e] = Object.create(null);
			for (let n in this.facets.bits_data[e]) t[e][n] = this.facets.bits_data[e][n].array();
		}
		return {
			bitsData: t,
			ids: this._ids,
			idsMap: this.ids_map
		};
	}
	get_item(e) {
		return this._items_map[e];
	}
	search(e, t = {}) {
		let n = this.config, r = {};
		r.not_ids = Tc(this.facets.bits_data, e.not_filters);
		let i = function(e, t) {
			let n = [];
			for (let r in e.filters) {
				let i = e.filters[r];
				if (i && i.length) {
					if (!1 !== t[r]?.conjunction) i.forEach((e) => {
						n.push([r, e]);
					});
					else {
						let e = i.map((e) => [r, e]);
						n.push(e);
					}
				}
			}
			for (let t in e.not_filters) {
				let r = e.not_filters[t];
				r && r.length && r.forEach((e) => {
					n.push([
						t,
						"-",
						e
					]);
				});
			}
			return n;
		}(e, n), a = function(e, t = []) {
			let n = Cs(e);
			n.bits_data_temp = {};
			for (let e in n.bits_data) {
				n.bits_data_temp[e] = {};
				for (let t in n.bits_data[e]) n.bits_data_temp[e][t] = n.bits_data[e][t];
			}
			let r;
			n.is_temp_copied = !0;
			let i = function(e, t) {
				let n = {};
				return t.forEach((t) => {
					if (Array.isArray(t[0])) {
						let r = new $(), i = /* @__PURE__ */ new Set();
						t.forEach((t) => {
							let [n, a] = t;
							i.add(n);
							let o = e.bits_data[n]?.[a] || new $();
							r = r.new_union(o);
						}), i.forEach((e) => {
							n[e] = r;
						});
					}
				}), n;
			}(e, t);
			if (t.forEach((e) => {
				if (!Array.isArray(e[0])) {
					let [t, i] = e, a = n.bits_data_temp[t]?.[i];
					r = r && a ? a.new_intersection(r) : r && !a ? new $([]) : a;
				}
			}), r) for (let e in n.bits_data_temp) for (let t in n.bits_data_temp[e]) n.bits_data_temp[e][t] = n.bits_data_temp[e][t].new_intersection(r);
			t.forEach((e) => {
				if (e.length === 3 && e[1] === "-") {
					var t, r;
					let [i, , a] = e, o = ((t = n.bits_data_temp[i]) == null || (r = t[a]) == null ? void 0 : r.clone()) || new $();
					for (let e in n.bits_data_temp) for (let t in n.bits_data_temp[e]) n.bits_data_temp[e][t] = n.bits_data_temp[e][t].new_difference(o);
				}
			});
			for (let e in n.bits_data_temp) for (let t in n.bits_data_temp[e]) for (let r in i) r !== e && (n.bits_data_temp[e][t] = n.bits_data_temp[e][t].new_intersection(i[r]));
			return n;
		}(this.facets, i);
		e.filters_query && (a = function(e, t) {
			let n = Cs(e);
			if (n.bits_data_temp ||= {}, !n.is_temp_copied) for (let e in n.bits_data) {
				n.bits_data_temp[e] = {};
				for (let t in n.bits_data[e]) n.bits_data_temp[e][t] = n.bits_data[e][t];
			}
			let r = null;
			if (Array.isArray(t) && t.forEach((e) => {
				let t = null;
				e.forEach((e) => {
					let [r, i] = e;
					if (!n.bits_data_temp[r]) throw Error("Panic. The key does not exist in facets lists.");
					let a = n.bits_data_temp[r][i];
					t = a ? t ? t.new_intersection(a) : a : new $();
				}), t && (r = r ? r.new_union(t) : t);
			}), r !== null) for (let e in n.bits_data_temp) for (let t in n.bits_data_temp[e]) n.bits_data_temp[e][t] = n.bits_data_temp[e][t].new_intersection(r);
			return n;
		}(a, Ac(e.filters_query).map((e) => Array.isArray(e) ? e.map((e) => Array.isArray(e) ? e.map((e) => e) : e.split(":")) : e.split(":")))), r.bits_data_temp = a.bits_data_temp;
		let o = r.bits_data_temp;
		if (t.query_ids) for (let e in o) for (let n in o[e]) o[e][n] = t.query_ids.new_intersection(o[e][n]);
		if (t.test) {
			r.data = {};
			for (let e in o) {
				r.data[e] = {};
				for (let t in o[e]) r.data[e][t] = o[e][t].array();
			}
		}
		return r.ids = e.filters_query ? Object.values(o).reduce((e, t) => (Object.values(t).forEach((t) => {
			e = e.new_union(t);
		}), e), new $([])) : Tc(o, e.filters), r;
	}
	_loadFromSnapshot(e) {
		let t = {
			data: Object.create(null),
			bits_data: Object.create(null),
			bits_data_temp: Object.create(null)
		};
		if (e.bitsData) for (let n in e.bitsData) {
			t.bits_data[n] = Object.create(null);
			for (let r in e.bitsData[n]) t.bits_data[n][r] = new $(e.bitsData[n][r]);
		}
		return t;
	}
};
function Lc(e, t) {
	let n;
	!1 !== (t ||= Object.create(null)).native_search_enabled && (n = new Fc(e, t));
	let r = new Ic(e, t);
	return {
		search: function(i) {
			var a;
			i ||= Object.create(null);
			let o = t;
			if (i.facets) {
				let { aggregations: e, filters: n } = Mc(i.facets, t);
				if (o = ci({}, t, { aggregations: e }), n && (i.filters = ci({}, i.filters || {}, n)), !i.filters_query) {
					let e = function(e, t) {
						if (!e || typeof e != "object") return;
						let n = t && t.aggregations || {}, r = [];
						return Object.keys(e).forEach((t) => {
							var i, a;
							if (!n[t]) return;
							let o = e[t]?.selected || [];
							if (!Array.isArray(o) || o.length === 0) return;
							let s = jc((i = e[t]) == null || (a = i.options) == null ? void 0 : a.conjunction), c = o.map((e) => {
								let n = String(e);
								return n.includes(" ") || n.includes(":") ? `${t}:"${n.replace(/"/g, "\\\"")}"` : `${t}:${n}`;
							}), l;
							l = s === "OR" ? c.length > 1 ? `(${c.join(" OR ")})` : c[0] : c.join(" AND "), r.push(l);
						}), r.length ? r.join(" AND ") : void 0;
					}(i.facets, o);
					e && (i.filters_query = e);
				}
				r.config = o.aggregations;
			} else r.config = t.aggregations;
			i.aggregations = function(e, t) {
				let n = {};
				for (let r in e) {
					let i = ci({}, e[r]);
					i.field = i.field || r, i.filters = t.filters && t.filters[r] || [], i.not_filters = t.exclude_filters && t.exclude_filters[r] || t.not_filters && t.not_filters[r] || [], n[r] = i;
				}
				return n;
			}(o.aggregations, i);
			let s = Nc(e, i, o, n, r);
			return s != null && (a = s.data) != null && a.aggregations && !s.data.facets && (s.data.facets = s.data.aggregations), s;
		},
		similar: function(t, n) {
			return function(e, t, n) {
				let r = (n ||= Object.create(null)).per_page || 10, i = n.minimum || 0, a = n.page || 1, o;
				for (let n = 0; n < e.length; ++n) if (e[n].id == t) {
					o = e[n];
					break;
				}
				if (!o) return {
					pagination: {
						per_page: r,
						page: a,
						total: 0
					},
					data: { items: [] }
				};
				if (!n.field) throw Error("Please define field in options");
				let s = n.field, c = [];
				for (let n = 0; n < e.length; ++n) if (e[n].id !== t) {
					let t = gc(o[s], e[n][s]);
					t.length >= i && c.push(ci({}, e[n], { intersection_length: t.length }));
				}
				return c = Cc(c, ["intersection_length"], ["desc"]), {
					pagination: {
						per_page: r,
						page: a,
						total: c.length
					},
					data: { items: c.slice((a - 1) * r, a * r) }
				};
			}(e, t, n);
		},
		aggregation: function(i) {
			let a = t;
			if (i != null && i.facets) {
				let { aggregations: e } = Mc(i.facets, t);
				a = ci({}, t, { aggregations: e }), r.config = a.aggregations;
			} else r.config = t.aggregations;
			return function(e, t, n, r, i) {
				let a = t.per_page || 10, o = t.page || 1;
				if (t.name && (!n.aggregations || !n.aggregations[t.name])) throw Error(`Please define aggregation "${t.name}" in config`);
				let s = function(e) {
					try {
						return structuredClone(e);
					} catch {
						try {
							return JSON.parse(JSON.stringify(e));
						} catch {
							return e;
						}
					}
				}(t);
				if (s.page = 1, s.per_page = 0, !t.name) throw Error("field name is required");
				let c = Nc(e, s, ci({}, n, { aggregations: ci({}, n.aggregations, { [t.name]: ci({}, n.aggregations[t.name], { size: 1e4 }) }) }), r, i).data.aggregations[t.name].buckets;
				return {
					pagination: {
						per_page: a,
						page: o,
						total: c.length
					},
					data: { buckets: c.slice((o - 1) * a, o * a) }
				};
			}(e, i, a, n, r);
		},
		reindex: function(i) {
			n = new Fc(e = i, t), r = new Ic(e, t);
		},
		serializeFulltext: function() {
			return n ? n.serialize() : null;
		},
		serializeFacets: function() {
			return r.serialize();
		},
		serializeAll: function() {
			return {
				version: "itemsjs-snapshot-v1",
				fulltext: this.serializeFulltext(),
				facets: this.serializeFacets()
			};
		}
	};
}
//#endregion
//#region src/siteTheme.js
var Rc = "#3C1815", zc = "#FFFFF0", Bc = S({
	name: "snadiya-site",
	extends: Pe,
	typography: {
		scale: {
			base: 18,
			ratio: 1.25
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
		"--color-background-body": zc,
		"--color-background-surface": zc,
		"--color-background-card": zc,
		"--color-background-popover": zc,
		"--color-background-muted": "rgba(60,24,21,.06)",
		"--color-text-primary": Rc,
		"--color-text-secondary": Rc,
		"--color-icon-primary": Rc,
		"--color-icon-secondary": Rc,
		"--color-accent": Rc,
		"--color-accent-muted": "rgba(60,24,21,.1)",
		"--color-text-accent": Rc,
		"--color-icon-accent": Rc,
		"--color-on-accent": zc,
		"--color-border": "rgba(60,24,21,.18)",
		"--color-border-emphasized": "rgba(60,24,21,.5)",
		"--color-overlay-hover": "rgba(60,24,21,.06)",
		"--color-overlay-pressed": "rgba(60,24,21,.12)",
		"--color-track": "rgba(60,24,21,.18)",
		"--color-text-disabled": Rc
	}
}), Vc = window.SITE_PAGE || { type: "home" }, Hc = "https://linktr.ee/snadiya", Uc = 24, Wc = [
	"silentwhale.html",
	"pantied.html",
	"boundborne.html"
], Gc = { borderRadius: "var(--radius-container)" };
function Kc({ src: e, ratio: t }) {
	return /* @__PURE__ */ (0, U.jsx)(zn, {
		ratio: t,
		fit: "cover",
		style: Gc,
		children: /* @__PURE__ */ (0, U.jsx)("img", {
			src: e,
			loading: "lazy",
			alt: ""
		})
	});
}
function qc({ w: e }) {
	return /* @__PURE__ */ (0, U.jsx)(Vn, {
		label: e.title,
		href: e.id,
		padding: 0,
		variant: "transparent",
		children: /* @__PURE__ */ (0, U.jsxs)(K, {
			gap: 2,
			children: [/* @__PURE__ */ (0, U.jsx)(Kc, {
				src: e.thumb,
				ratio: 1
			}), /* @__PURE__ */ (0, U.jsxs)(K, {
				gap: .5,
				children: [/* @__PURE__ */ (0, U.jsx)(x, {
					weight: "semibold",
					children: e.title
				}), e.format.length > 0 && /* @__PURE__ */ (0, U.jsx)(x, {
					type: "supporting",
					children: e.format.join(" + ")
				})]
			})]
		})
	});
}
function Jc({ works: e }) {
	return /* @__PURE__ */ (0, U.jsx)(En, {
		columns: { minWidth: 260 },
		gap: 6,
		children: e.map((e) => /* @__PURE__ */ (0, U.jsx)(qc, { w: e }, e.id))
	});
}
function Yc({ list: e, byId: t }) {
	return /* @__PURE__ */ (0, U.jsx)(En, {
		columns: { minWidth: 220 },
		gap: 6,
		children: e.map((e) => {
			let n = t[e.cover + ".html"], r = e.files.length === 1 ? e.files[0] : e.slug + ".html";
			return /* @__PURE__ */ (0, U.jsx)(Vn, {
				label: e.name,
				href: r,
				padding: 0,
				variant: "transparent",
				children: /* @__PURE__ */ (0, U.jsxs)(K, {
					gap: 2,
					children: [/* @__PURE__ */ (0, U.jsx)(Kc, {
						src: n && n.thumb,
						ratio: 4 / 5
					}), /* @__PURE__ */ (0, U.jsx)(x, {
						type: "large",
						weight: "semibold",
						children: e.name
					})]
				})
			}, e.slug);
		})
	});
}
function Xc({ byId: e }) {
	return /* @__PURE__ */ (0, U.jsxs)(K, {
		gap: 10,
		children: [/* @__PURE__ */ (0, U.jsx)(M, {
			level: 1,
			type: "display-1",
			justify: "center",
			children: "Snadiya"
		}), /* @__PURE__ */ (0, U.jsx)(En, {
			columns: {
				minWidth: 240,
				repeat: "fit"
			},
			gap: 4,
			children: Wc.map((t) => e[t]).filter(Boolean).map((e) => /* @__PURE__ */ (0, U.jsx)(Vn, {
				label: e.title,
				href: e.id,
				padding: 0,
				variant: "transparent",
				children: /* @__PURE__ */ (0, U.jsx)(Kc, {
					src: e.thumb,
					ratio: 4 / 5
				})
			}, e.id))
		})]
	});
}
function Zc({ data: e }) {
	let t = b("(max-width: 768px)"), n = e.groups.filter((e) => e.key !== "format" && e.key !== "franchise"), r = () => Object.fromEntries(e.groups.map((e) => [e.key, []])), [i, o] = (0, H.useState)(r), [s, c] = (0, H.useState)(""), [l, u] = (0, H.useState)("A to Z"), [d, f] = (0, H.useState)(!1), [p, m] = (0, H.useState)(!1), h = (0, H.useMemo)(() => Lc(e.works, {
		aggregations: Object.fromEntries(e.groups.map((e) => [e.key, {
			size: 1e3,
			conjunction: !0
		}])),
		native_search_enabled: !1
	}), [e]).search({
		per_page: 1e3,
		filters: i
	}), g = Object.fromEntries(e.groups.map((e) => [e.key, Object.fromEntries(h.data.aggregations[e.key].buckets.map((e) => [e.key, e.doc_count]))])), _ = (0, H.useMemo)(() => Object.fromEntries(e.groups.map((t) => {
		let n = {};
		return e.works.forEach((e) => (e[t.key] || []).forEach((e) => {
			n[e] = (n[e] || 0) + 1;
		})), [t.key, Object.keys(n).sort((e, t) => n[t] - n[e] || e.localeCompare(t))];
	})), [e]), v = s.trim().toLowerCase(), y = new Set(h.data.items.map((e) => e.id)), S = e.works.filter((e) => y.has(e.id) && (!v || [
		e.title,
		...e.characters,
		...e.themes,
		...e.settings,
		...e.franchise
	].some((e) => e.toLowerCase().includes(v))));
	S = [...S].sort((e, t) => (l === "A to Z" ? 1 : -1) * e.title.localeCompare(t.title));
	let C = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), m(!1);
	}, w = () => {
		o(r()), c(""), m(!1);
	}, T = n.flatMap((e) => i[e.key].map((t) => [e.key, t])), E = (e) => i[e][0] ?? null, D = /* @__PURE__ */ (0, U.jsx)(K, {
		gap: 6,
		padding: t ? 0 : 4,
		children: n.map((e) => /* @__PURE__ */ (0, U.jsx)(Wr, {
			label: e.label,
			value: i[e.key],
			onChange: (t) => C(e.key, t),
			density: "compact",
			children: _[e.key].map((t) => /* @__PURE__ */ (0, U.jsx)(Zr, {
				value: t,
				label: t,
				endContent: /* @__PURE__ */ (0, U.jsx)(x, {
					type: "supporting",
					children: g[e.key][t] || 0
				})
			}, t))
		}, e.key))
	}), O = /* @__PURE__ */ (0, U.jsx)(kr, {
		label: "Format",
		value: E("format"),
		onChange: (e) => C("format", e ? [e] : []),
		children: _.format.map((e) => /* @__PURE__ */ (0, U.jsx)(jr, {
			label: e,
			value: e
		}, e))
	}), k = /* @__PURE__ */ (0, U.jsx)(K, { children: /* @__PURE__ */ (0, U.jsx)(kr, {
		label: "Video Games",
		value: E("franchise"),
		onChange: (e) => C("franchise", e ? [e] : []),
		children: /* @__PURE__ */ (0, U.jsx)(Lr, {
			gap: 1,
			behavior: "observeParent",
			overflowRenderer: (e) => /* @__PURE__ */ (0, U.jsx)(re, {
				button: {
					label: `+${e.length}`,
					variant: "ghost"
				},
				items: e.map(({ index: e }) => ({
					label: _.franchise[e],
					onClick: () => C("franchise", [_.franchise[e]])
				}))
			}),
			children: _.franchise.map((e) => /* @__PURE__ */ (0, U.jsx)(jr, {
				label: e,
				value: e
			}, e))
		})
	}) }), A = /* @__PURE__ */ (0, U.jsx)(F, { icon: oi }), j = t ? /* @__PURE__ */ (0, U.jsx)(a, {
		label: "Filters",
		icon: A,
		onClick: () => f(!0)
	}) : /* @__PURE__ */ (0, U.jsx)(Vr, {
		content: D,
		isOpen: d,
		onOpenChange: f,
		placement: "below",
		alignment: "end",
		width: 360,
		label: "Filters",
		children: /* @__PURE__ */ (0, U.jsx)(a, {
			label: "Filters",
			icon: A
		})
	}), M = /* @__PURE__ */ (0, U.jsx)(re, {
		button: { label: l },
		alignment: "end",
		items: ["A to Z", "Z to A"].map((e) => ({
			label: e,
			onClick: () => u(e)
		}))
	});
	return /* @__PURE__ */ (0, U.jsxs)(K, {
		gap: 6,
		children: [
			/* @__PURE__ */ (0, U.jsxs)(K, {
				gap: 4,
				children: [
					/* @__PURE__ */ (0, U.jsx)(Tr, {
						label: "Search",
						isLabelHidden: !0,
						value: s,
						onChange: (e) => {
							c(e), m(!1);
						},
						startIcon: we,
						size: "lg"
					}),
					t ? /* @__PURE__ */ (0, U.jsxs)(K, {
						gap: 3,
						children: [
							O,
							k,
							/* @__PURE__ */ (0, U.jsxs)(kn, {
								gap: 3,
								children: [j, M]
							})
						]
					}) : /* @__PURE__ */ (0, U.jsxs)(kn, {
						gap: 4,
						vAlign: "center",
						children: [
							O,
							/* @__PURE__ */ (0, U.jsx)(jn, {
								size: "fill",
								children: k
							}),
							j,
							M
						]
					}),
					T.length > 0 && /* @__PURE__ */ (0, U.jsxs)(kn, {
						gap: 2,
						wrap: "wrap",
						vAlign: "center",
						children: [T.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(ni, {
							label: t,
							onRemove: () => C(e, i[e].filter((e) => e !== t))
						}, e + t)), /* @__PURE__ */ (0, U.jsx)(a, {
							label: "Clear all",
							variant: "ghost",
							onClick: w
						})]
					})
				]
			}),
			S.length === 0 ? /* @__PURE__ */ (0, U.jsx)(ii, {
				title: "No matches",
				actions: /* @__PURE__ */ (0, U.jsx)(a, {
					label: "Clear all",
					onClick: w
				})
			}) : /* @__PURE__ */ (0, U.jsx)(Jc, { works: p ? S : S.slice(0, Uc) }),
			!p && S.length > Uc && /* @__PURE__ */ (0, U.jsx)(kn, {
				hAlign: "center",
				children: /* @__PURE__ */ (0, U.jsx)(a, {
					label: "Show more",
					onClick: () => m(!0)
				})
			}),
			t && /* @__PURE__ */ (0, U.jsx)(be, {
				label: "Filters",
				isOpen: d,
				onOpenChange: f,
				height: "tall",
				children: /* @__PURE__ */ (0, U.jsxs)(K, {
					gap: 4,
					children: [/* @__PURE__ */ (0, U.jsx)(kn, {
						hAlign: "end",
						children: /* @__PURE__ */ (0, U.jsx)(a, {
							label: "Done",
							variant: "primary",
							onClick: () => f(!1)
						})
					}), D]
				})
			})
		]
	});
}
function Qc() {
	let [e, t] = (0, H.useState)(null);
	(0, H.useEffect)(() => {
		fetch("data/site.json").then((e) => e.json()).then(t);
	}, []);
	let n = Vc.type === "home", r = /* @__PURE__ */ (0, U.jsx)(rn, {
		label: "Site",
		heading: /* @__PURE__ */ (0, U.jsx)(dn, {
			heading: "Snadiya",
			headingHref: "index.html"
		}),
		startContent: /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(hn, {
			label: "All comics",
			href: n ? "#all" : "index.html#all"
		}), /* @__PURE__ */ (0, U.jsx)(hn, {
			label: "Links",
			href: Hc
		})] })
	});
	if (!e) return /* @__PURE__ */ (0, U.jsx)(Kt, {
		topNav: r,
		height: "auto"
	});
	let i = Object.fromEntries(e.works.map((e) => [e.id, e])), a;
	if (n) a = /* @__PURE__ */ (0, U.jsxs)(K, {
		gap: 10,
		children: [
			/* @__PURE__ */ (0, U.jsx)(z, {
				variant: "transparent",
				padding: 0,
				children: /* @__PURE__ */ (0, U.jsx)(Xc, { byId: i })
			}),
			/* @__PURE__ */ (0, U.jsx)(z, {
				variant: "transparent",
				padding: 0,
				children: /* @__PURE__ */ (0, U.jsxs)(K, {
					gap: 6,
					children: [/* @__PURE__ */ (0, U.jsx)(M, {
						level: 2,
						children: "Curated & Featured"
					}), /* @__PURE__ */ (0, U.jsx)(Yc, {
						list: e.collections,
						byId: i
					})]
				})
			}),
			/* @__PURE__ */ (0, U.jsx)(z, {
				variant: "transparent",
				padding: 0,
				id: "all",
				children: /* @__PURE__ */ (0, U.jsxs)(K, {
					gap: 6,
					children: [/* @__PURE__ */ (0, U.jsx)(M, {
						level: 2,
						children: "All comics"
					}), /* @__PURE__ */ (0, U.jsx)(Zc, { data: e })]
				})
			})
		]
	});
	else {
		let t = [...e.collections, ...e.games].find((e) => e.slug === Vc.slug);
		a = /* @__PURE__ */ (0, U.jsx)(z, {
			variant: "transparent",
			padding: 0,
			children: /* @__PURE__ */ (0, U.jsxs)(K, {
				gap: 8,
				children: [/* @__PURE__ */ (0, U.jsxs)(K, {
					gap: 2,
					children: [/* @__PURE__ */ (0, U.jsxs)(Wn, {
						label: "Breadcrumb",
						children: [/* @__PURE__ */ (0, U.jsx)(qn, {
							href: "index.html",
							children: "Comics"
						}), /* @__PURE__ */ (0, U.jsx)(qn, {
							isCurrent: !0,
							children: t.name
						})]
					}), /* @__PURE__ */ (0, U.jsx)(M, {
						level: 1,
						type: "display-2",
						children: t.name
					})]
				}), /* @__PURE__ */ (0, U.jsx)(Jc, { works: t.files.map((e) => i[e]).filter(Boolean) })]
			})
		});
	}
	return /* @__PURE__ */ (0, U.jsx)(Kt, {
		topNav: r,
		height: "auto",
		children: /* @__PURE__ */ (0, U.jsx)(At, {
			height: "auto",
			contentWidth: 1280,
			content: /* @__PURE__ */ (0, U.jsx)(Ft, {
				padding: 6,
				isScrollable: !1,
				children: a
			})
		})
	});
}
(0, si.createRoot)(document.getElementById("site")).render(/* @__PURE__ */ (0, U.jsx)(H.StrictMode, { children: /* @__PURE__ */ (0, U.jsx)(o, {
	theme: Bc,
	mode: "light",
	children: /* @__PURE__ */ (0, U.jsx)(Qc, {})
}) }));
//#endregion
