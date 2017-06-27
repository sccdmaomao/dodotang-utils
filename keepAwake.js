var http = require("http");
setInterval(function() {
    http.get("https://dodotang-server.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
