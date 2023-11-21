function objectsTabs() {
    const tabMenuTrigger = document.querySelectorAll('.tab__menu_trigger'),
        arrayPanels = document.querySelectorAll('.js-tab-target')
    ;
    let flag = 0;

    for(let i = 0; i < tabMenuTrigger.length; i++) {
        tabMenuTrigger[i].addEventListener('click', tabSwitch, false);
        if(tabMenuTrigger[i] !== tabMenuTrigger[0]) {
            gsap.set(arrayPanels, {
                autoAlpha: 0,
                display: 'none'
            });
        }
    }

    if(flag === 0) {
        gsap.set(arrayPanels[0],{autoAlpha:1,display:'flex'})
        flag = 1
    }

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
            });
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