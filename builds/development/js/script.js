

//------------------------------------------
StnNavigation = {
    /**
     * - Detect the direction that we next to control on a timeline of animation (go forwardly or backwardly)
     * - This function can detect the swipe/mousewheel direction and arrow keys
     * to control a timeline move to corespoing point
     * - Logic explaination (Assume we are on the current point)
     *      + If (swipe up || mouse scroll up || arrow up key) move timeline to a previous point
     *      + If (swipe down || mouse scroll down || arrow down key) move timeline to a next point 
     *      + Exceptional case (didn't match anything) return -1
     * 
     * @param {object} timeline - an object of Tween Timeline
     */
    detectNextPrev : function(timeline, start) {
        // mouse event
        $(window).bind('mousewheel DOMMouseScroll', function(event){
            // scroll up
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // if(StnNavigation.canReverse(timeline.currentLabel()) == false) return false;
                // console.log(timeline.currentLabel());
                // timeline.reverse();
                return;
            }
            // scroll down
            else {
                // console.log(timeline.currentLabel());
                timeline.play();
                return;
            }
        });

        // key down event
        $(window).keydown(function(e) {
            switch(e.which) {
                // arrow up key
                case 38:
                    // console.log(StnNavigation.canReverse(timeline.currentLabel()))
                    // if(StnNavigation.canReverse(timeline.currentLabel()) == false) return false;
                    // timeline.reverse();
                    return;
                // arrow down key
                case 40:
                    timeline.play();
                    return;
                // other keys
                default:
                    return -1;
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
        document.getElementById('button-lion').onclick = function() {
            "use strict";
            timeline.play();
        }
    },
    canReverse: function(label) {
        // return label != 'fade-up-cresus';
        return true;
    }
}
StnButton = {
    _el: [],
    _stroke: [],
    init: function(el) {
        this.setButton(el);
    },
    setButton: function(el) {
        if(el instanceof Object) {
            var arr = Array.from(el);
            var l = el.length,
                i = 0;
            for(i; i < l; i++) {
                this._el.push(arr[i]);
                this._stroke.push(this._el[i].getElementsByClassName('circle')[0]);
                this.bindClickEffect(this._el[i],  this._stroke[i]);
            }
        }
    },
    addStroke: function (el) {
        TweenLite.to(el, 0.5, {'stroke-dashoffset': '0', ease: Power1.easeOut})
    },
    removeStroke: function(el) {
        TweenLite.to(el, 0.5, {'stroke-dashoffset': '-3256px', ease: Power1.easeOut})
    },
    bindClickEffect: function (el, stroke) {
        var that = this;
        if (typeof el !== 'undefined' && typeof stroke !== 'undefined') {
            if (!Util.isMobile()) {
                el.onmouseover = function () {
                    stroke.style.strokeDashoffset = '3256px';
                    that.addStroke(stroke);
                }
                el.onmouseout = function () {
                    that.removeStroke(stroke);
                }
            }
        }
    }
}
Util = {
    isMobile: function () {
        "use strict";
        return document.body.clientWidth <= 1024;
    },
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

}


//------------------------------------------
/**
 * This class used some method from Home class.
 * @type {{timeline: undefined, minLength: number, medLength: number, maxLength: number, drawLetsRoarBgTxt: About.drawLetsRoarBgTxt, drawInTheBgTxt: About.drawInTheBgTxt, drawJungleBgTxt: About.drawJungleBgTxt, drawTogetherBgTxt: About.drawTogetherBgTxt, drawBgTxt: About.drawBgTxt, next: About.next, back: About.back, preparePages: About.preparePages, getTimeline: About.getTimeline, setLabel: About.setLabel, specifyTimeline: About.specifyTimeline, setNavigation: About.setNavigation}}
 */
var Home = {
    DesktopLion: ' <span class="lion"> <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b58f4f" stroke="#000000" d="M1092.1,523L867.3,338.1L993,321.1L1092.1,523Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"> </path> </svg> </span> <span class="lion"> <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#cc9c4a" stroke="#000000" d="M973.8,186.9L865.6999999999999,153.3L985.5999999999999,254.5L973.8,186.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg> </span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#996437" stroke="#000000" d="M1034.4,450.6L1081.9,554.9L979.5000000000001,529.6L1034.4,450.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#cca54e" stroke="#000000" d="M968.9,217L992.9,321.1L1101,279.40000000000003L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#dabd69" stroke="#000000" d="M1038.9,250.5L1065.3000000000002,292.6L1099.9,227.8L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#91633b" stroke="#000000" d="M1041.7,422.6L964.8,361L967.6999999999999,408.6L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#692719" stroke="#000000" d="M1026.5,702.7L974.1,653.3000000000001L987.9,771.6L1026.5,702.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#c8ad6d" stroke="#000000" d="M979.4,529.6L941.5,622.5L890.7,566.6L979.4,529.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8f5534" stroke="#000000" d="M1073.8,647.7L1020.1999999999999,643L1026.5,702.7L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#803922" stroke="#000000" d="M941.5,622.5L900.7,731.5L803.7,623.9L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#bc924b" stroke="#000000" d="M1193.5,538.4L1081.9,554.8L1146.4,629.0999999999999L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8e5533" stroke="#000000" d="M1034.4,450.6L979.4000000000001,529.6L967.7,408.6L1034.4,450.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#5a1f16" stroke="#000000" d="M987.9,771.6L900.6,731.5L974.1,653.3L987.9,771.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#521a13" stroke="#000000" d="M987.9,771.6L919.9,881.5L900.6,731.5L987.9,771.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#caa256" stroke="#000000" d="M903.8,490L800,495.2L798,393L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b69f53" stroke="#000000" d="M853.4,775.7L751,801.5L803.7,623.9L853.4,775.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8b4c2b" stroke="#000000" d="M853.4,775.7L803.6,623.8000000000001L900.6,731.4000000000001L853.4,775.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#965d3c" stroke="#000000" d="M1066.4,453.9L1081.8000000000002,554.8L1034.3000000000002,450.49999999999994L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e6d691" stroke="#000000" d="M1085.4,421.9L1162.9,428.79999999999995L1110.8000000000002,365.19999999999993L1085.4,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e2d288" stroke="#000000" d="M748,451.5L574,467.4L799.9,495.2L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b58f4f" stroke="#000000" d="M734.3,358.8L814.9,312.2L798,393L734.3,358.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#bba661" stroke="#000000" d="M799.9,495.2L838.9,582L803.6,623.9L799.9,495.2Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#d4d7b9" stroke="#000000" d="M1073.8,647.7L1144.3999999999999,638.3000000000001L1193.1999999999998,698.0000000000001L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8d4625" stroke="#000000" d="M1083.7,601.9L1073.8,647.8L1020.1999999999999,643.0999999999999L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a97f42" stroke="#000000" d="M1073.8,647.7L1126.8,669.2L1026.5,702.7L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="none" stroke="#e27529" d="M1144.4,638.3L1083.7,601.9L1146.4,629.1L1144.4,638.3Z" stroke-width="0.6" stroke-miterlimit="10" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-miterlimit: 10; stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#622720" stroke="#000000" d="M1144.4,638.3L1234.8000000000002,618.5L1146.4,629.1L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#0d0a0d" stroke="#000000" d="M1066.4,453.9L1034.3000000000002,450.59999999999997L1041.7000000000003,422.7L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a87e44" stroke="#000000" d="M1041.7,422.6L967.7,408.6L1034.4,450.6L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#cab160" stroke="#000000" d="M642.6,568.8L803.6,623.9L799.9,495.2L642.6,568.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b63f26" stroke="#000000" d="M1041.7,422.6L1085.7,421.90000000000003L1081,439.1L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#d24e27" stroke="#000000" d="M1041.7,422.6L1081,439.20000000000005L1066.4,453.90000000000003L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#783622" stroke="#000000" d="M941.5,622.5L1020.3,643.1L1026.6,702.8000000000001L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#904224" stroke="#000000" d="M1081.9,554.8L1083.7,601.8L979.4000000000001,529.5L1081.9,554.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a4663d" stroke="#000000" d="M941.5,622.5L900.7,731.5L974.2,653.3L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a4663d" stroke="#000000" d="M838.9,582L941.5,622.5L803.6,623.9L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#9f6e3a" stroke="#000000" d="M838.9,582L890.6,566.6L941.4,622.5L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#80391f" stroke="#000000" d="M1083.7,601.9L979.4000000000001,529.6L941.5000000000001,622.5L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#bf9c51" stroke="#000000" d="M903.8,490L890.6999999999999,566.6L979.4999999999999,529.6L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a88249" stroke="#000000" d="M903.8,490L800,495.2L890.7,566.6L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#ba8f4b" stroke="#000000" d="M838.9,582L799.9,495.2L890.6,566.6L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#794b42" stroke="#000000" d="M857.6,240.5L652.5,186.9L726.1,260.5L857.6,240.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#996a36" stroke="#000000" d="M941.5,622.5L1083.7,601.9L1020.2,643.1L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#bda565" stroke="#000000" d="M1193.5,538.4L1172,446.4L1267.8,531.9L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#ac7f46" stroke="#000000" d="M748,451.5L800,495.2L798,393L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a4663d" stroke="#000000" d="M748,451.5L798,393L635.4,401.4L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a4663d" stroke="#000000" d="M618,355.5L734.2,358.8L798,393L618,355.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#572023" stroke="#000000" d="M673.5,287.1L734.3,358.8L814.9,312.2L673.5,287.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b78645" stroke="#000000" d="M724.6,259.7L931.3,230L866.1999999999999,341.6L724.6,259.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b4904b" stroke="#000000" d="M993,321.1L1115.1,321.6L1110.8,365.3L993,321.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b4863e" stroke="#000000" d="M993,321.1L1115.1,321.6L1065.3,292.6L993,321.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#ceca9a" stroke="#000000" d="M1116.5,450.1L1081.9,554.8000000000001L1066.5,453.9000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e5ce80" stroke="#000000" d="M1065.3,292.6L1099.8999999999999,227.8L1115.1,321.6L1065.3,292.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#762e1e" stroke="#000000" d="M968.9,217L927.6999999999999,330L992.9,321L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#d6be75" stroke="#000000" d="M857.6,240.5L860.1,306.5L927.7,330.1L857.6,240.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a26e36" stroke="#000000" d="M1063.2,690.1L1045.3,743.8000000000001L1026.6,702.8000000000001L1063.2,690.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#fff2c8" stroke="#000000" d="M798,393L860.2,306.5L903.8,490L798,393Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#9b7040" stroke="#000000" d="M979.4,529.6L967.6999999999999,408.6L903.8,490L979.4,529.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#dcc093" stroke="#000000" d="M1158.3,370.5L1115.1,321.5L1110.8,365.2L1158.3,370.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#ac8149" stroke="#000000" d="M1207.1,592.1L1146.3999999999999,629.1L1193.4999999999998,538.4L1207.1,592.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8a472c" stroke="#000000" d="M860.2,306.5L866.3000000000001,393.1L926.7,376.8L860.2,306.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#ac8245" stroke="#000000" d="M926.6,376.7L927.7,330L860.1,306.4L926.6,376.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#865034" stroke="#000000" d="M927.8,330.1L965.6999999999999,361.90000000000003L926.5999999999999,376.70000000000005L927.8,330.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e9e3d7" stroke="#000000" d="M1162.9,428.8L1187.4,404.90000000000003L1158.3000000000002,370.50000000000006L1162.9,428.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b17d4e" stroke="#000000" d="M1110.8,365.2L1158.3,370.5L1162.8999999999999,428.8L1110.8,365.2Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#cdc584" stroke="#000000" d="M1041.7,422.6L993,321.1L1110.9,365.3L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b68f4f" stroke="#000000" d="M1041.7,422.6L1085.7,421.90000000000003L1110.8,365.20000000000005L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#f6e1b2" stroke="#000000" d="M1038.9,250.5L1100,227.7L1078.3,189.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#d7dbb6" stroke="#000000" d="M1039,183.1L1025.5,147.6L1078.2,189.7L1039,183.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a99254" stroke="#000000" d="M1038.9,250.5L970.8000000000001,145.6L1078.2,189.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e2d180" stroke="#000000" d="M968.9,217L941.6999999999999,138L978.4999999999999,157.5L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#7e412e" stroke="#000000" d="M1038.9,250.5L968.9,217L978.4,157.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#eadd8c" stroke="#000000" d="M945.8,150.8L895,134.9L968.9,217L945.8,150.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#632c2c" stroke="#000000" d="M923.2,201.9L791.8000000000001,168.3L857.7,240.5L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#7e2d1e" stroke="#000000" d="M1083.7,601.9L1073.8,647.8L1144.3999999999999,638.4L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#aa7236" stroke="#000000" d="M1083.7,601.9L1081.9,554.9L1146.4,629.1999999999999L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#fcf9ed" stroke="#000000" d="M1144.4,638.3L1234.8000000000002,618.5L1193.2000000000003,697.9L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#24110e" stroke="#000000" d="M1144.4,638.3L1083.7,601.9L1146.4,629.1L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="none" stroke="#e27529" d="M1144.4,638.3L1234.8000000000002,618.5L1146.4,629.1L1144.4,638.3Z" stroke-width="0.6" stroke-miterlimit="10" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-miterlimit: 10; stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#461d22" stroke="#000000" d="M1193.5,538.4L1248.2,540.8L1245,569.0999999999999L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#694052" stroke="#000000" d="M1268,532.7L1248.2,540.9000000000001L1245,569.2L1268,532.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#9d7541" stroke="#000000" d="M1116.5,450.1L1081.9,554.8000000000001L1193.5,538.4000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b5a164" stroke="#000000" d="M1116.5,450.1L1172,446.40000000000003L1193.5,538.4000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#0d0a0d" stroke="#000000" d="M1085.8,421.9L1116.5,450.09999999999997L1081.1,439.29999999999995L1085.8,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#290f0f" stroke="#000000" d="M1066.4,453.9L1116.4,450.09999999999997L1081,439.29999999999995L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#cdb386" stroke="#000000" d="M1085.8,421.9L1116.5,450.09999999999997L1172,446.4L1085.8,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#894f3a" stroke="#000000" d="M1172,446.4L1162.9,428.79999999999995L1085.8000000000002,421.9L1172,446.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#e0d6c1" stroke="#000000" d="M1177.9,430.6L1172,446.5L1268,532.7L1177.9,430.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b38e60" stroke="#000000" d="M1172,446.4L1187.4,404.9L1162.9,428.79999999999995L1172,446.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b9b67d" stroke="#000000" d="M1245,569.1L1146.3,629.1L1234.7,618.5L1245,569.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#8a5431" stroke="#000000" d="M1234.8,618.5L1268,532.6L1245,569L1234.8,618.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#a0804e" stroke="#000000" d="M1207.1,592.1L1193.5,538.4L1245,569.1L1207.1,592.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#c1975a" stroke="#000000" d="M967.7,408.6L903.8,490L866.3,393.1L967.7,408.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b07c41" stroke="#000000" d="M866.3,393.1L926.6999999999999,376.8L966.0999999999999,408.8L866.3,393.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#561820" stroke="#000000" d="M923.2,201.9L857.7,240.5L927.8000000000001,330.1L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#7b3928" stroke="#000000" d="M860.2,306.5L814.9000000000001,312.2L798,393L860.2,306.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span> <span class="lion"><svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#401716" stroke="#000000" d="M923.2,201.9L927.8000000000001,330.1L969.0000000000001,217.10000000000002L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path></svg></span>',
    MobileLion: '<span class="lion"> <svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet"> <path fill="#b58f4f" stroke="#000000" d="M1092.1,523L867.3,338.1L993,321.1L1092.1,523Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"> </path> <path fill="#cc9c4a" stroke="#000000" d="M973.8,186.9L865.6999999999999,153.3L985.5999999999999,254.5L973.8,186.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#996437" stroke="#000000" d="M1034.4,450.6L1081.9,554.9L979.5000000000001,529.6L1034.4,450.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#cca54e" stroke="#000000" d="M968.9,217L992.9,321.1L1101,279.40000000000003L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#dabd69" stroke="#000000" d="M1038.9,250.5L1065.3000000000002,292.6L1099.9,227.8L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#91633b" stroke="#000000" d="M1041.7,422.6L964.8,361L967.6999999999999,408.6L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#692719" stroke="#000000" d="M1026.5,702.7L974.1,653.3000000000001L987.9,771.6L1026.5,702.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#c8ad6d" stroke="#000000" d="M979.4,529.6L941.5,622.5L890.7,566.6L979.4,529.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8f5534" stroke="#000000" d="M1073.8,647.7L1020.1999999999999,643L1026.5,702.7L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#803922" stroke="#000000" d="M941.5,622.5L900.7,731.5L803.7,623.9L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#bc924b" stroke="#000000" d="M1193.5,538.4L1081.9,554.8L1146.4,629.0999999999999L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8e5533" stroke="#000000" d="M1034.4,450.6L979.4000000000001,529.6L967.7,408.6L1034.4,450.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#5a1f16" stroke="#000000" d="M987.9,771.6L900.6,731.5L974.1,653.3L987.9,771.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#521a13" stroke="#000000" d="M987.9,771.6L919.9,881.5L900.6,731.5L987.9,771.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#caa256" stroke="#000000" d="M903.8,490L800,495.2L798,393L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b69f53" stroke="#000000" d="M853.4,775.7L751,801.5L803.7,623.9L853.4,775.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8b4c2b" stroke="#000000" d="M853.4,775.7L803.6,623.8000000000001L900.6,731.4000000000001L853.4,775.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#965d3c" stroke="#000000" d="M1066.4,453.9L1081.8000000000002,554.8L1034.3000000000002,450.49999999999994L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e6d691" stroke="#000000" d="M1085.4,421.9L1162.9,428.79999999999995L1110.8000000000002,365.19999999999993L1085.4,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e2d288" stroke="#000000" d="M748,451.5L574,467.4L799.9,495.2L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b58f4f" stroke="#000000" d="M734.3,358.8L814.9,312.2L798,393L734.3,358.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#bba661" stroke="#000000" d="M799.9,495.2L838.9,582L803.6,623.9L799.9,495.2Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#d4d7b9" stroke="#000000" d="M1073.8,647.7L1144.3999999999999,638.3000000000001L1193.1999999999998,698.0000000000001L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8d4625" stroke="#000000" d="M1083.7,601.9L1073.8,647.8L1020.1999999999999,643.0999999999999L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a97f42" stroke="#000000" d="M1073.8,647.7L1126.8,669.2L1026.5,702.7L1073.8,647.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="none" stroke="#e27529" d="M1144.4,638.3L1083.7,601.9L1146.4,629.1L1144.4,638.3Z" stroke-width="0.6" stroke-miterlimit="10" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-miterlimit: 10; stroke-opacity: 1;"></path> <path fill="#622720" stroke="#000000" d="M1144.4,638.3L1234.8000000000002,618.5L1146.4,629.1L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#0d0a0d" stroke="#000000" d="M1066.4,453.9L1034.3000000000002,450.59999999999997L1041.7000000000003,422.7L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a87e44" stroke="#000000" d="M1041.7,422.6L967.7,408.6L1034.4,450.6L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#cab160" stroke="#000000" d="M642.6,568.8L803.6,623.9L799.9,495.2L642.6,568.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b63f26" stroke="#000000" d="M1041.7,422.6L1085.7,421.90000000000003L1081,439.1L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#d24e27" stroke="#000000" d="M1041.7,422.6L1081,439.20000000000005L1066.4,453.90000000000003L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#783622" stroke="#000000" d="M941.5,622.5L1020.3,643.1L1026.6,702.8000000000001L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#904224" stroke="#000000" d="M1081.9,554.8L1083.7,601.8L979.4000000000001,529.5L1081.9,554.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a4663d" stroke="#000000" d="M941.5,622.5L900.7,731.5L974.2,653.3L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a4663d" stroke="#000000" d="M838.9,582L941.5,622.5L803.6,623.9L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#9f6e3a" stroke="#000000" d="M838.9,582L890.6,566.6L941.4,622.5L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#80391f" stroke="#000000" d="M1083.7,601.9L979.4000000000001,529.6L941.5000000000001,622.5L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#bf9c51" stroke="#000000" d="M903.8,490L890.6999999999999,566.6L979.4999999999999,529.6L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a88249" stroke="#000000" d="M903.8,490L800,495.2L890.7,566.6L903.8,490Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#ba8f4b" stroke="#000000" d="M838.9,582L799.9,495.2L890.6,566.6L838.9,582Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#794b42" stroke="#000000" d="M857.6,240.5L652.5,186.9L726.1,260.5L857.6,240.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#996a36" stroke="#000000" d="M941.5,622.5L1083.7,601.9L1020.2,643.1L941.5,622.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#bda565" stroke="#000000" d="M1193.5,538.4L1172,446.4L1267.8,531.9L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#ac7f46" stroke="#000000" d="M748,451.5L800,495.2L798,393L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a4663d" stroke="#000000" d="M748,451.5L798,393L635.4,401.4L748,451.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a4663d" stroke="#000000" d="M618,355.5L734.2,358.8L798,393L618,355.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#572023" stroke="#000000" d="M673.5,287.1L734.3,358.8L814.9,312.2L673.5,287.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b78645" stroke="#000000" d="M724.6,259.7L931.3,230L866.1999999999999,341.6L724.6,259.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b4904b" stroke="#000000" d="M993,321.1L1115.1,321.6L1110.8,365.3L993,321.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b4863e" stroke="#000000" d="M993,321.1L1115.1,321.6L1065.3,292.6L993,321.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#ceca9a" stroke="#000000" d="M1116.5,450.1L1081.9,554.8000000000001L1066.5,453.9000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e5ce80" stroke="#000000" d="M1065.3,292.6L1099.8999999999999,227.8L1115.1,321.6L1065.3,292.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#762e1e" stroke="#000000" d="M968.9,217L927.6999999999999,330L992.9,321L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#d6be75" stroke="#000000" d="M857.6,240.5L860.1,306.5L927.7,330.1L857.6,240.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a26e36" stroke="#000000" d="M1063.2,690.1L1045.3,743.8000000000001L1026.6,702.8000000000001L1063.2,690.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#fff2c8" stroke="#000000" d="M798,393L860.2,306.5L903.8,490L798,393Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#9b7040" stroke="#000000" d="M979.4,529.6L967.6999999999999,408.6L903.8,490L979.4,529.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#dcc093" stroke="#000000" d="M1158.3,370.5L1115.1,321.5L1110.8,365.2L1158.3,370.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#ac8149" stroke="#000000" d="M1207.1,592.1L1146.3999999999999,629.1L1193.4999999999998,538.4L1207.1,592.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8a472c" stroke="#000000" d="M860.2,306.5L866.3000000000001,393.1L926.7,376.8L860.2,306.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#ac8245" stroke="#000000" d="M926.6,376.7L927.7,330L860.1,306.4L926.6,376.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#865034" stroke="#000000" d="M927.8,330.1L965.6999999999999,361.90000000000003L926.5999999999999,376.70000000000005L927.8,330.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e9e3d7" stroke="#000000" d="M1162.9,428.8L1187.4,404.90000000000003L1158.3000000000002,370.50000000000006L1162.9,428.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b17d4e" stroke="#000000" d="M1110.8,365.2L1158.3,370.5L1162.8999999999999,428.8L1110.8,365.2Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#cdc584" stroke="#000000" d="M1041.7,422.6L993,321.1L1110.9,365.3L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b68f4f" stroke="#000000" d="M1041.7,422.6L1085.7,421.90000000000003L1110.8,365.20000000000005L1041.7,422.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#f6e1b2" stroke="#000000" d="M1038.9,250.5L1100,227.7L1078.3,189.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#d7dbb6" stroke="#000000" d="M1039,183.1L1025.5,147.6L1078.2,189.7L1039,183.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a99254" stroke="#000000" d="M1038.9,250.5L970.8000000000001,145.6L1078.2,189.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e2d180" stroke="#000000" d="M968.9,217L941.6999999999999,138L978.4999999999999,157.5L968.9,217Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#7e412e" stroke="#000000" d="M1038.9,250.5L968.9,217L978.4,157.6L1038.9,250.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#eadd8c" stroke="#000000" d="M945.8,150.8L895,134.9L968.9,217L945.8,150.8Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#632c2c" stroke="#000000" d="M923.2,201.9L791.8000000000001,168.3L857.7,240.5L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#7e2d1e" stroke="#000000" d="M1083.7,601.9L1073.8,647.8L1144.3999999999999,638.4L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#aa7236" stroke="#000000" d="M1083.7,601.9L1081.9,554.9L1146.4,629.1999999999999L1083.7,601.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#fcf9ed" stroke="#000000" d="M1144.4,638.3L1234.8000000000002,618.5L1193.2000000000003,697.9L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#24110e" stroke="#000000" d="M1144.4,638.3L1083.7,601.9L1146.4,629.1L1144.4,638.3Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="none" stroke="#e27529" d="M1144.4,638.3L1234.8000000000002,618.5L1146.4,629.1L1144.4,638.3Z" stroke-width="0.6" stroke-miterlimit="10" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-miterlimit: 10; stroke-opacity: 1;"></path> <path fill="#461d22" stroke="#000000" d="M1193.5,538.4L1248.2,540.8L1245,569.0999999999999L1193.5,538.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#694052" stroke="#000000" d="M1268,532.7L1248.2,540.9000000000001L1245,569.2L1268,532.7Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#9d7541" stroke="#000000" d="M1116.5,450.1L1081.9,554.8000000000001L1193.5,538.4000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b5a164" stroke="#000000" d="M1116.5,450.1L1172,446.40000000000003L1193.5,538.4000000000001L1116.5,450.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#0d0a0d" stroke="#000000" d="M1085.8,421.9L1116.5,450.09999999999997L1081.1,439.29999999999995L1085.8,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#290f0f" stroke="#000000" d="M1066.4,453.9L1116.4,450.09999999999997L1081,439.29999999999995L1066.4,453.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#cdb386" stroke="#000000" d="M1085.8,421.9L1116.5,450.09999999999997L1172,446.4L1085.8,421.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#894f3a" stroke="#000000" d="M1172,446.4L1162.9,428.79999999999995L1085.8000000000002,421.9L1172,446.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#e0d6c1" stroke="#000000" d="M1177.9,430.6L1172,446.5L1268,532.7L1177.9,430.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b38e60" stroke="#000000" d="M1172,446.4L1187.4,404.9L1162.9,428.79999999999995L1172,446.4Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b9b67d" stroke="#000000" d="M1245,569.1L1146.3,629.1L1234.7,618.5L1245,569.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#8a5431" stroke="#000000" d="M1234.8,618.5L1268,532.6L1245,569L1234.8,618.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#a0804e" stroke="#000000" d="M1207.1,592.1L1193.5,538.4L1245,569.1L1207.1,592.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#c1975a" stroke="#000000" d="M967.7,408.6L903.8,490L866.3,393.1L967.7,408.6Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#b07c41" stroke="#000000" d="M866.3,393.1L926.6999999999999,376.8L966.0999999999999,408.8L866.3,393.1Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#561820" stroke="#000000" d="M923.2,201.9L857.7,240.5L927.8000000000001,330.1L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#7b3928" stroke="#000000" d="M860.2,306.5L814.9000000000001,312.2L798,393L860.2,306.5Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> <path fill="#401716" stroke="#000000" d="M923.2,201.9L927.8000000000001,330.1L969.0000000000001,217.10000000000002L923.2,201.9Z" stroke-width="0" stroke-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-opacity: 1;"></path> </svg></span>',
    getPaperSingleton: function (id) {
        "use strict";
        if (!_paper) {
            var _paper = Raphael(id);
            _paper.setViewBox(0, 0, 1920, 1080, true);
            _paper.setSize('100%', '100%');
        }
        return _paper;
    },
    preloadImages: function() {
        var baseUrl = 'images/';
        var images = [];
        for(var i = 0; i < Home.preloadImages.arguments.length; i ++) {
            images[i] = new Image();
            images[i].src = baseUrl + Home.preloadImages.arguments[i];
        }
    }
}


//------------------------------------------
var About = {
    timeline: undefined,
    minLength: 1, /* the length of time for an animation (minimum)*/
    medLength: 2.9, /* the length of time for an animation (medium)*/
    maxLength: 3, /* the length of time for an animation (maximum) */
    drawLetsRoarBgTxt: function (rsr) {
        "use strict";
        rsr.setStart();
        rsr.path("M6.5,415.8h53.4v145.8h93.2v46.8H6.5V415.8z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_b');
        rsr.path("M197.8,415.8h154.6v45.4h-102v29.1h92.4v42.1h-92.4V563h103.4v45.4H197.8V415.8z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_c');
        rsr.path("M452.7,462.6H395v-46.8h168.8v46.8h-57.8v145.8h-53.3V462.6z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_d');
        rsr.path("M611.4,415.8h57.2v1.4l-34.9,97.4h-28.3L611.4,415.8z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_e');
        rsr.path("M792.9,611.6c-17.2,0-33.6-2.7-49.1-8c-15.5-5.3-29.2-13.4-41.1-24.1l29.7-35.6   c19.3,15.4,40.1,23.1,62.4,23.1c7.1,0,12.6-1.1,16.4-3.4c3.8-2.3,5.6-5.5,5.6-9.8v-0.5c0-2-0.5-3.8-1.4-5.4   c-0.9-1.6-2.6-3.1-5.1-4.5c-2.5-1.5-5.8-2.9-9.9-4.3c-4.1-1.4-9.5-2.8-16.1-4.3c-10.3-2.4-19.8-5-28.6-7.8c-8.8-2.8-16.5-6.5-23-11   c-6.5-4.5-11.6-10.1-15.4-16.7c-3.8-6.7-5.6-15-5.6-24.8V474c0-9,1.7-17.2,5.1-24.7c3.4-7.5,8.3-14,14.8-19.5   c6.5-5.5,14.3-9.7,23.5-12.8c9.2-3,19.5-4.5,31.1-4.5c16.5,0,31.2,2.2,44.1,6.5c12.9,4.3,24.6,10.7,35.1,19.2l-26.7,37.8   c-8.8-6.2-17.8-11-27.1-14.2c-9.3-3.2-18.2-4.8-26.8-4.8c-6.4,0-11.2,1.2-14.4,3.6c-3.2,2.4-4.8,5.3-4.8,8.8v0.5   c0,2.2,0.5,4.1,1.5,5.8c1,1.6,2.8,3.2,5.2,4.5s5.9,2.7,10.2,4.1c4.3,1.4,9.8,2.8,16.4,4.3c11,2.4,20.9,5.2,29.8,8.4   c8.9,3.2,16.5,7.1,22.7,11.7c6.2,4.6,11,10.1,14.3,16.6c3.3,6.5,5,14.2,5,23.2v0.6c0,9.9-1.9,18.7-5.6,26.4   c-3.8,7.7-9,14.2-15.8,19.6c-6.8,5.4-14.9,9.5-24.5,12.4C815.3,610.2,804.7,611.6,792.9,611.6z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_f');
        rsr.path("M1028.3,415.8h91c14.8,0,27.4,1.8,37.7,5.5c10.3,3.7,18.6,8.8,25,15.4   c11.4,11,17,25.9,17,44.8v0.5c0,14.9-3.6,27.1-10.7,36.9c-7.1,9.7-16.8,17.1-28.9,22.3l45.9,67.1h-61.6l-38.8-58.3h-0.6h-22.8v58.3   h-53.4V415.8z M1116.9,508.2c9.2,0,16.2-2.1,21.2-6.2c4.9-4.1,7.4-9.7,7.4-16.6v-0.6c0-7.7-2.6-13.4-7.7-17.2   c-5.1-3.8-12.2-5.6-21.2-5.6h-34.9v46.2H1116.9z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_g');
        rsr.path("M1346.7,612.2c-14.8,0-28.6-2.6-41.3-7.8c-12.6-5.2-23.6-12.3-32.7-21.3   c-9.2-9-16.4-19.5-21.6-31.6c-5.2-12.1-7.8-25-7.8-38.8v-0.5c0-13.8,2.6-26.7,7.8-38.9c5.2-12.2,12.5-22.8,21.9-31.9   c9.3-9.1,20.3-16.2,33-21.5c12.6-5.2,26.4-7.8,41.3-7.8c14.8,0,28.6,2.6,41.3,7.8c12.6,5.2,23.6,12.3,32.7,21.3   c9.2,9,16.4,19.5,21.6,31.6c5.2,12.1,7.8,25,7.8,38.8v0.5c0,13.8-2.6,26.7-7.8,38.9c-5.2,12.2-12.5,22.8-21.9,31.9   c-9.3,9.1-20.3,16.2-33,21.5C1375.3,609.6,1361.6,612.2,1346.7,612.2z M1347.1,564.1c7.4,0,14.1-1.4,20.1-4.1s11.2-6.5,15.4-11.1   c4.2-4.7,7.5-10.1,9.9-16.4c2.4-6.2,3.6-12.8,3.6-19.8v-0.5c0-7-1.2-13.6-3.6-19.8c-2.4-6.2-5.8-11.7-10.2-16.5   c-4.4-4.8-9.7-8.6-15.7-11.4c-6.1-2.8-12.8-4.3-20.1-4.3c-7.4,0-14,1.4-20,4.1c-6,2.8-11.1,6.5-15.4,11.1   c-4.3,4.7-7.6,10.1-9.9,16.4c-2.3,6.2-3.4,12.8-3.4,19.8v0.5c0,7,1.2,13.6,3.6,19.8c2.4,6.2,5.7,11.7,10.1,16.5   c4.3,4.8,9.5,8.6,15.6,11.4C1333.1,562.7,1339.8,564.1,1347.1,564.1z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_h');
        rsr.path("M1557.1,414.5h51.4l81.9,193.9h-57.2l-14-34.4H1545l-13.8,34.4h-56.1L1557.1,414.5z    M1603.9,532.7l-21.4-54.7l-21.7,54.7H1603.9z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_i');
        rsr.path("M1733.5,415.8h91c14.8,0,27.4,1.8,37.7,5.5c10.3,3.7,18.6,8.8,25,15.4   c11.4,11,17,25.9,17,44.8v0.5c0,14.9-3.6,27.1-10.7,36.9c-7.1,9.7-16.8,17.1-28.9,22.3l45.9,67.1H1849l-38.8-58.3h-0.6h-22.8v58.3   h-53.4V415.8z M1822,508.2c9.2,0,16.2-2.1,21.2-6.2c4.9-4.1,7.4-9.7,7.4-16.6v-0.6c0-7.7-2.6-13.4-7.7-17.2   c-5.1-3.8-12.2-5.6-21.2-5.6h-34.9v46.2H1822z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_j');
        return rsr.setFinish();
    },
    drawInTheBgTxt: function (rsr) {
        "use strict";
        rsr.setStart();
        rsr.path("M5.3,320.5h42.1v151.2H5.3V320.5z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_b');
        rsr.path("M97.3,320.5h39.2l62.3,79.9v-79.9H240v151.2h-36.8l-64.7-82.9v82.9H97.3V320.5z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_c');
        rsr.path("M406.8,357.2h-45.4v-36.7h132.6v36.7h-45.4v114.5h-41.9V357.2z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_d');
        rsr.path("M529.2,320.5h41.9v56.6h53.8v-56.6h41.9v151.2h-41.9v-57.5h-53.8v57.5h-41.9V320.5z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_e');
        rsr.path("M716.4,320.5h121.4v35.6h-80.1V379h72.6v33h-72.6v24h81.2v35.6H716.4V320.5z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_f');
        rsr.setFinish();
    },
    drawJungleBgTxt: function (rsr) {
        "use strict";
        rsr.setStart();
        rsr.path("M975.5,591.8c-6.6,0-12.6-0.6-17.9-1.9c-5.3-1.3-10.2-3.1-14.5-5.4c-4.3-2.3-8.2-5-11.7-8.1 c-3.5-3.1-6.5-6.4-9.1-10l27-25.5c3.7,4.5,7.5,7.9,11.1,10.4c3.7,2.5,7.8,3.7,12.4,3.7c5.3,0,9.5-1.8,12.6-5.3 c3.1-3.5,4.6-8.8,4.6-15.9V438h41.7v95.9c0,9.5-1.2,17.7-3.7,24.6c-2.5,6.9-6.2,12.9-11.2,17.9c-5,5-11.1,8.9-18,11.4 C991.9,590.5,984.1,591.8,975.5,591.8z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_b');
        rsr.path("M1148.8,592c-10.8,0-20.5-1.4-29.2-4.1s-16-6.9-22-12.6c-6-5.7-10.7-12.9-13.9-21.6 c-3.2-8.7-4.9-19-4.9-30.8V438h42.8v84c0,10.9,2.5,19,7.5,24.3c5,5.3,11.7,7.9,20.1,7.9c8.4,0,15.1-2.5,20.1-7.6 c5-5,7.5-12.9,7.5-23.5V438h42.8v83.8c0,12.2-1.7,22.8-5.1,31.6c-3.4,8.9-8.1,16.1-14.3,21.8c-6.1,5.7-13.5,9.9-22.2,12.6 C1169.4,590.6,1159.6,592,1148.8,592z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_c');
        rsr.path("M1267.7,438h39.2l62.3,79.9V438h41.3v151.2h-36.8l-64.7-82.9v82.9h-41.3V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_d');
        rsr.path("M1535.4,592.2c-11.8,0-22.7-1.9-32.7-5.7c-10-3.8-18.7-9.2-26-16.1s-13.1-15.2-17.3-24.7 c-4.2-9.6-6.3-20.1-6.3-31.6v-0.4c0-10.9,2-21.2,6.1-30.8c4.1-9.6,9.7-17.9,16.9-25.1c7.2-7.1,15.7-12.7,25.7-16.7 c10-4,20.8-6,32.5-6c13.4,0,24.9,1.9,34.7,5.8c9.7,3.9,18.6,9.3,26.7,16.2l-24.6,29.6c-5.5-4.6-11.1-8.1-16.7-10.6 c-5.7-2.4-12.3-3.7-19.8-3.7c-5.5,0-10.5,1.1-15.2,3.2c-4.7,2.2-8.7,5.1-12.2,8.9c-3.5,3.7-6.2,8.1-8.2,13.2c-2,5-3,10.4-3,16.2 v0.4c0,6,1,11.7,3,16.8c2,5.2,4.9,9.6,8.6,13.3c3.7,3.7,8,6.6,13,8.6c5,2.1,10.5,3.1,16.6,3.1c9.8,0,17.9-2.1,24.3-6.3v-18.4h-29.8 v-30.7h69.6v68c-8.1,6.6-17.6,12.2-28.5,16.6C1561.6,590,1549.2,592.2,1535.4,592.2z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_e');
        rsr.path("M1647.5,438h41.9v114.5h73.2v36.7h-115.1V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_f');
        rsr.path("M1797.5,438h121.4v35.6h-80.1v22.9h72.6v33h-72.6v24h81.2v35.6h-122.5V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_g');
        return rsr.setFinish();
    },
    drawTogetherBgTxt: function (rsr) {
        "use strict";
        rsr.setStart();
        rsr.path("M317.7,474.7h-45.4V438h132.6v36.7h-45.4v114.5h-41.9V474.7z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_b');
        rsr.path("M513.9,592.2c-11.7,0-22.5-2.1-32.4-6.2c-9.9-4.1-18.5-9.7-25.7-16.7 c-7.2-7.1-12.9-15.3-17-24.8s-6.2-19.7-6.2-30.5v-0.4c0-10.8,2.1-21,6.2-30.6c4.1-9.6,9.8-17.9,17.2-25.1 c7.3-7.1,16-12.7,25.9-16.8s20.7-6.2,32.4-6.2s22.5,2.1,32.4,6.2s18.5,9.7,25.7,16.7c7.2,7.1,12.9,15.3,17,24.8 c4.1,9.5,6.2,19.7,6.2,30.5v0.4c0,10.8-2.1,21-6.2,30.6c-4.1,9.6-9.8,17.9-17.2,25.1c-7.3,7.1-16,12.7-25.9,16.8 C536.4,590.2,525.6,592.2,513.9,592.2z M514.2,554.4c5.8,0,11-1.1,15.8-3.2c4.8-2.2,8.8-5.1,12.1-8.7c3.3-3.7,5.9-8,7.8-12.9 c1.9-4.9,2.8-10.1,2.8-15.6v-0.4c0-5.5-0.9-10.7-2.8-15.6c-1.9-4.9-4.5-9.2-8-13c-3.5-3.7-7.6-6.7-12.3-9c-4.8-2.2-10-3.3-15.8-3.3 c-5.8,0-11,1.1-15.7,3.2c-4.7,2.2-8.7,5.1-12.1,8.7s-6,8-7.8,12.9c-1.8,4.9-2.7,10.1-2.7,15.6v0.4c0,5.5,0.9,10.7,2.8,15.6 c1.9,4.9,4.5,9.2,7.9,13c3.4,3.7,7.5,6.7,12.2,9C503.2,553.3,508.5,554.4,514.2,554.4z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_c');
        rsr.path("M713,592.2c-11.8,0-22.7-1.9-32.7-5.7c-10-3.8-18.7-9.2-26-16.1 c-7.3-6.9-13.1-15.2-17.3-24.7c-4.2-9.6-6.3-20.1-6.3-31.6v-0.4c0-10.9,2-21.2,6.1-30.8c4.1-9.6,9.7-17.9,16.9-25.1 c7.2-7.1,15.7-12.7,25.7-16.7c10-4,20.8-6,32.5-6c13.4,0,24.9,1.9,34.7,5.8c9.7,3.9,18.6,9.3,26.7,16.2l-24.6,29.6 c-5.5-4.6-11.1-8.1-16.7-10.6c-5.7-2.4-12.3-3.7-19.8-3.7c-5.5,0-10.6,1.1-15.2,3.2c-4.7,2.2-8.7,5.1-12.2,8.9 c-3.5,3.7-6.2,8.1-8.2,13.2c-2,5-3,10.4-3,16.2v0.4c0,6,1,11.7,3,16.8c2,5.2,4.9,9.6,8.6,13.3c3.7,3.7,8,6.6,13,8.6 c5,2.1,10.5,3.1,16.6,3.1c9.8,0,17.9-2.1,24.3-6.3v-18.4h-29.8v-30.7h69.6v68c-8.1,6.6-17.6,12.2-28.5,16.6 C739.2,590,726.8,592.2,713,592.2z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_d');
        rsr.path("M825.1,438h121.4v35.6h-80.1v22.9h72.6v33h-72.6v24h81.2v35.6H825.1V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_e');
        rsr.path("M1025.1,474.7h-45.4V438h132.6v36.7H1067v114.5h-41.9V474.7z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_f');
        rsr.path("M1147.5,438h41.9v56.6h53.8V438h41.9v151.2h-41.9v-57.5h-53.8v57.5h-41.9V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_g');
        rsr.path("M1334.8,438h121.4v35.6H1376v22.9h72.6v33H1376v24h81.2v35.6h-122.5V438z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_h');
        rsr.path("M1502.8,438h71.5c11.7,0,21.5,1.4,29.6,4.3c8.1,2.9,14.6,6.9,19.7,12.1 c8.9,8.6,13.4,20.4,13.4,35.2v0.4c0,11.7-2.8,21.3-8.4,28.9c-5.6,7.6-13.2,13.5-22.7,17.5l36.1,52.7h-48.4l-30.5-45.8h-0.4h-17.9 v45.8h-41.9V438z M1572.3,510.6c7.2,0,12.7-1.6,16.6-4.9c3.9-3.2,5.8-7.6,5.8-13.1v-0.4c0-6-2-10.5-6-13.5c-4-2.9-9.6-4.4-16.6-4.4 h-27.4v36.3H1572.3z").attr({
            opacity: '0.1',
            fill: '#27242B',
            parent: 'group_a',
            'stroke-width': '0',
            'stroke-opacity': '1'
        }).data('id', 'path_i');
        return rsr.setFinish();
    },
    drawBgTxt: function() {
        var block3BgTxtWrapper = Home.getPaperSingleton("block3-bgtxt", $(window).width(), $(window).height());
        var block4BgTxtWrapper = Home.getPaperSingleton('block4-bgtxt', $(window).width(), $(window).height());
        var block5BgTxtWrapper = Home.getPaperSingleton('block5-bgtxt', $(window).width(), $(window).height());
        var block6BgTxtWrapper = Home.getPaperSingleton('block6-bgtxt', $(window).width(), $(window).height());
        About.drawLetsRoarBgTxt(block3BgTxtWrapper);
        About.drawInTheBgTxt(block4BgTxtWrapper);
        About.drawJungleBgTxt(block5BgTxtWrapper);
        About.drawTogetherBgTxt(block6BgTxtWrapper);
    },
    next: function (timeline) {
        "use strict";
        timeline.play();
    },
    back: function (timeline) {
        "use strict";
        if(timeline.totalTime() > 3) {
            timeline.reverse();
        }
    },
    preparePages: function() {
        "use strict";
        TweenLite.to(jQuery('.block'), 0, {y: '120%'});
        TweenLite.to(jQuery('.bg-txt'), 0, {y: '100%'});
        TweenLite.to(jQuery('.triangle'), 0, {y: '120%'});
        TweenLite.to(jQuery('#block3-picture'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block4-picture'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block3 .heading'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block4 .heading'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block3 .content'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block4 .content'), 0, {y: '100%'});
        TweenLite.to(jQuery('#block1'), 0, {y: '0%'});
    },
    getTimeline: function () {
        "use strict";
        if (typeof  About.timeline === 'undefined') {
            About.timeline = new TimelineMax({paused:true});
        }
        return About.timeline;
    },
    /**
     * We use this function to set the human-readable label for easily detect a popular timeline then
     * Actually, there are 6 pages in this project and each one has specific start time,
     * We set the name for these points: page1 -> page6
     * Note:
     *  - we also need to add pause to each label to prevent timeline from play automatically (it must be controlled by the keyboard,scroll,swipe manually)
     *  - should not add pause to the first label,we need the first scene run on the fly
     * @param {Object} timeline - the instance of TimelineMax object
     * @param {string} prefix - the start word for each label (in this project, I would like to set them as page1, page2...)
     * @param {int} qty - the total number of label
     * @param {int} point - the specific value of time for start point following by this formula: index of page (from 1 to qty) * point
     */
    setLabel: function(timeline, prefix, qty, point) {
        var label;
        for(var i = 0; i < qty; i++ ) {
            (function(j) {
                label = prefix + (j+1);
                timeline.add(label, j*point);
                if(j != 0){
                    timeline.addPause(label);
                }
            })(i);
        }
    },
    /**
     * Specify the scene for each page (just think about the script of film ^^, very similar to you?)
     * @param {Object} timeline - the instance of TimelineMax object
     */
    specifyTimeline: function(timeline){
        // add animation for "page1"
        timeline.to($('#about-page'), About.minLength, {opacity: 1,ease: Power4.easeOut}, "page1");
        timeline.staggerFromTo($('#block1 .txt').toArray(), About.medLength,{y: '100%', opacity: 0, ease: Power4.easeInOut}, {y: '0%', opacity: 1, ease: Power4.easeInOut}, 0.1, "page1");
        timeline.fromTo($('.about-page .bg-lion'), About.minLength, {y: '10%', opacity: 0, ease: Power4.easeOut}, {y: '0%', opacity: 1, ease: Power4.easeOut}, "page1");

        // add animation for "page2"
        timeline.to($('#block1'), About.medLength, {y: '-100%', ease: Power4.easeInOut}, "page2");
        timeline.to($('#back-link'), About.medLength, {className: '+=highlighted'}, "page2");
        timeline.to($('.about-page .bg-lion'), About.medLength, {y: '-50%', ease: Power4.easeInOut}, "page2");
        timeline.to($('#block2'), About.medLength, {y: '0%', ease: Power4.easeInOut}, "page2");
        timeline.staggerFromTo($('#block2 .txg-big').toArray(), About.medLength, {y: '100%', opacity: 0, ease: Power4.easeInOut}, {y: '0%', opacity: 1, ease: Power4.easeInOut}, 0.1, "page2");
        timeline.to($('#block2-triangle'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page2");

        // add animation for "page3"
        timeline.to($('.about-page .bg-lion'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page3");
        timeline.to($('#back-link'), About.medLength, {className: '-=highlighted'}, "page3");
        timeline.to($('#block2'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page3");
        timeline.to($('#block2-triangle'), About.medLength, {y: '-100%', opacity: 1, ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3'), About.medLength, {y: '0%', ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3 .heading'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3 .content'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3-picture'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3-bgtxt'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page3");
        timeline.to($('#block3-triangle'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page3");

        // add animation for "page4"
        timeline.to($('#block3'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page4");
        timeline.to($('#block3-bgtxt'), About.maxLength, {y: '-70%', ease: Power4.easeInOut}, "page4");
        timeline.to($('#block3 .heading'), About.medLength, {y: '-100%', ease: Power4.easeInOut}, "page4");
        timeline.to($('#block3-picture'), About.medLength, {y: '-300%', ease: Power4.easeInOut}, "page4");
        timeline.to($('#block3 .content'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4'), About.medLength, {y: '0%', ease: Power4.easeInOut}, "page4");
        timeline.fromTo($('#block4 .bg'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4 .heading'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4 .content'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4-picture'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4-bgtxt'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block3-triangle'), About.maxLength, {y: '-100%', opacity: 0, ease: Power4.easeInOut}, "page4");
        timeline.to($('#block4-triangle'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page4");

        // add animation for "page5"
        timeline.to($('#block4'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page5");
        timeline.to($('#block4-bgtxt'), About.maxLength, {y: '-100%', ease: Power4.easeInOut}, "page5");
        timeline.to($('#block5'), About.medLength, {y: '0%', ease: Power4.easeInOut}, "page5");
        timeline.to($('#block5-bgtxt'), About.medLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page5");
        timeline.to($('#block4-triangle'), About.maxLength, {y: '-100%', opacity: 0, ease: Power4.easeInOut}, "page5");
        timeline.to($('#block5-triangle'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page5");

        // add animation for "page6"
        timeline.to($('#block5'), About.medLength, {y: '-120%', ease: Power4.easeInOut}, "page6");
        timeline.to($('#block5-bgtxt'), About.maxLength, {y: '-100%', ease: Power4.easeInOut}, "page6");
        timeline.to($('#block6'), About.medLength, {y: '0%', ease: Power4.easeInOut}, "page6");
        timeline.to($('#block6-bgtxt'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page6");
        timeline.to($('#block5-triangle'), About.maxLength, {y: '-120%', opacity: 1, ease: Power4.easeInOut}, "page6");
        timeline.to($('#block6-triangle'), About.maxLength, {y: '0%', opacity: 1, ease: Power4.easeInOut}, "page6");
        timeline.to($('#about-scroll-btn'), About.maxLength, {opacity: 0,rotation: 180, ease: Power4.easeInOut}, "page6");

    },
    setNavigation: function(timeline) {
        // jQuery(window).on('mousewheel', function (event) {
        //     if (event.deltaY < 0) {
        //         About.next(timeline);
        //     }
        //     else {
        //         About.back(timeline);
        //     }
        // });
        $(window).bind('mousewheel DOMMouseScroll', function(event){
            //up
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                About.back(timeline);
            }
            else {
                About.next(timeline);
            }
        })
        $('#about-page').keydown(function(e) {
            switch(e.which) {
                case 38: // up
                    About.back(timeline);
                    break;
                case 40: // down
                    About.next(timeline);
                    break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
        $('#about-page').on('swipeup', function() {
            About.next(timeline);
        });
        $('#about-page').on('swipedown', function() {
            About.back(timeline);
        });
        $('#about-scroll-btn').click(function() {
            "use strict";
            About.next(timeline);
        })
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// latest about page




//------------------------------------------
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


//------------------------------------------
/**
 * This file is used to store all of illustrations which are drawed by Raphaeljs 
 * An illustration can be a paper, shape or anything else (as long as they are rendered by Raphaeljs)
 */
var Slider = {
    current_slide_index: 0,
    slidesData : [],
    backgroundData: ['#221f26', '#EE5688', '#AB39DB', '#157C80', '#A90806'],
    backgroundTxt: [document.querySelector('#txt-cresus p'),
        document.querySelector('#txt-durance p'),
        document.querySelector('#txt-bys p'),
        document.querySelector('#txt-club75 p'),
        document.querySelector('#txt-renault p')],
    prjInfo: [document.getElementById('prj1'),
        document.getElementById('prj2'),
        document.getElementById('prj3'),
        document.getElementById('prj4'),
        document.getElementById('prj5'),],
    paper: undefined,
    processing: false,
    drawCresus: function (rsr) {
    rsr.setStart();
     var path_a = rsr.path("M1460.8,480.6l-82.5,140.7l89.6-139L1460.8,480.6z ");
     path_a.attr({
         fill: 'none', 'fill-opacity': 0,
         stroke: '#F6F5F5',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         'stroke-opacity': '1'
     }).data('id', 'path_a');
     var path_b = rsr.path("M1464,485.1l155.7-45.8l-157.2,39.2L1464,485.1z");
     path_b.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
     var path_c = rsr.path("M1464.9,478l-22.8-62.9l15.8,65.8L1464.9,478z");
     path_c.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
     var path_d = rsr.path(" M1359.4,818.9l93-83.4l-95.5-56.7L1359.4,818.9z");
     path_d.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.38',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_d');
     var path_e = rsr.path(" M1493.7,706.4l-37.4-12.6l130.2-25.2L1493.7,706.4z");
     path_e.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.11',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_e');
     var path_f = rsr.path(" M1622.4,633.4l-6,37.7l37-15.3L1622.4,633.4z");
     path_f.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.6',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_f');
     var path_g = rsr.path(" M1816,733.6l41.3,58.2l8.7-27L1816,733.6z");
     path_g.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_g');
     var path_h = rsr.path(" M1772.9,329.4l162.8-112.7l-191.1,37.5L1772.9,329.4z");
     path_h.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.45',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_h');
     var path_i = rsr.path("M1320.1,751.2l39.3,67.6L1253.2,799L1320.1,751.2z");
     path_i.attr({fill: 'none', 'fill-opacity': 0, 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
     var path_j = rsr.path(" M1329.6,698.9l-9.5,52.4l-43.3-12L1329.6,698.9z");
     path_j.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_j');
     var path_k = rsr.path(" M1281.9,661.1l-7.7,21.7l20.9-17.6L1281.9,661.1z");
     path_k.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.78',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_k');
     var path_l = rsr.path(" M1273.9,683.1l34.7,38.5l-58.8,44.4L1273.9,683.1z");
     path_l.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.8',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_l');
     var path_m = rsr.path(" M1359.4,818.9l-89.9,223.3L1253.2,799L1359.4,818.9z");
     path_m.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.34',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_m');
     var path_n = rsr.path(" M1289.9,623.6l-8.5,38.9l-5.2-55.6L1289.9,623.6z");
     path_n.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_n');
     var path_o = rsr.path(" M1276.1,605.9l4.2,54.7l-14.7-10.5L1276.1,605.9z");
     path_o.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.2',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_o');
     var path_p = rsr.path(" M1433.9,819l-168.7,48.2l126.4,25.8L1433.9,819z");
     path_p.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.8',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_p');
     var path_q = rsr.path(" M1452.4,735.4l28.1-45.9l47.9-8.8L1452.4,735.4z");
     path_q.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.22',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_q');
     var path_r = rsr.path(" M1306.1,959.7l-129.2-7l95.6,169.4L1306.1,959.7z");
     path_r.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#F2C68E',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_r');
     var path_s = rsr.path(" M1452.4,735.4L1528,681l-22.7,83.7L1452.4,735.4z");
     path_s.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_s');
     var path_t = rsr.path(" M1320.1,751.2l-54.9,115.9l11.6-128L1320.1,751.2z");
     path_t.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_t');
     var path_u = rsr.path("M1689.7,889.7l-83.6,16.1l11.5-31.4L1689.7,889.7z");
     path_u.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
     var path_v = rsr.path(" M1882.5,133.7l105.4,18.9l-53.6-62.7L1882.5,133.7z");
     path_v.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_v');
     var path_w = rsr.path("M442.3,1220.1l425.5-223.3l221.3,185.5L442.3,1220.1z");
     path_w.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
     var path_x = rsr.path(" M1206,108.9l107.5-77.4l-141.4,125.3L1206,108.9z");
     path_x.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_x');
     var path_y = rsr.path(" M1602.1,336.4l-124.6-22l5.6,8.5L1602.1,336.4z");
     path_y.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.78',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_y');
     var path_z = rsr.path(" M1436.6,715.4l15.8,20l-122.8-36.5L1436.6,715.4z");
     path_z.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_z');
     var path_aa = rsr.path("M1621,341.3l-44.7-10.9l114.4,83L1621,341.3z");
     path_aa.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
     var path_ab = rsr.path(" M1302.7,419l37.9-43.8L1382,355L1302.7,419z");
     path_ab.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ab');
     var path_ac = rsr.path(" M1391.6,892.9L1253.2,799l23.7-59.8L1391.6,892.9z");
     path_ac.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ac');
     var path_ad = rsr.path("M1283.6,525.7l19.2-106.7l-38.1,104.4 L1283.6,525.7z");
     path_ad.attr({
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.2',
         "stroke-miterlimit": '10',
         'stroke-opacity': '1'
     }).data('id', 'path_ad');
     var path_ae = rsr.path("M1516.2,1064l15.7,13.4l10.4-16L1516.2,1064z");
     path_ae.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
     var path_af = rsr.path("M1451.7,473.5l19.3-3.1l4.9,18.1L1451.7,473.5z");
     path_af.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
     var path_ag = rsr.path(" M1436.6,715.4l-8.4,73.1l-68.7,30.4L1436.6,715.4z");
     path_ag.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.25',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ag');
     var path_ah = rsr.path("M1329.6,698.9l122.8,36.5l-18.5,83.6L1329.6,698.9z");
     path_ah.attr({fill: '#AB814F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
     var path_ai = rsr.path(" M1723.4,393l-28.4-26.3l-4.3,46.8L1723.4,393z");
     path_ai.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.78',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ai');
     var path_aj = rsr.path(" M1673.9,244.3l-26.3-36.1l55.4-14.8L1673.9,244.3z");
     path_aj.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_aj');
     var path_ak = rsr.path("M1276.1,605.9l17.6-6.9l20.7,54.2L1276.1,605.9z");
     path_ak.attr({fill: '#5B4228', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
     var path_al = rsr.path(" M1651.2,566.3l0.7,44.9l45.1-74.8L1651.2,566.3z");
     path_al.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.8',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_al');
     var path_am = rsr.path("M1264.7,523.5l29.1,75.6l-10.2-73.4L1264.7,523.5z");
     path_am.attr({fill: '#CCA46A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
     var path_an = rsr.path("M2557,798.7l-138.3,402.5l-277.3-352.1L2557,798.7z");
     path_an.attr({fill: '#27242B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
     var path_ao = rsr.path("M1229.5,854.6l-12-68.2l-48.3,125.7L1229.5,854.6z");
     path_ao.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
     var path_ap = rsr.path("M1333,291.5l1.3-50l10.6,33.9L1333,291.5z");
     path_ap.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
     var path_aq = rsr.path(" M1824,179.6l-9.8,32.8l68.3-78.7L1824,179.6z");
     path_aq.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_aq');
     var path_ar = rsr.path(" M1748.1,496.4l-49.3,9.5l9.8-26.6L1748.1,496.4z");
     path_ar.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.14',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ar');
     var path_as = rsr.path("M1685.2,405.3l103.5-49l-120.4-51.4L1685.2,405.3z ");
     path_as.attr({
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         'stroke-opacity': '1'
     }).data('id', 'path_as');
     var path_at = rsr.path(" M1734.6,244.3l-70.7-9.9l-25.2,47.6L1734.6,244.3z");
     path_at.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '1.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_at');
     var path_au = rsr.path(" M1380.9,346.8l102.2-23.8L1382,355L1380.9,346.8z");
     path_au.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.6',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_au');
     var path_av = rsr.path(" M1935.7,216.7l-79.8-29.4l132-34.7L1935.7,216.7z");
     path_av.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_av');
     var path_aw = rsr.path(" M1301.6,1009.5l-1.1,84.6l120.4-77L1301.6,1009.5z");
     path_aw.attr({
         opacity: '0.5',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_aw');
     var path_ax = rsr.path(" M1613.5,285.6l89.5-92.3l41.6,60.9L1613.5,285.6z");
     path_ax.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ax');
     var path_ay = rsr.path("M1144.5,351.5l-30.9-10.9l43.7,2.8L1144.5,351.5z");
     path_ay.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
     var path_az = rsr.path("M1314.5,653.2l43.1,25.5l-63.8-79.7L1314.5,653.2z");
     path_az.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
     var path_ba = rsr.path(" M1699.1,462.3l44.1,4.8l-45.1,40L1699.1,462.3z");
     path_ba.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ba');
     var path_bb = rsr.path(" M1663.5,386l31.5-19.3l-4.3,46.8L1663.5,386z");
     path_bb.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.78',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bb');
     var path_bc = rsr.path(" M1855.9,187.3l26.6-53.6L1703,193.3L1855.9,187.3z");
     path_bc.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.71',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bc');
     var path_bd = rsr.path(" M1602.2,617.4l-29.3,54.3l53.3-16.2L1602.2,617.4z");
     path_bd.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bd');
     var path_be = rsr.path(" M1626.7,655.5l-12.6,30.2l-27.6-17.1L1626.7,655.5z");
     path_be.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.29',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_be');
     var path_bf = rsr.path("M1653.3,655.8l-6.9,24.6l-19.7-24.9L1653.3,655.8z");
     path_bf.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
     var path_bg = rsr.path("M1727.6,46.8l160.6-105.3l-186.9-80.8L1727.6,46.8z");
     path_bg.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
     var path_bh = rsr.path(" M1772.9,329.4l162.8-112.7l-286.9,75.2L1772.9,329.4z");
     path_bh.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bh');
     var path_bi = rsr.path(" M1528,681l-91.4,34.4l-76.4-33.9L1528,681z");
     path_bi.attr({
         opacity: '0.6',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bi');
     var path_bj = rsr.path("M1567.9,313.9l8.4,17.1l45.2,10.1L1567.9,313.9z");
     path_bj.attr({fill: '#EBC99D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
     var path_bk = rsr.path(" M1382,355l-40.2,19.6l39.1-27.9L1382,355z");
     path_bk.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bk');
     var path_bl = rsr.path(" M1772.9,329.4l-87.6,75.9L1501.8,314L1772.9,329.4z");
     path_bl.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bl');
     var path_bm = rsr.path(" M1302.7,419l30-23.9l-68,128.4L1302.7,419z");
     path_bm.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#F2C68E',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bm');
     var path_bn = rsr.path(" M1494.5,757.7l-72.9,259.8l-30-124.6L1494.5,757.7z");
     path_bn.attr({
         opacity: '0.6',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.6',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bn');
     var path_bo = rsr.path(" M1380.9,346.8l97.3-32.1l4.9,8.3L1380.9,346.8z");
     path_bo.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.6',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bo');
     var path_bp = rsr.path(" M1628.8,313.2l-9.1,47l29.1-68.3L1628.8,313.2z");
     path_bp.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bp');
     var path_bq = rsr.path(" M1628.8,313.2l16.5,52.9l49.7,0.6L1628.8,313.2z");
     path_bq.attr({
         opacity: '0.6',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.4',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bq');
     var path_br = rsr.path(" M1421.6,1017.5l-89-87.1l-30.9,79.1L1421.6,1017.5z");
     path_br.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_br');
     var path_bs = rsr.path(" M1602.2,122.8l-20.2-69l31.4,17.6L1602.2,122.8z");
     path_bs.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bs');
     var path_bt = rsr.path(" M1304.6,944.4l-127.7-5.7l60.3-57.5L1304.6,944.4z");
     path_bt.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bt');
     var path_bu = rsr.path(" M1313.5,31.5l-141.4,125.3l21.1,45.9L1313.5,31.5z");
     path_bu.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#F2C68E',
         "stroke-width": '0.6',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bu');
     var path_bv = rsr.path("M1646.4,680.4l-30.1-9.4l-2.2,14.7L1646.4,680.4z");
     path_bv.attr({
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.1',
         "stroke-miterlimit": '10',
         'stroke-opacity': '1'
     }).data('id', 'path_bv');
     var path_bw = rsr.path(" M1935.7,216.7l-79.8-29.4l-111.3,66.9L1935.7,216.7z");
     path_bw.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.71',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_bw');
     var path_bx = rsr.path("M1363.4,659l-5.7,19.7l-63.8-79.7L1363.4,659z");
     path_bx.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
     var path_by = rsr.path(" M1308.6,721.6l-13.2-56.4l34.2,33.7L1308.6,721.6z");
     path_by.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_by');
     var path_bz = rsr.path("M1449,677.5l7.3,16.8l-98.7-15.5L1449,677.5z");
     path_bz.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
     var path_ca = rsr.path("M1276.1,605.9l17.6-6.9l-29.1-75.6L1276.1,605.9z");
     path_ca.attr({fill: '#61492C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
     var path_cb = rsr.path("M1545.9,655.6l27,16.1l78.3-105.4L1545.9,655.6z");
     path_cb.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
     var path_cc = rsr.path(" M1697,536.5l-6.3-123.1l8.4,48.9L1697,536.5z");
     path_cc.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.78',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_cc');
     var path_cd = rsr.path(" M1647.6,208.2L1501.8,314l147-22.1L1647.6,208.2z");
     path_cd.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_cd');
     var path_ce = rsr.path(" M1690.7,413.4l-45.5-47.3l40.3,98.1L1690.7,413.4z");
     path_ce.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ce');
     var path_cf = rsr.path("M1363.4,659l85.7,18.5l-91.4,1.3L1363.4,659z");
     path_cf.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
     var path_cg = rsr.path(" M1501.8,314l110-28.4l35.7-77.4L1501.8,314z");
     path_cg.attr({
         opacity: '0.7',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.5',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_cg');
     var path_ch = rsr.path("M1456.3,694.3l-7.3-16.8l96.9-21.8L1456.3,694.3z");
     path_ch.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
     var path_ci = rsr.path(" M1281.3,660.7l33.2-7.4l-1.5,12.2L1281.3,660.7z");
     path_ci.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.3',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_ci');
     var path_cj = rsr.path(" M1651.9,611.2L1651.9,611.2l-0.7-44.9L1651.9,611.2z");
     path_cj.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.38',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_cj');
     var path_ck = rsr.path("M1651.2,566.3l-78.3,105.4l79-60.5L1651.2,566.3z");
     path_ck.attr({fill: '#F2C68E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
     var path_cl = rsr.path("M1651.9,611.2l-195.6,83l116.6-22.5L1651.9,611.2z");
     path_cl.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
     var path_cm = rsr.path("M1697,536.5l-11.5-72.2l-34.3,102.1L1697,536.5z");
     path_cm.attr({fill: 'none', 'fill-opacity': 0, 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
     var path_cn = rsr.path(" M1477.5,314.4l90.4-0.6l8.4,16.5L1477.5,314.4z");
     path_cn.attr({
         opacity: '0.3',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.63',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_cn');
     var path_co = rsr.path(" M1720.8,715.5l-137.3,80.9l114.1-20.3L1720.8,715.5z");
     path_co.attr({
         opacity: '0.6',
         fill: 'none', 'fill-opacity': 0,
         stroke: '#CCA46A',
         "stroke-width": '0.7',
         "stroke-miterlimit": '10',
         "enable-background": 'new ',
         'stroke-opacity': '1'
     }).data('id', 'path_co');
     var path_cp = rsr.path("M1588.8,502.3l-19,35.4l43.7-2.1L1588.8,502.3z");
     path_cp.attr({fill: '#CDA56B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
     var path_cq = rsr.path("M1097.2,670l51.8,5.9l3.8,27.4L1097.2,670z");
     path_cq.attr({fill: '#7D5A32', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
     var path_cr = rsr.path("M1451.7,473.5l24.2,15l-20,3.9L1451.7,473.5z");
     path_cr.attr({fill: '#AA814E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
     var path_cs = rsr.path("M1743.2,466.5l-34.6,12.9l39.5,17.1L1743.2,466.5z");
     path_cs.attr({fill: '#F3E2E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
     return rsr.setFinish();
    },
    drawDurance: function (rsr) {
        rsr.setStart();
        var path_a = rsr.path("M1395.4,359.3l8.7-2.2l91.3,267.4L1395.4,359.3z");
        path_a.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_a');
        var path_b = rsr.path("M1530.4,354.8l-75.2,244.4l80.2-239.7L1530.4,354.8z");
        path_b.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M1517.1,348.3l5,3.2l-74.9,262.6L1517.1,348.3z");
        path_c.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M1496.2,629.2l-113.7-283.9l-6,2.4L1496.2,629.2z");
        path_d.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M1468.5,318.8l8.7-0.1l-11.8,358L1468.5,318.8z");
        path_e.attr({fill: '#E7C94C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M1470.2,632.4l-22.1-338.9l-4.9,2.2L1470.2,632.4z");
        path_f.attr({fill: '#D8AC8A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M1185.2,479.2l-31.2,206.6h65.2L1185.2,479.2z");
        path_g.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M1542,688h51l-16.4-188.6L1542,688z");
        path_h.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
        var path_i = rsr.path("M1392.4,568.7l154.1,136.6l-4.6-140.3L1392.4,568.7z");
        path_i.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M1541.9,565.1l-20.4,26.3l25.1,114L1541.9,565.1z");
        path_j.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
        var path_k = rsr.path("M1420.6,513.4l84.4-12.6l-2.4,9.9L1420.6,513.4z");
        path_k.attr({fill: '#9E6641', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M1466.4,507.1l-46.3-1.8l0.6,8.1L1466.4,507.1z");
        path_l.attr({fill: '#514032', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
        var path_m = rsr.path("M1485.5,541.8l20.6,12.3l-15.3-43.4L1485.5,541.8z");
        path_m.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M1440.9,551.8l100.9,13.3l-35.8-10.9L1440.9,551.8z");
        path_n.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M1541.9,565.1l-149.5,3.6l48.6-16.9L1541.9,565.1z");
        path_o.attr({fill: '#6F462C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M1440.9,551.8l65.1,2.4l-20.6-12.3L1440.9,551.8z");
        path_p.attr({fill: '#4B3322', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M1441.4,512.7l44.1,29.1l-44.5,9.9L1441.4,512.7z");
        path_q.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M1501,663.9l-111.7,41.4l3.1-136.6L1501,663.9z");
        path_r.attr({fill: '#5C351F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M1441.4,512.7l44.1,29.1l5.3-31.1L1441.4,512.7z");
        path_s.attr({fill: '#885E43', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M1168.8,597.5l-54,3.9l76.7,9.2L1168.8,597.5z");
        path_t.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M1636.8,688l7.8-92.1l20.6,92.1H1636.8z");
        path_u.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M1031.3,634.8l10.9,16h-23L1031.3,634.8z");
        path_v.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M1191.5,610.7l-79.7,9l78.8,54L1191.5,610.7z");
        path_w.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M1188,713.7l-47.6-20.4l50.3-19.6L1188,713.7z");
        path_x.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M1262.6,313.2l-1.1-12.5l5.3,7.7L1262.6,313.2z");
        path_y.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M1047.8,680.3h-33.2l17.4-26.9L1047.8,680.3z");
        path_z.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M1252.2,748.9l23.4-105.3l-66.4-181.4L1252.2,748.9z");
        path_aa.attr({fill: '#9A3B64', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M1262.2,402.4l10.9-89.2l11.2,77.4L1262.2,402.4z");
        path_ab.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M1171.3,660.3l-52.2-35.6l0.6,96.9L1171.3,660.3z");
        path_ac.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M1112.4,529.5l6.3,50.4l-18.2-13.7L1112.4,529.5z");
        path_ad.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M1188,713.7l-68.3,7.8l20.7-28.3L1188,713.7z");
        path_ae.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M1254.5,474.1l21.1,169.5l49.7-171.1L1254.5,474.1z");
        path_af.attr({fill: '#ED4F81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M1015.8,667l16.2-25.2l14.6,25.2H1015.8z");
        path_ag.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M1254.5,474.1l-45.2-11.9l105.8-25.6L1254.5,474.1z");
        path_ah.attr({fill: '#D8417D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M1252.2,748.9l-20.9-139.2L1206.6,742L1252.2,748.9z");
        path_ai.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M1254.5,474.1l21.1,169.5l-66.4-181.4L1254.5,474.1z");
        path_aj.attr({fill: '#AE3C68', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M1051.2,710l11.8-27.2l56.7,38.8L1051.2,710z");
        path_ak.attr({fill: '#F1D5E4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M1578,503.5l20.2,184.5h-16.5L1578,503.5z");
        path_al.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M1315.1,436.5l65.9,21.1l-55.7,14.8L1315.1,436.5z");
        path_am.attr({fill: '#F26F8C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M1051,611.5l63.7-10.1l-52.1-8.1L1051,611.5z");
        path_an.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M1062.9,682.8l32.5-65.5l23.7,7.4L1062.9,682.8z");
        path_ao.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M1843.3,649.2l24.8,111.9h-112.8L1843.3,649.2z");
        path_ap.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M863.7,225.3l-2.5,25.1l-12.3,13L863.7,225.3z");
        path_aq.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M20.6,731.2l74.9-136.5l21,136.5H20.6z");
        path_ar.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M957.8,688l20.7-188.7L897,688H957.8z");
        path_as.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M1119.1,624.7l0.6,96.9l-56.7-38.8L1119.1,624.7z");
        path_at.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M1337.1,753.9l-84.8-5l23.4-105.3L1337.1,753.9z");
        path_au.attr({fill: '#EF5489', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M1051.2,710l-0.1-98.4l44.4,5.7L1051.2,710z");
        path_av.attr({fill: '#F2EFF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M1319.7,393.8l-46.6-80.6l11.2,77.4L1319.7,393.8z");
        path_aw.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M1140.4,693.3l50.3-19.6l-19.3-13.4L1140.4,693.3z");
        path_ax.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M1389.3,705.3h157.2l-47.9-43.5L1389.3,705.3z");
        path_ay.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M1296.9,452.9l-1.5-26.2l-5.3-0.8L1296.9,452.9z");
        path_az.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M1206.6,742l24.8-132.3l-16.4-1L1206.6,742z");
        path_ba.attr({fill: '#6F2E4C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M1383,735l-57.7-262.5l-49.7,171.1L1383,735z");
        path_bb.attr({fill: '#962E62', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M1609.1,699.9h20.2l-10.6-37.1L1609.1,699.9z");
        path_bc.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M1214.8,608.7l-5.6-146.6l22.1,147.6L1214.8,608.7z");
        path_bd.attr({fill: '#B6426F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M1114.7,601.5l-63.7,10.1l60.8,8.1L1114.7,601.5z");
        path_be.attr({fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M1325.3,472.5l-10.2-36l-60.6,37.5L1325.3,472.5z");
        path_bf.attr({fill: '#F59BAE', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M1168.8,597.5l-54,3.9l18.3-14.1L1168.8,597.5z");
        path_bg.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M1150.4,884.3l-57.3-155.5l9.4,155.5H1150.4z");
        path_bh.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M1111.8,619.7l79.7-9l-76.7-9.2L1111.8,619.7z");
        path_bi.attr({fill: '#F4F4F4', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M-24.4,438.4L-107,796.5h177L-24.4,438.4z");
        path_bj.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M1112.4,529.5l2.2-29.7l-14.1,66.4L1112.4,529.5z");
        path_bk.attr({fill: '#F7F192', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M1917.4,542.5l57.3,176h-76.9L1917.4,542.5z");
        path_bl.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M1275,298.4l2.4-13l-5.9,7.1L1275,298.4z");
        path_bm.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M1383,735l-107.4-91.4l61.5,110.3L1383,735z");
        path_bn.attr({fill: '#CA4178', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M1325.3,472.5l55.7-14.8l2,277.3L1325.3,472.5z");
        path_bo.attr({fill: '#CE3D77', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M1284.3,390.6l9.9,41.9l25.5-38.6L1284.3,390.6z");
        path_bp.attr({fill: '#F5EB16', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M1111.8,619.7l-16.4-2.4l23.7,7.4L1111.8,619.7z");
        path_bq.attr({fill: '#F9F9FA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M1114.6,499.8l28.4,59.5l-30.7-29.8L1114.6,499.8z");
        path_br.attr({fill: '#FEDF00', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M845.5,181.7l18.2,43.5l28.8-57.5L845.5,181.7z");
        path_bs.attr({fill: '#D0489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M806.2,107.5l72.1,64.4l14.3-4.2L806.2,107.5z");
        path_bt.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M829.1,83.7l28.8,59.8l34.6,24.2L829.1,83.7z");
        path_bu.attr({fill: '#BD268D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M845.5,181.7l-39.3-74.2l72.1,64.4L845.5,181.7z");
        path_bv.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M1062.7,593.3l70.4-6l-18.3,14.1L1062.7,593.3z");
        path_bw.attr({fill: '#F4EDF0', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M957.4,817.3l27.9-95.1l56.6,95.1H957.4z");
        path_bx.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M831.9,125.3l26,18.2l-28.8-59.8L831.9,125.3z");
        path_by.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M1488,566.5l33.5,25.6l20.4-27L1488,566.5z");
        path_bz.attr({fill: '#7B4830', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M916.9,162.7l23.1,18.8l-19.2-6.9L916.9,162.7z");
        path_ca.attr({fill: '#D4489A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M863.7,225.3l17.6,37.1l-20.2-12L863.7,225.3z");
        path_cb.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M840.9,243.5l-15.7,5l20.3-66.8L840.9,243.5z");
        path_cc.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M920.8,174.6l19.2,6.9l-28.8,14.8L920.8,174.6z");
        path_cd.attr({fill: '#76256E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M920.8,174.6l-28.3-6.9l24.4-5L920.8,174.6z");
        path_ce.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M936.1,183.3l31.8,27l-37.8-24.5L936.1,183.3z");
        path_cf.attr({fill: '#CF2790', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M923.9,189.2l44,21.1l-37.8-24.5L923.9,189.2z");
        path_cg.attr({fill: '#68205F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M863.7,225.3l17.6,37.1l-1.4-41L863.7,225.3z");
        path_ch.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M880,221.4l31.2-25.1l-18.6-28.6L880,221.4z");
        path_ci.attr({fill: '#762369', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M880,221.4l12.6-53.6l-28.8,57.5L880,221.4z");
        path_cj.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M892.6,167.7l28.3,6.9l-9.7,21.7L892.6,167.7z");
        path_ck.attr({fill: '#AC206D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M840.9,243.5l4.6-61.7l3.4,81.6L840.9,243.5z");
        path_cl.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M848.9,263.4l14.8-38.1l-18.2-43.5L848.9,263.4z");
        path_cm.attr({fill: '#3F164C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M825.2,248.5l5.3-40.3l15-26.5L825.2,248.5z");
        path_cn.attr({fill: '#D73493', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M1294.2,432.5l-32.1-30.1l22.1-11.8L1294.2,432.5z");
        path_co.attr({fill: '#F6C813', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M1114.2,604.4l4.8-4.1l0.7-37.1L1114.2,604.4z");
        path_cp.attr({fill: '#3F1944', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M1112.4,529.5l30.7,29.8l-24.5,17.8L1112.4,529.5z");
        path_cq.attr({fill: '#F4EB2B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M2017.7,780.2h-106.7L2028.2,455L2017.7,780.2z");
        path_cr.attr({fill: '#DBD0D3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M1438.6,681.3l-47.5,131.2h72.2L1438.6,681.3z");
        path_cs.attr({fill: '#E5DADC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        return rsr.setFinish();
    },
    drawBYS: function (rsr) {
        rsr.setStart();
        var path_a = rsr.path("M522.4,245.3l29.8,5.6l-23.1,24.8L522.4,245.3z");
        path_a.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_a');
        var path_b = rsr.path("M1322.4,1178.9l-16.4-25.6l-17.5,25.6H1322.4z");
        path_b.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M1423.3,1103.8l30.5-14.3l-25.5-16.4L1423.3,1103.8z");
        path_c.attr({fill: 'none', stroke: '#CEDC28', "stroke-width": '4', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M1137.3,1036.6l5.5,30.5l24.1-23.7L1137.3,1036.6z");
        path_d.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M1557.6,1166.8l-28.7-17.8l28.3-12.6L1557.6,1166.8z ");
        path_e.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_e');
        var path_f = rsr.path("M1392.2,964.8l-6.9-33l28.7,12L1392.2,964.8z");
        path_f.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_f');
        var path_g = rsr.path("M1949.2,1055.1l-26.5-16.4l24.9-17.4L1949.2,1055.1z");
        path_g.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M1074.4,1168.6l-27.9,19v-31.1L1074.4,1168.6z");
        path_h.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_h');
        var path_i = rsr.path("M1646.5,949.7l2.8,30.9l26-21.4L1646.5,949.7z");
        path_i.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M1831.1,844.4l-31.4-12.5l25.8-17.4L1831.1,844.4z");
        path_j.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_j');
        var path_k = rsr.path("M583.9,760l16.2-29.1l-30.5,1.8L583.9,760z");
        path_k.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M1262.5-75.8l23.7,19.6l4.1-33L1262.5-75.8z");
        path_l.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_l');
        var path_m = rsr.path("M1063.5,986.2l-32.9-8.1l23.2-20.6L1063.5,986.2z");
        path_m.attr({fill: '#8F53A1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M1972,662l26.6-15.1l2.8,30.8L1972,662z");
        path_n.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M1597.3,196.2l27-14.7l2.2,30.8L1597.3,196.2z");
        path_o.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_o');
        var path_p = rsr.path("M1042.4-111.4l-30.5,4.6l16.7,25.8L1042.4-111.4z");
        path_p.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M793.9,1084.5l-21.3-22.5l-7.1,32.9L793.9,1084.5z");
        path_q.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_q');
        var path_r = rsr.path("M778.8,5.1l30.7,13L804-12.3L778.8,5.1z");
        path_r.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_r');
        var path_s = rsr.path("M1492.5,688.3l29.1-9.9l-2.9,30.7L1492.5,688.3z");
        path_s.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M842.7,931.1l-30,14.6l3.5-30.4L842.7,931.1z");
        path_t.attr({
            fill: 'none',
            stroke: '#CEDC28',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_t');
        var path_u = rsr.path("M1109.4,267.5l19.5,23.7l-29.8,8L1109.4,267.5z");
        path_u.attr({fill: 'none', stroke: '#CEDC28', "stroke-width": '4', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M1177.9,752.3l6.3-30l24.9,18.2L1177.9,752.3z");
        path_v.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M1086.3,923.8l-29.8,15l26.3,15.7L1086.3,923.8z");
        path_w.attr({fill: 'none', stroke: '#282A3F', "stroke-width": '4', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M1762.1,354.8l4.8-30.4l-30.4,13.7L1762.1,354.8z");
        path_x.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M1196,161.2l-4.3-30.5l-25.1,21.8L1196,161.2z");
        path_y.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            "stroke-miterlimit": '10',
            'stroke-opacity': '1'
        }).data('id', 'path_y');
        var path_z = rsr.path("M738.3,434.5l-31.8-11.9l25.5-17.8L738.3,434.5z");
        path_z.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M1322.5,545.8l-17.4-28.4l-13.4,27.6L1322.5,545.8z");
        path_aa.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            'stroke-opacity': '1'
        }).data('id', 'path_aa');
        var path_ab = rsr.path("M1613.9,722.5l2.1,30.7l27.2-14.7L1613.9,722.5z");
        path_ab.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M882.1,195.8l-32.5,7.8l22.1,21.3L882.1,195.8z");
        path_ac.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M1505.2,60.8l-18.9-24.4l29.8-7.1L1505.2,60.8z");
        path_ad.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M1897.5,9h33.3L1914,34.8L1897.5,9z");
        path_ae.attr({
            fill: 'none',
            stroke: '#282A3F',
            "stroke-width": '4',
            'stroke-opacity': '1'
        }).data('id', 'path_ae');
        var path_af = rsr.path("M1409.3,602.3l9.4,115.1l-42.1,2.9L1409.3,602.3z");
        path_af.attr({fill: '#191519', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M1339,725.3l37.5-4.9l-53.9-107.5L1339,725.3z");
        path_ag.attr({fill: '#2E2731', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M1409.3,602.3l-86.7,10.5l53.9,107.5L1409.3,602.3z");
        path_ah.attr({fill: '#201A21', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M1330.8,723.2l8.3,90.7l22.8-92.8L1330.8,723.2z");
        path_ai.attr({fill: '#E46F8E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M1426,713.1l-64.1,8l76.2,82.3L1426,713.1z");
        path_aj.attr({fill: '#E46F8E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M1339,813.9l22.8-92.8l76.2,82.3L1339,813.9z");
        path_ak.attr({fill: '#D2577D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M956.4,677.2l46.2-26.3l74.3,130.2L956.4,677.2z");
        path_al.attr({fill: '#302D3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M956.4,677.2L1077,781.1l-46.2,26.3L956.4,677.2z");
        path_am.attr({fill: '#393856', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M1191.8,909.4l30.4-4.1l-8.8,29.5L1191.8,909.4z");
        path_an.attr({fill: '#8F53A1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M908.7,528.1l32.1,21.4L782,787L908.7,528.1z");
        path_ao.attr({fill: '#292836', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M968.2,504.9l-29.3,43.7l-28.7-19.2L968.2,504.9z");
        path_ap.attr({fill: '#302D3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M974.2,453.2l16-21l9.4,5.5L974.2,453.2z");
        path_aq.attr({fill: '#F7D859', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M749.9,765.6l158.8-237.4L782,787L749.9,765.6z");
        path_ar.attr({fill: '#1F1D26', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M974.2,453.2l25.3-15.5l-14.3,22.8L974.2,453.2z");
        path_as.attr({fill: '#F6A930', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M964.8,504.1l-23.4-15.7l46.2-27L964.8,504.1z");
        path_at.attr({fill: '#42437D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M941.4,488.4l46.2-27l-15-10.1L941.4,488.4z");
        path_au.attr({fill: '#5051A3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M939.5,485.7l-29.3,43.7l58-24.5L939.5,485.7z");
        path_av.attr({fill: '#393856', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M1157.5,464.6l34.9-51.9l-8.5,55.2L1157.5,464.6z");
        path_aw.attr({fill: '#C7B4B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M1157.5,464.6l28.3,2.7l1.4,17.2L1157.5,464.6z");
        path_ax.attr({fill: '#B6A7A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M1157.5,464.6l34.9-51.9l-44-7.7L1157.5,464.6z");
        path_ay.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M1176.9,345.9l-12.3-0.8l27-12.7L1176.9,345.9z");
        path_az.attr({fill: '#C01F42', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M1193.7,326.8l-2.1,5.5l-27,12.7L1193.7,326.8z");
        path_ba.attr({fill: '#D32A52', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M1148.4,404.9l-10.8,55.3l19.9,4.3L1148.4,404.9z");
        path_bb.attr({fill: '#EEEFED', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M1174.5,410l14.1,2l8.4-54.7L1174.5,410z");
        path_bc.attr({fill: '#C2264F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M1153.5,646.3l33.6-161.8l-29.5,68.7L1153.5,646.3z");
        path_bd.attr({fill: '#80132E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M1197.1,357.2l-44.4,49.6l21.8,3.2L1197.1,357.2z");
        path_be.attr({fill: '#DC2A5C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M1164.6,345l-11.9,61.7l24.2-60.9L1164.6,345z");
        path_bf.attr({fill: '#DE2D5A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M1128.6,473l29,80.2l-55.2,82.6L1128.6,473z");
        path_bg.attr({fill: '#CF2A5E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M1134.1,459.1l23.4,5.5l-26.6,9.2L1134.1,459.1z");
        path_bh.attr({fill: '#B6A7A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M1197.1,357.2l-3.4-30.4l-2.1,5.5L1197.1,357.2z");
        path_bi.attr({fill: '#C01F42', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M1128.6,473l58.5,11.5l-29.5,68.7L1128.6,473z");
        path_bj.attr({fill: '#BF2558', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M1176.9,345.9l20.2,11.3l-44.4,49.6L1176.9,345.9z");
        path_bk.attr({fill: '#E6426D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M1139.5,647.7l18.1-94.5l-43.4,89.7L1139.5,647.7z");
        path_bl.attr({fill: '#B21E54', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M1114.2,642.9l43.4-89.7l-55.2,82.6L1114.2,642.9z");
        path_bm.attr({fill: '#BF2858', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M1139.5,647.7l18.1-94.5l-4.1,93.1L1139.5,647.7z");
        path_bn.attr({fill: '#9D1B47', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M1157.5,464.6l29.7,19.9l-56.3-10.6L1157.5,464.6z");
        path_bo.attr({fill: '#FEF0EC', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M1191.6,332.3l5.5,24.9l-20.2-11.3L1191.6,332.3z");
        path_bp.attr({fill: '#DC2A5C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M1712.3,320.5l-67.6,33.6l-0.3,11.3L1712.3,320.5z");
        path_bq.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M1706.7,329.8l-339.4-74.1l277.1,109.8L1706.7,329.8z");
        path_br.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M1706.7,329.8L1341,179.7l371.3,140.8L1706.7,329.8z");
        path_bs.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M1573.5,549.3l70.8-183.8l-64,179.3L1573.5,549.3z");
        path_bt.attr({fill: '#242535', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M1335.3,189.3l32.1,66.4l339.4,74.1L1335.3,189.3z");
        path_bu.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M1712.3,320.5l-67.9,44.9l62.3-35.7L1712.3,320.5z");
        path_bv.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M1644.9,376.7l-0.6-11.2l-64,179.3L1644.9,376.7z");
        path_bw.attr({fill: '#242535', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M1573.5,549.3l-206.2-293.6l277.1,109.8L1573.5,549.3z");
        path_bx.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M1573.5,549.3l-276.8-109.3l70.6-184.2L1573.5,549.3z");
        path_by.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M1341,179.7l365.7,150.1l-371.4-140.4L1341,179.7z");
        path_bz.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M1613,376l-227.4-90.3l-26,68.2L1613,376z");
        path_ca.attr({fill: '#D1DE4F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M1359.6,353.8L1613,376l-26,68.2L1359.6,353.8z");
        path_cb.attr({fill: '#D1DE4F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M1557,522.4l-227.4-90.3l253.5,21.7L1557,522.4z");
        path_cc.attr({fill: '#F4BA81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M1355.8,363.5l-26.2,68.6l253.5,21.7L1355.8,363.5z");
        path_cd.attr({fill: '#F4BA81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M1692.8,541.2l-72.1,18.8l44.7,46.6L1692.8,541.2z");
        path_ce.attr({fill: '#DA8168', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M1598,556l22.5-37.1l0.1,41L1598,556z");
        path_cf.attr({fill: '#B96B46', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M1665.4,606.5l40.3-3.8l-13.4,47.5L1665.4,606.5z");
        path_cg.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M1620.7,559.9L1598,556l35,59.8L1620.7,559.9z");
        path_ch.attr({fill: '#E2876A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M1620.7,559.9l44.8-54l27.3,35.3L1620.7,559.9z");
        path_ci.attr({fill: '#B36346', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M1688.6,513.2l-23.1-7.3l27.3,35.3L1688.6,513.2z");
        path_cj.attr({fill: '#A65C44', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M1692.8,541.2l18.8-10.4l-5.9,72L1692.8,541.2z");
        path_ck.attr({fill: '#F28D7A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M1665.4,606.5l-32.3,9.2l31.5,39.3L1665.4,606.5z");
        path_cl.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M1665.4,606.5l-0.8,48.6l27.7-4.9L1665.4,606.5z");
        path_cm.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M1665.5,505.9l-44.8,54l-0.1-41L1665.5,505.9z");
        path_cn.attr({fill: '#B96B46', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M1709.2,642.4l-16.9,7.8l13.4-47.5L1709.2,642.4z");
        path_co.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M1620.7,559.9l12.3,55.9l32.3-9.2L1620.7,559.9z");
        path_cp.attr({fill: '#DA8168', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M1692.8,541.2l-4.2-28l23,17.6L1692.8,541.2z");
        path_cq.attr({fill: '#B96B46', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M1664.5,655.1l-21.7-0.7l-9.8-38.6L1664.5,655.1z");
        path_cr.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M1665.4,606.5l40.3-3.8l-12.9-61.6L1665.4,606.5z");
        path_cs.attr({fill: '#E2876A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        var rsrGroups = [];
        return rsr.setFinish();
    },
    drawClub75: function (rsr) {
        rsr.setStart();
        var path_a = rsr.path("M1411.8,448.9l15.4-64.7l16,64.7H1411.8z");
        path_a.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_a');
        var path_b = rsr.path("M1042,416.1l-85.7,60.5l159,27.7L1042,416.1z");
        path_b.attr({fill: '#AB2525', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M1260.4,426.6l171.8,124.3l66.5,28.3L1260.4,426.6z");
        path_c.attr({fill: '#22221F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M956.4,476.6l-13.3-25.5l43-4.8L956.4,476.6z");
        path_d.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M1461.3,563.3l-39.8,64.3l-60.5-62.2L1461.3,563.3z");
        path_e.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M935.2,561.2l55.3,86.7L941,624.3L935.2,561.2z");
        path_f.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M1133.2,627.9l-87.9-29.5l72,80.2L1133.2,627.9z");
        path_g.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M956.4,476.6l-13.3-25.5l-6.7,26.5L956.4,476.6z");
        path_h.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
        var path_i = rsr.path("M963.6,502.6l-7.3-26l25.8-3.9L963.6,502.6z");
        path_i.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M956.4,476.6l-20,1l27.3,25.1L956.4,476.6z");
        path_j.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
        var path_k = rsr.path("M1299.1,721.2l-67.9-3.6l-98-89.6L1299.1,721.2z");
        path_k.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M1133.2,627.9l165.9,93.2l-17.4-43.1L1133.2,627.9z");
        path_l.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
        var path_m = rsr.path("M1332.8,473.4l-109.5-79.1l-7.7,3.5L1332.8,473.4z");
        path_m.attr({fill: '#22221F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M1042,416.1l-28.8-49.6l-28.4,101.4L1042,416.1z");
        path_n.attr({fill: '#BA2927', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M1140.6,451.1l49.1-25.8l78.7,84.7L1140.6,451.1z");
        path_o.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M1260.4,425.2l80.4,90.7l27.7-12.2L1260.4,425.2z");
        path_p.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M1122.3,464.1l21.1-37.2l46.3-1.5L1122.3,464.1z");
        path_q.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M1492.8,714.6L1386,732.9l-86.9-11.8L1492.8,714.6z");
        path_r.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M1246,486.4l-56.3-61l70.7-0.1L1246,486.4z");
        path_s.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M1368.5,503.8l-27.7,12.2l99.5,38.2L1368.5,503.8z");
        path_t.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M970.8,578.9l-35.6-17.8l28.4-58.5L970.8,578.9z");
        path_u.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M1515.4,655l-13.9-32.6l65,4.2L1515.4,655z");
        path_v.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M1231.2,717.5l67.9,3.6l-0.6,9.8L1231.2,717.5z");
        path_w.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M1532.6,702.7l-47.9-17.4l8.1,29.3L1532.6,702.7z");
        path_x.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M1263.1,517.1l18.6,161l-148.5-50.1L1263.1,517.1z");
        path_y.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M1340.8,515.9l-94.8-29.5l55.3-15.1L1340.8,515.9z");
        path_z.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M1143.4,426.9l14.4-79.9l102.6,78.3L1143.4,426.9z");
        path_aa.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M1362.8,522.7l98.6,40.6l-75.3,4.9L1362.8,522.7z");
        path_ab.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M1532.6,702.7l-47.9-17.4l30.7-30.4L1532.6,702.7z");
        path_ac.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M1157.8,347l-58.1,20.3l43.7,59.6L1157.8,347z");
        path_ad.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M1117.2,678.6l114,38.9l-98-89.6L1117.2,678.6z");
        path_ae.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M1515.4,655l-110-46.2l-2.4-14.8L1515.4,655z");
        path_af.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M1281.7,678.1l211.1,36.5l-193.8,6.6L1281.7,678.1z");
        path_ag.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M986,446.4l-31.5-27l18.8-46.6L986,446.4z");
        path_ah.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M1042,416.1l56.6,75l-6.3-63.3L1042,416.1z");
        path_ai.attr({fill: '#BA2927', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M1501.5,622.3l-98.6-28.4l137.5,2.8L1501.5,622.3z");
        path_aj.attr({fill: '#464C63', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M1425.2,576.6l-22.3,17.4l137.5,2.8L1425.2,576.6z");
        path_ak.attr({fill: '#3F435B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M973.3,372.7l-18.8,46.6l8.7-43.8L973.3,372.7z");
        path_al.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M1133.2,627.9l-6.9-134l136.8,23.1L1133.2,627.9z");
        path_am.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M1425.2,576.6l36.1-13.3l79.1,33.5L1425.2,576.6z");
        path_an.attr({fill: '#3F435B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M1532.6,702.7l-17.2-47.7l61,26L1532.6,702.7z");
        path_ao.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M1299.1,721.2l-0.6,9.8l74.9-0.4L1299.1,721.2z");
        path_ap.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M1281.7,678.1l16.9-74.8l-35.6-86.2L1281.7,678.1z");
        path_aq.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M1484.7,685.3l8.1,29.3l-211.1-36.5L1484.7,685.3z");
        path_ar.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M990.5,647.8l54.7-49.4l72,80.2L990.5,647.8z");
        path_as.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M1515.4,655l61,26l-9.9-54.5L1515.4,655z");
        path_at.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M1501.5,622.3l65,4.2l-26-29.8L1501.5,622.3z");
        path_au.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M963.6,502.6l26.5,18.5l-5.5,1.5L963.6,502.6z");
        path_av.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M1260.4,425.2l-14.4,61.2l55.3-15.1L1260.4,425.2z");
        path_aw.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M988,460.4l-14.7-87.6l39.9-6.2L988,460.4z");
        path_ax.attr({fill: '#AB2525', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M1345.4,681.1l139.3,4.2l30.7-30.4L1345.4,681.1z");
        path_ay.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M1584,662.9l-17.5-36.4l9.9,54.5L1584,662.9z");
        path_az.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M1414.9,678.5l-13.9-98l-55.6,100.7L1414.9,678.5z");
        path_ba.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M970.8,578.9l-7.1-76.3l64.5,61L970.8,578.9z");
        path_bb.attr({fill: '#1A2954', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M1143.4,426.9l-73.8,24.1l42.6,32.8L1143.4,426.9z");
        path_bc.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M1060.9,424l82.5,2.9l-73.8,24.1L1060.9,424z");
        path_bd.attr({fill: '#2F3147', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M986,446.4l-43,4.8l11.5-31.8L986,446.4z");
        path_be.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M1449.7,459.9h-45.4v6.4L1449.7,459.9z");
        path_bf.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M936.3,477.6l27.3,25.1l-28.4,58.5L936.3,477.6z");
        path_bg.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M935.2,561.2l110,37.2l-54.7,49.4L935.2,561.2z");
        path_bh.attr({fill: '#CEDC28', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M1362.8,522.7l-15,25.2l35,13L1362.8,522.7z");
        path_bi.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M982.1,472.7l8,48.4l-26.5-18.5L982.1,472.7z");
        path_bj.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M1119.3,444.3l7,49.7l33.2-43.3L1119.3,444.3z");
        path_bk.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M1089.9,491.7l-61.7,72l98.1-69.7L1089.9,491.7z");
        path_bl.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M1515.4,655l-110-46.2l9.5,69.7L1515.4,655z");
        path_bm.attr({fill: '#282A3F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M1403,593.9l98.6,28.4l13.9,32.6L1403,593.9z");
        path_bn.attr({fill: '#373851', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M982.1,472.7l8,48.4l15.5-42.4L982.1,472.7z");
        path_bo.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M1099.7,367.3l-38.8,56.7l82.5,2.9L1099.7,367.3z");
        path_bp.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M982.1,472.7l3.9-26.3l45.4,41.2L982.1,472.7z");
        path_bq.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M1298.7,603.3l46.8,77.8l-63.7-3.1L1298.7,603.3z");
        path_br.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M1133.2,627.9l-60.5-20.9l53.6-113.1L1133.2,627.9z");
        path_bs.attr({fill: '#1A2954', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M1066,490.2l23.9,1.5l-53.8,16L1066,490.2z");
        path_bt.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M1039.5,509.9l-49.4,11.2l15.1-41.6L1039.5,509.9z");
        path_bu.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M1028.2,563.7l61.7-72l-105.3,30.9L1028.2,563.7z");
        path_bv.attr({fill: '#226AAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M1066,490.2l60.3,3.8l-7-49.7L1066,490.2z");
        path_bw.attr({fill: '#418AC9', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M970.6,573.8l102.1,33.3l-44.5-43.4L970.6,573.8z");
        path_bx.attr({fill: '#452D6A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M1345.4,681.1l9.8-72.7l-56.6-5.2L1345.4,681.1z");
        path_by.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M1355.2,608.5l29.1,4.1l-38.9,68.6L1355.2,608.5z");
        path_bz.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M1005.5,479.7l60.5,10.5l-30,17.4L1005.5,479.7z");
        path_ca.attr({fill: '#226AAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M1126.3,494l33.2-43.3l-6.2,61.7L1126.3,494z");
        path_cb.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M1072.7,607.1l-44.5-43.4l98.1-69.7L1072.7,607.1z");
        path_cc.attr({fill: '#2866B1', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M1436.8,446.4l-9.7-41.4l-9.1,41.4H1436.8z");
        path_cd.attr({fill: '#1A7D81', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M982.1,472.7l3.9-26.3l-29.7,30.2L982.1,472.7z");
        path_ce.attr({fill: '#1958A2', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M1444.3,488.1l-8.4-57.1l20.2,57.1H1444.3z");
        path_cf.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M1409.5,452.8l34.2-5.5h-34.2V452.8z");
        path_cg.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M1418.9,431l-8.3,57.1h-11.9L1418.9,431z");
        path_ch.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M1443.7,447.3v5.5h-34.2L1443.7,447.3z");
        path_ci.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M1449.7,459.9v6.4h-45.4L1449.7,459.9z");
        path_cj.attr({fill: '#11535A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M1382.8,560.9l18.2,19.6l-16.7,32.1L1382.8,560.9z");
        path_ck.attr({fill: '#9B9DA6', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M1362.8,522.7l-32.2,59.5l-84.6-95.8L1362.8,522.7z");
        path_cl.attr({fill: '#32334C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M1298.7,603.3l-40-96.7l89.2,41.3L1298.7,603.3z");
        path_cm.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M1287.9,520.1l-136.4-7.3l8-62.2L1287.9,520.1z");
        path_cn.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M1298.7,603.3l49.1-55.4l36.5,64.7L1298.7,603.3z");
        path_co.attr({fill: '#A8ACB8', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M1347.8,547.9l35,13l1.5,51.7L1347.8,547.9z");
        path_cp.attr({fill: '#A5A7B3', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M1224.3,411.4l-45.1,35.6L1162,387L1224.3,411.4z");
        path_cq.attr({fill: '#FAFAFA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M1169.6,427.2l19.9-40l-32.3,26.5L1169.6,427.2z");
        path_cr.attr({fill: '#FAFAFA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M1169.2,427.2l32.5-29.1L1189,387L1169.2,427.2z");
        path_cs.attr({fill: '#FAFAFA', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        return rsr.setFinish();
    },
    drawRenault: function (rsr) {
        rsr.setStart();
        var path_a = rsr.path("M1230.4,587.6l77.4-120.3l74.8,78.7L1230.4,587.6z");
        path_a.attr({fill: '#030303', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_a');
        var path_b = rsr.path("M1157,467.4l79.7,109.1l71.1-109.1H1157z");
        path_b.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_b');
        var path_c = rsr.path("M1089.2,545.6l67.8-78.3l89.3,119.4L1089.2,545.6z");
        path_c.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_c');
        var path_d = rsr.path("M1334.1,649.9l-12.9,191l75-113.8L1334.1,649.9z");
        path_d.attr({fill: '#121212', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_d');
        var path_e = rsr.path("M1280.8,905.1l-356.6-19l-16.1,188L1280.8,905.1z");
        path_e.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_e');
        var path_f = rsr.path("M1321.2,840.9l252.3-26.6l58.2-159L1321.2,840.9z");
        path_f.attr({fill: '#C7393A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_f');
        var path_g = rsr.path("M1137,651.5l-47.7-105.8l-32.5,181.9L1137,651.5z");
        path_g.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_g');
        var path_h = rsr.path("M1089.2,545.6l105.3,3.8L1137,651.5L1089.2,545.6z");
        path_h.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_h');
        var path_i = rsr.path("M1089.2,545.6l-264-37.7l231.6,219.5L1089.2,545.6z");
        path_i.attr({fill: '#1C1C1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_i');
        var path_j = rsr.path("M802.2,645.3l23-137.3l231.6,219.5L802.2,645.3z");
        path_j.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_j');
        var path_k = rsr.path("M1137,651.5l15,190.3l-95.2-114.2L1137,651.5z");
        path_k.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_k');
        var path_l = rsr.path("M1152,841.7l84.8-111.2l84.4,110.3L1152,841.7z");
        path_l.attr({fill: '#1C1C1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_l');
        var path_m = rsr.path("M1396.3,727.1l245.1-211l-9.7,139.2L1396.3,727.1z");
        path_m.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_m');
        var path_n = rsr.path("M1631.7,655.2l-310.5,185.6l75-113.8L1631.7,655.2z");
        path_n.attr({fill: '#BF2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_n');
        var path_o = rsr.path("M1645,1090.8l-364.3-185.6l291.5-14.7L1645,1090.8z");
        path_o.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_o');
        var path_p = rsr.path("M743.9,802.7l180.3,83.4L802.2,645.3L743.9,802.7z");
        path_p.attr({fill: '#BE2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_p');
        var path_q = rsr.path("M1152,841.7l-227.8,44.4L802.2,645.3L1152,841.7z");
        path_q.attr({fill: '#A81E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M1132.5,21.7L998.1-142.9L878.5,18.9L1132.5,21.7z");
        path_r.attr({fill: '#A51E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M1631.7,655.2l205.5-52.9l-263.8,212L1631.7,655.2z");
        path_s.attr({fill: '#D86067', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M1152,841.7l128.8,63.4l-356.6-19L1152,841.7z");
        path_t.attr({fill: '#680E17', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M825.2,508l161.7-65.7l102.3,103.3L825.2,508z");
        path_u.attr({fill: '#BF2126', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M743.9,802.7l180.3,83.4l-16.1,188L743.9,802.7z");
        path_v.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M1323.3,23l-97.4,14.8l67.9-77.3L1323.3,23z");
        path_w.attr({fill: '#670E12', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M1323.3,23l82.6-91.1l-112.1,28.7L1323.3,23z");
        path_x.attr({fill: '#8F191C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M843.3,386.7L825.2,508l161.7-65.7L843.3,386.7z");
        path_y.attr({fill: '#BA2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M1573.5,814.3l-292.7,90.9l291.5-14.7L1573.5,814.3z");
        path_z.attr({fill: '#610C0E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M1280.8,905.1L1152,841.7l169.3-0.8L1280.8,905.1z");
        path_aa.attr({fill: '#751113', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M1225.9,37.8l67.9-77.3l-92.5-45.2L1225.9,37.8z");
        path_ab.attr({fill: '#7C1315', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M844.1,387.7l-60.5-45.6l43.8-146.3L844.1,387.7z");
        path_ac.attr({fill: '#C82127', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M1201.2-84.7l-68.7,106.4L998.1-142.9L1201.2-84.7z");
        path_ad.attr({fill: '#901A1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M1201.2-84.7l-68.7,106.4l93.4,16.1L1201.2-84.7z");
        path_ae.attr({fill: '#801517', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M1306.9,218.4L1323.3,23l-97.4,14.8L1306.9,218.4z");
        path_af.attr({fill: '#801517', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M986.9,442.3l31.9-77.1l-174.7,22.5L986.9,442.3z");
        path_ag.attr({fill: '#D22D29', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M1132.5,21.7l-254-2.8L1005,165.8L1132.5,21.7z");
        path_ah.attr({fill: '#B21F24', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M827.4,195.8l177.5-30L878.5,18.9L827.4,195.8z");
        path_ai.attr({fill: '#BA2025', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M1132.5,21.7l10.8,192.8L1005,165.8L1132.5,21.7z");
        path_aj.attr({fill: '#A71E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M1405.9-68.1l137.9,94.2L1414.9,25L1405.9-68.1z");
        path_ak.attr({fill: '#690F0E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M1323.3,23l91.6,2l-9-93.1L1323.3,23z");
        path_al.attr({fill: '#7C1315', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M827.4,195.8l177.5-30l13.9,199.4L827.4,195.8z");
        path_am.attr({fill: '#E33D3E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M878.5,18.9l119.6-161.8l-212.2-47.2L878.5,18.9z");
        path_an.attr({fill: '#901A1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M1425.8,168.2L1323.3,23l-16.4,195.4L1425.8,168.2z");
        path_ao.attr({fill: '#8F191C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M1018.8,365.2l124.5-150.6L1005,165.8L1018.8,365.2z");
        path_ap.attr({fill: '#C22026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M1240,315.3l66.9-96.9l205.5,143.8L1240,315.3z");
        path_aq.attr({fill: '#861719', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M1331.9,1106.7l-434.3-27.2l24.2,173.2L1331.9,1106.7z");
        path_ar.attr({fill: '#791214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M1225.9,37.8l81.1,180.6l-163.7-3.9L1225.9,37.8z");
        path_as.attr({fill: '#8F191C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M1306.9,218.4l-163.7-3.9l96.7,100.8L1306.9,218.4z");
        path_at.attr({fill: '#A51E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M1157,467.4l-170.1-25.1l102.3,103.3L1157,467.4z");
        path_au.attr({fill: '#E94B50', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M1143.3,214.5l-10.8-192.8l93.4,16.1L1143.3,214.5z");
        path_av.attr({fill: '#991C1F', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M1425.8,168.2L1542,26.4l115.4,262.8L1425.8,168.2z");
        path_aw.attr({fill: '#670E12', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M1334.1,649.9l48.4-103.9l13.7,181L1334.1,649.9z");
        path_ax.attr({fill: '#030303', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M1425.8,168.2l-118.9,50.3l205.5,143.8L1425.8,168.2z");
        path_ay.attr({fill: '#8C181B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M1542,26.4l170,107.9l-54.6,154.8L1542,26.4z");
        path_az.attr({fill: '#60070E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M1307.8,467.4H1157l83-152L1307.8,467.4z");
        path_ba.attr({fill: '#BE2026', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M1157,467.4l-170.1-25.1l31.9-77.1L1157,467.4z");
        path_bb.attr({fill: '#EB707A', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M1293.8-39.4l35.7-47.6l-128.2,2.4L1293.8-39.4z");
        path_bc.attr({fill: '#901A1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M1641.4,516.1l-258.9,30l13.7,181L1641.4,516.1z");
        path_bd.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M1018.8,365.2l221.2-49.8l-83,152L1018.8,365.2z");
        path_be.attr({fill: '#B42024', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M1278.1,567.6l104.4-21.6l-48.4,103.9L1278.1,567.6z");
        path_bf.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M1512.5,362.2l128.9,153.9l-333.6-48.7L1512.5,362.2z");
        path_bg.attr({fill: '#A81E22', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M1572.2,890.4l1.3-76.2l235.6,28L1572.2,890.4z");
        path_bh.attr({fill: '#67110D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M1813.6,493.5l-172.2,22.5l-9.7,139.2L1813.6,493.5z");
        path_bi.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M1813.6,493.5l-172.2,22.5l16-226.9L1813.6,493.5z");
        path_bj.attr({fill: '#781214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M694.2,1021.6L829,1086L664.8,814.6L694.2,1021.6z");
        path_bk.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M964.2,1271.4l621.7-41.7l-221.5-120.8L964.2,1271.4z");
        path_bl.attr({fill: '#7C1315', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M1663,1105.6l-77,124l-221.5-120.8L1663,1105.6z");
        path_bm.attr({fill: '#901A1C', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M1813.6,493.5l-181.9,161.7l205.5-52.9L1813.6,493.5z");
        path_bn.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M1718.3,697.5l90.9,144.8l-235.6-28L1718.3,697.5z");
        path_bo.attr({fill: '#7C1315', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M1293.8-39.4l112.1-28.7L1329.5-87L1293.8-39.4z");
        path_bp.attr({fill: '#781214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M1857.1,858.7L1642.8,970l125,172.6L1857.1,858.7z");
        path_bq.attr({fill: '#010101', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M1307.8,467.4l-67.8-152l272.4,46.9L1307.8,467.4z");
        path_br.attr({fill: '#941A1D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M1236.7,563.3l-53.3,87.9h101.9L1236.7,563.3z");
        path_bs.attr({fill: '#232323', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M1266.6,771.6l67.5-121.7l-12.9,191L1266.6,771.6z");
        path_bt.attr({fill: '#181818', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M1307.8,467.4l74.8,78.7l258.9-30L1307.8,467.4z");
        path_bu.attr({fill: '#C02326', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M1290.8,651.2l-56.6,102.5L1192,651.2H1290.8z");
        path_bv.attr({fill: '#2E2E2E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M1641.4,516.1l-128.9-153.9l144.9-73.1L1641.4,516.1z");
        path_bw.attr({fill: '#791214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M1279.8,650.1l-43,80.5l97.3-80.6L1279.8,650.1z");
        path_bx.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M1512.5,362.2l-86.7-194l231.6,121L1512.5,362.2z");
        path_by.attr({fill: '#7C1315', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M1334.1,649.9l-54.3,0.1l-43.8-72.9L1334.1,649.9z");
        path_bz.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M1205.2,531.8l30.8,45.4l-99,74.3L1205.2,531.8z");
        path_ca.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M1236,577.1l30.5-45.4h-61.3L1236,577.1z");
        path_cb.attr({fill: '#868686', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M1266.5,531.8l-30.5,45.4l98.1,72.8L1266.5,531.8z");
        path_cc.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M1236,577.1l-45.1,72.9l-53.9,1.4L1236,577.1z");
        path_cd.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M1190.9,650.1l-53.9,1.4l99.8,79.1L1190.9,650.1z");
        path_ce.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M1205.2,771.6l31.6-41l29.8,41H1205.2z");
        path_cf.attr({fill: '#868686', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M1137,651.5l68.2,120.1l31.6-41L1137,651.5z");
        path_cg.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M1011.4,625l-198.9-34.7l204.4,39.1L1011.4,625z");
        path_ch.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M1011.4,625l-198.9-50.7v16L1011.4,625z");
        path_ci.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M1826.1,555.1l-400.4,72.8l399-85.4L1826.1,555.1z");
        path_cj.attr({fill: '#AFAFAF', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M1425.1,627.5l400.4-72.8l-406,78L1425.1,627.5z");
        path_ck.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M1280.8,905.1l292.7-90.9l-252.3,26.6L1280.8,905.1z");
        path_cl.attr({fill: '#791214', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M1645,1090.8l-737-16.7l372.7-169L1645,1090.8z");
        path_cm.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M1152,841.7l-15-190.3l68.2,120.1L1152,841.7z");
        path_cn.attr({fill: '#1E1E1E', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M1143.3,214.5l96.7,100.8l-221.2,49.8L1143.3,214.5z");
        path_co.attr({fill: '#C92027', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M802.2,645.3l254.5,82.2l95.2,114.2L802.2,645.3z");
        path_cp.attr({fill: '#C02326', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M827.4,195.8l191.4,169.4l-174.7,22.5L827.4,195.8z");
        path_cq.attr({fill: '#DB312D', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M1323.3,23l218.7,3.4l-116.2,141.8L1323.3,23z");
        path_cr.attr({fill: '#731012', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M1334.1,649.9l-67.5,121.7l-29.8-41L1334.1,649.9z");
        path_cs.attr({fill: '#9B9B9B', 'stroke-width': '0', 'stroke-opacity': '1'}).data('id', 'path_cs');
        return rsr.setFinish();
    },
    fadeInUp: function (object) {
        var fade_in_el;
        object.forEach(function (element, index) {
            var duration = 2000;
            var nagative_y = 1000 * Math.random();
            element.attr({'transform': 'T0,' + nagative_y});
            setTimeout(function() {
                "use strict";
                fade_in_el = Raphael.animation({
                    transform: 'T0,0'
                }, duration, 'cubic-bezier(0.23, 1, 0.32, 1)');
                element.animate(fade_in_el);
            }, 50)

        });
    },
    glowUp: function (object1, object2, duration) {
        var max = object1.length,
            i = 0,
            animation = undefined,
            hduration = duration / 2;
        if (max == undefined) max = 0;
        if (max < object2.length)
            max = object2.length;
        for (i = 0; i < max; i++) {
            if (object1[i] && object2[i]) {
                object1[i].attr('path', object2[i].attr('path').toString());
                object1[i].attr('fill-opacity', 0);
                object1[i].attr('fill', object2[i].attr('fill'));
                animation = Raphael.animation({
                    'fill-opacity': object2[i].attr('fill-opacity'),
                    'stroke-opacity': object2[i].attr('stoke-opacity'),
                    'stroke-width': object2[i].attr('stroke-width'),
                    'stroke-miterlimit': object2[i].attr('stroke-miterlimit'),
                    'stroke': object2[i].attr('stroke'),
                    'opacity': object2[i].attr('opacity'),
                    'easing': 'ease-out'
                }, hduration);
                object1[i].animate(animation);
            }
        }
        delete object1;
        delete object2;
        delete animation;
    },
    getPaper: function() {
        return this.paper;
    },
    setPaper: function(paper) {
        this.paper = paper;
    },
    morph: function (object1, object2, duration) {
        var max = object1.length;
        if (max == undefined) max = 0;
        if (max < object2.length)
            max = object2.length;
        var i = 0,
            animation = undefined;
        for (i; i < max; i++) {
            if (object1[i] && object2[i]) {
                animation = Raphael.animation({
                    'path': object2[i].attr('path').toString(),
                    'fill-opacity': object2[i].attr('fill-opacity'),
                    'stroke-opacity': object2[i].attr('stoke-opacity'),
                    'stroke-width': object2[i].attr('stroke-width'),
                    'stroke-miterlimit': object2[i].attr('stroke-miterlimit'),
                    'stroke': object2[i].attr('stroke'),
                    'fill': object2[i].attr('fill'),
                    'opacity': object2[i].attr('opacity'),
                    'easing': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
                }, duration);
                object1[i].animate(animation);
            }
        }
        delete object1;
        delete object2;
        delete animation;
    },
    updateBackground: function() {
        TweenLite.to(document.getElementById("background-illustration"), 1, {backgroundColor: this.backgroundData[this.current_slide_index]});
    },
    updateBackgroundTxt: function(i, j, v) {
        var el1 = this.backgroundTxt[i],
            el2 = this.backgroundTxt[j];
        if(Util.isMobile()) {
            //do nothing at this moment
        }
        else {
            TweenLite.fromTo(this.backgroundTxt[v].childNodes[1], 1, {x: '-100%'}, {x: '100%', ease: Power4.easeOut});
        }

        TweenLite.to(el1.childNodes[0], 0.5, {opacity: 0, ease: Power4.easeOut});
        TweenLite.to(el2.childNodes[0], 0, {opacity: 1, ease: Power4.easeOut}).delay(1);
        TweenLite.fromTo(el2, 0.9, {width: '0%'}, {width: '100%', ease: Power4.easeOut}).delay(1);
    },
    updatePrjInfo: function(i, j) {
            var el1 = this.prjInfo[i],
                el2 = this.prjInfo[j];
            TweenLite.to(document.getElementsByClassName('prj'), 1, {opacity: 0, ease: Linear.easeOut, onComplete: this.popEl, onCompleteParams: [this.prjInfo, '0']});
            if(Util.isMobile()) {
                TweenLite.to(el2, 1, {opacity: 1, ease: Linear.easeOut,  onComplete: this.popEl, onCompleteParams: [el2, '1']});
            }
            else {
                TweenLite.fromTo(el1.childNodes[1], 1, {y: '0%', ease: Linear.easeOut}, {y: '-25%', ease: Linear.easeOut});
                TweenLite.fromTo(el1.childNodes[3], 1, {y: '0%', ease: Linear.easeOut}, {y: '-25%', ease: Linear.easeOut});
                TweenLite.to(el2, 1, {opacity: 1, ease: Linear.easeOut,  onComplete: this.popEl, onCompleteParams: [el2, '1']});
                TweenLite.fromTo(el2.childNodes[1], 1, {y: '25%', ease: Linear.easeOut}, {y: '0%', ease: Linear.easeOut});
                TweenLite.fromTo(el2.childNodes[3], 1, {y: '25%', ease: Linear.easeOut}, {y: '0%', ease: Linear.easeOut});
            }

    },
    popEl: function(el, p) {
        if(el instanceof Array) {
            var l = el.length,
                i = 0;
            for(i; i < l; i++) {
                el[i].style.zIndex = p;
            }
        }
        else {
            if(typeof el !== 'undefined') {
                el.style.zIndex = p;
            }
        }
    },
    init: function() {
        this.current_slide_index = 0;
        Slider.fadeInUp(Slider.getPaper());
        this.updateBackground();
        that = this;
        document.getElementById('prj-txt-bg').classList.remove('disabled');
        var slide_control = document.getElementsByClassName('slide-control');
        TweenLite.fromTo(this.backgroundTxt[this.current_slide_index].childNodes[0], 1, {y: '3%', opacity: 0}, {y: '0%', opacity: 1, ease: Linear.easeOut}).delay(0.6);
        TweenLite.to(this.prjInfo[this.current_slide_index], 1, {opacity: 1, ease: Linear.easeOut});
        setTimeout(function() {
            "use strict";
            $(window).bind('mousewheel DOMMouseScroll', function(event){
                // scroll up
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    that.prev();
                    return;
                }
                // scroll down
                else {
                    that.next();
                    return;
                }
            });
        }, 2000);
    },
    next: function() {
        if(this.isBusy() == false) {
            this.markBusy(true);
            var i = this.current_slide_index,
                j = (i == 4 ? 0 : i + 1),
                that = this;
            setTimeout(function () {
                if(Util.isMobile()) {
                    that.glowUp(that.getPaper(), that.slidesData[j], 1500);
                }
                else {
                    that.morph(that.getPaper(), that.slidesData[j], 1500);
                }
            }, 1500);

            this.current_slide_index = j;
            
            this.updateBackground();
            this.updateBackgroundTxt(i, j, i);
            this.updatePrjInfo(i, j);
            // we use this trick to prevent the browser from getting too much task
            setTimeout(function () {
                that.markBusy(false);
            }, 3000);
        }
    },
    prev: function() {
        if(this.isBusy() == false) {
            this.markBusy(true);
            var i = this.current_slide_index,
                j = (i == 0 ? 4 : i - 1),
                variance = 0,
                that = this;
            switch (i) {
                case 0:
                    variance = 3;
                    break;
                case 1:
                    variance = 4;
                    break;
                default:
                    variance = i - 2;
                    break;
            }
            setTimeout(function () {
                if(Util.isMobile()) {
                    that.glowUp(that.getPaper(), that.slidesData[j], 1500);
                }
                else {
                    that.morph(that.getPaper(), that.slidesData[j], 1500);
                }
            }, 1500);

            this.current_slide_index = j;
            this.updateBackground();
            this.updateBackgroundTxt(i, j, i);
            this.updatePrjInfo(i, j);

            // we use this trick to prevent the browser from getting too much task
            setTimeout(function () {
                that.markBusy(false);
            }, 3000);
        }
    },
    isBusy: function() {
        "use strict";
        return this.processing;
    },
    markBusy: function(flag) {
        "use strict";
        this.processing = flag;
    }
}
