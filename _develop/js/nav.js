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