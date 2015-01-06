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
                            id: 'sym_blatt',
                            symbolName: 'sym_blatt',
                            type: 'rect',
                            rect: ['1', '1', '2048', '1536', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${StageB}': {
                            isStage: true,
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid661",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${StageB}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
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
                            id: 'vorhangani',
                            type: 'image',
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
                            rect: [133, -94, '2048px', '1536px', 'auto', 'auto'],
                            id: 'aussichthintersw2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aussichthintersw.jpg', '0px', '0px']
                        },
                        {
                            rect: [133, -94, '2048px', '1536px', 'auto', 'auto'],
                            id: 'aussichtvorsw2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aussichtvorsw.png', '0px', '0px']
                        },
                        {
                            id: 'huhliegenkorper2',
                            type: 'image',
                            rect: [1116, 1198, '140px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/huhliegenkorper.png', '0px', '0px']
                        },
                        {
                            rect: [1146, 1214, 50, 68, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_huhliegenkopf',
                            symbolName: 'sym_huhliegenkopf',
                            type: 'rect'
                        },
                        {
                            rect: ['1465px', '1242px', 170, 155, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_huhpickenganzani',
                            symbolName: 'sym_huhpickenganzani',
                            type: 'rect'
                        },
                        {
                            rect: ['1278px', '1291px', '163px', '146px', 'auto', 'auto'],
                            id: 'huhpickenkorper2',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/huhpickenkorper.png', '0px', '0px']
                        },
                        {
                            rect: ['1278px', '1291px', 65, 146, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_huhpickenkopfkoroer',
                            symbolName: 'sym_huhpickenkopfkoroer',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
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
                    autoPlay: false,
                    labels: {
                        "huhsontherun": 3069
                    },
                    data: [
                        [
                            "eid375",
                            "rotateZ",
                            5250,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid376",
                            "rotateZ",
                            5500,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid378",
                            "rotateZ",
                            5750,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid380",
                            "rotateZ",
                            6000,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid382",
                            "rotateZ",
                            6250,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid387",
                            "rotateZ",
                            10500,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid388",
                            "rotateZ",
                            10750,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid389",
                            "rotateZ",
                            11000,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid390",
                            "rotateZ",
                            11250,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid391",
                            "rotateZ",
                            11500,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid259",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${aussichtvorsw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid371",
                            "location",
                            5250,
                            1000,
                            "linear",
                            "${huhpickenkorper2}",
                            [[1359.5, 1364, 0, 0, 0, 0,0],[1344.43, 1370.42, -26.36, -18.81, -23.2, -16.55,18.22],[1318.34, 1370.17, -16.72, 1.61, -23.12, 2.22,45.12],[1307.5, 1366.14, 0, 0, 0, 0,56.93]]
                        ],
                        [
                            "eid400",
                            "location",
                            10500,
                            1000,
                            "linear",
                            "${huhpickenkorper2}",
                            [[1307.5, 1366.14, 0, 0, 0, 0,0],[1318.34, 1370.17, 23.12, -2.22, 16.72, -1.61,11.81],[1344.43, 1370.42, 23.2, 16.55, 26.36, 18.81,38.7],[1359.5, 1364, 0, 0, 0, 0,56.93]]
                        ],
                        [
                            "eid374",
                            "rotateZ",
                            5250,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid377",
                            "rotateZ",
                            5500,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid379",
                            "rotateZ",
                            5750,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid381",
                            "rotateZ",
                            6000,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid383",
                            "rotateZ",
                            6250,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid393",
                            "rotateZ",
                            10500,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid394",
                            "rotateZ",
                            10750,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '-8deg'
                        ],
                        [
                            "eid395",
                            "rotateZ",
                            11000,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '-8deg',
                            '0deg'
                        ],
                        [
                            "eid396",
                            "rotateZ",
                            11250,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '0deg',
                            '8deg'
                        ],
                        [
                            "eid397",
                            "rotateZ",
                            11500,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '8deg',
                            '0deg'
                        ],
                        [
                            "eid370",
                            "location",
                            5250,
                            250,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1310.5, 1364, 0, 0, 0, 0,0],[1299.5, 1364, 0, 0, -20.19, -2.76,11.04]]
                        ],
                        [
                            "eid384",
                            "location",
                            5500,
                            750,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1299.5, 1364, -5.53, -0.76, 0, 0,0],[1291.41, 1360.26, -9.59, 0.4, -4.94, 0.2,8.95],[1282.45, 1368.31, -36.7, -20.67, -8.45, -4.76,21.41],[1258.5, 1366.14, 0, 0, 0, 0,46.11]]
                        ],
                        [
                            "eid405",
                            "location",
                            9500,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1356.51, 1366, 0, 0, 0, 0,0],[1356.51, 1366, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid398",
                            "location",
                            10500,
                            750,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1352.91, 1367.26, 0, 0, 0, 0,0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67,24.7],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4,37.16],[1393.91, 1365.12, 0, 0, 5.53, 0.76,46.11]]
                        ],
                        [
                            "eid399",
                            "location",
                            11250,
                            250,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1393.91, 1365.12, 20.19, 2.76, 0, 0,0],[1404.91, 1365.12, 0, 0, 0, 0,11.04]]
                        ],
                        [
                            "eid261",
                            "scaleX",
                            0,
                            3000,
                            "linear",
                            "${aussichthintersw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid273",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${aussichthintersw2}",
                            '133px',
                            '0px'
                        ],
                        [
                            "eid271",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${aussichtvorsw2}",
                            '133px',
                            '0px'
                        ],
                        [
                            "eid260",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${aussichtvorsw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid404",
                            "scaleX",
                            3184,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid402",
                            "scaleX",
                            9500,
                            0,
                            "linear",
                            "${huhpickenkorper2}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid272",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${aussichtvorsw2}",
                            '-94px',
                            '0px'
                        ],
                        [
                            "eid403",
                            "scaleX",
                            3184,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '1',
                            '1'
                        ],
                        [
                            "eid401",
                            "scaleX",
                            9500,
                            0,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid262",
                            "scaleY",
                            0,
                            3000,
                            "linear",
                            "${aussichthintersw2}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid274",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${aussichthintersw2}",
                            '-94px',
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
                            id: 'zimmer',
                            type: 'image',
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
                            id: 'sym_zimmer2',
                            type: 'rect',
                            symbolName: 'sym_zimmer',
                            rect: [0, 0, 2048, 1536, 'auto', 'auto']
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
                            id: 'huhliegenkopf2',
                            type: 'image',
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
                            rect: ['0', '0', 2048, 1536, 'auto', 'auto'],
                            id: 'sym_gesicht',
                            symbolName: 'sym_gesicht',
                            type: 'rect'
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'ib',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ib.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'hb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'gb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/gb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'fb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'eb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'db',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/db.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'cb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'bb',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bb.png', '0px', '0px']
                        },
                        {
                            rect: [-50, -37, 2150, 1613, 'auto', 'auto'],
                            id: 'a',
                            type: 'image',
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
                    duration: 5000,
                    autoPlay: true,
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
                            "eid528",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${db}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid529",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${db}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid564",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${db}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid565",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${db}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid600",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${db}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid601",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${db}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid636",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${db}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid637",
                            "left",
                            4500,
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
                            "eid526",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${cb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid527",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${cb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid562",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${cb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid563",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${cb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid598",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${cb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid599",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${cb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid634",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${cb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid635",
                            "top",
                            4500,
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
                            "eid516",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${a}",
                            '-50px',
                            '-24px'
                        ],
                        [
                            "eid517",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${a}",
                            '-24px',
                            '-50px'
                        ],
                        [
                            "eid552",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${a}",
                            '-50px',
                            '-24px'
                        ],
                        [
                            "eid553",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${a}",
                            '-24px',
                            '-50px'
                        ],
                        [
                            "eid588",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${a}",
                            '-50px',
                            '-24px'
                        ],
                        [
                            "eid589",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${a}",
                            '-24px',
                            '-50px'
                        ],
                        [
                            "eid624",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${a}",
                            '-50px',
                            '-24px'
                        ],
                        [
                            "eid625",
                            "left",
                            4500,
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
                            "eid544",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${hb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid545",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${hb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid580",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${hb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid581",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${hb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid616",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${hb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid617",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${hb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid652",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${hb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid653",
                            "left",
                            4500,
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
                            "eid522",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${bb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid523",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${bb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid558",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${bb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid559",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${bb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid594",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${bb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid595",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${bb}",
                            '-57px',
                            '-37px'
                        ],
                        [
                            "eid630",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${bb}",
                            '-37px',
                            '-57px'
                        ],
                        [
                            "eid631",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${bb}",
                            '-57px',
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
                            "eid538",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${fb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid539",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${fb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid574",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${fb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid575",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${fb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid610",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${fb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid611",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${fb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid646",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${fb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid647",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${fb}",
                            '-17px',
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
                            "eid540",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${gb}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid541",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${gb}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid576",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${gb}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid577",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${gb}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid612",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${gb}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid613",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${gb}",
                            '-30px',
                            '-50px'
                        ],
                        [
                            "eid648",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${gb}",
                            '-50px',
                            '-30px'
                        ],
                        [
                            "eid649",
                            "left",
                            4500,
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
                            "eid520",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${bb}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid521",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${bb}",
                            '0px',
                            '-50px'
                        ],
                        [
                            "eid556",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${bb}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid557",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${bb}",
                            '0px',
                            '-50px'
                        ],
                        [
                            "eid592",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${bb}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid593",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${bb}",
                            '0px',
                            '-50px'
                        ],
                        [
                            "eid628",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${bb}",
                            '-50px',
                            '0px'
                        ],
                        [
                            "eid629",
                            "left",
                            4500,
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
                            "eid534",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${eb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid535",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${eb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid570",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${eb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid571",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${eb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid606",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${eb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid607",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${eb}",
                            '-17px',
                            '-37px'
                        ],
                        [
                            "eid642",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${eb}",
                            '-37px',
                            '-17px'
                        ],
                        [
                            "eid643",
                            "top",
                            4500,
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
                            "eid536",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${fb}",
                            '-50px',
                            '-20px'
                        ],
                        [
                            "eid537",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${fb}",
                            '-20px',
                            '-50px'
                        ],
                        [
                            "eid572",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${fb}",
                            '-50px',
                            '-20px'
                        ],
                        [
                            "eid573",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${fb}",
                            '-20px',
                            '-50px'
                        ],
                        [
                            "eid608",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${fb}",
                            '-50px',
                            '-20px'
                        ],
                        [
                            "eid609",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${fb}",
                            '-20px',
                            '-50px'
                        ],
                        [
                            "eid644",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${fb}",
                            '-50px',
                            '-20px'
                        ],
                        [
                            "eid645",
                            "left",
                            4500,
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
                            "eid518",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${a}",
                            '-37px',
                            '-23px'
                        ],
                        [
                            "eid519",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${a}",
                            '-23px',
                            '-37px'
                        ],
                        [
                            "eid554",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${a}",
                            '-37px',
                            '-23px'
                        ],
                        [
                            "eid555",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${a}",
                            '-23px',
                            '-37px'
                        ],
                        [
                            "eid590",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${a}",
                            '-37px',
                            '-23px'
                        ],
                        [
                            "eid591",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${a}",
                            '-23px',
                            '-37px'
                        ],
                        [
                            "eid626",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${a}",
                            '-37px',
                            '-23px'
                        ],
                        [
                            "eid627",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${a}",
                            '-23px',
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
                            "eid550",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${ib}",
                            '-37px',
                            '-67px'
                        ],
                        [
                            "eid551",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${ib}",
                            '-67px',
                            '-37px'
                        ],
                        [
                            "eid586",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${ib}",
                            '-37px',
                            '-67px'
                        ],
                        [
                            "eid587",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${ib}",
                            '-67px',
                            '-37px'
                        ],
                        [
                            "eid622",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${ib}",
                            '-37px',
                            '-67px'
                        ],
                        [
                            "eid623",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${ib}",
                            '-67px',
                            '-37px'
                        ],
                        [
                            "eid658",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${ib}",
                            '-37px',
                            '-67px'
                        ],
                        [
                            "eid659",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${ib}",
                            '-67px',
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
                            "eid530",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${db}",
                            '-37px',
                            '-47px'
                        ],
                        [
                            "eid531",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${db}",
                            '-47px',
                            '-37px'
                        ],
                        [
                            "eid566",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${db}",
                            '-37px',
                            '-47px'
                        ],
                        [
                            "eid567",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${db}",
                            '-47px',
                            '-37px'
                        ],
                        [
                            "eid602",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${db}",
                            '-37px',
                            '-47px'
                        ],
                        [
                            "eid603",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${db}",
                            '-47px',
                            '-37px'
                        ],
                        [
                            "eid638",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${db}",
                            '-37px',
                            '-47px'
                        ],
                        [
                            "eid639",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${db}",
                            '-47px',
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
                            "eid546",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid547",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid582",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid583",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid618",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid619",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid654",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid655",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${hb}",
                            '-37px',
                            '-37px'
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
                        ],
                        [
                            "eid548",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${ib}",
                            '-50px',
                            '-19px'
                        ],
                        [
                            "eid549",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${ib}",
                            '-19px',
                            '-50px'
                        ],
                        [
                            "eid584",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${ib}",
                            '-50px',
                            '-19px'
                        ],
                        [
                            "eid585",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${ib}",
                            '-19px',
                            '-50px'
                        ],
                        [
                            "eid620",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${ib}",
                            '-50px',
                            '-19px'
                        ],
                        [
                            "eid621",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${ib}",
                            '-19px',
                            '-50px'
                        ],
                        [
                            "eid656",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${ib}",
                            '-50px',
                            '-19px'
                        ],
                        [
                            "eid657",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${ib}",
                            '-19px',
                            '-50px'
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
                            "eid532",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${eb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid533",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${eb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid568",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${eb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid569",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${eb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid604",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${eb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid605",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${eb}",
                            '-70px',
                            '-50px'
                        ],
                        [
                            "eid640",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${eb}",
                            '-50px',
                            '-70px'
                        ],
                        [
                            "eid641",
                            "left",
                            4500,
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
                            "eid524",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${cb}",
                            '-50px',
                            '-80px'
                        ],
                        [
                            "eid525",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${cb}",
                            '-80px',
                            '-50px'
                        ],
                        [
                            "eid560",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${cb}",
                            '-50px',
                            '-80px'
                        ],
                        [
                            "eid561",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${cb}",
                            '-80px',
                            '-50px'
                        ],
                        [
                            "eid596",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${cb}",
                            '-50px',
                            '-80px'
                        ],
                        [
                            "eid597",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${cb}",
                            '-80px',
                            '-50px'
                        ],
                        [
                            "eid632",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${cb}",
                            '-50px',
                            '-80px'
                        ],
                        [
                            "eid633",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${cb}",
                            '-80px',
                            '-50px'
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
                            "eid542",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid543",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid578",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid579",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid614",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid615",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid650",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid651",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${gb}",
                            '-37px',
                            '-37px'
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
            "sym_gesicht": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [620, 220, '932px', '404px', 'auto', 'auto'],
                            id: 'baumHalbesGAugenKopie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baumHalbesGAugenKopie.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'baumHalbesGohneAugenKopie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baumHalbesGohneAugenKopie.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 4940,
                    autoPlay: true,
                    labels: {
                        "loop_gesicht": 0
                    },
                    data: [
                        [
                            "eid506",
                            "top",
                            0,
                            1659,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '220px',
                            '250px'
                        ],
                        [
                            "eid508",
                            "top",
                            1659,
                            1456,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '250px',
                            '270px'
                        ],
                        [
                            "eid510",
                            "top",
                            3115,
                            737,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '270px',
                            '220px'
                        ],
                        [
                            "eid513",
                            "top",
                            4940,
                            0,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '220px',
                            '220px'
                        ],
                        [
                            "eid504",
                            "left",
                            0,
                            1250,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '620px',
                            '650px'
                        ],
                        [
                            "eid505",
                            "left",
                            1250,
                            635,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '650px',
                            '560px'
                        ],
                        [
                            "eid507",
                            "left",
                            2189,
                            926,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '560px',
                            '620px'
                        ],
                        [
                            "eid511",
                            "left",
                            3852,
                            0,
                            "linear",
                            "${baumHalbesGAugenKopie}",
                            '620px',
                            '620px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part2_edgeActions.js");
})("PART2");
