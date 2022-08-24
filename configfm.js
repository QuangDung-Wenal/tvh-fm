let config = {
   room1: {
     autoStart: true,
     roomName: `🏆 TVH - Đấu Kiếm - ⚔⚔ 🏆`,
	 
     noPlayer: true,
     maxPlayers: 3,
     public: true,
      geo: {code: "VN", lat: 11.9360, lon: 108.4172},
     roomScript: "/home/hqd_wendal/tvh-fm/fencing.js",
   },
   room2: {
     autoStart: true,
     roomName: `🏆 TVH - Đấu Vật - 🥊🥊 🏆`,
     noPlayer: true,
     maxPlayers: 3,
     public: true,
      geo: {code: "VN", lat: 11.9359, lon: 108.4172},
     roomScript: "/home/hqd_wendal/tvh-fm/mma.js",
   },


 };
 module.exports = config;
 
