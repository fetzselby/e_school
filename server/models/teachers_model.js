var Sequelize = require('sequelize');


var teacher = function(sequelize){
	const Teacher = sequelize.define('teachers', {
	  fname: {
	    type: Sequelize.STRING
	  },
	  lname: {
	    type: Sequelize.STRING
	  },
	  msisdn: {
	    type: Sequelize.STRING
	  },
	  address: {
	    type: Sequelize.STRING
	  },
	  email: {
	    type: Sequelize.STRING,
	    unique : true
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	}, {underscored: true});

	return Teacher;
}

module.exports = teacher;