'use strict';

const sliderFront = document.getElementById('sliderFront'),
    objectsTab = document.getElementById('objectsTab'),
    sectionMaterials = document.getElementById('sectionMaterials'),
    wrapperSingle = document.querySelector('.wrapper-single')
;

function countersFront() {
    const countersAll = new Counters();
    countersAll.counterLoad('counterFasad', 180);
    countersAll.counterLoad('counterObjects', 150);
    countersAll.counterLoad('counterDistrict', 9);
}

function initMain() {
    if (typeof objectsTab) {
        objectsTabs();
    }
    if (typeof sliderFront) {
        frontSlider();
    }

    if (sectionMaterials) {
        const modalLoadNew = new Modal();
        modalLoadNew.modalLoad('materialLink_1', 'kraspanmetalcolor/metalcolor-info/');
        modalLoadNew.modalLoad('materialLink_2', 'kraspancomposite-st/composite-st-info/');
        modalLoadNew.modalLoad('materialLink_3', 'kraspanfibrocementcolor/fiber-cement-info/');
        modalLoadNew.modalLoad('materialLink_4', 'kraspanfibrocementcolor-2/fiber-cement-color-info/');
        modalLoadNew.modalLoad('materialLink_5', 'porcelain-stoneware-slabs/porcelain-tiles-info/');
        modalLoadNew.modalLoad('materialLink_6', 'kraspangranite/granit-info/');
        modalLoadNew.modalLoad('materialLink_7', 'kraspanbrickstone/brickstone-info/');
        modalLoadNew.modalLoad('materialLink_8', 'kraspanbrickform-brick/brickform-info/');
        modalLoadNew.modalLoad('materialLink_9', 'kraspanbrickform-travertine/brickformtravertine-info/');
    }
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}