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
                            id: 'WaserHintergrundKopie',
                            type: 'image',
                            rect: ['-3338', '0', '5409px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"WaserHintergrundKopie.jpg",'0px','0px']
                        },
                        {
                            id: 'wasserkorpertransparent1',
                            type: 'image',
                            rect: ['-7398px', '-90px', '5575px', '1824px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wasserkorpertransparent1.png",'0px','0px']
                        },
                        {
                            id: 'wassergesichterverlauf',
                            type: 'image',
                            rect: ['-8538px', '-220px', '8013px', '1912px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wassergesichterverlauf.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    labels: {
                        "loop_welle": 6161
                    },
                    data: [
                        [
                            "eid110",
                            "top",
                            0,
                            0,
                            "linear",
                            "${WaserHintergrundKopie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid111",
                            "top",
                            12500,
                            0,
                            "linear",
                            "${WaserHintergrundKopie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid116",
                            "location",
                            1944,
                            10556,
                            "linear",
                            "${wassergesichterverlauf}",
                            [[-4531.5, 736, 0, 0, 0, 0,0],[-2172.33, 876, 2209.61, 0, 4020.2, 0,2364.76],[373.42, 680.9, 3626.22, -64.98, 2493.41, -44.68,4918.97],[3583.99, 807.68, 2084.63, 53.82, 2424.75, 62.61,8132.82],[4678.5, 736, 0, 0, 0, 0,9231.68]]
                        ],
                        [
                            "eid95",
                            "left",
                            0,
                            12500,
                            "linear",
                            "${WaserHintergrundKopie}",
                            '-3338px',
                            '0px'
                        ],
                        [
                            "eid115",
                            "location",
                            1944,
                            10556,
                            "linear",
                            "${wasserkorpertransparent1}",
                            [[-4610.5, 822, 0, 0, 0, 0,0],[-3428.05, 980.79, 903.17, 54.83, 2172.14, 131.86,1194.34],[-2394.21, 972, 948.98, 0, 1107.79, 0,2228.46],[-1477.48, 928.81, 797.35, 0.12, 859.41, 0.13,3146.38],[-707.45, 950.81, 613.43, -51.64, 794.65, -66.89,3917.34],[-98.66, 813.18, 864.44, -120.19, 649.64, -90.33,4542.27],[855.35, 835.32, 483.54, -11.76, 996.52, -24.24,5497.84],[1743.67, 814.68, 639.22, 74.89, 1114.52, 130.57,6388.03],[2522.15, 885.76, 849.16, 80.32, 631.61, 59.74,7169.78],[3072.68, 962.79, 4122.18, 1.77, 374.26, 0.16,7726.08],[4599.5, 822, 0, 0, 0, 0,9267.29]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("part4_edgeActions.js");
})("PART4");
