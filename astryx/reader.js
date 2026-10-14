import { $ as e, A as t, B as n, Bt as r, Ct as i, D as a, Dt as o, Et as s, G as c, Ht as l, I as u, J as d, L as f, Lt as p, N as m, Nt as h, O as g, Ot as _, P as v, Pt as y, Q as b, Rt as x, St as S, T as C, V as w, Vt as T, X as E, Y as D, Z as O, a as ee, bt as k, ct as A, dt as j, gt as M, ht as te, i as N, j as P, lt as ne, mt as F, nt as I, r as L, st as re, t as ie, u as ae, ut as oe, wt as se, x as ce, yt as R, z as le } from "./source-CXVsiJkf.js";
//#region node_modules/@astryxdesign/core/dist/utils/isApplePlatform.js
function z() {
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
var B = /* @__PURE__ */ l(T(), 1), V = _(), ue = { wrapper: {
	k1xSpc: "x3nfvp2",
	kGNEyG: "x6s0dn4",
	kOIVth: "xzye2dw",
	kmuXW: "x2lah0s",
	$$css: !0
} }, de = /* @__PURE__ */ new Map([
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
]), fe = /* @__PURE__ */ new Map([["esc", "escape"], ["return", "enter"]]);
function H(e, t) {
	return e === "mod" ? t ? "⌘" : "Ctrl" : de.get(e) ?? e.toUpperCase();
}
var pe = /* @__PURE__ */ new Map([
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
function me(e, t) {
	return e === "mod" ? t ? "Command" : "Control" : pe.get(e) ?? e.toUpperCase();
}
function U() {
	return () => {};
}
function he() {
	return !1;
}
function ge({ keys: e, ref: t, xstyle: n, className: r, style: i, ...a }) {
	let o = (0, B.useSyncExternalStore)(U, z, he), s = /* @__PURE__ */ new Map(), c = e.split("+").map((e) => e.trim().toLowerCase()).map((e) => {
		let t = s.get(e) ?? 0;
		return s.set(e, t + 1), {
			key: fe.get(e) ?? e,
			reactKey: `${e}:${t}`
		};
	}), l = c.map(({ key: e }) => me(e, o)).join(" + ");
	return /*#__PURE__*/ (0, V.jsx)("span", {
		...a,
		ref: t,
		role: "img",
		"aria-label": l,
		...k(y("kbd"), x(ue.wrapper, n), r, i),
		children: c.map(({ key: e, reactKey: t }) => /*#__PURE__*/ (0, V.jsx)("kbd", {
			"aria-hidden": "true",
			className: "x3nfvp2 x6s0dn4 xl56j7k x16asifk x1grt7ep x7a5moj xx3sua9 x17x4s8c xlxy82 x1q0q8m5 xib2hle xv1l7n4 x9ynric x141an7d x1e4wzip x1ltkj2j x87ps6o",
			children: H(e, o)
		}, t))
	});
}
ge.displayName = "Kbd";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useKeyboardHint.js
var W = /* @__PURE__ */ new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown"
]), _e = {
	horizontal: ["left", "right"],
	vertical: ["up", "down"],
	both: [
		"left",
		"right",
		"up",
		"down"
	]
}, G = { hint: {
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
function ve(e = {}) {
	let { orientation: t = "horizontal", dismissAfterMs: n = 3e3, isEnabled: r = !0 } = e, i = D(), a = (0, B.useRef)(null), o = (0, B.useRef)(!1), s = (0, B.useRef)(!1), c = (0, B.useRef)(() => {}), l = (0, B.useCallback)(() => {
		a.current &&= (clearTimeout(a.current), null);
	}, []), u = (0, B.useCallback)(() => {
		s.current = !0;
	}, []), d = (0, B.useCallback)(() => {
		s.current = !1, l(), c.current(null);
	}, [l]), f = E({
		mode: "context",
		onShow: u,
		onHide: d
	});
	c.current = f.ref;
	let m = (0, B.useCallback)(() => {
		o.current = !0, l(), f.hide(), s.current = !1, c.current(null);
	}, [l, f]), h = (0, B.useCallback)((e) => {
		!o.current && r && (c.current(e), f.show(), l(), a.current = setTimeout(() => {
			m();
		}, n));
	}, [
		l,
		m,
		n,
		r,
		f
	]);
	(0, B.useEffect)(() => () => {
		l(), c.current(null);
	}, [l]);
	let g = (0, B.useCallback)((e) => {
		if (o.current || !r) return;
		let t = e.target;
		if (!t.matches(":focus-visible")) return;
		let n = e.currentTarget;
		e.relatedTarget instanceof Node && n.contains(e.relatedTarget) || h(t);
	}, [h, r]), _ = (0, B.useCallback)((e) => {
		if (!s.current) return;
		let t = e.currentTarget;
		if (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) {
			!o.current && e.relatedTarget instanceof HTMLElement && c.current(e.relatedTarget);
			return;
		}
		m();
	}, [m]), v = (0, B.useCallback)((e) => {
		s.current && W.has(e.key) && m();
	}, [m]), y = /*#__PURE__*/ (0, V.jsx)("span", {
		className: "x3nfvp2 x6s0dn4 xzye2dw",
		children: _e[t].map((e) => /*#__PURE__*/ (0, V.jsx)(ge, { keys: e }, e))
	});
	return {
		hintElement: f.render(/*#__PURE__*/ (0, V.jsxs)("span", {
			"aria-hidden": "true",
			children: [y, /*#__PURE__*/ (0, V.jsx)("span", {
				className: "x11g1kdw",
				children: i("@astryx.keyboardHint.toNavigate")
			})]
		}), {
			placement: "below",
			alignment: "start",
			xstyle: G.hint,
			style: { marginBlockStart: p["--spacing-2"] }
		}),
		onFocus: g,
		onBlur: _,
		onKeyDown: v
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/book-open.mjs
var K = {
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
K.node;
var ye = N(K), q = {
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
q.node;
var be = N(q), J = {
	name: "bookmark",
	size: 24,
	node: [["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}]]
};
J.node;
var xe = N(J), Se = {
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
Se.node;
var Ce = N(Se), we = {
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
we.node;
var Te = N(we), Ee = {
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
Ee.node;
var De = N(Ee), Oe = {
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
Oe.node;
var ke = N(Oe), Ae = {
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
Ae.node;
var je = N(Ae), Me = j(null);
Me.displayName = "SegmentedControlContext";
function Ne() {
	let e = (0, B.use)(Me);
	if (e == null) throw Error("useSegmentedControlContext must be used within SegmentedControl. Wrap your SegmentedControlItem in <SegmentedControl>.");
	return e;
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/SegmentedControl/SegmentedControl.js
var Pe = {
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
}, Fe = {
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
function Ie({ ref: e, value: n, onChange: r, label: i, size: a, layout: o = "hug", isDisabled: s = !1, disabledMessage: c, children: l, xstyle: u, className: p, style: m, onKeyDown: h, onFocus: g, onBlur: _, ...v }) {
	let b = t(a, "md"), C = s && !!c, w = f({
		placement: "above",
		focusTrigger: "always",
		isEnabled: C
	}), { listRef: T, handleKeyDown: E, handleFocus: D } = S({
		itemSelector: "[role=\"radio\"]:not([aria-disabled=\"true\"])",
		hasRovingTabIndex: !0,
		wrap: !0,
		orientation: "horizontal"
	}), O = ve({
		orientation: "horizontal",
		isEnabled: !s
	}), ee = (0, B.useCallback)((e) => {
		h?.(e), !e.defaultPrevented && (O.onKeyDown(e), E(e));
	}, [
		h,
		O,
		E
	]), A = (0, B.useCallback)((e) => {
		if (g?.(e), e.defaultPrevented || (O.onFocus(e), D(e), s) || !e.currentTarget.contains(e.relatedTarget)) return;
		let t = e.target?.closest("[role=\"radio\"][data-value]");
		if (!t || t.getAttribute("aria-disabled") === "true") return;
		let i = t.dataset.value;
		i != null && i !== n && r(i);
	}, [
		g,
		O,
		D,
		s,
		r,
		n
	]), j = (0, B.useMemo)(() => ({
		value: n,
		onChange: r,
		size: b,
		layout: o,
		isDisabled: s,
		hasDisabledMessage: C
	}), [
		n,
		r,
		b,
		o,
		s,
		C
	]);
	return /*#__PURE__*/ (0, V.jsxs)(Me, {
		value: j,
		children: [/*#__PURE__*/ (0, V.jsxs)("div", {
			ref: d(e, T, w.ref),
			...v,
			role: "radiogroup",
			"aria-label": i,
			"aria-disabled": s || void 0,
			"aria-describedby": C ? w.describedBy : void 0,
			onKeyDown: ee,
			onFocus: A,
			onBlur: R(_, O.onBlur),
			...k(y("segmented-control", { size: b }), x(Pe.container, Fe[b], o === "fill" && Pe.fill, s && (C ? Pe.disabledWithMessage : Pe.disabled), u), p, m),
			children: [l, O.hintElement]
		}), C && w.renderTooltip(c)]
	});
}
Ie.displayName = "SegmentedControl";
//#endregion
//#region node_modules/@astryxdesign/core/dist/SegmentedControl/SegmentedControlItem.js
var Le = {
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
}, Re = {
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
}, ze = {
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
function Be({ ref: e, value: t, label: n, isLabelHidden: r = !1, icon: i, isDisabled: a = !1, onClick: o, xstyle: s, ...c }) {
	let l = Ne(), u = l.value === t, d = a || l.isDisabled, f = u && (l.hasDisabledMessage ?? !1) && !a, p = l.size, m = l.layout === "fill", h = R(o, () => {
		!d && !u && l.onChange(t);
	}), _ = i ? /*#__PURE__*/ (0, V.jsx)("span", {
		...x(Le.icon, ze[p]),
		children: i
	}) : null;
	return /*#__PURE__*/ (0, V.jsxs)("button", {
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
		...k(y("segmented-control-item", {
			size: p,
			selected: u ? "selected" : null,
			disabled: d ? "disabled" : null
		}), F.focusVisible(Le.base, Re[p], m && Le.fill, u && Le.selected, !u && !d && g.backgroundColor, d && Le.disabled, s)),
		children: [_, !r && /*#__PURE__*/ (0, V.jsx)("span", {
			className: "xb3r6kr xlyipyv xeuugli",
			children: n
		})]
	});
}
Be.displayName = "SegmentedControlItem";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Slider/Slider.js
var Ve = 20, Y = {
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
function X(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function He(e) {
	if (Math.abs(e) < 1) {
		let t = e.toExponential().split("e-");
		if (t.length === 2) return (t[0].split(".")[1]?.length ?? 0) + parseInt(t[1], 10);
	}
	let t = String(e).split(".")[1];
	return t ? t.length : 0;
}
function Ue(e, t, n) {
	if (n <= 0) return e;
	let r = t + Math.round((e - t) / n) * n, i = Math.min(Math.max(He(t), He(n)), 20);
	return Number(r.toFixed(i));
}
function We(e, t, n) {
	return n === t ? 0 : (e - t) / (n - t) * 100;
}
var Ge = Ve / 2;
function Z(e) {
	return Je(e, Ge - e / 100 * Ve);
}
function Ke(e, t) {
	let n = t - e;
	return Je(n, -(n / 100) * Ve);
}
function qe(e, t) {
	let n = t - Ve;
	return n > 0 ? (e - Ge) / n : t > 0 ? e / t : 0;
}
function Je(e, t) {
	let n = (e) => Number(e.toFixed(3));
	return `calc(${n(e)}% ${t < 0 ? "-" : "+"} ${Math.abs(n(t))}px)`;
}
function Ye({ ref: e, ...t }) {
	let { label: r, isLabelHidden: a = !1, description: o, isDisabled: s = !1, disabledMessage: c, isOptional: l = !1, isRequired: p = !1, status: m, labelTooltip: h, min: g = 0, max: _ = 100, step: v = 1, orientation: b = "horizontal", formatValue: S, htmlName: C, valueDisplay: w = "tooltip", marks: T, width: E, xstyle: D, className: O, style: ee, "data-testid": A, value: j, onChange: N, onChangeEnd: ne } = t, F = Array.isArray(j), I = F && "minStepsBetweenThumbs" in t ? t.minStepsBetweenThumbs ?? 0 : 0, L = b === "horizontal", re = (0, B.useId)(), ie = (0, B.useId)(), oe = (0, B.useId)(), se = (0, B.useId)(), ce = (0, B.useId)(), R = (0, B.useRef)(null), z = (0, B.useRef)(null), [ue, de] = (0, B.useState)(null), [fe, H] = (0, B.useState)(null);
	n();
	let pe = (0, B.useCallback)((e, t) => {
		H(!s && le() === "keyboard" ? e : null);
	}, [s]), me = (0, B.useCallback)((e) => {
		H(null);
	}, []), U = s && !!c, he = f({
		placement: "above",
		focusTrigger: "always",
		isEnabled: U
	}), ge = p && !l, W = [];
	o && W.push(oe), m?.message && W.push(se), ge && W.push(ce), U && W.push(he.describedBy);
	let _e = W.length > 0 ? W.join(" ") : void 0, G = (0, B.useMemo)(() => (Array.isArray(j) ? j : [j ?? g]).map((e) => X(e, g, _)), [
		j,
		g,
		_
	]), ve = (0, B.useRef)(G);
	ve.current = G;
	let K = (0, B.useCallback)((e, t) => {
		let n = R.current;
		if (!n) return g;
		let r = n.getBoundingClientRect(), a;
		return a = L ? qe(i(n) ? r.right - e : e - r.left, r.width) : 1 - qe(t - r.top, r.height), a = X(a, 0, 1), X(Ue(g + a * (_ - g), g, v), g, _);
	}, [
		g,
		_,
		v,
		L
	]), ye = (0, B.useCallback)((e) => {
		if (!F) return 0;
		let [t, n] = G;
		return Math.abs(e - t) <= Math.abs(e - n) ? 0 : 1;
	}, [F, G]), q = (0, B.useCallback)((e, t) => {
		if (s) return;
		let n = X(Ue(t, g, v), g, _);
		if (F) {
			let t = [...G];
			t[e] = n;
			let r = I * v;
			e === 0 ? t[0] = Math.min(t[0], t[1] - r) : t[1] = Math.max(t[1], t[0] + r), t[0] = X(t[0], g, _), t[1] = X(t[1], g, _), N?.(t);
		} else N?.(n);
	}, [
		s,
		F,
		G,
		g,
		_,
		v,
		I,
		N
	]), be = (0, B.useRef)(ne);
	be.current = ne;
	let J = (0, B.useCallback)((e) => {
		let t = e ?? ve.current, n = be.current;
		F ? n?.(t) : n?.(t[0]);
	}, [F]), xe = (0, B.useCallback)((e) => {
		if (s) return;
		e.preventDefault();
		let t = e.target.closest("[data-mark-value]"), n = t ? Number(t.dataset.markValue) : K(e.clientX, e.clientY), r = R.current?.querySelectorAll("[role=\"slider\"]"), i = e.target.closest("[role=\"slider\"]"), a = i == null || r == null ? -1 : Array.from(r).indexOf(i), o = a >= 0 ? a : ye(n);
		z.current = o, de(o), q(o, n), r?.[o]?.focus(), H(null), typeof e.currentTarget.setPointerCapture == "function" && e.currentTarget.setPointerCapture(e.pointerId);
	}, [
		s,
		K,
		ye,
		q
	]), Se = (0, B.useCallback)((e) => {
		if (z.current === null || s) return;
		let t = K(e.clientX, e.clientY);
		q(z.current, t);
	}, [
		s,
		K,
		q
	]), Ce = (0, B.useCallback)((e) => {
		z.current !== null && (z.current = null, de(null), J());
	}, [J]), we = (0, B.useCallback)((e, t) => {
		if (s) return;
		t.key !== "Shift" && !t.metaKey && !t.altKey && !t.ctrlKey && le() === "keyboard" && H(e);
		let n = G[e], r;
		switch (t.key) {
			case "ArrowRight":
			case "ArrowUp":
				r = n + v;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				r = n - v;
				break;
			case "PageUp":
				r = n + v * 10;
				break;
			case "PageDown":
				r = n - v * 10;
				break;
			case "Home":
				r = g;
				break;
			case "End":
				r = _;
				break;
			default: return;
		}
		t.preventDefault();
		let i = X(Ue(r, g, v), g, _);
		if (q(e, r), F) {
			let t = [...G];
			t[e] = i;
			let n = I * v;
			e === 0 ? t[0] = Math.min(t[0], t[1] - n) : t[1] = Math.max(t[1], t[0] + n), t[0] = X(t[0], g, _), t[1] = X(t[1], g, _), J(t);
		} else J([i]);
	}, [
		s,
		F,
		G,
		v,
		g,
		_,
		I,
		q,
		J
	]), Te = (e) => S ? S(e) : String(e), Ee = (e) => {
		let t = G[e], n = We(t, g, _), r = L ? { insetInlineStart: Z(n) } : {
			bottom: Z(n),
			left: "50%"
		}, i = F ? e === 0 ? "Minimum value" : "Maximum value" : void 0, a = I * v, o = F && e === 1 ? X(G[0] + a, g, _) : g, c = F && e === 0 ? X(G[1] - a, g, _) : _, l = w === "tooltip" && !U, d = L ? "above" : "start", f = /*#__PURE__*/ (0, V.jsx)("div", {
			id: F ? void 0 : re,
			role: "slider",
			tabIndex: s && !U ? -1 : 0,
			"aria-valuemin": o,
			"aria-valuemax": c,
			"aria-valuenow": t,
			"aria-valuetext": S ? S(t) : void 0,
			"aria-orientation": b,
			"aria-disabled": s || void 0,
			"aria-invalid": m?.type === "error" || void 0,
			"aria-label": i,
			"aria-labelledby": F ? void 0 : ie,
			"aria-describedby": _e,
			onKeyDown: (t) => we(e, t),
			onFocus: (t) => pe(e, t),
			onBlur: me,
			...k(y("slider-thumb", {
				orientation: b,
				disabled: s ? "disabled" : null
			}), x(Y.thumb, L ? Y.thumbHorizontal : M.centerInline("50%"), !s && Y.thumbHover, !s && ue === e && Y.thumbPressed, !s && fe === e && te.focusVisible, s && Y.thumbDisabled), void 0, r)
		}, e);
		return l ? /*#__PURE__*/ (0, V.jsx)(u, {
			content: Te(t),
			placement: d,
			delay: 0,
			focusTrigger: "always",
			isOpen: ue === e || void 0,
			children: f
		}, e) : f;
	}, De = (() => {
		if (F) {
			let [e, t] = G, n = We(e, g, _), r = We(t, g, _);
			return L ? {
				insetInlineStart: Z(n),
				width: Ke(n, r)
			} : {
				bottom: Z(n),
				height: Ke(n, r)
			};
		}
		let e = We(G[0], g, _);
		return L ? {
			insetInlineStart: "0%",
			width: Z(e)
		} : {
			bottom: "0%",
			height: Z(e)
		};
	})(), Oe = w === "text" ? /*#__PURE__*/ (0, V.jsx)("span", {
		className: "x9ynric xcr08ib x1tgivj0 xuxw1ft x2lah0s",
		children: F ? `${Te(G[0])} – ${Te(G[1])}` : Te(G[0])
	}) : null;
	return /*#__PURE__*/ (0, V.jsxs)(ae, {
		"data-testid": A,
		label: r,
		isLabelHidden: a,
		description: o,
		inputID: re,
		labelID: ie,
		isGroupLabel: !0,
		descriptionID: o ? oe : void 0,
		isOptional: l,
		isRequired: p,
		isDisabled: s,
		status: m ? {
			type: m.type,
			message: m.message,
			messageID: m.message ? se : void 0
		} : void 0,
		labelTooltip: h,
		statusVariant: "detached",
		width: E,
		xstyle: D,
		className: O,
		style: ee,
		children: [
			/*#__PURE__*/ (0, V.jsxs)("div", {
				...k(y("slider", {
					orientation: b,
					disabled: s ? "disabled" : null
				}), { className: "x78zum5 x6s0dn4 x1txdalj" }),
				children: [
					C != null && G.map((e, t) => /*#__PURE__*/ (0, V.jsx)("input", {
						type: "hidden",
						name: C,
						value: String(e),
						disabled: s
					}, t === 0 ? "start" : "end")),
					/*#__PURE__*/ (0, V.jsxs)("div", {
						ref: d(e, R, he.ref),
						...F ? {
							role: "group",
							"aria-labelledby": ie
						} : void 0,
						onPointerDown: xe,
						onPointerMove: Se,
						onPointerUp: Ce,
						onPointerCancel: Ce,
						...k(y("slider-control", {
							orientation: b,
							disabled: s ? "disabled" : null
						}), {
							0: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k x1ypdohk x16khyan" },
							2: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 x1ypdohk x16khyan" },
							1: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k xbyyjgo xt0e3qv" },
							3: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 xbyyjgo xt0e3qv" }
						}[!!L << 1 | !!s << 0]),
						children: [
							/*#__PURE__*/ (0, V.jsx)("div", {
								"aria-hidden": "true",
								...k(y("slider-track", { orientation: b }), x(Y.track, L ? Y.trackHorizontal : [Y.trackVertical, M.centerInline("0px")]))
							}),
							/*#__PURE__*/ (0, V.jsx)("div", {
								"aria-hidden": "true",
								...k(x(Y.filledTrack, L ? Y.filledTrackHorizontal : [Y.filledTrackVertical, M.centerInline("0px")]), { style: De })
							}),
							T && /*#__PURE__*/ (0, V.jsx)("div", {
								"aria-hidden": "true",
								...{
									0: { className: "x10l6tqk x13vifvy x1ey2m1c xbudbmw" },
									1: { className: "x10l6tqk x1o0tod xtijo5x xwa60dl" }
								}[!!L << 0],
								children: T.map((e) => {
									let t = We(e.value, g, _), n = L ? { insetInlineStart: Z(t) } : { bottom: Z(t) }, r = F ? e.value >= G[0] && e.value <= G[1] : e.value <= G[0];
									return /*#__PURE__*/ (0, V.jsxs)("div", { children: [/*#__PURE__*/ (0, V.jsx)("div", {
										"data-testid": "slider-mark",
										"data-mark-value": e.value,
										...k({
											0: { className: "x10l6tqk xdsb6cv xjspbzw x36qwtl x1xc55vz x1m9mm8y" },
											2: { className: "x10l6tqk xdsb6cv xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3" },
											1: { className: "x10l6tqk xjspbzw x36qwtl x1xc55vz x1m9mm8y x1ewilqj" },
											3: { className: "x10l6tqk xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3 x1ewilqj" }
										}[!!L << 1 | !!r << 0], { style: n })
									}), e.label && /*#__PURE__*/ (0, V.jsx)("span", {
										"data-testid": "slider-mark-label",
										"data-mark-value": e.value,
										...k({
											0: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft x131p8rn x9p6ekw" },
											1: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft xuuh30 x1nyx83j xuivejd" }
										}[!!L << 0], { style: n }),
										children: e.label
									})] }, e.value);
								})
							}),
							G.map((e, t) => Ee(t))
						]
					}),
					Oe
				]
			}),
			ge && /*#__PURE__*/ (0, V.jsx)(P, {
				id: ce,
				children: "Required"
			}),
			U && he.renderTooltip(c)
		]
	});
}
Ye.displayName = "Slider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogContext.js
var Xe = /*#__PURE__*/ (0, B.createContext)(null);
Xe.displayName = "DialogContext";
function Ze() {
	return (0, B.use)(Xe);
}
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/Dialog.js
function Qe(e, t = 16) {
	let n = e.getBoundingClientRect(), r = n.left + n.width / 2 - window.innerWidth / 2, i = n.top + n.height / 2 - window.innerHeight / 2, a = Math.sqrt(r * r + i * i) || 1;
	return {
		x: Math.round(r / a * t),
		y: Math.round(i / a * t)
	};
}
`${p["--spacing-4"]}`, `${p["--spacing-4"]}`, `${p["--spacing-4"]}`, `${p["--spacing-4"]}`, `${p["--spacing-4"]}`, `${p["--spacing-4"]}`;
var Q = {
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
}, $e = p["--spacing-4"], et = `min(100%, ${`calc(100dvw - ${$e} - ${$e})`})`;
function tt(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function nt(e, t) {
	return {
		width: tt(e),
		maxWidth: et,
		maxHeight: tt(t)
	};
}
var rt = {
	kogj98: "x1ghz6dp",
	$$css: !0
}, it = {
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
		rt,
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
function at(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function ot(e) {
	let { top: t, bottom: n, start: r, end: i } = e;
	return {
		top: t === void 0 ? "auto" : at(t),
		bottom: n === void 0 ? "auto" : at(n),
		insetInlineStart: r === void 0 ? "auto" : at(r),
		insetInlineEnd: i === void 0 ? "auto" : at(i)
	};
}
function st({ isOpen: t, isInline: n = !1, onOpenChange: r, width: i = 400, maxHeight: a = "75dvh", position: o, variant: l = "standard", purpose: u = "info", padding: f, children: p, xstyle: m, className: h, style: g, ref: _, ...v }) {
	let S = f == null, C = f ?? 4, w = A[C], T = l === "fullscreen", E = T ? null : nt(i, a), D = (0, B.useId)(), ee = (0, B.useMemo)(() => ({
		isInline: n,
		titleId: D
	}), [n, D]), j = v["aria-label"] != null || v["aria-labelledby"] != null, M = (0, B.useRef)(null), te = (0, B.useCallback)((e) => {
		M.current = e, e && !j && (e.querySelector(`#${CSS.escape(D)}`) == null ? e.removeAttribute("aria-labelledby") : e.setAttribute("aria-labelledby", D));
	}, [D, j]), N = d(_, te), P = (0, B.useRef)(null), L = u !== "required", ie = u === "info";
	(0, B.useEffect)(() => {
		if (n) return;
		let e = M.current;
		if (e) {
			if (t) {
				P.current = document.activeElement;
				let t = P.current;
				if (t && t !== document.body) {
					let n = Qe(t);
					e.style.setProperty("--dialog-dir-x", `${n.x}px`), e.style.setProperty("--dialog-dir-y", `${n.y}px`);
				} else e.style.setProperty("--dialog-dir-x", "0px"), e.style.setProperty("--dialog-dir-y", "16px");
				if (!e.open) {
					e.showModal();
					let t = e.querySelector("[data-autofocus]");
					t && t.focus();
				}
			} else e.open && e.close(), P.current?.focus(), P.current = null;
		}
	}, [t, n]), c(t && !n);
	let { shouldDismissOnCloseRequest: ae } = se({
		isActive: t,
		isEnabled: !n,
		escapeBehavior: L ? "close" : "block",
		onDismiss: () => {
			r(!1);
		}
	}), R = (0, B.useRef)(!1);
	(0, B.useEffect)(() => {
		let e = M.current?.querySelector(`#${CSS.escape(D)}`) != null;
		t && !n && !j && !e && !R.current && (R.current = !0);
	}, [
		t,
		n,
		j,
		D
	]);
	let le = (e) => {
		e.target === e.currentTarget && ie && r(!1);
	}, z = (e) => {
		e.preventDefault(), ae() && L && r(!1);
	}, ue = /*#__PURE__*/ (0, V.jsx)("div", {
		...x(Q.inner, ...ce(S ? {
			useThemeDefault: "dialog",
			maxHeight: E?.maxHeight
		} : {
			paddingInnerX: w,
			paddingInnerY: w,
			paddingOuterX: w,
			paddingOuterY: w,
			maxHeight: E?.maxHeight
		}), !S && C !== 4 && re[C], !S && C !== 4 && e[C], !S && C !== 4 && b[C], !S && C !== 4 && O[C], T && S && Q.fullscreenSafeArea),
		children: /*#__PURE__*/ (0, V.jsx)(Xe, {
			value: ee,
			children: p
		})
	}), de = o != null && !T, { open: fe, ...H } = v;
	return n ? t ? /*#__PURE__*/ (0, V.jsx)("div", {
		...H,
		...k(y("dialog", { variant: l }), x(ne.reset, Q.inlineWrapper, I.reset, E && it.sizing(E.width, E.maxWidth, E.maxHeight), T && Q.fullscreen, m), h, g),
		"data-testid": v["data-testid"],
		children: /*#__PURE__*/ (0, V.jsx)(s, { children: /*#__PURE__*/ (0, V.jsx)(oe, { children: ue }) })
	}) : null : /*#__PURE__*/ (0, V.jsx)("dialog", {
		ref: N,
		...H,
		...k(y("dialog", { variant: l }), F.focusVisible(ne.reset, Q.dialog, I.reset, t && Q.open, Q.backdrop, E && it.sizing(E.width, E.maxWidth, E.maxHeight), de && (() => {
			let e = ot(o);
			return it.position(e.top, e.insetInlineStart, e.insetInlineEnd, e.bottom);
		})(), T && Q.fullscreen, T && t && Q.fullscreenOpen, m), h, g),
		onClick: le,
		onCancel: z,
		"aria-modal": "true",
		...u === "required" ? { role: "alertdialog" } : void 0,
		children: /*#__PURE__*/ (0, V.jsx)(s, { children: /*#__PURE__*/ (0, V.jsx)(oe, { children: ue }) })
	});
}
st.displayName = "Dialog";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogHeader.js
var ct = { titleFocusable: {
	kI3sdo: "x1a2a7pz",
	$$css: !0
} };
function lt({ title: e, subtitle: t, onOpenChange: n, startContent: r, endContent: i, endContentEdgeCompensation: o, hasDivider: s, xstyle: c, className: l, style: u, ref: d, ...f }) {
	let p = D(), h = (0, B.useRef)(null), g = Ze(), _ = g?.isInline !== !0, b = g?.titleId, x = t != null && typeof t != "boolean" && t !== "", S = o == null ? n != null : o === "block" || o === "all", T = o == null ? n != null : o === "inline" || o === "all";
	return (0, B.useEffect)(() => {
		_ && h.current && h.current.focus();
	}, [_]), /*#__PURE__*/ (0, V.jsx)(v, {
		ref: d,
		hasDivider: s,
		xstyle: c,
		className: l,
		style: u,
		...f,
		children: /*#__PURE__*/ (0, V.jsxs)("div", {
			...k(y("dialog-header"), { className: "x78zum5 x1cy8zhl x1qughib xjcht0a" }),
			children: [
				r && /*#__PURE__*/ (0, V.jsx)("div", {
					...k(y("dialog-header-start-content"), { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" }),
					children: r
				}),
				/*#__PURE__*/ (0, V.jsxs)("div", {
					...k(y("dialog-header-title-block"), { className: "x78zum5 xdt5ytf xsn7fz1 x98rzlu xeuugli xqixskq" }),
					children: [/*#__PURE__*/ (0, V.jsx)(C, {
						ref: h,
						id: b,
						level: 2,
						tabIndex: -1,
						xstyle: ct.titleFocusable,
						children: e
					}), x && /*#__PURE__*/ (0, V.jsx)(m, {
						type: "body",
						size: "sm",
						color: "secondary",
						children: t
					})]
				}),
				(i || n) && /*#__PURE__*/ (0, V.jsxs)("div", {
					...k(y("dialog-header-end-content"), {
						0: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" },
						2: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f" },
						1: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s x3kzqx6" },
						3: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f x3kzqx6" }
					}[!!S << 1 | !!T << 0]),
					children: [i, n && /*#__PURE__*/ (0, V.jsx)(a, {
						variant: "ghost",
						label: p("@astryx.dialog.close"),
						tooltip: p("@astryx.dialog.close"),
						icon: /*#__PURE__*/ (0, V.jsx)(w, {
							icon: "close",
							color: "inherit",
							...y("dialog-header-close-icon")
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
lt.displayName = "DialogHeader";
//#endregion
//#region src/theme.js
var ut = r(), dt = "#1e1b2c", ft = "#393047", pt = "#5a356a", mt = "#ecc1c2", ht = "#f49c58", gt = h({
	name: "snadiya-reader",
	extends: ie,
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
		"--color-background-body": dt,
		"--color-background-surface": ft,
		"--color-background-card": ft,
		"--color-background-popover": ft,
		"--color-background-muted": pt,
		"--color-text-primary": mt,
		"--color-text-secondary": mt,
		"--color-icon-primary": mt,
		"--color-icon-secondary": mt,
		"--color-accent": ht,
		"--color-accent-muted": "rgba(244,156,88,.22)",
		"--color-text-accent": ht,
		"--color-icon-accent": ht,
		"--color-on-accent": dt,
		"--color-border": "rgba(236,193,194,.22)",
		"--color-border-emphasized": "rgba(236,193,194,.6)",
		"--color-track": "rgba(236,193,194,.22)",
		"--color-overlay-hover": "rgba(236,193,194,.12)",
		"--color-overlay-pressed": "rgba(236,193,194,.2)"
	}
}), $ = window.CONFIG, _t = "snadiya:" + location.pathname.split("/").pop().replace(".html", "") + ":", vt = (e, t) => {
	try {
		let n = localStorage.getItem(_t + e);
		return n == null ? t : JSON.parse(n);
	} catch {
		return t;
	}
}, yt = (e, t) => {
	try {
		localStorage.setItem(_t + e, JSON.stringify(t));
	} catch {}
}, bt = (e, t) => String(e).padStart(t, "0");
function xt() {
	let e = [], t = [], n = (e) => $.cfOnly === !0 || $.cfOnly && $.cfOnly[e];
	return ($.chapters || []).forEach((r, i) => {
		let a = e.length;
		for (let t = r.from; t <= r.to; t++) {
			let a = e.length, o = ($.base || "") + r.folder + r.prefix + bt(t, r.pad) + "." + r.ext, s = !!($.srcs && $.srcs[a] && (n(a) || window.innerWidth >= 1024)), c = s && $.bigDims && $.bigDims[a] || $.dims && $.dims[a] || [1600, 2400];
			e.push({
				src: s ? $.cf + $.srcs[a] : o,
				thumb: n(a) ? $.cf + $.srcs[a] : o,
				pv: $.pv ? ($.base || "") + "pv/" + r.folder + r.prefix + bt(t, r.pad) + ".webp" : null,
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
function St(e, t) {
	(0, B.useEffect)(() => {
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
function Ct() {
	let e = "(max-width: 620px)", [t, n] = (0, B.useState)(() => window.matchMedia(e).matches);
	return (0, B.useEffect)(() => {
		let t = window.matchMedia(e), r = () => n(t.matches);
		return t.addEventListener("change", r), () => t.removeEventListener("change", r);
	}, []), t;
}
function wt() {
	let e = Ct(), { pages: t, chapters: n } = (0, B.useMemo)(xt, []), r = t.length, i = n.length > 1, [, o] = (0, B.useState)(0);
	St(t, o);
	let [s, c] = (0, B.useState)(() => vt("mode", window.matchMedia("(max-width:620px)").matches ? "scroll" : "pages")), [l, u] = (0, B.useState)(() => Math.min(r - 1, Math.max(0, vt("page", 0)))), [d, f] = (0, B.useState)(null), [p, h] = (0, B.useState)(!1), [g, _] = (0, B.useState)(!1), [v, y] = (0, B.useState)(!1), [b, x] = (0, B.useState)(() => vt("marks", [])), S = (0, B.useRef)(null), C = (0, B.useRef)([]), T = (0, B.useRef)(!1);
	(0, B.useEffect)(() => yt("mode", s), [s]), (0, B.useEffect)(() => yt("page", l), [l]), (0, B.useEffect)(() => yt("marks", b), [b]);
	let E = (0, B.useRef)(l);
	E.current = l;
	let D = (e) => O(E.current + e), O = (0, B.useCallback)((e, t = !1) => {
		e = Math.max(0, Math.min(r - 1, e)), E.current = e, u(e), s === "scroll" && C.current[e] && S.current && (T.current = !0, S.current.scrollTo({
			top: C.current[e].offsetTop,
			behavior: t ? "smooth" : "auto"
		}), setTimeout(() => {
			T.current = !1;
		}, t ? 600 : 50));
	}, [s, r]);
	(0, B.useLayoutEffect)(() => {
		s === "scroll" && S.current && C.current[E.current] && (S.current.scrollTop = C.current[E.current].offsetTop);
	}, [s]), (0, B.useEffect)(() => {
		if (s !== "scroll" || !S.current) return;
		let e = S.current, t = () => {
			if (T.current) return;
			let t = e.scrollTop + 4, n = 0;
			for (let e = 0; e < C.current.length; e++) {
				let r = C.current[e];
				if (r && r.offsetTop <= t) n = e;
				else break;
			}
			u(n);
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [s]), (0, B.useEffect)(() => {
		if (s === "pages") for (let e = 1; e <= 5; e++) {
			let n = t[l + e];
			if (n) {
				let e = new Image();
				e.src = n.src;
			}
		}
	}, [
		l,
		s,
		t
	]), (0, B.useEffect)(() => {
		let e = (e) => {
			e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName) || (e.key === "ArrowRight" ? (e.preventDefault(), D(1)) : e.key === "ArrowLeft" ? (e.preventDefault(), D(-1)) : e.key === "Home" ? (e.preventDefault(), O(0)) : e.key === "End" ? (e.preventDefault(), O(r - 1)) : e.key === "?" ? _(!0) : e.key === "b" || e.key === "B" ? k() : e.key === "t" || e.key === "T" ? h(!0) : (e.key === "v" || e.key === "V") && c((e) => e === "pages" ? "scroll" : "pages"));
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	});
	let k = () => x((e) => e.includes(l) ? e.filter((e) => e !== l) : [...e, l].sort((e, t) => e - t)), A = b.includes(l), j = d ?? l, M = (e) => n[t[e].chapter], te = [
		{
			label: "All pages",
			icon: /* @__PURE__ */ (0, V.jsx)(De, { size: 18 }),
			onClick: () => h(!0)
		},
		{
			label: A ? "Remove bookmark" : "Bookmark this page",
			icon: A ? /* @__PURE__ */ (0, V.jsx)(be, { size: 18 }) : /* @__PURE__ */ (0, V.jsx)(xe, { size: 18 }),
			onClick: k
		},
		{
			label: "Bookmarks",
			icon: /* @__PURE__ */ (0, V.jsx)(xe, { size: 18 }),
			onClick: () => y(!0),
			isDisabled: !b.length
		},
		...$.driveUrl ? [{
			label: "Snadiya's Drive Link",
			icon: /* @__PURE__ */ (0, V.jsx)(Ce, { size: 18 }),
			onClick: () => window.open($.driveUrl, "_blank", "noopener")
		}] : [],
		{
			label: "Keyboard shortcuts",
			icon: /* @__PURE__ */ (0, V.jsx)(Te, { size: 18 }),
			onClick: () => _(!0)
		}
	];
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "shell",
		children: [
			/* @__PURE__ */ (0, V.jsxs)("header", {
				className: "bar top",
				children: [
					/* @__PURE__ */ (0, V.jsx)(a, {
						label: "All comics",
						variant: "ghost",
						href: $.gallery || "index.html",
						icon: /* @__PURE__ */ (0, V.jsx)(w, { icon: "chevronLeft" }),
						isIconOnly: e
					}),
					/* @__PURE__ */ (0, V.jsx)("div", {
						className: "title",
						children: i ? /* @__PURE__ */ (0, V.jsx)(ee, {
							button: {
								label: $.title,
								variant: "ghost"
							},
							menuWidth: 280,
							items: n.map((e) => ({
								label: e.title,
								description: `${e.from + 1} to ${e.to + 1}`,
								onClick: () => O(e.from)
							}))
						}) : /* @__PURE__ */ (0, V.jsx)(m, {
							type: "large",
							weight: "semibold",
							children: $.title
						})
					}),
					/* @__PURE__ */ (0, V.jsxs)(Ie, {
						label: "Reading mode",
						value: s,
						onChange: c,
						children: [/* @__PURE__ */ (0, V.jsx)(Be, {
							value: "scroll",
							label: "Scroll",
							icon: /* @__PURE__ */ (0, V.jsx)(je, { size: 18 }),
							isLabelHidden: e
						}), /* @__PURE__ */ (0, V.jsx)(Be, {
							value: "pages",
							label: "Pages",
							icon: /* @__PURE__ */ (0, V.jsx)(ye, { size: 18 }),
							isLabelHidden: e
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)(ee, {
						button: {
							label: "Options",
							icon: /* @__PURE__ */ (0, V.jsx)(L, { size: 18 }),
							isIconOnly: e
						},
						hasChevron: !1,
						alignment: "end",
						menuWidth: 260,
						presentation: "adaptive",
						items: te
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsx)("main", {
				className: "content",
				children: s === "pages" ? /* @__PURE__ */ (0, V.jsx)("div", {
					className: "stage",
					onClick: (e) => {
						let t = e.currentTarget.getBoundingClientRect();
						D(e.clientX - t.left > t.width / 2 ? 1 : -1);
					},
					children: /* @__PURE__ */ (0, V.jsx)("img", {
						src: t[l].src,
						width: t[l].w,
						height: t[l].h,
						alt: ""
					}, t[l].src)
				}) : /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "scroll",
					ref: S,
					children: [t.map((e, t) => /* @__PURE__ */ (0, V.jsx)("div", {
						className: "panel",
						ref: (e) => {
							C.current[t] = e;
						},
						style: { aspectRatio: `${e.w} / ${e.h}` },
						children: /* @__PURE__ */ (0, V.jsx)("img", {
							src: e.src,
							width: e.w,
							height: e.h,
							loading: "lazy",
							decoding: "async",
							alt: ""
						})
					}, t)), /* @__PURE__ */ (0, V.jsx)(Tt, {})]
				})
			}),
			/* @__PURE__ */ (0, V.jsxs)("footer", {
				className: "bar bottom",
				children: [
					/* @__PURE__ */ (0, V.jsx)(a, {
						label: "Previous",
						icon: /* @__PURE__ */ (0, V.jsx)(w, { icon: "chevronLeft" }),
						onClick: () => D(-1),
						isDisabled: l === 0
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "scrub",
						children: [d != null && /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "peek",
							style: { left: `${d / Math.max(1, r - 1) * 100}%` },
							children: [
								t[d].pv && /* @__PURE__ */ (0, V.jsx)("img", {
									src: t[d].pv,
									alt: ""
								}),
								/* @__PURE__ */ (0, V.jsxs)(m, {
									type: "label",
									children: [
										d + 1,
										" of ",
										r
									]
								}),
								i && /* @__PURE__ */ (0, V.jsx)(m, {
									type: "supporting",
									color: "primary",
									children: M(d).title
								})
							]
						}), /* @__PURE__ */ (0, V.jsx)(Ye, {
							label: "Page",
							isLabelHidden: !0,
							valueDisplay: "none",
							min: 1,
							max: r,
							value: j + 1,
							width: "100%",
							onChange: (e) => f(e - 1),
							onChangeEnd: (e) => {
								f(null), O(e - 1);
							}
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)("span", {
						className: "count",
						children: /* @__PURE__ */ (0, V.jsxs)(m, {
							type: "label",
							children: [
								j + 1,
								" / ",
								r
							]
						})
					}),
					/* @__PURE__ */ (0, V.jsx)(a, {
						label: "Next",
						variant: "primary",
						endContent: /* @__PURE__ */ (0, V.jsx)(w, { icon: "chevronRight" }),
						onClick: () => D(1),
						isDisabled: l === r - 1
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)(st, {
				isOpen: p,
				onOpenChange: h,
				variant: "fullscreen",
				padding: 4,
				children: [/* @__PURE__ */ (0, V.jsx)(lt, {
					title: "All pages",
					onOpenChange: h
				}), n.map((e, n) => /* @__PURE__ */ (0, V.jsxs)("section", { children: [i && /* @__PURE__ */ (0, V.jsx)(m, {
					type: "large",
					weight: "semibold",
					as: "div",
					children: e.title
				}), /* @__PURE__ */ (0, V.jsx)("div", {
					className: "grid",
					children: t.slice(e.from, e.to + 1).map((t, n) => {
						let r = e.from + n;
						return /* @__PURE__ */ (0, V.jsxs)("button", {
							className: "thumb" + (r === l ? " on" : ""),
							onClick: () => {
								h(!1), O(r);
							},
							children: [/* @__PURE__ */ (0, V.jsx)("img", {
								src: t.pv || t.thumb,
								loading: "lazy",
								alt: "",
								style: { aspectRatio: `${t.w} / ${t.h}` }
							}), /* @__PURE__ */ (0, V.jsx)("span", { children: r + 1 })]
						}, r);
					})
				})] }, n))]
			}),
			/* @__PURE__ */ (0, V.jsxs)(st, {
				isOpen: v,
				onOpenChange: y,
				children: [/* @__PURE__ */ (0, V.jsx)(lt, {
					title: "Bookmarks",
					onOpenChange: y
				}), /* @__PURE__ */ (0, V.jsx)("div", {
					className: "marks",
					children: b.map((e) => /* @__PURE__ */ (0, V.jsx)(a, {
						label: `Page ${e + 1}`,
						variant: "ghost",
						onClick: () => {
							y(!1), O(e);
						}
					}, e))
				})]
			}),
			/* @__PURE__ */ (0, V.jsxs)(st, {
				isOpen: g,
				onOpenChange: _,
				children: [/* @__PURE__ */ (0, V.jsx)(lt, {
					title: "Keyboard shortcuts",
					onOpenChange: _
				}), /* @__PURE__ */ (0, V.jsx)("dl", {
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
					].map(([e, t]) => /* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsx)("dt", { children: /* @__PURE__ */ (0, V.jsx)(ge, { keys: e }) }), /* @__PURE__ */ (0, V.jsx)("dd", { children: /* @__PURE__ */ (0, V.jsx)(m, { children: t }) })] }, e))
				})]
			})
		]
	});
}
function Tt() {
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "end",
		children: [
			/* @__PURE__ */ (0, V.jsx)(m, {
				type: "display-3",
				children: $.endText || "The End"
			}),
			/* @__PURE__ */ (0, V.jsx)(a, {
				label: "All comics",
				href: $.gallery || "index.html",
				icon: /* @__PURE__ */ (0, V.jsx)(ke, { size: 18 })
			}),
			($.related || []).map((e) => /* @__PURE__ */ (0, V.jsx)(a, {
				label: e.title,
				variant: "ghost",
				href: e.href,
				target: e.external ? "_blank" : void 0
			}, e.href))
		]
	});
}
(0, ut.createRoot)(document.getElementById("reader")).render(/* @__PURE__ */ (0, V.jsx)(B.StrictMode, { children: /* @__PURE__ */ (0, V.jsx)(o, {
	theme: gt,
	mode: "dark",
	children: /* @__PURE__ */ (0, V.jsx)(wt, {})
}) }));
//#endregion
