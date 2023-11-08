const objectsTab = document.getElementById('objectsTab');

function objectsTabs() {
    const tabMenuTrigger = document.querySelectorAll('.tab__menu_trigger')

    for(let i = 0; i < tabMenuTrigger.length; i++) {
        tabMenuTrigger[i].addEventListener('click', tabSwitch, false);
    }

    let flag = 0;
    const arrayPanels = document.querySelectorAll('.js-tab-target');

    function tabSwitch(){
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