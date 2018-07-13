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
