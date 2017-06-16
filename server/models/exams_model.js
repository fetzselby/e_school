var Sequelize = require('sequelize');

var exams = function(sequelize){
	const Exams = sequelize.define('exams', {
	  score: {
	    type: Sequelize.DOUBLE,
	    validate : {
	    	isNumeric: true
	    }
	  },
	  description: {
	    type: Sequelize.STRING
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	}, {underscored: true});

	return Exams;
}

module.exports = exams;