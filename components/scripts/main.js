$(document).ready(function() {
    // make the content visible after loading
    if(document.getElementById('about-page') != null) {
        About.preparePages();
        About.drawBgTxt();
    }
});
$(window).load(function() {
    if(document.getElementById('home-page') !== null) {

        // the minified timeline for mobile device
        if(Util.isMobile() == true) {
            (function() {
                "use strict";
                var container_lion, lion, container_ill,body;
                body = $('body');
                container_lion = document.getElementById('container-lion');
                container_lion.innerHTML = Home.MobileLion;

                lion = document.getElementsByClassName('lion');

                container_ill = Raphael('container-illustration');
                container_ill.setViewBox(0, 0, 1920, 1080, true);
                container_ill.setSize('100%', '100%');
                Slider.setPaper(Slider.drawCresus(container_ill));
                //----------------------------
                Slider.slidesData.push(Slider.drawCresus(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawDurance(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawBYS(container_ill).hide());
                //------------------------------
                Slider.slidesData.push(Slider.drawClub75(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawRenault(container_ill).hide());
                var mtimeline = new TimelineMax({paused: true}).kill();
                // add value into mtimeline
                mtimeline.add('lion', 0);
                mtimeline.add('float-up-lion', 1);

                mtimeline.addPause('float-up-lion');
                mtimeline.to(document.getElementById('container-lion'), 1, {opacity: 1, ease: Sine.easeInOut}, 'lion');
                mtimeline.to(document.getElementById('heading'), 1, {opacity: 1, y: '0'}, 'lion');
                mtimeline.to(document.getElementById('heading-txt-small'), 1, {opacity: 1, y: '0'}, 'lion');
                mtimeline.to(document.getElementById('button-lion'), 1, {opacity: 1}, 'lion');

                mtimeline.to(document.getElementById('container-lion'), 1, {opacity: 0}, 'float-up-lion');
                mtimeline.to(document.getElementById('heading'), 1, {opacity: 0}, 'float-up-lion');
                mtimeline.to(document.getElementById('heading-txt-small'), 1, {opacity: 0}, 'float-up-lion');
                mtimeline.to(document.getElementById('button-lion'), 1, {opacity: 0}, 'float-up-lion');
                mtimeline.to(document.getElementById('prj-info-wrapper'), 0, {visibility:'visible', immediateRender:false}, 'float-up-lion');
                mtimeline.to(document.getElementById('container-illustration'), 1, {
                    opacity: 1,
                    ease: Power1.easeIn,
                    delay: 2
                }, 'float-up-lion');
                mtimeline.to(document.getElementById('illustration'), 1, {
                    opacity: 1,
                    ease: Power1.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                mtimeline.to(document.getElementById('nav'), 0, {visibility:'visible', immediateRender:false}, 'float-up-lion');
                mtimeline.to(document.getElementById('nav'), 1, {opacity: 1, ease: Power3.easeOut, delay: 2.3}, 'float-up-lion');
                mtimeline.to(document.getElementById('slogan'), 1.2, {
                    y: '-50%',
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                mtimeline.to(document.getElementById('about-href'), 1.1, {
                    y: 0,
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                mtimeline.to(document.getElementById('social-fb'), 1, {
                    y: 0,
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                mtimeline.to(document.getElementById('social-tt'), 1.3, {y: 0, ease: Power3.easeOut}, 'float-up-lion');
                var slide_control = document.getElementsByClassName('slide-control');
                mtimeline.add(function () {
                    Slider.init();
                    setTimeout(function () {
                        mtimeline.set(slide_control[0], {className: '+=draw-arrow'});
                    }, 10);
                    setTimeout(function () {
                        mtimeline.set(slide_control[1], {className: '+=draw-arrow'});
                    }, 1000);
                    slide_control[0].addEventListener('click', function () {
                        Slider.prev();
                    })
                    slide_control[1].addEventListener('click', function () {
                        Slider.next();
                    })
                    body.on('swiperight', function() {
                        Slider.prev();
                    })
                    body.on('swipeleft', function() {
                        Slider.next();
                    })
                    StnButton.init(slide_control);
                    document.getElementById('home-page').removeChild(document.getElementById('container-lion'));
                }, 'float-up-lion+=1');
                mtimeline.to(slide_control, 1, {opacity: 1, ease: Power1.easeIn}, 'float-up-lion+=1');
                StnNavigation.detectNextPrev(mtimeline, 'scroll-btn');
                mtimeline.play();
            })()
        }
        else {
            // desktop's timeline
            (function() {
                "use strict";
                var container_lion, lion, container_ill;
                container_lion = document.getElementById('container-lion');
                container_lion.innerHTML = Home.DesktopLion;
                lion = document.getElementsByClassName('lion');

                container_ill = Raphael('container-illustration');
                container_ill.setViewBox(0, 0, 1920, 1080, true);
                container_ill.setSize('100%', '100%');
                Slider.setPaper(Slider.drawCresus(container_ill));
                //----------------------------
                Slider.slidesData.push(Slider.drawCresus(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawDurance(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawBYS(container_ill).hide());
                //------------------------------
                Slider.slidesData.push(Slider.drawClub75(container_ill).hide());
                //-----------------------------
                Slider.slidesData.push(Slider.drawRenault(container_ill).hide());


                if (typeof lion != 'undefined') {
                    var lion_qty_piece = lion.length,
                        type = 8,
                        type_instance = 1,
                        i = 0,
                        pieces_class = '';
                    if (lion_qty_piece > 0) {
                        for (i; i < lion_qty_piece; i++) {
                            pieces_class = 'recombine' + type_instance;
                            lion[i].classList.add(pieces_class);
                            type_instance == type ? type_instance = 1 : type_instance++;
                        }
                    }
                }

                // create timeline
                var timeline = new TimelineMax({paused: true}).kill();
                // add value into timeline
                timeline.add('lion', 0);
                timeline.add('triangle', 1.5);
                timeline.add('overlay', 2.5);
                timeline.add('heading', 3.5);
                timeline.add('sub-heading', 3.8);
                timeline.add('scroll-btn', 4.5);
                timeline.add('txt2-to-txt3', 5.5);
                timeline.add('float-up-lion', 6.5);


                timeline.addPause('txt2-to-txt3');
                timeline.addPause('float-up-lion');

                // specify timeline
                timeline.to(document.getElementById('overlay-lion'), 0.1, {opacity: 1}, 'lion');
                timeline.to(document.getElementById('container-lion'), 3, {opacity: 1, ease: Sine.easeInOut}, 'lion');
                timeline.from(document.getElementsByClassName('recombine1'), 3, {
                    x: '-1500',
                    y: '-1500',
                    scale: 2,
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine2'), 3, {
                    x: '-400',
                    y: '-1000',
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine3'), 3, {
                    x: '0',
                    y: '-1000',
                    scale: 2,
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine4'), 3, {
                    x: '600',
                    y: '-100',
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine5'), 3, {
                    x: '800',
                    y: '800',
                    scale: 2,
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine6'), 3, {
                    x: '-2000',
                    y: '-400',
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion')
                timeline.from(document.getElementsByClassName('recombine7'), 3, {
                    x: '-200',
                    y: '400',
                    scale: 2,
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');
                timeline.from(document.getElementsByClassName('recombine8'), 3, {
                    x: '-400',
                    y: '-400',
                    rotation: -45,
                    ease: Power2.easeOut
                }, 'lion');

                timeline.to(document.getElementById('container-triangle'), 2.5, {opacity: 1}, 'triangle');
                timeline.from(document.getElementById('triangle1'), 2.5, {
                    y: '100%',
                    rotation: 45,
                    ease: Power4.easeOut
                }, 'triangle');
                timeline.from(document.getElementById('triangle2'), 2.5, {
                    y: '100%',
                    rotation: 45,
                    ease: Power4.easeOut
                }, 'triangle');
                timeline.from(document.getElementById('triangle3'), 2.5, {
                    y: '100%',
                    rotation: -45,
                    ease: Power4.easeOut
                }, 'triangle');
                timeline.from(document.getElementById('triangle4'), 2.5, {y: '200%', ease: Power4.easeOut}, 'triangle');
                timeline.from(document.getElementById('triangle5'), 2.5, {y: '200%', ease: Power4.easeOut}, 'triangle');
                timeline.from(document.getElementById('triangle6'), 2.5, {
                    y: '200%',
                    rotation: -45,
                    ease: Power4.easeOut
                }, 'triangle');


                timeline.to(document.getElementById('heading'), 1, {opacity: 1, y: '0'}, 'heading');
                timeline.to(document.getElementById('heading-txt-small'), 1, {opacity: 1, y: '0'}, 'sub-heading');

                timeline.to(document.getElementById('button-lion'), 1, {opacity: 1}, 'scroll-btn');

                timeline.to(document.getElementById('txt2'), 1, {opacity: 0, y: '-50%'}, 'txt2-to-txt3');
                timeline.to(document.getElementById('txt3'), 1, {opacity: 1, y: '0'}, 'txt2-to-txt3');

                timeline.to(document.getElementsByClassName('recombine1'), 1, {
                    y: '-100%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine2'), 1.1, {
                    y: '-100%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine3'), 1.2, {
                    y: '-100%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine4'), 1.3, {
                    y: '-100%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine5'), 1.4, {
                    y: '-90%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine6'), 1.5, {
                    y: '-80%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine7'), 1.6, {
                    y: '-70%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(document.getElementsByClassName('recombine8'), 1.7, {
                    y: '-60%',
                    ease: Power1.easeIn,
                    force3D: true,
                    z: 0.1, /* add this for the jitter bug */
                    rotationZ: "0.01deg", /* add this for the jitter bug */
                }, 'float-up-lion');
                timeline.to(container_lion, 1.8, {opacity: 0, ease: Power1.easeOut, force3D: true,scaleX:1.001}, 'float-up-lion');
                timeline.to(document.getElementById('heading'), 1, {opacity: 0, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('heading-txt-small'), 1, {opacity: 0, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('button-lion'), 1, {opacity: 0, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('container-triangle'), 1.7, {opacity: 0}, 'float-up-lion');
                timeline.to(document.getElementById('triangle1'), 1.7, {y: '-100%', ease: Power1.easeIn, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('triangle2'), 1.7, {y: '-100%', ease: Power1.easeIn, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('triangle4'), 1.7, {y: '-100%', ease: Power1.easeIn, force3D: true}, 'float-up-lion');
                timeline.to(document.getElementById('triangle3'), 1.7, {y: '-100%', ease: Power1.easeIn}, 'float-up-lion');
                timeline.to(document.getElementById('triangle5'), 1.7, {y: '-100%', ease: Power1.easeIn}, 'float-up-lion');
                timeline.to(document.getElementById('triangle6'), 1.7, {y: '-100%', ease: Power1.easeIn}, 'float-up-lion');
                timeline.to(document.getElementById('overlay-lion'), 0.1, {opacity: 0}, 'float-up-lion');
                timeline.to(document.getElementById('prj-info-wrapper'), 0, {visibility:'visible', immediateRender:false}, 'float-up-lion');
                timeline.to(document.getElementById('container-illustration'), 2, {
                    opacity: 1,
                    ease: Power1.easeIn,
                    delay: 2
                }, 'float-up-lion');
                timeline.to(document.getElementById('illustration'), 2, {
                    opacity: 1,
                    ease: Power1.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                timeline.to(document.getElementById('nav'), 0, {visibility:'visible', immediateRender:false}, 'float-up-lion');
                timeline.to(document.getElementById('nav'), 1, {opacity: 1, ease: Power3.easeOut, delay: 2.3}, 'float-up-lion');
                timeline.to(document.getElementById('slogan'), 2.6, {
                    y: '-50%',
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                timeline.to(document.getElementById('about-href'), 2.3, {
                    y: 0,
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                timeline.to(document.getElementById('social-fb'), 2.9, {
                    y: 0,
                    ease: Power3.easeOut,
                    delay: 2.3
                }, 'float-up-lion');
                timeline.to(document.getElementById('social-tt'), 3, {y: 0, ease: Power3.easeOut, delay: 2.3}, 'float-up-lion');

                var slide_control = document.getElementsByClassName('slide-control');
                timeline.add(function () {
                    Slider.init();
                    setTimeout(function() {
                        "use strict";
                        slide_control[0].classList.add('draw-arrow');
                    }, 250)
                    setTimeout(function() {
                        "use strict";
                        slide_control[1].classList.add('draw-arrow');
                    }, 500);

                    slide_control[0].addEventListener('click', function () {
                        Slider.prev();
                    })
                    slide_control[1].addEventListener('click', function () {
                        Slider.next();
                    })

                    StnButton.init(slide_control);
                    document.getElementById('home-page').removeChild(document.getElementById('container-lion'));
                    container_lion, lion, container_ill;
                }, 'float-up-lion+=2.3');
                timeline.to(slide_control, 1, {opacity: 1, ease: Power1.easeIn}, 'float-up-lion+=2.3');

                StnNavigation.detectNextPrev(timeline, 'scroll-btn');

                timeline.play();
            })()
        }
    }
    if(document.getElementById('about-page') !== null) {
        (function() {
            "use strict";
            // create new timeline, it will be used to store all of animation inside 6 pages
            var timeline = About.getTimeline();
            // add label for some specific timeline, it should be human-readable name (for easily control)
            About.setLabel(timeline, 'page', 7, 3);
            About.specifyTimeline(timeline);
            About.setNavigation(timeline);

            timeline.play();

            // extra script for interaction
            var workWithUsBtn = document.getElementById('work-w-us');
            workWithUsBtn.addEventListener('click', function () {
                timeline.play()
            })
        })()

    }

    // show a special notification if user visit the page on mobile at the first time
    if (Util.isMobile()) {
        if(Util.getCookie('firstTime') == '') {
            Util.setCookie('firstTime', '1', 1);
            var box = document.getElementById(('mobile-notification'));
            box.style.display = 'block';
            document.getElementById('close-notification').onclick = function() {
                "use strict";
                box.style.display = 'none';
            }
        }
    }
    // preload image
    Home.preloadImages(
        'new_about/img1.jpg',
        'new_about/sututeam_2.png',
        'new_about/trigangle4.png',
        'new_about/logo/logo-drupal.png',
        'new_about/logo/logo-prestashop.png',
        'new_about/logo/logo-symfony.png',
        'new_about/logo/logo-magento.png',
        'new_about/logo/logo-wordpress.png',
        'new_about/logo/logo-android.png',
        'new_about/logo/logo-apple.png',
        'new_about/carousel/cresus.png',
        'new_about/carousel/durance.png',
        'new_about/carousel/bys.png',
        'new_about/carousel/club75.png',
        'new_about/carousel/renault.png'
    );
})
