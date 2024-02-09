// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "ＡＣＦ | Futsal x3 🔴⚫🟡";
const botName = " ";
const maxPlayers = 30;
const roomPublic = true;
const geo = [{ "code": "CL", "lat": -33.448907, "lon": -70.66926 }
];

const room = HBInit({token: roomArgs['token'], roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });


const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = "ACF2024ACF";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{	"name" : "Alone map by ACF",	"canBeStored" : false,	"width" : 420,	"height" : 200,	"spawnDistance" : 180,	"bg" : { "type" : "hockey", "width" : 368, "height" : 171, "kickOffRadius" : 65, "cornerRadius" : 0 },	"vertexes" : [		/* 0 */ { "x" : -368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 1 */ { "x" : -368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 2 */ { "x" : -368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 3 */ { "x" : -368, "y" : -171, "trait" : "ballArea", "bCoef" : 1, "cMask" : ["ball" ] },		/* 4 */ { "x" : 368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 5 */ { "x" : 368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 6 */ { "x" : 368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 7 */ { "x" : 368, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 8 */ { "x" : 0, "y" : 65, "trait" : "line" },		/* 9 */ { "x" : 0, "y" : -65, "trait" : "line" },				/* 10 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : 171 },		/* 11 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : -171 },				/* 12 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 171 },		/* 13 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -171 },		/* 14 */ { "x" : 0, "y" : 65, "trait" : "line" },		/* 15 */ { "x" : 0, "y" : -65, "trait" : "line" },		/* 16 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 17 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 18 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 19 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 20 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 21 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 22 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 23 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 24 */ { "x" : 0, "y" : 65, "trait" : "line" },		/* 25 */ { "x" : 0, "y" : -65, "trait" : "line" },				/* 26 */ { "x" : -368.53340356886, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 27 */ { "x" : -400.05760771891, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 28 */ { "x" : -400.05760771891, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 29 */ { "x" : -368.53340356886, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 30 */ { "x" : 368.09926357786, "y" : 63.94882446641, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 31 */ { "x" : 400, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 32 */ { "x" : 400, "y" : -61.927767991658, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 33 */ { "x" : 368.9681846993, "y" : -62.144998272018, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },				/* 34 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 35 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 36 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 37 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 38 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 39 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 40 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 41 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 42 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 43 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 44 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 45 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 46 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 47 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 48 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 49 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 50 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 52 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 53 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 54 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 55 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 56 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 57 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 58 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 59 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 60 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 61 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 62 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 63 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 64 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 65 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 66 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 67 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 68 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 69 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 70 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 71 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 72 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 73 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 74 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 75 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 76 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 77 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 78 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 79 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 80 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 81 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 82 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 83 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 84 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 85 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 86 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 87 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 88 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 89 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 90 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 91 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 92 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line" },		/* 93 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 94 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 95 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 96 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 97 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 98 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 99 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 100 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 101 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 102 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line" },		/* 103 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },		/* 104 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line" },		/* 105 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 106 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line" },		/* 107 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },				/* 108 */ { "x" : 369, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "vis" : false },		/* 109 */ { "x" : 369, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "vis" : false },		/* 110 */ { "x" : -370, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "vis" : false },		/* 111 */ { "x" : -370, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "vis" : false },		/* 112 */ { "x" : 371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 113 */ { "x" : 371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 114 */ { "x" : 371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 115 */ { "x" : 371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 116 */ { "x" : -371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 117 */ { "x" : -371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 118 */ { "x" : -371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 119 */ { "x" : -371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 }	],	"segments" : [		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },				{ "v0" : 8, "v1" : 9, "trait" : "line", "curve" : 180, "cGroup" : ["blueKO" ] },		{ "v0" : 8, "v1" : 9, "trait" : "line", "curve" : -180, "cGroup" : ["redKO" ] },				{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 1, "v1" : 0, "cMask" : ["ball" ], "x" : -368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 5, "v1" : 4, "cMask" : ["ball" ], "x" : 368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 3, "cMask" : ["ball" ], "x" : -368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "x" : 368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 0, "v1" : 10, "y" : 171 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 3, "v1" : 11, "y" : -171 },				{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 12, "v1" : 13 },		{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8 },		{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 15, "v1" : 14 },				{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 1 },		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 5 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 16, "v1" : 17, "cMask" : ["ball" ], "x" : 330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 18, "v1" : 19, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 20, "v1" : 21, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 22, "v1" : 23, "cMask" : ["ball" ], "x" : 330 },				{ "v0" : 26, "v1" : 27, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },		{ "v0" : 27, "v1" : 28, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },		{ "v0" : 28, "v1" : 29, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },		{ "v0" : 30, "v1" : 31, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },		{ "v0" : 31, "v1" : 32, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },		{ "v0" : 32, "v1" : 33, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },				{ "v0" : 34, "v1" : 35, "curve" : 94.0263701017, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 37, "v1" : 36, "curve" : 86.632306418889, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 38, "v1" : 39, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 35, "v1" : 39, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 41, "v1" : 40, "curve" : -86.632306418888, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 43, "v1" : 42, "curve" : 86.632306418884, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 45, "v1" : 44, "curve" : -86.632306418899, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 46, "v1" : 47, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 48, "v1" : 49, "curve" : 94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },		{ "v0" : 53, "v1" : 52, "curve" : -180.00692920292, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 52, "v1" : 53, "curve" : -180.00218240614, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 55, "v1" : 54, "curve" : -179.64823645332, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 54, "v1" : 55, "curve" : -180.35758668147, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 57, "v1" : 56, "curve" : -180.02357323962, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 56, "v1" : 57, "curve" : -180.00924102399, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 59, "v1" : 58, "curve" : -180.06885755885, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 58, "v1" : 59, "curve" : -180.02948353257, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 61, "v1" : 60, "curve" : -179.99869069543, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 60, "v1" : 61, "curve" : -179.99939258776, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 63, "v1" : 62, "curve" : -180.08826047163, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 62, "v1" : 63, "curve" : -179.91186753664, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 65, "v1" : 64, "curve" : -179.99528711105, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 64, "v1" : 65, "curve" : -179.99743836358, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 67, "v1" : 66, "curve" : -179.98626041101, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 66, "v1" : 67, "curve" : -179.99175181595, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 69, "v1" : 68, "curve" : -180.04715562398, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 68, "v1" : 69, "curve" : -179.95294709391, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 71, "v1" : 70, "curve" : -179.95715750564, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 70, "v1" : 71, "curve" : -179.89943871875, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 73, "v1" : 72, "curve" : -179.94773754738, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 72, "v1" : 73, "curve" : -179.98221351296, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 75, "v1" : 74, "curve" : -180.4151727218, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 74, "v1" : 75, "curve" : -179.58764458796, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 77, "v1" : 76, "curve" : -180.00086646359, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 76, "v1" : 77, "curve" : -180.01965986376, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 79, "v1" : 78, "curve" : -180.03532601389, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 78, "v1" : 79, "curve" : -179.99380079, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 81, "v1" : 80, "curve" : -180.0044468452, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 80, "v1" : 81, "curve" : -180.01386779847, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 83, "v1" : 82, "curve" : -180.05158287563, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 82, "v1" : 83, "curve" : -180.01212223878, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },				{ "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 109, "v1" : 108, "x" : 369 },		{ "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 111, "v1" : 110, "x" : -370 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 112, "v1" : 113, "cMask" : ["ball" ], "x" : 371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 114, "v1" : 115, "cMask" : ["ball" ], "x" : 371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 116, "v1" : 117, "cMask" : ["ball" ], "x" : -371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 118, "v1" : 119, "cMask" : ["ball" ], "x" : -371 }	],	"goals" : [		{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },		{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }	],	"discs" : [		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,64.043361696331 ], "color" : "8B0000", "trait" : "goalPost", "y" : 80 },		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "8B0000", "trait" : "goalPost", "y" : -80, "x" : -560 },		{ "radius" : 3.9405255187564, "pos" : [368.9681846993,-62.144998272018 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },		{ "radius" : 3.9405255187564, "pos" : [368.09926357786,63.94882446641 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },				{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "8B0000", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "8B0000", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "6666CC", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "6666CC", "bCoef" : 0.1, "trait" : "line" }	],	"planes" : [		{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },		{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },				{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }	],	"traits" : {		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }	},	"playerPhysics" : {		"acceleration" : 0.11,		"kickingAcceleration" : 0.083,		"kickStrength" : 5,		"bCoef" : 0	},	"ballPhysics" : {		"radius" : 6.25,		"color" : "FFFFFF",		"bCoef" : 0.4,		"invMass" : 1.5,		"damping" : 0.99	}}'

var classicMap = '{	"name" : "Futsal x1 and x2 by ACF",	"width" : 420,        "canBeStored": false,	"height" : 200,	"spawnDistance" : 180,	"bg" : { "type" : "hockey", "width" : 368, "height" : 171, "kickOffRadius" : 65, "cornerRadius" : 0 },	"vertexes" : [		/* 0 */ { "x" : -368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 1 */ { "x" : -368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 2 */ { "x" : -368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 3 */ { "x" : -368, "y" : -171, "trait" : "ballArea", "bCoef" : 1, "cMask" : ["ball" ] },		/* 4 */ { "x" : 368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 5 */ { "x" : 368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 6 */ { "x" : 368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 7 */ { "x" : 368, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 8 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },				/* 9 */ { "x" : 0, "y" : -65, "trait" : "line" },				/* 10 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : 171 },		/* 11 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : -171 },				/* 12 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 171 },		/* 13 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -171 },				/* 14 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },		/* 15 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },				/* 16 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 17 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 18 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 19 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 20 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 21 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 22 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 23 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 24 */ { "x" : 0, "y" : 199, "trait" : "kickOffBarrier" },		/* 25 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },		/* 26 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },		/* 27 */ { "x" : 0, "y" : -199, "trait" : "kickOffBarrier" },				/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 33 */ { "x" : 400, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },		/* 34 */ { "x" : 400, "y" : -61.927767991658, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },		/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },				/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },		/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },		/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },		/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },		/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },		/* 54 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 55 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 56 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 57 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 58 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 59 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 60 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 61 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 62 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 63 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 64 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 65 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 66 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 67 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 68 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 69 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 70 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 71 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 72 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 73 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 74 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 75 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 76 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 77 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 78 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 79 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 80 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 81 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 82 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 83 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 84 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 85 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },		/* 86 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 87 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 88 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 89 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 90 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 91 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 92 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },		/* 93 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 94 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line" },		/* 95 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 96 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 97 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 98 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 99 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },		/* 100 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 101 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 102 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 103 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },		/* 104 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line" },		/* 105 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },		/* 106 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line" },		/* 107 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },		/* 108 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line" },		/* 109 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },		/* 110 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 111 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 112 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 113 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 114 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 115 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },				/* 116 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },				/* 117 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },		/* 118 */ { "x" : 371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 119 */ { "x" : 371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 120 */ { "x" : 371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 121 */ { "x" : 371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 122 */ { "x" : -371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 123 */ { "x" : -371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 124 */ { "x" : -371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },		/* 125 */ { "x" : -371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 }	],	"segments" : [		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },				{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },				{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 1, "v1" : 0, "cMask" : ["ball" ], "x" : -368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 5, "v1" : 4, "cMask" : ["ball" ], "x" : 368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 3, "cMask" : ["ball" ], "x" : -368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "x" : 368 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 0, "v1" : 10, "y" : 171 },		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 3, "v1" : 11, "y" : -171 },				{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 12, "v1" : 13 },		{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8 },		{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 15, "v1" : 14 },		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 2, "v1" : 1 },		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 6, "v1" : 5 },				{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 16, "v1" : 17, "cMask" : ["ball" ], "x" : 330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 18, "v1" : 19, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 20, "v1" : 21, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 22, "v1" : 23, "cMask" : ["ball" ], "x" : 330 },				{ "v0" : 24, "v1" : 25, "trait" : "kickOffBarrier" },		{ "v0" : 26, "v1" : 27, "trait" : "kickOffBarrier" },				{ "v0" : 28, "v1" : 29, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },		{ "v0" : 29, "v1" : 30, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },		{ "v0" : 30, "v1" : 31, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },		{ "v0" : 32, "v1" : 33, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },		{ "v0" : 33, "v1" : 34, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },		{ "v0" : 34, "v1" : 35, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },				{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 40, "v1" : 41, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 37, "v1" : 41, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 43, "v1" : 42, "curve" : -86.632306418888, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 47, "v1" : 46, "curve" : -86.632306418899, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 48, "v1" : 49, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },		{ "v0" : 55, "v1" : 54, "curve" : -180.00692920292, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 54, "v1" : 55, "curve" : -180.00218240614, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 57, "v1" : 56, "curve" : -179.64823645332, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 56, "v1" : 57, "curve" : -180.35758668147, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 59, "v1" : 58, "curve" : -180.02357323962, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 58, "v1" : 59, "curve" : -180.00924102399, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 61, "v1" : 60, "curve" : -180.06885755885, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 60, "v1" : 61, "curve" : -180.02948353257, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },		{ "v0" : 63, "v1" : 62, "curve" : -179.99869069543, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 62, "v1" : 63, "curve" : -179.99939258776, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 65, "v1" : 64, "curve" : -180.08826047163, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 64, "v1" : 65, "curve" : -179.91186753664, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 67, "v1" : 66, "curve" : -179.99528711105, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 66, "v1" : 67, "curve" : -179.99743836358, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 69, "v1" : 68, "curve" : -179.98626041101, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 68, "v1" : 69, "curve" : -179.99175181595, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },		{ "v0" : 71, "v1" : 70, "curve" : -180.04715562398, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 70, "v1" : 71, "curve" : -179.95294709391, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 73, "v1" : 72, "curve" : -179.95715750564, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 72, "v1" : 73, "curve" : -179.89943871875, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 75, "v1" : 74, "curve" : -179.94773754738, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 74, "v1" : 75, "curve" : -179.98221351296, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 77, "v1" : 76, "curve" : -180.4151727218, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 76, "v1" : 77, "curve" : -179.58764458796, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },		{ "v0" : 79, "v1" : 78, "curve" : -180.00086646359, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 78, "v1" : 79, "curve" : -180.01965986376, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 81, "v1" : 80, "curve" : -180.03532601389, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 80, "v1" : 81, "curve" : -179.99380079, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 83, "v1" : 82, "curve" : -180.0044468452, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 82, "v1" : 83, "curve" : -180.01386779847, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 85, "v1" : 84, "curve" : -180.05158287563, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 84, "v1" : 85, "curve" : -180.01212223878, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },				{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 110, "v1" : 111, "cMask" : ["ball" ], "x" : 330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 112, "v1" : 113, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 114, "v1" : 115, "cMask" : ["ball" ], "x" : -330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 116, "v1" : 117, "cMask" : ["ball" ], "x" : 330 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 118, "v1" : 119, "cMask" : ["ball" ], "x" : 371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 120, "v1" : 121, "cMask" : ["ball" ], "x" : 371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 122, "v1" : 123, "cMask" : ["ball" ], "x" : -371 },		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 124, "v1" : 125, "cMask" : ["ball" ], "x" : -371 }	],	"goals" : [		{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },		{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }	],	"discs" : [		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,64.043361696331 ], "color" : "8B0000", "trait" : "goalPost", "y" : 80 },		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "8B0000", "trait" : "goalPost", "y" : -80, "x" : -560 },		{ "radius" : 3.9405255187564, "pos" : [368.9681846993,-62.144998272018 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },		{ "radius" : 3.9405255187564, "pos" : [368.09926357786,63.94882446641 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },				{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "8B0000", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "8B0000", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "6666CC", "bCoef" : 0.1, "trait" : "line" },		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "6666CC", "bCoef" : 0.1, "trait" : "line", "_selected" : true }	],	"planes" : [		{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },		{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },				{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }	],	"traits" : {		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }	},	"playerPhysics" : {		"acceleration" : 0.11,		"kickingAcceleration" : 0.083,		"kickStrength" : 5,		"bCoef" : 0	},	"ballPhysics" : {		"radius" : 6.25,		"color" : "FFFFFF",		"bCoef" : 0.4,		"invMass" : 1.5,		"damping" : 0.99	}}'

var bigMap = '{	"name" : "Futsal x3 by ACF",	"width" : 620,	"canBeStored" : false,	"height" : 270,	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },	"vertexes" : [		/* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },		/* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },		/* 2 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 5 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 6 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 7 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 8 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 9 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 10 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 11 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 12 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 13 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 18 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },		/* 19 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },		/* 26 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },		/* 27 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 34 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 35 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 36 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 37 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 38 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },		/* 39 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },		/* 40 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },		/* 41 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },		/* 42 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },		/* 43 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },		/* 44 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },		/* 45 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },		/* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },		/* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "cMask" : [ ] },		/* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },		/* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "cMask" : [ ] },		/* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },		/* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },		/* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },		/* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },		/* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },		/* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },		/* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },		/* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },		/* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },		/* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },		/* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },		/* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },		/* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "cMask" : [ ] },		/* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },		/* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },		/* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },		/* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "cMask" : [ ] },		/* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },		/* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },		/* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "cMask" : [ ] },		/* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },		/* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "cMask" : [ ] },		/* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },		/* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },		/* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },		/* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },		/* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },		/* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },		/* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },		/* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },		/* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },		/* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },		/* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },		/* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },		/* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },		/* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },		/* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },		/* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },		/* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },		/* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },		/* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },		/* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },		/* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },		/* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },		/* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },		/* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },		/* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },		/* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },		/* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },		/* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },		/* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },		/* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },		/* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },		/* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },		/* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },		/* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },		/* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },		/* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] }	],	"segments" : [		{ "v0" : 6, "v1" : 7, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 8, "v1" : 9, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 10, "v1" : 11, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 12, "v1" : 13, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 3, "v1" : 4, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 4, "v1" : 3, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 14, "v1" : 15, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },		{ "v0" : 16, "v1" : 17, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },		{ "v0" : 18, "v1" : 19, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 20, "v1" : 21, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },		{ "v0" : 22, "v1" : 23, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },		{ "v0" : 24, "v1" : 25, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },		{ "v0" : 26, "v1" : 27, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 30, "v1" : 31, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 38, "v1" : 39, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 40, "v1" : 41, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 42, "v1" : 43, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 44, "v1" : 45, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },		{ "v0" : 46, "v1" : 47, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 48, "v1" : 49, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 50, "v1" : 51, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 64, "v1" : 65, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 67, "v1" : 66, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 68, "v1" : 69, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 70, "v1" : 71, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 67, "v1" : 71, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 73, "v1" : 72, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 74, "v1" : 75, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 76, "v1" : 77, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 78, "v1" : 79, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 80, "v1" : 81, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 82, "v1" : 83, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 84, "v1" : 85, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 86, "v1" : 87, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 88, "v1" : 89, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 91, "v1" : 90, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 92, "v1" : 93, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 95, "v1" : 94, "curve" : 89.99999999999999, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },		{ "v0" : 96, "v1" : 97, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 99, "v1" : 98, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 98, "v1" : 99, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 101, "v1" : 100, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 100, "v1" : 101, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 103, "v1" : 102, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 102, "v1" : 103, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 105, "v1" : 104, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 104, "v1" : 105, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 107, "v1" : 106, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 106, "v1" : 107, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 109, "v1" : 108, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 108, "v1" : 109, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 111, "v1" : 110, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 110, "v1" : 111, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 113, "v1" : 112, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 112, "v1" : 113, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 115, "v1" : 114, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 114, "v1" : 115, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 117, "v1" : 116, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 116, "v1" : 117, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 119, "v1" : 118, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 118, "v1" : 119, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 121, "v1" : 120, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 120, "v1" : 121, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 123, "v1" : 122, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 122, "v1" : 123, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 125, "v1" : 124, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 124, "v1" : 125, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 127, "v1" : 126, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 126, "v1" : 127, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 129, "v1" : 128, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 128, "v1" : 129, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 }	],	"planes" : [		{ "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },		{ "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }	],	"goals" : [		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }	],	"discs" : [		{ "radius" : 6.35, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "_selected" : true },		{ "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "FF6666" },		{ "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FF6666" },		{ "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "6666FF" },		{ "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "6666FF" },		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "E3242B", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "E3242B", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "0E4C92", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "0E4C92", "bCoef" : 0.1, "cMask" : [ ] }	],	"playerPhysics" : {		"bCoef" : 0,		"acceleration" : 0.11,		"kickingAcceleration" : 0.083	},	"ballPhysics" : "disc0",	"spawnDistance" : 350,	"traits" : {			},	"joints" : [			],	"redSpawnPoints" : [			],	"blueSpawnPoints" : [			]}'



/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["",""];
var Rposs = 0;
var Bposs = 0;
var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

/* FUNCTIONS */

setInterval(()=>{announce(`Discord de la Asociacion Chilena de Futsal: https://discord.gg/JzCH2BnGHn | Pasión por haxball.`, null, 0x007CBE, "bold", 2);}, 120000)
setInterval(()=>{announce(`¿Eres nuevo y no sabes como elegir? Prueba usando !comoelegir.`, null, 0xFFD639, "bold", 1)}, 250000);
/* AUXILIARY FUNCTIONS */


function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

function randomBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				var r = getRandomInt(teamS.length);
				room.setPlayerTeam(teamS[r].id, Team.RED);
				teamS = teamS.filter((spec) => spec.id != teamS[r].id);
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
		}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
        announce("⚽ Gol gana!", null, null, "bold", 1);
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
            announce("⌛ Quedan 60 segundos", null, null, "bold", 1);
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
	players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
	const scores = room.getScores();
	game.scores = scores;
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	endGameVariable = true;
	if (winner == Team.RED) {
		streak++;
		announce(`🔴 Equipo rojo padreando 😴 ${scores.red} - ${scores.blue} ! Victorias consecutivas : ${streak} 🏆`, null, 0xF3E8EA, "bold", 1);
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		announce(`🔵 Equipo azul padreando 😴 ${scores.blue} - ${scores.red} ! Victorias consecutivas : ${streak} 🏆`, null, announcementsColor, "bold", 1);
	}
	else {
		streak = 0;
        announce("💤 Límite de empate, terminado! 💤", null, null, "bold", 1);
    }
		announce(`⭐ Posesión del balón : 🔴 ${(Rposs * 100).toPrecision(3)}% : ${(Bposs * 100).toPrecision(3)}% 🔵`, null, announcementsColor, "bold", 1);
var announcementsColor = "0x#ECFEE8"
	if(scores.red == 0) {
			if (scores.blue === 0) {
					announce(`🏆 ${GKList[0].name} y ${GKList[1].name} mantuvieron la valla invicta !`, null, announcementsColor, "bold", 1);
			} else {
					announce(`🏆 ${GKList[1].name} mantuvo la valla invicta !`, null, announcementsColor, "bold", 1);
			}
	} else if (scores.blue === 0) {
			announce(`🏆 ${GKList[0].name} mantuvo la valla invicta !`, null, announcementsColor, "bold", 1);
	}

	updateStats();
}

function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}
var slowModeColor = "0xC2EFEB"
function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	announce(`Modo lento activado (2 segundos)`, null, slowModeColor, "bold", 2);	
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		announce(`Modo lento terminado`, null, slowModeColor, "bold", 2);
	
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
	if (map == aloneMap) {
		room.setCustomStadium(aloneMap);
	}
	else if (map == classicMap) {
		(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
	}
	else if (map == bigMap) {
		(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
	}
	else {
		room.setCustomStadium(map);
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	var warningColor = "0xFFC4EB";
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {

			announce(`[PV] ⛔ @${room.getPlayer(extendedP[i][eP.ID]).name}, Muevete o serás expulsado en ${Math.floor(afkLimit / 3)} segundos`, extendedP[i][eP.ID], warningColor);

		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
				setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
			}
			room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
		}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
	updateTeams();
	if (inChooseMode) {
		if (players.length == 6) {
			loadMap(bigMap, scoreLimitBig, timeLimitBig);
		}
		getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
			if (teamR.length < teamB.length) {
				if (scores.blue - scores.red == 2) {
					endGame(Team.BLUE);
					announce("🤖 Abandono detectado. Juego terminado 🤖", null, announcementsColor, "bold", 2);
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
			else {
				if (scores.red - scores.blue == 2) {
					endGame(Team.RED);
					announce("🤖 Abandono detectado. Juego terminado 🤖", null, announcementsColor, "bold", 2);
			

					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
		}
	}
	if (inChooseMode) {
		if (players.length == 5) {
			loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
		}
		if (teamR.length == 0 || teamB.length == 0) {
			teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
			return;
		}
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			announce("No hay más opción...", null, null, "bold", 1);
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
				}
			}
			return;
		}
		if (streak == 0 && room.getScores() == null) {
			if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
				announce("Equilibrando equipos...", null, null, "bold", 1);
				teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
			}
		}
		if (teamR.length == teamB.length && teamS.length < 2) {
			deactivateChooseMode();
			resumeGame();
			return;
		}
		capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function balanceTeams() {
	if (!inChooseMode) {
		if (players.length == 1 && teamR.length == 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
			room.setPlayerTeam(players[0].id, Team.RED);
		}
		else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 2) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.BLUE);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.RED);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 1) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
				return;
			}
			else if (players.length == 5) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (players.length == maxTeamSize * 2 - 1) {
				allReds = [];
				allBlues = [];
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
			room.pauseGame(true);
			activateChooseMode();
			choosePlayer();
		}
		else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
			if (teamR.length == 2) {
				quickRestart();
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			topBtn();
		}
	}
}

var choosingColor = "0xFFE4FA";
function choosePlayer() {
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length !== 0) {
    announce(`Puedes elegir con el número del jugador o usando 'top', 'bottom', o 'random'.`, teamR[0].id, choosingColor, "bold", 2);
    timeOutCap = setTimeout(function (player) {
        announce(`Date prisa @${player.name}, solo quedan ${Number.parseInt(chooseTime / 2)} segundos para elegir!`, player.id, choosingColor, "bold", 2);
        timeOutCap = setTimeout(function (player) {
            room.kickPlayer(player.id, "¡No elegiste a tiempo!", false);
        }, chooseTime * 500, teamR[0]);
    }, chooseTime * 1000, teamR[0]);
} else if (teamB.length < teamR.length && teamB.length !== 0) {
    announce(`Puedes elegir con el número del jugador o usando 'top', 'bottom', o 'random'.`, teamB[0].id, choosingColor, "bold", 2);
    timeOutCap = setTimeout(function (player) {
        announce(`Date prisa @${player.name}, solo quedan ${Number.parseInt(chooseTime / 2)} segundos para elegir !`, player.id, choosingColor, "bold", 2);
        timeOutCap = setTimeout(function (player) {
            room.kickPlayer(player.id, "¡No elegiste a tiempo!", false);
        }, chooseTime * 500, teamB[0]);
    }, chooseTime * 1000, teamB[0]);
}

	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
	var specColor = "0xABD2FA";
	var cstm = "[PV] Jugadores : ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			announce(cstm, player.id, specColor, "bold", 1);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	announce(cstm, player.id, specColor, "bold", 1);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}

function updateStats() {
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
		var stats;
		for (var i = 0; i < allReds.length; i++) {
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < game.goals.length; i++) {
			if (game.goals[i].striker != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
					stats[Ss.GL]++;
					localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
				}
			}
			if (game.goals[i].assist != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
					stats[Ss.AS]++;
					localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
				}
			}
		}
		if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
			stats[Ss.GK]++;
			game.scores.blue == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
		}
		if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
			stats[Ss.GK]++;
			game.scores.red == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
		}
	}
}

function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}



/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	updateRoleOnPlayerIn();
	announce("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯", player.id, 0xFF0000, "normal", 2);
	announce("", player.id, null, "normal", 0);
	announce("", player.id, null, "normal", 0);
	announce(`			¡𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 ${player.name} 𝙖 𝘼𝘾𝙁							`, player.id, 0xFFFF00, "normal");
	announce("", player.id, null, "normal", 0);
	announce(" > Utiliza !help para ver los comandos disponibles", player.id, 0x00FFFF, "bold");
	announce(" > ¿Quieres colaborar con ACF?, Únete a nuestro Discord https://discord.gg/PjDMcTCKq7", player.id, 0x00FFFF, "bold");
	announce("", player.id, null, "normal", 0);
	announce("", player.id, null, "normal", 0);
	announce("________________________________________________________________", player.id, 0xFF0000, "normal");

	if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
			room.setPlayerAdmin(player.id, true);
			announce(`Se conectó el admin ${player.name}.`, null, 0xFFFF00, "normal", 1);

		}
	}
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		room.setPlayerTeam(0, Team.SPECTATORS);
		return;
	}
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
		announce(`${changedPlayer.name} está AFK.`, player.id, afkColor, "bold", 2);
		return;
	}
	updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
		}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		setActivity(changedPlayer, 0);
	}
	if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
				}
			}
			return;
		}
		else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
			deactivateChooseMode();
			resumeGame();
		}
		else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
			redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
			return;
		}
		else if (teamB.length < teamR.length && blueCaptainChoice != "") {
			blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
			return;
		}
		else {
			choosePlayer();
		}
	}
}

room.onPlayerLeave = function(player) {
	if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */


function obtenerRango(victorias) {
  let rango;
  let color;
  let emoji;

  switch (true) {
    case victorias < 3:
      rango = "Malisimo";
      color = 0xFFB6C1; // Rosa claro
      emoji = "🧑🏻";
      break;
    case victorias < 6:
      rango = "Aficionado";
      color = 0xFFFFE0; // Amarillo claro
      emoji = "⚽";
      break;
    case victorias < 10:
    	rango = "Principiante";
    	color = 0x98FB98; // Verde claro
    	emoji = "🎈";
    	break;
    case victorias < 13:
    	rango = "Potencia";
    	color = 0xC1FFC1; // Verde claro menta
    	emoji = "📈";
    	break;
    case victorias < 17:
    	rango = "Talentoso";
    	color = 0xAFEEEE; // Turquesa claro
    	emoji = "💫";
    	break;
    case victorias < 25:
    	rango = "Crack del Barrio";
    	color = 0xE0FFFF; // Cyan claro
    	emoji = "✨";
    	break;
    case victorias < 35:
    	rango = "Pichichi";
    	color = 0xFAFAD2; // Amarillo claro pálido
    	emoji = "🎆";
    	break;
    case victorias < 50:
    	rango = "Maestro el balón";
    	color = 0xFFD700; // Oro
    	emoji= "🎱";
    	break;
    case victorias < 70:
    	rango = "Dominante de la Esférica";
    	color = 0xFF69B4; // Rosa intenso
    	emoji = "💤";
    	break;
    case victorias < 100:
    	rango = "El 10";
    	color = 0x9370DB; // Lavanda
    	emoji = "🎢";
    	break;
    case victorias < 125:
    	rango = "Crack";
    	color = 0x8A2BE2; // Azul púrpura
    	emoji = "🎪";
    	break;
    case victorias < 150:
    	rango = "Maestro de la Pichanga";
    	color = 0xDDA0DD; // Ciruela
    	emoji = "🎇";
    	break;
    case victorias < 200:
    	rango = "Relámpago";
    	color = 0xA45EE5; // Lila
    	emoji = "⚡";
    	break;
    case victorias < 250:
    	rango = "Ídolo Mundial";
    	color = 0xFF4500; // Rojo intenso
    	emoji = "🚗";
    	break;
    case victorias < 300:
    	rango = "Astro futbolero";
    	color = 0x87CEFA; // Azul cielo claro
    	emoji = "🎆🎆";
    	break;
    case victorias < 500:
    	rango = "Dios de la Cancha";
    	color = 0xFFFF00; // Amarillo brillante
    	emoji = "✨✨✨";
    	break;
    case victorias < 666:
    	rango = "Demonio Viviente";
    	color = 0xFF4500; // Rojo intenso
    	emoji = "😈😈😈";
    	break;
    
}
	
  return { rango, color, emoji };
}

function announce (msg, target, colors, style, sound) {
    if (colors == null) {
        colors = 0xECD3A4
    }
    else if (style == null) {
        style = "bold"
    }
    else if (sound == null) {
        sound = 0
    }

    room.sendAnnouncement(msg, target, colors, style, sound)
    console.log(`Announce: ${msg}`)
}


room.onPlayerChat = function (player, message) {
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!help"].includes(message[0].toLowerCase())) {
		announce(`Comandos disponibles: !help, !afk, !me, !discord, !bb`, player.id, 0x00FFFF, "bold", 1);
		player.admin ? announce(`Comandos disponibles para admins: !clearbans, !bans`, player.id, 0xFFFF99, "bold", 1) : null;
	}
	else if (["!afk"].includes(message[0].toLowerCase())) {
		if (players.length != 1 && player.team != Team.SPECTATORS) {
			if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			else {
				announce(`No puedes ponerte AFK mientras estás en un equipo!`, player.id, 0xFFFF00, "normal", 2);
				return false;
			}
		}
		else if (players.length == 1 && !getAFK(player)) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		}
		var afkColor = "0xff0000";
		setAFK(player, !getAFK(player));
		if(getAFK(player)){
			announce(`${player.name} ha entrado en modo AFK.`, null, afkColor, "bold", 1);
			updateRoleOnPlayerOut();
		} else {
			announce(`${player.name} ha salido del modo AFK.`, null, afkColor, "bold", 1);
			updateRoleOnPlayerIn();
		}

	}
	else if(message[0][0] == "@" && message[0][1] == "@"){
		console.log(`MENSAJE EN 0: ${message[0]}`);
		console.log(`MENSAJE EN 1: ${message[1]}`);
		console.log(`MESSAGE[2]: ${message[2]}`);
		var msg = "";
		var msgTo = "";
		for(var i = 0; i < message[0].length; i++){
			if(message[0][i] == '@'){
				continue;
			} else if(message[0][i] == ' ') break; 
			else msgTo = msgTo + message[0][i];
			
		}
		console.log(`PERSONA QUE ENVIA: ${msgTo}`)
		for(var j = 1; j < message.length; j++){
			for(var k = 0; k < message[j].length; k++){
				msg = msg + message[j][k];
			}
		}
		console.log(`${msgTo} <- ${msg}`);
		console.log("PLAYERS ACTUALES");
		for(var i = 0; i < players.length; i++){
			if(players[i].name == "msgTo"){
				console.log("COINCIDE");
				announce(`[MP de ${player.name}]: ${msg}`, players[i].id, 0xFF0000, "bold", 2);
				announce(`[MP hacia ${players[i].name}]: ${msg}`, player.id, 0xFF0000, "bold", 2);
				console.log(`[MP de ${player.name}]: ${msg}`);
				console.log(`[MP hacia ${players[i].name}]: ${msg}`);
			}
			console.log(players[i].name);
		}
		return 0;

	}
	else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
    var cstm = "Lista de AFK : ";
    for (var i = 0; i < extendedP.length; i++) {
        const player = room.getPlayer(extendedP[i][eP.ID]);

        if (player != null && getAFK(player)) {
            const playerName = player.name + ", ";

            if (140 - cstm.length < playerName.length) {
                announce(cstm, player.id);
                cstm = "... ";
            }

            cstm += playerName;
        }
    }

    if (cstm == "Lista de AFK : ") {
        announce("No hay jugadores afk.", player.id, 0xABC798, "bold", 1);
        return false;
    }

    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    announce(cstm, player.id);
}

	else if (["!me"].includes(message[0].toLowerCase())) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		announce(`${player.name} > PJ: ${stats[Ss.GA]}, Victorias: ${stats[Ss.WI]}, Empates: ${stats[Ss.DR]}, Derrotas: ${stats[Ss.LS]}, WR: ${stats[Ss.WR]}%, Goles: ${stats[Ss.GL]}, Asistencias: ${stats[Ss.AS]}, GK: ${stats[Ss.GK]}, CS: ${stats[Ss.CS]}, CS%: ${stats[Ss.CP]}%`, player.id, 0xFFFF00, "normal", 1);
	}
	else if (["!discord"].includes(message[0].toLowerCase())) {
		announce(`Discord de la Asociacion Chilena de Futsal: https://discord.gg/JzCH2BnGHn`, player.id, 0x00FF00, "normal", 2);	
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				announce(`${player.name} ahora es administrador de la sala.`, null, 0xFFFF00, "normal", 1);
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
	}
	else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "player") {
						stats[Ss.RL] = "admin";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
					announce(`${room.getPlayer(Number.parseInt(message[1])).name} ahora es administrador de la sala.`, null, 0xE88EED, "bold", 2)
					}
				}
			}
		}
	}
	else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "admin") {
						announce(`${room.getPlayer(Number.parseInt(message[1])).name} Ya no es administrador del host.`, null, 0xE88EED, "bold", 2);
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {

	var muteColor = "0xEDB88B";
		var cstm = "[PV] Lista de muteados : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					announce(cstm, player.id, muteColor, "bold",1);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Lista de Muteados : ") {
			announce("No hay nadie en la lista de muteados.", player.id, muteColor, "bold", 1);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		announce(cstm, player.id, muteColor, "bold", 1);
	}
	
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				announce("Modo lento activado (2 Segundos)", null, slowModeColor, "bold", 1);
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						announce(`${slowMode} segundos, modo lento activado.`, null, slowModeColor, "bold", 1);
						return false;
					}
				}
				slowMode = 2;
				announce("Modo lento activado (2 Segundos)", null, slowModeColor, "bold", 1);
			}
		}
	}
	else if (["!endslow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			slowMode != 0 ? room.sendChat("Modo lento terminado.") : null;
			slowMode = 0;
		}
	}
	else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
		var banColor = "0xEF2917"
		if (banList.length == 0) {
		
			//room.sendChat("[PV] No hay nadie en la lista de baneados!", player.id);
			announce("No hay nadie en la lista de baneados.", player.id, banColor, "bold", 2);
			return false;
		}
		var cstm = "Lista de baneados : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				announce(cstm, player.id, banColor, "bold", 1);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		announce(cstm, player.id, banColor, "bold", 1);
				
	}
	else if(["!comoelegir"].includes(message[0].toLowerCase())){
		announce(`Para poder elegir, deberás esperar a que sea tu turno de elegir, puedes elegir usando la numeración correspondiente para cada jugador, también puedes usar "Top", "Bottom", o "Random", usando Top para elegir los primeros jugadores en la lista, Bottom para los últimos, y Random para una selección aleatoria`, player.id, 0xFFD639, "bold", 1);
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				announce(`[✅] ${player.name} ha removido los bans correctamente.`, null, 0x00FF00, "normal", 2);
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							announce(`${banList.filter((array)=>array[1] == ID)[0][0]} ha sido baneado del host.`, null, 0xEF2917, "bold", 2);s
						}
						setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
					}
				}
			}
		}
	}
	else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "chao aweonao !", false);
	}
	
	if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
		if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
			if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					redCaptainChoice = "top";
					clearTimeout(timeOutCap);
				announce(`${player.name} ha elegido Top.`, null, choosingColor, "bold", 1);
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					redCaptainChoice = "random";
					clearTimeout(timeOutCap);
					announce(`${player.name} ha elegido Random.`, null, choosingColor, "bold", 1);
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
					redCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					announce(`${player.name} ha elegido Bottom.`, null, choosingColor, "bold", 1);
					//room.sendChat(player.name + " elegiste Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						//room.sendChat("Ese numero no es valido hermno!", player.id);
						announce("¡Número no válido!", player.id, 0xFF0000, "bold", 2);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						announce(`${player.name} ha elegido a ${teamS[Number.parseInt(message[0])-1].name}.`, null, choosingColor, "bold", 1);
						//room.sendChat(player.name + " se culeó a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
						return false;
					}
				}
			}
			if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.BLUE);
					blueCaptainChoice = "top";
					clearTimeout(timeOutCap);
					//room.sendChat(player.name + " seleccionó Top !");
					announce(`${player.name} ha elegido Top`, null, choosingColor, "bold", 1);
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
					blueCaptainChoice = "random";
					clearTimeout(timeOutCap);
					//room.sendChat(player.name + " seleccionó Random !");
					announce(`${player.name} ha elegido Random.`, null, choosingColor, "bold", 1);
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
					blueCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					//room.sendChat(player.name + " seleccionó Bottom !");
					announce(`${player.name} ha elegido Bottom.`, null, choosingColor, "bold", 1);
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						//room.sendChat("numero invalido hermano", player.id);
						announce("¡Número no válido!", player.id, 0xFF0000, "bold", 2);

						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						//room.sendChat(player.name + " se cumeo " + teamS[Number.parseInt(message[0]) - 1].name + " !");
						announce(`${player.name} ha elegido a ${teamS[Number.parseInt(message[0])-1].name}.`, null, choosingColor, "bold", 1);
						return false;
					}
				}
			}
		}
	}
	if (message[0][0] == "!") {
		return false;
	}


	if (getMute(player)) {
		announce("ESTAS MUTEADO XD", player.id, 0xFF0000, "bold", 2);
		return false;
	}
	finalmessage = "";
	for(i = 0; i < message.length; i++){
		finalmessage = finalmessage + message[i] + " ";
	}
	if(player.admin){
		announce(`[Admin] ${player.name}: ${finalmessage}`, null, 0xFFFF00, "bold", 1);
		return false;
	} 
	var teamMessageCommand = "t";
	/*
	if(message[0]==teamMessageCommand){
		console.log("team red message");
		if(teamR.includes(player.name)){
			for(var i = 0; i < teamR.length; i++){
				announce(`🟥 | ${player.name}: ${message}`, teamR[i].id, null, bold, 1);
				
			}
		} else if(teamB.includes(player.name) == true){
			console.log("blue team message");
			for(var i = 0; i < teamB.length; i++){
				room.sendAnnouncement(player.id + " 🟦 | " + player.name + ": " + message.slice(teamMessageCommand.length), room.getPlayerList().find(p=> p.name == teamB[i]).id, 0x19FFBA, 'bold', 2);
				return false;
			}
		}
	}
	*/
	if (slowMode > 0) {
		if (!player.admin) {
			if (!SMSet.has(player.id)) {
				SMSet.add(player.id);
				setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
			}
			else {
				return false;
			}
		}
	}
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
	lastPlayersTouched = [null, null];
    Rposs = 0;
	Bposs = 0;
	GKList = [];
	allReds = [];
	allBlues = [];
	if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
		for (var i = 0; i < maxTeamSize; i++) {
			allReds.push(teamR[i]);
			allBlues.push(teamB[i]);
		}
	}
	for (var i = 0; i < extendedP.length; i++) {
		extendedP[i][eP.GK] = 0;
		extendedP[i][eP.ACT] = 0;
		room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
	}
	deactivateChooseMode();
}

room.onGameStop = function(byPlayer) {
	if (byPlayer.id == 0 && endGameVariable) {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 2 * maxTeamSize) {
				inChooseMode = false;
				resetBtn();
				for (var i = 0; i < maxTeamSize; i++) {
					setTimeout(() => { randomBtn(); }, 400*i);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else if (lastWinner == Team.BLUE) {
					redToSpecBtn();
					blueToRedBtn();
				}
				else {
					resetBtn();
				}
				setTimeout(() => { topBtn(); }, 500);
			}
		}
		else {
			if (players.length == 2) {
				if (lastWinner == Team.BLUE) {
					room.setPlayerTeam(teamB[0].id, Team.RED);
					room.setPlayerTeam(teamR[0].id, Team.BLUE);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 4) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				activateChooseMode();
			}
			else if (players.length == 6) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
		}
	}
}

room.onGamePause = function(byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
	if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
		deactivateChooseMode();
	}
}

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			announce(`⚽ ${getTime(scores)} Golazo de ${lastPlayersTouched[0].name} ! Asistencia de ${lastPlayersTouched[1].name}. Velocidad de tiro: ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "bold", 1);
			// room.sendChat("⚽ " + getTime(scores) + " GAAAAAL de " + lastPlayersTouched[0].name + " ! Asistencia de " + lastPlayersTouched[1].name + ". Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		}
		else {
			announce(`⚽ ${getTime(scores)} Golazo de ${lastPlayersTouched[0].name} !  Velocidad de tiro: ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "bold", 1);

			//room.sendChat("⚽ " + getTime(scores) + " Meo rifle del" + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
		}
	}
	else {
		announce(`😂 ${getTime(scores)} Pegale al otro lao' ${lastPlayersTouched[0].name} aweonao XD ! Velocidad de tiro:  ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "normal", 1);
		
		//room.sendChat("😂 " + getTime(scores) + " Q wea hiciste XD " + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
		game.goals.push(new Goal(scores.time, team, null, null));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function() {
	countAFK = true;
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendChat(changedPlayer.name + " ha sido desmuteado.");
		announce(`${changedPlayer.name} ha sido desmuteado.`, null, 0xEF8A17, "bold", 1);
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.setPlayerAdmin(changedPlayer.id, false);
	}
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
}

room.onGameTick = function() {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
	handleInactivity();
}