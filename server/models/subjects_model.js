var Sequelize = require('sequelize');

var subject = function(sequelize){
	const Subject = sequelize.define('subjects', {
	  name: {
	    type: Sequelize.STRING,
	    unique : true
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	});

	return Subject;
}

module.exports = subject;