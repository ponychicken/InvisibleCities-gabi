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
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['584', '304', '440', '433', 'auto', 'auto'],
                            fill: ["rgba(140,82,82,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'sym_vorzim',
                            symbolName: 'sym_vorzim',
                            type: 'rect',
                            rect: ['0', '-9', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'sym_schwarz',
                            symbolName: 'sym_schwarz',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['884px', '316px', '640px', '457px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'uberschwarz',
                            type: 'rect',
                            rect: ['828', '307', '708', '457', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'wegzumhaus',
                            symbolName: 'wegzumhaus',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1564', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '-9px', '2048px', '1545px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'uberwaldani',
                            type: 'rect',
                            rect: ['54', '-93', '2048px', '1545px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],[],[],['0.2617','0.28025']]
                        },
                        {
                            id: 'testanfang',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"testanfang.jpg",'0px','0px']
                        },
                        {
                            id: 'wald',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wald.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${StageA}': {
                            isStage: true,
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 36000,
                    autoPlay: false,
                    data: [
                        [
                            "eid585",
                            "top",
                            0,
                            0,
                            "linear",
                            "${wegzumhaus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid586",
                            "left",
                            0,
                            0,
                            "linear",
                            "${wegzumhaus}",
                            '0px',
                            '0px'
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
                            rect: [-989, -30, 1274, 471, 'auto', 'auto'],
                            id: 'sym_wolke',
                            symbolName: 'sym_wolke',
                            type: 'rect'
                        },
                        {
                            rect: [142, 216, '1737px', '916px', 'auto', 'auto'],
                            id: 'hauswegsw',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.66', '0.66', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hauswegsw.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 2048, 1564]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: false,
                    data: [
                        [
                            "eid575",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_wolke}",
                            '-989px',
                            '-989px'
                        ],
                        [
                            "eid574",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_wolke}",
                            '-30px',
                            '-30px'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${haushinterswrgb}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${hauswegsw}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${hauswegsw}",
                            '216px',
                            '158px'
                        ],
                        [
                            "eid129",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${hauswegsw}",
                            '142px',
                            '91px'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${haushinterswrgb}",
                            '0.66',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            4000,
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
                            type: 'rect',
                            opacity: '0.850000',
                            id: 'schwarz',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
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
                            rect: [133, -229, '2048px', '1536px', 'auto', 'auto'],
                            id: 'wasserstruktur_Kopie',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wasserstruktur%20Kopie.jpg', '0px', '0px']
                        },
                        {
                            rect: [133, -94, '2048px', '1536px', 'auto', 'auto'],
                            id: 'ausblickwasserfrei',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ausblickwasserfrei.png', '0px', '0px']
                        },
                        {
                            rect: [133, -94, '2048px', '1536px', 'auto', 'auto'],
                            id: 'aussichtvorsw2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aussichtvorsw.png', '0px', '0px']
                        },
                        {
                            rect: [1116, 1198, '140px', '122px', 'auto', 'auto'],
                            id: 'huhliegenkorper2',
                            type: 'image',
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
                        },
                        {
                            rect: [694, 271, 678, 570, 'auto', 'auto'],
                            id: 'sym_blattbaum',
                            symbolName: 'sym_blattbaum',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53', '0.53', 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
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
                            "eid599",
                            "left",
                            0,
                            15750,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '133px',
                            '517px'
                        ],
                        [
                            "eid614",
                            "left",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '133px',
                            '113px'
                        ],
                        [
                            "eid616",
                            "left",
                            19570,
                            16430,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '113px',
                            '517px'
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
                            "eid517",
                            "scaleY",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid600",
                            "top",
                            0,
                            15750,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '-229px',
                            '-7px'
                        ],
                        [
                            "eid613",
                            "top",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '-277px',
                            '-47px'
                        ],
                        [
                            "eid615",
                            "top",
                            19570,
                            16430,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '-47px',
                            '-7px'
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
                            "eid515",
                            "scaleX",
                            16245,
                            3325,
                            "linear",
                            "${wasserstruktur_Kopie}",
                            '0.53',
                            '1'
                        ],
                        [
                            "eid370",
                            "location",
                            21860,
                            277,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1310.5, 1364, 0, 0, 0, 0,0],[1299.5, 1364, 0, 0, -20.19, -2.76,11.04]]
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
                            [[1352.91, 1367.26, 0, 0, 0, 0,0],[1376.86, 1369.43, 8.45, 4.76, 36.7, 20.67,24.7],[1385.82, 1361.38, 4.94, -0.2, 9.59, -0.4,37.16],[1393.91, 1365.12, 0, 0, 5.53, 0.76,46.11]]
                        ],
                        [
                            "eid399",
                            "location",
                            28509,
                            277,
                            "linear",
                            "${sym_huhpickenkopfkoroer}",
                            [[1393.91, 1365.12, 20.19, 2.76, 0, 0,0],[1404.91, 1365.12, 0, 0, 0, 0,11.04]]
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
                            rect: [0, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_zimmer2',
                            symbolName: 'sym_zimmer',
                            type: 'rect'
                        },
                        {
                            rect: [767, 263, 850, 538, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sym_vorhang',
                            symbolName: 'sym_vorhang',
                            type: 'rect'
                        },
                        {
                            rect: [1734, 439, 172, 201, 'auto', 'auto'],
                            id: 'zimpflanze1',
                            transform: [[0, 0, 0], ['-18', 0, 0], [0, 0], ['1', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zimpflanze1.png', '0px', '0px']
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
                            "eid577",
                            "width",
                            0,
                            0,
                            "linear",
                            "${zimpflanze1}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid576",
                            "height",
                            0,
                            0,
                            "linear",
                            "${zimpflanze1}",
                            '201px',
                            '201px'
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
                            "eid536",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze1}",
                            '439px',
                            '584px'
                        ],
                        [
                            "eid537",
                            "scaleY",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze1}",
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
                            "eid538",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze1}",
                            '1734px',
                            '3099px'
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
                            "eid539",
                            "scaleX",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze1}",
                            '1',
                            '3.76926'
                        ],
                        [
                            "eid580",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${zimpflanze1}",
                            '-18deg',
                            '-10deg'
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
                            rect: [-7, 0, '550px', '147px', 'auto', 'auto'],
                            id: 'huhpickenganzani',
                            type: 'image',
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
                            rect: [-87, 0, '163px', '146px', 'auto', 'auto'],
                            id: 'huhpickenkopf',
                            type: 'image',
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
            "sym_wolke": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1005px', '405px', 'auto', 'auto'],
                            id: 'w5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/w5.png', '0px', '0px']
                        },
                        {
                            rect: ['179px', '25px', '1005px', '405px', 'auto', 'auto'],
                            id: 'w6',
                            opacity: '0.7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/w6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1274, 471]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    labels: {
                        "loop_wolke": 0
                    },
                    data: [
                        [
                            "eid573",
                            "location",
                            0,
                            10000,
                            "linear",
                            "${w6}",
                            [[681.88, 227.29, 0, 0, 0, 0,0],[1351.48, 244.15, 412.68, -4.58, 969.7, -10.76,669.92],[1957.71, 199.53, 0, 0, 0, 0,1277.87]]
                        ],
                        [
                            "eid562",
                            "location",
                            10000,
                            11000,
                            "linear",
                            "${w6}",
                            [[1957.71, 199.53, 0, 0, 0, 0,0],[2505.88, 188.7, 482.93, -3.21, 964.43, -6.4,548.29],[3038.66, 263.96, 173.86, 22.29, 466.56, 59.81,1086.96],[3266.58, 294.34, 640.36, 36.38, 156.49, 8.89,1316.93],[3571.5, 202.5, 0, 0, 0, 0,1644.35]]
                        ],
                        [
                            "eid571",
                            "opacity",
                            0,
                            5750,
                            "linear",
                            "${w6}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid564",
                            "opacity",
                            10000,
                            5000,
                            "linear",
                            "${w6}",
                            '0',
                            '0.7'
                        ],
                        [
                            "eid568",
                            "opacity",
                            0,
                            5750,
                            "linear",
                            "${w5}",
                            '0',
                            '0.7'
                        ],
                        [
                            "eid559",
                            "opacity",
                            11000,
                            4000,
                            "linear",
                            "${w5}",
                            '0.7',
                            '0'
                        ],
                        [
                            "eid556",
                            "location",
                            0,
                            15000,
                            "linear",
                            "${w5}",
                            [[502.5, 202.5, 0, 0, 0, 0,0],[1033.66, 262.58, 681.42, -12.1, 858.03, -15.24,535.92],[1834.94, 168.23, 927.72, -73.5, 731.76, -57.97,1343.11],[2443.88, 168.02, 0, 0, 0, 0,1952.57]]
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
                            rect: [43, 142, '610px', '428px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'baubeweg2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baubeweg2.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '678px', '396px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part1_edgeActions.js");
})("PART1");
