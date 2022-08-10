let config = {
   room1: {
     autoStart: true,
     roomName: `🏆 Thế Vận Hội 1 - Đấu Kiếm - Fencing 🏆`,
     noPlayer: true,
     maxPlayers: 3,
     public: true,
     geo: {code: "VN", lat: 22.63333, lon: 106.4},
     roomScript: "/home/hqd_wendal/tvh-fm/fencing.js",
   },
   room2: {
     autoStart: true,
     roomName: `🏆 Thế Vận Hội 1 - Đấu Vật - MMA 🏆`,
     noPlayer: true,
     maxPlayers: 3,
     public: true,
     geo: {code: "VN", lat:  22.63333, lon: 106.4},
     roomScript: "/home/hqd_wendal/tvh-fm/mma.js",
   },


 };
 module.exports = config;
 
