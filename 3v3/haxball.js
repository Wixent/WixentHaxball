// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "🔺🔷⚽ 3v3 [𝙰𝙲𝙵] ⚽🔷🔺";
const botName = "Árbitro del Bajo";
const maxPlayers = 30;
const roomPublic = true;
const geo = [{"code": "CL", "lat": -33.448907, "lon": -70.66926}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, token: roomArgs['token'], public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = "aVuvhl0kTmS94lQA";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"Futsal No Goals GLH","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":369,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":369,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"line","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"line","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":26,"v1":27,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":27,"v1":28,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":31,"v1":32,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":34,"v1":35,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":36,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":39,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":35,"v1":39,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":41,"v1":40,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":46,"v1":47,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":53,"v1":52,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":52,"v1":53,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":55,"v1":54,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":60,"v1":61,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":63,"v1":62,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":68,"v1":69,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":71,"v1":70,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":76,"v1":77,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":79,"v1":78,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":109,"v1":108,"x":369},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":111,"v1":110,"x":-370},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":371,"_selected":true},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FF0022","bCoef":0.4,"invMass":1.5,"damping":0.99}}'

var classicMap = '{	"name" : "Futsal x1 x2 by ACF",	"width" : 420,	"height" : 200,	"bg" : { "type" : "hockey", "kickOffRadius" : 65, "cornerRadius" : 0 },	"vertexes" : [		/* 0 */ { "x" : -368, "y" : 171, "cMask" : ["ball" ] },		/* 1 */ { "x" : -368, "y" : 65, "cMask" : ["ball" ] },		/* 2 */ { "x" : -368, "y" : -65, "cMask" : ["ball" ] },		/* 3 */ { "x" : -368, "y" : -171, "cMask" : ["ball" ] },		/* 4 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },		/* 5 */ { "x" : 368, "y" : 65, "cMask" : ["ball" ] },		/* 6 */ { "x" : 368, "y" : -65, "cMask" : ["ball" ] },		/* 7 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },		/* 8 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 9 */ { "x" : 0, "y" : -65, "bCoef" : 0, "cMask" : [ ] },		/* 10 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },		/* 11 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },		/* 12 */ { "x" : 0, "y" : 171, "bCoef" : 0, "cMask" : [ ] },		/* 13 */ { "x" : 0, "y" : -171, "bCoef" : 0, "cMask" : [ ] },		/* 14 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 15 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 16 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },		/* 17 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },		/* 18 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },		/* 19 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },		/* 20 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },		/* 21 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },		/* 22 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },		/* 23 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },		/* 24 */ { "x" : 0, "y" : 199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 25 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 26 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 27 */ { "x" : 0, "y" : -199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 33 */ { "x" : 400, "y" : 64, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 34 */ { "x" : 400, "y" : -61.927767991658, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },		/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },		/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },		/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },		/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },		/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },		/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },		/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },		/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },		/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },		/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },		/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },		/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },		/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },		/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },		/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },		/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },		/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },		/* 54 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },		/* 55 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },		/* 56 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },		/* 57 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },		/* 58 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },		/* 59 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },		/* 60 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },		/* 61 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },		/* 62 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },		/* 63 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },		/* 64 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },		/* 65 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },		/* 66 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },		/* 67 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },		/* 68 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },		/* 69 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },		/* 70 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },		/* 71 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },		/* 72 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },		/* 73 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },		/* 74 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },		/* 75 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },		/* 76 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },		/* 77 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },		/* 78 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },		/* 79 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },		/* 80 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },		/* 81 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },		/* 82 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },		/* 83 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },		/* 84 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },		/* 85 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },		/* 86 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "cMask" : [ ] },		/* 87 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 88 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "cMask" : [ ] },		/* 89 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 90 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "cMask" : [ ] },		/* 91 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 92 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "cMask" : [ ] },		/* 93 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 94 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },		/* 95 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 96 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "cMask" : [ ] },		/* 97 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "cMask" : [ ] },		/* 98 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "cMask" : [ ] },		/* 99 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "cMask" : [ ] },		/* 100 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "cMask" : [ ] },		/* 101 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "cMask" : [ ] },		/* 102 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "cMask" : [ ] },		/* 103 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "cMask" : [ ] },		/* 104 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },		/* 105 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "cMask" : [ ] },		/* 106 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },		/* 107 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "cMask" : [ ] },		/* 108 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },		/* 109 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "cMask" : [ ] },		/* 110 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },		/* 111 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },		/* 112 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },		/* 113 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },		/* 114 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },		/* 115 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },		/* 116 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },		/* 117 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },		/* 118 */ { "x" : 371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },		/* 119 */ { "x" : 371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] },		/* 120 */ { "x" : 371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },		/* 121 */ { "x" : 371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },		/* 122 */ { "x" : -371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },		/* 123 */ { "x" : -371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },		/* 124 */ { "x" : -371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },		/* 125 */ { "x" : -371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] }	],	"segments" : [		{ "v0" : 0, "v1" : 1, "vis" : false, "cMask" : ["ball" ] },		{ "v0" : 2, "v1" : 3, "vis" : false, "cMask" : ["ball" ] },		{ "v0" : 4, "v1" : 5, "vis" : false, "cMask" : ["ball" ] },		{ "v0" : 6, "v1" : 7, "vis" : false, "cMask" : ["ball" ] },		{ "v0" : 8, "v1" : 9, "curve" : 180, "vis" : false, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 9, "v1" : 8, "curve" : 180, "vis" : false, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 1, "v1" : 0, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 5, "v1" : 4, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 2, "v1" : 3, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 6, "v1" : 7, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 0, "v1" : 10, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 3, "v1" : 11, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 12, "v1" : 13, "color" : "B6B6B8", "bCoef" : 0, "cMask" : [ ] },		{ "v0" : 8, "v1" : 9, "curve" : 180, "color" : "B6B6B8", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 15, "v1" : 14, "curve" : 180, "color" : "B6B6B8", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },		{ "v0" : 2, "v1" : 1, "color" : "000000", "bCoef" : 0, "cMask" : [ ] },		{ "v0" : 6, "v1" : 5, "color" : "000000", "bCoef" : 0, "cMask" : [ ] },		{ "v0" : 16, "v1" : 17, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 20, "v1" : 21, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 22, "v1" : 23, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 24, "v1" : 25, "vis" : false, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 26, "v1" : 27, "vis" : false, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },		{ "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 29, "v1" : 30, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 30, "v1" : 31, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 32, "v1" : 33, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 33, "v1" : 34, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 34, "v1" : 35, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },		{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101076 },		{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.060575000344919 },		{ "v0" : 41, "v1" : 40, "curve" : 94.026370101699, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },		{ "v0" : 37, "v1" : 41, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 42, "v1" : 43, "curve" : 86.632306418888, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003449375 },		{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003450118 },		{ "v0" : 46, "v1" : 47, "curve" : 86.632306418899, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003447336 },		{ "v0" : 49, "v1" : 48, "curve" : 94.026370101699, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },		{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },		{ "v0" : 52, "v1" : 53, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 54, "v1" : 55, "curve" : -179.99307079708004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000060468702819980624 },		{ "v0" : 55, "v1" : 54, "curve" : -179.99781759386002, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000019045086381751383 },		{ "v0" : 56, "v1" : 57, "curve" : 179.64823645332, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0030697256812038513 },		{ "v0" : 57, "v1" : 56, "curve" : -179.64241331853003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003120542605465436 },		{ "v0" : 58, "v1" : 59, "curve" : -179.97642676038004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00020571532626703233 },		{ "v0" : 59, "v1" : 58, "curve" : -179.99075897601003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00008064314761547242 },		{ "v0" : 60, "v1" : 61, "curve" : -179.93114244115003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0006008956307319741 },		{ "v0" : 61, "v1" : 60, "curve" : -179.97051646743003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0002572923649102433 },		{ "v0" : 62, "v1" : 63, "curve" : 179.99869069543, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000011425837829318613 },		{ "v0" : 63, "v1" : 62, "curve" : 179.99939258776004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000005300671752306162 },		{ "v0" : 64, "v1" : 65, "curve" : -179.91173952837002, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0007702180669602502 },		{ "v0" : 65, "v1" : 64, "curve" : 179.91186753664, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0007691009834080061 },		{ "v0" : 66, "v1" : 67, "curve" : 179.99528711105, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000041127714752444664 },		{ "v0" : 67, "v1" : 66, "curve" : 179.99743836358, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000022354494887865286 },		{ "v0" : 68, "v1" : 69, "curve" : 179.98626041101, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.00011990053344777071 },		{ "v0" : 69, "v1" : 68, "curve" : 179.99175181595, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0000719789846157737 },		{ "v0" : 70, "v1" : 71, "curve" : -179.95284437602004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0004115104728700557 },		{ "v0" : 71, "v1" : 70, "curve" : 179.95294709391, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004106140900279739 },		{ "v0" : 72, "v1" : 73, "curve" : 179.95715750564, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0003738713105943949 },		{ "v0" : 73, "v1" : 72, "curve" : 179.89943871875, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0008775629541936324 },		{ "v0" : 74, "v1" : 75, "curve" : 179.94773754738, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004560759683152962 },		{ "v0" : 75, "v1" : 74, "curve" : 179.98221351296, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0001552163818523414 },		{ "v0" : 76, "v1" : 77, "curve" : -179.58482727820004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003623081332869217 },		{ "v0" : 77, "v1" : 76, "curve" : 179.58764458796, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0035984953466450956 },		{ "v0" : 78, "v1" : 79, "curve" : -179.99913353641003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0000075613212472121415 },		{ "v0" : 79, "v1" : 78, "curve" : -179.98034013624, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00017156467823623532 },		{ "v0" : 80, "v1" : 81, "curve" : -179.96467398611003, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00030827763675859586 },		{ "v0" : 81, "v1" : 80, "curve" : 179.99380079, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000054098312814100194 },		{ "v0" : 82, "v1" : 83, "curve" : -179.99555315480004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00003880604505256444 },		{ "v0" : 83, "v1" : 82, "curve" : -179.98613220153004, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00012101937224284073 },		{ "v0" : 84, "v1" : 85, "curve" : -179.94841712437002, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00045014553909957075 },		{ "v0" : 85, "v1" : 84, "curve" : -179.98787776122, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00010578649010659523 },		{ "v0" : 86, "v1" : 87, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 88, "v1" : 89, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 90, "v1" : 91, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 92, "v1" : 93, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 94, "v1" : 95, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 96, "v1" : 97, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 98, "v1" : 99, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 100, "v1" : 101, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 102, "v1" : 103, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 104, "v1" : 105, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 106, "v1" : 107, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 108, "v1" : 109, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },		{ "v0" : 110, "v1" : 111, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 112, "v1" : 113, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 114, "v1" : 115, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 116, "v1" : 117, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },		{ "v0" : 118, "v1" : 119, "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },		{ "v0" : 120, "v1" : 121, "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },		{ "v0" : 122, "v1" : 123, "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },		{ "v0" : 124, "v1" : 125, "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] }	],	"planes" : [		{ "normal" : [0,1 ], "dist" : -171, "cMask" : ["ball" ] },		{ "normal" : [0,-1 ], "dist" : -171, "cMask" : ["ball" ] },		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2 },		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2 },		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2 },		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2 }	],	"goals" : [		{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },		{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }	],	"discs" : [		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FF0000", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "_selected" : true },		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,64.043361696331 ], "color" : "6666CC", "bCoef" : 1 },		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "6666CC", "bCoef" : 1 },		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.9681846993,-62.144998272018 ], "color" : "6666CC", "bCoef" : 1 },		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.09926357786,63.94882446641 ], "color" : "6666CC", "bCoef" : 1 },		{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "EFB810", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "EFB810", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "EFB810", "bCoef" : 0.1, "cMask" : [ ] },		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "EFB810", "bCoef" : 0.1, "cMask" : [ ] }	],	"playerPhysics" : {		"bCoef" : 0,		"acceleration" : 0.11,		"kickingAcceleration" : 0.083	},	"ballPhysics" : "disc0",	"spawnDistance" : 180}'

var bigMap = '{	"name": "Futsal x3 | ACF",	"width": 620,	"height": 270,	"bg": {		"type": "none",		"height": 0,		"width": 0,		"cornerRadius": 0,		"kickOffRadius": 0,		"color": "444444"	},	"vertexes": [		{			"x": 550,			"y": 240,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -240,			"cMask": [				"ball"			]		},		{			"x": 0,			"y": 270,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": 80,			"bCoef": 0.15,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {}			}		},		{			"x": 0,			"y": -80,			"bCoef": 0.15,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {}			}		},		{			"x": 0,			"y": -270,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": -550,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": -590,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": -590,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": -550,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": 550,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": 590,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": 590,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": 550,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"x": -550,			"y": 80,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": -550,			"y": 240,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": -550,			"y": -80,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": -550,			"y": -240,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": -550,			"y": 240,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": 240,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": 80,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": 240,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -240,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -80,			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -240,			"bCoef": 0,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -240,			"bCoef": 0,			"cMask": [				"ball"			]		},		{			"x": -550,			"y": -240,			"cMask": [				"ball"			]		},		{			"x": 550,			"y": -240,			"cMask": [				"ball"			]		},		{			"x": 0,			"y": -240,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {}			}		},		{			"x": 0,			"y": 240,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {}			}		},		{			"x": 0,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": 80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": 0,			"y": -80,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"x": -557.5,			"y": 80,			"cMask": [				"ball"			]		},		{			"x": -557.5,			"y": 240,			"cMask": [				"ball"			]		},		{			"x": -557.5,			"y": -240,			"cMask": [				"ball"			]		},		{			"x": -557.5,			"y": -80,			"cMask": [				"ball"			]		},		{			"x": 557.5,			"y": -240,			"cMask": [				"ball"			]		},		{			"x": 557.5,			"y": -80,			"cMask": [				"ball"			]		},		{			"x": 557.5,			"y": 80,			"cMask": [				"ball"			]		},		{			"x": 557.5,			"y": 240,			"cMask": [				"ball"			]		},		{			"x": 0,			"y": -80,			"bCoef": 0.1,			"cMask": []		},		{			"x": 0,			"y": 80,			"bCoef": 0.1,			"cMask": []		},		{			"x": -550,			"y": -80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "CE142E",			"_data": {				"mirror": {}			}		},		{			"x": -550,			"y": 80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "CE142E",			"_data": {				"mirror": {}			},			"_selected": "segment"		},		{			"x": 550,			"y": -80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "656eb7",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": 80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "656eb7",			"_data": {				"mirror": {}			}		},		{			"x": -240,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": -120,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": -240,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": -120,			"y": -224,			"bCoef": 0.1,			"cMask": []		},		{			"x": -120,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 240,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 120,			"y": 224,			"bCoef": 0.1,			"cMask": []		},		{			"x": 120,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 240,			"y": -224,			"bCoef": 0.1,			"cMask": []		},		{			"x": 240,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 120,			"y": -224,			"bCoef": 0.1,			"cMask": []		},		{			"x": 120,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": -381,			"y": 240,			"bCoef": 0.1,			"cMask": []		},		{			"x": -381,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": -550,			"y": 200,			"bCoef": 0.1,			"cMask": []		},		{			"x": -390,			"y": 70,			"bCoef": 0.1,			"cMask": []		},		{			"x": -550,			"y": 226,			"bCoef": 0.1,			"cMask": []		},		{			"x": -536,			"y": 240,			"bCoef": 0.1,			"cMask": []		},		{			"x": -550,			"y": -200,			"bCoef": 0.1,			"cMask": []		},		{			"x": -390,			"y": -70,			"bCoef": 0.1,			"cMask": []		},		{			"x": -550,			"y": -226,			"bCoef": 0.1,			"cMask": []		},		{			"x": -536,			"y": -240,			"bCoef": 0.1,			"cMask": []		},		{			"x": -556,			"y": 123,			"bCoef": 0.1,			"cMask": []		},		{			"x": -575,			"y": 123,			"bCoef": 0.1,			"cMask": []		},		{			"x": 556,			"y": 123,			"bCoef": 0.1,			"cMask": []		},		{			"x": 575,			"y": 123,			"bCoef": 0.1,			"cMask": []		},		{			"x": -556,			"y": -123,			"bCoef": 0.1,			"cMask": []		},		{			"x": -575,			"y": -123,			"bCoef": 0.1,			"cMask": []		},		{			"x": 556,			"y": -123,			"bCoef": 0.1,			"cMask": []		},		{			"x": 575,			"y": -123,			"bCoef": 0.1,			"cMask": []		},		{			"x": -381,			"y": -240,			"bCoef": 0.1,			"cMask": []		},		{			"x": -381,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 381,			"y": 240,			"bCoef": 0.1,			"cMask": []		},		{			"x": 381,			"y": 256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 381,			"y": -240,			"bCoef": 0.1,			"cMask": []		},		{			"x": 381,			"y": -256,			"bCoef": 0.1,			"cMask": []		},		{			"x": 550,			"y": -226,			"bCoef": 0.1,			"cMask": []		},		{			"x": 536,			"y": -240,			"bCoef": 0.1,			"cMask": []		},		{			"x": 550,			"y": 226,			"bCoef": 0.1,			"cMask": []		},		{			"x": 536,			"y": 240,			"bCoef": 0.1,			"cMask": []		},		{			"x": 550,			"y": 200,			"bCoef": 0.1,			"cMask": []		},		{			"x": 390,			"y": 70,			"bCoef": 0.1,			"cMask": []		},		{			"x": 550,			"y": -200,			"bCoef": 0.1,			"cMask": []		},		{			"x": 390,			"y": -70,			"bCoef": 0.1,			"cMask": []		},		{			"x": 390,			"y": 70,			"bCoef": 0.1,			"cMask": []		},		{			"x": 390,			"y": -70,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": 1,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": -1,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": 3,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": -3,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": -2,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": 2,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": -3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": -375,			"y": 3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": 1,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": -1,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": 3,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": -3,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": -2,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": 2,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": -3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": 375,			"y": 3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": 1,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": -1,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": 3,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": -3,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": -2,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": 2,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": -3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": -277.5,			"y": 3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": 1,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": -1,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": 3,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": -3,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": -2,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": 2,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": -3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": 277.5,			"y": 3.5,			"bCoef": 0.1,			"cMask": []		},		{			"x": -50,			"y": -24.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -70,			"y": 25.831258607237846,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -30,			"y": 25.831258607237846,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -58,			"y": -4.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -42,			"y": -4.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -15,			"y": -14.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": -90		},		{			"x": -15,			"y": 15.831258607237846,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": 90,			"_data": {				"mirror": {}			}		},		{			"x": 15,			"y": 25.831258607237846,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": 90,			"_data": {				"mirror": {}			}		},		{			"x": 15,			"y": -24.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": -90		},		{			"x": 40,			"y": 25.831258607237846,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": 0		},		{			"x": 40,			"y": -24.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": 0		},		{			"x": 70,			"y": -24.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": 0		},		{			"x": 70,			"y": -4.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": -90		},		{			"x": 40,			"y": -4.168741392762154,			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff",			"curve": -90		},		{			"x": -550,			"y": -50,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "f44336",			"_data": {				"mirror": {}			}		},		{			"x": -550,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "f44336",			"_data": {				"mirror": {}			}		},		{			"x": -550,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "f44336",			"_data": {				"mirror": {}			}		},		{			"x": -550,			"y": 50,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "f44336",			"_data": {				"mirror": {}			},			"_selected": "segment"		},		{			"x": 550,			"y": -80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": 80,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": -50,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		},		{			"x": 550,			"y": 50,			"bCoef": 0.1,			"cMask": [				"wall"			],			"color": "7a85dd",			"_data": {				"mirror": {}			}		}	],	"segments": [		{			"v0": 6,			"v1": 7,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 7,			"v1": 8,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 8,			"v1": 9,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 10,			"v1": 11,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 11,			"v1": 12,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 12,			"v1": 13,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue",				"ball"			]		},		{			"v0": 2,			"v1": 3,			"vis": false,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 3,			"v1": 4,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.15,			"cMask": [				"red",				"blue"			],			"cGroup": [				"blueKO"			],			"curveF": 6.123233995736766e-17		},		{			"v0": 4,			"v1": 3,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.15,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO"			],			"curveF": 6.123233995736766e-17,			"_data": {				"mirror": {},				"arc": {					"a": [						0,						-80					],					"b": [						0,						80					],					"curve": 180,					"radius": 80,					"center": [						0,						0					],					"from": -1.5707963267948966,					"to": 1.5707963267948966				}			}		},		{			"v0": 4,			"v1": 5,			"vis": false,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 14,			"v1": 15,			"color": "F8F8F8",			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"v0": 16,			"v1": 17,			"color": "F8F8F8",			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"v0": 18,			"v1": 19,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 20,			"v1": 21,			"color": "F8F8F8",			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"v0": 22,			"v1": 23,			"color": "F8F8F8",			"bCoef": 1.15,			"cMask": [				"ball"			]		},		{			"v0": 24,			"v1": 25,			"color": "F8F8F8",			"bCoef": 0,			"cMask": [				"ball"			]		},		{			"v0": 26,			"v1": 27,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 28,			"v1": 29,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 30,			"v1": 31,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {},				"arc": {					"a": [						0,						80					],					"b": [						0,						240					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 38,			"v1": 39,			"vis": false,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 40,			"v1": 41,			"vis": false,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 42,			"v1": 43,			"vis": false,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 44,			"v1": 45,			"vis": false,			"color": "F8F8F8",			"cMask": [				"ball"			]		},		{			"v0": 48,			"v1": 49,			"color": "CE142E",			"bCoef": 0.1,			"cMask": [				"wall"			],			"_data": {				"mirror": {},				"arc": {					"a": [						-550,						-80					],					"b": [						-550,						80					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 50,			"v1": 51,			"color": "656eb7",			"bCoef": 0.1,			"cMask": [				"wall"			],			"_data": {				"mirror": {},				"arc": {					"a": [						550,						-80					],					"b": [						550,						80					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 64,			"v1": 65,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 67,			"v1": 66,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 68,			"v1": 69,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 70,			"v1": 71,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 67,			"v1": 71,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 73,			"v1": 72,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 74,			"v1": 75,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 76,			"v1": 77,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 78,			"v1": 79,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 80,			"v1": 81,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 82,			"v1": 83,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 84,			"v1": 85,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 86,			"v1": 87,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 88,			"v1": 89,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 91,			"v1": 90,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 92,			"v1": 93,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 95,			"v1": 94,			"curve": 89.99999999999999,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 1.0000000000000002		},		{			"v0": 96,			"v1": 97,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": []		},		{			"v0": 99,			"v1": 98,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 98,			"v1": 99,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 101,			"v1": 100,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 100,			"v1": 101,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 103,			"v1": 102,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 102,			"v1": 103,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 105,			"v1": 104,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 104,			"v1": 105,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 107,			"v1": 106,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 106,			"v1": 107,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 109,			"v1": 108,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 108,			"v1": 109,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 111,			"v1": 110,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 110,			"v1": 111,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 113,			"v1": 112,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 112,			"v1": 113,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 115,			"v1": 114,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 114,			"v1": 115,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 117,			"v1": 116,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 116,			"v1": 117,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 119,			"v1": 118,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 118,			"v1": 119,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 121,			"v1": 120,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 120,			"v1": 121,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 123,			"v1": 122,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 122,			"v1": 123,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 125,			"v1": 124,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 124,			"v1": 125,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 127,			"v1": 126,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 126,			"v1": 127,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 129,			"v1": 128,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 128,			"v1": 129,			"curve": 180,			"color": "F8F8F8",			"bCoef": 0.1,			"cMask": [],			"curveF": 6.123233995736766e-17		},		{			"v0": 130,			"v1": 132,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 130,			"v1": 131,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 133,			"v1": 134,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 138,			"v1": 135,			"curve": -90,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 135,			"v1": 136,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 137,			"v1": 136,			"curve": 90,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			],			"_data": {				"mirror": {},				"arc": {					"a": [						15,						25.831258607237846					],					"b": [						-15,						15.831258607237846					],					"curve": 90,					"radius": 22.360679774997894,					"center": [						4.999999999999999,						5.831258607237849					],					"from": 1.1071487177940904,					"to": 2.6779450445889874				}			}		},		{			"v0": 141,			"v1": 140,			"curve": 0,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 140,			"v1": 139,			"curve": 0,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 142,			"v1": 143,			"curve": 0,			"color": "ffffff",			"bCoef": 0.15,			"cMask": [				"wall"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 48,			"v1": 144,			"color": "f44336",			"bCoef": 0.1,			"cMask": [				"wall"			],			"_data": {				"mirror": {},				"arc": {					"a": [						-550,						-80					],					"b": [						-550,						-50					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 49,			"v1": 147,			"color": "f44336",			"bCoef": 0.1,			"cMask": [				"wall"			],			"_data": {				"mirror": {},				"arc": {					"a": [						-550,						80					],					"b": [						-550,						50					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			},			"_selected": true		},		{			"v0": 146,			"v1": 145,			"color": "f44336",			"bCoef": 0.1,			"cMask": [				"wall"			],			"_data": {				"mirror": {},				"arc": {					"a": [						-550,						20					],					"b": [						-550,						-20					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 148,			"v1": 150,			"color": "7a85dd",			"bCoef": 0.1,			"cMask": [				"wall"			],			"x": 550,			"_data": {				"mirror": {},				"arc": {					"a": [						550,						-80					],					"b": [						550,						-50					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 149,			"v1": 153,			"color": "7a85dd",			"bCoef": 0.1,			"cMask": [				"wall"			],			"x": 550,			"_data": {				"mirror": {},				"arc": {					"a": [						550,						80					],					"b": [						550,						50					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		},		{			"v0": 152,			"v1": 151,			"color": "7a85dd",			"bCoef": 0.1,			"cMask": [				"wall"			],			"x": 550,			"_data": {				"mirror": {},				"arc": {					"a": [						550,						20					],					"b": [						550,						-20					],					"radius": null,					"center": [						null,						null					],					"from": null,					"to": null				}			}		}	],	"planes": [		{			"normal": [				0,				1			],			"dist": -240,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -240,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						-240					],					"b": [						620,						-240					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -240,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -240,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						240					],					"b": [						620,						240					]				}			}		},		{			"normal": [				0,				1			],			"dist": -270,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -270,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						-270					],					"b": [						620,						-270					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -270,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -270,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						270					],					"b": [						620,						270					]				}			}		},		{			"normal": [				1,				0			],			"dist": -620,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						1,						0					],					"dist": -620,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						-270					],					"b": [						-620,						270					]				}			}		},		{			"normal": [				-1,				0			],			"dist": -620,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						-1,						0					],					"dist": -620,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						620,						-270					],					"b": [						620,						270					]				}			}		},		{			"normal": [				1,				0			],			"dist": -620,			"bCoef": 0.1,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						1,						0					],					"dist": -620,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						-620,						-270					],					"b": [						-620,						270					]				}			}		},		{			"normal": [				-1,				0			],			"dist": -620,			"bCoef": 0.1,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						-1,						0					],					"dist": -620,					"canvas_rect": [						-620,						-270,						620,						270					],					"a": [						620,						-270					],					"b": [						620,						270					]				}			}		}	],	"goals": [		{			"p0": [				-557.5,				-80			],			"p1": [				-557.5,				80			],			"team": "red"		},		{			"p0": [				557.5,				80			],			"p1": [				557.5,				-80			],			"team": "blue"		}	],	"discs": [		{			"radius": 6.25,			"invMass": 1.5,			"pos": [				0,				0			],			"color": "FFCC00",			"bCoef": 0.4,			"cGroup": [				"ball",				"kick",				"score"			],			"_data": {				"mirror": {}			}		},		{			"radius": 5,			"invMass": 0,			"pos": [				-550,				80			],			"color": "FF6666"		},		{			"radius": 5,			"invMass": 0,			"pos": [				-550,				-80			],			"color": "FF6666"		},		{			"radius": 5,			"invMass": 0,			"pos": [				550,				80			],			"color": "7a85dd"		},		{			"radius": 5,			"invMass": 0,			"pos": [				550,				-80			],			"color": "7a85dd"		},		{			"radius": 3,			"invMass": 0,			"pos": [				-550,				240			],			"color": "FFCC00",			"bCoef": 0.1,			"cMask": []		},		{			"radius": 3,			"invMass": 0,			"pos": [				-550,				-240			],			"color": "FFCC00",			"bCoef": 0.1,			"cMask": []		},		{			"radius": 3,			"invMass": 0,			"pos": [				550,				-240			],			"color": "FFCC00",			"bCoef": 0.1,			"cMask": []		},		{			"radius": 3,			"invMass": 0,			"pos": [				550,				240			],			"color": "FFCC00",			"bCoef": 0.1,			"cMask": []		}	],	"playerPhysics": {		"bCoef": 0,		"acceleration": 0.11,		"kickingAcceleration": 0.083	},	"ballPhysics": "disc0",	"spawnDistance": 350,	"traits": {},	"joints": [],	"redSpawnPoints": [],	"blueSpawnPoints": [],	"canBeStored": false}'


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

setInterval(()=>{announce(`Discord de la Asociacion Chilena de Futsal: https://discord.gg/JzCH2BnGHn`, null, 0x00C8F0, "normal", 2);}, 120000)

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
		room.sendChat("⚽ Gol gana to' !");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendChat("⌛ Quedan 60 segundos csm!");
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
		announce(`🔴 Equipo rojo padreando 😴 ${scores.red} - ${scores.blue} ! Victorias consecutivas : ${streak} 🏆`, null, 0xffdeae, "normal", 1);
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		announce(`🔵 Equipo azul padreando 😴 ${scores.blue} - ${scores.red} ! Victorias consecutivas : ${streak} 🏆`, null, 0xffdeae, "normal", 1);
	}
	else {
		streak = 0;
		room.sendChat("💤 Límite de empate, terminado! 💤");
    }
    room.sendChat("⭐ Posesión del balón : 🔴 " + (Rposs*100).toPrecision(3).toString() + "% : " + (Bposs*100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " y " + GKList[1].name + " mantuvieron la valla invicta ! ") : room.sendChat("🏆 " + GKList[1].name + " mantuvo la valla invicta ! ")) : scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " mantuvo la valla invicta ! ") : null;
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

function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	announce(`Modo lento activado (2 segundos)`, null, 0xff9999, "normal", 2);	
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		announce(`Modo terminado`, null, 0xff9999, "normal", 2);
	
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
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", Muevete ctm o te kickeo " + Math.floor(afkLimit / 3) + " segundos, seras kickeado!", extendedP[i][eP.ID]);
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
					room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
			else {
				if (scores.red - scores.blue == 2) {
					endGame(Team.RED);
					room.sendChat("🤖 Abandono detectado. Juego terminado 🤖");
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
			room.sendChat("no hay mas opción, ete yera ...");
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
				room.sendChat("equilibrando equipos siuuu");
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

function choosePlayer() {
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length != 0) {
		room.sendChat("[PV] elija el número para elejir al jugador mi rey, o use 'top', 'random' o 'bottom'.", teamR[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] apurate wn @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
	}
	else if (teamB.length < teamR.length && teamB.length != 0) {
		room.sendChat("[PV] elija el número para elejir al jugador mi rey, o use 'top', 'random' o 'bottom'.", teamB[0].id);
		timeOutCap = setTimeout(function (player) { room.sendChat("[PV] apurate wn @" + player.name + ", solo quedan " + Number.parseInt(chooseTime / 2) + " segundos para elegir !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
	}
	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
	var cstm = "[PV] Jugadores : ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			room.sendChat(cstm, player.id);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
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
	announce(`¡Bienvenido al host 3v3 de ACF ${player.name}! Haz !help para ver los comandos disponibles.`, player.id, 0xDFFF00, "normal", 1);
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
		room.sendChat(changedPlayer.name + " está raja durmiendo !");
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
      color = "0xFF6347"; // Rojo
      emoji = "🧑🏻";
      break;
    case victorias < 6:
      rango = "Aficionado";
      color = "0xF7BD56"; // Naranjo claro
      emoji = "⚽";
      break;
    case victorias < 10:
    	rango = "Principiante";
    	color = "0x03AC13"; // Verde Claro
    	emoji = "🎈";
    	break;
    case victorias < 13:
    	rango = "Potencia";
    	color = "0xB0FC38";
    	emoji = "📈";
    	break;
    case victorias < 17:
    	rango = "Talentoso";
    	color = "0x008B8B";
    	emoji = "💫";
    	break;
    case victorias < 25:
    	rango = "Crack del Barrio";
    	color = "0x00FEFC";
    	emoji = "✨";
    	break;
    case victorias < 35:
    	rango = "Pichichi";
    	color = "0xFAE29C";
    	emoji = "🎆";
    	break;
    case victorias < 50:
    	rango = "Maestro el balón";
    	color = "0xF9E076";
    	emoji= "🎱";
    	break;
    case victorias < 70:
    	rango = "Dominante de la Esférica";
    	color = "0xA1045A";
    	emoji = "💤";
    	break;
    case victorias < 100:
    	rango = "El 10";
    	color = "0xA32CC4";
    	emoji = "🎢";
    	break;
    case victorias < 125:
    	rango = "Crack";
    	color = "0x710193";
    	emoji = "🎪";
    	break;
    case victorias < 150:
    	rango = "Maestro de la Pichanga";
    	color = "0xB65FCF";
    	emoji = "🎇";
    	break;
    case victorias < 200:
    	rango = "Relámpago";
    	color = "0xA45EE5"
    	emoji = "⚡";
    	break;
    case victorias < 250:
    	rango = "Ídolo Mundial";
    	color = "0xDB0F07";
    	emoji = "🚗";
    	break;
    case victorias < 300:
    	rango = "Astro futbolero";
    	color = "0x187DE9";
    	emoji = "🎆🎆";
    	break;
    case victorias < 500:
    	rango = "Dios de la Cancha";
    	color = "0xFFD700";
    	emoji = "✨✨✨";
    	break;
    case victorias < 666:
    	rango = "Demonio Viviente";
    	color = "0xFF0000";
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
		announce(`Comandos disponibles: !help, !afk, !me, !discord, !bb, !mostrarrangos`, player.id, 0x00FFFF, "normal", 1);
		player.admin ? announce(`Comandos disponibles para admins: !clearbans, !bans`, player.id, 0xFFFF99, "normal", 1) : null;
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
		setAFK(player, !getAFK(player));
		room.sendChat(player.name + (getAFK(player) ? " se puso a dormir raja" : " está listo para jugar"));
		getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
	}
	else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
		var cstm = "Lista de AFK : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
			}
		}
		if (cstm == "Lista de AFK : ") {
			room.sendChat("ni un wn afk !", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!me"].includes(message[0].toLowerCase())) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		announce(`[PV] ${player.name} > PJ: ${stats[Ss.GA]}, Victorias: ${stats[Ss.WI]}, Empates: ${stats[Ss.DR]}, Derrotas: ${stats[Ss.LS]}, WR: ${stats[Ss.WR]}%, Goles: ${stats[Ss.GL]}, Asistencias: ${stats[Ss.AS]}, GK: ${stats[Ss.GK]}, CS: ${stats[Ss.CS]}, CS%: ${stats[Ss.CP]}%`, player.id, 0xFFFF00, "normal", 1);
	}
	else if (["!discord"].includes(message[0].toLowerCase())) {
		announce(`Discord de la Asociacion Chilena de Futsal: https://discord.gg/JzCH2BnGHn`, null, 0x00FF00, "normal", 2);	
	}
	else if (["!mostrarrangos"].includes(message[0].toLowerCase())) {
		announce(`🧑🏻 [Malisimo]: 3 Victorias, ⚽ [Aficionado]: 6 Victorias, 🎈 [Principiante]: 10 Victorias, 📈 [Potencia]: 13 Victorias, 💫 [Talentoso]: 17 Victorias, ✨ [Crack del Barrio]: 25 Victorias, 🎆 [Pichichi]: 35 Victorias, 🎱 [Maestro del Balón]: 50 Victorias, 💤 [Dominante de la Esférica]: 70 Victorias, 🎢 [El 10]: 100 Victorias, 🎪 [Crack]: 125 Victorias, 🎇 [Maestro de la Pichanga]: 150 Victorias, ⚡ [Relámpago]: 200 Victorias, 🚗 [Ídolo Mundial]: 250 Victorias, 🎆🎆 [Astro Futbolero]: 300 Victorias, ✨✨✨ [Dios de la Cancha]: 500 Victorias, 😈😈😈 [Demonio Viviente]: 666 Victorias.`, player.id, 0xFFBF00, "normal", 2);	
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
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es el administrador del host !");
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
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Ya no es administrador del host !");
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] Lista de muteados : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Lista de Muteados : ") {
			room.sendChat("[PV] No hay nadie en la lista de muteados !", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				room.sendChat("Modo lento activado (2 segundos)!");
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						room.sendChat(slowMode + " segundos, modo lento activado !");
						return false;
					}
				}
				slowMode = 2;
				room.sendChat("Modo lento activado (2 segundos)!");
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
		if (banList.length == 0) {
			room.sendChat("[PV] No hay nadie en la lista de baneados!", player.id);
			return false;
		}
		var cstm = "[PV] Lista de baneados : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
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
							room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
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
					room.sendChat(player.name + " elegiste Top !");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					redCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " elegiste Random, eri cruel !");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
					redCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " elegiste Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("Ese numero no es valido hermno!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						room.sendChat(player.name + " se culeó a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
						return false;
					}
				}
			}
			if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.BLUE);
					blueCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " seleccionó Top !");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
					blueCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " seleccionó Random !");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
					blueCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendChat(player.name + " seleccionó Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendChat("numero invalido hermano", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						room.sendChat(player.name + " se cumeo " + teamS[Number.parseInt(message[0]) - 1].name + " !");
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
		room.sendChat("Usted está muteado.", player.id);
		return false;
	}
	finalmessage = "";
	for(i = 0; i < message.length; i++){
		finalmessage = finalmessage + message[i] + " ";
	}
	if(player.admin){
		announce(`👓 [Admin] ${player.name}: ${finalmessage}`, null, 0xFF00FF, "normal", 1);
	} else {

		finalmessage = "";
		for(i = 0; i < message.length; i++){
			finalmessage = finalmessage + message[i] + " ";
		}
		var stats;
    	localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		announce(`${obtenerRango(stats[Ss.WI]).emoji} [${obtenerRango(stats[Ss.WI]).rango}] ${player.name}: ${finalmessage}`, null, obtenerRango(stats[Ss.WI]).color, "normal", 1);
	}
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
	return false;
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
			announce(`⚽ ${getTime(scores)} Golazo de ${lastPlayersTouched[0].name} ! Asistencia de ${lastPlayersTouched[1].name}. Velocidad de tiro: ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "normal", 1);
			// room.sendChat("⚽ " + getTime(scores) + " GAAAAAL de " + lastPlayersTouched[0].name + " ! Asistencia de " + lastPlayersTouched[1].name + ". Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		}
		else {
			announce(`⚽ ${getTime(scores)} Golazo de ${lastPlayersTouched[0].name} !  Velocidad de tiro: ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "normal", 1);

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
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.sendChat("q tratai de hacer wn, no podi", byPlayer.id);
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