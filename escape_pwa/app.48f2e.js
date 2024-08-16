//友盟
(function (w, d, s, q, i) {
    w[q] = w[q] || [];
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.async = true;
    j.id = 'beacon-aplus';
    j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'aplus_queue', '203467608');
//集成应用的appKey
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['appKey', '66b5b647192e0574e75b349d']
});
/************************以下内容为可选配置内容****************************/
//sdk提供手动pv发送机制，启用手动pv(即关闭自动pv)，需设置aplus-waiting=MAN;
//注意：由于单页面路由改变时不会刷新页面，无法自动发送pv，所以对于单页应用，强烈建议您关闭自动PV, 手动控制PV事件
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-waiting', 'MAN']
});
//是否开启调试模式 
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['DEBUG', false]
});
//******************************************************** */
//airbridge
(function (a_, i_, r_, _b, _r, _i, _d, _g, _e) { if (!a_[_b]) { var n = function () { var c = i_.createElement(r_); c.onerror = function () { g.queue.filter(function (a) { return 0 <= _d.indexOf(a[0]) }).forEach(function (a) { a = a[1]; a = a[a.length - 1]; "function" === typeof a && a("error occur when load airbridge") }) }; c.async = 1; c.src = _r; "complete" === i_.readyState ? i_.head.appendChild(c) : a_.addEventListener("load", function h() { a_.removeEventListener("load", h); i_.head.appendChild(c) }) }, g = { queue: [], get isSDKEnabled() { return !1 } }; _i.concat(_d).forEach(function (c) { var a = c.split("."), h = a.pop(); a.reduce(function (p, q) { return p[q] = p[q] || {} }, g)[h] = function () { g.queue.push([c, arguments]) } }); a_[_b] = g; 0 < _g ? (_b = new (a_.XDomainRequest || a_.XMLHttpRequest), _i = function () { }, _b.open("GET", _r), _b.timeout = _g, _b.onload = function () { n() }, _b.onerror = _i, _b.onprogress = _i, _b.ontimeout = _i, _b.send()) : n() } })(window, document, "script", "airbridge", "//static.airbridge.io/sdk/latest/airbridge.min.js", "init startTracking fetchResource setBanner setDownload setDownloads openDeeplink setDeeplinks sendWeb setUserAgent setUserAlias addUserAlias setMobileAppData setUserId setUserEmail setUserPhone setUserAttributes clearUser setDeviceAlias removeDeviceAlias clearDeviceAlias setDeviceIFV setDeviceIFA setDeviceGAID events.send events.signIn events.signUp events.signOut events.purchased events.addedToCart events.productDetailsViewEvent events.homeViewEvent events.productListViewEvent events.searchResultViewEvent".split(" "), ["events.wait", "createTouchpoint"], 0);

airbridge.init({
    app: 'spacebattleroyale',
    webToken: '0c8e3858cd0147dc9f186f1c4bf3b68c',
})

//PWA
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
});

if ('serviceWorker' in window.navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) {
            return;
        }
        refreshing = true;
        window.location.reload();
    })
    navigator.serviceWorker.register("service-worker.a0d68.js").then(reg => {
        if (reg.waiting) {
            reg.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
    });
}