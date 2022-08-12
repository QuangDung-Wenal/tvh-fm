const roomName = "🏆 ---------Thế Vận Hội --------- 🏆";
const botName = "VolleyBot";
const maxPlayers = 3;
const roomPublic = false;
const geo = [{ "code": "IT", "lat": 41.9, "lon": 12.5 },{code: "VN", lat: 10.957413  , lon: 106.842687}, {code: "VN", lat: 21.02880, lon: 105.85464},];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[2],noPlayer:true });

const scoreLimit = 7;
const timeLimit = 0;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(false);

var fencingMap = `{"name":"MAP","width":1000,"height":300,"bg":{"color":"0"},"vertexes":[{"x":-880,"y":180,"cMask":[]},{"x":880,"y":180,"cMask":[]},{"x":-882,"y":182,"cMask":[]},{"x":882,"y":182,"cMask":[]},{"x":-884,"y":184,"cMask":[]},{"x":884,"y":184,"cMask":[]},{"x":-886,"y":186,"cMask":[]},{"x":886,"y":186,"cMask":[]},{"x":-888,"y":188,"cMask":[]},{"x":888,"y":188,"cMask":[]},{"x":-890,"y":190,"cMask":[]},{"x":890,"y":190,"cMask":[]},{"x":-892,"y":192,"cMask":[]},{"x":892,"y":192,"cMask":[]},{"x":-894,"y":194,"cMask":[]},{"x":894,"y":194,"cMask":[]},{"x":-896,"y":196,"cMask":[]},{"x":896,"y":196,"cMask":[]},{"x":-898,"y":198,"cMask":[]},{"x":898,"y":198,"cMask":[]},{"x":-900,"y":200,"cMask":[]},{"x":900,"y":200,"cMask":[]},{"x":-800,"y":179,"cMask":[]},{"x":-818,"y":201,"cMask":[]},{"x":800,"y":179,"cMask":[]},{"x":818,"y":201,"cMask":[]},{"x":798,"y":179,"cMask":[]},{"x":816,"y":201,"cMask":[]},{"x":796,"y":179,"cMask":[]},{"x":814,"y":201,"cMask":[]},{"x":-798,"y":179,"cMask":[]},{"x":-816,"y":201,"cMask":[]},{"x":-796,"y":179,"cMask":[]},{"x":-814,"y":201,"cMask":[]},{"x":-155,"y":179,"cMask":[]},{"x":-162,"y":201,"cMask":[]},{"x":155,"y":179,"cMask":[]},{"x":162,"y":201,"cMask":[]}],"segments":[{"v0":0,"v1":1,"cMask":[],"color":"1A9DB"},{"v0":2,"v1":3,"cMask":[],"color":"1A9DB"},{"v0":4,"v1":5,"cMask":[],"color":"1A9DB"},{"v0":6,"v1":7,"cMask":[],"color":"1A9DB"},{"v0":8,"v1":9,"cMask":[],"color":"1A9DB"},{"v0":10,"v1":11,"cMask":[],"color":"1A9DB"},{"v0":12,"v1":13,"cMask":[],"color":"1A9DB"},{"v0":14,"v1":15,"cMask":[],"color":"1A9DB"},{"v0":16,"v1":17,"cMask":[],"color":"1A9DB"},{"v0":18,"v1":19,"cMask":[],"color":"1A9DB"},{"v0":20,"v1":21,"cMask":[],"color":"1A9DB"},{"v0":22,"v1":23,"cMask":[],"color":"FF0000"},{"v0":24,"v1":25,"cMask":[],"color":"FF"},{"v0":26,"v1":27,"cMask":[],"color":"FF"},{"v0":28,"v1":29,"cMask":[],"color":"FF"},{"v0":30,"v1":31,"cMask":[],"color":"FF0000"},{"v0":32,"v1":33,"cMask":[],"color":"FF0000"},{"v0":34,"v1":35,"cMask":[],"color":"F2F2F2"},{"v0":36,"v1":37,"cMask":[],"color":"F2F2F2"}],"planes":[{"normal":[0,-1],"dist":-100,"bCoef":0,"cMask":["ball","c1","c2"]},{"normal":[0,1],"dist":20,"bCoef":0,"cMask":["ball","c1","c2"]},{"normal":[-1,0],"dist":-770,"bCoef":1000,"cMask":["c1"],"cGroup":["c1"]},{"normal":[1,0],"dist":-770,"bCoef":1000,"cMask":["c2"],"cGroup":["c2"]},{"normal":[0,1],"dist":-280,"bCoef":1000,"cMask":["c1"],"cGroup":["c1"]},{"normal":[0,-1],"dist":-280,"bCoef":1000,"cMask":["c2"],"cGroup":["c2"]}],"goals":[{"p0":[800,-350],"p1":[800,350],"team":"blue"},{"p0":[-800,-350],"p1":[-800,350],"team":"red"},{"p0":[-850,300],"p1":[850,300],"team":"red"},{"p0":[-850,-300],"p1":[850,-300],"team":"blue"}],"discs":[{"pos":[-236,25],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-236,55],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-206,55],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-206,25],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-221,21],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-240,40],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-221,59],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[-202,40],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["red"],"cGroup":["ball","c0"]},{"pos":[235,25],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[235,55],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[206,55],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[206,25],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[221,21],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[240,40],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[221,59],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[202,40],"radius":7,"bCoef":0,"invMass":0.3,"damping":0.98,"color":"0","cMask":["blue"],"cGroup":["ball","c0"]},{"pos":[-400,40],"radius":20,"bCoef":0,"invMass":2,"damping":0.91,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[-400,80],"radius":20,"bCoef":0,"invMass":2,"damping":0.91,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[-150,40],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[-150,80],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[400,40],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[400,80],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[150,40],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[150,80],"radius":20,"bCoef":0,"invMass":2,"damping":0.92,"color":"0","cMask":["wall"],"cGroup":["ball"]},{"pos":[-320,40],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.91,"color":"0","cMask":["ball","wall","c1"],"cGroup":["ball"]},{"pos":[-320,80],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.91,"color":"0","cMask":["ball","wall","c1"],"cGroup":["ball"]},{"pos":[-240,40],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c1"],"cGroup":["ball","kick"]},{"pos":[-240,80],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c1"],"cGroup":["ball"]},{"pos":[240,40],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c2"],"cGroup":["ball","kick"]},{"pos":[240,80],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c2"],"cGroup":["ball"]},{"pos":[320,40],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c2"],"cGroup":["ball"]},{"pos":[320,80],"radius":20,"bCoef":0,"invMass":0.6,"damping":0.92,"color":"0","cMask":["ball","wall","c2"],"cGroup":["ball"]},{"pos":[-280,40],"radius":20,"bCoef":0,"invMass":0.65,"damping":0.91,"cMask":["ball","wall"],"cGroup":["ball"]},{"pos":[-280,80],"radius":20,"bCoef":0,"invMass":0.65,"damping":0.91,"cMask":["ball","wall"],"cGroup":["ball"]},{"pos":[280,40],"radius":20,"bCoef":0,"invMass":0.65,"damping":0.999,"cMask":["ball","wall"],"cGroup":["ball"]},{"pos":[280,80],"radius":20,"bCoef":0,"invMass":0.65,"damping":0.999,"cMask":["ball","wall"],"cGroup":["ball"]},{"pos":[-280,40],"radius":20,"invMass":300,"damping":0.999,"color":"FE2E2E","cMask":["ball","wall","c1","c3"],"cGroup":["score","c1"]},{"pos":[-280,80],"radius":20,"invMass":300,"damping":0.999,"color":"FE2E2E","cMask":["ball","wall","c1","c3"],"cGroup":["score","c1"]},{"pos":[280,40],"radius":20,"invMass":300,"damping":0.999,"color":"2E2EFE","cMask":["ball","wall","c2","c3"],"cGroup":["score","c2"]},{"pos":[280,80],"radius":20,"invMass":300,"damping":0.999,"color":"2E2EFE","cMask":["ball","wall","c2","c3"],"cGroup":["score","c2"]},{"pos":[-274,-27],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["blue"],"cGroup":["ball"]},{"pos":[-295,-6],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["blue"],"cGroup":["ball"]},{"pos":[-274,15],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["blue"],"cGroup":["ball"]},{"pos":[-253,-6],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["blue"],"cGroup":["ball"]},{"pos":[-276,-10],"radius":18,"bCoef":0,"invMass":5,"damping":0.992,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[-276,-10],"radius":19,"bCoef":1,"invMass":700,"damping":0.999,"color":"FE2E2E","cMask":["ball","c1","c3"],"cGroup":["blue","score","c1"]},{"pos":[-316,135],"gravity":[-0.9,0],"radius":9,"invMass":10,"damping":0.94,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[-326,180],"gravity":[0,1],"radius":8,"invMass":10,"damping":0.94,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[-244,135],"gravity":[0.9,0],"radius":9,"invMass":10,"damping":0.94,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[-226,180],"gravity":[0,1],"radius":8,"invMass":10,"damping":0.94,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[274,-27],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["red"],"cGroup":["ball"]},{"pos":[295,-6],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["red"],"cGroup":["ball"]},{"pos":[274,15],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["red"],"cGroup":["ball"]},{"pos":[253,-6],"radius":5,"bCoef":0,"invMass":2,"damping":0.93,"color":"0","cMask":["red"],"cGroup":["ball"]},{"pos":[276,-10],"radius":18,"invMass":5,"damping":0.992,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[276,-10],"radius":19,"bCoef":1,"invMass":700,"damping":0.999,"color":"2E2EFE","cMask":["ball","c2","c3"],"cGroup":["red","score","c2"]},{"pos":[316,135],"gravity":[0.9,0],"radius":9,"invMass":10,"damping":0.92,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[326,180],"gravity":[0,1],"radius":8,"invMass":10,"damping":0.92,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[244,135],"gravity":[-0.9,0],"radius":9,"invMass":10,"damping":0.92,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[226,180],"gravity":[0,1],"radius":8,"invMass":10,"damping":0.92,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[-189,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-179,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-169,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-159,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-149,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-139,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-129,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-119,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-109,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-99,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-89,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c2","c3"],"cGroup":["c0"]},{"pos":[-79,40],"radius":5,"bCoef":1000,"invMass":6,"damping":0.95,"color":"FF0000","cMask":["c0","c2"],"cGroup":["c3"]},{"pos":[189,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[179,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[169,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[159,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[149,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[139,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[129,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[119,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[109,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[99,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[89,40],"radius":5,"bCoef":0.025,"invMass":6,"damping":0.95,"cMask":["c0","c1","c3"],"cGroup":["c0"]},{"pos":[79,40],"radius":5,"bCoef":1000,"invMass":6,"damping":0.95,"color":"2E9AFE","cMask":["c0","c1"],"cGroup":["c3"]},{"pos":[0,-1000000],"invMass":0,"damping":0,"cMask":[],"cGroup":[]},{"pos":[0,1000000],"invMass":0,"damping":0,"cMask":[],"cGroup":[]},{"pos":[-221,40],"radius":13,"invMass":5,"color":"F2F2F2","cMask":["c0"],"cGroup":["red"]},{"pos":[-336,74],"radius":12,"invMass":5,"damping":0.93,"color":"F2F2F2","cMask":[],"cGroup":[]},{"pos":[221,40],"radius":13,"invMass":5,"color":"F2F2F2","cMask":["c0"],"cGroup":["blue"]},{"pos":[336,74],"radius":12,"invMass":5,"damping":0.93,"color":"F2F2F2","cMask":[],"cGroup":[]}],"playerPhysics":{"bCoef":0,"invMass":0.4,"damping":0.87,"acceleration":2.3,"kickingAcceleration":0.8,"kickingDamping":0.87,"kickStrength":-30},"ballPhysics":"disc0","cameraFollow":"player","spawnDistance":370,"joints":[{"d0":0,"d1":1,"length":30},{"d0":1,"d1":2,"length":30},{"d0":2,"d1":3,"length":30},{"d0":3,"d1":0,"length":30},{"d0":0,"d1":2,"length":42.42640687119285},{"d0":1,"d1":3,"length":42.42640687119285},{"d0":4,"d1":5,"length":26.870057685088806},{"d0":5,"d1":6,"length":26.870057685088806},{"d0":6,"d1":7,"length":26.870057685088806},{"d0":7,"d1":4,"length":26.870057685088806},{"d0":4,"d1":6,"length":38},{"d0":5,"d1":7,"length":38},{"d0":0,"d1":4,"length":15.524174696260024},{"d0":0,"d1":5,"length":15.524174696260024},{"d0":1,"d1":5,"length":15.524174696260024},{"d0":1,"d1":6,"length":15.524174696260024},{"d0":2,"d1":6,"length":15.524174696260024},{"d0":2,"d1":7,"length":15.524174696260024},{"d0":3,"d1":4,"length":15.524174696260024},{"d0":3,"d1":7,"length":15.524174696260024},{"d0":8,"d1":9,"length":30},{"d0":9,"d1":10,"length":29},{"d0":10,"d1":11,"length":30},{"d0":11,"d1":8,"length":29},{"d0":8,"d1":10,"length":41.72529209005013},{"d0":9,"d1":11,"length":41.72529209005013},{"d0":12,"d1":13,"length":26.870057685088806},{"d0":13,"d1":14,"length":26.870057685088806},{"d0":14,"d1":15,"length":26.870057685088806},{"d0":15,"d1":12,"length":26.870057685088806},{"d0":12,"d1":14,"length":38},{"d0":13,"d1":15,"length":38},{"d0":8,"d1":12,"length":14.560219778561036},{"d0":8,"d1":13,"length":15.811388300841896},{"d0":9,"d1":13,"length":15.811388300841896},{"d0":9,"d1":14,"length":14.560219778561036},{"d0":10,"d1":14,"length":15.524174696260024},{"d0":10,"d1":15,"length":15.524174696260024},{"d0":11,"d1":12,"length":15.524174696260024},{"d0":11,"d1":15,"length":15.524174696260024},{"d0":24,"d1":25,"length":40},{"d0":26,"d1":27,"length":40},{"d0":24,"d1":27,"length":89.44271909999159},{"d0":25,"d1":26,"length":89.44271909999159},{"d0":24,"d1":26,"length":80},{"d0":25,"d1":27,"length":80},{"d0":16,"d1":17,"length":40},{"d0":16,"d1":24,"length":80},{"d0":16,"d1":25,"length":89.44271909999159},{"d0":17,"d1":25,"length":80},{"d0":17,"d1":24,"length":89.44271909999159},{"d0":18,"d1":19,"length":40},{"d0":18,"d1":26,"length":90},{"d0":18,"d1":27,"length":98.48857801796105},{"d0":19,"d1":26,"length":98.48857801796105},{"d0":19,"d1":27,"length":90},{"d0":40,"d1":41,"length":29.698484809834994},{"d0":41,"d1":42,"length":29.698484809834994},{"d0":42,"d1":43,"length":29.698484809834994},{"d0":43,"d1":40,"length":29.698484809834994},{"d0":40,"d1":42,"length":42},{"d0":41,"d1":43,"length":42},{"d0":41,"d1":16,"length":114.63420083029322},{"d0":43,"d1":18,"length":112.80514172678478},{"d0":40,"d1":17,"length":165.3027525481654},{"d0":40,"d1":19,"length":163.783393541592},{"d0":44,"d1":24,"length":66.60330322138685},{"d0":44,"d1":18,"length":135.55810562264435},{"d0":44,"d1":16,"length":133.70115930686615},{"d0":44,"d1":18,"length":135.55810562264435},{"d0":46,"d1":33,"length":65.73431371817918,"color":"F2F2F2"},{"d0":47,"d1":46,"length":46.09772228646444,"color":"F2F2F2"},{"d0":48,"d1":33,"length":65.73431371817918,"color":"F2F2F2"},{"d0":48,"d1":49,"length":48.46648326421054,"color":"F2F2F2"},{"d0":60,"d1":7,"length":13},{"d0":60,"d1":61,"length":10},{"d0":61,"d1":62,"length":10},{"d0":62,"d1":63,"length":10},{"d0":63,"d1":64,"length":10},{"d0":64,"d1":65,"length":10},{"d0":65,"d1":66,"length":10},{"d0":66,"d1":67,"length":10},{"d0":67,"d1":68,"length":10},{"d0":68,"d1":69,"length":10},{"d0":69,"d1":70,"length":10},{"d0":70,"d1":71,"length":10},{"d0":60,"d1":7,"length":13},{"d0":61,"d1":7,"length":23},{"d0":62,"d1":7,"length":33},{"d0":63,"d1":7,"length":43},{"d0":64,"d1":7,"length":53},{"d0":65,"d1":7,"length":63},{"d0":66,"d1":7,"length":73},{"d0":67,"d1":7,"length":83},{"d0":68,"d1":7,"length":93},{"d0":69,"d1":7,"length":103},{"d0":70,"d1":7,"length":113},{"d0":71,"d1":7,"length":123},{"d0":60,"d1":4,"length":37.21558813185679},{"d0":61,"d1":4,"length":46.09772228646444},{"d0":62,"d1":4,"length":55.362442142665635},{"d0":63,"d1":4,"length":64.8459713474939},{"d0":64,"d1":4,"length":74.46475676452586},{"d0":65,"d1":4,"length":84.17244204607586},{"d0":66,"d1":4,"length":93.94147114027967},{"d0":67,"d1":4,"length":103.75451797391764},{"d0":68,"d1":4,"length":113.6001760562016},{"d0":69,"d1":4,"length":123.47064428438041},{"d0":70,"d1":4,"length":133.3604139165742},{"d0":71,"d1":4,"length":143.26548781894402},{"d0":60,"d1":6,"length":37.21558813185679},{"d0":61,"d1":6,"length":46.09772228646444},{"d0":62,"d1":6,"length":55.362442142665635},{"d0":63,"d1":6,"length":64.8459713474939},{"d0":64,"d1":6,"length":74.46475676452586},{"d0":65,"d1":6,"length":84.17244204607586},{"d0":66,"d1":6,"length":93.94147114027967},{"d0":67,"d1":6,"length":103.75451797391764},{"d0":68,"d1":6,"length":113.6001760562016},{"d0":69,"d1":6,"length":123.47064428438041},{"d0":70,"d1":6,"length":133.3604139165742},{"d0":71,"d1":6,"length":143.26548781894402},{"d0":60,"d1":84,"length":1000040.0178597855,"color":"transparent","strength":0.3},{"d0":60,"d1":85,"length":999960.0178612142,"color":"transparent","strength":0.3},{"d0":5,"d1":16,"length":[0,200],"strength":0.04},{"d0":4,"d1":16,"length":[0,210],"strength":0.04},{"d0":6,"d1":17,"length":[0,220],"strength":0.04},{"d0":7,"d1":18,"length":[0,90],"strength":0.04},{"d0":4,"d1":18,"length":[0,95],"strength":0.04},{"d0":6,"d1":19,"length":[0,100],"strength":0.04},{"d0":28,"d1":29,"length":40},{"d0":30,"d1":31,"length":40},{"d0":28,"d1":31,"length":89.44271909999159},{"d0":29,"d1":30,"length":89.44271909999159},{"d0":28,"d1":30,"length":80},{"d0":29,"d1":31,"length":80},{"d0":20,"d1":21,"length":40},{"d0":20,"d1":28,"length":160},{"d0":20,"d1":29,"length":164.92422502470643},{"d0":21,"d1":29,"length":160},{"d0":21,"d1":28,"length":164.92422502470643},{"d0":22,"d1":23,"length":40},{"d0":22,"d1":30,"length":170},{"d0":22,"d1":31,"length":174.64249196572982},{"d0":23,"d1":30,"length":174.64249196572982},{"d0":23,"d1":31,"length":170},{"d0":50,"d1":51,"length":29.698484809834994},{"d0":51,"d1":52,"length":29.698484809834994},{"d0":52,"d1":53,"length":29.698484809834994},{"d0":53,"d1":50,"length":29.698484809834994},{"d0":50,"d1":52,"length":42},{"d0":51,"d1":53,"length":42},{"d0":50,"d1":28,"length":75.13321502504735},{"d0":50,"d1":30,"length":81.27115109311545},{"d0":51,"d1":20,"length":114.63420083029322},{"d0":53,"d1":22,"length":112.80514172678478},{"d0":54,"d1":28,"length":61.61168720299745},{"d0":54,"d1":22,"length":135.55810562264435},{"d0":54,"d1":20,"length":133.70115930686615},{"d0":54,"d1":22,"length":135.55810562264435},{"d0":56,"d1":35,"length":65.73431371817918,"color":"F2F2F2"},{"d0":57,"d1":56,"length":46.09772228646444,"color":"F2F2F2"},{"d0":58,"d1":35,"length":65.73431371817918,"color":"F2F2F2"},{"d0":58,"d1":59,"length":48.46648326421054,"color":"F2F2F2"},{"d0":15,"d1":22,"length":[0,90],"strength":0.04},{"d0":12,"d1":22,"length":[0,95],"strength":0.04},{"d0":14,"d1":23,"length":[0,100],"strength":0.04},{"d0":13,"d1":20,"length":[0,200],"strength":0.04},{"d0":12,"d1":20,"length":[0,210],"strength":0.04},{"d0":14,"d1":21,"length":[0,220],"strength":0.04},{"d0":72,"d1":15,"length":13},{"d0":72,"d1":73,"length":10},{"d0":73,"d1":74,"length":10},{"d0":74,"d1":75,"length":10},{"d0":75,"d1":76,"length":10},{"d0":76,"d1":77,"length":10},{"d0":77,"d1":78,"length":10},{"d0":78,"d1":79,"length":10},{"d0":79,"d1":80,"length":10},{"d0":80,"d1":81,"length":10},{"d0":81,"d1":82,"length":10},{"d0":82,"d1":83,"length":10},{"d0":72,"d1":15,"length":13},{"d0":73,"d1":15,"length":23},{"d0":74,"d1":15,"length":33},{"d0":75,"d1":15,"length":43},{"d0":76,"d1":15,"length":53},{"d0":77,"d1":15,"length":63},{"d0":78,"d1":15,"length":73},{"d0":79,"d1":15,"length":83},{"d0":80,"d1":15,"length":93},{"d0":81,"d1":15,"length":103},{"d0":82,"d1":15,"length":113},{"d0":83,"d1":15,"length":123},{"d0":72,"d1":12,"length":37.21558813185679},{"d0":73,"d1":12,"length":46.09772228646444},{"d0":74,"d1":12,"length":55.362442142665635},{"d0":75,"d1":12,"length":64.8459713474939},{"d0":76,"d1":12,"length":74.46475676452586},{"d0":77,"d1":12,"length":84.17244204607586},{"d0":78,"d1":12,"length":93.94147114027967},{"d0":79,"d1":12,"length":103.75451797391764},{"d0":80,"d1":12,"length":113.6001760562016},{"d0":81,"d1":12,"length":123.47064428438041},{"d0":82,"d1":12,"length":133.3604139165742},{"d0":83,"d1":12,"length":143.26548781894402},{"d0":72,"d1":14,"length":37.21558813185679},{"d0":73,"d1":14,"length":46.09772228646444},{"d0":74,"d1":14,"length":55.362442142665635},{"d0":75,"d1":14,"length":64.8459713474939},{"d0":76,"d1":14,"length":74.46475676452586},{"d0":77,"d1":14,"length":84.17244204607586},{"d0":78,"d1":14,"length":93.94147114027967},{"d0":79,"d1":14,"length":103.75451797391764},{"d0":80,"d1":14,"length":113.6001760562016},{"d0":81,"d1":14,"length":123.47064428438041},{"d0":82,"d1":14,"length":133.3604139165742},{"d0":83,"d1":14,"length":143.26548781894402},{"d0":72,"d1":84,"length":1000040.0178597855,"color":"transparent","strength":0.3},{"d0":72,"d1":85,"length":999960.0178612142,"color":"transparent","strength":0.3},{"d0":87,"d1":17,"length":64.28063471995279,"strength":0.003},{"d0":87,"d1":24,"length":37.57658845611187,"strength":0.003},{"d0":89,"d1":30,"length":37.57658845611187,"strength":0.003},{"d0":89,"d1":21,"length":64.28063471995279,"strength":0.003}],"redSpawnPoints":[[-221,40]],"blueSpawnPoints":[[221,40]],"kickOffReset":"full"}`;
room.setCustomStadium(fencingMap);



room.setTeamsLock(true);

let players = 1; // Máximo de players por time.

function teams() {
	red = room.getPlayerList().filter((player)=>player.team==1); // Filtra jogadores da equipe vermelha.
	blue = room.getPlayerList().filter((player)=>player.team==2); // Filtra jogadores da equipe azul.
	spect = room.getPlayerList().filter((player)=>player.team==0); // Filtrar jogadores da equipe espectadores.
}

let move = {
	playerLoser: (scores)=>{ // Mova os jogadores que perderam a partida para o spect.
		teams();
		if (scores.red > scores.blue) { // Se os pontos do time vermelho forem maiores que os do time azul, ele realiza a ação.
			room.stopGame();
			blue.map((player)=> room.setPlayerTeam(player.id, 0));
			move.spectPlayer({ team: 2 });
		}
		else { // Se os pontos do time azul forem maiores que os do time vermelho, ele realiza a ação.
			room.stopGame();
			red.map((player)=> room.setPlayerTeam(player.id, 0));
			move.spectPlayer({ team: 1 });
		}
	},
	spectPlayer: (object)=>{ // Filtre os jogadores espectadores para o time vermelho ou azul.
		teams();
		if (object.team==1) { // { team: 1 } = red
			setTimeout(()=>{
				spect.slice(0, players).map((player)=> room.setPlayerTeam(player.id, 1));
				room.startGame();
			},3000);
		}
		if (object.team==2) { // { team: 2 } = blue
			setTimeout(()=>{
				spect.slice(0, players).map((player)=> room.setPlayerTeam(player.id, 2));
				room.startGame();
			},3000);
		}
	},
	playerJoin: (player)=>{ // Mova os jogadores que entram na sala.
		teams();
		if (blue.length > red.length) { // Se o número de jogadores do time azul for maior que o do time vermelho, ele move o jogador para o time vermelho.
			room.setPlayerTeam(player.id, 1);
		}
		else if (blue.length < players) { // Se o número de jogadores do time azul for menor que {players}, ele move o jogador para o time azul.
			room.setPlayerTeam(player.id, 2);
		}
		if (red.length > blue.length) {
			room.setPlayerTeam(player.id, 2);
		}
		else if (red.length < players) {
			room.setPlayerTeam(player.id, 1);
		}
	},
	checkTeams: ()=>{ // Confira os jogadores de cada equipe.
		teams();
		if (spect.length >= 1) { // Verifica se há jogadores no espectador, se houver.
			if (red.length < players) { // Ele verifica se o time vermelho é menor que {players}.
				room.setPlayerTeam(spect[0].id, 1);
			}
			else if (blue.length < players) { // Caso contrário verifica se o time azul é menor que {players}.
				room.setPlayerTeam(spect[0].id, 2);
			}
		}
		else if (spect.length == 0 && blue.length >spect.length && red.length > spect.length ) { // Se não houver um jogador espectador, ele inicia o jogo.
			room.startGame();
		}
		else if (spect.length == 0 && blue.length == 0 ){
			room.stopGame()
		}
		else if (spect.length == 0 && red.length == 0 ){
			room.stopGame()
		}
	}
};

room.onTeamVictory = (scores) => {
	move.playerLoser(scores);
	if (scores.red > scores.blue) {
		announce('🔴 đã chiến thắng với điểm số: '+ scores.red)
	}
	else{
		announce('🔵 đã chiến thắng với điểm số: '+ scores.blue)
	}
}

room.onPlayerLeave = (player) => {
	move.checkTeams();
}

room.onPlayerJoin = (player) => {
setTimeout(() =>{
	whisper("🎖      🏆 Chào Mừng Đến Với Đấu Kiếm của Thế Vận Hội  🏆              🎖 ", player.id, 0xD24780, "bold", 0);
	whisper("🎖     Discord:     https://discord.gg/thevanhoi   🎖 ", player.id, 0xCCD547, "bold", 0);

	move.playerJoin(player);
	},1000);
	
	
}

room.onPlayerTeamChange = (changedPlayer, byPlayer) => {
	teams();
	if (red.length <= players && blue.length <= players) { // Se o número de jogadores do time azul e vermelho for menor que {players}, o jogo começa.
		setTimeout(()=>{
			room.startGame();
		},3000);
	}
	if (red.length == players && blue.length == players) { // Se o número de jogadores no time azul e vermelho for igual a {players}, o jogo reinicia.
		room.stopGame();
		room.startGame();
	}
}
room.onGameStart = function (byPlayer) {

}
function announce(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0xFFFD82;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement( "📢: "+msg, targetId, color, style, sound);
	
}

function whisper(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);

}
const afkPlayerIDs = new Set()
const activities = {}
var AFKTimeout = 30000; //In milliseconds | 30 seconds
var LobbyAFKTimeout = 600000; //In milliseconds | 10 minutes

function afkKick(){
    var players = room.getPlayerList();
    for(let id in activities){
	for(var i=0; i<players.length; i++){
	    if(room.getScores() != null){
		if(players[i].team != 0){
		    if(Date.now() - activities[players[i].id] > AFKTimeout){
			room.kickPlayer(players[i].id,"AFK",false);
		    }
		}
	    }
	}
    }
}
room.onGamePause = function(byPlayer){
    if(byPlayer != null){
	activities[byPlayer.id] = Date.now();
    }
}
room.onGameTick = function () {

afkKick()

}
room.onKickRateLimitSet = function(min,rate,burst,byPlayer){
    if(byPlayer != null){
	activities[byPlayer.id] = Date.now();
    }
}
room.onPlayerChat = function(player, message) {
	activities[player.id] = Date.now();
}
room.onPlayerActivity = function(player){
    activities[player.id] = Date.now();
}
