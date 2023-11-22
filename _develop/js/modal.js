'use strict';

const modalWrapper = document.querySelector('.wrapper-modal'),
    bodyWrapper = document.querySelector('body'),
    modalMask = document.createElement('div'),
    modalClose = document.querySelector('.wrapper-modal__close')
;

modalMask.className += 'wrapper-modal__mask';

const materialLink_1 = document.getElementById('materialLink_1');

const materialContent_1 = document.getElementById('materialContent_1');

function modalLoad() {
    let tl = new gsap.timeline({
        reversed: true
    });
    tl
        .from(modalMask, {
            duration: 0.4,
            // delay: "-0.3",
            autoAlpha: 0
        })
        .from(modalWrapper, {
            duration: 0.3,
            delay: "-0.3",
            autoAlpha: 0,
            x: "100%",
            ease: "power1.inOut"
        })
        .from(modalClose, {
            duration: 0.3,
            autoAlpha: 0
        })
    ;

    materialLink_1.addEventListener("click", () => {
        tl.play();
        bodyWrapper.appendChild(modalMask);
    });

    /*jshint -W030 */
    modalClose.addEventListener("click", () => {
        tl.reversed() ? tl.restart() : tl.reverse();
        setTimeout(() => {
            bodyWrapper.removeChild(modalMask);
        }, 600);
    });
    modalMask.addEventListener("click", () => {
        tl.reversed() ? tl.restart() : tl.reverse();
        setTimeout(() => {
            bodyWrapper.removeChild(modalMask);
        }, 600);
    });
}