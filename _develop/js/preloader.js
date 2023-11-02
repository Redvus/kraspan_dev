'use strict';

function preloaderBeginLoad() {
	const wrapperBegin = document.querySelector('.wrapper-begin'),
		countersBlock = document.querySelector('.section-top__info_counters'),
		bodyBlock = document.body
	;

	function preloaderBeginAnim() {
		document.addEventListener('DOMContentLoaded', function() {
			let tl = gsap.timeline({
				onComplete: () => {
					bodyBlock.removeChild(wrapperBegin);
					if (countersBlock) {
						countersFront();
					}
				}
			});

			tl
				.to(wrapperBegin, {
					duration: 0.3,
					delay: 0.4,
					autoAlpha: 0
				})
			;
		}, false);

	}

	preloaderBeginAnim();
}

function initMain() {
	preloaderBeginLoad();
}

function initMainMobile() {
	preloaderBeginLoad();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
	initMain();
} else {
	initMainMobile();
}