'use strict';

const sliderFront = document.getElementById('sliderFront'),
    objectsTab = document.getElementById('objectsTab'),
    sectionMaterials = document.getElementById('sectionMaterials'),
    sectionMaterialsAll = document.getElementById('sectionMaterialsAll'),
    wrapperSingle = document.querySelector('.wrapper-single')
;

function countersFront() {
    const countersAll = new Counters();
    countersAll.counterLoad('counterFasad', 180);
    countersAll.counterLoad('counterObjects', 150);
    countersAll.counterLoad('counterDistrict', 9);
}

const wrapper = document.querySelector('.wrapper'),
    headerMob = document.querySelector('.header'),
    // headerDesktop = document.querySelector('.header'),
    headerTopPart = document.querySelector('.header__top_part'),
    headerTopAdress = document.querySelector('.header__top_adress'),
    headerTopPartRight = document.querySelector('.header__top_part--right'),
    headerTopAdressMobile = document.querySelector('.header__top_adress--mobile-right'),
    wrapperMain = document.getElementById('wrapperMain')
;

function wrapperMob() {
    wrapper.classList = 'wrapper wrapper--mobile';
    headerMob.classList = 'header header--mobile';
    headerTopPart.removeChild(headerTopAdress);
}

function wrapperDesk() {
    headerTopPart.removeChild(headerTopAdressMobile);
    // headerTopPart.removeChild(headerTopAdressMobile);
}

function initMain() {
    // if (typeof wrapperMain) {
    //     scrollSmooth();
    // }

    if (typeof objectsTab) {
        objectsTabs();
    }
    if (typeof sliderFront) {
        frontSlider();
    }

    if (sectionMaterials) {
        const modalLoadNew = new Modal();
        modalLoadNew.modalLoad('materialLink_1', 'kraspan-metallomagnezite/metallomagnezit-info/');
        modalLoadNew.modalLoad('materialLink_2', 'kraspanbrickform-brick/brickform-info/');
        modalLoadNew.modalLoad('materialLink_3', 'kraspanfibrocementcolor/fiber-cement-info/');
        modalLoadNew.modalLoad('materialLink_4', 'kraspan-photo-printing/photo-printing-info/');
    }

    if (sectionMaterialsAll) {
        const modalLoadNew = new Modal();
        modalLoadNew.modalLoad('materialLink_1', 'kraspan-metallomagnezite/metallomagnezit-info/');
        modalLoadNew.modalLoad('materialLink_2', 'kraspanbrickform-brick/brickform-info/');
        modalLoadNew.modalLoad('materialLink_3', 'kraspanfibrocementcolor/fiber-cement-info/');
        modalLoadNew.modalLoad('materialLink_4', 'kraspan-photo-printing/photo-printing-info/');
        modalLoadNew.modalLoad('materialLink_5', 'kraspanbrickform-travertine/brickformtravertine-info/');
        modalLoadNew.modalLoad('materialLink_6', 'kraspanfibrocementcolor/fiber-cement-info/');
        modalLoadNew.modalLoad('materialLink_7', 'kraspanmetalcolor/metalcolor-info/');
        modalLoadNew.modalLoad('materialLink_8', 'kraspancomposite-st/composite-st-info/');
        modalLoadNew.modalLoad('materialLink_9', 'porcelain-stoneware-slabs/porcelain-tiles-info/');
        modalLoadNew.modalLoad('materialLink_10', 'kraspangranite/granit-info/');
        modalLoadNew.modalLoad('materialLink_11', 'kraspanbrickstone/brickstone-info/');
    }
}

function initMainMobile() {
    if (typeof objectsTab) {
        objectsTabs();
    }
    if (typeof sliderFront) {
        frontSlider();
    }
    wrapperMob();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}