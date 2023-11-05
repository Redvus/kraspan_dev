function reloadWindowResize() {
    window.onresize = function () {
        location.reload();
    }
}

function keyLock() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'PageDown' || e.key === 'PageUp' || e.key === 'Home' || e.key === 'End') {
            location.reload();
        }
    }, true);
}

function initVendor() {
    // reloadWindowResize();
    // keyLock();
}

function initVendorMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initVendor();
} else {
    initVendorMobile();
}