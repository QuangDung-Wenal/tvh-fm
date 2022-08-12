let config = {
   room1: {
     autoStart: true,
     roomName: `🏆 Thế Vận Hội - Đấu Kiếm - ⚔⚔ 🏆`,
	 
     noPlayer: true,
     maxPlayers: 3,
     public: true,
     geo: {code: "VN", lat: 21.02888, lon: 105.85464},
     roomScript: "/home/hqd_wendal/tvh-fm/fencing.js",
   },
   room2: {
     autoStart: true,
     roomName: `🏆 Thế Vận Hội - Đấu Vật - 🥊🥊 🏆`,
     noPlayer: true,
     maxPlayers: 3,
     public: true,
     geo: {code: "VN", lat: 21.02888, lon: 105.85464},
     roomScript: "/home/hqd_wendal/tvh-fm/mma.js",
   },


 };
 module.exports = config;
 
