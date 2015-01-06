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
                id: 'sym_ausblick',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['1311px', '548px','361px','153px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'sym_vorzim',
                type: 'rect',
                rect: ['0', '-9','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['904px', '312px','620px','461px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'sym_schwarz',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'uberschwarz',
                type: 'rect',
                rect: ['844px', '319px','680px','449px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'wegzumhaus',
                type: 'rect',
                rect: ['-25', '-9','auto','auto','auto', 'auto']
            },
            {
                id: 'strich1',
                type: 'image',
                rect: ['0', '0','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"strich1.jpg",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'sym_ausblick',
                symbolName: 'sym_ausblick_1',
                autoPlay: {

                }
            },
            {
                id: 'sym_schwarz',
                symbolName: 'sym_schwarz',
                autoPlay: {

                }
            },
            {
                id: 'sym_vorzim',
                symbolName: 'sym_vorzim',
                autoPlay: {

                }
            },
            {
                id: 'wegzumhaus',
                symbolName: 'wegzumhaus',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_uberschwarz}": [
                ["style", "top", '319px'],
                ["style", "height", '449px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '844px'],
                ["style", "width", '680px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(199,138,138,1.00)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '548px'],
                ["style", "height", '153px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '1311px'],
                ["style", "width", '361px']
            ],
            "${_StageA}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_sym_ausblick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36000,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_vorhang": {
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
                    id: 'vorhangani',
                    type: 'image',
                    rect: ['0px', '0px', '5112px', '538px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/vorhangani.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_vorhangani}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '538px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '850px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid58", tween: [ "style", "${_vorhangani}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_vorhangani}", "left", '-871px', { fromValue: '0px'}], position: 500, duration: 0 },
                { id: "eid61", tween: [ "style", "${_vorhangani}", "left", '-1750px', { fromValue: '-872px'}], position: 1000, duration: 0 },
                { id: "eid62", tween: [ "style", "${_vorhangani}", "left", '-2610px', { fromValue: '-1751px'}], position: 1500, duration: 0 },
                { id: "eid63", tween: [ "style", "${_vorhangani}", "left", '-3462px', { fromValue: '-2610px'}], position: 2000, duration: 0 },
                { id: "eid64", tween: [ "style", "${_vorhangani}", "left", '-4313px', { fromValue: '-3464px'}], position: 2500, duration: 0 }            ]
        }
    }
},
"wegzumhaus": {
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
                    id: 'haushinterswrgb',
                    type: 'image',
                    rect: ['-580', '-403', '3414px', '2369px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/haushinterswrgb.jpg', '0px', '0px']
                },
                {
                    id: 'hauswegsw',
                    type: 'image',
                    rect: ['140px', '132px', '1737px', '916px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hauswegsw.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hauswegsw}": [
                ["transform", "scaleX", '0.66'],
                ["transform", "scaleY", '0.66'],
                ["style", "left", '142px'],
                ["style", "top", '216px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1564px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '8217px']
            ],
            "${_haushinterswrgb}": [
                ["transform", "scaleX", '0.66'],
                ["transform", "scaleY", '0.66']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid50", tween: [ "transform", "${_hauswegsw}", "scaleY", '1', { fromValue: '0.66'}], position: 0, duration: 3000 },
                { id: "eid129", tween: [ "style", "${_hauswegsw}", "left", '91px', { fromValue: '142px'}], position: 0, duration: 3000 },
                { id: "eid96", tween: [ "transform", "${_haushinterswrgb}", "scaleX", '1', { fromValue: '0.66'}], position: 0, duration: 3000 },
                { id: "eid128", tween: [ "style", "${_hauswegsw}", "top", '158px', { fromValue: '216px'}], position: 0, duration: 3000 },
                { id: "eid97", tween: [ "transform", "${_haushinterswrgb}", "scaleY", '1', { fromValue: '0.66'}], position: 0, duration: 3000 },
                { id: "eid49", tween: [ "transform", "${_hauswegsw}", "scaleX", '1', { fromValue: '0.66'}], position: 0, duration: 3000 }            ]
        }
    }
},
"sym_schwarz": {
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
                    type: 'rect',
                    id: 'schwarz',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_schwarz}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.850000'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid70", tween: [ "style", "${_schwarz}", "opacity", '0', { fromValue: '0.850000'}], position: 0, duration: 2000 }            ]
        }
    }
},
"sym_ausblick": {
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
                    id: 'wasserstruktur_Kopie',
                    type: 'image',
                    rect: ['526', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wasserstruktur%20Kopie.jpg', '0px', '0px']
                },
                {
                    id: 'ausblickwasserfrei',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ausblickwasserfrei.png', '0px', '0px']
                },
                {
                    id: 'aussichtvorsw2',
                    type: 'image',
                    rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aussichtvorsw.png', '0px', '0px']
                },
                {
                    id: 'huhliegenkorper2',
                    type: 'image',
                    rect: ['1116px', '1198px', '140px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                },
                {
                    id: 'sym_huhliegenkopf',
                    type: 'rect',
                    rect: ['1146px', '1214px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_huhpickenganzani',
                    type: 'rect',
                    rect: ['1465px', '1242px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'huhpickenkorper2',
                    type: 'image',
                    rect: ['1278px', '1291px', '163px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhpickenkorper.png', '0px', '0px']
                },
                {
                    id: 'sym_huhpickenkopfkoroer',
                    type: 'rect',
                    rect: ['1278px', '1291px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_huhliegenkopf',
                symbolName: 'sym_huhliegenkopf',
                autoPlay: {

               }
            },
            {
                id: 'sym_huhpickenkopfkoroer',
                symbolName: 'sym_huhpickenkopfkoroer',
                autoPlay: {

               }
            },
            {
                id: 'sym_huhpickenganzani',
                symbolName: 'sym_huhpickenganzani',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_huhpickenkorper2}": [
                ["motion", "location", '1359.5px 1364px'],
                ["transform", "scaleX", '1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_huhliegenkorper2}": [
                ["style", "left", '1116px'],
                ["style", "top", '1198px']
            ],
            "${_sym_huhpickenkopfkoroer}": [
                ["motion", "location", '1310.5px 1364px'],
                ["transform", "scaleX", '1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_huhliegenkopf}": [
                ["style", "left", '1146px'],
                ["style", "top", '1214px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_wasserstruktur_Kopie}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '-74px'],
                ["transform", "scaleY", '0.53'],
                ["style", "left", '399px']
            ],
            "${_ausblickwasserfrei}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '-94px'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_sym_huhpickenganzani}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '1550px 1319.5px']
            ],
            "${_aussichtvorsw2}": [
                ["style", "top", '-94px'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53'],
                ["transform", "scaleX", '0.53']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15162,
            autoPlay: false,
            labels: {
                "huhsontherun": 3069
            },
            timeline: [
                { id: "eid515", tween: [ "transform", "${_wasserstruktur_Kopie}", "scaleX", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid513", tween: [ "style", "${_ausblickwasserfrei}", "left", '0px', { fromValue: '133px'}], position: 0, duration: 3000 },
                { id: "eid375", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5250, duration: 0 },
                { id: "eid376", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 5500, duration: 0 },
                { id: "eid378", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 5750, duration: 0 },
                { id: "eid380", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid382", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 6250, duration: 0 },
                { id: "eid387", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10500, duration: 0 },
                { id: "eid388", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 10750, duration: 0 },
                { id: "eid389", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 11000, duration: 0 },
                { id: "eid390", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 11250, duration: 0 },
                { id: "eid391", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 11500, duration: 0 },
                { id: "eid259", tween: [ "transform", "${_aussichtvorsw2}", "scaleX", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid374", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5250, duration: 0 },
                { id: "eid377", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 5500, duration: 0 },
                { id: "eid379", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 5750, duration: 0 },
                { id: "eid381", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid383", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 6250, duration: 0 },
                { id: "eid393", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10500, duration: 0 },
                { id: "eid394", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 10750, duration: 0 },
                { id: "eid395", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 11000, duration: 0 },
                { id: "eid396", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 11250, duration: 0 },
                { id: "eid397", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 11500, duration: 0 },
                { id: "eid510", tween: [ "style", "${_ausblickwasserfrei}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 3000 },
                { id: "eid271", tween: [ "style", "${_aussichtvorsw2}", "left", '0px', { fromValue: '133px'}], position: 0, duration: 3000 },
                { id: "eid403", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '1', { fromValue: '1'}], position: 3184, duration: 0 },
                { id: "eid401", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '-1', { fromValue: '1'}], position: 9500, duration: 0 },
                { id: "eid512", tween: [ "transform", "${_ausblickwasserfrei}", "scaleY", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid371", tween: [ "motion", "${_huhpickenkorper2}", [[1359.5, 1364, 0, 0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22],[1307.5, 1366.14, 0, 0]]], position: 5250, duration: 1000 },
                { id: "eid400", tween: [ "motion", "${_huhpickenkorper2}", [[1307.5, 1366.14, 0, 0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81],[1359.5, 1364, 0, 0]]], position: 10500, duration: 1000 },
                { id: "eid260", tween: [ "transform", "${_aussichtvorsw2}", "scaleY", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid370", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1310.5, 1364, 0, 0],[1299.5, 1364, -20.19, -2.76]]], position: 5250, duration: 250 },
                { id: "eid384", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1299.5, 1364, -5.53, -0.76],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76],[1258.5, 1366.14, 0, 0]]], position: 5500, duration: 750 },
                { id: "eid405", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1356.51, 1366, 0, 0],[1356.51, 1366, 0, 0]]], position: 9500, duration: 0 },
                { id: "eid398", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1352.91, 1367.26, 0, 0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4],[1393.91, 1365.12, 5.53, 0.76]]], position: 10500, duration: 750 },
                { id: "eid399", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1393.91, 1365.12, 20.19, 2.76],[1404.91, 1365.12, 0, 0]]], position: 11250, duration: 250 },
                { id: "eid517", tween: [ "transform", "${_wasserstruktur_Kopie}", "scaleY", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid404", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '1', { fromValue: '1'}], position: 3184, duration: 0 },
                { id: "eid402", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '-1', { fromValue: '1'}], position: 9500, duration: 0 },
                { id: "eid535", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-94px', { fromValue: '-74px'}], position: 0, duration: 3000 },
                { id: "eid526", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-136px', { fromValue: '-94px'}], position: 3069, duration: 2016 },
                { id: "eid527", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-7px', { fromValue: '-136px'}], position: 5085, duration: 3596 },
                { id: "eid528", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-82px', { fromValue: '-7px'}], position: 8680, duration: 4769 },
                { id: "eid529", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-94px', { fromValue: '-82px'}], position: 13449, duration: 1713 },
                { id: "eid272", tween: [ "style", "${_aussichtvorsw2}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 3000 },
                { id: "eid534", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '439px', { fromValue: '399px'}], position: 0, duration: 3000 },
                { id: "eid523", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '266px', { fromValue: '439px'}], position: 3069, duration: 3407 },
                { id: "eid524", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '517px', { fromValue: '266px'}], position: 6476, duration: 4655 },
                { id: "eid525", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '439px', { fromValue: '517px'}], position: 11131, duration: 4031 },
                { id: "eid511", tween: [ "transform", "${_ausblickwasserfrei}", "scaleX", '1', { fromValue: '0.53'}], position: 0, duration: 3000 }            ]
        }
    }
},
"sym_zimmer": {
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
                    id: 'zimmer',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/zimmer.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_zimmer}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_vorzim": {
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
                    id: 'sym_zimmer2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_vorhang',
                    type: 'rect',
                    rect: ['773px', '274px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'zimpflanze2',
                    type: 'image',
                    rect: ['1632px', '245px', '336px', '393px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/zimpflanze2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_vorhang',
                symbolName: 'sym_vorhang',
                autoPlay: {

               }
            },
            {
                id: 'sym_zimmer2',
                symbolName: 'sym_zimmer',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_zimpflanze2}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '1673px'],
                ["style", "top", '242px']
            ],
            "${_sym_zimmer2}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_vorhang}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '767px'],
                ["style", "top", '263px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid537", tween: [ "transform", "${_zimpflanze2}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid190", tween: [ "style", "${_sym_vorhang}", "top", '404px', { fromValue: '263px'}], position: 0, duration: 4000 },
                { id: "eid539", tween: [ "transform", "${_zimpflanze2}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid165", tween: [ "transform", "${_sym_vorhang}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid536", tween: [ "style", "${_zimpflanze2}", "top", '155px', { fromValue: '242px'}], position: 0, duration: 4000 },
                { id: "eid166", tween: [ "transform", "${_sym_vorhang}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid189", tween: [ "style", "${_sym_vorhang}", "left", '289px', { fromValue: '767px'}], position: 0, duration: 4000 },
                { id: "eid161", tween: [ "transform", "${_sym_zimmer2}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid187", tween: [ "style", "${_sym_zimmer2}", "left", '-851px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid162", tween: [ "transform", "${_sym_zimmer2}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid188", tween: [ "style", "${_sym_zimmer2}", "top", '791px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid538", tween: [ "style", "${_zimpflanze2}", "left", '3080px', { fromValue: '1673px'}], position: 0, duration: 4000 }            ]
        }
    }
},
"sym_huhliegen": {
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
                    id: 'huhliegenkorper',
                    type: 'image',
                    rect: ['0px', '0px', '140px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                },
                {
                    id: 'huhliegenkopf',
                    type: 'image',
                    rect: ['0px', '0px', '242px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkopf.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_huhliegenkopf}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_huhliegenkorper}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '122px'],
                ["style", "width", '242px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_huhliegenkopf": {
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
                    id: 'huhliegenkopf2',
                    type: 'image',
                    rect: ['-6px', '0px', '242px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkopf.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '50px']
            ],
            "${_huhliegenkopf2}": [
                ["style", "left", '-5px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            labels: {
                "loophuhn1": 0
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_huhliegenkopf2}", "left", '-5px', { fromValue: '-5px'}], position: 0, duration: 0 },
                { id: "eid286", tween: [ "style", "${_huhliegenkopf2}", "left", '-60px', { fromValue: '-5px'}], position: 649, duration: 0 },
                { id: "eid287", tween: [ "style", "${_huhliegenkopf2}", "left", '-121px', { fromValue: '-60px'}], position: 1182, duration: 0 },
                { id: "eid288", tween: [ "style", "${_huhliegenkopf2}", "left", '-185px', { fromValue: '-121px'}], position: 1750, duration: 0 },
                { id: "eid289", tween: [ "style", "${_huhliegenkopf2}", "left", '-121px', { fromValue: '-185px'}], position: 2750, duration: 0 },
                { id: "eid290", tween: [ "style", "${_huhliegenkopf2}", "left", '-61px', { fromValue: '-121px'}], position: 4399, duration: 0 }            ]
        }
    }
},
"sym_huhflugelganzani": {
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
                    id: 'huhflugelganzani',
                    type: 'image',
                    rect: ['-21px', '-5px', '1109px', '259px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhflugelganzani.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_huhflugelganzani}": [
                ["style", "left", '-21px'],
                ["style", "top", '-5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '259px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '180px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3116,
            autoPlay: false,
            labels: {
                "loophuhflugelganzani2": 0,
                "labelhuhflugelganzani": 1095
            },
            timeline: [
                { id: "eid305", tween: [ "style", "${_huhflugelganzani}", "top", '-5px', { fromValue: '-5px'}], position: 0, duration: 0 },
                { id: "eid307", tween: [ "style", "${_huhflugelganzani}", "top", '-6px', { fromValue: '-5px'}], position: 392, duration: 0 },
                { id: "eid309", tween: [ "style", "${_huhflugelganzani}", "top", '-4px', { fromValue: '-6px'}], position: 750, duration: 0 },
                { id: "eid311", tween: [ "style", "${_huhflugelganzani}", "top", '-2px', { fromValue: '-4px'}], position: 1095, duration: 0 },
                { id: "eid313", tween: [ "style", "${_huhflugelganzani}", "top", '2px', { fromValue: '-2px'}], position: 1386, duration: 0 },
                { id: "eid315", tween: [ "style", "${_huhflugelganzani}", "top", '-3px', { fromValue: '2px'}], position: 1750, duration: 0 },
                { id: "eid317", tween: [ "style", "${_huhflugelganzani}", "top", '2px', { fromValue: '-3px'}], position: 2000, duration: 0 },
                { id: "eid319", tween: [ "style", "${_huhflugelganzani}", "top", '-3px', { fromValue: '2px'}], position: 2305, duration: 0 },
                { id: "eid321", tween: [ "style", "${_huhflugelganzani}", "top", '2px', { fromValue: '-3px'}], position: 2643, duration: 0 },
                { id: "eid323", tween: [ "style", "${_huhflugelganzani}", "top", '3px', { fromValue: '2px'}], position: 2839, duration: 0 },
                { id: "eid304", tween: [ "style", "${_huhflugelganzani}", "left", '-21px', { fromValue: '-21px'}], position: 0, duration: 0 },
                { id: "eid306", tween: [ "style", "${_huhflugelganzani}", "left", '-197px', { fromValue: '-21px'}], position: 392, duration: 0 },
                { id: "eid308", tween: [ "style", "${_huhflugelganzani}", "left", '-374px', { fromValue: '-197px'}], position: 750, duration: 0 },
                { id: "eid310", tween: [ "style", "${_huhflugelganzani}", "left", '-548px', { fromValue: '-374px'}], position: 1095, duration: 0 },
                { id: "eid312", tween: [ "style", "${_huhflugelganzani}", "left", '-739px', { fromValue: '-548px'}], position: 1386, duration: 0 },
                { id: "eid314", tween: [ "style", "${_huhflugelganzani}", "left", '-918px', { fromValue: '-739px'}], position: 1750, duration: 0 },
                { id: "eid316", tween: [ "style", "${_huhflugelganzani}", "left", '-734px', { fromValue: '-918px'}], position: 2000, duration: 0 },
                { id: "eid318", tween: [ "style", "${_huhflugelganzani}", "left", '-543px', { fromValue: '-734px'}], position: 2305, duration: 0 },
                { id: "eid320", tween: [ "style", "${_huhflugelganzani}", "left", '-385px', { fromValue: '-543px'}], position: 2643, duration: 0 },
                { id: "eid322", tween: [ "style", "${_huhflugelganzani}", "left", '-205px', { fromValue: '-385px'}], position: 2839, duration: 0 }            ]
        }
    }
},
"sym_huhpickenganzani": {
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
                    id: 'huhpickenganzani',
                    type: 'image',
                    rect: ['-7px', '0px', '550px', '147px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhpickenganzani.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_huhpickenganzani}": [
                ["style", "left", '-7px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '155px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3717,
            autoPlay: false,
            labels: {
                "loophuhpickenganzani3": 0
            },
            timeline: [
                { id: "eid328", tween: [ "style", "${_huhpickenganzani}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
                { id: "eid330", tween: [ "style", "${_huhpickenganzani}", "left", '-190px', { fromValue: '-7px'}], position: 2250, duration: 0 },
                { id: "eid332", tween: [ "style", "${_huhpickenganzani}", "left", '-367px', { fromValue: '-190px'}], position: 2635, duration: 0 },
                { id: "eid334", tween: [ "style", "${_huhpickenganzani}", "left", '-190px', { fromValue: '-367px'}], position: 3467, duration: 0 },
                { id: "eid329", tween: [ "style", "${_huhpickenganzani}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid331", tween: [ "style", "${_huhpickenganzani}", "top", '2px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid333", tween: [ "style", "${_huhpickenganzani}", "top", '5px', { fromValue: '2px'}], position: 2635, duration: 0 },
                { id: "eid335", tween: [ "style", "${_huhpickenganzani}", "top", '0px', { fromValue: '5px'}], position: 3467, duration: 0 }            ]
        }
    }
},
"sym_huhpickenkopfkoroer": {
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
                    id: 'huhpickenkopf',
                    type: 'image',
                    rect: ['-11px', '0px', '163px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhpickenkopf.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_huhpickenkopf}": [
                ["style", "left", '-87px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: false,
            labels: {
                "loophuhn4": 0
            },
            timeline: [
                { id: "eid340", tween: [ "style", "${_huhpickenkopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid339", tween: [ "style", "${_huhpickenkopf}", "left", '-87px', { fromValue: '-87px'}], position: 0, duration: 0 },
                { id: "eid341", tween: [ "style", "${_huhpickenkopf}", "left", '-4px', { fromValue: '-87px'}], position: 500, duration: 0 }            ]
        }
    }
},
"sym_blatt": {
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
                    id: 'sym_auge',
                    type: 'rect',
                    rect: ['0', '2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ib',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ib.png', '0px', '0px']
                },
                {
                    id: 'hb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hb.png', '0px', '0px']
                },
                {
                    id: 'gb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gb.png', '0px', '0px']
                },
                {
                    id: 'fb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fb.png', '0px', '0px']
                },
                {
                    id: 'eb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eb.png', '0px', '0px']
                },
                {
                    id: 'db',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/db.png', '0px', '0px']
                },
                {
                    id: 'cb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cb.png', '0px', '0px']
                },
                {
                    id: 'bb',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bb.png', '0px', '0px']
                },
                {
                    id: 'a',
                    type: 'image',
                    rect: ['0px', '0px', '2150px', '1613px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_auge',
                symbolName: 'sym_auge',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_db}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_a}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_cb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_bb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_eb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_gb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_fb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_ib}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_hb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "loop_blatt": 0
            },
            timeline: [
                { id: "eid421", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0 },
                { id: "eid481", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 500, duration: 0 },
                { id: "eid482", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 1000, duration: 0 },
                { id: "eid453", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid496", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 500, duration: 500 },
                { id: "eid448", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid493", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid450", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid494", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 500, duration: 500 },
                { id: "eid419", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0 },
                { id: "eid478", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 500, duration: 0 },
                { id: "eid479", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 1000, duration: 0 },
                { id: "eid454", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid498", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid451", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid495", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid447", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid491", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 500, duration: 500 },
                { id: "eid445", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid488", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid457", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid500", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 500, duration: 500 },
                { id: "eid456", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid501", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 500, duration: 500 },
                { id: "eid442", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid487", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 500, duration: 500 },
                { id: "eid443", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid486", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 500, duration: 500 },
                { id: "eid452", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid497", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 500, duration: 500 },
                { id: "eid455", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid499", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid449", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid492", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 500, duration: 500 },
                { id: "eid446", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid490", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid444", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid489", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 500, duration: 500 }            ]
        }
    }
},
"sym_auge": {
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
                    id: 'augenaufschlagauge',
                    type: 'image',
                    rect: ['0px', '0px', '14336px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/augenaufschlagauge.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_augenaufschlagauge}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            timeline: [
                { id: "eid458", tween: [ "style", "${_augenaufschlagauge}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid460", tween: [ "style", "${_augenaufschlagauge}", "left", '-2048px', { fromValue: '0px'}], position: 311, duration: 0 },
                { id: "eid461", tween: [ "style", "${_augenaufschlagauge}", "left", '-4096px', { fromValue: '-2048px'}], position: 642, duration: 0 },
                { id: "eid462", tween: [ "style", "${_augenaufschlagauge}", "left", '-6144px', { fromValue: '-4096px'}], position: 1000, duration: 0 },
                { id: "eid463", tween: [ "style", "${_augenaufschlagauge}", "left", '-8192px', { fromValue: '-6144px'}], position: 1338, duration: 0 },
                { id: "eid464", tween: [ "style", "${_augenaufschlagauge}", "left", '-10310px', { fromValue: '-8192px'}], position: 1839, duration: 0 },
                { id: "eid465", tween: [ "style", "${_augenaufschlagauge}", "left", '-12367px', { fromValue: '-10000px'}], position: 2250, duration: 0 },
                { id: "eid459", tween: [ "style", "${_augenaufschlagauge}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_ausblick_1": {
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
                    id: 'wasserstruktur_KopieCopy',
                    type: 'image',
                    rect: ['526', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wasserstruktur%20Kopie.jpg', '0px', '0px']
                },
                {
                    id: 'ausblickwasserfrei',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ausblickwasserfrei.png', '0px', '0px']
                },
                {
                    id: 'aussichtvorsw2',
                    type: 'image',
                    rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aussichtvorsw.png', '0px', '0px']
                },
                {
                    id: 'huhliegenkorper2',
                    type: 'image',
                    rect: ['1116px', '1198px', '140px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                },
                {
                    id: 'sym_huhliegenkopf',
                    type: 'rect',
                    rect: ['1146px', '1214px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_huhpickenganzani',
                    type: 'rect',
                    rect: ['1465px', '1242px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'huhpickenkorper2',
                    type: 'image',
                    rect: ['1278px', '1291px', '163px', '146px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhpickenkorper.png', '0px', '0px']
                },
                {
                    id: 'sym_huhpickenkopfkoroer',
                    type: 'rect',
                    rect: ['1278px', '1291px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_blattbaum',
                    type: 'rect',
                    rect: ['452', '254', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_baumgesicht',
                    type: 'rect',
                    rect: ['788', '416', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'bruckesitzen',
                    type: 'image',
                    rect: ['1663px', '500px', '235px', '236px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bruckesitzen.png', '0px', '0px']
                },
                {
                    id: 'sitzenwasser',
                    type: 'image',
                    rect: ['1212px', '390px', '116px', '135px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sitzenwasser.png', '0px', '0px']
                },
                {
                    id: 'sym_sprung',
                    type: 'rect',
                    rect: ['1497', '419', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_sprung',
                symbolName: 'sym_sprung',
                autoPlay: {

               }
            },
            {
                id: 'sym_huhpickenganzani',
                symbolName: 'sym_huhpickenganzani',
                autoPlay: {

               }
            },
            {
                id: 'sym_baumgesicht',
                symbolName: 'sym_baumgesicht',
                autoPlay: {

               }
            },
            {
                id: 'sym_huhliegenkopf',
                symbolName: 'sym_huhliegenkopf',
                autoPlay: {

               }
            },
            {
                id: 'sym_blattbaum',
                symbolName: 'sym_blattbaum',
                autoPlay: {

               }
            },
            {
                id: 'sym_huhpickenkopfkoroer',
                symbolName: 'sym_huhpickenkopfkoroer',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_ausblickwasserfrei}": [
                ["transform", "scaleX", '0.53'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53'],
                ["style", "top", '-94px']
            ],
            "${_sym_baumgesicht}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '390px'],
                ["transform", "scaleY", '0.53'],
                ["style", "left", '753px']
            ],
            "${_aussichtvorsw2}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '-94px'],
                ["transform", "scaleY", '0.53'],
                ["style", "left", '133px']
            ],
            "${_sym_huhpickenkopfkoroer}": [
                ["transform", "scaleX", '1'],
                ["motion", "location", '1310.5px 1364px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_sprung}": [
                ["style", "top", '445px'],
                ["transform", "scaleY", '0.4'],
                ["style", "overflow", 'hidden'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '1327px']
            ],
            "${_huhpickenkorper2}": [
                ["transform", "scaleX", '1'],
                ["motion", "location", '1359.5px 1364px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sitzenwasser}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '445px'],
                ["style", "left", '1229px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_sym_huhliegenkopf}": [
                ["style", "left", '1146px'],
                ["style", "top", '1214px']
            ],
            "${_huhliegenkorper2}": [
                ["style", "left", '1116px'],
                ["style", "top", '1198px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_sym_blattbaum}": [
                ["transform", "scaleX", '0.53'],
                ["style", "left", '694px'],
                ["transform", "scaleY", '0.53'],
                ["style", "top", '271px']
            ],
            "${_sym_huhpickenganzani}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '1550px 1319.5px']
            ],
            "${_wasserstruktur_KopieCopy}": [
                ["style", "top", '-229px'],
                ["transform", "scaleX", '0.53'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_bruckesitzen}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '479px'],
                ["style", "left", '1439px'],
                ["transform", "scaleY", '0.53']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 36000,
            autoPlay: true,
            labels: {
                "wasser": 0,
                "ausblick_zoom": 16245,
                "huhsontherun": 19570
            },
            timeline: [
                { id: "eid710", tween: [ "transform", "${_sym_sprung}", "scaleX", '0.8', { fromValue: '0.4'}], position: 16245, duration: 3325 },
                { id: "eid571", tween: [ "transform", "${_sym_baumgesicht}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid743", tween: [ "transform", "${_sitzenwasser}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid259", tween: [ "transform", "${_aussichtvorsw2}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid374", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 21860, duration: 0 },
                { id: "eid377", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 22137, duration: 0 },
                { id: "eid379", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 22414, duration: 0 },
                { id: "eid381", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 22691, duration: 0 },
                { id: "eid383", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 22968, duration: 0 },
                { id: "eid393", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 27677, duration: 0 },
                { id: "eid394", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 27955, duration: 0 },
                { id: "eid395", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 28232, duration: 0 },
                { id: "eid396", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 28509, duration: 0 },
                { id: "eid397", tween: [ "transform", "${_huhpickenkorper2}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 28786, duration: 0 },
                { id: "eid510", tween: [ "style", "${_ausblickwasserfrei}", "top", '0px', { fromValue: '-94px'}], position: 16245, duration: 3325 },
                { id: "eid271", tween: [ "style", "${_aussichtvorsw2}", "left", '0px', { fromValue: '133px'}], position: 16245, duration: 3325 },
                { id: "eid713", tween: [ "style", "${_sym_sprung}", "top", '433px', { fromValue: '445px'}], position: 16245, duration: 3325 },
                { id: "eid272", tween: [ "style", "${_aussichtvorsw2}", "top", '0px', { fromValue: '-94px'}], position: 16245, duration: 3325 },
                { id: "eid720", tween: [ "style", "${_sym_blattbaum}", "top", '254px', { fromValue: '271px'}], position: 16245, duration: 3325 },
                { id: "eid370", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1310.5, 1364, 0, 0],[1299.5, 1364, -20.19, -2.76]]], position: 21860, duration: 277 },
                { id: "eid384", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1299.5, 1364, -5.53, -0.76],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76],[1258.5, 1366.14, 0, 0]]], position: 22137, duration: 831 },
                { id: "eid405", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1356.51, 1366, 0, 0],[1356.51, 1366, 0, 0]]], position: 26569, duration: 0 },
                { id: "eid398", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1352.91, 1367.26, 0, 0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4],[1393.91, 1365.12, 5.53, 0.76]]], position: 27677, duration: 831 },
                { id: "eid399", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1393.91, 1365.12, 20.19, 2.76],[1404.91, 1365.12, 0, 0]]], position: 28509, duration: 277 },
                { id: "eid735", tween: [ "transform", "${_bruckesitzen}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid570", tween: [ "style", "${_sym_baumgesicht}", "top", '317px', { fromValue: '390px'}], position: 16245, duration: 3325 },
                { id: "eid719", tween: [ "transform", "${_sym_blattbaum}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid711", tween: [ "transform", "${_sym_sprung}", "scaleY", '0.8', { fromValue: '0.4'}], position: 16245, duration: 3325 },
                { id: "eid513", tween: [ "style", "${_ausblickwasserfrei}", "left", '0px', { fromValue: '133px'}], position: 16245, duration: 3325 },
                { id: "eid375", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 21860, duration: 0 },
                { id: "eid376", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 22137, duration: 0 },
                { id: "eid378", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 22414, duration: 0 },
                { id: "eid380", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 22691, duration: 0 },
                { id: "eid382", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 22968, duration: 0 },
                { id: "eid387", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 27677, duration: 0 },
                { id: "eid388", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 27955, duration: 0 },
                { id: "eid389", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 28232, duration: 0 },
                { id: "eid390", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 28509, duration: 0 },
                { id: "eid391", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 28786, duration: 0 },
                { id: "eid569", tween: [ "style", "${_sym_baumgesicht}", "left", '345px', { fromValue: '753px'}], position: 16245, duration: 3325 },
                { id: "eid404", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '1', { fromValue: '1'}], position: 19570, duration: 0 },
                { id: "eid402", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '-1', { fromValue: '1'}], position: 26569, duration: 0 },
                { id: "eid712", tween: [ "style", "${_sym_sprung}", "left", '1458px', { fromValue: '1327px'}], position: 16245, duration: 3325 },
                { id: "eid371", tween: [ "motion", "${_huhpickenkorper2}", [[1359.5, 1364, 0, 0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22],[1307.5, 1366.14, 0, 0]]], position: 21860, duration: 1108 },
                { id: "eid400", tween: [ "motion", "${_huhpickenkorper2}", [[1307.5, 1366.14, 0, 0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81],[1359.5, 1364, 0, 0]]], position: 27677, duration: 1108 },
                { id: "eid714", tween: [ "transform", "${_wasserstruktur_KopieCopy}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid722", tween: [ "style", "${_sym_blattbaum}", "left", '452px', { fromValue: '694px'}], position: 16245, duration: 3325 },
                { id: "eid403", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '1', { fromValue: '1'}], position: 19570, duration: 0 },
                { id: "eid401", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '-1', { fromValue: '1'}], position: 26569, duration: 0 },
                { id: "eid718", tween: [ "style", "${_wasserstruktur_KopieCopy}", "left", '517px', { fromValue: '133px'}], position: 0, duration: 15750 },
                { id: "eid723", tween: [ "style", "${_wasserstruktur_KopieCopy}", "left", '113px', { fromValue: '133px'}], position: 16245, duration: 3325 },
                { id: "eid724", tween: [ "style", "${_wasserstruktur_KopieCopy}", "left", '517px', { fromValue: '113px'}], position: 19570, duration: 16430 },
                { id: "eid742", tween: [ "transform", "${_sitzenwasser}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid734", tween: [ "transform", "${_bruckesitzen}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid512", tween: [ "transform", "${_ausblickwasserfrei}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid721", tween: [ "transform", "${_sym_blattbaum}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid260", tween: [ "transform", "${_aussichtvorsw2}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid715", tween: [ "style", "${_wasserstruktur_KopieCopy}", "top", '-7px', { fromValue: '-229px'}], position: 0, duration: 15750 },
                { id: "eid716", tween: [ "style", "${_wasserstruktur_KopieCopy}", "top", '-47px', { fromValue: '-277px'}], position: 16245, duration: 3325 },
                { id: "eid717", tween: [ "style", "${_wasserstruktur_KopieCopy}", "top", '-7px', { fromValue: '-47px'}], position: 19570, duration: 16430 },
                { id: "eid725", tween: [ "transform", "${_wasserstruktur_KopieCopy}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid736", tween: [ "style", "${_bruckesitzen}", "left", '1663px', { fromValue: '1439px'}], position: 16245, duration: 3325 },
                { id: "eid511", tween: [ "transform", "${_ausblickwasserfrei}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid745", tween: [ "style", "${_sitzenwasser}", "left", '1212px', { fromValue: '1229px'}], position: 16245, duration: 3325 },
                { id: "eid744", tween: [ "style", "${_sitzenwasser}", "top", '390px', { fromValue: '445px'}], position: 16245, duration: 3325 },
                { id: "eid572", tween: [ "transform", "${_sym_baumgesicht}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid737", tween: [ "style", "${_bruckesitzen}", "top", '500px', { fromValue: '479px'}], position: 16245, duration: 3325 }            ]
        }
    }
},
"sym_blattbaum": {
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
                    id: 'baubeweg2',
                    type: 'image',
                    rect: ['43px', '142px', '610px', '428px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baubeweg2.png', '0px', '0px']
                },
                {
                    id: 'baubeweg1',
                    type: 'image',
                    rect: ['0px', '0px', '678px', '396px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baubeweg1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_baubeweg2}": [
                ["style", "top", '142px'],
                ["style", "opacity", '0'],
                ["style", "left", '43px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_baubeweg1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '570px'],
                ["style", "width", '678px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            labels: {
                "loop_blatt": 303
            },
            timeline: [
                { id: "eid634", tween: [ "style", "${_baubeweg2}", "left", '43px', { fromValue: '43px'}], position: 0, duration: 0 },
                { id: "eid681", tween: [ "style", "${_baubeweg2}", "left", '45px', { fromValue: '43px'}], position: 303, duration: 357 },
                { id: "eid682", tween: [ "style", "${_baubeweg2}", "left", '43px', { fromValue: '45px'}], position: 660, duration: 294 },
                { id: "eid683", tween: [ "style", "${_baubeweg2}", "left", '42px', { fromValue: '43px'}], position: 954, duration: 247 },
                { id: "eid684", tween: [ "style", "${_baubeweg2}", "left", '43px', { fromValue: '42px'}], position: 1201, duration: 247 },
                { id: "eid685", tween: [ "style", "${_baubeweg2}", "left", '45px', { fromValue: '43px'}], position: 1448, duration: 294 },
                { id: "eid686", tween: [ "style", "${_baubeweg2}", "left", '43px', { fromValue: '45px'}], position: 1742, duration: 357 },
                { id: "eid641", tween: [ "style", "${_baubeweg2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid704", tween: [ "style", "${_baubeweg2}", "opacity", '0.5', { fromValue: '0'}], position: 303, duration: 296 },
                { id: "eid703", tween: [ "style", "${_baubeweg2}", "opacity", '0', { fromValue: '0.5'}], position: 599, duration: 299 },
                { id: "eid702", tween: [ "style", "${_baubeweg2}", "opacity", '0.5', { fromValue: '0'}], position: 898, duration: 406 },
                { id: "eid705", tween: [ "style", "${_baubeweg2}", "opacity", '0', { fromValue: '0.5'}], position: 1304, duration: 492 },
                { id: "eid696", tween: [ "style", "${_baubeweg1}", "opacity", '0', { fromValue: '0.5'}], position: 303, duration: 296 },
                { id: "eid697", tween: [ "style", "${_baubeweg1}", "opacity", '0.5', { fromValue: '0'}], position: 599, duration: 299 },
                { id: "eid698", tween: [ "style", "${_baubeweg1}", "opacity", '0', { fromValue: '0.5'}], position: 898, duration: 406 },
                { id: "eid699", tween: [ "style", "${_baubeweg1}", "opacity", '0.5', { fromValue: '0'}], position: 1304, duration: 492 },
                { id: "eid642", tween: [ "style", "${_baubeweg1}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 357 },
                { id: "eid648", tween: [ "style", "${_baubeweg1}", "left", '0px', { fromValue: '2px'}], position: 357, duration: 294 },
                { id: "eid650", tween: [ "style", "${_baubeweg1}", "left", '-1px', { fromValue: '0px'}], position: 651, duration: 247 },
                { id: "eid668", tween: [ "style", "${_baubeweg1}", "left", '0px', { fromValue: '-1px'}], position: 898, duration: 247 },
                { id: "eid667", tween: [ "style", "${_baubeweg1}", "left", '2px', { fromValue: '0px'}], position: 1145, duration: 294 },
                { id: "eid666", tween: [ "style", "${_baubeweg1}", "left", '0px', { fromValue: '2px'}], position: 1439, duration: 357 },
                { id: "eid637", tween: [ "transform", "${_baubeweg2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid687", tween: [ "transform", "${_baubeweg2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 303, duration: 250 },
                { id: "eid688", tween: [ "transform", "${_baubeweg2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 553, duration: 133 },
                { id: "eid689", tween: [ "transform", "${_baubeweg2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 803, duration: 295 },
                { id: "eid690", tween: [ "transform", "${_baubeweg2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1098, duration: 103 },
                { id: "eid691", tween: [ "transform", "${_baubeweg2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1201, duration: 103 },
                { id: "eid692", tween: [ "transform", "${_baubeweg2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1304, duration: 295 },
                { id: "eid693", tween: [ "transform", "${_baubeweg2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1716, duration: 133 },
                { id: "eid694", tween: [ "transform", "${_baubeweg2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1849, duration: 250 },
                { id: "eid644", tween: [ "transform", "${_baubeweg1}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid645", tween: [ "transform", "${_baubeweg1}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 250, duration: 133 },
                { id: "eid646", tween: [ "transform", "${_baubeweg1}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 500, duration: 295 },
                { id: "eid647", tween: [ "transform", "${_baubeweg1}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 795, duration: 103 },
                { id: "eid672", tween: [ "transform", "${_baubeweg1}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 898, duration: 103 },
                { id: "eid671", tween: [ "transform", "${_baubeweg1}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1001, duration: 295 },
                { id: "eid670", tween: [ "transform", "${_baubeweg1}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1413, duration: 133 },
                { id: "eid669", tween: [ "transform", "${_baubeweg1}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1546, duration: 250 },
                { id: "eid643", tween: [ "style", "${_baubeweg1}", "top", '-2px', { fromValue: '0px'}], position: 0, duration: 192 },
                { id: "eid649", tween: [ "style", "${_baubeweg1}", "top", '-1px', { fromValue: '-2px'}], position: 192, duration: 308 },
                { id: "eid651", tween: [ "style", "${_baubeweg1}", "top", '0px', { fromValue: '-1px'}], position: 651, duration: 247 },
                { id: "eid665", tween: [ "style", "${_baubeweg1}", "top", '-1px', { fromValue: '0px'}], position: 898, duration: 247 },
                { id: "eid664", tween: [ "style", "${_baubeweg1}", "top", '-2px', { fromValue: '-1px'}], position: 1296, duration: 308 },
                { id: "eid663", tween: [ "style", "${_baubeweg1}", "top", '0px', { fromValue: '-2px'}], position: 1604, duration: 192 },
                { id: "eid635", tween: [ "style", "${_baubeweg2}", "top", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
                { id: "eid673", tween: [ "style", "${_baubeweg2}", "top", '140px', { fromValue: '142px'}], position: 303, duration: 192 },
                { id: "eid674", tween: [ "style", "${_baubeweg2}", "top", '141px', { fromValue: '140px'}], position: 495, duration: 308 },
                { id: "eid675", tween: [ "style", "${_baubeweg2}", "top", '142px', { fromValue: '141px'}], position: 954, duration: 247 },
                { id: "eid676", tween: [ "style", "${_baubeweg2}", "top", '141px', { fromValue: '142px'}], position: 1201, duration: 247 },
                { id: "eid677", tween: [ "style", "${_baubeweg2}", "top", '140px', { fromValue: '141px'}], position: 1599, duration: 308 },
                { id: "eid678", tween: [ "style", "${_baubeweg2}", "top", '142px', { fromValue: '140px'}], position: 1907, duration: 192 }            ]
        }
    }
},
"sym_baumgesicht": {
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
                    id: 'bauhand',
                    type: 'image',
                    rect: ['152px', '77px', '92px', '61px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bauhand.png', '0px', '0px']
                },
                {
                    id: 'baugesicht',
                    type: 'image',
                    rect: ['0px', '0px', '188px', '192px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baugesicht.png', '0px', '0px']
                },
                {
                    id: 'auge',
                    type: 'image',
                    rect: ['46px', '69px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'auge2',
                    type: 'image',
                    rect: ['118px', '58px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_baugesicht}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '192px'],
                ["style", "width", '188px']
            ],
            "${_auge2}": [
                ["style", "left", '118px'],
                ["style", "top", '58px']
            ],
            "${_bauhand}": [
                ["style", "top", '77px'],
                ["style", "left", '152px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_auge}": [
                ["style", "left", '46px'],
                ["style", "top", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            labels: {
                "loop_auge": 0
            },
            timeline: [
                { id: "eid550", tween: [ "style", "${_auge2}", "top", '55px', { fromValue: '58px'}], position: 0, duration: 2100 },
                { id: "eid553", tween: [ "style", "${_auge2}", "top", '53px', { fromValue: '55px'}], position: 2100, duration: 2800 },
                { id: "eid556", tween: [ "style", "${_auge2}", "top", '57px', { fromValue: '53px'}], position: 4900, duration: 2100 },
                { id: "eid576", tween: [ "style", "${_auge2}", "top", '55px', { fromValue: '58px'}], position: 7000, duration: 2100 },
                { id: "eid577", tween: [ "style", "${_auge2}", "top", '53px', { fromValue: '55px'}], position: 9100, duration: 2800 },
                { id: "eid578", tween: [ "style", "${_auge2}", "top", '57px', { fromValue: '53px'}], position: 11900, duration: 2100 },
                { id: "eid551", tween: [ "style", "${_auge}", "top", '66px', { fromValue: '69px'}], position: 0, duration: 2100 },
                { id: "eid555", tween: [ "style", "${_auge}", "top", '64px', { fromValue: '66px'}], position: 2100, duration: 2800 },
                { id: "eid558", tween: [ "style", "${_auge}", "top", '68px', { fromValue: '64px'}], position: 4900, duration: 2100 },
                { id: "eid582", tween: [ "style", "${_auge}", "top", '66px', { fromValue: '69px'}], position: 7000, duration: 2100 },
                { id: "eid583", tween: [ "style", "${_auge}", "top", '64px', { fromValue: '66px'}], position: 9100, duration: 2800 },
                { id: "eid584", tween: [ "style", "${_auge}", "top", '68px', { fromValue: '64px'}], position: 11900, duration: 2100 },
                { id: "eid610", tween: [ "transform", "${_bauhand}", "rotateZ", '-33deg', { fromValue: '0deg'}], position: 3000, duration: 3000 },
                { id: "eid611", tween: [ "transform", "${_bauhand}", "rotateZ", '0deg', { fromValue: '-33deg'}], position: 6000, duration: 3100 },
                { id: "eid605", tween: [ "style", "${_bauhand}", "top", '85px', { fromValue: '77px'}], position: 3000, duration: 3000 },
                { id: "eid606", tween: [ "style", "${_bauhand}", "top", '77px', { fromValue: '85px'}], position: 6000, duration: 3100 },
                { id: "eid603", tween: [ "style", "${_bauhand}", "left", '89px', { fromValue: '152px'}], position: 3000, duration: 3000 },
                { id: "eid604", tween: [ "style", "${_bauhand}", "left", '152px', { fromValue: '89px'}], position: 6000, duration: 3100 },
                { id: "eid549", tween: [ "style", "${_auge}", "left", '50px', { fromValue: '46px'}], position: 0, duration: 2100 },
                { id: "eid554", tween: [ "style", "${_auge}", "left", '48px', { fromValue: '50px'}], position: 2100, duration: 2800 },
                { id: "eid559", tween: [ "style", "${_auge}", "left", '46px', { fromValue: '48px'}], position: 4900, duration: 2100 },
                { id: "eid579", tween: [ "style", "${_auge}", "left", '50px', { fromValue: '46px'}], position: 7000, duration: 2100 },
                { id: "eid580", tween: [ "style", "${_auge}", "left", '48px', { fromValue: '50px'}], position: 9100, duration: 2800 },
                { id: "eid581", tween: [ "style", "${_auge}", "left", '46px', { fromValue: '48px'}], position: 11900, duration: 2100 },
                { id: "eid548", tween: [ "style", "${_auge2}", "left", '122px', { fromValue: '118px'}], position: 0, duration: 2100 },
                { id: "eid552", tween: [ "style", "${_auge2}", "left", '120px', { fromValue: '122px'}], position: 2100, duration: 2800 },
                { id: "eid557", tween: [ "style", "${_auge2}", "left", '118px', { fromValue: '120px'}], position: 4900, duration: 2100 },
                { id: "eid573", tween: [ "style", "${_auge2}", "left", '122px', { fromValue: '118px'}], position: 7000, duration: 2100 },
                { id: "eid574", tween: [ "style", "${_auge2}", "left", '120px', { fromValue: '122px'}], position: 9100, duration: 2800 },
                { id: "eid575", tween: [ "style", "${_auge2}", "left", '118px', { fromValue: '120px'}], position: 11900, duration: 2100 }            ]
        }
    }
},
"sym_sprung": {
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
                    id: 'sprungbrucke',
                    type: 'image',
                    rect: ['0px', '0px', '1114px', '588px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sprungbrucke.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprungbrucke}": [
                ["style", "top", '10px'],
                ["style", "left", '45px'],
                ["style", "overflow", 'hidden']
            ],
            "${symbolSelector}": [
                ["style", "height", '250px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1121,
            autoPlay: false,
            labels: {
                "loop_sprung": 0
            },
            timeline: [
                { id: "eid612", tween: [ "style", "${_sprungbrucke}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
                { id: "eid618", tween: [ "style", "${_sprungbrucke}", "left", '-183px', { fromValue: '45px'}], position: 131, duration: 0 },
                { id: "eid620", tween: [ "style", "${_sprungbrucke}", "left", '-430px', { fromValue: '-251px'}], position: 250, duration: 0 },
                { id: "eid622", tween: [ "style", "${_sprungbrucke}", "left", '-680px', { fromValue: '-500px'}], position: 389, duration: 0 },
                { id: "eid658", tween: [ "style", "${_sprungbrucke}", "left", '-685px', { fromValue: '-680px'}], position: 406, duration: 0 },
                { id: "eid624", tween: [ "style", "${_sprungbrucke}", "left", '-6px', { fromValue: '-685px'}], position: 500, duration: 0 },
                { id: "eid626", tween: [ "style", "${_sprungbrucke}", "left", '-270px', { fromValue: '-76px'}], position: 629, duration: 0 },
                { id: "eid656", tween: [ "style", "${_sprungbrucke}", "left", '-264px', { fromValue: '-270px'}], position: 687, duration: 0 },
                { id: "eid628", tween: [ "style", "${_sprungbrucke}", "left", '-507px', { fromValue: '-264px'}], position: 750, duration: 0 },
                { id: "eid630", tween: [ "style", "${_sprungbrucke}", "left", '-792px', { fromValue: '-598px'}], position: 854, duration: 0 },
                { id: "eid632", tween: [ "style", "${_sprungbrucke}", "left", '-1020px', { fromValue: '-898px'}], position: 1000, duration: 0 },
                { id: "eid617", tween: [ "style", "${_sprungbrucke}", "top", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
                { id: "eid619", tween: [ "style", "${_sprungbrucke}", "top", '25px', { fromValue: '10px'}], position: 131, duration: 0 },
                { id: "eid621", tween: [ "style", "${_sprungbrucke}", "top", '17px', { fromValue: '27px'}], position: 250, duration: 0 },
                { id: "eid623", tween: [ "style", "${_sprungbrucke}", "top", '9px', { fromValue: '17px'}], position: 389, duration: 0 },
                { id: "eid659", tween: [ "style", "${_sprungbrucke}", "top", '7px', { fromValue: '9px'}], position: 406, duration: 0 },
                { id: "eid625", tween: [ "style", "${_sprungbrucke}", "top", '-311px', { fromValue: '7px'}], position: 500, duration: 0 },
                { id: "eid627", tween: [ "style", "${_sprungbrucke}", "top", '-290px', { fromValue: '-311px'}], position: 629, duration: 0 },
                { id: "eid657", tween: [ "style", "${_sprungbrucke}", "top", '-282px', { fromValue: '-290px'}], position: 687, duration: 0 },
                { id: "eid629", tween: [ "style", "${_sprungbrucke}", "top", '-259px', { fromValue: '-282px'}], position: 750, duration: 0 },
                { id: "eid631", tween: [ "style", "${_sprungbrucke}", "top", '-278px', { fromValue: '-274px'}], position: 854, duration: 0 },
                { id: "eid633", tween: [ "style", "${_sprungbrucke}", "top", '-166px', { fromValue: '-256px'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "PART3");
