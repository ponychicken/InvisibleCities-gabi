/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'WaserHintergrundKopie',
                type: 'image',
                rect: ['-3338px', '10px','5409px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"WaserHintergrundKopie.jpg",'0px','0px']
            },
            {
                id: 'wasserkorpertransparent1',
                type: 'image',
                rect: ['-7398px', '-90px','5575px','1824px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wasserkorpertransparent1.png",'0px','0px']
            },
            {
                id: 'wassergesichterverlauf',
                type: 'image',
                rect: ['-8538px', '-220px','8013px','1912px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wassergesichterverlauf.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_wassergesichterverlauf}": [
                ["motion", "location", '-4531.5px 736px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_WaserHintergrundKopie}": [
                ["style", "left", '-3338px'],
                ["style", "top", '0px']
            ],
            "${_wasserkorpertransparent1}": [
                ["motion", "location", '-4610.5px 822px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12500,
            autoPlay: false,
            labels: {
                "loop_welle": 6161
            },
            timeline: [
                { id: "eid116", tween: [ "motion", "${_wassergesichterverlauf}", [[-4531.5, 736, 0, 0],[-2172.33, 876, 2209.61, 0, 4020.2, 0],[373.42, 680.9, 3626.22, -64.98, 2493.41, -44.68],[3583.99, 807.68, 2084.63, 53.82, 2424.75, 62.61],[4678.5, 736, 0, 0]]], position: 1944, duration: 10556 },
                { id: "eid95", tween: [ "style", "${_WaserHintergrundKopie}", "left", '0px', { fromValue: '-3338px'}], position: 0, duration: 12500 },
                { id: "eid110", tween: [ "style", "${_WaserHintergrundKopie}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_WaserHintergrundKopie}", "top", '0px', { fromValue: '0px'}], position: 12500, duration: 0 },
                { id: "eid115", tween: [ "motion", "${_wasserkorpertransparent1}", [[-4610.5, 822, 0, 0],[-3428.05, 980.79, 903.17, 54.83, 2172.14, 131.86],[-2394.21, 972, 948.98, 0, 1107.79, 0],[-1477.48, 928.81, 797.35, 0.12, 859.41, 0.13],[-707.45, 950.81, 613.43, -51.64, 794.65, -66.89],[-98.66, 813.18, 864.44, -120.19, 649.64, -90.33],[855.35, 835.32, 483.54, -11.76, 996.52, -24.24],[1743.67, 814.68, 639.22, 74.89, 1114.52, 130.57],[2522.15, 885.76, 849.16, 80.32, 631.61, 59.74],[3072.68, 962.79, 4122.18, 1.77, 374.26, 0.16],[4599.5, 822, 0, 0]]], position: 1944, duration: 10556 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "PART4");
