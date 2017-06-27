var http = require("http");
var moment = require('moment');

setInterval(function() {
	const time = moment().format('LL  @  HH:mm:ss')
	console.log(`pinged on ${time}`);
    //http.get("https://dodotang-server.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
