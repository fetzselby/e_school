var Sequelize = require('sequelize');

var season = function(sequelize){
	const Season = sequelize.define('seasons', {
	  name: {
	    type: Sequelize.INTEGER
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	});

	return Season;
}

module.exports = season;