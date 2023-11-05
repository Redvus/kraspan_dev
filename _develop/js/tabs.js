const objectsTab = document.getElementById('objectsTab');

function objectsTabs() {
    const tabMenuTrigger = document.querySelectorAll('.tab__menu_trigger')

    for(let i = 0; i < tabMenuTrigger.length; i++) {
        tabMenuTrigger[i].addEventListener('click', tabSwitch, false);
    }

    const fadeIn = gsap.timeline({
        defaults: { duration: 0.4 }
    })

    let flag = 0;
    const arrayPanels = document.querySelectorAll('.js-tab-target');

    if(flag === 0) {
        gsap.set(arrayPanels[0],{autoAlpha:1,display:'flex'})
        flag = 1
    }

    function handle(event) {
        event.preventDefault();
    }

    function tabSwitch(){
        document.addEventListener('click', handle, { passive: false });

        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        const arrayTabs = Array.prototype.slice.call(tabMenuTrigger);
        const index = arrayTabs.indexOf(this);

        let tabContent = document.getElementsByClassName('js-tab-target')[index]

        arrayPanels.forEach(tab => {
            gsap.set(tab, {
                autoAlpha: 0,
                display: 'none'
            })
        });

        for (let i = 0; i < tabMenuTrigger.length; i++) {
            tabMenuTrigger[i].style.pointerEvents = 'none'
        }

        setTimeout(() => {
            for (let i = 0; i < tabMenuTrigger.length; i++) {
                tabMenuTrigger[i].style.pointerEvents = 'auto'
            }
        }, 300);

        let tl = gsap.timeline();
        tl
            .fromTo(tabContent,{
                autoAlpha: 0
            },{
                duration: 0.3,
                autoAlpha: 1,
                display: 'flex',
                ease: 'power2.in'
            })
        ;
    }
}