/* Copyright (c) 2008-2018, Quantcast Corp. */
/* Version: 4c19192-20180628134937 */
window.__qc = (function (d) {
  if (d.__qc) return d.__qc; const ta = 'a ce cm dst enc fpa fpan je ns ogl rf tzo sr'.split(' '); let N; const Ya = '3097c37ec2c2 9591ee0951f 66322e4c24 497b48442447 8e5fbdcb69 b1cb39936ef 2c9fb934d88'.split(' '); const Za = ['9591ee0951f']; const x = d.document; const B = d.navigator; const Z = '4dcfa7079941 127fdf7967f31 588ab9292a3f 32f92b0727e5 22f9aa38dfd3 a4abfe8f3e04 18b66bc1325c 958e70ea2f28 bdbf0cb4bbb 65118a0d557 40a1d9db1864 18ae3d985046 3b26460f55d'.split(' '); let ua = !1; let va = !1; let aa = 0; const ba = []; const $a = []; const O = []; const u = []; const G = {}; let P = 0; let C = null; const ca = {}; const w = {}; let wa = null; let t; let l; let n; let H; let xa = !1; let D = null; const da = [].slice; let ya; let ea; let Q; let f; let A; let fa; let za; let Aa; let ga; let Ba; let I; let ha; let E; let R; let Ca; let ia; let ja; let Da; let Ea; let J; let Fa; let Ga; let Ha; let Ia; let Ja; let Ka; let La; let ka; let la; let ma; let S; let p; let Ma; let z; let Na; let T; let Oa; let Pa; let na; let Qa; let Ra; let K; let y; let Sa; let L; let Ta; let U; let Ua; let Va; let V; let Wa; let oa; let pa; let Xa; let qa; let F; let W; let X; let M; let ra; let sa; let Y; (function () { let a; a = x.createElement('script'); N = 'async' in a ? 1 : a.readyState ? 2 : 3; }()); const v = function (a) {
    try {
      return {
        init: R, hash: E, push: Ca, rules: Ua, hasRules: V, defaults: Xa, __qc() { return !0; },
      }[a].apply(null, da.call(arguments, 1));
    } catch (b) { return !1; }
  }; v.evts = 0; v.v = 2; v.SD = Z; v.qpixelsent = [];
  U = function (a) { const b = a ? a.length || 0 : 0; let c; for (c = 0; c < b; c++) if (!a[c]) return !1; return !0; }; pa = function (a) { (a = a || d._qacct) && (K(u, a) || u.push(a)); }; K = function (a, b) { const c = a.length; let e; for (e = 0; e < c; e++) if (a[e] === b) return !0; return !1; }; L = function (a) { return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); }; Ta = function (a) { let b; let c; b = L(a); if (b === 'array') return a.slice(0); if (b === 'object') { b = {}; for (c in a)a.hasOwnProperty(c) && (b[c] = a[c]); return b; } return b === 'string' ? `${a}` : a; }; Ca = function (a, b) { p(a, b); }; V = function (a) {
    return K(O,
      a);
  }; Xa = function (a, b) { let c; a && ((c = ca[a]) && (b = M(b, c)), b.qacct && delete b.qacct, ca[a] = b); }; qa = function (a) { let b; let c; if (f(a)) for (b in a) if (typeof a[b] === 'string') { b = a.event || 'load'; c = a.media || 'webpage'; b !== 'rule' && b !== 'load' || c !== 'webpage' && c !== 'ad' ? p(a) : (c = a.qacct || d._qacct, a.qacct = c, b = (b = w[c]) ? M(b, a) : a, w[c] = b); pa(a.qacct); break; } else typeof a[b] === 'object' && a[b] != null && qa(a[b]); }; M = function (a, b) {
    const c = {}; c.qacct = a.qacct || b.qacct; c.event = a.event === 'load' || b.event === 'load' ? 'load' : a.event && b.event ? a.event || b.event
      : null; c.media = null; c.media = a.media === 'webpage' || b.media === 'webpage' ? 'webpage' : a.media === 'ad' || b.media === 'ad' ? 'ad' : a.media || b.media; na(c, a, b); na(c, b, a); c.event || delete c.event; c.media || delete c.media; return c;
  }; na = function (a, b, c) { let e; let d; let k; let f; let r; let m; for (e in b)b.hasOwnProperty(e) && !a.hasOwnProperty(e) && (d = b[e], k = c[e], f = '', r = !!d && typeof d === 'string', m = !!k && typeof k === 'string', r && (f = d), r && m && (f += ','), m && (f += k), a[e] = f); }; F = function () {
    const a = []; let b; let c; if (!(P > 0)) {
      Sa(); for (b in w) {
        w.hasOwnProperty(b) && w[b] && (c = w[b], a.push(c),
        delete w[b]);
      }a.length == 1 && p(a[0]); a.length > 1 && p(a);
    }
  }; W = function () { const a = []; let b; let c; let e; e = u.slice(0); for (b = 0; b < e.length; b++)c = e[b], V(c) || a.push(c); if (a.length === 0)F(); else for (b = 0; b < a.length; b++)c = a[b], O.push(c), Qa(c); }; Ra = function (a, b, c, e) {
    let h; a = `${d.location.protocol}//${a}`; C = C || x.scripts[0]; h = x.createElement('script'); if (N === 1)h.src = a, h.async = !0, h.onload = b, c && (h.onerror = c), C.parentNode.insertBefore(h, C); else if (N === 2) {
      let k = !1; h.onload = h.onreadystatechange = function () {
        k || h.readyState != 'loaded' && h.readyState
!= 'complete' || (k = !0, h.onreadystatechange = null, b());
      }; h.src = a; C.parentNode.insertBefore(h, C);
    } else e && e();
  }; Qa = function (a) { P++; Ra(`rules.quantcount.com/rules-${a}.js`, () => { G[a] = N === 2 ? 2 : 0; X(); }, () => { G[a] = 1; X(); }, () => { G[a] = 4; X(); }); }; X = function () { P -= P > 0 ? 1 : 0; F(); }; Ua = function () { let a = !0; let b; let c; let e; if (arguments.length) { e = function (b) { a ? qa(b) : p(b, !0); }; for (b = 0; b < arguments.length; b++)c = da.call(arguments[b], 0), c.splice(1, 0, e), Va.apply(null, c); a = !1; ua && F(); } }; Va = function (a, b) {
    let c = []; const e = []; const d = b || p; let k; let f; let r;
    let m; let q; if ((k = da.call(arguments, 2)) && k.length) {
      f = k[0] || U; r = k[1]; m = k[2]; k = m.length; for (q = 0; q < k; q++)c.push(!1), e.push(null); c = {
        p: a, f: c, r: f, c: m, a: r, v: e,
      }; V(a) || O.push(a); $a.push(c); Wa(c, d);
    } else O.push(a), G[a] = 6;
  }; Wa = function (a, b) { const c = a ? a.c ? a.c.length : 0 : 0; let e; for (e = 0; e < c; e++)(function (c) { let e; let d; try { e = a.c[c][0], d = a.c[c].slice(1), d.splice(0, 0, (e) => { a.f[c] = !0; a.v[c] = e; oa(a, b); }), e.apply(null, d); } catch (r) { a.f[c] = !0, a.v[c] = !1, oa(a, b); } }(e)); }; oa = function (a, b) {
    const c = a.a; let e = a.v; const d = a.r || U; let f; let l; let r; let m; let q; let g; (f = U(a.f))
&& (f = f && d(e)); if (f) for (e = 0; e < c.length; e++) try { l = c[e][0]; r = c[e].length > 1 ? c[e].slice(1) : []; r = r.concat(a.v); m = l.apply(null, r); q = { qacct: a.p, event: 'rule' }; for (g in m)m.hasOwnProperty(g) && g !== 'qacct' && (q[g] = m[g]); b(q); } catch (ab) {}
  }; ya = function () { return ea(0) !== ea(6) ? 1 : 0; }; ea = function (a) { a = new Date(2E3, a, 1, 0, 0, 0, 0); var b = a.toGMTString(); var b = new Date(b.substring(0, b.lastIndexOf(' ') - 1)); return a - b; }; Q = function (a) { return a.replace(/\./g, '%2E').replace(/,/g, '%2C'); }; A = typeof encodeURIComponent === 'function' ? encodeURIComponent
    : Q; f = function (a) { return typeof a !== 'undefined' && a != null; }; fa = function () { return Math.round(2147483647 * Math.random()); }; za = function (a) { let b = ''; const c = x.cookie; let e; if (!c) return b; e = c.indexOf(`${a}=`); a = e + a.length + 1; e > -1 && (b = c.indexOf(';', a), b < 0 && (b = c.length), b = c.substring(a, b)); return b; }; Da = function (a) { return `P0-${fa()}-${a.getTime()}`; }; ja = function (a, b, c) { return ['__qca=', a, '; expires=', b.toGMTString(), '; path=/; domain=', c].join(''); }; ia = function () {
    const a = ['', '']; const b = I(); let c; let e; if (aa === 1) return a[0] = ';fpan=u;fpa=', a; c = E(b);
    for (e = 0; e < Z.length; e++) if (Z[e] === c) return a[0] = ';fpan=u;fpa=', a; c = new Date(); e = za('__qca'); e.length > 0 || D ? (e.length === 0 && (e = D, a[1] = ja(D, new Date(c.getTime() + 338688E5), b)), a[0] = `;fpan=0;fpa=${e}`) : (D = Da(c), a[1] = ja(D, new Date(c.getTime() + 338688E5), b), a[0] = `;fpan=1;fpa=${D}`); return a;
  }; Aa = function () { const a = ia()[1]; a && (x.cookie = a); }; ga = function (a) { x.cookie = `${a}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=${I()}`; }; I = function () {
    let a; let b; let c; let e; a = x.domain; a.substring(0, 4) === 'www.' && (a = a.substring(4, a.length));
    b = a.split('.'); e = b.length; if (e < 3) return a; c = b[e - 1]; return c.length < 3 ? a : a = `${b[e - 2]}.${c}`;
  }; ha = function (a, b) { let c; for (c = 0; c < b.length; c++)a ^= b.charCodeAt(c), a += (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24); return a; }; E = function (a) { let b; b = ha(2166136261, a); a = ha(3386659096, a); return Math.round(Math.abs(b * a) / 65536).toString(16); }; Oa = function (a) { let b; let c; if (a && L(a) === 'object') for (c = 0; c < ta.length; c++)b = ta[c], a.hasOwnProperty(b) && a[b] && delete a[b]; }; T = function (a, b, c) {
    const e = {}; let h; let k = null; let l = 'webpage'; let r = 'load'; let m = {}; let q; let g; h = b ? b.qacct
|| d._qacct : d._qacct; q = w[h]; b ? q && (b = M(b, q)) : b = q; h && delete w[h]; Oa(b); if (b != null) for (g in b)m[g] = void 0 !== b[g], b.hasOwnProperty(g) && typeof g === 'string' && typeof b[g] === 'string' && (g === 'uid' || g === 'uh' ? (Ea() || (k = E(b[g])), delete b[g]) : g !== 'qacct' && (b[g].length > 0 ? e[g + a] = A(b[g]) : m[g] = !1, g === 'media' && (l = b[g]), g === 'event' && (r = b[g]))); if (typeof h !== 'string') { if (!f(d._qacct) || d._qacct.length === 0) return null; h = d._qacct; } if (h) {
      if (q = ca[h]) {
        for (g in q) {
          typeof g === 'string' && q.hasOwnProperty(g) && !m[g] && (e[g + a] = A(q[g]), g
=== 'media' && (l = q[g]), g === 'event' && (r = q[g]));
        }
      }
    } else return null; m = G[h]; f(m) || (m = 3); e[`rf${a}`] = `${m}`; typeof k === 'string' && (b.uh = k, e[`uh${a}`] = A(k)); if (l === 'webpage' && r === 'load') { for (b = 0; b < v.qpixelsent.length; b++) if (v.qpixelsent[b] === h && !c) return null; v.qpixelsent.push(h); }l === 'ad' && (aa = 1); e[`a${a}`] = h; return e;
  }; Na = function (a) { const b = []; let c; for (c in a)a[c] && a.hasOwnProperty(c) && b.push(`${c}=${a[c]}`); return b.join(';'); }; Pa = function () {
    const a = x.getElementsByTagName('meta'); let b = ''; let c; let e; let d; let k; for (c = 0; c < a.length; c++) {
      d = a[c]; if (b.length >= 1E3) return b;
      f(d) && f(d.attributes) && f(d.attributes.property) && f(d.attributes.property.value) && f(d.content) && (e = d.attributes.property.value, d = d.content, e.length > 3 && e.substring(0, 3) === 'og:' && (b.length > 0 && (b += ','), k = d.length > 80 ? 80 : d.length, b += `${Q(e.substring(3, e.length))}.${Q(d.substring(0, k))}`));
    } return A(b);
  }; Ba = function (a) { return typeof a === 'object' ? ['p', a.consent === 'approved' ? 'a' : 'd', a.source === 'asserted' ? 'e' : 'i'].join('') : ''; }; Ea = function () {
    let a = !1; f(d.external) && (a = d.external, a = typeof a.InPrivateFilteringEnabled === 'function'
&& !0 === a.InPrivateFilteringEnabled()); return a || B.doNotTrack == '1' || B.doNotTrack === 'yes' || B.msDoNotTrack == '1';
  }; p = function (a, b) {
    const c = typeof encodeURIComponent === 'function' ? 'n' : 's';
    const e = fa(); let h = ''; let k = ''; let l = '';
    let r = ''; let m = ''; let q = 'u'; let g = '1';
    const t = []; let n;
    let p;
    let u; let w; let
      y; aa = 0; f(v.qpixelsent) || (v.qpixelsent = []); if (f(a)) if (n = L(a), n === 'object')p = T('', a, b); else if (n === 'array') for (n = 0; n < a.length; n++)u = T(`.${n + 1}`, a[n], b), p = n === 0 ? u : M(p, u); else typeof _qacct === 'string' && (p = T('', null, b)); p && (n = B.cookieEnabled ? '1' : '0', typeof B.javaEnabled !== 'undefined'
&& (q = B.javaEnabled() ? '1' : '0'), f(d._qmeta) && (k = `;m=${A(d._qmeta)}`, d._qmeta = null), self.screen && (h = `${screen.width}x${screen.height}x${screen.colorDepth}`), u = new Date(), w = ya(), y = ia()[0], d.location && d.location.href && (l = A(d.location.href)), x && x.referrer && (m = A(x.referrer)), d.self === d.top && (g = '0'), p.url ? r = l : p.url = l, p.ref || (p.ref = m || ''), l = Pa(), m = Na(p), t.push(`/pixel;r=${e};${m}${y};ns=${g};ce=${n};qjs=1;qv=4c19192-20180628134937`), t.push(`${p.ref ? '' : ';ref='};je=${q};sr=${h};enc=${c};dst=${w};et=${u.getTime()
    };tzo=${u.getTimezoneOffset()}${r ? `;ourl=${r}` : ''}${k};ogl=${l}`), ba.push(t), z());
  }; Ma = function (a) { if (l) { const b = new Image(); a = [d.location.protocol, '//pixel.', Fa(t) ? 'quantserve.com' : 'quantcount.com', a[0], ';cm=', Ba(t), f(n) && n !== '' ? `;gdpr=1;gdpr_consent=${n}` : '', a[1]].join(''); b.alt = ''; b.src = a; b.onload = function () { b && typeof b.width === 'number' && b.width === 3 ? ga('__qca') : Aa(); }; } }; z = function () { if (t && f(l) && f(n)) for (l || ga('__qca'); ba.length;)Ma(ba.shift()); else Ja(); }; Fa = function (a) {
    return !0 === a || a === 1 || a === 1 || f(a) && a.consent
=== 'approved' ? !0 : !1;
  }; Ga = function () { if ((new Date()).getTime() >= 15271956E5) return !0; for (let a = 0; a < u.length; a++) if (K(Ya, E(u[a]))) return !0; return !1; }; ka = function () { for (let a = 0; a < u.length; a++) if (K(Za, E(u[a]))) return !0; return !1; }; Ja = function () {
    if (!xa) {
      xa = !0; const a = Ga(); d.top === d.self ? (a ? typeof __cmp === 'function' ? __cmp('getVendorConsents', [11], (a, c) => { la(a, c); __cmp('getConsentData', null, ma); }) : (l = !ka(), n = '') : (l = !0, n = ''), typeof PrivacyManagerAPI === 'object' && typeof PrivacyManagerAPI.callApi === 'function' ? Ha('getConsent',
        'advertising') : t = !0) : d.postMessage && typeof d.JSON === 'object' ? Ia('getConsent', 'advertising', a) : (t = 1, l = !a, n = ''); z();
    }
  }; Ha = function (a, b) { t = PrivacyManagerAPI.callApi(a, 'quantserve.com', I(), 'truste.com', b); z(); }; Ia = function (a, b, c) {
    if (c) { for (let e = window; !H;) { try { e.frames.__cmpLocator && (H = e); } catch (h) {} if (e === window.top) break; e = e.parent; } if (H) try { H.postMessage(d.JSON.stringify({ __cmpCall: { command: 'getVendorConsents', parameter: [11], callId: 1 } }), '*'); } catch (h) { l = !1; } else l = !ka(), n = ''; } else l = !0, n = ''; if (d.addEventListener) {
      d.addEventListener('message',
        J, !1);
    } else if (d.attachEvent)d.attachEvent('onmessage', J); else return t = !0, c && !f(l) && (l = !1), z(); try {
      d.top.postMessage(d.JSON.stringify({
        PrivacyManagerAPI: {
          timestamp: (new Date()).getTime(), action: a, self: 'quantserve.com', domain: I(), authority: 'truste.com', type: b,
        },
      }), '*');
    } catch (h) { t = 1; }f(t) || (wa = setTimeout(() => { f(t) || (t = !0, z()); }, 25)); z();
  }; J = function (a) { if (typeof a.data === 'string' && a.data.length !== 0) { let b; try { b = d.JSON.parse(a.data); } catch (c) { return; } if (b.__cmpReturn) return Ka(b.__cmpReturn); La(b); } }; La = function (a) { a && typeof a.PrivacyManagerAPI === 'object' && (clearTimeout(wa), S(), t = a.PrivacyManagerAPI, z()); }; Ka = function (a) { a.callId === 1 ? (la(a.returnValue, a.success), H.postMessage(d.JSON.stringify({ __cmpCall: { command: 'getConsentData', parameter: null, callId: 2 } }), '*')) : a.callId === 2 && ma(a.returnValue, a.success); }; ma = function (a, b) { n = b ? a.consentData || '' : ''; S(); z(); }; la = function (a, b) {
    const c = a.gdprApplies; var d = a.vendorConsents; var d = d ? d[11] : void 0; const f = a.purposeConsents; let k; f && (k = f[1]); l = b && (!c || d && k); typeof c !== 'boolean'
&& (l = !1); S(); z();
  }; S = function () { f(l) && f(t) && f(n) && (d.removeEventListener ? window.removeEventListener('message', J, !1) : d.detachEvent && window.detachEvent('onmessage', J)); }; ra = function () { const a = arguments; let b; let c; y([].slice.call(a)); for (c = 0; c < a.length; c++)b = a[c], p(b); u.length ? W() : F(); }; y = function (a) { let b = L(a); if (b === 'array') for (b = 0; b < a.length; b++)y(a[b]); else b === 'object' && pa(a.qacct || d._qacct); }; Sa = function () {
    let a; va || d._qevents.length || d.ezt.length || typeof _qacct === 'undefined' || (p({ qacct: d._qacct }), va = !0); if (!v.evts) {
      for (a in d._qevents) {
        d._qevents[a]
!== d._qevents.push && d._qevents.hasOwnProperty(a) && p(d._qevents[a]);
      } for (a in d.ezt)d.ezt[a] !== d.ezt.push && d.ezt.hasOwnProperty(a) && p(d.ezt[a]); d._qevents = { push: ra }; d.ezt.push = function () { const a = arguments; let c; if (f(d.queueManager)) for (c = 0; c < a.length; c++)d.queueManager.push(a[c]); else ra.apply(this, arguments); }; v.evts = 1;
    }
  }; Y = function (a) { let b; a && (b = Ta(a), y(a), d._qevents.push(b)); }; sa = function (a) { a.push = function () { y([].slice.call(arguments)); W(); return [].push.apply(a, arguments); }; }; R = function () {
    f(d._qevents) || (d._qevents = []); f(d.ezt) || (d.ezt = []); Y(d._qoptions); Y(d.qcdata); Y(d.smarttagdata); v.evts || (sa(d._qevents), sa(d.ezt)); y(d.ezt); y(d._qevents); y({ qacct: d._qacct }); d._qoptions = null; u.length ? W() : F(); ua = !0;
  }; d.quantserve = d.quantserve || R; v.quantserve = R; return v;
}(window)); quantserve();
