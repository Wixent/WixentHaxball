// ===============================| Asosiación Chilena de Futsal |===============================
//		Version: 0.0.1
//      author: Raio (JuanRo#8877)
//      editor: greedyboyy
//		Build Date: 21/2/2023
//      Last Update: 02/09/2023
//		* Asociación Chilena de Futsal
//      Features:
//          0.1 Commands:
//            0.1 User Commands:    
//              0.1 [!help] Muestra todos los comandos disponibles
//              0.2 [!bb], [!nv] Te kickea para salir mas rapido de la sala.
//              0.3 [!liga] Muestra el discord de la liga
//              0.4 [!firmo] Comando para firmar en un partido oficial.
//              0.5 [!firmas] Muestra la lista de los jugadores que firmaron.
//              0.6 [!tula] Mira cuando te mide la diuca.
//            0.2 Admin Commands:
//              0.1 [!rr] Reinica el juego (Para el juego y lo empieza de nuevo.)
//              0.2 [!clearbans] Borra todos los bans de la sala.
//              0.3 [!swap] Cambia de lado a los equipos.
//              0.4 [!x3] Ejecuta el mapa oficial futsal x3 by bazinga!
//              0.5 [!x4] Ejecuta el mapa oficial futsal x4 by bazinga!
//              0.6 [!x7] Ejecuta el mapa oficial futsal x7 by bazinga!
//              0.7 [!acf] Ejecuta el mapa oficial futsal x4 by ACF
//              0.8 [!oficial] Activa el modo Oficial para partidos OFICIALES (El uso de este fuera de un partido Ofical conllevara a SANCION)           
//              0.9 [!setcamiseta] Te muestra como funciona el nuevo comando para la camiseta.
//              0.10 [![ID de lacamiseta]2|3 red|blue] Ej: !rn2 red pondra la camiseta visitante de Rio Negro al Red.
//              0.11 [!camisx3] Muestra las camisetas de x3.
//              0.12 [!camisx4] Muestra las camisetas de x4.
//              0.15 [!setpassword [contraseña]] Cambía la contraseña del host.
//              0.16 [!clearpassword] Borrá las contraseña del host.
//				0.17 [!sancion jugador equipo razon] Hace una sancion a un jugador por x motivo.
//            0.3 Misc:
//              0.1 [!admin (contraseña)] Si no hay admin te dara admin, si pones la contraseña tambien.
//              0.2 [t ] Team chat, todo lo que escribas despues de la t sera enviado a tus compañeros de equipo
//              0.3 [@@(nombre)] Si pones un nombre despues de este se enviara un mensaje privado al jugador que nombraste.
//      Changelog:
//          0.1 02-09-23:
//              0.1 Se añadieron nuevos mapas:
//                  0.2 Mapa ACF x4
//              0.2 Se añadieron las camisetas x3 para los siguientes equipos:
//                  - Intel
//                  - Pichang Heroes
//                  - Lyons of Miami
//                  - God FC
//                  - Colo Colo
//                  - Kalis
//                  - Dark Silence
//                  - Hawks
//                  - Inter de Chile
//                  - FC Forenses
//              0.3 Se cambió la abreviatura de Dark Silence de (DRS) a (DRK)
//              0.4 Se cambió el nombre de los comandos !camisetasx4 y !camisetasx3 a !camisx4 y !camisx3
//              0.5 Se añadió el comando !tula
//			0.2 03-09-23:
//				0.1 Se añadió el mapa de práctica como mapa predeterminado.
// 				0.2 Se añadió el comando !practice para setear el mapa de práctica.
//				0.3 Se añadió el comando !sancion, el cual tiene los parametros <jugador> <equipo> <razon>
//					0.1: Se estableció una webhook para que envie la sanción correspondiente al discord de ACF
//					0.2: El comando solo puede ser ejecutado por personas con permisos de administrador.
//			0.3 04-09-23:
//				0.1 Se ajustó el comando !sanción.
//					0.1 Ahora la razón de una sanción (último parámetro) puede llevar espacios.
// 				0.2 Se ajustaron las webhooks de firmas:
//					0.1 Se enviará un embed al canal firmas-bot con solamente el nombre del jugador para tener un registro que firmó.
//					0.2 Se creó una webhook privada la cual se enviara a un canal del staff con datos más privados sobre la firma, en este caso la ID y el auth.
//				0.3 Se añadió una webhook para avisar sobre el cambio de contraseña en el discord.
//
//
// ------------------------------------------------
// https://www.haxball.com/headless
// =========================================================================

var roomName = "✨ Partidos Oficiales | ACF ✨"; // Nombre de la sala, cambiar siempre entre ""
var maxPlayers = 30; // maximo de jugadores en la sala, dejar 20 por defecto
var password = "ofi" // password siempre entre "", en caso de no definir password dejar null.
var roomPublic = true; // room publico: dejar true, room oculto: dejar false.

var room = HBInit({
	roomName: roomName,
	maxPlayers: maxPlayers,
	token: roomArgs['token'],
	public: roomPublic,
    roomPassword: password,
	geo: { "code": "CL", "lat": -33.448907, "lon": -70.66926 },
	noPlayer: true
});

// Estadios


    // Bazinga
var futsalx4 = `{	"name": "Futsal x4 | ACF",	"canBeStored": false,	"width": 765,	"height": 350,	"bg": {		"type": "none",		"height": 0,		"width": 0,		"cornerRadius": 0,		"kickOffRadius": 0,		"color": "444444"	},	"vertexes": [		{			"x": 0,			"y": -350,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": -700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": -700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff",			"pos": [				700,				-90			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -480,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": -480,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "F94323",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 0,			"y": 320,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 350,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"cMask": [],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": 735,			"y": -350,			"bCoef": 0.5,			"cMask": [				"red",				"blue"			]		},		{			"x": -700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -699.8853604959578,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "8895ff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": 700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -300,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": -680,			"y": -320,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 680,			"y": -320,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": -300,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -50,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -70,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 15,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 15,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -20,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": -20,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -40,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": -60,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": 30,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 70,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 70,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30.35428038352591,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"segments": [		{			"v0": 0,			"v1": 1,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 2,			"v1": 3,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 3,			"v1": 4,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 4,			"v1": 5,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 6,			"v1": 7,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 7,			"v1": 8,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 8,			"v1": 9,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 10,			"v1": 11,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 12,			"v1": 13,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 14,			"v1": 15,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": 240		},		{			"v0": 16,			"v1": 17,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 18,			"v1": 19,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 20,			"v1": 21,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": -240		},		{			"v0": 22,			"v1": 23,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 24,			"v1": 25,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 26,			"v1": 27,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 28,			"v1": 29,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 30,			"v1": 31,			"curve": 0,			"vis": true,			"color": "CE142E",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -550		},		{			"v0": 34,			"v1": 35,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 36,			"v1": 37,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 35,			"v1": 37,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 38,			"v1": 39,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 40,			"v1": 41,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 42,			"v1": 43,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 45,			"v1": 44,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 44,			"v1": 45,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 47,			"v1": 46,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 46,			"v1": 47,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 50,			"v1": 49,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 49,			"v1": 50,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 52,			"v1": 51,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 51,			"v1": 52,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 54,			"v1": 55,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 55,			"v1": 56,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 56,			"v1": 57,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 58,			"v1": 59,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 59,			"v1": 60,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 60,			"v1": 61,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 62,			"v1": 63,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 64,			"v1": 65,			"curve": 179.42829117403,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"blueKO"			],			"curveF": 0.0049891420830909		},		{			"v0": 67,			"v1": 66,			"curve": 180,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO"			],			"curveF": 6.1232339957368e-17		},		{			"v0": 72,			"v1": 73,			"curve": -180,			"vis": true,			"color": "B6B6B8",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 74,			"v1": 75,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 76,			"v1": 77,			"curve": -180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 81,			"v1": 80,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 82,			"v1": 83,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 84,			"v1": 85,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 86,			"v1": 87,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 88,			"v1": 89,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 90,			"v1": 91,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 93,			"v1": 99,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 54,			"v1": 97,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 98,			"v1": 95,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 100,			"v1": 101,			"curve": 0,			"vis": true,			"color": "6973C4",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 103,			"v1": 107,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 102,			"v1": 105,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 106,			"v1": 104,			"curve": 0,			"vis": true,			"color": "8895ff",			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 109,			"v1": 108,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 108,			"v1": 109,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 111,			"v1": 110,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 110,			"v1": 111,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 112,			"v1": 113,			"curve": -90,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 119,			"v1": 118,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 117,			"v1": 116,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 114,			"v1": 115,			"curve": -90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 109,			"v1": 108,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 111,			"v1": 110,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 120,			"v1": 121,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 122,			"v1": 120,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 126,			"v1": 124,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 123,			"v1": 125,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 125,			"v1": 126,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 128,			"v1": 127,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 129,			"v1": 130,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 131,			"v1": 129,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 132,			"v1": 133,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"planes": [		{			"normal": [				0,				1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-350					],					"b": [						457.4564698855129,						-350					]				}			}		},		{			"normal": [				-1,				0			],			"dist": -784,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						-1,						0					],					"dist": -784,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						784,						-204.22163834174683					],					"b": [						784,						204.22163834174683					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						320					],					"b": [						457.4564698855129,						320					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						350					],					"b": [						457.4564698855129,						350					]				}			}		},		{			"normal": [				1,				0			],			"dist": -777,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						1,						0					],					"dist": -777,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-777,						-204.22163834174683					],					"b": [						-777,						204.22163834174683					]				}			}		},		{			"normal": [				0,				1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-320					],					"b": [						457.4564698855129,						-320					]				}			}		}	],	"goals": [		{			"p0": [				-707.5,				-90			],			"p1": [				-707.5,				90			],			"team": "red",			"color": "ffffff"		},		{			"p0": [				707.5,				90			],			"p1": [				707.5,				-90			],			"team": "blue",			"color": "ffffff"		}	],	"discs": [		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				90			],			"color": "F94323",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				-90			],			"color": "F94323",			"trait": "goalPost",			"y": -85,			"x": -560		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				90			],			"color": "8895ff",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				-90			],			"color": "8895ff",			"trait": "goalPost",			"y": -85,			"vis": true		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		}	],	"playerPhysics": {		"bCoef": 0.1,		"acceleration": 0.11,		"kickingAcceleration": 0.083,		"kickStrength": 5,		"radius": 15,		"invMass": 0.5,		"damping": 0.96,		"cGroup": [			"red",			"blue"		],		"gravity": [			0,			0		],		"kickingDamping": 0.96,		"kickback": 0	},	"ballPhysics": {		"radius": 6.25,		"bCoef": 0.4,		"invMass": 1.5,		"color": "FFCC00",		"cMask": [			"all"		],		"damping": 0.99,		"gravity": [			0,			0		],		"cGroup": [			"ball"		]	},	"spawnDistance": 200,	"traits": {		"ballArea": {			"vis": false,			"bCoef": 1,			"cMask": [				"ball"			]		},		"goalPost": {			"radius": 8,			"invMass": 0,			"bCoef": 0.5		},		"goalNet": {			"vis": true,			"bCoef": 0.1,			"cMask": [				"ball"			]		},		"line": {			"vis": true,			"bCoef": 0.1,			"cMask": [				""			]		},		"kickOffBarrier": {			"vis": false,			"bCoef": 0.1,			"cGroup": [				"redKO",				"blueKO"			],			"cMask": [				"red",				"blue"			]		}	},	"joints": [],	"redSpawnPoints": [],	"blueSpawnPoints": [],	"cameraWidth": 0,	"cameraHeight": 0,	"maxViewWidth": 0,	"cameraFollow": "ball",	"kickOffReset": "partial"}`
    // ACF
var acf = `{	"name": "Futsal x4 | ACF",	"canBeStored": false,	"width": 765,	"height": 350,	"bg": {		"type": "none",		"height": 0,		"width": 0,		"cornerRadius": 0,		"kickOffRadius": 0,		"color": "444444"	},	"vertexes": [		{			"x": 0,			"y": -350,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			]		},		{			"x": -700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				80			]		},		{			"x": -700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				-700,				-80			]		},		{			"x": -700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": -700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": 90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 700,			"y": 320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff"		},		{			"x": 700,			"y": -90,			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"color": "ffffff",			"pos": [				700,				-90			]		},		{			"x": -700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": 700,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": -700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "CE142E"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff",			"pos": [				700,				-90			]		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -480,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": -700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": -480,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": 280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 93.241608812827		},		{			"x": 700,			"y": -280,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -93.241608812827		},		{			"x": 480,			"y": 70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": -70,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 0		},		{			"x": 480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -1,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -480,			"y": 2,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "F94323",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": -735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": -700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				-700,				80			],			"vis": false		},		{			"x": 700,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": -90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				-90			],			"vis": false		},		{			"x": 735,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 700,			"y": 90,			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"curve": 0,			"color": "ffffff",			"pos": [				700,				80			],			"vis": false		},		{			"x": 0,			"y": 320,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 350,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "696969"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"cMask": [],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "B6B6B8",			"curve": -180		},		{			"x": 0,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": -180		},		{			"x": 0,			"y": 91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "ffffff",			"curve": 180		},		{			"x": 0,			"y": -91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": -320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 91,			"bCoef": 0,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": 0,			"y": 320,			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				-700,				80			],			"color": "ffffff"		},		{			"x": -706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": -706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": -706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				-700,				-80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": -320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"color": "ffffff"		},		{			"x": 706.5,			"y": -90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"vis": false,			"curve": 0,			"pos": [				700,				-90			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 90,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"pos": [				700,				80			],			"color": "ffffff"		},		{			"x": 706.5,			"y": 320,			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"curve": 0,			"vis": false,			"color": "ffffff"		},		{			"x": 735,			"y": -350,			"bCoef": 0.5,			"cMask": [				"red",				"blue"			]		},		{			"x": -700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": -699.8853604959578,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "F94323"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": 90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "6973C4"		},		{			"x": 700,			"y": -90,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0,			"color": "8895ff",			"pos": [				-700,				-80			],			"vis": false		},		{			"x": 700,			"y": 60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -60,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": 700,			"y": 84.30121483141252,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"color": "8895ff"		},		{			"x": -340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": 3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": 340,			"y": -3,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 180,			"color": "ffffff"		},		{			"x": -700,			"y": -300,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": -680,			"y": -320,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 680,			"y": -320,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": -300,			"cMask": [				"wall"			],			"trait": "line",			"curve": -90		},		{			"x": 700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -680,			"y": 320,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -700,			"y": 300,			"cMask": [				"wall"			],			"trait": "line",			"curve": 90		},		{			"x": -50,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -70,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 15,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 15,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -20,			"y": -20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": -20,			"y": 20,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": -40,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": -60,			"y": 0,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": 0		},		{			"x": 30,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30,			"y": 30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"x": 70,			"y": -30,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 70,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"curve": -81.51211526097983		},		{			"x": 30.35428038352591,			"y": -10,			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"segments": [		{			"v0": 0,			"v1": 1,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 2,			"v1": 3,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 3,			"v1": 4,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 4,			"v1": 5,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 6,			"v1": 7,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 7,			"v1": 8,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 8,			"v1": 9,			"curve": 0,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 10,			"v1": 11,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 12,			"v1": 13,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -550		},		{			"v0": 14,			"v1": 15,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": 240		},		{			"v0": 16,			"v1": 17,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 18,			"v1": 19,			"vis": true,			"color": "ffffff",			"bCoef": 1.15,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 550		},		{			"v0": 20,			"v1": 21,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"y": -240		},		{			"v0": 22,			"v1": 23,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 24,			"v1": 25,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 26,			"v1": 27,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 28,			"v1": 29,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 30,			"v1": 31,			"curve": 0,			"vis": true,			"color": "CE142E",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -550		},		{			"v0": 34,			"v1": 35,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 36,			"v1": 37,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 35,			"v1": 37,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 38,			"v1": 39,			"curve": 93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 40,			"v1": 41,			"curve": -93.241608812827,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 42,			"v1": 43,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 45,			"v1": 44,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 44,			"v1": 45,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 47,			"v1": 46,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 46,			"v1": 47,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 480		},		{			"v0": 50,			"v1": 49,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 49,			"v1": 50,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 52,			"v1": 51,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 51,			"v1": 52,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -480		},		{			"v0": 54,			"v1": 55,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				-80			],			"y": -90		},		{			"v0": 55,			"v1": 56,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": -735		},		{			"v0": 56,			"v1": 57,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				-700,				80			],			"y": 90		},		{			"v0": 58,			"v1": 59,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				-90			],			"y": -90		},		{			"v0": 59,			"v1": 60,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"x": 735		},		{			"v0": 60,			"v1": 61,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 0.2,			"cMask": [				"red",				"blue",				"ball"			],			"trait": "goalPost",			"pos": [				700,				80			],			"y": 90		},		{			"v0": 62,			"v1": 63,			"vis": false,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 64,			"v1": 65,			"curve": 179.42829117403,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"blueKO"			],			"curveF": 0.0049891420830909		},		{			"v0": 67,			"v1": 66,			"curve": 180,			"color": "696969",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO"			],			"curveF": 6.1232339957368e-17		},		{			"v0": 72,			"v1": 73,			"curve": -180,			"vis": true,			"color": "B6B6B8",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 74,			"v1": 75,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 76,			"v1": 77,			"curve": -180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 0		},		{			"v0": 81,			"v1": 80,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 82,			"v1": 83,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"red",				"blue"			],			"cGroup": [				"redKO",				"blueKO"			]		},		{			"v0": 84,			"v1": 85,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 86,			"v1": 87,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": -556.5		},		{			"v0": 88,			"v1": 89,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 90,			"v1": 91,			"curve": 0,			"vis": false,			"color": "ffffff",			"bCoef": 1,			"cMask": [				"ball"			],			"trait": "ballArea",			"x": 556.5		},		{			"v0": 93,			"v1": 99,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 54,			"v1": 97,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 98,			"v1": 95,			"curve": 0,			"vis": true,			"color": "F94323",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 100,			"v1": 101,			"curve": 0,			"vis": true,			"color": "6973C4",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 103,			"v1": 107,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 102,			"v1": 105,			"curve": 0,			"vis": true,			"color": "8895ff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 106,			"v1": 104,			"curve": 0,			"vis": true,			"color": "8895ff",			"cMask": [				"wall"			],			"trait": "line",			"x": 700		},		{			"v0": 109,			"v1": 108,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 108,			"v1": 109,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": -340		},		{			"v0": 111,			"v1": 110,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 110,			"v1": 111,			"curve": 180,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line",			"x": 340		},		{			"v0": 112,			"v1": 113,			"curve": -90,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 119,			"v1": 118,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 117,			"v1": 116,			"curve": 90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 114,			"v1": 115,			"curve": -90,			"vis": true,			"color": "ffffff",			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 109,			"v1": 108,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 111,			"v1": 110,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 120,			"v1": 121,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 122,			"v1": 120,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 126,			"v1": 124,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 123,			"v1": 125,			"curve": -81.51211526097983,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 125,			"v1": 126,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 128,			"v1": 127,			"curve": 0,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 129,			"v1": 130,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 131,			"v1": 129,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		},		{			"v0": 132,			"v1": 133,			"vis": true,			"color": "ffffff",			"bCoef": 0.1,			"cMask": [				"wall"			],			"trait": "line"		}	],	"planes": [		{			"normal": [				0,				1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-350					],					"b": [						457.4564698855129,						-350					]				}			}		},		{			"normal": [				-1,				0			],			"dist": -784,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						-1,						0					],					"dist": -784,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						784,						-204.22163834174683					],					"b": [						784,						204.22163834174683					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						320					],					"b": [						457.4564698855129,						320					]				}			}		},		{			"normal": [				0,				-1			],			"dist": -350,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						0,						-1					],					"dist": -350,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						350					],					"b": [						457.4564698855129,						350					]				}			}		},		{			"normal": [				1,				0			],			"dist": -777,			"bCoef": 0.1,			"_data": {				"extremes": {					"normal": [						1,						0					],					"dist": -777,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-777,						-204.22163834174683					],					"b": [						-777,						204.22163834174683					]				}			}		},		{			"normal": [				0,				1			],			"dist": -320,			"cMask": [				"ball"			],			"_data": {				"extremes": {					"normal": [						0,						1					],					"dist": -320,					"canvas_rect": [						-453.37203711867795,						-204.22163834174683,						457.4564698855129,						204.22163834174683					],					"a": [						-453.37203711867795,						-320					],					"b": [						457.4564698855129,						-320					]				}			}		}	],	"goals": [		{			"p0": [				-707.5,				-90			],			"p1": [				-707.5,				90			],			"team": "red",			"color": "ffffff"		},		{			"p0": [				707.5,				90			],			"p1": [				707.5,				-90			],			"team": "blue",			"color": "ffffff"		}	],	"discs": [		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				90			],			"color": "F94323",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				-700,				-90			],			"color": "F94323",			"trait": "goalPost",			"y": -85,			"x": -560		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				90			],			"color": "8895ff",			"trait": "goalPost",			"y": 90		},		{			"radius": 5.5,			"invMass": 0,			"pos": [				700,				-90			],			"color": "8895ff",			"trait": "goalPost",			"y": -85,			"vis": true		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				-320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		},		{			"radius": 4,			"invMass": 0,			"pos": [				-700,				320			],			"color": "ffffff",			"bCoef": 0.5,			"trait": "goalPost"		}	],	"playerPhysics": {		"bCoef": 0.1,		"acceleration": 0.11,		"kickingAcceleration": 0.083,		"kickStrength": 5,		"radius": 15,		"invMass": 0.5,		"damping": 0.96,		"cGroup": [			"red",			"blue"		],		"gravity": [			0,			0		],		"kickingDamping": 0.96,		"kickback": 0	},	"ballPhysics": {		"radius": 6.25,		"bCoef": 0.4,		"invMass": 1.5,		"color": "FFCC00",		"cMask": [			"all"		],		"damping": 0.99,		"gravity": [			0,			0		],		"cGroup": [			"ball"		]	},	"spawnDistance": 200,	"traits": {		"ballArea": {			"vis": false,			"bCoef": 1,			"cMask": [				"ball"			]		},		"goalPost": {			"radius": 8,			"invMass": 0,			"bCoef": 0.5		},		"goalNet": {			"vis": true,			"bCoef": 0.1,			"cMask": [				"ball"			]		},		"line": {			"vis": true,			"bCoef": 0.1,			"cMask": [				""			]		},		"kickOffBarrier": {			"vis": false,			"bCoef": 0.1,			"cGroup": [				"redKO",				"blueKO"			],			"cMask": [				"red",				"blue"			]		}	},	"joints": [],	"redSpawnPoints": [],	"blueSpawnPoints": [],	"cameraWidth": 0,	"cameraHeight": 0,	"maxViewWidth": 0,	"cameraFollow": "ball",	"kickOffReset": "partial"}`
    // Futsal x3
var futsalx3 = `{"name":"Futsal x3  by Bazinga","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}`
    // Futsalx7
var futsalx7 = `{"name":"Futsal x7 by Bazinga!","height":635,"width":1275,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":450,"kickOffReset":"partial","bg":{"type":"grass","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0,"color":"404447","goalLine":0},"canBeStored":true,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"playerPhysics":{"bCoef":0,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":5.2,"cGroup":[],"gravity":[0,0],"radius":15,"kickback":0},"segments":[{"v0":0,"v1":1,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":2,"v1":3,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":0,"v1":4,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":1,"v1":5,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":3,"v1":6,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":2,"v1":7,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"B3B6B6"},{"v0":4,"v1":8,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":8,"v1":9,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":9,"v1":7,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":5,"v1":10,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":10,"v1":11,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":11,"v1":6,"bias":0,"bCoef":0.1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"E0D5D6"},{"v0":12,"v1":13,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B3B6B6"},{"v0":14,"v1":15,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B3B6B6"},{"v0":13,"v1":14,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":["red","blue"],"cGroup":["redKO"],"color":"B3B6B6"},{"v0":14,"v1":13,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"B3B6B6"},{"v0":13,"v1":14,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":17,"v1":16,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":16,"v1":17,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":19,"v1":18,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":18,"v1":19,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":18,"v1":19,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":19,"v1":18,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":21,"v1":22,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":22,"v1":23,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":20,"v1":24,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":23,"v1":25,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":26,"v1":27,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":30,"v1":31,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":32,"v1":33,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":34,"v1":35,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":12,"v1":36,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":15,"v1":37,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":42,"v1":43,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"3BC7FA"},{"v0":46,"v1":47,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":48,"v1":49,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":50,"v1":51,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":52,"v1":53,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":42,"v1":54,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":55,"v1":56,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":57,"v1":58,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":43,"v1":59,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"7BFD"},{"v0":60,"v1":61,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"9B1617"},{"v0":60,"v1":62,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":63,"v1":64,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":65,"v1":66,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":61,"v1":67,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"CE142E"},{"v0":68,"v1":69,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":70,"v1":71,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":72,"v1":73,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":74,"v1":75,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":76,"v1":77,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":78,"v1":79,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":80,"v1":81,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":82,"v1":83,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":84,"v1":85,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":86,"v1":87,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":88,"v1":89,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":90,"v1":91,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":92,"v1":93,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":94,"v1":95,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":96,"v1":97,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":98,"v1":99,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":101,"v1":100,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":100,"v1":101,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":100,"v1":101,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":101,"v1":100,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":103,"v1":102,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":103,"v1":102,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":102,"v1":103,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":105,"v1":104,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":105,"v1":104,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":104,"v1":105,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":107,"v1":106,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":107,"v1":106,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":106,"v1":107,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":109,"v1":108,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":109,"v1":108,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":108,"v1":109,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":111,"v1":110,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":111,"v1":110,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":110,"v1":111,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":113,"v1":112,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":113,"v1":112,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":112,"v1":113,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":115,"v1":114,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":115,"v1":114,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":114,"v1":115,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":117,"v1":116,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":180,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":117,"v1":116,"bias":0,"bCoef":1,"curve":110,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":116,"v1":117,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":25,"v1":118,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":119,"v1":120,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":121,"v1":122,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":24,"v1":121,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":123,"v1":124,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":124,"v1":20,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":125,"v1":126,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":127,"v1":128,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":130,"v1":129,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"},{"v0":132,"v1":131,"bias":0,"bCoef":1,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":[],"color":"B3B6B6"}],"vertexes":[{"x":-1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-11,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":11,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-787,"y":205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1543.25,"y":644,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1543.25,"y":154,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":-635,"bCoef":1,"cMask":[],"cGroup":[]},{"x":0,"y":635,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1202,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1202,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1202,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1202,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1198,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1198,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1199,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1199,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1201,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-42,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-15,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":12,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":39,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-42,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-15,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":12,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":39,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":69,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":787,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":5,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":610,"y":-305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-300,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-610,"y":-305,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1075,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1075,"y":470,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":-1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},{"x":1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]}],"goals":[{"p0":[-1206,110],"p1":[-1206,-110],"team":"red"},{"p0":[1206,110],"p1":[1206,-110],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]}],"discs":[{"pos":[-1200,-110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"B2011A","cMask":["all"],"cGroup":["all"]},{"pos":[1200,-110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"8B","cMask":["all"],"cGroup":["all"]},{"pos":[-1200,110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"B2011A","cMask":["all"],"cGroup":["all"]},{"pos":[1200,110],"speed":[0,0],"gravity":[0,0],"radius":6,"bCoef":0.5,"invMass":0,"damping":0.99,"color":"8B","cMask":["all"],"cGroup":["all"]},{"pos":[1200,600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"54EC","cMask":[],"cGroup":[]},{"pos":[-1200,600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FF3455","cMask":[],"cGroup":[]},{"pos":[-1200,-600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FF3455","cMask":[],"cGroup":[]},{"pos":[1200,-600],"speed":[0,0],"gravity":[0,0],"radius":4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"54EC","cMask":[],"cGroup":[]},{"pos":[-1228,142],"speed":[0,0],"gravity":[0,0],"radius":0,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"B3B6B6","cMask":["all"],"cGroup":["all"]}],"joints":[],"ballPhysics":{"speed":[0,0],"gravity":[0,0],"radius":6.25,"bCoef":0.35,"invMass":1.5,"damping":0.99,"color":"FFD700","cMask":["all"],"cGroup":["ball","kick","score"]}}`

var practice = `{"name":"FAH Training by Jijazo","width":765,"height":350,"bg":{"type":"hockey"},"vertexes":[{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"cMask":["ball"]},{"x":700,"y":320,"cMask":["ball"]},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"cMask":["ball"]},{"x":700,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-32,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-32,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-23.5,"y":-350,"cMask":["ball"]},{"x":-23.5,"y":350,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-0.5,"y":-322,"cMask":["ball"]},{"x":329,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":329,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":320.5,"y":-348,"cMask":["ball"]},{"x":320.5,"y":352,"cMask":["ball"]},{"x":-10,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-10,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":-320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-15,"y":8.5,"cMask":["ball"]},{"x":312,"y":8.5,"cMask":["ball"]},{"x":-15,"y":-8.5,"cMask":["ball"]},{"x":312,"y":-8.5,"cMask":["ball"]},{"x":-15,"y":0,"cMask":["ball"]},{"x":312,"y":0,"cMask":["ball"]},{"x":-18.5,"y":-350,"cMask":["ball"]},{"x":-18.5,"y":350,"cMask":["ball"]},{"x":315.5,"y":-348,"cMask":["ball"]},{"x":315.5,"y":352,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-726,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-726,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":734,"y":-115,"bCoef":2.5,"cMask":["ball"]},{"x":734,"y":115,"bCoef":2.5,"cMask":["ball"]},{"x":727.5,"y":-115,"bCoef":1.5,"cMask":["ball"]},{"x":727.5,"y":115,"bCoef":1.5,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-734,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-708,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-735,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":-709,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":706,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":732,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":705,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":731,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":-194,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":36,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":-116,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":114,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":108,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":108,"bCoef":1.5,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":2,"v1":3,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":3,"v1":4,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":7,"v1":8,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":21,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":35,"v1":34,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":35,"v1":37,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":41,"v1":40,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":42,"v1":43,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":45,"v1":44,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":44,"v1":45,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":47,"v1":46,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":46,"v1":47,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":50,"v1":49,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":49,"v1":50,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":52,"v1":51,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":51,"v1":52,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":54,"v1":55,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":55,"v1":56,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":56,"v1":57,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":58,"v1":59,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":59,"v1":60,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":60,"v1":61,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":62,"v1":63,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":64,"v1":65,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":66,"v1":67,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":68,"v1":69,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":70,"v1":71,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":75,"v1":76,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":85,"v1":86,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":87,"v1":88,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":90,"v1":91,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":92,"v1":93,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":94,"v1":95,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":96,"v1":97,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":98,"v1":99,"cMask":["ball"],"color":"FFFFFF"},{"v0":100,"v1":101,"cMask":["ball"],"color":"FFFFFF"},{"v0":102,"v1":103,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":104,"v1":105,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":106,"v1":107,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":108,"v1":109,"bCoef":0.1,"cMask":["wall"],"color":"F80000"},{"v0":110,"v1":111,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":112,"v1":113,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":114,"v1":115,"bCoef":2.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":118,"v1":119,"bCoef":0.1,"cMask":["wall"],"color":"F8"},{"v0":120,"v1":121,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":122,"v1":123,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":124,"v1":125,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":126,"v1":127,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":132,"v1":133,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":134,"v1":135,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-765.1,0],"radius":0.01,"bCoef":440,"invMass":0,"color":"0"},{"pos":[765.1,0],"radius":0.1,"bCoef":440,"invMass":0,"color":"0"},{"pos":[-700,90],"radius":5.5,"invMass":0},{"pos":[-700,-90],"radius":5.5,"invMass":0},{"pos":[700,90],"radius":5.5,"invMass":0},{"pos":[700,-90],"radius":5.5,"invMass":0},{"pos":[-318.7777786254883,-99.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-319.7777786254883,86.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[478.2222213745117,156.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[458.2222213745117,-173.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[138.22222137451172,116.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-316.7777786254883,-275.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-323.7777786254883,265.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","cameraFollow":"player","redSpawnPoints":[[-90,0]],"blueSpawnPoints":[[370,0]]}`
// Variables

class RecInfo {
    constructor () {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

const camisetasselec = [
    {id: "arg", nombre: "Argentina", uniform: [{ angle: 0, mainColor: [0x21BABF, 0xFFFFFF, 0x21BABF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x370569, 0x370569, 0x3E0787], avatarColor: 0xA6A6A6}]},
    {id: "uru", nombre: "Uruguay", uniform: [{ angle: 90, mainColor: [0x47B8C4], avatarColor: 0x000000 }, { angle: 60, mainColor: [0xFFFFFF, 0xFFFFFF, 0x54F9FF], avatarColor: 0x000000 }]}
]

const camisx4 = [
    {id: "int", nombre: "Intel", uniform: [{ angle: 60, mainColor: [0x211F1F, 0x211F1F, 0x211F1F], avatarColor: 0xFFE53E }, { angle: 40, mainColor: [0x211F1F, 0xFFFFFF, 0x211F1F], avatarColor: 0x998F00 }]},
    {id: "drk", nombre: "Dark Silence FC", uniform: [{ angle: 50, mainColor: [0xB30202, 0x000000, 0xB30202], avatarColor: 0xFFFFFF }, { angle: 50, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }]},
    {id: "bar", nombre: "Barreristas FC", uniform: [{ angle: 1300, mainColor: [0xC40000, 0xFFFFFF], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFBE26, 0xC97718, 0xFFBE26], avatarColor: 0x000000 }]},
    {id: "fcf", nombre: "FC Forenses", uniform: [{ angle: 60, mainColor: [0x262623, 0x000408, 0x002033], avatarColor: 0x141414 }, { angle: 60, mainColor: [0x23A1ED], avatarColor: 0xFFFFFF }]},
    {id: "ph", nombre: "Pichang Heroes", uniform: [{ angle: 60, mainColor: [0xFFFFFC, 0xBAB505, 0xFFFEFA], avatarColor: 0x225275 }, { angle: 60, mainColor: [0x004F05, 0x006606, 0x00A30A], avatarColor: 0x000000 }, {angle: 60, mainColor: [0xC5C3C8], avatarColor: 0x25654A}]},
    {id: "tka", nombre: "Tekya FC", uniform: [{ angle: 90, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }, { angle: 60, mainColor: [0x000000, 0xFF0000, 0xFF0000], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x949494], avatarColor: 0x000000}]},
    {id: "lmf", nombre: "Lions of Miami FC", uniform: [{ angle: 235, mainColor: [0x000000, 0x171717, 0x303030	], avatarColor: 0xC4C4C4 }, { angle: 60, mainColor: [0x000000, 0x000000, 0x8A8500], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x5C5C5C], avatarColor: 0xFFEE00}]},
    {id: "kl", nombre: "Kalis", uniform: [{ angle: 60, mainColor: [0x343446], avatarColor: 0xD1BA49 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, {angle: 0, mainColor: [0xFFA8DF], avatarColor: 0x000000}]},
    {id: "god", nombre: "God FC", uniform: [{ angle: 60, mainColor: [0xFFCE2E, 0xFFCE2E], avatarColor: 0x0F0F0F }, { angle: 35, mainColor: [0x333433, 0x5A6873, 0x333433], avatarColor: 0xFBDA4B }, {angle: 60, mainColor: [0x008C7E], avatarColor: 0x0D0D0D}]},
    {id: "icl", nombre: "Inter de Chile", uniform: [{ angle: 0, mainColor: [0x1914AB, 0x000000, 0x1914AB], avatarColor: 0xD9AA28 }, { angle: 60, mainColor: [0x000000, 0x004077, 0x000000], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x82FF8F], avatarColor: 0x000000}]},
    {id: "rd", nombre: "Redragon HC", uniform: [{ angle: 60, mainColor: [0x000000, 0x0A0A0A, 0x0F0F0F], avatarColor: 0xFF0000 }, { angle: 60, mainColor: [0x000000, 0x0A0A0A, 0x0F0F0F], avatarColor: 0xE6D87E }, {angle: 90, mainColor: [0x4F4F38, 0x4F0000, 0x4F4F38], avatarColor: 0x000000}]},
    {id: "cc", nombre: "Colo Colo", uniform: [{ angle: 40, mainColor: [0xFFFFFF, 0xEDEDED, 0xFDF7FF], avatarColor: 0x000000 }, { angle: 30, mainColor: [0xF2F2F2, 0xEDEDED, 0xE8E8E8], avatarColor: 0x050326 }, {angle: 60, mainColor: [0x0800FF, 0x0800FF, 0x000000], avatarColor: 0xFFFFFF}]}
 ]

const camisx3 = [
    {id: "int", nombre: "Intel",  uniform: [{ angle: 60, mainColor: [0x211F1F, 0x211F1F, 0x211F1F], avatarColor: 0xFFE53E }, { angle: 40, mainColor: [0x211F1F, 0xFFFFFF, 0x211F1F], avatarColor: 0x998F00 }]},
    {id: "ph", nombre: "Pichang Heroes", uniform: [{ angle: 60, mainColor: [0xFFFFFC, 0xBAB505, 0xFFFEFA], avatarColor: 0x225275 }, { angle: 60, mainColor: [0x004F05, 0x006606, 0x00A30A], avatarColor: 0x000000 }, {angle: 60, mainColor: [0xC5C3C8], avatarColor: 0x25654A}]},
    {id: "lmf", nombre: "Lyons of Miami", uniform: [{ angle: 235, mainColor: [0x000000, 0x171717, 0x303030	], avatarColor: 0xC4C4C4 }, { angle: 60, mainColor: [0x000000, 0x000000, 0x8A8500], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x5C5C5C], avatarColor: 0xFFEE00}]},
    {id: "god", nombre: "God FC", uniform: [{ angle: 60, mainColor: [0xFFCE2E, 0xFFCE2E], avatarColor: 0x0F0F0F }, { angle: 35, mainColor: [0x333433, 0x5A6873, 0x333433], avatarColor: 0xFBDA4B }, {angle: 60, mainColor: [0x008C7E], avatarColor: 0x0D0D0D}]},
    {id: "cc", nombre: "Colo Colo", uniform: [{ angle: 40, mainColor: [0xFFFFFF, 0xEDEDED, 0xFDF7FF], avatarColor: 0x000000 }, { angle: 30, mainColor: [0xF2F2F2, 0xEDEDED, 0xE8E8E8], avatarColor: 0x050326 }, {angle: 60, mainColor: [0x0800FF, 0x0800FF, 0x000000], avatarColor: 0xFFFFFF}]},
    {id: "kl", nombre: "Kalis", uniform: [{ angle: 60, mainColor: [0x343446], avatarColor: 0xD1BA49 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, {angle: 0, mainColor: [0xFFA8DF], avatarColor: 0x000000}]},
    {id: "drk", nombre: "Dark Silence", uniform: [{ angle: 50, mainColor: [0xB30202, 0x000000, 0xB30202], avatarColor: 0xFFFFFF }, { angle: 50, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }]},
    {id: "icl", nombre: "Inter de Chile", uniform: [{ angle: 0, mainColor: [0x1914AB, 0x000000, 0x1914AB], avatarColor: 0xD9AA28 }, { angle: 60, mainColor: [0x000000, 0x004077, 0x000000], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x82FF8F], avatarColor: 0x000000}]},
    {id: "fcf", nombre: "FCF Forenses", uniform: [{ angle: 60, mainColor: [0x262623, 0x000408, 0x002033], avatarColor: 0x141414 }, { angle: 60, mainColor: [0x23A1ED], avatarColor: 0xFFFFFF }]}
]

const camisetasx7 = [
    {id: "t1", nombre: "SK Telecom T1", uniform: [{ angle: 60, mainColor: [0x000000], avatarColor: 0xE60707 }, { angle: 60, mainColor: [0xFFFFFF], avatarColor: 0xE60707 }, { angle: 60, mainColor: [0xE60707], avatarColor: 0x000000 }]},
    {id: "syh", nombre: "Segurola y Habana", uniform: [{ angle: 90, mainColor: [0xE3C015, 0xEDC916, 0xFFD817], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000000, 0x1F1A03, 0x252606], avatarColor: 0xE3C015 }, { angle: 90, mainColor: [0x0C6666, 0x0D7070, 0x0F8585], avatarColor: 0xA3FFED }]},
    {id: "fcz", nombre: "Futbol Club Zeballos", uniform: [{ angle: 60, mainColor: [0x000000, 0xFFFFFF, 0xEFFF0D], avatarColor: 0xFFFFFF }, { angle: 60, mainColor: [0x000000, 0xFFFFFF, 0xEE05FF], avatarColor: 0xE3C015 }]},
    {id: "dk", nombre: "Deportivo Kaiser", uniform: [{ angle: 30, mainColor: [0x042566, 0x052B7A, 0x063391], avatarColor: 0xFFFFFF }, { angle: 30, mainColor: [0xF2F2F2, 0xEDEDED, 0xE8E8E8], avatarColor: 0x050326 }, {angle: 60, mainColor: [0x0800FF, 0x0800FF, 0x000000], avatarColor: 0xFFFFFF}]},
    {id: "ldg", nombre: "Ludogorets", uniform: [{ angle: 60, mainColor: [0x0A1F09, 0x113011], avatarColor: 0x0FFF00 }, { angle: 60, mainColor: [0x0D0D0D, 0x171717, 0x0D0D0D], avatarColor: 0x044200 }, {angle: 60, mainColor: [0x009E00, 0x009E00, 0xFFFFFF], avatarColor: 0x000000}]},
    {id: "izk", nombre: "Inarizaki", uniform: [{ angle: 90, mainColor: [0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x0000000 }]},
    {id: "bf", nombre: "Benfica", uniform: [{ angle: 30, mainColor: [0x960000], avatarColor: 0xFFFFFF }, { angle: 30, mainColor: [0x55000F, 0x77000F, 0x99000F], avatarColor: 0xFFE14D }, { angle: 30, mainColor: [0x1C1C1C], avatarColor: 0xC9C300 }]},
    {id: "ovj", nombre: "Ovejeros FC", uniform: [{ angle: 46, mainColor: [0x242426, 0x262626, 0x121212], avatarColor: 0xFFFFFF }, { angle: 70, mainColor: [0x000075, 0x030061, 0x020036], avatarColor: 0xC9C17B}, { angle: 70, mainColor: [0x91FF00, 0xA2FF00, 0x88FF00], avatarColor: 0x000000}]},
    {id: "stp", nombre: "St Patrick's Club", uniform: [{ angle: 90, mainColor: [0xFF1717, 0xBA0B0B], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0xD40000}]},
    {id: "urrs", nombre: "URRS", uniform: [{ angle: 60, mainColor: [0xFF4529, 0xF54227, 0xEB3F23], avatarColor: 0xFFFBE0 }, { angle: 60, mainColor: [0xFFFAD9, 0xF7F3D2, 0xF2EDCE], avatarColor: 0xF54227}]},
    {id: "jc", nombre: "Jeepers Creepers", uniform: [{ angle: 60, mainColor: [0x000000, 0x0A0A0A, 0x0F0F0F], avatarColor: 0xFFFFFF }, { angle: 60, mainColor: [0x6E6E6E6E, 0x5E5E5E5E, 0x525252], avatarColor: 0x000000}]},
    {id: "npm", nombre: "Napalm", uniform: [{ angle: 60, mainColor: [0x0008FF], avatarColor: 0xFFE600 }, { angle: 0, mainColor: [0xF8FF2B, 0x00E5FF], avatarColor: 0x000000}]},
    {id: "rbl", nombre: "RedBull London", uniform: [{ angle: 100, mainColor: [0xFFFFFF, 0xFF0011], avatarColor: 0x665A77 }, { angle: 100, mainColor: [0x000000], avatarColor: 0xFFD938}]}
]

const camisetasTodas = [
    {id: "int", nombre: "Intel", uniform: [{ angle: 60, mainColor: [0x211F1F, 0x211F1F, 0x211F1F], avatarColor: 0xFFE53E }, { angle: 40, mainColor: [0x211F1F, 0xFFFFFF, 0x211F1F], avatarColor: 0x998F00 }]},
    {id: "drk", nombre: "Dark Silence FC", uniform: [{ angle: 50, mainColor: [0xB30202, 0x000000, 0xB30202], avatarColor: 0xFFFFFF }, { angle: 50, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }]},
    {id: "bar", nombre: "Barreristas FC", uniform: [{ angle: 1300, mainColor: [0xC40000, 0xFFFFFF], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFBE26, 0xC97718, 0xFFBE26], avatarColor: 0x000000 }]},
    {id: "fcf", nombre: "FC Forenses", uniform: [{ angle: 60, mainColor: [0x262623, 0x000408, 0x002033], avatarColor: 0x141414 }, { angle: 60, mainColor: [0x23A1ED], avatarColor: 0xFFFFFF }]},
    {id: "ph", nombre: "Pichang Heroes", uniform: [{ angle: 60, mainColor: [0xFFFFFC, 0xBAB505, 0xFFFEFA], avatarColor: 0x225275 }, { angle: 60, mainColor: [0x004F05, 0x006606, 0x00A30A], avatarColor: 0x000000 }, {angle: 60, mainColor: [0xC5C3C8], avatarColor: 0x25654A}]},
    {id: "tka", nombre: "Tekya FC", uniform: [{ angle: 90, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }, { angle: 60, mainColor: [0x000000, 0xFF0000, 0xFF0000], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x949494], avatarColor: 0x000000}]},
    {id: "lmf", nombre: "Lions of Miami FC", uniform: [{ angle: 235, mainColor: [0x000000, 0x171717, 0x303030	], avatarColor: 0xC4C4C4 }, { angle: 60, mainColor: [0x000000, 0x000000, 0x8A8500], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x5C5C5C], avatarColor: 0xFFEE00}]},
    {id: "kl", nombre: "Kalis", uniform: [{ angle: 60, mainColor: [0x343446], avatarColor: 0xD1BA49 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, {angle: 0, mainColor: [0xFFA8DF], avatarColor: 0x000000}]},
    {id: "god", nombre: "God FC", uniform: [{ angle: 60, mainColor: [0xFFCE2E, 0xFFCE2E], avatarColor: 0x0F0F0F }, { angle: 35, mainColor: [0x333433, 0x5A6873, 0x333433], avatarColor: 0xFBDA4B }, {angle: 60, mainColor: [0x008C7E], avatarColor: 0x0D0D0D}]},
    {id: "icl", nombre: "Inter de Chile", uniform: [{ angle: 0, mainColor: [0x1914AB, 0x000000, 0x1914AB], avatarColor: 0xD9AA28 }, { angle: 60, mainColor: [0x000000, 0x004077, 0x000000], avatarColor: 0xFFFFFF }, {angle: 60, mainColor: [0x82FF8F], avatarColor: 0x000000}]},
    {id: "rd", nombre: "Redragon HC", uniform: [{ angle: 60, mainColor: [0x000000, 0x0A0A0A, 0x0F0F0F], avatarColor: 0xFF0000 }, { angle: 60, mainColor: [0x000000, 0x0A0A0A, 0x0F0F0F], avatarColor: 0xE6D87E }, {angle: 90, mainColor: [0x4F4F38, 0x4F0000, 0x4F4F38], avatarColor: 0x000000}]},
    {id: "cc", nombre: "Colo Colo", uniform: [{ angle: 40, mainColor: [0xFFFFFF, 0xEDEDED, 0xFDF7FF], avatarColor: 0x000000 }, { angle: 30, mainColor: [0xF2F2F2, 0xEDEDED, 0xE8E8E8], avatarColor: 0x050326 }, {angle: 60, mainColor: [0x0800FF, 0x0800FF, 0x000000], avatarColor: 0xFFFFFF}]}
 ]

var discordWebhookNewPassword = 'https://discord.com/api/webhooks/1148267046757478451/Ibjv0OdTvei8etPA0Q_T2vNXwydLhha0RtFKlui8zoOpA66A2xIB_bb9TOpZzh4lm482'
var discordWebhookSanciones = 'https://discord.com/api/webhooks/1148052194369736816/sv4Doqe4vHRukeUesPoDRsfgOxdmntw5CNtS48j3BnDzSiTWfZQ0QGsnNORBlfVLmCkn'
var discordWebhookFirmasPublicas = 'https://discord.com/api/webhooks/1146958562011140226/ksSlsv9BQ6Ge-fQj2U8LZioUytPn-q942kj-DOHNx5XTIhr4YQADr1Kwn9xzW6urY8CC'
var discordWebhookFirmasPrivadas = 'https://discord.com/api/webhooks/1148260007582912542/qA8myB-SyaR-kswbVw5zYxND83TRilqErrqmbpWVBowkuca1DqabKTaV4qqWEQRz-lug'
var gameWebhook = ['https://discord.com/api/webhooks/1146961695869251694/k-J8d-DdloPJHtILz7sAnqkzSGNlkJFBs6v3mNGDcFP7ZRwdKWpvkCNDfko6bp2zwk2a', 'https://discord.com/api/webhooks/1146961695869251694/k-J8d-DdloPJHtILz7sAnqkzSGNlkJFBs6v3mNGDcFP7ZRwdKWpvkCNDfko6bp2zwk2a', "https://discord.com/api/webhooks/1146961695869251694/k-J8d-DdloPJHtILz7sAnqkzSGNlkJFBs6v3mNGDcFP7ZRwdKWpvkCNDfko6bp2zwk2a"]
var firmas = [];
var authArray = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];
var camisetasNow = [
    {id: "red", nombre: "Red team", uniform: [{ angle: 0, mainColor: [0xED6A5A], avatarColor: 0xffffff }]},
    {id: "blue", nombre: "Blue team", uniform:[{ angle: 0, mainColor: [0x5995ED], avatarColor: 0xffffff }]}
];
var locvisalt = ["loc", "vis", "alt"];
var tipCami = {red: "loc", blue: "loc"}
var possession = [0, 0];
var actionZoneHalf = [0, 0];
var mapSelect = 0;
var playerRadius = 15;
var ballRadius = 6.25;
var triggerDistance = playerRadius + ballRadius + 0.01;
var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var n = '\n'
var lastTouches = Array(2).fill(null);
var lastTeamTouched;
var fetchRecordingVariable = true;
var oficialMode = false;
var enjuego = false;
var recInfo = new RecInfo();

// Room Functions

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn]
    welcomeMsg(player);
    updateTeams();
    displayAdminMessage();
}

room.onPlayerLeave = function (player) {
    displayAdminMessage();
    updateTeams();
}

room.onPlayerAdminChange = function (changedPlayer) {
    displayAdminMessage();
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    updateTeams();
}

room.onGameStart = function (byPlayer) {
    recInfo = new RecInfo();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    lastTouches = Array(2).fill(null);
    enjuego = true;
    if (oficialMode == true) {
        announce("Comienza el partido.", null, null, "bold", 2)
        announce(`${camisetasNow[0].nombre} vs ${camisetasNow[1].nombre}`)
        announce("La partida esta siendo grabada, sonrian :).")
    }
}

room.onGameStop = function (byPlayer) {
    updateTeams();
    recInfo.rec = room.stopRecording();
    fetchSummaryEmbed(recInfo);
    if (fetchRecordingVariable) {
        setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, recInfo);
    }
    if (oficialMode == true) {
        announce("La partida fue grabada y enviada a discord.")
        announce(`ID de la grabación: ${getIdReport()}`)
    }
    enjuego = false;
}

room.onGameTick = function () {
    const scores = room.getScores();
    recInfo.scores = scores;
    getLastTouchOfTheBall();
    getGameStats();
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
}

room.onTeamGoal = function (team) {
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    announce(
        goalString,
        null,
        team == 1 ? 0xED6A5A : 0x5995ED,
        null,
        1
    );
}

room.onPlayerBallKick = function (player) {
        var ballPosition = room.getBallPosition();
        if (recInfo.touchArray.length == 0 || player.id != recInfo.touchArray[recInfo.touchArray.length - 1].player.id) {
            lastTeamTouched = player.team;
            recInfo.touchArray.push(
                new BallTouch(
                    player,
                    recInfo.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                recInfo.touchArray,
                recInfo.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                recInfo.touchArray,
                recInfo.touchArray.length - 2,
                getGoalGame()
            );
        }
};

room.onPlayerChat = function (player, message) {
    if (message.startsWith("!")) {
        message = message.substr(1);
		let args = message.split(" ");
		let superAdminCode = "benzobestfounder";

        if (args[0] == "admin" && args.length == 1) {
			if (isAdminPresent() == false) {
				room.setPlayerAdmin(player.id, true);
			}
			else {
				announce("Ya hay un admin presente en la sala.", player.id, 0xff0000);
			}
		}
        else if (args[0] == "admin" && args.length == 2) {
            if (args[1] == superAdminCode) {
				room.setPlayerAdmin(player.id, true);
				announce("[✅] Has obtenido admininistrador por contraseña correctamente.", player.id, 0x00ff00, "normal", 2);
			}
            else if (args[1] == contraseñadeadmin) {
                room.setPlayerAdmin(player.id, true);
                announce("[✅] Has obtenido admininistrador por contraseña correctamente.", player.id, 0x00ff00, "normal", 2);
            }
        }
        else if (args[0] == "help") {
            announce("Comandos disponibles: !help, !bb, !nv, !admin, !liga, !firmo, !firmas, t [msg], @@[Jugador] [msg]", player.id, null, "small", 2)
            if (player.admin) { 
                announce("Comandos de Admin: !rr, !swap, !clearbans, !oficial, !x3, !x4, !x7, !acf, !practice, !setpassword, !clearpassword, !camisx4, !camisx3, !sancion.", player.id, 0xffff00, "small")
                announce("El uso erroneo del OFICIAL se sancionara.", player.id, null, "small")
            }
        }
        else if (args[0] == "bb" || args[0] == "nv" && args.length == 1) {
            room.kickPlayer(player.id, "Adios!! [👋]")
        }
        else if (args[0] == "liga") {
            announce("Discord de LFA: https://discord.gg/9vXQXPpxNd", player.id, null, null, 2)
        }
        else if (args[0] == "firmas") {
           if (oficialMode == true) { 
            announce(`Firmas: ${firmas}.`, player.id, 0x00ff00, "bold", 2)
           }
           else {
            announce("[✖] El modo OFICIAL no fue activado.", player.id, 0xff0000, "bold", 2)
           }
        }
        else if (args[0] == "firmo") {
            if (oficialMode == true) {
                if (!firmas.includes(player.name)) {

                    firmas.length > 0 ? firmas.push(` ${player.name}`) : firmas.push(player.name)
                    discordLogFirmas(player);
                    discordLogFirmasPrivadas(player)
                    announce(`[✅] ${player.name}, firmó correctamente.`, null, 0x00ff00, "bold", 2)
                }
                else {
                    announce("[✖] Ya firmaste anteriormente.", player.id, 0xff0000, "bold", 2)
                }
            }
            else {
                announce("[✖] El modo OFICIAL no fue activado.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "rr") {
            if (player.admin) {
                room.stopGame();
                room.startGame();
                announce(`[✅] ${player.name}, reinició el partido.`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] Debes ser un administrador para utilizar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "swap") {
            if (player.admin) {
                let players = room.getPlayerList().filter((player) => player.id != 0);
                if (players.length == 0) return false;
                players.forEach(function (player) {
                    if (player.team == 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team == 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });
                announce(`[🔄] Los equipos fueron cambiados de lado por ${player.name}.`, null, 0x00ff00, "bold", 2);
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "clearbans") {
            if (player.admin) {
                room.clearBans();
                announce(`[✅] ${player.name}, borró los baneos.`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "oficial") {
            if (player.admin) {
                if (oficialMode == false) {
                    oficialMode = true;
                    announce(`[✅] ${player.name}, activo el modo OFICIAL. El comando !firmo esta habilitado.`, null, 0x00ff00, "bold", 2)
                    discordLogOficial(player)
                }
                else if (oficialMode == true) {
                    oficialMode = false;
                    firmas = [];
                    discordLogOficial(player)
                    announce(`[✅] ${player.name}, desactivo el modo OFICIAL.`, null, 0x00ff00, "bold", 2)
                }
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if(args[0] == "tula"){
            var cm = getRandomInt(21);
            if(cm <= 10){
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! La wea chica 😂`, null, 0x00ff00, "bold", 2)
            } else if(cm <= 15){
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! Nada mal!!!`, null, 0x00ff00, "bold", 2)
            } else {
                announce(`¡La tula de ${player.name} mide ${cm} centímetros! La media wea wn`, null, 0x00ff00, "bold", 2)  
            }
            
        }
        else if (args[0] == "x3") {
            if  (player.admin) {
                room.stopGame();
                room.setCustomStadium(futsalx3);
                room.startGame();
                mapSelect = 1;
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal x3 by Bazinga"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "x4") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(futsalx4);
                room.startGame();
                mapSelect = 0;
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal x4 ; by Bazinga!"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "x7") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(futsalx7);
                room.startGame();
                mapSelect = 2;
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal x7 by Bazinga!"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        } 
        else if(args[0] == "sancion"){
        	if(player.admin){
        		if(args.length >= 4){
        			let msg = args[3] + " ";
        			for(i = 4; i < args.length; i++){
        				msg = msg + args[i];
        				msg = msg + " "
        			}
        			announce(`El jugador ${args[1]} ha sido sancionado. Motivo: ${msg}`, player.id, 0x00ffff, "bold", 2)	
        			announce(`[✅] El jugador ${args[1]} ha sido sancionado correctamente.`, player.id, 0x00ff00, "bold", 2)	
        			
        			sancionar(args[1], args[2], msg, player.name)
        		} else {
					announce("[✖] Uso incorrecto! El uso es !sancion <jugador> <equipo> <razon>", player.id, 0xff0000, "bold", 2)	
        		}
        	} else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
    	   	}
        }
        else if (args[0] == "acf") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(acf);
                room.startGame();
                mapSelect = 0;
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal ACF"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        } else if(args[0] == "practice"){
        	 if (player.admin) {
                room.stopGame();
                room.setCustomStadium(practice);
                room.startGame();
                mapSelect = 2;
                announce(`[✅] ${player.name}, cambió el mapa a "Mapa de Practica"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "setpassword" && args.length == 1) {
            if (player.admin) {
             announce("Uso: !setpassword [contraseña]", player.id, null, "bold", 2)           
            }
            else {
             announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            } 
        }
        else if (args[0] == "setpassword" && args.length == 2) {
             if (player.admin) {
              sendNewPassword(args[1], player.name)
              room.setPassword(`${args[1]}`)
              announce(`[✅] La contraseña fue cambiada correctamente.`, null, 0x00ff00, "bold", 2)       
              announce(`[MP] Ahora la contraseña es: ${args[1]}.`, player.id, null, "bold", 0);   
             }
             else {
              announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
             } 
        }
        else if (args[0] == "clearpassword") {
            if (player.admin) {
                room.setPassword(null)
                announce(`[✅] ${player.name}, borró la contraseña.`, null, 0x00ff00, "bold", 2) 
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            } 
        }
        else if (args[0] == "camisx4") {
            if (player.admin) {
                var camisetas = [];
                for (i = 0; i < camisx4.length; i++) {
                    if (i != 0) {                    
                        camisetas.push(` ${camisx4[i].nombre}: ${camisx4[i].id}`)
                    }    
                    else {
                        camisetas.push(`${camisx4[i].nombre}: ${camisx4[i].id}`)
                    }
                }
                announce(`${camisetas}.`, player.id)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "camisx3") {
            if (player.admin) {
                var camisetas = [];
                for (i = 0; i < camisx3.length; i++) {
                    if (i != 0) {                    
                        camisetas.push(` ${camisx3[i].nombre}: ${camisx3[i].id}`)
                    }    
                    else {
                        camisetas.push(`${camisx3[i].nombre}: ${camisx3[i].id}`)
                    }
                }
                announce(`${camisetas}.`, player.id)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "camisetasx7") {
            if (player.admin) {
                var camisetas = [];
                for (i = 0; i < camisetasx7.length; i++) {
                    if (i != 0) {                    
                        camisetas.push(` ${camisetasx7[i].nombre}: ${camisetasx7[i].id}`)
                    }    
                    else {
                        camisetas.push(`${camisetasx7[i].nombre}: ${camisetasx7[i].id}`)
                    }
                }
                announce(`${camisetas}.`, player.id)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "camisetasselec") {
            if (player.admin) {
                var camisetas = [];
                for (i = 0; i < camisetasselec.length; i++) {
                    if (i != 0) {                    
                        camisetas.push(` ${camisetasselec[i].nombre}: ${camisetasselec[i].id}`)
                    }    
                    else {
                        camisetas.push(`${camisetasselec[i].nombre}: ${camisetasselec[i].id}`)
                    }
                }
                announce(`${camisetas}.`, player.id)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "setcamiseta") {
            if (player.admin) {
                announce("Uso: ![ID]|2|3 red|blue    Ej: !oym red", player.id)
                announce("Este comando pondría la camiseta local de oym.")
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "swapcolors") {
            if (player.admin) {
                let res = locvisalt.indexOf(tipCami.red)
                let res2 = locvisalt.indexOf(tipCami.blue)
                let res3 = tipCami.red
                tipCami.red = tipCami.blue
                tipCami.blue = res3
                room.setTeamColors(1, camisetasNow[1].uniform[res2].angle, camisetasNow[1].uniform[res2].avatarColor, camisetasNow[1].uniform[res2].mainColor)
                room.setTeamColors(2, camisetasNow[0].uniform[res].angle, camisetasNow[0].uniform[res].avatarColor, camisetasNow[0].uniform[res].mainColor)

            let camisetasNow2 = [];

            camisetasNow2[0] = camisetasNow[1]
            camisetasNow[1] = camisetasNow[0]
            camisetasNow[0] = camisetasNow2[0]

            announce("[✅] Las camisetas fueron intercambiadas correctamente.", null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] && args.length == 2) {
            if (player.admin) {
                let locvisaltstr;
                let visOrAlt = false;

                if (args[0].slice(-1) == "2" ) {
                    visOrAlt = true;
                    locvisaltstr = 1;
                }
                else if (args[0].slice(-1) == "3" ) {
                    visOrAlt = true;
                    locvisaltstr = 2
                }
                else if (args[0].slice(-1) != Number) {
                    visOrAlt = false;
                    locvisaltstr = 0
                } else {
                    visOrAlt = true;
                    locvisaltstr = -1
                }

                let pos;

                visOrAlt == true ? pos = camisetasTodas.findIndex(t => t.id == args[0].slice(0, -1)) : pos = camisetasTodas.findIndex(t => t.id == args[0])


                if (pos != -1) {
                    let teamID = pos;
                    let equipo = args[1];

                    if (equipo != "red" && equipo != "blue") {
                        announce("[✖] Ese team no existe. red|blue", player.id, 0xff0000, "bold", 2)
                        return false;
                    }
                    else {
                        equipo == "red" ? equipo = 1 : equipo = 2

                        if (locvisaltstr != -1) {
                             if (camisetasTodas[teamID].uniform[locvisaltstr] != undefined) {
                                room.setTeamColors(equipo, camisetasTodas[teamID].uniform[locvisaltstr].angle, camisetasTodas[teamID].uniform[locvisaltstr].avatarColor, camisetasTodas[teamID].uniform[locvisaltstr].mainColor);
                                announce(`[✅] Se cambió la camiseta del ${args[1]}.`, null, 0x00ff00, "bold", 2)
                                let ant = camisetasNow[equipo - 1].nombre
                                camisetasNow[equipo - 1] = camisetasTodas[teamID];
                                let now = camisetasNow[equipo - 1].nombre
                                announce(`Antes: ${ant} Ahora: ${now}`)
                                equipo == 1 ? tipCami.red = locvisalt[locvisaltstr] : tipCami.blue = locvisalt[locvisaltstr]
                             }
                             else {
                                announce(`[✖] Este equipo no posee ese tipo de camiseta.`, player.id, 0xff0000, "bold", 2)
                                return false;
                             }
                        }
                        else {
                            announce(`[✖] Ese tipo de camiseta no existe. 2|3`, player.id, 0xff0000, "bold", 2)
                            return false;
                        }
                    }
                }
                else {
                    announce("[✖] Esa ID no existe.", player.id, 0xff0000, "bold", 2)
                    return false;
                }
            }
        }
        return false;
    }
    if (message.startsWith("t ")) {
		teamMsg = message.substring(1).trim();
		if (player.team == 1) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔴] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
			});
		}
		if (player.team == 2) {
			var players = room.getPlayerList().filter((player) => player.team == 2);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔵] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
			});
		}
		if (player.team == 0) {
			var players = room.getPlayerList().filter((player) => player.team == 0);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔘] " + player.name + ": " + teamMsg, teamPlayer.id, 0x9AADAA, "normal", 1);
			});
		}
		return false;
	}
    if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function (pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						announce("[MP a " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0x2DC4AB, "normal", 2);
						announce("[MP de " + player.name + "]: " + pmMsg, pmPlayer.id, 0x2DC4AB, "normal", 2);
						pmSent = true;
					}
				});
				if (pmSent == false) {
					whisper("No se encuentra el usuario '" + args[0] + "'", player.id, 0xFF71FF, "normal", 1);
				}
				return false;
			}
		}
	}
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (newStadiumName.toLowerCase().includes("x4")) {
        mapSelect = 0;
    }
    else if (newStadiumName.toLowerCase().includes("x3")) {
        mapSelect = 1;
    }
    else if (newStadiumName.toLowerCase().includes("x7")) {
        mapSelect = 3;
    }
}

// Custom functions

function welcomeMsg (player) {
    announce("           _____ ______", player.id, 0x53A8E9, "bold")
    announce("     /\   / ____|  ____|", player.id, 0x53A8E9, "bold", 2)
    announce("    /  \ | |    | |__ ", player.id, 0xD9DADB, "bold")
    announce("   / /\ \| |    |  __|", player.id, 0x53A8E9, "bold")
    announce("  / ____ \ |____| |   ", player.id, 0xD9DADB, "bold")
    announce(" /_/    \_\_____|_|   ", player.id, 0x53A8E9, "bold")
    announce(`Bienvenido ${player.name}, disfruta del partido! Usa !help para ver los comandos.`)
 	announce("Este es el host oficial para los partidos de ACF, para información sobre la liga, visita nuestro discord https://discord.gg/JzCH2BnGHn ")   
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
	if (isAdminPresent() == false) {
		announce("No hay admin presente", null, null, "bold", 0);
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

// Webhook functions

function discordLogOficial(player) {
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookFirmasPublicas}`)

	request.setRequestHeader('Content-type', 'application/json');
    let res;
    if (oficialMode == true) {
        res = "activó"
    }
    else {
        res = "desactivó"
    }

	var params = {
		username: 'ACF',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `✅ ${player.name} ${res} el modo OFICIAL.`,
                author:{
                    name: `${roomName}`,
                    icon_url: 'https://media.discordapp.net/attachments/863945026156101672/1076333759655321710/list-flat.png'
                },
                description: `:blue_circle: **Nombre:** ${player.name}`,
                footer: {
                    text: "Asociación Chilena de Futsal",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 15520676,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}

function discordLogFirmas(player) {
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookFirmasPublicas}`)

	request.setRequestHeader('Content-type', 'application/json');


	var params = {
		username: 'ACF',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `:pencil: ${player.name} firmó.`,
                author:{
                    name: `${roomName}`,
                    icon_url: 'https://media.discordapp.net/attachments/863945026156101672/1076333759655321710/list-flat.png'
                },
                description: `:blue_circle: **Nombre:** ${player.name}
                             `,
                fields: [{
                    name: ":page_with_curl: **Firmas:**",
                    value: `${firmas}.`,
                    inline: true
                }],
                footer: {
                    text: "Asociación Chilena de Futsal",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 15520676,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}

function discordLogFirmasPrivadas(player) {
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookFirmasPrivadas}`)

	request.setRequestHeader('Content-type', 'application/json');


	var params = {
		username: 'ACF',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `:pencil: ${player.name} firmó.`,
                author:{
                    name: `${roomName}`,
                    icon_url: 'https://media.discordapp.net/attachments/863945026156101672/1076333759655321710/list-flat.png'
                },
                description: `:blue_circle: **Nombre:** ${player.name}    
                				:small_orange_diamond: **IP:** ${authArray[player.id][1]}
                              :small_blue_diamond: **AUTH:** ${authArray[player.id][0]} `,
                fields: [{
                    name: ":page_with_curl: **Firmas:**",
                    value: `${firmas}.`,
                    inline: true
                }],
                footer: {
                    text: "Asociación Chilena de Futsal",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 15520676,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}

// Rec Webhook

function fetchRecording(recInfo) {
    if (gameWebhook[mapSelect] != "" && oficialMode == true) {
        let form = new FormData();
        form.append(null, new File([recInfo.rec], getRecordingName(recInfo), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook[mapSelect], {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

function getGameStats() {
        lastTeamTouched == 1 ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == 1 ? 0 : 1;
    let indexOtherTeam = team == 1 ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

function getGoalString(team) {
    var goalString;
    var scores = recInfo.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `[⚽] ${getTimeGame(scores.time)} GOL DE ${goalAttribution[0].name}! Asistencia de ${goalAttribution[1].name}. Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
                recInfo.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `[⚽] ${getTimeGame(scores.time)} GOL DE ${goalAttribution[0].name}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
                recInfo.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } 
        else if (goalAttribution[0].team != team){
            goalString = `[😂] ${getTimeGame(scores.time)} GOL ENCONTRA DE ${goalAttribution[0].name}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
            recInfo.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `[⚽] ${getTimeGame(scores.time)} GOL DEL ${team == 1 ? 'red' : 'blue'}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
        recInfo.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getGoalGame() {
    return recInfo.scores.red + recInfo.scores.blue;
}

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == 0) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                recInfo.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        recInfo.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    recInfo.touchArray,
                    recInfo.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    recInfo.touchArray,
                    recInfo.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (enjuego != false) {
        var playerLineup;
        if (changedPlayer.team == 1) {
            // player gets in red team
            var redLineupAuth = recInfo.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = recInfo.playerComp[0][ind];
                if (playerLineup.timeExit.includes(recInfo.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != recInfo.scores.time);
                } else {
                    playerLineup.timeEntry.push(recInfo.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [recInfo.scores.time],
                    []
                );
                recInfo.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == 2) {
            // player gets in blue team
            var blueLineupAuth = recInfo.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = recInfo.playerComp[1][ind];
                if (playerLineup.timeExit.includes(recInfo.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != recInfo.scores.time);
                } else {
                    playerLineup.timeEntry.push(recInfo.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [recInfo.scores.time],
                    []
                );
                recInfo.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = recInfo.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = recInfo.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(recInfo.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (recInfo.scores.time == 0) {
                    recInfo.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != recInfo.scores.time);
                }
            } else {
                playerLineup.timeExit.push(recInfo.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = recInfo.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = recInfo.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(recInfo.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (recInfo.scores.time == 0) {
                    recInfo.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != recInfo.scores.time);
                }
            } else {
                playerLineup.timeExit.push(recInfo.scores.time);
            }
        }
    }
}

function updateTeams() {
    players = room.getPlayerList();
    teamRed = players.filter((p) => p.team == 1);
    teamBlue = players.filter((p) => p.team == 2);
    teamSpec = players.filter((p) => p.team == 0);
}

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - Math.floor(t / 60) * 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getRecordingName(recInfo) {
    let d = new Date();
    let redCap = camisetasNow[0].id;
    let blueCap = camisetasNow[1].id;
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchGametimeReport(recInfo) {
    var fieldGametimeRed = {
        name: '🔴        **RED TEAM STATS**',
        value: `⌛ __**Game Time:**__${n}${n}`,
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `⌛ __**Game Time:**__${n}${n}`,
        inline: true,
    };
    var redTeamTimes = recInfo.playerComp[0].map((p) => [p.player, 0]);
    for (let i = 0; i < recInfo.playerComp[0].length; i++) {
        var player = recInfo.playerComp[0][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                redTeamTimes[i][1] += recInfo.scores.time - player.timeEntry[j];
            } else {
                redTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }
    var blueTeamTimes = recInfo.playerComp[1].map((p) => [p.player, 0]);
    for (let i = 0; i < recInfo.playerComp[1].length; i++) {
        var player = recInfo.playerComp[1][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                blueTeamTimes[i][1] += recInfo.scores.time - player.timeEntry[j];
            } else {
                blueTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}${n}`;
    }
    fieldGametimeRed.value += `${n}${blueTeamTimes.length - redTeamTimes.length > 0 ? `${n}`.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}${n}`;
    }
    fieldGametimeBlue.value += `${n}${redTeamTimes.length - blueTeamTimes.length > 0 ? `${n}`.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(recInfo) {
    var fieldReportRed = {
        name: '🔴        **RED TEAM STATS**',
        value: `📊 __**Player Stats:**__${n}${n}`,
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `📊 __**Player Stats:**__${n}${n}`,
        inline: true,
    };
    var goals = [[], []];
    for (let goal of recInfo.goals) {
        goals[goal.team - 1].push([goal.striker, goal.assist]);
    }
    var redActions = actionReportCountTeam(goals, 1);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != 1 ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}${n}`;
        }
    }
    var blueActions = actionReportCountTeam(goals, 22);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != 2 ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}${n}`;
        }
    }

    fieldReportRed.value += `${n}${blueActions.length - redActions.length > 0 ? `${n}`.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `${n}${redActions.length - blueActions.length > 0 ? `${n}`.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(recInfo) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    var logChannel = gameWebhook[mapSelect];
    var names = []
    if (oficialMode == true) {
        names[0] = camisetasNow[0].nombre
        names[1] = camisetasNow[1].nombre
    }
    else {
        names[0] = "Red Team"
        names[1] = "Blue Team"
    }
    var fields = [
        {
            name: `🔴 **${names[0]} Stats**`,
            value: `=====================${n}${n}`,
            inline: true,
        },
        {
            name: `🔵 **${names[1]} Stats**`,
            value: `=====================${n}${n}`,
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](recInfo);
        fields[0].value += fieldsReport[0].value + `${n}${n}`;
        fields[1].value += fieldsReport[1].value + `${n}${n}`;
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (recInfo.scores.red > recInfo.scores.blue) * 1 + (recInfo.scores.blue > recInfo.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `📝 MATCH REPORT #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(recInfo.scores.time)}** ` +
                    (win == 1 ? `**${names[0]}** ` : `${names[0]} `) + recInfo.scores.red +
                    ' - ' +
                    recInfo.scores.blue + (win == 2 ? ` **${names[1]}**` : ` ${names[1]}`) +
                    n + '```c'+ n +'Possession: ' + possRString + '% - ' + possBString + '%' +
                    `${n}Action Zone: ` + zoneRString + '% - ' + zoneBString + '%' + n + '```' + n + n,
                color: 15520676,
                fields: fields,
                footer: {
                    text: `Estos datos no están 100% verificados.${n}Recording: ${getRecordingName(recInfo)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName,
        avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
    };
    if (logChannel != '' && oficialMode == true) {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

room.setCustomStadium(futsalx4)    

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sancionar(jugador, equipo, razon, arbitro){
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookSanciones}`)

	request.setRequestHeader('Content-type', 'application/json');

    
	var params = {
		username: 'ACF | Sanciones',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `❌ ${jugador} ha sido sancionado.`,
                author:{
                    name: `Nueva sancion`,
                    icon_url: 'https://media.discordapp.net/attachments/1132681396863901760/1147977507648323594/logo_bacano.png?width=20&height=20'
                },
                description: `Equipo: ${equipo}  
                              Motivo: ${razon}
                               Árbitro a cargo de la sanción: ${arbitro}`,
                footer: {
                    text: "Asociación Chilena de Futsal",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 12345678,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}


function sendNewPassword(password, staff){
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookNewPassword}`)

	request.setRequestHeader('Content-type', 'application/json');

    
	var params = {
		username: 'ACF | Host oficial',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `✅ ${staff} ha cambio la contraseña.`,
                author:{
                    name: `Nueva contraseña host oficial.`,
                    icon_url: 'https://media.discordapp.net/attachments/1132681396863901760/1147977507648323594/logo_bacano.png?width=20&height=20'
                },
                description: `Nueva contraseña:** ${password}  **
                    `,
                footer: {
                    text: "Asociación Chilena de Futsal",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 12345678,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}