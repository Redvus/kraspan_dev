class Modal {

    modalLoad(materialLink, materialSrc) {
        const modalWrapper = document.createElement('div'),
            modalWrapperContainer = document.createElement('div'),
            bodyWrapper = document.querySelector('body'),
            modalMask = document.createElement('div'),
            modalClose = document.createElement('div'),
            iframeEl = document.createElement('iframe'),
            wrapperDesktop = document.querySelector('.wrapper'),
            scrollPosition = document.documentElement.scrollTop
        ;

        modalWrapper.className += 'wrapper-modal';
        modalWrapperContainer.className += 'wrapper-modal__container';
        modalClose.className += 'wrapper-modal__close';
        modalMask.className += 'wrapper-modal__mask';

        modalClose.innerHTML = `
            <i class="fas fa-close"></i>
        `;

        function bodyFixed() {
            window.addEventListener('scroll', function () {
                wrapperDesktop.style.top = scrollPosition;
                bodyWrapper.style.position = 'fixed';
                bodyWrapper.style.width = '100vw';
                console.log(scrollPosition);
            });

        }

        function bodyUnFixed() {
            const scrollYTop = document.body.style.top;
            // document.body.style.position = '';
            // document.body.style.top = '';
            document.body.style.width = '';
        }

        function modalLoadAnim() {
            const materialLinkID = document.getElementById(materialLink);

            let tl = new gsap.timeline({
                reversed: true,
                onStart: () => {
                    bodyWrapper.appendChild(modalWrapper);
                    modalWrapper.appendChild(modalWrapperContainer);
                    modalWrapper.appendChild(modalClose);
                    modalWrapperContainer.appendChild(iframeEl);
                    // modalWrapperContainer.id = materialContent;
                    iframeEl.src = `https://kraspan-samara.ru/${materialSrc}`;
                    iframeEl.onload = () => {
                        iframeEl.contentDocument;
                    };
                }
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
                .from(iframeEl, {
                    duration: 0.3,
                    delay: "0.2",
                    autoAlpha: 0
                })
                .from(modalClose, {
                    duration: 0.3,
                    autoAlpha: 0
                })
            ;

            materialLinkID.addEventListener("click", () => {
                tl.play();
                bodyWrapper.appendChild(modalMask);
            });

            /*jshint -W030 */
            modalClose.addEventListener("click", () => {
                tl.reversed() ? tl.restart() : tl.reverse();
                setTimeout(() => {
                    bodyWrapper.removeChild(modalMask);
                    modalWrapper.removeChild(modalWrapperContainer);
                    modalWrapper.removeChild(modalClose);
                    bodyWrapper.removeChild(modalWrapper);
                    modalWrapperContainer.removeChild(iframeEl);
                }, 1100);
            });
            modalMask.addEventListener("click", () => {
                tl.reversed() ? tl.restart() : tl.reverse();
                setTimeout(() => {
                    bodyWrapper.removeChild(modalMask);
                    modalWrapper.removeChild(modalWrapperContainer);
                    modalWrapper.removeChild(modalClose);
                    bodyWrapper.removeChild(modalWrapper);
                    modalWrapperContainer.removeChild(iframeEl);
                }, 1100);
            });
        }
        modalLoadAnim();
    }
}