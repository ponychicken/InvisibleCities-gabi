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
                id: 'sym_blatt',
                type: 'rect',
                rect: ['1', '1','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_blatt',
                symbolName: 'sym_blatt',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(199,138,138,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_StageB}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            timeline: [
                { id: "eid661", tween: [ "color", "${_StageB}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '538px'],
                ["style", "width", '850px'],
                ["style", "overflow", 'hidden']
            ],
            "${_vorhangani}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                },
                {
                    id: 'waldanirgb',
                    type: 'image',
                    rect: ['25', '9', '8192px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/waldanirgb.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hauswegsw}": [
                ["transform", "scaleX", '0.66'],
                ["style", "top", '216px'],
                ["transform", "scaleY", '0.66'],
                ["style", "left", '142px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1564px'],
                ["style", "width", '8217px'],
                ["style", "overflow", 'hidden']
            ],
            "${_waldanirgb}": [
                ["style", "left", '25px']
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
                { id: "eid75", tween: [ "style", "${_waldanirgb}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_waldanirgb}", "left", '-2023px', { fromValue: '25px'}], position: 500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_waldanirgb}", "left", '-4071px', { fromValue: '-2023px'}], position: 1000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_waldanirgb}", "left", '-6119px', { fromValue: '-4071px'}], position: 1500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_waldanirgb}", "left", '-8167px', { fromValue: '-6119px'}], position: 2000, duration: 0 },
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
            "${_schwarz}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.850000'],
                ["style", "left", '0px']
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
                    id: 'aussichthintersw2',
                    type: 'image',
                    rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aussichthintersw.jpg', '0px', '0px']
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
            "${_sym_huhpickenganzani}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '1550px 1319.5px']
            ],
            "${_huhpickenkorper2}": [
                ["transform", "scaleX", '1'],
                ["motion", "location", '1359.5px 1364px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_huhliegenkorper2}": [
                ["style", "left", '1116px'],
                ["style", "top", '1198px']
            ],
            "${_sym_huhpickenkopfkoroer}": [
                ["transform", "scaleX", '1'],
                ["motion", "location", '1310.5px 1364px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_aussichtvorsw2}": [
                ["style", "top", '-94px'],
                ["transform", "scaleX", '0.53'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_aussichthintersw2}": [
                ["style", "top", '-94px'],
                ["transform", "scaleX", '0.53'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_sym_huhliegenkopf}": [
                ["style", "left", '1146px'],
                ["style", "top", '1214px']
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
                { id: "eid403", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '1', { fromValue: '1'}], position: 3184, duration: 0 },
                { id: "eid401", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '-1', { fromValue: '1'}], position: 9500, duration: 0 },
                { id: "eid274", tween: [ "style", "${_aussichthintersw2}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 3000 },
                { id: "eid262", tween: [ "transform", "${_aussichthintersw2}", "scaleY", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid271", tween: [ "style", "${_aussichtvorsw2}", "left", '0px', { fromValue: '133px'}], position: 0, duration: 3000 },
                { id: "eid272", tween: [ "style", "${_aussichtvorsw2}", "top", '0px', { fromValue: '-94px'}], position: 0, duration: 3000 },
                { id: "eid260", tween: [ "transform", "${_aussichtvorsw2}", "scaleY", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
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
                { id: "eid370", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1310.5, 1364, 0, 0],[1299.5, 1364, -20.19, -2.76]]], position: 5250, duration: 250 },
                { id: "eid384", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1299.5, 1364, -5.53, -0.76],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76],[1258.5, 1366.14, 0, 0]]], position: 5500, duration: 750 },
                { id: "eid405", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1356.51, 1366, 0, 0],[1356.51, 1366, 0, 0]]], position: 9500, duration: 0 },
                { id: "eid398", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1352.91, 1367.26, 0, 0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4],[1393.91, 1365.12, 5.53, 0.76]]], position: 10500, duration: 750 },
                { id: "eid399", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1393.91, 1365.12, 20.19, 2.76],[1404.91, 1365.12, 0, 0]]], position: 11250, duration: 250 },
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
                { id: "eid371", tween: [ "motion", "${_huhpickenkorper2}", [[1359.5, 1364, 0, 0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22],[1307.5, 1366.14, 0, 0]]], position: 5250, duration: 1000 },
                { id: "eid400", tween: [ "motion", "${_huhpickenkorper2}", [[1307.5, 1366.14, 0, 0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81],[1359.5, 1364, 0, 0]]], position: 10500, duration: 1000 },
                { id: "eid273", tween: [ "style", "${_aussichthintersw2}", "left", '0px', { fromValue: '133px'}], position: 0, duration: 3000 },
                { id: "eid261", tween: [ "transform", "${_aussichthintersw2}", "scaleX", '1', { fromValue: '0.53'}], position: 0, duration: 3000 },
                { id: "eid404", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '1', { fromValue: '1'}], position: 3184, duration: 0 },
                { id: "eid402", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '-1', { fromValue: '1'}], position: 9500, duration: 0 }            ]
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
            "${_sym_zimmer2}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_sym_vorhang}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '263px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '767px']
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
                { id: "eid166", tween: [ "transform", "${_sym_vorhang}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid189", tween: [ "style", "${_sym_vorhang}", "left", '289px', { fromValue: '767px'}], position: 0, duration: 4000 },
                { id: "eid161", tween: [ "transform", "${_sym_zimmer2}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid190", tween: [ "style", "${_sym_vorhang}", "top", '404px', { fromValue: '263px'}], position: 0, duration: 4000 },
                { id: "eid165", tween: [ "transform", "${_sym_vorhang}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid187", tween: [ "style", "${_sym_zimmer2}", "left", '-851px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid188", tween: [ "style", "${_sym_zimmer2}", "top", '791px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid162", tween: [ "transform", "${_sym_zimmer2}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 }            ]
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
            "${_huhliegenkopf2}": [
                ["style", "left", '-5px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '50px'],
                ["style", "overflow", 'hidden']
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
                ["style", "width", '180px'],
                ["style", "overflow", 'hidden']
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
                ["style", "width", '170px'],
                ["style", "overflow", 'hidden']
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
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '65px'],
                ["style", "overflow", 'hidden']
            ],
            "${_huhpickenkopf}": [
                ["style", "left", '-87px'],
                ["style", "top", '0px']
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
                    id: 'sym_gesicht',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
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
                id: 'sym_gesicht',
                symbolName: 'sym_gesicht',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_hb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_a}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_db}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_gb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_ib}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_fb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_eb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_bb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_cb}": [
                ["style", "top", '-37px'],
                ["style", "height", '1613px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "loop_blatt": 0
            },
            timeline: [
                { id: "eid421", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0 },
                { id: "eid481", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 500, duration: 0 },
                { id: "eid482", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 1000, duration: 0 },
                { id: "eid546", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 1500, duration: 0 },
                { id: "eid547", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 2000, duration: 0 },
                { id: "eid582", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 2500, duration: 0 },
                { id: "eid583", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 3000, duration: 0 },
                { id: "eid618", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 3500, duration: 0 },
                { id: "eid619", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 4000, duration: 0 },
                { id: "eid654", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 4500, duration: 0 },
                { id: "eid655", tween: [ "style", "${_hb}", "top", '-37px', { fromValue: '-37px'}], position: 5000, duration: 0 },
                { id: "eid453", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid496", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 500, duration: 500 },
                { id: "eid538", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid539", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 1500, duration: 500 },
                { id: "eid574", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid575", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 2500, duration: 500 },
                { id: "eid610", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid611", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 3500, duration: 500 },
                { id: "eid646", tween: [ "style", "${_fb}", "top", '-17px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid647", tween: [ "style", "${_fb}", "top", '-37px', { fromValue: '-17px'}], position: 4500, duration: 500 },
                { id: "eid456", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid501", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 500, duration: 500 },
                { id: "eid550", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid551", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 1500, duration: 500 },
                { id: "eid586", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid587", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 2500, duration: 500 },
                { id: "eid622", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid623", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 3500, duration: 500 },
                { id: "eid658", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid659", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 4500, duration: 500 },
                { id: "eid445", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid488", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid522", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid523", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 1500, duration: 500 },
                { id: "eid558", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid559", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 2500, duration: 500 },
                { id: "eid594", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid595", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 3500, duration: 500 },
                { id: "eid630", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid631", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 4500, duration: 500 },
                { id: "eid419", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0 },
                { id: "eid478", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 500, duration: 0 },
                { id: "eid479", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 1000, duration: 0 },
                { id: "eid542", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 1500, duration: 0 },
                { id: "eid543", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 2000, duration: 0 },
                { id: "eid578", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 2500, duration: 0 },
                { id: "eid579", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 3000, duration: 0 },
                { id: "eid614", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 3500, duration: 0 },
                { id: "eid615", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 4000, duration: 0 },
                { id: "eid650", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 4500, duration: 0 },
                { id: "eid651", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 5000, duration: 0 },
                { id: "eid454", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid498", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid540", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid541", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 1500, duration: 500 },
                { id: "eid576", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid577", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 2500, duration: 500 },
                { id: "eid612", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid613", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 3500, duration: 500 },
                { id: "eid648", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid649", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 4500, duration: 500 },
                { id: "eid451", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid495", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid532", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid533", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 1500, duration: 500 },
                { id: "eid568", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid569", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 2500, duration: 500 },
                { id: "eid604", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid605", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 3500, duration: 500 },
                { id: "eid640", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid641", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 4500, duration: 500 },
                { id: "eid447", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid491", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 500, duration: 500 },
                { id: "eid524", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid525", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 1500, duration: 500 },
                { id: "eid560", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid561", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 2500, duration: 500 },
                { id: "eid596", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid597", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 3500, duration: 500 },
                { id: "eid632", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid633", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 4500, duration: 500 },
                { id: "eid450", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid494", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 500, duration: 500 },
                { id: "eid534", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid535", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 1500, duration: 500 },
                { id: "eid570", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid571", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 2500, duration: 500 },
                { id: "eid606", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid607", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 3500, duration: 500 },
                { id: "eid642", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid643", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 4500, duration: 500 },
                { id: "eid457", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid500", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 500, duration: 500 },
                { id: "eid548", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid549", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 1500, duration: 500 },
                { id: "eid584", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid585", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 2500, duration: 500 },
                { id: "eid620", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid621", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 3500, duration: 500 },
                { id: "eid656", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid657", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 4500, duration: 500 },
                { id: "eid446", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid490", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid526", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid527", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 1500, duration: 500 },
                { id: "eid562", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid563", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 2500, duration: 500 },
                { id: "eid598", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid599", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 3500, duration: 500 },
                { id: "eid634", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid635", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 4500, duration: 500 },
                { id: "eid442", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid487", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 500, duration: 500 },
                { id: "eid518", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid519", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 1500, duration: 500 },
                { id: "eid554", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid555", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 2500, duration: 500 },
                { id: "eid590", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid591", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 3500, duration: 500 },
                { id: "eid626", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid627", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 4500, duration: 500 },
                { id: "eid443", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid486", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 500, duration: 500 },
                { id: "eid516", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid517", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 1500, duration: 500 },
                { id: "eid552", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid553", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 2500, duration: 500 },
                { id: "eid588", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid589", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 3500, duration: 500 },
                { id: "eid624", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid625", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 4500, duration: 500 },
                { id: "eid449", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid492", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 500, duration: 500 },
                { id: "eid530", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 1000, duration: 500 },
                { id: "eid531", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 1500, duration: 500 },
                { id: "eid566", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 2000, duration: 500 },
                { id: "eid567", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 2500, duration: 500 },
                { id: "eid602", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 3000, duration: 500 },
                { id: "eid603", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 3500, duration: 500 },
                { id: "eid638", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 4000, duration: 500 },
                { id: "eid639", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 4500, duration: 500 },
                { id: "eid455", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid499", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid544", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid545", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 1500, duration: 500 },
                { id: "eid580", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid581", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 2500, duration: 500 },
                { id: "eid616", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid617", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 3500, duration: 500 },
                { id: "eid652", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid653", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 4500, duration: 500 },
                { id: "eid452", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid497", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 500, duration: 500 },
                { id: "eid536", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid537", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 1500, duration: 500 },
                { id: "eid572", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid573", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 2500, duration: 500 },
                { id: "eid608", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid609", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 3500, duration: 500 },
                { id: "eid644", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid645", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 4500, duration: 500 },
                { id: "eid448", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid493", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid528", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid529", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 1500, duration: 500 },
                { id: "eid564", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid565", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 2500, duration: 500 },
                { id: "eid600", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid601", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 3500, duration: 500 },
                { id: "eid636", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid637", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 4500, duration: 500 },
                { id: "eid444", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid489", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 500, duration: 500 },
                { id: "eid520", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 1000, duration: 500 },
                { id: "eid521", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 1500, duration: 500 },
                { id: "eid556", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 2000, duration: 500 },
                { id: "eid557", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 2500, duration: 500 },
                { id: "eid592", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 3000, duration: 500 },
                { id: "eid593", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 3500, duration: 500 },
                { id: "eid628", tween: [ "style", "${_bb}", "left", '0px', { fromValue: '-50px'}], position: 4000, duration: 500 },
                { id: "eid629", tween: [ "style", "${_bb}", "left", '-50px', { fromValue: '0px'}], position: 4500, duration: 500 }            ]
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
"sym_gesicht": {
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
                    id: 'baumHalbesGAugenKopie',
                    type: 'image',
                    rect: ['620px', '220px', '932px', '404px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baumHalbesGAugenKopie.png', '0px', '0px']
                },
                {
                    id: 'baumHalbesGohneAugenKopie',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/baumHalbesGohneAugenKopie.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_baumHalbesGAugenKopie}": [
                ["style", "top", '220px'],
                ["style", "left", '620px']
            ],
            "${_baumHalbesGohneAugenKopie}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
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
            duration: 4940,
            autoPlay: true,
            labels: {
                "loop_gesicht": 0
            },
            timeline: [
                { id: "eid504", tween: [ "style", "${_baumHalbesGAugenKopie}", "left", '650px', { fromValue: '620px'}], position: 0, duration: 1250 },
                { id: "eid505", tween: [ "style", "${_baumHalbesGAugenKopie}", "left", '560px', { fromValue: '650px'}], position: 1250, duration: 635 },
                { id: "eid507", tween: [ "style", "${_baumHalbesGAugenKopie}", "left", '620px', { fromValue: '560px'}], position: 2189, duration: 926 },
                { id: "eid511", tween: [ "style", "${_baumHalbesGAugenKopie}", "left", '620px', { fromValue: '620px'}], position: 3852, duration: 0 },
                { id: "eid506", tween: [ "style", "${_baumHalbesGAugenKopie}", "top", '250px', { fromValue: '220px'}], position: 0, duration: 1659 },
                { id: "eid508", tween: [ "style", "${_baumHalbesGAugenKopie}", "top", '270px', { fromValue: '250px'}], position: 1659, duration: 1456 },
                { id: "eid510", tween: [ "style", "${_baumHalbesGAugenKopie}", "top", '220px', { fromValue: '270px'}], position: 3115, duration: 737 },
                { id: "eid513", tween: [ "style", "${_baumHalbesGAugenKopie}", "top", '220px', { fromValue: '220px'}], position: 4940, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "PART2");
