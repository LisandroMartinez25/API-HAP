//const mysql = require('mysql');
const config = require("./dbConfig.js");
//const Sequelize = require('sequelize');
const knex = require('knex');

module.exports = knex({
	client: config.client,
	connection: {
		host: config.host,
		user: config.user,
		password: config.pass,
		database: config.base
	}	
});

	/*const sequelize = new Sequelize(config.base, config.user, config.pass, {
	    host: config.host,
	    port: config.port,
	    dialect: config.dialect
	});
	//Veificar connection status
	sequelize.authenticate().then(() => {
		console.log('Connection has been established successfully.');
	}).catch(err => {
		console.error('Unable to connect to the database:', err);
	});


	//Create Item Table Structure
	var Empresa = sequelize.define('EMPRESA', {
	    ID_Empresa: {
	    	type: Sequelize.INTEGER,
	    	primaryKey: true,
	    	autoIncrement: true
	    },
	    Nombre:Sequelize.STRING,
	    Acronimo: Sequelize.STRING,
	    Direccion: Sequelize.STRING,
	    Logo: Sequelize.STRING

	});
	
	// Empresa.findAll().then((empresa) => {
	// 	console.log('first query ', empresa)
	// });
	var result;
	sequelize.query('SELECT * FROM EMPRESA', {model: Empresa}).then(empresas => {
		console.log("empresas", empresas);
		result = empresas;
	})*/
	
	
