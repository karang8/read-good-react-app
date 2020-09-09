!(function e(t, r, o) { function n(a, i) { if (!r[a]) { if (!t[a]) { const l = typeof require === 'function' && require; if (!i && l) return l(a, !0); if (s) return s(a, !0); const u = new Error(`Cannot find module '${a}'`); throw u.code = 'MODULE_NOT_FOUND', u; } const d = r[a] = { exports: {} }; t[a][0].call(d.exports, (e) => { const r = t[a][1][e]; return n(r || e); }, d, d.exports, e, t, r, o); } return r[a].exports; } for (var s = typeof require === 'function' && require, a = 0; a < o.length; a++)n(o[a]); return n; }({
  1: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.ShelvedBookOrigin = { BROWSE_SPOTLIGHT: 'browse_spotlight', RECS_WIDGET: 'recs_widget' };
  }, {}],
  2: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.URLTrackingParams = {
      FROM_SEARCH_PARAM: 'from_search=true', BOOK_SHOW_INTERACTION_PARAM: 'ac=1', DISCUSSIONS_PANE_ALL_DISCUSSIONS: 'nav_bar_discussions_pane_all_discussions', DISCUSSIONS_PANE_GROUP: 'nav_bar_discussions_pane_group', DISCUSSIONS_PANE_GROUP_ALL_UNREAD_POSTS: 'nav_bar_discussions_pane_group_all_unread_posts', DISCUSSIONS_PANE_DISCUSSION: 'nav_bar_discussions_pane_discussion', DISCUSSIONS_PANE_SPARSE_READING_CHALLENGES: 'nav_bar_discussions_sparse_reading_challenge', DISCUSSIONS_PANE_SPARSE_ALL: 'nav_bar_discussions_sparse_all', DISCUSSIONS_PANE_SPARSE_POPULAR: 'nav_bar_discussions_sparse_popular',
    };
  }, {}],
  3: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.TRACKED_CLASSES = {
      book_image: { dfp: !0, pmet: { click_type: 'book_image' } }, book_title: { dfp: !0, pmet: { click_type: 'book_title' } }, author_link: { dfp: !0, pmet: { click_type: 'author_name' } }, full_content_link: { dfp: !0, pmet: { click_type: 'body_click' } }, user_profile: { dfp: !0, pmet: { click_type: 'social' } }, want_to_read_button: { dfp: !0, pmet: { click_type: 'wtr_button' } }, sponsored_update_body_image: { dfp: !0, pmet: { click_type: 'image' } }, cta_link: { dfp: !0, pmet: { click_type: 'cta_click' } }, sponsored_label: { dfp: !0, pmet: { click_type: 'sponsored' } }, newsfeed_caret_not_interested: { dfp: !1, pmet: { click_type: 'not_interested' } }, newsfeed_caret_help: { dfp: !1, pmet: { click_type: 'why' } }, newsfeed_caret: { dfp: !1, pmet: { click_type: 'caret' } }, user_rating_star: { dfp: !0, pmet: { click_type: 'rating' } }, preview_book: { dfp: !0, pmet: { click_type: 'preview' } }, sponsored_update_body_title_link: { dfp: !0, pmet: { click_type: 'sponsored_title' } },
    }, r.TRACKED_CLASSES_AUDIBLE = {
      AEP_Desktop_Browse_Image: { dfp: !0, pmet: { pmet_click_tid: 'AEP_Desktop_Browse_Image' } }, AEP_Desktop_Browse_Title: { dfp: !0, pmet: { pmet_click_tid: 'AEP_Desktop_Browse_Title' } }, AEP_Desktop_Browse_ExploreButton: { dfp: !0, pmet: { pmet_click_tid: 'AEP_Desktop_Browse_ExploreButton' } }, AEP_Desktop_Browse_SponsoredBy: { dfp: !0, pmet: { pmet_click_tid: 'AEP_Desktop_Browse_SponsoredBy' } }, AEP_Desktop_Video_ExternalLink: { pmet: { pmet_click_tid: 'AEP_Desktop_Video_ExternalLink', no_redirect: !0 } }, AEP_Desktop_Sponsored_BookImage: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_BookImage', no_redirect: !0 } }, AEP_Desktop_Sponsored_BookTitle: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_BookTitle', no_redirect: !0 } }, AEP_Desktop_Sponsored_AuthorLink: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_AuthorLink', no_redirect: !0 } }, AEP_Desktop_Sponsored_WantToRead: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_WantToRead', no_redirect: !0 } }, AEP_Desktop_Sponsored_Stars: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_Stars', no_redirect: !0 } }, AEP_Desktop_Sponsored_BookDescription: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_BookDescription', no_redirect: !0 } }, AEP_Desktop_Sponsored_BookExternalLink: { pmet: { pmet_click_tid: 'AEP_Desktop_Sponsored_BookExternalLink', no_redirect: !0 } }, AEP_Desktop_Carousel_BookImage: { pmet: { pmet_click_tid: 'AEP_Desktop_Carousel_BookImage', no_redirect: !0 } }, AEP_Desktop_Carousel_WantToRead: { pmet: { pmet_click_tid: 'AEP_Desktop_Carousel_WantToRead', no_redirect: !0 } }, AEP_Mobile_Carousel_BookImage: { pmet: { pmet_click_tid: 'AEP_Mobile_Carousel_BookImage', no_redirect: !0 } }, AEP_Mobile_Carousel_WantToRead: { pmet: { pmet_click_tid: 'AEP_Mobile_Carousel_WantToRead', no_redirect: !0 } }, AEP_Mobile_Carousel_BookTitle: { pmet: { pmet_click_tid: 'AEP_Mobile_Carousel_BookTitle', no_redirect: !0 } }, AEP_Mobile_Carousel_Author: { pmet: { pmet_click_tid: 'AEP_Mobile_Carousel_Author', no_redirect: !0 } },
    }, r.TRACKED_CLASSES_PREMIUM_CAMPAIGN = {
      fcm_blog_title: { dfp: !0, pmet: { click_type: 'fcm_blog_title' } }, fcm_blog_image: { dfp: !0, pmet: { click_type: 'fcm_blog_image' } }, fcm_blog_button: { dfp: !0, pmet: { click_type: 'fcm_blog_button' } }, fcm_book_author: { dfp: !0, pmet: { click_type: 'fcm_book_author' } }, fcm_book_image: { dfp: !0, pmet: { click_type: 'fcm_book_image' } }, fcm_book_title: { dfp: !0, pmet: { click_type: 'fcm_book_title' } }, fcm_book_button: { dfp: !0, pmet: { click_type: 'fcm_book_button' } }, fcm_book_description: { dfp: !0, pmet: { click_type: 'fcm_book_description' } }, fcm_giveaway_author: { dfp: !0, pmet: { click_type: 'fcm_giveaway_author' } }, fcm_giveaway_button: { dfp: !0, pmet: { click_type: 'fcm_giveaway_button' } }, fcm_giveaway_image: { dfp: !0, pmet: { click_type: 'fcm_giveaway_image' } }, fcm_giveaway_title: { dfp: !0, pmet: { click_type: 'fcm_giveaway_title' } }, fcm_list_button: { dfp: !0, pmet: { click_type: 'fcm_list_button' } }, fcm_list_books: { dfp: !0, pmet: { click_type: 'fcm_list_books' } }, fcm_list_title: { dfp: !0, pmet: { click_type: 'fcm_list_title' } }, fcm_genre_title: { dfp: !0, pmet: { click_type: 'fcm_genre_title' } }, fcm_genre_image: { dfp: !0, pmet: { click_type: 'fcm_genre_image' } }, fcm_genre_button: { dfp: !0, pmet: { click_type: 'fcm_genre_button' } },
    };
  }, {}],
  4: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; m.default.requestCreativeForSlot(e, t); } function s(e, t, r, o) { window.googletag && window.googletag.cmd && window.googletag.cmd.push(() => { const n = window.googletag; const s = i(r); if (o)!(function () { let r = n.sizeMapping(); _.default.map(o, (e) => { const t = _.default.map(e, (e) => { const t = e.split('x'); return t[0] ? [parseInt(t[0]), parseInt(t[1])] : []; }); r = r.addSize(t[0], t[1]); }), n.defineSlot(t, s, e).defineSizeMapping(r.build()).setCollapseEmptyDiv(!0).addService(n.pubads()); }()); else { const a = n.defineSlot(t, s, e); a.addService(n.pubads()); } }); } function a() { window.googletag && window.googletag.cmd && window.googletag.cmd.push(() => { const e = window.googletag; e.enableServices(); }); } function i(e) { let t = void 0; if (Array.isArray(e))t = _.default.map(e, (e) => { const t = e.split('x'); return [parseInt(t[0]), parseInt(t[1])]; }); else { const r = e.split('x'); t = [parseInt(r[0]), parseInt(r[1])]; } return t; } function l(e, t) { const r = Array.isArray(e.dimensions) ? e.dimensions : [e.dimensions]; const o = _.default.map(r, (e) => { const t = e.split('x'); return [parseInt(t[0]), parseInt(t[1])]; }); return { slotID: t, slotName: e.path, sizes: o }; } function u(e) { $j(document).on('lazybeforeunveil', e); } function d() { window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.expand = g; } function c() { const e = window.googletag; return typeof e === 'function' && e.pubads().getSlots().length > 0; }Object.defineProperty(r, '__esModule', { value: !0 }), r.fetchApstagBids = r.requestCreative = void 0, r.requestCreativeForAdSlot = n, r.defineSlot = s, r.enableServices = a, r.dimensionsExplode = i, r.slotToHash = l, r.lazyLoadOnView = u, r.lazyLoadInit = d, r.adSlotsDefined = c; const p = e('../../react_stores/google_ads_store'); const f = e('../../react_actions/google_ads_actions'); var m = o(f); const h = e('lodash'); var _ = o(h); var g = 200; const v = function () { return window.googletag.pubads().getSlots(); }; const y = function (e) { return e.getSlotElementId(); }; const b = function (e) { return window.googletag.pubads().refresh(e); }; const k = function (e, t) { window.googletag.pubads().addEventListener('slotRenderEnded', (r) => { if (r.slot.getSlotId().getDomId() === e) if (r.isEmpty)m.default.removeAdSlot(e), m.default.trackImpression(e, p.ImpressionCode.empty); else { const o = $j(t.googleHookSelector).find('iframe[id^="google_ads_iframe_"]'); const n = o.contents().find(t.creativeSelector); const s = r.slot.getAdUnitPath().split('/', 3)[2]; if (t.isNativeAd) { const a = n.data('id'); const i = n.data('url'); a && i ? m.default.attachServedNativeAdAttributesAndTracking(e, r.campaignId, r.lineItemId, n, a, p.ImpressionCode.success, n.data('url'), s) : m.default.trackImpression(e, p.ImpressionCode.empty); } else m.default.attachServedBannerAdAttributesAndTracking(e, r.campaignId, r.lineItemId, n, p.ImpressionCode.success, t.delayImpressionTracking); t.dimensions === '160x600' && $j('.mainContentContainer').addClass('adSkinEnabled'); } }); }; var S = (r.requestCreative = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; const r = window.googletag; if (k(e, t), m.default.hasAttachedDfpCallbackForSlot(e), t.lazyLoadedNewsfeedAd) { const o = t.lazyLoadedNewsfeedAd; const n = window.googletag.defineSlot(`/4215/${o.name}`, o.dimensions, e); n.addService(window.googletag.pubads()), r.display(e), b([n]); } else if (t.isLazyLoaded) { const s = i(t.dimensions); r.defineSlot(t.path, s, e).addService(r.pubads()); const a = [{ slotID: e, slotName: t.path, sizes: [s] }]; S(a); } else r.cmd.push(() => { r.display(e); }); }, r.fetchApstagBids = function (e) { const t = window.googletag; t && t.cmd && t.cmd.push(() => { const r = window.apstag; Array.isArray(e) && e.length && r.fetchBids({ slots: e }, () => { t.cmd.push(() => P(e)); }); }); }); var P = function (e) { const t = window.apstag; const r = e.map(e => e.slotID); const o = v().filter(e => r.includes(y(e))); new Promise(((e, t) => m.default.checkCallbacksAttached(e, t, r))).then(() => { t.setDisplayBids(), b(o); }).catch(() => null); };
  }, { '../../react_actions/google_ads_actions': 36, '../../react_stores/google_ads_store': 250, lodash: 'lodash' }],
  5: [function (e, t, r) {
    function o(e) { let t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; t = (0, l.merge)({}, t, { type: t.method }), t = (0, l.omit)(t, 'method'); const r = $j.Deferred(); const o = $j.ajax(e, t); return o.done(r.resolve), o.fail((e, t, o) => { (0, i.redirectOnAuthFailure)(e) || r.reject(e, t, o); }), r.promise(); } function n(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return o(e, (0, l.merge)({}, t, { method: 'POST' })); } function s(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return o(e, (0, l.merge)({}, t, { method: 'DELETE' })); } function a(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return o(e, (0, l.merge)({}, t, { method: 'GET' })); }Object.defineProperty(r, '__esModule', { value: !0 }), r.DEFAULT_ERROR_MESSAGE = void 0, r.httpRequest = o, r.httpPost = n, r.httpDelete = s, r.httpGet = a; var i = e('./default_auth_failure_handler'); var l = e('lodash'); r.DEFAULT_ERROR_MESSAGE = 'Something went wrong with your request. Please\n  try again later.';
  }, { './default_auth_failure_handler': 6, lodash: 'lodash' }],
  6: [function (e, t, r) {
    function o(e) { if (e && e.status === 403) { const t = e.responseJSON; if (t.redirect) return (0, n.setLocationUrl)(t.redirect), !0; } return !1; }Object.defineProperty(r, '__esModule', { value: !0 }), r.redirectOnAuthFailure = o; var n = e('../env_utils');
  }, { '../env_utils': 13 }],
  7: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.BOOK_ORIGINS = { CURRENTLY_READING_WIDGET: 'currently-reading-widget', UPDATE_READING_PROGRESS: 'hp_status_editor' };
  }, {}],
  8: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('append-query'); const s = o(n); r.default = { openSocialShareWindow(e, t, r) { const o = (0, s.default)(e, t); const n = `left=${r.left}, top=${r.top}`; const a = `width=${r.width}, height=${r.height}`; const i = `${n}, ${a}, menubar=no, scrollbar=no`; window.open(o, '_blank', i); } };
  }, { 'append-query': 'append-query' }],
  9: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.VARIANTS = { DEFAULT: 'default', DARK_BG: 'darkBg' };
  }, {}],
  10: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { let t = e.target; const r = e.currentTarget; let o = !1; if (t === r)o = i(t); else for (;r.contains(t) && !(o = i(t));)t = t.parentNode; o && a.default.trackClickEvent(e, t); }Object.defineProperty(r, '__esModule', { value: !0 }), r.handleDataTracking = n; const s = e('../../react_actions/data_tracking/data_tracking_actions'); var a = o(s); var i = function (e) { return e.getAttribute('data-tracking-enabletracking') === 'true'; };
  }, { '../../react_actions/data_tracking/data_tracking_actions': 30 }],
  11: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? (0, u.default)() : arguments[1]; const r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; t.locale('en-abbreviated'), e = r !== null ? r : (0, u.default)(e).locale('en-abbreviated'); const o = t.diff(e, 'days'); const n = t.diff(e, 'months'); const s = t.diff(e, 'days', !0); const a = 6.5; return i.default.inRange(n, 1, 13) ? t.subtract(o, 'days').format('DD MMM') : n > 12 ? t.subtract(o, 'days').format('DD MMM YY') : i.default.inRange(o, 7, 28) ? `${Math.ceil(o / 7)}w` : s >= a && s <= 28 ? `${Math.round(s / a)}w` : e.fromNow(); } function s(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? 'YYYY-MM-DD' : arguments[1]; if (e) { const r = (0, u.default)(e); return r.format(t); } return ''; }Object.defineProperty(r, '__esModule', { value: !0 }), r.fromNow = n, r.getFormattedDate = s; const a = e('lodash'); var i = o(a); const l = e('moment'); var u = o(l); u.default.relativeTimeThreshold('s', 60), u.default.relativeTimeThreshold('m', 60), u.default.relativeTimeThreshold('h', 24), u.default.relativeTimeThreshold('d', 25), u.default.relativeTimeThreshold('M', 10), u.default.locale('en-abbreviated', {
      relativeTime: {
        future: 'in %s', past: '%s', s: 'Just now', m: '1m', mm: '%dm', h: '1h', hh: '%dh', d: '1d', dd: '%dd', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
    }), u.default.locale('en');
  }, { lodash: 'lodash', moment: 'moment' }],
  12: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.checkIconClassnames = r.getExclusiveShelfType = r.SHELF_TYPES = r.DEFAULT_SHELVES = void 0; const n = e('classnames'); const s = o(n); const a = r.DEFAULT_SHELVES = { READ: { name: 'read', displayName: 'Read' }, CURRENTLY_READING: { name: 'currently-reading', displayName: 'Currently Reading' }, WANT_TO_READ: { name: 'to-read', displayName: 'Want to Read' } }; const i = r.SHELF_TYPES = { DEFAULT: 'defaultShelves', CUSTOM_EXCLUSIVE: 'customExclusiveShelves', NONEXCLUSIVE: 'nonExclusiveShelves' }; const l = r.getExclusiveShelfType = function (e) { return e === a.READ.name || e === a.CURRENTLY_READING.name || e === a.WANT_TO_READ.name ? i.DEFAULT : i.CUSTOM_EXCLUSIVE; }; r.checkIconClassnames = function (e) {
      return (0, s.default)({
        'wantToReadButton__checkIcon--toRead': e === a.WANT_TO_READ.name, 'wantToReadButton__checkIcon--currentlyReading': e === a.CURRENTLY_READING.name, 'wantToReadButton__checkIcon--read': e === a.READ.name, 'wantToReadButton__checkIcon--other': e && l(e) === i.CUSTOM_EXCLUSIVE,
      });
    };
  }, { classnames: 'classnames' }],
  13: [function (e, t, r) {
    t.exports = {
      PRODUCTION: 'production', DEVELOPMENT: 'development', TEST: 'test', hasDom() { return !!window.document; }, domUnavailable() { return !this.hasDom(); }, isDevelopment() { return this.DEVELOPMENT === 'production'; }, getCurrentPath() { return window && window.location ? window.encodeURIComponent(window.location.pathname + window.location.search) : void 0; }, setLocationUrl(e) { window && (window.location.href = e); }, getLocationUrl() { return window && window.location ? window.location.href : void 0; }, getLocationPathname() { return window && window.location ? window.location.pathname : void 0; },
    };
  }, {}],
  14: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = r.clearFlashMessage = function () { $j('#flashMessages').trigger('clearFlashMessage'); }; r.flashSuccessMessage = function (e) { o(), $j('#flashMessages').trigger('addFlashMessage', [e, 'success']); }, r.flashErrorMessage = function (e) { $j('#flashMessages').trigger('addFlashMessage', [e, 'error']); };
  }, {}],
  15: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = e('lodash'); r.default = { notifyException(e, t) { e ? window.console && (0, o.isFunction)(window.console.error) && window.console.error(t, e.stack) : window.console && (0, o.isFunction)(window.console.warn) && window.console.warn(`Attempted to notifyException without providing error,\n                           message: ${t}`); }, notifyUser(e) { window && (0, o.isFunction)(window.alert) && window.alert(e); } };
  }, { lodash: 'lodash' }],
  16: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = {
      enter: 13, escape: 27, space: 32, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40,
    }; r.default = {
      isEnter(e) { return e === o.enter; }, isEscape(e) { return e === o.escape; }, isSpace(e) { return e === o.space; }, isArrowLeft(e) { return e === o.leftArrow; }, isArrowUp(e) { return e === o.upArrow; }, isArrowRight(e) { return e === o.rightArrow; }, isArrowDown(e) { return e === o.downArrow; }, isDropdownOpenerKey(e) { return this.isEnter(e) || this.isSpace(e) || this.isArrowDown(e); }, isDefaultOpenerKey(e) { return this.isEnter(e) || this.isSpace(e); }, isDefaultCloserKey(e) { return this.isEscape(e); }, KEYCODES: o,
    };
  }, {}],
  17: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return t ? `${e}Dropdown` : e; }; r.getUnfollowModalId = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return o(`confirmUnfollow${e}`, t); }, r.getCancelFriendRequestModalId = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return o(`confirmCancelFriendRequest${e}`, t); }, r.getUnfriendModalId = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return o(`confirmUnfriend${e}`, t); }, r.getBlockUserModalId = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return o(`confirmBlockUser${e}`, t); }, r.getUnblockUserModalId = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]; return o(`confirmUnblockUser${e}`, t); };
  }, {}],
  18: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.BOOK_LOAD_ERROR_MSG = 'Sorry, we’re having trouble loading your books right now. Please try again later.';
  }, {}],
  19: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.ICON_SIZES = { SMALL: 'small', MEDIUM: 'medium', LARGE: 'large' }, r.ICON_SHAPES = { CIRCLE: 'circular', ROUND_SQUARE: 'roundSquare' };
  }, {}],
  20: [function (e, t, r) {
    function o() { return window.GrImageRegistry || {}; }Object.defineProperty(r, '__esModule', { value: !0 }), r.getImages = o;
  }, {}],
  21: [function (e, t, r) {
    function o(e) { e && e.nativeEvent && e.nativeEvent.acknowledge && e.nativeEvent.acknowledge(e.currentTarget); }Object.defineProperty(r, '__esModule', { value: !0 }), r.acknowledgeEvent = o;
  }, {}],
  22: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.astralLength = function (e) { return e.replace(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '_').length; }, r.countWords = function (e) { return e ? e.split(' ').length : 0; };
  }, {}],
  23: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = o(s); r.default = { toSentence(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? 'and' : arguments[1]; const r = []; const o = e.length; switch (o) { case 0: return ''; case 1: r.push(e[0]); break; case 2: r.push(e[0]), r.push(` ${t} `), r.push(e[1]); break; default: a.default.each(e.slice(0, -1), (e) => { r.push(e), r.push(', '); }), r.push(`${t} `), r.push(e[o - 1]); } return n('span', {}, void 0, r); }, sentenceJoin(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? ', ' : arguments[1]; const r = []; return a.default.each(e.slice(0, -1), (e) => { r.push(e), r.push(t); }), r.push(e[e.length - 1]), n('span', {}, void 0, r); } };
  }, { lodash: 'lodash' }],
  24: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); r.FRIEND_STATUS = {
      SELF: 'self', FRIEND: 'friend', REQUEST_PENDING_FROM: 'request_pending_from', REQUEST_PENDING_TO: 'request_pending_to', NONE: 'none',
    };
  }, {}],
  25: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['follow', 'unFollow']);
  }, { reflux: 'reflux' }],
  26: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.default = function () { return s.default.createActions(['selectSpecificResult', 'selectNextResult', 'selectPreviousResult', 'search', 'searchResultsFound', 'setShowResultsContainer']); }; const n = e('reflux'); var s = o(n);
  }, { reflux: 'reflux' }],
  27: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }), r.getACopyClickedHandler = r.getACopyClosed = r.getACopyLoadedSuccess = r.GET_A_COPY_ACTIONS = void 0; const o = e('../../modules/ajax/ajax_helper'); const n = r.GET_A_COPY_ACTIONS = { LOADED_SUCCESS: 'GET_A_COPY_LOADED_SUCCESS', INTERSTITIAL_CLOSED: 'GET_A_COPY_INTERSTITIAL_CLOSED' }; const s = r.getACopyLoadedSuccess = function (e) { return { type: n.LOADED_SUCCESS, data: e }; }; r.getACopyClosed = function () { return { type: n.INTERSTITIAL_CLOSED }; }, r.getACopyClickedHandler = function (e) { return function (t) { (0, o.httpGet)(e).done((e) => { t(s(e)); }); }; };
  }, { '../../modules/ajax/ajax_helper': 5 }],
  28: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions({
      addNewComment: {}, commentEntered: { sync: !0 }, deleteComment: {}, showCommentsForPage: {}, showSeeMoreLoadingSpinner: {}, textareaFocused: {}, textareaFocusRequested: {}, textareaUnfocused: {},
    });
  }, { reflux: 'reflux' }],
  29: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['updatePreference']);
  }, { reflux: 'reflux' }],
  30: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['trackClickEvent']);
  }, { reflux: 'reflux' }],
  31: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['openPane']);
  }, { reflux: 'reflux' }],
  32: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.default = function () { return s.default.createActions(['selectSpecificResult', 'selectNextResult', 'selectPreviousResult', 'search', 'searchResultsFound', 'setShowResultsContainer']); }; const n = e('reflux'); var s = o(n);
  }, { reflux: 'reflux' }],
  33: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['changeFavoriteGenres']);
  }, { reflux: 'reflux' }],
  34: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['selectFavoriteGenre', 'deselectFavoriteGenre', 'submitSelectedGenres']);
  }, { reflux: 'reflux' }],
  35: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['displayError', 'requestFeaturedBooks', 'trackMenuImpression']);
  }, { reflux: 'reflux' }],
  36: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['requestCreativeForSlot', 'displayCreativeForSlot', 'removeAdSlot', 'trackImpression', 'attachServedNativeAdAttributesAndTracking', 'attachServedBannerAdAttributesAndTracking', 'hasAttachedDfpCallbackForSlot', 'checkCallbacksAttached']);
  }, { reflux: 'reflux' }],
  37: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = r.TOGGLE_SEARCH = 'TOGGLE_SEARCH'; r.toggleSearch = function (e) { return { type: o, searchIsActive: e }; };
  }, {}],
  38: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['like', 'unLike']);
  }, { reflux: 'reflux' }],
  39: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['openModal', 'closeModal']);
  }, { reflux: 'reflux' }],
  40: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions({
      loadMoreUpdates: {}, newsfeedItemsLoaded: { sync: !0 }, updateNativeAdSlot: {}, userNotInterested: {}, undoUserNotInterested: {}, hideStory: {}, previewBook: {}, setUpdatesFeedPreferences: {},
    });
  }, { reflux: 'reflux' }],
  41: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['loadError', 'loadNotifications', 'requestNotifications']);
  }, { reflux: 'reflux' }],
  42: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['loadAnnotatedBooks']);
  }, { reflux: 'reflux' }],
  43: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['updateProgress', 'closeUpdateProgressForm', 'openUpdateProgressForm', 'refreshReadingSessions', 'shelveBookSuccess', 'loadAllReadingSessions']);
  }, { reflux: 'reflux' }],
  44: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions({ updateSharingTextInputValue: { sync: !0 }, submitShare: {}, openShareModal: {} });
  }, { reflux: 'reflux' }],
  45: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions({
      addShelvings: {}, bookShelved: {}, bookUnshelved: {}, shelveBook: {}, toggleNonExclusiveShelving: {}, rateBook: { children: ['newBook', 'failed'] }, unshelveBook: {},
    });
  }, { reflux: 'reflux' }],
  46: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['deselectTab', 'selectTab']);
  }, { reflux: 'reflux' }],
  47: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['blockMember']);
  }, { reflux: 'reflux' }],
  48: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['follow', 'unFollow']);
  }, { reflux: 'reflux' }],
  49: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['userAgentGainsTouch', 'userAgentLosesTouch']);
  }, { reflux: 'reflux' }],
  50: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['userNotInterested', 'undoUserNotInterested', 'isFlashMessageForBook', 'closeFlashMessage', 'addBookIDToState']);
  }, { reflux: 'reflux' }],
  51: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['unfriend', 'acceptFriendRequest', 'cancelFriendRequest', 'follow', 'unfollow']);
  }, { reflux: 'reflux' }],
  52: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['addNonExclusiveShelf', 'removeNonExclusiveShelf']);
  }, { reflux: 'reflux' }],
  53: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); r.default = s.default.createActions(['openAddShelfTextbox', 'closeAddShelfTextbox', 'updateShelfNameFilter', 'updateShelves']);
  }, { reflux: 'reflux' }],
  54: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }e('./_polyfills'); const n = e('./_dom_ready_initializers'); const s = o(n); const a = e('./_public_actions'); const i = o(a); window.ReactActions = i.default, s.default.initializeModernizrTouchCheck();
  }, { './_dom_ready_initializers': 55, './_polyfills': 56, './_public_actions': 57 }],
  55: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }), r.default = { initializeModernizrTouchCheck() { document.addEventListener('DOMContentLoaded', () => { Modernizr && Modernizr.touchevents ? window.ReactActions.UserAgentCapabilitiesActions.userAgentGainsTouch() : window.ReactActions.UserAgentCapabilitiesActions.userAgentLosesTouch(); }); } };
  }, {}],
  56: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = e('object-assign'); const s = o(n); e('../react_isomorphic/shims/Array.prototype.find'), window.Object.assign = s.default;
  }, { '../react_isomorphic/shims/Array.prototype.find': 231, 'object-assign': 'object-assign' }],
  57: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('../react_actions/user_agent_capabilities_actions'); const s = o(n); r.default = { UserAgentCapabilitiesActions: s.default };
  }, { '../react_actions/user_agent_capabilities_actions': 49 }],
  58: [function (e, t, r) {
    e('./_common'); const o = e('../react_isomorphic/global'); const n = e('../react_isomorphic/site_header'); const s = e('../react_isomorphic/reading_notes'); const a = e('../react_isomorphic/friend_follow_module'); const i = e('../react_isomorphic/news'); const l = e('../react_isomorphic/experiments'); const u = e('lodash'); window.ReactComponents = (0, u.merge)({}, o.GlobalComponents, n.HeaderComponents, l.ExperimentComponents, s.ReadingNotesComponents, a.FriendFollowModuleComponents, i.NewsComponents), window.ReactStores = (0, u.merge)({}, o.GlobalStores, n.HeaderStores, l.ExperimentStores, s.ReadingNotesStores, a.FriendFollowModuleStores);
  }, {
    '../react_isomorphic/experiments': 224, '../react_isomorphic/friend_follow_module': 227, '../react_isomorphic/global': 228, '../react_isomorphic/news': 229, '../react_isomorphic/reading_notes': 230, '../react_isomorphic/site_header': 232, './_common': 54, lodash: 'lodash',
  }],
  59: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++)r[t] = e[t]; return r; } return Array.from(e); }Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_stores/google_ads_store'); const d = o(u); const c = e('reflux'); const p = o(c); const f = e('classnames'); const m = o(f); const h = e('../../modules/ads/google_ad_helper'); const _ = 'googleBannerAd'; r.default = l.default.createClass({
      displayName: 'GoogleBannerAd',
      mixins: [p.default.connectFilter(d.default, 'googleAdsStore', function (e) { return e.ads[this.props.adId]; })],
      propTypes: { adId: a.default.PropTypes.string.isRequired, className: a.default.PropTypes.string, delayImpressionTracking: a.default.PropTypes.bool },
      getDefaultProps() { return { delayImpressionTracking: !1 }; },
      getStoreState() { return this.state.googleAdsStore; },
      componentDidMount() {
        const e = this.props.adId; if (this.getStoreState()) {
          const t = {
            googleHookSelector: this.refs.googleHook,
            creativeSelector: this.getStoreState().creativeSelector,
            dimensions: this.getStoreState().dimensions,
            isNativeAd: this.getStoreState().isNativeAd,
            delayImpressionTracking: this.props.delayImpressionTracking,
            isLazyLoaded: this.getStoreState().isLazyLoaded,
            path: this.getStoreState().path,
          }; this.getStoreState().isLazyLoaded ? (0, h.lazyLoadOnView)(function (e) { e.target.id === this.adId && (0, h.requestCreativeForAdSlot)(this.adId, this.params); }.bind({ adId: e, params: t })) : (0, h.requestCreativeForAdSlot)(this.props.adId, t);
        }
      },
      getWidthFromDimensions(e) { return parseInt(e.split('x')[0]); },
      getBannerAdSizingStyle(e) { const t = this; let r = void 0; if (Array.isArray(e)) { let o; r = (o = Math).max.apply(o, n(e.map(e => t.getWidthFromDimensions(e)))); } else r = this.getWidthFromDimensions(e); return { width: r, height: 'auto' }; },
      render() {
        if (this.getStoreState()) {
          const e = (0, m.default)(this.props.className, _, { lazyload: this.getStoreState().isLazyLoaded }); return a.default.createElement('div', {
            className: e, id: this.props.adId, style: this.getBannerAdSizingStyle(this.getStoreState().dimensions), ref: 'googleHook',
          });
        } return null;
      },
    });
  }, {
    '../../modules/ads/google_ad_helper': 4, '../../react_stores/google_ads_store': 250, '../gr_component_factory': 108, classnames: 'classnames', react: 'react', reflux: 'reflux',
  }],
  60: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../react_stores/google_ads_store'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('../featured_content_module'); const p = o(c); const f = e('../../modules/ads/google_ad_helper'); const m = e('classnames'); const h = o(m); const _ = 'googleFeaturedContentModule'; r.default = l.default.createClass({
      displayName: 'GoogleFeaturedContentModule',
      mixins: [d.default.connectFilter(a.default, 'googleAdsStore', function (e) { return e.nativeAds[this.props.adId]; })],
      propTypes: {
        adId: React.PropTypes.string.isRequired, trackingOptions: React.PropTypes.shape({ enableTracking: React.PropTypes.bool, adId: React.PropTypes.string }).isRequired, isMobile: React.PropTypes.bool, hasBottomBorder: React.PropTypes.bool, isInline: React.PropTypes.bool,
      },
      defaultProps: { isMobile: !1, isInline: !1, hasBottomBorder: !1 },
      getStoreState() { return this.state.googleAdsStore; },
      componentDidMount() {
        if (this.getStoreState() && !this.getStoreState().creative) {
          const e = {
            googleHookSelector: this.refs.googleHook, creativeSelector: this.getStoreState().creativeSelector, dimensions: this.getStoreState().dimensions, isNativeAd: this.getStoreState().isNativeAd, path: this.getStoreState().path,
          }; (0, f.requestCreativeForAdSlot)(this.props.adId, e);
        }
      },
      renderCreative() {
        const e = this.getStoreState().creative; return n(p.default, {
          type: e.type, resource: e.resource, sponsorName: e.sponsorName, isSponsored: e.isSponsored, isMobile: this.props.isMobile, isInline: this.props.isInline, hasBottomBorder: this.props.hasBottomBorder,
        });
      },
      render() { if (this.getStoreState()) { const e = (0, h.default)(_, this.getStoreState().className); const t = this.getStoreState().creative ? this.renderCreative() : null; return n('div', {}, void 0, t, React.createElement('div', { className: e, id: this.props.adId, ref: 'googleHook' })); } return null; },
    });
  }, {
    '../../modules/ads/google_ad_helper': 4, '../../react_stores/google_ads_store': 250, '../featured_content_module': 104, '../gr_component_factory': 108, classnames: 'classnames', reflux: 'reflux',
  }],
  61: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../react_stores/google_ads_store'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('../page_skin'); const p = o(c); const f = e('../../modules/ads/google_ad_helper'); r.default = l.default.createClass({
      displayName: 'GooglePageSkin',
      mixins: [d.default.connectFilter(a.default, 'googleAdsStore', function (e) { return e.nativeAds[this.props.adId]; })],
      propTypes: { adId: React.PropTypes.string.isRequired, image: React.PropTypes.string, trackingOptions: React.PropTypes.shape({ enableTracking: React.PropTypes.bool, adId: React.PropTypes.string }).isRequired },
      getStoreState() { return this.state.googleAdsStore; },
      componentDidMount() {
        if (this.getStoreState() && !this.getStoreState().creative) {
          const e = {
            googleHookSelector: this.refs.googleHook, creativeSelector: this.getStoreState().creativeSelector, dimensions: this.getStoreState().dimensions, isNativeAd: this.getStoreState().isNativeAd, path: this.getStoreState().path,
          }; (0, f.requestCreativeForAdSlot)(this.props.adId, e);
        }
      },
      renderCreative() { return n(p.default, { imageUrl: this.getStoreState().creative.image_url, backgroundColor: this.getStoreState().creative.background_color }); },
      render() { if (this.getStoreState()) { const e = this.getStoreState().className; const t = this.getStoreState().creative ? this.renderCreative() : null; return n('div', { className: 'pageskinContainer' }, void 0, t, React.createElement('div', { className: e, id: this.props.adId, ref: 'googleHook' })); } return null; },
    });
  }, {
    '../../modules/ads/google_ad_helper': 4, '../../react_stores/google_ads_store': 250, '../gr_component_factory': 108, '../page_skin': 151, reflux: 'reflux',
  }],
  62: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../../react_stores/google_ads_store'); const a = o(s); const i = e('../../gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('./native_ad_body'); const p = o(c); const f = e('../../../modules/ads/google_ad_helper'); const m = e('classnames'); const h = o(m); r.default = l.default.createClass({
      displayName: 'GoogleNativeAd',
      mixins: [d.default.connectFilter(a.default, 'googleAdsStore', function (e) { return e.nativeAds[this.props.adId]; })],
      propTypes: {
        adId: React.PropTypes.string.isRequired, trackingOptions: React.PropTypes.shape({ enableTracking: React.PropTypes.bool, adId: React.PropTypes.string }).isRequired, className: React.PropTypes.string, signedIn: React.PropTypes.bool, isMobile: React.PropTypes.bool, isNewsfeed: React.PropTypes.bool,
      },
      getDefaultProps() { return { isMobile: !1, isNewsfeed: !0, signedIn: !0 }; },
      getStoreState() { return this.state.googleAdsStore; },
      componentDidMount() {
        if (this.getStoreState() && !this.getStoreState().creative) {
          const e = {
            googleHookSelector: this.refs.googleHook, creativeSelector: this.getStoreState().creativeSelector, dimensions: this.getStoreState().dimensions, isNativeAd: this.getStoreState().isNativeAd, lazyLoadedNewsfeedAd: this.getStoreState().lazyLoadedNewsfeedAd, path: this.getStoreState().path, isLazyLoaded: this.getStoreState().isLazyLoaded,
          }; this.getStoreState().lazyLoadedNewsfeedAd || this.getStoreState().isLazyLoaded ? (0, f.lazyLoadOnView)(function (e) { e.target.id === this.adId && (0, f.requestCreativeForAdSlot)(this.adId, this.params); }.bind({ adId: this.props.adId, params: e })) : (0, f.requestCreativeForAdSlot)(this.props.adId, e);
        }
      },
      render() {
        if (this.getStoreState()) {
          const e = (0, h.default)('googleNativeAd__googleHook', this.getStoreState().className, 'lazyload'); const t = (0, h.default)('googleNativeAd', this.props.className); const r = this.getStoreState().creative ? n(p.default, {
            creative: this.getStoreState().creative, adId: this.props.adId, deviceType: this.getStoreState().deviceType, signedIn: this.props.signedIn, isMobile: this.props.isMobile, isNewsfeed: this.props.isNewsfeed,
          }) : null; return n('div', { className: t }, void 0, r, React.createElement('div', { className: e, id: this.props.adId, ref: 'googleHook' }));
        } return null;
      },
    });
  }, {
    '../../../modules/ads/google_ad_helper': 4, '../../../react_stores/google_ads_store': 250, '../../gr_component_factory': 108, './native_ad_body': 64, classnames: 'classnames', reflux: 'reflux',
  }],
  63: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('../../gr_component_factory'); const u = o(l); const d = e('../../../react_stores/google_ads_store'); const c = o(d); const p = e('./google_native_ad'); const f = o(p); r.default = u.default.createClass({
      displayName: 'NativeAd',
      mixins: [i.default.connectFilter(c.default, 'googleAdsStore', function (e) { return e.nativeAds[this.props.adId]; })],
      propTypes: {
        adId: s.default.PropTypes.string.isRequired, trackingOptions: s.default.PropTypes.shape({ enableTracking: s.default.PropTypes.bool, adId: s.default.PropTypes.string }).isRequired, className: s.default.PropTypes.string, signedIn: s.default.PropTypes.bool, isMobile: s.default.PropTypes.bool, isNewsfeed: s.default.PropTypes.bool,
      },
      getAdsStoreState() { return this.state.googleAdsStore; },
      getDefaultProps() { return { signedIn: !0, isMobile: !1, isNewsfeed: !0 }; },
      render() { return this.getAdsStoreState() ? s.default.createElement(f.default, this.props) : null; },
    });
  }, {
    '../../../react_stores/google_ads_store': 250, '../../gr_component_factory': 108, './google_native_ad': 62, react: 'react', reflux: 'reflux',
  }],
  64: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('reflux'); const a = o(s); const i = e('../../gr_component_factory'); const l = o(i); const u = e('../../../react_stores/user_not_interested_store'); const d = o(u); const c = e('../../../react_actions/user_not_interested_actions'); const p = o(c); const f = e('./native_book_ad'); const m = o(f); const h = e('./native_flex_ad'); const _ = o(h); const g = e('./user_not_interested_message'); const v = o(g); r.default = l.default.createClass({
      displayName: 'NativeAdBody',
      mixins: [a.default.connect(d.default, 'userNotInterestedStore')],
      propTypes: {
        adId: React.PropTypes.string, creative: React.PropTypes.object.isRequired, adDeviceType: React.PropTypes.string, signedIn: React.PropTypes.bool, isMobile: React.PropTypes.bool, isNewsfeed: React.PropTypes.bool,
      },
      getDefaultProps() { return { isNewsfeed: !0, isMobile: !1, signedIn: !0 }; },
      getUserNotInterestedStoreState() { return this.state.userNotInterestedStore; },
      render() {
        if (this.props.creative && this.props.creative.book) {
          const e = this.props.creative.book.bookId; if (this.getUserNotInterestedStoreState()[e]) {
            if (this.getUserNotInterestedStoreState()[e].isClosed) return null; if (this.getUserNotInterestedStoreState()[e].isFlashMessage) {
              return n(v.default, {
                id: this.props.adId, isNewsfeed: this.props.isNewsfeed, className: this.props.className, creative: this.props.creative,
              });
            }
          } else p.default.addBookIDToState(e);
        } return this.props.creative && this.props.creative.book ? n(m.default, {
          isNewsfeed: this.props.isNewsfeed, isMobile: this.props.isMobile, creative: this.props.creative, adDeviceType: this.props.adDeviceType, signedIn: this.props.signedIn, id: this.props.adId,
        }) : n(_.default, {
          id: this.props.adId, creative: this.props.creative, signedIn: this.props.signedIn, isNewsfeed: this.props.isNewsfeed, isMobile: this.props.isMobile,
        });
      },
    });
  }, {
    '../../../react_actions/user_not_interested_actions': 50, '../../../react_stores/user_not_interested_store': 263, '../../gr_component_factory': 108, './native_book_ad': 67, './native_flex_ad': 69, './user_not_interested_message': 71, reflux: 'reflux',
  }],
  65: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.NativeAdCaret = void 0; const u = e('react'); const d = e('../../shared/gr_prop_types'); const c = o(d); const p = e('../../dropdown'); const f = o(p); const m = e('../../click_tracking_wrapper'); const h = o(m); const _ = e('../../../react_actions/user_not_interested_actions'); const g = o(_); const v = e('../../../modules/ads/click_tracking_helper'); const y = e('lodash'); const b = r.NativeAdCaret = (function (e) {
      function t(e) { return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e)); } return a(t, e), l(t, [{ key: 'renderNotInterested', value() { const e = this; if (this.props.book && this.props.signedIn) { const t = function () { return g.default.userNotInterested(e.props.book.bookId); }; const r = i('button', { className: 'gr-buttonAsLink nativeAdCaretMenu__button', onClick: t }, void 0, 'I’m not interested in this book'); return i(h.default, { children: r, trackingOptions: v.TRACKED_CLASSES.newsfeed_caret_not_interested }); } return null; } }, { key: 'caretList', value() { const e = i('a', { className: 'nativeAdCaretMenu__link', href: this.props.helpLink }, void 0, 'Why am I seeing this?'); return i('div', { className: 'nativeAdCaretMenu' }, void 0, this.renderNotInterested(), (0, y.map)(this.props.additionalLinks, e => i('div', { className: 'nativeAdCaretMenu__button' }, e, 'link')), i(h.default, { children: e, trackingOptions: v.TRACKED_CLASSES.newsfeed_caret_help })); } }, {
        key: 'render',
        value() {
          return i('div', { className: 'nativeAdCaret' }, void 0, i(f.default, {
            trigger: i('div', { className: 'nativeAdCaret nativeAdCaret__image', 'aria-label': 'Sponsored item options' }), triggerEventType: f.default.TriggerEventTypes.CLICK, bemModifiers: 'caret', children: this.caretList(),
          }));
        },
      }]), t;
    }(u.Component)); b.propTypes = {
      book: c.default.book(), helpLink: u.PropTypes.string, updateId: u.PropTypes.string, additionalLinks: u.PropTypes.arrayOf(u.PropTypes.elements), signedIn: u.PropTypes.bool,
    }, b.defaultProps = { trackingOptions: v.TRACKED_CLASSES.newsfeed_caret, signedIn: !0 }, r.default = b;
  }, {
    '../../../modules/ads/click_tracking_helper': 3, '../../../react_actions/user_not_interested_actions': 50, '../../click_tracking_wrapper': 82, '../../dropdown': 91, '../../shared/gr_prop_types': 180, lodash: 'lodash', react: 'react',
  }],
  66: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.NativeAdSponsoredLabel = void 0; const u = e('react'); const d = o(u); const c = e('../../click_tracking_wrapper'); const p = o(c); const f = e('../../../modules/ads/click_tracking_helper'); const m = r.NativeAdSponsoredLabel = (function (e) {
      function t(e) { return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e)); } return a(t, e), l(t, [{
        key: 'render',
        value() {
          const e = this.props.sponsoredBy ? 'Sponsored by ' : 'Sponsored';
          const t = i('div', { className: 'nativeAd__sponsoredLabel' }, void 0, i('span', { className: 'googleNativeAd__sponsoredBadgeIcon' }), i('span', { className: 'googleNativeAd__sponsoredLabel' }, void 0, e), i('a', { target: '_blank', href: this.props.sponsoredUrl, className: 'gr-hyperlink' }, void 0, this.props.sponsoredBy)); return i(p.default, { trackingOptions: f.TRACKED_CLASSES.sponsored_label, children: t });
        },
      }]), t;
    }(u.Component)); m.propTypes = { sponsoredBy: d.default.PropTypes.string, sponsoredUrl: d.default.PropTypes.string }, r.default = m;
  }, { '../../../modules/ads/click_tracking_helper': 3, '../../click_tracking_wrapper': 82, react: 'react' }],
  67: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const l = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const u = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.NativeBookAd = void 0; const d = e('react'); const c = e('./native_book_ad_header'); const p = o(c); const f = e('../../book'); const m = o(f); const h = e('../../book_with_wtr_button'); const _ = o(h); const g = e('../../preview_book/preview_book'); const v = o(g); const y = e('../../user_content/expandable_html'); const b = o(y); const k = e('../../book_description'); const S = o(k); const P = e('../../community_rating'); const T = o(P); const w = e('../../click_tracking_wrapper'); const N = o(w); const R = e('../../../modules/ads/click_tracking_helper'); const M = e('../../shape_icon'); const C = o(M); const x = e('../../user/user_icon'); const A = o(x); const I = e('../../../modules/shape_icon_values'); const L = e('./native_ad_caret'); const U = o(L); const E = e('./native_ad_sponsored_label'); const O = o(E); const B = e('classnames'); const j = o(B); const F = r.NativeBookAd = (function (e) {
      function t(e) { return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e)); } return a(t, e), u(t, [{ key: 'isDesktopNewsfeed', value() { return this.props.isNewsfeed && !this.props.isMobile; } }, { key: 'isMobileNewsfeed', value() { return this.props.isNewsfeed && this.props.isMobile; } }, { key: 'renderBookDescription', value() { const e = this.props.isMobile ? null : l(v.default, { book: this.props.creative.book }); return this.props.creative.customText ? l('div', { className: 'gr-book__description u-marginTopXSmall' }, void 0, React.createElement(b.default, this.props.creative.customText), l('div', { className: 'u-paddingTopSmall' }, void 0, e)) : l('div', {}, void 0, l(S.default, { className: 'u-marginTopXSmall', bookDescription: this.props.creative.book.description }), l('div', { className: 'u-paddingTopSmall' }, void 0, e)); } }, { key: 'renderLearnMoreButton', value() { const e = l('a', { href: this.props.creative.book.bookUrl, rel: 'noopener noreferrer', className: 'gr-button u-marginTopMedium' }, void 0, 'Learn More'); return l(N.default, { trackingOptions: R.TRACKED_CLASSES.cta_link, children: e }); } }, {
        key: 'renderBook',
        value() {
          const e = (0, j.default)({ 'gr-newsfeedItem__body': this.isDesktopNewsfeed(), bookAdBody: !this.isDesktopNewsfeed() }); const t = this.props.creative.book; return this.props.signedIn ? l(_.default, {
            body: this.renderBookDescription(), book: t, responsiveWtrButton: this.props.isMobile, bookClassName: e,
          }) : React.createElement(m.default, i({}, t, { className: e, size: f.VALID_BOOK_SIZES.LARGE }), this.props.isMobile ? l(T.default, {
            rating: parseFloat(t.avgRating), displayAvgRatingText: !1, ratingsCount: t.ratingsCount, size: T.default.ICON_SIZES.MEDIUM,
          }) : null, this.renderBookDescription(), this.renderLearnMoreButton());
        },
      }, {
        key: 'renderCaret',
        value() {
          return l('div', { className: 'googleNativeAd__caret' }, void 0, l(U.default, {
            book: this.props.creative.book, helpLink: this.props.creative.helpLink, updateId: this.props.id, signedIn: this.props.signedIn,
          }));
        },
      }, {
        key: 'renderIconBody',
        value() {
          return this.props.creative.firstFriend ? l(A.default, { user: this.props.creative.firstFriend, size: I.ICON_SIZES.MEDIUM }) : l(C.default, {
            imageUrl: this.props.creative.defaultIcon, size: I.ICON_SIZES.MEDIUM, imageAlt: 'Sponsored Newsfeed Item Icon', border: !0,
          });
        },
      }, { key: 'renderIcon', value() { return l('div', { className: 'gr-newsfeedItem__headerIcon gr-mediaBox__media gr-mediaBox__media--marginSmall' }, void 0, this.renderIconBody()); } }, { key: 'render', value() { const e = l(O.default, { sponsoredBy: this.props.creative.sponsoredBy, sponsoredUrl: this.props.creative.sponsoredUrl }); const t = (0, j.default)('gr-mediaBox', { 'feedItem feedItem--ad': this.isMobileNewsfeed(), 'gr-newsfeedItem gr-mediaBox': this.isDesktopNewsfeed(), 'googleNativeAd__item ': !this.isDesktopNewsfeed() }); const r = (0, j.default)({ nativeAd__newsfeedBody: this.isDesktopNewsfeed() }); return React.createElement('div', { className: t, ref: 'nativeAd' }, this.isDesktopNewsfeed() && this.renderIcon(), l('div', { className: 'u-marginBottomSmall' }, void 0, this.renderCaret(), l('div', { className: 'nativeAd__headerText' }, void 0, l(p.default, { creative: this.props.creative, signedIn: this.props.signedIn })), this.props.creative.isSponsored ? e : null, l('div', { className: r }, void 0, this.renderBook()))); } }]), t;
    }(d.Component)); F.propTypes = {
      isNewsfeed: d.PropTypes.bool, isMobile: d.PropTypes.bool, creative: d.PropTypes.shape().isRequired, adDeviceType: d.PropTypes.string, signedIn: d.PropTypes.bool, id: d.PropTypes.string,
    }, r.default = F;
  }, {
    '../../../modules/ads/click_tracking_helper': 3, '../../../modules/shape_icon_values': 19, '../../book': 74, '../../book_description': 75, '../../book_with_wtr_button': 76, '../../click_tracking_wrapper': 82, '../../community_rating': 88, '../../preview_book/preview_book': 154, '../../shape_icon': 175, '../../user/user_icon': 202, '../../user_content/expandable_html': 204, './native_ad_caret': 65, './native_ad_sponsored_label': 66, './native_book_ad_header': 68, classnames: 'classnames', react: 'react',
  }],
  68: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../gr_component_factory'); const a = o(s); const i = e('../../user/user_profile_link'); const l = o(i); const u = e('../../shared/gr_prop_types'); const d = o(u); const c = e('lodash'); const p = o(c); r.default = a.default.createClass({
      displayName: 'NativeBookAdHeader', propTypes: { creative: d.default.creative().isRequired, signedIn: React.PropTypes.bool }, getDefaultProps() { return { signedIn: !0 }; }, renderLink(e, t) { return n('a', { className: 'gr-hyperlink gr-hyperlink--bold', href: t }, void 0, e); }, renderFriendHeader() { const e = p.default.head(this.props.creative.topFriends); return n('span', { className: 'gr-newsfeedItem__headerText' }, void 0, n(l.default, { user: e }), this.renderHeaderText(), ' ', this.props.creative.friendActionText); }, renderHeaderText() { return this.props.creative.numAdditionalFriends === 1 ? n('span', {}, void 0, ' and ', n(l.default, { user: this.props.creative.topFriends[1] })) : this.props.creative.numAdditionalFriends > 1 ? n('span', {}, void 0, ' and ', this.renderLink(`${this.props.creative.numAdditionalFriends} other friends`, `${this.props.creative.book.bookUrl}#friendReviews`)) : null; }, renderSimilarBook() { return n('div', { className: 'gr-newsfeedItem__headerText gr-newsfeedItem__headerText--truncateWithEllipsis' }, void 0, 'This is similar to ', this.renderLink(this.props.creative.similarBook.title, this.props.creative.similarBook.bookUrl)); }, renderGenres() { const e = p.default.head(this.props.creative.genres); return n('div', { className: 'gr-newsfeedItem__headerText' }, void 0, 'This book has been shelved by members as ', this.renderLink(e.genre, e.url), this.props.creative.genres.length > 1 ? n('span', {}, void 0, ' and ', this.renderLink(this.props.creative.genres[1].genre, this.props.creative.genres[1].url)) : null); }, renderDefault() { return n('div', { className: 'gr-newsfeedItem__headerText' }, void 0, 'Based on your reading preferences, you might enjoy'); }, renderSignedOutText() { return n('div', { className: 'gr-newsfeedItem__headerText' }, void 0, 'Goodreads Recommends'); }, renderContextualHeader() { return n('div', { className: 'gr-newsfeedItem__headerText' }, void 0, this.props.creative.headerText); }, render() { return this.props.creative.headerText ? this.renderContextualHeader() : this.props.signedIn ? this.props.creative.topFriends ? this.renderFriendHeader() : this.props.creative.similarBook ? this.renderSimilarBook() : this.props.creative.genres ? this.renderGenres() : this.renderDefault() : this.renderSignedOutText(); },
    });
  }, {
    '../../gr_component_factory': 108, '../../shared/gr_prop_types': 180, '../../user/user_profile_link': 203, lodash: 'lodash',
  }],
  69: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.NativeFlexAd = void 0; const u = e('react'); const d = e('./native_flex_ad_body'); const c = o(d); const p = e('../../shape_icon'); const f = o(p); const m = e('../../../modules/shape_icon_values'); const h = e('./native_ad_caret'); const _ = o(h); const g = e('classnames'); const v = o(g); const y = e('./native_ad_sponsored_label'); const b = o(y); const k = r.NativeFlexAd = (function (e) {
      function t(e) { return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e)); } return a(t, e), l(t, [{ key: 'getHeaderText', value() { return { __html: this.props.creative.headerText }; } }, { key: 'renderCaret', value() { return i('div', { className: 'googleNativeAd__caret' }, void 0, i(_.default, { helpLink: this.props.creative.helpLink, updateId: this.props.id, signedIn: this.props.signedIn })); } }, { key: 'isDesktopNewsfeed', value() { return this.props.isNewsfeed && !this.props.isMobile; } }, { key: 'isMobileNewsfeed', value() { return this.props.isNewsfeed && this.props.isMobile; } }, {
        key: 'renderIcon',
        value() {
          return i('div', { className: 'gr-newsfeedItem__headerIcon gr-mediaBox__media gr-mediaBox__media--marginSmall' }, void 0, i(f.default, {
            imageUrl: this.props.creative.defaultIcon, size: m.ICON_SIZES.MEDIUM, imageAlt: 'Sponsored Item Icon', border: !0,
          }));
        },
      }, { key: 'render', value() { const e = (0, v.default)({ 'gr-newsfeedItem__body nativeAd__newsfeedBody': this.isDesktopNewsfeed() }); const t = i(b.default, { sponsoredBy: this.props.creative.sponsoredBy, sponsoredUrl: this.props.creative.sponsoredUrl }); const r = (0, v.default)('gr-mediaBox', { 'gr-newsfeedItem gr-mediaBox': this.isDesktopNewsfeed(), 'googleNativeAd__item ': !this.isDesktopNewsfeed(), 'feedItem feedItem--ad': this.isMobileNewsfeed() }); return React.createElement('div', { className: r, ref: 'nativeAd' }, this.isDesktopNewsfeed() && this.renderIcon(), i('div', { className: 'u-marginBottomSmall' }, void 0, this.renderCaret(), i('div', { className: 'nativeAd__headerText' }, void 0, i('div', { className: 'gr-newsfeedItem__headerText', dangerouslySetInnerHTML: this.getHeaderText() })), this.props.creative.isSponsored ? t : null, i(c.default, { creative: this.props.creative, bodyClassNames: e }))); } }]), t;
    }(u.Component)); k.propTypes = {
      id: u.PropTypes.string, creative: u.PropTypes.shape().isRequired, signedIn: u.PropTypes.bool, isNewsfeed: u.PropTypes.bool, isMobile: u.PropTypes.bool,
    }, r.default = k;
  }, {
    '../../../modules/shape_icon_values': 19, '../../shape_icon': 175, './native_ad_caret': 65, './native_ad_sponsored_label': 66, './native_flex_ad_body': 70, classnames: 'classnames', react: 'react',
  }],
  70: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../gr_component_factory'); const a = o(s); const i = e('../../shared/gr_prop_types'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('../../click_tracking_wrapper'); const p = o(c); const f = e('../../user_content/expandable_html'); const m = o(f); const h = e('../../../modules/ads/click_tracking_helper'); const _ = e('react'); const g = o(_);
    r.default = a.default.createClass({
      displayName: 'NativeFlexAdBody',
      propTypes: { creative: l.default.creative().isRequired, bodyClassNames: g.default.PropTypes.string },
      renderImage() {
        const e = (0, d.default)('gr-mediaBox__media', this.withBemModifiers('flexAdBody__image')); const t = n('a', {
          target: this.props.creative.externalLink ? '_blank' : '_self', rel: 'noopener noreferrer', href: this.props.creative.updateUrl, className: 'flexAdBody__imageLink',
        }, void 0, n('img', { alt: this.props.creative.title, className: e, src: this.props.creative.image })); return n(p.default, { trackingOptions: h.TRACKED_CLASSES.sponsored_update_body_image, children: t });
      },
      renderExploreButton() {
        const e = n('a', {
          target: this.props.creative.externalLink ? '_blank' : '_self', rel: 'noopener noreferrer', href: this.props.creative.callToActionUrl, className: 'gr-button u-marginTopMedium gr-microsite-link',
        }, void 0, this.props.creative.callToActionText); return n(p.default, { trackingOptions: h.TRACKED_CLASSES.cta_link, children: e });
      },
      render() {
        const e = (0, d.default)(this.props.bodyClassNames, 'gr-mediaBox', 'flexAdBody'); const t = (0, d.default)('flexAdBody__titleLink', 'gr-hyperlink', 'gr-hyperlink--naked'); const r = n('a', {
          target: this.props.creative.externalLink ? '_blank' : '_self', rel: 'noopener noreferrer', href: this.props.creative.updateUrl, className: t,
        }, void 0, this.props.creative.title); return n('div', { className: e }, void 0, this.renderImage(), n('div', { className: 'gr-mediaBox__desc' }, void 0, n('div', { className: 'flexAdBody__title' }, void 0, n(p.default, { trackingOptions: h.TRACKED_CLASSES.sponsored_update_body_title_link, children: r })), n('div', { className: 'flexAdBody__description' }, void 0, g.default.createElement(m.default, this.props.creative.description)), this.renderExploreButton()));
      },
    });
  }, {
    '../../../modules/ads/click_tracking_helper': 3, '../../click_tracking_wrapper': 82, '../../gr_component_factory': 108, '../../shared/gr_prop_types': 180, '../../user_content/expandable_html': 204, classnames: 'classnames', react: 'react',
  }],
  71: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.UserNotInterestedMessage = void 0; const u = e('react'); const d = e('../../close_button'); const c = o(d); const p = e('../../../react_actions/user_not_interested_actions'); const f = o(p); const m = e('classnames'); const h = o(m); const _ = r.UserNotInterestedMessage = (function (e) { function t(e) { return n(this, t), s(this, Object.getPrototypeOf(t).call(this, e)); } return a(t, e), l(t, [{ key: 'renderUndoButton', value(e) { const t = this; return i('button', { className: 'gr-buttonAsLink', onClick() { f.default.undoUserNotInterested(e.bookId, t.props.id); } }, void 0, 'Undo'); } }, { key: 'render', value() { const e = this.props.creative.book; if (this.props.isNewsfeed) { var t = i('span', { className: 'gr-newsfeedItem__flashMessage--body' }, void 0, "Thanks! We won't recommend", ' ', i('a', { href: e.bookUrl }, void 0, e.title), ' ', 'again!', ' ', this.renderUndoButton(e)); return i('div', { className: 'gr-newsfeedItem gr-newsfeedItem__flashMessage', role: 'alert' }, void 0, i('div', { className: 'gr-newsfeedItem__close' }, void 0, i(c.default, { action() { f.default.closeFlashMessage(e.bookId); } })), t); } var t = i('span', { className: 'userNotInterested__message' }, void 0, "Thanks! We won't recommend", ' ', i('a', { href: e.bookUrl }, void 0, e.title), ' ', 'again!', ' ', this.renderUndoButton(e)); const r = (0, h.default)(this.props.className, 'userNotInterested'); return i('div', { className: r, role: 'alert' }, void 0, i('div', { className: 'userNotInterested__close' }, void 0, i(c.default, { action() { f.default.closeFlashMessage(e.bookId); } })), t); } }]), t; }(u.Component)); _.propTypes = {
      id: u.PropTypes.string, isNewsfeed: u.PropTypes.bool, className: u.PropTypes.string, creative: u.PropTypes.shape(),
    }, r.default = _;
  }, {
    '../../../react_actions/user_not_interested_actions': 50, '../../close_button': 83, classnames: 'classnames', react: 'react',
  }],
  72: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = e('classnames'); const u = o(l); const d = { SMALL: 'small', LARGE: 'large' }; r.default = a.default.createClass({
      displayName: 'AuthorBadge', statics: { AUTHOR_BADGE_SIZES: d }, propTypes: { size: React.PropTypes.oneOf([d.SMALL, d.LARGE]), isGoodreadsAuthor: i.PropTypes.bool.isRequired }, getDefaultProps() { return { size: d.SMALL }; }, getClasses() { return (0, u.default)('gr-icon', { 'gr-icon--authorBadge': this.props.size === d.SMALL, 'gr-icon--authorBadgeLarge': this.props.size === d.LARGE }); }, renderBadge() { return n('span', { className: this.getClasses(), title: 'Goodreads Author' }); }, render() { return this.props.isGoodreadsAuthor ? this.renderBadge() : null; },
    });
  }, { '../gr_component_factory': 108, classnames: 'classnames', react: 'react' }],
  73: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../../react_actions/author_follow_actions'); const p = o(c); const f = e('../../react_stores/author_follow_store'); const m = o(f); const h = e('classnames'); const _ = o(h); r.default = d.default.createClass({
      displayName: 'AuthorFollowButton',
      mixins: [l.default.connectFilter(m.default, 'authorFollowStore', function (e) { return e[this.props.authorId]; })],
      propTypes: { authorId: a.default.PropTypes.number.isRequired, className: a.default.PropTypes.string },
      handleButtonClicked() { this.state.authorFollowStore.isFollowing ? p.default.unFollow(this.props.authorId) : (p.default.follow(this.props.authorId), this.setState({ isHovering: !1 })); },
      getButtonText() { return this.state.authorFollowStore.isFollowing ? this.state.isHovering ? 'Unfollow' : 'Following' : 'Follow author'; },
      render() {
        const e = this; const t = (0, _.default)('gr-button', this.props.className); return n('button', {
          className: t, onClick: this.handleButtonClicked, onMouseEnter() { e.setState({ isHovering: !0 }); }, onMouseLeave() { e.setState({ isHovering: !1 }); }, disabled: this.state.authorFollowStore.buttonEnabled ? !1 : 'disabled',
        }, void 0, this.getButtonText());
      },
    });
  }, {
    '../../react_actions/author_follow_actions': 25, '../../react_stores/author_follow_store': 241, '../gr_component_factory': 108, classnames: 'classnames', react: 'react', reflux: 'reflux',
  }],
  74: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.VALID_BOOK_SIZES = void 0; const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('./gr_component_factory'); const d = o(u); const c = e('./shared/gr_prop_types'); const p = o(c); const f = e('./click_tracking_wrapper'); const m = o(f); const h = e('../modules/ads/click_tracking_helper'); const _ = e('classnames'); const g = o(_); const v = e('./author/author_badge'); const y = o(v); const b = r.VALID_BOOK_SIZES = { SMALL: 'small', MEDIUM: 'medium', LARGE: 'large' }; r.default = d.default.createClass({
      displayName: 'Book',
      propTypes: {
        imageUrl: a.default.PropTypes.string.isRequired, bookUrl: a.default.PropTypes.string.isRequired, bookCoverUrl: a.default.PropTypes.string, title: a.default.PropTypes.string.isRequired, size: a.default.PropTypes.oneOf(l.default.values(b)), titleSize: a.default.PropTypes.oneOf(l.default.values(b)), author: p.default.author(), mediaBoxModifier: a.default.PropTypes.string, className: a.default.PropTypes.string, sponsored: a.default.PropTypes.bool, bookImageTrackingData: a.default.PropTypes.object, bookTitleTrackingData: a.default.PropTypes.object, authorLinkTrackingData: a.default.PropTypes.object, label: a.default.PropTypes.element,
      },
      getDefaultProps() {
        return {
          size: b.MEDIUM, bookImageTrackingData: h.TRACKED_CLASSES.book_image, bookTitleTrackingData: h.TRACKED_CLASSES.book_title, authorLinkTrackingData: h.TRACKED_CLASSES.author_link,
        };
      },
      render() { const e = (0, g.default)('gr-mediaBox', `gr-book--${this.props.size}`, this.withBemModifiers('gr-book'), this.props.className); const t = (0, g.default)('gr-mediaBox__media', this.withBemModifiers('gr-book__image'), { 'gr-book__image--large': this.props.size === b.LARGE }); const r = this.props.titleSize == null ? this.props.size : this.props.titleSize; const o = (0, g.default)(this.withBemModifiers('gr-book__titleLink'), { 'gr-book__titleLink--large': r === b.LARGE }, 'gr-hyperlink gr-hyperlink--naked'); const s = (0, g.default)(this.withBemModifiers('gr-book__title')); const a = this.withBemModifiers('gr-mediaBox__desc', this.props.mediaBoxModifier); const i = n('img', { alt: this.props.title, className: t, src: this.props.imageUrl }); const l = n('a', { href: this.props.bookUrl, className: o }, void 0, this.props.title); return n('div', { className: e }, void 0, n('a', { href: this.props.bookCoverUrl || this.props.bookUrl }, void 0, n(m.default, { children: i, trackingOptions: this.props.bookImageTrackingData })), n('div', { className: a }, void 0, this.props.label, n('div', { className: s }, void 0, n(m.default, { children: l, trackingOptions: this.props.bookTitleTrackingData })), this.renderAuthorLink(), n('div', { className: 'gr-book__additionalContent' }, void 0, this.props.children))); },
      renderAuthorLink() { const e = this.props.titleSize == null ? this.props.size : this.props.titleSize; const t = (0, g.default)(this.withBemModifiers('gr-book__author'), { 'gr-book__author--large': e === b.LARGE }); if (this.props.author) { const r = n('a', { href: this.props.author.profileUrl, className: 'gr-book__authorLink gr-hyperlink gr-hyperlink--naked' }, void 0, this.props.author.name); return n('div', { className: t }, void 0, 'by ', n(m.default, { children: r, trackingOptions: this.props.authorLinkTrackingData }), a.default.createElement(y.default, this.props.author)); } return n('div', { className: t }, void 0, 'by deleted author'); },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './author/author_badge': 72, './click_tracking_wrapper': 82, './gr_component_factory': 108, './shared/gr_prop_types': 180, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  75: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('./gr_component_factory'); const i = o(a); const l = e('./user_content/truncated_html'); const u = o(l); const d = e('./shared/gr_prop_types'); const c = o(d); const p = e('classnames'); const f = o(p); r.default = i.default.createClass({
      displayName: 'BookDescription', propTypes: { bookDescription: c.default.bookDescription().isRequired, className: React.PropTypes.string, bookDescriptionTargetingData: React.PropTypes.object }, getDefaultProps() { return { bookDescription: { html: '', truncated: !1, fullContentUrl: '' } }; }, render() { const e = (0, f.default)(this.props.className, 'gr-book__description'); const t = this.props.bookDescription; return s('div', { className: e }, void 0, t.html ? React.createElement(u.default, n({}, t, { fullContentText: 'Continue reading', bookDescriptionTargetingData: this.props.bookDescriptionTargetingData })) : null, this.props.children); },
    });
  }, {
    './gr_component_factory': 108, './shared/gr_prop_types': 180, './user_content/truncated_html': 208, classnames: 'classnames',
  }],
  76: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('./gr_component_factory'); const i = o(a); const l = e('./shared/gr_prop_types'); const u = o(l); const d = e('./book'); const c = o(d); const p = e('./want_to_read/want_to_read_button'); const f = o(p); const m = e('lodash'); const h = e('./community_rating'); const _ = o(h); r.default = i.default.createClass({
      displayName: 'BookWithWTRButton',
      propTypes: {
        book: u.default.book().isRequired, body: React.PropTypes.element, bookSize: React.PropTypes.oneOf((0, m.values)(d.VALID_BOOK_SIZES)), bookClassName: React.PropTypes.string, responsiveWtrButton: React.PropTypes.bool,
      },
      getDefaultProps() { return { bookSize: d.VALID_BOOK_SIZES.LARGE, responsiveWtrButton: !1 }; },
      renderBookBody() { return this.props.body ? this.props.body : null; },
      renderCommunityRating() {
        const e = this.props.book; return s(_.default, {
          rating: parseFloat(e.avgRating), displayAvg: !1, displayAvgRatingText: !1, ratingsCount: e.ratingsCount, size: _.default.ICON_SIZES.MEDIUM,
        });
      },
      renderWtrButton() {
        return s(f.default, {
          bookTitle: this.props.book.title, uniqueId: (0, m.random)(1e6).toString(), bookId: this.props.book.bookId, withModalShelvingMenu: this.props.responsiveWtrButton, showStars: !0,
        });
      },
      render() { return React.createElement(c.default, n({ className: this.props.bookClassName }, this.props.book, { size: this.props.bookSize }), this.props.responsiveWtrButton && this.renderCommunityRating(), this.renderWtrButton(), this.renderBookBody()); },
    });
  }, {
    './book': 74, './community_rating': 88, './gr_component_factory': 108, './shared/gr_prop_types': 180, './want_to_read/want_to_read_button': 218, lodash: 'lodash',
  }],
  77: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.GetACopyButton = void 0; const s = e('react'); const a = e('react-redux'); const i = e('../../react_stores/buy_buttons/get_a_copy_store'); const l = o(i); const u = e('../../react_actions/buy_buttons/get_a_copy_actions'); const d = r.GetACopyButton = function (e) { const t = e.getACopyDataUrl; const r = e.getACopyClickedHandler; return n('div', {}, void 0, n('button', { className: 'gr-button gr-button--fullWidth u-paddingTopTiny u-paddingBottomTiny u-defaultType', onClick() { return r(t); } }, void 0, 'Get a copy')); }; d.propTypes = { getACopyDataUrl: s.PropTypes.string.isRequired, getACopyClickedHandler: s.PropTypes.func.isRequired }; const c = function () { return {}; }; const p = function (e) { return { getACopyClickedHandler(t) { return e((0, u.getACopyClickedHandler)(t)); } }; }; const f = (0, a.connect)(c, p)(d); const m = function (e) { return n(a.Provider, { store: l.default }, void 0, React.createElement(f, e)); }; r.default = m;
  }, {
    '../../react_actions/buy_buttons/get_a_copy_actions': 27, '../../react_stores/buy_buttons/get_a_copy_store': 243, react: 'react', 'react-redux': 'react-redux',
  }],
  78: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = e('../modal'); const l = o(i); const u = e('../book'); const d = o(u); const c = e('../community_rating'); const p = o(c); const f = e('./glide_button'); const m = o(f); const h = e('./get_a_copy_link'); const _ = o(h); const g = function (e) {
      const t = e.book; const r = e.bookLinks; const o = e.glideButton; const a = e.onCloseHandler; return s(l.default, {
        id: 'GetACopyInterstitial', onCloseHandler: a, showByDefault: !0, centered: !0, bemModifiers: 'small',
      }, void 0, s('h3', { className: 'gr-h3 gr-h3--noTopMargin' }, void 0, 'Get a Copy'), React.createElement(d.default, n({}, t, { className: 'u-paddingBottomSmall u-bottomGrayBorder u-marginBottomSmall', size: 'large' }), s(p.default, {
        rating: parseFloat(t.avgRating), displayAvg: !0, displayAvgRatingText: !1, size: 'medium',
      })), s('div', { className: 'u-textAlignCenter' }, void 0, s('p', { className: 'gr-metaText gr-metaText--upper u-fontSizeDefault' }, void 0, 'Available At:'), o ? React.createElement(m.default, o) : null, r.map(e => React.createElement(_.default, n({ key: e.name }, e))), s('p', { className: 'u-fontSizeDefault' }, void 0, s('a', { href: t.moreStoresUrl }, void 0, 'More store options'))));
    }; g.propTypes = {
      book: a.PropTypes.shape(d.default.propTypes).isRequired, bookLinks: a.PropTypes.array.isRequired, glideButton: a.PropTypes.object, onCloseHandler: a.PropTypes.func,
    }, r.default = g;
  }, {
    '../book': 74, '../community_rating': 88, '../modal': 146, './get_a_copy_link': 80, './glide_button': 81, react: 'react',
  }],
  79: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const s = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; Object.defineProperty(r, '__esModule', { value: !0 }), r.ConditionalInterstitial = void 0; const a = e('react-redux'); const i = e('../../react_stores/buy_buttons/get_a_copy_store'); const l = o(i); const u = e('../../react_actions/buy_buttons/get_a_copy_actions'); const d = e('./get_a_copy_interstitial'); const c = o(d); const p = e('react'); const f = r.ConditionalInterstitial = function (e) { const t = e.interstitial; const r = e.onClose; return t ? React.createElement(c.default, s({}, t, { onCloseHandler: r })) : n('noscript', {}); }; f.propTypes = { interstitial: p.PropTypes.shape({ book: p.PropTypes.object, bookLinks: p.PropTypes.array, glideButton: p.PropTypes.object }), onClose: p.PropTypes.func }; const m = function (e) { return { interstitial: e.activeGetACopyInterstitial }; }; const h = function (e) { return { onClose() { return e((0, u.getACopyClosed)()); } }; }; const _ = (0, a.connect)(m, h)(f); const g = function () { return n(a.Provider, { store: l.default }, void 0, n(_, {})); }; r.default = g;
  }, {
    '../../react_actions/buy_buttons/get_a_copy_actions': 27, '../../react_stores/buy_buttons/get_a_copy_store': 243, './get_a_copy_interstitial': 78, react: 'react', 'react-redux': 'react-redux',
  }],
  80: [function (e, t, r) {
    const o = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = function (e) {
      const t = e.name; const r = e.url; return o('div', { className: 'u-marginBottomTiny' }, void 0, o('a', {
        href: r, target: '_blank', rel: 'noopener noreferrer', className: 'gr-button gr-button--fullWidth',
      }, void 0, t));
    }; s.propTypes = { name: n.PropTypes.string.isRequired, url: n.PropTypes.string.isRequired }, r.default = s;
  }, { react: 'react' }],
  81: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('./get_a_copy_link'); const i = o(a); const l = function (e) { const t = e.price; const r = e.url; return n(i.default, { name: `Kindle Store ${t}`, url: r }); }; l.propTypes = { price: s.PropTypes.string.isRequired, url: s.PropTypes.string.isRequired }, r.default = l;
  }, { './get_a_copy_link': 80, react: 'react' }],
  82: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('./gr_component_factory'); const i = o(a); r.default = i.default.createClass({ displayName: 'ClickTrackingWrapper', propTypes: { trackingOptions: s.default.PropTypes.shape({ dfp: s.default.PropTypes.bool, pmet: s.default.PropTypes.object.isRequired }).isRequired, children: s.default.PropTypes.element.isRequired }, render() { return this.props.children; } });
  }, { './gr_component_factory': 108, react: 'react' }],
  83: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('../modules/shared/image_registry'); const d = e('classnames'); const c = o(d); const p = e('../modules/close_button_values'); r.default = l.default.createClass({
      displayName: 'CloseButton', propTypes: { action: a.default.PropTypes.func.isRequired, variant: a.default.PropTypes.oneOf([p.VARIANTS.DEFAULT, p.VARIANTS.DARK_BG]) }, getDefaultProps() { return { variant: p.VARIANTS.DEFAULT }; }, render() { const e = (0, c.default)('gr-iconButton', this.props.className); let t = void 0; return t = this.props.variant === p.VARIANTS.DARK_BG ? (0, u.getImages)().closeIcons.darkBackground : (0, u.getImages)().closeIcon, n('button', { type: 'button', className: e, onClick: this.props.action }, void 0, n('img', { alt: 'Dismiss', src: t })); },
    });
  }, {
    '../modules/close_button_values': 9, '../modules/shared/image_registry': 20, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  84: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('../gr_component_factory'); const u = o(l); const d = e('../user_content/expandable_html'); const c = o(d); const p = e('../user_content/hidden_html'); const f = o(p); const m = e('../shared/gr_prop_types'); const h = o(m); const _ = e('../user/user_profile_link'); const g = o(_); const v = e('../user/user_icon'); const y = o(v); const b = e('./right_side_information'); const k = o(b); r.default = u.default.createClass({
      displayName: 'Comment',
      propTypes: {
        body: i.default.PropTypes.shape(h.default.expandableHtml()), createdAt: h.default.date.isRequired, authorUser: h.default.user().isRequired, subjectKey: i.default.PropTypes.string.isRequired, subject: h.default.commentSubject(), deletableByCurrentUser: i.default.PropTypes.bool.isRequired, blockedByCurrentUser: i.default.PropTypes.bool, showTimestamp: i.default.PropTypes.bool, uri: i.default.PropTypes.string.isRequired, flagForAbuseUrl: i.default.PropTypes.string.isRequired,
      },
      getDefaultProps() { return { blockedByCurrentUser: !1 }; },
      getInitialState() { return { showCommentDeletingSpinner: !1 }; },
      renderBody() { if (this.props.blockedByCurrentUser) { const e = 'unhide comment'; return s(f.default, { unhideText: e }, void 0, i.default.createElement(c.default, this.props.body)); } return i.default.createElement(c.default, this.props.body); },
      render() { const e = this; return s('div', { className: 'gr-comment gr-mediaBox', onMouseEnter() { e.setState({ isHoveringOnComment: !0 }); }, onMouseLeave() { e.setState({ isHoveringOnComment: !1 }); } }, void 0, s('div', { className: 'gr-mediaBox__media' }, void 0, s(y.default, { user: this.props.authorUser })), s('div', { className: 'gr-mediaBox__desc\n                              gr-mediaBox__desc--clearfixOverflow' }, void 0, i.default.createElement(k.default, n({ isHoveringOnComment: this.state.isHoveringOnComment }, this.props)), s(g.default, { user: this.props.authorUser }), this.props.blockedByCurrentUser ? s('strong', {}, void 0, ' (blocked)') : null, s('div', { className: 'gr-comment__body' }, void 0, this.renderBody()))); },
    });
  }, {
    '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../user/user_icon': 202, '../user/user_profile_link': 203, '../user_content/expandable_html': 204, '../user_content/hidden_html': 205, './right_side_information': 87, react: 'react',
  }],
  85: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../shared/gr_prop_types'); const p = o(c); const f = e('../../react_actions/comment_actions'); const m = o(f); const h = e('../../react_stores/comments_store'); const _ = o(h); const g = e('../user/user_icon'); const v = o(g); const y = e('../../react_mixins/gr_reflux'); const b = e('classnames'); const k = o(b); r.default = d.default.createClass({
      displayName: 'CommentForm',
      propTypes: {
        authorUser: p.default.user().isRequired, subjectKey: a.default.PropTypes.string.isRequired, subject: a.default.PropTypes.shape({ type: a.default.PropTypes.string, id: a.default.PropTypes.number, uri: a.default.PropTypes.string }), placeholder: a.default.PropTypes.string,
      },
      mixins: [(0, y.connectToLazyStore)(_.default, 'subjectKey')],
      getDefaultProps() { return { placeholder: 'Write a comment…' }; },
      addNewComment(e) {
        this.isCommentEmpty() || m.default.addNewComment({
          subjectKey: this.props.subjectKey, subject: this.props.subject, body: this.state.unsavedComment, authorUser: this.props.authorUser,
        }), e.preventDefault();
      },
      isCommentEmpty() { return l.default.isEmpty(l.default.trim(this.state.unsavedComment)); },
      onTextChange(e) { m.default.commentEntered(this.props.subjectKey, e.target.value); },
      onFocus() { m.default.textareaFocused(this.props.subjectKey); },
      onBlur() { m.default.textareaUnfocused(this.props.subjectKey); },
      componentDidUpdate() { this.state.textareaFocusRequested === !0 && this.refs.commentBodyTextarea.focus(); },
      render() {
        const e = (0, k.default)(this.withBemModifiers('gr-commentForm'), 'gr-mediaBox'); return n('div', { className: e }, void 0, n('div', { className: 'gr-mediaBox__media u-noLineHeight' }, void 0, n(v.default, { user: this.props.authorUser })), n('form', { className: 'gr-mediaBox__desc', method: 'post', action: '/comment' }, void 0, n('input', { type: 'hidden', name: 'id', value: this.props.subject.id }), n('input', { type: 'hidden', name: 'type', value: this.props.subject.type }), a.default.createElement('textarea', {
          className: 'gr-textarea gr-commentForm__textarea', name: 'comment[body_usertext]', disabled: this.state.saveInProgress, onChange: this.onTextChange, onFocus: this.onFocus, onBlur: this.onBlur, rows: this.state.textareaRows, value: this.state.unsavedComment, ref: 'commentBodyTextarea', placeholder: this.props.placeholder, 'aria-label': this.props.placeholder,
        }), this.state.showCommentButton ? n('button', {
          className: 'gr-commentForm__submitButton gr-button gr-button--small', disabled: this.state.saveInProgress || this.isCommentEmpty(), onClick: this.addNewComment, type: 'submit',
        }, void 0, 'Comment') : null));
      },
    });
  }, {
    '../../react_actions/comment_actions': 28, '../../react_mixins/gr_reflux': 236, '../../react_stores/comments_store': 244, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../user/user_icon': 202, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  86: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {});
        if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../gr_component_factory'); const c = o(d); const p = e('../shared/gr_prop_types'); const f = o(p); const m = e('./comment'); const h = o(m); const _ = e('../pagination_links'); const g = o(_); const v = e('../../react_stores/comments_store'); const y = o(v); const b = e('../../react_actions/comment_actions'); const k = o(b); const S = e('../spinner'); const P = o(S); const T = e('../../react_mixins/gr_reflux'); const w = e('classnames'); const N = o(w); const R = 3; const M = 1; r.default = c.default.createClass({
      displayName: 'Comments',
      propTypes: {
        subjectKey: i.default.PropTypes.string.isRequired, subject: f.default.commentSubject(), subjectUrl: i.default.PropTypes.string, showTimestamp: i.default.PropTypes.bool,
      },
      getDefaultProps() { return { showTimestamp: !0 }; },
      mixins: [(0, T.connectToLazyStore)(y.default, 'subjectKey')],
      seeMoreCommentsText() { return this.state.numComments == 1 ? 'See 1 comment' : `See all ${this.state.numComments} comments`; },
      showCommentsForPage(e) { k.default.showCommentsForPage({ subjectKey: this.props.subjectKey, subject: this.props.subject, page: e }); },
      showMoreClicked(e) { k.default.showSeeMoreLoadingSpinner(this.props.subjectKey), this.showCommentsForPage(M), e.preventDefault(); },
      renderSeeMoreComments() { const e = this.state.numComments; return e > R || e > this.state.comments.length ? s('div', { className: 'gr-comments__seeAllLinkBox' }, void 0, this.state.showSeeMoreLoadingSpinner ? s('span', {}, void 0, s('span', { className: 'gr-hyperlink gr-hyperlink--bold' }, void 0, this.seeMoreCommentsText()), s('span', { id: 'showMoreSpinner', className: 'u-marginLeftTiny' }, void 0, s(P.default, {}))) : s('a', { href: this.props.subjectUrl, className: 'gr-hyperlink gr-hyperlink--bold', onClick: this.showMoreClicked }, void 0, this.seeMoreCommentsText())) : null; },
      renderComments() {
        const e = this; const t = this.state.showPagination ? this.state.comments : u.default.takeRight(this.state.comments, R); return u.default.map(t, t => i.default.createElement(h.default, n({
          key: t.uri, subjectKey: e.props.subjectKey, subject: e.props.subject, showTimestamp: e.props.showTimestamp,
        }, t)));
      },
      render() {
        const e = (0, N.default)(this.withBemModifiers('gr-comments'), 'gr-box', 'gr-box--hiddenOverflow', 'u-defaultType'); return this.state.numComments > 0 ? s('div', { className: e }, void 0, this.state.showPagination ? null : this.renderSeeMoreComments(), this.renderComments(), this.state.showPagination ? s('div', { className: 'u-topGrayBorder' }, void 0, s(g.default, {
          subjectKey: this.props.subjectKey, totalSize: this.state.numComments, currentPageNumber: this.state.currentPage, perPage: 10, changePageAction: this.showCommentsForPage, className: 'gr-paginationLinks__links',
        })) : null) : null;
      },
    });
  }, {
    '../../react_actions/comment_actions': 28, '../../react_mixins/gr_reflux': 236, '../../react_stores/comments_store': 244, '../gr_component_factory': 108, '../pagination_links': 152, '../shared/gr_prop_types': 180, '../spinner': 195, './comment': 84, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  87: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../shared/gr_prop_types'); const p = o(c); const f = e('../spinner'); const m = o(f); const h = e('../flagged_resources/flag_for_abuse_link'); const _ = o(h); const g = e('../time/relative_time'); const v = o(g); const y = e('../dot_separated_elements'); const b = o(y); const k = e('../../react_actions/comment_actions'); const S = o(k); const P = e('../../react_stores/user_agent_capabilities_store'); const T = o(P); const w = e('../../modules/env_utils'); const N = o(w); r.default = d.default.createClass({
      displayName: 'CommentRightSideInformation',
      mixins: [l.default.connect(T.default, 'userAgentCapabilities')],
      propTypes: {
        showTimestamp: a.default.PropTypes.bool, isHoveringOnComment: a.default.PropTypes.bool, deletableByCurrentUser: a.default.PropTypes.bool.isRequired, subject: p.default.commentSubject().isRequired, uri: a.default.PropTypes.string.isRequired, subjectKey: a.default.PropTypes.string.isRequired, createdAt: p.default.date.isRequired, flagForAbuseUrl: a.default.PropTypes.string.isRequired,
      },
      getDefaultProps() { return { showTimestamp: !0, isHoveringOnComment: !1 }; },
      getInitialState() { return { showCommentDeletingSpinner: !1 }; },
      deleteComment() { const e = { subject: this.props.subject, subjectKey: this.props.subjectKey }; window.confirm('Are you sure you want to delete this comment?') && (this.setState({ showCommentDeletingSpinner: !0 }), S.default.deleteComment(this.props.subjectKey, this.props.uri, e)); },
      getDeleteLink() {
        return this.props.deletableByCurrentUser ? this.state.showCommentDeletingSpinner ? a.default.createElement(m.default, { ref: 'spinner' }) : a.default.createElement('a', {
          className: 'gr-comment__deleteLink gr-hyperlink--naked gr-hyperlink', ref: 'deleteLink', onClick: this.deleteComment, 'aria-label': 'Delete comment',
        }, 'Delete') : void 0;
      },
      getFlag() { const e = `${this.props.flagForAbuseUrl}&return_url=${encodeURIComponent(N.default.getLocationUrl())}`; return n(_.default, { flagForAbuseUrl: e }); },
      getTimestamp() { return this.props.showTimestamp ? n('small', { className: 'gr-comment__timestamp' }, void 0, n(v.default, { time: this.props.createdAt })) : void 0; },
      getRightSideElements() { const e = []; return this.state.userAgentCapabilities.touch ? (e.push(this.getDeleteLink()), e.push(this.getFlag()), e.push(this.getTimestamp())) : this.props.isHoveringOnComment ? (e.push(this.getDeleteLink()), e.push(this.getFlag())) : e.push(this.getTimestamp()), e; },
      render() { return n('div', { className: 'gr-comment__rightSideInformation' }, void 0, n(b.default, { elements: this.getRightSideElements() })); },
    });
  }, {
    '../../modules/env_utils': 13, '../../react_actions/comment_actions': 28, '../../react_stores/user_agent_capabilities_store': 262, '../dot_separated_elements': 89, '../flagged_resources/flag_for_abuse_link': 105, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../spinner': 195, '../time/relative_time': 200, react: 'react', reflux: 'reflux',
  }],
  88: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('./dot_separated_elements'); const p = o(c); const f = { SMALL: 'small', MEDIUM: 'medium', LARGE: 'large' }; const m = 5; r.default = l.default.createClass({
      displayName: 'CommunityRating',
      statics: { ICON_SIZES: f },
      propTypes: {
        rating: a.default.PropTypes.number.isRequired, size: a.default.PropTypes.oneOf([f.SMALL, f.MEDIUM, f.LARGE]), displayAvg: a.default.PropTypes.bool, displayAvgRatingText: a.default.PropTypes.bool, ratingsCount: a.default.PropTypes.number, textReviewsCount: a.default.PropTypes.number, publication: a.default.PropTypes.shape({ toBePublished: a.default.PropTypes.bool, date: a.default.PropTypes.string }), editions: a.default.PropTypes.shape({ countString: a.default.PropTypes.string, url: a.default.PropTypes.string }), className: a.default.PropTypes.string,
      },
      getDefaultProps() { return { displayAvg: !1, size: f.SMALL }; },
      wrapperClasses() { return (0, d.default)('communityRating__starsWrapper', { 'communityRating__starsWrapper--small': this.props.size === f.SMALL, 'communityRating__starsWrapper--medium': this.props.size === f.MEDIUM, 'communityRating__starsWrapper--large': this.props.size === f.LARGE }); },
      starClasses() { return (0, d.default)('communityRating__stars', { 'communityRating__stars--small': this.props.size === f.SMALL, 'communityRating__stars--medium': this.props.size === f.MEDIUM, 'communityRating__stars--large': this.props.size === f.LARGE }); },
      getRoundedRating(e) { const t = Math.floor(e); return e === t ? e : e - t < 0.5 ? t + 0.45 : t + 0.6; },
      renderRating() { const e = this.getRoundedRating(this.props.rating); const t = { width: `${e / m * 100}%` }; const r = `Rated ${this.props.rating.toFixed(2)} of ${m}`; const o = this.props.displayAvgRatingText === null ? this.props.displayAvg : this.props.displayAvgRatingText; return n('span', {}, void 0, n('div', { className: this.wrapperClasses() }, void 0, n('div', { className: this.starClasses(), style: t, 'aria-label': r })), this.props.displayAvg ? n('span', { className: 'gr-metaText' }, void 0, this.props.rating.toFixed(2), o ? ' avg. rating' : '') : null); },
      renderRatingsCount() { return n('span', { className: 'gr-metaText u-inlineBlock' }, void 0, this.props.ratingsCount.toLocaleString(), ' Ratings'); },
      renderTextReviewsCount() { return n('span', { className: 'gr-metaText u-inlineBlock' }, void 0, this.props.textReviewsCount.toLocaleString(), ' Reviews'); },
      renderPublicationDate() { return n('span', { className: 'gr-metaText u-inlineBlock' }, void 0, `${this.props.publication.toBePublished ? 'expected publication' : 'published'} ${this.props.publication.date}`); },
      renderEditionsCount() { return n('span', { className: 'gr-metaText' }, void 0, n('a', { className: 'gr-hyperlink gr-hyperlink--naked u-inlineBlock', href: this.props.editions.url }, void 0, this.props.editions.countString)); },
      render() { const e = (0, d.default)('communityRating', this.props.className); const t = `Rated ${this.props.rating.toFixed(2)} of ${m}`; const r = [this.renderRating()]; return this.props.ratingsCount && r.push(this.renderRatingsCount()), this.props.textReviewsCount && r.push(this.renderTextReviewsCount()), this.props.publication && this.props.publication.date && r.push(this.renderPublicationDate()), this.props.editions && this.props.editions.countString && r.push(this.renderEditionsCount()), n('div', { className: e, 'aria-label': t }, void 0, n(p.default, { elements: r })); },
    });
  }, {
    './dot_separated_elements': 89, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  89: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = e('./gr_component_factory'); const u = o(l); r.default = u.default.createClass({
      displayName: 'DotSeparatedElements', propTypes: { elements: a.default.PropTypes.arrayOf(a.default.PropTypes.oneOfType([a.default.PropTypes.element, a.default.PropTypes.string])).isRequired, separator: a.default.PropTypes.element }, getDefaultProps() { return { separator: n('span', {}, void 0, ' · ') }; }, joinElementsWithSeparator() { const e = this; const t = (0, i.compact)(this.props.elements); return (0, i.transform)(t, (r, o, n) => { r.push(o), n + 1 !== t.length && r.push(e.props.separator); }); }, render() { return n('span', { className: this.props.className }, void 0, (0, i.map)(this.joinElementsWithSeparator(), (e, t) => n('span', {}, t, e))); },
    });
  }, { './gr_component_factory': 108, lodash: 'lodash', react: 'react' }],
  90: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'DropDownList', propTypes: { showMoreLink: a.default.PropTypes.bool, moreLinkURL: a.default.PropTypes.string, moreLinkText: a.default.PropTypes.string }, getDefaultProps() { return { showMoreLink: !1, moreLinkURL: null, moreLinkText: '…More' }; }, render() { return n('div', {}, void 0, this.props.children, this.props.showMoreLink && this.props.moreLinkURL !== null ? n('a', { className: 'dropDownList__listItem--moreLink', href: this.props.moreLinkURL }, void 0, this.props.moreLinkText) : null); },
    });
  }, { './gr_component_factory': 108, react: 'react' }],
  91: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('./gr_component_factory'); const p = o(c); const f = e('../react_mixins/hover_intent'); const m = o(f); const h = e('classnames'); const _ = o(h); const g = e('react-onclickoutside'); const v = o(g); const y = e('../modules/keys'); const b = o(y); const k = e('../react_stores/user_agent_capabilities_store'); const S = o(k); const P = e('../modules/shared/touch_not_ready_helper'); const T = { HOVER: 'hover', CLICK: 'click' }; const w = { LEFT: 'left', RIGHT: 'right' }; const N = 100; const R = N; r.default = p.default.createClass({
      displayName: 'Dropdown',
      mixins: [m.default, v.default, d.default.connect(S.default, 'userAgentCapabilities')],
      propTypes: {
        alignment: a.default.PropTypes.oneOf(l.default.values(w)), fallbackUrl: a.default.PropTypes.string, onShowCallback: a.default.PropTypes.func, tooltipText: a.default.PropTypes.string, trigger: a.default.PropTypes.oneOfType([a.default.PropTypes.string, a.default.PropTypes.element]).isRequired, triggerEventType: a.default.PropTypes.oneOf(l.default.values(T)),
      },
      statics: { TriggerEventTypes: T },
      getTriggerEventType() { return this.state.userAgentCapabilities.touch ? T.CLICK : this.props.triggerEventType; },
      getInitialState() { return { dropdownOpen: !1 }; },
      getDefaultProps() { return { triggerEventType: T.CLICK, alignment: w.LEFT }; },
      hide() { this.setState({ dropdownOpen: !1 }); },
      show() { this.setState({ dropdownOpen: !0 }), this.props.onShowCallback && this.props.onShowCallback(); },
      toggle(e) { this.props.children && e.preventDefault(), this.state.dropdownOpen ? this.hide() : this.show(); },
      openList(e) { b.default.isDropdownOpenerKey(e.keyCode) ? (e.preventDefault(), b.default.isArrowDown(e.keyCode) ? this.show() : this.toggle(e)) : b.default.isDefaultCloserKey(e.keyCode) && (e.preventDefault(), this.hide()); },
      handleClickOutside() { this.state.userAgentCapabilities.touch || this.hide(); },
      handleMouseEnter() { this.onEnterIntent(this.show, N); },
      handleMouseLeave() { this.onLeaveIntent(this.hide, R); },
      handleTriggerClick(e) { return (0, P.acknowledgeEvent)(e), this.state.dropdownOpen && this.props.triggerEventType === T.HOVER && this.state.userAgentCapabilities.touch !== !0 ? void e.preventDefault() : void this.toggle(e); },
      triggerClasses() { return (0, _.default)(this.withBemModifiers(['dropdown__trigger']), { 'dropdown__trigger--buttonReset': l.default.isUndefined(this.props.fallbackUrl) }, { 'dropdown__trigger--triggerEventTypeHover': this.props.triggerEventType === T.HOVER }, { 'dropdown__trigger--personalNav': this.props.isInPersonalNav === 'true' }, { 'dropdown__trigger--personalNavActive': this.props.isInPersonalNav === 'true' && this.state.dropdownOpen }); },
      renderTriggerButton() {
        return n('button', {
          className: this.triggerClasses(), 'aria-haspopup': 'true', 'aria-expanded': this.state.dropdownOpen, onClick: this.handleTriggerClick, onKeyDown: this.openList, title: this.props.tooltipText, 'data-ux-click': this.props.isInPersonalNav === 'true',
        }, void 0, this.props.trigger);
      },
      renderTriggerLink() {
        return n('a', {
          className: this.triggerClasses(), href: this.props.fallbackUrl, onClick: this.handleTriggerClick, onKeyDown: this.openList, role: 'button', 'aria-haspopup': 'true', 'aria-expanded': this.state.dropdownOpen, title: this.props.tooltipText, 'data-ux-click': this.props.isInPersonalNav === 'true',
        }, void 0, this.props.trigger);
      },
      render() { const e = (0, _.default)(this.withBemModifiers('dropdown')); const t = (0, _.default)(this.withBemModifiers('dropdown__menu'), 'gr-box gr-box--withShadowLarge', { 'dropdown__menu--show': this.state.dropdownOpen }); const r = l.default.isUndefined(this.props.fallbackUrl) ? this.renderTriggerButton() : this.renderTriggerLink(); const o = n('div', { className: t, role: 'menu' }, void 0, this.props.children); switch (this.getTriggerEventType()) { case T.HOVER: return n('div', { className: e, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, void 0, r, o); case T.CLICK: return n('div', { className: e }, void 0, r, o); } },
    });
  }, {
    '../modules/keys': 16, '../modules/shared/touch_not_ready_helper': 21, '../react_mixins/hover_intent': 237, '../react_stores/user_agent_capabilities_store': 262, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react', 'react-onclickoutside': 'react-onclickoutside', reflux: 'reflux',
  }],
  92: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); r.default = a.default.createClass({ displayName: 'error_message.js', propTypes: { componentName: a.default.PropTypes.string.isRequired }, render() { return n('div', { className: 'gr-errorMessage' }, void 0, 'There was an issue rendering ', this.props.componentName); } });
  }, { react: 'react' }],
  93: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../../../../gr_component_factory'); const l = o(i); const u = e('../../../../shared/gr_prop_types'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('../../../../author/author_badge'); const m = o(f); r.default = l.default.createClass({
      displayName: 'UniversalSearchResultAuthor',
      propTypes: { result: d.default.searchResults.author().isRequired, onChooseResult: a.default.PropTypes.func.isRequired },
      render() {
        const e = this; const t = (0, p.default)('gr-mediaBox', 'gr-book--navbar', 'gr-hyperlink', 'gr-hyperlink--naked', 'gr-hyperlink--noUnderline', 'searchResults__result'); return n('a', {
          className: t, href: '#', 'aria-label': 'Search result', onClick() { e.props.onChooseResult(e.props.result); },
        }, void 0, n('img', { className: 'gr-mediaBox__media', src: this.props.result.object.profileImage, alt: 'Author pic' }), n('div', { className: 'gr-mediaBox__desc' }, void 0, n('div', { className: 'gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType' }, void 0, this.props.result.object.name)), n('div', { className: 'gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar' }, void 0, 'Author', a.default.createElement(m.default, this.props.result.object)));
      },
    });
  }, {
    '../../../../author/author_badge': 72, '../../../../gr_component_factory': 108, '../../../../shared/gr_prop_types': 180, classnames: 'classnames', react: 'react',
  }],
  94: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../../../../gr_component_factory'); const l = o(i); const u = e('../../../../shared/gr_prop_types'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('../../../../author/author_badge'); const m = o(f); r.default = l.default.createClass({
      displayName: 'UniversalSearchResultBook',
      propTypes: { result: d.default.searchResults.book().isRequired, onChooseResult: a.default.PropTypes.func.isRequired },
      render() {
        const e = this; const t = (0, p.default)('gr-mediaBox', 'gr-book--navbar', 'gr-hyperlink', 'gr-hyperlink--naked', 'gr-hyperlink--noUnderline', 'gr-universalSearchResults__result'); return n('a', {
          className: t, href: '#', 'aria-label': 'Search result', onClick() { e.props.onChooseResult(e.props.result); },
        }, void 0, n('img', { className: 'gr-mediaBox__media', src: this.props.result.object.imageUrl, alt: 'Cover pic' }), n('div', { className: 'gr-mediaBox__desc' }, void 0, n('div', { className: 'gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType' }, void 0, this.props.result.object.title), n('div', { className: 'gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar' }, void 0, 'by ', this.props.result.object.authorName, a.default.createElement(m.default, this.props.result.object))));
      },
    });
  }, {
    '../../../../author/author_badge': 72, '../../../../gr_component_factory': 108, '../../../../shared/gr_prop_types': 180, classnames: 'classnames', react: 'react',
  }],
  95: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../../../../gr_component_factory'); const l = o(i); const u = e('../../../../shared/gr_prop_types'); const d = o(u); const c = e('classnames'); const p = o(c); r.default = l.default.createClass({
      displayName: 'UniversalSearchResultUser',
      propTypes: { result: d.default.searchResults.user().isRequired, onChooseResult: a.default.PropTypes.func.isRequired },
      render() {
        const e = this; const t = (0, p.default)('gr-mediaBox', 'gr-book--navbar', 'gr-hyperlink', 'gr-hyperlink--naked', 'gr-hyperlink--noUnderline', 'searchResults__result'); return n('a', {
          className: t, href: '#', 'aria-label': 'Search result', onClick() { e.props.onChooseResult(e.props.result); },
        }, void 0, n('img', { className: 'gr-mediaBox__media', src: this.props.result.object.profileImage, alt: 'User pic' }), n('div', { className: 'gr-mediaBox__desc' }, void 0, n('div', { className: 'gr-universalSearchResult__mainText gr-universalSearchResult__mainText--navbar u-defaultType' }, void 0, this.props.result.object.name)), n('div', { className: 'gr-universalSearchResult__secondaryText gr-universalSearchResult__secondaryText--navbar' }, void 0, 'Goodreads User'));
      },
    });
  }, {
    '../../../../gr_component_factory': 108, '../../../../shared/gr_prop_types': 180, classnames: 'classnames', react: 'react',
  }],
  96: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../../../gr_component_factory'); const c = o(d); const p = e('reflux'); const f = o(p); const m = e('react-onclickoutside'); const h = o(m); const _ = e('classnames'); const g = o(_); const v = e('../../../../modules/keys'); const y = o(v); const b = e('../../../../react_stores/experimental/search/universal_search_store_factory'); const k = o(b); const S = e('./universal_search_results'); const P = o(S); const T = e('../../../spinner'); const w = o(T); const N = e('../../../../react_mixins/factory_store_mixin'); const R = o(N); r.default = c.default.createClass({
      displayName: 'UniversalSearch',
      mixins: [h.default, f.default.ListenerMixin, (0, R.default)(k.default)],
      propTypes: {
        onChooseResult: i.default.PropTypes.func.isRequired, maxResults: i.default.PropTypes.number, searchPath: i.default.PropTypes.string.isRequired, closeAfterResultChosen: i.default.PropTypes.bool, autocompleteUrl: i.default.PropTypes.string.isRequired,
      },
      getDefaultProps() { return { maxResults: 7, closeAfterResultChosen: !1 }; },
      hide() { this.actions.setShowResultsContainer(!1); },
      handleClickOutside() { this.hide(); },
      handleSearch(e) { this.actions.search(e.target.value, this.props.autocompleteUrl, this.props.maxResults); },
      handleClick(e) { u.default.isEmpty(this.state.query) || this.handleSearch(e); },
      handleChoice(e) { this.props.onChooseResult(e), this.props.closeAfterResultChosen && this.hide(); },
      handleKeyPress(e) { const t = Math.min(this.props.maxResults, this.state.results.length); y.default.isEnter(e.keyCode) && this.state.activeResult !== null ? (this.handleChoice(this.state.activeResult), e.preventDefault()) : y.default.isArrowDown(e.keyCode) ? this.actions.selectNextResult(t) : y.default.isArrowUp(e.keyCode) ? this.actions.selectPreviousResult(t) : y.default.isEscape(e.keyCode) && this.hide(); },
      renderInputIcon() { const e = (0, g.default)('searchBox__icon', { 'searchBox__icon--loadingSpinner': this.state.showLoadingSpinner, 'searchBox__icon--magnifyingGlass gr-iconButton': !this.state.showLoadingSpinner }); return this.state.showLoadingSpinner ? s('span', { className: e }, void 0, s(w.default, {})) : s('button', { type: 'submit', className: e, 'aria-label': 'Search' }); },
      render() {
        const e = (0, g.default)(this.withBemModifiers('searchBox')); const t = (0, g.default)(this.withBemModifiers('searchBox__input')); return s('div', { acceptCharset: 'UTF-8', className: e, onKeyDown: this.handleKeyPress }, void 0, s('form', {
          autoComplete: 'off', action: this.props.searchPath, className: 'searchBox__form', role: 'search', 'aria-label': 'Search for books to add to your shelves',
        }, void 0, s('input', {
          className: t, autoComplete: 'off', name: 'q', type: 'text', placeholder: 'Search books/authors', 'aria-label': 'Search books', onClick: this.handleClick, onChange: this.handleSearch, 'aria-controls': 'searchResults',
        }), this.renderInputIcon(), this.state.showResultsContainer ? i.default.createElement(P.default, n({}, this.props, this.state, { onChooseResult: this.handleChoice, mouseoverAction: this.actions.selectSpecificResult })) : null));
      },
    });
  }, {
    '../../../../modules/keys': 16, '../../../../react_mixins/factory_store_mixin': 235, '../../../../react_stores/experimental/search/universal_search_store_factory': 246, '../../../gr_component_factory': 108, '../../../spinner': 195, './universal_search_results': 97, classnames: 'classnames', lodash: 'lodash', react: 'react', 'react-onclickoutside': 'react-onclickoutside', reflux: 'reflux',
  }],
  97: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('../../../drop_down_list'); const p = o(c); const f = e('./results/universal_search_result_book'); const m = o(f); const h = e('./results/universal_search_result_author'); const _ = o(h); const g = e('./results/universal_search_result_user'); const v = o(g); const y = e('../../../shared/gr_prop_types'); const b = o(y); const k = e('../../../gr_component_factory'); const S = o(k); const P = { author: _.default, book: m.default, friend: v.default }; r.default = S.default.createClass({
      displayName: 'UniversalSearchResults',
      propTypes: {
        maxResults: a.default.PropTypes.number.isRequired, query: a.default.PropTypes.string, results: a.default.PropTypes.array.isRequired, shelfName: a.default.PropTypes.string, searchPath: a.default.PropTypes.string, onChooseResult: a.default.PropTypes.func.isRequired, mouseoverAction: a.default.PropTypes.func.isRequired, activeResult: a.default.PropTypes.oneOfType([b.default.searchResults.author(), b.default.searchResults.book(), b.default.searchResults.user()]),
      },
      renderLastSearchResultItem(e) { const t = (0, d.default)('gr-buttonAsLink', 'searchResults__lastItem', this.withBemElement('gr-universalSearchResults', 'lastItem')); return n('button', { className: t, type: 'submit' }, void 0, e); },
      renderResult(e) { const t = this; const r = P[e.type]; return n('div', { className: (0, d.default)('gr-universalSearchResults__item', { 'gr-universalSearchResults__item--active': e === this.props.activeResult }), onMouseOver() { t.props.mouseoverAction(e); } }, e.object.id, n(r, { result: e, onChooseResult: this.props.onChooseResult })); },
      render() {
        const e = this; const t = (0, d.default)(this.withBemModifiers('gr-universalSearchResults'), 'gr-box', 'gr-box--withShadow'); return n('div', {
          className: t, id: `universalSearchResults${this.props.query}${this.props.results.length}`, 'aria-live': 'polite', 'aria-label': 'Universal search results',
        }, void 0, n(p.default, { maxListItems: this.props.maxResults }, void 0, this.props.results.length > 0 ? l.default.map(l.default.slice(this.props.results, 0, this.props.maxResults), t => e.renderResult(t)) : this.renderLastSearchResultItem(`Search for "${this.props.query}"…`), this.props.results.length > 0 ? this.renderLastSearchResultItem(`See all results for "${this.props.query}"`) : null));
      },
    });
  }, {
    '../../../drop_down_list': 90, '../../../gr_component_factory': 108, '../../../shared/gr_prop_types': 180, './results/universal_search_result_author': 93, './results/universal_search_result_book': 94, './results/universal_search_result_user': 95, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  98: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e,
          type: t,
          key: void 0 === o ? null : `${o}`,
          ref: null,
          props: r,
          _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('./gr_component_factory'); const d = o(u); const c = e('reflux'); const p = o(c); const f = e('./genre_checkbox'); const m = o(f); const h = e('./../react_actions/modal_actions'); const _ = o(h); const g = e('../react_actions/favorite_genres_form_actions'); const v = o(g); const y = e('../react_stores/favorite_genres_form_store'); const b = o(y); r.default = d.default.createClass({
      displayName: 'FavoriteGenresForm', mixins: [p.default.connect(b.default, 'favoriteGenresFormStore')], propTypes: { favoriteGenres: a.default.PropTypes.array, genres: a.default.PropTypes.array.isRequired }, getDefaultProps() { return { favoriteGenres: [] }; }, onSubmit(e) { v.default.submitSelectedGenres(), _.default.closeModal(), e.preventDefault(); }, renderGenreCheckboxes() { const e = this; return n('div', { className: 'gr-genresForm__checkBoxes' }, void 0, l.default.map(this.props.genres, t => n(m.default, { genre: t.name, isFavorited: l.default.includes(e.state.favoriteGenresFormStore.selectedGenres, t.name) }, t.name))); }, render() { return n('div', { className: 'gr-genresForm' }, void 0, n('div', { className: 'gr-genresForm__title' }, void 0, 'Follow Your Favorite Genres'), n('div', { className: 'gr-genresForm__description' }, void 0, 'We use your favorite genres to make better book recommendations and tailor what you see in your Updates feed.'), n('form', { action: '/user/edit_fav_genres', 'data-remote': 'true', method: 'post' }, void 0, this.renderGenreCheckboxes(), n('button', { type: 'submit', onClick: this.onSubmit, className: 'gr-button gr-button--large' }, void 0, 'Save'))); },
    });
  }, {
    '../react_actions/favorite_genres_form_actions': 34, '../react_stores/favorite_genres_form_store': 247, './../react_actions/modal_actions': 39, './genre_checkbox': 107, './gr_component_factory': 108, lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  99: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('./dot_separated_elements'); const l = o(i); const u = e('react'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('./click_tracking_wrapper'); const m = o(f); const h = e('../modules/ads/click_tracking_helper'); const _ = 'Read More'; r.default = a.default.createClass({
      displayName: 'FeaturedContentBlog',
      propTypes: {
        blog: d.default.PropTypes.shape({
          likeCount: d.default.PropTypes.number.isRequired, commentCount: d.default.PropTypes.number.isRequired, imageUrl: d.default.PropTypes.string.isRequired, blogUrl: d.default.PropTypes.string.isRequired, title: d.default.PropTypes.string.isRequired,
        }).isRequired,
        isMobile: d.default.PropTypes.bool,
        isInline: d.default.PropTypes.bool,
      },
      defaultProps: { isMobile: !1, isInline: !1 },
      renderImage() { const e = (0, p.default)('featuredContentImageBody__imageLink', { 'featuredContentImageBody__imageLink--inline': this.props.isInline }); const t = (0, p.default)('featuredContentImageBody__image', { featuredContentImageBody__imageMobile: this.props.isMobile }); if (this.props.blog.imageUrl) { const r = n('a', { className: e, href: this.props.blog.blogUrl }, void 0, n('img', { className: t, src: this.props.blog.imageUrl, alt: `${this.props.blog.title}` })); return n(m.default, { trackingOptions: h.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_image, children: r }); } return null; },
      renderTitle() { const e = (0, p.default)('featuredContentImageBody__title', { 'featuredContentImageBody__title--mobile': this.props.isMobile, 'featuredContentImageBody__title--inline': this.props.isInline }); const t = n('a', { href: this.props.blog.blogUrl, className: e }, void 0, this.props.blog.title); return n(m.default, { trackingOptions: h.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_title, children: t }); },
      renderLikesText(e) { return n('span', { className: 'gr-metaText featuredContentImageBody__likes' }, void 0, e, ' likes'); },
      renderCommentsText(e) { return n('span', { className: 'gr-metaText featuredContentImageBody__comments' }, void 0, e, ' comments'); },
      renderReadMore() { const e = (0, p.default)('gr-button', 'featuredContentImageBody__button', { 'featuredContentImageBody__button--mobile': this.props.isMobile, 'featuredContentImageBody__button--inline': this.props.isInline }); const t = n('a', { href: this.props.blog.blogUrl, className: e }, void 0, _); return n(m.default, { trackingOptions: h.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_blog_button, children: t }); },
      renderLikesAndComments() { return n('div', { className: 'featuredContentImageBody__likesAndComments' }, void 0, this.renderLikesAndCommentsText()); },
      renderLikesAndCommentsText() { const e = this.props.blog; const t = this.renderLikesText(e.likeCount); const r = this.renderCommentsText(e.commentCount); return e.likeCount && e.commentCount ? n(l.default, { elements: [t, r] }) : e.likeCount ? t : e.commentCount ? r : null; },
      render() { return this.props.isInline ? n('div', { className: 'featuredContentImageBody--inline genreFeatureContainer' }, void 0, this.renderImage(), n('div', {}, void 0, this.renderTitle(), this.renderLikesAndComments(), this.renderReadMore())) : n('div', { className: 'featuredContentImageBody genreFeatureContainer' }, void 0, this.renderTitle(), this.renderImage(), this.renderLikesAndComments(), this.renderReadMore()); },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './click_tracking_wrapper': 82, './dot_separated_elements': 89, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  100: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('./gr_component_factory'); const i = o(a); const l = e('./book'); const u = o(l); const d = e('./book_description'); const c = o(d); const p = e('react'); const f = o(p); const m = e('./click_tracking_wrapper'); const h = o(m); const _ = e('classnames'); const g = o(_); const v = e('../modules/ads/click_tracking_helper'); r.default = i.default.createClass({
      displayName: 'FeaturedContentBook', propTypes: { book: f.default.PropTypes.object.isRequired, isMobile: f.default.PropTypes.bool, isInline: f.default.PropTypes.bool }, defaultProps: { isMobile: !1, isInline: !1 }, renderImage() { const e = s('img', { alt: this.props.book.title, src: this.props.book.imageUrl, className: (0, g.default)('featuredContentBook__imageMobile') }); const t = s('a', { href: this.props.book.bookCoverUrl || this.props.book.bookUrl, className: (0, g.default)('featuredContentBook__imageLinkMobile') }, void 0, e); return s(h.default, { trackingOptions: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_image, children: t }); }, renderDescription() { return this.props.book.description ? s(c.default, { bookDescription: this.props.book.description, className: (0, g.default)('featuredContentBook__description'), bookDescriptionTargetingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_description }) : null; }, renderLearnMore() { const e = (0, g.default)('gr-button', 'featuredContentBook__button', { 'featuredContentBook__button--mobile': this.props.isMobile, 'featuredContentBook__button--inline': this.props.isInline }); const t = s('a', { href: this.props.book.bookUrl, className: e }, void 0, 'Learn more'); return s(h.default, { trackingOptions: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_button, children: t }); }, render() { return this.props.isMobile ? s('div', { className: (0, g.default)('featuredContentBook', 'featuredContentBook--mobile') }, void 0, this.renderImage(), this.renderDescription(), this.renderLearnMore()) : s('div', { className: 'featuredContentBook' }, void 0, f.default.createElement(u.default, n({}, this.props.book, { bookImageTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_image, bookTitleTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_title, authorLinkTrackingData: v.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_book_author }), this.renderDescription(), this.renderLearnMore())); },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './book': 74, './book_description': 75, './click_tracking_wrapper': 82, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  101: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('./click_tracking_wrapper'); const p = o(c); const f = e('../modules/ads/click_tracking_helper'); const m = 'Learn More'; r.default = a.default.createClass({
      displayName: 'FeaturedContentGenre',
      propTypes: { genre: l.default.PropTypes.shape({ imageUrl: l.default.PropTypes.string.isRequired, genreUrl: l.default.PropTypes.string.isRequired, tagline: l.default.PropTypes.string.isRequired }).isRequired, isMobile: l.default.PropTypes.bool, isInline: l.default.PropTypes.bool },
      defaultProps: { isMobile: !1, isInline: !1 },
      renderImage() { const e = (0, d.default)('featuredContentImageBody__image', { featuredContentImageBody__imageMobile: this.props.isMobile }); const t = (0, d.default)('featuredContentImageBody__imageLink', { 'featuredContentImageBody__imageLink--inline': this.props.isInline }); if (this.props.genre.imageUrl) { const r = n('a', { className: t, href: this.props.genre.genreUrl }, void 0, n('img', { className: e, src: this.props.genre.imageUrl, alt: `${this.props.genre.tagline}` })); return n(p.default, { trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_image, children: r }); } return null; },
      renderTitle() {
        const e = this.props.isMobile ? (0, d.default)('featuredContentImageBody__title', 'featuredContentImageBody__title--mobile') : 'featuredContentImageBody__title';
        const t = n('a', { href: this.props.genre.genreUrl, className: e }, void 0, this.props.genre.tagline); return n(p.default, { trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_title, children: t });
      },
      renderCTAButton() { const e = (0, d.default)('gr-button gr-microsite-link', { featuredContentImageBody__button: this.props.isMobile, 'u-marginTopMedium': !this.props.isInline }); const t = n('a', { href: this.props.genre.genreUrl, className: e }, void 0, m); return n(p.default, { trackingOptions: f.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_genre_button, children: t }); },
      render() { return this.props.isInline ? n('div', { className: 'featuredContentImageBody--inline genreFeatureContainer' }, void 0, this.renderImage(), n('div', {}, void 0, this.renderTitle(), this.renderCTAButton())) : n('div', { className: 'featuredContentImageBody genreFeatureContainer' }, void 0, this.renderTitle(), this.renderImage(), this.props.isMobile ? this.renderCTAButton() : null); },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './click_tracking_wrapper': 82, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  102: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('./gr_component_factory'); const i = o(a); const l = e('./book'); const u = o(l); const d = e('react'); const c = o(d); const p = e('./time/relative_time'); const f = o(p); const m = e('./user_content/expandable_html'); const h = o(m); const _ = e('./shared/gr_prop_types'); const g = o(_); const v = e('./click_tracking_wrapper'); const y = o(v); const b = e('../modules/ads/click_tracking_helper'); r.default = i.default.createClass({
      displayName: 'FeaturedContentGiveaway',
      propTypes: {
        giveaway: c.default.PropTypes.shape({
          book: c.default.PropTypes.object.isRequired, description: g.default.expandableHtml().isRequired, endAt: c.default.PropTypes.string.isRequired, giveawayUrl: c.default.PropTypes.string.isRequired,
        }).isRequired,
        isMobile: c.default.PropTypes.bool,
      },
      defaultProps: { isMobile: !1 },
      render() {
        const e = this.props.giveaway; return s('div', { className: 'featuredContentGiveaway' }, void 0, c.default.createElement(u.default, n({}, e.book, {
          bookImageTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_image, bookTitleTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_title, authorLinkTrackingData: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_author, bemModifiers: this.props.isMobile ? 'mobile' : '',
        }), c.default.createElement(h.default, n({}, e.description, { className: 'featuredContentGiveaway__description' })), s('div', { className: 'featuredContentGiveaway__expiration gr-metaText' }, void 0, 'Ends ', s(f.default, { time: e.endAt, longFormat: !0 })), s(y.default, { trackingOptions: b.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_giveaway_button }, void 0, s('a', { href: e.giveawayUrl, className: 'gr-button' }, void 0, 'Learn more'))));
      },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './book': 74, './click_tracking_wrapper': 82, './gr_component_factory': 108, './shared/gr_prop_types': 180, './time/relative_time': 200, './user_content/expandable_html': 204, react: 'react',
  }],
  103: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); const u = e('lodash'); const d = e('./click_tracking_wrapper'); const c = o(d); const p = e('../modules/ads/click_tracking_helper'); const f = e('classnames'); const m = o(f); r.default = a.default.createClass({
      displayName: 'FeaturedContentList', propTypes: { list: l.default.PropTypes.shape({ listUrl: l.default.PropTypes.string.isRequired, title: l.default.PropTypes.string.isRequired, topBooksCovers: l.default.PropTypes.array.isRequired }).isRequired, isMobile: l.default.PropTypes.bool, isInline: l.default.PropTypes.bool }, defaultProps: { isMobile: !1, isInline: !1 }, renderBookCovers() { const e = this; const t = this.props.isMobile ? 'featuredContentList__bookCoverImage--allowOverlap' : 'featuredContentList__bookCoverImage--noOverlap'; const r = (0, m.default)('featuredContentList__bookCovers', { 'featuredContentList__bookCovers--inline': this.props.isInline }); return n('div', { className: r }, void 0, n(c.default, { trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_books }, void 0, n('a', { href: this.props.list.listUrl }, void 0, (0, u.map)(this.props.list.topBooksCovers, r => n('div', { className: 'featuredContentList__bookCoverContainer' }, r, n('img', { src: r, alt: e.props.list.title, className: t })))))); }, renderCTA() { return this.props.isMobile ? n(c.default, { trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_button }, void 0, n('a', { className: 'gr-button gr-button--fullWidth u-marginBottomSmall u-marginTopSmall', href: this.props.list.listUrl }, void 0, 'View list')) : null; }, render() { const e = this.props.list; const t = (0, m.default)('featuredContentList', { 'featuredContentList--inline': this.props.isInline }); const r = (0, m.default)('u-bold featuredContentList__title', { 'featuredContentList__title--inline': this.props.isInline }); const o = (0, m.default)('u-bold featuredContentList__listDetailsContainer', { 'featuredContentList__listDetailsContainer--inline': this.props.isInline }); const s = (0, m.default)('u-bold featuredContentList__listDetails', { 'featuredContentList__listDetails--inline': this.props.isInline }); return n('div', { className: t }, void 0, this.renderBookCovers(), n(c.default, { trackingOptions: p.TRACKED_CLASSES_PREMIUM_CAMPAIGN.fcm_list_title }, void 0, n('a', { href: e.listUrl, className: r }, void 0, e.title)), n('div', { className: o }, void 0, n('div', { className: s }, void 0, e.numBooks.toLocaleString(), ' books · ', e.numVoters.toLocaleString(), ' voters')), this.renderCTA()); },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, './click_tracking_wrapper': 82, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  104: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); const u = e('./featured_content_blog'); const d = o(u); const c = e('./featured_content_book'); const p = o(c); const f = e('./featured_content_list'); const m = o(f); const h = e('./featured_content_genre'); const _ = o(h); const g = e('./featured_content_giveaway'); const v = o(g); const y = e('./sponsored_footer'); const b = o(y); const k = e('classnames'); const S = o(k); r.default = a.default.createClass({
      displayName: 'FeaturedContentModule',
      propTypes: {
        type: l.default.PropTypes.string.isRequired, resource: l.default.PropTypes.object.isRequired, sponsorName: l.default.PropTypes.string, isSponsored: l.default.PropTypes.bool, isMobile: l.default.PropTypes.bool, hasBottomBorder: l.default.PropTypes.bool, isInline: l.default.PropTypes.bool,
      },
      defaultProps: { isMobile: !1, isInline: !1, hasBottomBorder: !1 },
      headerText() { switch (this.props.type) { case 'Blog': return 'Featured Blog Post'; case 'Book': return 'Featured Book'; case 'Giveaway': return 'Featured Giveaway'; case 'List': return 'Featured List'; case 'Genre': return 'Featured Genre'; default: return 'Featured Content'; } },
      renderContent() { switch (this.props.type) { case 'Blog': return this.renderBlog(); case 'Book': return this.renderBook(); case 'Giveaway': return this.renderGiveaway(); case 'List': return this.renderList(); case 'Genre': return this.renderGenre(); default: return null; } },
      renderHeader() { if (this.props.isMobile) return n('h3', { className: 'gr-h3' }, void 0, this.headerText()); const e = (0, S.default)('featuredContentModule__header', { 'featuredContentModule__header--inline': this.props.isInline }); return n('div', { className: e }, void 0, this.headerText()); },
      renderFooter() { return this.props.isSponsored ? n(b.default, { isSponsored: !0, sponsoredName: this.props.sponsorName }) : null; },
      renderBlog() { return n(d.default, { blog: this.props.resource, isMobile: this.props.isMobile, isInline: this.props.isInline }); },
      renderBook() { return n(p.default, { book: this.props.resource, isMobile: this.props.isMobile, isInline: this.props.isInline }); },
      renderGiveaway() { return n(v.default, { giveaway: this.props.resource, isMobile: this.props.isMobile }); },
      renderList() { return n(m.default, { list: this.props.resource, isMobile: this.props.isMobile, isInline: this.props.isInline }); },
      renderGenre() { return n(_.default, { genre: this.props.resource, isMobile: this.props.isMobile, isInline: this.props.isInline }); },
      render() { const e = (0, S.default)('featuredContentModule', { 'featuredContentModule--mobile': this.props.isMobile, 'featuredContentModule--inline': this.props.isInline }); let t = ''; return this.props.isMobile && (t = this.props.hasBottomBorder ? 'featuredContentBorder__underline' : 'featuredContentBorder__overline'), n('div', { className: t }, void 0, n('section', { className: e }, void 0, this.renderHeader(), this.renderContent(), this.renderFooter())); },
    });
  }, {
    './featured_content_blog': 99, './featured_content_book': 100, './featured_content_genre': 101, './featured_content_giveaway': 102, './featured_content_list': 103, './gr_component_factory': 108, './sponsored_footer': 196, classnames: 'classnames', react: 'react',
  }],
  105: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('classnames'); const d = o(u); r.default = l.default.createClass({ displayName: 'FlagForAbuseLink', propTypes: { flagForAbuseUrl: a.default.PropTypes.string.isRequired }, render() { const e = (0, d.default)('gr-metaText', 'gr-hyperlink--naked', 'gr-hyperlink', 'gr-flag'); return n('a', { href: this.props.flagForAbuseUrl, className: e }, void 0, 'Flag'); } });
  }, { '../gr_component_factory': 108, classnames: 'classnames', react: 'react' }],
  106: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { const r = {}; for (const o in e)t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]); return r; } const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('lodash'); const u = e('classnames'); const d = o(u); const c = e('./close_button'); const p = o(c); const f = {
      ERROR: 'error', INFO: 'info', NOTICE_DEPRECATED: 'notice', SUCCESS: 'success', WARNING: 'warning',
    }; r.default = i.default.createClass({
      displayName: 'FlashMessage',
      propTypes: { category: i.default.PropTypes.oneOf((0, l.values)(f)), message: i.default.PropTypes.string.isRequired, dismissable: i.default.PropTypes.bool },
      getDefaultProps() { return { undismissable: !1 }; },
      getInitialState() { return { isVisible: !0 }; },
      hideMessage() { this.setState({ isVisible: !1 }); },
      flashMessageMarkup() { return { __html: this.props.message }; },
      renderCloseButton() { return this.props.undismissable ? void 0 : s(p.default, { action: this.hideMessage, className: 'gr-flashMessage__dismissButton' }); },
      render() {
        const e = this.props; const t = e.category; e.message, n(e, ['category', 'message']); if ((0, l.isEmpty)(this.props.message)) return null; const r = (0, d.default)('gr-flashMessage', {
          'gr-flashMessage--dismissed': !this.state.isVisible, 'gr-flashMessage--error': t === f.ERROR, 'gr-flashMessage--info': t === f.INFO, 'gr-flashMessage--warning': t === f.WARNING, 'gr-flashMessage--success': t === f.SUCCESS,
        }); return s('div', { className: r, role: 'alert' }, void 0, this.renderCloseButton(), s('span', { dangerouslySetInnerHTML: this.flashMessageMarkup() }));
      },
    });
  }, {
    './close_button': 83, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  107: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('../react_actions/favorite_genres_form_actions'); const p = o(c); r.default = l.default.createClass({
      displayName: 'GenreCheckbox',
      propTypes: { genre: a.default.PropTypes.string, isFavorited: a.default.PropTypes.bool.isRequired },
      onCheckboxChange() { this.props.isFavorited ? p.default.deselectFavoriteGenre(this.props.genre) : p.default.selectFavoriteGenre(this.props.genre); },
      render() {
        const e = (0, d.default)('gr-genresForm__genreLabel', { 'gr-genresForm__genreLabel--selected': this.props.isFavorited }); return n('label', { className: e }, void 0, n('input', { name: `favorites[${this.props.genre}]`, type: 'hidden', value: 'false' }), a.default.createElement('input', {
          name: `favorites[${this.props.genre}]`, type: 'checkbox', value: 'true', 'data-genre': this.props.genre, ref: 'checkbox', defaultChecked: this.props.isFavorited, onChange: this.onCheckboxChange,
        }), n('span', { className: 'u-verticalAlignMiddle u-marginLeftTiny' }, void 0, this.props.genre));
      },
    });
  }, {
    '../react_actions/favorite_genres_form_actions': 34, './gr_component_factory': 108, classnames: 'classnames', react: 'react',
  }],
  108: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = e('react'); const i = o(a); const l = e('../react_mixins/bem_modifiers'); const u = o(l); const d = e('../react_mixins/deploy_service'); const c = o(d); const p = e('react-addons-pure-render-mixin'); const f = o(p); const m = e('../react_mixins/tracking_data_attributes_mixin'); const h = o(m); const _ = e('./error_message'); const g = o(_); const v = e('../modules/env_utils'); const y = o(v); const b = e('../modules/gr_error_reporting'); const k = o(b); const S = [f.default, u.default, c.default, h.default]; const P = { showErrorMessage: y.default.DEVELOPMENT === 'production' }; const T = function (e, t) { const r = e.render; t = (0, s.merge)({}, P, t), e.render = function () { try { return r.apply(this, arguments); } catch (o) { return k.default.notifyException(o, `Failed to render ${e.displayName}`), t.showErrorMessage ? n(g.default, { componentName: e.displayName }) : null; } }; }; const w = function (e) { if ((0, s.isEmpty)(e)) throw new Error('GrError: Missing component name. Please make sure `displayName` attribute is defined while creating a React class using GrComponentFactory.createClass.'); }; const N = function (e) { const t = e.mixins || []; e.mixins = t.concat(S); }; const R = function (e, t) { return N(e), y.default.TEST !== 'production' && T(e, t), e; }; r.default = { createClass(e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return w(e.displayName), i.default.createClass(R(e, t)); } };
  }, {
    '../modules/env_utils': 13, '../modules/gr_error_reporting': 15, '../react_mixins/bem_modifiers': 233, '../react_mixins/deploy_service': 234, '../react_mixins/tracking_data_attributes_mixin': 238, './error_message': 92, lodash: 'lodash', react: 'react', 'react-addons-pure-render-mixin': 'react-addons-pure-render-mixin',
  }],
  109: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shape_icon'); const d = o(u); const c = e('../../modules/shape_icon_values'); r.default = l.default.createClass({
      displayName: 'GroupIcon',
      propTypes: { group: a.default.PropTypes.shape({ name: a.default.PropTypes.string.isRequired, iconUrl: a.default.PropTypes.string.isRequired, url: a.default.PropTypes.string.isRequired }).isRequired, includeLink: a.default.PropTypes.bool, size: a.default.PropTypes.oneOf([c.ICON_SIZES.SMALL, c.ICON_SIZES.MEDIUM, c.ICON_SIZES.LARGE]) },
      getDefaultProps() { return { includeLink: !1, size: c.ICON_SIZES.SMALL }; },
      render() {
        const e = this.props.group; return n(d.default, {
          imageUrl: e.iconUrl, imageAlt: e.name, linkUrl: e.url, shape: c.ICON_SHAPES.ROUND_SQUARE, size: this.props.size, includeLink: this.props.includeLink,
        });
      },
    });
  }, {
    '../../modules/shape_icon_values': 19, '../gr_component_factory': 108, '../shape_icon': 175, react: 'react',
  }],
  110: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal_trigger'); const d = o(u); const c = e('../modal'); const p = o(c); const f = e('../spinner'); const m = o(f); const h = e('../../modules/ajax/ajax_helper'); r.default = l.default.createClass({
      displayName: 'PreviewBroadcast', propTypes: { previewBroadcastURL: a.default.PropTypes.string.isRequired }, getInitialState() { return { fetching: !1 }; }, requestPreview(e, t) { const r = this; (0, h.httpRequest)(this.props.previewBroadcastURL, { method: 'GET', data: { message: { subject: e, body: t } } }).done((e) => { r.setState({ modalHTML: { __html: e }, fetching: !1 }); }).fail(() => { r.setState({ modalHTML: { __html: '<div>There was an error processing your request.</div>' }, fetching: !1 }); }); }, handlePreview() { const e = this; const t = document.getElementById('message_body').value; const r = document.getElementById('message_subject').value; this.setState({ fetching: !0 }, () => e.requestPreview(r, t)); }, renderModal() { return this.state.fetching ? null : n(p.default, { id: 'previewBroadcast', centered: !0, bemModifiers: 'previewBroadcast' }, void 0, n('div', { className: 'modalMessageBox' }, void 0, n('h3', { className: 'modalMessageBox__headerText' }, void 0, 'Message Preview'), n('div', { dangerouslySetInnerHTML: this.state.modalHTML }))); }, renderModalTrigger() { return this.state.fetching ? n(m.default, { isSmall: !0 }) : n(d.default, { id: 'previewBroadcast' }, void 0, n('button', { className: 'gr-buttonAsLink previewBroadcast__linkText', onClick: this.handlePreview }, void 0, '(preview)')); }, render() { const e = this.renderModal(); const t = this.renderModalTrigger(); return n('div', { className: 'previewBroadcast' }, void 0, n('div', { className: 'previewBroadcast__openPreviewContainer' }, void 0, t, e)); },
    });
  }, {
    '../../modules/ajax/ajax_helper': 5, '../gr_component_factory': 108, '../modal': 146, '../modal_trigger': 147, '../spinner': 195, react: 'react',
  }],
  111: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3;
        if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.BrowseMenu = void 0; const s = e('react'); const a = e('lodash'); const i = e('./favorite_genres_pane'); const l = o(i); const u = e('./featured_genres'); const d = o(u); const c = e('./genre_list'); const p = o(c); const f = e('../menu_link'); const m = o(f); const h = e('./primary_nav_menu'); const _ = o(h); const g = e('../../react_actions/featured_genres_actions'); const v = o(g); const y = function (e) { const t = e.signedIn; const r = e.favoriteGenres; const o = e.genres; const s = function (e) { return `siteHeader__spotlight siteHeader__spotlight--${e}`; }; return t ? (0, a.isEmpty)(r) ? n('div', { className: s('withoutSubMenu') }, void 0, n(l.default, { genres: o })) : n('div', { className: s('browseMenu') }, void 0, n(d.default, { favoriteGenres: r })) : n('div', { className: s('withoutSubMenu') }, void 0, n(p.default, { genres: o })); }; y.propTypes = { signedIn: s.PropTypes.bool, favoriteGenres: s.PropTypes.array, genres: s.PropTypes.array.isRequired }; const b = r.BrowseMenu = function (e) {
      return n(_.default, {
        tabName: 'siteHeaderBrowseMenu', trigger: n('span', {}, void 0, 'Browse ▾'), fallbackUrl: e.browseUrl, bemModifiers: ['siteHeaderBrowseMenu'], onShowCallback() { v.default.trackMenuImpression(), v.default.requestFeaturedBooks(); },
      }, void 0, n('div', { className: 'siteHeader__browseMenuDropdown' }, void 0, n('ul', { className: 'siteHeader__subNav' }, void 0, n(m.default, { href: e.recommendationsUrl, linkText: 'Recommendations', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.choiceAwardsUrl, linkText: 'Choice Awards', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.genresIndexUrl, linkText: 'Genres', linkClass: 'siteHeader__subNavLink siteHeader__subNavLink--genresIndex' }), n(m.default, { href: e.giveawayUrl, linkText: 'Giveaways', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.newReleasesUrl, linkText: 'New Releases', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.listUrl, linkText: 'Lists', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.browseUrl, linkText: 'Explore', linkClass: 'siteHeader__subNavLink' }), n(m.default, { href: e.newsUrl, linkText: 'News & Interviews', linkClass: 'siteHeader__subNavLink' }), n('div', { className: 'siteHeader__sponsoredFillSpace' }), n(m.default, { href: 'https://www.goodreads.com/audible', linkText: n('div', {}, void 0, n('div', { className: 'siteHeader__navDivider' }), n('span', {}, void 0, 'Listen with Audible')), linkClass: 'siteHeader__sponsoredNavLink' }), n('div', { className: 'siteHeader__sponsoredLabel' }, void 0, n('span', { className: 'siteHeader__sponsoredIcon googleNativeAd__sponsoredBadgeIcon featuredGenres__sponsoredIcon' }), n('span', { className: 'featuredGenres__sponsoredLabel siteHeader__sponsoredText' }, void 0, 'Sponsored'))), React.createElement(y, e)));
    }; b.propTypes = {
      adId: s.PropTypes.string, browseUrl: s.PropTypes.string.isRequired, choiceAwardsUrl: s.PropTypes.string.isRequired, genresIndexUrl: s.PropTypes.string.isRequired, giveawayUrl: s.PropTypes.string.isRequired, listUrl: s.PropTypes.string.isRequired, newReleasesUrl: s.PropTypes.string.isRequired, recommendationsUrl: s.PropTypes.string.isRequired, newsUrl: s.PropTypes.string.isRequired,
    }, r.default = b;
  }, {
    '../../react_actions/featured_genres_actions': 35, '../menu_link': 145, './favorite_genres_pane': 116, './featured_genres': 117, './genre_list': 120, './primary_nav_menu': 130, lodash: 'lodash', react: 'react',
  }],
  112: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('reflux'); const l = (o(i), e('../gr_component_factory')); const u = o(l); const d = e('../menu_link'); const c = o(d); const p = e('./primary_nav_menu'); const f = o(p); r.default = u.default.createClass({
      displayName: 'CommunityMenu',
      propTypes: {
        communityUrl: a.default.PropTypes.string.isRequired, featuredAskAuthorUrl: a.default.PropTypes.string.isRequired, groupsUrl: a.default.PropTypes.string.isRequired, discussionsUrl: a.default.PropTypes.string.isRequired, quotesUrl: a.default.PropTypes.string.isRequired, eventUrl: a.default.PropTypes.string, peopleUrl: a.default.PropTypes.string, quizzesUrl: a.default.PropTypes.string, storiesUrl: a.default.PropTypes.string, triviaUrl: a.default.PropTypes.string,
      },
      renderMenuLink(e, t) { return e ? n(c.default, { href: e, linkText: t, linkClass: 'siteHeader__subNavLink' }) : null; },
      render() { const e = n('span', {}, void 0, 'Community ▾'); return n(f.default, { tabName: 'siteHeaderCommunityMenu', trigger: e, fallbackUrl: this.props.communityUrl }, void 0, n('ul', { className: 'siteHeader__subNav' }, void 0, this.renderMenuLink(this.props.groupsUrl, 'Groups'), this.renderMenuLink(this.props.discussionsUrl, 'Discussions'), this.renderMenuLink(this.props.quotesUrl, 'Quotes'), this.renderMenuLink(this.props.featuredAskAuthorUrl, 'Ask the Author'), this.renderMenuLink(this.props.triviaUrl, 'Trivia'), this.renderMenuLink(this.props.quizzesUrl, 'Quizzes'), this.renderMenuLink(this.props.storiesUrl, 'Creative Writing'), this.renderMenuLink(this.props.peopleUrl, 'People'), this.renderMenuLink(this.props.eventUrl, 'Events'))); },
    });
  }, {
    '../gr_component_factory': 108, '../menu_link': 145, './primary_nav_menu': 130, react: 'react', reflux: 'reflux',
  }],
  113: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../gr_component_factory'); const a = o(s); const i = e('../../shared/gr_prop_types'); const l = o(i); const u = e('append-query'); const d = o(u); const c = e('../../../modules/shape_icon_values'); const p = e('../../time/relative_time'); const f = o(p); const m = e('../../group/group_icon'); const h = o(m); const _ = e('../../../analytics/url_tracking_params'); r.default = a.default.createClass({ displayName: 'DiscussionsGroupBanner', propTypes: { group: l.default.group() }, render() { const e = this.props.group; return n('a', { href: (0, d.default)(e.url, { ref: _.URLTrackingParams.DISCUSSIONS_PANE_GROUP }), 'aria-label': `Visit your group ${this.props.group.name}`, className: 'gr-hyperlink\n                          gr-hyperlink--naked\n                          gr-hyperlink--noUnderline' }, void 0, n('div', { className: 'gr-mediaFlexbox\n                              gr-mediaFlexbox--alignItemsCenter\n                              gr-headerDiscussions__groupBanner' }, void 0, n('div', { className: 'gr-mediaFlexbox__media' }, void 0, n(h.default, { group: e, size: c.ICON_SIZES.SMALL })), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-headerDiscussions__groupTitle' }, void 0, e.name), n('small', {}, void 0, 'Active ', n(f.default, { time: e.lastActiveAt, longFormat: !0 }))))); } });
  }, {
    '../../../analytics/url_tracking_params': 2, '../../../modules/shape_icon_values': 19, '../../gr_component_factory': 108, '../../group/group_icon': 109, '../../shared/gr_prop_types': 180, '../../time/relative_time': 200, 'append-query': 'append-query',
  }],
  114: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../gr_component_factory'); const a = o(s); const i = e('../../shared/gr_prop_types'); const l = o(i); const u = e('append-query'); const d = o(u); const c = e('moment'); const p = o(c); const f = e('../../time/relative_time'); const m = o(f); const h = e('../../dot_separated_elements'); const _ = o(h); const g = e('../../../analytics/url_tracking_params'); r.default = a.default.createClass({
      displayName: 'DiscussionsTopic', propTypes: { topic: l.default.topic() }, getTitleAriaLabel() { let e = void 0; return e = this.props.topic.newPosts ? `New comments in topic ${this.props.topic.title}` : `Topic ${this.props.topic.title}`, e += this.props.topic.folder ? ` in folder ${this.props.topic.folder.name}.` : '.', e += ` ${(0, p.default)(this.props.topic.updatedAt).fromNow()}.`, this.props.topic.newPosts && (e += ` ${this.props.topic.newPosts}.`), e; }, getTopicUrl() { const e = this.props.topic.newCommentsUrl ? this.props.topic.newCommentsUrl : this.props.topic.url; return (0, d.default)(e, { ref: g.URLTrackingParams.DISCUSSIONS_PANE_DISCUSSION }); }, renderFolder() { return this.props.topic.folder ? n('span', { className: 'gr-headerDiscussions__topicFolderTitle' }, void 0, 'in ', this.props.topic.folder.name) : null; }, renderPosts() { return this.props.topic.newPosts ? n('div', { className: 'gr-smallAlert' }, void 0, this.props.topic.newPosts) : n('small', {}, void 0, this.props.topic.totalPosts); }, render() { const e = this.props.topic; const t = [this.renderPosts(), n('small', {}, void 0, n(m.default, { time: e.updatedAt, longFormat: !0 }))]; return n('a', { className: 'gr-headerDiscussions__topic\n                         gr-hyperlink\n                         gr-hyperlink--noUnderline', href: this.getTopicUrl(), 'aria-label': this.getTitleAriaLabel() }, void 0, n('span', { className: 'gr-headerDiscussions__topicTitle' }, void 0, e.title), ' ', this.renderFolder(), n('div', { className: 'gr-headerDiscussions__posts' }, void 0, n(_.default, { elements: t, separator: n('small', { className: 'u-marginLeftTiny u-marginRightTiny' }, void 0, '·') }))); },
    });
  }, {
    '../../../analytics/url_tracking_params': 2, '../../dot_separated_elements': 89, '../../gr_component_factory': 108, '../../shared/gr_prop_types': 180, '../../time/relative_time': 200, 'append-query': 'append-query', moment: 'moment',
  }],
  115: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('reflux'); const i = o(a); const l = e('lodash'); const u = e('append-query'); const d = o(u); const c = e('../gr_component_factory'); const p = o(c); const f = e('../dropdown'); const m = o(f); const h = e('../../react_actions/discussions_pane_actions'); const _ = o(h); const g = e('../../react_stores/group_store'); const v = o(g); const y = e('./discussions/group_banner'); const b = o(y); const k = e('./discussions/topic'); const S = o(k); const P = e('../spinner'); const T = o(P); const w = e('../shape_icon'); const N = o(w); const R = e('../../analytics/url_tracking_params'); r.default = p.default.createClass({
      mixins: [i.default.connect(v.default, 'groupStore')],
      displayName: 'DiscussionsPane',
      propTypes: { discussionsUrl: s.PropTypes.string.isRequired, groupsUrl: s.PropTypes.string.isRequired },
      getGroupState() { return this.state.groupStore; },
      renderAllUnreadPostsLink(e) { const t = `All unread posts in group ${e.name}`; return n('a', { className: 'gr-headerDiscussions__moreDiscussionsLink gr-hyperlink u-textAlignCenter', 'aria-label': t, href: (0, d.default)(e.allUnreadPostsUrl, { ref: R.URLTrackingParams.DISCUSSIONS_PANE_GROUP_ALL_UNREAD_POSTS }) }, void 0, 'All unread posts'); },
      renderDiscussionsList() { const e = this; return (0, l.map)(this.getGroupState().groups, t => n('div', {}, `discussionsGroup${t.group.id}`, n(b.default, { group: t.group }), (0, l.map)(t.topics, e => n(S.default, { topic: e }, `discussionsTopic${e.id}`)), e.renderAllUnreadPostsLink(t.group))); },
      renderSparseState() { const e = this.getGroupState().sparse; return n('div', { className: 'gr-headerDiscussions u-defaultType' }, void 0, n('h3', { className: 'siteHeader__heading siteHeader__dropdownHeading' }, void 0, 'Group Discussions'), n('div', {}, void 0, n('div', { className: 'gr-headerDiscussions__sparseBody' }, void 0, n('div', { className: 'gr-headerDiscussions__groupsExplanation' }, void 0, 'Want to connect with readers who love the same books as you? Goodreads has a group for almost any interest.'), n('div', { className: 'gr-mediaFlexbox gr-headerDiscussions__testimonial' }, void 0, n('div', { className: 'gr-mediaFlexbox__media' }, void 0, n(N.default, { imageUrl: e.groupModeratorImageUrl, imageAlt: 'Moderator of a book group' })), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-headerDiscussions__testimonialQuote' }, void 0, '"I\'ve been reading more since I became involved with groups. I especially love reading challenges…"'), n('div', { className: 'gr-headerDiscussions__testimonialQuoteAttribution' }, void 0, '—Moderator of a book group'), n('a', { className: 'gr-hyperlink', href: (0, d.default)(e.groupsWithReadingChallengesUrl, { ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_READING_CHALLENGES }) }, void 0, 'See groups with reading challenges'))), n('div', { className: 'gr-mediaFlexbox gr-headerDiscussions__testimonial' }, void 0, n(N.default, { className: 'gr-mediaFlexbox__media', imageUrl: e.groupMemberImageUrl, imageAlt: 'Member of a group' }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-headerDiscussions__testimonialQuote' }, void 0, '"When I first joined a group, I finally felt like I had friends interested in the same books as me."'), n('div', { className: 'gr-headerDiscussions__testimonialQuoteAttribution' }, void 0, '—Member of a group'), n('a', { className: 'gr-hyperlink', href: (0, d.default)(e.popularGroupsUrl, { ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_POPULAR }) }, void 0, 'See popular groups'))))), n('div', { className: 'u-topGrayBorder gr-headerDiscussions__moreDiscussionsLink u-textAlignCenter u-marginTopSmall' }, void 0, n('a', { className: 'gr-hyperlink', href: (0, d.default)(e.allGroupsUrl, { ref: R.URLTrackingParams.DISCUSSIONS_PANE_SPARSE_ALL }) }, void 0, 'View all groups'))); },
      renderPaneContents() { const e = this.getGroupState(); return e.errorMessage ? n('div', { className: 'dropdown__container\n                             gr-headerDiscussions\n                             u-paddingTopBottomXSmall\n                             u-textAlignCenter' }, void 0, e.errorMessage) : e.sparse ? this.renderSparseState() : (0, l.isEmpty)(e.groups) ? n('div', { className: 'dropdown__container\n                             gr-headerDiscussions\n                             u-paddingTopBottomXSmall\n                             u-textAlignCenter' }, void 0, n(T.default, {})) : n('section', { className: 'dropdown__container' }, void 0, n('div', { className: 'siteHeader__dropdownHeading' }, void 0, n('h3', { className: 'siteHeader__heading siteHeader__dropdownHeader' }, void 0, 'Group Discussions'), n('a', { className: 'u-displayBlock gr-hyperlink', href: (0, d.default)(this.props.discussionsUrl, { discussion_filter: 'groups', ref: R.URLTrackingParams.DISCUSSIONS_PANE_ALL_DISCUSSIONS }) }, void 0, 'View all group discussions')), n('div', { className: 'gr-headerDiscussions gr-box gr-box--forceScrollBar' }, void 0, this.renderDiscussionsList())); },
      render() {
        const e = n('span', { className: 'headerPersonalNav__icon\n                       headerPersonalNav__icon--discussions', 'aria-label': 'My group discussions' }); return n(m.default, {
          trigger: e, triggerEventType: m.default.TriggerEventTypes.CLICK, fallbackUrl: this.getGroupState().sparse ? this.props.groupsUrl : (0, d.default)(this.props.discussionsUrl, { discussion_filter: 'groups' }), tooltipText: 'My group discussions', bemModifiers: 'discussions', isInPersonalNav: 'true', onShowCallback: _.default.openPane,
        }, void 0, this.renderPaneContents());
      },
    });
  }, {
    '../../analytics/url_tracking_params': 2, '../../react_actions/discussions_pane_actions': 31, '../../react_stores/group_store': 251, '../dropdown': 91, '../gr_component_factory': 108, '../shape_icon': 175, '../spinner': 195, './discussions/group_banner': 113, './discussions/topic': 114, 'append-query': 'append-query', lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  116: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal_trigger'); const d = o(u); r.default = l.default.createClass({ displayName: 'FavoriteGenresPane', propTypes: { favoriteGenres: a.default.PropTypes.array, genres: a.default.PropTypes.array.isRequired }, render() { return n('div', { className: 'favoriteGenresPane' }, void 0, n('div', { className: 'favoriteGenresPane__title' }, void 0, 'What do you like to read?'), n('div', { className: 'favoriteGenresPane__description' }, void 0, 'Choose your favorite genres to get personalized book recommendations.'), n('div', { className: 'favoriteGenresPane__buttonContainer' }, void 0, n(d.default, { id: 'favGenres' }, void 0, n('button', { className: 'gr-button gr-button--dark' }, void 0, 'Choose Favorite Genres'))), n('a', { href: '/genres', className: 'favoriteGenresPane__browseGenres' }, void 0, 'Browse Genres')); } });
  }, { '../gr_component_factory': 108, '../modal_trigger': 147, react: 'react' }],
  117: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('./featured_genres_book'); const p = o(c); const f = e('./featured_genres_list'); const m = o(f); const h = e('../spinner'); const _ = o(h); const g = e('../../react_stores/featured_genres_store'); const v = o(g); const y = e('../../react_stores/user_agent_capabilities_store'); const b = o(y); const k = e('./../tab_content'); o(k); r.default = d.default.createClass({
      displayName: 'FeaturedGenres', mixins: [l.default.connect(v.default, 'featuredGenres'), l.default.connect(b.default, 'userAgentCapabilities')], renderBooks() { if (this.state.userAgentCapabilities.touch === !0) { const e = this.state.featuredGenres.featuredGenreBookInfo[0]; return n('div', { className: 'featuredGenres__genreSpotlight' }, e.genre.name, n(p.default, { book: e.book, genre: e.genre, alwaysShown: !0 })); } return a.default.map(this.state.featuredGenres.featuredGenreBookInfo, e => n('div', { className: 'featuredGenres__genreSpotlight' }, e.genre.name, n(p.default, { book: e.book, genre: e.genre }))); }, render() { window.innerWidth; return this.state.featuredGenres.featuredGenreBookInfo ? n('div', { className: 'featuredGenres' }, void 0, n('span', { className: 'featuredGenres__genreList' }, void 0, n(m.default, { genres: a.default.pluck(this.state.featuredGenres.featuredGenreBookInfo, 'genre') })), this.renderBooks()) : this.state.featuredGenres.errorMessage ? n('span', {}, void 0, this.state.featuredGenres.errorMessage) : n('div', { className: 'featuredGenres featuredGenres--sparse' }, void 0, n(_.default, {})); },
    });
  }, {
    '../../react_stores/featured_genres_store': 249, '../../react_stores/user_agent_capabilities_store': 262, '../gr_component_factory': 108, '../spinner': 195, './../tab_content': 199, './featured_genres_book': 118, './featured_genres_list': 119, lodash: 'lodash', reflux: 'reflux',
  }],
  118: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('../gr_component_factory'); const u = o(l); const d = e('../shared/gr_prop_types'); const c = o(d); const p = e('./../book'); const f = o(p); const m = e('./../community_rating'); const h = o(m); const _ = e('./../tab_content'); const g = o(_); const v = e('./../user_content/truncated_html'); const y = o(v); const b = e('../want_to_read/want_to_read_button'); const k = o(b); const S = e('lodash'); const P = e('../../analytics/origins'); r.default = u.default.createClass({
      displayName: 'FeaturedGenresBook',
      propTypes: { alwaysShown: i.default.PropTypes.bool, genre: i.default.PropTypes.shape({ name: i.default.PropTypes.string.isRequired, url: i.default.PropTypes.string.isRequired }).isRequired, book: c.default.book().isRequired },
      renderBookDescription() { return (0, S.isUndefined)(this.props.book.description) ? null : s('div', { className: 'featuredGenres__bookDescription' }, void 0, i.default.createElement(y.default, this.props.book.description)); },
      renderBook() {
        const e = this.props.genre; return s('div', { className: 'featuredGenres__book' }, void 0, s('div', { className: 'siteHeader__heading siteHeader__title siteHeader__title--secondary' }, void 0, `Among Most Read This Week in ${e.name}`), s('div', { className: 'u-marginTopSmall' }, void 0, i.default.createElement(f.default, n({}, this.props.book, { key: this.props.book.bookId, size: p.VALID_BOOK_SIZES.LARGE }), s(h.default, { rating: parseFloat(this.props.book.avgRating), displayAvg: !0 }), s('div', { className: 'featuredGenres__bookWantToReadButton' }, void 0, s(k.default, {
          bookTitle: this.props.book.title, uniqueId: (0, S.random)(1e6).toString(), bookId: this.props.book.bookId, origin: P.ShelvedBookOrigin.BROWSE_SPOTLIGHT, showMenu: !1,
        })), this.renderBookDescription())), s('a', { href: e.url, className: 'u-defaultType gr-hyperlink' }, void 0, `More in ${e.name}`));
      },
      render() { return this.props.alwaysShown === !0 ? this.renderBook() : s(g.default, { group: 'featuredGenres', name: `featuredGenre-${this.props.genre.name}` }, void 0, this.renderBook()); },
    });
  }, {
    '../../analytics/origins': 1, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../want_to_read/want_to_read_button': 218, './../book': 74, './../community_rating': 88, './../tab_content': 199, './../user_content/truncated_html': 208, lodash: 'lodash', react: 'react',
  }],
  119: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('classnames'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('react'); const d = o(u); const c = e('lodash'); const p = e('../dropdown'); const f = o(p); const m = e('../gr_component_factory'); const h = o(m); const _ = e('./../tab'); const g = o(_); const v = e('../../react_stores/user_agent_capabilities_store'); const y = o(v); const b = 8; r.default = h.default.createClass({
      displayName: 'FeaturedGenresList',
      mixins: [l.default.connect(y.default, 'userAgentCapabilities')],
      propTypes: { adId: d.default.PropTypes.string, genres: d.default.PropTypes.array.isRequired },
      onClick(e) { e.preventDefault(); },
      allGenresLink() { return n('li', { role: 'menuitem', className: 'genreList__genre' }, 'allGenres', n('a', { href: '/genres', className: 'siteHeader__subNavLink' }, void 0, 'All Genres')); },
      renderGenreLink(e, t) {
        const r = (0, a.default)(['genreList__genreLink', 'gr-hyperlink', 'gr-hyperlink--naked']); const o = n('a', { href: e.url, className: r }, void 0, e.name); return this.state.userAgentCapabilities.touch === !0 ? o : n(g.default, {
          group: 'featuredGenres', name: `featuredGenre-${e.name}`, triggerEventType: f.default.TriggerEventTypes.HOVER, initiallySelected: t,
        }, void 0, o);
      },
      renderFavoritesList() { const e = this; const t = (0, c.random)(0, this.props.genres.length - 1); const r = b; return n('div', { className: 'featuredGenres__list genreList genreList--sidebar' }, void 0, n('div', { className: 'siteHeader__title siteHeader__heading' }, void 0, n('span', { className: 'featuredGenres__listTitle' }, void 0, 'Favorite Genres')), n('ul', {}, void 0, (0, c.map)((0, c.take)(this.props.genres, r), (r, o) => n('li', { role: 'menuitem', className: 'genreList__genre' }, r.name, e.renderGenreLink(r, e.props.showSponsoredGenres ? !1 : o === t))), this.allGenresLink())); },
      render() { return n('div', {}, void 0, this.renderFavoritesList()); },
    });
  }, {
    '../../react_stores/user_agent_capabilities_store': 262, '../dropdown': 91, '../gr_component_factory': 108, './../tab': 198, classnames: 'classnames', lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  120: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); r.default = l.default.createClass({ displayName: 'GenreList', renderMoreGenresLink() { return n('li', { role: 'menuitem', className: 'genreList__genre' }, void 0, n('a', { href: '/genres', className: 'genreList__genreLink gr-hyperlink gr-hyperlink--naked' }, void 0, 'More Genres')); }, render() { for (var e = this, t = 10, r = [], o = this.props.genres.slice(0); r.length * t < this.props.genres.length;)r.push(o.splice(0, t)); const s = r.length; return n('div', { className: 'genreListContainer' }, void 0, n('div', { className: 'siteHeader__heading siteHeader__title' }, void 0, 'Genres'), a.default.map(r, (t, r) => n('ul', { className: 'genreList' }, `genreList${r}`, a.default.map(t, e => n('li', { role: 'menuitem', className: 'genreList__genre' }, e.name, n('a', { href: e.url, className: 'genreList__genreLink gr-hyperlink gr-hyperlink--naked' }, void 0, e.name))), s === r + 1 ? e.renderMoreGenresLink() : null))); } });
  }, { '../gr_component_factory': 108, lodash: 'lodash' }],
  121: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('../shared/cookies'); const i = o(a); const l = e('react'); const u = o(l); const d = e('../gr_component_factory'); const c = o(d); const p = e('classnames'); const f = o(p); const m = e('redux'); const h = e('react-redux'); const _ = e('redux-logger'); const g = o(_); const v = e('../../modules/shared/touch_not_ready_helper'); const y = e('../favorite_genres_form'); const b = o(y); const k = e('../modal'); const S = o(k); const P = e('../modal_trigger'); const T = o(P); const w = e('./personal_nav'); const N = o(w); const R = e('./personal_nav_drawer'); const M = o(R); const C = e('./primary_nav_menus'); const x = o(C); const A = e('./profile_menu_jewel'); const I = o(A); const L = e('./home_icon'); const U = o(L); const E = e('./header_logo'); const O = o(E); const B = e('../search/search_toggle'); const j = o(B); const F = e('./nav_search'); const q = o(F); const D = e('./primary_nav_separate_line'); const H = o(D); const G = e('../../react_reducers/header/header_reducer'); const $ = o(G); const z = e('../../modules/env_utils'); const W = o(z); const K = []; W.default.isDevelopment() && W.default.hasDom() && K.push((0, g.default)()); const V = (0, m.createStore)($.default, {}, m.applyMiddleware.apply(void 0, K)); r.default = c.default.createClass({
      displayName: 'Header',
      getInitialState() { return { scrolling: !1, userLikelyHasAccount: !1 }; },
      propTypes: {
        adId: u.default.PropTypes.string, autocomleteUrl: u.default.PropTypes.string, browseUrl: u.default.PropTypes.string, choiceAwardsUrl: u.default.PropTypes.string, communityUrl: u.default.PropTypes.string, editorsPicksUrl: u.default.PropTypes.string, eventUrl: u.default.PropTypes.string, discussionsUrl: u.default.PropTypes.string, favoriteGenres: u.default.PropTypes.array, friendIconUrl: u.default.PropTypes.string, genres: u.default.PropTypes.array.isRequired, genresIndexUrl: u.default.PropTypes.string, giveawayUrl: u.default.PropTypes.string, groupsUrl: u.default.PropTypes.string, featuredAskAuthorUrl: u.default.PropTypes.string, helpUrl: u.default.PropTypes.string, homeUrl: u.default.PropTypes.string, listUrl: u.default.PropTypes.string, messageIconUrl: u.default.PropTypes.string, myBooksUrl: u.default.PropTypes.string, myFriendsUrl: u.default.PropTypes.string, myGroupsUrl: u.default.PropTypes.string, myQuotesUrl: u.default.PropTypes.string, myReadingChallengeUrl: u.default.PropTypes.string, myRecsUrl: u.default.PropTypes.string, name: u.default.PropTypes.string, newReleasesUrl: u.default.PropTypes.string, notificationIconUrl: u.default.PropTypes.string, peopleUrl: u.default.PropTypes.string, preferences: u.default.PropTypes.object, profileImage: u.default.PropTypes.string, profileUrl: u.default.PropTypes.string, quizzesUrl: u.default.PropTypes.string, quotesUrl: u.default.PropTypes.string, recommendationsUrl: u.default.PropTypes.string, signedIn: u.default.PropTypes.bool, searchPath: u.default.PropTypes.string, signInUrl: u.default.PropTypes.string, signInWithReturnUrl: u.default.PropTypes.bool, signUpUrl: u.default.PropTypes.string, storiesUrl: u.default.PropTypes.string, tempFriendRequestCount: u.default.PropTypes.number, tempUnreadMessageCount: u.default.PropTypes.number, topFullImage: u.default.PropTypes.shape({ topFullImageUrl: u.default.PropTypes.string.isRequired, xs: u.default.PropTypes.object, md: u.default.PropTypes.object }), triviaUrl: u.default.PropTypes.string, logoUrl: u.default.PropTypes.string,
      },
      componentDidMount() { (i.default.get('p') || i.default.get('u')) && this.setState({ userLikelyHasAccount: !0 }); },
      handleScrollBegin() { this.setState({ scrolling: !0 }); },
      handleScrollEnd() { this.setState({ scrolling: !1 }); },
      render() {
        return s(h.Provider, { store: V }, void 0, s('header', {}, void 0, this.renderTopFullImage(), s('div', { className: 'siteHeader__topLine gr-box gr-box--withShadow' }, void 0, s('div', { className: 'siteHeader__contents' }, void 0, s('div', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--searchIcon' }, void 0, s(j.default, { toggleType: B.SEARCH_TOGGLE_TYPES.ICON })), this.renderHomeIcon(), u.default.createElement(O.default, this.props), s('nav', { className: 'siteHeader__primaryNavInline' }, void 0, u.default.createElement(x.default, this.props)), u.default.createElement(q.default, this.props), this.props.signedIn ? this.renderPersonalNav() : this.renderLoginLinks(), this.renderProfileDrawerTrigger(), this.renderModals(), this.renderPersonalNavDrawer())), u.default.createElement(H.default, this.props)));
      },
      renderHomeIcon() { return this.isFeatureEnabled('logo_doodle') ? u.default.createElement(U.default, this.props) : void 0; },
      renderPersonalNav() { return s('div', { className: 'siteHeader__personal' }, void 0, u.default.createElement(N.default, this.props)); },
      renderPersonalNavDrawer() { return u.default.createElement(M.default, this.props); },
      renderProfileDrawerTrigger() { if (this.props.signedIn) { const e = { viewableName: this.props.name, profileImage: this.props.profileImage, profileUrl: this.props.profileUrl }; return s('div', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--profileIcon' }, void 0, s('span', { className: 'headerPersonalNav', 'data-ux-click': !0, onClick: v.acknowledgeEvent }, void 0, s(T.default, { id: R.personalNavDrawerModalId }, void 0, u.default.createElement(I.default, n({}, this.props, { user: e }))))); } const t = (0, f.default)('gr-button', 'gr-button--dark'); return this.state.userLikelyHasAccount ? s('div', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--signUp' }, void 0, s('a', { href: this.getSignInUrl(), className: t, rel: 'nofollow' }, void 0, 'Sign in')) : s('div', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--signUp' }, void 0, s('a', { href: this.props.signUpUrl, className: t, rel: 'nofollow' }, void 0, 'Sign up')); },
      getSignInUrl() { const e = W.default.getCurrentPath(); return this.props.signInWithReturnUrl ? `${this.props.signInUrl}?returnurl=${e}` : this.props.signInUrl; },
      renderLoginLinks() { return s('ul', { className: 'siteHeader__personal' }, void 0, s('li', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--signedOut' }, void 0, s('a', { href: this.getSignInUrl(), rel: 'nofollow', className: 'siteHeader__topLevelLink' }, void 0, 'Sign In')), s('li', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--signedOut' }, void 0, s('a', { href: this.props.signUpUrl, rel: 'nofollow', className: 'siteHeader__topLevelLink' }, void 0, 'Join'))); },
      renderModals() { return this.props.signedIn ? s(S.default, { id: 'favGenres' }, void 0, s(b.default, { favoriteGenres: this.props.favoriteGenres, genres: this.props.genres })) : null; },
      renderTopFullImage() {
        return this.isFeatureEnabled('site_header_top_full_image') ? s('div', { className: 'siteHeader__topFullImageContainer' }, void 0, s('a', { className: 'siteHeader__topFullImageLink', href: this.props.topFullImage.topFullImageUrl }, void 0, s('picture', {}, void 0, s('source', { media: '(min-width: 768px)', srcSet: `${this.props.topFullImage.md['1x']} 1x, ${this.props.topFullImage.md['2x']} 2x` }), s('img', {
          alt: this.props.topFullImage.topFullImageAlt, className: 'siteHeader__topFullImage', src: this.props.topFullImage.xs['1x'], srcSet: `${this.props.topFullImage.xs['2x']} 2x`,
        })))) : null;
      },
    });
  }, {
    '../../modules/env_utils': 13, '../../modules/shared/touch_not_ready_helper': 21, '../../react_reducers/header/header_reducer': 240, '../favorite_genres_form': 98, '../gr_component_factory': 108, '../modal': 146, '../modal_trigger': 147, '../search/search_toggle': 174, '../shared/cookies': 179, './header_logo': 122, './home_icon': 124, './nav_search': 125, './personal_nav': 128, './personal_nav_drawer': 129, './primary_nav_menus': 131, './primary_nav_separate_line': 132, './profile_menu_jewel': 134, classnames: 'classnames', react: 'react', 'react-redux': 'react-redux', redux: 'redux', 'redux-logger': 'redux-logger',
  }],
  122: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); r.default = a.default.createClass({
      displayName: 'HeaderLogo',
      render() {
        return n('a', {
          href: this.props.logoActionUrl, className: this.isFeatureEnabled('logo_doodle') ? 'siteHeader__logo siteHeader__logo--doodle' : 'siteHeader__logo', 'aria-label': this.props.logoAltText, title: this.props.logoAltText,
        });
      },
    });
  }, { '../gr_component_factory': 108 }],
  123: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('../gr_component_factory'); const i = o(a); const l = e('reflux'); const u = o(l); const d = e('./header'); const c = o(d); const p = e('../../react_stores/current_user_store'); const f = o(p); const m = e('../../react_stores/favorite_genres_store'); const h = o(m); r.default = i.default.createClass({
      displayName: 'HeaderStoreConnector',
      mixins: [u.default.connect(f.default, 'currentUser'), u.default.connect(h.default, 'favoriteGenres')],
      render() {
        const e = this.state.currentUser.currentUser; const t = !s.default.isNull(e); const r = {
          adId: this.state.favoriteGenres.adId, signedIn: t, genres: this.state.favoriteGenres.allGenres, favoriteGenres: this.state.favoriteGenres.favoriteGenres,
        }; return t && s.default.merge(r, e), s.default.merge(r, this.props), React.createElement(c.default, r);
      },
    });
  }, {
    '../../react_stores/current_user_store': 245, '../../react_stores/favorite_genres_store': 248, '../gr_component_factory': 108, './header': 121, lodash: 'lodash', reflux: 'reflux',
  }],
  124: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); r.default = a.default.createClass({
      displayName: 'HomeIcon',
      render() {
        return n('div', { className: 'siteHeader__homeIconContainer' }, void 0, n('a', {
          href: this.props.defaultLogoActionUrl, className: 'siteHeader__homeIcon', 'aria-label': this.props.defaultLogoAltText, title: this.props.defaultLogoAltText,
        }));
      },
    });
  }, { '../gr_component_factory': 108 }],
  125: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../analytics/url_tracking_params'); const d = e('../../modules/env_utils'); const c = o(d); const p = e('../search/book_search'); const f = o(p); const m = e('../experimental/search/universal/universal_search'); const h = o(m); r.default = l.default.createClass({
      displayName: 'NavSearch',
      propTypes: {
        autocompleteUrl: a.default.PropTypes.string, autoFocus: a.default.PropTypes.bool, searchPath: a.default.PropTypes.string, bemModifiers: a.default.PropTypes.string,
      },
      getDefaultProps() { return { autoFocus: !1, bemModifiers: 'navbar' }; },
      onSearchSelection(e) { let t = null; t = this.isFeatureEnabled('universal_search') ? `${e.destination}?${u.URLTrackingParams.BOOK_SHOW_INTERACTION_PARAM}&${u.URLTrackingParams.FROM_SEARCH_PARAM}` : `${e.bookUrl}?${u.URLTrackingParams.BOOK_SHOW_INTERACTION_PARAM}&${u.URLTrackingParams.FROM_SEARCH_PARAM}`, c.default.setLocationUrl(t); },
      render() {
        return this.isFeatureEnabled('universal_search') ? n(h.default, {
          bemModifiers: this.props.bemModifiers, searchPath: this.props.searchPath, autocompleteUrl: this.props.autocompleteUrl, onChooseResult: this.onSearchSelection,
        }) : n(f.default, {
          autoFocus: this.props.autoFocus, bemModifiers: this.props.bemModifiers, searchPath: this.props.searchPath, autocompleteUrl: this.props.autocompleteUrl, onChooseResult: this.onSearchSelection,
        });
      },
    });
  }, {
    '../../analytics/url_tracking_params': 2, '../../modules/env_utils': 13, '../experimental/search/universal/universal_search': 96, '../gr_component_factory': 108, '../search/book_search': 170, react: 'react',
  }],
  126: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('lodash'); const l = e('../../modules/shared/image_registry'); const u = e('../../modules/to_sentence'); const d = o(u); const c = e('../user/user_icon'); const p = o(c); const f = e('../time/relative_time'); const m = o(f); const h = e('../shape_icon'); const _ = o(h); r.default = a.default.createClass({
      displayName: 'Notification', mixins: [d.default], propTypes: { notification: React.PropTypes.object.isRequired }, userLink(e) { return n('a', { href: e.profileUrl, className: 'u-defaultType' }, e.profileUrl, n('b', {}, void 0, e.viewableName)); }, userLinks: function g(e) { const t = this; const g = (0, i.map)(e.actors, e => t.userLink(e)); return e.moreActors ? this.sentenceJoin(g) : this.toSentence(g); }, renderActorIcon(e) { return e.actor ? n(p.default, { user: e.actor }) : n(_.default, { imageUrl: (0, l.getImages)().notificationFromGRIcon || '', imageAlt: 'Goodreads Notification' }); }, renderNewNotificationFlag(e) { return e.viewed ? void 0 : n('small', { className: 'gr-smallAlert u-marginRightTiny' }, void 0, 'New'); }, renderHistoryMessage(e) { return e.historyMessage ? n('small', { className: 'gr-notification__historyMessage' }, void 0, e.historyMessage) : void 0; }, render() { const e = this.props.notification; return e.error ? null : n('div', { className: 'gr-mediaBox gr-notification' }, void 0, n('div', { className: 'gr-mediaBox__media u-marginRightMedium' }, void 0, this.renderActorIcon(e)), n('div', { className: 'gr-mediaBox__desc u-defaultType' }, void 0, this.userLinks(e), !e.actor || e.moreActors ? '' : e.directlyAddressed ? ', ' : ' ', `${e.body} `, e.resource ? n('a', { className: 'gr-hyperlink', href: e.resource.url }, void 0, e.resource.text) : null, n('div', {}, void 0, this.renderNewNotificationFlag(e), n('small', {}, void 0, n(m.default, { time: e.createdAt, longFormat: !0 }))), n('div', {}, void 0, this.renderHistoryMessage(e)))); },
    });
  }, {
    '../../modules/shared/image_registry': 20, '../../modules/to_sentence': 23, '../gr_component_factory': 108, '../shape_icon': 175, '../time/relative_time': 200, '../user/user_icon': 202, lodash: 'lodash',
  }],
  127: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('reflux'); const p = o(c); const f = e('../spinner'); const m = o(f); const h = e('../dropdown'); const _ = o(h); const g = e('../../react_stores/notifications_store'); const v = o(g); const y = e('../../react_actions/notifications_actions'); const b = o(y); const k = e('./notification'); const S = o(k); r.default = d.default.createClass({
      displayName: 'Notifications',
      mixins: [p.default.connect(v.default, 'notificationsStore')],
      propTypes: { notificationIconUrl: a.default.PropTypes.string.isRequired, withDropdowns: a.default.PropTypes.bool },
      getDefaultProps() { return { withDropdowns: !0 }; },
      getStoreState() { return this.state.notificationsStore; },
      generateKey(e) { return e.actor ? `${e.actor.profileUrl}${e.createdAt}` : e.resource ? `${e.resource.url}${e.createdAt}` : `${e.body}${e.createdAt}`; },
      notificationsCountString() { const e = this.getStoreState(); return e.unreadCount + (e.unreadCountMore ? '+' : ''); },
      renderNotificationList() { const e = this; const t = this.getStoreState(); const r = t.notifications; return t.errorOccurred ? n('div', { className: 'dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse' }, void 0, n('span', {}, void 0, 'An error occurred loading your notifications')) : l.default.isUndefined(r) ? n('div', { className: 'dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse' }, void 0, n(m.default, {})) : l.default.isEmpty(r) ? n('div', { className: 'dropdown__container\n                        gr-notifications\n                        gr-notifications--sparse' }, void 0, n('span', {}, void 0, 'No notifications')) : n('section', { className: 'dropdown__container' }, void 0, n('a', { className: 'u-displayBlock gr-hyperlink gr-hyperlink--noUnderline', href: '/notifications' }, void 0, n('div', { className: 'siteHeader__dropdownHeading' }, void 0, n('h3', { className: 'siteHeader__heading siteHeader__dropdownHeader' }, void 0, 'Notifications'), n('span', {}, void 0, 'View all notifications'))), n('div', { className: 'gr-notifications gr-box gr-box--forceScrollBar' }, void 0, l.default.map(r, t => n(S.default, { notification: t }, e.generateKey(t))))); },
      render() {
        const e = this.getStoreState(); const t = n('span', { className: 'headerPersonalNav__icon\n                       headerPersonalNav__icon--notifications', 'aria-label': 'Notifications' }, void 0, e.unreadCount > 0 ? n('span', { className: 'headerPersonalNav__flag' }, void 0, this.notificationsCountString()) : null); return this.props.withDropdowns ? n('div', {}, void 0, n(_.default, {
          trigger: t, triggerEventType: _.default.TriggerEventTypes.CLICK, fallbackUrl: this.props.notificationIconUrl, tooltipText: 'Notifications', onShowCallback: b.default.requestNotifications, bemModifiers: 'notifications', isInPersonalNav: 'true',
        }, void 0, this.renderNotificationList())) : n('a', { href: this.props.notificationIconUrl, className: 'headerPersonalNav' }, void 0, t);
      },
    });
  }, {
    '../../react_actions/notifications_actions': 41, '../../react_stores/notifications_store': 254, '../dropdown': 91, '../gr_component_factory': 108, '../spinner': 195, './notification': 126, lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  128: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../gr_component_factory'); const c = o(d); const p = e('../dropdown'); const f = o(p); const m = e('./notifications'); const h = o(m); const _ = e('./profile_menu'); const g = o(_); const v = e('./profile_menu_jewel'); const y = o(v); const b = e('./discussions_pane'); const k = o(b); r.default = c.default.createClass({
      displayName: 'PersonalNav',
      propTypes: {
        author: i.default.PropTypes.shape({
          id: i.default.PropTypes.number, editProfileUrl: i.default.PropTypes.string, profileUrl: i.default.PropTypes.string, dashboardUrl: i.default.PropTypes.string,
        }),
        commentsUrl: i.default.PropTypes.string,
        discussionsUrl: i.default.PropTypes.string,
        editFavGenresUrl: i.default.PropTypes.string,
        includeProfileMenu: i.default.PropTypes.bool,
        groupInvitesCount: i.default.PropTypes.number,
        groupsUrl: i.default.PropTypes.string,
        messageIconUrl: i.default.PropTypes.string,
        myFriendsUrl: i.default.PropTypes.string,
        myQuotesUrl: i.default.PropTypes.string,
        myReadingChallengeUrl: i.default.PropTypes.string,
        name: i.default.PropTypes.string,
        pendingRecsCount: i.default.PropTypes.number,
        preferences: i.default.PropTypes.object,
        profileEditUrl: i.default.PropTypes.string,
        profileImage: i.default.PropTypes.string,
        profileUrl: i.default.PropTypes.string,
        signOutUrl: i.default.PropTypes.string,
        tempFriendRequestCount: i.default.PropTypes.number,
        tempUnreadMessageCount: i.default.PropTypes.number,
        withDropdowns: i.default.PropTypes.bool,
      },
      getDefaultProps() { return { includeProfileMenu: !0, withDropdowns: !0 }; },
      render() { const e = s('span', { className: 'headerPersonalNav__icon headerPersonalNav__icon--inbox', 'aria-label': 'Inbox' }, void 0, this.props.tempUnreadMessageCount > 0 ? s('span', { className: 'headerPersonalNav__flag' }, void 0, this.props.tempUnreadMessageCount) : null); const t = s('span', { className: 'headerPersonalNav__icon headerPersonalNav__icon--friendRequests', 'aria-label': 'Friend Requests' }, void 0, this.props.tempFriendRequestCount > 0 ? s('span', { className: 'headerPersonalNav__flag' }, void 0, this.props.tempFriendRequestCount) : null); return s('ul', { className: 'personalNav' }, void 0, s('li', { className: 'personalNav__listItem' }, void 0, this.renderNotifications()), this.isFeatureEnabled('nav_bar_discussions_pane') ? s('li', { className: 'personalNav__listItem' }, void 0, this.renderDiscussionsPane()) : null, s('li', { className: 'personalNav__listItem' }, void 0, s('a', { href: this.props.messageIconUrl, title: 'Messages', className: 'headerPersonalNav' }, void 0, e)), s('li', { className: 'personalNav__listItem' }, void 0, s('a', { href: this.props.friendIconUrl, title: 'Friends', className: 'headerPersonalNav' }, void 0, t)), this.renderProfileMenu()); },
      renderDiscussionsPane() { return this.props.withDropdowns === !0 ? s(k.default, { groupsUrl: this.props.groupsUrl, discussionsUrl: this.props.discussionsUrl }) : s('a', { href: this.props.discussionsUrl, className: 'headerPersonalNav' }, void 0, s('span', { className: 'headerPersonalNav__icon headerPersonalNav__icon--discussions', 'aria-label': 'My group discussions' })); },
      renderNotifications() { return s(h.default, { notificationIconUrl: this.props.notificationIconUrl, preferences: this.props.preferences, withDropdowns: this.props.withDropdowns }); },
      renderProfileName() { let e = this.props.name; return e.length > 23 && (e = `${e.substring(0, 22)}…`), s('span', { className: 'siteHeader__subNavLink gr-h3 gr-h3--noMargin' }, void 0, ' ', e, ' '); },
      renderProfileMenu() {
        if (this.props.includeProfileMenu === !0) {
          const e = { viewableName: this.props.name, profileImage: this.props.profileImage, profileUrl: this.props.profileUrl }; const t = i.default.createElement(y.default, n({}, this.props, { user: e, showNotificationsFlag: !1 })); const r = u.default.size(this.props.author) === 0 ? this.props.profileUrl : this.props.author.profileUrl; return s('li', { className: 'personalNav__listItem' }, void 0, s(f.default, {
            trigger: t, fallbackUrl: r, bemModifiers: 'profileMenu', isInPersonalNav: 'true',
          }, void 0, s('div', { className: 'siteHeader__subNav siteHeader__subNav--profile gr-box gr-box--withShadowLarge' }, void 0, this.renderProfileName(), i.default.createElement(g.default, n({}, this.props, { profileUrl: r })))));
        } return null;
      },
    });
  }, {
    '../dropdown': 91, '../gr_component_factory': 108, './discussions_pane': 115, './notifications': 127, './profile_menu': 133, './profile_menu_jewel': 134, lodash: 'lodash', react: 'react',
  }],
  129: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.personalNavDrawerModalId = void 0; const a = e('../modal'); const i = o(a); const l = e('../gr_component_factory'); const u = o(l); const d = e('./personal_nav'); const c = o(d); const p = e('./profile_menu'); const f = o(p); const m = e('../user/user_icon'); const h = o(m); const _ = e('../../modules/shape_icon_values'); const g = r.personalNavDrawerModalId = 'personalNavDrawerModal'; r.default = u.default.createClass({ displayName: 'PersonalNavDrawer', render() { const e = { viewableName: this.props.name, profileImage: this.props.profileImage, profileUrl: this.props.profileUrl }; return s(i.default, { asDrawer: !0, id: g }, void 0, s('div', { className: 'personalNavDrawer' }, void 0, s('div', { className: 'personalNavDrawer__personalNavContainer' }, void 0, React.createElement(c.default, n({}, this.props, { includeProfileMenu: !1, withDropdowns: !1 }))), s('div', { className: 'personalNavDrawer__profileAndLinksContainer' }, void 0, s('div', { className: 'personalNavDrawer__profileContainer gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter' }, void 0, s('div', { className: 'gr-mediaFlexbox__media' }, void 0, s(h.default, { user: e, size: _.ICON_SIZES.LARGE })), s('div', { className: 'gr-mediaFlexbox__desc' }, void 0, s('a', { href: this.props.profileUrl, className: 'gr-hyperlink gr-hyperlink--bold' }, void 0, this.props.name), s('div', { className: 'u-displayBlock' }, void 0, s('a', { href: this.props.profileUrl, className: 'gr-hyperlink gr-hyperlink--naked' }, void 0, 'View profile')))), s('div', { className: 'personalNavDrawer__profileMenuContainer' }, void 0, React.createElement(f.default, this.props))))); } });
  }, {
    '../../modules/shape_icon_values': 19, '../gr_component_factory': 108, '../modal': 146, '../user/user_icon': 202, './personal_nav': 128, './profile_menu': 133,
  }],
  130: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.PRIMARY_NAV_MENU_TAB_GROUP = void 0; const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('../gr_component_factory'); const p = o(c); const f = e('classnames'); const m = o(f); const h = e('react-onclickoutside'); const _ = o(h); const g = e('../../modules/keys'); const v = o(g); const y = e('../../react_actions/tab_actions'); const b = o(y); const k = e('../../react_stores/tabs_store'); const S = o(k); const P = e('../../react_stores/user_agent_capabilities_store'); const T = o(P); const w = e('../../modules/shared/touch_not_ready_helper'); const N = r.PRIMARY_NAV_MENU_TAB_GROUP = 'siteHeaderPrimaryNav'; r.default = p.default.createClass({
      displayName: 'Dropdown',
      mixins: [_.default, d.default.connect(S.default, 'tabsStore'), d.default.connect(T.default, 'userAgentCapabilities')],
      propTypes: {
        fallbackUrl: a.default.PropTypes.string, onShowCallback: a.default.PropTypes.func, tabName: a.default.PropTypes.string.isRequired, tooltipText: a.default.PropTypes.string, trigger: a.default.PropTypes.oneOfType([a.default.PropTypes.string, a.default.PropTypes.element]).isRequired,
      },
      hide() { b.default.deselectTab(this.props.tabName, N); },
      isMenuActive() { return this.props.tabName === this.state.tabsStore[N]; },
      show() { b.default.selectTab(this.props.tabName, N), this.props.onShowCallback && this.props.onShowCallback(); },
      toggle(e) { (0, w.acknowledgeEvent)(e), this.props.children && e.preventDefault(), this.isMenuActive() ? this.hide() : this.show(); },
      openList(e) { v.default.isDropdownOpenerKey(e.keyCode) ? (e.preventDefault(), v.default.isArrowDown(e.keyCode) ? this.show() : this.toggle(e)) : v.default.isDefaultCloserKey(e.keyCode) && (e.preventDefault(), this.hide()); },
      handleClickOutside() { this.state.userAgentCapabilities.touch || this.hide(); },
      triggerClasses() { return (0, m.default)(this.withBemModifiers(['primaryNavMenu__trigger']), { 'primaryNavMenu__trigger--buttonReset': l.default.isUndefined(this.props.fallbackUrl) }, { 'primaryNavMenu__trigger--active': this.isMenuActive() }); },
      renderTriggerButton() {
        return n('button', {
          className: this.triggerClasses(), 'aria-haspopup': 'true', 'aria-expanded': this.isMenuActive(), onClick: this.toggle, onKeyDown: this.openList, title: this.props.tooltipText, 'data-ux-click': !0,
        }, void 0, this.props.trigger);
      },
      renderTriggerLink() {
        return n('a', {
          className: this.triggerClasses(), href: this.props.fallbackUrl, onClick: this.toggle, onKeyDown: this.openList, role: 'button', 'aria-haspopup': 'true', 'aria-expanded': this.isMenuActive(), title: this.props.tooltipText, 'data-ux-click': !0,
        }, void 0, this.props.trigger);
      },
      render() { const e = (0, m.default)(this.withBemModifiers('primaryNavMenu'), 'ignore-react-onclickoutside'); const t = (0, m.default)('primaryNavMenu__menu', { 'primaryNavMenu__menu--show': this.isMenuActive() }, 'gr-box gr-box--withShadowLarge'); const r = l.default.isUndefined(this.props.fallbackUrl) ? this.renderTriggerButton() : this.renderTriggerLink(); const o = n('div', { className: t, role: 'menu' }, void 0, this.props.children); return n('div', { className: e }, void 0, r, o); },
    });
  }, {
    '../../modules/keys': 16, '../../modules/shared/touch_not_ready_helper': 21, '../../react_actions/tab_actions': 46, '../../react_stores/tabs_store': 259, '../../react_stores/user_agent_capabilities_store': 262, '../gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react', 'react-onclickoutside': 'react-onclickoutside', reflux: 'reflux',
  }],
  131: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('./community_menu'); const d = o(u); const c = e('./browse_menu'); const p = o(c); r.default = l.default.createClass({
      displayName: 'PrimaryNavMenus',
      propTypes: {
        adId: a.default.PropTypes.string, browseUrl: a.default.PropTypes.string, choiceAwardsUrl: a.default.PropTypes.string, communityUrl: a.default.PropTypes.string, discussionsUrl: a.default.PropTypes.string, eventUrl: a.default.PropTypes.string, favoriteGenres: a.default.PropTypes.array, featuredAskAuthorUrl: a.default.PropTypes.string, genres: a.default.PropTypes.array.isRequired, giveawayUrl: a.default.PropTypes.string, groupsUrl: a.default.PropTypes.string, homeUrl: a.default.PropTypes.string, listUrl: a.default.PropTypes.string, myBooksUrl: a.default.PropTypes.string, newReleasesUrl: a.default.PropTypes.string, peopleUrl: a.default.PropTypes.string, quizzesUrl: a.default.PropTypes.string, quotesUrl: a.default.PropTypes.string, recommendationsUrl: a.default.PropTypes.string, signedIn: a.default.PropTypes.bool, storiesUrl: a.default.PropTypes.string, triviaUrl: a.default.PropTypes.string,
      },
      render() { return n('ul', { role: 'menu', className: 'siteHeader__menuList' }, void 0, n('li', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--home' }, void 0, n('a', { href: this.props.homeUrl, className: 'siteHeader__topLevelLink' }, void 0, 'Home')), n('li', { className: 'siteHeader__topLevelItem' }, void 0, n('a', { href: this.props.myBooksUrl, className: 'siteHeader__topLevelLink' }, void 0, 'My Books')), n('li', { className: 'siteHeader__topLevelItem' }, void 0, a.default.createElement(p.default, this.props)), n('li', { className: 'siteHeader__topLevelItem siteHeader__topLevelItem--community' }, void 0, a.default.createElement(d.default, this.props))); },
    });
  }, {
    '../gr_component_factory': 108, './browse_menu': 111, './community_menu': 112, react: 'react',
  }],
  132: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.mapStateToProps = r.component = void 0; const s = e('lodash'); const a = o(s); const i = e('react'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('./primary_nav_menus'); const p = o(c); const f = e('react-headroom'); const m = o(f); const h = e('reflux'); const _ = o(h); const g = e('../search/search_mobile_nav'); const v = o(g); const y = e('../../react_stores/tabs_store'); const b = o(y); const k = e('react-redux'); const S = e('./primary_nav_menu'); const P = r.component = d.default.createClass({
      displayName: 'PrimaryNavSeparateLine',
      mixins: [_.default.connect(b.default, 'tabs')],
      propTypes: {
        autocompleteUrl: l.default.PropTypes.string.isRequired, searchPath: l.default.PropTypes.string.isRequired, signedIn: l.default.PropTypes.bool.isRequired, mobviousDeviceType: l.default.PropTypes.string, searchIsActive: l.default.PropTypes.bool, adId: l.default.PropTypes.string, browseUrl: l.default.PropTypes.string, choiceAwardsUrl: l.default.PropTypes.string, communityUrl: l.default.PropTypes.string, discussionsUrl: l.default.PropTypes.string, editorsPicksUrl: l.default.PropTypes.string, eventUrl: l.default.PropTypes.string, favoriteGenres: l.default.PropTypes.array, featuredAskAuthorUrl: l.default.PropTypes.string, genres: l.default.PropTypes.array.isRequired, giveawayUrl: l.default.PropTypes.string, groupsUrl: l.default.PropTypes.string, homeUrl: l.default.PropTypes.string, listUrl: l.default.PropTypes.string, myBooksUrl: l.default.PropTypes.string, newReleasesUrl: l.default.PropTypes.string, peopleUrl: l.default.PropTypes.string, quizzesUrl: l.default.PropTypes.string, quotesUrl: l.default.PropTypes.string, recommendationsUrl: l.default.PropTypes.string, storiesUrl: l.default.PropTypes.string, triviaUrl: l.default.PropTypes.string,
      },
      getDefaultProps() { return { searchIsActive: !1 }; },
      isNavPinned() { return this.props.searchIsActive || !a.default.isEmpty(this.state.tabs[S.PRIMARY_NAV_MENU_TAB_GROUP]); },
      renderDefaultSeparateLine() { return n('nav', { className: 'siteHeader__primaryNavSeparateLine gr-box gr-box--withShadow' }, void 0, l.default.createElement(p.default, this.props)); },
      renderSearch() { return l.default.createElement(v.default, this.props); },
      render() { return n(m.default, { disable: this.isNavPinned() }, void 0, this.props.searchIsActive ? this.renderSearch() : this.renderDefaultSeparateLine()); },
    }); const T = r.mapStateToProps = function (e, t) { return Object.assign({}, t, e); }; r.default = (0, k.connect)(T)(P);
  }, {
    '../../react_stores/tabs_store': 259, '../gr_component_factory': 108, '../search/search_mobile_nav': 173, './primary_nav_menu': 130, './primary_nav_menus': 131, lodash: 'lodash', react: 'react', 'react-headroom': 'react-headroom', 'react-redux': 'react-redux', reflux: 'reflux',
  }],
  133: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../menu_link'); const p = o(c);
    r.default = d.default.createClass({
      displayName: 'ProfileMenu',
      propTypes: {
        author: a.default.PropTypes.shape({
          id: a.default.PropTypes.number, editProfileUrl: a.default.PropTypes.string, profileUrl: a.default.PropTypes.string, dashboardUrl: a.default.PropTypes.string,
        }),
        commentsUrl: a.default.PropTypes.string,
        discussionsUrl: a.default.PropTypes.string,
        editFavGenresUrl: a.default.PropTypes.string,
        groupInvitesCount: a.default.PropTypes.number,
        helpUrl: a.default.PropTypes.string,
        myFriendsUrl: a.default.PropTypes.string,
        myGroupsUrl: a.default.PropTypes.string,
        myQuotesUrl: a.default.PropTypes.string,
        myReadingChallengeUrl: a.default.PropTypes.string,
        myRecsUrl: a.default.PropTypes.string,
        name: a.default.PropTypes.string,
        pendingRecsCount: a.default.PropTypes.number,
        profileEditUrl: a.default.PropTypes.string,
        profileUrl: a.default.PropTypes.string,
        readingNotesUrl: a.default.PropTypes.string,
        signOutUrl: a.default.PropTypes.string,
      },
      isAuthor() { return !l.default.isUndefined(this.props.author); },
      groupInvitesMessage() { const e = this.props.groupInvitesCount; return e === 0 ? 'No invitations' : e === 1 ? '1 invitation' : `${e} invitations`; },
      renderGroupInvites() { return this.props.groupInvitesCount > 0 ? n('span', { className: 'gr-smallAlert u-marginLeftXSmall' }, void 0, this.groupInvitesMessage()) : void 0; },
      renderPendingRecs() { return this.props.pendingRecsCount > 0 ? n('span', { className: 'gr-smallAlert u-marginLeftXSmall' }, void 0, `${this.props.pendingRecsCount} new`) : void 0; },
      renderAuthorDashboardLink() { return this.isAuthor() ? n(p.default, { href: this.props.author.dashboardUrl, linkText: 'Author Dashboard', linkClass: 'siteHeader__subNavLink' }) : void 0; },
      render() {
        const e = this.isAuthor() ? this.props.author.editProfileUrl : this.props.profileEditUrl; return n('ul', {}, void 0, n(p.default, {}, void 0, n('a', { href: this.props.profileUrl, className: 'siteHeader__subNavLink' }, void 0, 'Profile')), this.renderAuthorDashboardLink(), n(p.default, { href: this.props.myFriendsUrl, linkText: 'Friends', linkClass: 'siteHeader__subNavLink' }), n(p.default, {}, void 0, n('a', { href: this.props.myGroupsUrl, className: 'siteHeader__subNavLink' }, void 0, 'Groups', this.renderGroupInvites())), n(p.default, { href: this.props.discussionsUrl, linkText: 'Discussions', linkClass: 'siteHeader__subNavLink' }), n(p.default, { href: this.props.commentsUrl, linkText: 'Comments', linkClass: 'siteHeader__subNavLink' }), n(p.default, { href: this.props.myReadingChallengeUrl, linkText: 'Reading Challenge', linkClass: 'siteHeader__subNavLink' }), n(p.default, { href: this.props.readingNotesUrl, linkText: 'Kindle Notes & Highlights', linkClass: 'siteHeader__subNavLink' }), n(p.default, { href: this.props.myQuotesUrl, linkText: 'Quotes', linkClass: 'siteHeader__subNavLink' }), n(p.default, { href: this.props.editFavGenresUrl, linkText: 'Favorite genres', linkClass: 'siteHeader__subNavLink' }), n(p.default, {}, void 0, n('a', { href: this.props.myRecsUrl, className: 'siteHeader__subNavLink' }, void 0, 'Friends’ recommendations', this.renderPendingRecs())), n(p.default, { href: e, linkText: 'Account settings', linkClass: 'siteHeader__subNavLink u-topGrayBorder' }), n(p.default, { href: this.props.helpUrl, linkText: 'Help', linkClass: 'siteHeader__subNavLink' }), n(p.default, {
          href: this.props.signOutUrl, linkText: 'Sign out', linkClass: 'siteHeader__subNavLink', method: 'POST',
        }));
      },
    });
  }, {
    '../gr_component_factory': 108, '../menu_link': 145, lodash: 'lodash', react: 'react',
  }],
  134: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('../../react_stores/notifications_store'); const l = o(i); const u = e('react'); const d = o(u); const c = e('reflux'); const p = o(c); const f = e('../user/user_icon'); const m = o(f); r.default = a.default.createClass({
      displayName: 'ProfileMenuJewel',
      mixins: [p.default.connect(l.default, 'notificationsStore')],
      propTypes: {
        notificationIconUrl: d.default.PropTypes.string, showNotificationsFlag: d.default.PropTypes.bool, tempFriendRequestCount: d.default.PropTypes.number, tempUnreadMessageCount: d.default.PropTypes.number, user: d.default.PropTypes.shape({ viewableName: d.default.PropTypes.string.isRequired, profileImage: d.default.PropTypes.string.isRequired, profileUrl: d.default.PropTypes.string }).isRequired,
      },
      getDefaultProps() { return { showNotificationsFlag: !0, tempFriendRequestCount: 0, tempUnreadMessageCount: 0 }; },
      notificationsCountString() { const e = this.state.notificationsStore; return e.unreadCount + this.props.tempFriendRequestCount + this.props.tempUnreadMessageCount + (e.unreadCountMore ? '+' : ''); },
      render() { return n('span', { className: 'headerPersonalNav__icon' }, void 0, this.renderNotificationsCountFlag(), n(m.default, { user: this.props.user, includeLink: !1 })); },
      renderNotificationsCountFlag() { return this.props.showNotificationsFlag === !0 && (this.state.notificationsStore.unreadCount > 0 || this.props.tempFriendRequestCount > 0 || this.props.tempUnreadMessageCount > 0) ? n('span', { className: 'headerPersonalNav__flag' }, void 0, this.notificationsCountString()) : null; },
    });
  }, {
    '../../react_stores/notifications_store': 254, '../gr_component_factory': 108, '../user/user_icon': 202, react: 'react', reflux: 'reflux',
  }],
  135: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.JobsListComponent = void 0; const a = e('./gr_component_factory'); const i = o(a); const l = e('react'); const u = e('../modules/env_utils'); const d = o(u); const c = e('lodash'); const p = e('react-router/lib/Router'); const f = o(p); const m = e('react-router/lib/RouterContext'); const h = o(m); const _ = e('react-router/lib/Route'); const g = o(_); const v = e('react-router/lib/Link'); const y = o(v); const b = e('react-router/lib/browserHistory'); const k = o(b); const S = e('react-router/lib/match'); const P = o(S); const T = e('classnames'); const w = o(T); const N = '/jobs'; const R = 'Find your next job'; const M = 'Want to be part of creating innovative experiences for the largest community of readers? We’re hiring!'; const C = 'Sorry, we do not have any open positions at this time. Please check again soon!'; const x = 'Location City'; const A = 'Check on a submitted application'; const I = 'https://account.amazon.jobs'; const L = [' - Goodreads', ', Goodreads']; const U = 'Back to all jobs'; const E = 'Basic Qualifications:'; const O = 'Preferred Qualifications:'; const B = 'Qualified applicants with criminal histories will be considered in a manner consistent with all applicable local, state and federal laws, including the San Francisco Fair Chance Ordinance.'; const j = 'Apply now'; const F = 'apply'; const q = 'jobsListBody'; const D = r.JobsListComponent = i.default.createClass({
      displayName: 'JobsList', getJobs() { return this.props.route.jobs; }, getSelectedJobData() { return this.getJobs() ? this.getJobs()[this.props.location.query.id] : null; }, displayableJobTitle(e) { let t = e; return L.forEach((e) => { t = t.replace(e, ''); }), t; }, renderBackToAllJobsButton() { return s(y.default, { to: N }, void 0, s('span', { className: 'gr-hyperlink' }, void 0, U)); }, renderHeading() { const e = (0, w.default)(this.withBemModifiers('jobsListHeading__subtitle'), { 'jobsListHeading__subtitle--jobSelected': this.getSelectedJobData() }); return s('div', { className: 'gr-row gr-justify-content-center' }, void 0, s('div', { className: 'gr-col gr-col-md-7 gr-col-lg-8' }, void 0, s('h2', { className: 'gr-marketingPageH2 jobsListHeading__title' }, void 0, R), s('p', { className: e }, void 0, this.getJobs() ? M : C))); }, renderLocation(e) { const t = (0, w.default)(this.withBemModifiers('jobsListItem__location'), { 'jobsListItem__location--jobSelected': this.getSelectedJobData() }); return s('div', { className: t }, void 0, e.replace(', USA', '')); }, renderJobItem(e) { const t = this.getJobs()[e]; return t ? s('div', { id: e, className: 'gr-row jobsListItem' }, e, s('div', { className: 'gr-col gr-col-md-6 gr-col-lg-7 gr-col-md-offset-1' }, void 0, s(y.default, { to: `${N}?id=${e}` }, void 0, s('span', { className: 'gr-hyperlink gr-d-block jobsListItem__link' }, void 0, this.displayableJobTitle(t.title))), s('div', { className: 'gr-d-block gr-d-md-none' }, void 0, this.renderLocation(t.normalized_location))), s('div', { className: 'gr-col gr-col-md-4 gr-col-lg-3 gr-d-none gr-d-md-flex' }, void 0, this.renderLocation(t.normalized_location))) : null; }, renderLocationHeading() { return s('div', { className: 'gr-col gr-col-md-4 gr-col-lg-3 gr-d-none gr-d-md-flex' }, void 0, s('h3', { className: 'gr-h3' }, void 0, x)); }, renderCategoryHeading(e) { const t = Object.keys(this.props.route.categories); const r = e === t[0]; return s('div', { className: 'gr-row' }, void 0, s('div', { className: 'gr-col gr-col-md-6 gr-col-lg-7 gr-col-md-offset-1' }, void 0, s('h3', { className: 'gr-h3' }, void 0, e)), r && this.renderLocationHeading()); }, getJobMarkup(e) { return { __html: e }; }, renderSelectedJob() { const e = this.getSelectedJobData(); const t = this.displayableJobTitle(e.title); return s('div', { className: 'jobsListSelectedJob' }, void 0, s('h4', { className: 'gr-marketingPageH4' }, void 0, t), this.renderLocation(e.normalized_location), s('p', { dangerouslySetInnerHTML: this.getJobMarkup(e.description), className: 'jobsListSelectedJob__description' }), s('h5', { className: 'gr-marketingPageH5' }, void 0, E), s('div', { dangerouslySetInnerHTML: this.getJobMarkup(e.basic_qualifications), className: 'jobsListSelectedJob__basicQuals' }), s('h5', { className: 'gr-marketingPageH5' }, void 0, O), s('div', { dangerouslySetInnerHTML: this.getJobMarkup(e.preferred_qualifications), className: 'jobsListSelectedJob__preferredQuals' })); }, renderCheckJobApp() { const e = (0, w.default)({ 'gr-hyperlink': this.getSelectedJobData() }, { 'gr-button gr-button--large gr-button--fullWidth gr-button--teal': !this.getSelectedJobData() }); return s('a', { href: I, className: e }, void 0, A); }, renderApplicationButtons() { const e = this.getSelectedJobData(); return s('div', { className: 'jobsListSelectedJob__applicationButtons' }, void 0, s('div', { className: 'jobsListApplyButton gr-d-md-inline' }, void 0, s('a', { href: `${I}${N}/${e.id_icims}/${F}`, className: 'gr-button gr-button--large gr-button--teal' }, void 0, j)), s('div', { className: 'jobsListCheckJobAppContainer gr-d-md-inline' }, void 0, this.renderCheckJobApp())); }, render() { const e = this; if (this.getSelectedJobData()) return s('div', { className: q }, void 0, this.renderHeading(), s('div', { className: 'gr-row gr-justify-content-center' }, void 0, s('div', { className: 'gr-col gr-col-md-10 gr-col-lg-8' }, void 0, s('div', { className: 'jobsListBackToAllJobsContainer--top' }, void 0, this.renderBackToAllJobsButton()), this.renderSelectedJob(), s('div', { className: 'jobsListLegalText' }, void 0, B), this.renderApplicationButtons(), s('div', { className: 'jobsListBackToAllJobsContainer--bottom' }, void 0, this.renderBackToAllJobsButton())))); const t = (0, w.default)('gr-row gr-justify-content-center jobsListCheckJobAppContainer--jobList', { 'jobsListCheckJobAppContainer--noJobs': !this.getJobs() }); return s('div', { className: q }, void 0, this.renderHeading(), (0, c.map)(this.props.route.categories, (t, r) => s('div', { className: 'jobsListCategory' }, r, e.renderCategoryHeading(r), (0, c.map)(t, t => e.renderJobItem(t)))), s('div', { className: t }, void 0, s('div', { className: 'gr-col gr-col-10 gr-col-md-6 gr-col-lg-4' }, void 0, this.renderCheckJobApp()))); },
    }); const H = function (e) { const t = React.createElement(g.default, n({ path: `${N}(?id=*)`, component: D, onChange() { const e = document.getElementsByClassName(q)[0].parentElement; e !== null && e.scrollIntoView(!0); } }, e)); if (d.default.domUnavailable()) { let r = void 0; let o = N; return e.selectedId && (o += `?id=${e.selectedId}`), (0, P.default)({ routes: t, location: o }, (e, t, o) => { r = o; }), React.createElement(h.default, r); } return s(f.default, { history: k.default }, void 0, t); }; H.propTypes = { selectedId: l.PropTypes.string, categories: l.PropTypes.object, jobs: l.PropTypes.object }, r.default = H;
  }, {
    '../modules/env_utils': 13, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react', 'react-router/lib/Link': 272, 'react-router/lib/Route': 276, 'react-router/lib/Router': 278, 'react-router/lib/RouterContext': 279, 'react-router/lib/browserHistory': 282, 'react-router/lib/match': 290,
  }],
  136: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_mixins/gr_reflux'); const d = e('../../react_actions/like_actions'); const c = o(d); const p = e('../../react_stores/like_store'); const f = o(p); const m = e('../spinner'); const h = o(m); const _ = e('classnames'); const g = o(_); r.default = l.default.createClass({
      displayName: 'LikeButton',
      mixins: [(0, u.connectToLazyStore)(f.default, 'resourceKey')],
      propTypes: { resourceKey: a.default.PropTypes.string.isRequired, resourceLabel: a.default.PropTypes.string.isRequired, showAsLink: a.default.PropTypes.bool },
      getDefaultProps() { return { showAsLink: !0 }; },
      componentDidUpdate() { this.likeFocused && !this.state.showLoadingSpinner && (this.refs.likeButton.focus(), this.likeFocused = !1); },
      buttonClicked() { this.state.isLiked ? c.default.unLike(this.props.resourceKey) : c.default.like(this.props.resourceKey); },
      render() {
        const e = this; const t = this.state.isLiked ? 'Unlike' : 'Like'; const r = (0, g.default)({ 'gr-buttonAsLink': this.props.showAsLink }, { 'gr-button gr-button--small': !this.props.showAsLink }); return n('span', { 'aria-live': 'polite' }, void 0, this.state.showLoadingSpinner ? n(h.default, {}) : a.default.createElement('button', {
          'aria-label': `${t} ${this.props.resourceLabel}`, ref: 'likeButton', className: r, onClick: this.buttonClicked, onFocus() { e.likeFocused = !0; },
        }, t));
      },
    });
  }, {
    '../../react_actions/like_actions': 38, '../../react_mixins/gr_reflux': 236, '../../react_stores/like_store': 252, '../gr_component_factory': 108, '../spinner': 195, classnames: 'classnames', react: 'react',
  }],
  137: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_stores/like_store'); const d = o(u); const c = e('../../react_mixins/gr_reflux'); r.default = l.default.createClass({
      displayName: 'LikeCount', mixins: [(0, c.connectToLazyStore)(d.default, 'resourceKey')], propTypes: { resourceKey: a.default.PropTypes.string.isRequired }, getPluralLike(e) { return e === 1 ? 'like' : 'likes'; }, render() { return this.state.likeCount > 0 ? n('span', {}, void 0, n('a', { className: 'gr-hyperlink--quiet', href: this.state.likersListUrl }, void 0, this.state.likeCount, ' ', this.getPluralLike(this.state.likeCount)), ' · ') : null; },
    });
  }, {
    '../../react_mixins/gr_reflux': 236, '../../react_stores/like_store': 252, '../gr_component_factory': 108, react: 'react',
  }],
  138: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('reflux'); const p = o(c); const f = e('../../react_stores/like_store'); const m = o(f); r.default = d.default.createClass({
      displayName: 'LikeInformation', mixins: [p.default.connectFilter(m.default, 'likeStore', function (e) { return e[this.props.resourceKey]; })], propTypes: { resourceKey: a.default.PropTypes.string.isRequired }, getNameLink() { const e = this.state.likeStore.likedBy; const t = l.default.isUndefined(e.friends) ? e.others[0] : e.friends[0]; return n('a', { href: t.profile_url, className: 'gr-hyperlink gr-hyperlink--bold likeInformation__name' }, void 0, t.name); }, getPluralPerson(e) { return e > 1 ? 'people' : 'person'; }, getYouLikeMessage() { return n('span', { className: 'likeInformation__name' }, void 0, 'You'); }, getYouAndAnotherPersonLikeMessage() { return n('span', {}, void 0, this.getYouLikeMessage(), ' and ', this.getNameLink()); }, getYouAndManyPeopleLikeMessage() { const e = this.state.likeStore; const t = e.likeCount - 2; return n('span', {}, void 0, this.getYouLikeMessage(), ', ', this.getNameLink(), ',', ' and ', n('a', { className: 'gr-hyperlink gr-hyperlink--bold', href: e.likersListUrl }, void 0, t, ' other ', this.getPluralPerson(t))); }, getSomeoneLikeMessage() { return n('span', {}, void 0, this.getNameLink()); }, getManyPeopleLikeMessage() { const e = this.state.likeStore; const t = e.likeCount - 1; return n('span', {}, void 0, this.getNameLink(), ' and ', n('a', { className: 'gr-hyperlink gr-hyperlink--bold', href: e.likersListUrl }, void 0, t, ' other ', this.getPluralPerson(t))); }, getLikeMessage() { const e = this.state.likeStore; if (e.isLiked) switch (e.likeCount) { case 1: return this.getYouLikeMessage(); case 2: return this.getYouAndAnotherPersonLikeMessage(); default: return this.getYouAndManyPeopleLikeMessage(); } else switch (e.likeCount) { case 1: return this.getSomeoneLikeMessage(); default: return this.getManyPeopleLikeMessage(); } }, render() { const e = this.state.likeStore; return !e.isLiked && l.default.isEmpty(e.likedBy) ? null : n('div', { className: 'likeInformation u-defaultType' }, void 0, this.getLikeMessage(), ' liked this'); },
    });
  }, {
    '../../react_stores/like_store': 252, '../gr_component_factory': 108, lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  139: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('./like_count'); const d = o(u); const c = e('./like_button'); const p = o(c); r.default = l.default.createClass({
      displayName: 'LikeSimpleFooter',
      propTypes: {
        resourceKey: a.default.PropTypes.string.isRequired, resourceLabel: a.default.PropTypes.string.isRequired, isLikeable: a.default.PropTypes.bool.isRequired, showAsLink: a.default.PropTypes.bool,
      },
      render() { return n('span', {}, void 0, n(d.default, { resourceKey: this.props.resourceKey }), this.props.isLikeable ? n(p.default, { resourceKey: this.props.resourceKey, resourceLabel: this.props.resourceLabel, showAsLink: this.props.showAsLink }) : null); },
    });
  }, {
    '../gr_component_factory': 108, './like_button': 136, './like_count': 137, react: 'react',
  }],
  140: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); const u = 768; r.default = a.default.createClass({
      displayName: 'AmazonLoginButton', getInitialState() { return { popup: !1 }; }, propTypes: { amazonSignInUrl: l.default.PropTypes.string.isRequired, enabled: l.default.PropTypes.bool, fullWidth: l.default.PropTypes.bool }, getDefaultProps() { return { enabled: !1, fullWidth: !1 }; }, componentDidMount() { this.setState({ popup: window.innerWidth > u }); }, handleButtonPress() { this.state.popup ? window.open(this.props.amazonSignInUrl, '', 'width=900,height=540') : window.location.assign(this.props.amazonSignInUrl); }, render() { return this.props.enabled ? n('button', { className: `gr-button gr-button--amazon gr-button--auth ${this.props.fullWidth ? 'gr-button--fullWidth' : ''}`, onClick: this.handleButtonPress }, void 0, n('div', { className: 'gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter gr-mediaFlexbox--justifyHorizontalContentCenter' }, void 0, n('div', { className: 'gr-mediaFlexbox__media gr-button--amazon__icon' }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, 'Continue with Amazon'))) : null; },
    });
  }, { '../gr_component_factory': 108, react: 'react' }],
  141: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); const u = 768; r.default = a.default.createClass({
      displayName: 'FacebookLoginButton',
      getInitialState() { return { popup: !1 }; },
      propTypes: {
        enabled: l.default.PropTypes.bool, facebookRedirectUrl: l.default.PropTypes.string.isRequired, facebookSignInUrl: l.default.PropTypes.string.isRequired, fullWidth: l.default.PropTypes.bool,
      },
      getDefaultProps() { return { enabled: !1, fullWidth: !1 }; },
      componentDidMount() { this.setState({ popup: window.innerWidth > u }); },
      handleButtonPress() { this.state.popup && typeof $grfb !== 'undefined' ? $grfb.login({ redirect: this.props.facebookRedirectUrl }) : window.location.assign(this.props.facebookSignInUrl); },
      render() { return this.props.enabled && typeof $grfb !== 'undefined' ? n('button', { className: `gr-button gr-button--facebook gr-button--auth ${this.props.fullWidth ? 'gr-button--fullWidth' : ''}`, onClick: this.handleButtonPress }, void 0, n('div', { className: 'gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter gr-mediaFlexbox--justifyHorizontalContentCenter' }, void 0, n('div', { className: 'gr-mediaFlexbox__media gr-button--facebook__icon' }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, 'Continue with Facebook'))) : null; },
    });
  }, { '../gr_component_factory': 108, react: 'react' }],
  142: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../../login/amazon_login_button'); const a = o(s); const i = e('classnames'); const l = o(i); const u = e('../../login/facebook_login_button'); const d = o(u); const c = e('../../gr_component_factory'); const p = o(c); const f = e('../../modal'); const m = o(f); const h = e('../../login/register_button'); const _ = o(h); const g = e('../../login/service_terms_and_privacy'); const v = o(g); const y = e('../../../modules/ajax/ajax_helper'); r.default = p.default.createClass({
      displayName: 'LoginInterstitial',
      propTypes: {
        allowAmazonSignIn: React.PropTypes.bool,
        allowFacebookSignIn: React.PropTypes.bool,
        path: React.PropTypes.shape({
          signInUrl: React.PropTypes.string.isRequired, signUpUrl: React.PropTypes.string.isRequired, termsUrl: React.PropTypes.string.isRequired, thirdPartyRedirectUrl: React.PropTypes.string.isRequired, privacyUrl: React.PropTypes.string.isRequired,
        }).isRequired,
      },
      componentDidMount() {
        const e = this; (0, y.httpGet)('/sign_in_prompt').done((t, r) => {
          r === 'success' ? e.setState({
            amazonSignInUrl: t.amazonSignInUrl, deviceType: t.deviceType, facebookSignInUrl: t.facebookSignInUrl, isShown: t.showPrompt === !0,
          }) : r === 'nocontent' && e.setState({ isShown: !1 });
        }).fail(() => { e.setState({ isShown: !1 }); });
      },
      getDefaultProps() { return { allowAmazonSignIn: !1, allowFacebookSignIn: !1 }; },
      getInitialState() { return { isShown: !1 }; },
      isResponsive() { return this.state.deviceType === 'mobile'; },
      onCloseHandler() { (0, y.httpPost)('/track/track_click', { data: { feature: 'LoginInterstitial:dismiss' } }), this.state.deviceType && (0, y.httpPost)('/track/track_click', { data: { feature: `LoginInterstitial:${this.state.deviceType}::dismiss` } }); },
      showPopUpBook() { return this.state.deviceType === 'desktop'; },
      renderAmazonLoginButton() { return this.state.amazonSignInUrl ? n('div', { className: 'loginModal__button' }, void 0, n(a.default, { enabled: this.props.allowAmazonSignIn, amazonSignInUrl: this.state.amazonSignInUrl, fullWidth: !0 })) : void 0; },
      renderFacebookLoginButton() {
        return this.state.facebookSignInUrl ? n('div', { className: 'loginModal__button' }, void 0, n(d.default, {
          enabled: this.props.allowFacebookSignIn, facebookRedirectUrl: this.props.path.thirdPartyRedirectUrl, facebookSignInUrl: this.state.facebookSignInUrl, fullWidth: !0,
        })) : void 0;
      },
      renderContent() { const e = (0, l.default)('loginModal', { 'loginModal--responsive': this.isResponsive() }); const t = n('div', { className: e }, void 0, this.showPopUpBook() ? '' : n('div', { className: 'loginModal__icon', alt: 'Goodreads' }), n('div', { className: 'loginModal__header' }, void 0, n('h3', { className: 'gr-h3 gr-h3--serif gr-h3--noMargin' }, void 0, 'Discover & read more')), this.showPopUpBook() ? n('div', { className: 'loginModal__popUpBook' }) : '', n('div', { className: 'loginModal__body' }, void 0, n('span', { className: 'u-defaultType' }, void 0, 'Log in to get better recommendations with a free account.'), n('div', { className: 'loginModal__cta' }, void 0, this.renderFacebookLoginButton(), this.renderAmazonLoginButton(), n('div', { className: 'loginModal__button' }, void 0, n(_.default, { fullWidth: !0, signUpUrl: this.props.path.signUpUrl })), n('span', { className: 'u-defaultType' }, void 0, 'Already a member?  ', n('a', { href: this.props.path.signInUrl, rel: 'nofollow' }, void 0, 'Sign in'))), n(v.default, { termsUrl: this.props.path.termsUrl, privacyUrl: this.props.path.privacyUrl }))); return t; },
      render() {
        if (this.state.isShown) {
          const e = n(m.default, {
            id: 'LoginInterstitial', centered: !0, onCloseHandler: this.onCloseHandler, responsive: this.isResponsive(), showByDefault: !0,
          }, void 0, this.renderContent()); return e;
        } return null;
      },
    });
  }, {
    '../../../modules/ajax/ajax_helper': 5, '../../gr_component_factory': 108, '../../login/amazon_login_button': 140, '../../login/facebook_login_button': 141, '../../login/register_button': 143, '../../login/service_terms_and_privacy': 144, '../../modal': 146, classnames: 'classnames',
  }],
  143: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); r.default = a.default.createClass({
      displayName: 'RegisterButton', propTypes: { fullWidth: l.default.PropTypes.bool, signUpUrl: l.default.PropTypes.string.isRequired }, getDefaultProps() { return { fullWidth: !1 }; }, render() { const e = n('a', { className: `gr-button gr-button--large ${this.props.fullWidth ? 'gr-button--fullWidth' : ''}`, href: this.props.signUpUrl }, void 0, 'Sign up with email'); return e; },
    });
  }, { '../gr_component_factory': 108, react: 'react' }],
  144: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); r.default = a.default.createClass({ displayName: 'ServiceTermsAndPrivacy', propTypes: { privacyUrl: l.default.PropTypes.string.isRequired, termsUrl: l.default.PropTypes.string.isRequired }, render() { const e = n('small', {}, void 0, 'By clicking “Sign up” I agree to the Goodreads ', n('a', { href: this.props.termsUrl, rel: 'nofollow', target: '_blank' }, void 0, 'Terms of Service'), ' and confirm that I am at least 13 years old.  Read our ', n('a', { href: this.props.privacyUrl, rel: 'nofollow', target: '_blank' }, void 0, 'Privacy Policy')); return e; } });
  }, { '../gr_component_factory': 108, react: 'react' }],
  145: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'MenuLink',
      propTypes: {
        href: a.default.PropTypes.string, linkText: a.default.PropTypes.any, linkClass: a.default.PropTypes.string, method: a.default.PropTypes.oneOf(['POST', 'PUT', 'DELETE']),
      },
      render() { return n('li', { role: 'menuitem', className: 'menuLink' }, void 0, this.props.children ? n('span', {}, void 0, this.props.children) : n('a', { href: this.props.href, className: this.props.linkClass, 'data-method': this.props.method }, void 0, this.props.linkText)); },
    });
  }, { './gr_component_factory': 108, react: 'react' }],
  146: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {});
        if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('../react_stores/modal_store'); const m = o(f); const h = e('../react_actions/modal_actions'); const _ = o(h); const g = e('./close_button'); const v = o(g); const y = e('../modules/keys'); const b = o(y); const k = e('lodash'); const S = e('../modules/close_button_values'); r.default = l.default.createClass({
      displayName: 'Modal',
      mixins: [d.default.connect(m.default, 'modalStore')],
      propTypes: {
        asDrawer: a.default.PropTypes.bool, id: a.default.PropTypes.string.isRequired, centered: a.default.PropTypes.bool, showByDefault: a.default.PropTypes.bool, onCloseHandler: a.default.PropTypes.func, onConfirmHandler: a.default.PropTypes.func, lockBodyScroll: a.default.PropTypes.bool, responsive: a.default.PropTypes.bool,
      },
      getCloseButtonVariant() { return this.props.asDrawer ? S.VARIANTS.DARK_BG : S.VARIANTS.DEFAULT; },
      getDefaultProps() {
        return {
          asDrawer: !1, centered: !1, showByDefault: !1, lockBodyScroll: !0, responsive: !1,
        };
      },
      componentDidMount() { this.props.showByDefault && _.default.openModal(this.props.id); },
      componentDidUpdate() { this.updateBodyScrollability(); },
      updateBodyScrollability() { this.props.lockBodyScroll && this.isActive() ? document.body.classList.add('modalOpened') : this.state.modalStore.currentActiveModal || document.body.classList.remove('modalOpened'); },
      hide() { _.default.closeModal(), this.props.onCloseHandler && (0, k.isFunction)(this.props.onCloseHandler) && this.props.onCloseHandler(); },
      isActive() { return this.state.modalStore.currentActiveModal === this.props.id; },
      hideOnOverlayClick(e) { e.target.className.indexOf('modal--overlay') > -1 && this.hide(); },
      hideOnEscape(e) { b.default.isDefaultCloserKey(e.keyCode) && this.hide(); },
      handleConfirm() { this.props.onConfirmHandler && this.props.onConfirmHandler(), this.hide(); },
      renderConfirmButtons() {
        return n('div', { className: 'modal__confirmButtonsContainer' }, void 0, n('button', {
          className: 'gr-button gr-button--large gr-button--dark u-marginRightMedium', 'data-testid': 'confirm', onClick: this.handleConfirm, type: 'button',
        }, void 0, 'Confirm'), n('button', {
          className: 'gr-button gr-button--large', 'data-testid': 'cancel', onClick: this.hide, type: 'button',
        }, void 0, 'Cancel'));
      },
      render() {
        const e = (0, p.default)('modal', 'modal--overlay', {
          'modal--show': this.isActive() && !this.props.centered, 'modal--centered': this.isActive() && this.props.centered, 'modal--drawer': this.props.asDrawer && !this.props.responsive, 'modal--responsive': this.props.responsive,
        }); return a.default.createElement('div', {
          className: e, ref: 'modalContent', tabIndex: '0', onClick: this.hideOnOverlayClick, onKeyDown: this.hideOnEscape,
        }, this.renderContents());
      },
      renderContents() { return this.props.asDrawer ? n('div', {}, void 0, n('div', { className: 'modal__close' }, void 0, n(v.default, { action: this.hide, variant: this.getCloseButtonVariant() })), n('div', { className: this.withBemModifiers('modal__content') }, void 0, this.props.children)) : n('div', { className: this.withBemModifiers('modal__content') }, void 0, n('div', { className: 'modal__close' }, void 0, n(v.default, { action: this.hide, variant: this.getCloseButtonVariant() })), this.props.children, this.props.onConfirmHandler && this.renderConfirmButtons()); },
    });
  }, {
    '../modules/close_button_values': 9, '../modules/keys': 16, '../react_actions/modal_actions': 39, '../react_stores/modal_store': 253, './close_button': 83, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  147: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('../react_actions/modal_actions'); const l = o(i); const u = e('../react_stores/modal_store'); const d = o(u); const c = e('react'); const p = o(c); const f = e('reflux'); const m = o(f); r.default = a.default.createClass({
      displayName: 'ModalTrigger',
      mixins: [m.default.connect(d.default, 'modalStore')],
      propTypes: { id: p.default.PropTypes.string.isRequired, clickHandler: p.default.PropTypes.func },
      isActive() { return this.state.modalStore.currentActiveModal === this.props.id; },
      openModal() { this.props.clickHandler && this.props.clickHandler(), l.default.openModal(this.props.id); },
      render() {
        return n('a', {
          className: this.withBemModifiers('modalTrigger'), onClick: this.openModal, role: 'button', 'aria-expanded': this.isActive(), 'aria-haspopup': !0,
        }, void 0, this.props.children);
      },
    });
  }, {
    '../react_actions/modal_actions': 39, '../react_stores/modal_store': 253, './gr_component_factory': 108, react: 'react', reflux: 'reflux',
  }],
  148: [function (e, t, r) {
    const o = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = function (e) { return o('div', {}, void 0, o('a', { href: e.newsUrl }, void 0, o('div', { className: 'editorialCard__image--interview editorialCard__image--interviewAuthor', style: { backgroundImage: `url(${e.authorImageUrl})` } }), o('div', { className: 'editorialCard__image--interview editorialCard__image--interviewBook', style: { backgroundImage: `url(${e.bookImageUrl})` } }))); }; s.propTypes = { authorImageUrl: n.PropTypes.string.isRequired, bookImageUrl: n.PropTypes.string.isRequired, newsUrl: n.PropTypes.string.isRequired }, r.default = s;
  }, { react: 'react' }],
  149: [function (e, t, r) {
    const o = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = function (e) { return o('div', {}, void 0, o('a', { href: e.newsUrl }, void 0, o('img', { className: 'newsPreview__newsImage', src: e.newsImageUrl }))); }; s.propTypes = { newsImageUrl: n.PropTypes.string.isRequired, newsUrl: n.PropTypes.string.isRequired }, r.default = s;
  }, { react: 'react' }],
  150: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }); const u = e('react'); const d = e('../dot_separated_elements'); const c = o(d); const p = e('./news_image'); const f = o(p); const m = e('./author_book_image'); const h = o(m); const _ = e('classnames'); const g = o(_); const v = (function (e) { function t() { return n(this, t), s(this, Object.getPrototypeOf(t).apply(this, arguments)); } return a(t, e), l(t, [{ key: 'renderImageSection', value() { const e = this.props; const t = e.newsUrl; const r = e.newsImageUrl; const o = e.authorImageUrl; const n = e.bookImageUrl; return r ? i(f.default, { newsImageUrl: r, newsUrl: t }) : o && n ? i(h.default, { newsUrl: t, authorImageUrl: o, bookImageUrl: n }) : null; } }, { key: 'renderTextSection', value() { const e = this.props; const t = e.likeCount; const r = e.commentCount; const o = e.newsHeader; const n = e.excerpt; const s = e.newsUrl; const a = e.isMobile; const l = a ? 'h4' : 'a'; const u = (0, g.default)('gr-h4 gr-h4--serif', { 'newsPreview__newsHeader--mobile': a, newsPreview__newsHeader: !a }); return i('div', {}, void 0, i('div', {}, void 0, i(l, { className: u, href: s }, void 0, o)), i('div', { className: 'newsPreview__excerpt', dangerouslySetInnerHTML: { __html: `${n}...` } }), i('div', { className: 'newsPreview__readMore' }, void 0, i('a', { href: s }, void 0, 'Read more...')), a && i('div', { className: 'newsPreview__likesAndComments' }, void 0, i('small', {}, void 0, i(c.default, { elements: [`${t} likes`, `${r} comments`] })))); } }, { key: 'render', value() { const e = this.props.isMobile; const t = (0, g.default)({ brownBackground: !e, 'newsPreview__sectionHeader--mobile': e }); const r = (0, g.default)('newsPreview__item', { 'newsPreview__item--mobile': e }); return i('div', { className: 'bigBox clearFloats' }, void 0, i('div', { className: 'h2Container gradientHeaderContainer' }, void 0, i('h2', { className: t }, void 0, this.props.sectionHeader)), i('div', { className: r }, void 0, this.renderImageSection(), this.renderTextSection())); } }]), t; }(u.Component)); v.defaultProps = { likeCount: 0, commentCount: 0, isMobile: !1 }, v.propTypes = {
      sectionHeader: u.PropTypes.string.isRequired, likeCount: u.PropTypes.number, commentCount: u.PropTypes.number, newsHeader: u.PropTypes.string.isRequired, excerpt: u.PropTypes.string.isRequired, newsImageUrl: u.PropTypes.string, authorImageUrl: u.PropTypes.string, bookImageUrl: u.PropTypes.string, newsUrl: u.PropTypes.string.isRequired, isMobile: u.PropTypes.bool,
    }, r.default = v;
  }, {
    '../dot_separated_elements': 89, './author_book_image': 148, './news_image': 149, classnames: 'classnames', react: 'react',
  }],
  151: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('react'); const l = o(i); r.default = a.default.createClass({ displayName: 'PageSkin', propTypes: { imageUrl: l.default.PropTypes.string, backgroundColor: l.default.PropTypes.string }, render() { const e = {}; return this.props.imageUrl && (e.backgroundImage = `url(${this.props.imageUrl})`, e.backgroundRepeat = 'no-repeat', e.backgroundPosition = 'center top'), this.props.backgroundColor && (e.backgroundColor = this.props.backgroundColor), n('div', { className: 'pageskin', style: e }); } });
  }, { './gr_component_factory': 108, react: 'react' }],
  152: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('./gr_component_factory'); const p = o(c); const f = e('./pagination_single_page_link'); const m = o(f); const h = e('./shared/gr_prop_types'); const _ = o(h); r.default = p.default.createClass({
      displayName: 'PaginationLinks',
      propTypes: {
        asButtons: a.default.PropTypes.bool, totalSize: _.default.naturalNumber.isRequired, currentPageNumber: a.default.PropTypes.number.isRequired, className: a.default.PropTypes.string, perPage: _.default.naturalNumber.isRequired, changePageAction: a.default.PropTypes.func.isRequired,
      },
      getDefaultProps() { return { asButtons: !1 }; },
      maxPageNumber() { return Math.ceil(this.props.totalSize / this.props.perPage); },
      renderLinkToPage(e) { return n(m.default, { pageNumber: e, currentPageNumber: this.props.currentPageNumber, changePageAction: this.props.changePageAction }, e); },
      renderPageLinks() { const e = this; const t = this.maxPageNumber(); return t !== 1 ? t <= 6 ? n('span', { className: 'gr-paginationLinks__pageLinksWrapper' }, void 0, l.default.times(t, t => e.renderLinkToPage(t + 1))) : this.props.currentPageNumber <= 3 ? n('span', { className: 'gr-paginationLinks__pageLinksWrapper' }, void 0, l.default.times(4, t => e.renderLinkToPage(t + 1)), '…', this.renderLinkToPage(this.maxPageNumber())) : this.props.currentPageNumber >= this.maxPageNumber() - 3 ? n('span', { className: 'gr-paginationLinks__pageLinksWrapper' }, void 0, this.renderLinkToPage(1), '…', this.renderLinkToPage(this.maxPageNumber() - 3), this.renderLinkToPage(this.maxPageNumber() - 2), this.renderLinkToPage(this.maxPageNumber() - 1), this.renderLinkToPage(this.maxPageNumber())) : n('span', { className: 'gr-paginationLinks__pageLinksWrapper' }, void 0, this.renderLinkToPage(1), '…', this.renderLinkToPage(this.props.currentPageNumber), this.renderLinkToPage(this.props.currentPageNumber + 1), this.renderLinkToPage(this.props.currentPageNumber + 2), '…', this.renderLinkToPage(this.maxPageNumber())) : void 0; },
      renderPrevLink() {
        if (this.maxPageNumber() === 1) return null; const e = (0, d.default)({
          'gr-paginationLinks__previousLink': !this.props.asButtons, 'gr-paginationLinks__previousButton': this.props.asButtons, 'gr-button': this.props.asButtons, 'gr-button--large': this.props.asButtons,
        }); return n('button', {
          'aria-label': 'Previous page', className: e, onClick: this.moveToPrevPage, disabled: this.props.currentPageNumber === 1,
        }, void 0, '← Previous');
      },
      renderNextLink() {
        if (this.maxPageNumber() === 1) return null; const e = (0, d.default)({
          'gr-paginationLinks__nextLink': !this.props.asButtons, 'gr-paginationLinks__nextButton': this.props.asButtons, 'gr-button': this.props.asButtons, 'gr-button--large': this.props.asButtons,
        }); return n('button', {
          'aria-label': 'Next page', className: e, onClick: this.moveToNextPage, disabled: this.props.currentPageNumber === this.maxPageNumber(),
        }, void 0, 'Next →');
      },
      moveToNextPage(e) { e.preventDefault(), this.props.changePageAction(this.props.currentPageNumber + 1); },
      moveToPrevPage(e) { e.preventDefault(), this.props.changePageAction(this.props.currentPageNumber - 1); },
      render() { const e = (0, d.default)('gr-paginationLinks', { 'gr-paginationLinks--asButtons': this.props.asButtons }, this.props.className); return n('div', { className: e }, void 0, n('span', { className: 'gr-paginationLinks__previousLinkWrapper' }, void 0, this.renderPrevLink()), this.renderPageLinks(), n('span', { className: 'gr-paginationLinks__nextLinkWrapper' }, void 0, this.renderNextLink())); },
    });
  }, {
    './gr_component_factory': 108, './pagination_single_page_link': 153, './shared/gr_prop_types': 180, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  153: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'PaginationSinglePageLink', propTypes: { pageNumber: a.default.PropTypes.number, currentPageNumber: a.default.PropTypes.number, changePageAction: a.default.PropTypes.func.isRequired }, render() { return this.props.pageNumber === this.props.currentPageNumber ? n('span', { 'aria-label': `${this.props.pageNumber} current page`, className: 'gr-paginationLinks__pageNumLink\n                         gr-paginationLinks__pageNumLink--selected' }, void 0, this.props.pageNumber) : n('button', { className: 'gr-paginationLinks__pageNumLink', onClick: this.jumpToPage }, void 0, this.props.pageNumber); }, jumpToPage(e) { e.preventDefault(), this.props.changePageAction(this.props.pageNumber); },
    });
  }, { './gr_component_factory': 108, react: 'react' }],
  154: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.shouldDisplayPreviewBookButton = void 0; const s = e('reflux'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('../modal'); const p = o(c); const f = e('../modal_trigger'); const m = o(f); const h = e('../../react_stores/modal_store'); const _ = o(h); const g = e('../../react_actions/newsfeed_actions'); const v = o(g); const y = e('./report_wrong_book_button'); const b = o(y); const k = e('./report_wrong_book_form'); const S = o(k); const P = e('./wrong_book_report_acknowledgment'); const T = o(P); const w = e('../../react_stores/user_agent_capabilities_store'); const N = o(w); const R = e('../../modules/ads/click_tracking_helper'); const M = r.shouldDisplayPreviewBookButton = function (e, t) { return t && t.touch === !0 ? !1 : !!e.kcrPreviewUrl; }; r.default = l.default.createClass({
      displayName: 'PreviewBook', mixins: [a.default.connect(_.default, 'modalStore'), a.default.connect(N.default, 'userAgentCapabilities')], propTypes: { book: d.default.book().isRequired }, getDefaultProps() { return { trackingOptions: R.TRACKED_CLASSES.preview_book }; }, getInitialState() { return { previewViewed: !1, uniqueId: Math.random(1e6) }; }, getReportWrongBookModalId() { return `report-${this.props.book.kcrPreviewUrl}${this.state.uniqueId}`; }, getPreviewModalId() { return this.props.book.kcrPreviewUrl + this.state.uniqueId; }, getAcknowledgmentModalId() { return `acknowledge-${this.props.book.kcrPreviewUrl}${this.state.uniqueId}`; }, openBookPreview() { v.default.previewBook(), this.setState({ previewViewed: !0 }); }, render() { let e = null; let t = null; let r = null; const o = this.getPreviewModalId(); const s = this.getReportWrongBookModalId(); const a = this.getAcknowledgmentModalId(); return this.state.modalStore.currentActiveModal === o && (e = n('div', { className: 'previewBook__container' }, void 0, n('div', { className: 'previewBook__topBanner' }, void 0, n('div', { className: 'previewBook__headerText' }, void 0, 'Preview - ', n('cite', {}, void 0, this.props.book.title)), n(b.default, { book: this.props.book, modalId: s })), n('iframe', { className: 'previewBook__kcrPreview', src: this.props.book.kcrPreviewUrl }))), this.state.previewViewed && (t = n(S.default, { book: this.props.book, modalId: s, acknowledgmentModalId: a }), r = n(T.default, { modalId: a })), M(this.props.book, this.state.userAgentCapabilities) ? n('span', { className: 'previewBook' }, void 0, n(m.default, { id: o }, void 0, n('button', { 'aria-label': `Preview ${this.props.book.title}`, className: 'gr-buttonAsLink\n                             previewBook__openPreview', onClick: this.openBookPreview }, void 0, 'Preview Book')), t, r, n(p.default, { id: o, bemModifiers: 'preview' }, void 0, e)) : null; },
    });
  }, {
    '../../modules/ads/click_tracking_helper': 3, '../../react_actions/newsfeed_actions': 40, '../../react_stores/modal_store': 253, '../../react_stores/user_agent_capabilities_store': 262, '../gr_component_factory': 108, '../modal': 146, '../modal_trigger': 147, '../shared/gr_prop_types': 180, './report_wrong_book_button': 155, './report_wrong_book_form': 156, './wrong_book_report_acknowledgment': 157, reflux: 'reflux',
  }],
  155: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('../modal_trigger'); const p = o(c); r.default = l.default.createClass({ displayName: 'ReportWrongBookButton', propTypes: { book: d.default.book().isRequired, modalId: a.default.PropTypes.string.isRequired }, render() { return n('div', { className: 'previewBook__reportWrongBookButtonContainer' }, void 0, n(p.default, { id: this.props.modalId }, void 0, n('button', { 'aria-label': 'This is not the right book.', className: 'gr-buttonAsLink\n                               previewBook__reportWrongBookButton' }, void 0, 'Not the book you’re looking for?'))); } });
  }, {
    '../gr_component_factory': 108, '../modal_trigger': 147, '../shared/gr_prop_types': 180, react: 'react',
  }],
  156: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('../modal'); const p = o(c); const f = e('../../react_actions/modal_actions'); const m = o(f); const h = e('lodash'); const _ = o(h); const g = { wrongBook: 'It’s the wrong book', wrongEdition: 'It’s the wrong edition', other: 'Other' }; r.default = l.default.createClass({
      displayName: 'ReportWrongBookForm',
      propTypes: { book: d.default.book().isRequired, modalId: a.default.PropTypes.string.isRequired, acknowledgmentModalId: a.default.PropTypes.string.isRequired },
      getAuthorString() { return `by ${this.props.book.authorName}`; },
      showReportAcknowledgement() { m.default.openModal(this.props.acknowledgmentModalId); },
      closeModal(e) { e.preventDefault(), m.default.closeModal(); },
      renderWrongBookForm() {
        const e = []; return _.default.forEach(g, (t, r) => { e.push(n('option', { value: r }, r, t)); }), n('form', {
          className: 'previewBook__reportWrongBookForm', action: '/kindle_book_mapping_flags', 'data-remote': 'true', method: 'post',
        }, void 0, 'We’d love your help. Let us know what’s wrong with this preview of ', n('cite', {}, void 0, this.props.book.title), this.props.book.authorName ? this.getAuthorString() : '', '.', n('br', {}), n('input', { type: 'hidden', name: 'kindle_book_mapping_flag[book_id]', value: this.props.book.bookId }), n('div', { className: 'gr-formInputContainer' }, void 0, n('label', { className: 'gr-label', htmlFor: 'kindle_book_mapping_flag_reason' }, void 0, 'Problem'), n('select', { name: 'kindle_book_mapping_flag[reason]', id: 'kindle_book_mapping_flag_reason' }, void 0, e)), n('div', { className: 'gr-formInputContainer' }, void 0, n('label', { className: 'gr-label', htmlFor: 'kindle_book_mapping_flag_other_reason' }, void 0, 'Details (if other)'), n('input', { name: 'kindle_book_mapping_flag[other_reason]', id: 'kindle_book_mapping_flag_other_reason' })), n('button', { className: 'gr-button gr-button--modalPrimaryLeft', type: 'submit', onClick: this.showReportAcknowledgement }, void 0, 'Report Problem'), n('button', { className: 'gr-buttonAsLink', onClick: this.closeModal, type: 'button' }, void 0, 'Cancel'));
      },
      render() { return n(p.default, { id: this.props.modalId }, void 0, n('h2', {}, void 0, 'See a Problem?'), this.renderWrongBookForm()); },
    });
  }, {
    '../../react_actions/modal_actions': 39, '../gr_component_factory': 108, '../modal': 146, '../shared/gr_prop_types': 180, lodash: 'lodash', react: 'react',
  }],
  157: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal'); const d = o(u); const c = e('../../react_actions/modal_actions'); const p = o(c); r.default = l.default.createClass({ displayName: 'WrongBookReportAcknowledgment', propTypes: { modalId: a.default.PropTypes.string.isRequired }, render() { return n('div', { className: 'previewBook__wrongBookReportAcknowledgment' }, void 0, n(d.default, { id: this.props.modalId }, void 0, 'Thanks for telling us about the problem.', n('div', {}, void 0, n('button', { className: 'gr-button', onClick: p.default.closeModal }, void 0, 'Close')))); } });
  }, {
    '../../react_actions/modal_actions': 39, '../gr_component_factory': 108, '../modal': 146, react: 'react',
  }],
  158: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++)r[t] = e[t]; return r; } return Array.from(e); } function s(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function i(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }); const u = e('react'); const d = e('./qualtrics_survey_modal'); const c = o(d); const p = (function (e) { function t(e) { s(this, t); const r = a(this, Object.getPrototypeOf(t).call(this, e)); return r.state = { renderModal: !1 }, r.handleWTR = r.handleWTR.bind(r), r; } return i(t, e), l(t, [{ key: 'componentDidMount', value() { const e = this; const t = document.getElementById(this.props.buttonId); if (!t) return null; const r = t.querySelectorAll("button.wtrExclusiveShelf[value='to-read'], button.wtrToRead[type='submit']"); [].concat(n(r)).forEach(t => t.addEventListener('click', e.handleWTR)); } }, { key: 'handleWTR', value() { const e = this; this.state.renderModal || setTimeout(() => e.setState({ renderModal: !0 }), 2500); } }, { key: 'render', value() { return this.state.renderModal ? React.createElement(c.default, this.props) : null; } }]), t; }(u.Component)); r.default = p, p.propTypes = { buttonId: u.PropTypes.string.isRequired };
  }, { './qualtrics_survey_modal': 160, react: 'react' }],
  159: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = e('./book_show_survey_modal'); const a = o(s); const i = e('./qualtrics_survey_modal'); const l = o(i); const u = { signed_in_book_show: a.default }; const d = function (e) { const t = u[e.type] || l.default; return React.createElement(t, e); }; d.propTypes = { type: n.PropTypes.oneOf(Object.keys(u)) }, r.default = d;
  }, { './book_show_survey_modal': 158, './qualtrics_survey_modal': 160, react: 'react' }],
  160: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e, enumerable: !1, writable: !0, configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    } const i = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); const l = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const o = t[r]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o); } } return function (t, r, o) { return r && e(t.prototype, r), o && e(t, o), t; }; }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.QUALTRICS_COOKIE = void 0; const u = e('react'); const d = e('../modal'); const c = o(d); const p = e('../shared/cookies'); const f = o(p); const m = e('../../modules/ajax/ajax_helper'); const h = r.QUALTRICS_COOKIE = 'hide_qualtrics_survey'; const _ = (function (e) { function t(e) { n(this, t); const r = s(this, Object.getPrototypeOf(t).call(this, e)); return r.state = { isShown: !1 }, r; } return a(t, e), l(t, [{ key: 'componentDidMount', value() { const e = this.shouldShow(); e && ((0, m.httpPost)('/track/track', { data: { tid: `QualtricsSurveyModal:${this.props.type || 'default'}` } }), this.setState({ isShown: e })); } }, { key: 'shouldShow', value() { return f.default.get(h) ? !1 : this.props.signedOut ? !!f.default.get('never_show_interstitial') : !0; } }, { key: 'onCloseHandler', value() { f.default.set(h, !0, 90); } }, { key: 'renderSurvey', value() { return i('div', { className: 'qualtricsSurvey' }, void 0, i('iframe', { className: 'qualtricsSurvey__iframe', src: this.props.qualtricsUrl })); } }, { key: 'render', value() { return this.state.isShown ? i(c.default, { id: 'QualtricsSurveyModal', showByDefault: !0, onCloseHandler: this.onCloseHandler }, void 0, this.renderSurvey()) : null; } }]), t; }(u.Component)); _.propTypes = { signedOut: u.PropTypes.bool.isRequired, qualtricsUrl: u.PropTypes.string.isRequired, type: u.PropTypes.string }, r.default = _;
  }, {
    '../../modules/ajax/ajax_helper': 5, '../modal': 146, '../shared/cookies': 179, react: 'react',
  }],
  161: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../shared/gr_prop_types'); const a = o(s); const i = function (e) { return e.noSharedAnnotations ? n('div', {}, void 0, n('div', { className: 'annotatedBookItem__bookInfo__knhCta annotatedBookItem__bookInfo__knhCta--noneVisible' }, void 0, e.knhCta)) : n('div', {}, void 0, n('div', { className: 'annotatedBookItem__bookInfo__knhCta' }, void 0, e.knhCta)); }; const l = function (e) { return n('div', { className: 'annotatedBookItem' }, void 0, n('a', { className: 'annotatedBookItem__knhLink', href: e.annotatedBookData.readingNotesUrl }, void 0, n('div', { className: 'annotatedBookItem__box gr-row' }, void 0, n('div', { className: 'annotatedBookItem__imageColumn gr-col-12 gr-col-lg-auto' }, void 0, n('img', { src: e.annotatedBookData.imageUrl })), n('div', { className: 'annotatedBookItem__mainColumn gr-col-12 gr-col-lg-auto' }, void 0, n('div', { className: 'annotatedBookItem__bookInfo' }, void 0, n('div', { className: 'annotatedBookItem__bookInfo__bookTitle' }, void 0, e.annotatedBookData.title), n('div', { className: 'annotatedBookItem__bookInfo__bookAuthor' }, void 0, 'By ', e.annotatedBookData.authorName), i(e.annotatedBookData)))))); }; l.propTypes = { annotatedBookData: a.default.readingNotesAnnotatedBookItem().isRequired }, r.default = l;
  }, { '../shared/gr_prop_types': 180 }],
  162: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = e('../shared/gr_prop_types'); const u = o(l); const d = e('./reading_notes_header'); const c = o(d); const p = e('./annotated_books_page'); const f = o(p); r.default = a.default.createClass({
      displayName: 'AnnotatedBooksLandingPage',
      propTypes: {
        user: u.default.user().isRequired, viewerIsOwner: i.PropTypes.bool.isRequired, canViewProfile: i.PropTypes.bool.isRequired, ownerHasLinkedAmazonAccount: i.PropTypes.bool.isRequired, headline: i.PropTypes.string.isRequired, createLinking: i.PropTypes.string, updateLinking: i.PropTypes.string, learnMore: i.PropTypes.string, contactUs: i.PropTypes.string, isSignedIn: React.PropTypes.bool.isRequired, signInRedirectUrl: React.PropTypes.string.isRequired,
      },
      renderView() {
        return n('div', {}, void 0, n(c.default, {
          user: this.props.user, headline: this.props.headline, isSignedIn: this.props.isSignedIn, signInRedirectUrl: this.props.signInRedirectUrl, viewerIsOwner: this.props.viewerIsOwner,
        }), n(f.default, {
          user: this.props.user, viewerIsOwner: this.props.viewerIsOwner, canViewProfile: this.props.canViewProfile, ownerHasLinkedAmazonAccount: this.props.ownerHasLinkedAmazonAccount, createLinking: this.props.createLinking, updateLinking: this.props.updateLinking, learnMore: this.props.learnMore, contactUs: this.props.contactUs,
        }));
      },
      render() { return n('div', { className: 'gr-annotatedBooksPage' }, void 0, this.renderView()); },
    });
  }, {
    '../gr_component_factory': 108, '../shared/gr_prop_types': 180, './annotated_books_page': 164, './reading_notes_header': 166, react: 'react',
  }],
  163: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = e('lodash'); const u = e('./annotated_book_item'); const d = o(u); r.default = a.default.createClass({ displayName: 'AnnotatedBooksList', propTypes: { annotatedBooksCollection: i.PropTypes.array.isRequired }, render() { return n('div', { className: 'annotatedBooksList' }, void 0, (0, l.map)(this.props.annotatedBooksCollection, e => n(d.default, { annotatedBookData: e }, e.asin))); } });
  }, {
    '../gr_component_factory': 108, './annotated_book_item': 161, lodash: 'lodash', react: 'react',
  }],
  164: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = e('../shared/gr_prop_types'); const u = o(l); const d = e('reflux'); const c = o(d); const p = e('lodash'); const f = e('../../modules/reading_notes/reading_notes_helper'); const m = e('./annotated_books_list'); const h = o(m); const _ = e('../flash_message'); const g = o(_); const v = e('../../react_actions/reading_notes/annotated_books_actions'); const y = o(v); const b = e('../../react_stores/reading_notes/annotated_books_store'); const k = o(b); const S = e('../spinner'); const P = o(S); r.default = a.default.createClass({
      displayName: 'AnnotatedBooksPage',
      mixins: [c.default.connect(k.default, 'annotatedBooksStore')],
      propTypes: {
        user: u.default.user().isRequired, viewerIsOwner: i.PropTypes.bool.isRequired, canViewProfile: i.PropTypes.bool.isRequired, ownerHasLinkedAmazonAccount: i.PropTypes.bool.isRequired, createLinking: i.PropTypes.string, updateLinking: i.PropTypes.string, learnMore: i.PropTypes.string, contactUs: i.PropTypes.string,
      },
      createLinkHandler() { window.open(this.props.createLinking, '', 'width=900, height=540'); },
      loadAnnotatedBooksHandler() { y.default.loadAnnotatedBooks(this.props.user.id); },
      componentWillMount() { this.props.ownerHasLinkedAmazonAccount && y.default.loadAnnotatedBooks(this.props.user.id); },
      render() { const e = this.state.annotatedBooksStore; let t = void 0; return t = this.props.viewerIsOwner ? this.props.ownerHasLinkedAmazonAccount ? (0, p.isEmpty)(e.annotatedBooksCollection) ? e.showSpinner ? this.renderLoadingView() : this.renderEmptyOwnerView() : this.renderOwnerCollection() : this.renderUnlinkedView() : this.props.canViewProfile && this.props.ownerHasLinkedAmazonAccount ? (0, p.isEmpty)(e.annotatedBooksCollection) ? e.showSpinner ? this.renderLoadingView() : this.renderEmptyVisitorView() : this.renderVisitorCollection() : this.renderEmptyVisitorView(), n('div', { className: 'annotatedBooksPage' }, void 0, e.showError ? n(g.default, { category: 'error', message: f.BOOK_LOAD_ERROR_MSG }) : null, t); },
      renderLoadingView() { return n('div', { className: 'annotatedBooksPage__loading' }, void 0, n(P.default, {})); },
      renderUnlinkedView() { return n('div', { className: 'annotatedBooksPage__unlinked' }, void 0, n('div', { className: 'annotatedBooksPage__unlinked__gkLogo' }), n('p', { className: 'annotatedBooksPage__unlinked__description' }, void 0, 'Link your Goodreads and Amazon accounts to access your Kindle notes and highlights on Goodreads.'), n('p', { className: 'annotatedBooksPage__unlinked__learnMore' }, void 0, n('a', { href: this.props.learnMore }, void 0, 'Learn More about Kindle Notes & Highlights')), n('div', { className: 'annotatedBooksPage__unlinked__linkBtn' }, void 0, n('button', { className: 'gr-button gr-button--dark gr-button--fullWidth', onClick: this.createLinkHandler }, void 0, 'Connect your accounts'))); },
      renderEmptyOwnerView() { return n('div', { className: 'annotatedBooksPage__empty' }, void 0, n('div', { className: 'annotatedBooksPage__empty__description' }, void 0, 'It looks like you don’t have any Kindle ebooks with notes or highlights.', n('a', { className: 'annotatedBooksPage__empty__description__link', href: this.props.learnMore }, void 0, 'Learn More'), 'about Kindle Notes & Highlights and', n('a', { className: 'annotatedBooksPage__empty__description__link', href: this.props.contactUs }, void 0, 'contact us'), 'if you have any questions.'), n('div', { className: 'annotatedBooksPage__empty__content' }, void 0, n('div', { className: 'annotatedBooksPage__empty__gkLogo' }), n('p', { className: 'annotatedBooksPage__emptyOwner__status' }, void 0, 'Your Goodreads account is connected to your Amazon account.'), n('div', { className: 'annotatedBooksPage__empty__updateLink' }, void 0, n('a', { href: this.props.updateLinking }, void 0, 'Update account linking')))); },
      renderEmptyVisitorView() { return n('div', { className: 'annotatedBooksPage__empty' }, void 0, n('div', { className: 'annotatedBooksPage__empty__description' }, void 0, this.props.user.firstName, ' has not posted any Kindle Notes & Highlights yet.', n('a', { className: 'annotatedBooksPage__empty__description__link', href: this.props.learnMore }, void 0, 'Learn More about Kindle Notes & Highlights'))); },
      renderOwnerCollection() { const e = this.state.annotatedBooksStore; return n('div', { className: 'annotatedBooksPage__collection' }, void 0, n('div', { className: 'annotatedBooksPage__collection__descriptionContainer' }, void 0, n('div', { className: 'annotatedBooksPage__collection__description' }, void 0, 'It’s easy to review, edit, and share the notes and highlights you make in Kindle books.'), n('div', { className: 'annotatedBooksPage__collection__description' }, void 0, 'Below are all of the books in your Kindle Library with highlights, starting with the most recently updated.')), n(h.default, { annotatedBooksCollection: e.annotatedBooksCollection }), this.renderLoadMore()); },
      renderVisitorCollection() { const e = this.state.annotatedBooksStore; return n('div', { className: 'annotatedBooksPage__collection' }, void 0, n('div', { className: 'annotatedBooksPage__collection__descriptionContainer' }, void 0, 'Join in the conversation. View, like, and comment on ', this.props.user.firstName, '’s notes and highlights.'), n(h.default, { annotatedBooksCollection: e.annotatedBooksCollection })); },
      renderLoadMore() { const e = this.state.annotatedBooksStore; return n('div', { className: 'annotatedBooksPage__collection__loadMoreContainer' }, void 0, e.showSpinner ? n(P.default, {}) : e.nextToken ? n('button', { className: 'annotatedBooksPage__collection__loadMoreButton gr-button gr-button--dark', onClick: this.loadAnnotatedBooksHandler }, void 0, 'Load More') : null); },
    });
  }, {
    '../../modules/reading_notes/reading_notes_helper': 18, '../../react_actions/reading_notes/annotated_books_actions': 42, '../../react_stores/reading_notes/annotated_books_store': 255, '../flash_message': 106, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../spinner': 195, './annotated_books_list': 163, lodash: 'lodash', react: 'react', reflux: 'reflux',
  }],
  165: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('../shared/gr_prop_types'); const l = o(i); const u = e('react'); const d = e('../author/author_follow_button'); const c = o(d); const p = e('../../modules/shape_icon_values'); const f = e('../user/user_follow_widget'); const m = o(f); const h = e('../user/user_icon'); const _ = o(h); const g = e('../user/user_profile_link'); const v = o(g); r.default = a.default.createClass({
      displayName: 'ReadingNotesAnnotator',
      propTypes: {
        displayUser: l.default.user().isRequired, isSignedIn: React.PropTypes.bool.isRequired, showFollowWidget: u.PropTypes.bool, signInRedirectUrl: React.PropTypes.string.isRequired,
      },
      defaultProps: { showFollowWidget: !1 },
      renderFollowComponentIfNeeded() { return this.props.showFollowWidget ? this.props.isSignedIn ? this.props.displayUser.authorId ? n(c.default, { authorId: this.props.displayUser.authorId, className: 'gr-button--small u-displayBlock' }) : n(m.default, { displayUser: this.props.displayUser }) : n('a', { href: this.props.signInRedirectUrl, className: 'gr-button gr-button--small gr-box gr-box--inline gr-box--marginRightSmall', rel: 'nofollow' }, void 0, 'Follow') : void 0; },
      render() { return n('div', { className: 'readingNotesAnnotator gr-mediaFlexbox gr-mediaFlexbox--alignItemsCenter' }, void 0, n('div', { className: 'readingNotesAnnotator__userIcon gr-mediaFlexbox__media' }, void 0, n(_.default, { user: this.props.displayUser, size: p.ICON_SIZES.MEDIUM })), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'readingNotesAnnotator__name' }, void 0, 'by ', n(v.default, { user: this.props.displayUser, className: 'u-defaultType' })), this.renderFollowComponentIfNeeded())); },
    });
  }, {
    '../../modules/shape_icon_values': 19, '../author/author_follow_button': 73, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../user/user_follow_widget': 201, '../user/user_icon': 202, '../user/user_profile_link': 203, react: 'react',
  }],
  166: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('react'); const l = e('../shared/gr_prop_types'); const u = o(l); const d = e('./reading_notes_annotator'); const c = o(d); r.default = a.default.createClass({
      displayName: 'ReadingNotesHeader',
      propTypes: {
        user: u.default.user().isRequired, headline: i.PropTypes.string.isRequired, isSignedIn: React.PropTypes.bool.isRequired, signInRedirectUrl: React.PropTypes.string.isRequired, viewerIsOwner: i.PropTypes.bool.isRequired,
      },
      renderAnnotator() {
        return this.props.viewerIsOwner ? void 0 : n(c.default, {
          displayUser: this.props.user, isSignedIn: this.props.isSignedIn, showFollowWidget: !this.props.viewerIsOwner, signInRedirectUrl: this.props.signInRedirectUrl,
        });
      },
      render() { return n('div', { className: 'readingNotesHeader' }, void 0, n('div', { className: 'gr-h3 gr-h3--serif readingNotesHeader__headline' }, void 0, this.props.headline), this.renderAnnotator()); },
    });
  }, {
    '../gr_component_factory': 108, '../shared/gr_prop_types': 180, './reading_notes_annotator': 165, react: 'react',
  }],
  167: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.MESSAGE = void 0; const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal'); const d = o(u); const c = e('../../react_components/want_to_read/want_to_read_button'); const p = o(c); const f = r.MESSAGE = 'To make your notes and highlights visible, first add this book to one of your shelves.'; r.default = l.default.createClass({
      displayName: 'ReadingNotesShelvingModal', propTypes: { book: a.default.PropTypes.shape({ id: a.default.PropTypes.string.isRequired, title: a.default.PropTypes.string.isRequired, imageUrl: a.default.PropTypes.string.isRequired }).isRequired }, renderModalContent() { return n('div', { className: 'gr-mediaFlexbox' }, void 0, n('img', { className: 'gr-mediaFlexbox__media u-marginRightMedium', src: this.props.book.imageUrl, alt: this.props.book.title }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('h3', { className: 'gr-h3 gr-h3--noTopMargin gr-h3--serif' }, void 0, 'Add your book'), n('div', { className: 'readingNotesShelvingModal__text' }, void 0, f), n(p.default, { bookId: this.props.book.id, bookTitle: this.props.book.title, uniqueId: 'readingNotesShelvingModalWTR' }))); }, render() { return n(d.default, { id: 'readingNotesShelvingModal', bemModifiers: 'readingNotesShelving' }, void 0, this.renderModalContent()); },
    });
  }, {
    '../../react_components/want_to_read/want_to_read_button': 218, '../gr_component_factory': 108, '../modal': 146, react: 'react',
  }],
  168: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal_trigger'); const d = o(u); const c = e('../../react_stores/shelvings_store'); const p = o(c); const f = e('../../react_mixins/gr_reflux'); r.default = l.default.createClass({
      displayName: 'ReadingNotesShelvingModalTrigger', propTypes: { bookId: a.default.PropTypes.string.isRequired, innerHtml: a.default.PropTypes.string.isRequired }, mixins: [(0, f.connectToLazyStore)(p.default, 'bookId', { stateKey: 'shelvings' })], renderInnerHtml() { return n('span', { dangerouslySetInnerHTML: { __html: this.props.innerHtml } }); }, render() { return this.state.shelvings.exclusiveShelfName === null ? n(d.default, { id: 'readingNotesShelvingModal', bemModifiers: 'readingNotesShelving' }, void 0, n('div', { className: 'readingNotesShelvingModalTrigger__unclickableInnerHtml' }, void 0, this.renderInnerHtml())) : this.renderInnerHtml(); },
    });
  }, {
    '../../react_mixins/gr_reflux': 236, '../../react_stores/shelvings_store': 258, '../gr_component_factory': 108, '../modal_trigger': 147, react: 'react',
  }],
  169: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('../modules/ads/google_ad_helper'); r.default = l.default.createClass({
      displayName: 'ScrollTracker', propTypes: { experiments: a.default.PropTypes.arrayOf(a.default.PropTypes.string), trackedEventId: a.default.PropTypes.string.isRequired, viewportExpansion: a.default.PropTypes.number }, getDefaultProps() { return { experiments: [], viewportExpansion: 0 }; }, componentDidMount() { const e = this; (0, u.lazyLoadOnView)((t) => { t.target.id === e.props.trackedEventId && (e.props.experiments.length ? $j.post('/track_conversion_action', { event: e.props.trackedEventId, options: { experiments: e.props.experiments, multiple: !0 } }) : $j.post('/track/track', { tid: e.props.trackedEventId })); }); }, render() { return n('div', { id: this.props.trackedEventId, className: 'lazyload', 'data-expand': `${this.props.viewportExpansion}` }); },
    });
  }, { '../modules/ads/google_ad_helper': 4, './gr_component_factory': 108, react: 'react' }],
  170: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../gr_component_factory'); const c = o(d); const p = e('reflux'); const f = o(p); const m = e('react-onclickoutside'); const h = o(m); const _ = e('classnames'); const g = o(_); const v = e('../../modules/keys'); const y = o(v); const b = e('../../react_stores/book_search_store_factory'); const k = o(b); const S = e('./book_search_results'); const P = o(S); const T = e('../spinner'); const w = o(T); const N = e('../../react_mixins/factory_store_mixin'); const R = o(N); const M = 300; r.default = c.default.createClass({
      displayName: 'BookSearch',
      mixins: [h.default, f.default.ListenerMixin, (0, R.default)(k.default)],
      propTypes: {
        autoFocus: i.default.PropTypes.bool, onChooseResult: i.default.PropTypes.func.isRequired, maxResults: i.default.PropTypes.number, shelfName: i.default.PropTypes.string, searchPath: i.default.PropTypes.string.isRequired, closeAfterResultChosen: i.default.PropTypes.bool, autocompleteUrl: i.default.PropTypes.string.isRequired,
      },
      getDefaultProps() { return { autoFocus: !1, maxResults: 5, closeAfterResultChosen: !1 }; },
      componentDidMount() { const e = this; this.delayedSearch = u.default.debounce((t) => { e.actions.search(t.target.value, e.props.autocompleteUrl); }, M); },
      hide() { this.actions.setShowResultsContainer(!1); },
      handleClickOutside() { this.hide(); },
      handleSearch(e) { u.default.isEmpty(e.target.value) ? this.hide() : (e.persist(), this.delayedSearch(e)); },
      handleClick(e) { u.default.isEmpty(this.state.query) || this.handleSearch(e); },
      handleChoice(e) { this.props.onChooseResult(e), this.props.closeAfterResultChosen && this.hide(); },
      handleKeyPress(e) { const t = Math.min(this.props.maxResults, this.state.results.length); y.default.isEnter(e.keyCode) && this.state.activeResult !== null ? (this.handleChoice(this.state.activeResult), e.preventDefault()) : y.default.isArrowDown(e.keyCode) ? this.actions.selectNextResult(t) : y.default.isArrowUp(e.keyCode) ? this.actions.selectPreviousResult(t) : y.default.isEscape(e.keyCode) && this.hide(); },
      renderInputIcon() { const e = this.withBemModifiers('searchBox__icon', 'loadingSpinner'); const t = (0, g.default)('searchBox__icon--magnifyingGlass gr-iconButton', this.withBemModifiers('searchBox__icon')); return this.state.showLoadingSpinner ? s('span', { className: e }, void 0, s(w.default, {})) : s('button', { type: 'submit', className: t, 'aria-label': 'Search' }); },
      render() {
        const e = (0, g.default)(this.withBemModifiers('searchBox')); const t = (0, g.default)(this.withBemModifiers('searchBox__input')); return s('div', { acceptCharset: 'UTF-8', className: e, onKeyDown: this.handleKeyPress }, void 0, s('form', {
          autoComplete: 'off', action: this.props.searchPath, className: 'searchBox__form', role: 'search', 'aria-label': 'Search for books to add to your shelves',
        }, void 0, s('input', {
          className: t, autoComplete: 'off', autoFocus: this.props.autoFocus, name: 'q', type: 'text', placeholder: 'Search books', 'aria-label': 'Search books', onClick: this.handleClick, onChange: this.handleSearch, 'aria-controls': 'searchResults',
        }), this.renderInputIcon(), this.state.showResultsContainer ? i.default.createElement(P.default, n({}, this.props, this.state, { onChooseResult: this.handleChoice, mouseoverAction: this.actions.selectSpecificResult })) : null));
      },
    });
  }, {
    '../../modules/keys': 16, '../../react_mixins/factory_store_mixin': 235, '../../react_stores/book_search_store_factory': 242, '../gr_component_factory': 108, '../spinner': 195, './book_search_results': 172, classnames: 'classnames', lodash: 'lodash', react: 'react', 'react-onclickoutside': 'react-onclickoutside', reflux: 'reflux',
  }],
  171: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('../author/author_badge'); const m = o(f); r.default = l.default.createClass({
      displayName: 'BookSearchResult',
      propTypes: { book: d.default.book().isRequired, onChooseResult: a.default.PropTypes.func.isRequired },
      render() {
        const e = this; const t = (0, p.default)('gr-mediaFlexbox', 'gr-book--navbar', 'gr-hyperlink', 'gr-hyperlink--naked', 'gr-hyperlink--noUnderline', 'gr-bookSearchResults__result'); return n('a', {
          className: t, href: '#', 'aria-label': 'Search result', onClick() { e.props.onChooseResult(e.props.book); },
        }, void 0, n('img', { className: 'gr-mediaFlexbox__media', src: this.props.book.imageUrl, alt: '' }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-book__title gr-book__title--navbar u-defaultType' }, void 0, this.props.book.title), n('div', { className: 'gr-book__author gr-book__author--navbar' }, void 0, 'by ', this.props.book.author.name, a.default.createElement(m.default, this.props.book.author))));
      },
    });
  }, {
    '../author/author_badge': 72, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, classnames: 'classnames', react: 'react',
  }],
  172: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('../drop_down_list'); const p = o(c); const f = e('./book_search_result'); const m = o(f); const h = e('../gr_component_factory'); const _ = o(h); r.default = _.default.createClass({
      displayName: 'BookSearchResults',
      propTypes: {
        maxResults: a.default.PropTypes.number.isRequired, query: a.default.PropTypes.string, results: a.default.PropTypes.array.isRequired, shelfName: a.default.PropTypes.string, searchPath: a.default.PropTypes.string, onChooseResult: a.default.PropTypes.func.isRequired, mouseoverAction: a.default.PropTypes.func.isRequired, activeResult: a.default.PropTypes.shape({ title: a.default.PropTypes.string.isRequired, bookId: a.default.PropTypes.string.isRequired }),
      },
      renderLastSearchResultItem(e) { const t = (0, d.default)('gr-buttonAsLink', 'gr-bookSearchResults__lastItem', this.withBemElement('gr-bookSearchResults', 'lastItem')); return n('button', { className: t, type: 'submit' }, void 0, e); },
      render() {
        const e = this; const t = (0, d.default)(this.withBemModifiers('gr-bookSearchResults'), 'gr-box', 'gr-box--withShadow'); return n('div', {
          className: t, id: `bookSearchResults${this.props.query}${this.props.results.length}`, 'aria-live': 'polite', 'aria-label': 'Book search results',
        }, void 0, n(p.default, { maxListItems: this.props.maxResults }, void 0, this.props.results.length > 0 ? l.default.map(l.default.slice(this.props.results, 0, this.props.maxResults), t => n('div', { className: (0, d.default)('gr-bookSearchResults__item', { 'gr-bookSearchResults__item--active': t === e.props.activeResult }), onMouseOver() { e.props.mouseoverAction(t.bookId); } }, t.bookId, n(m.default, { book: t, onChooseResult: e.props.onChooseResult }))) : this.renderLastSearchResultItem(`Search for "${this.props.query}"…`), this.props.results.length > 0 ? this.renderLastSearchResultItem(`See all results for "${this.props.query}"`) : null));
      },
    });
  }, {
    '../drop_down_list': 90, '../gr_component_factory': 108, './book_search_result': 171, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  173: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('../gr_component_factory'); const u = o(l); const d = e('../header/nav_search'); const c = o(d); const p = e('../search/search_toggle'); const f = o(p); r.default = u.default.createClass({ displayName: 'SearchMobileNav', propTypes: { autocompleteUrl: i.default.PropTypes.string.isRequired, searchPath: i.default.PropTypes.string.isRequired }, render() { return s('div', { className: 'siteHeader__primaryNavSeparateLine siteHeader__primaryNavSeparateLine--search' }, void 0, i.default.createElement(c.default, n({}, this.props, { autoFocus: !0, bemModifiers: 'primaryNavSeparateLine' })), s(f.default, { toggleType: p.SEARCH_TOGGLE_TYPES.CANCEL })); } });
  }, {
    '../gr_component_factory': 108, '../header/nav_search': 125, '../search/search_toggle': 174, react: 'react',
  }],
  174: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.mapDispatchToProps = r.mapStateToProps = r.component = r.SEARCH_TOGGLE_TYPES = void 0; const s = e('react'); const a = o(s); const i = e('react-redux'); const l = e('../gr_component_factory'); const u = o(l); const d = e('lodash'); const c = e('../../react_actions/header/search_actions'); const p = e('../../modules/shared/touch_not_ready_helper'); const f = r.SEARCH_TOGGLE_TYPES = { ICON: 'icon', CANCEL: 'Cancel' }; const m = r.component = u.default.createClass({
      displayName: 'SearchToggle',
      propTypes: { searchIsActive: a.default.PropTypes.bool.isRequired, toggleType: a.default.PropTypes.oneOf((0, d.values)(f)), onToggleSearch: a.default.PropTypes.func.isRequired },
      getDefaultProps() { return { searchIsActive: !1 }; },
      toggleSearch(e) { return (0, p.acknowledgeEvent)(e), this.props.onToggleSearch(!this.props.searchIsActive); },
      hideSearch() { return this.props.onToggleSearch(!1); },
      render() {
        switch (this.props.toggleType) {
          case f.ICON: return n('button', {
            className: 'siteHeader__searchIcon gr-iconButton', onClick: this.toggleSearch, 'aria-label': 'Toggle search', type: 'button', 'data-ux-click': !0,
          }); case f.CANCEL: return n('button', {
            className: 'gr-buttonAsLink', onClick: this.hideSearch, 'aria-label': 'Hide search', type: 'button',
          }, void 0, f.CANCEL); default: return null;
        }
      },
    }); const h = r.mapStateToProps = function (e, t) { return Object.assign({}, t, e); }; const _ = r.mapDispatchToProps = function (e) { return { onToggleSearch(t) { return e((0, c.toggleSearch)(t)); } }; }; r.default = (0, i.connect)(h, _)(m);
  }, {
    '../../modules/shared/touch_not_ready_helper': 21, '../../react_actions/header/search_actions': 37, '../gr_component_factory': 108, lodash: 'lodash', react: 'react', 'react-redux': 'react-redux',
  }],
  175: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = r, e;
    } const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103;
      return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('react'); const i = o(a); const l = e('./gr_component_factory'); const u = o(l); const d = e('classnames'); const c = o(d); const p = e('../modules/shape_icon_values'); const f = e('lodash'); r.default = u.default.createClass({
      displayName: 'ShapeIcon',
      propTypes: {
        imageUrl: i.default.PropTypes.string.isRequired, imageAlt: i.default.PropTypes.string.isRequired, includeLink: i.default.PropTypes.bool, linkUrl: i.default.PropTypes.string, size: i.default.PropTypes.oneOf((0, f.values)(p.ICON_SIZES)), shape: i.default.PropTypes.oneOf((0, f.values)(p.ICON_SHAPES)), border: i.default.PropTypes.bool,
      },
      getShapeClass() { const e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0]; let t = `${this.props.shape}Icon`; return e && (t += `--${e}`), t; },
      getDefaultProps() {
        return {
          includeLink: !1, size: p.ICON_SIZES.SMALL, shape: p.ICON_SHAPES.CIRCLE, border: !1,
        };
      },
      render() { let e; const t = (0, c.default)(this.props.className, (e = {}, n(e, `${this.getShapeClass()}`, !0), n(e, `${this.getShapeClass('medium')}`, this.props.size === p.ICON_SIZES.MEDIUM), n(e, `${this.getShapeClass('large')}`, this.props.size === p.ICON_SIZES.LARGE), n(e, `${this.getShapeClass('border')}`, this.props.border), e)); return this.props.includeLink && this.props.linkUrl ? s('a', { href: this.props.linkUrl }, void 0, s('img', { className: t, src: this.props.imageUrl, alt: this.props.imageAlt })) : s('img', { className: t, src: this.props.imageUrl, alt: this.props.imageAlt }); },
    });
  }, {
    '../modules/shape_icon_values': 19, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  176: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'ShareButton', propTypes: { textLabel: a.default.PropTypes.string }, getDefaultProps() { return { textLabel: 'Share' }; }, render() { return n('button', { className: 'gr-shareButton', type: 'button' }, void 0, n('span', { className: 'gr-shareButton__innerWrapper' }, void 0, n('span', { className: 'gr-shareButton__icon' }), n('span', { className: 'gr-shareButton__textLabel' }, void 0, this.props.textLabel))); },
    });
  }, { './gr_component_factory': 108, react: 'react' }],
  177: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('./gr_component_factory'); const i = o(a); const l = e('./shared/gr_prop_types'); const u = o(l); const d = e('reflux'); const c = o(d); const p = e('./modal_trigger'); const f = o(p); const m = e('./share_button'); const h = o(m); const _ = e('./modal'); const g = o(_); const v = e('./share_social'); const y = o(v); const b = e('./user_content/string_counter'); const k = o(b); const S = e('../react_stores/share_dialog_store'); const P = o(S); const T = e('../react_actions/share_dialog_actions'); const w = o(T); const N = e('classnames'); const R = o(N); const M = e('../modules/env_utils'); const C = o(M); const x = e('./flash_message'); const A = o(x); const I = e('./sharing/previews/share_dialog_book_preview'); const L = o(I); const U = e('./sharing/previews/share_dialog_topic_preview'); const E = o(U); const O = e('./sharing/previews/share_dialog_blog_preview'); const B = o(O); const j = e('./sharing/previews/share_dialog_interview_preview'); const F = o(j); r.default = i.default.createClass({
      displayName: 'ShareDialog',
      mixins: [c.default.connect(P.default, 'sharingDialog')],
      propTypes: u.default.shareDialog(),
      getDefaultProps() { return { includePreview: !1 }; },
      getInitialState() { return { uniqueId: Math.random(1e6) }; },
      getResourceTypeIdentifier() { return this.props.sharingData.resourceTypeFriendlyText.replace(/\s/g, '').toLowerCase(); },
      getShareModalId() { return `share-${this.getResourceTypeIdentifier()}-modal${this.state.uniqueId}`; },
      socialExists(e) { return this.props.social[e].facebook || this.props.social[e].twitter || this.props.social[e].pinterest || this.props.social[e].copyLink; },
      renderPreview() { if (!this.props.includePreview) return null; let e = void 0; const t = this.props.sharingData.resourceTypeFriendlyText; switch (t) { case 'book': e = React.createElement(L.default, this.props.previewData); break; case 'discussion': e = React.createElement(E.default, this.props.previewData); break; case 'blog': e = React.createElement(B.default, this.props.previewData); break; case 'interview': e = React.createElement(F.default, this.props.previewData); } return e || void 0; },
      renderSocialInModal(e) {
        if (this.socialExists('inModal')) {
          const t = `${e} share on:`; return s('div', { className: 'shareModal__socialContainer' }, void 0, s('div', { className: 'shareModal__socialPrompt' }, void 0, t), React.createElement(y.default, n({}, this.props.social.inModal, {
            bemModifiers: 'modal', fbOptions: this.props.social.fbOptions, twitterOptions: this.props.social.twitterOptions, pinterestOptions: this.props.social.pinterestOptions, metricName: `${this.getResourceTypeIdentifier()}_sharingModal`,
          })));
        } return null;
      },
      renderCharacterCounter() {
        const e = this.state.sharingDialog.sharingTextInputValue || ''; return s(k.default, {
          counterType: 'character', maxLength: S.MAXIMUM_SHARING_TEXT_LENGTH, warnLength: S.WARNING_SHARING_TEXT_LENGTH, text: e,
        });
      },
      handleShare() { const e = this.props.sharingData; const t = this.state.sharingDialog.sharingTextInputValue; w.default.submitShare(e, t); },
      renderSharePrompt() {
        const e = (0, R.default)('shareModal__bottomContainer', { 'shareModal__bottomContainer--noSocial': !this.socialExists('inModal'), 'shareModal__bottomContainer--social': this.socialExists('inModal') }); return s('span', { className: 'shareModal' }, void 0, s('h2', { className: 'gr-h3 gr-h3--serif shareModal__heading' }, void 0, 'Share this ', this.props.sharingData.resourceTypeFriendlyText, ' on Goodreads'), this.renderShareError(), s('textarea', {
          'aria-label': 'Share text', placeholder: `Say something about this ${this.props.sharingData.resourceTypeFriendlyText}...`, value: this.state.sharingDialog.sharingTextInputValue, onChange(e) { w.default.updateSharingTextInputValue(e.target.value); }, className: 'gr-textInput shareModal__textInput',
        }), this.renderCharacterCounter(), this.renderPreview(), s('button', {
          className: 'gr-button gr-button--Large shareModal__button', onClick: this.handleShare, type: 'button', disabled: this.state.sharingDialog.shareModalButtonDisabled,
        }, void 0, 'Share'), s('div', { className: e }, void 0, this.renderSocialInModal('Or')));
      },
      renderShareSuccess() { return s('span', { className: 'shareModal' }, void 0, s('h2', { className: 'gr-h3 gr-h3--serif shareModal__heading' }, void 0, 'Shared!'), s('h3', { className: 'gr-hyperlink shareModal__link' }, void 0, s('a', { href: this.state.sharingDialog.sharingUrl, 'aria-label': `Link to ${this.state.sharingDialog.sharingDisplayName}` }, void 0, 'View post')), s('div', { className: 'shareModal__bottomContainer shareModal__bottomContainer--shared' }, void 0, this.renderSocialInModal('Also'))); },
      renderShareError() { if (this.state.sharingDialog.error) { const e = this.props.sharingData.resourceTypeFriendlyText; const t = this.state.sharingDialog.errorText || `Something went wrong, and your ${e} wasn't shared. Please try again later.`; return s(A.default, { category: 'error', message: t }); } return null; },
      renderModalContent() { return this.state.sharingDialog.shared ? this.renderShareSuccess() : this.renderSharePrompt(); },
      renderSocialOutsideModal() {
        return this.socialExists('outsideModal') ? React.createElement(y.default, n({}, this.props.social.outsideModal, {
          fbOptions: this.props.social.fbOptions, twitterOptions: this.props.social.twitterOptions, pinterestOptions: this.props.social.pinterestOptions, metricName: `${this.getResourceTypeIdentifier()}_shareModuleBar`, bemModifiers: 'shareBar',
        })) : null;
      },
      shouldRedirect() { return this.props.signInUrl && !this.props.signedIn; },
      handleClick() { this.shouldRedirect() ? this.redirectToSignIn() : w.default.openShareModal(this.getResourceTypeIdentifier()); },
      getSignInUrl() { const e = C.default.getCurrentPath(); return `${this.props.signInUrl}?returnurl=${e}`; },
      redirectToSignIn() { C.default.setLocationUrl(this.getSignInUrl()); },
      renderModal() { return this.shouldRedirect() ? null : s(g.default, { id: this.getShareModalId(), bemModifiers: 'share' }, void 0, this.renderModalContent()); },
      render() { return s('div', {}, void 0, this.renderModal(), s('div', { className: 'shareModuleBar' }, void 0, s(f.default, { id: this.getShareModalId(), clickHandler: this.handleClick, bemModifiers: 'shareModule' }, void 0, s(h.default, {})), this.renderSocialOutsideModal())); },
    });
  }, {
    '../modules/env_utils': 13, '../react_actions/share_dialog_actions': 44, '../react_stores/share_dialog_store': 256, './flash_message': 106, './gr_component_factory': 108, './modal': 146, './modal_trigger': 147, './share_button': 176, './share_social': 178, './shared/gr_prop_types': 180, './sharing/previews/share_dialog_blog_preview': 185, './sharing/previews/share_dialog_book_preview': 186, './sharing/previews/share_dialog_interview_preview': 187, './sharing/previews/share_dialog_topic_preview': 189, './user_content/string_counter': 207, classnames: 'classnames', reflux: 'reflux',
  }],
  178: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('./sharing/facebook_share'); const d = o(u); const c = e('./sharing/twitter_share'); const p = o(c); const f = e('./sharing/pinterest_share'); const m = o(f); const h = e('classnames'); const _ = o(h); r.default = l.default.createClass({
      displayName: 'ShareSocial',
      propTypes: {
        facebook: a.default.PropTypes.bool, twitter: a.default.PropTypes.bool, pinterest: a.default.PropTypes.bool, copyLink: a.default.PropTypes.bool, fbOptions: a.default.PropTypes.object, twitterOptions: a.default.PropTypes.object, pinterestOptions: a.default.PropTypes.object, metricName: a.default.PropTypes.string,
      },
      getDefaultProps() {
        return {
          facebook: !1, twitter: !1, pinterest: !1, copyLink: !1, metricName: '',
        };
      },
      renderSocialPlatform(e) { if (!this.props[e]) return null; const t = `SocialSharing_${this.props.metricName}_${e}`; switch (e) { case 'facebook': return n(d.default, { options: this.props.fbOptions, metricName: t, bemModifiers: this.props.bemModifiers }); case 'twitter': return n(p.default, { options: this.props.twitterOptions, metricName: t, bemModifiers: this.props.bemModifiers }); case 'pinterest': return n(m.default, { options: this.props.pinterestOptions, metricName: t, bemModifiers: this.props.bemModifiers }); } },
      render() { const e = (0, _.default)(this.withBemModifiers('shareSocialButtons'), this.props.className); return n('div', { className: e }, void 0, this.renderSocialPlatform('facebook'), this.renderSocialPlatform('twitter'), this.renderSocialPlatform('pinterest')); },
    });
  }, {
    './gr_component_factory': 108, './sharing/facebook_share': 183, './sharing/pinterest_share': 184, './sharing/twitter_share': 190, classnames: 'classnames', react: 'react',
  }],
  179: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }), r.default = { get(e) { let t = null; const r = window.$j; return r && r.each(document.cookie.split('; '), (r, o) => { const n = o.split('='); n[0] === e && (t = n[1]); }), t; }, set(e, t, r) { r = r || 365; const o = new Date(); o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3); const n = `; expires=${o.toGMTString()}`; document.cookie = `${e}=${encodeURIComponent(t)}${n}; path=/`; } };
  }, {}],
  180: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { function t(t, r, o, n) { return n || (n = '<<anonymous>>'), l.default.isNull(r[o]) || l.default.isUndefined(r[o]) ? t ? new Error(`Required property \`${o}\` was not specified in ` + `\`${n}\`.`) : null : e(r, o, n); } const r = t.bind(null, !1); return r.isRequired = t.bind(null, !0), r; }Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); var l = o(i); const u = function (e, t, r) { const o = e[t]; const n = l.default.isString(o) ? new Date(o) : o; return !l.default.isDate(n) || l.default.isNaN(n.getTime()) ? new Error(`Property '${t}' must be a Date. ${r} was supplied: '${o}'.`) : void 0; }; const d = function (e, t, r) { const o = e[t]; return o <= 0 ? new Error(`Property '${t}' must be > 0. ${r} was supplied: '${o}'.`) : void 0; }; const c = function (e, t) { return l.default.merge({}, e, t); }; const p = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = {
        viewableName: a.default.PropTypes.string.isRequired, profileImage: a.default.PropTypes.string.isRequired, profileUrl: a.default.PropTypes.string, informalName: a.default.PropTypes.string,
      }; return a.default.PropTypes.shape(c(t, e));
    }; const f = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = {
        bookId: a.default.PropTypes.string, workId: a.default.PropTypes.string, bookUrl: a.default.PropTypes.string, authorName: a.default.PropTypes.string, title: a.default.PropTypes.string, imageUrl: a.default.PropTypes.string, numPages: a.default.PropTypes.number,
      }; return a.default.PropTypes.shape(c(t, e));
    }; const m = function () { const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = g(); return a.default.PropTypes.shape(c(t, e)); }; const h = function () {
      return a.default.PropTypes.shape({
        id: a.default.PropTypes.number.isRequired, name: a.default.PropTypes.string.isRequired, isGoodreadsAuthor: a.default.PropTypes.bool, profileImage: a.default.PropTypes.string, profileUrl: a.default.PropTypes.string.isRequired,
      });
    }; const _ = function () { return { html: a.default.PropTypes.string.isRequired, truncatedHtml: a.default.PropTypes.string }; }; var g = function () {
      return {
        html: a.default.PropTypes.string, fullContentUrl: a.default.PropTypes.string, fullContentText: a.default.PropTypes.string, truncated: a.default.PropTypes.bool.isRequired, className: a.default.PropTypes.string, bookDescriptionTargetingData: a.default.PropTypes.object,
      };
    }; const v = function () {
      return a.default.PropTypes.shape({
        user: p().isRequired, friendUser: p().isRequired, isMyFriend: a.default.PropTypes.bool.isRequired, addFriendUrl: a.default.PropTypes.string, compareBooksUrl: a.default.PropTypes.string, ratingDetailsText: a.default.PropTypes.string, currentlyReadingBook: f(),
      });
    }; const y = function () {
      return a.default.PropTypes.shape({
        user: p().isRequired, followingUser: p().isRequired, ratingDetailsText: a.default.PropTypes.string, currentlyReadingBook: f(),
      });
    }; const b = function () { return a.default.PropTypes.shape({ type: a.default.PropTypes.string, id: a.default.PropTypes.number, uri: a.default.PropTypes.string }); }; const k = function () {
      return a.default.PropTypes.shape({
        canComment: a.default.PropTypes.bool.isRequired, commentable: a.default.PropTypes.bool.isRequired, subjectKey: a.default.PropTypes.string.isRequired, subject: b(), subjectUrl: a.default.PropTypes.string,
      });
    }; const S = function () { return a.default.PropTypes.shape({ key: a.default.PropTypes.string.isRequired, label: a.default.PropTypes.string.isRequired, isLikeable: a.default.PropTypes.bool.isRequired }); }; const P = function () { return a.default.PropTypes.shape({ author: h().isRequred, title: a.default.PropTypes.string, url: a.default.PropTypes.string }); }; const T = function () {
      return a.default.PropTypes.shape({
        title: a.default.PropTypes.string, body: a.default.PropTypes.object.isRequired, url: a.default.PropTypes.string, imageUrl: a.default.PropTypes.string, typeDisplayName: a.default.PropTypes.string,
      });
    }; const w = function () {
      return a.default.PropTypes.shape({
        title: a.default.PropTypes.string, body: a.default.PropTypes.object, url: a.default.PropTypes.string, imageUrl: a.default.PropTypes.string, authorImageUrl: a.default.PropTypes.string, author: a.default.PropTypes.string, bookImageUrl: a.default.PropTypes.string, bookTitle: a.default.PropTypes.string, typeDisplayName: a.default.PropTypes.string,
      });
    }; const N = function () { return a.default.PropTypes.shape({ user: p().isRequired, author: h().isRequred, userAuthorFollowingsUrl: a.default.PropTypes.string }); }; const R = function () { return a.default.PropTypes.shape({ author: h().isRequired, message: a.default.PropTypes.string, url: a.default.PropTypes.string.isRequired }); }; const M = function () {
      return a.default.PropTypes.shape({
        author: h().isRequired, body: a.default.PropTypes.object.isRequired, url: a.default.PropTypes.string.isRequired, quotesAuthorUrl: a.default.PropTypes.string.isRequired,
      });
    }; const C = function () {
      return a.default.PropTypes.shape({
        name: a.default.PropTypes.string.isRequired, url: a.default.PropTypes.string.isRequired, iconUrl: a.default.PropTypes.string.isRequired, id: a.default.PropTypes.number.isRequired, lastActiveAt: n(u),
      });
    }; const x = function () {
      return a.default.PropTypes.shape({
        id: a.default.PropTypes.number.isRequired, title: a.default.PropTypes.string.isRequired, url: a.default.PropTypes.string.isRequired, totalPosts: a.default.PropTypes.string.isRequired, newPosts: a.default.PropTypes.string, newCommentsUrl: a.default.PropTypes.string, updatedAt: n(u), folder: a.default.PropTypes.shape({ name: a.default.PropTypes.string, url: a.default.PropTypes.string }),
      });
    }; const A = {
      user: p().isRequired, pollName: a.default.PropTypes.string.isRequired, answer: a.default.PropTypes.object.isRequired, url: a.default.PropTypes.string.isRequired, imageUrl: a.default.PropTypes.string.isRequired, isGroupPoll: a.default.PropTypes.bool.isRequired, isChoicePoll: a.default.PropTypes.bool.isRequired, groupName: a.default.PropTypes.string, groupUrl: a.default.PropTypes.string,
    }; const I = function () { return a.default.PropTypes.shape(A); }; const L = function () {
      return a.default.PropTypes.shape(c(A, {
        choiceYear: a.default.PropTypes.number.isRequired, choiceUrl: a.default.PropTypes.string.isRequired, badgeUrl: a.default.PropTypes.string.isRequired, votedBook: f().isRequired,
      }));
    }; const U = function () {
      return {
        category: a.default.PropTypes.number.isRequired, questionText: a.default.PropTypes.string.isRequired, isSpoiler: a.default.PropTypes.bool.isRequired, questionUrl: a.default.PropTypes.string.isRequired, user: p().isRequired, authorQuestionsUrl: a.default.PropTypes.string, book: f(),
      };
    }; const E = function () {
      return {
        user: p().isRequired, answerText: a.default.PropTypes.shape(g()), isSpoiler: a.default.PropTypes.bool.isRequired, communityQuestion: a.default.PropTypes.shape(U()).isRequired,
      };
    }; const O = function () {
      return a.default.PropTypes.shape({
        book: f(), customText: a.default.PropTypes.object, helpLink: a.default.PropTypes.string, defaultIcon: a.default.PropTypes.string, numAdditionalFriends: a.default.PropTypes.number, friendActionText: a.default.PropTypes.string, firstFriend: p(), customTextReview: a.default.PropTypes.object, similarBook: f(), similarBookShelf: a.default.PropTypes.string, similarBookShelfUrl: a.default.PropTypes.string, genres: a.default.PropTypes.array,
      });
    }; const B = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = {
        actor: a.default.PropTypes.shape({ viewableName: a.default.PropTypes.string, profileImage: a.default.PropTypes.string, profileUrl: a.default.PropTypes.string }), actors: a.default.PropTypes.array, createdAt: a.default.PropTypes.string, body: a.default.PropTypes.string, resource: a.default.PropTypes.shape({ text: a.default.PropTypes.string, url: a.default.PropTypes.string }), viewed: a.default.PropTypes.boolean, moreActors: a.default.PropTypes.boolean,
      }; return a.default.PropTypes.shape(c(t, e));
    }; const j = function () {
      return a.default.PropTypes.shape({
        viewableName: a.default.PropTypes.string.isRequired, profileImage: a.default.PropTypes.string.isRequired, profilePath: a.default.PropTypes.string.isRequired, books: a.default.PropTypes.arrayOf(a.default.PropTypes.shape({ imageUrl: a.default.PropTypes.string.isRequired, title: a.default.PropTypes.string.isRequired })).isRequired, subtitle: a.default.PropTypes.string.isRequired,
      }).isRequired;
    }; const F = function (e) { return a.default.PropTypes.shape({ destination: a.default.PropTypes.string.isRequired, type: a.default.PropTypes.string.isRequired, object: e }); }; const q = function () {
      return F(a.default.PropTypes.shape({
        id: a.default.PropTypes.string.isRequired, name: a.default.PropTypes.string.isRequired, isGoodreadsAuthor: a.default.PropTypes.bool, profileImage: a.default.PropTypes.string,
      }));
    }; const D = function () {
      return F(a.default.PropTypes.shape({
        id: a.default.PropTypes.string.isRequired, authorName: a.default.PropTypes.string.isRequired, isGoodreadsAuthor: a.default.PropTypes.bool, title: a.default.PropTypes.string.isRequired, imageUrl: a.default.PropTypes.string,
      }));
    }; const H = function () { return F(a.default.PropTypes.shape({ id: a.default.PropTypes.string.isRequired, name: a.default.PropTypes.string.isRequired, profileImage: a.default.PropTypes.string })); }; const G = function () {
      return a.default.PropTypes.shape({
        asin: a.default.PropTypes.string.isRequired, imageUrl: a.default.PropTypes.string.isRequired, title: a.default.PropTypes.string.isRequired, authorName: a.default.PropTypes.string.isRequired, sharedCount: a.default.PropTypes.number.isRequired, highlightCount: a.default.PropTypes.number, noteCount: a.default.PropTypes.number, readingNotesUrl: a.default.PropTypes.string.isRequired, knhCta: a.default.PropTypes.string.isRequired, noSharedAnnotations: a.default.PropTypes.bool.isRequired,
      });
    }; const $ = function () {
      return a.default.PropTypes.shape({
        title: a.default.PropTypes.string.isRequired, url: a.default.PropTypes.string.isRequired, id: a.default.PropTypes.number.isRequired, year: a.default.PropTypes.number.isRequired, type: a.default.PropTypes.string.isRequired, maxGoal: a.default.PropTypes.number.isRequired, isFinished: a.default.PropTypes.bool, primaryColor: a.default.PropTypes.string.isRequired, secondaryColor: a.default.PropTypes.string.isRequired, images: a.default.PropTypes.shape({ badge: a.default.PropTypes.string.isRequired, completed: a.default.PropTypes.string.isRequired }),
      });
    }; const z = function () {
      return {
        signedIn: a.default.PropTypes.bool,
        signInUrl: a.default.PropTypes.string,
        social: a.default.PropTypes.shape({
          inModal: a.default.PropTypes.shape({
            facebook: a.default.PropTypes.bool.isRequired, twitter: a.default.PropTypes.bool.isRequired, pinterest: a.default.PropTypes.bool.isRequired, copyLink: a.default.PropTypes.bool.isRequired,
          }).isRequired,
          outsideModal: a.default.PropTypes.shape({
            facebook: a.default.PropTypes.bool.isRequired, twitter: a.default.PropTypes.bool.isRequired, pinterest: a.default.PropTypes.bool.isRequired, copyLink: a.default.PropTypes.bool.isRequired,
          }).isRequired,
          fbOptions: a.default.PropTypes.object,
          twitterOptions: a.default.PropTypes.object,
          pinterestOptions: a.default.PropTypes.object,
        }).isRequired,
        sharingData: a.default.PropTypes.shape({ resourceTypeFriendlyText: a.default.PropTypes.string.isRequired, resourceId: a.default.PropTypes.number.isRequired, sharerUserId: a.default.PropTypes.number }).isRequired,
        includePreview: a.default.PropTypes.bool,
        previewData: a.default.PropTypes.object,
      };
    }; r.default = {
      user: p, author: h, blogNewsfeedResource: T, interviewNewsfeedResource: w, book: f, bookDescription: m, quote: M, commentSubject: b, comment: k, like: S, group: C, topic: x, authorBlogPostNewsfeedResource: P, authorFollowNewsfeedResource: N, authorQaSettingNewsfeedResource: R, communityQuestion: U, communityAnswer: E, friendNewsfeedResource: v, userFollowingNewsfeedResource: y, pollVoteNewsfeedResource: I, expandableHtml: _, truncatedHtml: g, choicePollVoteNewsfeedResource: L, date: n(u), naturalNumber: n(d), creative: O, notification: B, searchResults: { book: D, author: q, user: H }, readingNotesAnnotatedBookItem: G, readingChallenge: $, shareDialog: z, recommendedUser: j,
    };
  }, { lodash: 'lodash', react: 'react' }],
  181: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('react-dom'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../user_content/spoiler'); const c = o(d); r.default = { replaceSpoilerHTMLWithReactComponents(e, t) { const r = t || window.$j; const o = r('.jsShowSpoiler', e); u.default.each(o, (e) => { const t = r(e); const o = t.next('.spoilerContainer'); if (o) { const n = o.text().replace('(hide spoiler)', ''); const a = s.default.createElement(c.default, { html: n }); const l = r('<span></span>'); t.replaceWith(l), i.default.render(a, r(l)[0]); } }); } };
  }, {
    '../user_content/spoiler': 206, lodash: 'lodash', react: 'react', 'react-dom': 'react-dom',
  }],
  182: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../gr_component_factory'); const i = o(a); const l = e('../modal_trigger'); const u = o(l); const d = e('../modal'); const c = o(d); const p = e('../spinner'); const f = o(p); const m = e('../../modules/ajax/ajax_helper'); const h = e('../flash_message'); const _ = o(h); r.default = i.default.createClass({
      displayName: 'ShareableLinkbutton',
      propTypes: { getShareableLinkURL: s.PropTypes.string.isRequired, resourceType: s.PropTypes.string.isRequired },
      getShareableLinkModalId() { return 'shareableLinkModal'; },
      getInitialState() {
        return {
          error: !1, fetching: !1, copiedToClipboard: !1, shareableLink: null, ttl: null,
        };
      },
      requestLink() { const e = this; (0, m.httpRequest)(this.props.getShareableLinkURL, { method: 'GET' }).done((t) => { const r = t.link; const o = t.ttl; e.setState({ shareableLink: r, ttl: o }); }).fail(() => { e.setState({ error: !0 }); }).always(() => { e.setState({ fetching: !1 }); }); },
      handleClick() { return this.state.shareableLink ? null : this.setState({ fetching: !0, error: !1 }, this.requestLink); },
      copyLinkToClipboard() { return this.selectShareableLinkInput(), document.execCommand('copy'), this.setState({ copiedToClipboard: !0 }); },
      selectShareableLinkInput() { return this.shareableLinkInput.select(); },
      renderError() { if (this.state.error) { const e = 'Oops, something went wrong. Please try again.'; return n(_.default, { category: 'error', message: e }); } return null; },
      renderModal() {
        const e = this; if (this.state.shareableLink) {
          const t = parseInt(this.state.ttl / 86400); return n(c.default, { id: this.getShareableLinkModalId(), centered: !0, bemModifiers: 'share' }, void 0, n('div', { className: 'shareableLinkModalContainer' }, void 0, n('div', { className: 'u-paddingBottomMedium' }, void 0, n('h2', { className: 'gr-h2' }, void 0, 'Share this ', this.props.resourceType, ' link with others')), n('div', { className: 'u-fullWidth u-paddingBottomTiny' }, void 0, n('label', { htmlFor: 'inviteUrl' }, void 0, 'Invite Link:'), React.createElement('input', {
            className: 'shareableLinkInput', ref(t) { e.shareableLinkInput = t; }, readOnly: !0, id: 'inviteUrl', type: 'text', value: this.state.shareableLink, onClick: this.selectShareableLinkInput,
          })), n('div', { className: 'u-paddingBottomMedium' }, void 0, this.state.ttl && `This link will expire after ${t} days. `, this.state.copiedToClipboard && 'Link copied to clipboard!'), n('div', {}, void 0, n('button', { type: 'button', className: 'gr-button', onClick: this.copyLinkToClipboard }, void 0, 'Copy link to clipboard'))));
        } return null;
      },
      renderModalTrigger() { return this.state.fetching ? n(f.default, { isSmall: !0 }) : n(u.default, { id: 'shareableLinkModal' }, void 0, n('button', { type: 'button', className: 'gr-button', onClick: this.handleClick }, void 0, 'Get link')); },
      render() { return n('div', { className: 'u-paddingTopBottomTiny' }, void 0, n('div', {}, void 0, this.renderModalTrigger(), this.renderModal(), this.renderError())); },
    });
  }, {
    '../../modules/ajax/ajax_helper': 5, '../flash_message': 106, '../gr_component_factory': 108, '../modal': 146, '../modal_trigger': 147, '../spinner': 195, react: 'react',
  }],
  183: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./../gr_component_factory'); const l = o(i); const u = e('../../modules/ajax/ajax_helper'); r.default = l.default.createClass({
      displayName: 'FacebookShare',
      propTypes: {
        options: a.default.PropTypes.shape({
          name: a.default.PropTypes.string, link: a.default.PropTypes.string, description: a.default.PropTypes.string, caption: a.default.PropTypes.string, picture: a.default.PropTypes.string, properties: a.default.PropTypes.object, action_link_text: a.default.PropTypes.string, resource_type: a.default.PropTypes.string,
        }).isRequired,
        metricName: a.default.PropTypes.string,
      },
      onFacebookButtonClick() { this.props.metricName && (0, u.httpPost)('/track/track_click', { data: { feature: this.props.metricName } }), $grfb.feedDialog(this.props.options); },
      render() {
        const e = this; return n('button', {
          className: `${this.withBemModifiers('shareSocialButtons__button')} shareSocialButtons__button--facebook`, 'aria-label': 'Share to Facebook', type: 'button', onClick() { return e.onFacebookButtonClick(); },
        });
      },
    });
  }, { '../../modules/ajax/ajax_helper': 5, './../gr_component_factory': 108, react: 'react' }],
  184: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./../gr_component_factory'); const l = o(i); const u = e('../../modules/ajax/ajax_helper'); const d = e('../../modules/child_window_helper'); const c = o(d); r.default = l.default.createClass({
      displayName: 'PinterestShare',
      propTypes: { options: a.default.PropTypes.shape({ desription: a.default.PropTypes.string, url: a.default.PropTypes.string, media: a.default.PropTypes.string }).isRequired, metricName: a.default.PropTypes.string, windowSpecs: a.default.PropTypes.object },
      getDefaultProps() {
        return {
          windowSpecs: {
            left: 400, top: 200, width: 700, height: 800,
          },
        };
      },
      onPinterestButtonClick() { this.props.metricName && (0, u.httpPost)('/track/track_click', { data: { feature: this.props.metricName } }), c.default.openSocialShareWindow('https://pinterest.com/pin/create/link/', this.props.options, this.props.windowSpecs); },
      render() {
        const e = this; return n('button', {
          className: `${this.withBemModifiers('shareSocialButtons__button')} shareSocialButtons__button--pinterest`, 'aria-label': 'Share to Pinterest', type: 'button', onClick() { return e.onPinterestButtonClick(); },
        });
      },
    });
  }, {
    '../../modules/ajax/ajax_helper': 5, '../../modules/child_window_helper': 8, './../gr_component_factory': 108, react: 'react',
  }],
  185: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../user_content/truncated_html'); const u = o(l); r.default = i.default.createClass({ displayName: 'ShareDialogBlogPreview', propTypes: { title: s.PropTypes.string.isRequired, imageUrl: s.PropTypes.string, description: s.PropTypes.string.isRequired }, render() { return n('div', { className: 'gr-mediaFlexbox shareModal__previewContainer shareModal__previewContainer--blog' }, void 0, n('div', { className: 'gr-mediaFlexbox__media sharePreview__image sharePreview__image--blog' }, void 0, n('img', { className: 'gr-mediaFlexbox__media sharePreview__imageFullWidth', src: this.props.imageUrl, alt: this.props.title })), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-h3 gr-h3--serif gr-h3--noMargin' }, void 0, this.props.title), n('div', { className: 'u-marginTopXSmall' }, void 0, n('div', { className: 'sharePreview__description' }, void 0, n(u.default, { html: this.props.description, truncated: !1 }))))); } });
  }, { '../../gr_component_factory': 108, '../../user_content/truncated_html': 208, react: 'react' }],
  186: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('./share_dialog_preview'); const u = o(l); const d = e('../../community_rating'); const c = o(d); const p = e('../../author/author_badge'); const f = o(p); r.default = i.default.createClass({
      displayName: 'ShareDialogBookPreview',
      propTypes: {
        author: s.PropTypes.shape({ name: s.PropTypes.string.isRequired, isGoodreadsAuthor: s.PropTypes.bool.isRequired }).isRequired, rating: s.PropTypes.string.isRequired, title: s.PropTypes.string.isRequired, imageUrl: s.PropTypes.string.isRequired, ratingsCount: s.PropTypes.number.isRequired, textReviewsCount: s.PropTypes.number.isRequired,
      },
      renderAuthorText() { return n('div', {}, void 0, 'by ', this.props.author.name, n(f.default, { isGoodreadsAuthor: this.props.author.isGoodreadsAuthor })); },
      render() {
        return n(u.default, { primaryText: this.props.title, secondaryText: this.renderAuthorText(), imageUrl: this.props.imageUrl }, void 0, n('div', { className: 'u-marginTopXSmall' }, void 0, n(c.default, {
          rating: parseFloat(this.props.rating), displayAvg: !0, displayAvgRatingText: !1, ratingsCount: this.props.ratingsCount, size: c.default.ICON_SIZES.MEDIUM, textReviewsCount: this.props.textReviewsCount,
        })));
      },
    });
  }, {
    '../../author/author_badge': 72, '../../community_rating': 88, '../../gr_component_factory': 108, './share_dialog_preview': 188, react: 'react',
  }],
  187: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../user_content/truncated_html'); const u = o(l); r.default = i.default.createClass({
      displayName: 'ShareDialogInterviewPreview',
      propTypes: {
        title: s.PropTypes.string.isRequired, description: s.PropTypes.string.isRequired, author: s.PropTypes.string.isRequired, authorImageUrl: s.PropTypes.string, bookImageUrl: s.PropTypes.string, bookTitle: s.PropTypes.string, imageUrl: s.PropTypes.string,
      },
      renderImage() { return this.props.imageUrl ? n('img', { className: 'gr-mediaFlexbox__media sharePreview__imageFullWidth', src: this.props.imageUrl, alt: this.props.title }) : this.props.authorImageUrl && this.props.bookImageUrl ? n('div', { className: 'gr-mediaFlexbox__media sharePreview__image', style: { display: 'contents' } }, void 0, n('div', { className: 'editorialCard__image--interview\n                          editorialCard__image--interviewAuthor', style: { backgroundImage: `url(${this.props.authorImageUrl})` } }, void 0, n('span', { className: 'u-visuallyHidden' }, void 0, this.props.author)), n('div', { className: 'editorialCard__image--interview\n                          editorialCard__image--interviewBook', style: { backgroundImage: `url(${this.props.bookImageUrl})` } }, void 0, n('span', { className: 'u-visuallyHidden' }, void 0, this.props.bookTitle))) : null; },
      render() { return n('div', {}, void 0, n('div', { className: 'gr-mediaFlexbox shareModal__previewContainer', style: { display: 'block' } }, void 0, this.renderImage(), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-h3 gr-h3--serif gr-h3--noMargin' }, void 0, this.props.title), n('div', { className: 'u-marginTopXSmall' }, void 0, n('div', { className: 'sharePreview__description' }, void 0, n(u.default, { html: this.props.description, truncated: !1 })))))); },
    });
  }, { '../../gr_component_factory': 108, '../../user_content/truncated_html': 208, react: 'react' }],
  188: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); r.default = i.default.createClass({
      displayName: 'ShareDialogPreview', propTypes: { imageUrl: s.PropTypes.string.isRequired, primaryText: s.PropTypes.string.isRequired, secondaryText: s.PropTypes.oneOfType([s.PropTypes.element, s.PropTypes.string]) }, renderSecondaryText() { return this.props.secondaryText ? n('div', { className: 'sharePreview__secondaryText' }, void 0, this.props.secondaryText) : null; }, render() { return n('div', { className: 'gr-mediaFlexbox shareModal__previewContainer' }, void 0, n('img', { className: 'gr-mediaFlexbox__media sharePreview__image', src: this.props.imageUrl, alt: this.props.primaryText }), n('div', { className: 'gr-mediaFlexbox__desc' }, void 0, n('div', { className: 'gr-h3 gr-h3--serif gr-h3--noMargin' }, void 0, this.props.primaryText), this.renderSecondaryText(), n('div', { className: 'u-marginTopXSmall' }, void 0, this.props.children))); },
    });
  }, { '../../gr_component_factory': 108, react: 'react' }],
  189: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./share_dialog_preview'); const a = o(s); const i = e('react'); const l = e('../../gr_component_factory'); const u = o(l); const d = e('../../user_content/truncated_html'); const c = o(d); r.default = u.default.createClass({
      displayName: 'ShareDialogTopicPreview',
      propTypes: {
        topicTitle: i.PropTypes.string.isRequired, groupTitle: i.PropTypes.string.isRequired, imageUrl: i.PropTypes.string.isRequired, description: i.PropTypes.string,
      },
      render() { const e = `${this.props.groupTitle} - Discussion`; return n(a.default, { primaryText: this.props.topicTitle, secondaryText: e, imageUrl: this.props.imageUrl }, void 0, n('div', { className: 'sharePreview__description' }, void 0, n(c.default, { html: this.props.description, truncated: !1 }))); },
    });
  }, {
    '../../gr_component_factory': 108, '../../user_content/truncated_html': 208, './share_dialog_preview': 188, react: 'react',
  }],
  190: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./../gr_component_factory'); const l = o(i); const u = e('../../modules/ajax/ajax_helper'); const d = e('../../modules/child_window_helper'); const c = o(d); r.default = l.default.createClass({
      displayName: 'TwitterShare',
      propTypes: { options: a.default.PropTypes.shape({ text: a.default.PropTypes.string, url: a.default.PropTypes.string, via: a.default.PropTypes.string }).isRequired, metricName: a.default.PropTypes.string, windowSpecs: a.default.PropTypes.object },
      getDefaultProps() {
        return {
          windowSpecs: {
            left: 400, top: 200, width: 600, height: 500,
          },
        };
      },
      onTwitterButtonClick() { this.props.metricName && (0, u.httpPost)('/track/track_click', { data: { feature: this.props.metricName } }), c.default.openSocialShareWindow('https://twitter.com/intent/tweet/', this.props.options, this.props.windowSpecs); },
      render() {
        const e = this; return n('button', {
          className: `${this.withBemModifiers('shareSocialButtons__button')} shareSocialButtons__button--twitter`, 'aria-label': 'Share to Twitter', type: 'button', onClick() { return e.onTwitterButtonClick(); },
        });
      },
    });
  }, {
    '../../modules/ajax/ajax_helper': 5, '../../modules/child_window_helper': 8, './../gr_component_factory': 108, react: 'react',
  }],
  191: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('classnames'); const d = o(u); r.default = a.default.createClass({
      displayName: 'ChoiceSiteAnnouncement',
      propTypes: {
        imageUrl: React.PropTypes.string.isRequired, announcementText: React.PropTypes.string.isRequired, description: React.PropTypes.string.isRequired, targetUrl: React.PropTypes.string, totalVotes: React.PropTypes.number.isRequired,
      },
      getAriaLabel() { return `Read more ${this.props.announcementText}`; },
      hasTargetUrl() { return !l.default.isEmpty(this.props.targetUrl); },
      renderAnnouncementTitle() { const e = this.hasTargetUrl(); const t = 'siteAnnouncement__title'; return e ? n('a', { className: (0, d.default)(t, 'gr-hyperlink'), 'aria-label': this.getAriaLabel(), href: this.props.targetUrl }, void 0, this.props.announcementText) : n('span', { className: t }, void 0, this.props.announcementText); },
      render() { return n('div', { className: 'siteAnnouncement gr-mediaFlexbox gr-mediaFlexbox--columnDirection' }, void 0, n('a', { className: 'gr-mediaFlexbox__media siteAnnouncement__masthead', href: this.props.targetUrl }, void 0, n('img', { src: this.props.imageUrl, alt: this.props.imageAlt })), n('div', { className: 'gr-mediaFlexbox__desc siteAnnouncement__body' }, void 0, this.renderAnnouncementTitle(), n('div', { className: 'siteAnnouncement__description' }, void 0, this.props.description), n('div', { className: 'siteAnnouncement__choiceVoteCount' }, void 0, this.props.totalVotes.toLocaleString(), ' votes'))); },
    });
  }, { '../gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash' }],
  192: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('../shape_icon'); const l = o(i); const u = e('../../modules/shape_icon_values'); const d = e('lodash'); const c = o(d); const p = e('classnames'); const f = o(p); r.default = a.default.createClass({
      displayName: 'SimpleSiteAnnouncement',
      propTypes: { imageUrl: React.PropTypes.string.isRequired, announcementText: React.PropTypes.string.isRequired, targetUrl: React.PropTypes.string },
      getAriaLabel() { return `Read more ${this.props.announcementText}`; },
      hasTargetUrl() { return !c.default.isEmpty(this.props.targetUrl); },
      renderIcon() {
        return n(l.default, {
          imageUrl: this.props.imageUrl, size: u.ICON_SIZES.MEDIUM, imageAlt: 'Site Announcement', border: !0,
        });
      },
      renderAnnouncementText() { const e = this.hasTargetUrl(); const t = 'siteAnnouncement__simpleText'; return e ? n('a', { className: (0, f.default)(t, 'gr-hyperlink'), 'aria-label': this.getAriaLabel(), href: this.props.targetUrl }, void 0, this.props.announcementText) : n('span', { className: t }, void 0, this.props.announcementText); },
      renderSecondaryLinkSection() { return this.hasTargetUrl() ? n('span', { className: 'siteAnnouncement__simpleSecondaryLinkSection' }, void 0, n('a', { className: 'gr-button gr-button--quiet', 'aria-label': this.getAriaLabel(), href: this.props.targetUrl }, void 0, 'Read more')) : null; },
      render() { return n('div', { className: 'siteAnnouncement\n                      siteAnnouncement--simple\n                      gr-mediaFlexbox\n                      gr-mediaFlexbox--alignItemsCenter' }, void 0, n('div', { className: 'gr-mediaFlexbox__media' }, void 0, this.renderIcon()), n('div', { className: 'gr-mediaFlexbox__desc siteAnnouncement__simpleBody' }, void 0, n('h5', { className: 'gr-h5 gr-h5--noMargin siteAnnouncement__simpleHeader' }, void 0, 'Goodreads news'), this.renderAnnouncementText()), this.renderSecondaryLinkSection()); },
    });
  }, {
    '../../modules/shape_icon_values': 19, '../gr_component_factory': 108, '../shape_icon': 175, classnames: 'classnames', lodash: 'lodash',
  }],
  193: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../gr_component_factory'); const i = o(a); const l = e('./simple_site_announcement'); const u = o(l); r.default = i.default.createClass({
      displayName: 'SiteAnnouncement', propTypes: { title: s.PropTypes.string.isRequired, targetUrl: s.PropTypes.string, displayData: s.PropTypes.shape({ description: s.PropTypes.string, mastheadUrl: s.PropTypes.string, imageUrl: s.PropTypes.string }).isRequired }, shouldRenderLargeAnnouncement() { const e = this.props.displayData; return e && e.description && e.mastheadUrl; }, renderLargeAnnouncement() { return n('div', { className: 'siteAnnouncement gr-mediaFlexbox gr-mediaFlexbox--columnDirection' }, void 0, n('a', { className: 'gr-mediaFlexbox__media siteAnnouncement__masthead', href: this.props.targetUrl, 'aria-label': this.props.title }, void 0, n('img', { src: this.props.displayData.mastheadUrl, alt: this.props.title })), n('div', { className: 'gr-mediaFlexbox__desc siteAnnouncement__body' }, void 0, n('a', { className: 'siteAnnouncement__title gr-hyperlink', href: this.props.targetUrl }, void 0, this.props.title), n('div', { className: 'siteAnnouncement__description' }, void 0, this.props.displayData.description))); }, render() { return this.shouldRenderLargeAnnouncement() ? this.renderLargeAnnouncement() : n(u.default, { imageUrl: this.props.displayData.imageUrl, announcementText: this.props.title, targetUrl: this.props.targetUrl }); },
    });
  }, { '../gr_component_factory': 108, './simple_site_announcement': 192, react: 'react' }],
  194: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('../shape_icon'); const l = o(i); const u = e('../../modules/shape_icon_values'); r.default = a.default.createClass({
      displayName: 'WelcomeAnnouncement',
      propTypes: { imageUrl: React.PropTypes.string.isRequired },
      renderIcon() {
        return n(l.default, {
          imageUrl: this.props.imageUrl, size: u.ICON_SIZES.MEDIUM, imageAlt: 'Welcome to Goodreads', border: !0,
        });
      },
      render() { return n('div', { className: 'siteAnnouncement siteAnnouncement--welcome' }, void 0, n('div', { className: 'siteAnnouncement__welcomeIcon' }, void 0, this.renderIcon()), n('div', { className: 'siteAnnouncement__welcomeBody' }, void 0, n('h5', { className: 'siteAnnouncement__announcementText' }, void 0, 'Welcome to Goodreads'), n('span', {}, void 0, 'Meet your favorite book, find your reading community, and manage your reading life.'))); },
    });
  }, { '../../modules/shape_icon_values': 19, '../gr_component_factory': 108, '../shape_icon': 175 }],
  195: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('./gr_component_factory'); const a = o(s); const i = e('classnames'); const l = o(i); r.default = a.default.createClass({
      displayName: 'Spinner', propTypes: { isSmall: React.PropTypes.bool }, getDefaultProps() { return { isSmall: !1 }; }, render() { const e = (0, l.default)('spinnerContainer', this.props.className); const t = this.props.isSmall ? 'small' : null; return n('div', { className: e }, void 0, n('div', { className: this.withBemModifiers('spinner', t) }, void 0, n('div', { className: this.withBemModifiers('spinner__mask', t) }, void 0, n('div', { className: this.withBemModifiers('spinner__maskedCircle', t) }))), n('div', { className: 'spinnerFallbackText' }, void 0, 'Loading…')); },
    });
  }, { './gr_component_factory': 108, classnames: 'classnames' }],
  196: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'SponsoredFooter', propTypes: { sponsoredName: a.default.PropTypes.string }, renderSponsoredName() { return this.props.sponsoredName ? n('span', { className: 'featuredContentModule__sponsoredName' }, void 0, this.props.sponsoredName) : void 0; }, render() { const e = 'featuredContentModule__sponsoredFooter'; const t = this.props.sponsoredName ? 'Sponsored by ' : 'Sponsored'; return n('div', { className: e }, void 0, n('span', { className: 'featuredContentModule__sponsoredBadgeIcon' }), n('span', { className: 'featuredContentModule__sponsoredLabel' }, void 0, t), this.renderSponsoredName()); },
    });
  }, { './gr_component_factory': 108, react: 'react' }],
  197: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('./gr_component_factory'); const s = o(n); r.default = s.default.createClass({ displayName: 'StoresInitializer', render() { return null; } });
  }, { './gr_component_factory': 108 }],
  198: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('./gr_component_factory'); const i = o(a); const l = e('../react_actions/tab_actions'); const u = o(l); const d = { CLICK: 'click', HOVER: 'hover' }; r.default = i.default.createClass({
      displayName: 'Tab',
      propTypes: {
        group: s.default.PropTypes.string.isRequired, name: s.default.PropTypes.string.isRequired, initiallySelected: s.default.PropTypes.bool, triggerEventType: s.default.PropTypes.string,
      },
      getDefaultProps() { return { initiallySelected: !1, triggerEventType: d.CLICK }; },
      componentDidMount() { this.props.initiallySelected && this.selectTab(); },
      selectTab() { u.default.selectTab(this.props.name, this.props.group); },
      render() { const e = {}; switch (this.props.triggerEventType) { case d.CLICK: e.onClick = this.selectTab; break; case d.HOVER: e.onMouseOver = this.selectTab; } return s.default.createElement('span', e, this.props.children); },
    });
  }, { '../react_actions/tab_actions': 46, './gr_component_factory': 108, react: 'react' }],
  199: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('./gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('../react_stores/tabs_store'); const p = o(c); r.default = l.default.createClass({
      displayName: 'TabContent', mixins: [d.default.connect(p.default, 'tabsStore')], propTypes: { group: a.default.PropTypes.string.isRequired, name: a.default.PropTypes.string.isRequired }, isActive() { return this.props.name === this.state.tabsStore[this.props.group]; }, render() { return n('div', {}, void 0, this.isActive() ? this.props.children : null); },
    });
  }, {
    '../react_stores/tabs_store': 259, './gr_component_factory': 108, react: 'react', reflux: 'reflux',
  }],
  200: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('moment'); const p = o(c); const f = e('../../modules/date_utils'); r.default = l.default.createClass({
      displayName: 'RelativeTime', propTypes: { time: d.default.date.isRequired, longFormat: a.default.PropTypes.bool }, getDefaultProps() { return { longFormat: !1 }; }, getRelativeTime() { return this.props.longFormat ? (0, p.default)(new Date(this.props.time)).fromNow() : (0, f.fromNow)(this.props.time); }, render() { return n('time', { dateTime: this.props.time, 'aria-label': (0, p.default)(new Date(this.props.time)).fromNow() }, void 0, this.getRelativeTime()); },
    });
  }, {
    '../../modules/date_utils': 11, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, moment: 'moment', react: 'react',
  }],
  201: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('reflux'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('../../modules/user/friend_status_values'); const p = e('../../react_actions/user/user_follow_actions'); const f = o(p); const m = e('../../react_stores/user/user_follow_store'); const h = o(m); r.default = l.default.createClass({
      displayName: 'UserFollowWidget', mixins: [a.default.connectFilter(h.default, 'userFollowStore', function (e) { return e[this.props.displayUser.id]; })], propTypes: { displayUser: d.default.user().isRequired }, renderFollowStatus() { const e = this; const t = this.state.userFollowStore; if (t.isFollowing) { const r = this.props.displayUser.firstName || this.props.displayUser.viewableName; return n('div', { className: 'gr-box gr-box--inline gr-box--marginRightSmall' }, void 0, 'You are following ', r, '.'); } return n('button', { className: 'gr-button gr-button--small gr-box gr-box--inline gr-box--marginRightSmall', onClick() { return f.default.follow(e.props.displayUser.id); }, disabled: t.buttonEnabled ? !1 : 'disabled' }, void 0, 'Follow'); }, renderUnfollowButtonIfNeeded() { const e = this; const t = this.state.userFollowStore; return t.isFollowing && t.friendshipStatus !== c.FRIEND_STATUS.REQUEST_PENDING_TO ? n('button', { className: 'gr-button gr-buttonAsLink gr-buttonAsLink--quiet', onClick() { return f.default.unFollow(e.props.displayUser.id); }, disabled: t.buttonEnabled ? !1 : 'disabled' }, void 0, n('span', { className: 'gr-metaText' }, void 0, 'Unfollow')) : void 0; }, shouldHideFollowButtons() { const e = this.state.userFollowStore; return e.friendshipStatus == c.FRIEND_STATUS.FRIEND || e.friendshipStatus == c.FRIEND_STATUS.SELF || e.isBlocked || !e.allowsFollow; }, render() { return this.shouldHideFollowButtons() ? null : n('div', { className: 'userFollowWidget' }, void 0, this.renderFollowStatus(), this.renderUnfollowButtonIfNeeded()); },
    });
  }, {
    '../../modules/user/friend_status_values': 24, '../../react_actions/user/user_follow_actions': 48, '../../react_stores/user/user_follow_store': 261, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, reflux: 'reflux',
  }],
  202: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shape_icon'); const d = o(u); const c = e('../../modules/shape_icon_values'); r.default = l.default.createClass({
      displayName: 'UserIcon',
      propTypes: { user: a.default.PropTypes.shape({ viewableName: a.default.PropTypes.string.isRequired, profileImage: a.default.PropTypes.string.isRequired, profileUrl: a.default.PropTypes.string }).isRequired, includeLink: a.default.PropTypes.bool, size: a.default.PropTypes.oneOf([c.ICON_SIZES.SMALL, c.ICON_SIZES.MEDIUM, c.ICON_SIZES.LARGE]) },
      getDefaultProps() { return { includeLink: !0, size: c.ICON_SIZES.SMALL }; },
      render() {
        const e = this.props.user; return a.default.createElement(d.default, n({
          imageUrl: e.profileImage, imageAlt: e.viewableName, linkUrl: e.profileUrl, border: !0,
        }, this.props));
      },
    });
  }, {
    '../../modules/shape_icon_values': 19, '../gr_component_factory': 108, '../shape_icon': 175, react: 'react',
  }],
  203: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('classnames'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../shared/gr_prop_types'); const p = o(c); const f = e('../click_tracking_wrapper'); const m = o(f); const h = e('../../modules/ads/click_tracking_helper'); r.default = d.default.createClass({
      displayName: 'UserProfileLink', propTypes: { user: p.default.user().isRequired, className: a.default.PropTypes.string }, userName() { return { __html: this.props.user.viewableName }; }, render() { const e = (0, l.default)('gr-hyperlink', 'gr-hyperlink--bold', 'gr-user__profileLink', this.props.className); const t = n('a', { className: e, href: this.props.user.profileUrl, dangerouslySetInnerHTML: this.userName() }); return this.props.user.profileUrl ? n(m.default, { children: t, trackingOptions: h.TRACKED_CLASSES.user_profile }) : n('b', {}, void 0, this.props.user.viewableName); },
    });
  }, {
    '../../modules/ads/click_tracking_helper': 3, '../click_tracking_wrapper': 82, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, classnames: 'classnames', react: 'react',
  }],
  204: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../shared/gr_prop_types'); const d = o(u); const c = e('../shared/gr_spoiler_handler'); const p = o(c); const f = e('classnames'); const m = o(f); r.default = l.default.createClass({
      displayName: 'ExpandableHtml',
      propTypes: d.default.expandableHtml(),
      getInitialState() { return { expanded: !1 }; },
      collapse() { this.setState({ expanded: !1 }); },
      expand() { this.setState({ expanded: !0 }); },
      expandable() { return !a.default.isEmpty(this.props.truncatedHtml); },
      visibleHtml() {
        return this.expandable() && this.state.expanded !== !0 ? this.props.truncatedHtml : this.props.html;
      },
      renderToggleButton() { if (!this.expandable()) return null; const e = this.state.expanded ? this.collapse : this.expand; const t = this.state.expanded ? 'Less' : 'More'; const r = (0, m.default)('gr-buttonAsLink', 'u-marginLeftTiny'); return n('button', { className: r, onClick: e }, void 0, t); },
      componentDidMount() { this.refs.rootNode && p.default.replaceSpoilerHTMLWithReactComponents(this.refs.rootNode); },
      componentDidUpdate() { this.refs.rootNode && p.default.replaceSpoilerHTMLWithReactComponents(this.refs.rootNode); },
      render() { if (a.default.isEmpty(this.props.html)) return null; const e = (0, m.default)('expandableHtml', this.props.className); return React.createElement('div', { className: e, ref: 'rootNode' }, n('span', { dangerouslySetInnerHTML: { __html: this.visibleHtml() } }), this.renderToggleButton()); },
    });
  }, {
    '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../shared/gr_spoiler_handler': 181, classnames: 'classnames', lodash: 'lodash',
  }],
  205: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); r.default = a.default.createClass({
      displayName: 'HiddenHtml', propTypes: { unhideText: React.PropTypes.string }, getDefaultProps() { return { unhideText: 'unhide' }; }, getInitialState() { return { expanded: !1 }; }, expand() { this.setState({ expanded: !0 }); }, renderUnhideButton() { return n('button', { className: 'gr-buttonAsLink', onClick: this.expand }, void 0, this.props.unhideText); }, renderContent() { return this.state.expanded ? this.props.children : n('span', {}, void 0, this.renderUnhideButton()); }, render() { return n('div', {}, void 0, this.renderContent()); },
    });
  }, { '../gr_component_factory': 108 }],
  206: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); r.default = l.default.createClass({
      displayName: 'Spoiler', propTypes: { html: a.default.PropTypes.string, spoilerWarning: a.default.PropTypes.oneOfType([a.default.PropTypes.string, a.default.PropTypes.element]) }, componentWillMount() { if (this.props.html === null && this.props.children === null) throw new Error('props.children and props.html cannot both be null'); }, getDefaultProps() { return { html: null, spoilerWarning: null }; }, getInitialState() { return { showSpoiler: !1 }; }, onClickShowSpoiler() { this.setState({ showSpoiler: !0 }); }, onClickHideSpoiler() { this.setState({ showSpoiler: !1 }); }, getSpoilerHtml() { return { __html: this.props.html }; }, renderSpoiler() { return this.props.html ? n('span', { className: 'spoiler__text u-marginRightTiny', dangerouslySetInnerHTML: this.getSpoilerHtml() }) : this.props.children; }, render() { return n('span', {}, void 0, this.state.showSpoiler ? n('span', { className: 'spoiler__textContainer' }, void 0, this.renderSpoiler(), n('button', { className: 'gr-buttonAsLink', onClick: this.onClickHideSpoiler }, void 0, '(hide spoiler)')) : n('span', {}, void 0, this.props.spoilerWarning, n('button', { className: 'gr-buttonAsLink', onClick: this.onClickShowSpoiler }, void 0, '(view spoiler)'))); },
    });
  }, { '../gr_component_factory': 108, react: 'react' }],
  207: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../gr_component_factory'); const i = o(a); const l = e('../../modules/string_helper'); const u = e('pluralize'); const d = o(u); r.default = i.default.createClass({
      displayName: 'StringCounter',
      propTypes: {
        counterType: s.PropTypes.oneOf(['character', 'word']).isRequired, maxLength: s.PropTypes.number.isRequired, text: s.PropTypes.string.isRequired, warnLength: s.PropTypes.number,
      },
      renderWarning(e) { let t = void 0; return e < 0 && (t = 'gr-smallAlert'), n('span', { className: t, role: 'alert' }, void 0, e, ' ', (0, d.default)(this.props.counterType, e), ' left'); },
      countType() { return this.props.counterType === 'character' ? (0, l.astralLength)(this.props.text) : this.props.counterType === 'word' ? (0, l.countWords)(this.props.text) : null; },
      render() { const e = this.countType(this.props.text); const t = this.props.maxLength - e; const r = this.props.warnLength ? t <= this.props.warnLength : !0; return r ? n('div', {}, void 0, this.renderWarning(t)) : null; },
    });
  }, {
    '../../modules/string_helper': 22, '../gr_component_factory': 108, pluralize: 'pluralize', react: 'react',
  }],
  208: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('../gr_component_factory'); const a = o(s); const i = e('../shared/gr_prop_types'); const l = o(i); const u = e('../shared/gr_spoiler_handler'); const d = o(u); const c = e('../click_tracking_wrapper'); const p = o(c); const f = e('../../modules/ads/click_tracking_helper'); r.default = a.default.createClass({
      displayName: 'TruncatedHtml', propTypes: l.default.truncatedHtml(), getDefaultProps() { return { fullContentText: 'More', bookDescriptionTargetingData: f.TRACKED_CLASSES.full_content_link }; }, componentDidMount() { d.default.replaceSpoilerHTMLWithReactComponents(this.refs.rootNode); }, render() { const e = n('a', { className: 'u-marginLeftTiny fullContentLink', href: this.props.fullContentUrl }, void 0, this.props.fullContentText); return React.createElement('div', { ref: 'rootNode', className: this.props.className }, n('span', { dangerouslySetInnerHTML: { __html: this.props.html } }), this.props.truncated ? n(p.default, { children: e, trackingOptions: this.props.bookDescriptionTargetingData }) : null); },
    });
  }, {
    '../../modules/ads/click_tracking_helper': 3, '../click_tracking_wrapper': 82, '../gr_component_factory': 108, '../shared/gr_prop_types': 180, '../shared/gr_spoiler_handler': 181,
  }],
  209: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('lodash'); const l = o(i); const u = e('./gr_component_factory'); const d = o(u); const c = e('classnames'); const p = o(c); const f = e('../react_actions/shelvings_actions'); const m = o(f); const h = e('../react_stores/shelvings_store'); const _ = o(h); const g = e('./click_tracking_wrapper'); const v = o(g); const y = e('../react_mixins/gr_reflux'); const b = e('../modules/ads/click_tracking_helper'); r.default = d.default.createClass({
      displayName: 'UserRating',
      mixins: [(0, y.connectToLazyStore)(_.default, 'bookId')],
      propTypes: {
        bookId: a.default.PropTypes.string.isRequired, bookTitle: a.default.PropTypes.string, starsTrackingOptions: a.default.PropTypes.object, showLargeStars: a.default.PropTypes.bool,
      },
      getDefaultProps() { return { starsTrackingOptions: b.TRACKED_CLASSES.user_rating_star, showLargeStars: !1 }; },
      setHoverRating(e) { this.setState({ hoverRating: e }); },
      removeHoverRating() { this.setState({ hoverRating: null }); },
      isShelved() { return this.state.exclusiveShelfName !== null; },
      updateRating(e, t) { t.preventDefault(), this.isShelved() ? m.default.rateBook(this.state.book.bookId, e, this.state.book.title) : m.default.rateBook(this.props.bookId, e, this.props.bookTitle), this.refs.ratingContainer.focus(); },
      starLabel: function k(e) { let k = void 0; return k = this.state.exclusiveShelfName !== null && this.state.rating > 0 ? `Change rating from ${this.state.rating} to ${e} ` : `Rate ${e} `, k += e === 1 ? 'star' : 'stars'; },
      renderStar(e) {
        const t = e + 1; const r = this.state.exclusiveShelfName !== null ? this.state.rating : 0; const o = this.state.hoverRating ? this.state.hoverRating : r; const s = (0, p.default)('userRating__star', { 'userRating__star--selected': o >= t, 'userRating__star--largeStars': this.props.showLargeStars }); const a = n('button', {
          className: s, title: this.starLabel(t), onClick: this.updateRating.bind(this, t), onMouseEnter: this.setHoverRating.bind(this, t),
        }); return n(v.default, { children: a, trackingOptions: this.props.starsTrackingOptions }, t);
      },
      renderTextLabel() { const e = (0, p.default)('userRating__label', 'gr-metaText', { 'userRating__label--largeStars': this.props.showLargeStars }); return n('div', { className: e }, void 0, this.state.exclusiveShelfName !== null && this.state.rating > 0 ? 'Your rating:' : 'Rate it:'); },
      render() {
        const e = (0, p.default)('userRating', { 'userRating--largeStars': this.props.showLargeStars }); return n('div', { className: e }, void 0, this.renderTextLabel(), a.default.createElement('div', {
          className: 'userRating__starsWrapper', tabIndex: '0', ref: 'ratingContainer', role: 'group', onMouseLeave: this.removeHoverRating,
        }, l.default.times(5, function (e) { return this.renderStar(e); }, this)));
      },
    });
  }, {
    '../modules/ads/click_tracking_helper': 3, '../react_actions/shelvings_actions': 45, '../react_mixins/gr_reflux': 236, '../react_stores/shelvings_store': 258, './click_tracking_wrapper': 82, './gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  210: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../modal'); const u = o(l); const d = e('../../../react_actions/user/show/block_user_actions'); const c = o(d); const p = e('../../../modules/modal_id_helper'); r.default = i.default.createClass({
      displayName: 'BlockUserConfirmationModal', propTypes: { displayUser: s.PropTypes.shape({ firstName: React.PropTypes.string.isRequired, viewableName: React.PropTypes.string.isRequired, userId: React.PropTypes.number.isRequired }).isRequired, fromDropdown: s.PropTypes.bool, isBlocked: s.PropTypes.bool.isRequired }, getDefaultProps() { return { fromDropdown: !1 }; }, handleConfirmBlockUser() { c.default.blockMember(this.props.displayUser.userId); }, render() { return this.props.isBlocked ? n(u.default, { id: (0, p.getUnblockUserModalId)(this.props.displayUser.userId, this.props.fromDropdown), bemModifiers: 'friendFollowModule', onConfirmHandler: this.handleConfirmBlockUser }, void 0, n('div', { className: 'friendFollowConfirmModal' }, void 0, n('h2', { className: 'gr-h2 gr-h2--serif' }, void 0, 'Unblock ', this.props.displayUser.viewableName, '?'), n('div', { className: 'friendFollowConfirmModal__body' }, void 0, 'Your profile will appear to ', this.props.displayUser.firstName, ' as it would to any other Goodreads member. Their comments on discussion boards will be displayed normally. Are you sure?'))) : n(u.default, { id: (0, p.getBlockUserModalId)(this.props.displayUser.userId, this.props.fromDropdown), bemModifiers: 'friendFollowModule', onConfirmHandler: this.handleConfirmBlockUser }, void 0, n('div', { className: 'friendFollowConfirmModal' }, void 0, n('h2', { className: 'gr-h2 gr-h2--serif' }, void 0, 'Block ', this.props.displayUser.viewableName, '?'), n('div', { className: 'friendFollowConfirmModal__body' }, void 0, 'This will prevent ', this.props.displayUser.firstName, ' from sending you messages, friend request or from viewing your profile. They will not be notified. Comments on discussion boards from them will be hidden by default.'))); },
    });
  }, {
    '../../../modules/modal_id_helper': 17, '../../../react_actions/user/show/block_user_actions': 47, '../../gr_component_factory': 108, '../../modal': 146, react: 'react',
  }],
  211: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../modal'); const u = o(l); const d = e('../../../react_actions/user_relationships/friend_follow_actions'); const c = o(d); const p = e('../../../modules/modal_id_helper'); r.default = i.default.createClass({
      displayName: 'CancelFriendRequestConfirmationModal', propTypes: { displayUser: s.PropTypes.shape({ firstName: React.PropTypes.string.isRequired, viewableName: React.PropTypes.string.isRequired, userId: React.PropTypes.number.isRequired }).isRequired, fromDropdown: s.PropTypes.bool, friendRequestToId: s.PropTypes.number.isRequired }, getDefaultProps() { return { fromDropdown: !1 }; }, handleConfirmCancelFriendRequest() { c.default.cancelFriendRequest(this.props.displayUser.userId, this.props.friendRequestToId); }, render() { return n(u.default, { id: (0, p.getCancelFriendRequestModalId)(this.props.displayUser.userId, this.props.fromDropdown), bemModifiers: 'friendFollowModule', onConfirmHandler: this.handleConfirmCancelFriendRequest }, void 0, n('div', { className: 'friendFollowConfirmModal' }, void 0, n('h2', { className: 'gr-h2 gr-h2--serif' }, void 0, 'Cancel Friend Request to ', this.props.displayUser.viewableName, '?'), n('div', { className: 'friendFollowConfirmModal__body' }, void 0, 'This will cancel your friend request and also unfollow ', this.props.displayUser.firstName, ', removing their activity from your updates feed.'))); },
    });
  }, {
    '../../../modules/modal_id_helper': 17, '../../../react_actions/user_relationships/friend_follow_actions': 51, '../../gr_component_factory': 108, '../../modal': 146, react: 'react',
  }],
  212: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../modal'); const u = o(l); const d = e('../../../react_actions/user_relationships/friend_follow_actions'); const c = o(d); const p = e('../../../modules/modal_id_helper'); r.default = i.default.createClass({
      displayName: 'UnfollowConfirmationModal', propTypes: { displayUser: s.PropTypes.shape({ firstName: React.PropTypes.string.isRequired, viewableName: React.PropTypes.string.isRequired, userId: React.PropTypes.number.isRequired }).isRequired, fromDropdown: s.PropTypes.bool }, getDefaultProps() { return { fromDropdown: !1 }; }, handleConfirmUnfollow() { c.default.unfollow(this.props.displayUser.userId); }, render() { return n(u.default, { id: (0, p.getUnfollowModalId)(this.props.displayUser.userId, this.props.fromDropdown), bemModifiers: 'friendFollowModule', onConfirmHandler: this.handleConfirmUnfollow }, void 0, n('div', { className: 'friendFollowConfirmModal' }, void 0, n('h2', { className: 'gr-h2 gr-h2--serif' }, void 0, 'Unfollow ', this.props.displayUser.viewableName, '?'), n('div', { className: 'friendFollowConfirmModal__body' }, void 0, 'This will remove ', this.props.displayUser.firstName, "'s activity from your updates feed."))); },
    });
  }, {
    '../../../modules/modal_id_helper': 17, '../../../react_actions/user_relationships/friend_follow_actions': 51, '../../gr_component_factory': 108, '../../modal': 146, react: 'react',
  }],
  213: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = e('../../gr_component_factory'); const i = o(a); const l = e('../../modal'); const u = o(l); const d = e('../../../react_actions/user_relationships/friend_follow_actions'); const c = o(d); const p = e('../../../modules/modal_id_helper'); r.default = i.default.createClass({
      displayName: 'UnfriendConfirmationModal', propTypes: { displayUser: s.PropTypes.shape({ firstName: React.PropTypes.string.isRequired, viewableName: React.PropTypes.string.isRequired, userId: React.PropTypes.number.isRequired }).isRequired, fromDropdown: s.PropTypes.bool }, getDefaultProps() { return { fromDropdown: !1 }; }, handleConfirmUnfriend() { c.default.unfriend(this.props.displayUser.userId); }, render() { return n(u.default, { id: (0, p.getUnfriendModalId)(this.props.displayUser.userId, this.props.fromDropdown), bemModifiers: 'friendFollowModule', onConfirmHandler: this.handleConfirmUnfriend }, void 0, n('div', { className: 'friendFollowConfirmModal' }, void 0, n('h2', { className: 'gr-h2 gr-h2--serif' }, void 0, 'Unfriend ', this.props.displayUser.viewableName, '?'), n('div', { className: 'friendFollowConfirmModal__body' }, void 0, 'This will remove ', this.props.displayUser.firstName, "'s activity from your updates feed, and your own activity will stop appearing in their updates feed. ", this.props.displayUser.firstName, ' will not be notified.'))); },
    });
  }, {
    '../../../modules/modal_id_helper': 17, '../../../react_actions/user_relationships/friend_follow_actions': 51, '../../gr_component_factory': 108, '../../modal': 146, react: 'react',
  }],
  214: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('classnames'); const l = o(i); const u = e('../gr_component_factory'); const d = o(u); const c = e('../../react_actions/user_relationships/friend_follow_actions'); const p = o(c); const f = e('./confirmation_modals/unfollow_confirmation_modal'); const m = o(f); const h = e('./confirmation_modals/cancel_friend_request_confirmation_modal'); const _ = o(h); const g = e('../../modules/modal_id_helper'); const v = e('../modal_trigger'); const y = o(v); const b = e('../spinner'); const k = o(b); r.default = d.default.createClass({
      displayName: 'FollowButton',
      propTypes: {
        displayUser: a.default.PropTypes.shape({ firstName: a.default.PropTypes.string.isRequired, viewableName: a.default.PropTypes.string.isRequired, userId: a.default.PropTypes.number.isRequired }).isRequired, isFollowing: a.default.PropTypes.bool.isRequired, isPendingFriendRequestTo: a.default.PropTypes.bool.isRequired, friendRequestToId: a.default.PropTypes.number, fromUserShowPage: a.default.PropTypes.bool, inProgress: a.default.PropTypes.bool,
      },
      getInitialState() { return { isHovering: !1 }; },
      getDefaultProps() { return { fromUserShowPage: !1, inProgress: !1 }; },
      handleMouseEnter() { this.setState({ isHovering: !0 }); },
      handleMouseLeave() { this.setState({ isHovering: !1 }); },
      handleFollow() { p.default.follow(this.props.displayUser.userId, { from_user_show_page: this.props.fromUserShowPage }); },
      renderFollowButton() { const e = (0, l.default)(this.withBemModifiers('friendFollowButton'), 'friendFollowButton--dark'); return n('button', { className: e, onClick: this.handleFollow, type: 'button' }, void 0, 'Follow'); },
      renderInProgressButton() { return n('button', { className: this.withBemModifiers('friendFollowButton'), onClick: this.handleFollow, type: 'button' }, void 0, n(k.default, {})); },
      renderUnfollowButton() {
        const e = (0, l.default)(this.withBemModifiers('friendFollowCheckmark'), 'u-inlineBlock'); const t = this.state.isHovering ? 'Unfollow' : n('span', {}, void 0, n('div', { className: e }), 'Following'); let r = void 0; let o = void 0; return this.props.isPendingFriendRequestTo && this.props.friendRequestToId ? (r = n(_.default, { displayUser: this.props.displayUser, friendRequestToId: this.props.friendRequestToId }), o = (0, g.getCancelFriendRequestModalId)(this.props.displayUser.userId)) : (r = n(m.default, { displayUser: this.props.displayUser }), o = (0, g.getUnfollowModalId)(this.props.displayUser.userId)), n('div', { className: 'u-inlineBlock' }, void 0, n(y.default, { id: o }, void 0, n('button', {
          className: this.withBemModifiers('friendFollowButton'), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, type: 'button',
        }, void 0, t)), r);
      },
      render() { return this.props.inProgress ? this.renderInProgressButton() : this.props.isFollowing ? this.renderUnfollowButton() : this.renderFollowButton(); },
    });
  }, {
    '../../modules/modal_id_helper': 17, '../../react_actions/user_relationships/friend_follow_actions': 51, '../gr_component_factory': 108, '../modal_trigger': 147, '../spinner': 195, './confirmation_modals/cancel_friend_request_confirmation_modal': 211, './confirmation_modals/unfollow_confirmation_modal': 212, classnames: 'classnames', react: 'react',
  }],
  215: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../modal_trigger'); const d = o(u); const c = e('./confirmation_modals/unfriend_confirmation_modal'); const p = o(c); const f = e('../../react_actions/user_relationships/friend_follow_actions'); const m = o(f); const h = e('../../modules/modal_id_helper'); r.default = l.default.createClass({
      displayName: 'FriendButton',
      propTypes: {
        displayUser: a.default.PropTypes.shape({ firstName: a.default.PropTypes.string.isRequired, viewableName: a.default.PropTypes.string.isRequired, userId: a.default.PropTypes.number.isRequired }).isRequired, addFriendUrl: a.default.PropTypes.string.isRequired, isFriend: a.default.PropTypes.bool.isRequired, isPendingFriendRequestFrom: a.default.PropTypes.bool.isRequired, isPendingFriendRequestTo: a.default.PropTypes.bool.isRequired, friendRequestFromId: a.default.PropTypes.number,
      },
      getInitialState() { return { isHovering: !1 }; },
      handleMouseEnter() { this.setState({ isHovering: !0 }); },
      handleMouseLeave() { this.setState({ isHovering: !1 }); },
      handleAcceptFriendRequest() { m.default.acceptFriendRequest(this.props.displayUser.userId, this.props.friendRequestFromId); },
      renderFriendButton() { return this.props.isPendingFriendRequestFrom && this.props.friendRequestFromId ? n('button', { className: 'friendFollowButton', onClick: this.handleAcceptFriendRequest, type: 'button' }, void 0, 'Accept request') : this.props.isPendingFriendRequestTo ? n('button', { className: 'friendFollowButton', type: 'button', disabled: !0 }, void 0, 'Pending') : n('a', { className: 'friendFollowButton', href: this.props.addFriendUrl }, void 0, 'Add friend'); },
      renderUnfriendButton() {
        const e = this.state.isHovering ? 'Unfriend' : n('span', {}, void 0, n('div', { className: 'u-inlineBlock friendFollowCheckmark' }), 'Friends'); return n('div', { className: 'u-inlineBlock' }, void 0, n(d.default, { id: (0, h.getUnfriendModalId)(this.props.displayUser.userId) }, void 0, n('button', {
          className: 'friendFollowButton', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, type: 'button',
        }, void 0, e)), n(p.default, { displayUser: this.props.displayUser }));
      },
      render() { return this.props.isFriend ? this.renderUnfriendButton() : this.renderFriendButton(); },
    });
  }, {
    '../../modules/modal_id_helper': 17, '../../react_actions/user_relationships/friend_follow_actions': 51, '../gr_component_factory': 108, '../modal_trigger': 147, './confirmation_modals/unfriend_confirmation_modal': 213, react: 'react',
  }],
  216: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('reflux'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_stores/user_relationships/friend_follow_module_store'); const d = o(u); const c = e('../../react_stores/user/show/block_user_store'); const p = o(c); const f = e('../dropdown'); const m = o(f); const h = e('../modal_trigger'); const _ = o(h); const g = e('./confirmation_modals/cancel_friend_request_confirmation_modal'); const v = o(g); const y = e('./confirmation_modals/unfriend_confirmation_modal'); const b = o(y); const k = e('./confirmation_modals/unfollow_confirmation_modal'); const S = o(k); const P = e('./confirmation_modals/block_user_confirmation_modal'); const T = o(P); const w = e('../../modules/modal_id_helper'); r.default = l.default.createClass({
      displayName: 'FriendFollowDropdown',
      mixins: [a.default.connect(d.default, 'ffStore'), a.default.connect(p.default, 'buStore')],
      propTypes: {
        displayUser: React.PropTypes.shape({ firstName: React.PropTypes.string.isRequired, viewableName: React.PropTypes.string.isRequired, userId: React.PropTypes.number.isRequired }).isRequired, sendMessageUrl: React.PropTypes.string.isRequired, recommendBooksUrl: React.PropTypes.string.isRequired, compareBooksUrl: React.PropTypes.string.isRequired, suggestFriendsUrl: React.PropTypes.string.isRequired, addFriendUrl: React.PropTypes.string.isRequired, renderFriendButton: React.PropTypes.bool.isRequired, friendButtonInDropdown: React.PropTypes.bool.isRequired, friendRequestToId: React.PropTypes.number,
      },
      renderRecommendBooksLink() {
        return this.state.ffStore.isFriend ? n('a', {
          className: 'friendFollowModuleDropdownMenu__dropdownLink', href: this.props.recommendBooksUrl, rel: 'nofollow', 'data-testid': 'recommendBooks',
        }, void 0, 'Recommend books') : void 0;
      },
      shouldRenderCancelFriendRequestModal() { return this.state.ffStore.isFollowing && this.state.ffStore.isPendingFriendRequestTo && this.props.friendRequestToId; },
      shouldRenderUnfollowModal() { return this.state.ffStore.isFollowing && !this.state.ffStore.isPendingFriendRequestTo; },
      renderFollowingLinks() { return this.shouldRenderCancelFriendRequestModal() ? n('div', { className: 'friendFollowModuleDropdownMenu__dropdownLink' }, void 0, n(_.default, { id: (0, w.getCancelFriendRequestModalId)(this.props.displayUser.userId, !0) }, void 0, n('button', { className: 'gr-buttonAsLink gr-buttonAsLink--black', type: 'button', 'data-testid': 'cancelFriendRequest' }, void 0, 'Cancel friend request'))) : this.shouldRenderUnfollowModal() ? n('div', { className: 'friendFollowModuleDropdownMenu__dropdownLink' }, void 0, n(_.default, { id: (0, w.getUnfollowModalId)(this.props.displayUser.userId, !0) }, void 0, n('button', { className: 'gr-buttonAsLink gr-buttonAsLink--black', type: 'button', 'data-testid': 'unfollow' }, void 0, 'Unfollow'))) : void 0; },
      shouldRenderUnfriendModal() { return this.state.ffStore.isFriend; },
      renderFriendLinks() {
        return this.state.ffStore.isFriend ? n('div', {}, void 0, n('a', { className: 'friendFollowModuleDropdownMenu__dropdownLink', href: this.props.suggestFriendsUrl, 'data-testid': 'suggestFriends' }, void 0, 'Suggest friends'), n('div', { className: 'friendFollowModuleDropdownMenu__dropdownLink' }, void 0, n(_.default, { id: (0, w.getUnfriendModalId)(this.props.displayUser.userId, !0) }, void 0, n('button', { className: 'gr-buttonAsLink gr-buttonAsLink--black', type: 'button', 'data-testid': 'unfriend' }, void 0, 'Unfriend ', this.props.displayUser.firstName)))) : this.props.friendButtonInDropdown && this.props.renderFriendButton && !this.state.ffStore.isPendingFriendRequestTo ? n('a', {
          className: 'friendFollowModuleDropdownMenu__dropdownLink', href: this.props.addFriendUrl, rel: 'nofollow', 'data-testid': 'addFriend',
        }, void 0, 'Add friend') : void 0;
      },
      renderBlockUserLink() { let e = void 0; e = this.state.buStore.isBlocked ? 'Unblock' : 'Block this user'; const t = this.state.buStore.isBlocked ? (0, w.getUnblockUserModalId)(this.props.displayUser.userId, !0) : (0, w.getBlockUserModalId)(this.props.displayUser.userId, !0); return n('div', { className: 'friendFollowModuleDropdownMenu__dropdownLink' }, void 0, n(_.default, { id: t }, void 0, n('button', { className: 'gr-buttonAsLink friendFollowModule__blockedUserText friendFollowModule__blockedUserText--red', type: 'button', 'data-testid': 'blockUser' }, void 0, e))); },
      renderDropdownList() {
        return n('div', { className: 'friendFollowModuleDropdownMenu' }, void 0, n('a', {
          className: 'friendFollowModuleDropdownMenu__dropdownLink', href: this.props.sendMessageUrl, rel: 'nofollow', 'data-testid': 'message',
        }, void 0, 'Message'), this.renderRecommendBooksLink(), n('a', {
          className: 'friendFollowModuleDropdownMenu__dropdownLink', href: this.props.compareBooksUrl, rel: 'nofollow', 'data-testid': 'compareBooks',
        }, void 0, 'Compare books'), this.renderFollowingLinks(), this.renderFriendLinks(), this.renderBlockUserLink());
      },
      renderDropdownTrigger() { return n('div', {}, void 0, n('span', { className: 'friendFollowModuleCaret__text' }, void 0, 'More'), n('div', { className: 'friendFollowModuleCaret__image' })); },
      render() {
        return n('div', { className: 'friendFollowModuleCaret' }, void 0, n(m.default, {
          trigger: this.renderDropdownTrigger(), triggerEventType: m.default.TriggerEventTypes.CLICK, tooltipText: 'More', bemModifiers: 'friendFollowModule', children: this.renderDropdownList(),
        }), this.shouldRenderCancelFriendRequestModal() && n(v.default, {
          displayUser: this.props.displayUser, isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo, friendRequestToId: this.props.friendRequestToId, fromDropdown: !0,
        }), this.shouldRenderUnfollowModal() && n(S.default, { displayUser: this.props.displayUser, fromDropdown: !0 }), this.shouldRenderUnfriendModal() && n(b.default, {
          displayUser: this.props.displayUser,
          fromDropdown: !0,
        }), n(T.default, { displayUser: this.props.displayUser, isBlocked: this.state.buStore.isBlocked, fromDropdown: !0 }));
      },
    });
  }, {
    '../../modules/modal_id_helper': 17, '../../react_stores/user/show/block_user_store': 260, '../../react_stores/user_relationships/friend_follow_module_store': 264, '../dropdown': 91, '../gr_component_factory': 108, '../modal_trigger': 147, './confirmation_modals/block_user_confirmation_modal': 210, './confirmation_modals/cancel_friend_request_confirmation_modal': 211, './confirmation_modals/unfollow_confirmation_modal': 212, './confirmation_modals/unfriend_confirmation_modal': 213, reflux: 'reflux',
  }],
  217: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('classnames'); const d = o(u); const c = e('../gr_component_factory'); const p = o(c); const f = e('./follow_button'); const m = o(f); const h = e('./friend_button'); const _ = o(h); const g = e('./friend_follow_dropdown'); const v = o(g); const y = e('../spinner'); const b = o(y); const k = e('../modal_trigger'); const S = o(k); const P = e('./confirmation_modals/block_user_confirmation_modal'); const T = o(P); const w = e('../../modules/modal_id_helper'); const N = e('../../react_stores/user_relationships/friend_follow_module_store'); const R = o(N); const M = e('../../react_stores/user/show/block_user_store'); const C = o(M); r.default = p.default.createClass({
      displayName: 'FriendFollowModule',
      mixins: [l.default.connectFilter(R.default, 'ffStore', function (e) { return e[this.props.displayUser.userId]; }), l.default.connect(C.default, 'buStore')],
      propTypes: {
        displayUser: a.default.PropTypes.shape({ firstName: a.default.PropTypes.string.isRequired, viewableName: a.default.PropTypes.string.isRequired, userId: a.default.PropTypes.number.isRequired }).isRequired, hideDropdown: a.default.PropTypes.bool.isRequired, sendMessageUrl: a.default.PropTypes.string.isRequired, recommendBooksUrl: a.default.PropTypes.string.isRequired, compareBooksUrl: a.default.PropTypes.string.isRequired, suggestFriendsUrl: a.default.PropTypes.string.isRequired, addFriendUrl: a.default.PropTypes.string.isRequired, friendRequestToId: a.default.PropTypes.number, friendRequestFromId: a.default.PropTypes.number, renderFollowButton: a.default.PropTypes.bool.isRequired, renderFriendButton: a.default.PropTypes.bool.isRequired, friendButtonInDropdown: a.default.PropTypes.bool.isRequired, fromUserShowPage: a.default.PropTypes.bool,
      },
      getDefaultProps() { return { fromUserShowPage: !1 }; },
      shouldRenderFriendButton() { return this.props.renderFriendButton && !this.props.friendButtonInDropdown; },
      shouldRenderFollowButton() { return this.props.renderFollowButton && !this.state.ffStore.isFriend; },
      render() {
        if (this.state.ffStore.inProgress || this.state.buStore.blockInProgress) return n('div', { className: 'u-clearBoth' }, void 0, n(b.default, {})); const e = (0, d.default)('u-inlineBlock', { 'u-marginRightMedium': this.shouldRenderFriendButton() }); return n('div', { className: 'friendFollowModule' }, void 0, this.state.buStore.isBlocked && n('div', { className: 'friendFollowModule__blockedUserText', 'data-testid': 'blockText' }, void 0, "You've blocked ", this.props.displayUser.firstName, '.', n('div', { className: 'friendFollowModule__blockedUserTextTrigger' }, void 0, n(S.default, { id: (0, w.getUnblockUserModalId)(this.props.displayUser.userId) }, void 0, n('button', { className: 'gr-buttonAsLink friendFollowModule__blockedUserText friendFollowModule__blockedUserText--red', type: 'button' }, void 0, 'Unblock')), n(T.default, { isBlocked: this.state.buStore.isBlocked, displayUser: this.props.displayUser, isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo }))), n('div', { className: 'u-marginAuto' }, void 0, this.shouldRenderFollowButton() && n('div', { className: e }, void 0, n(m.default, {
          displayUser: this.props.displayUser, isFollowing: this.state.ffStore.isFollowing, isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo, friendRequestToId: this.props.friendRequestToId, fromUserShowPage: this.props.fromUserShowPage,
        })), this.shouldRenderFriendButton() && n(_.default, {
          displayUser: this.props.displayUser, addFriendUrl: this.props.addFriendUrl, isFriend: this.state.ffStore.isFriend, isPendingFriendRequestFrom: this.state.ffStore.isPendingFriendRequestFrom, isPendingFriendRequestTo: this.state.ffStore.isPendingFriendRequestTo, friendRequestFromId: this.props.friendRequestFromId,
        }), !this.props.hideDropdown && a.default.createElement(v.default, this.props)));
      },
    });
  }, {
    '../../modules/modal_id_helper': 17, '../../react_stores/user/show/block_user_store': 260, '../../react_stores/user_relationships/friend_follow_module_store': 264, '../gr_component_factory': 108, '../modal_trigger': 147, '../spinner': 195, './confirmation_modals/block_user_confirmation_modal': 210, './follow_button': 214, './friend_button': 215, './friend_follow_dropdown': 216, classnames: 'classnames', react: 'react', reflux: 'reflux',
  }],
  218: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }), r.ALWAYS_DISPLAY_STARS_PROP = void 0; const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('reflux'); const d = o(u); const c = e('../../react_mixins/gr_reflux'); const p = e('../../modules/ads/click_tracking_helper'); const f = e('../../modules/default_shelves'); const m = e('classnames'); const h = o(m); const _ = e('../../react_stores/shelvings_store'); const g = o(_); const v = e('../../react_stores/user_shelves_store'); const y = o(v); const b = e('../../react_stores/want_to_read_menu_store'); const k = o(b); const S = e('../../react_actions/want_to_read_menu_actions'); const P = o(S); const T = e('../../react_stores/user_agent_capabilities_store'); const w = o(T); const N = e('../../react_actions/shelvings_actions'); const R = o(N); const M = e('../dropdown'); const C = o(M); const x = e('../modal'); const A = o(x); const I = e('../modal_trigger'); const L = o(I); const U = e('../../react_actions/modal_actions'); const E = o(U); const O = e('../../react_stores/modal_store'); const B = o(O); const j = e('../want_to_read/want_to_read_menu'); const F = o(j); const q = e('../user_rating'); const D = o(q); const H = 'Saving…'; const G = 'This book has also been marked as Read'; const $ = r.ALWAYS_DISPLAY_STARS_PROP = 'ALWAYS_DISPLAY_STARS_PROP'; r.default = l.default.createClass({
      displayName: 'WantToReadButton',
      propTypes: {
        bookId: a.default.PropTypes.string.isRequired, bookTitle: a.default.PropTypes.string.isRequired, uniqueId: a.default.PropTypes.string.isRequired, showStars: a.default.PropTypes.oneOfType([a.default.PropTypes.bool, a.default.PropTypes.string]), showMenu: a.default.PropTypes.bool, origin: a.default.PropTypes.string, trackingOptions: a.default.PropTypes.object, starsTrackingOptions: a.default.PropTypes.object, withModalShelvingMenu: a.default.PropTypes.bool,
      },
      mixins: [(0, c.connectToLazyStore)(g.default, 'bookId', { stateKey: 'shelvings' }), (0, c.connectToLazyStore)(k.default, 'uniqueId', { stateKey: 'wantToReadMenu' }), d.default.connect(y.default, 'userShelves'), d.default.connect(w.default, 'userAgentCapabilities'), d.default.connect(B.default, 'modalStore')],
      getDefaultProps() {
        return {
          showStars: !1, showMenu: !0, trackingOptions: p.TRACKED_CLASSES.want_to_read_button, withModalShelvingMenu: !1,
        };
      },
      shelveBook() { R.default.shelveBook(this.props.bookId, y.default.defaultShelves().WANT_TO_READ, this.props.origin); },
      unshelveBook() { window.confirm('Removing a book deletes your rating, review, etc. Remove this book from all your shelves?') && R.default.unshelveBook(this.state.shelvings.book.bookId); },
      focusButton(e) { e && this.restoreFocusOnUpdate && !this.state.isShelvingInProgress && (this.forgetFocus(), e.focus()); },
      rememberFocus() { this.restoreFocusOnUpdate = !0; },
      forgetFocus() { this.restoreFocusOnUpdate = !1; },
      checkmarkClass() { return (0, f.checkIconClassnames)(this.state.shelvings.exclusiveShelfName); },
      unshelved() { return this.state.shelvings.exclusiveShelfName === null; },
      getBookId() { return this.unshelved() ? this.props.bookId : this.state.shelvings.book.bookId; },
      getBookTitle() { return this.unshelved() ? this.props.bookTitle : this.state.shelvings.book.title; },
      renderWantToReadLeftUnshelved() {
        const e = this.state.shelvings.isShelvingInProgress ? H : 'Want to Read'; const t = (0, h.default)('wantToReadButton__leftUnshelvedButton', { 'wantToReadButton__leftUnshelvedButton--noOutline': this.state.shelvings.isShelvingInProgress }); const
          r = `Add ${this.props.bookTitle} to your want to read shelf`; return a.default.createElement('button', {
          'aria-label': r, ref: this.focusButton, className: t, onClick: this.shelveBook, onFocus: this.rememberFocus, onBlur: this.forgetFocus,
        }, e);
      },
      renderWantToReadLeftShelved() {
        const e = (0, h.default)('wantToReadButton__leftShelvedButton'); const t = (0, h.default)({ wantToReadButton__checkIcon: !this.state.shelvings.isShelvingInProgress }, this.checkmarkClass()); const r = `Remove ${this.state.shelvings.book.title} from my shelves`; const o = this.state.shelvings.isShelvingInProgress ? H : this.state.shelvings.exclusiveShelfDisplayName; return this.state.userAgentCapabilities.touch ? a.default.createElement('button', {
          'aria-label': r, onClick: this.unshelveBook, onFocus: this.rememberFocus, onBlur: this.forgetFocus, ref: this.focusButton, className: e,
        }, n('span', { className: `${t} u-inlineBlock` }), n('div', { className: 'wantToReadButton__shelvedButtonText' }, void 0, o)) : n('span', {}, void 0, a.default.createElement('button', {
          'aria-label': r, ref: this.focusButton, onClick: this.unshelveBook, onFocus: this.rememberFocus, onBlur: this.forgetFocus, className: `${e} ${t}`,
        }), n('div', { className: 'wantToReadButton__shelvedButtonText' }, void 0, o));
      },
      renderWantToReadRight() {
        const e = this.getBookId(); const t = this.getBookTitle(); const r = ['wantToReadMenu']; return this.props.withModalShelvingMenu && r.push('wtrMenuToggleDropdown'), this.props.showMenu && !this.isWTRModalOpen() ? n(C.default, { trigger: this.renderWantToReadRightButtonContents(), triggerEventType: C.default.TriggerEventTypes.HOVER, bemModifiers: r }, void 0, n(F.default, {
          uniqueId: this.props.uniqueId, bookId: e, bookTitle: t, userShelves: this.state.userShelves, shelvings: this.state.shelvings,
        })) : null;
      },
      getModalId() { return `wtrModal${this.getBookId()}`; },
      isWTRModalOpen() { return this.state.modalStore.currentActiveModal && this.state.modalStore.currentActiveModal === this.getModalId(); },
      hideBookAlsoMarkedAsReadMessage() { this.state.showBookAlsoMarkedAsReadMessage && this.setState({ showBookAlsoMarkedAsReadMessage: !1 }); },
      handleWTRMenuNonExclusiveShelvingWithoutExclusive() { this.setState({ showBookAlsoMarkedAsReadMessage: !0 }); },
      handleModalClose() { P.default.closeAddShelfTextbox(this.props.uniqueId), this.hideBookAlsoMarkedAsReadMessage(); },
      handleDoneClick() { E.default.closeModal(), this.hideBookAlsoMarkedAsReadMessage(); },
      renderModal() {
        const e = this.getBookId(); const t = this.getBookTitle(); if (this.props.showMenu && this.props.withModalShelvingMenu) {
          const r = (0, h.default)('wtrModalContainer', { wtrMenuToggleModal: !this.isWTRModalOpen() }); return n('div', { className: r }, void 0, n(L.default, { id: this.getModalId() }, void 0, n('button', { type: 'button', className: 'wtrModalContainer__trigger' }, void 0, this.renderWantToReadRightButtonContents())), n(A.default, { id: this.getModalId(), centered: !0, onCloseHandler: this.handleModalClose }, void 0, n('div', { className: 'wtrModal' }, void 0, n('h3', { className: 'gr-h3 gr-h3--serif gr-h3--noMargin u-paddingBottomXSmall' }, void 0, 'Shelve ', this.props.bookTitle), n(F.default, {
            uniqueId: this.props.uniqueId, bookId: e, bookTitle: t, userShelves: this.state.userShelves, shelvings: this.state.shelvings, useModalView: !0, bemModifiers: 'modalView', onNonExclusiveShelvingWithoutExclusive: this.handleWTRMenuNonExclusiveShelvingWithoutExclusive, onExclusiveShelvingChange: this.hideBookAlsoMarkedAsReadMessage,
          })), !this.state.wantToReadMenu.showAddShelfTextbox && n('button', {
            type: 'button', className: 'gr-button wtrModal__closeButton', 'aria-label': 'Close want to read menu', onClick: this.handleDoneClick,
          }, void 0, 'Done'), this.state.showBookAlsoMarkedAsReadMessage && n('div', { className: 'wtrModal__alsoMarkedAsReadMessage' }, void 0, G)));
        } return null;
      },
      renderWantToReadRightButtonContents() { return n('div', { className: 'wantToReadButton__right' }, void 0, n('span', { className: 'u-visuallyHidden' }, void 0, 'Shelving menu')); },
      render() { let e = ''; const t = (0, h.default)('wantToReadButton__left', { 'wantToReadButton__left--standalone': !this.props.showMenu }, { wantToReadButton__leftUnshelved: this.unshelved() }, { wantToReadButton__leftShelved: !this.unshelved() }); e = this.unshelved() ? this.renderWantToReadLeftUnshelved() : this.renderWantToReadLeftShelved(); const r = (0, h.default)('wtrStarsContainer', { 'wtrStarsContainer--alwaysDisplay': this.props.showStars === $ }); return n('div', {}, void 0, n('div', { className: 'wantToReadButton' }, void 0, n('div', { className: t }, void 0, e), this.renderModal(), this.renderWantToReadRight()), this.props.showStars ? n('div', { className: r }, void 0, n(D.default, { bookId: this.props.bookId, starsTrackingOptions: this.props.starsTrackingOptions })) : null); },
    });
  }, {
    '../../modules/ads/click_tracking_helper': 3, '../../modules/default_shelves': 12, '../../react_actions/modal_actions': 39, '../../react_actions/shelvings_actions': 45, '../../react_actions/want_to_read_menu_actions': 53, '../../react_mixins/gr_reflux': 236, '../../react_stores/modal_store': 253, '../../react_stores/shelvings_store': 258, '../../react_stores/user_agent_capabilities_store': 262, '../../react_stores/user_shelves_store': 265, '../../react_stores/want_to_read_menu_store': 266, '../dropdown': 91, '../gr_component_factory': 108, '../modal': 146, '../modal_trigger': 147, '../user_rating': 209, '../want_to_read/want_to_read_menu': 219, classnames: 'classnames', react: 'react', reflux: 'reflux',
  }],
  219: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const a = e('lodash'); const i = o(a); const l = e('../gr_component_factory'); const u = o(l); const d = e('../../react_mixins/gr_reflux'); const c = e('../../modules/default_shelves'); const p = e('../../react_stores/want_to_read_menu_store'); const f = o(p); const m = e('./want_to_read_menu_filter'); const h = o(m); const _ = e('../../react_actions/shelvings_actions'); const g = o(_); const v = e('./want_to_read_menu_shelf_creator'); const y = o(v); const b = e('../spinner'); const k = o(b); const S = e('classnames'); const P = o(S); const T = 7; r.default = u.default.createClass({
      displayName: 'WantToReadMenu',
      mixins: [(0, d.connectToLazyStore)(f.default, 'uniqueId')],
      propTypes: {
        bookId: React.PropTypes.string.isRequired, bookTitle: React.PropTypes.string.isRequired, uniqueId: React.PropTypes.string.isRequired, userShelves: React.PropTypes.object.isRequired, shelvings: React.PropTypes.object.isRequired, useModalView: React.PropTypes.bool, onNonExclusiveShelvingWithoutExclusive: React.PropTypes.func, onExclusiveShelvingChange: React.PropTypes.func,
      },
      defaultPropTypes() { return { useModalView: !1 }; },
      shelveBook(e) { g.default.shelveBook(this.props.bookId, e); },
      unshelveBook() { window.confirm('Removing a book deletes your rating, review, etc. Remove this book from all your shelves?') && g.default.unshelveBook(this.props.bookId); },
      modifyExclusiveShelving(e, t) { this.props.onExclusiveShelvingChange && i.default.isFunction(this.props.onExclusiveShelvingChange) && this.props.onExclusiveShelvingChange(), e ? this.unshelveBook() : this.shelveBook(t); },
      toggleNonExclusiveShelving(e) { this.props.shelvings.exclusiveShelfName === null && this.props.onNonExclusiveShelvingWithoutExclusive && i.default.isFunction(this.props.onNonExclusiveShelvingWithoutExclusive) && this.props.onNonExclusiveShelvingWithoutExclusive(), g.default.toggleNonExclusiveShelving(this.props.bookId, e, !1, this.props.bookTitle); },
      renderFilter() {
        const e = this.props.userShelves.customExclusiveShelves.concat(this.props.userShelves.nonExclusiveShelves); const t = e.length >= T; return t ? s(h.default, {
          bookId: this.props.bookId, uniqueId: this.props.uniqueId, shelvings: this.props.shelvings, wantToReadMenu: this.state, bemModifiers: this.props.bemModifiers,
        }) : void 0;
      },
      renderEmptyMessage() { const e = this.state.displayableExclusiveShelves; const t = this.state.displayableNonExclusiveShelves; const r = t.concat(e).length; return r === 0 ? s('li', { className: 'wantToReadMenu__genericItem' }, void 0, 'No Matching Shelves') : void 0; },
      renderExclusiveShelves() { const e = this; const t = this.state.displayableExclusiveShelves; return i.default.map(t, (t) => { const r = t.name === e.props.shelvings.exclusiveShelfName; const o = t.displayName; const n = r ? `Unshelve  ${e.props.bookTitle}` : `Shelve ${e.props.bookTitle} as ${o}`; const a = (0, P.default)(e.withBemModifiers('wantToReadMenu__exclusiveShelf'), { 'wantToReadMenu__exclusiveShelf--shelved': r }); const i = e.props.useModalView ? e.renderExclusiveShelfStatusIcon(t) : null; return s('li', { className: 'wantToReadMenu__shelfItem' }, o, s('button', { className: a, 'aria-label': n, onClick() { e.modifyExclusiveShelving(r, t); } }, void 0, i && s('div', { className: 'wantToReadMenu__shelfStatusContainer' }, void 0, i), o)); }); },
      renderExclusiveShelfStatusIcon(e) { let t = null; const r = e.name === this.props.shelvings.exclusiveShelfName; if (r && !this.props.shelvings.isShelvingInProgress) { const o = (0, P.default)('wantToReadButton__checkIcon', 'wantToReadButton__checkIcon--modalView', (0, c.checkIconClassnames)(this.props.shelvings.exclusiveShelfName)); t = s('span', { className: o }); } else this.props.shelvings.isShelvingInProgress && (!this.props.shelvings.targetExclusiveShelfName && r || this.props.shelvings.targetExclusiveShelfName === e.name) && (t = s(k.default, { isSmall: !0 })); return t; },
      renderNonExclusiveShelves() {
        const e = this; const t = this.state.displayableNonExclusiveShelves; return i.default.map(t, (t) => {
          let r = !1; e.props.shelvings.exclusiveShelfName !== null && i.default.includes(e.props.shelvings.nonExclusiveShelfNames, t.name) && (r = !0); const o = t.displayName; const n = `Shelve ${e.props.bookTitle} as ${o}`; const a = e.withBemModifiers('wantToReadMenu__nonExclusiveShelf'); return s('li', { className: 'wantToReadMenu__shelfItem' }, o, s('label', { className: a }, void 0, s('input', {
            className: 'wantToReadMenu__shelfCheckbox', checked: r, type: 'checkbox', name: `shelf[${t.name}]`, 'aria-label': n, onChange() { e.toggleNonExclusiveShelving(t); },
          }), o));
        });
      },
      renderAddNewShelfButton() {
        const e = this.props.userShelves.customExclusiveShelves.concat(this.props.userShelves.nonExclusiveShelves).concat(this.props.userShelves.defaultShelves); const t = i.default.map(e, e => e.name); const r = !i.default.includes(t, this.state.shelfNameFilter); const o = this.withBemModifiers('wantToReadMenu__newShelfButtonContainer'); return s('li', { className: o }, void 0, React.createElement(y.default, n({
          shelfNameFilter: this.state.shelfNameFilter, userCanAddShelf: r, uniqueId: this.props.uniqueId, bookId: this.props.bookId, bemModifiers: this.props.bemModifiers, useModalView: this.props.useModalView, bookTitle: this.props.bookTitle,
        }, this.state)));
      },
      render() { return s('div', { className: 'wantToReadMenu' }, void 0, this.props.useModalView && s('div', { className: 'wantToReadMenu__headerContainer' }, void 0, this.renderFilter()), s('div', { className: 'wantToReadMenu__scrollableContainer' }, void 0, !this.props.useModalView && this.renderFilter(), this.renderEmptyMessage(), this.renderExclusiveShelves(), this.renderNonExclusiveShelves()), this.renderAddNewShelfButton()); },
    });
  }, {
    '../../modules/default_shelves': 12, '../../react_actions/shelvings_actions': 45, '../../react_mixins/gr_reflux': 236, '../../react_stores/want_to_read_menu_store': 266, '../gr_component_factory': 108, '../spinner': 195, './want_to_read_menu_filter': 220, './want_to_read_menu_shelf_creator': 221, classnames: 'classnames', lodash: 'lodash',
  }],
  220: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_actions/want_to_read_menu_actions'); const d = o(u); r.default = l.default.createClass({
      displayName: 'WantToReadMenuFilter',
      propTypes: {
        bookId: a.default.PropTypes.string.isRequired, uniqueId: a.default.PropTypes.string.isRequired, shelvings: a.default.PropTypes.object.isRequired, wantToReadMenu: a.default.PropTypes.object.isRequired,
      },
      handleKeyPress(e) { let t = null; this.props.shelvings.exclusiveShelfName !== null && (t = this.props.shelvings.exclusiveShelfName), d.default.updateShelfNameFilter(e.target.value, this.props.uniqueId, t); },
      render() {
        const e = this.withBemModifiers('wantToReadMenuFilter'); return n('form', { className: e, onSubmit(e) { return e.preventDefault(); } }, void 0, n('input', {
          className: 'gr-textInput\n                               gr-textInput--small\n                               wantToReadMenuFilter--textInput', type: 'text', placeholder: 'Filter Shelves', 'aria-label': 'Filter Shelf Names', value: this.props.wantToReadMenu.shelfNameFilter, onChange: this.handleKeyPress,
        }));
      },
    });
  }, { '../../react_actions/want_to_read_menu_actions': 53, '../gr_component_factory': 108, react: 'react' }],
  221: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('../../react_actions/want_to_read_menu_actions'); const d = o(u); const c = e('../../react_actions/shelvings_actions'); const p = o(c); const f = e('classnames'); const m = o(f); const h = e('lodash'); const _ = o(h); r.default = l.default.createClass({
      displayName: 'WantToReadMenuShelfCreator',
      propTypes: {
        userCanAddShelf: a.default.PropTypes.bool.isRequired, shelfNameFilter: a.default.PropTypes.string, uniqueId: a.default.PropTypes.string.isRequired, bookId: a.default.PropTypes.string.isRequired, bookTitle: a.default.PropTypes.string.isRequired, useModalView: a.default.PropTypes.bool,
      },
      getDefaultProps() { return { useModalView: !1 }; },
      getInitialState() { return { unsavedShelfName: '' }; },
      openAddShelfTextbox() { d.default.openAddShelfTextbox(this.props.uniqueId); },
      closeAddShelfTextbox() { d.default.closeAddShelfTextbox(this.props.uniqueId); },
      checkIfCommentIsEmpty(e) { this.setState({ unsavedShelfName: e.target.value }); },
      shelveAsNewShelfName(e, t) { t.preventDefault(), d.default.updateShelfNameFilter('', this.props.uniqueId), p.default.toggleNonExclusiveShelving(this.props.bookId, { name: e }, !0, this.props.bookTitle); },
      render() {
        const e = this; if (this.props.shelfNameFilter !== '' && this.props.userCanAddShelf) { var t = this.withBemModifiers('wantToReadShelfCreator__addNamedShelfButton'); return n('span', { className: 'wantToReadShelfCreator' }, void 0, n('button', { className: t, 'aria-label': `Add new ${this.props.shelfNameFilter} shelf`, onClick(t) { e.shelveAsNewShelfName(e.props.shelfNameFilter, t); } }, void 0, 'Add new “', n('span', { className: 'wantToReadShelfCreator__addShelfButtonShelfName' }, void 0, this.props.shelfNameFilter), '” shelf')); } if (this.props.showAddShelfTextbox) {
          const r = (0, m.default)(this.withBemModifiers('wantToReadShelfCreator'), 'wantToReadShelfCreator--wrap'); const o = (0, m.default)('gr-textInput', this.withBemModifiers('wantToReadShelfCreator__textInput'), { 'gr-textInput--small': !this.props.useModalView }); const s = (0, m.default)(this.withBemModifiers('wantToReadShelfCreator__addShelfButton'), 'gr-button', { 'gr-button--small': !this.props.useModalView, 'gr-button--dark gr-button--fullWidth': this.props.useModalView }); return n('form', { className: r, onSubmit(t) { e.shelveAsNewShelfName(e.state.unsavedShelfName, t); } }, void 0, n('input', {
            className: o, type: 'text', placeholder: 'New Shelf Name', 'aria-label': 'Add new shelf name', autoFocus: !0, onChange: this.checkIfCommentIsEmpty,
          }), n('div', { className: 'wantToReadShelfCreator__buttonContainer' }, void 0, n('input', {
            type: 'submit', className: s, disabled: _.default.isEmpty(_.default.trim(this.state.unsavedShelfName)), value: 'Add',
          }), this.props.useModalView && n('button', {
            type: 'button', className: 'gr-button gr-button--fullWidth wantToReadShelfCreator__cancelButton', onClick: this.closeAddShelfTextbox, 'aria-label': 'Close add new shelf form',
          }, void 0, 'Cancel')));
        } if (this.props.userCanAddShelf) { var t = this.withBemModifiers('wantToReadShelfCreator__showAddShelfTextboxButton'); return n('span', { className: 'wantToReadShelfCreator' }, void 0, n('button', { className: t, 'aria-label': 'Add new shelf', onClick: this.openAddShelfTextbox }, void 0, 'Add New Shelf')); } return null;
      },
    });
  }, {
    '../../react_actions/shelvings_actions': 45, '../../react_actions/want_to_read_menu_actions': 53, '../gr_component_factory': 108, classnames: 'classnames', lodash: 'lodash', react: 'react',
  }],
  222: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = (function () {
      const e = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103; return function (t, r, o, n) {
        const s = t && t.defaultProps; const a = arguments.length - 3; if (r || a === 0 || (r = {}), r && s) for (const i in s) void 0 === r[i] && (r[i] = s[i]); else r || (r = s || {}); if (a === 1)r.children = n; else if (a > 1) { for (var l = Array(a), u = 0; a > u; u++)l[u] = arguments[u + 3]; r.children = l; } return {
          $$typeof: e, type: t, key: void 0 === o ? null : `${o}`, ref: null, props: r, _owner: null,
        };
      };
    }()); Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('react'); const a = o(s); const i = e('../gr_component_factory'); const l = o(i); const u = e('./want_to_read_button'); const d = o(u); const c = e('../user_rating'); const p = o(c); const f = e('lodash'); r.default = l.default.createClass({ displayName: 'WantToReadWithStars', propTypes: { bookId: a.default.PropTypes.string.isRequired, uniqueId: a.default.PropTypes.string.isRequired, bookTitle: a.default.PropTypes.string.isRequired }, render() { return n('div', {}, void 0, n(d.default, { bookId: this.props.bookId, uniqueId: (0, f.random)(1e6).toString(), bookTitle: this.props.bookTitle }), n(p.default, { bookId: this.props.bookId, bookTitle: this.props.bookTitle })); } });
  }, {
    '../gr_component_factory': 108, '../user_rating': 209, './want_to_read_button': 218, lodash: 'lodash', react: 'react',
  }],
  223: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.ConversationsStores = r.ConversationsComponents = void 0; const n = e('../../react_stores/like_store'); const s = o(n); const a = e('../../react_stores/comments_store'); const i = o(a); const l = e('../../react_components/comment/comment_form'); const u = o(l); const d = e('../../react_components/comment/comments'); const c = o(d); const p = e('../../react_components/like/like_button'); const f = o(p); const m = e('../../react_components/like/like_information'); const h = o(m); r.ConversationsComponents = {
      CommentForm: u.default, Comments: c.default, LikeButton: f.default, LikeInformation: h.default,
    }, r.ConversationsStores = { CommentsStore: i.default, LikeStore: s.default };
  }, {
    '../../react_components/comment/comment_form': 85, '../../react_components/comment/comments': 86, '../../react_components/like/like_button': 136, '../../react_components/like/like_information': 138, '../../react_stores/comments_store': 244, '../../react_stores/like_store': 252,
  }],
  224: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }), r.ExperimentStores = r.ExperimentComponents = void 0; const o = e('./conversations'); const n = e('./old_homepage'); const s = e('./review_show'); const a = e('lodash'); r.ExperimentComponents = (0, a.merge)({}, o.ConversationsComponents, n.OldHomepageComponents, s.ReviewShowComponents), r.ExperimentStores = (0, a.merge)({}, o.ConversationsStores, n.OldHomepageStores, s.ReviewShowStores);
  }, {
    './conversations': 223, './old_homepage': 225, './review_show': 226, lodash: 'lodash',
  }],
  225: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.OldHomepageStores = r.OldHomepageComponents = void 0; const n = e('../../react_stores/like_store'); const s = o(n); const a = e('../../react_stores/comments_store'); const i = o(a); const l = e('../../react_components/comment/comment_form'); const u = o(l); const d = e('../../react_components/comment/comments'); const c = o(d); const p = e('../../react_components/like/like_button'); const f = o(p); const m = e('../../react_components/like/like_information'); const h = o(m); const _ = e('../../react_components/like/like_simple_footer'); const g = o(_); r.OldHomepageComponents = {
      CommentForm: u.default, Comments: c.default, LikeButton: f.default, LikeInformation: h.default, LikeSimpleFooter: g.default,
    }, r.OldHomepageStores = { CommentsStore: i.default, LikeStore: s.default };
  }, {
    '../../react_components/comment/comment_form': 85, '../../react_components/comment/comments': 86, '../../react_components/like/like_button': 136, '../../react_components/like/like_information': 138, '../../react_components/like/like_simple_footer': 139, '../../react_stores/comments_store': 244, '../../react_stores/like_store': 252,
  }],
  226: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.ReviewShowStores = r.ReviewShowComponents = void 0; const n = e('../../react_stores/like_store'); const s = o(n); const a = e('../../react_components/like/like_simple_footer'); const i = o(a); r.ReviewShowComponents = { LikeSimpleFooter: i.default }, r.ReviewShowStores = { LikeStore: s.default };
  }, { '../../react_components/like/like_simple_footer': 139, '../../react_stores/like_store': 252 }],
  227: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.FriendFollowModuleStores = r.FriendFollowModuleComponents = void 0; const n = e('../react_components/user_relationships/friend_follow_module'); const s = o(n); const a = e('../react_stores/user_relationships/friend_follow_module_store'); const i = o(a); const l = e('../react_stores/user/show/block_user_store'); const u = o(l); r.FriendFollowModuleComponents = { FriendFollowModule: s.default }, r.FriendFollowModuleStores = { FriendFollowModuleStore: i.default, BlockUserStore: u.default };
  }, { '../react_components/user_relationships/friend_follow_module': 217, '../react_stores/user/show/block_user_store': 260, '../react_stores/user_relationships/friend_follow_module_store': 264 }],
  228: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.GlobalComponents = r.GlobalStores = void 0; const n = e('../react_stores/google_ads_store'); const s = o(n); const a = e('../react_components/login/interstitial/login_interstitial'); const i = o(a); const l = e('../react_components/stores_initializer'); const u = o(l); const d = e('../react_components/buy_buttons/get_a_copy_button'); const c = o(d); const p = e('../react_components/buy_buttons/get_a_copy_interstitial'); const f = o(p); const m = e('../react_components/buy_buttons/get_a_copy_interstitial_wrapper'); const h = o(m); const _ = e('../react_components/user/user_icon'); const g = o(_); const v = e('../react_stores/user_not_interested_store'); const y = o(v); const b = e('../react_stores/user_shelves_store'); const k = o(b); const S = e('../react_components/qualtrics/qualtrics_survey'); const P = o(S);
    r.GlobalStores = { GoogleAdsStore: s.default, UserNotInterestedStore: y.default, UserShelvesStore: k.default }, r.GlobalComponents = {
      LoginInterstitial: i.default, StoresInitializer: u.default, GetACopyButton: c.default, GetACopyInterstitial: f.default, GetACopyInterstitialWrapper: h.default, QualtricsSurvey: P.default, UserIcon: g.default,
    };
  }, {
    '../react_components/buy_buttons/get_a_copy_button': 77, '../react_components/buy_buttons/get_a_copy_interstitial': 78, '../react_components/buy_buttons/get_a_copy_interstitial_wrapper': 79, '../react_components/login/interstitial/login_interstitial': 142, '../react_components/qualtrics/qualtrics_survey': 159, '../react_components/stores_initializer': 197, '../react_components/user/user_icon': 202, '../react_stores/google_ads_store': 250, '../react_stores/user_not_interested_store': 263, '../react_stores/user_shelves_store': 265,
  }],
  229: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.NewsComponents = void 0; const n = e('../react_components/news/news_preview'); const s = o(n); r.NewsComponents = { NewsPreview: s.default };
  }, { '../react_components/news/news_preview': 150 }],
  230: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.ReadingNotesStores = r.ReadingNotesComponents = void 0; const n = e('../react_components/reading_notes/annotated_books_landing_page'); const s = o(n); const a = e('../react_components/author/author_follow_button'); const i = o(a); const l = e('../react_components/comment/comment_form'); const u = o(l); const d = e('../react_components/comment/comments'); const c = o(d); const p = e('../react_components/like/like_button'); const f = o(p); const m = e('../react_components/like/like_information'); const h = o(m); const _ = e('../react_components/reading_notes/reading_notes_annotator'); const g = o(_); const v = e('../react_components/reading_notes/reading_notes_header'); const y = o(v); const b = e('../react_components/reading_notes/reading_notes_shelving_modal'); const k = o(b); const S = e('../react_components/reading_notes/reading_notes_shelving_modal_trigger'); const P = o(S); const T = e('../react_components/user/user_follow_widget'); const w = o(T); const N = e('../react_components/user/user_icon'); const R = o(N); const M = e('../react_components/want_to_read/want_to_read_button'); const C = o(M); const x = e('../react_components/want_to_read/want_to_read_with_stars'); const A = o(x); const I = e('../react_stores/reading_notes/annotated_books_store'); const L = o(I); const U = e('../react_stores/author_follow_store'); const E = o(U); const O = e('../react_stores/comments_store'); const B = o(O); const j = e('../react_stores/like_store'); const F = o(j); const q = e('../react_stores/shelvings_store'); const D = o(q); const H = e('../react_stores/user/user_follow_store'); const G = o(H); const $ = e('../react_stores/user_shelves_store'); const z = o($); const W = e('../react_stores/user_agent_capabilities_store'); const K = o(W); r.ReadingNotesComponents = {
      AnnotatedBooksLandingPage: s.default, AuthorFollowButton: i.default, CommentForm: u.default, Comments: c.default, LikeButton: f.default, LikeInformation: h.default, ReadingNotesAnnotator: g.default, ReadingNotesHeader: y.default, ReadingNotesShelvingModal: k.default, ReadingNotesShelvingModalTrigger: P.default, UserFollowWidget: w.default, UserIcon: R.default, WantToReadButton: C.default, WantToReadWithStars: A.default,
    }, r.ReadingNotesStores = {
      AnnotatedBooksStore: L.default, AuthorFollowStore: E.default, CommentsStore: B.default, LikeStore: F.default, ShelvingsStore: D.default, UserFollowStore: G.default, UserShelvesStore: z.default, UserAgentCapabilitiesStore: K.default,
    };
  }, {
    '../react_components/author/author_follow_button': 73, '../react_components/comment/comment_form': 85, '../react_components/comment/comments': 86, '../react_components/like/like_button': 136, '../react_components/like/like_information': 138, '../react_components/reading_notes/annotated_books_landing_page': 162, '../react_components/reading_notes/reading_notes_annotator': 165, '../react_components/reading_notes/reading_notes_header': 166, '../react_components/reading_notes/reading_notes_shelving_modal': 167, '../react_components/reading_notes/reading_notes_shelving_modal_trigger': 168, '../react_components/user/user_follow_widget': 201, '../react_components/user/user_icon': 202, '../react_components/want_to_read/want_to_read_button': 218, '../react_components/want_to_read/want_to_read_with_stars': 222, '../react_stores/author_follow_store': 241, '../react_stores/comments_store': 244, '../react_stores/like_store': 252, '../react_stores/reading_notes/annotated_books_store': 255, '../react_stores/shelvings_store': 258, '../react_stores/user/user_follow_store': 261, '../react_stores/user_agent_capabilities_store': 262, '../react_stores/user_shelves_store': 265,
  }],
  231: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } const n = e('array.prototype.find'); const s = o(n); s.default.shim();
  }, { 'array.prototype.find': 'array.prototype.find' }],
  232: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.HeaderComponents = r.HeaderStores = void 0; const n = e('../react_stores/current_user_store'); const s = o(n); const a = e('../react_stores/favorite_genres_store'); const i = o(a); const l = e('../react_stores/notifications_store'); const u = o(l); const d = e('../react_stores/shelvings_store'); const c = o(d); const p = e('../react_stores/tabs_store'); const f = o(p); const m = e('../react_components/flash_message'); const h = o(m); const _ = e('../react_components/featured_content_module'); const g = o(_); const v = e('../react_components/page_skin'); const y = o(v); const b = e('../react_components/ads/google_banner_ad'); const k = o(b); const S = e('../react_components/ads/native_ads/native_ad'); const P = o(S); const T = e('../react_components/ads/google_page_skin'); const w = o(T); const N = e('../react_components/ads/google_featured_content_module'); const R = o(N); const M = e('../react_components/scroll_tracker'); const C = o(M); const x = e('../react_components/header/header_store_connector'); const A = o(x); const I = e('../react_components/site_announcement/site_announcement'); const L = o(I); const U = e('../react_components/site_announcement/choice_site_announcement'); const E = o(U); const O = e('../react_components/site_announcement/welcome_announcement'); const B = o(O); const j = e('../react_components/group/preview_broadcast'); const F = o(j); const q = e('../react_components/jobs_list'); const D = o(q); const H = e('../react_components/shared/shareable_link_button'); const G = o(H); const $ = e('../react_components/share_dialog'); const z = o($); const W = e('../react_stores/share_dialog_store'); const K = o(W); r.HeaderStores = {
      CurrentUserStore: s.default, FavoriteGenresStore: i.default, NotificationsStore: u.default, ShareDialogStore: K.default, ShelvingsStore: c.default, TabsStore: f.default,
    }, r.HeaderComponents = {
      FlashMessage: h.default, HeaderStoreConnector: A.default, PageSkin: y.default, FeaturedContentModule: g.default, GoogleBannerAd: k.default, GooglePageSkin: w.default, GoogleFeaturedContentModule: R.default, ScrollTracker: C.default, SiteAnnouncement: L.default, ChoiceSiteAnnouncement: E.default, WelcomeAnnouncement: B.default, ShareDialog: z.default, PreviewBroadcast: F.default, NativeAd: P.default, JobsList: D.default, ShareableLinkButton: G.default,
    };
  }, {
    '../react_components/ads/google_banner_ad': 59, '../react_components/ads/google_featured_content_module': 60, '../react_components/ads/google_page_skin': 61, '../react_components/ads/native_ads/native_ad': 63, '../react_components/featured_content_module': 104, '../react_components/flash_message': 106, '../react_components/group/preview_broadcast': 110, '../react_components/header/header_store_connector': 123, '../react_components/jobs_list': 135, '../react_components/page_skin': 151, '../react_components/scroll_tracker': 169, '../react_components/share_dialog': 177, '../react_components/shared/shareable_link_button': 182, '../react_components/site_announcement/choice_site_announcement': 191, '../react_components/site_announcement/site_announcement': 193, '../react_components/site_announcement/welcome_announcement': 194, '../react_stores/current_user_store': 245, '../react_stores/favorite_genres_store': 248, '../react_stores/notifications_store': 254, '../react_stores/share_dialog_store': 256, '../react_stores/shelvings_store': 258, '../react_stores/tabs_store': 259,
  }],
  233: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('lodash'); const i = o(a); const l = e('classnames'); const u = o(l); r.default = { propTypes: { bemModifiers: s.default.PropTypes.oneOfType([s.default.PropTypes.string, s.default.PropTypes.arrayOf(s.default.PropTypes.string)]) }, withBemModifiers(e) { let t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; if (t === null && (t = this.props.bemModifiers), !t) return e; if (i.default.isString(t)) return `${e} ${e}--${t}`; if (i.default.isArray(t)) { const r = (0, u.default)(e, i.default.map(t, t => `${e}--${t}`)); return r; } }, withBemElement(e, t) { return this.props.bemModifiers ? i.default.isString(this.props.bemModifiers) ? `${e}--${this.props.bemModifiers}__${t}` : i.default.isArray(this.props.bemModifiers) ? (0, u.default)(i.default.map(this.props.bemModifiers, r => `${e}--${r}__${t}`)) : void 0 : `${e}__${t}`; } };
  }, { classnames: 'classnames', lodash: 'lodash', react: 'react' }],
  234: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react'); const s = o(n); const a = e('lodash'); const i = o(a); r.default = { propTypes: { deployServices: s.default.PropTypes.arrayOf(s.default.PropTypes.string) }, isFeatureEnabled(e) { return i.default.indexOf(this.deployServices(), e) >= 0; }, deployServices() { if (void 0 === this.props.deployServices) throw `trying to access Deploy Services from component, but component does not contain deployServices prop (${this.constructor.displayName})`; return this.props.deployServices; } };
  }, { lodash: 'lodash', react: 'react' }],
  235: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }), r.default = function (e) {
      return {
        getInitialState() { return this.store = e(), this.store.getInitialState(); }, componentWillMount() { this.actions = this.store.actions, this.unsubscribe = this.store.listen(this.onStoreChange); }, componentWillUnmount() { this.unsubscribe(); }, onStoreChange(e) { this.setState(e); },
      };
    };
  }, {}],
  236: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = r, e;
    } function s(e, t) { const r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]; const o = r.stateKey; const s = void 0 === o ? null : o; const a = r.filterValue; const l = void 0 === a ? null : a; return { getInitialState() { let r = e.getInitialState(i.default.get(this.props, t)); return l && (r = r[l]), i.default.isNull(s) || (r = n({}, s, r)), r; }, componentDidMount() { const r = this; u.default.utils.extend(this, u.default.ListenerMethods), this.listenTo(e, (e) => { let o = e[i.default.get(r.props, t)]; l && (o = o[l]), i.default.isNull(s) || (o = n({}, s, o)), r.setState(o); }); }, componentWillUnmount: u.default.ListenerMixin.componentWillUnmount }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.connectToLazyStore = s; const a = e('lodash'); var i = o(a); const l = e('reflux'); var u = o(l);
  }, { lodash: 'lodash', reflux: 'reflux' }],
  237: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = 250; r.default = { onEnterIntent(e, t) { t || (t = a); try { clearTimeout(this.leaveTimeout); } catch (r) {} this.hoverTimeout = s.default.delay(e, t); }, onLeaveIntent(e, t) { t || (t = a); try { clearTimeout(this.hoverTimeout); } catch (r) {} this.leaveTimeout = s.default.delay(e, t); } };
  }, { lodash: 'lodash' }],
  238: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('react-dom'); const s = o(n); const a = e('lodash'); const i = e('../modules/data_tracking/data_tracking_helper'); r.default = { componentDidMount() { const e = this; const t = this.props.trackingOptions; t && !(function () { const r = s.default.findDOMNode(e); r && ((0, a.each)((0, a.keys)(t), (e) => { const o = t[e]; (0, a.isUndefined)(o) || r.setAttribute(`data-tracking-${e}`, JSON.stringify(o)); }), t.enableTracking === !0 && r.addEventListener('click', i.handleDataTracking)); }()); } };
  }, { '../modules/data_tracking/data_tracking_helper': 10, lodash: 'lodash', 'react-dom': 'react-dom' }],
  239: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = e('../../react_actions/buy_buttons/get_a_copy_actions'); const n = function () { const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = arguments[1]; switch (t.type) { case o.GET_A_COPY_ACTIONS.LOADED_SUCCESS: return Object.assign({}, e, { activeGetACopyInterstitial: t.data }); case o.GET_A_COPY_ACTIONS.INTERSTITIAL_CLOSED: return Object.assign({}, e, { activeGetACopyInterstitial: null }); default: return e; } }; r.default = n;
  }, { '../../react_actions/buy_buttons/get_a_copy_actions': 27 }],
  240: [function (e, t, r) {
    Object.defineProperty(r, '__esModule', { value: !0 }); const o = e('../../react_actions/header/search_actions'); r.default = function () { const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = arguments[1]; switch (t.type) { case o.TOGGLE_SEARCH: return Object.assign({}, e, { searchIsActive: t.searchIsActive }); default: return e; } };
  }, { '../../react_actions/header/search_actions': 37 }],
  241: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../react_actions/author_follow_actions'); const c = o(d); const p = e('./shared/newsfeed_updates_mixin'); const f = o(p); const m = new i.default({}); const h = function () { return m.get(); }; const _ = function (e, t) { return h()[e].set(t); }; const g = function (e, t) { return h()[e][t]; }; const v = function (e) { const t = g(e, 'followingCount'); const r = g(e, 'isFollowing'); const o = { isFollowing: !r, followingCount: r ? t - 1 : t + 1 }; _(e, o); }; const y = function (e) { const t = g(e, 'buttonEnabled'); _(e, { buttonEnabled: !t }); }; const b = s.default.createStore({
      listenables: c.default,
      mixins: [(0, f.default)(p.NEWSFEED_DEPENDENT_STORE_KEYS.AUTHOR_FOLLOWS)],
      getInitialState: h,
      getState: h,
      initializeWith(e) {
        const t = u.default.transform(e, (e, t, r) => {
          e[r] = {
            isFollowing: t.isFollowing || !1, followingCount: t.followingCount || 0, authorFollowingId: t.authorFollowingId || null, source: t.source || !1, buttonEnabled: !0,
          };
        }); h().set(t);
      },
      updateWith(e) { this.initializeWith(e); },
      reset() { h().reset({}); },
      onFollow(e) {
        const t = this; const r = g(e, 'source'); const o = r === 'AnnotatedBooksPage'; const n = r === 'ReadingNotesListPage'; y(e), this.trigger(this.getState()), $j.post('/author_followings', {
          format: 'json', id: e, from_annotated_books_page: o, from_reading_notes_list_page: n,
        }).done((r) => { const o = { authorFollowingId: parseInt(u.default.words(r.url, /[0-9]+/)[0], 10) }; _(e, o), v(e), y(e), t.trigger(t.getState()); }).fail((e) => { e && e.status === 403 && e.responseJSON && (location.href = e.responseJSON.redirect); });
      },
      onUnFollow(e) { const t = this; y(e), this.trigger(this.getState()), $j.ajax({ type: 'DELETE', url: `/author_followings/${g(e, 'authorFollowingId')}`, data: { format: 'json' } }).done(() => { const r = { authorFollowingId: null }; _(e, r), v(e), y(e), t.trigger(t.getState()); }); },
    }); r.default = b;
  }, {
    '../react_actions/author_follow_actions': 25, './shared/newsfeed_updates_mixin': 257, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  242: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/book_search_actions_factory'); const c = o(d); const p = function () {
      const e = new u.default({
        showLoadingSpinner: !1, showResultsContainer: !1, results: [], query: '', activeResult: null,
      }); const t = (0, c.default)(); const r = function (t) { const r = e.get(); r.results.reset(t); }; const o = i.default.createStore({
        listenables: t,
        getInitialState: e.get,
        getState: e.get,
        actions: t,
        initializeWith(t) {
          e.get().set('showLoadingSpinner', t.showLoadingSpinner).set('showResultsContainer', t.showResultsContainer).set('query', t.query)
            .set('activeResult', t.activeResult).results.reset(t.results);
        },
        reset() { e.get().reset({}); },
        setValue(t, r) { const o = e.get(); o.set(t, r); },
        onSelectSpecificResult(e) { const t = s.default.find(this.getState().results, t => t.bookId === e); this.setValue('activeResult', t), this.trigger(this.getState()); },
        onSetShowResultsContainer(e) { this.setValue('showResultsContainer', e), this.trigger(this.getState()); },
        onSelectNextResult(e) { const t = this.getState().results; const r = s.default.indexOf(t, this.getState().activeResult); this.setValue('activeResult', t[(r + 1) % e]), this.trigger(this.getState()); },
        onSelectPreviousResult(e) { const t = this.getState().results; const r = this.getState().activeResult; const o = s.default.indexOf(t, r); o === 0 || r === null ? this.setValue('activeResult', t[e - 1]) : this.setValue('activeResult', t[(o - 1) % e]), this.trigger(this.getState()); },
        onSearchResultsFound(e, t) { r(t), this.setValue('query', e), this.setValue('showLoadingSpinner', !1), this.setValue('activeResult', null), this.setValue('showResultsContainer', !0), this.trigger(this.getState()); },
        onSearch(e, r) { this.setValue('showLoadingSpinner', !0), this.trigger(this.getState()), $j.ajax({ url: r, data: { format: 'json', q: e }, success(r) { t.searchResultsFound(e, r); } }); },
      }); return o;
    }; r.default = p;
  }, {
    '../react_actions/book_search_actions_factory': 26, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  243: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('redux'); const s = e('redux-logger'); const a = o(s); const i = e('../../modules/env_utils'); const l = o(i); const u = e('redux-thunk'); const d = o(u); const c = e('../../react_reducers/buy_buttons/get_a_copy_reducer'); const p = o(c); const f = [d.default]; l.default.isDevelopment() && l.default.hasDom() && f.push((0, a.default)()); const m = (0, n.createStore)(p.default, {}, n.applyMiddleware.apply(void 0, f)); r.default = m;
  }, {
    '../../modules/env_utils': 13, '../../react_reducers/buy_buttons/get_a_copy_reducer': 239, redux: 'redux', 'redux-logger': 'redux-logger', 'redux-thunk': 'redux-thunk',
  }],
  244: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../modules/gr_error_reporting'); const c = o(d); const p = e('../react_actions/comment_actions'); const f = o(p); const m = e('./shared/newsfeed_updates_mixin'); const h = o(m); const _ = {}; const g = new u.default(_); const v = 2; const y = 10; const b = function () { return g.get(); }; const k = function (e) { b().reset(s.default.merge({}, _, e)); }; const S = function (e) {
      return s.default.has(b(), e) || b().set(e, {
        numComments: 0, unsavedComment: '', comments: [], saveInProgress: !1, showCommentButton: !1, textareaRows: 1, showPagination: !1, currentPage: 1, showSeeMoreLoadingSpinner: !1,
      }), b()[e];
    }; const P = function (e, t) { S(e).set(t); }; r.default = i.default.createStore({
      listenables: f.default,
      mixins: [(0, h.default)(m.NEWSFEED_DEPENDENT_STORE_KEYS.COMMENTS)],
      initializeWith(e) { k(e); },
      updateWith(e) {
        const t = s.default.transform(e, (e, t, r) => {
          e[r] = {
            numComments: t.numComments || 0, unsavedComment: t.unsavedComment || '', comments: t.comments || [], showCommentButton: !1, saveInProgress: !1, textareaRows: 1, deletableByCurrentUser: t.deletableByCurrentUser, blockedByCurrentUser: t.blockedByCurrentUser || !1,
          };
        }); b().set(t);
      },
      onTextareaFocusRequested(e) { P(e, { textareaFocusRequested: !0 }), this.notifyListeners(); },
      onTextareaFocused(e) { P(e, { textareaRows: v, textareaFocusRequested: !1, showCommentButton: !0 }), this.notifyListeners(); },
      onTextareaUnfocused(e) { const t = S(e).unsavedComment; s.default.isEmpty(s.default.trim(t)) && P(e, { textareaRows: 1 }), this.notifyListeners(); },
      onShowSeeMoreLoadingSpinner(e) { P(e, { showSeeMoreLoadingSpinner: !0 }), this.notifyListeners(); },
      onDeleteComment(e, t, r) { const o = this; const n = S(e); const a = n.numComments - 1; const i = s.default.findIndex(n.comments, e => e.uri === t); i >= 0 && (n.set('numComments', a), n.comments.splice(i, 1), n.showPagination || this.notifyListeners(), $j.post(`/comment/destroy?comment_uri=${t}`).done(() => { n.showPagination && (S(e).comments.length === 0 && n.currentPage > 1 ? (r.page = n.currentPage - 1, f.default.showCommentsForPage(r)) : n.currentPage < Math.ceil(a / y) ? (r.page = n.currentPage, f.default.showCommentsForPage(r)) : o.notifyListeners()); })); },
      onAddNewComment(e) {
        const t = this; const r = { body: S(e.subjectKey).unsavedComment, authorUser: e.authorUser, updatedAtMessage: 'Just now' }; P(e.subjectKey, { saveInProgress: !0 }), this.notifyListeners(), $j.post('/comment.json', {
          type: e.subject.type, id: e.subject.id, resource_uri: e.subject.uri, comment: { body_usertext: r.body }, digest_default: !0, respect_update_feed_preference: !0, react_framework: !0,
        }).done((r) => {
          const o = S(e.subjectKey); const n = o.numComments + 1; if (o.set({
            unsavedComment: '', saveInProgress: !1, numComments: n, showCommentButton: !1,
          }), o.comments.length < y) {
            const s = r; o.comments.push({
              createdAt: new Date(), body: s.body, deletableByCurrentUser: s.deletableByCurrentUser, blockedByCurrentUser: s.blockedByCurrentUser, authorUser: e.authorUser, updatedAtMessage: 'Just now', uri: s.uri, flagForAbuseUrl: s.flagForAbuseUrl,
            });
          } else e.page = Math.ceil(n / y), f.default.showCommentsForPage(e); t.onTextareaUnfocused(e.subjectKey);
        }).fail((t) => { let r = null; t.status === 422 ? r = 'Sorry, your comment cannot be posted because it is too long (must be under 12000 characters). Please try again.' : t.status === 404 ? r = 'Sorry, this post has been deleted.' : (r = 'Sorry, your comment cannot be posted. ', t.responseJSON && t.responseJSON.errors && (r += t.responseJSON.errors.join(', '))), r && c.default.notifyUser(r), P(e.subjectKey, { saveInProgress: !1, showCommentButton: !1 }), f.default.textareaUnfocused(e.subjectKey); });
      },
      onShowCommentsForPage(e) {
        const t = this; const r = e.page > 0 ? e.page : 1; $j.get('/comment/index.json', {
          type: e.subject.type, id: e.subject.id, resource_uri: e.subject.uri, page: r, per_page: y, reverse: !0, react_framework: !0,
        }).done((o) => {
          P(e.subjectKey, {
            comments: o.comments, showPagination: !0, currentPage: r, showSeeMoreLoadingSpinner: !1,
          }), t.notifyListeners();
        });
      },
      onCommentEntered(e, t) { P(e, { unsavedComment: t }), this.notifyListeners(); },
      getState: b,
      getInitialState(e) { return s.default.isUndefined(e) ? b() : S(e); },
      getInitialStateForKey: S,
      reset() { k({}); },
      notifyListeners() { this.trigger(b()); },
    });
  }, {
    '../modules/gr_error_reporting': 15, '../react_actions/comment_actions': 28, './shared/newsfeed_updates_mixin': 257, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  245: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = r, e;
    }Object.defineProperty(r, '__esModule', { value: !0 }); const s = e('lodash'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('freezer-js'); const d = o(u); const c = e('../react_actions/current_user_actions'); const p = o(c); const f = { currentUser: {} }; const m = new d.default(f); const h = function () { return m.get(); }; const _ = function (e) { h().reset(a.default.merge({}, f, e)); }; r.default = l.default.createStore({
      listenables: [p.default], initializeWith(e) { a.default.each(a.default.keys(e), (e) => { if (!a.default.has(f, e)) throw new Error(`Unexpected key passed to initializeWith. Received ${e} Expected one of ${a.default.keys(f)}`); }), _(e); }, getState: h, getInitialState: h, onUpdatePreference(e, t) { $j.post('/user/update_preferences', { user: n({}, e, t) }); }, reset() { _({}); },
    });
  }, {
    '../react_actions/current_user_actions': 29, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  246: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../../../modules/ajax/ajax_helper'); const c = e('../../../react_actions/experimental/universal_search_actions_factory'); const p = o(c); const f = function () {
      const e = new u.default({
        showLoadingSpinner: !1, showResultsContainer: !1, results: [], query: '', activeResult: null, currentInput: null,
      }); const t = (0, p.default)(); const r = function (t) { const r = e.get(); r.results.reset(t); }; const o = 300; const n = i.default.createStore({
        listenables: t,
        getInitialState: e.get,
        getState: e.get,
        actions: t,
        initializeWith(t) {
          e.get().set({
            showLoadingSpinner: t.showLoadingSpinner, showResultsContainer: t.showResultsContainer, query: t.query, activeResult: t.activeResult,
          }).results.reset(t.results);
        },
        reset() { e.get().reset({}); },
        hide() { e.get().set({ showLoadingSpinner: !1, activeResult: null, showResultsContaine: !1 }), this.trigger(e.get()); },
        search(r, o, n) { r == e.get().currentInput ? (e.get().set('showLoadingSpinner', !0), this.trigger(e.get()), (0, d.httpGet)(o, { data: { format: 'json', query: r, limit: n }, success(e) { t.searchResultsFound(r, e); } })) : this.hide(); },
        delayedSearch: s.default.debounce((e, t, r, o) => { e.search(t, r, o); }, o),
        onSelectSpecificResult(t) { e.get().set('activeResult', t), this.trigger(e.get()); },
        onSetShowResultsContainer(t) { e.get().set('showResultsContainer', t), this.trigger(e.get()); },
        onSelectNextResult(t) { const r = e.get().results; const o = s.default.indexOf(r, e.get().activeResult); e.get().set('activeResult', r[(o + 1) % t]), this.trigger(e.get()); },
        onSelectPreviousResult(t) { const r = e.get().results; const o = e.get().activeResult; const n = s.default.indexOf(r, o); n === 0 || o === null ? e.get().set('activeResult', r[t - 1]) : e.get().set('activeResult', r[(n - 1) % t]), this.trigger(e.get()); },
        onSearchResultsFound(t, o) {
          t == e.get().currentInput && (r(o), e.get().set({
            query: t, showLoadingSpinner: !1, activeResult: null, showResultsContainer: !0,
          }), this.trigger(e.get()));
        },
        onSearch(t, r, o) { t = t.trim(), e.get().set('currentInput', t), s.default.isEmpty(t) ? this.hide() : this.delayedSearch(this, t, r, o); },
      }); return n;
    }; r.default = f;
  }, {
    '../../../modules/ajax/ajax_helper': 5, '../../../react_actions/experimental/universal_search_actions_factory': 32, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  247: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/favorite_genres_actions'); const c = o(d); const p = e('../react_actions/favorite_genres_form_actions'); const f = o(p); const m = new u.default({ selectedGenres: [] }); const h = function () { return m.get(); }; const _ = function () { const e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0]; h().selectedGenres.reset(e); }; const g = i.default.createStore({
      listenables: f.default, getInitialState: h, getState: h, initializeWith() { for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)t[r] = arguments[r]; _(t); }, onSubmitSelectedGenres() { c.default.changeFavoriteGenres(h().selectedGenres); }, onSelectFavoriteGenre(e) { s.default.includes(h().selectedGenres, e) || (h().selectedGenres.push(e), this.notifyListeners()); }, onDeselectFavoriteGenre(e) { h().selectedGenres.shift(e), this.notifyListeners(); }, notifyListeners() { this.trigger(h()); }, reset() { _(); },
    }); r.default = g;
  }, {
    '../react_actions/favorite_genres_actions': 33, '../react_actions/favorite_genres_form_actions': 34, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  248: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/favorite_genres_actions'); const c = o(d); const p = { allGenres: [], favoriteGenres: [] }; const f = new u.default(p); const m = function () { return f.get(); }; const h = function (e) { m().reset(s.default.merge({}, p, e)); }; const _ = function (e) { return s.default.inject(m().allGenres, (t, r) => { const o = r.name; return t.favorites[o] = s.default.includes(e, o), t; }, { favorites: {} }); }; r.default = i.default.createStore({
      listenables: [c.default], initializeWith(e) { s.default.each(s.default.keys(e), (e) => { if (!s.default.has(p, e)) throw new Error(`Unexpected key passed to initializeWith. Received ${e}. Expected one of ${s.default.keys(p)}`); }), h(e); }, updateWith(e) { m().set(e); }, getState: m, getInitialState: m, reset() { h(); }, notifyListeners() { this.trigger(m()); }, onChangeFavoriteGenres(e) { const t = this; const r = function () { m().favoriteGenres.reset(e), t.notifyListeners(); }; $j.post('/user/edit_fav_genres', s.default.merge(_(e), { format: 'json' }), r); },
    });
  }, {
    '../react_actions/favorite_genres_actions': 33, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  249: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/featured_genres_actions'); const c = o(d); const p = e('../react_actions/shelvings_actions'); const f = o(p); const m = e('../react_stores/favorite_genres_store'); const h = o(m); const _ = new u.default({}); const g = function () { return _.get(); }; const v = i.default.createStore({
      listenables: c.default, init() { h.default.listen(() => { c.default.requestFeaturedBooks(); }); }, initializeWith(e) { _.get().reset({ featuredGenreBookInfo: e }); }, getInitialState: g, getState: g, onRequestFeaturedBooks() { const e = this; return s.default.isEmpty(h.default.getState().favoriteGenres) ? void this.saveNewFeaturedBooks([]) : void (g().requestedFeaturedBooksBefore || ($j.get('/genres/featured_books').done((t) => { e.saveNewFeaturedBooks(t.genres), f.default.addShelvings(t.shelvings); }).fail((e) => { c.default.displayError(e); }), g().set('requestedFeaturedBooksBefore', !0))); }, onTrackMenuImpression() { $j.get('/dfp/browse_menu_impression'); }, saveNewFeaturedBooks(e) { g().set('featuredGenreBookInfo', e), this.notifyListeners(); }, onDisplayError() { g().set('errorMessage', 'Error loading featured books in genre.'), this.notifyListeners(); }, notifyListeners() { this.trigger(g()); }, reset() { g().reset({}); },
    }); r.default = v;
  }, {
    '../react_actions/featured_genres_actions': 35, '../react_actions/shelvings_actions': 45, '../react_stores/favorite_genres_store': 248, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  250: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++)r[t] = e[t]; return r; } return Array.from(e); }Object.defineProperty(r, '__esModule', { value: !0 }), r.ImpressionCode = void 0; const s = e('lodash'); const a = o(s); const i = e('reflux'); const l = o(i); const u = e('freezer-js'); const d = o(u); const c = e('../react_actions/data_tracking/data_tracking_actions'); const p = o(c); const f = e('../react_actions/google_ads_actions'); const m = o(f); const h = e('../react_actions/newsfeed_actions'); const _ = o(h); const g = e('../modules/ads/google_ad_helper'); const v = e('../modules/env_utils'); const y = o(v); const b = {
      targeting: {}, ads: {}, nativeAds: {}, device_type: null,
    }; const k = new d.default(b); const S = r.ImpressionCode = {
      success: '0', dfpError: '1', monolithError: '2', empty: '3',
    }; const P = function () { return k.get(); }; const T = function () { const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; P().reset(a.default.merge({}, b, e)); }; const w = function (e) { if (!a.default.has(P().ads, e)) { if (!a.default.has(P().nativeAds, e)) throw new ReferenceError(`No such product existing for key ${e}`); return P().nativeAds[e]; } return P().ads[e]; }; const N = function (e, t) { w(e).set(t); }; const R = function (e) { return e.path.split('/', 3)[2]; }; const M = function (e) {
      return {
        ad_unit: R(e), line_item_id: e.lineItemId, campaign_id: e.campaignId, ad_device_type: e.adDeviceType,
      };
    }; const C = function (e, t, r) { const o = a.default.merge(M(t), r); $j.ajax({ url: e, type: 'GET', data: o }); }; const x = function (e) { N(e, { impressionLogged: !0 }); }; const A = function (e, t) { const r = w(e); r && !r.impressionLogged && (C(r.pmetImpressionTrackUrl, r, { impression_output: t }), x(e)); }; const I = function (e) { C(e.pmetClickTrackUrl, e, { click_type: 'click' }); }; const L = function (e) { switch (e) { case 'NewsfeedAd': return '/dfp/ajax_native_ad'; case 'PageSkin': return '/dfp/ajax_premium_campaign_page_skin'; case 'FeaturedContent': return '/dfp/ajax_premium_campaign_featured_content'; } }; r.default = l.default.createStore({
      listenables: [m.default, { trackClickEvent: p.default.trackClickEvent }],
      initializeWith(e) { (0, g.lazyLoadInit)(), e = a.default.merge({}, { callbacksAttached: [] }, e), T(e); const t = []; if (y.default.hasDom() && !(0, g.adSlotsDefined)()) { const r = a.default.merge({}, this.getState().ads, this.getState().nativeAds); a.default.map(r, (e, r) => { e.isLazyLoaded || ((0, g.defineSlot)(r, e.path, e.dimensions, e.adSizeMapping), t.push((0, g.slotToHash)(e, r))); }), (0, g.enableServices)(), (0, g.fetchApstagBids)(t); } },
      resetTo(e) { T(e); },
      updateWith(e) {
        P().set(a.default.merge({}, P(), e));
      },
      onTrackClickEvent(e, t) { let r = e.target; let o = void 0; let n = void 0; let s = void 0; let i = void 0; const l = /news/; let u = JSON.parse(t.getAttribute('data-tracking-adId')); if (u = u || a.default.findKey(P().nativeAds, e => e.path.match(l))) for (;r !== t;)r.getAttribute('data-tracking-dfp') && !o && (o = r.getAttribute('data-tracking-dfp'), s = JSON.parse(o), s && this.trackDfpClick(u)), r.getAttribute('data-tracking-pmet') && !n && (n = r.getAttribute('data-tracking-pmet'), i = JSON.parse(n), this.trackPmetClick(u, i)), r = r.parentNode; },
      mergeWith(e) { P().set(a.default.merge({}, P(), e)); },
      onHasAttachedDfpCallbackForSlot(e) { this.getState().set('callbacksAttached', [].concat(n(this.getState().callbacksAttached), [e])); },
      onCheckCallbacksAttached(e, t, r) { const o = a.default.reduce(['ads', 'nativeAds'], (e, t) => { const o = a.default.reduce(a.default.keys(P()[t]), (e, t) => { let o = void 0; return o = a.default.includes(r, t) ? w(t).isLazyLoaded || a.default.includes(P().callbacksAttached, t) : !0, e && o; }, !0); return e && o; }, !0); o ? e(!0) : setTimeout(() => e(!1), 500); },
      onRequestCreativeForSlot(e, t) { window.googletag && window.googletag.cmd && window.googletag.cmd.push(() => { (0, g.requestCreative)(e, t); }); },
      onRemoveAdSlot(e) { N(e, { empty: !0 }), this.notifyListeners(); },
      onTrackImpression(e, t) { A(e, t); },
      onAttachServedBannerAdAttributesAndTracking(e, t, r, o, n, s) {
        N(e, {
          campaignId: t, lineItemId: r, creative: o, impressionCode: n,
        }); const a = w(e); return o ? (s || A(e, n), void a.creative.on('click', 'a', () => { I(a); })) : void A(e, S.dfpError);
      },
      onAttachServedNativeAdAttributesAndTracking(e, t, r, o, n, s, a, i) { N(e, { campaignId: t, lineItemId: r, url: a }); const l = w(e); const u = l.resourceType; const d = L(u); return o ? void (l.resourceType === 'NewsfeedAd' ? this.ajaxNewsfeedAd(e, r, n, s, a, i, d) : this.ajaxPremiumCampaign(e, r, n, s, a, i, d)) : void A(e, S.dfpError); },
      ajaxNewsfeedAd(e, t, r, o, n, s, a) {
        const i = this; $j.ajax({
          type: 'GET',
          url: a,
          data: {
            format: 'json', id: r, line_item_id: t, ad_unit: s, ad_device_type: 'desktop', react: !0,
          },
        }).done((t) => { t.ok ? (N(e, t), _.default.updateNativeAdSlot(w(e).id, w(e)), i.notifyListeners(), A(e, o)) : A(e, S.monolithError); });
      },
      ajaxPremiumCampaign(e, t, r, o, n, s, a) {
        const i = this; $j.ajax({
          type: 'GET',
          url: a,
          data: {
            format: 'json', id: r, line_item_id: t, ad_unit: s, ad_device_type: 'desktop',
          },
        }).done((t) => { t.ok ? (N(e, t), i.notifyListeners(P()), A(e, o)) : A(e, S.monolithError); });
      },
      trackDfpClick(e) { const t = w(e); const r = t.url; const o = a.default.merge(M(t), { click_type: 'click' }); const n = encodeURIComponent(`?${$j.param(o)}`); $j.ajax({ type: 'GET', url: r + t.pmetClickTrackUrl + n }); },
      trackPmetClick(e, t) { const r = w(e); const o = a.default.merge(M(r), t); $j.ajax({ type: 'GET', url: r.pmetClickTrackUrl, data: o }); },
      notifyListeners() { this.trigger(P()); },
      getInitialState(e) { return a.default.isUndefined(e) ? P() : w(e); },
      getInitialStateForKey: w,
      getState: P,
      reset: T,
    });
  }, {
    '../modules/ads/google_ad_helper': 4, '../modules/env_utils': 13, '../react_actions/data_tracking/data_tracking_actions': 30, '../react_actions/google_ads_actions': 36, '../react_actions/newsfeed_actions': 40, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  251: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = e('reflux'); const a = o(s); const i = e('freezer-js'); const l = o(i); const u = e('../react_actions/discussions_pane_actions'); const d = o(u); const c = { groups: [] }; const p = new l.default(c); const f = function () { return p.get(); }; const m = function (e) { f().reset((0, n.merge)({}, c, e)); }; r.default = a.default.createStore({
      listenables: [d.default],
      getState: f,
      getInitialState: f,
      onOpenPane() { const e = this; $j.post('/track/track_click', { feature: 'NavBarDiscussionsPaneOpenedGem' }), (0, n.isEmpty)(f().groups) && (this.trigger(f()), $j.get('/group/navbar_discussions', { format: 'json' }).done((t) => { e.updateWith(t); }).fail(() => { f().set('errorMessage', 'There was an error loading your groups.'), e.trigger(f()); })); },
      updateWith(e) {
        e.sparse ? f().set('sparse', e.sparse) : (0, n.each)(e.groups, (e) => {
          const t = e.group; f().groups.push({
            group: {
              name: t.name, iconUrl: t.iconUrl, url: t.url, lastActiveAt: t.lastActiveAt, id: t.id, allUnreadPostsUrl: t.allUnreadPostsUrl,
            },
            topics: e.topics,
          });
        }), this.trigger(f());
      },
      reset() { m({}); },
    });
  }, {
    '../react_actions/discussions_pane_actions': 31, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  252: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/like_actions'); const c = o(d); const p = e('./shared/newsfeed_updates_mixin'); const f = o(p); const m = e('../modules/gr_error_reporting'); const h = o(m); const _ = e('../modules/ajax/ajax_helper'); const g = new u.default({}); const v = function () { return g.get(); }; const y = function (e) { return s.default.has(v(), e) || v().set(e, { likeCount: 0, isLiked: !1, showLoadingSpinner: !1 }), v()[e]; }; const b = function (e, t, r) { v()[e].set(t, r); }; const k = function (e, t) { return v()[e][t]; }; const S = function (e) { const t = k(e, 'likeCount'); const r = k(e, 'isLiked'); b(e, 'isLiked', !r), b(e, 'likeCount', k(e, 'isLiked') ? t + 1 : t - 1); }; const P = i.default.createStore({
      listenables: c.default,
      mixins: [(0, f.default)(p.NEWSFEED_DEPENDENT_STORE_KEYS.LIKES)],
      getState: v,
      getInitialState(e) { return s.default.isUndefined(e) ? v() : y(e); },
      getInitialStateForKey: y,
      reset() { g.get().reset({}); },
      initializeWith(e) { s.default.each(s.default.keys(e), (t) => { const r = e[t]; r.likedBy = r.likedBy || !1, r.likeCount = r.likeCount || 0, r.showLoadingSpinner = !1, v().set(t, r); }); },
      updateWith(e) { this.initializeWith(e); },
      triggerLoadingSpinner(e) { const t = k(e, 'showLoadingSpinner'); b(e, 'showLoadingSpinner', !t); },
      onLike(e) {
        const t = this; this.triggerLoadingSpinner(e), this.trigger(this.getState()), (0, _.httpPost)('/rating', {
          format: 'json',
          data: {
            rating: {
              resource_type: k(e, 'resourceType'), resource_id: k(e, 'resourceId'), resource_uri: k(e, 'resourceUri'), rating: 1,
            },
          },
        }).done((r) => { S(e), b(e, 'ratingId', r.rating_id), t.trigger(v()); }).fail((e) => { const t = e.responseText; t && h.default.notifyUser(t); }).always(() => { t.triggerLoadingSpinner(e), t.trigger(v()); });
      },
      onUnLike(e) { const t = this; this.triggerLoadingSpinner(e), this.trigger(this.getState()); const r = k(e, 'ratingId'); let o = ''; let n = {}; r ? (o = `/rating/${r}`, n = { format: 'json' }) : (o = '/rating/', n = { format: 'json', resource_uri: k(e, 'resourceUri') }), (0, _.httpDelete)(o, { data: n }).done(() => { S(e), t.trigger(v()); }).fail((e) => { let t = 'Unable to unlike.'; e.status == 404 ? t += ' You may have already unliked.' : e.responseText && (t += e.responseText), t += ' Please refresh the page and try again.', h.default.notifyUser(t); }).always(() => { t.triggerLoadingSpinner(e), t.trigger(v()); }); },
    }); r.default = P;
  }, {
    '../modules/ajax/ajax_helper': 5, '../modules/gr_error_reporting': 15, '../react_actions/like_actions': 38, './shared/newsfeed_updates_mixin': 257, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  253: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../react_actions/modal_actions'); const u = o(l); const d = new i.default({}); const c = function () { return d.get(); }; const p = s.default.createStore({
      listenables: u.default, getInitialState: c, getState: c, initializeWith(e) { d.get().reset(e); }, onOpenModal(e) { d.get().set('currentActiveModal', e), this.notifyListeners(); }, onCloseModal() { d.get().set('currentActiveModal', null), this.notifyListeners(); }, notifyListeners() { this.trigger(c()); }, reset() { d.get().reset({}); },
    }); r.default = p;
  }, { '../react_actions/modal_actions': 39, 'freezer-js': 'freezer-js', reflux: 'reflux' }],
  254: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../react_actions/notifications_actions'); const u = o(l); const d = new i.default({}); const c = function () { return d.get(); }; const p = s.default.createStore({
      listenables: u.default,
      getInitialState: c,
      getState: c,
      initializeWith(e) { d.get().reset(e); },
      updateWith(e) { this.initializeWith(e); },
      onLoadNotifications(e) { d.get().set('notifications', e), d.get().set('unreadCount', 0), d.get().set('unreadCountMore', !1), this.notifyListeners(); },
      onLoadError() { d.get().set('errorOccurred', !0), this.notifyListeners(); },
      onRequestNotifications() {
        d.get().hasRequestedBefore || $j.ajax({
          url: '/notifications/', type: 'GET', success(e) { u.default.loadNotifications(e); }, error() { u.default.loadError(); },
        }), d.get().set('hasRequestedBefore', !0);
      },
      notifyListeners() { this.trigger(c()); },
      reset() { d.get().reset({}); },
    }); r.default = p;
  }, { '../react_actions/notifications_actions': 41, 'freezer-js': 'freezer-js', reflux: 'reflux' }],
  255: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../../react_actions/reading_notes/annotated_books_actions'); const c = o(d); const p = new u.default({
      annotatedBooksCollection: [], nextToken: null, showSpinner: !0, showError: !1,
    }); const f = function () { return p.get(); }; const m = i.default.createStore({
      listenables: [c.default], getInitialState: f, getState: f, updateWith(e, t) { let r = s.default.union(p.get().annotatedBooksCollection, e); r = s.default.uniq(r, e => e.asin), f().set({ annotatedBooksCollection: r, nextToken: t, showError: !1 }), this.notifyListeners(); }, showSpinner(e) { f().set('showSpinner', e), this.notifyListeners(); }, showError() { f().set('showError', !0), this.notifyListeners(); }, notifyListeners() { this.trigger(f()); }, reset() { f().reset({}); }, onLoadAnnotatedBooks(e) { const t = this; const r = `/notes/${e}/load_more`; this.showSpinner(!0); const o = {}; return p.get().nextToken && (o.start_token = p.get().nextToken), $j.get(r, o).done((e) => { t.updateWith(e.annotated_books_collection, e.next_token); }).fail(() => { t.showError(); }).always(() => { t.showSpinner(!1); }); },
    }); r.default = m;
  }, {
    '../../react_actions/reading_notes/annotated_books_actions': 42, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  256: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.WARNING_SHARING_TEXT_LENGTH = r.MAXIMUM_SHARING_TEXT_LENGTH = void 0; const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../react_actions/share_dialog_actions'); const u = o(l); const d = e('../modules/ajax/ajax_helper'); const c = e('../modules/string_helper'); const p = e('lodash'); const f = new i.default({}); const m = function () { return f.get(); }; const h = r.MAXIMUM_SHARING_TEXT_LENGTH = 420; r.WARNING_SHARING_TEXT_LENGTH = 100; r.default = s.default.createStore({
      listenables: [u.default],
      getState: m,
      getInitialState() { return m(); },
      initializeWith(e) { m().reset(e); },
      onUpdateSharingTextInputValue(e) { const t = (0, c.astralLength)(e) > h; const r = t; m().set({ sharingTextInputValue: e, shareModalButtonDisabled: r, textTooLong: t }), this.trigger(m()); },
      onSubmitShare(e, t) {
        const r = this; m().set({ shareModalButtonDisabled: !0, error: !1 }), this.trigger(m()); const o = { resource_id: e.resourceId, resource_type: e.resourceTypeFriendlyText, sharing_text: t }; e.sharerUserId && (o.sharer_user_id = e.sharerUserId), (0, d.httpPost)('/sharings', { format: 'json', data: { sharing: o } }).done((e) => {
          m().set({
            shared: !0, sharingTextInputValue: '', sharingUrl: e.sharingUrl, sharingDisplayName: e.sharingDisplayName,
          });
        }).fail((e) => { const t = (0, p.get)(e, ['responseJSON', 'message']); m().set({ error: !0, errorText: t }); }).always(() => { m().set({ shareModalButtonDisabled: !1 }), r.trigger(m()); });
      },
      onOpenShareModal(e) { m().set({ shared: !1, error: !1 }), this.trigger(m()); const t = `OpenSharingModal_${e}`; (0, d.httpPost)('/track/track_click', { data: { feature: t } }); },
      reset() { m().reset({}); },
    });
  }, {
    '../modules/ajax/ajax_helper': 5, '../modules/string_helper': 22, '../react_actions/share_dialog_actions': 44, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  257: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.NEWSFEED_DEPENDENT_STORE_KEYS = void 0; const n = e('../../react_actions/newsfeed_actions'); const s = o(n); const a = e('lodash'); const i = function (e) { const t = { init() { (0, a.includes)((0, a.values)(l), e) && this.listenTo(s.default.newsfeedItemsLoaded, this.onNewsfeedItemsLoaded); }, onNewsfeedItemsLoaded(t) { e && t[e] && (this.updateWith(t[e]), this.trigger(this.getState())); } }; return t; }; r.default = i; var l = r.NEWSFEED_DEPENDENT_STORE_KEYS = {
      COMMENTS: 'comments', LIKES: 'likes', SHELVINGS: 'shelvings', AUTHOR_FOLLOWS: 'authorFollows',
    };
  }, { '../../react_actions/newsfeed_actions': 40, lodash: 'lodash' }],
  258: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/shelvings_actions'); const c = o(d); const p = e('../react_actions/reading_session_actions'); const f = o(p); const m = e('../react_actions/user_shelves_actions'); const h = o(m); const _ = e('./shared/newsfeed_updates_mixin'); const g = o(_); const v = e('../modules/default_shelves'); const y = e('../modules/book_origins'); const b = e('../modules/ajax/ajax_helper'); const k = new u.default({}); const S = function () { return k.get(); }; const P = function (e) {
      return s.default.has(S(), e) || S().set(e, {
        exclusiveShelfName: null, nonExclusiveShelfNames: null, exclusiveShelfDisplayName: null, isShelvingInProgress: !1, targetExclusiveShelfName: null,
      }), S()[e];
    }; const T = function (e, t) { P(e).set(t), s.default.each(S(), (r, o) => { r.book && r.book.bookId === e && P(o).set(t); }); }; const w = function (e, t, r) { T(e, { exclusiveShelfName: t.name, exclusiveShelfDisplayName: t.displayName }), typeof r !== 'undefined' && T(e, { book: r.book, updatedAt: Date.parse(r.updatedAt) }), t.name === v.DEFAULT_SHELVES.CURRENTLY_READING.name && f.default.refreshReadingSessions(); }; const N = function (e, t, r) {
      T(e, {
        exclusiveShelfName: null, exclusiveShelfDisplayName: null, rating: 0, nonExclusiveShelfNames: null,
      }), r && h.default.removeNonExclusiveShelf(t.name);
    }; const R = function (e) { T(e, { rating: 0 }); }; const M = function (e, t) { const r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; A(e, r), T(e, { rating: t }); }; const C = function (e, t) { const r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; const o = P(e); const n = s.default.clone(o.nonExclusiveShelfNames) || []; n.push(t.name), T(e, { nonExclusiveShelfNames: n }), A(e, r), h.default.addNonExclusiveShelf(t.name); }; const x = function (e, t, r) { const o = P(e); let n = s.default.clone(o.nonExclusiveShelfNames); n = s.default.without(n, t.name), r && h.default.removeNonExclusiveShelf(t.name), T(e, { nonExclusiveShelfNames: n }); }; var A = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; const r = P(e); r.exclusiveShelfName === null && w(e, v.DEFAULT_SHELVES.READ, t); }; const I = function (e) { const t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; const r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; let o = e; return t && (o = s.default.merge({}, e, { book_origin: t })), r && (o = s.default.merge({}, o, { progress_update_text: r })), o = s.default.merge({}, o, { v: 2 }), (0, b.httpPost)('/shelf/add_to_shelf.json', { data: o }); }; r.default = i.default.createStore({
      listenables: c.default,
      mixins: [(0, g.default)(_.NEWSFEED_DEPENDENT_STORE_KEYS.SHELVINGS)],
      getState: S,
      getInitialState(e) { return s.default.isUndefined(e) ? S() : P(e); },
      initializeWith(e) { k.get().reset(e), this.notifyListeners(); },
      reset() { k.get().reset({}); },
      notifyListeners() { this.trigger(S()); },
      updateWith(e) { const t = s.default.transform(e, (e, t, r) => e[r].isShelvingInProgress = !1, e[r].updatedAt = Date.parse(t.updatedAt), e, e); this.getState().set(t), this.notifyListeners(); },
      onShelveBook(e, t) { const r = this; const o = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; const n = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]; const s = P(e).exclusiveShelfName; T(e, { isShelvingInProgress: !0, targetExclusiveShelfName: t.name }); const a = { book_id: e, name: t.name }; this.notifyListeners(), I(a, o, n).done((r) => { if (w(e, t, r), r = r || {}, r.shelves = {}, r.shelves[(0, v.getExclusiveShelfType)(t.name)] = [t.name], c.default.bookShelved(r), s) { const n = {}; n[(0, v.getExclusiveShelfType)(s)] = [s], c.default.bookUnshelved({ shelves: n }); }o === y.BOOK_ORIGINS.CURRENTLY_READING_WIDGET && f.default.shelveBookSuccess(); }).fail(() => { window.alert('There was an error adding the book to your shelf, please try again.'); }).always(() => { T(e, { isShelvingInProgress: !1, targetExclusiveShelfName: null }), r.notifyListeners(); }); },
      onUnshelveBook(e) { const t = this; T(e, { isShelvingInProgress: !0 }), this.notifyListeners(), (0, b.httpPost)('/review/destroy', { data: { id: e } }).done(() => { const t = {}; t[(0, v.getExclusiveShelfType)(P(e).exclusiveShelfName)] = [P(e).exclusiveShelfName], t[v.SHELF_TYPES.NONEXCLUSIVE] = P(e).nonExclusiveShelfNames || [], c.default.bookUnshelved({ shelves: t }), N(e); }).fail(() => { window.alert('There was an error removing the book from your shelves, please try again.'); }).always(() => { T(e, { isShelvingInProgress: !1 }), t.notifyListeners(); }); },
      onToggleNonExclusiveShelving(e, t, r, o) { const n = this; const a = P(e).exclusiveShelfName; const i = P(e).nonExclusiveShelfNames; const l = !s.default.includes(i, t.name); const u = S()[e] && P(e).exclusiveShelfName !== null; const d = { book: { bookId: e, title: o } }; l ? (A(e, d), C(e, t, d)) : x(e, t, !1), this.notifyListeners(); const p = { book_id: e, name: t.name, a: l ? '' : 'remove' }; I(p).done(() => { const e = {}; l ? (e[v.SHELF_TYPES.DEFAULT] = a ? [] : [v.DEFAULT_SHELVES.READ.name], e[v.SHELF_TYPES.NONEXCLUSIVE] = [t.name], c.default.bookShelved({ shelves: e })) : (e[v.SHELF_TYPES.NONEXCLUSIVE] = [t.name], c.default.bookUnshelved({ shelves: e })); }).fail(() => { window.alert('There was an error adding the book to your shelf, please try again.'), u ? l ? x(e, t, r) : C(e, t, d) : N(e, t, r), n.notifyListeners(); }); },
      onRateBook(e, t, r) {
        const o = this; let n = 0; let s = !1; const a = { book: { bookId: e, title: r } }; S()[e] && (n = P(e).rating, s = P(e).exclusiveShelfName !== null, n === 0 && c.default.rateBook.newBook()), M(e, t, a), this.notifyListeners(), (0, b.httpPost)('/review/rate', {
          data: {
            format: 'json', stars_click: !0, id: e, rating: t,
          },
        }).fail(() => { window.alert('There was an error saving your rating, please try again.'), n > 0 ? M(e, n, a) : s ? (R(e), c.default.rateBook.failed()) : (N(e, null, !1), c.default.rateBook.failed()), o.notifyListeners(); });
      },
      onAddShelvings(e) { this.updateWith(e), this.notifyListeners(); },
    });
  }, {
    '../modules/ajax/ajax_helper': 5, '../modules/book_origins': 7, '../modules/default_shelves': 12, '../react_actions/reading_session_actions': 43, '../react_actions/shelvings_actions': 45, '../react_actions/user_shelves_actions': 52, './shared/newsfeed_updates_mixin': 257, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  259: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../react_actions/tab_actions'); const u = o(l); const d = new i.default({}); const c = function () { return d.get(); }; const p = s.default.createStore({
      listenables: u.default, getInitialState: c, getState: c, initializeWith(e) { d.get().reset(e); }, updateWith(e) { c().set(e); }, onDeselectTab(e, t) { d.get()[t] === e && (d.get().set(t, null), this.notifyListeners()); }, onSelectTab(e, t) { d.get().set(t, e), this.notifyListeners(); }, notifyListeners() { this.trigger(c()); }, reset() { d.get().reset({}); },
    }); r.default = p;
  }, { '../react_actions/tab_actions': 46, 'freezer-js': 'freezer-js', reflux: 'reflux' }],
  260: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }), r.DEFAULT_ERROR_MESSAGE = void 0; const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../../../react_actions/user/show/block_user_actions'); const u = o(l); const d = e('../../user_relationships/friend_follow_module_store'); const c = o(d); const p = e('../../../modules/flash_message_helper'); const f = e('../../../modules/ajax/ajax_helper'); const m = e('lodash'); const h = { blockInProgress: !1 }; const _ = new i.default(h); const g = function () { return _.get(); }; const v = r.DEFAULT_ERROR_MESSAGE = 'Something went wrong with your request. Please\n  try again later.'; r.default = s.default.createStore({
      listenables: [u.default], getState: g, getInitialState() { return g(); }, initializeWith(e) { const t = Object.assign({}, h, e); g().set(t), this.trigger(g()); }, onBlockMember(e) { const t = this; g().set({ blockInProgress: !0 }), this.trigger(g()); let r = void 0; return (0, f.httpPost)(`/user/${e}/block_member`, { data: { format: 'json' } }).done((r) => { (0, p.flashSuccessMessage)(r.message), g().set({ isBlocked: r.isBlocked }), c.default.receiveUnfriend(e), t.trigger(g()); }).fail((e) => { r = (0, m.get)(e, 'message'), r || (r = v), (0, p.flashErrorMessage)(r); }).always(() => { g().set({ blockInProgress: !1 }), t.trigger(g()); }); }, reset() { g().reset(h); },
    });
  }, {
    '../../../modules/ajax/ajax_helper': 5, '../../../modules/flash_message_helper': 14, '../../../react_actions/user/show/block_user_actions': 47, '../../user_relationships/friend_follow_module_store': 264, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  261: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('lodash'); const u = o(l); const d = e('../../react_actions/user/user_follow_actions'); const c = o(d); const p = new i.default({}); const f = function () { return p.get(); }; const m = function (e, t) { return f()[e][t]; }; const h = function (e, t) { return f()[e].set(t); }; const _ = function (e, t) { return f()[e][t]; }; const g = function (e) { h(e, { error: null }); }; const v = function (e) { const t = _(e, 'isFollowing'); const r = { isFollowing: !t }; h(e, r); }; const y = function (e) { h(e, { buttonEnabled: !0 }); }; const b = function (e) { h(e, { buttonEnabled: !1 }); }; const k = s.default.createStore({
      listenables: c.default,
      getState: f,
      getInitialState: f,
      initializeWith(e) {
        const t = u.default.transform(e, (e, t, r) => {
          e[r] = {
            error: null, buttonEnabled: !0, isBlocked: t.isBlocked, allowsFollow: t.allowsFollow, source: t.source || !1, isFollowing: t.isFollowing, friendshipStatus: t.friendshipStatus,
          };
        }); f().set(t);
      },
      updateWith(e) { this.initializeWith(e); },
      reset() { f().reset({}); },
      onFollow(e) { const t = this; const r = m(e, 'source'); const o = r === 'AnnotatedBooksPage'; const n = r === 'ReadingNotesListPage'; b(e), g(e), this.trigger(this.getState()), $j.post(`/user/${e}/followers`, { format: 'json', from_annotated_books_page: o, from_reading_notes_list_page: n }).done((t) => { if (t.status === 'success')v(e); else { const r = { error: t.message }; h(e, r); } }).always(() => { y(e), t.trigger(t.getState()); }); },
      onUnFollow(e) { const t = this; b(e), g(e), this.trigger(this.getState()), $j.ajax({ type: 'DELETE', url: `/user/${e}/followers/stop_following`, data: { format: 'json' } }).done(() => { v(e); }).fail(() => {}).always(() => { y(e), t.trigger(t.getState()); }); },
    }); r.default = k;
  }, {
    '../../react_actions/user/user_follow_actions': 48, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  262: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../react_actions/user_agent_capabilities_actions'); const u = o(l); const d = { touch: !1 }; const c = new i.default(d); r.default = s.default.createStore({
      listenables: [u.default], initializeWith(e) { c.get().reset(e); }, reset() { c.get().reset(d); }, getInitialState() { return c.get(); }, onUserAgentGainsTouch() { c.get().set('touch', !0), this.trigger(c.get()); }, onUserAgentLosesTouch() { c.get().set('touch', !1), this.trigger(c.get()); },
    });
  }, { '../react_actions/user_agent_capabilities_actions': 49, 'freezer-js': 'freezer-js', reflux: 'reflux' }],
  263: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = e('reflux'); const a = o(s); const i = e('freezer-js'); const l = o(i); const u = e('../modules/ajax/ajax_helper'); const d = e('../react_actions/user_not_interested_actions'); const c = o(d); const p = { default: { isFlashMessage: !1, isClosed: !1 } }; const f = new l.default(p); const m = function () { return f.get(); }; const h = function (e) { m().reset((0, n.merge)({}, p, e)); }; r.default = a.default.createStore({
      listenables: [c.default], getState: m, getInitialState: m, reset() { h({}); }, setDataForKey(e, t) { const r = {}; r[e] = t, m().set((0, n.merge)({}, m(), r)); }, onAddBookIDToState(e) { this.setDataForKey(e, m().default), this.trigger(m()); }, onIsFlashMessageForBook(e) { m()[e].isFlashMessage; }, onCloseFlashMessage(e) { this.setDataForKey(e, { isClosed: !0 }), this.trigger(m()); }, userNotInterestedHttpPost(e) { return (0, u.httpPost)('/user_not_interested_works', { data: { user_not_interested_work: { book_id: e, source: 'react' } } }); }, onUserNotInterested(e) { const t = this; this.userNotInterestedHttpPost(e).done(() => { t.setDataForKey(e, { isFlashMessage: !0 }), t.trigger(m()); }).fail(() => { window.alert('There was an error marking this book as not interested, please try again.'); }); }, undoUserNotInterestedHttpDelete(e) { return (0, u.httpDelete)('/user_not_interested_works/undo', { data: { user_not_interested_work: { book_id: e } } }); }, onUndoUserNotInterested(e) { const t = this; this.undoUserNotInterestedHttpDelete(e).done(() => { t.setDataForKey(e, { isFlashMessage: !1 }), t.trigger(m()); }).fail(() => { window.alert('There was an error undoing this action, please try again.'); }); },
    });
  }, {
    '../modules/ajax/ajax_helper': 5, '../react_actions/user_not_interested_actions': 50, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  264: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('reflux'); const s = o(n); const a = e('freezer-js'); const i = o(a); const l = e('../../react_actions/user_relationships/friend_follow_actions'); const u = o(l); const d = e('../../modules/ajax/ajax_helper'); const c = e('lodash'); const p = e('../../modules/flash_message_helper'); const f = new i.default({}); const m = function () { return f.get(); }; r.default = s.default.createStore({
      listenables: [u.default], getState: m, getInitialState() { return m(); }, initializeWith(e) { m().reset(e); }, startAjaxRequest(e) { m()[e].set({ inProgress: !0 }), this.trigger(m()); }, finishAjaxRequest(e) { m()[e].set({ inProgress: !1 }), this.trigger(m()); }, receiveUnfriend(e) { m()[e].set({ isFriend: !1, isFollowing: !1, isPendingFriendRequestTo: !1 }), this.trigger(m()); }, onUnfriend(e) { const t = this; this.startAjaxRequest(e), (0, d.httpPost)(`/friend/destroy/${e}.json`).done(() => { t.receiveUnfriend(e); }).fail((e) => { (0, p.flashErrorMessage)((0, c.get)(e, 'message', d.DEFAULT_ERROR_MESSAGE)); }).always(() => t.finishAjaxRequest(e)); }, onCancelFriendRequest(e, t) { const r = this; this.startAjaxRequest(e), (0, d.httpPost)(`/friend/cancel_request/${t}.json`).done(() => { m()[e].set({ isFollowing: !1, isPendingFriendRequestTo: !1 }); }).fail((e) => { (0, p.flashErrorMessage)((0, c.get)(e, 'message', d.DEFAULT_ERROR_MESSAGE)); }).always(() => r.finishAjaxRequest(e)); }, onFollow(e) { const t = this; const r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; this.startAjaxRequest(e), (0, d.httpPost)(`/user/${e}/followers.json`, { data: r }).done(() => { m()[e].set({ isFollowing: !0 }); }).fail((e) => { (0, p.flashErrorMessage)((0, c.get)(e, 'message', d.DEFAULT_ERROR_MESSAGE)); }).always(() => t.finishAjaxRequest(e)); }, onUnfollow(e) { const t = this; this.startAjaxRequest(e), (0, d.httpDelete)(`/user/${e}/followers/stop_following.json`).done(() => { m()[e].set({ isFollowing: !1, isPendingFriendRequestTo: !1 }); }).fail((e) => { (0, p.flashErrorMessage)((0, c.get)(e, 'message', d.DEFAULT_ERROR_MESSAGE)); }).always(() => t.finishAjaxRequest(e)); }, onAcceptFriendRequest(e, t) { const r = this; this.startAjaxRequest(e), (0, d.httpPost)('/friend/confirm_request.json', { data: { id: t } }).done(() => { m()[e].set({ isFriend: !0, isPendingFriendRequestFrom: !1 }); }).fail((e) => { (0, p.flashErrorMessage)((0, c.get)(e, 'message', d.DEFAULT_ERROR_MESSAGE)); }).always(() => r.finishAjaxRequest(e)); }, reset() { m().reset({}); },
    });
  }, {
    '../../modules/ajax/ajax_helper': 5, '../../modules/flash_message_helper': 14, '../../react_actions/user_relationships/friend_follow_actions': 51, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  265: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/shelvings_actions'); const c = o(d); const p = e('../react_actions/user_shelves_actions'); const f = o(p); const m = e('../react_actions/want_to_read_menu_actions'); const h = o(m); const _ = e('../modules/default_shelves'); const g = { defaultShelves: [], customExclusiveShelves: [], nonExclusiveShelves: [] }; const v = new u.default(g); const y = function () { return v.get(); }; const b = function (e, t, r) { const o = s.default.find(y()[t], { name: e }); o && o.set('bookCount', o.bookCount + r); }; r.default = i.default.createStore({
      listenables: [f.default, { bookShelved: c.default.bookShelved, bookUnshelved: c.default.bookUnshelved }],
      getInitialState: v.get,
      getState: y,
      defaultShelves() { const e = y().defaultShelves; return e.length === 0 ? _.DEFAULT_SHELVES : { READ: s.default.find(e, 'name', 'read'), CURRENTLY_READING: s.default.find(e, 'name', 'currently-reading'), WANT_TO_READ: s.default.find(e, 'name', 'to-read') }; },
      initializeWith(e) { v.get().reset(e); },
      reset() { v.get().reset(g); },
      updateWith(e) { v.get().reset(e); },
      onAddNonExclusiveShelf(e) {
        const t = s.default.clone(v.get().nonExclusiveShelves) || []; const r = s.default.map(t, e => e.name); s.default.includes(r, e) || (t.unshift({
          name: e, url: '', displayName: e, bookCount: 0,
        }), v.get().set('nonExclusiveShelves', t), h.default.updateShelves(), this.trigger(y()));
      },
      onRemoveNonExclusiveShelf(e) { const t = s.default.clone(v.get().nonExclusiveShelves) || []; const r = s.default.map(t, e => e.name); s.default.includes(r, e) && (s.default.remove(t, t => t.name === e), v.get().set('nonExclusiveShelves', t), h.default.updateShelves(), this.trigger(y())); },
      onBookShelved(e) { const t = e.shelves || {}; s.default.each(t, (e, t) => { s.default.each(e, (e) => { b(e, t, 1); }); }), this.trigger(y()); },
      onBookUnshelved(e) { const t = e.shelves || {}; s.default.each(t, (e, t) => { s.default.each(e, (e) => { b(e, t, -1); }); }), this.trigger(y()); },
    });
  }, {
    '../modules/default_shelves': 12, '../react_actions/shelvings_actions': 45, '../react_actions/user_shelves_actions': 52, '../react_actions/want_to_read_menu_actions': 53, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  266: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); const n = e('lodash'); const s = o(n); const a = e('reflux'); const i = o(a); const l = e('freezer-js'); const u = o(l); const d = e('../react_actions/want_to_read_menu_actions'); const c = o(d); const p = e('./user_shelves_store'); const f = o(p); const m = 'showAddShelfTextbox'; const h = {}; const _ = new u.default(h); const g = function () { return _.get(); }; const v = function (e, t) { let r = []; const o = t.defaultShelves.concat(t.customExclusiveShelves || []); return r = s.default.isEmpty(e) ? o : s.default.filter(o, t => t.name.match(new RegExp(e, 'i'))); }; const y = function (e, t) { let r = []; return r = s.default.isEmpty(e) ? t.nonExclusiveShelves : s.default.filter(t.nonExclusiveShelves, t => t.name.match(new RegExp(e, 'i'))); }; const b = function (e) { const t = f.default.getState(); const r = v(e, t); const o = y(e, t); return { displayableExclusiveShelves: r, displayableNonExclusiveShelves: o, shelfNameFilter: e }; }; const k = function (e, t) { g().set(t, b(e)); }; const S = function (e) { const t = g()[e].shelfNameFilter; g().set(e, b(t)); }; const P = function (e) { return s.default.has(g(), e) || k('', e), g()[e]; }; const T = function (e) { g().reset(s.default.merge({}, h, e)); }; r.default = i.default.createStore({
      listenables: [c.default],
      getInitialState(e) { return s.default.isUndefined(e) ? g() : P(e); },
      getState: g,
      initializeWith(e) { T(e); },
      reset() { T(h); },
      updateWith(e) { s.default.each(s.default.keys(e), (t) => { g().set(t, e[t]); }), this.notifyListeners(); },
      notifyListeners() { this.trigger(g()); },
      onUpdateShelfNameFilter(e, t) { k(e, t), P(t).set(m, !1), this.notifyListeners(); },
      onOpenAddShelfTextbox(e) { P(e).set(m, !0), this.notifyListeners(); },
      onCloseAddShelfTextbox(e) {
        P(e).set(m, !1), this.notifyListeners();
      },
      onUpdateShelves() { s.default.each(s.default.keys(g()), (e) => { S(e); }), this.notifyListeners(); },
    });
  }, {
    '../react_actions/want_to_read_menu_actions': 53, './user_shelves_store': 265, 'freezer-js': 'freezer-js', lodash: 'lodash', reflux: 'reflux',
  }],
  267: [function (e, t, r) { /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
    "use strict";

    const o = function (e, t, r, o, n, s, a, i) { if (!e) { let l; if (void 0 === t)l = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'); else { const u = [r, o, n, s, a, i]; let d = 0; l = new Error(t.replace(/%s/g, () => u[d++])), l.name = 'Invariant Violation'; } throw l.framesToPop = 1, l; } }; t.exports = o;
  }, {}],
  268: [function (e, t, r) {
    function o(e, t) { return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e; } var n = e('strict-uri-encode'); const s = e('object-assign'); r.extract = function (e) { return e.split('?')[1] || ''; }, r.parse = function (e) { const t = Object.create(null); return typeof e !== 'string' ? t : (e = e.trim().replace(/^(\?|#|&)/, '')) ? (e.split('&').forEach((e) => { const r = e.replace(/\+/g, ' ').split('='); let o = r.shift(); let n = r.length > 0 ? r.join('=') : void 0; o = decodeURIComponent(o), n = void 0 === n ? null : decodeURIComponent(n), void 0 === t[o] ? t[o] = n : Array.isArray(t[o]) ? t[o].push(n) : t[o] = [t[o], n]; }), t) : t; }, r.stringify = function (e, t) {
      const r = { encode: !0, strict: !0 }; return t = s(r, t), e ? Object.keys(e).sort().map((r) => { const n = e[r]; if (void 0 === n) return ''; if (n === null) return o(r, t); if (Array.isArray(n)) { const s = []; return n.slice().forEach((e) => { void 0 !== e && (e === null ? s.push(o(r, t)) : s.push(`${o(r, t)}=${o(e, t)}`)); }), s.join('&'); } return `${o(r, t)}=${o(n, t)}`; }).filter(e => e.length > 0)
        .join('&') : '';
    };
  }, { 'object-assign': 'object-assign', 'strict-uri-encode': 309 }],
  269: [function (e, t, r) {
    function o(e, t, r) { function o() { return a = !0, i ? void (u = [].concat(Array.prototype.slice.call(arguments))) : void r.apply(this, arguments); } function n() { if (!a && (l = !0, !i)) { for (i = !0; !a && e > s && l;)l = !1, t.call(this, s++, n, o); return i = !1, a ? void r.apply(this, u) : void (s >= e && l && (a = !0, r())); } } var s = 0; var a = !1; var i = !1; var l = !1; var u = void 0; n(); } function n(e, t, r) { function o(e, t, o) { a || (t ? (a = !0, r(t)) : (s[e] = o, a = ++i === n, a && r(null, s))); } var n = e.length; var s = []; if (n === 0) return r(null, s); var a = !1; var i = 0; e.forEach((e, r) => { t(e, r, (e, t) => { o(r, e, t); }); }); }r.__esModule = !0, r.loopAsync = o, r.mapAsync = n;
  }, {}],
  270: [function (e, t, r) {
    function o(e) { return `@@contextSubscriber/${e}`; } function n(e) {
      let t; let r; const n = o(e); const s = `${n}/listeners`; const a = `${n}/eventIndex`; const l = `${n}/subscribe`; return r = {
        childContextTypes: (t = {}, t[n] = i.isRequired, t), getChildContext() { let e; return e = {}, e[n] = { eventIndex: this[a], subscribe: this[l] }, e; }, componentWillMount() { this[s] = [], this[a] = 0; }, componentWillReceiveProps() { this[a]++; }, componentDidUpdate() { const e = this; this[s].forEach(t => t(e[a])); },
      }, r[l] = function (e) { const t = this; return this[s].push(e), function () { t[s] = t[s].filter(t => t !== e); }; }, r;
    } function s(e) {
      let t; let r; const n = o(e); const s = `${n}/lastRenderedEventIndex`; const a = `${n}/handleContextUpdate`; const l = `${n}/unsubscribe`; return r = {
        contextTypes: (t = {}, t[n] = i, t), getInitialState() { let e; return this.context[n] ? (e = {}, e[s] = this.context[n].eventIndex, e) : {}; }, componentDidMount() { this.context[n] && (this[l] = this.context[n].subscribe(this[a])); }, componentWillReceiveProps() { let e; this.context[n] && this.setState((e = {}, e[s] = this.context[n].eventIndex, e)); }, componentWillUnmount() { this[l] && (this[l](), this[l] = null); },
      }, r[a] = function (e) { if (e !== this.state[s]) { let t; this.setState((t = {}, t[s] = e, t)); } }, r;
    }r.__esModule = !0, r.ContextProvider = n, r.ContextSubscriber = s; const a = e('react'); var i = a.PropTypes.shape({ subscribe: a.PropTypes.func.isRequired, eventIndex: a.PropTypes.number.isRequired });
  }, { react: 'react' }],
  271: [function (e, t, r) {
    function o(e, t, r) { return e[t] ? new Error(`<${r}> should not have a "${t}" prop`) : void 0; }r.__esModule = !0, r.routes = r.route = r.components = r.component = r.history = void 0, r.falsy = o; const n = e('react'); const s = n.PropTypes.func; const a = n.PropTypes.object; const i = n.PropTypes.arrayOf; const l = n.PropTypes.oneOfType; const u = n.PropTypes.element; const d = n.PropTypes.shape; const c = n.PropTypes.string; const p = (r.history = d({
      listen: s.isRequired, push: s.isRequired, replace: s.isRequired, go: s.isRequired, goBack: s.isRequired, goForward: s.isRequired,
    }), r.component = l([s, c])); const f = (r.components = l([p, a]), r.route = l([a, u])); r.routes = l([f, i(f)]);
  }, { react: 'react' }],
  272: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { const r = {}; for (const o in e)t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]); return r; } function s(e) { return e.button === 0; } function a(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); } function i(e) { for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1; return !0; } function l(e, t) { return typeof e === 'function' ? e(t.location) : e; }r.__esModule = !0; const u = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const d = e('react'); const c = o(d); const p = e('invariant'); const f = o(p); const m = e('./PropTypes'); const h = e('./ContextUtils'); const _ = c.default.PropTypes; const g = _.bool; const v = _.object; const y = _.string; const b = _.func; const k = _.oneOfType; const S = c.default.createClass({
      displayName: 'Link',
      mixins: [(0, h.ContextSubscriber)('router')],
      contextTypes: { router: m.routerShape },
      propTypes: {
        to: k([y, v, b]), query: v, hash: y, state: v, activeStyle: v, activeClassName: y, onlyActiveOnIndex: g.isRequired, onClick: b, target: y,
      },
      getDefaultProps() { return { onlyActiveOnIndex: !1, style: {} }; },
      handleClick(e) { if (this.props.onClick && this.props.onClick(e), !e.defaultPrevented) { const t = this.context.router; t ? void 0 : (0, f.default)(!1), !a(e) && s(e) && (this.props.target || (e.preventDefault(), t.push(l(this.props.to, t)))); } },
      render() { const e = this.props; const t = e.to; const r = e.activeClassName; const o = e.activeStyle; const s = e.onlyActiveOnIndex; const a = n(e, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']); const d = this.context.router; if (d) { if (t == null) return c.default.createElement('a', a); const p = l(t, d); a.href = d.createHref(p), (r || o != null && !i(o)) && d.isActive(p, s) && (r && (a.className ? a.className += ` ${r}` : a.className = r), o && (a.style = u({}, a.style, o))); } return c.default.createElement('a', u({}, a, { onClick: this.handleClick })); },
    }); r.default = S, t.exports = r.default;
  }, {
    './ContextUtils': 270, './PropTypes': 275, invariant: 267, react: 'react',
  }],
  273: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); } function s(e) {
      for (var t = '', r = [], o = [], s = void 0, a = 0, i = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g; s = i.exec(e);)s.index !== a && (o.push(e.slice(a, s.index)), t += n(e.slice(a, s.index))), s[1] ? (t += '([^/]+)', r.push(s[1])) : s[0] === '**' ? (t += '(.*)', r.push('splat')) : s[0] === '*' ? (t += '(.*?)', r.push('splat')) : s[0] === '(' ? t += '(?:' : s[0] === ')' && (t += ')?'), o.push(s[0]), a = i.lastIndex; return a !== e.length && (o.push(e.slice(a, e.length)), t += n(e.slice(a, e.length))), {
        pattern: e, regexpSource: t, paramNames: r, tokens: o,
      };
    } function a(e) { return f[e] || (f[e] = s(e)), f[e]; } function i(e, t) { e.charAt(0) !== '/' && (e = `/${e}`); const r = a(e); let o = r.regexpSource; const n = r.paramNames; const s = r.tokens; e.charAt(e.length - 1) !== '/' && (o += '/?'), s[s.length - 1] === '*' && (o += '$'); const i = t.match(new RegExp(`^${o}`, 'i')); if (i == null) return null; const l = i[0]; let u = t.substr(l.length); if (u) { if (l.charAt(l.length - 1) !== '/') return null; u = `/${u}`; } return { remainingPathname: u, paramNames: n, paramValues: i.slice(1).map(e => e && decodeURIComponent(e)) }; } function l(e) { return a(e).paramNames; } function u(e, t) { const r = i(e, t); if (!r) return null; const o = r.paramNames; const n = r.paramValues; const s = {}; return o.forEach((e, t) => { s[e] = n[t]; }), s; } function d(e, t) { t = t || {}; for (var r = a(e), o = r.tokens, n = 0, s = '', i = 0, l = [], u = void 0, d = void 0, c = void 0, f = 0, m = o.length; m > f; ++f) if (u = o[f], u === '*' || u === '**')c = Array.isArray(t.splat) ? t.splat[i++] : t.splat, c != null || n > 0 ? void 0 : (0, p.default)(!1), c != null && (s += encodeURI(c)); else if (u === '(')l[n] = '', n += 1; else if (u === ')') { const h = l.pop(); n -= 1, n ? l[n - 1] += h : s += h; } else if (u.charAt(0) === ':') if (d = u.substring(1), c = t[d], c != null || n > 0 ? void 0 : (0, p.default)(!1), c == null) { if (n) { l[n - 1] = ''; for (var _ = o.indexOf(u), g = o.slice(_, o.length), v = -1, y = 0; y < g.length; y++) if (g[y] == ')') { v = y; break; }v > 0 ? void 0 : (0, p.default)(!1), f = _ + v - 1; } } else n ? l[n - 1] += encodeURIComponent(c) : s += encodeURIComponent(c); else n ? l[n - 1] += u : s += u; return n <= 0 ? void 0 : (0, p.default)(!1), s.replace(/\/+/g, '/'); }r.__esModule = !0, r.compilePattern = a, r.matchPattern = i, r.getParamNames = l, r.getParams = u, r.formatPattern = d; const c = e('invariant'); var p = o(c); var f = Object.create(null);
  }, { invariant: 267 }],
  274: [function (e, t, r) {
    function o(e) { return e && typeof e.then === 'function'; }r.__esModule = !0, r.isPromise = o;
  }, {}],
  275: [function (e, t, r) {
    r.__esModule = !0, r.locationShape = r.routerShape = void 0; const o = e('react'); const n = o.PropTypes.func; const s = o.PropTypes.object; const a = o.PropTypes.shape; const i = o.PropTypes.string; r.routerShape = a({
      push: n.isRequired, replace: n.isRequired, go: n.isRequired, goBack: n.isRequired, goForward: n.isRequired, setRouteLeaveHook: n.isRequired, isActive: n.isRequired,
    }), r.locationShape = a({
      pathname: i.isRequired, search: i.isRequired, state: s, action: i.isRequired, key: i,
    });
  }, { react: 'react' }],
  276: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = e('react'); const s = o(n); const a = e('invariant'); const i = o(a); const l = e('./RouteUtils'); const u = e('./InternalPropTypes'); const d = s.default.PropTypes; const c = d.string; const p = d.func; const f = s.default.createClass({
      displayName: 'Route',
      statics: { createRouteFromReactElement: l.createRouteFromReactElement },
      propTypes: {
        path: c, component: u.component, components: u.components, getComponent: p, getComponents: p,
      },
      render() { (0, i.default)(!1); },
    }); r.default = f, t.exports = r.default;
  }, {
    './InternalPropTypes': 271, './RouteUtils': 277, invariant: 267, react: 'react',
  }],
  277: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { return e == null || p.default.isValidElement(e); } function s(e) { return n(e) || Array.isArray(e) && e.every(n); } function a(e, t) { return d({}, e, t); } function i(e) { const t = e.type; const r = a(t.defaultProps, e.props); if (r.children) { const o = l(r.children, r); o.length && (r.childRoutes = o), delete r.children; } return r; } function l(e, t) { const r = []; return p.default.Children.forEach(e, (e) => { if (p.default.isValidElement(e)) if (e.type.createRouteFromReactElement) { const o = e.type.createRouteFromReactElement(e, t); o && r.push(o); } else r.push(i(e)); }), r; } function u(e) { return s(e) ? e = l(e) : e && !Array.isArray(e) && (e = [e]), e; }r.__esModule = !0; var d = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; r.isReactChildren = s, r.createRouteFromReactElement = i, r.createRoutesFromReactChildren = l, r.createRoutes = u; const c = e('react'); var p = o(c);
  }, { react: 'react' }],
  278: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { const r = {}; for (const o in e)t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]); return r; }r.__esModule = !0; const s = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const a = e('invariant'); const i = o(a); const l = e('react'); const u = o(l); const d = e('./createTransitionManager'); const c = o(d); const p = e('./InternalPropTypes'); const f = e('./RouterContext'); const m = o(f); const h = e('./RouteUtils'); const _ = e('./RouterUtils'); const g = e('./routerWarning'); const v = (o(g), u.default.PropTypes); const y = v.func; const b = v.object; var k = u.default.createClass({
      displayName: 'Router',
      propTypes: {
        history: b, children: p.routes, routes: p.routes, render: y, createElement: y, onError: y, onUpdate: y, matchContext: b,
      },
      getDefaultProps() { return { render(e) { return u.default.createElement(m.default, e); } }; },
      getInitialState() {
        return {
          location: null, routes: null, params: null, components: null,
        };
      },
      handleError(e) { if (!this.props.onError) throw e; this.props.onError.call(this, e); },
      createRouterObject(e) { const t = this.props.matchContext; if (t) return t.router; const r = this.props.history; return (0, _.createRouterObject)(r, this.transitionManager, e); },
      createTransitionManager() { const e = this.props.matchContext; if (e) return e.transitionManager; const t = this.props.history; const r = this.props; const o = r.routes; const n = r.children; return t.getCurrentLocation ? void 0 : (0, i.default)(!1), (0, c.default)(t, (0, h.createRoutes)(o || n)); },
      componentWillMount() { const e = this; this.transitionManager = this.createTransitionManager(), this.router = this.createRouterObject(this.state), this._unlisten = this.transitionManager.listen((t, r) => { t ? e.handleError(t) : ((0, _.assignRouterState)(e.router, r), e.setState(r, e.props.onUpdate)); }); },
      componentWillReceiveProps(e) {},
      componentWillUnmount() { this._unlisten && this._unlisten(); },
      render: function S() {
        const e = this.state; const t = e.location; const r = e.routes; const o = e.params; const a = e.components; const i = this.props; const l = i.createElement; const S = i.render; const u = n(i, ['createElement', 'render']); return t == null ? null : (Object.keys(k.propTypes).forEach(e => delete u[e]), S(s({}, u, {
          router: this.router, location: t, routes: r, params: o, components: a, createElement: l,
        })));
      },
    }); r.default = k, t.exports = r.default;
  }, {
    './InternalPropTypes': 271, './RouteUtils': 277, './RouterContext': 279, './RouterUtils': 280, './createTransitionManager': 286, './routerWarning': 292, invariant: 267, react: 'react',
  }],
  279: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }; const a = e('invariant'); const i = o(a); const l = e('react'); const u = o(l); const d = e('./getRouteParams'); const c = o(d); const p = e('./ContextUtils'); const f = e('./RouteUtils'); const m = u.default.PropTypes; const h = m.array; const _ = m.func; const g = m.object; const v = u.default.createClass({
      displayName: 'RouterContext',
      mixins: [(0, p.ContextProvider)('router')],
      propTypes: {
        router: g.isRequired, location: g.isRequired, routes: h.isRequired, params: g.isRequired, components: h.isRequired, createElement: _.isRequired,
      },
      getDefaultProps() { return { createElement: u.default.createElement }; },
      childContextTypes: { router: g.isRequired },
      getChildContext() { return { router: this.props.router }; },
      createElement(e, t) { return e == null ? null : this.props.createElement(e, t); },
      render() {
        const e = this; const t = this.props; const r = t.location; const o = t.routes; const a = t.params; const l = t.components; const d = t.router; let p = null; return l && (p = l.reduceRight((t, i, l) => {
          if (i == null) return t; const u = o[l]; const p = (0, c.default)(u, a); const m = {
            location: r, params: a, route: u, router: d, routeParams: p, routes: o,
          }; if ((0, f.isReactChildren)(t))m.children = t; else if (t) for (const h in t)Object.prototype.hasOwnProperty.call(t, h) && (m[h] = t[h]); if ((typeof i === 'undefined' ? 'undefined' : s(i)) === 'object') { const _ = {}; for (const g in i)Object.prototype.hasOwnProperty.call(i, g) && (_[g] = e.createElement(i[g], n({ key: g }, m))); return _; } return e.createElement(i, m);
        }, p)), p === null || p === !1 || u.default.isValidElement(p) ? void 0 : (0, i.default)(!1), p;
      },
    }); r.default = v, t.exports = r.default;
  }, {
    './ContextUtils': 270, './RouteUtils': 277, './getRouteParams': 288, invariant: 267, react: 'react',
  }],
  280: [function (e, t, r) {
    function o(e, t, r) { const o = s({}, e, { setRouteLeaveHook: t.listenBeforeLeavingRoute, isActive: t.isActive }); return n(o, r); } function n(e, t) { const r = t.location; const o = t.params; const n = t.routes; return e.location = r, e.params = o, e.routes = n, e; }r.__esModule = !0; var s = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; r.createRouterObject = o, r.assignRouterState = n;
  }, {}],
  281: [function (e, t, r) {
    function o(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t, r, o) { const n = e.length < r; const s = function () { for (var r = arguments.length, o = Array(r), s = 0; r > s; s++)o[s] = arguments[s]; if (e.apply(t, o), n) { const a = o[o.length - 1]; a(); } }; return o.add(s), s; } function s(e) { return e.reduce((e, t) => t.onEnter && e.push(n(t.onEnter, t, 3, f)), e, []); } function a(e) { return e.reduce((e, t) => t.onChange && e.push(n(t.onChange, t, 4, m)), e, []); } function i(e, t, r) { function o(e) { n = e; } if (!e) return void r(); var n = void 0; (0, c.loopAsync)(e, (e, r, s) => { t(e, o, (e) => { e || n ? s(e, n) : r(); }); }, r); } function l(e, t, r) { f.clear(); const o = s(e); return i(o.length, (e, r, n) => { const s = function () { f.has(o[e]) && (n(), f.remove(o[e])); }; o[e](t, r, s); }, r); } function u(e, t, r, o) { m.clear(); const n = a(e); return i(n.length, (e, o, s) => { const a = function () { m.has(n[e]) && (s(), m.remove(n[e])); }; n[e](t, r, o, a); }, o); } function d(e, t) { for (let r = 0, o = e.length; o > r; ++r)e[r].onLeave && e[r].onLeave.call(e[r], t); }r.__esModule = !0, r.runEnterHooks = l, r.runChangeHooks = u, r.runLeaveHooks = d; var c = e('./AsyncUtils'); const p = function h() { const e = this; o(this, h), this.hooks = [], this.add = function (t) { return e.hooks.push(t); }, this.remove = function (t) { return e.hooks = e.hooks.filter(e => e !== t); }, this.has = function (t) { return e.hooks.indexOf(t) !== -1; }, this.clear = function () { return e.hooks = []; }; }; var f = new p(); var m = new p();
  }, { './AsyncUtils': 269 }],
  282: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = e('history/lib/createBrowserHistory'); const s = o(n); const a = e('./createRouterHistory'); const i = o(a); r.default = (0, i.default)(s.default), t.exports = r.default;
  }, { './createRouterHistory': 285, 'history/lib/createBrowserHistory': 303 }],
  283: [function (e, t, r) {
    function o(e, t, r) { if (!e.path) return !1; const o = (0, s.getParamNames)(e.path); return o.some(e => t.params[e] !== r.params[e]); } function n(e, t) { const r = e && e.routes; const n = t.routes; let s = void 0; let a = void 0; let i = void 0; return r ? !(function () { let l = !1; s = r.filter((r) => { if (l) return !0; const s = n.indexOf(r) === -1 || o(r, e, t); return s && (l = !0), s; }), s.reverse(), i = [], a = [], n.forEach((e) => { const t = r.indexOf(e) === -1; const o = s.indexOf(e) !== -1; t || o ? i.push(e) : a.push(e); }); }()) : (s = [], a = [], i = n), { leaveRoutes: s, changeRoutes: a, enterRoutes: i }; }r.__esModule = !0; var s = e('./PatternUtils'); r.default = n, t.exports = r.default;
  }, { './PatternUtils': 273 }],
  284: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { const t = (0, d.default)(e); const r = function () { return t; }; const o = (0, a.default)((0, l.default)(r))(e); return o; }r.__esModule = !0, r.default = n; const s = e('history/lib/useQueries'); var a = o(s); const i = e('history/lib/useBasename'); var l = o(i); const u = e('history/lib/createMemoryHistory'); var d = o(u); t.exports = r.default;
  }, { 'history/lib/createMemoryHistory': 305, 'history/lib/useBasename': 307, 'history/lib/useQueries': 308 }],
  285: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0, r.default = function (e) { let t = void 0; return a && (t = (0, s.default)(e)()), t; }; const n = e('./useRouterHistory'); var s = o(n); var a = !(typeof window === 'undefined' || !window.document || !window.document.createElement); t.exports = r.default;
  }, { './useRouterHistory': 293 }],
  286: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !0; return !1; } function s(e, t) {
      function r(t, r) { return t = e.createLocation(t), (0, p.default)(t, r, y.location, y.routes, y.params); } function o(e, r) { b && b.location === e ? s(b, r) : (0, _.default)(t, e, (t, o) => { t ? r(t) : o ? s(a({}, o, { location: e }), r) : r(); }); } function s(e, t) { function r(r, n) { return r || n ? o(r, n) : void (0, m.default)(e, (r, o) => { r ? t(r) : t(null, null, y = a({}, e, { components: o })); }); } function o(e, r) { e ? t(e) : t(null, r); } const n = (0, u.default)(y, e); const s = n.leaveRoutes; const i = n.changeRoutes; const l = n.enterRoutes; (0, d.runLeaveHooks)(s, y), s.filter(e => l.indexOf(e) === -1).forEach(h), (0, d.runChangeHooks)(i, y, e, (t, n) => (t || n ? o(t, n) : void (0, d.runEnterHooks)(l, e, r))); } function i(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; return e.__id__ || t && (e.__id__ = k++); } function l(e) { return e.map(e => S[i(e)]).filter(e => e); } function c(e, r) { (0, _.default)(t, e, (t, o) => { if (o == null) return void r(); b = a({}, o, { location: e }); for (var n = l((0, u.default)(y, b).leaveRoutes), s = void 0, i = 0, d = n.length; s == null && d > i; ++i)s = n[i](e); r(s); }); } function f() { if (y.routes) { for (var e = l(y.routes), t = void 0, r = 0, o = e.length; typeof t !== 'string' && o > r; ++r)t = e[r](); return t; } } function h(e) { const t = i(e); t && (delete S[t], n(S) || (P && (P(), P = null), T && (T(), T = null))); } function g(t, r) { const o = !n(S); const s = i(t, !0); return S[s] = r, o && (P = e.listenBefore(c), e.listenBeforeUnload && (T = e.listenBeforeUnload(f))), function () { h(t); }; } function v(t) { function r(r) { y.location === r ? t(null, y) : o(r, (r, o, n) => { r ? t(r) : o ? e.replace(o) : n && t(null, n); }); } const n = e.listen(r); return y.location ? t(null, y) : r(e.getCurrentLocation()), n; } var y = {}; var b = void 0; var k = 1; var S = Object.create(null); var P = void 0; var T = void 0; return {
        isActive: r, match: o, listenBeforeLeavingRoute: g, listen: v,
      };
    }r.__esModule = !0; var a = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; r.default = s; const i = e('./routerWarning'); const l = (o(i), e('./computeChangedRoutes')); var u = o(l); var d = e('./TransitionUtils'); const c = e('./isActive'); var p = o(c); const f = e('./getComponents'); var m = o(f); const h = e('./matchRoutes'); var _ = o(h); t.exports = r.default;
  }, {
    './TransitionUtils': 281, './computeChangedRoutes': 283, './getComponents': 287, './isActive': 289, './matchRoutes': 291, './routerWarning': 292,
  }],
  287: [function (e, t, r) {
    function o(e, t, r) { if (t.component || t.components) return void r(null, t.component || t.components); const o = t.getComponent || t.getComponents; if (o) { const n = o.call(t, e, r); (0, a.isPromise)(n) && n.then(e => r(null, e), r); } else r(); } function n(e, t) { (0, s.mapAsync)(e.routes, (t, r, n) => { o(e, t, n); }, t); }r.__esModule = !0; var s = e('./AsyncUtils'); var a = e('./PromiseUtils'); r.default = n, t.exports = r.default;
  }, { './AsyncUtils': 269, './PromiseUtils': 274 }],
  288: [function (e, t, r) {
    function o(e, t) { const r = {}; return e.path ? ((0, n.getParamNames)(e.path).forEach((e) => { Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]); }), r) : r; }r.__esModule = !0; var n = e('./PatternUtils'); r.default = o, t.exports = r.default;
  }, { './PatternUtils': 273 }],
  289: [function (e, t, r) {
    function o(e, t) { if (e == t) return !0; if (e == null || t == null) return !1; if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every((e, r) => o(e, t[r])); if ((typeof e === 'undefined' ? 'undefined' : l(e)) === 'object') { for (const r in e) if (Object.prototype.hasOwnProperty.call(e, r)) if (void 0 === e[r]) { if (void 0 !== t[r]) return !1; } else { if (!Object.prototype.hasOwnProperty.call(t, r)) return !1; if (!o(e[r], t[r])) return !1; } return !0; } return String(e) === String(t); } function n(e, t) { return t.charAt(0) !== '/' && (t = `/${t}`), e.charAt(e.length - 1) !== '/' && (e += '/'), t.charAt(t.length - 1) !== '/' && (t += '/'), t === e; } function s(e, t, r) { for (var o = e, n = [], s = [], a = 0, i = t.length; i > a; ++a) { const l = t[a]; const d = l.path || ''; if (d.charAt(0) === '/' && (o = e, n = [], s = []), o !== null && d) { const c = (0, u.matchPattern)(d, o); if (c ? (o = c.remainingPathname, n = [].concat(n, c.paramNames), s = [].concat(s, c.paramValues)) : o = null, o === '') return n.every((e, t) => String(s[t]) === String(r[e])); } } return !1; } function a(e, t) { return t == null ? e == null : e == null ? !0 : o(e, t); } function i(e, t, r, o, i) { let l = e.pathname; const u = e.query; return r == null ? !1 : (l.charAt(0) !== '/' && (l = `/${l}`), n(l, r.pathname) || !t && s(l, o, i) ? a(u, r.query) : !1); }r.__esModule = !0; var l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }; r.default = i; var u = e('./PatternUtils'); t.exports = r.default;
  }, { './PatternUtils': 273 }],
  290: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { const r = {}; for (const o in e)t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]); return r; } function s(e, t) { let r = e.history; const o = e.routes; let s = e.location; const l = n(e, ['history', 'routes', 'location']); r || s ? void 0 : (0, u.default)(!1), r = r || (0, c.default)(l); const d = (0, f.default)(r, (0, m.createRoutes)(o)); s = s ? r.createLocation(s) : r.getCurrentLocation(), d.match(s, (e, o, n) => { let s = void 0; if (n) { const l = (0, h.createRouterObject)(r, d, n); s = a({}, n, { router: l, matchContext: { transitionManager: d, router: l } }); }t(e, o && r.createLocation(o, i.REPLACE), s); }); }r.__esModule = !0; var a = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; var i = e('history/lib/Actions'); const l = e('invariant'); var u = o(l); const d = e('./createMemoryHistory'); var c = o(d); const p = e('./createTransitionManager'); var f = o(p); var m = e('./RouteUtils'); var h = e('./RouterUtils'); r.default = s, t.exports = r.default;
  }, {
    './RouteUtils': 277, './RouterUtils': 280, './createMemoryHistory': 284, './createTransitionManager': 286, 'history/lib/Actions': 294, invariant: 267,
  }],
  291: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t, r, o, n) { if (e.childRoutes) return [null, e.childRoutes]; if (!e.getChildRoutes) return []; let s = !0; let a = void 0; const l = { location: t, params: i(r, o) }; const u = e.getChildRoutes(l, (e, t) => t = !e && (0, _.createRoutes)(t), s ? void (a = [e, t]) : void n(e, t)); return (0, f.isPromise)(u) && u.then(e => n(null, (0, _.createRoutes)(e)), n), s = !1, a; } function s(e, t, r, o, n) { if (e.indexRoute)n(null, e.indexRoute); else if (e.getIndexRoute) { const a = { location: t, params: i(r, o) }; const l = e.getIndexRoute(a, (e, t) => { n(e, !e && (0, _.createRoutes)(t)[0]); }); (0, f.isPromise)(l) && l.then(e => n(null, (0, _.createRoutes)(e)[0]), n); } else e.childRoutes ? !(function () { const a = e.childRoutes.filter(e => !e.path); (0, p.loopAsync)(a.length, (e, n, i) => { s(a[e], t, r, o, (t, r) => { if (t || r) { const o = [a[e]].concat(Array.isArray(r) ? r : [r]); i(t, o); } else n(); }); }, (e, t) => { n(null, t); }); }()) : n(); } function a(e, t, r) { return t.reduce((e, t, o) => { const n = r && r[o]; return Array.isArray(e[t]) ? e[t].push(n) : t in e ? e[t] = [e[t], n] : e[t] = n, e; }, e); } function i(e, t) { return a({}, e, t); } function l(e, t, r, o, a, l) { const d = e.path || ''; if (d.charAt(0) === '/' && (r = t.pathname, o = [], a = []), r !== null && d) { try { const p = (0, m.matchPattern)(d, r); p ? (r = p.remainingPathname, o = [].concat(o, p.paramNames), a = [].concat(a, p.paramValues)) : r = null; } catch (f) { l(f); } if (r === '') { const h = (function () { const r = { routes: [e], params: i(o, a) }; return s(e, t, o, a, (e, t) => { if (e)l(e); else { if (Array.isArray(t)) { let o; (o = r.routes).push.apply(o, t); } else t && r.routes.push(t); l(null, r); } }), { v: void 0 }; }()); if ((typeof h === 'undefined' ? 'undefined' : c(h)) === 'object') return h.v; } } if (r != null || e.childRoutes) { const _ = function (n, s) { n ? l(n) : s ? u(s, t, (t, r) => { t ? l(t) : r ? (r.routes.unshift(e), l(null, r)) : l(); }, r, o, a) : l(); }; const g = n(e, t, o, a, _); g && _.apply(void 0, g); } else l(); } function u(e, t, r, o) { const n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : []; const s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : []; void 0 === o && (t.pathname.charAt(0) !== '/' && (t = d({}, t, { pathname: `/${t.pathname}` })), o = t.pathname), (0, p.loopAsync)(e.length, (r, a, i) => { l(e[r], t, o, n, s, (e, t) => { e || t ? i(e, t) : a(); }); }, r); }r.__esModule = !0; var d = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; var c = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }; r.default = u; var p = e('./AsyncUtils'); var f = e('./PromiseUtils'); var m = e('./PatternUtils'); const h = e('./routerWarning'); var _ = (o(h), e('./RouteUtils')); t.exports = r.default;
  }, {
    './AsyncUtils': 269, './PatternUtils': 273, './PromiseUtils': 274, './RouteUtils': 277, './routerWarning': 292,
  }],
  292: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e, t) { if (t.indexOf('deprecated') !== -1) { if (l[t]) return; l[t] = !0; }t = `[react-router] ${t}`; for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2; r > n; n++)o[n - 2] = arguments[n]; i.default.apply(void 0, [e, t].concat(o)); } function s() { l = {}; }r.__esModule = !0, r.default = n, r._resetWarned = s; const a = e('warning'); var i = o(a); var l = {};
  }, { warning: 310 }],
  293: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; } function n(e) { return function (t) { const r = (0, a.default)((0, l.default)(e))(t); return r; }; }r.__esModule = !0, r.default = n; const s = e('history/lib/useQueries'); var a = o(s); const i = e('history/lib/useBasename'); var l = o(i); t.exports = r.default;
  }, { 'history/lib/useBasename': 307, 'history/lib/useQueries': 308 }],
  294: [function (e, t, r) {
    r.__esModule = !0; r.PUSH = 'PUSH', r.REPLACE = 'REPLACE', r.POP = 'POP';
  }, {}],
  295: [function (e, t, r) {
    r.__esModule = !0; r.loopAsync = function (e, t, r) { let o = 0; let n = !1; let s = !1; let a = !1; let i = void 0; const l = function () { for (var e = arguments.length, t = Array(e), o = 0; e > o; o++)t[o] = arguments[o]; return n = !0, s ? void (i = t) : void r.apply(void 0, t); }; const u = function d() { if (!n && (a = !0, !s)) { for (s = !0; !n && e > o && a;)a = !1, t(o++, d, l); return s = !1, n ? void r.apply(void 0, i) : void (o >= e && a && (n = !0, r())); } }; u(); };
  }, {}],
  296: [function (e, t, r) {
    r.__esModule = !0, r.go = r.replaceLocation = r.pushLocation = r.startListener = r.getUserConfirmation = r.getCurrentLocation = void 0; const o = e('./LocationUtils'); const n = e('./DOMUtils'); const s = e('./DOMStateStorage'); const a = e('./PathUtils'); const i = e('./ExecutionEnvironment'); const l = 'popstate'; const u = 'hashchange'; const d = i.canUseDOM && !(0, n.supportsPopstateOnHashchange)(); const c = function (e) {
      const t = e && e.key; return (0, o.createLocation)({
        pathname: window.location.pathname, search: window.location.search, hash: window.location.hash, state: t ? (0, s.readState)(t) : void 0,
      }, void 0, t);
    }; const p = r.getCurrentLocation = function () { let e = void 0; try { e = window.history.state || {}; } catch (t) { e = {}; } return c(e); }; const f = (r.getUserConfirmation = function (e, t) { return t(window.confirm(e)); }, r.startListener = function (e) { const t = function (t) { void 0 !== t.state && e(c(t.state)); }; (0, n.addEventListener)(window, l, t); const r = function () { return e(p()); }; return d && (0, n.addEventListener)(window, u, r), function () { (0, n.removeEventListener)(window, l, t), d && (0, n.removeEventListener)(window, u, r); }; }, function (e, t) { const r = e.state; const o = e.key; void 0 !== r && (0, s.saveState)(o, r), t({ key: o }, (0, a.createPath)(e)); }); r.pushLocation = function (e) { return f(e, (e, t) => window.history.pushState(e, null, t)); }, r.replaceLocation = function (e) { return f(e, (e, t) => window.history.replaceState(e, null, t)); }, r.go = function (e) { e && window.history.go(e); };
  }, {
    './DOMStateStorage': 297, './DOMUtils': 298, './ExecutionEnvironment': 299, './LocationUtils': 300, './PathUtils': 301,
  }],
  297: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0, r.readState = r.saveState = void 0; const n = e('warning'); const s = (o(n), { QuotaExceededError: !0, QUOTA_EXCEEDED_ERR: !0 }); const a = { SecurityError: !0 }; const i = '@@History/'; const l = function (e) { return i + e; }; r.saveState = function (e, t) { if (window.sessionStorage) try { t == null ? window.sessionStorage.removeItem(l(e)) : window.sessionStorage.setItem(l(e), JSON.stringify(t)); } catch (r) { if (a[r.name]) return; if (s[r.name] && window.sessionStorage.length === 0) return; throw r; } }, r.readState = function (e) { let t = void 0; try { t = window.sessionStorage.getItem(l(e)); } catch (r) { if (a[r.name]) return; } if (t) try { return JSON.parse(t); } catch (r) {} };
  }, { warning: 310 }],
  298: [function (e, t, r) {
    r.__esModule = !0; r.addEventListener = function (e, t, r) { return e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent(`on${t}`, r); }, r.removeEventListener = function (e, t, r) { return e.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent(`on${t}`, r); }, r.supportsHistory = function () { const e = window.navigator.userAgent; return e.indexOf('Android 2.') === -1 && e.indexOf('Android 4.0') === -1 || e.indexOf('Mobile Safari') === -1 || e.indexOf('Chrome') !== -1 || e.indexOf('Windows Phone') !== -1 ? window.history && 'pushState' in window.history : !1; }, r.supportsGoWithoutReloadUsingHash = function () { return window.navigator.userAgent.indexOf('Firefox') === -1; }, r.supportsPopstateOnHashchange = function () { return window.navigator.userAgent.indexOf('Trident') === -1; };
  }, {}],
  299: [function (e, t, r) {
    r.__esModule = !0; r.canUseDOM = !(typeof window === 'undefined' || !window.document || !window.document.createElement);
  }, {}],
  300: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0, r.locationsAreEqual = r.statesAreEqual = r.createLocation = r.createQuery = void 0; const n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol ? 'symbol' : typeof e; }; const s = Object.assign || function (e) {
      for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e;
    }; const a = e('invariant'); const i = o(a); const l = e('warning'); const u = (o(l), e('./PathUtils')); const d = e('./Actions'); const c = (r.createQuery = function (e) { return s(Object.create(null), e); }, r.createLocation = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? '/' : arguments[0]; const t = arguments.length <= 1 || void 0 === arguments[1] ? d.POP : arguments[1]; const r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2]; const o = typeof e === 'string' ? (0, u.parsePath)(e) : e; const n = o.pathname || '/'; const s = o.search || ''; const a = o.hash || ''; const i = o.state; return {
        pathname: n, search: s, hash: a, state: i, action: t, key: r,
      };
    }, function (e) { return Object.prototype.toString.call(e) === '[object Date]'; }); const p = r.statesAreEqual = function f(e, t) { if (e === t) return !0; const r = typeof e === 'undefined' ? 'undefined' : n(e); const o = typeof t === 'undefined' ? 'undefined' : n(t); if (r !== o) return !1; if (r === 'function' ? (0, i.default)(!1) : void 0, r === 'object') { if (c(e) && c(t) ? (0, i.default)(!1) : void 0, !Array.isArray(e)) { const s = Object.keys(e); const a = Object.keys(t); return s.length === a.length && s.every(r => f(e[r], t[r])); } return Array.isArray(t) && e.length === t.length && e.every((e, r) => f(e, t[r])); } return !1; }; r.locationsAreEqual = function (e, t) { return e.key === t.key && e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && p(e.state, t.state); };
  }, {
    './Actions': 294, './PathUtils': 301, invariant: 267, warning: 310,
  }],
  301: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0, r.createPath = r.parsePath = r.getQueryStringValueFromPath = r.stripQueryStringValueFromPath = r.addQueryStringValueToPath = void 0; const n = e('warning'); const s = (o(n), r.addQueryStringValueToPath = function (e, t, r) { const o = a(e); const n = o.pathname; const s = o.search; const l = o.hash; return i({ pathname: n, search: `${s + (s.indexOf('?') === -1 ? '?' : '&') + t}=${r}`, hash: l }); }, r.stripQueryStringValueFromPath = function (e, t) { const r = a(e); const o = r.pathname; const n = r.search; const s = r.hash; return i({ pathname: o, search: n.replace(new RegExp(`([?&])${t}=[a-zA-Z0-9]+(&?)`), (e, t, r) => (t === '?' ? t : r)), hash: s }); }, r.getQueryStringValueFromPath = function (e, t) { const r = a(e); const o = r.search; const n = o.match(new RegExp(`[?&]${t}=([a-zA-Z0-9]+)`)); return n && n[1]; }, function (e) { const t = e.match(/^(https?:)?\/\/[^\/]*/); return t == null ? e : e.substring(t[0].length); }); var a = r.parsePath = function (e) { let t = s(e); let r = ''; let o = ''; const n = t.indexOf('#'); n !== -1 && (o = t.substring(n), t = t.substring(0, n)); const a = t.indexOf('?'); return a !== -1 && (r = t.substring(a), t = t.substring(0, a)), t === '' && (t = '/'), { pathname: t, search: r, hash: o }; }; var i = r.createPath = function (e) { if (e == null || typeof e === 'string') return e; const t = e.basename; const r = e.pathname; const o = e.search; const n = e.hash; let s = (t || '') + r; return o && o !== '?' && (s += o), n && (s += n), s; };
  }, { warning: 310 }],
  302: [function (e, t, r) {
    r.__esModule = !0, r.replaceLocation = r.pushLocation = r.getCurrentLocation = r.go = r.getUserConfirmation = void 0; const o = e('./BrowserProtocol'); Object.defineProperty(r, 'getUserConfirmation', { enumerable: !0, get() { return o.getUserConfirmation; } }), Object.defineProperty(r, 'go', { enumerable: !0, get() { return o.go; } }); const n = e('./LocationUtils'); const s = e('./PathUtils'); r.getCurrentLocation = function () { return (0, n.createLocation)(window.location); }, r.pushLocation = function (e) { return window.location.href = (0, s.createPath)(e), !1; }, r.replaceLocation = function (e) { return window.location.replace((0, s.createPath)(e)), !1; };
  }, { './BrowserProtocol': 296, './LocationUtils': 300, './PathUtils': 301 }],
  303: [function (e, t, r) {
    function o(e) { if (e && e.__esModule) return e; const t = {}; if (e != null) for (const r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t.default = e, t; } function n(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const s = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const a = e('invariant'); const i = n(a); const l = e('./ExecutionEnvironment'); const u = e('./BrowserProtocol'); const d = o(u); const c = e('./RefreshProtocol'); const p = o(c); const f = e('./DOMUtils'); const m = e('./createHistory'); const h = n(m); const _ = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; l.canUseDOM ? void 0 : (0, i.default)(!1); const t = e.forceRefresh || !(0, f.supportsHistory)(); const r = t ? p : d; const o = r.getUserConfirmation; const n = r.getCurrentLocation; const a = r.pushLocation; const u = r.replaceLocation; const c = r.go; const m = (0, h.default)(s({ getUserConfirmation: o }, e, {
        getCurrentLocation: n, pushLocation: a, replaceLocation: u, go: c,
      })); let _ = 0; let g = void 0; const v = function (e, t) { ++_ === 1 && (g = d.startListener(m.transitionTo)); const r = t ? m.listenBefore(e) : m.listen(e); return function () { r(), --_ === 0 && g(); }; }; const y = function (e) { return v(e, !0); }; const b = function (e) { return v(e, !1); }; return s({}, m, { listenBefore: y, listen: b });
    }; r.default = _;
  }, {
    './BrowserProtocol': 296, './DOMUtils': 298, './ExecutionEnvironment': 299, './RefreshProtocol': 302, './createHistory': 304, invariant: 267,
  }],
  304: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = e('./AsyncUtils'); const s = e('./PathUtils'); const a = e('./runTransitionHook'); const i = o(a); const l = e('./Actions'); const u = e('./LocationUtils'); const d = function () {
      const e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const t = e.getCurrentLocation; const r = e.getUserConfirmation; const o = e.pushLocation; const a = e.replaceLocation; const d = e.go; const c = e.keyLength; let p = void 0; let f = void 0; let m = []; let h = []; let _ = []; const g = function () { return f && f.action === l.POP ? _.indexOf(f.key) : p ? _.indexOf(p.key) : -1; }; const v = function (e) { const t = g(); p = e, p.action === l.PUSH ? _ = [].concat(_.slice(0, t + 1), [p.key]) : p.action === l.REPLACE && (_[t] = p.key), h.forEach(e => e(p)); }; const y = function (e) { return m.push(e), function () { return m = m.filter(t => t !== e); }; }; const b = function (e) { return h.push(e), function () { return h = h.filter(t => t !== e); }; }; const k = function (e, t) { (0, n.loopAsync)(m.length, (t, r, o) => { (0, i.default)(m[t], e, e => (e != null ? o(e) : r())); }, (e) => { r && typeof e === 'string' ? r(e, e => t(e !== !1)) : t(e !== !1); }); }; const S = function (e) { p && (0, u.locationsAreEqual)(p, e) || f && (0, u.locationsAreEqual)(f, e) || (f = e, k(e, (t) => { if (f === e) if (f = null, t) { if (e.action === l.PUSH) { const r = (0, s.createPath)(p); const n = (0, s.createPath)(e); n === r && (0, u.statesAreEqual)(p.state, e.state) && (e.action = l.REPLACE); }e.action === l.POP ? v(e) : e.action === l.PUSH ? o(e) !== !1 && v(e) : e.action === l.REPLACE && a(e) !== !1 && v(e); } else if (p && e.action === l.POP) { const i = _.indexOf(p.key); const c = _.indexOf(e.key); i !== -1 && c !== -1 && d(i - c); } })); }; const P = function (e) { return S(C(e, l.PUSH)); }; const T = function (e) { return S(C(e, l.REPLACE)); }; const w = function () { return d(-1); }; const N = function () { return d(1); }; const R = function () { return Math.random().toString(36).substr(2, c || 6); }; const M = function (e) { return (0, s.createPath)(e); }; var C = function (e, t) { const r = arguments.length <= 2 || void 0 === arguments[2] ? R() : arguments[2]; return (0, u.createLocation)(e, t, r); }; return {
        getCurrentLocation: t, listenBefore: y, listen: b, transitionTo: S, push: P, replace: T, go: d, goBack: w, goForward: N, createKey: R, createPath: s.createPath, createHref: M, createLocation: C,
      };
    }; r.default = d;
  }, {
    './Actions': 294, './AsyncUtils': 295, './LocationUtils': 300, './PathUtils': 301, './runTransitionHook': 306,
  }],
  305: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = e('warning'); const a = (o(s), e('invariant')); const i = o(a); const l = e('./LocationUtils'); const u = e('./PathUtils'); const d = e('./createHistory'); const c = o(d); const p = e('./Actions'); const f = function (e) { return e.filter(e => e.state).reduce((e, t) => e[t.key] = t.state, e, {}); }; const m = function () {
      let e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; Array.isArray(e) ? e = { entries: e } : typeof e === 'string' && (e = { entries: [e] }); const t = function () { const e = h[_]; const t = (0, u.createPath)(e); let r = void 0; let o = void 0; e.key && (r = e.key, o = y(r)); const s = (0, u.parsePath)(t); return (0, l.createLocation)(n({}, s, { state: o }), void 0, r); }; const r = function (e) { const t = _ + e; return t >= 0 && t < h.length; }; const o = function (e) { if (e && r(e)) { _ += e; const o = t(); d.transitionTo(n({}, o, { action: p.POP })); } }; const s = function (e) { _ += 1, _ < h.length && h.splice(_), h.push(e), v(e.key, e.state); }; const a = function (e) { h[_] = e, v(e.key, e.state); }; var d = (0, c.default)(n({}, e, {
        getCurrentLocation: t, pushLocation: s, replaceLocation: a, go: o,
      })); const m = e; var h = m.entries; var _ = m.current; typeof h === 'string' ? h = [h] : Array.isArray(h) || (h = ['/']), h = h.map(e => (0, l.createLocation)(e)), _ == null ? _ = h.length - 1 : _ >= 0 && _ < h.length ? void 0 : (0, i.default)(!1); const g = f(h); var v = function (e, t) { return g[e] = t; }; var y = function (e) { return g[e]; }; return n({}, d, { canGo: r });
    }; r.default = m;
  }, {
    './Actions': 294, './LocationUtils': 300, './PathUtils': 301, './createHistory': 304, invariant: 267, warning: 310,
  }],
  306: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = e('warning'); const s = (o(n), function (e, t, r) { const o = e(t, r); e.length < 2 && r(o); }); r.default = s;
  }, { warning: 310 }],
  307: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = e('./runTransitionHook'); const a = o(s); const i = e('./PathUtils'); const l = function (e) {
      return function () {
        const t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const r = e(t); const o = t.basename; const s = function (e) { return e ? (o && e.basename == null && (e.pathname.indexOf(o) === 0 ? (e.pathname = e.pathname.substring(o.length), e.basename = o, e.pathname === '' && (e.pathname = '/')) : e.basename = ''), e) : e; }; const l = function (e) { if (!o) return e; const t = typeof e === 'string' ? (0, i.parsePath)(e) : e; const r = t.pathname; const s = o.slice(-1) === '/' ? o : `${o}/`; const a = r.charAt(0) === '/' ? r.slice(1) : r; const l = s + a; return n({}, t, { pathname: l }); }; const u = function () { return s(r.getCurrentLocation()); }; const d = function (e) { return r.listenBefore((t, r) => (0, a.default)(e, s(t), r)); }; const c = function (e) { return r.listen(t => e(s(t))); }; const p = function (e) { return r.push(l(e)); }; const f = function (e) { return r.replace(l(e)); }; const m = function (e) { return r.createPath(l(e)); }; const h = function (e) { return r.createHref(l(e)); }; const _ = function (e) { for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++)o[n - 1] = arguments[n]; return s(r.createLocation.apply(r, [l(e)].concat(o))); }; return n({}, r, {
          getCurrentLocation: u, listenBefore: d, listen: c, push: p, replace: f, createPath: m, createHref: h, createLocation: _,
        });
      };
    }; r.default = l;
  }, { './PathUtils': 301, './runTransitionHook': 306 }],
  308: [function (e, t, r) {
    function o(e) { return e && e.__esModule ? e : { default: e }; }r.__esModule = !0; const n = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]); } return e; }; const s = e('query-string'); const a = e('./runTransitionHook'); const i = o(a); const l = e('./LocationUtils'); const u = e('./PathUtils'); const d = function (e) { return (0, s.stringify)(e).replace(/%20/g, '+'); }; const c = s.parse; const p = function (e) {
      return function () {
        const t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]; const r = e(t); let o = t.stringifyQuery; let s = t.parseQueryString; typeof o !== 'function' && (o = d), typeof s !== 'function' && (s = c); const a = function (e) { return e ? (e.query == null && (e.query = s(e.search.substring(1))), e) : e; }; const p = function (e, t) { if (t == null) return e; const r = typeof e === 'string' ? (0, u.parsePath)(e) : e; const s = o(t); const a = s ? `?${s}` : ''; return n({}, r, { search: a }); }; const f = function () { return a(r.getCurrentLocation()); }; const m = function (e) { return r.listenBefore((t, r) => (0, i.default)(e, a(t), r)); }; const h = function (e) { return r.listen(t => e(a(t))); }; const _ = function (e) { return r.push(p(e, e.query)); }; const g = function (e) { return r.replace(p(e, e.query)); }; const v = function (e) { return r.createPath(p(e, e.query)); }; const y = function (e) { return r.createHref(p(e, e.query)); }; const b = function (e) { for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++)o[n - 1] = arguments[n]; const s = r.createLocation.apply(r, [p(e, e.query)].concat(o)); return e.query && (s.query = (0, l.createQuery)(e.query)), a(s); }; return n({}, r, {
          getCurrentLocation: f, listenBefore: m, listen: h, push: _, replace: g, createPath: v, createHref: y, createLocation: b,
        });
      };
    }; r.default = p;
  }, {
    './LocationUtils': 300, './PathUtils': 301, './runTransitionHook': 306, 'query-string': 268,
  }],
  309: [function (e, t, r) {
    t.exports = function (e) { return encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`); };
  }, {}],
  310: [function (e, t, r) { /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
    "use strict";

    const o = function () {}; t.exports = o;
  }, {}],
}, {}, [58]));
// # sourceMappingURL=../react_client_side/site_header-8b21517b56.js.map
