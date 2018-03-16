'use strict'

var app = require("./app.js")
var port = process.env.PORT || 3678

app.listen(port, function(){
	console.log("API REST FAVORITOS funcionando en http://localhost:" + port);
	console.log("Prueba de hap");
});
