// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "🌟⠀⠀⭐𝗘𝗟 𝗛𝗢𝗦𝗧 𝗗𝗘 𝗡𝗔𝗩𝗜 𝘹4⭐⠀⠀🌟";
const botName = "Navibot⭐";
const maxPlayers = 20;
const roomPublic = true;
const geo = [{"code": "ar", "lat": -34.603745496122286, "lon": -58.3815677203902 }
];

const room = HBInit({token: roomArgs['token'], roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });


const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 4;

room.setTeamsLock(true);

var adminPassword = "craiywixent4ever";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"Futsal No Goals GLH","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":369,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":369,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"line","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"line","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":26,"v1":27,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":27,"v1":28,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":31,"v1":32,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":34,"v1":35,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":36,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":39,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":35,"v1":39,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":41,"v1":40,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":46,"v1":47,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":53,"v1":52,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":52,"v1":53,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":55,"v1":54,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":60,"v1":61,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":63,"v1":62,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":68,"v1":69,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":71,"v1":70,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":76,"v1":77,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":79,"v1":78,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":109,"v1":108,"x":369},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":111,"v1":110,"x":-370},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":371,"_selected":true},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FF0022","bCoef":0.4,"invMass":1.5,"damping":0.99}}'

var classicMap = '{"name":"Futsal 1v1 Navi\u2b50 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":180,"bg":{"type":"none","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0,"color":"414446"},"vertexes":[{"x":-368,"y":171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"curve":0},{"x":-368,"y":50,"bCoef":1.15,"cMask":["ball"],"trait":"line","curve":0,"color":"FF0000","bias":0},{"x":-368,"y":-50,"bCoef":1.15,"cMask":["ball"],"trait":"line","curve":0,"color":"FF0000","bias":0},{"x":-368,"y":-171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"curve":0},{"x":368,"y":171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"curve":0},{"x":368,"y":50,"bCoef":1.15,"cMask":["ball"],"trait":"line","curve":0,"color":"FF0000","bias":0},{"x":368,"y":-50,"bCoef":1.15,"cMask":["ball"],"trait":"line","curve":0,"color":"FF0000","bias":0},{"x":368,"y":-171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"curve":0},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":60,"trait":"kickOffBarrier"},{"x":0,"y":-60,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"x":-390,"y":-50,"bCoef":0.1,"cMask":["ball"],"trait":"line","curve":0},{"x":390,"y":-50,"bCoef":0.1,"cMask":["ball"],"trait":"line","curve":0},{"x":-390,"y":50,"bCoef":0.1,"cMask":["ball"],"trait":"line","curve":0},{"x":390,"y":50,"bCoef":0.1,"cMask":["ball"],"trait":"line","curve":0},{"x":368,"y":171,"bCoef":1.15,"trait":"ballArea"},{"x":368,"y":-171,"bCoef":1.15,"trait":"ballArea"},{"x":0,"y":-60,"bCoef":0,"trait":"line"},{"x":0,"y":-171,"bCoef":0,"trait":"line"},{"x":0,"y":60,"trait":"kickOffBarrier"},{"x":0,"y":-60,"trait":"kickOffBarrier"},{"x":375,"y":-50.5,"bCoef":1.15,"cMask":["ball"],"trait":"line","bias":0,"_data":{"mirror":[]}},{"x":375,"y":-190,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"_data":{"mirror":[]}},{"x":-375,"y":-50,"bCoef":1.15,"cMask":["ball"],"trait":"line","bias":0},{"x":-375,"y":-190,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0},{"x":-375,"y":50,"bCoef":1.15,"cMask":["ball"],"trait":"line","bias":0},{"x":-375,"y":190,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0},{"x":375,"y":49.5,"bCoef":1.15,"cMask":["ball"],"trait":"line","bias":0,"_data":{"mirror":[]}},{"x":375,"y":190,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"_data":{"mirror":[]}},{"x":0,"y":60,"bCoef":0,"trait":"line"},{"x":0,"y":171,"bCoef":0,"trait":"line"},{"x":355,"y":-171,"bCoef":1,"trait":"line","curve":-90},{"x":368,"y":-155,"bCoef":1,"trait":"line","curve":-90},{"x":355,"y":171,"bCoef":1,"trait":"line","curve":90},{"x":368,"y":155,"bCoef":1,"trait":"line","curve":90},{"x":-355,"y":-171,"bCoef":1,"trait":"line","curve":90},{"x":-368,"y":-155,"bCoef":1,"trait":"line","curve":90},{"x":-355,"y":171,"bCoef":1,"trait":"line","curve":-90},{"x":-368,"y":155,"bCoef":1,"trait":"line","curve":-90},{"x":-369,"y":120,"bCoef":0,"trait":"line"},{"x":-240,"y":120,"bCoef":0,"trait":"line"},{"x":-240,"y":-120,"bCoef":0,"trait":"line"},{"x":-369,"y":-120,"bCoef":0,"trait":"line"},{"x":369,"y":120,"bCoef":0,"trait":"line"},{"x":240,"y":120,"bCoef":0,"trait":"line"},{"x":240,"y":-120,"bCoef":0,"trait":"line"},{"x":369,"y":-120,"bCoef":0,"trait":"line"},{"x":-200,"y":4.1674977626914815,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":-4.121224200914112,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":4.1674977626914815,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":-4.121224200914112,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":2.838525797530046,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":-2.7922522357526764,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":2.838525797530046,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":-2.7922522357526764,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":2.064135415426238,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":-2.0178618536488684,"bCoef":0,"trait":"line","curve":180},{"x":-200,"y":2.064135415426238,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":-2.0178618536488684,"bCoef":0,"trait":"line","curve":-180},{"x":-200,"y":-4.576010118130402,"bCoef":0,"trait":"line"},{"x":-200,"y":4.1674977626914815,"bCoef":0,"trait":"line"},{"x":-140,"y":4.23101133491441,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":-4.188268093028385,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":4.23101133491441,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":-4.188268093028385,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":2.881106442975053,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":-2.8383632010890283,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":2.881106442975053,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":-2.8383632010890283,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":2.09451846935611,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":-2.0517752274700847,"bCoef":0,"trait":"line","curve":180},{"x":-140,"y":2.09451846935611,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":-2.0517752274700847,"bCoef":0,"trait":"line","curve":-180},{"x":-140,"y":-4.650217442246463,"bCoef":0,"trait":"line"},{"x":-140,"y":4.23101133491441,"bCoef":0,"trait":"line"},{"x":140,"y":4.23101133491441,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":-4.188268093028385,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":4.23101133491441,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":-4.188268093028385,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":2.881106442975053,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":-2.8383632010890283,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":2.881106442975053,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":-2.8383632010890283,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":2.09451846935611,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":-2.0517752274700847,"bCoef":0,"trait":"line","curve":180},{"x":140,"y":2.09451846935611,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":-2.0517752274700847,"bCoef":0,"trait":"line","curve":-180},{"x":140,"y":-4.650217442246463,"bCoef":0,"trait":"line"},{"x":140,"y":4.23101133491441,"bCoef":0,"trait":"line"},{"x":200,"y":4.1674977626914815,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":-4.121224200914112,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":4.1674977626914815,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":-4.121224200914112,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":2.838525797530046,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":-2.7922522357526764,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":2.838525797530046,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":-2.7922522357526764,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":2.064135415426238,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":-2.0178618536488684,"bCoef":0,"trait":"line","curve":180},{"x":200,"y":2.064135415426238,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":-2.0178618536488684,"bCoef":0,"trait":"line","curve":-180},{"x":200,"y":-4.576010118130402,"bCoef":0,"trait":"line"},{"x":200,"y":4.1674977626914815,"bCoef":0,"trait":"line"},{"x":-170,"y":170,"bCoef":0,"trait":"line"},{"x":-170,"y":180,"bCoef":0,"trait":"line"},{"x":170,"y":-180,"bCoef":0,"trait":"line"},{"x":170,"y":-170,"bCoef":0,"trait":"line"},{"x":-170,"y":-180,"bCoef":0,"trait":"line"},{"x":-170,"y":-170,"bCoef":0,"trait":"line"},{"x":170,"y":170,"bCoef":0,"trait":"line"},{"x":170,"y":180,"bCoef":0,"trait":"line"},{"x":-19.46252188131078,"y":30.372470120873587,"bCoef":0,"trait":"line"},{"x":45.744951623298554,"y":-1.2613779842578374,"bCoef":0,"trait":"line"},{"x":52.0005749506039,"y":7.616972689198253,"bCoef":0,"trait":"line"},{"x":46.87844956207152,"y":16.98864057773109,"bCoef":0,"trait":"line"},{"x":-7.506995412667559,"y":41.994554952814404,"bCoef":0,"trait":"line"},{"x":-15.037602987285426,"y":41.08152522760966,"bCoef":0,"trait":"line"},{"x":-25.390926625416654,"y":19.881560736270494,"bCoef":0,"trait":"line"},{"x":-18.765315386803763,"y":23.448153184466676,"bCoef":0,"trait":"line"},{"x":39.939876182961875,"y":-4.334653217377262,"bCoef":0,"trait":"line"},{"x":42.315944921574264,"y":-10.93175157058471,"bCoef":0,"trait":"line"},{"x":12.61259634864179,"y":-43.56151186801722,"bCoef":0,"trait":"line"},{"x":-20.354339893100498,"y":-48.91603942138526,"bCoef":0,"trait":"line"},{"x":-42.73487073291313,"y":-32.60149907215044,"bCoef":0,"trait":"line"},{"x":-46.083317458976325,"y":7.925635748102641,"bCoef":0,"trait":"line"},{"x":-35.18462951551272,"y":36.98382491678377,"bCoef":0,"trait":"line"},{"x":-29.721029101078198,"y":34.93497476137083,"bCoef":0,"trait":"line"},{"x":-39.51473199117428,"y":-1.1380486804886578,"bCoef":0,"trait":"line"},{"x":-23.915953660741533,"y":-17.652179227561398,"bCoef":0,"trait":"line"},{"x":-32.111354282393265,"y":-14.787771954427395,"bCoef":0,"trait":"line"},{"x":-12.356969702813121,"y":25.580789112074342,"bCoef":0,"trait":"line"},{"x":-7.670480566770825,"y":22.358827831045254,"bCoef":0,"trait":"line"},{"x":0.09151706479927002,"y":29.242108749607404,"bCoef":0,"trait":"line"},{"x":-3.56980257273379,"y":20.45494161952807,"bCoef":0,"trait":"line"},{"x":1.9954032763164884,"y":16.354263625491036,"bCoef":0,"trait":"line"},{"x":10.78257040639585,"y":37.29701195218013,"bCoef":0,"trait":"line"},{"x":0.3844226358019309,"y":39.786709305702615,"bCoef":0,"trait":"line"},{"x":-1.5194635757152875,"y":33.34278674364443,"bCoef":0,"trait":"line"},{"x":4.631553415340219,"y":38.90799259269467,"bCoef":0,"trait":"line"},{"x":7.853514696369334,"y":14.157471842971221,"bCoef":0,"trait":"line"},{"x":14.883248400432855,"y":35.393125740662946,"bCoef":0,"trait":"line"},{"x":15.02970118593414,"y":10.05679384893418,"bCoef":0,"trait":"line"},{"x":31.8717715185862,"y":26.75241139608493,"bCoef":0,"trait":"line"},{"x":20.15554867848041,"y":33.19633395814311,"bCoef":0,"trait":"line"},{"x":18.837473608968544,"y":28.36339203659947,"bCoef":0,"trait":"line"},{"x":22.938151603005547,"y":26.166600254079633,"bCoef":0,"trait":"line"},{"x":26.01366009853335,"y":30.85308939012195,"bCoef":0,"trait":"line"},{"x":15.615512327939431,"y":22.944638973050537,"bCoef":0,"trait":"line"},{"x":20.7413598204857,"y":20.894299976032038,"bCoef":0,"trait":"line"},{"x":15.761965113440745,"y":17.818791480504267,"bCoef":0,"trait":"line"},{"x":18.983926394469858,"y":8.445813208419624,"bCoef":0,"trait":"line"},{"x":35.97244951262323,"y":25.580789112074342,"bCoef":0,"trait":"line"},{"x":24.842037814522737,"y":6.3954742114011065,"bCoef":0,"trait":"line"},{"x":33.482752159100755,"y":14.450377413973834,"bCoef":0,"trait":"line"},{"x":31.432413162082256,"y":3.027060144870692,"bCoef":0,"trait":"line"},{"x":36.26535508362586,"y":2.2947962173641008,"bCoef":0,"trait":"line"},{"x":40.80539143416691,"y":22.21237504554393,"bCoef":0,"trait":"line"},{"x":40.219580292161616,"y":-0.0484483506570621,"bCoef":0,"trait":"line"},{"x":44.02735271519595,"y":18.404602622509557,"bCoef":0,"trait":"line"},{"x":45.423430886680585,"y":-0.48780670716102126,"bCoef":0,"trait":"line"},{"x":48.542001346961236,"y":14.667310089887026,"bCoef":0,"trait":"line"},{"x":-31.540956261341123,"y":35.16427526723245,"bCoef":0,"trait":"line","curve":-180},{"x":-29.692407003442824,"y":45.94747927163925,"bCoef":0,"trait":"line","curve":-180},{"x":-31.540956261341123,"y":35.16427526723245,"bCoef":0,"trait":"line","curve":180},{"x":-29.692407003442824,"y":45.94747927163925,"bCoef":0,"trait":"line","curve":180},{"x":-375.5,"y":50,"bCoef":0,"cMask":["ball"],"trait":"line","bias":0},{"x":-375.5,"y":190,"bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0},{"x":-375.5,"y":-50,"bCoef":0,"cMask":["ball"],"trait":"line","bias":0},{"x":-375.5,"y":-190,"bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0},{"x":375.5,"y":-50.5,"bCoef":0,"cMask":["ball"],"trait":"line","bias":0,"_data":{"mirror":[]}},{"x":375.5,"y":-190,"bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"_data":{"mirror":[]}},{"x":375.5,"y":49.5,"bCoef":0,"cMask":["ball"],"trait":"line","bias":0,"_data":{"mirror":[]}},{"x":375.5,"y":190,"bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"_data":{"mirror":[]}}],"segments":[{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line"},{"v0":6,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line"},{"v0":1,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line"},{"v0":5,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line"},{"v0":12,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line","x":-585},{"v0":13,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"line","x":585},{"v0":1,"v1":0,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-368},{"v0":5,"v1":4,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":368},{"v0":2,"v1":3,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-368},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":368},{"v0":0,"v1":16,"vis":true,"color":"FFFFFF","bCoef":1.15,"trait":"ballArea","y":171},{"v0":3,"v1":17,"vis":true,"color":"FFFFFF","bCoef":1.15,"trait":"ballArea","y":-171},{"v0":18,"v1":19,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":21,"v1":20,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FF0000","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FF0000","bCoef":0,"trait":"line"},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":375,"_data":{"mirror":[],"arc":{"a":[375,-50.5],"b":[375,-190],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":24,"v1":25,"vis":false,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-375},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-375},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":0,"x":375,"_data":{"mirror":[],"arc":{"a":[375,49.5],"b":[375,190],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":0},{"v0":32,"v1":33,"curve":-90,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"line"},{"v0":34,"v1":35,"curve":90,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"line"},{"v0":36,"v1":37,"curve":90,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"line"},{"v0":38,"v1":39,"curve":-90,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"line"},{"v0":40,"v1":41,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":41,"v1":42,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":44,"v1":45,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":45,"v1":46,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":48,"v1":49,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":50,"v1":51,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":52,"v1":53,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":54,"v1":55,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":56,"v1":57,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":58,"v1":59,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":60,"v1":61,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-200},{"v0":62,"v1":63,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":64,"v1":65,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":66,"v1":67,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":68,"v1":69,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":70,"v1":71,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":72,"v1":73,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":74,"v1":75,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-140},{"v0":76,"v1":77,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":78,"v1":79,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":80,"v1":81,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":82,"v1":83,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":84,"v1":85,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":86,"v1":87,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":88,"v1":89,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":140},{"v0":90,"v1":91,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":92,"v1":93,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":96,"v1":97,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":100,"v1":101,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":102,"v1":103,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":200},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":170},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-170},{"v0":110,"v1":111,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":112,"v1":113,"curve":15.090763075121373,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":113,"v1":114,"curve":70.31349848523982,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":114,"v1":115,"curve":56.40114831568824,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":115,"v1":116,"curve":29.965376136000366,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":116,"v1":117,"curve":37.98604154425478,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":117,"v1":112,"curve":78.73460907377871,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":118,"v1":119,"curve":-82.48789137121288,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":119,"v1":120,"curve":14.268366684957316,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":120,"v1":121,"curve":-97.41522328588596,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":121,"v1":122,"curve":-15.243876207130336,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":122,"v1":123,"curve":-35.18092861058329,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":123,"v1":124,"curve":-34.46770993710692,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":124,"v1":125,"curve":-36.627642292702376,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":125,"v1":126,"curve":-14.658072934991413,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":126,"v1":127,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":127,"v1":128,"curve":24.686627118371938,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":128,"v1":129,"curve":78.33165378217288,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":130,"v1":118,"curve":-22.280313096089955,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":116,"v1":131,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":132,"v1":133,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":133,"v1":134,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":135,"v1":136,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":137,"v1":138,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":138,"v1":139,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":140,"v1":141,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":142,"v1":143,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":144,"v1":145,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":145,"v1":146,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":146,"v1":147,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":148,"v1":149,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":149,"v1":150,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":150,"v1":148,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":158,"v1":159,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":162,"v1":163,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":164,"v1":165,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":166,"v1":167,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-375.5},{"v0":168,"v1":169,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"x":-375.5},{"v0":170,"v1":171,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"x":375.5,"_data":{"mirror":[],"arc":{"a":[375.5,-50.5],"b":[375.5,-190],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":172,"v1":173,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","bias":0,"x":375.5,"_data":{"mirror":[],"arc":{"a":[375.5,49.5],"b":[375.5,190],"radius":null,"center":[null,null],"from":null,"to":null}}}],"goals":[{"p0":[-372,-52],"p1":[-372,48],"team":"red"},{"p0":[372,50],"p1":[372,-50],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,50],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[368,-50],"color":"FFFFFF","trait":"goalPost"},{"radius":3,"pos":[-368,-171],"color":"D000FE","bCoef":1,"trait":"line"},{"radius":3,"pos":[368,171],"color":"D000FE","bCoef":1,"trait":"line"},{"radius":3,"pos":[368,-171],"color":"D000FE","bCoef":1,"trait":"line"},{"radius":3,"pos":[-368,171],"color":"D000FE","bCoef":1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-171,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[-1828.0049736908152,-171],"b":[1828.0049736908152,-171]}}},{"normal":[0,-1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-171,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[-1828.0049736908152,171],"b":[1828.0049736908152,171]}}},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[-1828.0049736908152,-200],"b":[1828.0049736908152,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[-1828.0049736908152,200],"b":[1828.0049736908152,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[-420,-531.6136913284513],"b":[-420,531.6136913284513]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-1828.0049736908152,-531.6136913284513,1828.0049736908152,531.6136913284513],"a":[420,-531.6136913284513],"b":[420,531.6136913284513]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":6.5,"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"color":"FFBD00","bCoef":0.4,"cMask":["all"],"damping":0.99,"invMass":1,"gravity":[0,0],"cGroup":["ball"]},"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"kickOffReset":"partial","joints":[]}'

var bigMap = '{"name":"Futsal 4v4 Navi⭐ [ʜᴀxᴍᴏᴅs.ᴄᴏᴍ]","width":800,"height":350,"bg":{"width":700,"height":320,"kickOffRadius":100,"color":"404447"},"vertexes":[{"x":701,"y":320,"cMask":["ball"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-349,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-740,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-740,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-701,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":699,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":740,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":740,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":699,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-700,"y":80,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-80,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-319,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"cMask":["ball"]},{"x":701,"y":320,"cMask":["ball"]},{"x":700,"y":80,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-317,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-80,"bCoef":1.15,"cMask":["ball"]},{"x":-701,"y":-320,"cMask":["ball"]},{"x":698,"y":-320,"cMask":["ball"]},{"x":0,"y":-319,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-707.5,"y":80,"cMask":["ball"]},{"x":-707.5,"y":321,"cMask":["ball"]},{"x":-707.5,"y":-320,"cMask":["ball"]},{"x":-707.5,"y":-81,"cMask":["ball"]},{"x":707.5,"y":-319,"cMask":["ball"]},{"x":707.5,"y":-82,"cMask":["ball"]},{"x":707.5,"y":81,"cMask":["ball"]},{"x":707.5,"y":321,"cMask":["ball"]},{"x":0,"y":-100,"bCoef":0.1,"cMask":[]},{"x":0,"y":100,"bCoef":0.1,"cMask":[]},{"x":-700,"y":-80,"bCoef":0.1,"cMask":[]},{"x":-700,"y":80,"bCoef":0.1,"cMask":[]},{"x":700,"y":-80,"bCoef":0.1,"cMask":[]},{"x":700,"y":80,"bCoef":0.1,"cMask":[]},{"x":-700,"y":270,"bCoef":0.1,"cMask":[]},{"x":-470,"y":270,"bCoef":0.1,"cMask":[]},{"x":-700,"y":307,"bCoef":0.1,"cMask":[]},{"x":-686,"y":320,"bCoef":0.1,"cMask":[]},{"x":-700,"y":-270,"bCoef":0.1,"cMask":[]},{"x":-470,"y":-270,"bCoef":0.1,"cMask":[]},{"x":-700,"y":-305,"bCoef":0.1,"cMask":[]},{"x":-687,"y":-320,"bCoef":0.1,"cMask":[]},{"x":700,"y":-303,"bCoef":0.1,"cMask":[]},{"x":684,"y":-320,"bCoef":0.1,"cMask":[]},{"x":700,"y":306,"bCoef":0.1,"cMask":[]},{"x":687,"y":320,"bCoef":0.1,"cMask":[]},{"x":700,"y":270,"bCoef":0.1,"cMask":[]},{"x":470,"y":270,"bCoef":0.1,"cMask":[]},{"x":700,"y":-270,"bCoef":0.1,"cMask":[]},{"x":470,"y":-270,"bCoef":0.1,"cMask":[]},{"x":470,"y":270,"bCoef":0.1,"cMask":[]},{"x":470,"y":-270,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-3,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-5,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-1,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-7,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-6,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-2,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-7.5,"bCoef":0.1,"cMask":[]},{"x":-414,"y":-0.5,"bCoef":0.1,"cMask":[]},{"x":398,"y":-1,"bCoef":0.1,"cMask":[]},{"x":398,"y":-3,"bCoef":0.1,"cMask":[]},{"x":398,"y":1,"bCoef":0.1,"cMask":[]},{"x":398,"y":-5,"bCoef":0.1,"cMask":[]},{"x":398,"y":-4,"bCoef":0.1,"cMask":[]},{"x":398,"y":0,"bCoef":0.1,"cMask":[]},{"x":398,"y":-5.5,"bCoef":0.1,"cMask":[]},{"x":398,"y":1.5,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-3,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-5,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-1,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-7,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-6,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-2,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-7.5,"bCoef":0.1,"cMask":[]},{"x":-316.5,"y":-0.5,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":-1,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":-3,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":1,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":-5,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":-4,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":0,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":-5.5,"bCoef":0.1,"cMask":[]},{"x":300.5,"y":1.5,"bCoef":0.1,"cMask":[]},{"x":-387,"y":320,"bCoef":0.1,"cMask":[]},{"x":-387,"y":337,"bCoef":0.1,"cMask":[]},{"x":-701,"y":123,"bCoef":0.1,"cMask":[]},{"x":-721,"y":123,"bCoef":0.1,"cMask":[]},{"x":701,"y":123,"bCoef":0.1,"cMask":[]},{"x":719,"y":123,"bCoef":0.1,"cMask":[]},{"x":-701,"y":-123,"bCoef":0.1,"cMask":[]},{"x":-721,"y":-123,"bCoef":0.1,"cMask":[]},{"x":701,"y":-123,"bCoef":0.1,"cMask":[]},{"x":719,"y":-123,"bCoef":0.1,"cMask":[]},{"x":-380,"y":-320,"bCoef":0.1,"cMask":[]},{"x":-380,"y":-337,"bCoef":0.1,"cMask":[]},{"x":380,"y":320,"bCoef":0.1,"cMask":[]},{"x":380,"y":337,"bCoef":0.1,"cMask":[]},{"x":380,"y":-320,"bCoef":0.1,"cMask":[]},{"x":380,"y":-337,"bCoef":0.1,"cMask":[]},{"x":703,"y":-319,"bCoef":0,"cMask":["ball"]},{"x":703,"y":-82,"bCoef":0,"cMask":["ball"]},{"x":703,"y":81,"bCoef":0,"cMask":["ball"]},{"x":703,"y":321,"bCoef":0,"cMask":["ball"]},{"x":-703,"y":78,"bCoef":0,"cMask":["ball"]},{"x":-703,"y":319,"bCoef":0,"cMask":["ball"]},{"x":-703,"y":-82,"bCoef":0,"cMask":["ball"]},{"x":-703,"y":-321,"bCoef":0,"cMask":["ball"]},{"x":0.4878048780487756,"y":99.0243902439024,"cMask":["wall"]},{"x":0,"y":100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-100,"bCoef":0.15,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-29.9506661176856,"y":57.81342192253646,"bCoef":0,"cMask":["wall"]},{"x":79.90138137095887,"y":3.305419232751383,"bCoef":0,"cMask":["wall"]},{"x":91.72814218508788,"y":18.447414826930352,"bCoef":0,"cMask":["wall"]},{"x":87.016190970093,"y":27.939546339552173,"bCoef":0,"cMask":["wall"]},{"x":-8.972006708365466,"y":75.08875675592193,"bCoef":0,"cMask":["wall"]},{"x":-15.827340833797866,"y":74.4122578300882,"bCoef":0,"cMask":["wall"]},{"x":-38.594968269717214,"y":40.8652786598364,"bCoef":0,"cMask":["wall"]},{"x":-26.709052810673747,"y":45.72769862035418,"bCoef":0,"cMask":["wall"]},{"x":72.91275814192544,"y":-1.2344604379060589,"bCoef":0,"cMask":["wall"]},{"x":74.96999121822802,"y":-12.616917748966603,"bCoef":0,"cMask":["wall"]},{"x":17.038987617802952,"y":-70.16831001997863,"bCoef":0,"cMask":["wall"]},{"x":-23.440254468919697,"y":-80.64179767045484,"bCoef":0,"cMask":["wall"]},{"x":-73.86458033064291,"y":-34.122277119444036,"bCoef":0,"cMask":["wall"]},{"x":-76.07789036985525,"y":6.23945645890193,"bCoef":0,"cMask":["wall"]},{"x":-53.40781491358946,"y":67.65246258072662,"bCoef":0,"cMask":["wall"]},{"x":-46.9859906007714,"y":65.0458429420615,"bCoef":0,"cMask":["wall"]},{"x":-62.018794582981954,"y":8.673672050239063,"bCoef":0,"cMask":["wall"]},{"x":-35.471664252534296,"y":-22.368524735290165,"bCoef":0,"cMask":["wall"]},{"x":-48.630381760261514,"y":-17.589283928674348,"bCoef":0,"cMask":["wall"]},{"x":-50.208272434235134,"y":65.2952730160653,"bCoef":0,"cMask":["wall"]},{"x":-44.04963196143907,"y":81.87622813513164,"bCoef":0,"cMask":["wall"]},{"x":-50.208272434235134,"y":65.2952730160653,"bCoef":0,"cMask":["wall"]},{"x":-44.04963196143907,"y":81.87622813513164,"bCoef":0,"cMask":["wall"]},{"x":-7.648112591237117,"y":74.38049510247062,"bCoef":0,"cMask":["wall"]},{"x":-16.684883087095976,"y":48.89216806286869,"bCoef":0,"cMask":["wall"]},{"x":-6.952976399247975,"y":41.01395788699174,"bCoef":0,"cMask":["wall"]},{"x":5.791187120552982,"y":48.66045599887231,"bCoef":0,"cMask":["wall"]},{"x":1.6203699686181228,"y":33.83088390310393,"bCoef":0,"cMask":["wall"]},{"x":11.815700784458887,"y":28.73321849518355,"bCoef":0,"cMask":["wall"]},{"x":23.633016048274317,"y":62.563179838655174,"bCoef":0,"cMask":["wall"]},{"x":11.352276656466126,"y":66.96570905458641,"bCoef":0,"cMask":["wall"]},{"x":0.6935217126325988,"y":58.6240747507167,"bCoef":0,"cMask":["wall"]},{"x":4.400914736574695,"y":70.67310207852852,"bCoef":0,"cMask":["wall"]},{"x":16.144082139911283,"y":25.544860494593344,"bCoef":0,"cMask":["wall"]},{"x":27.961397403726714,"y":60.06995803005411,"bCoef":0,"cMask":["wall"]},{"x":33.36492273612232,"y":18.074463551350025,"bCoef":0,"cMask":["wall"]},{"x":55.60928087977489,"y":46.80675948690127,"bCoef":0,"cMask":["wall"]},{"x":37.00424407430355,"y":56.334279004122465,"bCoef":0,"cMask":["wall"]},{"x":33.898038408093406,"y":46.784257242348566,"bCoef":0,"cMask":["wall"]},{"x":39.09731585734776,"y":44.4741961463303,"bCoef":0,"cMask":["wall"]},{"x":47.73107070389794,"y":50.977576638836126,"bCoef":0,"cMask":["wall"]},{"x":29.76508645485578,"y":40.91750190375229,"bCoef":0,"cMask":["wall"]},{"x":29.347310746826672,"y":31.453729619399326,"bCoef":0,"cMask":["wall"]},{"x":37.08521529309583,"y":37.492231808663476,"bCoef":0,"cMask":["wall"]},{"x":37.33597495123865,"y":17.081700497570946,"bCoef":0,"cMask":["wall"]},{"x":59.63815193145922,"y":44.03768284839139,"bCoef":0,"cMask":["wall"]},{"x":70.2071409115469,"y":38.001701055038794,"bCoef":0,"cMask":["wall"]},{"x":60.706946287695274,"y":7.879132735509261,"bCoef":0,"cMask":["wall"]},{"x":54.682432623789374,"y":10.659677503465833,"bCoef":0,"cMask":["wall"]},{"x":57.79163647365482,"y":26.91952360000574,"bCoef":0,"cMask":["wall"]},{"x":44.25538974395223,"y":13.208510207426023,"bCoef":0,"cMask":["wall"]},{"x":64.7421249580975,"y":6.701008324855106,"bCoef":0,"cMask":["wall"]},{"x":74.72530780061413,"y":35.74283596936735,"bCoef":0,"cMask":["wall"]},{"x":82.25660495708308,"y":31.301178572091622,"bCoef":0,"cMask":["wall"]},{"x":74.06929978996949,"y":3.3992205923377767,"bCoef":0,"cMask":["wall"]}],"segments":[{"v0":5,"v1":6,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":7,"v1":8,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":9,"v1":10,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":10,"v1":11,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":11,"v1":12,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"],"color":"FFFFFF"},{"v0":1,"v1":2,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"F8F8F8"},{"v0":3,"v1":2,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":3,"v1":4,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"bCoef":1.15,"cMask":["ball"],"color":"F8F8F8"},{"v0":15,"v1":16,"bCoef":1.15,"cMask":["ball"],"color":"F8F8F8"},{"v0":17,"v1":18,"cMask":["ball"],"color":"FFFFFF"},{"v0":19,"v1":20,"bCoef":1.15,"cMask":["ball"],"color":"F8F8F8"},{"v0":21,"v1":22,"bCoef":1.15,"cMask":["ball"],"color":"F8F8F8"},{"v0":23,"v1":24,"cMask":["ball"],"color":"FFFFFF"},{"v0":25,"v1":26,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":27,"v1":28,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":35,"v1":36,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":37,"v1":38,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":39,"v1":40,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":41,"v1":42,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":45,"v1":46,"bCoef":0.1,"cMask":[],"color":"FF0000"},{"v0":47,"v1":48,"bCoef":0.1,"cMask":[],"color":"FF0000"},{"v0":49,"v1":50,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":51,"v1":52,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":53,"v1":54,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":50,"v1":54,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":56,"v1":55,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":57,"v1":58,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":60,"v1":59,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":[],"color":"FFFFFF"},{"v0":61,"v1":62,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":63,"v1":64,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":68,"v1":67,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":67,"v1":68,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":70,"v1":69,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":69,"v1":70,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":72,"v1":71,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":71,"v1":72,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":74,"v1":73,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":73,"v1":74,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":76,"v1":75,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":75,"v1":76,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":78,"v1":77,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":77,"v1":78,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":80,"v1":79,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":79,"v1":80,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":82,"v1":81,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":81,"v1":82,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":84,"v1":83,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":83,"v1":84,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":86,"v1":85,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":85,"v1":86,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":88,"v1":87,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":87,"v1":88,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":90,"v1":89,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":89,"v1":90,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":92,"v1":91,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":91,"v1":92,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":94,"v1":93,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":93,"v1":94,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":96,"v1":95,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":95,"v1":96,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":98,"v1":97,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":97,"v1":98,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"FFFFFF"},{"v0":99,"v1":100,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":101,"v1":102,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":103,"v1":104,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":105,"v1":106,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":107,"v1":108,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":109,"v1":110,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":111,"v1":112,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":113,"v1":114,"bCoef":0.1,"cMask":[],"color":"FFFFFF"},{"v0":115,"v1":116,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":117,"v1":118,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":119,"v1":120,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":121,"v1":122,"bCoef":0,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":125,"v1":124,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"FFFFFF"},{"v0":126,"v1":127,"bCoef":0.15,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"FFFFFF"},{"v0":128,"v1":129,"bCoef":0,"curve":27.95024782704139,"curveF":4.018212254534237,"cMask":["wall"],"color":"FFFFFF"},{"v0":129,"v1":130,"bCoef":0,"curve":41.497536002193186,"curveF":2.6396261950830886,"cMask":["wall"],"color":"FFFFFF"},{"v0":130,"v1":131,"bCoef":0,"curve":61.21902294499906,"curveF":1.6902671884248786,"cMask":["wall"],"color":"FFFFFF"},{"v0":131,"v1":132,"bCoef":0,"curve":16.515196550558603,"curveF":6.8904451274718586,"cMask":["wall"],"color":"FFFFFF"},{"v0":132,"v1":133,"bCoef":0,"curve":51.50537811446438,"curveF":2.072965937565717,"cMask":["wall"],"color":"FFFFFF"},{"v0":133,"v1":128,"bCoef":0,"curve":56.41733851050626,"curveF":1.8643147270745293,"cMask":["wall"],"color":"FFFFFF"},{"v0":135,"v1":134,"bCoef":0,"curve":125.08498106767989,"curveF":0.5196248482547251,"cMask":["wall"],"color":"FFFFFF"},{"v0":135,"v1":136,"bCoef":0,"curve":24.574207270293453,"curveF":4.591379029157872,"cMask":["wall"],"color":"FFFFFF"},{"v0":137,"v1":136,"bCoef":0,"curve":75.05269070045863,"curveF":1.3019853578084786,"cMask":["wall"],"color":"FFFFFF"},{"v0":138,"v1":137,"bCoef":0,"curve":22.268688366241964,"curveF":5.080919621080024,"cMask":["wall"],"color":"FFFFFF"},{"v0":139,"v1":138,"bCoef":0,"curve":40.355788767007226,"curveF":2.721159679677378,"cMask":["wall"],"color":"FFFFFF"},{"v0":140,"v1":139,"bCoef":0,"curve":64.82137640448609,"curveF":1.5750983205086897,"cMask":["wall"],"color":"FFFFFF"},{"v0":141,"v1":140,"bCoef":0,"curve":21.52372220815081,"curveF":5.26120798630911,"cMask":["wall"],"color":"FFFFFF"},{"v0":142,"v1":141,"bCoef":0,"curve":32.24329425274166,"curveF":3.459674860845782,"cMask":["wall"],"color":"FFFFFF"},{"v0":142,"v1":143,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":143,"v1":144,"bCoef":0,"curve":30.2983115593921,"curveF":3.6935626658411587,"cMask":["wall"],"color":"FFFFFF"},{"v0":144,"v1":145,"bCoef":0,"curve":74.16423784265687,"curveF":1.3230950715510403,"cMask":["wall"],"color":"FFFFFF"},{"v0":134,"v1":146,"bCoef":0,"curve":17.05769356020038,"curveF":6.668188936376128,"cMask":["wall"],"color":"FFFFFF"},{"v0":147,"v1":148,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":150,"v1":149,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":151,"v1":152,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":153,"v1":154,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":154,"v1":155,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":156,"v1":157,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":158,"v1":159,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":159,"v1":160,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":161,"v1":162,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":163,"v1":164,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":165,"v1":166,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":166,"v1":167,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":167,"v1":168,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":169,"v1":170,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":170,"v1":171,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":171,"v1":169,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":172,"v1":173,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":174,"v1":175,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":176,"v1":177,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":177,"v1":178,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":179,"v1":180,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"},{"v0":181,"v1":182,"bCoef":0,"cMask":["wall"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-760,"bCoef":0.1},{"normal":[-1,0],"dist":-760,"bCoef":0.1},{"normal":[1,0],"dist":-760,"bCoef":0.1,"cMask":["ball"]},{"normal":[-1,0],"dist":-760,"bCoef":0.1,"cMask":["ball"]}],"goals":[{"p0":[-706.25,-75],"p1":[-706.25,80],"team":"red"},{"p0":[706.25,80],"p1":[706.25,-80],"team":"blue"}],"discs":[{"pos":[0.5410099940829105,-0.23196729883280964],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFB600","cGroup":["ball","kick","score"]},{"pos":[-700,80],"radius":5,"invMass":0},{"pos":[-700,-80],"radius":5,"invMass":0},{"pos":[700,80],"radius":5,"invMass":0},{"pos":[700,-80],"radius":5,"invMass":0},{"pos":[-700,320],"radius":3,"bCoef":0.1,"invMass":0,"color":"D100FF","cMask":[]},{"pos":[-700,-320],"radius":3,"bCoef":0.1,"invMass":0,"color":"D100FF","cMask":[]},{"pos":[700,320],"radius":3,"bCoef":0.1,"invMass":0,"color":"D100FF","cMask":[]},{"pos":[700,-320],"radius":3,"bCoef":0.1,"invMass":0,"color":"D100FF","cMask":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":350}'


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

setInterval(()=>{
	announce("______ _____ _____ _____ _________________ ", null, 0xF44336, "normal", null),
	announce("|  _  \_   _/  ___/  __ \  _  | ___ \  _  \ ", null, 0xF44336, "normal", null),
	announce("| | | | | | \ `--.| /  \/ | | | |_/ / | | | ", null, 0xF44336, "normal", null),
	announce("| | | | | |  `--. \ |   | | | |    /| | | | ", null, 0xF44336, "normal", null),
	announce("| |/ / _| |_/\__/ / \__/\ \_/ / |\ \| |/ /", null, 0xF44336, "normal", null),
	announce("|___/  \___/\____/ \____/\___/\_| \_|___/  ", null, 0xF44336, "normal", null),
	announce(`⭐ＵＮＩＴＥ ＡＬ ＮＵＥＳＴＲＯ ＳＥＲＶＥＲ ＤＥ ＤＩＳＣＯＲＤ⭐ https://discord.gg/NMV8AGHvnh`, null, 0xFFFFFF, "normal", 2)	
	
	;

}, 120000)

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
			room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", Muevete o te pondras afk automaticamente en" + Math.floor(afkLimit / 3) + " segundos!", extendedP[i][eP.ID]);
		}
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
				setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
			}
			setAFK(player, !getAFK(player));
			room.setPlayerTeam(player.id, Team.SPECTATORS);
			room.sendChat(player.name + (getAFK(player) ? " se quedó dormido" : " está listo para jugar"));
			getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();

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
	announce("______ ___________ _____ _____ ", player.id, 0xF44336, "normal", 1);
	announce("| ___ \  ___|  _  \  ___/  ___|", player.id, 0xF44336, "normal", 1);
	announce("| |_/ / |__ | | | | |__ \ `--. ", player.id, 0xF44336, "normal", 1);
	announce("|    /|  __|| | | |  __| `--. \ ", player.id, 0xF44336, "normal", 1);
	announce("| |\ \| |___| |/ /| |___/\__/ / ", player.id, 0xF44336, "normal", 1);
	announce("\_| \_\____/|___/ \____/\____/ ", player.id, 0xF44336, "normal", 1);
	announce("                               ", player.id, 0xF44336, "normal", 1);
	announce("⭐ＳＥＧＵＩＮＯＳ ＥＮ ＮＵＥＳＴＲＡＳ ＲＥＤＥＳ⭐", player.id, 0xDFFF00, "normal", 1);
	announce("⭐ＴＩＫＴＯＫ⭐https://www.tiktok.com/@el.host.de.navi", player.id, 0xDFFF00, "normal", 1);
	announce("⭐ＩＮＳＴＡＧＲＡＭ⭐https://www.instagram.com/el_host_de_navi/ ", player.id, 0xDFFF00, "normal", 1);
	announce("                            ", player.id, 0xDFFF00, "normal", 1);
	announce(`¡Bienvenido al host x4 de Navi ${player.name}! Haz !help para ver los comandos disponibles.`, player.id, 0xDFFF00, "normal", 1);
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
		room.sendChat(changedPlayer.name + " está afk !");
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
		room.sendChat(player.name + (getAFK(player) ? " se puso a afk" : " está listo para jugar"));
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
	else if (["!me", "!stats"].includes(message[0].toLowerCase())) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
		announce(`[PV] ${player.name} > PJ: ${stats[Ss.GA]}, Victorias: ${stats[Ss.WI]}, Empates: ${stats[Ss.DR]}, Derrotas: ${stats[Ss.LS]}, WR: ${stats[Ss.WR]}%, Goles: ${stats[Ss.GL]}, Asistencias: ${stats[Ss.AS]}, GK: ${stats[Ss.GK]}, CS: ${stats[Ss.CS]}, CS%: ${stats[Ss.CP]}%`, player.id, 0xFFFF00, "normal", 1);
	}
	else if (["!discord", "!dc", "!ds"].includes(message[0].toLowerCase())) {
		announce(`⭐ＤＩＳＣＯＲＤ⭐ https://discord.gg/NMV8AGHvnh`, player.id, 0x00FF00, "normal", 2);	
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
	else if (["!bb", "!bye", "!cya", "!gn", "!nv"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "¡Vuelve pronto!", false);
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
					room.sendChat(player.name + " elegiste Random !");
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
						room.sendChat("Ese numero no es valido!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						room.sendChat(player.name + " eligió a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
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
						room.sendChat("numero invalido", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						room.sendChat(player.name + " se eligó a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
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
		announce(`[👑] ${player.name}: ${finalmessage}`, null, 0xFFFFFF, "normal", 1);
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
		announce(`😂 ${getTime(scores)} Era para el otro arco bro ${lastPlayersTouched[0].name} XD ! Velocidad de tiro:  ${ballSpeed.toPrecision(4).toString()} km/h. ${team == Team.RED ? "🔴" : "🔵"}`, null, 0xfff68f, "normal", 1);
		
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
		room.sendChat("que haces chavalin", byPlayer.id);
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