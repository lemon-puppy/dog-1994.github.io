let deferredPrompt;
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('应用是从桌面启动的');
} else {
    console.log('应用不是从桌面启动的');
}

window.addEventListener('beforeinstallprompt', (e) => {
    alert("beforeinstall");
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-button').style.display = 'block';
});

document.getElementById('install-button').addEventListener('click', () => {
    console.log(deferredPrompt);
    alert("123" + deferredPrompt);
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('用户接受了安装');
            } else {
                console.log('用户取消了安装');
            }
            deferredPrompt = null;
            alert("456" + deferredPrompt);
        });
    }
});
const version = 1;
const checkAppUpdate = function () {
    caches.open('sugar-cache').then(function (cache) {
        // 检索版本号资源
        cache.match('/version').then(function (response) {
            if (response) {
                response.text().then(function (data) {
                    var cachedVersion = parseInt(data, 1); // 将缓存的版本号转换为整数
                    if (version > 1 && cachedVersion < version) {
                        // 缓存的版本号较旧，需要更新
                        window.showToast("There is a new version");
                        window.location.reload();

                        // 将最新版本添加到缓存
                        var versionResponse = new Response(version.toString());
                        cache.put('/version', versionResponse);
                    }
                });
            } else {
                // 版本号资源不存在于缓存中，需要添加到缓存
                var versionResponse = new Response(version.toString());
                cache.put('/version', versionResponse);
            }
        });
    });
}
// 检测浏览器是否支持SW
if ('serviceWorker' in window.navigator) {
    const registerServiceWorker = async () => {
        if ("serviceWorker" in navigator) {
            try {
                const registration = await navigator.serviceWorker.register("sw.js", {
                    scope: "./",
                });
                if (registration.installing) {
                    console.log("正在安装 Service worker");
                } else if (registration.waiting) {
                    console.log("已安装 Service worker installed");
                } else if (registration.active) {
                    console.log("激活 Service worker");
                    checkAppUpdate();
                }
            } catch (error) {
                console.error(`注册失败：${error}`);
            }
        }
    };
    registerServiceWorker();
}