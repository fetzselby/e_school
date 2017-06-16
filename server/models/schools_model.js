var Sequelize = require('sequelize');


var schools = function(sequelize){
	const Schools = sequelize.define('schools', {
	  name: {
	    type: Sequelize.STRING
	  },
	  address: {
	    type: Sequelize.STRING
	  },
	  lat: {
	    type: Sequelize.STRING
	  },
	  lon: {
	    type: Sequelize.STRING
	  },
	  msisdn: {
	    type: Sequelize.STRING
	  },
	  logo_file: {
	    type: Sequelize.STRING
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	}, {underscored: true});

	return Schools;
}

module.exports = schools;