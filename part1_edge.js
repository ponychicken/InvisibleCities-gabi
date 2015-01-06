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
                id: 'Rectangle3',
                type: 'rect',
                rect: ['584px', '304px','440px','433px','auto', 'auto'],
                fill: ["rgba(140,82,82,0.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'sym_vorzim',
                type: 'rect',
                rect: ['0', '-9','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_schwarz',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['884px', '316px','640px','457px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgba(0, 0, 0, 0)","none"]
            },
            {
                id: 'uberschwarz',
                type: 'rect',
                rect: ['828px', '307px','708px','457px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'wegzumhaus',
                type: 'rect',
                rect: ['-25', '-9','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '-9px','2048px','1545px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)"],
                stroke: [0,"rgba(0, 0, 0, 0)","none"]
            },
            {
                id: 'uberwaldani',
                type: 'rect',
                rect: ['54px', '-93px','2048px','1545px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                transform: [[],[],[],['0.2617','0.28025']]
            },
            {
                id: 'testanfang',
                type: 'image',
                rect: ['0', '0px','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"testanfang.jpg",'0px','0px']
            },
            {
                id: 'wald',
                type: 'image',
                rect: ['0', '0','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wald.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'sym_ausblick',
                symbolName: 'sym_ausblick',
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
                ["style", "top", '307px'],
                ["style", "height", '457px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '828px'],
                ["style", "width", '708px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '304px'],
                ["color", "background-color", 'rgba(140,82,82,0.00)'],
                ["style", "height", '433px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '584px'],
                ["style", "width", '440px']
            ],
            "${_uberwaldani}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["transform", "scaleY", '0.28025'],
                ["transform", "scaleX", '0.2617'],
                ["style", "left", '54px'],
                ["style", "top", '-93px']
            ],
            "${_StageA}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(199,138,138,1.00)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sym_ausblick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_wegzumhaus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_testanfang}": [
                ["style", "top", '0px']
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
                { id: "eid586", tween: [ "style", "${_wegzumhaus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid585", tween: [ "style", "${_wegzumhaus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    id: 'sym_wolke',
                    type: 'rect',
                    rect: ['-151px', '-34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'hauswegsw',
                    type: 'image',
                    rect: ['140px', '132px', '1737px', '916px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hauswegsw.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_wolke',
                symbolName: 'sym_wolke',
                autoPlay: {

               }
            }            ]
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
                ["style", "width", '2048px']
            ],
            "${_sym_wolke}": [
                ["style", "left", '-989px'],
                ["style", "top", '-30px']
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
            duration: 21000,
            autoPlay: false,
            timeline: [
                { id: "eid575", tween: [ "style", "${_sym_wolke}", "left", '-989px', { fromValue: '-989px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "transform", "${_hauswegsw}", "scaleY", '1', { fromValue: '0.66'}], position: 0, duration: 4000 },
                { id: "eid129", tween: [ "style", "${_hauswegsw}", "left", '91px', { fromValue: '142px'}], position: 0, duration: 4000 },
                { id: "eid96", tween: [ "transform", "${_haushinterswrgb}", "scaleX", '1', { fromValue: '0.66'}], position: 0, duration: 4000 },
                { id: "eid128", tween: [ "style", "${_hauswegsw}", "top", '158px', { fromValue: '216px'}], position: 0, duration: 4000 },
                { id: "eid574", tween: [ "style", "${_sym_wolke}", "top", '-30px', { fromValue: '-30px'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "transform", "${_haushinterswrgb}", "scaleY", '1', { fromValue: '0.66'}], position: 0, duration: 4000 },
                { id: "eid49", tween: [ "transform", "${_hauswegsw}", "scaleX", '1', { fromValue: '0.66'}], position: 0, duration: 4000 }            ]
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
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'schwarz',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    type: 'rect',
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
                },
                {
                    id: 'sym_blattbaum',
                    type: 'rect',
                    rect: ['452', '254', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_huhpickenkopfkoroer',
                symbolName: 'sym_huhpickenkopfkoroer',
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
            "${_aussichtvorsw2}": [
                ["style", "top", '-94px'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53'],
                ["transform", "scaleX", '0.53']
            ],
            "${_sym_huhpickenkopfkoroer}": [
                ["motion", "location", '1310.5px 1364px'],
                ["transform", "scaleX", '1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_huhpickenganzani}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '1550px 1319.5px']
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
                ["style", "top", '271px'],
                ["style", "left", '694px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_sym_huhliegenkopf}": [
                ["style", "left", '1146px'],
                ["style", "top", '1214px']
            ],
            "${_ausblickwasserfrei}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '-94px'],
                ["style", "left", '133px'],
                ["transform", "scaleY", '0.53']
            ],
            "${_wasserstruktur_Kopie}": [
                ["transform", "scaleX", '0.53'],
                ["style", "top", '-229px'],
                ["transform", "scaleY", '0.53'],
                ["style", "left", '133px']
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
                { id: "eid515", tween: [ "transform", "${_wasserstruktur_Kopie}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
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
                { id: "eid721", tween: [ "transform", "${_sym_blattbaum}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid271", tween: [ "style", "${_aussichtvorsw2}", "left", '0px', { fromValue: '133px'}], position: 16245, duration: 3325 },
                { id: "eid722", tween: [ "style", "${_sym_blattbaum}", "left", '452px', { fromValue: '694px'}], position: 16245, duration: 3325 },
                { id: "eid403", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '1', { fromValue: '1'}], position: 19570, duration: 0 },
                { id: "eid401", tween: [ "transform", "${_sym_huhpickenkopfkoroer}", "scaleX", '-1', { fromValue: '1'}], position: 26569, duration: 0 },
                { id: "eid511", tween: [ "transform", "${_ausblickwasserfrei}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid599", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '517px', { fromValue: '133px'}], position: 0, duration: 15750 },
                { id: "eid614", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '113px', { fromValue: '133px'}], position: 16245, duration: 3325 },
                { id: "eid616", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '517px', { fromValue: '113px'}], position: 19570, duration: 16430 },
                { id: "eid512", tween: [ "transform", "${_ausblickwasserfrei}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid371", tween: [ "motion", "${_huhpickenkorper2}", [[1359.5, 1364, 0, 0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22],[1307.5, 1366.14, 0, 0]]], position: 21860, duration: 1108 },
                { id: "eid400", tween: [ "motion", "${_huhpickenkorper2}", [[1307.5, 1366.14, 0, 0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81],[1359.5, 1364, 0, 0]]], position: 27677, duration: 1108 },
                { id: "eid260", tween: [ "transform", "${_aussichtvorsw2}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid720", tween: [ "style", "${_sym_blattbaum}", "top", '254px', { fromValue: '271px'}], position: 16245, duration: 3325 },
                { id: "eid370", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1310.5, 1364, 0, 0],[1299.5, 1364, -20.19, -2.76]]], position: 21860, duration: 277 },
                { id: "eid384", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1299.5, 1364, -5.53, -0.76],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76],[1258.5, 1366.14, 0, 0]]], position: 22137, duration: 831 },
                { id: "eid405", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1356.51, 1366, 0, 0],[1356.51, 1366, 0, 0]]], position: 26569, duration: 0 },
                { id: "eid398", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1352.91, 1367.26, 0, 0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4],[1393.91, 1365.12, 5.53, 0.76]]], position: 27677, duration: 831 },
                { id: "eid399", tween: [ "motion", "${_sym_huhpickenkopfkoroer}", [[1393.91, 1365.12, 20.19, 2.76],[1404.91, 1365.12, 0, 0]]], position: 28509, duration: 277 },
                { id: "eid517", tween: [ "transform", "${_wasserstruktur_Kopie}", "scaleY", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 },
                { id: "eid404", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '1', { fromValue: '1'}], position: 19570, duration: 0 },
                { id: "eid402", tween: [ "transform", "${_huhpickenkorper2}", "scaleX", '-1', { fromValue: '1'}], position: 26569, duration: 0 },
                { id: "eid600", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-7px', { fromValue: '-229px'}], position: 0, duration: 15750 },
                { id: "eid613", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-47px', { fromValue: '-277px'}], position: 16245, duration: 3325 },
                { id: "eid615", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '-7px', { fromValue: '-47px'}], position: 19570, duration: 16430 },
                { id: "eid272", tween: [ "style", "${_aussichtvorsw2}", "top", '0px', { fromValue: '-94px'}], position: 16245, duration: 3325 },
                { id: "eid510", tween: [ "style", "${_ausblickwasserfrei}", "top", '0px', { fromValue: '-94px'}], position: 16245, duration: 3325 },
                { id: "eid719", tween: [ "transform", "${_sym_blattbaum}", "scaleX", '1', { fromValue: '0.53'}], position: 16245, duration: 3325 }            ]
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
                    id: 'zimpflanze1',
                    type: 'image',
                    rect: ['1640px', '252px', '336px', '393px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/zimpflanze1.png', '0px', '0px']
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
            "${_sym_vorhang}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '767px'],
                ["style", "top", '263px']
            ],
            "${_sym_zimmer2}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_zimpflanze1}": [
                ["style", "top", '439px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-18deg'],
                ["transform", "scaleX", '1'],
                ["style", "height", '201px'],
                ["style", "left", '1734px'],
                ["style", "width", '172px']
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
                { id: "eid577", tween: [ "style", "${_zimpflanze1}", "width", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
                { id: "eid190", tween: [ "style", "${_sym_vorhang}", "top", '404px', { fromValue: '263px'}], position: 0, duration: 4000 },
                { id: "eid539", tween: [ "transform", "${_zimpflanze1}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid538", tween: [ "style", "${_zimpflanze1}", "left", '3099px', { fromValue: '1734px'}], position: 0, duration: 4000 },
                { id: "eid580", tween: [ "transform", "${_zimpflanze1}", "rotateZ", '-10deg', { fromValue: '-18deg'}], position: 0, duration: 4000 },
                { id: "eid537", tween: [ "transform", "${_zimpflanze1}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid576", tween: [ "style", "${_zimpflanze1}", "height", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "transform", "${_sym_vorhang}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid189", tween: [ "style", "${_sym_vorhang}", "left", '289px', { fromValue: '767px'}], position: 0, duration: 4000 },
                { id: "eid161", tween: [ "transform", "${_sym_zimmer2}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid187", tween: [ "style", "${_sym_zimmer2}", "left", '-851px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid162", tween: [ "transform", "${_sym_zimmer2}", "scaleY", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 },
                { id: "eid536", tween: [ "style", "${_zimpflanze1}", "top", '584px', { fromValue: '439px'}], position: 0, duration: 4000 },
                { id: "eid188", tween: [ "style", "${_sym_zimmer2}", "top", '791px', { fromValue: '0px'}], position: 0, duration: 4000 },
                { id: "eid165", tween: [ "transform", "${_sym_vorhang}", "scaleX", '3.76926', { fromValue: '1'}], position: 0, duration: 4000 }            ]
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
"sym_wolke": {
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
                    id: 'w5',
                    type: 'image',
                    rect: ['0px', '0px', '1005px', '405px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/w5.png', '0px', '0px']
                },
                {
                    id: 'w6',
                    type: 'image',
                    rect: ['179px', '25px', '1005px', '405px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/w6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_w5}": [
                ["motion", "location", '502.5px 202.5px'],
                ["style", "opacity", '0']
            ],
            "${_w6}": [
                ["motion", "location", '681.87890625px 227.29296875px'],
                ["style", "opacity", '0.7']
            ],
            "${symbolSelector}": [
                ["style", "height", '471px'],
                ["style", "width", '1274px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            labels: {
                "loop_wolke": 0
            },
            timeline: [
                { id: "eid573", tween: [ "motion", "${_w6}", [[681.88, 227.29, 0, 0],[1351.48, 244.15, 412.68, -4.58, 969.7, -10.76],[1957.71, 199.53, 0, 0]]], position: 0, duration: 10000 },
                { id: "eid562", tween: [ "motion", "${_w6}", [[1957.71, 199.53, 0, 0],[2505.88, 188.7, 482.93, -3.21, 964.43, -6.4],[3038.66, 263.96, 173.86, 22.29, 466.56, 59.81],[3266.58, 294.34, 640.36, 36.38, 156.49, 8.89],[3571.5, 202.5, 0, 0]]], position: 10000, duration: 11000 },
                { id: "eid556", tween: [ "motion", "${_w5}", [[502.5, 202.5, 0, 0],[1033.66, 262.58, 681.42, -12.1, 858.03, -15.24],[1834.94, 168.23, 927.72, -73.5, 731.76, -57.97],[2443.88, 168.02, 0, 0]]], position: 0, duration: 15000 },
                { id: "eid571", tween: [ "style", "${_w6}", "opacity", '0', { fromValue: '0.7'}], position: 0, duration: 5750 },
                { id: "eid564", tween: [ "style", "${_w6}", "opacity", '0.7', { fromValue: '0'}], position: 10000, duration: 5000 },
                { id: "eid568", tween: [ "style", "${_w5}", "opacity", '0.7', { fromValue: '0'}], position: 0, duration: 5750 },
                { id: "eid559", tween: [ "style", "${_w5}", "opacity", '0', { fromValue: '0.7'}], position: 11000, duration: 4000 }            ]
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "PART1");
