var Sequelize = require('sequelize');

var levels = function(sequelize){
	const Levels = sequelize.define('levels', {
	  name: {
	    type: Sequelize.STRING
	  },
	  order: {
	    type: Sequelize.INTEGER,
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	},
	  {
	  	underscored : true
	  });

	return Levels;
}

module.exports = levels;