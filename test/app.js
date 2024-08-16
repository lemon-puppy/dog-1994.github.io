var deferredPrompt;
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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
            registration.addEventListener('updatefound', () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // 有更新的内容
                            if (confirm("新版本可用，是否刷新页面以获取最新内容？")) {
                                window.location.reload();
                            }
                        }
                    }
                };
            });
        }).catch(function (error) {
            console.log('Service Worker registration failed:', error);
        });
}

