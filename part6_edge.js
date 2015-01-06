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
                id: 'endeStriche2',
                type: 'image',
                rect: ['0', '0','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"endeStriche2.jpg",'0px','0px']
            },
            {
                id: 'sym_ausblick',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_hintergrund',
                type: 'rect',
                rect: ['614', '266','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_vorzim',
                type: 'rect',
                rect: ['0', '-9','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_menschen',
                type: 'rect',
                rect: ['1362', '450','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['1426px', '326px','282px','876px','auto', 'auto'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'sym_schwarz',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'uberschwarz',
                type: 'rect',
                rect: ['878px', '337px','652px','431px','auto', 'auto'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'endeStriche',
                type: 'image',
                rect: ['0px', '0px','2048px','1536px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"endeStriche.jpg",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'sym_schwarz',
                symbolName: 'sym_schwarz',
                autoPlay: {

                }
            },
            {
                id: 'sym_hintergrund',
                symbolName: 'sym_hintergrund',
                autoPlay: {

                }
            },
            {
                id: 'sym_menschen',
                symbolName: 'sym_menschen',
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
                id: 'sym_ausblick',
                symbolName: 'sym_ausblick',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_sym_vorzim}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1']
            ],
            "${_sym_menschen}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1']
            ],
            "${_uberschwarz}": [
                ["style", "top", '337px'],
                ["style", "height", '431px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '878px'],
                ["style", "width", '652px']
            ],
            "${_StageA}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_endeStriche}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(199,138,138,1.00)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "height", '876px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '1426px'],
                ["style", "width", '282px']
            ],
            "${_sym_hintergrund}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1']
            ],
            "${_sym_ausblick}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16500,
            autoPlay: false,
            labels: {
                "loopzoom": 0
            },
            timeline: [
                { id: "eid1219", tween: [ "transform", "${_sym_hintergrund}", "scaleY", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1232", tween: [ "transform", "${_sym_hintergrund}", "scaleY", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 },
                { id: "eid1218", tween: [ "transform", "${_sym_hintergrund}", "scaleX", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1233", tween: [ "transform", "${_sym_hintergrund}", "scaleX", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 },
                { id: "eid1214", tween: [ "transform", "${_sym_menschen}", "scaleX", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1230", tween: [ "transform", "${_sym_menschen}", "scaleX", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 },
                { id: "eid1223", tween: [ "transform", "${_sym_ausblick}", "scaleY", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1234", tween: [ "transform", "${_sym_ausblick}", "scaleY", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 },
                { id: "eid1222", tween: [ "transform", "${_sym_ausblick}", "scaleX", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1235", tween: [ "transform", "${_sym_ausblick}", "scaleX", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 },
                { id: "eid1215", tween: [ "transform", "${_sym_menschen}", "scaleY", '1.01', { fromValue: '1'}], position: 0, duration: 7750 },
                { id: "eid1231", tween: [ "transform", "${_sym_menschen}", "scaleY", '1', { fromValue: '1.01'}], position: 7750, duration: 7750 }            ]
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
                ["style", "top", '216px'],
                ["style", "left", '142px'],
                ["transform", "scaleY", '0.66'],
                ["transform", "scaleX", '0.66']
            ],
            "${_haushinterswrgb}": [
                ["transform", "scaleX", '0.66'],
                ["transform", "scaleY", '0.66']
            ],
            "${_waldanirgb}": [
                ["style", "left", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1564px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '8217px']
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
                { id: "eid75", tween: [ "style", "${_waldanirgb}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_waldanirgb}", "left", '-2023px', { fromValue: '25px'}], position: 500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_waldanirgb}", "left", '-4071px', { fromValue: '-2023px'}], position: 1000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_waldanirgb}", "left", '-6119px', { fromValue: '-4071px'}], position: 1500, duration: 0 },
                { id: "eid79", tween: [ "style", "${_waldanirgb}", "left", '-8167px', { fromValue: '-6119px'}], position: 2000, duration: 0 },
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
                    rect: ['136px', '-142px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/wasserstruktur%20Kopie.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wasserstruktur_Kopie}": [
                ["style", "top", '-142px'],
                ["transform", "scaleX", '0.53'],
                ["style", "left", '136px'],
                ["transform", "scaleY", '0.53']
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
            duration: 15162,
            autoPlay: true,
            labels: {
                "huhsontherun": 0
            },
            timeline: [
                { id: "eid1255", tween: [ "style", "${_wasserstruktur_Kopie}", "left", '536px', { fromValue: '136px'}], position: 0, duration: 15162 },
                { id: "eid1256", tween: [ "style", "${_wasserstruktur_Kopie}", "top", '0px', { fromValue: '-142px'}], position: 0, duration: 15162 }            ]
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
                ["style", "top", '5px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1.00704'],
                ["transform", "scaleX", '1']
            ],
            "${_sym_vorhang}": [
                ["style", "top", '263px'],
                ["style", "left", '767px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
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
                { id: "eid188", tween: [ "style", "${_sym_zimmer2}", "top", '791px', { fromValue: '5px'}], position: 0, duration: 4000 },
                { id: "eid162", tween: [ "transform", "${_sym_zimmer2}", "scaleY", '3.76926', { fromValue: '1.00704'}], position: 0, duration: 4000 }            ]
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
            autoPlay: true,
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
            "${_hb}": [
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
            "${_eb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_bb}": [
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
            "${_cb}": [
                ["style", "height", '1613px'],
                ["style", "top", '-37px'],
                ["style", "left", '-50px'],
                ["style", "width", '2150px']
            ],
            "${_db}": [
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
                { id: "eid456", tween: [ "style", "${_ib}", "top", '-67px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid501", tween: [ "style", "${_ib}", "top", '-37px', { fromValue: '-67px'}], position: 500, duration: 500 },
                { id: "eid450", tween: [ "style", "${_eb}", "top", '-17px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid494", tween: [ "style", "${_eb}", "top", '-37px', { fromValue: '-17px'}], position: 500, duration: 500 },
                { id: "eid419", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 0, duration: 0 },
                { id: "eid478", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 500, duration: 0 },
                { id: "eid479", tween: [ "style", "${_gb}", "top", '-37px', { fromValue: '-37px'}], position: 1000, duration: 0 },
                { id: "eid449", tween: [ "style", "${_db}", "top", '-47px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid492", tween: [ "style", "${_db}", "top", '-37px', { fromValue: '-47px'}], position: 500, duration: 500 },
                { id: "eid451", tween: [ "style", "${_eb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid495", tween: [ "style", "${_eb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid447", tween: [ "style", "${_cb}", "left", '-80px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid491", tween: [ "style", "${_cb}", "left", '-50px', { fromValue: '-80px'}], position: 500, duration: 500 },
                { id: "eid445", tween: [ "style", "${_bb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid488", tween: [ "style", "${_bb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid457", tween: [ "style", "${_ib}", "left", '-19px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid500", tween: [ "style", "${_ib}", "left", '-50px', { fromValue: '-19px'}], position: 500, duration: 500 },
                { id: "eid448", tween: [ "style", "${_db}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid493", tween: [ "style", "${_db}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid446", tween: [ "style", "${_cb}", "top", '-57px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid490", tween: [ "style", "${_cb}", "top", '-37px', { fromValue: '-57px'}], position: 500, duration: 500 },
                { id: "eid443", tween: [ "style", "${_a}", "left", '-24px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid486", tween: [ "style", "${_a}", "left", '-50px', { fromValue: '-24px'}], position: 500, duration: 500 },
                { id: "eid452", tween: [ "style", "${_fb}", "left", '-20px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid497", tween: [ "style", "${_fb}", "left", '-50px', { fromValue: '-20px'}], position: 500, duration: 500 },
                { id: "eid455", tween: [ "style", "${_hb}", "left", '-70px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid499", tween: [ "style", "${_hb}", "left", '-50px', { fromValue: '-70px'}], position: 500, duration: 500 },
                { id: "eid454", tween: [ "style", "${_gb}", "left", '-30px', { fromValue: '-50px'}], position: 0, duration: 500 },
                { id: "eid498", tween: [ "style", "${_gb}", "left", '-50px', { fromValue: '-30px'}], position: 500, duration: 500 },
                { id: "eid442", tween: [ "style", "${_a}", "top", '-23px', { fromValue: '-37px'}], position: 0, duration: 500 },
                { id: "eid487", tween: [ "style", "${_a}", "top", '-37px', { fromValue: '-23px'}], position: 500, duration: 500 },
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
"sym_mais": {
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
                    id: 'MaisHintergrFarben',
                    type: 'image',
                    rect: ['-1px', '-1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MaisHintergrFarben.png', '0px', '0px']
                },
                {
                    id: 'MaisHinten2',
                    type: 'image',
                    rect: ['0px', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MaisHinten.png', '0px', '0px']
                },
                {
                    id: 'maisaugengrau',
                    type: 'image',
                    rect: ['5px', '0', '1748px', '832px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugengrau.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille',
                    type: 'image',
                    rect: ['711px', '644px', '76px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille2',
                    type: 'image',
                    rect: ['838px', '628px', '59px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille3',
                    type: 'image',
                    rect: ['1117px', '416px', '76px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille4',
                    type: 'image',
                    rect: ['1183px', '344px', '76px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille5',
                    type: 'image',
                    rect: ['1504px', '611px', '76px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille6',
                    type: 'image',
                    rect: ['1598px', '571px', '76px', '57px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille7',
                    type: 'image',
                    rect: ['575px', '301px', '43px', '32px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maisaugepopille8',
                    type: 'image',
                    rect: ['511px', '259px', '43px', '32px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                },
                {
                    id: 'maismenschen',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/maismenschen.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_maismenschen}": [
                ["style", "left", '1px']
            ],
            "${_maisaugepopille3}": [
                ["style", "left", '1118px'],
                ["style", "top", '416px']
            ],
            "${_maisaugepopille4}": [
                ["style", "left", '1184px'],
                ["style", "top", '344px']
            ],
            "${_maisaugepopille6}": [
                ["style", "left", '1599px'],
                ["style", "top", '571px']
            ],
            "${_maisaugepopille5}": [
                ["style", "top", '611px'],
                ["style", "left", '1505px'],
                ["style", "width", '65px']
            ],
            "${_MaisHinten2}": [
                ["style", "left", '0px']
            ],
            "${_maisaugepopille7}": [
                ["style", "height", '32px'],
                ["style", "top", '301px'],
                ["style", "left", '576px'],
                ["style", "width", '43px']
            ],
            "${_MaisHintergrFarben}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_maisaugepopille2}": [
                ["style", "top", '628px'],
                ["style", "left", '839px'],
                ["style", "width", '59px']
            ],
            "${_maisaugepopille8}": [
                ["style", "height", '32px'],
                ["style", "top", '259px'],
                ["style", "left", '512px'],
                ["style", "width", '43px']
            ],
            "${_maisaugepopille}": [
                ["style", "left", '712px'],
                ["style", "top", '644px']
            ],
            "${_maisaugengrau}": [
                ["style", "left", '6px']
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
                { id: "eid546", tween: [ "style", "${_MaisHintergrFarben}", "left", '17px', { fromValue: '0px'}], position: 0, duration: 493 },
                { id: "eid550", tween: [ "style", "${_MaisHintergrFarben}", "left", '2px', { fromValue: '17px'}], position: 493, duration: 507 },
                { id: "eid558", tween: [ "style", "${_MaisHintergrFarben}", "left", '-26px', { fromValue: '2px'}], position: 1474, duration: 526 },
                { id: "eid561", tween: [ "style", "${_MaisHintergrFarben}", "left", '-40px', { fromValue: '-26px'}], position: 2000, duration: 500 },
                { id: "eid589", tween: [ "style", "${_maisaugepopille2}", "top", '648px', { fromValue: '628px'}], position: 385, duration: 615 },
                { id: "eid594", tween: [ "style", "${_maisaugepopille3}", "top", '407px', { fromValue: '416px'}], position: 385, duration: 615 },
                { id: "eid666", tween: [ "style", "${_maisaugepopille}", "left", '711px', { fromValue: '712px'}], position: 0, duration: 385 },
                { id: "eid585", tween: [ "style", "${_maisaugepopille}", "left", '689px', { fromValue: '711px'}], position: 385, duration: 615 },
                { id: "eid672", tween: [ "style", "${_maisaugepopille4}", "left", '1183px', { fromValue: '1184px'}], position: 0, duration: 385 },
                { id: "eid597", tween: [ "style", "${_maisaugepopille4}", "left", '1185px', { fromValue: '1183px'}], position: 385, duration: 615 },
                { id: "eid669", tween: [ "style", "${_maisaugepopille6}", "left", '1598px', { fromValue: '1599px'}], position: 0, duration: 400 },
                { id: "eid606", tween: [ "style", "${_maisaugepopille6}", "left", '1588px', { fromValue: '1598px'}], position: 400, duration: 615 },
                { id: "eid625", tween: [ "style", "${_maisaugepopille6}", "left", '1600px', { fromValue: '1588px'}], position: 1015, duration: 230 },
                { id: "eid681", tween: [ "style", "${_maismenschen}", "left", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid547", tween: [ "style", "${_MaisHintergrFarben}", "top", '9px', { fromValue: '0px'}], position: 0, duration: 493 },
                { id: "eid551", tween: [ "style", "${_MaisHintergrFarben}", "top", '17px', { fromValue: '9px'}], position: 493, duration: 507 },
                { id: "eid554", tween: [ "style", "${_MaisHintergrFarben}", "top", '-11px', { fromValue: '17px'}], position: 1000, duration: 474 },
                { id: "eid557", tween: [ "style", "${_MaisHintergrFarben}", "top", '-43px', { fromValue: '-11px'}], position: 1474, duration: 526 },
                { id: "eid562", tween: [ "style", "${_MaisHintergrFarben}", "top", '-84px', { fromValue: '-43px'}], position: 2000, duration: 500 },
                { id: "eid665", tween: [ "style", "${_maisaugepopille7}", "left", '575px', { fromValue: '576px'}], position: 0, duration: 1054 },
                { id: "eid615", tween: [ "style", "${_maisaugepopille7}", "left", '584px', { fromValue: '575px'}], position: 1054, duration: 190 },
                { id: "eid623", tween: [ "style", "${_maisaugepopille7}", "left", '595px', { fromValue: '584px'}], position: 1244, duration: 141 },
                { id: "eid605", tween: [ "style", "${_maisaugepopille6}", "top", '564px', { fromValue: '571px'}], position: 400, duration: 615 },
                { id: "eid626", tween: [ "style", "${_maisaugepopille6}", "top", '555px', { fromValue: '564px'}], position: 1015, duration: 230 },
                { id: "eid598", tween: [ "style", "${_maisaugepopille4}", "top", '325px', { fromValue: '344px'}], position: 385, duration: 615 },
                { id: "eid602", tween: [ "style", "${_maisaugepopille5}", "top", '599px', { fromValue: '611px'}], position: 400, duration: 615 },
                { id: "eid628", tween: [ "style", "${_maisaugepopille5}", "top", '599px', { fromValue: '599px'}], position: 1015, duration: 230 },
                { id: "eid667", tween: [ "style", "${_maisaugepopille2}", "left", '838px', { fromValue: '839px'}], position: 0, duration: 385 },
                { id: "eid590", tween: [ "style", "${_maisaugepopille2}", "left", '827px', { fromValue: '838px'}], position: 385, duration: 615 },
                { id: "eid586", tween: [ "style", "${_maisaugepopille}", "top", '656px', { fromValue: '644px'}], position: 385, duration: 615 },
                { id: "eid629", tween: [ "style", "${_maisaugepopille5}", "width", '65px', { fromValue: '65px'}], position: 1015, duration: 0 },
                { id: "eid582", tween: [ "style", "${_maisaugepopille8}", "top", '259px', { fromValue: '259px'}], position: 0, duration: 0 },
                { id: "eid620", tween: [ "style", "${_maisaugepopille8}", "top", '268px', { fromValue: '259px'}], position: 1054, duration: 190 },
                { id: "eid622", tween: [ "style", "${_maisaugepopille8}", "top", '270px', { fromValue: '268px'}], position: 1244, duration: 141 },
                { id: "eid673", tween: [ "style", "${_maisaugepopille8}", "left", '511px', { fromValue: '512px'}], position: 0, duration: 1054 },
                { id: "eid619", tween: [ "style", "${_maisaugepopille8}", "left", '516px', { fromValue: '511px'}], position: 1054, duration: 190 },
                { id: "eid621", tween: [ "style", "${_maisaugepopille8}", "left", '524px', { fromValue: '516px'}], position: 1244, duration: 141 },
                { id: "eid580", tween: [ "style", "${_maisaugepopille7}", "top", '301px', { fromValue: '301px'}], position: 0, duration: 0 },
                { id: "eid616", tween: [ "style", "${_maisaugepopille7}", "top", '315px', { fromValue: '301px'}], position: 1054, duration: 190 },
                { id: "eid624", tween: [ "style", "${_maisaugepopille7}", "top", '315px', { fromValue: '315px'}], position: 1244, duration: 141 },
                { id: "eid682", tween: [ "style", "${_maisaugengrau}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
                { id: "eid671", tween: [ "style", "${_maisaugepopille3}", "left", '1117px', { fromValue: '1118px'}], position: 0, duration: 385 },
                { id: "eid593", tween: [ "style", "${_maisaugepopille3}", "left", '1115px', { fromValue: '1117px'}], position: 385, duration: 615 },
                { id: "eid674", tween: [ "style", "${_maisaugepopille5}", "left", '1504px', { fromValue: '1505px'}], position: 0, duration: 400 },
                { id: "eid601", tween: [ "style", "${_maisaugepopille5}", "left", '1494px', { fromValue: '1504px'}], position: 400, duration: 615 },
                { id: "eid627", tween: [ "style", "${_maisaugepopille5}", "left", '1500px', { fromValue: '1494px'}], position: 1015, duration: 230 }            ]
        }
    }
},
"sym_maisfeld": {
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
                    id: 'MaisBewegungAusblick',
                    type: 'image',
                    rect: ['18px', '-196px', '588px', '311px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MaisBewegungAusblick.png', '0px', '0px']
                },
                {
                    id: 'MaisBewegungAusMenschen',
                    type: 'image',
                    rect: ['-6px', '-191px', '588px', '311px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MaisBewegungAusMenschen.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_MaisBewegungAusblick}": [
                ["style", "top", '0px'],
                ["style", "height", '173px'],
                ["style", "left", '0px'],
                ["style", "width", '327px']
            ],
            "${_MaisBewegungAusMenschen}": [
                ["style", "top", '0px'],
                ["style", "height", '173px'],
                ["style", "left", '0px'],
                ["style", "width", '327px']
            ],
            "${symbolSelector}": [
                ["style", "height", '254px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9341,
            autoPlay: true,
            labels: {
                "mais_pre": 0,
                "mais_zoom": 3000,
                "mais": 6750
            },
            timeline: [
                { id: "eid748", tween: [ "style", "${_MaisBewegungAusMenschen}", "height", '311px', { fromValue: '173px'}], position: 3000, duration: 3000 },
                { id: "eid756", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid758", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-1px', { fromValue: '0px'}], position: 406, duration: 0 },
                { id: "eid760", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '0px', { fromValue: '0px'}], position: 777, duration: 0 },
                { id: "eid762", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 },
                { id: "eid764", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '1px', { fromValue: '0px'}], position: 1622, duration: 0 },
                { id: "eid766", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-1px', { fromValue: '-1px'}], position: 1906, duration: 0 },
                { id: "eid747", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-191px', { fromValue: '0px'}], position: 3000, duration: 3000 },
                { id: "eid774", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-188px', { fromValue: '-191px'}], position: 6750, duration: 0 },
                { id: "eid775", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-190px', { fromValue: '-188px'}], position: 7000, duration: 0 },
                { id: "eid776", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-193px', { fromValue: '-190px'}], position: 7250, duration: 0 },
                { id: "eid777", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-191px', { fromValue: '-193px'}], position: 7500, duration: 0 },
                { id: "eid778", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-188px', { fromValue: '-191px'}], position: 7750, duration: 0 },
                { id: "eid779", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-191px', { fromValue: '-188px'}], position: 8441, duration: 0 },
                { id: "eid780", tween: [ "style", "${_MaisBewegungAusMenschen}", "top", '-193px', { fromValue: '-191px'}], position: 8921, duration: 0 },
                { id: "eid750", tween: [ "style", "${_MaisBewegungAusMenschen}", "width", '588px', { fromValue: '327px'}], position: 3000, duration: 3000 },
                { id: "eid753", tween: [ "style", "${_MaisBewegungAusblick}", "left", '-6px', { fromValue: '0px'}], position: 3000, duration: 3000 },
                { id: "eid754", tween: [ "style", "${_MaisBewegungAusblick}", "width", '588px', { fromValue: '327px'}], position: 3000, duration: 3000 },
                { id: "eid755", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid757", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '2px', { fromValue: '0px'}], position: 406, duration: 0 },
                { id: "eid759", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '1px', { fromValue: '1px'}], position: 777, duration: 0 },
                { id: "eid761", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '2px', { fromValue: '2px'}], position: 1000, duration: 0 },
                { id: "eid763", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '1px', { fromValue: '0px'}], position: 1622, duration: 0 },
                { id: "eid765", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '1px', { fromValue: '1px'}], position: 1906, duration: 0 },
                { id: "eid749", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-6px', { fromValue: '0px'}], position: 3000, duration: 3000 },
                { id: "eid767", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-4px', { fromValue: '-6px'}], position: 6750, duration: 0 },
                { id: "eid768", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-3px', { fromValue: '-4px'}], position: 7000, duration: 0 },
                { id: "eid769", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-4px', { fromValue: '-3px'}], position: 7250, duration: 0 },
                { id: "eid770", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-4px', { fromValue: '-4px'}], position: 7500, duration: 0 },
                { id: "eid771", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-4px', { fromValue: '-4px'}], position: 7750, duration: 0 },
                { id: "eid772", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-4px', { fromValue: '-4px'}], position: 8441, duration: 0 },
                { id: "eid773", tween: [ "style", "${_MaisBewegungAusMenschen}", "left", '-2px', { fromValue: '-4px'}], position: 8921, duration: 0 },
                { id: "eid751", tween: [ "style", "${_MaisBewegungAusblick}", "top", '-191px', { fromValue: '0px'}], position: 3000, duration: 3000 },
                { id: "eid752", tween: [ "style", "${_MaisBewegungAusblick}", "height", '311px', { fromValue: '173px'}], position: 3000, duration: 3000 }            ]
        }
    }
},
"sym_menschen": {
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
                    id: 'k1',
                    type: 'image',
                    rect: ['0px', '0px', '398px', '792px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k1.png', '0px', '0px']
                },
                {
                    id: 'g3',
                    type: 'image',
                    rect: ['420px', '-242px', '131px', '300px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g3.png', '0px', '0px']
                },
                {
                    id: 'k4',
                    type: 'image',
                    rect: ['-919px', '31px', '337px', '566px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k4.png', '0px', '0px']
                },
                {
                    id: 'g4',
                    type: 'image',
                    rect: ['-905px', '-156px', '211px', '243px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g4.png', '0px', '0px']
                },
                {
                    id: 'k5',
                    type: 'image',
                    rect: ['-678px', '338px', '340px', '432px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k5.png', '0px', '0px']
                },
                {
                    id: 'gseitlich2',
                    type: 'image',
                    rect: ['-586px', '209px', '267px', '218px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gseitlich2.png', '0px', '0px']
                },
                {
                    id: 'gseitlich3',
                    type: 'image',
                    rect: ['-585px', '207px', '248px', '208px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/gseitlich3.png', '0px', '0px']
                },
                {
                    id: 'pflanze5',
                    type: 'image',
                    rect: ['-758px', '274px', '213px', '298px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pflanze5.png', '0px', '0px']
                },
                {
                    id: 'k6',
                    type: 'image',
                    rect: ['-871px', '587px', '663px', '375px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k6.png', '0px', '0px']
                },
                {
                    id: 'g6',
                    type: 'image',
                    rect: ['-834px', '436px', '233px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                },
                {
                    id: 'k9',
                    type: 'image',
                    rect: ['-1558px', '71px', '404px', '627px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k9.png', '0px', '0px']
                },
                {
                    id: 'g64',
                    type: 'image',
                    rect: ['-1387px', '-126px', '233px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                },
                {
                    id: 'k8',
                    type: 'image',
                    rect: ['-1405px', '446px', '366px', '438px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k8.png', '0px', '0px']
                },
                {
                    id: 'g63',
                    type: 'image',
                    rect: ['-1246px', '274px', '233px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                },
                {
                    id: 'lachenCopy',
                    type: 'image',
                    rect: ['-1239px', '371px', '179px', '135px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lachen.png', '0px', '0px']
                },
                {
                    id: 'k7',
                    type: 'image',
                    rect: ['-1154px', '412px', '381px', '623px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k7.png', '0px', '0px']
                },
                {
                    id: 'pflanze7',
                    type: 'image',
                    rect: ['-973px', '396px', '189px', '279px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pflanze7.png', '0px', '0px']
                },
                {
                    id: 'g62',
                    type: 'image',
                    rect: ['-1013', '266', '233px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                },
                {
                    id: 'g2',
                    type: 'image',
                    rect: ['449px', '377px', '190px', '302px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g2.png', '0px', '0px']
                },
                {
                    id: 'k3',
                    type: 'image',
                    rect: ['380px', '-120px', '388px', '516px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k3.png', '0px', '0px']
                },
                {
                    id: 'k2',
                    type: 'image',
                    rect: ['266px', '542px', '370px', '383px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/k2.png', '0px', '0px']
                },
                {
                    id: 'g1',
                    type: 'image',
                    rect: ['114px', '-156px', '232px', '256px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/g1.png', '0px', '0px']
                },
                {
                    id: 'lachen',
                    type: 'image',
                    rect: ['128px', '-55px', '179px', '135px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lachen.png', '0px', '0px']
                },
                {
                    id: 'r7auge',
                    type: 'image',
                    rect: ['-850px', '349px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l7auge',
                    type: 'image',
                    rect: ['-936px', '328px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r8auge',
                    type: 'image',
                    rect: ['-1081', '354', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l8auge',
                    type: 'image',
                    rect: ['-1169px', '336px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r9auge',
                    type: 'image',
                    rect: ['-1226px', '-44px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l9auge',
                    type: 'image',
                    rect: ['-1310px', '-63px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r6auge',
                    type: 'image',
                    rect: ['-672px', '518px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l6auge',
                    type: 'image',
                    rect: ['-758px', '499px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l5auge',
                    type: 'image',
                    rect: ['-423', '296', '19px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l4auge',
                    type: 'image',
                    rect: ['-834px', '-82px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r4auge',
                    type: 'image',
                    rect: ['-748px', '-92px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r3auge',
                    type: 'image',
                    rect: ['457px', '-156', '19px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l2auge',
                    type: 'image',
                    rect: ['541px', '472px', '19px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'r1auge',
                    type: 'image',
                    rect: ['221px', '-76px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    id: 'l1auge',
                    type: 'image',
                    rect: ['144px', '-87px', '31px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.2295', '1.2295']],
                    id: 'huhliegenkorper2',
                    type: 'image',
                    rect: ['144px', '188px', '140px', '122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                },
                {
                    id: 'sym_huhliegenkopf',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['1.2295', '1.2295']],
                    rect: ['174px', '204px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_huhliegenkopf',
                symbolName: 'sym_huhliegenkopf',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_k7}": [
                ["style", "top", '412px'],
                ["style", "left", '-1154px']
            ],
            "${_huhliegenkorper2}": [
                ["style", "top", '188px'],
                ["transform", "scaleX", '1.2295'],
                ["transform", "scaleY", '1.2295'],
                ["style", "left", '144px']
            ],
            "${_l9auge}": [
                ["style", "top", '-63px'],
                ["style", "left", '-1310px']
            ],
            "${_l7auge}": [
                ["style", "left", '-936px'],
                ["style", "top", '328px']
            ],
            "${_r6auge}": [
                ["style", "top", '518px'],
                ["style", "left", '-672px']
            ],
            "${_k1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_l4auge}": [
                ["style", "left", '-834px'],
                ["style", "top", '-82px']
            ],
            "${_l2auge}": [
                ["style", "height", '16px'],
                ["style", "top", '474px'],
                ["style", "left", '541px'],
                ["style", "width", '19px']
            ],
            "${_lachen}": [
                ["style", "top", '-55px'],
                ["style", "opacity", '0'],
                ["style", "left", '128px']
            ],
            "${_l1auge}": [
                ["style", "top", '-87px'],
                ["style", "left", '144px']
            ],
            "${_k2}": [
                ["style", "top", '542px'],
                ["style", "left", '266px']
            ],
            "${_sym_huhliegenkopf}": [
                ["style", "top", '204px'],
                ["transform", "scaleX", '1.2295'],
                ["transform", "scaleY", '1.2295'],
                ["style", "left", '174px']
            ],
            "${_r7auge}": [
                ["style", "top", '349px'],
                ["style", "left", '-850px']
            ],
            "${_k9}": [
                ["style", "left", '-1558px'],
                ["style", "top", '71px']
            ],
            "${_l8auge}": [
                ["style", "left", '-1169px'],
                ["style", "top", '336px']
            ],
            "${_r3auge}": [
                ["style", "top", '-156px'],
                ["style", "height", '16px'],
                ["style", "left", '457px'],
                ["style", "width", '19px']
            ],
            "${_gseitlich2}": [
                ["style", "top", '209px'],
                ["style", "opacity", '1'],
                ["style", "left", '-586px']
            ],
            "${_r8auge}": [
                ["style", "left", '-1081px'],
                ["style", "top", '354px']
            ],
            "${_g3}": [
                ["style", "top", '-242px'],
                ["style", "left", '420px']
            ],
            "${_g64}": [
                ["style", "top", '-126px'],
                ["style", "left", '-1387px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_g6}": [
                ["style", "top", '436px'],
                ["style", "left", '-834px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_g63}": [
                ["style", "top", '274px'],
                ["style", "left", '-1246px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '792px'],
                ["style", "width", '398px']
            ],
            "${_r4auge}": [
                ["style", "top", '-92px'],
                ["style", "left", '-748px']
            ],
            "${_lachenCopy}": [
                ["style", "top", '371px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '16deg'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["style", "left", '-1239px']
            ],
            "${_k5}": [
                ["style", "top", '338px'],
                ["style", "left", '-678px']
            ],
            "${_g4}": [
                ["style", "left", '-905px'],
                ["style", "top", '-156px']
            ],
            "${_pflanze5}": [
                ["style", "top", '274px'],
                ["style", "left", '-758px']
            ],
            "${_k6}": [
                ["style", "left", '-871px'],
                ["style", "top", '587px']
            ],
            "${_gseitlich3}": [
                ["style", "top", '207px'],
                ["style", "opacity", '0'],
                ["style", "left", '-585px']
            ],
            "${_k3}": [
                ["style", "left", '380px'],
                ["style", "top", '-120px']
            ],
            "${_l6auge}": [
                ["style", "left", '-758px'],
                ["style", "top", '499px']
            ],
            "${_k4}": [
                ["style", "top", '31px'],
                ["style", "left", '-919px']
            ],
            "${_r1auge}": [
                ["style", "left", '221px'],
                ["style", "top", '-76px']
            ],
            "${_k8}": [
                ["style", "top", '446px'],
                ["style", "left", '-1405px']
            ],
            "${_l5auge}": [
                ["style", "top", '296px'],
                ["style", "height", '16px'],
                ["style", "left", '-423px'],
                ["style", "width", '19px']
            ],
            "${_g1}": [
                ["style", "top", '-156px'],
                ["style", "left", '114px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_pflanze7}": [
                ["style", "left", '-973px'],
                ["style", "top", '396px']
            ],
            "${_g2}": [
                ["style", "top", '377px'],
                ["style", "left", '449px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_r9auge}": [
                ["style", "left", '-1226px'],
                ["style", "top", '-44px']
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
                "loopylooo": 0
            },
            timeline: [
                { id: "eid882", tween: [ "style", "${_r7auge}", "left", '-853px', { fromValue: '-850px'}], position: 0, duration: 1499 },
                { id: "eid1012", tween: [ "style", "${_r7auge}", "left", '-850px', { fromValue: '-853px'}], position: 1747, duration: 2409 },
                { id: "eid1145", tween: [ "transform", "${_g64}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3250, duration: 0 },
                { id: "eid1181", tween: [ "transform", "${_g64}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 3636, duration: 0 },
                { id: "eid1178", tween: [ "transform", "${_g64}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 3933, duration: 0 },
                { id: "eid839", tween: [ "style", "${_l6auge}", "top", '491px', { fromValue: '499px'}], position: 0, duration: 1499 },
                { id: "eid1004", tween: [ "style", "${_l6auge}", "top", '499px', { fromValue: '491px'}], position: 1747, duration: 2409 },
                { id: "eid824", tween: [ "style", "${_l4auge}", "top", '-86px', { fromValue: '-82px'}], position: 147, duration: 1499 },
                { id: "eid1000", tween: [ "style", "${_l4auge}", "top", '-82px', { fromValue: '-86px'}], position: 1992, duration: 2409 },
                { id: "eid1144", tween: [ "transform", "${_g6}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1984, duration: 0 },
                { id: "eid1187", tween: [ "transform", "${_g6}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 2339, duration: 0 },
                { id: "eid1184", tween: [ "transform", "${_g6}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 3083, duration: 0 },
                { id: "eid881", tween: [ "style", "${_r7auge}", "top", '342px', { fromValue: '349px'}], position: 0, duration: 1499 },
                { id: "eid1011", tween: [ "style", "${_r7auge}", "top", '349px', { fromValue: '342px'}], position: 1747, duration: 2409 },
                { id: "eid911", tween: [ "style", "${_k3}", "left", '380px', { fromValue: '380px'}], position: 0, duration: 0 },
                { id: "eid916", tween: [ "style", "${_k3}", "left", '385px', { fromValue: '380px'}], position: 562, duration: 628 },
                { id: "eid958", tween: [ "style", "${_k3}", "left", '380px', { fromValue: '385px'}], position: 1747, duration: 0 },
                { id: "eid959", tween: [ "style", "${_k3}", "left", '385px', { fromValue: '380px'}], position: 2310, duration: 628 },
                { id: "eid960", tween: [ "style", "${_k3}", "left", '385px', { fromValue: '385px'}], position: 3495, duration: 0 },
                { id: "eid871", tween: [ "style", "${_r8auge}", "left", '-1082px', { fromValue: '-1081px'}], position: 248, duration: 1499 },
                { id: "eid1013", tween: [ "style", "${_r8auge}", "left", '-1081px', { fromValue: '-1082px'}], position: 2146, duration: 2409 },
                { id: "eid1269", tween: [ "transform", "${_lachenCopy}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1268", tween: [ "transform", "${_lachenCopy}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0 },
                { id: "eid1150", tween: [ "style", "${_g6}", "left", '-834px', { fromValue: '-834px'}], position: 1984, duration: 0 },
                { id: "eid1185", tween: [ "style", "${_g6}", "left", '-836px', { fromValue: '-834px'}], position: 2339, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_g6}", "left", '-834px', { fromValue: '-836px'}], position: 3083, duration: 0 },
                { id: "eid852", tween: [ "style", "${_l9auge}", "top", '-69px', { fromValue: '-63px'}], position: 0, duration: 1499 },
                { id: "eid1006", tween: [ "style", "${_l9auge}", "top", '-63px', { fromValue: '-69px'}], position: 1747, duration: 2409 },
                { id: "eid846", tween: [ "style", "${_r6auge}", "top", '512px', { fromValue: '518px'}], position: 0, duration: 1499 },
                { id: "eid941", tween: [ "style", "${_r6auge}", "top", '512px', { fromValue: '518px'}], position: 1747, duration: 2409 },
                { id: "eid870", tween: [ "style", "${_r8auge}", "top", '351px', { fromValue: '354px'}], position: 248, duration: 1499 },
                { id: "eid1009", tween: [ "style", "${_r8auge}", "top", '354px', { fromValue: '351px'}], position: 2146, duration: 2409 },
                { id: "eid1266", tween: [ "style", "${_lachenCopy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1267", tween: [ "style", "${_lachenCopy}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 0 },
                { id: "eid1075", tween: [ "style", "${_lachen}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1077", tween: [ "style", "${_lachen}", "opacity", '1', { fromValue: '0'}], position: 1363, duration: 0 },
                { id: "eid915", tween: [ "style", "${_k3}", "top", '-122px', { fromValue: '-120px'}], position: 0, duration: 562 },
                { id: "eid918", tween: [ "style", "${_k3}", "top", '-124px', { fromValue: '-122px'}], position: 562, duration: 628 },
                { id: "eid921", tween: [ "style", "${_k3}", "top", '-122px', { fromValue: '-124px'}], position: 1190, duration: 557 },
                { id: "eid961", tween: [ "style", "${_k3}", "top", '-122px', { fromValue: '-120px'}], position: 1747, duration: 562 },
                { id: "eid962", tween: [ "style", "${_k3}", "top", '-124px', { fromValue: '-122px'}], position: 2310, duration: 628 },
                { id: "eid963", tween: [ "style", "${_k3}", "top", '-122px', { fromValue: '-124px'}], position: 2938, duration: 557 },
                { id: "eid1143", tween: [ "transform", "${_g63}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 635, duration: 0 },
                { id: "eid1175", tween: [ "transform", "${_g63}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 1021, duration: 0 },
                { id: "eid1172", tween: [ "transform", "${_g63}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 1499, duration: 0 },
                { id: "eid808", tween: [ "style", "${_l2auge}", "top", '474px', { fromValue: '474px'}], position: 1499, duration: 0 },
                { id: "eid927", tween: [ "style", "${_l2auge}", "top", '474px', { fromValue: '474px'}], position: 4165, duration: 0 },
                { id: "eid1257", tween: [ "style", "${_gseitlich2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid1260", tween: [ "style", "${_gseitlich2}", "opacity", '0', { fromValue: '1'}], position: 3933, duration: 0 },
                { id: "eid1265", tween: [ "style", "${_gseitlich2}", "opacity", '1', { fromValue: '0'}], position: 4555, duration: 0 },
                { id: "eid848", tween: [ "style", "${_l9auge}", "left", '-1310px', { fromValue: '-1310px'}], position: 0, duration: 0 },
                { id: "eid850", tween: [ "style", "${_l9auge}", "left", '-1310px', { fromValue: '-1310px'}], position: 1499, duration: 0 },
                { id: "eid942", tween: [ "style", "${_l9auge}", "left", '-1310px', { fromValue: '-1310px'}], position: 1747, duration: 0 },
                { id: "eid943", tween: [ "style", "${_l9auge}", "left", '-1310px', { fromValue: '-1310px'}], position: 4157, duration: 0 },
                { id: "eid1146", tween: [ "transform", "${_g1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 392, duration: 0 },
                { id: "eid1160", tween: [ "transform", "${_g1}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1163", tween: [ "transform", "${_g1}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1363, duration: 0 },
                { id: "eid833", tween: [ "style", "${_l5auge}", "top", '302px', { fromValue: '296px'}], position: 147, duration: 1499 },
                { id: "eid1002", tween: [ "style", "${_l5auge}", "top", '296px', { fromValue: '302px'}], position: 1984, duration: 2409 },
                { id: "eid791", tween: [ "style", "${_l1auge}", "left", '150px', { fromValue: '144px'}], position: 0, duration: 1499 },
                { id: "eid994", tween: [ "style", "${_l1auge}", "left", '144px', { fromValue: '150px'}], position: 1747, duration: 2409 },
                { id: "eid1258", tween: [ "style", "${_gseitlich3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid1259", tween: [ "style", "${_gseitlich3}", "opacity", '1', { fromValue: '0'}], position: 3933, duration: 0 },
                { id: "eid1264", tween: [ "style", "${_gseitlich3}", "opacity", '0', { fromValue: '1'}], position: 4555, duration: 0 },
                { id: "eid834", tween: [ "style", "${_l5auge}", "left", '-422px', { fromValue: '-423px'}], position: 147, duration: 1499 },
                { id: "eid1003", tween: [ "style", "${_l5auge}", "left", '-423px', { fromValue: '-422px'}], position: 1984, duration: 2409 },
                { id: "eid807", tween: [ "style", "${_l2auge}", "left", '548px', { fromValue: '541px'}], position: 248, duration: 1499 },
                { id: "eid926", tween: [ "style", "${_l2auge}", "left", '548px', { fromValue: '541px'}], position: 2155, duration: 2409 },
                { id: "eid872", tween: [ "style", "${_l7auge}", "left", '-936px', { fromValue: '-936px'}], position: 0, duration: 0 },
                { id: "eid874", tween: [ "style", "${_l7auge}", "left", '-936px', { fromValue: '-936px'}], position: 1499, duration: 0 },
                { id: "eid953", tween: [ "style", "${_l7auge}", "left", '-936px', { fromValue: '-936px'}], position: 1747, duration: 0 },
                { id: "eid954", tween: [ "style", "${_l7auge}", "left", '-936px', { fromValue: '-936px'}], position: 4157, duration: 0 },
                { id: "eid828", tween: [ "style", "${_l4auge}", "left", '-840px', { fromValue: '-834px'}], position: 147, duration: 1499 },
                { id: "eid1001", tween: [ "style", "${_l4auge}", "left", '-834px', { fromValue: '-840px'}], position: 1992, duration: 2409 },
                { id: "eid1152", tween: [ "style", "${_g64}", "left", '-1387px', { fromValue: '-1387px'}], position: 3250, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_g64}", "left", '-1388px', { fromValue: '-1387px'}], position: 3636, duration: 0 },
                { id: "eid1176", tween: [ "style", "${_g64}", "left", '-1387px', { fromValue: '-1388px'}], position: 3933, duration: 0 },
                { id: "eid1155", tween: [ "style", "${_g1}", "top", '-156px', { fromValue: '-156px'}], position: 392, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_g1}", "top", '-158px', { fromValue: '-156px'}], position: 1000, duration: 0 },
                { id: "eid1162", tween: [ "style", "${_g1}", "top", '-160px', { fromValue: '-158px'}], position: 1363, duration: 0 },
                { id: "eid818", tween: [ "style", "${_r4auge}", "top", '-96px', { fromValue: '-92px'}], position: 147, duration: 1489 },
                { id: "eid998", tween: [ "style", "${_r4auge}", "top", '-92px', { fromValue: '-96px'}], position: 1992, duration: 2392 },
                { id: "eid847", tween: [ "style", "${_r6auge}", "left", '-671px', { fromValue: '-672px'}], position: 0, duration: 1499 },
                { id: "eid1014", tween: [ "style", "${_r6auge}", "left", '-671px', { fromValue: '-672px'}], position: 1747, duration: 2409 },
                { id: "eid792", tween: [ "style", "${_l1auge}", "top", '-86px', { fromValue: '-87px'}], position: 0, duration: 1499 },
                { id: "eid993", tween: [ "style", "${_l1auge}", "top", '-87px', { fromValue: '-86px'}], position: 1747, duration: 2409 },
                { id: "eid1149", tween: [ "style", "${_g63}", "top", '274px', { fromValue: '274px'}], position: 635, duration: 0 },
                { id: "eid1174", tween: [ "style", "${_g63}", "top", '272px', { fromValue: '274px'}], position: 1021, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_g63}", "top", '274px', { fromValue: '272px'}], position: 1499, duration: 0 },
                { id: "eid1154", tween: [ "style", "${_g1}", "left", '114px', { fromValue: '114px'}], position: 392, duration: 0 },
                { id: "eid1158", tween: [ "style", "${_g1}", "left", '116px', { fromValue: '114px'}], position: 1000, duration: 0 },
                { id: "eid1161", tween: [ "style", "${_g1}", "left", '114px', { fromValue: '116px'}], position: 1363, duration: 0 },
                { id: "eid819", tween: [ "style", "${_r4auge}", "left", '-753px', { fromValue: '-748px'}], position: 147, duration: 1489 },
                { id: "eid999", tween: [ "style", "${_r4auge}", "left", '-748px', { fromValue: '-753px'}], position: 1992, duration: 2392 },
                { id: "eid835", tween: [ "style", "${_l6auge}", "left", '-758px', { fromValue: '-758px'}], position: 0, duration: 0 },
                { id: "eid838", tween: [ "style", "${_l6auge}", "left", '-758px', { fromValue: '-758px'}], position: 1499, duration: 0 },
                { id: "eid937", tween: [ "style", "${_l6auge}", "left", '-758px', { fromValue: '-758px'}], position: 1747, duration: 0 },
                { id: "eid938", tween: [ "style", "${_l6auge}", "left", '-758px', { fromValue: '-758px'}], position: 4157, duration: 0 },
                { id: "eid1156", tween: [ "style", "${_g2}", "left", '449px', { fromValue: '449px'}], position: 1845, duration: 0 },
                { id: "eid1167", tween: [ "style", "${_g2}", "left", '448px', { fromValue: '449px'}], position: 2048, duration: 0 },
                { id: "eid1164", tween: [ "style", "${_g2}", "left", '449px', { fromValue: '448px'}], position: 2400, duration: 0 },
                { id: "eid1148", tween: [ "style", "${_g63}", "left", '-1246px', { fromValue: '-1246px'}], position: 635, duration: 0 },
                { id: "eid1173", tween: [ "style", "${_g63}", "left", '-1244px', { fromValue: '-1246px'}], position: 1021, duration: 0 },
                { id: "eid1170", tween: [ "style", "${_g63}", "left", '-1246px', { fromValue: '-1244px'}], position: 1499, duration: 0 },
                { id: "eid865", tween: [ "style", "${_l8auge}", "top", '331px', { fromValue: '336px'}], position: 248, duration: 1499 },
                { id: "eid1008", tween: [ "style", "${_l8auge}", "top", '336px', { fromValue: '331px'}], position: 2146, duration: 2409 },
                { id: "eid800", tween: [ "style", "${_r1auge}", "left", '231px', { fromValue: '221px'}], position: 0, duration: 1499 },
                { id: "eid996", tween: [ "style", "${_r1auge}", "left", '221px', { fromValue: '231px'}], position: 1747, duration: 2409 },
                { id: "eid876", tween: [ "style", "${_l7auge}", "top", '323px', { fromValue: '328px'}], position: 0, duration: 1499 },
                { id: "eid1010", tween: [ "style", "${_l7auge}", "top", '328px', { fromValue: '323px'}], position: 1747, duration: 2409 },
                { id: "eid859", tween: [ "style", "${_r9auge}", "left", '-1226px', { fromValue: '-1226px'}], position: 0, duration: 0 },
                { id: "eid860", tween: [ "style", "${_r9auge}", "left", '-1226px', { fromValue: '-1226px'}], position: 1499, duration: 0 },
                { id: "eid945", tween: [ "style", "${_r9auge}", "left", '-1226px', { fromValue: '-1226px'}], position: 1747, duration: 0 },
                { id: "eid946", tween: [ "style", "${_r9auge}", "left", '-1226px', { fromValue: '-1226px'}], position: 4157, duration: 0 },
                { id: "eid804", tween: [ "style", "${_r1auge}", "top", '-77px', { fromValue: '-76px'}], position: 0, duration: 1499 },
                { id: "eid995", tween: [ "style", "${_r1auge}", "top", '-76px', { fromValue: '-77px'}], position: 1747, duration: 2409 },
                { id: "eid813", tween: [ "style", "${_r3auge}", "left", '466px', { fromValue: '457px'}], position: 0, duration: 1499 },
                { id: "eid997", tween: [ "style", "${_r3auge}", "left", '457px', { fromValue: '466px'}], position: 1756, duration: 2409 },
                { id: "eid857", tween: [ "style", "${_r9auge}", "top", '-52px', { fromValue: '-44px'}], position: 0, duration: 1499 },
                { id: "eid1007", tween: [ "style", "${_r9auge}", "top", '-44px', { fromValue: '-52px'}], position: 1747, duration: 2409 },
                { id: "eid1270", tween: [ "transform", "${_lachenCopy}", "rotateZ", '16deg', { fromValue: '16deg'}], position: 0, duration: 0 },
                { id: "eid1151", tween: [ "style", "${_g6}", "top", '436px', { fromValue: '436px'}], position: 1984, duration: 0 },
                { id: "eid1186", tween: [ "style", "${_g6}", "top", '438px', { fromValue: '436px'}], position: 2339, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_g6}", "top", '436px', { fromValue: '438px'}], position: 3083, duration: 0 },
                { id: "eid810", tween: [ "style", "${_r3auge}", "top", '-156px', { fromValue: '-156px'}], position: 0, duration: 0 },
                { id: "eid812", tween: [ "style", "${_r3auge}", "top", '-156px', { fromValue: '-156px'}], position: 1636, duration: 0 },
                { id: "eid929", tween: [ "style", "${_r3auge}", "top", '-156px', { fromValue: '-156px'}], position: 1747, duration: 0 },
                { id: "eid930", tween: [ "style", "${_r3auge}", "top", '-156px', { fromValue: '-156px'}], position: 4376, duration: 0 },
                { id: "eid1153", tween: [ "style", "${_g64}", "top", '-126px', { fromValue: '-126px'}], position: 3250, duration: 0 },
                { id: "eid1180", tween: [ "style", "${_g64}", "top", '-125px', { fromValue: '-126px'}], position: 3636, duration: 0 },
                { id: "eid1177", tween: [ "style", "${_g64}", "top", '-126px', { fromValue: '-125px'}], position: 3933, duration: 0 },
                { id: "eid1147", tween: [ "transform", "${_g2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1845, duration: 0 },
                { id: "eid1169", tween: [ "transform", "${_g2}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 2048, duration: 0 },
                { id: "eid1166", tween: [ "transform", "${_g2}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2400, duration: 0 },
                { id: "eid1157", tween: [ "style", "${_g2}", "top", '377px', { fromValue: '377px'}], position: 1845, duration: 0 },
                { id: "eid1168", tween: [ "style", "${_g2}", "top", '379px', { fromValue: '377px'}], position: 2048, duration: 0 },
                { id: "eid1165", tween: [ "style", "${_g2}", "top", '377px', { fromValue: '379px'}], position: 2400, duration: 0 },
                { id: "eid861", tween: [ "style", "${_l8auge}", "left", '-1169px', { fromValue: '-1169px'}], position: 0, duration: 0 },
                { id: "eid948", tween: [ "style", "${_l8auge}", "left", '-1169px', { fromValue: '-1169px'}], position: 1747, duration: 0 },
                { id: "eid949", tween: [ "style", "${_l8auge}", "left", '-1169px', { fromValue: '-1169px'}], position: 4556, duration: 0 }            ]
        }
    }
},
"sym_hintergrund": {
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
                    id: 'menschenuberal2',
                    type: 'image',
                    rect: ['0', '2', '1088px', '816px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/menschenuberal.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_menschenuberal2}": [
                ["style", "height", '816px'],
                ["style", "top", '2px'],
                ["style", "left", '0px'],
                ["style", "width", '1088px']
            ],
            "${symbolSelector}": [
                ["style", "height", '816px'],
                ["style", "width", '1088px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16500,
            autoPlay: true,
            labels: {
                "loopausblick": 0
            },
            timeline: [
                { id: "eid1245", tween: [ "style", "${_menschenuberal2}", "top", '4px', { fromValue: '2px'}], position: 0, duration: 2623 },
                { id: "eid1246", tween: [ "style", "${_menschenuberal2}", "top", '2px', { fromValue: '4px'}], position: 5000, duration: 3250 },
                { id: "eid1247", tween: [ "style", "${_menschenuberal2}", "top", '0px', { fromValue: '2px'}], position: 8250, duration: 2623 },
                { id: "eid1248", tween: [ "style", "${_menschenuberal2}", "top", '2px', { fromValue: '0px'}], position: 13250, duration: 3250 },
                { id: "eid1240", tween: [ "style", "${_menschenuberal2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_menschenuberal2}", "left", '1px', { fromValue: '-1px'}], position: 2623, duration: 2377 },
                { id: "eid1242", tween: [ "style", "${_menschenuberal2}", "left", '1px', { fromValue: '1px'}], position: 8250, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_menschenuberal2}", "left", '-3px', { fromValue: '-1px'}], position: 10873, duration: 2377 },
                { id: "eid1244", tween: [ "style", "${_menschenuberal2}", "left", '1px', { fromValue: '-3px'}], position: 16500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "PART5");
