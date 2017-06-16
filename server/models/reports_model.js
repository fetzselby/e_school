var Sequelize = require('sequelize');

var report = function(sequelize){
	const Report = sequelize.define('reports', {
	  score: {
	    type: Sequelize.DOUBLE
	  },
	  year: {
	    type: Sequelize.STRING
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	});

	return Report;
}

module.exports = report;