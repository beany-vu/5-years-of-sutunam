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


