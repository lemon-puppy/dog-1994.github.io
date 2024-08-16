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

document.getElementById('install-button').addEventListener('click', () => {
    console.log(deferredPrompt);
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('用户接受了安装');
            } else {
                console.log('用户取消了安装');
            }
            window.deferredPrompt = null;
        });
    }
});