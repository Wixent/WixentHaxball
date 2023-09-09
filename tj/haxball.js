//**********************************************************************************/
//      Todos Juegan 
//      Creador: greedyboyy (Discord)
//      Version: 1.0
//
//**********************************************************************************/

// Info General
var roomName = "🔸 Todos juegan en ACF 🔷"; // Nombre de la sala, cambiar siempre entre ""
var maxPlayers = 30; // maximo de jugadores en la sala, dejar 20 por defecto
var password = null // password siempre entre "", en caso de no definir password dejar null.
var roomPublic = true; // room publico: dejar true, room oculto: dejar false.

var room = HBInit({
  token: roomArgs['token'],
  roomName: roomName,
  maxPlayers: maxPlayers,
  public: roomPublic,
    roomPassword: password,
  geo: { "code": "CL", "lat": -33.448907, "lon": -70.66926 },
  noPlayer: true
});
// Setear todo
const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;
var drawTimeLimit = Infinity;
var map = `{"name":"Futsal x7 by ACF","height":635,"width":1275,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":450,"kickOffReset":"partial","bg":{"type":"grass","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0,"color":"404447","goalLine":0},"canBeStored":true,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"playerPhysics":{"bCoef":0,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":5.2,"cGroup":[],"gravity":[0,0],"radius":15,"kickback":0},"segments":[{"v0":0,"v1":1,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":2,"v1":3,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":0,"v1":4,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":1,"v1":5,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":3,"v1":6,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":2,"v1":7,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":4,"v1":8,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":8,"v1":9,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":9,"v1":7,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":5,"v1":10,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":10,"v1":11,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":11,"v1":6,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":12,"v1":13,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B3B6B6"},{"v0":14,"v1":15,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B3B6B6"},{"v0":13,"v1":14,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":["red","blue"],"cGroup":["redKO"],"color":"B3B6B6"},{"v0":14,"v1":13,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"B3B6B6"},{"v0":13,"v1":14,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":17,"v1":16,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":16,"v1":17,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":19,"v1":18,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":18,"v1":19,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":18,"v1":19,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":19,"v1":18,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":21,"v1":22,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":22,"v1":23,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":20,"v1":24,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":23,"v1":25,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":26,"v1":27,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":30,"v1":31,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":32,"v1":33,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":34,"v1":35,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":12,"v1":36,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":15,"v1":37,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":42,"v1":43,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"3BC7FA"},{"v0":46,"v1":47,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":48,"v1":49,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":50,"v1":51,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":52,"v1":53,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":42,"v1":54,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":55,"v1":56,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":57,"v1":58,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":43,"v1":59,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":60,"v1":61,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"9B1617"},{"v0":60,"v1":62,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":63,"v1":64,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":65,"v1":66,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":61,"v1":67,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":68,"v1":69,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":70,"v1":71,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":72,"v1":73,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":74,"v1":75,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":76,"v1":77,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":78,"v1":79,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":80,"v1":81,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":82,"v1":83,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":84,"v1":85,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":86,"v1":87,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":88,"v1":89,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":90,"v1":91,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":92,"v1":93,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":94,"v1":95,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":96,"v1":97,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":98,"v1":99,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":101,"v1":100,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":100,"v1":101,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":100,"v1":101,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":101,"v1":100,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":103,"v1":102,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":103,"v1":102,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":105,"v1":104,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":105,"v1":104,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":107,"v1":106,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":107,"v1":106,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":109,"v1":108,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":109,"v1":108,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":111,"v1":110,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":111,"v1":110,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":113,"v1":112,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":113,"v1":112,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":115,"v1":114,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":115,"v1":114,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":117,"v1":116,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":117,"v1":116,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":25,"v1":118,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":119,"v1":120,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":121,"v1":122,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":24,"v1":121,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":123,"v1":124,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":124,"v1":20,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":125,"v1":126,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":127,"v1":128,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":130,"v1":129,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":132,"v1":131,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"}],"vertexes":[{"x":-1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-11,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":11,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1543.25,"y":644,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1543.25,"y":154,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-635,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":635,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1202,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1202,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1202,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1202,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1198,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1198,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1199,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1199,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1201,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-42,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-15,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":12,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":39,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-42,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-15,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":12,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":39,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1075,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]}],"goals":[{"p0":[-1206,110],"p1":[-1206,-110],"team":"red"},{"p0":[1206,110],"p1":[1206,-110],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]}],"discs":[{"pos":[-1200,-110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"B2011A","cMask":["all"],"cGroup":["all"]},{"pos":[1200,-110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"8B","cMask":["all"],"cGroup":["all"]},{"pos":[-1200,110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"B2011A","cMask":["all"],"cGroup":["all"]},{"pos":[1200,110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"8B","cMask":["all"],"cGroup":["all"]},{"pos":[1200,600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"54EC","cMask":[],"cGroup":[]},{"pos":[-1200,600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FF3455","cMask":[],"cGroup":[]},{"pos":[-1200,-600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FF3455","cMask":[],"cGroup":[]},{"pos":[1200,-600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"54EC","cMask":[],"cGroup":[]},{"pos":[-1228,142],"speed":[0,0],"gravity":[0,0],"radius":0,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"B3B6B6","cMask":["all"],"cGroup":["all"]}],"joints":[],"ballPhysics":{"speed":[0,0],"gravity":[0,0],"radius":6.25,"bCoef":0.35,"invMass":1.5,"damping":0.99,"color":"FFD700","cMask":["all"],"cGroup":["ball","kick","score"]}}`
room.setCustomStadium(map);
room.startGame();


var authArray = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var authArray = [];

function updateTeams() {
    players = room.getPlayerList();
    teamRed = players.filter((p) => p.team == 1);
    teamBlue = players.filter((p) => p.team == 2);
    teamSpec = players.filter((p) => p.team == 0);
}
// When a player joins the room
room.onPlayerJoin = function (player) {
    welcomeMsg(player);
    updateTeams();
    assignPlayerATeam(player);
}



function assignPlayerATeam(player){
  if(teamRed.length > teamBlue.length){
    room.setPlayerTeam(player.id, 2)
  } else {
    room.setPlayerTeam(player.id, 1)
  }
}

function welcomeMsg (player) {
    announce("    _    ___  ___ ", player.id, 0xff0000, "bold")
    announce("   /_\  / __|| __|", player.id, 0xff0000, "bold", 2)
    announce("  / _ \| (__ | _| ", player.id, 0xff0000, "bold")
    announce(" /_/ \_\\___||_|  ", player.id, 0xff0000, "bold")
    announce(`Bienvenido ${player.name}, disfruta del partido! Usa !help para ver los comandos.`,null, null, 2)
  announce("Este es el host Todos juegan de ACF, para información sobre la liga, visita nuestro discord https://discord.gg/JzCH2BnGHn ",null, null, 2)   
}


room.onPlayerChat = function (player, message) {
    
    if (message.startsWith("!")) {
        message = message.substr(1);
        let args = message.split(" ");
        let superAdminCode = "adminacf";
        if (args[0] == "admin" && args.length == 2) {
            if (args[1] == superAdminCode) {
              room.setPlayerAdmin(player.id, true);
              announce("[✅] Has obtenido admininistrador por contraseña correctamente.", player.id, 0x00ff00, "normal", 2);
            } else {
               announce("[❌] Has ingresado una contraseña errónea", player.id, 0xff0000, "normal", 2); 
            }
        } else if(args[0] == "help"){
            announce("Comandos disponibles: !help, !bb, !nv, !liga, !tula, !afk, !cambiarequipo.", player.id, null, "small", 2)
            if (player.admin) { 
                announce("Comandos de Admin: !admin <password>, !p, !x7, !rr.", player.id, 0xffff00, "small")
            }
        }  else if (args[0] == "bb" || args[0] == "nv" && args.length == 1) {
            room.kickPlayer(player.id, "Adios!! [👋]")
        } else if (args[0] == "liga") {
            announce("Discord de ACF: https://discord.gg/JzCH2BnGHn ", null, null, null, 2)
        } else if(args[0] == "tula"){
            var cm = getRandomInt(21);
            if(cm <= 10){
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! La wea chica 😂`, null, 0x00ffff, "bold", 2)
            } else if(cm <= 15){
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! Nada mal!!!`, null, 0x00ffff, "bold", 2)
            } else {
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! La media wea wn`, null, 0x00ffff, "bold", 2)  
            }
            
        } else if(args[0] == "p"){
          if(player.admin){
              room.pauseGame(true);
          } else {
            announce("[❌] No tienes permisos para ingresar este comando.", player.id, 0xff0000, "normal", 2);
          }
        } else if(args[0] == "x7"){
          if(player.admin){
            room.stopGame();
            room.setCustomStadium(map);
            room.startGame();
            announce("[✅] Se ha establecido el mapa x7 como el mapa de juego.", null, 0x00ff00, "normal", 2);
            
          } else {
           announce("[❌] No tienes permisos para ingresar este comando.", player.id, 0xff0000, "normal", 2);
          }
        } else if(args[0] == "rr"){
          if(player.admin){
            room.stopGame();
            room.startGame();
            announce("[✅] Se ha reiniciado el juego correctamente.", null, 0x00ff00, "normal", 2);
           
          }  else {
           announce("[❌] No tienes permisos para ingresar este comando.", player.id, 0xff0000, "normal", 2);
          }
        } else if(args[0] == "clearbans"){
          if(player.admin){
            room.clearBans()
            announce("[✅] Se han removido los baneos correctamente.", null, 0x00ff00, "normal", 2);
          } else {
           announce("[❌] No tienes permisos para ingresar este comando.", player.id, 0xff0000, "normal", 2); 
          }
        } else if(args[0] == "afk"){
            if(player.team != 0){
              room.setPlayerTeam(player.id, 0)
              announce(`${player.name} ha entrado al modo AFK.`, null, 0xffffff, "normal"); 
              updateTeams();
            } else {
              assignPlayerATeam(player)
              announce(`${player.name} ha salido del modo AFK.`, null, 0xffffff, "normal"); 
              updateTeams();
            }
        } else if(args[0] == "cambiarequipo"){
          if(player.team == 1){
            room.setPlayerTeam(player.id, 2);
            announce(`Te has cambiado de equipo correctamente.`, player.id, 0xffffff, "normal"); 
            updateTeams();
          } else if(player.team == 2){
            room.setPlayerTeam(player.id, 1);
            announce(`Te has cambiado de equipo correctamente.`, player.id, 0xffffff, "normal"); 
            updateTeams();
          } else {
            announce(`[❌] No puedes hacer eso mientras estás AFK.`, player.id, 0xff0000, "normal", 2); 
          }
        }
        else {
          announce("[❌] Has ingresado un comando inválido", player.id, 0xff0000, "normal", 2);
        }
        return false;
    }


    if(player.admin == true){
      announce(`[Admin] ${player.name}: ${message}`, null, 0xffbf00, "normal", 1);
      return false;
    } else {
      if(player.team == 1){
        announce(`[🔴] ${player.name}: ${message}`, null, 0xfe433c, "normal", 1);
        return false;
      } else if(player.team == 2){
        announce(`[🔵] ${player.name}: ${message}`, null, 0x3388ff, "normal", 1);
        return false;
      } else {
        announce(`[⚪] ${player.name}: ${message}`, null, 0xffffff, "normal", 1);
        return false;  
      }
    }

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




function instantRestart(){
  room.stopGame();
  startTimeout = setTimeout(() => {
    room.startGame();
  }, 10);
}


room.onGameStop = function(byPlayer){
 if(byPlayer == null){
    instantRestart();
  }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}