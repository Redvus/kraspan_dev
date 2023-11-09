function frontSlider() {
    let sliderFront = new MasterSlider();
    sliderFront.control('arrows' ,{
        insertTo:'#slider_arrow_front',
        autohide:false
    });
    // sliderFront.control('slideinfo',{insertTo:'#[[+galleryScriptInfo]]'});

    sliderFront.setup('sliderFront' , {
        width: 1920,
        height: 1080,
        autoHeight: false,
        space: 0,
        loop: true,
        autoplay: true,
        view: 'parallaxMask',
        layout: 'autofill', //fullscreen
        speed: 20,
    });
}