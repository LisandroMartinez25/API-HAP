'use strict'
const conn = require('./connection.js');

function getEmpresa(req, res){
	conn('empresa').select().then((allEmpresas)=>{
		console.log(allEmpresas);
		res.send(allEmpresas);
	});
}

module.exports = {
	getEmpresa
}