'use strict';

function preloaderBeginLoad() {
	const wrapperBegin = document.querySelector('.wrapper-begin'),
		bodyBlock = document.body
	;

	function preloaderBeginAnim() {
		document.addEventListener('DOMContentLoaded', function() {
			let tl = gsap.timeline({
				onComplete: () => {
					bodyBlock.removeChild(wrapperBegin);
					countersFront();
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