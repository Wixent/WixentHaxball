// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "⭐ ACF | 4v4 ⭐";
const botName = "Árbitro del Bajo";
const maxPlayers = 30;
const roomPublic = true;
const geo = [{"code": "CL", "lat": -33.448907, "lon": -70.66926}];

const room = HBInit({ token: roomArgs['token'], roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = "adminhost";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"Futsal No Goals GLH","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":369,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":369,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"line","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"line","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":26,"v1":27,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":27,"v1":28,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":31,"v1":32,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":34,"v1":35,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":36,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":39,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":35,"v1":39,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":41,"v1":40,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":46,"v1":47,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":53,"v1":52,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":52,"v1":53,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":55,"v1":54,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":60,"v1":61,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":63,"v1":62,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":68,"v1":69,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":71,"v1":70,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":76,"v1":77,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":79,"v1":78,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":109,"v1":108,"x":369},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":111,"v1":110,"x":-370},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":371,"_selected":true},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FF0022","bCoef":0.4,"invMass":1.5,"damping":0.99}}'

var classicMap = '{"name":"Futsal x3 | ACF","width":630,"height":280,"spawnDistance":350,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-550,"y":240,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":-550,"y":80,"trait":"ballArea"},{"x":-550,"y":-80,"trait":"ballArea"},{"x":-550,"y":-240,"trait":"ballArea","color":"FFFFFF","vis":true,"curve":0},{"x":550,"y":240,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":550,"y":80,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":550,"y":-80,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":550,"y":-240,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":0,"y":270,"bCoef":0,"trait":"kickOffBarrier","color":"FFFFFF","vis":false},{"x":0,"y":80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true},{"x":0,"y":80,"bCoef":0,"trait":"kickOffBarrier","color":"FFFFFF","vis":false},{"x":-557,"y":-80,"trait":"goalNet","color":"FFFFFF"},{"x":-580,"y":-80,"trait":"goalNet","color":"FFFFFF"},{"x":-580,"y":80,"trait":"goalNet","color":"FFFFFF"},{"x":-557,"y":80,"trait":"goalNet","color":"FFFFFF"},{"x":557,"y":-80,"trait":"goalNet","color":"FFFFFF"},{"x":580,"y":-80,"trait":"goalNet","color":"FFFFFF"},{"x":580,"y":80,"trait":"goalNet","color":"FFFFFF"},{"x":557,"y":80,"trait":"goalNet","color":"FFFFFF"},{"x":-550,"y":-160,"trait":"fieldArea"},{"x":-550,"y":160,"trait":"fieldArea"},{"x":-550,"y":-80,"trait":"fieldArea"},{"x":-490,"y":-80,"trait":"fieldArea"},{"x":-490,"y":80,"trait":"fieldArea"},{"x":-550,"y":80,"trait":"fieldArea"},{"x":550,"y":-160,"trait":"fieldArea"},{"x":550,"y":160,"trait":"fieldArea"},{"x":550,"y":-80,"trait":"fieldArea"},{"x":490,"y":-80,"trait":"fieldArea"},{"x":490,"y":80,"trait":"fieldArea"},{"x":550,"y":80,"trait":"fieldArea"},{"x":-420,"y":0,"trait":"penaltyMark","color":"FFFFFF"},{"x":-422,"y":0,"trait":"penaltyMark","color":"FFFFFF"},{"x":420,"y":0,"trait":"penaltyMark"},{"x":422,"y":0,"trait":"penaltyMark"},{"x":-1,"y":0,"trait":"centerMark"},{"x":2,"y":0,"trait":"centerMark"},{"x":-548,"y":-230,"trait":"cornerCurve"},{"x":-540,"y":-238,"trait":"cornerCurve"},{"x":548,"y":-230,"trait":"cornerCurve"},{"x":540,"y":-238,"trait":"cornerCurve"},{"x":-548,"y":230,"trait":"cornerCurve","curve":90},{"x":-540,"y":238,"trait":"cornerCurve","curve":90},{"x":548,"y":230,"trait":"cornerCurve"},{"x":540,"y":238,"trait":"cornerCurve"},{"x":-550,"y":-197,"trait":"fieldArea","curve":90},{"x":-409,"y":-54,"trait":"fieldArea","curve":90},{"x":550,"y":-174,"trait":"fieldArea"},{"x":551,"y":171,"trait":"fieldArea"},{"x":-550,"y":87,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","vis":true},{"x":557,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":557,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":557,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":557,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-555,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-555,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-557,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-557,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-409,"y":44,"trait":"fieldArea","curve":90},{"x":-550,"y":206,"trait":"fieldArea","curve":90},{"x":549,"y":-196,"trait":"fieldArea","curve":-90},{"x":409,"y":-55,"trait":"fieldArea","curve":-90},{"x":409,"y":43,"trait":"fieldArea","curve":-90},{"x":550,"y":201,"trait":"fieldArea","curve":-90},{"x":557,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":556,"y":92,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":555,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":554,"y":92,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":554,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":553,"y":92,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":554,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":553,"y":92,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":552,"y":-90,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":551,"y":92,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-557,"y":94,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-555,"y":94,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-553,"y":94,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-551,"y":94,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":558,"y":-89,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":557,"y":93,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-551,"y":88,"bCoef":0.1,"trait":"line"},{"x":-553,"y":88,"bCoef":0.1,"trait":"line"},{"x":-555,"y":88,"bCoef":0.1,"trait":"line"},{"x":-557,"y":88,"bCoef":0.1,"trait":"line"},{"x":557,"y":-88,"bCoef":0.1,"trait":"line"},{"x":557,"y":90,"bCoef":0.1,"trait":"line"},{"x":555,"y":-88,"bCoef":0.1,"trait":"line"},{"x":555,"y":90,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":550,"y":81,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":550,"y":-74,"bCoef":0.1,"trait":"line"},{"x":550,"y":-56,"bCoef":0.1,"trait":"line"},{"x":550,"y":-31,"bCoef":0.1,"trait":"line"},{"x":550,"y":-13,"bCoef":0.1,"trait":"line"},{"x":550,"y":11,"bCoef":0.1,"trait":"line"},{"x":550,"y":29,"bCoef":0.1,"trait":"line"},{"x":550,"y":55,"bCoef":0.1,"trait":"line"},{"x":550,"y":73,"bCoef":0.1,"trait":"line"},{"x":-282,"y":-1,"trait":"penaltyMark","color":"FFFFFF"},{"x":-284,"y":-1,"trait":"penaltyMark","color":"FFFFFF"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","curve":0},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","curve":0},{"x":551,"y":-240,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","curve":0},{"x":283,"y":0,"trait":"penaltyMark"},{"x":285,"y":0,"trait":"penaltyMark"},{"x":-550,"y":-86,"trait":"ballArea","color":"FFFFFF","vis":true},{"x":-550,"y":-239,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","vis":true},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"FFFFFF","vis":true},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"FFFFFF","vis":true},{"x":-550,"y":-73,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-55,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-30,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-12,"bCoef":0.1,"trait":"line"},{"x":-550,"y":12,"bCoef":0.1,"trait":"line"},{"x":-550,"y":30,"bCoef":0.1,"trait":"line"},{"x":-550,"y":56,"bCoef":0.1,"trait":"line"},{"x":-550,"y":74,"bCoef":0.1,"trait":"line"},{"x":0,"y":240,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true},{"x":0,"y":80,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true},{"x":0,"y":-80,"bCoef":0,"trait":"kickOffBarrier","color":"FFFFFF","vis":false},{"x":0,"y":-270,"bCoef":0,"trait":"kickOffBarrier","color":"FFFFFF","vis":false},{"x":0,"y":-80,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true},{"x":0,"y":-240,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true},{"x":0,"y":80,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true},{"x":0,"y":-80,"bCoef":0,"trait":"line","color":"FFFFFF","vis":true}],"segments":[{"v0":4,"v1":5,"vis":true,"color":"FFFFFF","trait":"ballArea"},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","trait":"ballArea"},{"v0":12,"v1":13,"color":"FFFFFF","trait":"goalNet"},{"v0":13,"v1":14,"curve":0,"color":"FFFFFF","trait":"goalNet"},{"v0":14,"v1":15,"color":"FFFFFF","trait":"goalNet"},{"v0":16,"v1":17,"color":"FFFFFF","trait":"goalNet"},{"v0":17,"v1":18,"color":"FFFFFF","trait":"goalNet"},{"v0":18,"v1":19,"color":"FFFFFF","trait":"goalNet"},{"v0":32,"v1":33,"color":"FFFFFF","trait":"penaltyMark"},{"v0":34,"v1":35,"color":"e0eee0","trait":"penaltyMark"},{"v0":36,"v1":37,"color":"e0eee0","trait":"centerMark"},{"v0":38,"v1":39,"curve":-80,"color":"e0eee0","trait":"cornerCurve"},{"v0":40,"v1":41,"curve":80,"color":"e0eee0","trait":"cornerCurve"},{"v0":42,"v1":43,"curve":90,"color":"e0eee0","trait":"cornerCurve"},{"v0":44,"v1":45,"curve":-80,"color":"e0eee0","trait":"cornerCurve"},{"v0":9,"v1":10,"curve":180,"vis":true,"color":"FFFFFF","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"vis":true,"color":"FFFFFF","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":90,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":50,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":51,"v1":52,"vis":false,"color":"CCCCFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557},{"v0":53,"v1":54,"vis":false,"color":"CCCCFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557},{"v0":55,"v1":56,"vis":false,"color":"CCCCFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-555},{"v0":57,"v1":58,"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557},{"v0":59,"v1":60,"curve":90,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":47,"v1":59,"curve":0,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":61,"v1":62,"curve":-90,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":63,"v1":64,"curve":-90,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"e0eee0","trait":"fieldArea"},{"v0":89,"v1":90,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":550},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line","x":550},{"v0":93,"v1":94,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line","x":550},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line","x":550},{"v0":97,"v1":98,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line","x":550},{"v0":99,"v1":100,"color":"FFFFFF","trait":"penaltyMark"},{"v0":101,"v1":102,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"v0":103,"v1":104,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"v0":105,"v1":106,"color":"e0eee0","trait":"penaltyMark"},{"v0":108,"v1":107,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":110,"v1":109,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-550},{"v0":111,"v1":112,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line"},{"v0":113,"v1":114,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line"},{"v0":115,"v1":116,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line"},{"v0":117,"v1":118,"curve":0,"vis":true,"color":"CF0000","bCoef":0.1,"trait":"line"},{"v0":11,"v1":8,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"kickOffBarrier"},{"v0":120,"v1":119,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":122,"v1":121,"curve":0,"vis":false,"color":"FFFFFF","bCoef":0,"trait":"kickOffBarrier"},{"v0":124,"v1":123,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":126,"v1":125,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"}],"goals":[{"p0":[-550,84],"p1":[-550,-76],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FFFFFF","trait":"goalPost","vis":false},{"radius":5,"pos":[-550,-80],"color":"FFFFFF","bCoef":0.5,"trait":"goalPost","vis":false},{"radius":5,"pos":[550,80],"color":"FFFFFF","trait":"goalPost","vis":false},{"radius":5,"pos":[550,-80],"color":"FFFFFF","trait":"goalPost","vis":false}],"planes":[{"normal":[0,1],"dist":-240,"cGroup":["ball"],"trait":"ballArea"},{"normal":[0,-1],"dist":-240,"cGroup":["ball"],"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"fieldArea":{"vis":true,"cGroup":[""]},"centerMark":{"vis":true,"cGroup":[""]},"fieldCurve":{"vis":true,"cGroup":[""]},"cornerCurve":{"vis":true,"cGroup":[""]},"penaltyMark":{"vis":true,"cGroup":[""]},"line":{"vis":true,"bCoef":0,"cMask":[""]}},"ballPhysics":{"radius":6.25,"color":"FFFFFF", "bCoef": 0.4, "invMass": 1.5},"playerPhysics":{"acceleration":0.11, "bCoef": 0.1,"kickingAcceleration":0.083,"kickStrength":5}}'
var bigMap = '{"name": "Futsal x4 | ACF",	"canBeStored": false,	"width": 765,	"height": 350,	"bg": {		"type": "none",		"height": 0,		"width": 0,		"cornerRadius": 0,		"kickOffRadius": 0,		"color": "444444"	},	"vertexes": [		{			"x": 0,			"y": -350,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": -700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": -700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff",			"pos": [				700,				-90			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -480,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": -480,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "F94323",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 0,			"y": 320,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 350,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"cMask": [],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": 735,			"y": -350,			"bCoef": 0.5,			"cMask": [				"red",				"blue"			]		},		{			"x": -700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -699.8853604959578,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "8895ff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": 700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -300,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": -680,			"y": -320,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 680,			"y": -320,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": -300,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -50,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -70,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 15,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 15,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -20,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": -20,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -40,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": -60,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": 30,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 70,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 70,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30.35428038352591,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"segments": [		{			"v0": 0,			"v1": 1,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 2,			"v1": 3,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 3,			"v1": 4,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 4,			"v1": 5,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 6,			"v1": 7,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 7,			"v1": 8,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 8,			"v1": 9,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 10,			"v1": 11,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 12,			"v1": 13,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 14,			"v1": 15,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": 240		},		{			"v0": 16,			"v1": 17,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 18,			"v1": 19,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 20,			"v1": 21,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": -240		},		{			"v0": 22,			"v1": 23,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 24,			"v1": 25,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 26,			"v1": 27,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 28,			"v1": 29,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 30,			"v1": 31,			"curve": 0,			"vis": true,			"color": "CE142E",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -550		},		{			"v0": 34,			"v1": 35,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 36,			"v1": 37,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 35,			"v1": 37,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 38,			"v1": 39,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 40,			"v1": 41,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 42,			"v1": 43,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 45,			"v1": 44,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 44,			"v1": 45,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 47,			"v1": 46,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 46,			"v1": 47,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 50,			"v1": 49,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 49,			"v1": 50,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 52,			"v1": 51,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 51,			"v1": 52,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 54,			"v1": 55,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 55,			"v1": 56,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 56,			"v1": 57,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 58,			"v1": 59,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 59,			"v1": 60,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 60,			"v1": 61,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 62,			"v1": 63,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 64,			"v1": 65,			"curve": 179.42829117403,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"blueKO"			],			"curveF": 0.0049891420830909		},		{			"v0": 67,			"v1": 66,			"curve": 180,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO"			],			"curveF": 6.1232339957368e-17		},		{			"v0": 72,			"v1": 73,			"curve": -180,			"vis": true,			"color": "B6B6B8",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 74,			"v1": 75,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 76,			"v1": 77,			"curve": -180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 81,			"v1": 80,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 82,			"v1": 83,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 84,			"v1": 85,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 86,			"v1": 87,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 88,			"v1": 89,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 90,			"v1": 91,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 93,			"v1": 99,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 54,			"v1": 97,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 98,			"v1": 95,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 100,			"v1": 101,			"curve": 0,			"vis": true,			"color": "6973C4",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 103,			"v1": 107,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 102,			"v1": 105,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 106,			"v1": 104,			"curve": 0,			"vis": true,			"color": "8895ff",			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 109,			"v1": 108,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 108,			"v1": 109,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 111,			"v1": 110,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 110,			"v1": 111,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 112,			"v1": 113,			"curve": -90,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 119,			"v1": 118,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 117,			"v1": 116,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 114,			"v1": 115,			"curve": -90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 109,			"v1": 108,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 111,			"v1": 110,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 120,			"v1": 121,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 122,			"v1": 120,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 126,			"v1": 124,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 123,			"v1": 125,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 125,			"v1": 126,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 128,			"v1": 127,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 129,			"v1": 130,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 131,			"v1": 129,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 132,			"v1": 133,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"planes": [		{			"normal": [				0,				1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-350					],					"b": [						457.4564698855129,						-350					]				}			}		},		{			"normal": [				-1,				0			],			"dist": -784,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						-1,						0					],					"dist": -784,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						784,						-204.22163834174683					],					"b": [						784,						204.22163834174683					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						320					],					"b": [						457.4564698855129,						320					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						350					],					"b": [						457.4564698855129,						350					]				}			}		},		{			"normal": [				1,				0			],			"dist": -777,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						1,						0					],					"dist": -777,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-777,						-204.22163834174683					],					"b": [						-777,						204.22163834174683					]				}			}		},		{			"normal": [				0,				1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-320					],					"b": [						457.4564698855129,						-320					]				}			}		}	],	"goals": [		{			"p0": [				-707.5,				-90			],			"p1": [				-707.5,				90			],			"team": "red",			"color": "ffffff"		},		{			"p0": [				707.5,				90			],			"p1": [				707.5,				-90			],			"team": "blue",			"color": "ffffff"		}	],	"discs": [		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				90			],			"color": "F94323",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				-90			],			"color": "F94323",			"trait": "goalPost",			"y": -85,			"x": -560		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				90			],			"color": "8895ff",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				-90			],			"color": "8895ff",			"trait": "goalPost",			"y": -85,			"vis": true		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		}	],	"playerPhysics": {		"bCoef": 0.1,		"acceleration": 0.11,		"kickingAcceleration": 0.083,		"kickStrength": 5,		"radius": 15,		"invMass": 0.5,		"damping": 0.96,		"cGroup": [			"red",			"blue"		],		"gravity": [			0,			0		],		"kickingDamping": 0.96,		"kickback": 0	},	"ballPhysics": {		"radius": 6.25,		"bCoef": 0.4,		"invMass": 1.5,		"color": "FFCC00",		"cMask": [			"all"		],		"damping": 0.99,		"gravity": [			0,			0		],		"cGroup": [			"ball"		]	},	"spawnDistance": 200,	"traits": {		"ballArea": {			"vis": false,			"bCoef": 1,			"cMask": [				"ball"			]		},		"goalPost": {			"radius": 8,			"invMass": 0,			"bCoef": 0.5		},		"goalNet": {			"vis": true,			"bCoef": 0.1,			"cMask": [				"ball"			]		},		"line": {			"vis": true,			"bCoef": 0.1,			"cMask": [				""			]		},		"kickOffBarrier": {			"vis": false,			"bCoef": 0.1,			"cGroup": [				"redKO",				"blueKO"			],			"cMask": [				"red",				"blue"			]		}	},	"joints": [],	"redSpawnPoints": [],	"blueSpawnPoints": [],	"cameraWidth": 0,	"cameraHeight": 0,	"maxViewWidth": 0,	"cameraFollow": "ball",	"kickOffReset": "partial"}}'
/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
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
		room.sendChat("🔴 GANO ROJO CSM" + scores.red + "-" + scores.blue + " ! Victorias consecutivas : " + streak + " 🏆");
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		room.sendChat("🔵 GANO AZUL CSM " + scores.blue + "-" + scores.red + " ! Victorias consecutivas : " + streak + " 🏆");
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
	room.sendChat("Modo lento activado (2 segundos)!");
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		room.sendChat("Modo lento terminado.");
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

setInterval(() => {
	var tableau = [];
	if (statNumber % 5 == 0) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 1) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 2) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 3) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 4) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	updateRoleOnPlayerIn();
	room.sendChat("👋 wena wena  " + player.name + " ! Escribe '!help' para ver los comandos.", player.id);
	if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
			room.setPlayerAdmin(player.id, true);
			room.sendChat((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "Master " : "Admin ") + player.name + " se conectó el admin !");
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

room.onPlayerChat = function (player, message) {
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!help"].includes(message[0].toLowerCase())) {
		room.sendChat("Comandos : !me, !games, !wins, !goals, !assists, !discord, !afks, !mutes, !bans.", player.id);
		player.admin ? room.sendChat("Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
	}
	else if (["!afk"].includes(message[0].toLowerCase())) {
		if (players.length != 1 && player.team != Team.SPECTATORS) {
			if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			else {
				room.sendChat("Te parieron por el oyo? Aweonao, no te podi poner afk si ya etai jugando en un equipo", player.id);
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
		room.sendChat("[PV] " + player.name + "> PJ: " + stats[Ss.GA] + ", Victorias: " + stats[Ss.WI] + ", Empates: " + stats[Ss.DR] + ", Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Goles: " + stats[Ss.GL] + ", Asistencias: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", player.id);
	}
	else if (["!games"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			room.sendChat("Aún no se han jugado partidos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!wins"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!goals"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!assists"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			room.sendChat("[PV] Aún no se han jugado partidos suficientes.", player.id);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("[PV] Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
	}
	else if (["!discord"].includes(message[0].toLowerCase())) {
		room.sendChat("Discord de la Asociacion Chilena de Futsal: " + "https://discord.gg/JzCH2BnGHn")
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				room.sendChat(player.name + " is now a room master !");
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
	else if (["!mute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			updateTeams();
			var timeOut;
			if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
				if (Number.parseInt(message[1]) > 0) {
					timeOut = Number.parseInt(message[1]) * 60 * 1000;
				}
				else {
					timeOut = 3 * 60 * 1000;
				}
				if (message[2].length > 1 && message[2][0] == "#") {
					message[2] = message[2].substring(1, message[2].length);
					if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
						if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
						setMute(room.getPlayer(Number.parseInt(message[2])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " ha sido muteado por " + (timeOut / 60000) + " minutos !");
					}
				}
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
						setMute(room.getPlayer(Number.parseInt(message[1])), true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Te han muteado por 3 minutos!");
					}
				}
			}
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin && message.length >= 2) {
			if (message[1] == "all") {
				extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
				room.sendChat("Se ha limpiado la lista de muteados");
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado !");
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado!");
					}
				}
			}
		}
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
				room.sendChat("Bans removidos!");
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
			room.sendChat("⚽ " + getTime(scores) + " GAAAAAL de " + lastPlayersTouched[0].name + " ! Asistencia de " + lastPlayersTouched[1].name + ". Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		}
		else {
			room.sendChat("⚽ " + getTime(scores) + " Meo rifle del" + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
		}
	}
	else {
		room.sendChat("😂 " + getTime(scores) + " Q wea hiciste XD " + lastPlayersTouched[0].name + " ! Velocidad de tiro : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"));
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