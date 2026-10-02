import { $ as e, A as t, At as n, B as r, E as i, Et as a, Ft as o, G as s, I as c, J as l, K as u, L as d, Mt as f, N as p, Nt as m, O as h, P as g, R as _, S as v, Tt as y, U as b, V as x, W as S, X as C, Y as w, _ as T, _t as E, a as D, at as O, b as k, bt as A, d as j, dt as M, ht as N, i as P, it as F, j as ee, kt as I, lt as L, mt as R, q as z, r as te, t as B, ut as ne, v as re, vt as ie, y as ae, yt as oe, z as se } from "./source-B-BxpsX7.js";
//#region node_modules/@astryxdesign/core/dist/utils/isApplePlatform.js
function V() {
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
var H = /* @__PURE__ */ o(m(), 1), U = A(), ce = { wrapper: {
	k1xSpc: "x3nfvp2",
	kGNEyG: "x6s0dn4",
	kOIVth: "xzye2dw",
	kmuXW: "x2lah0s",
	$$css: !0
} }, le = /* @__PURE__ */ new Map([
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
]), ue = /* @__PURE__ */ new Map([["esc", "escape"], ["return", "enter"]]);
function W(e, t) {
	return e === "mod" ? t ? "⌘" : "Ctrl" : le.get(e) ?? e.toUpperCase();
}
var de = /* @__PURE__ */ new Map([
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
function fe(e, t) {
	return e === "mod" ? t ? "Command" : "Control" : de.get(e) ?? e.toUpperCase();
}
function pe() {
	return () => {};
}
function me() {
	return !1;
}
function he({ keys: e, ref: t, xstyle: r, className: i, style: o, ...s }) {
	let c = (0, H.useSyncExternalStore)(pe, V, me), l = /* @__PURE__ */ new Map(), u = e.split("+").map((e) => e.trim().toLowerCase()).map((e) => {
		let t = l.get(e) ?? 0;
		return l.set(e, t + 1), {
			key: ue.get(e) ?? e,
			reactKey: `${e}:${t}`
		};
	}), d = u.map(({ key: e }) => fe(e, c)).join(" + ");
	return /*#__PURE__*/ (0, U.jsx)("span", {
		...s,
		ref: t,
		role: "img",
		"aria-label": d,
		...N(a("kbd"), n(ce.wrapper, r), i, o),
		children: u.map(({ key: e, reactKey: t }) => /*#__PURE__*/ (0, U.jsx)("kbd", {
			"aria-hidden": "true",
			className: "x3nfvp2 x6s0dn4 xl56j7k x16asifk x1grt7ep x7a5moj xx3sua9 x17x4s8c xlxy82 x1q0q8m5 xib2hle xv1l7n4 x9ynric x141an7d x1e4wzip x1ltkj2j x87ps6o",
			children: W(e, c)
		}, t))
	});
}
he.displayName = "Kbd";
//#endregion
//#region node_modules/@astryxdesign/core/dist/hooks/useKeyboardHint.js
var G = /* @__PURE__ */ new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown"
]), ge = {
	horizontal: ["left", "right"],
	vertical: ["up", "down"],
	both: [
		"left",
		"right",
		"up",
		"down"
	]
}, K = { hint: {
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
function _e(e = {}) {
	let { orientation: t = "horizontal", dismissAfterMs: n = 3e3, isEnabled: r = !0 } = e, i = c(), a = (0, H.useRef)(null), o = (0, H.useRef)(!1), l = (0, H.useRef)(!1), u = (0, H.useRef)(() => {}), d = (0, H.useCallback)(() => {
		a.current &&= (clearTimeout(a.current), null);
	}, []), f = (0, H.useCallback)(() => {
		l.current = !0;
	}, []), p = (0, H.useCallback)(() => {
		l.current = !1, d(), u.current(null);
	}, [d]), m = s({
		mode: "context",
		onShow: f,
		onHide: p
	});
	u.current = m.ref;
	let h = (0, H.useCallback)(() => {
		o.current = !0, d(), m.hide(), l.current = !1, u.current(null);
	}, [d, m]), g = (0, H.useCallback)((e) => {
		!o.current && r && (u.current(e), m.show(), d(), a.current = setTimeout(() => {
			h();
		}, n));
	}, [
		d,
		h,
		n,
		r,
		m
	]);
	(0, H.useEffect)(() => () => {
		d(), u.current(null);
	}, [d]);
	let _ = (0, H.useCallback)((e) => {
		if (o.current || !r) return;
		let t = e.target;
		if (!t.matches(":focus-visible")) return;
		let n = e.currentTarget;
		e.relatedTarget instanceof Node && n.contains(e.relatedTarget) || g(t);
	}, [g, r]), v = (0, H.useCallback)((e) => {
		if (!l.current) return;
		let t = e.currentTarget;
		if (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) {
			!o.current && e.relatedTarget instanceof HTMLElement && u.current(e.relatedTarget);
			return;
		}
		h();
	}, [h]), y = (0, H.useCallback)((e) => {
		l.current && G.has(e.key) && h();
	}, [h]), b = /*#__PURE__*/ (0, U.jsx)("span", {
		className: "x3nfvp2 x6s0dn4 xzye2dw",
		children: ge[t].map((e) => /*#__PURE__*/ (0, U.jsx)(he, { keys: e }, e))
	});
	return {
		hintElement: m.render(/*#__PURE__*/ (0, U.jsxs)("span", {
			"aria-hidden": "true",
			children: [b, /*#__PURE__*/ (0, U.jsx)("span", {
				className: "x11g1kdw",
				children: i("@astryx.keyboardHint.toNavigate")
			})]
		}), {
			placement: "below",
			alignment: "start",
			xstyle: K.hint,
			style: { marginBlockStart: I["--spacing-2"] }
		}),
		onFocus: _,
		onBlur: v,
		onKeyDown: y
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/book-open.mjs
var ve = {
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
ve.node;
var ye = P(ve), q = {
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
var be = P(q), J = {
	name: "bookmark",
	size: 24,
	node: [["path", {
		d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
		key: "oz39mx"
	}]]
};
J.node;
var xe = P(J), Se = {
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
var Ce = P(Se), we = {
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
var Te = P(we), Ee = {
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
var De = P(Ee), Oe = {
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
var ke = P(Oe), Ae = {
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
var je = P(Ae), Me = ie(null);
Me.displayName = "SegmentedControlContext";
function Ne() {
	let e = (0, H.use)(Me);
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
function Ie({ ref: e, value: t, onChange: r, label: i, size: o, layout: s = "hug", isDisabled: c = !1, disabledMessage: l, children: u, xstyle: d, className: f, style: m, onKeyDown: h, onFocus: g, onBlur: v, ...y }) {
	let b = p(o, "md"), x = c && !!l, S = se({
		placement: "above",
		focusTrigger: "always",
		isEnabled: x
	}), { listRef: C, handleKeyDown: w, handleFocus: T } = ae({
		itemSelector: "[role=\"radio\"]:not([aria-disabled=\"true\"])",
		hasRovingTabIndex: !0,
		wrap: !0,
		orientation: "horizontal"
	}), E = _e({
		orientation: "horizontal",
		isEnabled: !c
	}), D = (0, H.useCallback)((e) => {
		h?.(e), !e.defaultPrevented && (E.onKeyDown(e), w(e));
	}, [
		h,
		E,
		w
	]), O = (0, H.useCallback)((e) => {
		if (g?.(e), e.defaultPrevented || (E.onFocus(e), T(e), c) || !e.currentTarget.contains(e.relatedTarget)) return;
		let n = e.target?.closest("[role=\"radio\"][data-value]");
		if (!n || n.getAttribute("aria-disabled") === "true") return;
		let i = n.dataset.value;
		i != null && i !== t && r(i);
	}, [
		g,
		E,
		T,
		c,
		r,
		t
	]), k = (0, H.useMemo)(() => ({
		value: t,
		onChange: r,
		size: b,
		layout: s,
		isDisabled: c,
		hasDisabledMessage: x
	}), [
		t,
		r,
		b,
		s,
		c,
		x
	]);
	return /*#__PURE__*/ (0, U.jsxs)(Me, {
		value: k,
		children: [/*#__PURE__*/ (0, U.jsxs)("div", {
			ref: _(e, C, S.ref),
			...y,
			role: "radiogroup",
			"aria-label": i,
			"aria-disabled": c || void 0,
			"aria-describedby": x ? S.describedBy : void 0,
			onKeyDown: D,
			onFocus: O,
			onBlur: R(v, E.onBlur),
			...N(a("segmented-control", { size: b }), n(Pe.container, Fe[b], s === "fill" && Pe.fill, c && (x ? Pe.disabledWithMessage : Pe.disabled), d), f, m),
			children: [u, E.hintElement]
		}), x && S.renderTooltip(l)]
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
function Be({ ref: e, value: t, label: r, isLabelHidden: i = !1, icon: o, isDisabled: s = !1, onClick: c, xstyle: l, ...u }) {
	let d = Ne(), f = d.value === t, p = s || d.isDisabled, m = f && (d.hasDisabledMessage ?? !1) && !s, h = d.size, g = d.layout === "fill", _ = R(c, () => {
		!p && !f && d.onChange(t);
	}), v = o ? /*#__PURE__*/ (0, U.jsx)("span", {
		...n(Le.icon, ze[h]),
		children: o
	}) : null;
	return /*#__PURE__*/ (0, U.jsxs)("button", {
		ref: e,
		...u,
		type: "button",
		role: "radio",
		"aria-checked": f,
		"aria-disabled": p || void 0,
		"aria-label": i ? r : void 0,
		"data-value": t,
		tabIndex: f && !p || m ? 0 : -1,
		onClick: _,
		...N(a("segmented-control-item", {
			size: h,
			selected: f ? "selected" : null,
			disabled: p ? "disabled" : null
		}), L.focusVisible(Le.base, Re[h], g && Le.fill, f && Le.selected, !f && !p && ee.backgroundColor, p && Le.disabled, l)),
		children: [v, !i && /*#__PURE__*/ (0, U.jsx)("span", {
			className: "xb3r6kr xlyipyv xeuugli",
			children: r
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
	let { label: r, isLabelHidden: i = !1, description: o, isDisabled: s = !1, disabledMessage: c, isOptional: l = !1, isRequired: u = !1, status: d, labelTooltip: f, min: p = 0, max: m = 100, step: h = 1, orientation: y = "horizontal", formatValue: x, htmlName: C, valueDisplay: w = "tooltip", marks: T, width: E, xstyle: D, className: O, style: A, "data-testid": P, value: F, onChange: ee, onChangeEnd: I } = t, L = Array.isArray(F), R = L && "minStepsBetweenThumbs" in t ? t.minStepsBetweenThumbs ?? 0 : 0, z = y === "horizontal", te = (0, H.useId)(), B = (0, H.useId)(), re = (0, H.useId)(), ie = (0, H.useId)(), ae = (0, H.useId)(), oe = (0, H.useRef)(null), V = (0, H.useRef)(null), [ce, le] = (0, H.useState)(null), [ue, W] = (0, H.useState)(null);
	S();
	let de = (0, H.useCallback)((e, t) => {
		W(!s && b() === "keyboard" ? e : null);
	}, [s]), fe = (0, H.useCallback)((e) => {
		W(null);
	}, []), pe = s && !!c, me = se({
		placement: "above",
		focusTrigger: "always",
		isEnabled: pe
	}), he = u && !l, G = [];
	o && G.push(re), d?.message && G.push(ie), he && G.push(ae), pe && G.push(me.describedBy);
	let ge = G.length > 0 ? G.join(" ") : void 0, K = (0, H.useMemo)(() => (Array.isArray(F) ? F : [F ?? p]).map((e) => X(e, p, m)), [
		F,
		p,
		m
	]), _e = (0, H.useRef)(K);
	_e.current = K;
	let ve = (0, H.useCallback)((e, t) => {
		let n = oe.current;
		if (!n) return p;
		let r = n.getBoundingClientRect(), i;
		return i = z ? qe(k(n) ? r.right - e : e - r.left, r.width) : 1 - qe(t - r.top, r.height), i = X(i, 0, 1), X(Ue(p + i * (m - p), p, h), p, m);
	}, [
		p,
		m,
		h,
		z
	]), ye = (0, H.useCallback)((e) => {
		if (!L) return 0;
		let [t, n] = K;
		return Math.abs(e - t) <= Math.abs(e - n) ? 0 : 1;
	}, [L, K]), q = (0, H.useCallback)((e, t) => {
		if (s) return;
		let n = X(Ue(t, p, h), p, m);
		if (L) {
			let t = [...K];
			t[e] = n;
			let r = R * h;
			e === 0 ? t[0] = Math.min(t[0], t[1] - r) : t[1] = Math.max(t[1], t[0] + r), t[0] = X(t[0], p, m), t[1] = X(t[1], p, m), ee?.(t);
		} else ee?.(n);
	}, [
		s,
		L,
		K,
		p,
		m,
		h,
		R,
		ee
	]), be = (0, H.useRef)(I);
	be.current = I;
	let J = (0, H.useCallback)((e) => {
		let t = e ?? _e.current, n = be.current;
		L ? n?.(t) : n?.(t[0]);
	}, [L]), xe = (0, H.useCallback)((e) => {
		if (s) return;
		e.preventDefault();
		let t = e.target.closest("[data-mark-value]"), n = t ? Number(t.dataset.markValue) : ve(e.clientX, e.clientY), r = oe.current?.querySelectorAll("[role=\"slider\"]"), i = e.target.closest("[role=\"slider\"]"), a = i == null || r == null ? -1 : Array.from(r).indexOf(i), o = a >= 0 ? a : ye(n);
		V.current = o, le(o), q(o, n), r?.[o]?.focus(), W(null), typeof e.currentTarget.setPointerCapture == "function" && e.currentTarget.setPointerCapture(e.pointerId);
	}, [
		s,
		ve,
		ye,
		q
	]), Se = (0, H.useCallback)((e) => {
		if (V.current === null || s) return;
		let t = ve(e.clientX, e.clientY);
		q(V.current, t);
	}, [
		s,
		ve,
		q
	]), Ce = (0, H.useCallback)((e) => {
		V.current !== null && (V.current = null, le(null), J());
	}, [J]), we = (0, H.useCallback)((e, t) => {
		if (s) return;
		t.key !== "Shift" && !t.metaKey && !t.altKey && !t.ctrlKey && b() === "keyboard" && W(e);
		let n = K[e], r;
		switch (t.key) {
			case "ArrowRight":
			case "ArrowUp":
				r = n + h;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				r = n - h;
				break;
			case "PageUp":
				r = n + h * 10;
				break;
			case "PageDown":
				r = n - h * 10;
				break;
			case "Home":
				r = p;
				break;
			case "End":
				r = m;
				break;
			default: return;
		}
		t.preventDefault();
		let i = X(Ue(r, p, h), p, m);
		if (q(e, r), L) {
			let t = [...K];
			t[e] = i;
			let n = R * h;
			e === 0 ? t[0] = Math.min(t[0], t[1] - n) : t[1] = Math.max(t[1], t[0] + n), t[0] = X(t[0], p, m), t[1] = X(t[1], p, m), J(t);
		} else J([i]);
	}, [
		s,
		L,
		K,
		h,
		p,
		m,
		R,
		q,
		J
	]), Te = (e) => x ? x(e) : String(e), Ee = (e) => {
		let t = K[e], r = We(t, p, m), i = z ? { insetInlineStart: Z(r) } : {
			bottom: Z(r),
			left: "50%"
		}, o = L ? e === 0 ? "Minimum value" : "Maximum value" : void 0, c = R * h, l = L && e === 1 ? X(K[0] + c, p, m) : p, u = L && e === 0 ? X(K[1] - c, p, m) : m, f = w === "tooltip" && !pe, g = z ? "above" : "start", _ = /*#__PURE__*/ (0, U.jsx)("div", {
			id: L ? void 0 : te,
			role: "slider",
			tabIndex: s && !pe ? -1 : 0,
			"aria-valuemin": l,
			"aria-valuemax": u,
			"aria-valuenow": t,
			"aria-valuetext": x ? x(t) : void 0,
			"aria-orientation": y,
			"aria-disabled": s || void 0,
			"aria-invalid": d?.type === "error" || void 0,
			"aria-label": o,
			"aria-labelledby": L ? void 0 : B,
			"aria-describedby": ge,
			onKeyDown: (t) => we(e, t),
			onFocus: (t) => de(e, t),
			onBlur: fe,
			...N(a("slider-thumb", {
				orientation: y,
				disabled: s ? "disabled" : null
			}), n(Y.thumb, z ? Y.thumbHorizontal : M.centerInline("50%"), !s && Y.thumbHover, !s && ce === e && Y.thumbPressed, !s && ue === e && ne.focusVisible, s && Y.thumbDisabled), void 0, i)
		}, e);
		return f ? /*#__PURE__*/ (0, U.jsx)(v, {
			content: Te(t),
			placement: g,
			delay: 0,
			focusTrigger: "always",
			isOpen: ce === e || void 0,
			children: _
		}, e) : _;
	}, De = (() => {
		if (L) {
			let [e, t] = K, n = We(e, p, m), r = We(t, p, m);
			return z ? {
				insetInlineStart: Z(n),
				width: Ke(n, r)
			} : {
				bottom: Z(n),
				height: Ke(n, r)
			};
		}
		let e = We(K[0], p, m);
		return z ? {
			insetInlineStart: "0%",
			width: Z(e)
		} : {
			bottom: "0%",
			height: Z(e)
		};
	})(), Oe = w === "text" ? /*#__PURE__*/ (0, U.jsx)("span", {
		className: "x9ynric xcr08ib x1tgivj0 xuxw1ft x2lah0s",
		children: L ? `${Te(K[0])} – ${Te(K[1])}` : Te(K[0])
	}) : null;
	return /*#__PURE__*/ (0, U.jsxs)(j, {
		"data-testid": P,
		label: r,
		isLabelHidden: i,
		description: o,
		inputID: te,
		labelID: B,
		isGroupLabel: !0,
		descriptionID: o ? re : void 0,
		isOptional: l,
		isRequired: u,
		isDisabled: s,
		status: d ? {
			type: d.type,
			message: d.message,
			messageID: d.message ? ie : void 0
		} : void 0,
		labelTooltip: f,
		statusVariant: "detached",
		width: E,
		xstyle: D,
		className: O,
		style: A,
		children: [
			/*#__PURE__*/ (0, U.jsxs)("div", {
				...N(a("slider", {
					orientation: y,
					disabled: s ? "disabled" : null
				}), { className: "x78zum5 x6s0dn4 x1txdalj" }),
				children: [
					C != null && K.map((e, t) => /*#__PURE__*/ (0, U.jsx)("input", {
						type: "hidden",
						name: C,
						value: String(e),
						disabled: s
					}, t === 0 ? "start" : "end")),
					/*#__PURE__*/ (0, U.jsxs)("div", {
						ref: _(e, oe, me.ref),
						...L ? {
							role: "group",
							"aria-labelledby": B
						} : void 0,
						onPointerDown: xe,
						onPointerMove: Se,
						onPointerUp: Ce,
						onPointerCancel: Ce,
						...N(a("slider-control", {
							orientation: y,
							disabled: s ? "disabled" : null
						}), {
							0: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k x1ypdohk x16khyan" },
							2: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 x1ypdohk x16khyan" },
							1: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 xw4jnvo x1ymw6g xkagaj0 xdt5ytf xl56j7k xbyyjgo xt0e3qv" },
							3: { className: "x1n2onr6 x78zum5 x6s0dn4 x1iyjqo2 x5ve5x3 x87ps6o xc8icb0 x1qx5ct2 x80b3aj xh8yej3 xbyyjgo xt0e3qv" }
						}[!!z << 1 | !!s << 0]),
						children: [
							/*#__PURE__*/ (0, U.jsx)("div", {
								"aria-hidden": "true",
								...N(a("slider-track", { orientation: y }), n(Y.track, z ? Y.trackHorizontal : [Y.trackVertical, M.centerInline("0px")]))
							}),
							/*#__PURE__*/ (0, U.jsx)("div", {
								"aria-hidden": "true",
								...N(n(Y.filledTrack, z ? Y.filledTrackHorizontal : [Y.filledTrackVertical, M.centerInline("0px")]), { style: De })
							}),
							T && /*#__PURE__*/ (0, U.jsx)("div", {
								"aria-hidden": "true",
								...{
									0: { className: "x10l6tqk x13vifvy x1ey2m1c xbudbmw" },
									1: { className: "x10l6tqk x1o0tod xtijo5x xwa60dl" }
								}[!!z << 0],
								children: T.map((e) => {
									let t = We(e.value, p, m), n = z ? { insetInlineStart: Z(t) } : { bottom: Z(t) }, r = L ? e.value >= K[0] && e.value <= K[1] : e.value <= K[0];
									return /*#__PURE__*/ (0, U.jsxs)("div", { children: [/*#__PURE__*/ (0, U.jsx)("div", {
										"data-testid": "slider-mark",
										"data-mark-value": e.value,
										...N({
											0: { className: "x10l6tqk xdsb6cv xjspbzw x36qwtl x1xc55vz x1m9mm8y" },
											2: { className: "x10l6tqk xdsb6cv xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3" },
											1: { className: "x10l6tqk xjspbzw x36qwtl x1xc55vz x1m9mm8y x1ewilqj" },
											3: { className: "x10l6tqk xjspbzw xfo62xy xdk7pt x11lhmoz xoffwj3 x1ewilqj" }
										}[!!z << 1 | !!r << 0], { style: n })
									}), e.label && /*#__PURE__*/ (0, U.jsx)("span", {
										"data-testid": "slider-mark-label",
										"data-mark-value": e.value,
										...N({
											0: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft x131p8rn x9p6ekw" },
											1: { className: "x10l6tqk x9ynric x141an7d xv1l7n4 xuxw1ft xuuh30 x1nyx83j xuivejd" }
										}[!!z << 0], { style: n }),
										children: e.label
									})] }, e.value);
								})
							}),
							K.map((e, t) => Ee(t))
						]
					}),
					Oe
				]
			}),
			he && /*#__PURE__*/ (0, U.jsx)(g, {
				id: ae,
				children: "Required"
			}),
			pe && me.renderTooltip(c)
		]
	});
}
Ye.displayName = "Slider";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogContext.js
var Xe = /*#__PURE__*/ (0, H.createContext)(null);
Xe.displayName = "DialogContext";
function Ze() {
	return (0, H.use)(Xe);
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
`${I["--spacing-4"]}`, `${I["--spacing-4"]}`, `${I["--spacing-4"]}`, `${I["--spacing-4"]}`, `${I["--spacing-4"]}`, `${I["--spacing-4"]}`;
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
}, $e = I["--spacing-4"], et = `min(100%, ${`calc(100dvw - ${$e} - ${$e})`})`;
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
function st({ isOpen: t, isInline: i = !1, onOpenChange: o, width: s = 400, maxHeight: c = "75dvh", position: d, variant: f = "standard", purpose: p = "info", padding: m, children: h, xstyle: g, className: v, style: y, ref: b, ...S }) {
	let D = m == null, k = m ?? 4, A = O[k], j = f === "fullscreen", M = j ? null : nt(s, c), P = (0, H.useId)(), ee = (0, H.useMemo)(() => ({
		isInline: i,
		titleId: P
	}), [i, P]), I = S["aria-label"] != null || S["aria-labelledby"] != null, R = (0, H.useRef)(null), z = (0, H.useCallback)((e) => {
		R.current = e, e && !I && (e.querySelector(`#${CSS.escape(P)}`) == null ? e.removeAttribute("aria-labelledby") : e.setAttribute("aria-labelledby", P));
	}, [P, I]), te = _(b, z), B = (0, H.useRef)(null), ne = p !== "required", ie = p === "info";
	(0, H.useEffect)(() => {
		if (i) return;
		let e = R.current;
		if (e) {
			if (t) {
				B.current = document.activeElement;
				let t = B.current;
				if (t && t !== document.body) {
					let n = Qe(t);
					e.style.setProperty("--dialog-dir-x", `${n.x}px`), e.style.setProperty("--dialog-dir-y", `${n.y}px`);
				} else e.style.setProperty("--dialog-dir-x", "0px"), e.style.setProperty("--dialog-dir-y", "16px");
				if (!e.open) {
					e.showModal();
					let t = e.querySelector("[data-autofocus]");
					t && t.focus();
				}
			} else e.open && e.close(), B.current?.focus(), B.current = null;
		}
	}, [t, i]), T(t && !i);
	let { shouldDismissOnCloseRequest: ae } = r({
		isActive: t,
		isEnabled: !i,
		escapeBehavior: ne ? "close" : "block",
		onDismiss: () => {
			o(!1);
		}
	}), oe = (0, H.useRef)(!1);
	(0, H.useEffect)(() => {
		let e = R.current?.querySelector(`#${CSS.escape(P)}`) != null;
		t && !i && !I && !e && !oe.current && (oe.current = !0);
	}, [
		t,
		i,
		I,
		P
	]);
	let se = (e) => {
		e.target === e.currentTarget && ie && o(!1);
	}, V = (e) => {
		e.preventDefault(), ae() && ne && o(!1);
	}, ce = /*#__PURE__*/ (0, U.jsx)("div", {
		...n(Q.inner, ...re(D ? {
			useThemeDefault: "dialog",
			maxHeight: M?.maxHeight
		} : {
			paddingInnerX: A,
			paddingInnerY: A,
			paddingOuterX: A,
			paddingOuterY: A,
			maxHeight: M?.maxHeight
		}), !D && k !== 4 && F[k], !D && k !== 4 && C[k], !D && k !== 4 && w[k], !D && k !== 4 && l[k], j && D && Q.fullscreenSafeArea),
		children: /*#__PURE__*/ (0, U.jsx)(Xe, {
			value: ee,
			children: h
		})
	}), le = d != null && !j, { open: ue, ...W } = S;
	return i ? t ? /*#__PURE__*/ (0, U.jsx)("div", {
		...W,
		...N(a("dialog", { variant: f }), n(u.reset, Q.inlineWrapper, e.reset, M && it.sizing(M.width, M.maxWidth, M.maxHeight), j && Q.fullscreen, g), v, y),
		"data-testid": S["data-testid"],
		children: /*#__PURE__*/ (0, U.jsx)(x, { children: /*#__PURE__*/ (0, U.jsx)(E, { children: ce }) })
	}) : null : /*#__PURE__*/ (0, U.jsx)("dialog", {
		ref: te,
		...W,
		...N(a("dialog", { variant: f }), L.focusVisible(u.reset, Q.dialog, e.reset, t && Q.open, Q.backdrop, M && it.sizing(M.width, M.maxWidth, M.maxHeight), le && (() => {
			let e = ot(d);
			return it.position(e.top, e.insetInlineStart, e.insetInlineEnd, e.bottom);
		})(), j && Q.fullscreen, j && t && Q.fullscreenOpen, g), v, y),
		onClick: se,
		onCancel: V,
		"aria-modal": "true",
		...p === "required" ? { role: "alertdialog" } : void 0,
		children: /*#__PURE__*/ (0, U.jsx)(x, { children: /*#__PURE__*/ (0, U.jsx)(E, { children: ce }) })
	});
}
st.displayName = "Dialog";
//#endregion
//#region node_modules/@astryxdesign/core/dist/Dialog/DialogHeader.js
var ct = { titleFocusable: {
	kI3sdo: "x1a2a7pz",
	$$css: !0
} };
function lt({ title: e, subtitle: n, onOpenChange: r, startContent: o, endContent: s, endContentEdgeCompensation: l, hasDivider: u, xstyle: f, className: p, style: m, ref: g, ..._ }) {
	let v = c(), y = (0, H.useRef)(null), b = Ze(), x = b?.isInline !== !0, S = b?.titleId, C = n != null && typeof n != "boolean" && n !== "", w = l == null ? r != null : l === "block" || l === "all", T = l == null ? r != null : l === "inline" || l === "all";
	return (0, H.useEffect)(() => {
		x && y.current && y.current.focus();
	}, [x]), /*#__PURE__*/ (0, U.jsx)(z, {
		ref: g,
		hasDivider: u,
		xstyle: f,
		className: p,
		style: m,
		..._,
		children: /*#__PURE__*/ (0, U.jsxs)("div", {
			...N(a("dialog-header"), { className: "x78zum5 x1cy8zhl x1qughib xjcht0a" }),
			children: [
				o && /*#__PURE__*/ (0, U.jsx)("div", {
					...N(a("dialog-header-start-content"), { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" }),
					children: o
				}),
				/*#__PURE__*/ (0, U.jsxs)("div", {
					...N(a("dialog-header-title-block"), { className: "x78zum5 xdt5ytf xsn7fz1 x98rzlu xeuugli xqixskq" }),
					children: [/*#__PURE__*/ (0, U.jsx)(i, {
						ref: y,
						id: S,
						level: 2,
						tabIndex: -1,
						xstyle: ct.titleFocusable,
						children: e
					}), C && /*#__PURE__*/ (0, U.jsx)(d, {
						type: "body",
						size: "sm",
						color: "secondary",
						children: n
					})]
				}),
				(s || r) && /*#__PURE__*/ (0, U.jsxs)("div", {
					...N(a("dialog-header-end-content"), {
						0: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s" },
						2: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f" },
						1: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s x3kzqx6" },
						3: { className: "x78zum5 x6s0dn4 x1txdalj x2lah0s xhzvc8f x3kzqx6" }
					}[!!w << 1 | !!T << 0]),
					children: [s, r && /*#__PURE__*/ (0, U.jsx)(t, {
						variant: "ghost",
						label: v("@astryx.dialog.close"),
						tooltip: v("@astryx.dialog.close"),
						icon: /*#__PURE__*/ (0, U.jsx)(h, {
							icon: "close",
							color: "inherit",
							...a("dialog-header-close-icon")
						}),
						onClick: () => {
							r?.(!1);
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
var ut = f(), dt = "#1e1b2c", ft = "#393047", pt = "#5a356a", mt = "#ecc1c2", ht = "#f49c58", gt = y({
	name: "snadiya-reader",
	extends: B,
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
	(0, H.useEffect)(() => {
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
	let e = "(max-width: 620px)", [t, n] = (0, H.useState)(() => window.matchMedia(e).matches);
	return (0, H.useEffect)(() => {
		let t = window.matchMedia(e), r = () => n(t.matches);
		return t.addEventListener("change", r), () => t.removeEventListener("change", r);
	}, []), t;
}
function wt() {
	let e = Ct(), { pages: n, chapters: r } = (0, H.useMemo)(xt, []), i = n.length, a = r.length > 1, [, o] = (0, H.useState)(0);
	St(n, o);
	let [s, c] = (0, H.useState)(() => vt("mode", window.matchMedia("(max-width:620px)").matches ? "scroll" : "pages")), [l, u] = (0, H.useState)(() => Math.min(i - 1, Math.max(0, vt("page", 0)))), [f, p] = (0, H.useState)(null), [m, g] = (0, H.useState)(!1), [_, v] = (0, H.useState)(!1), [y, b] = (0, H.useState)(!1), [x, S] = (0, H.useState)(() => vt("marks", [])), C = (0, H.useRef)(null), w = (0, H.useRef)([]), T = (0, H.useRef)(!1);
	(0, H.useEffect)(() => yt("mode", s), [s]), (0, H.useEffect)(() => yt("page", l), [l]), (0, H.useEffect)(() => yt("marks", x), [x]);
	let E = (0, H.useRef)(l);
	E.current = l;
	let O = (e) => k(E.current + e), k = (0, H.useCallback)((e, t = !1) => {
		e = Math.max(0, Math.min(i - 1, e)), E.current = e, u(e), s === "scroll" && w.current[e] && C.current && (T.current = !0, C.current.scrollTo({
			top: w.current[e].offsetTop,
			behavior: t ? "smooth" : "auto"
		}), setTimeout(() => {
			T.current = !1;
		}, t ? 600 : 50));
	}, [s, i]);
	(0, H.useLayoutEffect)(() => {
		s === "scroll" && C.current && w.current[E.current] && (C.current.scrollTop = w.current[E.current].offsetTop);
	}, [s]), (0, H.useEffect)(() => {
		if (s !== "scroll" || !C.current) return;
		let e = C.current, t = () => {
			if (T.current) return;
			let t = e.scrollTop + 4, n = 0;
			for (let e = 0; e < w.current.length; e++) {
				let r = w.current[e];
				if (r && r.offsetTop <= t) n = e;
				else break;
			}
			u(n);
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, [s]), (0, H.useEffect)(() => {
		if (s === "pages") for (let e = 1; e <= 5; e++) {
			let t = n[l + e];
			if (t) {
				let e = new Image();
				e.src = t.src;
			}
		}
	}, [
		l,
		s,
		n
	]), (0, H.useEffect)(() => {
		let e = (e) => {
			e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName) || (e.key === "ArrowRight" ? (e.preventDefault(), O(1)) : e.key === "ArrowLeft" ? (e.preventDefault(), O(-1)) : e.key === "Home" ? (e.preventDefault(), k(0)) : e.key === "End" ? (e.preventDefault(), k(i - 1)) : e.key === "?" ? v(!0) : e.key === "b" || e.key === "B" ? A() : e.key === "t" || e.key === "T" ? g(!0) : (e.key === "v" || e.key === "V") && c((e) => e === "pages" ? "scroll" : "pages"));
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	});
	let A = () => S((e) => e.includes(l) ? e.filter((e) => e !== l) : [...e, l].sort((e, t) => e - t)), j = x.includes(l), M = f ?? l, N = (e) => r[n[e].chapter], P = [
		{
			label: "All pages",
			icon: /* @__PURE__ */ (0, U.jsx)(De, { size: 18 }),
			onClick: () => g(!0)
		},
		{
			label: j ? "Remove bookmark" : "Bookmark this page",
			icon: j ? /* @__PURE__ */ (0, U.jsx)(be, { size: 18 }) : /* @__PURE__ */ (0, U.jsx)(xe, { size: 18 }),
			onClick: A
		},
		{
			label: "Bookmarks",
			icon: /* @__PURE__ */ (0, U.jsx)(xe, { size: 18 }),
			onClick: () => b(!0),
			isDisabled: !x.length
		},
		...$.driveUrl ? [{
			label: "Snadiya's Drive Link",
			icon: /* @__PURE__ */ (0, U.jsx)(Ce, { size: 18 }),
			onClick: () => window.open($.driveUrl, "_blank", "noopener")
		}] : [],
		{
			label: "Keyboard shortcuts",
			icon: /* @__PURE__ */ (0, U.jsx)(Te, { size: 18 }),
			onClick: () => v(!0)
		}
	];
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "shell",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("header", {
				className: "bar top",
				children: [
					/* @__PURE__ */ (0, U.jsx)(t, {
						label: "All comics",
						variant: "ghost",
						href: $.gallery || "index.html",
						icon: /* @__PURE__ */ (0, U.jsx)(h, { icon: "chevronLeft" }),
						isIconOnly: e
					}),
					/* @__PURE__ */ (0, U.jsx)("div", {
						className: "title",
						children: a ? /* @__PURE__ */ (0, U.jsx)(D, {
							button: {
								label: $.title,
								variant: "ghost"
							},
							menuWidth: 280,
							items: r.map((e) => ({
								label: e.title,
								description: `${e.from + 1} to ${e.to + 1}`,
								onClick: () => k(e.from)
							}))
						}) : /* @__PURE__ */ (0, U.jsx)(d, {
							type: "large",
							weight: "semibold",
							children: $.title
						})
					}),
					/* @__PURE__ */ (0, U.jsxs)(Ie, {
						label: "Reading mode",
						value: s,
						onChange: c,
						children: [/* @__PURE__ */ (0, U.jsx)(Be, {
							value: "scroll",
							label: "Scroll",
							icon: /* @__PURE__ */ (0, U.jsx)(je, { size: 18 }),
							isLabelHidden: e
						}), /* @__PURE__ */ (0, U.jsx)(Be, {
							value: "pages",
							label: "Pages",
							icon: /* @__PURE__ */ (0, U.jsx)(ye, { size: 18 }),
							isLabelHidden: e
						})]
					}),
					/* @__PURE__ */ (0, U.jsx)(D, {
						button: {
							label: "Options",
							icon: /* @__PURE__ */ (0, U.jsx)(te, { size: 18 }),
							isIconOnly: e
						},
						hasChevron: !1,
						alignment: "end",
						menuWidth: 260,
						presentation: "adaptive",
						items: P
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("main", {
				className: "content",
				children: s === "pages" ? /* @__PURE__ */ (0, U.jsx)("div", {
					className: "stage",
					onClick: (e) => {
						let t = e.currentTarget.getBoundingClientRect();
						O(e.clientX - t.left > t.width / 2 ? 1 : -1);
					},
					children: /* @__PURE__ */ (0, U.jsx)("img", {
						src: n[l].src,
						width: n[l].w,
						height: n[l].h,
						alt: ""
					}, n[l].src)
				}) : /* @__PURE__ */ (0, U.jsxs)("div", {
					className: "scroll",
					ref: C,
					children: [n.map((e, t) => /* @__PURE__ */ (0, U.jsx)("div", {
						className: "panel",
						ref: (e) => {
							w.current[t] = e;
						},
						style: { aspectRatio: `${e.w} / ${e.h}` },
						children: /* @__PURE__ */ (0, U.jsx)("img", {
							src: e.src,
							width: e.w,
							height: e.h,
							loading: "lazy",
							decoding: "async",
							alt: ""
						})
					}, t)), /* @__PURE__ */ (0, U.jsx)(Tt, {})]
				})
			}),
			/* @__PURE__ */ (0, U.jsxs)("footer", {
				className: "bar bottom",
				children: [
					/* @__PURE__ */ (0, U.jsx)(t, {
						label: "Previous",
						icon: /* @__PURE__ */ (0, U.jsx)(h, { icon: "chevronLeft" }),
						onClick: () => O(-1),
						isDisabled: l === 0
					}),
					/* @__PURE__ */ (0, U.jsxs)("div", {
						className: "scrub",
						children: [f != null && /* @__PURE__ */ (0, U.jsxs)("div", {
							className: "peek",
							style: { left: `${f / Math.max(1, i - 1) * 100}%` },
							children: [
								n[f].pv && /* @__PURE__ */ (0, U.jsx)("img", {
									src: n[f].pv,
									alt: ""
								}),
								/* @__PURE__ */ (0, U.jsxs)(d, {
									type: "label",
									children: [
										f + 1,
										" of ",
										i
									]
								}),
								a && /* @__PURE__ */ (0, U.jsx)(d, {
									type: "supporting",
									color: "primary",
									children: N(f).title
								})
							]
						}), /* @__PURE__ */ (0, U.jsx)(Ye, {
							label: "Page",
							isLabelHidden: !0,
							valueDisplay: "none",
							min: 1,
							max: i,
							value: M + 1,
							width: "100%",
							onChange: (e) => p(e - 1),
							onChangeEnd: (e) => {
								p(null), k(e - 1);
							}
						})]
					}),
					/* @__PURE__ */ (0, U.jsx)("span", {
						className: "count",
						children: /* @__PURE__ */ (0, U.jsxs)(d, {
							type: "label",
							children: [
								M + 1,
								" / ",
								i
							]
						})
					}),
					/* @__PURE__ */ (0, U.jsx)(t, {
						label: "Next",
						variant: "primary",
						endContent: /* @__PURE__ */ (0, U.jsx)(h, { icon: "chevronRight" }),
						onClick: () => O(1),
						isDisabled: l === i - 1
					})
				]
			}),
			/* @__PURE__ */ (0, U.jsxs)(st, {
				isOpen: m,
				onOpenChange: g,
				variant: "fullscreen",
				padding: 4,
				children: [/* @__PURE__ */ (0, U.jsx)(lt, {
					title: "All pages",
					onOpenChange: g
				}), r.map((e, t) => /* @__PURE__ */ (0, U.jsxs)("section", { children: [a && /* @__PURE__ */ (0, U.jsx)(d, {
					type: "large",
					weight: "semibold",
					as: "div",
					children: e.title
				}), /* @__PURE__ */ (0, U.jsx)("div", {
					className: "grid",
					children: n.slice(e.from, e.to + 1).map((t, n) => {
						let r = e.from + n;
						return /* @__PURE__ */ (0, U.jsxs)("button", {
							className: "thumb" + (r === l ? " on" : ""),
							onClick: () => {
								g(!1), k(r);
							},
							children: [/* @__PURE__ */ (0, U.jsx)("img", {
								src: t.pv || t.thumb,
								loading: "lazy",
								alt: "",
								style: { aspectRatio: `${t.w} / ${t.h}` }
							}), /* @__PURE__ */ (0, U.jsx)("span", { children: r + 1 })]
						}, r);
					})
				})] }, t))]
			}),
			/* @__PURE__ */ (0, U.jsxs)(st, {
				isOpen: y,
				onOpenChange: b,
				children: [/* @__PURE__ */ (0, U.jsx)(lt, {
					title: "Bookmarks",
					onOpenChange: b
				}), /* @__PURE__ */ (0, U.jsx)("div", {
					className: "marks",
					children: x.map((e) => /* @__PURE__ */ (0, U.jsx)(t, {
						label: `Page ${e + 1}`,
						variant: "ghost",
						onClick: () => {
							b(!1), k(e);
						}
					}, e))
				})]
			}),
			/* @__PURE__ */ (0, U.jsxs)(st, {
				isOpen: _,
				onOpenChange: v,
				children: [/* @__PURE__ */ (0, U.jsx)(lt, {
					title: "Keyboard shortcuts",
					onOpenChange: v
				}), /* @__PURE__ */ (0, U.jsx)("dl", {
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
					].map(([e, t]) => /* @__PURE__ */ (0, U.jsxs)("div", { children: [/* @__PURE__ */ (0, U.jsx)("dt", { children: /* @__PURE__ */ (0, U.jsx)(he, { keys: e }) }), /* @__PURE__ */ (0, U.jsx)("dd", { children: /* @__PURE__ */ (0, U.jsx)(d, { children: t }) })] }, e))
				})]
			})
		]
	});
}
function Tt() {
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "end",
		children: [
			/* @__PURE__ */ (0, U.jsx)(d, {
				type: "display-3",
				children: $.endText || "The End"
			}),
			/* @__PURE__ */ (0, U.jsx)(t, {
				label: "All comics",
				href: $.gallery || "index.html",
				icon: /* @__PURE__ */ (0, U.jsx)(ke, { size: 18 })
			}),
			($.related || []).map((e) => /* @__PURE__ */ (0, U.jsx)(t, {
				label: e.title,
				variant: "ghost",
				href: e.href,
				target: e.external ? "_blank" : void 0
			}, e.href))
		]
	});
}
(0, ut.createRoot)(document.getElementById("reader")).render(/* @__PURE__ */ (0, U.jsx)(H.StrictMode, { children: /* @__PURE__ */ (0, U.jsx)(oe, {
	theme: gt,
	mode: "dark",
	children: /* @__PURE__ */ (0, U.jsx)(wt, {})
}) }));
//#endregion
