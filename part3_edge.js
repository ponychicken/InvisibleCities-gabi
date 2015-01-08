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
                            symbolName: 'sym_ausblick_1',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1311', '548', '361', '153', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'sym_vorzim',
                            symbolName: 'sym_vorzim',
                            type: 'rect',
                            rect: ['0', '-9', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['904px', '312px', '620px', '461px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                            rect: ['844', '319', '680', '449', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'wegzumhaus',
                            symbolName: 'wegzumhaus',
                            type: 'rect',
                            rect: ['-25', '-9', '8217', '1564', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'strich1',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"strich1.jpg",'0px','0px']
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
                    duration: 36000,
                    autoPlay: false,
                    data: [

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
                            type: 'image',
                            id: 'vorhangani',
                            rect: [0, 0, '5112px', '538px', 'auto', 'auto'],
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
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.66', '0.66', 1], ['50%', '50%']],
                            id: 'haushinterswrgb',
                            type: 'image',
                            rect: ['-580', '-403', '3414px', '2369px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haushinterswrgb.jpg', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.66', '0.66', 1], ['50%', '50%']],
                            id: 'hauswegsw',
                            type: 'image',
                            rect: [142, 216, '1737px', '916px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hauswegsw.png', '0px', '0px']
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
                            "eid50",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${hauswegsw}",
                            '0.66',
                            '1'
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
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            id: 'schwarz',
                            opacity: '0.850000',
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
                            type: 'image',
                            id: 'zimmer',
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'sym_zimmer2',
                            symbolName: 'sym_zimmer',
                            rect: [0, 0, 2048, 1536, 'auto', 'auto']
                        },
                        {
                            rect: [767, 263, 850, 538, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_vorhang',
                            symbolName: 'sym_vorhang',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'zimpflanze2',
                            rect: [1673, 242, '336px', '393px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zimpflanze2.png', '0px', '0px']
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
                            '1',
                            '3.76926'
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
                            "eid536",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze2}",
                            '242px',
                            '155px'
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
                        ],
                        [
                            "eid537",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze2}",
                            '1',
                            '3.76926'
                        ],
                        [
                            "eid538",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze2}",
                            '1673px',
                            '3080px'
                        ],
                        [
                            "eid539",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze2}",
                            '1',
                            '3.76926'
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
                            "eid188",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${sym_zimmer2}",
                            '0px',
                            '791px'
                        ]
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
                            type: 'image',
                            id: 'huhliegenkopf2',
                            rect: [-5, 0, '242px', '68px', 'auto', 'auto'],
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
                    autoPlay: false,
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
                            type: 'image',
                            id: 'huhpickenganzani',
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
                            type: 'image',
                            id: 'huhpickenkopf',
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
                            "eid340",
                            "top",
                            0,
                            0,
                            "linear",
                            "${huhpickenkopf}",
                            '0px',
                            '0px'
                        ],
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
                        ]
                    ]
                }
            },
            "sym_ausblick_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['133', '-229', '2048px', '1536px', 'auto', 'auto'],
                            id: 'wasserstruktur_KopieCopy',
                            transform: [[], [], [], ['0.53', '0.53']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wasserstruktur.png', '0px', '0px']
                        },
                        {
                            rect: ['133', '-94', '2048px', '1536px', 'auto', 'auto'],
                            id: 'ausblickwasserfrei',
                            transform: [[], [], [], ['0.53', '0.53']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ausblickwasserfrei.png', '0px', '0px']
                        },
                        {
                            rect: ['133', '-94', '2048px', '1536px', 'auto', 'auto'],
                            id: 'aussichtvorsw2',
                            transform: [[], [], [], ['0.53', '0.53']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aussichtvorsw.png', '0px', '0px']
                        },
                        {
                            id: 'huhliegenkorper2',
                            type: 'image',
                            rect: ['1116', '1198', '140px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sym_huhliegenkopf',
                            symbolName: 'sym_huhliegenkopf',
                            rect: ['1146', '1214', '50', '68', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sym_huhpickenganzani',
                            symbolName: 'sym_huhpickenganzani',
                            rect: ['1465px', '1242px', '170', '155', 'auto', 'auto']
                        },
                        {
                            id: 'huhpickenkorper2',
                            type: 'image',
                            rect: ['1278px', '1291px', '163px', '146px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhpickenkorper.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sym_huhpickenkopfkoroer',
                            symbolName: 'sym_huhpickenkopfkoroer',
                            rect: ['1278px', '1291px', '65', '146', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_blattbaum',
                            symbolName: 'sym_blattbaum',
                            transform: [[], [], [], ['0.53', '0.53']],
                            rect: ['694', '271', '678', '570', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_baumgesicht',
                            symbolName: 'sym_baumgesicht',
                            transform: [[], [], [], ['0.53', '0.53']],
                            rect: ['753', '390', '188', '192', 'auto', 'auto']
                        },
                        {
                            rect: ['1439', '479', '235px', '236px', 'auto', 'auto'],
                            id: 'bruckesitzen',
                            transform: [[], [], [], ['0.53', '0.53']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bruckesitzen.png', '0px', '0px']
                        },
                        {
                            rect: ['1229', '445', '116px', '135px', 'auto', 'auto'],
                            id: 'sitzenwasser',
                            transform: [[], [], [], ['0.53', '0.53']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sitzenwasser.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sym_sprung',
                            symbolName: 'sym_sprung',
                            transform: [[], [], [], ['0.4', '0.4']],
                            rect: ['1327', '445', '250', '250', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '2048', '1536']
                        }
                    }
                },
                timeline: {
                    duration: 36000,
                    autoPlay: true,
                    labels: {
                        "wasser": 0,
                        "ausblick_zoom": 16245,
                        "huhsontherun": 19570
                    },
                    data: [
                        [
                            "eid735",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${bruckesitzen}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid271",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${aussichtvorsw2}",
                            '133px',
                            '0px'
                        ],
                        [
                            "eid719",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${sym_blattbaum}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid511",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${ausblickwasserfrei}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid720",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${sym_blattbaum}",
                            '271px',
                            '254px'
                        ],
                        [
                            "eid711",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${sym_sprung}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid259",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${aussichtvorsw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid714",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid710",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${sym_sprung}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid713",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${sym_sprung}",
                            '445px',
                            '433px'
                        ],
                        [
                            "eid272",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${aussichtvorsw2}",
                            '-94px',
                            '0px'
                        ],
                        [
                            "eid737",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${bruckesitzen}",
                            '479px',
                            '500px'
                        ],
                        [
                            "eid742",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${sitzenwasser}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid513",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${ausblickwasserfrei}",
                            '133px',
                            '0px'
                        ],
                        [
                            "eid744",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${sitzenwasser}",
                            '445px',
                            '390px'
                        ],
                        [
                            "eid745",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${sitzenwasser}",
                            '1229px',
                            '1212px'
                        ],
                        [
                            "eid736",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${bruckesitzen}",
                            '1439px',
                            '1663px'
                        ],
                        [
                            "eid404",
                            "scaleX",
                            19570,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid402",
                            "scaleX",
                            26569,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid722",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${sym_blattbaum}",
                            '694px',
                            '452px'
                        ],
                        [
                            "eid375",
                            "rotateZ",
                            21860,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid376",
                            "rotateZ",
                            22137,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid378",
                            "rotateZ",
                            22414,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid380",
                            "rotateZ",
                            22691,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid382",
                            "rotateZ",
                            22968,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid387",
                            "rotateZ",
                            27677,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid388",
                            "rotateZ",
                            27955,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid389",
                            "rotateZ",
                            28232,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid390",
                            "rotateZ",
                            28509,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid391",
                            "rotateZ",
                            28786,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid712",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${sym_sprung}",
                            '1327px',
                            '1458px'
                        ],
                        [
                            "eid569",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${sym_baumgesicht}",
                            '753px',
                            '345px'
                        ],
                        [
                            "eid371",
                            "location",
                            21860,
                            1108,
                            "linear",
                            "${huhpickenkorper2}",
                            [[1359.5, 1364, 0, 0, 0, 0,0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55,18.22],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22,45.12],[1307.5, 1366.14, 0, 0, 0, 0,56.93]]
                        ],
                        [
                            "eid400",
                            "location",
                            27677,
                            1108,
                            "linear",
                            "${huhpickenkorper2}",
                            [[1307.5, 1366.14, 0, 0, 0, 0,0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61,11.81],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81,38.7],[1359.5, 1364, 0, 0, 0, 0,56.93]]
                        ],
                        [
                            "eid403",
                            "scaleX",
                            19570,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '1',
                            '1'
                        ],
                        [
                            "eid401",
                            "scaleX",
                            26569,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid570",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${sym_baumgesicht}",
                            '390px',
                            '317px'
                        ],
                        [
                            "eid734",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${bruckesitzen}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid510",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${ausblickwasserfrei}",
                            '-94px',
                            '0px'
                        ],
                        [
                            "eid374",
                            "rotateZ",
                            21860,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid377",
                            "rotateZ",
                            22137,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid379",
                            "rotateZ",
                            22414,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid381",
                            "rotateZ",
                            22691,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid383",
                            "rotateZ",
                            22968,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid393",
                            "rotateZ",
                            27677,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid394",
                            "rotateZ",
                            27955,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid395",
                            "rotateZ",
                            28232,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid396",
                            "rotateZ",
                            28509,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid397",
                            "rotateZ",
                            28786,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid370",
                            "location",
                            21860,
                            277,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1310.5, 1364, 0, 0, 0, 0,0],[1299.5, 1364, 0, 0, 0, 0,11]]
                        ],
                        [
                            "eid384",
                            "location",
                            22137,
                            831,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1299.5, 1364, -5.53, -0.76, 0, 0,0],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2,8.95],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76,21.41],[1258.5, 1366.14, 0, 0, 0, 0,46.11]]
                        ],
                        [
                            "eid405",
                            "location",
                            26569,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1356.51, 1366, 0, 0, 0, 0,0],[1356.51, 1366, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid398",
                            "location",
                            27677,
                            831,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1352.91, 1367.26, 0, 0, 0, 0,0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67,24.7],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4,37.16],[1393.91, 1365.12, 0, 0, 0, 0,46.11]]
                        ],
                        [
                            "eid399",
                            "location",
                            28509,
                            277,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1393.91, 1365.12, 20.19, 2.76, 0, 0,0],[1404.91, 1365.12, 0, 0, 0, 0,11.04]]
                        ],
                        [
                            "eid715",
                            "top",
                            0,
                            15750,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '-229px',
                            '-7px'
                        ],
                        [
                            "eid716",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '-277px',
                            '-47px'
                        ],
                        [
                            "eid717",
                            "top",
                            19570,
                            16430,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '-47px',
                            '-7px'
                        ],
                        [
                            "eid743",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${sitzenwasser}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid571",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${sym_baumgesicht}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid572",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${sym_baumgesicht}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid512",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${ausblickwasserfrei}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid721",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${sym_blattbaum}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid718",
                            "left",
                            0,
                            15750,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '133px',
                            '517px'
                        ],
                        [
                            "eid723",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '133px',
                            '113px'
                        ],
                        [
                            "eid724",
                            "left",
                            19570,
                            16430,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '113px',
                            '517px'
                        ],
                        [
                            "eid260",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${aussichtvorsw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid725",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_KopieCopy}",
                            '0.53',
                            '1'
                        ]
                    ]
                }
            },
            "sym_blattbaum": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [43, 142, '610px', '428px', 'auto', 'auto'],
                            id: 'baubeweg2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baubeweg2.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [0, 0, '678px', '396px', 'auto', 'auto'],
                            id: 'baubeweg1',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baubeweg1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 678, 570]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "loop_blatt": 303
                    },
                    data: [
                        [
                            "eid641",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baubeweg2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            303,
                            296,
                            "linear",
                            "${baubeweg2}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid703",
                            "opacity",
                            599,
                            299,
                            "linear",
                            "${baubeweg2}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid702",
                            "opacity",
                            898,
                            406,
                            "linear",
                            "${baubeweg2}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid705",
                            "opacity",
                            1304,
                            492,
                            "linear",
                            "${baubeweg2}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid635",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baubeweg2}",
                            '142px',
                            '142px'
                        ],
                        [
                            "eid673",
                            "top",
                            303,
                            192,
                            "linear",
                            "${baubeweg2}",
                            '142px',
                            '140px'
                        ],
                        [
                            "eid674",
                            "top",
                            495,
                            308,
                            "linear",
                            "${baubeweg2}",
                            '140px',
                            '141px'
                        ],
                        [
                            "eid675",
                            "top",
                            954,
                            247,
                            "linear",
                            "${baubeweg2}",
                            '141px',
                            '142px'
                        ],
                        [
                            "eid676",
                            "top",
                            1201,
                            247,
                            "linear",
                            "${baubeweg2}",
                            '142px',
                            '141px'
                        ],
                        [
                            "eid677",
                            "top",
                            1599,
                            308,
                            "linear",
                            "${baubeweg2}",
                            '141px',
                            '140px'
                        ],
                        [
                            "eid678",
                            "top",
                            1907,
                            192,
                            "linear",
                            "${baubeweg2}",
                            '140px',
                            '142px'
                        ],
                        [
                            "eid696",
                            "opacity",
                            303,
                            296,
                            "linear",
                            "${baubeweg1}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid697",
                            "opacity",
                            599,
                            299,
                            "linear",
                            "${baubeweg1}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid698",
                            "opacity",
                            898,
                            406,
                            "linear",
                            "${baubeweg1}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid699",
                            "opacity",
                            1304,
                            492,
                            "linear",
                            "${baubeweg1}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid634",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baubeweg2}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid681",
                            "left",
                            303,
                            357,
                            "linear",
                            "${baubeweg2}",
                            '43px',
                            '45px'
                        ],
                        [
                            "eid682",
                            "left",
                            660,
                            294,
                            "linear",
                            "${baubeweg2}",
                            '45px',
                            '43px'
                        ],
                        [
                            "eid683",
                            "left",
                            954,
                            247,
                            "linear",
                            "${baubeweg2}",
                            '43px',
                            '42px'
                        ],
                        [
                            "eid684",
                            "left",
                            1201,
                            247,
                            "linear",
                            "${baubeweg2}",
                            '42px',
                            '43px'
                        ],
                        [
                            "eid685",
                            "left",
                            1448,
                            294,
                            "linear",
                            "${baubeweg2}",
                            '43px',
                            '45px'
                        ],
                        [
                            "eid686",
                            "left",
                            1742,
                            357,
                            "linear",
                            "${baubeweg2}",
                            '45px',
                            '43px'
                        ],
                        [
                            "eid644",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${baubeweg1}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid645",
                            "rotateZ",
                            250,
                            133,
                            "linear",
                            "${baubeweg1}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid646",
                            "rotateZ",
                            500,
                            295,
                            "linear",
                            "${baubeweg1}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid647",
                            "rotateZ",
                            795,
                            103,
                            "linear",
                            "${baubeweg1}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid672",
                            "rotateZ",
                            898,
                            103,
                            "linear",
                            "${baubeweg1}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid671",
                            "rotateZ",
                            1001,
                            295,
                            "linear",
                            "${baubeweg1}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid670",
                            "rotateZ",
                            1413,
                            133,
                            "linear",
                            "${baubeweg1}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid669",
                            "rotateZ",
                            1546,
                            250,
                            "linear",
                            "${baubeweg1}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid643",
                            "top",
                            0,
                            192,
                            "linear",
                            "${baubeweg1}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid649",
                            "top",
                            192,
                            308,
                            "linear",
                            "${baubeweg1}",
                            '-2px',
                            '-1px'
                        ],
                        [
                            "eid651",
                            "top",
                            651,
                            247,
                            "linear",
                            "${baubeweg1}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid665",
                            "top",
                            898,
                            247,
                            "linear",
                            "${baubeweg1}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid664",
                            "top",
                            1296,
                            308,
                            "linear",
                            "${baubeweg1}",
                            '-1px',
                            '-2px'
                        ],
                        [
                            "eid663",
                            "top",
                            1604,
                            192,
                            "linear",
                            "${baubeweg1}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid642",
                            "left",
                            0,
                            357,
                            "linear",
                            "${baubeweg1}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid648",
                            "left",
                            357,
                            294,
                            "linear",
                            "${baubeweg1}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid650",
                            "left",
                            651,
                            247,
                            "linear",
                            "${baubeweg1}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid668",
                            "left",
                            898,
                            247,
                            "linear",
                            "${baubeweg1}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid667",
                            "left",
                            1145,
                            294,
                            "linear",
                            "${baubeweg1}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid666",
                            "left",
                            1439,
                            357,
                            "linear",
                            "${baubeweg1}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid637",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${baubeweg2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid687",
                            "rotateZ",
                            303,
                            250,
                            "linear",
                            "${baubeweg2}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid688",
                            "rotateZ",
                            553,
                            133,
                            "linear",
                            "${baubeweg2}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid689",
                            "rotateZ",
                            803,
                            295,
                            "linear",
                            "${baubeweg2}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid690",
                            "rotateZ",
                            1098,
                            103,
                            "linear",
                            "${baubeweg2}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid691",
                            "rotateZ",
                            1201,
                            103,
                            "linear",
                            "${baubeweg2}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid692",
                            "rotateZ",
                            1304,
                            295,
                            "linear",
                            "${baubeweg2}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid693",
                            "rotateZ",
                            1716,
                            133,
                            "linear",
                            "${baubeweg2}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid694",
                            "rotateZ",
                            1849,
                            250,
                            "linear",
                            "${baubeweg2}",
                            '1deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "sym_baumgesicht": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'bauhand',
                            type: 'image',
                            rect: [152, 77, '92px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bauhand.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'baugesicht',
                            rect: [0, 0, '188px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/baugesicht.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'auge',
                            rect: [46, 69, '31px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'auge2',
                            rect: [118, 58, '31px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/auge.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 188, 192]
                        }
                    }
                },
                timeline: {
                    duration: 14000,
                    autoPlay: true,
                    labels: {
                        "loop_auge": 0
                    },
                    data: [
                        [
                            "eid551",
                            "top",
                            0,
                            2100,
                            "linear",
                            "${auge}",
                            '69px',
                            '66px'
                        ],
                        [
                            "eid555",
                            "top",
                            2100,
                            2800,
                            "linear",
                            "${auge}",
                            '66px',
                            '64px'
                        ],
                        [
                            "eid558",
                            "top",
                            4900,
                            2100,
                            "linear",
                            "${auge}",
                            '64px',
                            '68px'
                        ],
                        [
                            "eid582",
                            "top",
                            7000,
                            2100,
                            "linear",
                            "${auge}",
                            '69px',
                            '66px'
                        ],
                        [
                            "eid583",
                            "top",
                            9100,
                            2800,
                            "linear",
                            "${auge}",
                            '66px',
                            '64px'
                        ],
                        [
                            "eid584",
                            "top",
                            11900,
                            2100,
                            "linear",
                            "${auge}",
                            '64px',
                            '68px'
                        ],
                        [
                            "eid605",
                            "top",
                            3000,
                            3000,
                            "linear",
                            "${bauhand}",
                            '77px',
                            '85px'
                        ],
                        [
                            "eid606",
                            "top",
                            6000,
                            3100,
                            "linear",
                            "${bauhand}",
                            '85px',
                            '77px'
                        ],
                        [
                            "eid610",
                            "rotateZ",
                            3000,
                            3000,
                            "linear",
                            "${bauhand}",
                            '0deg',
                            '-33deg'
                        ],
                        [
                            "eid611",
                            "rotateZ",
                            6000,
                            3100,
                            "linear",
                            "${bauhand}",
                            '-33deg',
                            '0deg'
                        ],
                        [
                            "eid550",
                            "top",
                            0,
                            2100,
                            "linear",
                            "${auge2}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid553",
                            "top",
                            2100,
                            2800,
                            "linear",
                            "${auge2}",
                            '55px',
                            '53px'
                        ],
                        [
                            "eid556",
                            "top",
                            4900,
                            2100,
                            "linear",
                            "${auge2}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid576",
                            "top",
                            7000,
                            2100,
                            "linear",
                            "${auge2}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid577",
                            "top",
                            9100,
                            2800,
                            "linear",
                            "${auge2}",
                            '55px',
                            '53px'
                        ],
                        [
                            "eid578",
                            "top",
                            11900,
                            2100,
                            "linear",
                            "${auge2}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid549",
                            "left",
                            0,
                            2100,
                            "linear",
                            "${auge}",
                            '46px',
                            '50px'
                        ],
                        [
                            "eid554",
                            "left",
                            2100,
                            2800,
                            "linear",
                            "${auge}",
                            '50px',
                            '48px'
                        ],
                        [
                            "eid559",
                            "left",
                            4900,
                            2100,
                            "linear",
                            "${auge}",
                            '48px',
                            '46px'
                        ],
                        [
                            "eid579",
                            "left",
                            7000,
                            2100,
                            "linear",
                            "${auge}",
                            '46px',
                            '50px'
                        ],
                        [
                            "eid580",
                            "left",
                            9100,
                            2800,
                            "linear",
                            "${auge}",
                            '50px',
                            '48px'
                        ],
                        [
                            "eid581",
                            "left",
                            11900,
                            2100,
                            "linear",
                            "${auge}",
                            '48px',
                            '46px'
                        ],
                        [
                            "eid603",
                            "left",
                            3000,
                            3000,
                            "linear",
                            "${bauhand}",
                            '152px',
                            '89px'
                        ],
                        [
                            "eid604",
                            "left",
                            6000,
                            3100,
                            "linear",
                            "${bauhand}",
                            '89px',
                            '152px'
                        ],
                        [
                            "eid548",
                            "left",
                            0,
                            2100,
                            "linear",
                            "${auge2}",
                            '118px',
                            '122px'
                        ],
                        [
                            "eid552",
                            "left",
                            2100,
                            2800,
                            "linear",
                            "${auge2}",
                            '122px',
                            '120px'
                        ],
                        [
                            "eid557",
                            "left",
                            4900,
                            2100,
                            "linear",
                            "${auge2}",
                            '120px',
                            '118px'
                        ],
                        [
                            "eid573",
                            "left",
                            7000,
                            2100,
                            "linear",
                            "${auge2}",
                            '118px',
                            '122px'
                        ],
                        [
                            "eid574",
                            "left",
                            9100,
                            2800,
                            "linear",
                            "${auge2}",
                            '122px',
                            '120px'
                        ],
                        [
                            "eid575",
                            "left",
                            11900,
                            2100,
                            "linear",
                            "${auge2}",
                            '120px',
                            '118px'
                        ]
                    ]
                }
            },
            "sym_sprung": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'sprungbrucke',
                            rect: [45, 10, '1114px', '588px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sprungbrucke.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 250, 250]
                        }
                    }
                },
                timeline: {
                    duration: 1121,
                    autoPlay: false,
                    labels: {
                        "loop_sprung": 0
                    },
                    data: [
                        [
                            "eid612",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid618",
                            "left",
                            131,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '45px',
                            '-183px'
                        ],
                        [
                            "eid620",
                            "left",
                            250,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-251px',
                            '-430px'
                        ],
                        [
                            "eid622",
                            "left",
                            389,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-500px',
                            '-680px'
                        ],
                        [
                            "eid658",
                            "left",
                            406,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-680px',
                            '-685px'
                        ],
                        [
                            "eid624",
                            "left",
                            500,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-685px',
                            '-6px'
                        ],
                        [
                            "eid626",
                            "left",
                            629,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-76px',
                            '-270px'
                        ],
                        [
                            "eid656",
                            "left",
                            687,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-270px',
                            '-264px'
                        ],
                        [
                            "eid628",
                            "left",
                            750,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-264px',
                            '-507px'
                        ],
                        [
                            "eid630",
                            "left",
                            854,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-598px',
                            '-792px'
                        ],
                        [
                            "eid632",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-898px',
                            '-1020px'
                        ],
                        [
                            "eid617",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid619",
                            "top",
                            131,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '10px',
                            '25px'
                        ],
                        [
                            "eid621",
                            "top",
                            250,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '27px',
                            '17px'
                        ],
                        [
                            "eid623",
                            "top",
                            389,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '17px',
                            '9px'
                        ],
                        [
                            "eid659",
                            "top",
                            406,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '9px',
                            '7px'
                        ],
                        [
                            "eid625",
                            "top",
                            500,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '7px',
                            '-311px'
                        ],
                        [
                            "eid627",
                            "top",
                            629,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-311px',
                            '-290px'
                        ],
                        [
                            "eid657",
                            "top",
                            687,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-290px',
                            '-282px'
                        ],
                        [
                            "eid629",
                            "top",
                            750,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-282px',
                            '-259px'
                        ],
                        [
                            "eid631",
                            "top",
                            854,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-274px',
                            '-278px'
                        ],
                        [
                            "eid633",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sprungbrucke}",
                            '-256px',
                            '-166px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part3_edgeActions.js");
})("PART3");
