'use strict';

const sliderFront = document.getElementById('sliderFront'),
    objectsTab = document.getElementById('objectsTab'),
    sectionMaterials = document.getElementById('sectionMaterials')
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
        modalLoadNew.modalLoad('materialLink_4', 'kraspanfibrocementcolor-2');
    }
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}