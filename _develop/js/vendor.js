'use strict';

gsap.registerPlugin(ScrollTrigger);

const scrollLine = document.getElementById('scrollLine'),
    wrapper = document.querySelector('.wrapper'),
    locoScroll = new LocomotiveScroll({
    el: wrapper,
    smooth: true,
    multiplier: 0.5
});

function scrollSmooth() {

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(wrapper, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // pinType: document.querySelector(".wrapper-info").style.transform ? "transform" : "fixed"
    });

    gsap.from(scrollLine, {
        scrollTrigger: {
            trigger: scrollLine,
            scroller: wrapper,
            scrub: true,
            start: "0 0",
            end: () => `+=${wrapper.offsetHeight - window.innerHeight}`,
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        },
        scaleX: 0,
        transformOrigin: "0 0",
        ease: "none"
    });

    ScrollTrigger.addEventListener("refreshInit", () => locoScroll.update());
    ScrollTrigger.refresh();
}

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

/*==================================================
=                   Mobile Section                 =
==================================================*/
const bodyDiv = document.querySelector('body'),
    wrapperDesktop = document.querySelector('.wrapper--desktop'),
    wrapperMobile = document.querySelector('.wrapper--mobile'),
    headerDesktop = document.querySelector('.header--desktop'),
    headerMobile = document.querySelector('.header--mobile'),
    footerDesktop = document.querySelector('.footer--desktop'),
    footerMobile = document.querySelector('.footer--mobile'),
    navMobile = document.querySelector('.header-mobile__nav'),
    navMobileMask = document.querySelector('.header-mobile__nav-mask')
;

function scriptDesktopHide() {
    bodyDiv.removeChild(wrapperDesktop);
    bodyDiv.removeChild(headerDesktop);
    // if (wrapperMobile.hasChildNodes(footerMobile)) {
    //     wrapperMobile.removeChild(footerMobile);
    // }
}

function scriptMobileHide() {
    bodyDiv.removeChild(wrapperMobile);
    bodyDiv.removeChild(headerMobile);
    bodyDiv.removeChild(footerMobile);
    bodyDiv.removeChild(navMobile);
    bodyDiv.removeChild(navMobileMask);
}

/*===========  End of Mobile Section  ============*/


/*==================================================
=                   Mobile Nav                     =
==================================================*/
const navButtonMobile = document.getElementById('navButtonMobile'),
    navMainMobile = document.getElementById('navMainMobile'),
    navMainListMobile = document.querySelectorAll('#navMainMobile ul > li'),
    navBack = document.querySelector('.header-mobile__nav-mask'),
    navButtonLineTop = document.querySelector('.header-mobile__nav-line__top'),
    navButtonLineMiddle = document.querySelector('.header-mobile__nav-line__middle'),
    navButtonLineBottom = document.querySelector('.header-mobile__nav-line__bottom')
;

function navMenuOpenMobile() {

    let tl = new gsap.timeline({
        reversed: true
    });

    tl
        .to(navBack, {
            duration: 0.3,
            delay: '-1.1',
            autoAlpha: 1,
            display: 'block',
            zIndex: '9995',
            ease: 'power1'
        })
        .to(navMainMobile, {
            duration: 0.3,
            delay: '-1.2',
            x: '0%',
            zIndex: '9996',
            ease: 'power2'
        })
        .to(navButtonLineMiddle, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '180deg',
            ease: 'power2'
        })
        .to(navButtonLineTop, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '135deg',
            x: '27%',
            y: '200%',
            scaleX: 0.6,
            ease: 'power2'
        })
        .to(navButtonLineBottom, {
            duration: 0.2,
            delay: '-0.4',
            rotation: '-135deg',
            x: '27%',
            y: '-200%',
            scaleX: 0.6,
            ease: 'power2'
        })
        // .from(navMainListMobile, {
        //     duration: 0.2,
        //     delay: '-0.25',
        //     stagger: 0.01,
        //     x: '10%',
        //     autoAlpha: 0,
        //     ease: 'back'
        // })
    ;

    /*jshint -W030 */
    navButtonMobile.addEventListener('click', function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    navBack.addEventListener('click', function () {
        tl.reverse();
    });

}

function navMain() {
    document.querySelector(".item-has-children > a").addEventListener('click', (event) => {
        event.preventDefault();
        this.classList.toggle("submenu-open")
            .next('.submenu')
            .slideToggle(200)
            .end()
            .parent('.item-has-children')
            .siblings('.item-has-children')
            .children('a')
            .classList.remove("submenu-open")
            .next('.submenu')
            .slideUp(200);
    });
}

/*===========  End of Mobile Nav =================*/


function initVendor() {
    scrollSmooth();
    reloadWindowResize();
    keyLock();
    // navMain();
    // scriptMobileHide();
}

function initVendorMobile() {
    // scriptDesktopHide();
    // navMenuOpenMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initVendor();
} else {
    initVendorMobile();
}