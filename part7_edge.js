/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sym_ausblick',
                            symbolName: 'sym_ausblick',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'sym_hintergrund',
                            symbolName: 'sym_hintergrund',
                            type: 'rect',
                            rect: ['614', '266', '1088', '816', 'auto', 'auto']
                        },
                        {
                            id: 'sym_vorzim',
                            symbolName: 'sym_vorzim',
                            type: 'rect',
                            rect: ['0', '-9', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'sym_menschen',
                            symbolName: 'sym_menschen',
                            type: 'rect',
                            rect: ['1362', '450', '398', '792', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['944px', '326px', '578px', '442px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'sym_schwarz',
                            symbolName: 'sym_schwarz',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'uberschwarz',
                            type: 'rect',
                            rect: ['866', '326', '664', '433', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'wald',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wald.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${StageA}': {
                            isStage: true,
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    labels: {
                        "loopzoom": 0
                    },
                    data: [
                        [
                            "eid1218",
                            "scaleX",
                            0,
                            7750,
                            "linear",
                            "${sym_hintergrund}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1233",
                            "scaleX",
                            7750,
                            7750,
                            "linear",
                            "${sym_hintergrund}",
                            '1.01',
                            '1'
                        ],
                        [
                            "eid1215",
                            "scaleY",
                            0,
                            7750,
                            "linear",
                            "${sym_menschen}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1231",
                            "scaleY",
                            7750,
                            7750,
                            "linear",
                            "${sym_menschen}",
                            '1.01',
                            '1'
                        ],
                        [
                            "eid1222",
                            "scaleX",
                            0,
                            7750,
                            "linear",
                            "${sym_ausblick}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1235",
                            "scaleX",
                            7750,
                            7750,
                            "linear",
                            "${sym_ausblick}",
                            '1.01',
                            '1'
                        ],
                        [
                            "eid1219",
                            "scaleY",
                            0,
                            7750,
                            "linear",
                            "${sym_hintergrund}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1232",
                            "scaleY",
                            7750,
                            7750,
                            "linear",
                            "${sym_hintergrund}",
                            '1.01',
                            '1'
                        ],
                        [
                            "eid1214",
                            "scaleX",
                            0,
                            7750,
                            "linear",
                            "${sym_menschen}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1230",
                            "scaleX",
                            7750,
                            7750,
                            "linear",
                            "${sym_menschen}",
                            '1.01',
                            '1'
                        ],
                        [
                            "eid1223",
                            "scaleY",
                            0,
                            7750,
                            "linear",
                            "${sym_ausblick}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid1234",
                            "scaleY",
                            7750,
                            7750,
                            "linear",
                            "${sym_ausblick}",
                            '1.01',
                            '1'
                        ]
                    ]
                }
            },
            "sym_vorhang": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '5112px', '538px', 'auto', 'auto'],
                            id: 'vorhangani',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vorhangani.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 850, 538]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "linear",
                            "${vorhangani}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "left",
                            500,
                            0,
                            "linear",
                            "${vorhangani}",
                            '0px',
                            '-871px'
                        ],
                        [
                            "eid61",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${vorhangani}",
                            '-872px',
                            '-1750px'
                        ],
                        [
                            "eid62",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${vorhangani}",
                            '-1751px',
                            '-2610px'
                        ],
                        [
                            "eid63",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${vorhangani}",
                            '-2610px',
                            '-3462px'
                        ],
                        [
                            "eid64",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${vorhangani}",
                            '-3464px',
                            '-4313px'
                        ]
                    ]
                }
            },
            "wegzumhaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-580', '-403', '3414px', '2369px', 'auto', 'auto'],
                            id: 'haushinterswrgb',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.66', '0.66', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/haushinterswrgb.jpg', '0px', '0px']
                        },
                        {
                            rect: [142, 216, '1737px', '916px', 'auto', 'auto'],
                            id: 'hauswegsw',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.66', '0.66', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hauswegsw.png', '0px', '0px']
                        },
                        {
                            id: 'waldanirgb',
                            type: 'image',
                            rect: [25, '9', '8192px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/waldanirgb.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 8217, 1564]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid97",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${haushinterswrgb}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid75",
                            "left",
                            0,
                            0,
                            "linear",
                            "${waldanirgb}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid76",
                            "left",
                            500,
                            0,
                            "linear",
                            "${waldanirgb}",
                            '25px',
                            '-2023px'
                        ],
                        [
                            "eid77",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${waldanirgb}",
                            '-2023px',
                            '-4071px'
                        ],
                        [
                            "eid78",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${waldanirgb}",
                            '-4071px',
                            '-6119px'
                        ],
                        [
                            "eid79",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${waldanirgb}",
                            '-6119px',
                            '-8167px'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${hauswegsw}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${hauswegsw}",
                            '216px',
                            '158px'
                        ],
                        [
                            "eid129",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${hauswegsw}",
                            '142px',
                            '91px'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${haushinterswrgb}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${hauswegsw}",
                            '0.66',
                            '1'
                        ]
                    ]
                }
            },
            "sym_schwarz": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            opacity: '0.850000',
                            id: 'schwarz',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid70",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${schwarz}",
                            '0.850000',
                            '0'
                        ]
                    ]
                }
            },
            "sym_ausblick": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [136, -142, '2048px', '1536px', 'auto', 'auto'],
                            id: 'wasserstruktur_Kopie',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wasserstruktur.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 15162,
                    autoPlay: true,
                    labels: {
                        "huhsontherun": 0
                    },
                    data: [
                        [
                            "eid1255",
                            "left",
                            0,
                            15162,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '136px',
                            '536px'
                        ],
                        [
                            "eid1256",
                            "top",
                            0,
                            15162,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '-142px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_zimmer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'zimmer',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zimmer.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_vorzim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 5, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_zimmer2',
                            symbolName: 'sym_zimmer',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '1.00704', 1], ['50%', '50%']]
                        },
                        {
                            rect: [767, 263, 850, 538, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_vorhang',
                            symbolName: 'sym_vorhang',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid162",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${sym_zimmer2}",
                            '1.00704',
                            '3.76926'
                        ],
                        [
                            "eid188",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${sym_zimmer2}",
                            '5px',
                            '791px'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${sym_vorhang}",
                            '1',
                            '3.76926'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${sym_zimmer2}",
                            '1',
                            '3.76926'
                        ],
                        [
                            "eid190",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${sym_vorhang}",
                            '263px',
                            '404px'
                        ],
                        [
                            "eid187",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${sym_zimmer2}",
                            '0px',
                            '-851px'
                        ],
                        [
                            "eid165",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${sym_vorhang}",
                            '1',
                            '3.76926'
                        ],
                        [
                            "eid189",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${sym_vorhang}",
                            '767px',
                            '289px'
                        ]
                    ]
                }
            },
            "sym_huhliegen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'huhliegenkorper',
                            type: 'image',
                            rect: [0, 0, '140px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                        },
                        {
                            id: 'huhliegenkopf',
                            type: 'image',
                            rect: [0, 0, '242px', '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkopf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 242, 122]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_huhliegenkopf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-5, 0, '242px', '68px', 'auto', 'auto'],
                            id: 'huhliegenkopf2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkopf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 50, 68]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "loophuhn1": 0
                    },
                    data: [
                        [
                            "eid285",
                            "left",
                            0,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-5px',
                            '-5px'
                        ],
                        [
                            "eid286",
                            "left",
                            649,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-5px',
                            '-60px'
                        ],
                        [
                            "eid287",
                            "left",
                            1182,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-60px',
                            '-121px'
                        ],
                        [
                            "eid288",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-121px',
                            '-185px'
                        ],
                        [
                            "eid289",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-185px',
                            '-121px'
                        ],
                        [
                            "eid290",
                            "left",
                            4399,
                            0,
                            "linear",
                            "${huhliegenkopf2}",
                            '-121px',
                            '-61px'
                        ]
                    ]
                }
            },
            "sym_huhflugelganzani": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'huhflugelganzani',
                            type: 'image',
                            rect: [-21, -5, '1109px', '259px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhflugelganzani.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 180, 259]
                        }
                    }
                },
                timeline: {
                    duration: 3116,
                    autoPlay: false,
                    labels: {
                        "loophuhflugelganzani2": 0,
                        "labelhuhflugelganzani": 1095
                    },
                    data: [
                        [
                            "eid304",
                            "left",
                            0,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-21px',
                            '-21px'
                        ],
                        [
                            "eid306",
                            "left",
                            392,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-21px',
                            '-197px'
                        ],
                        [
                            "eid308",
                            "left",
                            750,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-197px',
                            '-374px'
                        ],
                        [
                            "eid310",
                            "left",
                            1095,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-374px',
                            '-548px'
                        ],
                        [
                            "eid312",
                            "left",
                            1386,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-548px',
                            '-739px'
                        ],
                        [
                            "eid314",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-739px',
                            '-918px'
                        ],
                        [
                            "eid316",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-918px',
                            '-734px'
                        ],
                        [
                            "eid318",
                            "left",
                            2305,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-734px',
                            '-543px'
                        ],
                        [
                            "eid320",
                            "left",
                            2643,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-543px',
                            '-385px'
                        ],
                        [
                            "eid322",
                            "left",
                            2839,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-385px',
                            '-205px'
                        ],
                        [
                            "eid305",
                            "top",
                            0,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-5px',
                            '-5px'
                        ],
                        [
                            "eid307",
                            "top",
                            392,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-5px',
                            '-6px'
                        ],
                        [
                            "eid309",
                            "top",
                            750,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-6px',
                            '-4px'
                        ],
                        [
                            "eid311",
                            "top",
                            1095,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-4px',
                            '-2px'
                        ],
                        [
                            "eid313",
                            "top",
                            1386,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-2px',
                            '2px'
                        ],
                        [
                            "eid315",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '2px',
                            '-3px'
                        ],
                        [
                            "eid317",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-3px',
                            '2px'
                        ],
                        [
                            "eid319",
                            "top",
                            2305,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '2px',
                            '-3px'
                        ],
                        [
                            "eid321",
                            "top",
                            2643,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '-3px',
                            '2px'
                        ],
                        [
                            "eid323",
                            "top",
                            2839,
                            0,
                            "linear",
                            "${huhflugelganzani}",
                            '2px',
                            '3px'
                        ]
                    ]
                }
            },
            "sym_huhpickenganzani": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'huhpickenganzani',
                            type: 'image',
                            rect: [-7, 0, '550px', '147px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhpickenganzani.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 170, 155]
                        }
                    }
                },
                timeline: {
                    duration: 3717,
                    autoPlay: false,
                    labels: {
                        "loophuhpickenganzani3": 0
                    },
                    data: [
                        [
                            "eid329",
                            "top",
                            0,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid331",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid333",
                            "top",
                            2635,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '2px',
                            '5px'
                        ],
                        [
                            "eid335",
                            "top",
                            3467,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "left",
                            0,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid330",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '-7px',
                            '-190px'
                        ],
                        [
                            "eid332",
                            "left",
                            2635,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '-190px',
                            '-367px'
                        ],
                        [
                            "eid334",
                            "left",
                            3467,
                            0,
                            "linear",
                            "${huhpickenganzani}",
                            '-367px',
                            '-190px'
                        ]
                    ]
                }
            },
            "sym_huhpickenkopfkoroer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'huhpickenkopf',
                            type: 'image',
                            rect: [-87, 0, '163px', '146px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhpickenkopf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 65, 146]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "loophuhn4": 0
                    },
                    data: [
                        [
                            "eid339",
                            "left",
                            0,
                            0,
                            "linear",
                            "${huhpickenkopf}",
                            '-87px',
                            '-87px'
                        ],
                        [
                            "eid341",
                            "left",
                            500,
                            0,
                            "linear",
                            "${huhpickenkopf}",
                            '-87px',
                            '-4px'
                        ],
                        [
                            "eid340",
                            "top",
                            0,
                            0,
                            "linear",
                            "${huhpickenkopf}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_blatt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sym_auge',
                            type: 'rect',
                            symbolName: 'sym_auge',
                            rect: ['0', '2', 2048, 1536, 'auto', 'auto']
                        },
                        {
                            id: 'ib',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ib.png', '0px', '0px']
                        },
                        {
                            id: 'hb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hb.png', '0px', '0px']
                        },
                        {
                            id: 'gb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gb.png', '0px', '0px']
                        },
                        {
                            id: 'fb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fb.png', '0px', '0px']
                        },
                        {
                            id: 'eb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eb.png', '0px', '0px']
                        },
                        {
                            id: 'db',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/db.png', '0px', '0px']
                        },
                        {
                            id: 'cb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cb.png', '0px', '0px']
                        },
                        {
                            id: 'bb',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bb.png', '0px', '0px']
                        },
                        {
                            id: 'a',
                            type: 'image',
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/a.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "loop_blatt": 0
                    },
                    data: [
                        [
                            "eid448",
                            "left",
                            0,
                            500,
                            "linear",
                            "${db}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid493",
                            "left",
                            500,
                            500,
                            "linear",
                            "${db}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid446",
                            "top",
                            0,
                            500,
                            "linear",
                            "${cb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid490",
                            "top",
                            500,
                            500,
                            "linear",
                            "${cb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid443",
                            "left",
                            0,
                            500,
                            "linear",
                            "${a}",
                            '-50px',
                            '-24px'
                        ],
                        [
                            "eid486",
                            "left",
                            500,
                            500,
                            "linear",
                            "${a}",
                            '-24px',
                            '-50px'
                        ],
                        [
                            "eid455",
                            "left",
                            0,
                            500,
                            "linear",
                            "${hb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid499",
                            "left",
                            500,
                            500,
                            "linear",
                            "${hb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid445",
                            "top",
                            0,
                            500,
                            "linear",
                            "${bb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid488",
                            "top",
                            500,
                            500,
                            "linear",
                            "${bb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid419",
                            "top",
                            0,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid478",
                            "top",
                            500,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid479",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid454",
                            "left",
                            0,
                            500,
                            "linear",
                            "${gb}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid498",
                            "left",
                            500,
                            500,
                            "linear",
                            "${gb}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid444",
                            "left",
                            0,
                            500,
                            "linear",
                            "${bb}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid489",
                            "left",
                            500,
                            500,
                            "linear",
                            "${bb}",
                            '0px',
                            '-50px'
                        ],
                        [
                            "eid450",
                            "top",
                            0,
                            500,
                            "linear",
                            "${eb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid494",
                            "top",
                            500,
                            500,
                            "linear",
                            "${eb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid452",
                            "left",
                            0,
                            500,
                            "linear",
                            "${fb}",
                            '-50px',
                            '-20px'
                        ],
                        [
                            "eid497",
                            "left",
                            500,
                            500,
                            "linear",
                            "${fb}",
                            '-20px',
                            '-50px'
                        ],
                        [
                            "eid442",
                            "top",
                            0,
                            500,
                            "linear",
                            "${a}",
                            '-37px',
                            '-23px'
                        ],
                        [
                            "eid487",
                            "top",
                            500,
                            500,
                            "linear",
                            "${a}",
                            '-23px',
                            '-37px'
                        ],
                        [
                            "eid449",
                            "top",
                            0,
                            500,
                            "linear",
                            "${db}",
                            '-37px',
                            '-47px'
                        ],
                        [
                            "eid492",
                            "top",
                            500,
                            500,
                            "linear",
                            "${db}",
                            '-47px',
                            '-37px'
                        ],
                        [
                            "eid456",
                            "top",
                            0,
                            500,
                            "linear",
                            "${ib}",
                            '-37px',
                            '-67px'
                        ],
                        [
                            "eid501",
                            "top",
                            500,
                            500,
                            "linear",
                            "${ib}",
                            '-67px',
                            '-37px'
                        ],
                        [
                            "eid453",
                            "top",
                            0,
                            500,
                            "linear",
                            "${fb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid496",
                            "top",
                            500,
                            500,
                            "linear",
                            "${fb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid421",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid481",
                            "top",
                            500,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid482",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid451",
                            "left",
                            0,
                            500,
                            "linear",
                            "${eb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid495",
                            "left",
                            500,
                            500,
                            "linear",
                            "${eb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid447",
                            "left",
                            0,
                            500,
                            "linear",
                            "${cb}",
                            '-50px',
                            '-80px'
                        ],
                        [
                            "eid491",
                            "left",
                            500,
                            500,
                            "linear",
                            "${cb}",
                            '-80px',
                            '-50px'
                        ],
                        [
                            "eid457",
                            "left",
                            0,
                            500,
                            "linear",
                            "${ib}",
                            '-50px',
                            '-19px'
                        ],
                        [
                            "eid500",
                            "left",
                            500,
                            500,
                            "linear",
                            "${ib}",
                            '-19px',
                            '-50px'
                        ]
                    ]
                }
            },
            "sym_auge": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'augenaufschlagauge',
                            type: 'image',
                            rect: [0, 0, '14336px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/augenaufschlagauge.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid459",
                            "top",
                            0,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid458",
                            "left",
                            0,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid460",
                            "left",
                            311,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '0px',
                            '-2048px'
                        ],
                        [
                            "eid461",
                            "left",
                            642,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '-2048px',
                            '-4096px'
                        ],
                        [
                            "eid462",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '-4096px',
                            '-6144px'
                        ],
                        [
                            "eid463",
                            "left",
                            1338,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '-6144px',
                            '-8192px'
                        ],
                        [
                            "eid464",
                            "left",
                            1839,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '-8192px',
                            '-10310px'
                        ],
                        [
                            "eid465",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${augenaufschlagauge}",
                            '-10000px',
                            '-12367px'
                        ]
                    ]
                }
            },
            "sym_mais": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'MaisHintergrFarben',
                            type: 'image',
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/MaisHintergrFarben.png', '0px', '0px']
                        },
                        {
                            id: 'MaisHinten2',
                            type: 'image',
                            rect: [0, '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/MaisHinten.jpg', '0px', '0px']
                        },
                        {
                            id: 'maisaugengrau',
                            type: 'image',
                            rect: [6, '0', '1748px', '832px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugengrau.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille',
                            type: 'image',
                            rect: [712, 644, '76px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille2',
                            type: 'image',
                            rect: [839, 628, 59, '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille3',
                            type: 'image',
                            rect: [1118, 416, '76px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille4',
                            type: 'image',
                            rect: [1184, 344, '76px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille5',
                            type: 'image',
                            rect: [1505, 611, 65, '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille6',
                            type: 'image',
                            rect: [1599, 571, '76px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille7',
                            type: 'image',
                            rect: [576, 301, 43, 32, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maisaugepopille8',
                            type: 'image',
                            rect: [512, 259, 43, 32, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maisaugepopille.png', '0px', '0px']
                        },
                        {
                            id: 'maismenschen',
                            type: 'image',
                            rect: [1, '0px', '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/maismenschen.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid665",
                            "left",
                            0,
                            1054,
                            "linear",
                            "${maisaugepopille7}",
                            '576px',
                            '575px'
                        ],
                        [
                            "eid615",
                            "left",
                            1054,
                            190,
                            "linear",
                            "${maisaugepopille7}",
                            '575px',
                            '584px'
                        ],
                        [
                            "eid623",
                            "left",
                            1244,
                            141,
                            "linear",
                            "${maisaugepopille7}",
                            '584px',
                            '595px'
                        ],
                        [
                            "eid546",
                            "left",
                            0,
                            493,
                            "linear",
                            "${MaisHintergrFarben}",
                            '0px',
                            '17px'
                        ],
                        [
                            "eid550",
                            "left",
                            493,
                            507,
                            "linear",
                            "${MaisHintergrFarben}",
                            '17px',
                            '2px'
                        ],
                        [
                            "eid558",
                            "left",
                            1474,
                            526,
                            "linear",
                            "${MaisHintergrFarben}",
                            '2px',
                            '-26px'
                        ],
                        [
                            "eid561",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${MaisHintergrFarben}",
                            '-26px',
                            '-40px'
                        ],
                        [
                            "eid667",
                            "left",
                            0,
                            385,
                            "linear",
                            "${maisaugepopille2}",
                            '839px',
                            '838px'
                        ],
                        [
                            "eid590",
                            "left",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille2}",
                            '838px',
                            '827px'
                        ],
                        [
                            "eid669",
                            "left",
                            0,
                            400,
                            "linear",
                            "${maisaugepopille6}",
                            '1599px',
                            '1598px'
                        ],
                        [
                            "eid606",
                            "left",
                            400,
                            615,
                            "linear",
                            "${maisaugepopille6}",
                            '1598px',
                            '1588px'
                        ],
                        [
                            "eid625",
                            "left",
                            1015,
                            230,
                            "linear",
                            "${maisaugepopille6}",
                            '1588px',
                            '1600px'
                        ],
                        [
                            "eid605",
                            "top",
                            400,
                            615,
                            "linear",
                            "${maisaugepopille6}",
                            '571px',
                            '564px'
                        ],
                        [
                            "eid626",
                            "top",
                            1015,
                            230,
                            "linear",
                            "${maisaugepopille6}",
                            '564px',
                            '555px'
                        ],
                        [
                            "eid672",
                            "left",
                            0,
                            385,
                            "linear",
                            "${maisaugepopille4}",
                            '1184px',
                            '1183px'
                        ],
                        [
                            "eid597",
                            "left",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille4}",
                            '1183px',
                            '1185px'
                        ],
                        [
                            "eid547",
                            "top",
                            0,
                            493,
                            "linear",
                            "${MaisHintergrFarben}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid551",
                            "top",
                            493,
                            507,
                            "linear",
                            "${MaisHintergrFarben}",
                            '9px',
                            '17px'
                        ],
                        [
                            "eid554",
                            "top",
                            1000,
                            474,
                            "linear",
                            "${MaisHintergrFarben}",
                            '17px',
                            '-11px'
                        ],
                        [
                            "eid557",
                            "top",
                            1474,
                            526,
                            "linear",
                            "${MaisHintergrFarben}",
                            '-11px',
                            '-43px'
                        ],
                        [
                            "eid562",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${MaisHintergrFarben}",
                            '-43px',
                            '-84px'
                        ],
                        [
                            "eid580",
                            "top",
                            0,
                            0,
                            "linear",
                            "${maisaugepopille7}",
                            '301px',
                            '301px'
                        ],
                        [
                            "eid616",
                            "top",
                            1054,
                            190,
                            "linear",
                            "${maisaugepopille7}",
                            '301px',
                            '315px'
                        ],
                        [
                            "eid624",
                            "top",
                            1244,
                            141,
                            "linear",
                            "${maisaugepopille7}",
                            '315px',
                            '315px'
                        ],
                        [
                            "eid671",
                            "left",
                            0,
                            385,
                            "linear",
                            "${maisaugepopille3}",
                            '1118px',
                            '1117px'
                        ],
                        [
                            "eid593",
                            "left",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille3}",
                            '1117px',
                            '1115px'
                        ],
                        [
                            "eid602",
                            "top",
                            400,
                            615,
                            "linear",
                            "${maisaugepopille5}",
                            '611px',
                            '599px'
                        ],
                        [
                            "eid628",
                            "top",
                            1015,
                            230,
                            "linear",
                            "${maisaugepopille5}",
                            '599px',
                            '599px'
                        ],
                        [
                            "eid681",
                            "left",
                            0,
                            0,
                            "linear",
                            "${maismenschen}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid666",
                            "left",
                            0,
                            385,
                            "linear",
                            "${maisaugepopille}",
                            '712px',
                            '711px'
                        ],
                        [
                            "eid585",
                            "left",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille}",
                            '711px',
                            '689px'
                        ],
                        [
                            "eid594",
                            "top",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille3}",
                            '416px',
                            '407px'
                        ],
                        [
                            "eid589",
                            "top",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille2}",
                            '628px',
                            '648px'
                        ],
                        [
                            "eid682",
                            "left",
                            0,
                            0,
                            "linear",
                            "${maisaugengrau}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid673",
                            "left",
                            0,
                            1054,
                            "linear",
                            "${maisaugepopille8}",
                            '512px',
                            '511px'
                        ],
                        [
                            "eid619",
                            "left",
                            1054,
                            190,
                            "linear",
                            "${maisaugepopille8}",
                            '511px',
                            '516px'
                        ],
                        [
                            "eid621",
                            "left",
                            1244,
                            141,
                            "linear",
                            "${maisaugepopille8}",
                            '516px',
                            '524px'
                        ],
                        [
                            "eid598",
                            "top",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille4}",
                            '344px',
                            '325px'
                        ],
                        [
                            "eid674",
                            "left",
                            0,
                            400,
                            "linear",
                            "${maisaugepopille5}",
                            '1505px',
                            '1504px'
                        ],
                        [
                            "eid601",
                            "left",
                            400,
                            615,
                            "linear",
                            "${maisaugepopille5}",
                            '1504px',
                            '1494px'
                        ],
                        [
                            "eid627",
                            "left",
                            1015,
                            230,
                            "linear",
                            "${maisaugepopille5}",
                            '1494px',
                            '1500px'
                        ],
                        [
                            "eid582",
                            "top",
                            0,
                            0,
                            "linear",
                            "${maisaugepopille8}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid620",
                            "top",
                            1054,
                            190,
                            "linear",
                            "${maisaugepopille8}",
                            '259px',
                            '268px'
                        ],
                        [
                            "eid622",
                            "top",
                            1244,
                            141,
                            "linear",
                            "${maisaugepopille8}",
                            '268px',
                            '270px'
                        ],
                        [
                            "eid586",
                            "top",
                            385,
                            615,
                            "linear",
                            "${maisaugepopille}",
                            '644px',
                            '656px'
                        ],
                        [
                            "eid629",
                            "width",
                            1015,
                            0,
                            "linear",
                            "${maisaugepopille5}",
                            '65px',
                            '65px'
                        ]
                    ]
                }
            },
            "sym_maisfeld": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'MaisBewegungAusblick',
                            type: 'image',
                            rect: [0, 0, 327, 173, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/MaisBewegungAusblick.png', '0px', '0px']
                        },
                        {
                            id: 'MaisBewegungAusMenschen',
                            type: 'image',
                            rect: [0, 0, 327, 173, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/MaisBewegungAusMenschen.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 480, 254]
                        }
                    }
                },
                timeline: {
                    duration: 9341,
                    autoPlay: true,
                    labels: {
                        "mais_pre": 0,
                        "mais_zoom": 3000,
                        "mais": 6750
                    },
                    data: [
                        [
                            "eid756",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid758",
                            "top",
                            406,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid760",
                            "top",
                            777,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid762",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid764",
                            "top",
                            1622,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid766",
                            "top",
                            1906,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid747",
                            "top",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '-191px'
                        ],
                        [
                            "eid774",
                            "top",
                            6750,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-191px',
                            '-188px'
                        ],
                        [
                            "eid775",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-188px',
                            '-190px'
                        ],
                        [
                            "eid776",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-190px',
                            '-193px'
                        ],
                        [
                            "eid777",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-193px',
                            '-191px'
                        ],
                        [
                            "eid778",
                            "top",
                            7750,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-191px',
                            '-188px'
                        ],
                        [
                            "eid779",
                            "top",
                            8441,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-188px',
                            '-191px'
                        ],
                        [
                            "eid780",
                            "top",
                            8921,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-191px',
                            '-193px'
                        ],
                        [
                            "eid752",
                            "height",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusblick}",
                            '173px',
                            '311px'
                        ],
                        [
                            "eid750",
                            "width",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '327px',
                            '588px'
                        ],
                        [
                            "eid754",
                            "width",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusblick}",
                            '327px',
                            '588px'
                        ],
                        [
                            "eid748",
                            "height",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '173px',
                            '311px'
                        ],
                        [
                            "eid755",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid757",
                            "left",
                            406,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid759",
                            "left",
                            777,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid761",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid763",
                            "left",
                            1622,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid765",
                            "left",
                            1906,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid749",
                            "left",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '0px',
                            '-6px'
                        ],
                        [
                            "eid767",
                            "left",
                            6750,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-6px',
                            '-4px'
                        ],
                        [
                            "eid768",
                            "left",
                            7000,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-4px',
                            '-3px'
                        ],
                        [
                            "eid769",
                            "left",
                            7250,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-3px',
                            '-4px'
                        ],
                        [
                            "eid770",
                            "left",
                            7500,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid771",
                            "left",
                            7750,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid772",
                            "left",
                            8441,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid773",
                            "left",
                            8921,
                            0,
                            "linear",
                            "${MaisBewegungAusMenschen}",
                            '-4px',
                            '-2px'
                        ],
                        [
                            "eid753",
                            "left",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusblick}",
                            '0px',
                            '-6px'
                        ],
                        [
                            "eid751",
                            "top",
                            3000,
                            3000,
                            "linear",
                            "${MaisBewegungAusblick}",
                            '0px',
                            '-191px'
                        ]
                    ]
                }
            },
            "sym_menschen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-1236, -248, '316px', '594px', 'auto', 'auto'],
                            id: 'bild',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bild.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '398px', '792px', 'auto', 'auto'],
                            id: 'k1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k1.png', '0px', '0px']
                        },
                        {
                            rect: [420, -242, '131px', '300px', 'auto', 'auto'],
                            id: 'g3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g3.png', '0px', '0px']
                        },
                        {
                            rect: [-919, 31, '337px', '566px', 'auto', 'auto'],
                            id: 'k4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k4.png', '0px', '0px']
                        },
                        {
                            rect: [-905, -156, '211px', '243px', 'auto', 'auto'],
                            id: 'g4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g4.png', '0px', '0px']
                        },
                        {
                            rect: [-678, 338, '340px', '432px', 'auto', 'auto'],
                            id: 'k5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k5.png', '0px', '0px']
                        },
                        {
                            rect: [-586, 209, '267px', '218px', 'auto', 'auto'],
                            id: 'gseitlich2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gseitlich2.png', '0px', '0px']
                        },
                        {
                            rect: [-585, 207, '248px', '208px', 'auto', 'auto'],
                            id: 'gseitlich3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gseitlich3.png', '0px', '0px']
                        },
                        {
                            rect: [-758, 274, '213px', '298px', 'auto', 'auto'],
                            id: 'pflanze5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pflanze5.png', '0px', '0px']
                        },
                        {
                            rect: [-871, 587, '663px', '375px', 'auto', 'auto'],
                            id: 'k6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k6.png', '0px', '0px']
                        },
                        {
                            rect: [-834, 436, '233px', '251px', 'auto', 'auto'],
                            id: 'g6',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                        },
                        {
                            rect: [-1558, 71, '404px', '627px', 'auto', 'auto'],
                            id: 'k9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k9.png', '0px', '0px']
                        },
                        {
                            rect: [-1387, -126, '233px', '251px', 'auto', 'auto'],
                            id: 'g64',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                        },
                        {
                            rect: [-1405, 446, '366px', '438px', 'auto', 'auto'],
                            id: 'k8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k8.png', '0px', '0px']
                        },
                        {
                            rect: [-1246, 274, '233px', '251px', 'auto', 'auto'],
                            id: 'g63',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                        },
                        {
                            rect: [-1239, 371, '179px', '135px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['16', 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            id: 'lachenCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lachen.png', '0px', '0px']
                        },
                        {
                            rect: [-1154, 412, '381px', '623px', 'auto', 'auto'],
                            id: 'k7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k7.png', '0px', '0px']
                        },
                        {
                            rect: [-973, 396, '189px', '279px', 'auto', 'auto'],
                            id: 'pflanze7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pflanze7.png', '0px', '0px']
                        },
                        {
                            rect: ['-1013', '266', '233px', '251px', 'auto', 'auto'],
                            id: 'g62',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g6.png', '0px', '0px']
                        },
                        {
                            rect: [449, 377, '190px', '302px', 'auto', 'auto'],
                            id: 'g2',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g2.png', '0px', '0px']
                        },
                        {
                            rect: [380, -120, '388px', '516px', 'auto', 'auto'],
                            id: 'k3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k3.png', '0px', '0px']
                        },
                        {
                            rect: [266, 542, '370px', '383px', 'auto', 'auto'],
                            id: 'k2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/k2.png', '0px', '0px']
                        },
                        {
                            rect: [114, -156, '232px', '256px', 'auto', 'auto'],
                            id: 'g1',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/g1.png', '0px', '0px']
                        },
                        {
                            rect: [128, -55, '179px', '135px', 'auto', 'auto'],
                            id: 'lachen',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lachen.png', '0px', '0px']
                        },
                        {
                            rect: [-850, 349, '31px', '26px', 'auto', 'auto'],
                            id: 'r7auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-936, 328, '31px', '26px', 'auto', 'auto'],
                            id: 'l7auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-1081, 354, '31px', '26px', 'auto', 'auto'],
                            id: 'r8auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-1169, 336, '31px', '26px', 'auto', 'auto'],
                            id: 'l8auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-1226, -44, '31px', '26px', 'auto', 'auto'],
                            id: 'r9auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-1310, -63, '31px', '26px', 'auto', 'auto'],
                            id: 'l9auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-672, 518, '31px', '26px', 'auto', 'auto'],
                            id: 'r6auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-758, 499, '31px', '26px', 'auto', 'auto'],
                            id: 'l6auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-423, 296, 19, 16, 'auto', 'auto'],
                            id: 'l5auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-834, -82, '31px', '26px', 'auto', 'auto'],
                            id: 'l4auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [-748, -92, '31px', '26px', 'auto', 'auto'],
                            id: 'r4auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [457, -156, 19, 16, 'auto', 'auto'],
                            id: 'r3auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [541, 474, 19, 16, 'auto', 'auto'],
                            id: 'l2auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [221, -76, '31px', '26px', 'auto', 'auto'],
                            id: 'r1auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            rect: [144, -87, '31px', '26px', 'auto', 'auto'],
                            id: 'l1auge',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'huhliegenkorper2',
                            rect: [144, 188, '140px', '122px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2295', '1.2295', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                        },
                        {
                            rect: [174, 204, 50, 68, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_huhliegenkopf',
                            symbolName: 'sym_huhliegenkopf',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.2295', '1.2295', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 398, 792]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "loopylooo": 0
                    },
                    data: [
                        [
                            "eid1268",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${lachenCopy}",
                            '-1',
                            '-1'
                        ],
                        [
                            "eid800",
                            "left",
                            0,
                            1499,
                            "linear",
                            "${r1auge}",
                            '221px',
                            '231px'
                        ],
                        [
                            "eid996",
                            "left",
                            1747,
                            2409,
                            "linear",
                            "${r1auge}",
                            '231px',
                            '221px'
                        ],
                        [
                            "eid1147",
                            "rotateZ",
                            1845,
                            0,
                            "linear",
                            "${g2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1169",
                            "rotateZ",
                            2048,
                            0,
                            "linear",
                            "${g2}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1166",
                            "rotateZ",
                            2400,
                            0,
                            "linear",
                            "${g2}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid857",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${r9auge}",
                            '-44px',
                            '-52px'
                        ],
                        [
                            "eid1007",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${r9auge}",
                            '-52px',
                            '-44px'
                        ],
                        [
                            "eid882",
                            "left",
                            0,
                            1499,
                            "linear",
                            "${r7auge}",
                            '-850px',
                            '-853px'
                        ],
                        [
                            "eid1012",
                            "left",
                            1747,
                            2409,
                            "linear",
                            "${r7auge}",
                            '-853px',
                            '-850px'
                        ],
                        [
                            "eid833",
                            "top",
                            147,
                            1499,
                            "linear",
                            "${l5auge}",
                            '296px',
                            '302px'
                        ],
                        [
                            "eid1002",
                            "top",
                            1984,
                            2409,
                            "linear",
                            "${l5auge}",
                            '302px',
                            '296px'
                        ],
                        [
                            "eid834",
                            "left",
                            147,
                            1499,
                            "linear",
                            "${l5auge}",
                            '-423px',
                            '-422px'
                        ],
                        [
                            "eid1003",
                            "left",
                            1984,
                            2409,
                            "linear",
                            "${l5auge}",
                            '-422px',
                            '-423px'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gseitlich2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1260",
                            "opacity",
                            3933,
                            0,
                            "linear",
                            "${gseitlich2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1265",
                            "opacity",
                            4555,
                            0,
                            "linear",
                            "${gseitlich2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid915",
                            "top",
                            0,
                            562,
                            "linear",
                            "${k3}",
                            '-120px',
                            '-122px'
                        ],
                        [
                            "eid918",
                            "top",
                            562,
                            628,
                            "linear",
                            "${k3}",
                            '-122px',
                            '-124px'
                        ],
                        [
                            "eid921",
                            "top",
                            1190,
                            557,
                            "linear",
                            "${k3}",
                            '-124px',
                            '-122px'
                        ],
                        [
                            "eid961",
                            "top",
                            1747,
                            562,
                            "linear",
                            "${k3}",
                            '-120px',
                            '-122px'
                        ],
                        [
                            "eid962",
                            "top",
                            2310,
                            628,
                            "linear",
                            "${k3}",
                            '-122px',
                            '-124px'
                        ],
                        [
                            "eid963",
                            "top",
                            2938,
                            557,
                            "linear",
                            "${k3}",
                            '-124px',
                            '-122px'
                        ],
                        [
                            "eid839",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${l6auge}",
                            '499px',
                            '491px'
                        ],
                        [
                            "eid1004",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${l6auge}",
                            '491px',
                            '499px'
                        ],
                        [
                            "eid1143",
                            "rotateZ",
                            635,
                            0,
                            "linear",
                            "${g63}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1175",
                            "rotateZ",
                            1021,
                            0,
                            "linear",
                            "${g63}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1172",
                            "rotateZ",
                            1499,
                            0,
                            "linear",
                            "${g63}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1269",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${lachenCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1266",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${lachenCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1267",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${lachenCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid852",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${l9auge}",
                            '-63px',
                            '-69px'
                        ],
                        [
                            "eid1006",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${l9auge}",
                            '-69px',
                            '-63px'
                        ],
                        [
                            "eid813",
                            "left",
                            0,
                            1499,
                            "linear",
                            "${r3auge}",
                            '457px',
                            '466px'
                        ],
                        [
                            "eid997",
                            "left",
                            1756,
                            2409,
                            "linear",
                            "${r3auge}",
                            '466px',
                            '457px'
                        ],
                        [
                            "eid861",
                            "left",
                            0,
                            0,
                            "linear",
                            "${l8auge}",
                            '-1169px',
                            '-1169px'
                        ],
                        [
                            "eid948",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${l8auge}",
                            '-1169px',
                            '-1169px'
                        ],
                        [
                            "eid949",
                            "left",
                            4556,
                            0,
                            "linear",
                            "${l8auge}",
                            '-1169px',
                            '-1169px'
                        ],
                        [
                            "eid1145",
                            "rotateZ",
                            3250,
                            0,
                            "linear",
                            "${g64}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1181",
                            "rotateZ",
                            3636,
                            0,
                            "linear",
                            "${g64}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1178",
                            "rotateZ",
                            3933,
                            0,
                            "linear",
                            "${g64}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1157",
                            "top",
                            1845,
                            0,
                            "linear",
                            "${g2}",
                            '377px',
                            '377px'
                        ],
                        [
                            "eid1168",
                            "top",
                            2048,
                            0,
                            "linear",
                            "${g2}",
                            '377px',
                            '379px'
                        ],
                        [
                            "eid1165",
                            "top",
                            2400,
                            0,
                            "linear",
                            "${g2}",
                            '379px',
                            '377px'
                        ],
                        [
                            "eid881",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${r7auge}",
                            '349px',
                            '342px'
                        ],
                        [
                            "eid1011",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${r7auge}",
                            '342px',
                            '349px'
                        ],
                        [
                            "eid1146",
                            "rotateZ",
                            392,
                            0,
                            "linear",
                            "${g1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1160",
                            "rotateZ",
                            1000,
                            0,
                            "linear",
                            "${g1}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid1163",
                            "rotateZ",
                            1363,
                            0,
                            "linear",
                            "${g1}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${gseitlich3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1259",
                            "opacity",
                            3933,
                            0,
                            "linear",
                            "${gseitlich3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1264",
                            "opacity",
                            4555,
                            0,
                            "linear",
                            "${gseitlich3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid810",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r3auge}",
                            '-156px',
                            '-156px'
                        ],
                        [
                            "eid812",
                            "top",
                            1636,
                            0,
                            "linear",
                            "${r3auge}",
                            '-156px',
                            '-156px'
                        ],
                        [
                            "eid929",
                            "top",
                            1747,
                            0,
                            "linear",
                            "${r3auge}",
                            '-156px',
                            '-156px'
                        ],
                        [
                            "eid930",
                            "top",
                            4376,
                            0,
                            "linear",
                            "${r3auge}",
                            '-156px',
                            '-156px'
                        ],
                        [
                            "eid1151",
                            "top",
                            1984,
                            0,
                            "linear",
                            "${g6}",
                            '436px',
                            '436px'
                        ],
                        [
                            "eid1186",
                            "top",
                            2339,
                            0,
                            "linear",
                            "${g6}",
                            '436px',
                            '438px'
                        ],
                        [
                            "eid1183",
                            "top",
                            3083,
                            0,
                            "linear",
                            "${g6}",
                            '438px',
                            '436px'
                        ],
                        [
                            "eid1149",
                            "top",
                            635,
                            0,
                            "linear",
                            "${g63}",
                            '274px',
                            '274px'
                        ],
                        [
                            "eid1174",
                            "top",
                            1021,
                            0,
                            "linear",
                            "${g63}",
                            '274px',
                            '272px'
                        ],
                        [
                            "eid1171",
                            "top",
                            1499,
                            0,
                            "linear",
                            "${g63}",
                            '272px',
                            '274px'
                        ],
                        [
                            "eid1144",
                            "rotateZ",
                            1984,
                            0,
                            "linear",
                            "${g6}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1187",
                            "rotateZ",
                            2339,
                            0,
                            "linear",
                            "${g6}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid1184",
                            "rotateZ",
                            3083,
                            0,
                            "linear",
                            "${g6}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid792",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${l1auge}",
                            '-87px',
                            '-86px'
                        ],
                        [
                            "eid993",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${l1auge}",
                            '-86px',
                            '-87px'
                        ],
                        [
                            "eid848",
                            "left",
                            0,
                            0,
                            "linear",
                            "${l9auge}",
                            '-1310px',
                            '-1310px'
                        ],
                        [
                            "eid850",
                            "left",
                            1499,
                            0,
                            "linear",
                            "${l9auge}",
                            '-1310px',
                            '-1310px'
                        ],
                        [
                            "eid942",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${l9auge}",
                            '-1310px',
                            '-1310px'
                        ],
                        [
                            "eid943",
                            "left",
                            4157,
                            0,
                            "linear",
                            "${l9auge}",
                            '-1310px',
                            '-1310px'
                        ],
                        [
                            "eid865",
                            "top",
                            248,
                            1499,
                            "linear",
                            "${l8auge}",
                            '336px',
                            '331px'
                        ],
                        [
                            "eid1008",
                            "top",
                            2146,
                            2409,
                            "linear",
                            "${l8auge}",
                            '331px',
                            '336px'
                        ],
                        [
                            "eid876",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${l7auge}",
                            '328px',
                            '323px'
                        ],
                        [
                            "eid1010",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${l7auge}",
                            '323px',
                            '328px'
                        ],
                        [
                            "eid1153",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${g64}",
                            '-126px',
                            '-126px'
                        ],
                        [
                            "eid1180",
                            "top",
                            3636,
                            0,
                            "linear",
                            "${g64}",
                            '-126px',
                            '-125px'
                        ],
                        [
                            "eid1177",
                            "top",
                            3933,
                            0,
                            "linear",
                            "${g64}",
                            '-125px',
                            '-126px'
                        ],
                        [
                            "eid835",
                            "left",
                            0,
                            0,
                            "linear",
                            "${l6auge}",
                            '-758px',
                            '-758px'
                        ],
                        [
                            "eid838",
                            "left",
                            1499,
                            0,
                            "linear",
                            "${l6auge}",
                            '-758px',
                            '-758px'
                        ],
                        [
                            "eid937",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${l6auge}",
                            '-758px',
                            '-758px'
                        ],
                        [
                            "eid938",
                            "left",
                            4157,
                            0,
                            "linear",
                            "${l6auge}",
                            '-758px',
                            '-758px'
                        ],
                        [
                            "eid1148",
                            "left",
                            635,
                            0,
                            "linear",
                            "${g63}",
                            '-1246px',
                            '-1246px'
                        ],
                        [
                            "eid1173",
                            "left",
                            1021,
                            0,
                            "linear",
                            "${g63}",
                            '-1246px',
                            '-1244px'
                        ],
                        [
                            "eid1170",
                            "left",
                            1499,
                            0,
                            "linear",
                            "${g63}",
                            '-1244px',
                            '-1246px'
                        ],
                        [
                            "eid1075",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${lachen}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1077",
                            "opacity",
                            1363,
                            0,
                            "linear",
                            "${lachen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1270",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${lachenCopy}",
                            '16deg',
                            '16deg'
                        ],
                        [
                            "eid1154",
                            "left",
                            392,
                            0,
                            "linear",
                            "${g1}",
                            '114px',
                            '114px'
                        ],
                        [
                            "eid1158",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${g1}",
                            '114px',
                            '116px'
                        ],
                        [
                            "eid1161",
                            "left",
                            1363,
                            0,
                            "linear",
                            "${g1}",
                            '116px',
                            '114px'
                        ],
                        [
                            "eid818",
                            "top",
                            147,
                            1489,
                            "linear",
                            "${r4auge}",
                            '-92px',
                            '-96px'
                        ],
                        [
                            "eid998",
                            "top",
                            1992,
                            2392,
                            "linear",
                            "${r4auge}",
                            '-96px',
                            '-92px'
                        ],
                        [
                            "eid859",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r9auge}",
                            '-1226px',
                            '-1226px'
                        ],
                        [
                            "eid860",
                            "left",
                            1499,
                            0,
                            "linear",
                            "${r9auge}",
                            '-1226px',
                            '-1226px'
                        ],
                        [
                            "eid945",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${r9auge}",
                            '-1226px',
                            '-1226px'
                        ],
                        [
                            "eid946",
                            "left",
                            4157,
                            0,
                            "linear",
                            "${r9auge}",
                            '-1226px',
                            '-1226px'
                        ],
                        [
                            "eid870",
                            "top",
                            248,
                            1499,
                            "linear",
                            "${r8auge}",
                            '354px',
                            '351px'
                        ],
                        [
                            "eid1009",
                            "top",
                            2146,
                            2409,
                            "linear",
                            "${r8auge}",
                            '351px',
                            '354px'
                        ],
                        [
                            "eid807",
                            "left",
                            248,
                            1499,
                            "linear",
                            "${l2auge}",
                            '541px',
                            '548px'
                        ],
                        [
                            "eid926",
                            "left",
                            2155,
                            2409,
                            "linear",
                            "${l2auge}",
                            '541px',
                            '548px'
                        ],
                        [
                            "eid872",
                            "left",
                            0,
                            0,
                            "linear",
                            "${l7auge}",
                            '-936px',
                            '-936px'
                        ],
                        [
                            "eid874",
                            "left",
                            1499,
                            0,
                            "linear",
                            "${l7auge}",
                            '-936px',
                            '-936px'
                        ],
                        [
                            "eid953",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${l7auge}",
                            '-936px',
                            '-936px'
                        ],
                        [
                            "eid954",
                            "left",
                            4157,
                            0,
                            "linear",
                            "${l7auge}",
                            '-936px',
                            '-936px'
                        ],
                        [
                            "eid871",
                            "left",
                            248,
                            1499,
                            "linear",
                            "${r8auge}",
                            '-1081px',
                            '-1082px'
                        ],
                        [
                            "eid1013",
                            "left",
                            2146,
                            2409,
                            "linear",
                            "${r8auge}",
                            '-1082px',
                            '-1081px'
                        ],
                        [
                            "eid846",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${r6auge}",
                            '518px',
                            '512px'
                        ],
                        [
                            "eid941",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${r6auge}",
                            '518px',
                            '512px'
                        ],
                        [
                            "eid911",
                            "left",
                            0,
                            0,
                            "linear",
                            "${k3}",
                            '380px',
                            '380px'
                        ],
                        [
                            "eid916",
                            "left",
                            562,
                            628,
                            "linear",
                            "${k3}",
                            '380px',
                            '385px'
                        ],
                        [
                            "eid958",
                            "left",
                            1747,
                            0,
                            "linear",
                            "${k3}",
                            '385px',
                            '380px'
                        ],
                        [
                            "eid959",
                            "left",
                            2310,
                            628,
                            "linear",
                            "${k3}",
                            '380px',
                            '385px'
                        ],
                        [
                            "eid960",
                            "left",
                            3495,
                            0,
                            "linear",
                            "${k3}",
                            '385px',
                            '385px'
                        ],
                        [
                            "eid1156",
                            "left",
                            1845,
                            0,
                            "linear",
                            "${g2}",
                            '449px',
                            '449px'
                        ],
                        [
                            "eid1167",
                            "left",
                            2048,
                            0,
                            "linear",
                            "${g2}",
                            '449px',
                            '448px'
                        ],
                        [
                            "eid1164",
                            "left",
                            2400,
                            0,
                            "linear",
                            "${g2}",
                            '448px',
                            '449px'
                        ],
                        [
                            "eid804",
                            "top",
                            0,
                            1499,
                            "linear",
                            "${r1auge}",
                            '-76px',
                            '-77px'
                        ],
                        [
                            "eid995",
                            "top",
                            1747,
                            2409,
                            "linear",
                            "${r1auge}",
                            '-77px',
                            '-76px'
                        ],
                        [
                            "eid1150",
                            "left",
                            1984,
                            0,
                            "linear",
                            "${g6}",
                            '-834px',
                            '-834px'
                        ],
                        [
                            "eid1185",
                            "left",
                            2339,
                            0,
                            "linear",
                            "${g6}",
                            '-834px',
                            '-836px'
                        ],
                        [
                            "eid1182",
                            "left",
                            3083,
                            0,
                            "linear",
                            "${g6}",
                            '-836px',
                            '-834px'
                        ],
                        [
                            "eid819",
                            "left",
                            147,
                            1489,
                            "linear",
                            "${r4auge}",
                            '-748px',
                            '-753px'
                        ],
                        [
                            "eid999",
                            "left",
                            1992,
                            2392,
                            "linear",
                            "${r4auge}",
                            '-753px',
                            '-748px'
                        ],
                        [
                            "eid791",
                            "left",
                            0,
                            1499,
                            "linear",
                            "${l1auge}",
                            '144px',
                            '150px'
                        ],
                        [
                            "eid994",
                            "left",
                            1747,
                            2409,
                            "linear",
                            "${l1auge}",
                            '150px',
                            '144px'
                        ],
                        [
                            "eid1155",
                            "top",
                            392,
                            0,
                            "linear",
                            "${g1}",
                            '-156px',
                            '-156px'
                        ],
                        [
                            "eid1159",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${g1}",
                            '-156px',
                            '-158px'
                        ],
                        [
                            "eid1162",
                            "top",
                            1363,
                            0,
                            "linear",
                            "${g1}",
                            '-158px',
                            '-160px'
                        ],
                        [
                            "eid1152",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${g64}",
                            '-1387px',
                            '-1387px'
                        ],
                        [
                            "eid1179",
                            "left",
                            3636,
                            0,
                            "linear",
                            "${g64}",
                            '-1387px',
                            '-1388px'
                        ],
                        [
                            "eid1176",
                            "left",
                            3933,
                            0,
                            "linear",
                            "${g64}",
                            '-1388px',
                            '-1387px'
                        ],
                        [
                            "eid847",
                            "left",
                            0,
                            1499,
                            "linear",
                            "${r6auge}",
                            '-672px',
                            '-671px'
                        ],
                        [
                            "eid1014",
                            "left",
                            1747,
                            2409,
                            "linear",
                            "${r6auge}",
                            '-672px',
                            '-671px'
                        ],
                        [
                            "eid824",
                            "top",
                            147,
                            1499,
                            "linear",
                            "${l4auge}",
                            '-82px',
                            '-86px'
                        ],
                        [
                            "eid1000",
                            "top",
                            1992,
                            2409,
                            "linear",
                            "${l4auge}",
                            '-86px',
                            '-82px'
                        ],
                        [
                            "eid828",
                            "left",
                            147,
                            1499,
                            "linear",
                            "${l4auge}",
                            '-834px',
                            '-840px'
                        ],
                        [
                            "eid1001",
                            "left",
                            1992,
                            2409,
                            "linear",
                            "${l4auge}",
                            '-840px',
                            '-834px'
                        ],
                        [
                            "eid808",
                            "top",
                            1499,
                            0,
                            "linear",
                            "${l2auge}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid927",
                            "top",
                            4165,
                            0,
                            "linear",
                            "${l2auge}",
                            '474px',
                            '474px'
                        ]
                    ]
                }
            },
            "sym_hintergrund": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 2, 1088, 816, 'auto', 'auto'],
                            id: 'menschenuberal2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menschenuberal.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1088, 816]
                        }
                    }
                },
                timeline: {
                    duration: 16500,
                    autoPlay: true,
                    labels: {
                        "loopausblick": 0
                    },
                    data: [
                        [
                            "eid1245",
                            "top",
                            0,
                            2623,
                            "linear",
                            "${menschenuberal2}",
                            '2px',
                            '4px'
                        ],
                        [
                            "eid1246",
                            "top",
                            5000,
                            3250,
                            "linear",
                            "${menschenuberal2}",
                            '4px',
                            '2px'
                        ],
                        [
                            "eid1247",
                            "top",
                            8250,
                            2623,
                            "linear",
                            "${menschenuberal2}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid1248",
                            "top",
                            13250,
                            3250,
                            "linear",
                            "${menschenuberal2}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid1240",
                            "left",
                            0,
                            0,
                            "linear",
                            "${menschenuberal2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1241",
                            "left",
                            2623,
                            2377,
                            "linear",
                            "${menschenuberal2}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid1242",
                            "left",
                            8250,
                            0,
                            "linear",
                            "${menschenuberal2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid1243",
                            "left",
                            10873,
                            2377,
                            "linear",
                            "${menschenuberal2}",
                            '-1px',
                            '-3px'
                        ],
                        [
                            "eid1244",
                            "left",
                            16500,
                            0,
                            "linear",
                            "${menschenuberal2}",
                            '-3px',
                            '1px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part7_edgeActions.js");
})("PART5");
