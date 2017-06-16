var Sequelize = require('sequelize');


var ward = function(sequelize){
	const Ward = sequelize.define('wards', {
	  fname: {
	    type: Sequelize.STRING
	  },
	  lname: {
	    type: Sequelize.STRING
	  },
	  school_id: {
	    type: Sequelize.INTEGER
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	}, {underscored: true});

	return Ward;
}

module.exports = ward;