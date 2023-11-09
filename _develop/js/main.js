'use strict';

const sliderFront = document.getElementById('sliderFront'),
    objectsTab = document.getElementById('objectsTab')
;

function countersFront() {
    const countersAll = new Counters();
    countersAll.counterLoad('counterFasad', 180);
    countersAll.counterLoad('counterObjects', 150);
    countersAll.counterLoad('counterDistrict', 9);
}

function clickFrame() {
    const clickMe = document.getElementById('clickMe'),
        iframeEl = document.createElement('iframe'),
        wrapper = document.querySelector('.wrapper')
    ;
    clickMe.addEventListener("click", () => {
        iframeEl.src = 'https://readvus.ru/technique/213-restoring-the-windows-bootloader.html';
        iframeEl.onload = () => {
            iframeEl.contentDocument;
        };
        wrapper.appendChild(iframeEl);
    });
}

function initMain() {
    if (typeof objectsTab) {
        objectsTabs();
    }
    if (typeof sliderFront) {
        frontSlider();
    }
}

function initMainMobile() {
    // scrollSmoothMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}