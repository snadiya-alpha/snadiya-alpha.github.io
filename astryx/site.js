import { $ as e, A as t, At as n, B as r, C as i, Ct as a, D as o, Dt as s, E as c, Et as l, F as u, Ft as d, H as f, I as p, J as m, K as h, L as g, M as _, Mt as v, N as y, Nt as b, O as x, Ot as S, P as C, Pt as w, Q as T, R as E, S as D, St as O, T as k, Tt as A, V as j, X as M, Y as N, Z as P, _t as F, a as I, bt as L, c as R, ct as z, d as ee, dt as B, et as V, f as te, ft as ne, g as re, gt as ie, h as ae, ht as H, i as oe, it as se, j as ce, jt as le, k as ue, kt as de, l as fe, lt as pe, m as me, mt as he, n as ge, nt as _e, o as ve, ot as ye, p as be, pt as xe, q as Se, rt as Ce, s as we, st as Te, t as Ee, tt as De, u as Oe, ut as ke, vt as Ae, w as je, wt as Me, x as Ne, yt as Pe, z as Fe } from "./source-B-BxpsX7.js";
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutAreaContext.js
var U = /* @__PURE__ */ d(b(), 1), Ie = /*#__PURE__*/ (0, U.createContext)(null);
Ie.displayName = "LayoutAreaContext";
var Le = Ae({
	hasHeader: !1,
	hasFooter: !1,
	hasStart: !1,
	hasEnd: !1
});
Le.displayName = "LayoutSlotsContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/stack.stylex.js
var Re = {
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
}, ze = {
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
}, Be = {
	horizontal: {
		kXwgrk: "x1q0g3np",
		$$css: !0
	},
	vertical: {
		kXwgrk: "xdt5ytf",
		$$css: !0
	}
}, Ve = {
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
}, He = { stack: {
	k1xSpc: "x78zum5",
	$$css: !0
} }, Ue = {
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
function We({ crossAlign: e, direction: t, gap: n, mainAlign: r, wrap: i }) {
	return [
		He.stack,
		Be[t],
		n != null && Ue[n],
		e != null && Re[e],
		r != null && ze[r],
		i != null && Ve[i]
	];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/stackItem.stylex.js
var Ge = { reset: {
	kAzted: "x2lwn1j",
	k7Eaqz: "xeuugli",
	$$css: !0
} }, Ke = {
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
}, qe = {
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
function Je({ crossAlignSelf: e, size: t } = {}) {
	return [
		Ge.reset,
		qe[t ?? "static"],
		e != null && Ke[e]
	];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/utils/inputAria.js
function Ye(...e) {
	let t = e.flatMap((e) => typeof e == "string" ? e.trim().split(/\s+/) : []).filter(Boolean);
	if (t.length !== 0) return Array.from(new Set(t)).join(" ");
}
function Xe(e, t = [], n) {
	return {
		ariaLabelledBy: n ? Ye(n.labelID, e) : void 0,
		ariaDescribedBy: Ye(n?.describedByIDs, ...t)
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/Layout.js
var W = L();
function Ze(e) {
	if (e == null || typeof e == "number") return !0;
	let t = e.trim().toLowerCase();
	return t.includes("%") ? !1 : t === "0" || /^-?(?:\d+(?:\.\d+)?|\.\d+)[a-z]+$/.test(t) || /^(?:calc|min|max|clamp)\(/.test(t);
}
var G = {
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
}, Qe = {
	kzqmXN: "xh8yej3",
	kUOVxO: "xvueqy4",
	$$css: !0
}, $e = {
	contentWidthVar: (e) => [{
		"--layout-content-width": (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "x4906uf",
		$$css: !0
	}, { "--x---layout-content-width": (typeof e == "number" ? `${e}px` : e) == null ? void 0 : typeof e == "number" ? `${e}px` : e }],
	contentAlignmentWidthVar: (e) => [{
		"--layout-alignment-width": (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "x1b1nz06",
		$$css: !0
	}, { "--x---layout-alignment-width": (typeof e == "number" ? `${e}px` : e) == null ? void 0 : typeof e == "number" ? `${e}px` : e }],
	contentWidth: (e) => [
		Qe,
		{
			ks0D6T: (typeof e == "number" ? `${e}px` : e) == null ? typeof e == "number" ? `${e}px` : e : "xf68679",
			$$css: !0
		},
		{ "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(typeof e == "number" ? `${e}px` : e) }
	]
};
function et({ area: e, children: t }) {
	return t == null ? null : /*#__PURE__*/ (0, W.jsx)(Ie, {
		value: e,
		children: t
	});
}
var tt = {
	"x-default-marker": "x-default-marker",
	$$css: !0
};
function nt({ children: e, content: t, contentWidth: r, defaultHasDividers: i, end: a, footer: o, header: s, height: c = "fill", padding: u, ref: d, start: f, xstyle: p, className: m, style: h }) {
	let g = c === "fill", _ = t ?? e, v = (0, U.useMemo)(() => i == null ? null : { defaultHasDividers: i }, [i]), y = s != null, b = o != null, x = f != null, S = a != null, C = x && S, w = x !== S, E = r != null && Ze(r), D = (0, U.useMemo)(() => ({
		hasHeader: y,
		hasFooter: b,
		hasStart: x,
		hasEnd: S
	}), [
		y,
		b,
		x,
		S
	]), O = /*#__PURE__*/ (0, W.jsx)(Le, {
		value: D,
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			ref: d,
			...H(l("layout", { height: c }), n(G.layoutOuter, g ? G.fill : G.auto, p), m, h),
			children: /*#__PURE__*/ (0, W.jsxs)("div", {
				...n(tt, G.layoutInner, ...We({ direction: "vertical" }), g ? G.fill : G.auto, u === 0 && G.fullBleed, u != null && P[u], u != null && T[u], r != null && $e.contentWidthVar(r), E && $e.contentAlignmentWidthVar(r)),
				children: [
					/*#__PURE__*/ (0, W.jsx)(et, {
						area: "header",
						children: s
					}),
					/*#__PURE__*/ (0, W.jsxs)("div", {
						...n(...We({ direction: "horizontal" }), G.middle, r != null && (!E || C) && $e.contentWidth(r), E && !C && G.middleQuery, E && w && G.singlePanelMiddle, E && x && !S && G.singleStartPanel, E && !x && S && G.singleEndPanel),
						children: [
							/*#__PURE__*/ (0, W.jsx)(et, {
								area: "start",
								children: f
							}),
							/*#__PURE__*/ (0, W.jsx)("div", {
								...n(...Je({ size: "fill" }), E && !x && !S && G.singleColumnContent),
								children: /*#__PURE__*/ (0, W.jsx)(et, {
									area: "content",
									children: _
								})
							}),
							/*#__PURE__*/ (0, W.jsx)(et, {
								area: "end",
								children: a
							})
						]
					}),
					/*#__PURE__*/ (0, W.jsx)(et, {
						area: "footer",
						children: o
					})
				]
			})
		})
	});
	return v == null ? O : /*#__PURE__*/ (0, W.jsx)(ie, {
		value: v,
		children: O
	});
}
nt.displayName = "Layout";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutPanel.js
var rt = {
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
}, it = { sizing: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function at({ children: e, hasDivider: t = !1, isScrollable: r = !0, label: i, padding: a, role: o, width: s, resizable: c, xstyle: u, className: d, style: f, ref: p, ...h }) {
	let g = (0, U.use)(Ie), { hasHeader: _, hasFooter: v } = (0, U.use)(Le), y = c ? c._size : s, b = g === "start", x = g === "end", S = a === 0, C = !t && !S && a == null, w = b ? rt.dividerEnd : x ? rt.dividerStart : null, T = b ? rt.collapseEnd : x ? rt.collapseStart : null;
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: p,
		role: o,
		"aria-label": i,
		...H(l("layout-panel"), n(rt.panel, it.sizing(y ?? null), b && !S && a == null && rt.startPanel, x && !S && a == null && rt.endPanel, !_ && !S && a == null && rt.noHeader, !v && !S && a == null && rt.noFooter, r && rt.scrollable, S && rt.fullBleed, a != null && se[a], a != null && M[a], a != null && N[a], a != null && m[a], t && w, C && T, u), d, f),
		...h,
		children: e
	});
}
at.displayName = "LayoutPanel";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Layout/LayoutContent.js
var ot = {
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
function st({ children: e, isScrollable: t = !0, padding: r, label: i, role: a, xstyle: o, className: s, style: c, ref: u, ...d }) {
	let { hasHeader: f, hasFooter: p, hasStart: h, hasEnd: g } = (0, U.use)(Le), _ = r === 0;
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: u,
		role: a,
		"aria-label": i,
		...H(l("layout-content"), n(ot.content, !h && !_ && r == null && ot.noStart, !g && !_ && r == null && ot.noEnd, !f && !_ && r == null && ot.noHeader, !p && !_ && r == null && ot.noFooter, t && ot.scrollable, _ && ot.fullBleed, r != null && se[r], r != null && M[r], r != null && N[r], r != null && m[r], !h && !g && !_ && ot.constrainedNoPanelsStart, !h && !g && !_ && ot.constrainedNoPanelsEnd, h && !g && !_ && ot.constrainedSingleStartPanel, !h && g && !_ && ot.constrainedSingleEndPanel, o), s, c),
		...d,
		children: e
	});
}
st.displayName = "LayoutContent";
var ct = /*#__PURE__*/ (0, U.createContext)({
	isMobile: !1,
	isMobileNavOpen: !1,
	toggleMobileNav: () => {},
	openMobileNav: () => {},
	closeMobileNav: () => {},
	isMobileNavEnabled: !1,
	hasAutoToggle: !0
});
ct.displayName = "AppShellMobileContext";
function lt() {
	return (0, U.use)(ct);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/MobileNav/MobileNavToggle.js
function ut({ ref: e, children: n, label: r, "data-testid": i, xstyle: a, className: o, style: s }) {
	let c = p(), l = r ?? c("@astryx.mobileNav.toggle.open"), { isMobile: u, isMobileNavEnabled: d, isMobileNavOpen: f, mobileNavId: m, toggleMobileNav: h } = lt();
	return !u || !d ? null : /*#__PURE__*/ (0, W.jsx)(t, {
		ref: e,
		variant: "ghost",
		label: l,
		icon: n ?? /*#__PURE__*/ (0, W.jsx)(x, {
			icon: "menu",
			color: "inherit"
		}),
		onClick: h,
		"aria-expanded": f,
		"aria-controls": m || void 0,
		"data-testid": i ?? "mobile-nav-toggle",
		xstyle: a,
		className: o,
		style: s,
		isIconOnly: !0
	});
}
ut.displayName = "MobileNavToggle";
//#endregion
//#region node_modules/@astryxdesign/core/dist/SideNav/SideNavRenderContext.js
var dt = /*#__PURE__*/ (0, U.createContext)("default");
dt.displayName = "SideNavRenderContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavRenderContext.js
var ft = /*#__PURE__*/ (0, U.createContext)("default");
ft.displayName = "TopNavRenderContext";
function pt() {
	return (0, U.use)(ft);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavMobileContentContext.js
var mt = /*#__PURE__*/ (0, U.createContext)(null);
mt.displayName = "TopNavMobileContentContext";
function ht() {
	return (0, U.use)(mt);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/AppShell/AppShell.js
var gt = U.Activity === void 0 ? ({ children: e }) => /*#__PURE__*/ (0, W.jsx)(W.Fragment, { children: e }) : ({ mode: e, children: t }) => /*#__PURE__*/ (0, W.jsx)(U.Activity, {
	mode: e,
	children: t
}), _t = "astryx-app-shell-main", K = {
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
function vt({ variant: e = "elevated", banner: t, children: r, contentPadding: i, "data-testid": a, height: o = "fill", mobileNav: s, sideNav: c, topNav: u, xstyle: d, className: f, style: m, ref: h, ...g }) {
	let _ = p(), v = O(), y = s === !1, b = s != null && s !== !1 && typeof s == "object" && !/*#__PURE__*/ (0, U.isValidElement)(s) ? s : null, x = b?.breakpoint ?? "md", C = s != null && s !== !1 && (/*#__PURE__*/ (0, U.isValidElement)(s) || typeof s == "string") ? s : null, w = b?.content ?? null, T = b?.hasToggle !== !1, D = b?.isOpen !== void 0, k = v?.__adaptations?.widthBreakpoints, A = x === "none" ? "(width < 0px)" : `(width < ${k?.[x] ?? S[x]}px)`, j = Me(A, x !== "none" && b?.defaultIsMobile), [M, N] = (0, U.useState)(!1), P = b?.isOpen ?? M, F = b?.onOpenChange, I = (0, U.useCallback)((e) => {
		D || N(e), F?.(e);
	}, [D, F]), L = (0, U.useCallback)(() => {
		document.getElementById(_t)?.focus();
	}, []), R = o === "fill", z = o === "auto", ee = ne(t), B = ne(u), V = ne(c), te = !y && (B || V) && C == null, re = e === "section", ie = e === "elevated", ae = e === "wash" || e === "elevated" ? K.navAreaWash : e === "surface" ? K.navAreaSurface : void 0, oe = ae ?? (z && e === "section" ? K.navAreaSurface : void 0), se = e === "wash" ? K.contentBgWash : e === "elevated" && B && V && !j ? K.contentBgTransparent : e === "surface" || e === "elevated" ? K.contentBgSurface : void 0, ce = ae ?? K.navAreaSurface, le = (0, U.useRef)(null), ue = (0, U.useRef)(null);
	(0, U.useEffect)(() => {
		if (!z || !le.current || !ue.current) return;
		let e = le.current, t = ue.current, n = () => {
			let n = e.getBoundingClientRect().height;
			t.style.setProperty("--_app-shell-header-height", `${n}px`);
		};
		return xe(e, () => n());
	}, [z]);
	let de = V && !j, fe = C != null, me = te && w != null && j, he = (0, U.useId)(), ge = (0, U.useMemo)(() => ({
		isMobile: j,
		isMobileNavOpen: P,
		mobileNavId: he,
		toggleMobileNav: () => te && I(!P),
		openMobileNav: () => te && I(!0),
		closeMobileNav: () => I(!1),
		isMobileNavEnabled: te,
		hasAutoToggle: T
	}), [
		j,
		P,
		he,
		I,
		te,
		T
	]), _e = V && T ? /*#__PURE__*/ (0, W.jsx)(dt, {
		value: "drawer-content",
		children: c
	}) : null, ve = V ? /*#__PURE__*/ (0, W.jsx)(dt, {
		value: "drawer-content",
		children: c
	}) : null, ye = B ? j && !y && C == null ? /*#__PURE__*/ (0, W.jsx)(mt, {
		value: _e,
		children: /*#__PURE__*/ (0, W.jsx)(ft, {
			value: "mobile-bar",
			children: u
		})
	}) : u : null, be = B || ee ? /*#__PURE__*/ (0, W.jsxs)(Se, {
		padding: 0,
		hasDivider: re && B,
		children: [ee && /*#__PURE__*/ (0, W.jsx)("div", {
			...n(K.banner, ae),
			children: t
		}), B && ye]
	}) : void 0, Ce = ne(be) ? /*#__PURE__*/ (0, W.jsx)("div", {
		ref: le,
		role: "banner",
		...H(l("app-shell-header", { variant: e }), n(oe, z && K.headerSticky)),
		children: be
	}) : void 0, we = de ? /*#__PURE__*/ (0, W.jsx)(at, {
		padding: 0,
		hasDivider: re,
		isScrollable: R,
		...l("app-shell-sidenav", { variant: e }),
		xstyle: [
			ae,
			z && ce,
			z && K.panelAutoFill
		],
		children: c
	}) : void 0, Te = we != null && z ? /*#__PURE__*/ (0, W.jsx)("div", {
		className: "x2lah0s x7giv3 x7wzq59 xht72ud xpa73km x78zum5 xdt5ytf",
		children: we
	}) : we, Ee = ie && B && de, De = /*#__PURE__*/ (0, W.jsx)(st, {
		padding: i ?? 0,
		role: "main",
		id: _t,
		tabIndex: -1,
		isScrollable: R,
		xstyle: [se, K.mainFocusTarget],
		children: r
	}), Oe = Ee ? /*#__PURE__*/ (0, W.jsxs)("div", {
		className: "x1n2onr6 x78zum5 x98rzlu x2lwn1j x5yr21d",
		children: [/*#__PURE__*/ (0, W.jsx)("div", { className: "x10l6tqk x10a8y8t x10xzikg x183tx6i x47corl" }), De]
	}) : De, ke = !y && T && j && !B && V ? /*#__PURE__*/ (0, W.jsx)("div", {
		role: Ce == null ? "banner" : void 0,
		...H(l("app-shell-header", { variant: e }), n(oe, z && K.headerSticky)),
		children: /*#__PURE__*/ (0, W.jsx)(Se, {
			padding: 0,
			hasDivider: re,
			children: /*#__PURE__*/ (0, W.jsxs)("div", {
				className: "x78zum5 x6s0dn4 x1k15mir xf314gf",
				role: "navigation",
				"aria-label": _("@astryx.appShell.mobileNavigation"),
				children: [/*#__PURE__*/ (0, W.jsx)(dt, {
					value: "topbar",
					children: c
				}), /*#__PURE__*/ (0, W.jsx)(ut, {})]
			})
		})
	}) : void 0;
	return /*#__PURE__*/ (0, W.jsx)(ct, {
		value: ge,
		children: /*#__PURE__*/ (0, W.jsxs)("div", {
			...g,
			ref: E(h, ue),
			"data-testid": a,
			...H(l("app-shell", { variant: e }), n(K.root, e === "wash" ? K.variantWash : e === "surface" ? K.variantSurface : e === "section" ? K.variantSection : K.variantElevated, R ? K.rootFill : K.rootAuto, d), f, m),
			children: [
				/*#__PURE__*/ (0, W.jsx)("a", {
					href: `#${_t}`,
					onClick: L,
					...pe.focusVisible(K.skipLink),
					"data-testid": "skip-to-content",
					children: _("@astryx.appShell.skipToContent")
				}),
				/*#__PURE__*/ (0, W.jsx)(nt, {
					height: o,
					padding: 0,
					header: /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [Ce, ke] }),
					start: Te,
					content: Oe
				}),
				fe && C,
				me && w,
				j && !y && C == null && !w && /*#__PURE__*/ (0, W.jsxs)(gt, {
					mode: P ? "visible" : "hidden",
					children: [V && !B && /*#__PURE__*/ (0, W.jsx)(dt, {
						value: "drawer",
						children: c
					}), B && /*#__PURE__*/ (0, W.jsx)(mt, {
						value: ve,
						children: /*#__PURE__*/ (0, W.jsx)(ft, {
							value: "drawer",
							children: u
						})
					})]
				})
			]
		})
	});
}
vt.displayName = "AppShell";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNavContext.js
var yt = Ae("start");
yt.displayName = "TopNavSlotContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/MobileNav/MobileNav.js
var bt = {
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
}, xt = {
	kzqmXN: "xn9wirt",
	ks0D6T: "xf68679",
	$$css: !0
}, St = { width: (e) => [xt, { "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`${e}px`) }] }, Ct = 250, wt = .6;
function Tt(e) {
	let t = e.split(",").map((e) => {
		let t = e.trim(), n = Number.parseFloat(t);
		return Number.isFinite(n) ? t.endsWith("ms") ? n : t.endsWith("s") ? n * 1e3 : null : null;
	}).filter((e) => e !== null);
	return t.length ? Math.min(...t) : null;
}
function Et(e) {
	let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Ct, n = Tt(window.getComputedStyle(e).transitionDuration);
	return n === null ? t : n <= 0 ? 0 : Math.min(t, n * wt);
}
function Dt({ isOpen: i, onOpenChange: a, children: o, header: s, width: u = 320, side: d = "auto", label: f, "data-testid": m, xstyle: g, className: _, style: v, onClick: y, ref: b, ...S }) {
	let C = p(), w = lt(), T = i ?? w.isMobileNavOpen, D = (0, U.useId)(), O = w.mobileNavId || D, A = (0, U.useMemo)(() => a ?? ((e) => {
		e ? w.openMobileNav() : w.closeMobileNav();
	}), [a, w]), M = (0, U.useRef)(null), N = (0, U.useRef)(null), P = (0, U.useRef)(null), I = (0, U.useCallback)(() => {
		P.current &&= (P.current.release(), null);
	}, []), [L, R] = (0, U.useState)(d === "auto" ? "end" : d);
	(0, U.useEffect)(() => {
		if (T) {
			if (d === "auto") {
				let e = document.activeElement;
				if (e && e !== document.body) {
					let t = e.getBoundingClientRect(), n = t.left + t.width / 2;
					R(n < window.innerWidth / 2 ? "start" : "end");
				}
			} else R(d);
		}
	}, [T, d]), (0, U.useEffect)(() => {
		let e = M.current;
		if (e) return T ? (P.current ??= k(document.documentElement), e.open || e.showModal(), document.documentElement.style.overflow = "clip", P.current.settle()) : e.open && (document.documentElement.style.overflow = "", I(), N.current = setTimeout(() => {
			e.close();
		}, Et(e))), () => {
			N.current &&= (clearTimeout(N.current), null), document.documentElement.style.overflow = "", I();
		};
	}, [T, I]), (0, U.useEffect)(() => {
		let e = M.current;
		return () => {
			e?.open && e.close();
		};
	}, []);
	let { shouldDismissOnCloseRequest: z } = r({
		isActive: T,
		onDismiss: () => A(!1)
	}), ee = (0, U.useCallback)((e) => {
		e.preventDefault(), z() && A(!1);
	}, [A, z]), B = (0, U.useCallback)((e) => {
		e.target === e.currentTarget && A(!1);
	}, [A]), V = L === "start";
	return /*#__PURE__*/ (0, W.jsx)("dialog", {
		ref: E(b, M),
		id: O,
		...H(l("mobile-nav", { side: L }), n(h.reset, bt.dialog, e.reset, T && bt.open, bt.backdrop, T && bt.backdropOpen, g), _, v),
		...S,
		"data-testid": m,
		"aria-label": f ?? (typeof s == "string" ? s : C("@astryx.mobileNav.navigation")),
		onClick: he(y, B),
		onCancel: ee,
		children: /*#__PURE__*/ (0, W.jsx)(j, { children: /*#__PURE__*/ (0, W.jsx)(F, { children: /*#__PURE__*/ (0, W.jsxs)("div", {
			tabIndex: -1,
			...n(bt.drawer, St.width(u), V && bt.drawerStart, V && T && bt.drawerStartOpen, !V && bt.drawerEnd, !V && T && bt.drawerEndOpen),
			children: [/*#__PURE__*/ (0, W.jsxs)("div", {
				...{
					0: { className: "x78zum5 x6s0dn4 x1qughib x1k15mir xf314gf x2lah0s x92x3c3 x1q0q8m5 xw8gpjh" },
					1: { className: "x78zum5 x6s0dn4 x1k15mir xf314gf x2lah0s x92x3c3 x1q0q8m5 xw8gpjh x13a6bvl" }
				}[!s << 0],
				children: [typeof s == "string" ? /*#__PURE__*/ (0, W.jsx)(c, {
					level: 2,
					xstyle: bt.headerText,
					children: s
				}) : s ?? null, /*#__PURE__*/ (0, W.jsx)(t, {
					variant: "ghost",
					label: C("@astryx.mobileNav.closeNavigation"),
					icon: /*#__PURE__*/ (0, W.jsx)(x, {
						icon: "close",
						color: "inherit"
					}),
					onClick: () => A(!1),
					isIconOnly: !0
				})]
			}), /*#__PURE__*/ (0, W.jsx)("div", {
				className: "x98rzlu x1odjw0f x6ikm8r xish69e xx69xxh xf314gf xce4md1",
				children: o
			})]
		}) }) })
	});
}
Dt.displayName = "MobileNav";
//#endregion
//#region node_modules/@astryxdesign/core/dist/TopNav/TopNav.js
var Ot = {
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
function kt({ heading: e, startContent: t, children: r, centerContent: i, endContent: a, label: s, xstyle: c, className: u, style: d, ref: f, ...m }) {
	let h = p(), g = s ?? h("@astryx.topNav.landmarkLabel"), _ = pt(), v = ht(), { hasAutoToggle: y } = lt(), b = t ?? r, x = i != null, S = b != null || i != null, C = S || v != null;
	return _ === "mobile-bar" ? /*#__PURE__*/ (0, W.jsxs)("nav", {
		ref: f,
		role: "navigation",
		"aria-label": g,
		...H(l("top-nav", { mode: "mobile-bar" }), n(Ot.mobileBar, c), u, d),
		...m,
		children: [e && /*#__PURE__*/ (0, W.jsx)("div", {
			className: "x78zum5 x6s0dn4 x2lah0s",
			children: e
		}), /*#__PURE__*/ (0, W.jsxs)("div", {
			className: "x78zum5 x6s0dn4 xzye2dw xvc5jky",
			children: [a, C && y && /*#__PURE__*/ (0, W.jsx)(ut, {})]
		})]
	}) : _ === "drawer" ? !S && !v ? null : /*#__PURE__*/ (0, W.jsxs)(Dt, {
		header: e,
		children: [
			S && /*#__PURE__*/ (0, W.jsxs)("div", {
				className: "x78zum5 xdt5ytf x1lsbc85",
				children: [b, i]
			}),
			S && v && /*#__PURE__*/ (0, W.jsx)(o, { xstyle: Ot.drawerDivider }),
			v && /*#__PURE__*/ (0, W.jsx)("div", { children: v })
		]
	}) : /*#__PURE__*/ (0, W.jsxs)("nav", {
		ref: f,
		role: "navigation",
		"aria-label": g,
		...H(l("top-nav"), n(Ot.base, x ? Ot.baseGrid : Ot.baseFlex, c), u, d),
		...m,
		children: [
			/*#__PURE__*/ (0, W.jsxs)("div", {
				className: "x78zum5 x6s0dn4 x18g69wz x845mor xeuugli",
				children: [e && /*#__PURE__*/ (0, W.jsx)("div", {
					className: "x78zum5 x6s0dn4 x2lah0s",
					children: e
				}), b && /*#__PURE__*/ (0, W.jsx)(yt, {
					value: "start",
					children: /*#__PURE__*/ (0, W.jsx)("div", {
						className: "x78zum5 x6s0dn4 xzye2dw",
						children: b
					})
				})]
			}),
			x && /*#__PURE__*/ (0, W.jsx)(yt, {
				value: "center",
				children: /*#__PURE__*/ (0, W.jsx)("div", {
					className: "x78zum5 x6s0dn4 xl56j7k xzye2dw",
					children: i
				})
			}),
			x ? /*#__PURE__*/ (0, W.jsx)("div", {
				className: "x78zum5 x6s0dn4 x13a6bvl xzye2dw",
				children: /*#__PURE__*/ (0, W.jsx)(yt, {
					value: "end",
					children: a
				})
			}) : a && /*#__PURE__*/ (0, W.jsx)("div", {
				className: "x78zum5 x6s0dn4 xzye2dw x2lah0s xvc5jky",
				children: /*#__PURE__*/ (0, W.jsx)(yt, {
					value: "end",
					children: a
				})
			})
		]
	});
}
kt.displayName = "TopNav";
//#endregion
//#region node_modules/@astryxdesign/core/dist/InteractiveRoleContext/InteractiveRoleContext.js
var At = /*#__PURE__*/ (0, U.createContext)(null);
At.displayName = "InteractiveRoleContext";
function jt() {
	return (0, U.use)(At);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useInteractiveRole.js
function Mt({ href: e, onClick: t, isDisabled: n = !1 }) {
	let r = jt();
	return e != null && !n ? "link" : t == null ? r ?? "inert" : "button";
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Link/Link.js
var Nt = {
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
}, Pt = {
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
function Ft(e) {
	e.preventDefault();
}
function It({ as: e, label: t, href: n, hasUnderline: r = !1, isDisabled: i = !1, isExternalLink: a = !1, newTabLabel: o, target: s, onClick: c, tooltip: u, isStandalone: d = !1, type: f = "body", size: m, weight: h, color: v = "accent", display: y = "inline", maxLines: b = 0, children: S, rel: w, xstyle: T, className: E, style: O, ref: k, ...A }) {
	let j = p(), M = o ?? j("@astryx.link.newTab"), N = _(e), P = Mt({
		href: n,
		onClick: c,
		isDisabled: i
	}), { target: F, rel: I } = Ne(a ? "_blank" : s, w), L = P === "button" || P === "inert" && n == null, R = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(g, {
		type: f,
		size: m,
		weight: h,
		color: v,
		display: y,
		maxLines: b,
		children: S
	}), a && !L && /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(x, {
		icon: "externalLink",
		size: "xsm",
		color: "inherit"
	}), /*#__PURE__*/ (0, W.jsx)(C, { children: M })] })] }), z;
	return z = L ? /*#__PURE__*/ (0, W.jsx)("button", {
		ref: k,
		type: "button",
		onClick: c,
		"aria-label": t || void 0,
		"aria-disabled": i || void 0,
		tabIndex: i ? -1 : void 0,
		disabled: i,
		...H(l("link", { color: v }), pe.focusVisible(Nt.base, Nt.buttonReset, Pt[v], !i && ce.pressedBackgroundColor, r && Nt.hasUnderline, d && Nt.standalone, i && Nt.disabled, T), E, O),
		...A,
		children: R
	}) : i ? /*#__PURE__*/ (0, W.jsx)("a", {
		ref: k,
		onClick: Ft,
		"aria-label": t || void 0,
		"aria-disabled": !0,
		tabIndex: -1,
		...H(l("link", { color: v }), pe.focusVisible(Nt.base, Pt[v], r && Nt.hasUnderline, d && Nt.standalone, Nt.disabled, T), E, O),
		...A,
		children: R
	}) : /*#__PURE__*/ (0, W.jsx)(N, {
		ref: k,
		href: n,
		target: F,
		rel: I,
		onClick: c,
		"aria-label": t || void 0,
		"aria-disabled": i || void 0,
		tabIndex: i ? -1 : void 0,
		...H(l("link", { color: v }), pe.focusVisible(Nt.base, Pt[v], !i && ce.pressedBackgroundColor, r && Nt.hasUnderline, d && Nt.standalone, i && Nt.disabled, T), E, O),
		...A,
		children: R
	}), u ? /*#__PURE__*/ (0, W.jsx)(D, {
		content: u,
		placement: "above",
		children: z
	}) : z;
}
It.displayName = "Link";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Grid/Grid.js
var Lt = { grid: {
	k1xSpc: "xrvj5dj",
	$$css: !0
} }, Rt = {
	kJBjZk: "xhij9v2",
	$$css: !0
}, zt = {
	templateColumns: (e) => [{
		kumcoG: e == null ? e : "xqketvx",
		$$css: !0
	}, { "--x-gridTemplateColumns": e ?? void 0 }],
	autoRows: (e) => [Rt, { "--x-gridAutoRows": `${e}px` == null ? void 0 : `${e}px` }]
}, Bt = {
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
}, Vt = {
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
}, Ht = {
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
}, Ut = {
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
}, Wt = {
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
}, Gt = {
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
function Kt(e, t, n, r, i) {
	let a = i == null ? r == null ? null : Gt[r] : Gt[i];
	return `repeat(${n}, minmax(${`min(100%, max(${e}px, ${a ? `calc((100% - ${t - 1} * var(${a})) / ${t})` : `calc(100% / ${t})`}))`}, 1fr))`;
}
function qt({ columns: e, rowHeight: t, width: r, height: i, maxWidth: a, minHeight: o, gap: s, rowGap: c, columnGap: u, align: d, justify: f, xstyle: p, className: m, style: h, children: g, ref: _, ...v }) {
	let y;
	if (typeof e == "object" && e) {
		let t = e.repeat === "fit" ? "auto-fit" : "auto-fill";
		y = e.max != null && e.max > 0 ? Kt(e.minWidth, e.max, t, s, u) : `repeat(${t}, minmax(${e.minWidth}px, 1fr))`;
	} else y = typeof e == "number" && e > 0 ? `repeat(${e}, 1fr)` : "1fr";
	let b = {
		...r != null && { width: typeof r == "number" ? `${r}px` : r },
		...i != null && { height: typeof i == "number" ? `${i}px` : i },
		...a != null && { maxWidth: typeof a == "number" ? `${a}px` : a },
		...o != null && { minHeight: typeof o == "number" ? `${o}px` : o }
	};
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: _,
		...H(l("grid", {
			columns: typeof e == "number" ? e : void 0,
			gap: s,
			align: d,
			justify: f
		}), n(Lt.grid, zt.templateColumns(y), t != null && zt.autoRows(t), s != null && Ht[s], c != null && Ut[c], u != null && Wt[u], d != null && Bt[d], f != null && Vt[f], p), m, {
			...h,
			...b
		}),
		...v,
		children: g
	});
}
qt.displayName = "Grid";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/Stack.js
var Jt = { scrollable: {
	kVQacm: "xysyzu8",
	$$css: !0
} };
function Yt({ direction: e = "vertical", hAlign: t, vAlign: r, justify: i, align: a, gap: o, padding: s, paddingInline: c, paddingInlineStart: u, paddingInlineEnd: d, paddingBlock: f, paddingBlockStart: p, paddingBlockEnd: m, isScrollable: h, width: g, height: _, maxWidth: v, minHeight: y, wrap: b, as: x = "div", xstyle: S, className: C, style: w, children: T, ref: E, ...D }) {
	let O = t ?? (e === "horizontal" ? i : a), k = r ?? (e === "horizontal" ? a : i), A = e === "horizontal" ? O : k, j = e === "horizontal" ? k : O, M = u ?? c ?? s, N = d ?? c ?? s, P = p ?? f ?? s, F = m ?? f ?? s, I = n(...We({
		direction: e,
		crossAlign: j,
		mainAlign: A,
		gap: o,
		wrap: b
	}), M != null && Ce[M], N != null && _e[N], P != null && De[P], F != null && V[F], h && Jt.scrollable, S), L = {
		...g != null && { width: typeof g == "number" ? `${g}px` : g },
		..._ != null && { height: typeof _ == "number" ? `${_}px` : _ },
		...v != null && { maxWidth: typeof v == "number" ? `${v}px` : v },
		...y != null && { minHeight: typeof y == "number" ? `${y}px` : y }
	};
	return /*#__PURE__*/ (0, U.createElement)(x, {
		ref: E,
		...H(l("stack", {
			direction: e,
			gap: o,
			wrap: b
		}), I, C, {
			...w,
			...L
		}),
		...D
	}, T);
}
Yt.displayName = "Stack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/HStack/HStack.js
function Xt({ ref: e, justify: t, align: n, hAlign: r, vAlign: i, ...a }) {
	return /*#__PURE__*/ (0, W.jsx)(Yt, {
		...a,
		direction: "horizontal",
		hAlign: r ?? t,
		vAlign: i ?? n,
		ref: e
	});
}
Xt.displayName = "HStack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/VStack/VStack.js
function q({ ref: e, justify: t, align: n, hAlign: r, vAlign: i, ...a }) {
	return /*#__PURE__*/ (0, W.jsx)(Yt, {
		...a,
		direction: "vertical",
		hAlign: r ?? n,
		vAlign: i ?? t,
		ref: e
	});
}
q.displayName = "VStack";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Stack/StackItem.js
var Zt = { scrollable: {
	kVQacm: "xysyzu8",
	$$css: !0
} };
function Qt({ crossAlignSelf: e, size: t, isScrollable: r, as: i = "div", xstyle: a, className: o, style: s, children: c, ref: u, ...d }) {
	let f = n(...Je({
		crossAlignSelf: e,
		size: t
	}), r && Zt.scrollable, a);
	return /*#__PURE__*/ (0, U.createElement)(i, {
		ref: u,
		...H(l("stack-item", { size: t }), f, o, s),
		...d
	}, c);
}
Qt.displayName = "StackItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/AspectRatio/AspectRatio.js
var $t = {
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
}, en = { ratio: (e) => [{
	kOBAk4: e == null ? e : "x10y9f9r",
	$$css: !0
}, { "--x-aspectRatio": e ?? void 0 }] };
function tn({ ratio: e, shape: t = "rectangle", fit: r, children: i, xstyle: a, className: o, style: s, ref: c, ...u }) {
	return /*#__PURE__*/ (0, W.jsx)("div", {
		ref: c,
		...H(l("aspect-ratio", { shape: t }), n($t.container, en.ratio(e), t === "ellipse" && $t.ellipse, a), o, s),
		...u,
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			"data-astryx-aspect-ratio-override": r,
			...{
				0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k" }
			}[(r === "center") << 0],
			children: i
		})
	});
}
tn.displayName = "AspectRatio";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/computeOverflow.js
function nn(e, t, n) {
	return Math.max(Math.min(e, n), t);
}
function rn(e, t, n) {
	return {
		floor: Math.max(0, Math.min(t, e)),
		ceiling: Math.max(0, Math.min(n ?? e, e))
	};
}
function an(e, t, n, r, i, a) {
	let o = 0, s = 0;
	for (let c = 0; c < e.length && !(s >= a); c++) {
		let a = e[c], l = c > 0 ? t : 0, u = o + a + l;
		if (u + (c === e.length - 1 ? 0 : r + (s > 0 || r > 0 ? t : 0)) > n && s >= i) break;
		o = u, s++;
	}
	return s;
}
function on(e, t, n, r, i) {
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
function sn(e, t, n) {
	if (e.length === 0) return 0;
	let r = 1, i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = i === 0, c = s ? o : i + t + o;
		c <= n || s ? i = c : (r++, i = o);
	}
	return r;
}
function cn(e, t, n, r, i) {
	let a = e.length;
	if (a === 0) return {
		count: 0,
		rows: 0
	};
	let o = on(e, t, n, 0, i);
	if (o.placed === a) return {
		count: a,
		rows: o.rows
	};
	let s = on(e, t, n, r, i).placed, c = sn(e.slice(0, s), t, n);
	return {
		count: s,
		rows: Math.max(+(s > 0), c)
	};
}
function ln(e) {
	let { widths: t, gap: n, availableWidth: r, indicatorWidth: i, minVisibleItems: a, maxVisibleItems: o, maxRows: s, collapseFrom: c } = e, l = t.length;
	if (l === 0) return {
		visibleCount: 0,
		rows: 0
	};
	let { floor: u, ceiling: d } = rn(l, a, o), f = c === "end" ? t : [...t].reverse();
	if (!(s != null && s > 1)) {
		let e = nn(an(f, n, r, i, u, d), u, d);
		return {
			visibleCount: e,
			rows: +(e > 0)
		};
	}
	let { count: p, rows: m } = cn(f, n, r, i, s), h = nn(p, u, d), g = h === p ? m : sn(f.slice(0, h), n, r);
	return {
		visibleCount: h,
		rows: h > 0 ? Math.max(1, g) : 0
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useOverflow.js
function un(e, t = {}) {
	let { gap: n = 0, minVisibleItems: r = 0, maxVisibleItems: i, maxRows: a, collapseFrom: o = "end", behavior: s = "observeSelf" } = t;
	je("useOverflow", `maxVisibleItems (${i}) is less than minVisibleItems (${r}); the floor wins and minVisibleItems items will be shown.`, i != null && i < r);
	let c = s === "observeParent", [l, u] = (0, U.useState)(e), [d, f] = (0, U.useState)(1), [p, m] = (0, U.useState)(0), h = (0, U.useRef)(null), g = (0, U.useRef)(null), _ = (0, U.useRef)(null), v = (0, U.useRef)(null), y = (0, U.useRef)(null), b = (0, U.useRef)(null), x = (0, U.useCallback)(() => {
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
		let y = _.map((e) => e.offsetWidth), b = _.reduce((e, t) => Math.max(e, t.offsetHeight || 0), 0), { visibleCount: x, rows: S } = ln({
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
	]), S = (0, U.useCallback)((e) => {
		if (h.current = e, y.current?.(), y.current = null, _.current = null, e) {
			let t = c && e.parentElement ? e.parentElement : e;
			y.current = xe(t, () => {
				x();
			}), _.current = t;
		}
	}, [x, c]), C = (0, U.useCallback)((e) => {
		b.current?.(), b.current = null, v.current = null, g.current = e, e && (b.current = xe(e, () => {
			x();
		}), v.current = e);
	}, [x]);
	return le(() => {
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
var dn = {
	warning: "warning",
	error: "error",
	success: "success"
}, fn = {
	warning: "@astryx.input.statusButton.warning",
	error: "@astryx.input.statusButton.error",
	success: "@astryx.input.statusButton.success"
}, pn = { statusButton: {
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
function mn({ status: e, statusVariant: t = "attached", isInGroup: r = !1, size: i = "md" }) {
	let a = p(), o = t === "tooltip" && !!e?.message, [s, c] = (0, U.useState)(void 0), u = Fe({
		placement: "above",
		isEnabled: o,
		isOpen: s
	}), d = (0, U.useCallback)(() => {
		c(void 0);
	}, []), f = (0, U.useCallback)(() => {
		typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(hover: none)").matches && c((e) => e !== !0);
	}, []);
	if ((0, U.useEffect)(() => {
		if (s !== !0) return;
		let e = (e) => {
			e.key === "Escape" && c(void 0);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [s]), !e || r || t === "detached") return {
		statusIcon: null,
		describedBy: void 0
	};
	let m = /*#__PURE__*/ (0, W.jsx)(x, {
		icon: dn[e.type],
		size: i,
		color: e.type,
		...l("input-status-icon", {
			size: i,
			status: e.type
		})
	});
	return o ? {
		statusIcon: /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)("button", {
			type: "button",
			ref: u.ref,
			"aria-label": a(fn[e.type]),
			"aria-describedby": u.describedBy,
			onClick: f,
			onBlur: d,
			...n(ke.focusVisible, pn.statusButton),
			children: m
		}), u.renderTooltip(e.message)] }),
		describedBy: u.describedBy
	} : {
		statusIcon: m,
		describedBy: void 0
	};
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useIndicatorFocusRing.js
function hn(e, t = !1) {
	let n = (0, U.useCallback)((t) => {
		let n = e.current?.firstElementChild;
		n instanceof HTMLElement && Object.assign(n.style, t ? Te : z);
	}, [e]), r = (0, U.useCallback)((e) => {
		if (t) return;
		let r = e.target;
		r instanceof HTMLElement && !r.matches(":focus-visible") || n(!0);
	}, [t, n]), i = (0, U.useCallback)(() => n(!1), [n]);
	return (0, U.useMemo)(() => ({ focusProps: {
		onFocus: r,
		onBlur: i
	} }), [r, i]);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Field/inputStyles.stylex.js
var gn = {
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
}, _n = {
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
}, vn = {
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
}, yn = {
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
}, bn = { button: {
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
function xn({ label: e, onClick: n, onPointerDown: r, onClickCapture: i, xstyle: a, iconClassName: o }) {
	let { className: s } = l("input-clear-icon"), { className: c } = l("input-clear-button");
	return /*#__PURE__*/ (0, W.jsx)(t, {
		variant: "ghost",
		size: "sm",
		label: e,
		tooltip: e,
		className: c,
		icon: /*#__PURE__*/ (0, W.jsx)(x, {
			icon: "close",
			size: "sm",
			color: "secondary",
			className: o == null ? s : `${s} ${o}`
		}),
		onPointerDown: (e) => {
			e.preventDefault(), r?.(e);
		},
		onMouseDown: (e) => e.preventDefault(),
		onClick: n,
		onClickCapture: i,
		isIconOnly: !0,
		xstyle: [bn.button, a]
	});
}
function Sn(e) {
	return xn(e);
}
Sn.displayName = "InputClearButton";
//#endregion
//#region node_modules/@astryxdesign/core/dist/InputGroup/groupStyles.js
var Cn = { inGroup: {
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
function wn({ isRequired: e = !1, isOptional: t = !1 }) {
	let { defaultOptionality: n } = (0, U.use)(me);
	return !t && (e || n === "required");
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/InputGroup/InputGroupContext.js
var Tn = Ae(null);
Tn.displayName = "InputGroupContext";
function En() {
	return (0, U.use)(Tn);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/TextInput/TextInput.js
var Dn = {
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
function On({ type: e = "text", label: t, isLabelHidden: r = !1, description: i, isOptional: a = !1, isRequired: o = !1, isDisabled: s = !1, isReadOnly: c = !1, disabledMessage: d, startIcon: f, status: m, statusVariant: h = "attached", size: g, onChange: _, changeAction: v, isLoading: b = !1, value: x, placeholder: S, labelTooltip: w, hasClear: T = !1, hasAutoFocus: D = !1, htmlName: O, onEnter: k, onKeyDown: A, width: j, xstyle: M, className: N, style: P, ref: F, ...I }) {
	let L = p(), R = wn({
		isRequired: o,
		isOptional: a
	}), z = y(g, "md"), B = (0, U.useId)(), V = (0, U.useId)(), te = (0, U.useId)(), ne = (0, U.useId)(), re = (0, U.useRef)(null), ie = (0, U.useRef)(null), oe = En(), [, se] = (0, U.useTransition)(), [ce, le] = (0, U.useOptimistic)(x), de = b || ce !== x, fe = s && !!d, pe = Fe({
		placement: "above",
		focusTrigger: "always",
		isEnabled: fe
	}), { statusIcon: me, describedBy: he } = mn({
		status: m,
		statusVariant: h,
		isInGroup: !!oe
	}), { ariaLabelledBy: ge, ariaDescribedBy: _e } = Xe(V, [
		i ? te : null,
		!oe && h !== "tooltip" && m?.message ? ne : null,
		he,
		fe ? pe.describedBy : null
	], oe), ve = (e) => {
		if (s || c) return;
		let t = e.target.value;
		_?.(t, e), v && !e.defaultPrevented && se(async () => {
			le(t), await v(t, e);
		});
	}, be = (0, U.useCallback)((e) => {
		_?.("", null), !e || e.detail === 0 ? re.current?.focus() : requestAnimationFrame(() => {
			re.current?.focus({ preventScroll: !0 });
		});
	}, [_]), { onClick: xe, onMouseUp: Se } = ae({
		containerRef: ie,
		inputRef: re,
		disabled: s
	}), Ce = /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: (e) => {
			ie.current = e, pe.ref(e);
		},
		onClick: xe,
		onMouseUp: Se,
		...H(l("text-input", {
			size: z,
			status: m?.type ?? null,
			disabled: s ? "disabled" : null,
			readonly: c ? "readonly" : null
		}), n(gn.base, Dn[z], s && gn.disabled, m && _n[m.type], m && !s && vn[m.type], m && yn[m.type], oe && Cn.inGroup, M), N, P),
		children: [
			f && ue(f, {
				size: "sm",
				color: "secondary"
			}),
			oe && /*#__PURE__*/ (0, W.jsx)(C, {
				id: V,
				children: t
			}),
			/*#__PURE__*/ (0, W.jsx)("input", {
				...I,
				ref: E(F, re),
				id: B,
				name: s ? void 0 : O,
				type: e,
				value: ce,
				onChange: ve,
				onKeyDown: k || A ? (e) => {
					e.key === "Enter" && !ye(e.nativeEvent) && k?.(), A?.(e);
				} : void 0,
				placeholder: S,
				disabled: s && !fe,
				"aria-disabled": fe ? "true" : void 0,
				readOnly: c || fe || void 0,
				autoFocus: D,
				"data-autofocus": D || void 0,
				"aria-describedby": _e,
				"aria-required": R ? "true" : void 0,
				"aria-invalid": m?.type === "error" ? "true" : void 0,
				"aria-busy": de || void 0,
				"aria-labelledby": ge,
				...{
					0: { className: "x1lliihq x98rzlu xeuugli xc342km xng3xce x1717udv x9ynric xjm74w1 xf9zqsd xw6l6zx x1tgivj0 xjbqb8w x1a2a7pz xeyghm5" },
					1: { className: "x1lliihq x98rzlu xeuugli xc342km xng3xce x1717udv x9ynric xjm74w1 xf9zqsd xw6l6zx x1tgivj0 xjbqb8w x1a2a7pz xeyghm5 xt0e3qv" }
				}[!!s << 0]
			}),
			T && x !== "" && !s && !c && /*#__PURE__*/ (0, W.jsx)(Sn, {
				label: L("@astryx.textInput.clearLabel", { label: t }),
				onClick: be
			}),
			de && /*#__PURE__*/ (0, W.jsx)(u, { size: "sm" }),
			me
		]
	});
	return oe ? /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [Ce, fe && pe.renderTooltip(d)] }) : /*#__PURE__*/ (0, W.jsxs)(ee, {
		label: t,
		isLabelHidden: r,
		description: i,
		inputID: B,
		descriptionID: i ? te : void 0,
		isOptional: a,
		isRequired: o,
		isDisabled: s,
		status: m ? {
			type: m.type,
			message: m.message,
			messageID: m.message ? ne : void 0
		} : void 0,
		statusVariant: h,
		labelTooltip: w,
		width: j,
		children: [Ce, fe && pe.renderTooltip(d)]
	});
}
On.displayName = "TextInput";
//#endregion
//#region node_modules/@astryxdesign/core/dist/ToggleButton/ToggleButtonGroup.js
var kn = Ae(null);
kn.displayName = "ToggleButtonGroupContext";
function An() {
	return (0, U.use)(kn);
}
var jn = {
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
function Mn(e) {
	let { children: t, label: r, orientation: i = "horizontal", size: a, isDisabled: o = !1, xstyle: s, "data-testid": c } = e, u = e.type === "multiple", d = (0, U.useMemo)(() => {
		if (u) return new Set(e.value);
		let t = e.value;
		return t == null ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
	}, [u, e.value]), f = (0, U.useCallback)((t) => {
		if (u) {
			let n = e.value, r = e.onChange;
			n.includes(t) ? r(n.filter((e) => e !== t)) : r([...n, t]);
		} else {
			let n = e.value, r = e.onChange;
			r(n === t ? null : t);
		}
	}, [
		u,
		e.value,
		e.onChange
	]), p = (0, U.useMemo)(() => ({
		selectedValues: d,
		toggle: f,
		size: a,
		isDisabled: o
	}), [
		d,
		f,
		a,
		o
	]);
	return /*#__PURE__*/ (0, W.jsx)(kn, {
		value: p,
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			role: "group",
			"aria-label": r,
			"data-testid": c,
			...H(l("toggle-button-group"), n(jn.group, i === "vertical" && jn.vertical, s)),
			children: t
		})
	});
}
Mn.displayName = "ToggleButtonGroup";
//#endregion
//#region node_modules/@astryxdesign/core/dist/ToggleButton/ToggleButton.js
var Nn = { background: {
	kAXs8y: "x1kzknox",
	kWkggS: "xi89dp7 x1jzqe4",
	kMwMTN: "x1k5gbb1",
	$$css: !0
} };
function Pn({ ref: e, label: n, isPressed: r, onPressedChange: i, pressedChangeAction: a, size: o, elevation: s = "none", isDisabled: c = !1, isLoading: u = !1, icon: d, isIconOnly: f = !1, pressedIcon: p, children: m, tooltip: h, value: g, xstyle: _, className: v, style: y, ...b }) {
	let x = An(), S = x && g != null ? x.selectedValues.has(g) : r ?? !1, C = o ?? x?.size ?? "md", w = (x?.isDisabled ?? !1) || c, [T, E] = (0, U.useOptimistic)(S), D = T, O = !D, k = D && p ? p : d, A = (e) => {
		if (!w) {
			if (x && g != null) {
				x.toggle(g), e.preventDefault();
				return;
			}
			i?.(O, e);
		}
	}, j = a && !(x && g != null) ? async () => {
		E(O), await a(O);
	} : void 0, M = m == null ? f ? void 0 : /*#__PURE__*/ (0, W.jsxs)("span", {
		className: "x3nfvp2 xdt5ytf x6s0dn4 xl56j7k",
		children: [/*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: {},
				1: { className: "x2mo6ok" }
			}[!!D << 0],
			children: n
		}), /*#__PURE__*/ (0, W.jsx)("span", {
			className: "x1lliihq x2mo6ok xqtp20y xb3r6kr xlshs6z x47corl",
			"aria-hidden": "true",
			children: n
		})]
	}) : /*#__PURE__*/ (0, W.jsxs)("span", {
		className: "x3nfvp2 xdt5ytf x6s0dn4 xl56j7k",
		children: [/*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: {},
				1: { className: "x2mo6ok" }
			}[!!D << 0],
			children: m
		}), /*#__PURE__*/ (0, W.jsx)("span", {
			className: "x1lliihq x2mo6ok xqtp20y xb3r6kr xlshs6z x47corl",
			"aria-hidden": "true",
			children: m
		})]
	});
	return /*#__PURE__*/ (0, W.jsx)(t, {
		ref: e,
		label: n,
		variant: "ghost",
		size: C,
		elevation: s,
		isDisabled: w,
		isLoading: u,
		isInterruptible: !0,
		isIconOnly: f,
		"aria-pressed": D,
		icon: k,
		tooltip: h,
		...l("toggle-button", {
			isPressed: D ? "true" : "false",
			elevation: s
		}),
		xstyle: [D ? Nn.background : void 0, _],
		style: y,
		onClick: A,
		clickAction: j,
		...b,
		children: M
	});
}
Pn.displayName = "ToggleButton";
//#endregion
//#region node_modules/@astryxdesign/core/dist/OverflowList/OverflowList.js
var Fn = {
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
}, In = {
	kskxy: "x1jols5v",
	$$css: !0
}, Ln = { height: (e, t, n) => [In, { "--x-maxHeight": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${t}px * ${e} + ${n}px * ${e - 1})`) }] }, Rn = {
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
}, zn = {
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
function Bn({ children: e, gap: t = 2, minVisibleItems: r = 0, maxVisibleItems: i, maxRows: a, collapseFrom: o = "end", behavior: s = "observeSelf", overflowRenderer: c, onOverflowChange: u, xstyle: d, className: f, style: p, ref: m, ...h }) {
	let g = U.Children.toArray(e), _ = g.length, v = zn[t], y = s === "observeParent", b = a != null && a > 1, { containerRef: x, measureRef: S, visibleCount: C, hasOverflow: w, rowHeight: T } = un(_, {
		gap: v,
		minVisibleItems: r,
		maxVisibleItems: i,
		maxRows: a,
		collapseFrom: o,
		behavior: s
	}), D = g.map((e, t) => ({
		child: e,
		index: t
	})), O, k;
	o === "end" ? (O = D.slice(0, C), k = D.slice(C)) : (O = D.slice(_ - C), k = D.slice(0, _ - C));
	let A = c?.(D), j = u ? JSON.stringify({
		children: g.map((e, t) => [t, e.key]),
		gap: t,
		minVisibleItems: r,
		maxVisibleItems: i,
		maxRows: a,
		collapseFrom: o,
		behavior: s
	}) : "", [M, N] = (0, U.useState)(j), P = (0, U.useCallback)((e) => {
		S(e), e && N(j);
	}, [S, j]), F = u ? JSON.stringify(k.map(({ child: e, index: t }) => [t, e.key])) : "[]", I = (0, U.useRef)("[]"), L = (0, U.useRef)(k);
	return L.current = k, le(() => {
		u && M === j && I.current !== F && (I.current = F, u(L.current));
	}, [
		M,
		j,
		F,
		u
	]), /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsxs)("div", {
		ref: P,
		"aria-hidden": "true",
		inert: !0,
		...n(Fn.measureContainer, Rn[t]),
		children: [g, A != null && /*#__PURE__*/ (0, W.jsx)("div", {
			className: "x3nfvp2",
			children: A
		})]
	}), /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: E(m, x),
		...H(l("overflow-list"), n(b ? Fn.containerMultiRow : Fn.container, Rn[t], b && T > 0 && a != null && Ln.height(a, T, v), y && w && Fn.fillParent, d), f, p),
		...h,
		children: [
			o === "start" && w && c?.(k),
			O.map(({ child: e }) => e),
			o === "end" && w && c?.(k)
		]
	})] });
}
Bn.displayName = "OverflowList";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/indicator.markers.stylex.js
var Vn = {
	x1odsvnm: "x1odsvnm",
	$$css: !0
}, Hn = {
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
}, Un = {
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
}, Wn = {
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
}, Gn = {
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
function Kn({ state: e, size: t = "md", isDisabled: r = !1, children: i, ref: a, className: o, style: s, xstyle: c, ...u }) {
	let d = e === "checked", f = e === "indeterminate", p = d || f;
	return /*#__PURE__*/ (0, W.jsx)("span", {
		...u,
		ref: a,
		"aria-hidden": "true",
		...H(l("checkbox-indicator", {
			size: t,
			checked: d ? "checked" : f ? "indeterminate" : null,
			disabled: r ? "disabled" : null
		}, { legacyNames: ["checkbox"] }), n(Hn.box, Un[t], p ? Hn.checked : Hn.unchecked, r && Hn.disabled, r && !p && Hn.disabledUnchecked, c), o, s),
		children: ne(i) ? i : /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)("svg", {
			viewBox: "0 0 10 10",
			...H(l("checkbox-indicator-check", { size: t }), n(Hn.checkmark, Wn[t], d && Hn.checkmarkVisible)),
			children: /*#__PURE__*/ (0, W.jsx)("path", {
				d: "M8.5 2.5L4 7.5L1.5 5",
				stroke: "currentColor",
				strokeWidth: "1.5",
				fill: "none",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		}), /*#__PURE__*/ (0, W.jsx)("span", { ...H(l("checkbox-indicator-dash", { size: t }), n(Hn.indeterminateMark, Gn[t], f && Hn.indeterminateMarkVisible)) })] })
	});
}
Kn.displayName = "CheckboxIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/CheckIndicator.js
var qn = {
	sm: "sm",
	md: "sm"
}, Jn = {
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
function Yn({ state: e, size: t = "md", isDisabled: r = !1, children: i, ref: a, className: o, style: s, xstyle: c, ...l }) {
	let u = e === "checked";
	return ne(i) ? /*#__PURE__*/ (0, W.jsx)("span", {
		...l,
		ref: a,
		"aria-hidden": "true",
		...H(n(Jn.slot, r ? Jn.disabled : Jn.enabled, c), o, s),
		children: i
	}) : u ? /*#__PURE__*/ (0, W.jsx)(x, {
		...l,
		"aria-hidden": "true",
		icon: "check",
		size: qn[t],
		color: r ? "disabled" : "accent",
		xstyle: c,
		className: o,
		style: s
	}) : null;
}
Yn.displayName = "CheckIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/RadioIndicator.js
var Xn = {
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
function $n({ state: e, size: t = "md", isDisabled: r = !1, children: i, ref: a, className: o, style: s, xstyle: c, ...u }) {
	let d = e !== "unchecked";
	return /*#__PURE__*/ (0, W.jsx)("span", {
		...u,
		ref: a,
		"aria-hidden": "true",
		...H(l("radio-indicator", {
			size: t,
			checked: d ? "checked" : null,
			disabled: r ? "disabled" : null
		}, { legacyNames: ["radio"] }), n(Xn.circle, Zn[t], d ? Xn.checked : Xn.unchecked, r && Xn.disabled, r && !d && Xn.disabledUnchecked, c), o, s),
		children: ne(i) ? i : d && /*#__PURE__*/ (0, W.jsx)("span", { ...H(l("radio-indicator-dot", { size: t }, { legacyNames: ["radio-dot"] }), n(Xn.dot, Qn[t])) })
	});
}
$n.displayName = "RadioIndicator";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/indicatorRegistry.js
var er = {
	check: Yn,
	checkbox: Kn,
	radio: $n
};
function tr(e) {
	return e == null ? null : typeof e == "string" ? s(e) : e;
}
function nr(e) {
	return tr(e)?.indicators ?? null;
}
function rr(e, t) {
	return nr(t)?.[e] ?? er[e];
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Indicator/useIndicator.js
function ir(e) {
	return rr(e, a());
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Popover/Popover.js
var ar = "button, [role=\"button\"]", or = de["--spacing-4"];
`${or}${or}`, `${or}${or}`, `${or}${or}`, `${or}${or}`, `${or}`, `${or}`, `${or}`;
function sr(e) {
	return e.matches(ar) ? e : e.querySelector(ar);
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
function cr({ children: e, anchorRef: t, content: n, placement: r = "below", alignment: a = "start", isOpen: o, onOpenChange: s, isEnabled: c = !0, width: l, label: u, role: d = "dialog", isModal: p, hasCloseButton: m, closeButtonLabel: h, hasAutoFocus: g, hasLightDismiss: _ = !0, hasEscapeDismiss: v = !0, xstyle: y, className: b, style: x, "data-testid": S }) {
	let C = (0, U.useRef)(null), w = (0, U.useRef)(null), [T, E] = (0, U.useState)(!1), D = o !== void 0, O = (0, U.useCallback)(() => {
		s?.(!0);
	}, [s]), k = (0, U.useCallback)(() => {
		s?.(!1);
	}, [s]), A = i({
		dialogLabel: u,
		role: d,
		isModal: p,
		hasLightDismiss: _,
		hasEscapeDismiss: v,
		hasCloseButton: m,
		closeButtonLabel: h,
		hasAutoFocus: g,
		surfaceTarget: "popover",
		xstyle: [
			J.contentPadding,
			J.surfaceViewportFit,
			T && J.surfaceScrollable,
			y
		],
		className: b,
		style: x,
		onShow: O,
		onHide: k
	}), j = (0, U.useCallback)(() => {
		let e = A.contentRef.current;
		if (!e) return;
		let t = e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1;
		E((e) => e === t ? e : t);
	}, [A.contentRef]), M = (0, U.useCallback)(() => {
		w.current ??= window.requestAnimationFrame(() => {
			w.current = null, j();
		});
	}, [j]);
	le(() => {
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
			t?.disconnect(), n?.disconnect(), e.removeEventListener("load", M, !0), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M), w.current != null && (window.cancelAnimationFrame(w.current), w.current = null);
		};
	}, [
		j,
		A.isOpen,
		M
	]), le(() => {
		A.isOpen && M();
	}, [
		n,
		A.isOpen,
		M
	]);
	let N = (0, U.useCallback)(() => {
		c && A.toggle();
	}, [c, A]), P = (0, U.useCallback)((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), N());
	}, [N]), F = (0, U.useCallback)((e) => {
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
	le(() => {
		if (!t) return;
		let e = t.current;
		if (!e) return;
		let n = sr(e);
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
	]), le(() => {
		if (t || typeof e == "function") return;
		let n = C.current;
		if (!n) return;
		A.triggerRef(n);
		let r = sr(n);
		if (!r) return;
		let i = F(r);
		return () => {
			A.triggerRef(null), i();
		};
	}, [
		t,
		A,
		F
	]), le(() => {
		D && (o && !A.isOpen ? A.show() : !o && A.isOpen && A.hide());
	}, [
		o,
		D,
		A
	]);
	let I = l ? J.customWidth(l) : a === "center" ? J.matchTriggerCentered : J.matchTriggerAligned, L = r === "start" || r === "end", R = a === "center" ? L ? J.viewportBlockCentered : J.viewportCentered : [J.viewportAligned, L ? a === "start" ? J.viewportBlockStart : J.viewportBlockEnd : a === "start" ? J.viewportStart : J.viewportEnd];
	if (t && e == null) return /*#__PURE__*/ (0, W.jsx)(W.Fragment, { children: A.render(/*#__PURE__*/ (0, W.jsx)("div", {
		"data-testid": S,
		children: n
	}), {
		placement: r,
		alignment: a,
		offset: de["--spacing-1"],
		xstyle: [
			J.viewportFit,
			R,
			I,
			f[r]
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
		return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [e(t), A.render(/*#__PURE__*/ (0, W.jsx)("div", {
			"data-testid": S,
			children: n
		}), {
			placement: r,
			alignment: a,
			offset: de["--spacing-1"],
			xstyle: [
				J.viewportFit,
				R,
				I,
				f[r]
			]
		})] });
	}
	return /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [/*#__PURE__*/ (0, W.jsx)(At, {
		value: "button",
		children: /*#__PURE__*/ (0, W.jsx)("div", {
			ref: C,
			className: "x3nfvp2",
			children: e
		})
	}), A.render(/*#__PURE__*/ (0, W.jsx)("div", {
		"data-testid": S,
		children: n
	}), {
		placement: r,
		alignment: a,
		offset: de["--spacing-1"],
		xstyle: [
			J.viewportFit,
			R,
			I,
			f[r]
		]
	})] });
}
cr.displayName = "Popover";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxListContext.js
var lr = Ae(null);
lr.displayName = "CheckboxListContext";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxList.js
var ur = [];
function dr({ label: e, isLabelHidden: t = !1, description: n, status: r, value: i, onChange: a, changeAction: o, density: s = "balanced", hasDividers: c = !1, isDisabled: u = !1, disabledMessage: d, isReadOnly: f = !1, children: p, ref: m, width: h, xstyle: g, className: _, style: v, "data-testid": y, ...b }) {
	let x = (0, U.useId)(), S = (0, U.useId)(), C = (0, U.useId)(), w = (0, U.useId)(), [, T] = (0, U.useTransition)(), E = i !== void 0, [D, O] = (0, U.useOptimistic)(i ?? ur), [k, A] = (0, U.useOptimistic)(ur, (e, t) => e.includes(t) ? e : [...e, t]), j = u && !!d, M = Fe({
		placement: "above",
		focusTrigger: "always",
		isEnabled: j
	}), N = (0, U.useCallback)((e, t) => {
		a?.(e), o && T(async () => {
			O(e), t !== void 0 && A(t), await o(e);
		});
	}, [
		a,
		o,
		T,
		O,
		A
	]), P = (0, U.useMemo)(() => ({
		value: E ? D : void 0,
		onChange: E ? N : void 0,
		isDisabled: u,
		hasDisabledMessage: j,
		isReadOnly: f,
		loadingValues: k
	}), [
		E,
		D,
		N,
		u,
		j,
		f,
		k
	]);
	return /*#__PURE__*/ (0, W.jsxs)(ee, {
		...b,
		ref: m,
		"data-testid": y,
		label: e,
		isLabelHidden: t,
		description: n,
		inputID: x,
		labelID: S,
		isGroupLabel: !0,
		descriptionID: n ? C : void 0,
		isDisabled: u,
		status: r ? {
			type: r.type,
			message: r.message,
			messageID: r.message ? w : void 0
		} : void 0,
		statusVariant: "detached",
		width: h,
		xstyle: g,
		...H(l("checkbox-list"), {
			className: _,
			style: v
		}),
		children: [/*#__PURE__*/ (0, W.jsx)(lr, {
			value: P,
			children: /*#__PURE__*/ (0, W.jsx)("div", {
				ref: (e) => {
					M.ref(e);
				},
				role: "group",
				"aria-labelledby": S,
				"aria-describedby": [
					n ? C : null,
					r?.message ? w : null,
					j ? M.describedBy : null
				].filter(Boolean).join(" ") || void 0,
				children: /*#__PURE__*/ (0, W.jsx)(we, {
					density: s,
					hasDividers: c,
					children: p
				})
			})
		}), j && M.renderTooltip(d)]
	});
}
dr.displayName = "CheckboxList";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxInput/CheckboxInput.js
var fr = {
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
}, pr = {
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
}, mr = { width: (e) => [{
	kzqmXN: e == null ? e : "x5lhr3w",
	$$css: !0
}, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(e) }] };
function hr({ label: e, isLabelHidden: t = !1, description: r, onChange: i, changeAction: a, isLoading: o = !1, value: s, isDisabled: c = !1, htmlName: d, disabledMessage: f, isReadOnly: p = !1, isOptional: m = !1, isRequired: h = !1, size: g = "md", onFocus: _, onBlur: v, labelIcon: y, status: b, width: x, xstyle: S, className: C, style: w, ref: T, "aria-describedby": D, ...O }) {
	let k = (0, U.useId)(), A = (0, U.useId)(), j = (0, U.useId)(), M = wn({
		isRequired: h,
		isOptional: m
	}), [, N] = (0, U.useTransition)(), [P, F] = (0, U.useOptimistic)(s), I = o || P !== s, L = c && !!f, R = (0, U.use)(lr), z = c && (L || (R?.hasDisabledMessage ?? !1)), ee = Fe({
		placement: "above",
		focusTrigger: "always",
		isEnabled: L
	}), V = ir("checkbox"), ne = (0, U.useRef)(null), { focusProps: re } = hn(ne, c), ie = P === "indeterminate", ae = P === !0, oe = (0, U.useCallback)((e) => {
		e && (e.indeterminate = ie);
	}, [ie]), se = [];
	D && se.push(D), r && se.push(A), b?.message && se.push(j), L && se.push(ee.describedBy);
	let ce = se.length > 0 ? se.join(" ") : void 0;
	return /*#__PURE__*/ (0, W.jsxs)("div", {
		...H(l("checkbox-input", { size: g }), n(x != null && mr.width(x), S), C, w),
		children: [
			/*#__PURE__*/ (0, W.jsxs)("div", {
				ref: (e) => {
					ee.interactionRef(e);
				},
				...n(fr.container, t && fr.containerLabelHidden, !c && Vn),
				children: [/*#__PURE__*/ (0, W.jsxs)("div", {
					...n(fr.checkboxWrapper, pr[g], !c && fr.indicatorPressOverlay),
					...re,
					children: [/*#__PURE__*/ (0, W.jsx)("input", {
						...O,
						ref: E(T, oe, ee.positionRef),
						id: k,
						type: "checkbox",
						name: c ? void 0 : d,
						checked: ae,
						disabled: c && !z,
						"aria-disabled": z ? "true" : void 0,
						form: z ? "" : void 0,
						readOnly: p,
						required: h,
						"aria-required": M ? "true" : void 0,
						onChange: (e) => {
							if (c || I || p) return;
							let t = e.target.checked;
							i?.(t, e), a && !e.defaultPrevented && N(async () => {
								F(t), await a(t, e);
							});
						},
						onFocus: _,
						onBlur: v,
						"aria-readonly": p || void 0,
						"aria-describedby": ce,
						"aria-invalid": b?.type === "error" || void 0,
						"aria-busy": I || void 0,
						...n(fr.input, B.centerInline("-50%"), fr.inputCoarse, pr[g], c && fr.inputDisabled)
					}), /*#__PURE__*/ (0, W.jsx)("span", {
						ref: ne,
						className: "xjp7ctv",
						children: /*#__PURE__*/ (0, W.jsx)(V, {
							state: ie ? "indeterminate" : ae ? "checked" : "unchecked",
							size: g,
							isDisabled: c,
							children: I ? /*#__PURE__*/ (0, W.jsx)(u, {
								size: "sm",
								shade: "inherit"
							}) : null
						})
					})]
				}), /*#__PURE__*/ (0, W.jsx)("div", {
					className: "x78zum5 xdt5ytf",
					children: /*#__PURE__*/ (0, W.jsx)(be, {
						...l("checkbox-label"),
						label: e,
						inputID: k,
						isLabelHidden: t,
						isDisabled: c,
						isOptional: m,
						isRequired: h,
						labelIcon: y,
						description: r,
						descriptionID: A
					})
				})]
			}),
			b?.message && /*#__PURE__*/ (0, W.jsx)(te, {
				type: b.type,
				message: b.message,
				id: j,
				variant: "detached"
			}),
			L && ee.renderTooltip(f)
		]
	});
}
hr.displayName = "CheckboxInput";
//#endregion
//#region node_modules/@astryxdesign/core/dist/CheckboxList/CheckboxListItem.js
var gr = { selected: {
	kWkggS: "xgcxg3y",
	$$css: !0
} };
function _r(e) {
	let t = (0, U.use)(Oe);
	return /*#__PURE__*/ (0, W.jsx)(hr, {
		...e,
		"aria-describedby": t ?? void 0
	});
}
function vr({ label: e, "aria-label": t, value: n, description: r, endContent: i, isDisabled: a = !1, isLoading: o = !1, isChecked: s, onCheck: c, ref: l, xstyle: u, className: d, style: f, onClick: m, ...h }) {
	let g = p(), _ = (0, U.use)(lr);
	if (_ && _.value !== void 0 && n === void 0) throw Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");
	let v = typeof e != "string", y = (0, U.useId)(), b = v && t == null, x = t ?? (v ? g("@astryx.checkboxList.item.checkbox") : e), S = ((0, U.use)(R)?.density ?? "balanced") === "compact" ? "sm" : "md", C = (_?.isDisabled ?? !1) || a, w = _?.isReadOnly ?? !1, T = o || n !== void 0 && (_?.loadingValues?.includes(n) ?? !1), E = !1;
	_ && _.value !== void 0 && n !== void 0 ? E = _.value.includes(n) : s !== void 0 && (E = s);
	let D = !w && (_ != null || c != null), O = (0, U.useRef)(null), k = D || m != null, A = w && m != null ? (e) => {
		m(e), e.stopPropagation();
	} : m, j = () => {
		C || w || T || (_ && _.value !== void 0 && n !== void 0 ? _.value.includes(n) ? _.onChange?.(_.value.filter((e) => e !== n), n) : _.onChange?.([..._.value, n], n) : c?.(E !== !0));
	};
	return /*#__PURE__*/ (0, W.jsx)(ve, {
		...h,
		ref: l,
		label: b ? /*#__PURE__*/ (0, W.jsx)("span", {
			id: y,
			children: e
		}) : e,
		description: r,
		endContent: i,
		isDisabled: C,
		interactiveRef: k ? O : void 0,
		"aria-busy": T || void 0,
		xstyle: [E === !0 && !C && !w && gr.selected, u],
		className: d,
		style: f,
		startContent: /*#__PURE__*/ (0, W.jsx)(_r, {
			ref: O,
			label: x,
			"aria-labelledby": b ? y : void 0,
			isLabelHidden: !0,
			value: E,
			onChange: () => j(),
			onClick: A,
			isDisabled: C,
			isReadOnly: w,
			isLoading: T,
			size: S
		})
	});
}
vr.displayName = "CheckboxListItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Token/TokenLink.js
function yr({ ref: e, href: t, isDisabled: n, LinkComponent: r, linkStyleProps: i, labelContent: a, icon: o, endContent: s, removeButton: c, onClick: l, onMouseUp: u, ...d }) {
	let f = (0, U.useRef)(null), p = (0, U.useRef)(null), { onClick: m, onMouseUp: h } = re({
		containerRef: f,
		interactiveRef: p,
		href: t,
		disabled: n
	});
	return /*#__PURE__*/ (0, W.jsxs)("span", {
		ref: E(e, f),
		...d,
		onClick: n ? l : he(l, m),
		onMouseUp: n ? u : he(u, h),
		children: [
			o,
			/*#__PURE__*/ (0, W.jsx)(r, {
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
yr.displayName = "TokenLink";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Token/Token.js
var br = {
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
}, xr = {
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
}, Sr = {
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
function Cr({ label: e, size: t = "md", color: r = "default", icon: i, isDisabled: a = !1, onRemove: o, onClick: s, href: c, description: u, endContent: d, isLabelHidden: f = !1, xstyle: m, className: h, style: g, "data-testid": v, ref: y, ...b }) {
	let S = p(), C = _(), w = Mt({
		href: c,
		onClick: s,
		isDisabled: a
	}), T = s ?? (w === "button" ? () => {} : null), E = o != null && /*#__PURE__*/ (0, W.jsx)("button", {
		type: "button",
		"aria-label": S("@astryx.token.remove", { label: e }),
		onClick: (e) => {
			e.stopPropagation(), o(e);
		},
		disabled: a,
		...pe.focusVisible(br.removeButton),
		children: /*#__PURE__*/ (0, W.jsx)(x, {
			icon: "close",
			size: "xsm",
			color: "inherit"
		})
	}), D = /*#__PURE__*/ (0, W.jsxs)(W.Fragment, { children: [
		i,
		/*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
				1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
			}[!!f << 0],
			children: e
		}),
		d,
		E
	] }), O = {
		"data-testid": v,
		...f ? { "aria-label": e } : {},
		...u == null ? {} : { "aria-description": u }
	};
	return w === "link" ? o == null ? /*#__PURE__*/ (0, W.jsx)(C, {
		ref: y,
		href: c,
		...H(l("token", {
			color: r,
			size: t
		}), pe.focusVisible(br.base, xr[t], Sr[r], br.interactive, ce.backgroundImage, a && br.disabled, m), h, g),
		...b,
		...a ? { "aria-disabled": !0 } : {},
		...O,
		children: D
	}) : /*#__PURE__*/ (0, W.jsx)(yr, {
		ref: y,
		href: c,
		isDisabled: a,
		LinkComponent: C,
		icon: i,
		endContent: d,
		removeButton: E,
		linkStyleProps: { className: "xmper1u x16khyan x1heor9g x1a2a7pz xb3r6kr xeuugli" },
		labelContent: /*#__PURE__*/ (0, W.jsx)("span", {
			...{
				0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
				1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
			}[!!f << 0],
			children: e
		}),
		...H(l("token", {
			color: r,
			size: t
		}), pe.focusWithin(br.base, xr[t], Sr[r], br.interactive, ce.backgroundImage, a && br.disabled, m), h, g),
		...b,
		...O
	}) : T == null ? /*#__PURE__*/ (0, W.jsx)("span", {
		ref: y,
		...H(l("token", {
			color: r,
			size: t
		}), n(br.base, xr[t], Sr[r], a && br.disabled, m), h, g),
		...b,
		...O,
		children: D
	}) : /*#__PURE__*/ (0, W.jsxs)("span", {
		ref: y,
		onClick: a ? void 0 : (e) => {
			e.target.closest("button, a") || T(e);
		},
		...H(l("token", {
			color: r,
			size: t
		}), pe.focusWithin(br.base, xr[t], Sr[r], br.interactive, ce.backgroundImage, a && br.disabled, m), h, g),
		...b,
		...O,
		children: [
			i,
			/*#__PURE__*/ (0, W.jsx)("button", {
				type: "button",
				onClick: T,
				disabled: a,
				className: "xmper1u x16khyan x1heor9g x1a2a7pz xb3r6kr xeuugli",
				children: /*#__PURE__*/ (0, W.jsx)("span", {
					...{
						0: { className: "xb3r6kr xlyipyv xuxw1ft xeuugli" },
						1: { className: "xlyipyv xeuugli x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr x1hyvwdk xuxw1ft xc342km" }
					}[!!f << 0],
					children: e
				})
			}),
			d,
			E
		]
	});
}
Cr.displayName = "Token";
//#endregion
//#region node_modules/@astryxdesign/core/dist/EmptyState/EmptyState.js
var wr = {
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
function Tr({ title: e, description: t, icon: r, actions: i, headingLevel: a = 3, isCompact: o = !1, xstyle: s, className: c, style: u, ref: d, ...f }) {
	let p = `h${a}`;
	return /*#__PURE__*/ (0, W.jsxs)("div", {
		ref: d,
		...f,
		role: "status",
		...H(l("empty-state", { variant: o ? "compact" : null }), n(wr.container, o && wr.containerCompact, s), c, u),
		children: [
			r != null && /*#__PURE__*/ (0, W.jsx)("div", {
				"aria-hidden": "true",
				children: r
			}),
			/*#__PURE__*/ (0, W.jsxs)("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 xxc7z9f",
				children: [/*#__PURE__*/ (0, U.createElement)(p, H(l("empty-state-title", { variant: o ? "compact" : null }), {
					0: { className: "x1ghz6dp xjb2p0i x18juvz8 x2mo6ok xf74fhv x1tgivj0" },
					1: { className: "x1ghz6dp xjb2p0i x2mo6ok xf74fhv x1tgivj0 xcr08ib" }
				}[!!o << 0]), e), t != null && /*#__PURE__*/ (0, W.jsx)("div", {
					...H(l("empty-state-description", { variant: o ? "compact" : null }), {
						0: { className: "x1ghz6dp xjb2p0i xjm74w1 x1sodnla xw6l6zx xv1l7n4" },
						1: { className: "x1ghz6dp xjb2p0i x1sodnla xw6l6zx xv1l7n4 x141an7d" }
					}[!!o << 0]),
					children: t
				})]
			}),
			i != null && /*#__PURE__*/ (0, W.jsx)("div", {
				...{
					0: { className: "x78zum5 x1q0g3np x6s0dn4 x1txdalj xcsaf9d" },
					1: { className: "x78zum5 x6s0dn4 x1txdalj xcsaf9d xdt5ytf" }
				}[!!o << 0],
				children: i
			})
		]
	});
}
Tr.displayName = "EmptyState";
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs
var Er = {
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
Er.node;
var Dr = oe(Er), Or = v();
function kr() {
	return kr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, kr.apply(this, arguments);
}
var Ar = typeof global == "object" && global && global.Object === Object && global, jr = typeof self == "object" && self && self.Object === Object && self, Mr = Ar || jr || Function("return this")(), Nr = Mr.Symbol, Pr = Object.prototype, Fr = Pr.hasOwnProperty, Ir = Pr.toString, Lr = Nr ? Nr.toStringTag : void 0, Rr = Object.prototype.toString, zr = "[object Null]", Br = "[object Undefined]", Vr = Nr ? Nr.toStringTag : void 0;
function Hr(e) {
	return e == null ? e === void 0 ? Br : zr : Vr && Vr in Object(e) ? function(e) {
		var t = Fr.call(e, Lr), n = e[Lr];
		try {
			e[Lr] = void 0;
			var r = !0;
		} catch {}
		var i = Ir.call(e);
		return r && (t ? e[Lr] = n : delete e[Lr]), i;
	}(e) : function(e) {
		return Rr.call(e);
	}(e);
}
function Ur(e) {
	return typeof e == "object" && !!e;
}
var Wr = "[object Symbol]";
function Gr(e) {
	return typeof e == "symbol" || Ur(e) && Hr(e) == Wr;
}
function Kr(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
var Y = Array.isArray, qr = 1 / 0, Jr = Nr ? Nr.prototype : void 0, Yr = Jr ? Jr.toString : void 0;
function Xr(e) {
	if (typeof e == "string") return e;
	if (Y(e)) return Kr(e, Xr) + "";
	if (Gr(e)) return Yr ? Yr.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -qr ? "-0" : t;
}
function Zr(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
function Qr(e) {
	return e;
}
var $r = "[object AsyncFunction]", ei = "[object Function]", ti = "[object GeneratorFunction]", ni = "[object Proxy]";
function ri(e) {
	if (!Zr(e)) return !1;
	var t = Hr(e);
	return t == ei || t == ti || t == $r || t == ni;
}
var ii, ai = Mr["__core-js_shared__"], oi = (ii = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ii : "", si = Function.prototype.toString;
function ci(e) {
	if (e != null) {
		try {
			return si.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
var li = /^\[object .+?Constructor\]$/, ui = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function di(e, t) {
	var n = function(e, t) {
		return e?.[t];
	}(e, t);
	return function(e) {
		return !(!Zr(e) || (t = e, oi && oi in t)) && (ri(e) ? ui : li).test(ci(e));
		var t;
	}(n) ? n : void 0;
}
var fi, pi, mi, hi = di(Mr, "WeakMap"), gi = Object.create, _i = function() {
	function e() {}
	return function(t) {
		if (!Zr(t)) return {};
		if (gi) return gi(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}(), vi = Date.now, yi = function() {
	try {
		var e = di(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), bi = (fi = yi ? function(e, t) {
	return yi(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: (n = t, function() {
			return n;
		}),
		writable: !0
	});
	var n;
} : Qr, pi = 0, mi = 0, function() {
	var e = vi(), t = 16 - (e - mi);
	if (mi = e, t > 0) {
		if (++pi >= 800) return arguments[0];
	} else pi = 0;
	return fi.apply(void 0, arguments);
});
function xi(e) {
	return e != e;
}
function Si(e, t) {
	return !(e == null || !e.length) && function(e, t, n) {
		return t == t ? function(e, t, n) {
			for (var r = -1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}(e, t) : function(e, t, n, r) {
			for (var i = e.length, a = -1; ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}(e, xi);
	}(e, t) > -1;
}
var Ci = 9007199254740991, wi = /^(?:0|[1-9]\d*)$/;
function Ti(e, t) {
	var n = typeof e;
	return !!(t ??= Ci) && (n == "number" || n != "symbol" && wi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ei(e, t, n) {
	t == "__proto__" && yi ? yi(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
function Di(e, t) {
	return e === t || e != e && t != t;
}
var Oi = Object.prototype.hasOwnProperty;
function ki(e, t, n) {
	var r = e[t];
	Oi.call(e, t) && Di(r, n) && (n !== void 0 || t in e) || Ei(e, t, n);
}
function Ai(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Ei(n, s, c) : ki(n, s, c);
	}
	return n;
}
var ji = Math.max, Mi = 9007199254740991;
function Ni(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mi;
}
function Pi(e) {
	return e != null && Ni(e.length) && !ri(e);
}
var Fi = Object.prototype;
function Ii(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Fi);
}
function Li(e) {
	return Ur(e) && Hr(e) == "[object Arguments]";
}
var Ri = Object.prototype, zi = Ri.hasOwnProperty, Bi = Ri.propertyIsEnumerable, Vi = Li(function() {
	return arguments;
}()) ? Li : function(e) {
	return Ur(e) && zi.call(e, "callee") && !Bi.call(e, "callee");
}, Hi = typeof exports == "object" && exports && !exports.nodeType && exports, Ui = Hi && typeof module == "object" && module && !module.nodeType && module, Wi = Ui && Ui.exports === Hi ? Mr.Buffer : void 0, Gi = (Wi ? Wi.isBuffer : void 0) || function() {
	return !1;
}, X = {};
function Ki(e) {
	return function(t) {
		return e(t);
	};
}
X["[object Float32Array]"] = X["[object Float64Array]"] = X["[object Int8Array]"] = X["[object Int16Array]"] = X["[object Int32Array]"] = X["[object Uint8Array]"] = X["[object Uint8ClampedArray]"] = X["[object Uint16Array]"] = X["[object Uint32Array]"] = !0, X["[object Arguments]"] = X["[object Array]"] = X["[object ArrayBuffer]"] = X["[object Boolean]"] = X["[object DataView]"] = X["[object Date]"] = X["[object Error]"] = X["[object Function]"] = X["[object Map]"] = X["[object Number]"] = X["[object Object]"] = X["[object RegExp]"] = X["[object Set]"] = X["[object String]"] = X["[object WeakMap]"] = !1;
var qi = typeof exports == "object" && exports && !exports.nodeType && exports, Ji = qi && typeof module == "object" && module && !module.nodeType && module, Yi = Ji && Ji.exports === qi && Ar.process, Xi = function() {
	try {
		return Ji && Ji.require && Ji.require("util").types || Yi && Yi.binding && Yi.binding("util");
	} catch {}
}(), Zi = Xi && Xi.isTypedArray, Qi = Zi ? Ki(Zi) : function(e) {
	return Ur(e) && Ni(e.length) && !!X[Hr(e)];
}, $i = Object.prototype.hasOwnProperty;
function ea(e, t) {
	var n = Y(e), r = !n && Vi(e), i = !n && !r && Gi(e), a = !n && !r && !i && Qi(e), o = n || r || i || a, s = o ? function(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}(e.length, String) : [], c = s.length;
	for (var l in e) !t && !$i.call(e, l) || o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ti(l, c)) || s.push(l);
	return s;
}
function ta(e, t) {
	return function(n) {
		return e(t(n));
	};
}
var na = ta(Object.keys, Object), ra = Object.prototype.hasOwnProperty;
function ia(e) {
	return Pi(e) ? ea(e) : function(e) {
		if (!Ii(e)) return na(e);
		var t = [];
		for (var n in Object(e)) ra.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}(e);
}
var aa = Object.prototype.hasOwnProperty;
function oa(e) {
	return Pi(e) ? ea(e, !0) : function(e) {
		if (!Zr(e)) return function(e) {
			var t = [];
			if (e != null) for (var n in Object(e)) t.push(n);
			return t;
		}(e);
		var t = Ii(e), n = [];
		for (var r in e) (r != "constructor" || !t && aa.call(e, r)) && n.push(r);
		return n;
	}(e);
}
var sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ca = /^\w*$/;
function la(e, t) {
	if (Y(e)) return !1;
	var n = typeof e;
	return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !Gr(e)) || ca.test(e) || !sa.test(e) || t != null && e in Object(t);
}
var ua = di(Object, "create"), da = Object.prototype.hasOwnProperty, fa = Object.prototype.hasOwnProperty;
function pa(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
function ma(e, t) {
	for (var n = e.length; n--;) if (Di(e[n][0], t)) return n;
	return -1;
}
pa.prototype.clear = function() {
	this.__data__ = ua ? ua(null) : {}, this.size = 0;
}, pa.prototype.delete = function(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}, pa.prototype.get = function(e) {
	var t = this.__data__;
	if (ua) {
		var n = t[e];
		return n === "__lodash_hash_undefined__" ? void 0 : n;
	}
	return da.call(t, e) ? t[e] : void 0;
}, pa.prototype.has = function(e) {
	var t = this.__data__;
	return ua ? t[e] !== void 0 : fa.call(t, e);
}, pa.prototype.set = function(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = ua && t === void 0 ? "__lodash_hash_undefined__" : t, this;
};
var ha = Array.prototype.splice;
function ga(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
ga.prototype.clear = function() {
	this.__data__ = [], this.size = 0;
}, ga.prototype.delete = function(e) {
	var t = this.__data__, n = ma(t, e);
	return !(n < 0 || (n == t.length - 1 ? t.pop() : ha.call(t, n, 1), --this.size, 0));
}, ga.prototype.get = function(e) {
	var t = this.__data__, n = ma(t, e);
	return n < 0 ? void 0 : t[n][1];
}, ga.prototype.has = function(e) {
	return ma(this.__data__, e) > -1;
}, ga.prototype.set = function(e, t) {
	var n = this.__data__, r = ma(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
};
var _a = di(Mr, "Map");
function va(e, t) {
	var n, r, i = e.__data__;
	return ((r = typeof (n = t)) == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
}
function ya(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
function ba(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError("Expected a function");
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (ba.Cache || ya)(), n;
}
ya.prototype.clear = function() {
	this.size = 0, this.__data__ = {
		hash: new pa(),
		map: new (_a || ga)(),
		string: new pa()
	};
}, ya.prototype.delete = function(e) {
	var t = va(this, e).delete(e);
	return this.size -= +!!t, t;
}, ya.prototype.get = function(e) {
	return va(this, e).get(e);
}, ya.prototype.has = function(e) {
	return va(this, e).has(e);
}, ya.prototype.set = function(e, t) {
	var n = va(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}, ba.Cache = ya;
var xa, Sa, Ca = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wa = /\\(\\)?/g, Ta = (xa = ba(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ca, function(e, n, r, i) {
		t.push(r ? i.replace(wa, "$1") : n || e);
	}), t;
}, function(e) {
	return Sa.size === 500 && Sa.clear(), e;
}), Sa = xa.cache, xa);
function Ea(e, t) {
	return Y(e) ? e : la(e, t) ? [e] : Ta(function(e) {
		return e == null ? "" : Xr(e);
	}(e));
}
var Da = 1 / 0;
function Oa(e) {
	if (typeof e == "string" || Gr(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Da ? "-0" : t;
}
function ka(e, t) {
	for (var n = 0, r = (t = Ea(t, e)).length; e != null && n < r;) e = e[Oa(t[n++])];
	return n && n == r ? e : void 0;
}
function Aa(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
var ja = ta(Object.getPrototypeOf, Object);
function Ma(e) {
	var t = this.__data__ = new ga(e);
	this.size = t.size;
}
Ma.prototype.clear = function() {
	this.__data__ = new ga(), this.size = 0;
}, Ma.prototype.delete = function(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}, Ma.prototype.get = function(e) {
	return this.__data__.get(e);
}, Ma.prototype.has = function(e) {
	return this.__data__.has(e);
}, Ma.prototype.set = function(e, t) {
	var n = this.__data__;
	if (n instanceof ga) {
		var r = n.__data__;
		if (!_a || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new ya(r);
	}
	return n.set(e, t), this.size = n.size, this;
};
var Na = typeof exports == "object" && exports && !exports.nodeType && exports, Pa = Na && typeof module == "object" && module && !module.nodeType && module, Fa = Pa && Pa.exports === Na ? Mr.Buffer : void 0, Ia = Fa ? Fa.allocUnsafe : void 0;
function La() {
	return [];
}
var Ra = Object.prototype.propertyIsEnumerable, za = Object.getOwnPropertySymbols, Ba = za ? function(e) {
	return e == null ? [] : (e = Object(e), function(t, n) {
		for (var r = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++r < i;) {
			var s = t[r];
			Ra.call(e, s) && (o[a++] = s);
		}
		return o;
	}(za(e)));
} : La, Va = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Aa(t, Ba(e)), e = ja(e);
	return t;
} : La;
function Ha(e, t, n) {
	var r = t(e);
	return Y(e) ? r : Aa(r, n(e));
}
function Ua(e) {
	return Ha(e, ia, Ba);
}
function Wa(e) {
	return Ha(e, oa, Va);
}
var Ga = di(Mr, "DataView"), Ka = di(Mr, "Promise"), qa = di(Mr, "Set"), Ja = "[object Map]", Ya = "[object Promise]", Xa = "[object Set]", Za = "[object WeakMap]", Qa = "[object DataView]", $a = ci(Ga), eo = ci(_a), to = ci(Ka), no = ci(qa), ro = ci(hi), io = Hr;
(Ga && io(new Ga(/* @__PURE__ */ new ArrayBuffer(1))) != Qa || _a && io(new _a()) != Ja || Ka && io(Ka.resolve()) != Ya || qa && io(new qa()) != Xa || hi && io(new hi()) != Za) && (io = function(e) {
	var t = Hr(e), n = t == "[object Object]" ? e.constructor : void 0, r = n ? ci(n) : "";
	if (r) switch (r) {
		case $a: return Qa;
		case eo: return Ja;
		case to: return Ya;
		case no: return Xa;
		case ro: return Za;
	}
	return t;
});
var ao = io, oo = Object.prototype.hasOwnProperty, so = Mr.Uint8Array;
function co(e) {
	var t = new e.constructor(e.byteLength);
	return new so(t).set(new so(e)), t;
}
var lo = /\w*$/, uo = Nr ? Nr.prototype : void 0, fo = uo ? uo.valueOf : void 0, po = "[object Boolean]", mo = "[object Date]", ho = "[object Map]", go = "[object Number]", _o = "[object RegExp]", vo = "[object Set]", yo = "[object String]", bo = "[object Symbol]", xo = "[object ArrayBuffer]", So = "[object DataView]", Co = "[object Float32Array]", wo = "[object Float64Array]", To = "[object Int8Array]", Eo = "[object Int16Array]", Do = "[object Int32Array]", Oo = "[object Uint8Array]", ko = "[object Uint8ClampedArray]", Ao = "[object Uint16Array]", jo = "[object Uint32Array]", Mo = Xi && Xi.isMap, No = Mo ? Ki(Mo) : function(e) {
	return Ur(e) && ao(e) == "[object Map]";
}, Po = Xi && Xi.isSet, Fo = Po ? Ki(Po) : function(e) {
	return Ur(e) && ao(e) == "[object Set]";
}, Io = 1, Lo = 2, Ro = 4, zo = "[object Arguments]", Bo = "[object Function]", Vo = "[object GeneratorFunction]", Ho = "[object Object]", Z = {};
function Uo(e, t, n, r, i, a) {
	var o, s = t & Io, c = t & Lo, l = t & Ro;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Zr(e)) return e;
	var u = Y(e);
	if (u) {
		if (o = function(e) {
			var t = e.length, n = new e.constructor(t);
			return t && typeof e[0] == "string" && oo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
		}(e), !s) return function(e, t) {
			var n = -1, r = e.length;
			for (t ||= Array(r); ++n < r;) t[n] = e[n];
			return t;
		}(e, o);
	} else {
		var d = ao(e), f = d == Bo || d == Vo;
		if (Gi(e)) return function(e, t) {
			if (t) return e.slice();
			var n = e.length, r = Ia ? Ia(n) : new e.constructor(n);
			return e.copy(r), r;
		}(e, s);
		if (d == Ho || d == zo || f && !i) {
			if (o = c || f ? {} : function(e) {
				return typeof e.constructor != "function" || Ii(e) ? {} : _i(ja(e));
			}(e), !s) return c ? function(e, t) {
				return Ai(e, Va(e), t);
			}(e, function(e, t) {
				return e && Ai(t, oa(t), e);
			}(o, e)) : function(e, t) {
				return Ai(e, Ba(e), t);
			}(e, function(e, t) {
				return e && Ai(t, ia(t), e);
			}(o, e));
		} else {
			if (!Z[d]) return i ? e : {};
			o = function(e, t, n) {
				var r, i, a = e.constructor;
				switch (t) {
					case xo: return co(e);
					case po:
					case mo: return new a(+e);
					case So: return function(e, t) {
						var n = t ? co(e.buffer) : e.buffer;
						return new e.constructor(n, e.byteOffset, e.byteLength);
					}(e, n);
					case Co:
					case wo:
					case To:
					case Eo:
					case Do:
					case Oo:
					case ko:
					case Ao:
					case jo: return function(e, t) {
						var n = t ? co(e.buffer) : e.buffer;
						return new e.constructor(n, e.byteOffset, e.length);
					}(e, n);
					case ho: return new a();
					case go:
					case yo: return new a(e);
					case _o: return (i = new (r = e).constructor(r.source, lo.exec(r))).lastIndex = r.lastIndex, i;
					case vo: return new a();
					case bo: return fo ? Object(fo.call(e)) : {};
				}
			}(e, d, s);
		}
	}
	a ||= new Ma();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Fo(e) ? e.forEach(function(r) {
		o.add(Uo(r, t, n, r, e, a));
	}) : No(e) && e.forEach(function(r, i) {
		o.set(i, Uo(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Wa : Ua : c ? oa : ia)(e);
	return function(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
	}(m || e, function(r, i) {
		m && (r = e[i = r]), ki(o, i, Uo(r, t, n, i, e, a));
	}), o;
}
function Wo(e) {
	return Uo(e, 4);
}
function Go(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new ya(); ++t < n;) this.add(e[t]);
}
function Ko(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
function qo(e, t) {
	return e.has(t);
}
Z[zo] = Z["[object Array]"] = Z["[object ArrayBuffer]"] = Z["[object DataView]"] = Z["[object Boolean]"] = Z["[object Date]"] = Z["[object Float32Array]"] = Z["[object Float64Array]"] = Z["[object Int8Array]"] = Z["[object Int16Array]"] = Z["[object Int32Array]"] = Z["[object Map]"] = Z["[object Number]"] = Z[Ho] = Z["[object RegExp]"] = Z["[object Set]"] = Z["[object String]"] = Z["[object Symbol]"] = Z["[object Uint8Array]"] = Z["[object Uint8ClampedArray]"] = Z["[object Uint16Array]"] = Z["[object Uint32Array]"] = !0, Z["[object Error]"] = Z[Bo] = Z["[object WeakMap]"] = !1, Go.prototype.add = Go.prototype.push = function(e) {
	return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, Go.prototype.has = function(e) {
	return this.__data__.has(e);
};
var Jo = 1, Yo = 2;
function Xo(e, t, n, r, i, a) {
	var o = n & Jo, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Yo ? new Go() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Ko(t, function(e, t) {
				if (!qo(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
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
function Zo(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
function Qo(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
var $o = 1, es = 2, ts = "[object Boolean]", ns = "[object Date]", rs = "[object Error]", is = "[object Map]", as = "[object Number]", os = "[object RegExp]", ss = "[object Set]", cs = "[object String]", ls = "[object Symbol]", us = "[object ArrayBuffer]", ds = "[object DataView]", fs = Nr ? Nr.prototype : void 0, ps = fs ? fs.valueOf : void 0, ms = 1, hs = Object.prototype.hasOwnProperty, gs = 1, _s = "[object Arguments]", vs = "[object Array]", ys = "[object Object]", bs = Object.prototype.hasOwnProperty;
function xs(e, t, n, r, i) {
	return e === t || (e == null || t == null || !Ur(e) && !Ur(t) ? e != e && t != t : function(e, t, n, r, i, a) {
		var o = Y(e), s = Y(t), c = o ? vs : ao(e), l = s ? vs : ao(t), u = (c = c == _s ? ys : c) == ys, d = (l = l == _s ? ys : l) == ys, f = c == l;
		if (f && Gi(e)) {
			if (!Gi(t)) return !1;
			o = !0, u = !1;
		}
		if (f && !u) return a ||= new Ma(), o || Qi(e) ? Xo(e, t, n, r, i, a) : function(e, t, n, r, i, a, o) {
			switch (n) {
				case ds:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case us: return !(e.byteLength != t.byteLength || !a(new so(e), new so(t)));
				case ts:
				case ns:
				case as: return Di(+e, +t);
				case rs: return e.name == t.name && e.message == t.message;
				case os:
				case cs: return e == t + "";
				case is: var s = Zo;
				case ss:
					if (s ||= Qo, e.size != t.size && !(r & $o)) return !1;
					var c = o.get(e);
					if (c) return c == t;
					r |= es, o.set(e, t);
					var l = Xo(s(e), s(t), r, i, a, o);
					return o.delete(e), l;
				case ls: if (ps) return ps.call(e) == ps.call(t);
			}
			return !1;
		}(e, t, c, n, r, i, a);
		if (!(n & gs)) {
			var p = u && bs.call(e, "__wrapped__"), m = d && bs.call(t, "__wrapped__");
			if (p || m) {
				var h = p ? e.value() : e, g = m ? t.value() : t;
				return a ||= new Ma(), i(h, g, n, r, a);
			}
		}
		return !!f && (a ||= new Ma(), function(e, t, n, r, i, a) {
			var o = n & ms, s = Ua(e), c = s.length;
			if (c != Ua(t).length && !o) return !1;
			for (var l = c; l--;) {
				var u = s[l];
				if (!(o ? u in t : hs.call(t, u))) return !1;
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
	}(e, t, n, r, xs, i));
}
var Ss = 1, Cs = 2;
function ws(e) {
	return e == e && !Zr(e);
}
function Ts(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
function Es(e, t) {
	return e != null && t in Object(e);
}
var Ds = 1, Os = 2;
function ks(e) {
	return typeof e == "function" ? e : e == null ? Qr : typeof e == "object" ? Y(e) ? function(e, t) {
		return la(e) && ws(t) ? Ts(Oa(e), t) : function(n) {
			var r = function(e, t, n) {
				var r = e == null ? void 0 : ka(e, t);
				return r === void 0 ? void 0 : r;
			}(n, e);
			return r === void 0 && r === t ? function(e, t) {
				return e != null && function(e, t, n) {
					for (var r = -1, i = (t = Ea(t, e)).length, a = !1; ++r < i;) {
						var o = Oa(t[r]);
						if (!(a = e != null && n(e, o))) break;
						e = e[o];
					}
					return a || ++r != i ? a : !!(i = e == null ? 0 : e.length) && Ni(i) && Ti(o, i) && (Y(e) || Vi(e));
				}(e, t, Es);
			}(n, e) : xs(t, r, Ds | Os);
		};
	}(e[0], e[1]) : (i = function(e) {
		for (var t = ia(e), n = t.length; n--;) {
			var r = t[n], i = e[r];
			t[n] = [
				r,
				i,
				ws(i)
			];
		}
		return t;
	}(r = e), i.length == 1 && i[0][2] ? Ts(i[0][0], i[0][1]) : function(e) {
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
					var u = new Ma();
					if (!xs(l, c, Ss | Cs, void 0, u)) return !1;
				}
			}
			return !0;
		}(e, 0, i);
	}) : la(t = e) ? (n = Oa(t), function(e) {
		return e?.[n];
	}) : function(e) {
		return function(t) {
			return ka(t, e);
		};
	}(t);
	var t, n, r, i;
}
function As(e, t) {
	return e && function(e, t, n) {
		for (var r = -1, i = Object(e), a = n(e), o = a.length; o--;) {
			var s = a[++r];
			if (!1 === t(i[s], s, i)) break;
		}
		return e;
	}(e, t, ia);
}
var js = As, Ms = function(e, t) {
	if (e == null) return e;
	if (!Pi(e)) return js(e, t);
	for (var n = e.length, r = -1, i = Object(e); ++r < n && !1 !== t(i[r], r, i););
	return e;
};
function Ns(e, t) {
	var n = -1, r = Pi(e) ? Array(e.length) : [];
	return Ms(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
function Ps(e, t) {
	return e > t;
}
var Fs = Math.min;
function Is(e) {
	return function(e) {
		return Ur(e) && Pi(e);
	}(e) ? e : [];
}
var Ls = function(e, t) {
	return bi(function(e, t, n) {
		return t = ji(t === void 0 ? e.length - 1 : t, 0), function() {
			for (var r = arguments, i = -1, a = ji(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
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
	}(e, void 0, Qr), e + "");
}(function(e) {
	var t = Kr(e, Is);
	return t.length && t[0] === e[0] ? function(e, t, n) {
		for (var r = Si, i = e[0].length, a = e.length, o = a, s = Array(a), c = Infinity, l = []; o--;) {
			var u = e[o];
			c = Fs(u.length, c), s[o] = i >= 120 && u.length >= 120 ? new Go(o && u) : void 0;
		}
		u = e[0];
		var d = -1, f = s[0];
		t: for (; ++d < i && l.length < c;) {
			var p = u[d], m = p;
			if (p = p === 0 ? 0 : p, !(f ? qo(f, m) : r(l, m, n))) {
				for (o = a; --o;) {
					var h = s[o];
					if (!(h ? qo(h, m) : r(e[o], m, n))) continue t;
				}
				f && f.push(m), l.push(p);
			}
		}
		return l;
	}(t) : [];
});
function Rs(e, t) {
	return e < t;
}
function zs(e, t, n) {
	for (var r = -1, i = e.length; ++r < i;) {
		var a = e[r], o = t(a);
		if (o != null && (s === void 0 ? o == o && !Gr(o) : n(o, s))) var s = o, c = a;
	}
	return c;
}
function Bs(e, t) {
	return e && e.length ? zs(e, ks(t), Ps) : void 0;
}
function Vs(e, t) {
	for (var n, r = -1, i = e.length; ++r < i;) {
		var a = t(e[r]);
		a !== void 0 && (n = n === void 0 ? a : n + a);
	}
	return n;
}
function Hs(e, t) {
	return function(e, t) {
		var n = e == null ? 0 : e.length;
		return n ? Vs(e, t) / n : NaN;
	}(e, ks(t));
}
function Us(e, t) {
	if (e !== t) {
		var n = e !== void 0, r = e === null, i = e == e, a = Gr(e), o = t !== void 0, s = t === null, c = t == t, l = Gr(t);
		if (!s && !l && !a && e > t || a && o && c && !s && !l || r && o && c || !n && c || !i) return 1;
		if (!r && !a && !l && e < t || l && n && i && !r && !a || s && n && i || !o && i || !c) return -1;
	}
	return 0;
}
function Ws(e, t, n, r) {
	return e == null ? [] : (Y(t) || (t = t == null ? [] : [t]), Y(n = r ? void 0 : n) || (n = n == null ? [] : [n]), function(e, t, n) {
		t = t.length ? Kr(t, function(e) {
			return Y(e) ? function(t) {
				return ka(t, e.length === 1 ? e[0] : e);
			} : e;
		}) : [Qr];
		var r = -1;
		return t = Kr(t, Ki(ks)), function(e, t) {
			var r = e.length;
			for (e.sort(function(e, t) {
				return function(e, t, n) {
					for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
						var c = Us(i[r], a[r]);
						if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
					}
					return e.index - t.index;
				}(e, t, n);
			}); r--;) e[r] = e[r].value;
			return e;
		}(Ns(e, function(e, n, i) {
			return {
				criteria: Kr(t, function(t) {
					return t(e);
				}),
				index: ++r,
				value: e
			};
		}));
	}(e, t, n));
}
function Gs(e, t) {
	return e && e.length ? Vs(e, ks(t)) : 0;
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
var $ = Q, Ks = function(e, t) {
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
}, qs = function(e, t, n) {
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
		if (Y(o) ? (f = o || ["key"], p = a || ["asc"]) : (o === "term" || o === "key" ? (f = ["key"], p = [a || "asc"]) : (f = ["doc_count", "key"], p = [a || "desc", "asc"]), u && (f.unshift("selected"), p.unshift("desc"))), h = Ws(h, f, p), h = h.slice(0, s || 10), l) {
			let t = [];
			Object.entries(e).forEach((e) => {
				if (isNaN(e[0])) throw Error("You cant use chars to calculate the facet_stats.");
				e[1].array().length > 0 && e[1].forEach(() => {
					t.push(parseInt(e[0]));
				});
			}), m = {
				min: (g = t, g && g.length ? zs(g, ks(void 0), Rs) : void 0),
				max: Bs(t),
				avg: Hs(t),
				sum: Gs(t)
			};
		}
		var g, _;
		return kr({
			name: i,
			title: c || (_ = i, _.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(e) {
				return e.toUpperCase();
			})),
			position: r++,
			buckets: h
		}, l && { facet_stats: m });
	}, o = {}, a = ks(a), As(i, function(e, t, n) {
		Ei(o, t, a(e, t, n));
	}), o;
	var i, a, o;
};
function Js(e, t) {
	var n = [];
	return e.forEach(function(e) {
		t.forEach(function(t) {
			n.push(e.concat(t));
		});
	}), n;
}
function Ys(e) {
	return !!~e.search(/\(|\)/);
}
function Xs(e, t) {
	for (var n = t.split(" " + e + " "), r = [], i = [], a = 0; a < n.length; a++) if (Ys(n[a]) || i.length > 0) {
		i.push(n[a]);
		var o = "" + i;
		(o.match(/\(/g) || []).length === (o.match(/\)/g) || []).length && (r.push(i.join(" " + e + " ")), i = []);
	} else r.push(n[a]);
	return r;
}
var Zs = function e(t) {
	return function(e) {
		for (var t = e[0], n = 1; n < e.length; n++) t = t.concat(e[n]);
		return t;
	}(Xs("OR", (n = t = function(e) {
		if (e.charAt(0) === "(") {
			for (var t = 0, n = 0; n < e.length; n++) if (e.charAt(n) === "(" ? t++ : e.charAt(n) === ")" && t--, t === 0) return n === e.length - 1 ? e.substring(1, e.length - 1) : e;
		}
		return e;
	}(t), t = n.replace(/[\s]+/g, " "))).map(function(t) {
		for (var n = Xs("AND", t), r = [], i = [], a = 0; a < n.length; a++) Ys(n[a]) ? r.push(e(n[a])) : i.push(n[a]);
		return r.push([i]), function(e) {
			for (var t = [[]], n = 0; n < e.length; n++) t = Js(t, e[n]);
			return t;
		}(r);
	}));
	var n;
}, Qs = (e) => typeof e == "boolean" ? e ? "AND" : "OR" : typeof e == "string" && e.toUpperCase() === "OR" ? "OR" : "AND", $s = function(e, t) {
	let n = t && t.aggregations || {}, r = Object.create(null), i = !1, a = kr({}, n);
	return Object.keys(e || {}).forEach((t) => {
		let o = n[t];
		if (!o) return;
		let s = e[t]?.selected;
		Array.isArray(s) && s.length && (r[t] = s, i = !0);
		let c = e[t]?.options;
		if (c) {
			let e = {};
			c.conjunction !== void 0 && (e.conjunction = Qs(c.conjunction) === "AND"), typeof c.size == "number" && (e.size = c.size), c.sortBy === "key" ? (e.sort = "key", e.order = c.sortDir || o.order) : c.sortBy === "count" ? (e.sort = void 0, e.order = c.sortDir || o.order) : c.sortDir && (e.order = c.sortDir), typeof c.hideZero == "boolean" && (e.hide_zero_doc_count = c.hideZero), typeof c.chosenOnTop == "boolean" && (e.chosen_filters_on_top = c.chosenOnTop), typeof c.showStats == "boolean" && (e.show_facet_stats = c.showStats), Object.keys(e).length && (a[t] = kr({}, n[t], e));
		}
	}), {
		hasFilters: i,
		filters: i ? r : void 0,
		aggregations: a
	};
};
function ec(e, t, n, r, i) {
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
				aggregations: qs(g, t, n.aggregations)
			}
		};
	}
	let _ = !1, v = (/* @__PURE__ */ new Date()).getTime(), y, b = 0, x = m.array();
	t.sort ? (y = x.map((e) => i.get_item(e)), y = function(e, t, n) {
		if (n && n[t] && (t = n[t]), t.field) {
			let n = Array.isArray(t.field) ? t.field : [t.field], r = Array.isArray(t.order) ? t.order : [t.order || "asc"], i = [], a = [];
			return n.forEach((e, t) => {
				i.push((t) => +(t[e] == null)), a.push("asc"), i.push(e), a.push(r[t] || "asc");
			}), Ws(e, i, a);
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
			aggregations: qs(g, t, n.aggregations)
		}
	};
}
var tc = function(e) {
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
}(), nc = class {
	constructor(e, t) {
		if (this.store = /* @__PURE__ */ new Map(), t != null && t.fulltextSnapshot) {
			let e = JSON.parse(JSON.stringify(t.fulltextSnapshot.index));
			this.idx = tc.Index.load(e), this.store = new Map(t.fulltextSnapshot.store);
			return;
		}
		this.idx = tc(function() {
			this.field("name", { boost: 10 }), (t?.searchableFields || []).forEach((e) => this.field(e)), this.ref("_id"), t != null && t.isExactSearch && (this.pipeline.remove(tc.stemmer), this.pipeline.remove(tc.stopWordFilter)), t != null && t.removeStopWordFilter && this.pipeline.remove(tc.stopWordFilter);
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
}, rc = class {
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
		}(e, ia(t.aggregations)), this._items_map = Object.create(null), this._ids = [];
		let r = 1;
		var i;
		(Y(i = e) ? Kr : Ns)(i, ks((e) => {
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
		r.not_ids = Ks(this.facets.bits_data, e.not_filters);
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
			let n = Wo(e);
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
			let n = Wo(e);
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
		}(a, Zs(e.filters_query).map((e) => Array.isArray(e) ? e.map((e) => Array.isArray(e) ? e.map((e) => e) : e.split(":")) : e.split(":")))), r.bits_data_temp = a.bits_data_temp;
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
		}), e), new $([])) : Ks(o, e.filters), r;
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
function ic(e, t) {
	let n;
	!1 !== (t ||= Object.create(null)).native_search_enabled && (n = new nc(e, t));
	let r = new rc(e, t);
	return {
		search: function(i) {
			var a;
			i ||= Object.create(null);
			let o = t;
			if (i.facets) {
				let { aggregations: e, filters: n } = $s(i.facets, t);
				if (o = kr({}, t, { aggregations: e }), n && (i.filters = kr({}, i.filters || {}, n)), !i.filters_query) {
					let e = function(e, t) {
						if (!e || typeof e != "object") return;
						let n = t && t.aggregations || {}, r = [];
						return Object.keys(e).forEach((t) => {
							var i, a;
							if (!n[t]) return;
							let o = e[t]?.selected || [];
							if (!Array.isArray(o) || o.length === 0) return;
							let s = Qs((i = e[t]) == null || (a = i.options) == null ? void 0 : a.conjunction), c = o.map((e) => {
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
					let i = kr({}, e[r]);
					i.field = i.field || r, i.filters = t.filters && t.filters[r] || [], i.not_filters = t.exclude_filters && t.exclude_filters[r] || t.not_filters && t.not_filters[r] || [], n[r] = i;
				}
				return n;
			}(o.aggregations, i);
			let s = ec(e, i, o, n, r);
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
					let t = Ls(o[s], e[n][s]);
					t.length >= i && c.push(kr({}, e[n], { intersection_length: t.length }));
				}
				return c = Ws(c, ["intersection_length"], ["desc"]), {
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
				let { aggregations: e } = $s(i.facets, t);
				a = kr({}, t, { aggregations: e }), r.config = a.aggregations;
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
				let c = ec(e, s, kr({}, n, { aggregations: kr({}, n.aggregations, { [t.name]: kr({}, n.aggregations[t.name], { size: 1e4 }) }) }), r, i).data.aggregations[t.name].buckets;
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
			n = new nc(e = i, t), r = new rc(e, t);
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
//#region node_modules/justified-layout/lib/row.js
var ac = /* @__PURE__ */ w(((e, t) => {
	var n = t.exports = function(e) {
		this.top = e.top, this.left = e.left, this.width = e.width, this.spacing = e.spacing, this.targetRowHeight = e.targetRowHeight, this.targetRowHeightTolerance = e.targetRowHeightTolerance, this.minAspectRatio = this.width / e.targetRowHeight * (1 - e.targetRowHeightTolerance), this.maxAspectRatio = this.width / e.targetRowHeight * (1 + e.targetRowHeightTolerance), this.edgeCaseMinRowHeight = e.edgeCaseMinRowHeight, this.edgeCaseMaxRowHeight = e.edgeCaseMaxRowHeight, this.widowLayoutStyle = e.widowLayoutStyle, this.isBreakoutRow = e.isBreakoutRow, this.items = [], this.height = 0;
	};
	n.prototype = {
		addItem: function(e) {
			var t = this.items.concat(e), n = this.width - (t.length - 1) * this.spacing, r = t.reduce(function(e, t) {
				return e + t.aspectRatio;
			}, 0), i = n / this.targetRowHeight, a, o, s;
			return this.isBreakoutRow && this.items.length === 0 && e.aspectRatio >= 1 ? (this.items.push(e), this.completeLayout(n / e.aspectRatio, "justify"), !0) : r < this.minAspectRatio ? (this.items.push(Object.assign({}, e)), !0) : r > this.maxAspectRatio ? this.items.length === 0 ? (this.items.push(Object.assign({}, e)), this.completeLayout(n / r, "justify"), !0) : (a = this.width - (this.items.length - 1) * this.spacing, o = this.items.reduce(function(e, t) {
				return e + t.aspectRatio;
			}, 0), s = a / this.targetRowHeight, Math.abs(r - i) > Math.abs(o - s) ? (this.completeLayout(a / o, "justify"), !1) : (this.items.push(Object.assign({}, e)), this.completeLayout(n / r, "justify"), !0)) : (this.items.push(Object.assign({}, e)), this.completeLayout(n / r, "justify"), !0);
		},
		isLayoutComplete: function() {
			return this.height > 0;
		},
		completeLayout: function(e, t) {
			var n = this.left, r = this.width - (this.items.length - 1) * this.spacing, i, a, o, s, c, l;
			(t === void 0 || [
				"justify",
				"center",
				"left"
			].indexOf(t) < 0) && (t = "left"), a = Math.max(this.edgeCaseMinRowHeight, Math.min(e, this.edgeCaseMaxRowHeight)), e === a ? (this.height = e, i = 1) : (this.height = a, i = r / a / (r / e)), this.items.forEach(function(e) {
				e.top = this.top, e.width = e.aspectRatio * this.height * i, e.height = this.height, e.left = n, n += e.width + this.spacing;
			}, this), t === "justify" ? (n -= this.spacing + this.left, o = (n - this.width) / this.items.length, s = this.items.map(function(e, t) {
				return Math.round((t + 1) * o);
			}), this.items.length === 1 ? (c = this.items[0], c.width -= Math.round(o)) : this.items.forEach(function(e, t) {
				t > 0 ? (e.left -= s[t - 1], e.width -= s[t] - s[t - 1]) : e.width -= s[t];
			})) : t === "center" && (l = (this.width - n) / 2, this.items.forEach(function(e) {
				e.left += l + this.spacing;
			}, this));
		},
		forceComplete: function(e, t) {
			typeof t == "number" ? this.completeLayout(t, this.widowLayoutStyle) : this.completeLayout(this.targetRowHeight, this.widowLayoutStyle);
		},
		getItems: function() {
			return this.items;
		}
	};
})), oc = /* @__PURE__ */ d((/* @__PURE__ */ w(((e, t) => {
	var n = ac();
	function r(e, t) {
		var r;
		return e.fullWidthBreakoutRowCadence !== !1 && (t._rows.length + 1) % e.fullWidthBreakoutRowCadence === 0 && (r = !0), new n({
			top: t._containerHeight,
			left: e.containerPadding.left,
			width: e.containerWidth - e.containerPadding.left - e.containerPadding.right,
			spacing: e.boxSpacing.horizontal,
			targetRowHeight: e.targetRowHeight,
			targetRowHeightTolerance: e.targetRowHeightTolerance,
			edgeCaseMinRowHeight: .5 * e.targetRowHeight,
			edgeCaseMaxRowHeight: 2 * e.targetRowHeight,
			rightToLeft: !1,
			isBreakoutRow: r,
			widowLayoutStyle: e.widowLayoutStyle
		});
	}
	function i(e, t, n) {
		return t._rows.push(n), t._layoutItems = t._layoutItems.concat(n.getItems()), t._containerHeight += n.height + e.boxSpacing.vertical, n.items;
	}
	function a(e, t, n) {
		var a = [], o, s, c;
		return e.forceAspectRatio && n.forEach(function(t) {
			t.forcedAspectRatio = !0, t.aspectRatio = e.forceAspectRatio;
		}), n.some(function(n, c) {
			if (isNaN(n.aspectRatio)) throw Error("Item " + c + " has an invalid aspect ratio");
			if (s ||= r(e, t), o = s.addItem(n), s.isLayoutComplete()) {
				if (a = a.concat(i(e, t, s)), t._rows.length >= e.maxNumRows) return s = null, !0;
				if (s = r(e, t), !o && (o = s.addItem(n), s.isLayoutComplete())) {
					if (a = a.concat(i(e, t, s)), t._rows.length >= e.maxNumRows) return s = null, !0;
					s = r(e, t);
				}
			}
		}), s && s.getItems().length && e.showWidows && (t._rows.length ? (c = t._rows[t._rows.length - 1].isBreakoutRow ? t._rows[t._rows.length - 1].targetRowHeight : t._rows[t._rows.length - 1].height, s.forceComplete(!1, c)) : s.forceComplete(!1), a = a.concat(i(e, t, s)), e._widowCount = s.getItems().length), t._containerHeight -= e.boxSpacing.vertical, t._containerHeight += e.containerPadding.bottom, {
			containerHeight: t._containerHeight,
			widowCount: e._widowCount,
			boxes: t._layoutItems
		};
	}
	t.exports = function(e, t) {
		var n = {}, r = {}, i = {
			containerWidth: 1060,
			containerPadding: 10,
			boxSpacing: 10,
			targetRowHeight: 320,
			targetRowHeightTolerance: .25,
			maxNumRows: Infinity,
			forceAspectRatio: !1,
			showWidows: !0,
			fullWidthBreakoutRowCadence: !1,
			widowLayoutStyle: "left"
		}, o = {}, s = {};
		return t ||= {}, n = Object.assign(i, t), o.top = isNaN(parseFloat(n.containerPadding.top)) ? n.containerPadding : n.containerPadding.top, o.right = isNaN(parseFloat(n.containerPadding.right)) ? n.containerPadding : n.containerPadding.right, o.bottom = isNaN(parseFloat(n.containerPadding.bottom)) ? n.containerPadding : n.containerPadding.bottom, o.left = isNaN(parseFloat(n.containerPadding.left)) ? n.containerPadding : n.containerPadding.left, s.horizontal = isNaN(parseFloat(n.boxSpacing.horizontal)) ? n.boxSpacing : n.boxSpacing.horizontal, s.vertical = isNaN(parseFloat(n.boxSpacing.vertical)) ? n.boxSpacing : n.boxSpacing.vertical, n.containerPadding = o, n.boxSpacing = s, r._layoutItems = [], r._awakeItems = [], r._inViewportItems = [], r._leadingOrphans = [], r._trailingOrphans = [], r._containerHeight = n.containerPadding.top, r._rows = [], r._orphans = [], n._widowCount = 0, a(n, r, e.map(function(e) {
			return e.width && e.height ? { aspectRatio: e.width / e.height } : { aspectRatio: e };
		}));
	};
})))(), 1), sc = "#3C1815", cc = "#FFFFF0", lc = A({
	name: "snadiya-site",
	extends: Ee,
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
		"--color-background-body": cc,
		"--color-background-surface": cc,
		"--color-background-card": cc,
		"--color-background-popover": cc,
		"--color-background-muted": "rgba(60,24,21,.06)",
		"--color-text-primary": sc,
		"--color-text-secondary": sc,
		"--color-icon-primary": sc,
		"--color-icon-secondary": sc,
		"--color-accent": sc,
		"--color-accent-muted": "rgba(60,24,21,.1)",
		"--color-text-accent": sc,
		"--color-icon-accent": sc,
		"--color-on-accent": cc,
		"--color-border": "rgba(60,24,21,.18)",
		"--color-border-emphasized": "rgba(60,24,21,.5)",
		"--color-overlay-hover": "rgba(60,24,21,.06)",
		"--color-overlay-pressed": "rgba(60,24,21,.12)",
		"--color-track": "rgba(60,24,21,.18)",
		"--color-text-disabled": sc
	}
}), uc = window.SITE_PAGE || { type: "home" }, dc = "https://linktr.ee/snadiya", fc = 6, pc = [
	"silentwhale.html",
	"pantied.html",
	"boundborne.html"
], mc = { borderRadius: "var(--radius-container)" };
function hc(e = "(max-width: 768px)") {
	let [t, n] = (0, U.useState)(() => window.matchMedia(e).matches);
	return (0, U.useEffect)(() => {
		let t = window.matchMedia(e), r = () => n(t.matches);
		return t.addEventListener("change", r), () => t.removeEventListener("change", r);
	}, [e]), t;
}
function gc({ works: e, maxRows: t }) {
	let n = (0, U.useRef)(null), [r, i] = (0, U.useState)(0);
	(0, U.useLayoutEffect)(() => {
		let e = n.current;
		if (!e) return;
		let t = new ResizeObserver(() => i(e.clientWidth));
		return t.observe(e), i(e.clientWidth), () => t.disconnect();
	}, []);
	let a = (0, U.useMemo)(() => {
		if (!r) return [];
		let t = (0, oc.default)(e.map((e) => ({
			width: e.w,
			height: e.h
		})), {
			containerWidth: r,
			containerPadding: 0,
			boxSpacing: {
				horizontal: 16,
				vertical: 0
			},
			targetRowHeight: r < 600 ? 170 : 260,
			targetRowHeightTolerance: .25
		}), n = [];
		return t.boxes.forEach((t, r) => {
			let i = n[n.length - 1];
			i && i.top === t.top ? i.items.push([t, e[r]]) : n.push({
				top: t.top,
				items: [[t, e[r]]]
			});
		}), n;
	}, [e, r]);
	return /* @__PURE__ */ (0, W.jsx)("div", {
		ref: n,
		children: /* @__PURE__ */ (0, W.jsx)(q, {
			gap: 8,
			children: (t ? a.slice(0, t) : a).map((e) => /* @__PURE__ */ (0, W.jsx)(Xt, {
				gap: 4,
				vAlign: "start",
				children: e.items.map(([e, t]) => /* @__PURE__ */ (0, W.jsxs)(q, {
					gap: 1,
					width: e.width,
					children: [
						/* @__PURE__ */ (0, W.jsx)("a", {
							href: t.id,
							tabIndex: -1,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, W.jsx)(tn, {
								ratio: t.w / t.h,
								fit: "cover",
								style: mc,
								children: /* @__PURE__ */ (0, W.jsx)("img", {
									src: t.thumb,
									loading: "lazy",
									alt: ""
								})
							})
						}),
						/* @__PURE__ */ (0, W.jsx)(It, {
							href: t.id,
							isStandalone: !0,
							children: /* @__PURE__ */ (0, W.jsx)(g, {
								weight: "semibold",
								children: t.title
							})
						}),
						t.format.length > 0 && /* @__PURE__ */ (0, W.jsx)(g, {
							type: "supporting",
							color: "primary",
							children: t.format.join(" + ")
						})
					]
				}, t.id))
			}, e.top))
		})
	});
}
function _c({ list: e, byId: t }) {
	return /* @__PURE__ */ (0, W.jsx)(qt, {
		columns: { minWidth: 220 },
		gap: 6,
		children: e.map((e) => {
			let n = t[e.cover + ".html"], r = e.files.length === 1 ? e.files[0] : e.slug + ".html";
			return /* @__PURE__ */ (0, W.jsxs)(q, {
				gap: 2,
				children: [/* @__PURE__ */ (0, W.jsx)("a", {
					href: r,
					tabIndex: -1,
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, W.jsx)(tn, {
						ratio: 4 / 5,
						fit: "cover",
						style: mc,
						children: /* @__PURE__ */ (0, W.jsx)("img", {
							src: n && n.thumb,
							loading: "lazy",
							alt: ""
						})
					})
				}), /* @__PURE__ */ (0, W.jsx)(It, {
					href: r,
					isStandalone: !0,
					children: /* @__PURE__ */ (0, W.jsx)(g, {
						type: "large",
						weight: "semibold",
						children: e.name
					})
				})]
			}, e.slug);
		})
	});
}
function vc({ byId: e }) {
	return /* @__PURE__ */ (0, W.jsxs)(q, {
		gap: 10,
		children: [/* @__PURE__ */ (0, W.jsxs)(q, {
			gap: 6,
			hAlign: "center",
			children: [/* @__PURE__ */ (0, W.jsx)(c, {
				level: 1,
				type: "display-1",
				justify: "center",
				children: "Snadiya"
			}), /* @__PURE__ */ (0, W.jsxs)(Xt, {
				gap: 3,
				children: [/* @__PURE__ */ (0, W.jsx)(t, {
					label: "All comics",
					variant: "primary",
					href: "#all"
				}), /* @__PURE__ */ (0, W.jsx)(t, {
					label: "Links",
					variant: "secondary",
					href: dc,
					target: "_blank"
				})]
			})]
		}), /* @__PURE__ */ (0, W.jsx)(qt, {
			columns: {
				minWidth: 240,
				repeat: "fit"
			},
			gap: 4,
			children: pc.map((t) => e[t]).filter(Boolean).map((e) => /* @__PURE__ */ (0, W.jsx)("a", {
				href: e.id,
				"aria-label": e.title,
				children: /* @__PURE__ */ (0, W.jsx)(tn, {
					ratio: 4 / 5,
					fit: "cover",
					style: mc,
					children: /* @__PURE__ */ (0, W.jsx)("img", {
						src: e.thumb,
						alt: ""
					})
				})
			}, e.id))
		})]
	});
}
function yc({ data: e }) {
	let n = hc(), r = e.groups.filter((e) => e.key !== "format" && e.key !== "franchise"), i = () => Object.fromEntries(e.groups.map((e) => [e.key, []])), [a, o] = (0, U.useState)(i), [s, c] = (0, U.useState)(""), [l, u] = (0, U.useState)("A to Z"), [d, f] = (0, U.useState)(!1), [p, m] = (0, U.useState)(!1), h = (0, U.useMemo)(() => ic(e.works, {
		aggregations: Object.fromEntries(e.groups.map((e) => [e.key, {
			size: 1e3,
			conjunction: !0
		}])),
		native_search_enabled: !1
	}), [e]).search({
		per_page: 1e3,
		filters: a
	}), _ = Object.fromEntries(e.groups.map((e) => [e.key, Object.fromEntries(h.data.aggregations[e.key].buckets.map((e) => [e.key, e.doc_count]))])), v = (0, U.useMemo)(() => Object.fromEntries(e.groups.map((t) => {
		let n = {};
		return e.works.forEach((e) => (e[t.key] || []).forEach((e) => {
			n[e] = (n[e] || 0) + 1;
		})), [t.key, Object.keys(n).sort((e, t) => n[t] - n[e] || e.localeCompare(t))];
	})), [e]), y = s.trim().toLowerCase(), b = new Set(h.data.items.map((e) => e.id)), x = e.works.filter((e) => b.has(e.id) && (!y || [
		e.title,
		...e.characters,
		...e.themes,
		...e.settings,
		...e.franchise
	].some((e) => e.toLowerCase().includes(y))));
	x = l === "A to Z" ? [...x].sort((e, t) => e.title.localeCompare(t.title)) : [...x].sort((e, t) => t.title.localeCompare(e.title));
	let S = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), m(!1);
	}, C = r.flatMap((e) => a[e.key].map((t) => [e.key, t])), w = (e) => a[e][0] ?? null, T = /* @__PURE__ */ (0, W.jsx)(q, {
		gap: 6,
		padding: n ? 0 : 4,
		children: r.map((e) => /* @__PURE__ */ (0, W.jsx)(dr, {
			label: e.label,
			value: a[e.key],
			onChange: (t) => S(e.key, t),
			density: "compact",
			children: v[e.key].map((t) => /* @__PURE__ */ (0, W.jsx)(vr, {
				value: t,
				label: t,
				endContent: /* @__PURE__ */ (0, W.jsx)(g, {
					weight: "semibold",
					children: _[e.key][t] || 0
				})
			}, t))
		}, e.key))
	});
	return /* @__PURE__ */ (0, W.jsxs)(q, {
		gap: 6,
		children: [
			/* @__PURE__ */ (0, W.jsxs)(q, {
				gap: 4,
				children: [
					/* @__PURE__ */ (0, W.jsx)(On, {
						label: "Search",
						isLabelHidden: !0,
						value: s,
						onChange: (e) => {
							c(e), m(!1);
						},
						startIcon: ge,
						size: "lg"
					}),
					(() => {
						let e = /* @__PURE__ */ (0, W.jsx)(Mn, {
							label: "Format",
							value: w("format"),
							onChange: (e) => S("format", e ? [e] : []),
							children: v.format.map((e) => /* @__PURE__ */ (0, W.jsx)(Pn, {
								label: e,
								value: e
							}, e))
						}), r = /* @__PURE__ */ (0, W.jsx)(q, { children: /* @__PURE__ */ (0, W.jsx)(Mn, {
							label: "Video Games",
							value: w("franchise"),
							onChange: (e) => S("franchise", e ? [e] : []),
							children: /* @__PURE__ */ (0, W.jsx)(Bn, {
								gap: 1,
								behavior: "observeParent",
								overflowRenderer: (e) => /* @__PURE__ */ (0, W.jsx)(I, {
									button: {
										label: `+${e.length}`,
										variant: "ghost"
									},
									items: e.map(({ index: e }) => ({
										label: v.franchise[e],
										onClick: () => S("franchise", [v.franchise[e]])
									}))
								}),
								children: v.franchise.map((e) => /* @__PURE__ */ (0, W.jsx)(Pn, {
									label: e,
									value: e
								}, e))
							})
						}) }), i = n ? /* @__PURE__ */ (0, W.jsx)(t, {
							label: "Filters",
							icon: /* @__PURE__ */ (0, W.jsx)(Dr, { size: 16 }),
							onClick: () => f(!0)
						}) : /* @__PURE__ */ (0, W.jsx)(cr, {
							content: T,
							isOpen: d,
							onOpenChange: f,
							placement: "below",
							alignment: "end",
							width: 360,
							label: "Filters",
							children: /* @__PURE__ */ (0, W.jsx)(t, {
								label: "Filters",
								icon: /* @__PURE__ */ (0, W.jsx)(Dr, { size: 16 })
							})
						}), a = /* @__PURE__ */ (0, W.jsx)(I, {
							button: { label: l },
							alignment: "end",
							items: ["A to Z", "Z to A"].map((e) => ({
								label: e,
								onClick: () => u(e)
							}))
						});
						return n ? /* @__PURE__ */ (0, W.jsxs)(q, {
							gap: 3,
							children: [
								e,
								r,
								/* @__PURE__ */ (0, W.jsxs)(Xt, {
									gap: 3,
									children: [i, a]
								})
							]
						}) : /* @__PURE__ */ (0, W.jsxs)(Xt, {
							gap: 4,
							vAlign: "center",
							children: [
								e,
								/* @__PURE__ */ (0, W.jsx)(Qt, {
									size: "fill",
									children: r
								}),
								i,
								a
							]
						});
					})(),
					C.length > 0 && /* @__PURE__ */ (0, W.jsxs)(Xt, {
						gap: 2,
						wrap: "wrap",
						vAlign: "center",
						children: [C.map(([e, t]) => /* @__PURE__ */ (0, W.jsx)(Cr, {
							label: t,
							onRemove: () => S(e, a[e].filter((e) => e !== t))
						}, e + t)), /* @__PURE__ */ (0, W.jsx)(t, {
							label: "Clear all",
							variant: "ghost",
							onClick: () => {
								o(i()), c("");
							}
						})]
					})
				]
			}),
			x.length === 0 ? /* @__PURE__ */ (0, W.jsx)(Tr, {
				title: "No matches",
				actions: /* @__PURE__ */ (0, W.jsx)(t, {
					label: "Clear all",
					onClick: () => {
						o(i()), c("");
					}
				})
			}) : /* @__PURE__ */ (0, W.jsx)(gc, {
				works: x,
				maxRows: p ? 0 : fc
			}),
			!p && x.length > 0 && /* @__PURE__ */ (0, W.jsx)(Xt, {
				hAlign: "center",
				children: /* @__PURE__ */ (0, W.jsx)(t, {
					label: "Show more",
					onClick: () => m(!0)
				})
			}),
			n && /* @__PURE__ */ (0, W.jsx)(fe, {
				label: "Filters",
				isOpen: d,
				onOpenChange: f,
				height: "tall",
				children: /* @__PURE__ */ (0, W.jsxs)(q, {
					gap: 4,
					children: [/* @__PURE__ */ (0, W.jsx)(Xt, {
						hAlign: "end",
						children: /* @__PURE__ */ (0, W.jsx)(t, {
							label: "Done",
							variant: "primary",
							onClick: () => f(!1)
						})
					}), T]
				})
			})
		]
	});
}
function bc() {
	let [e, n] = (0, U.useState)(null);
	(0, U.useEffect)(() => {
		fetch("data/site.json").then((e) => e.json()).then(n);
	}, []);
	let r = /* @__PURE__ */ (0, W.jsx)(kt, {
		label: "Site",
		heading: /* @__PURE__ */ (0, W.jsx)(It, {
			href: "index.html",
			isStandalone: !0,
			children: /* @__PURE__ */ (0, W.jsx)(g, {
				type: "large",
				weight: "semibold",
				children: "Snadiya"
			})
		}),
		endContent: /* @__PURE__ */ (0, W.jsx)(t, {
			label: "Links",
			variant: "ghost",
			href: dc,
			target: "_blank"
		})
	});
	if (!e) return /* @__PURE__ */ (0, W.jsx)(vt, {
		topNav: r,
		height: "auto"
	});
	let i = Object.fromEntries(e.works.map((e) => [e.id, e])), a;
	if (uc.type === "collection") {
		let t = [...e.collections, ...e.games].find((e) => e.slug === uc.slug);
		a = /* @__PURE__ */ (0, W.jsxs)(q, {
			gap: 8,
			children: [/* @__PURE__ */ (0, W.jsxs)(q, {
				gap: 2,
				children: [/* @__PURE__ */ (0, W.jsx)(It, {
					href: "index.html",
					isStandalone: !0,
					children: "All comics"
				}), /* @__PURE__ */ (0, W.jsx)(c, {
					level: 1,
					type: "display-2",
					children: t.name
				})]
			}), /* @__PURE__ */ (0, W.jsx)(gc, { works: t.files.map((e) => i[e]).filter(Boolean) })]
		});
	} else a = /* @__PURE__ */ (0, W.jsxs)(q, {
		gap: 10,
		children: [
			/* @__PURE__ */ (0, W.jsx)(vc, { byId: i }),
			/* @__PURE__ */ (0, W.jsxs)(q, {
				gap: 6,
				children: [/* @__PURE__ */ (0, W.jsx)(c, {
					level: 2,
					children: "Curated & Featured"
				}), /* @__PURE__ */ (0, W.jsx)(_c, {
					list: e.collections,
					byId: i
				})]
			}),
			/* @__PURE__ */ (0, W.jsxs)(q, {
				gap: 6,
				id: "all",
				children: [/* @__PURE__ */ (0, W.jsx)(c, {
					level: 2,
					children: "All comics"
				}), /* @__PURE__ */ (0, W.jsx)(yc, { data: e })]
			})
		]
	});
	return /* @__PURE__ */ (0, W.jsx)(vt, {
		topNav: r,
		height: "auto",
		children: /* @__PURE__ */ (0, W.jsx)(nt, {
			height: "auto",
			contentWidth: 1280,
			content: /* @__PURE__ */ (0, W.jsx)(st, {
				padding: 6,
				isScrollable: !1,
				children: a
			})
		})
	});
}
(0, Or.createRoot)(document.getElementById("site")).render(/* @__PURE__ */ (0, W.jsx)(U.StrictMode, { children: /* @__PURE__ */ (0, W.jsx)(Pe, {
	theme: lc,
	mode: "light",
	children: /* @__PURE__ */ (0, W.jsx)(bc, {})
}) }));
//#endregion
