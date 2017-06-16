var Sequelize = require('sequelize');


var payments = function(sequelize){
	const Payments = sequelize.define('payments', {
	  description: {
	    type: Sequelize.STRING
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	}, {underscored: true});

	return Payments;
}

module.exports = payments;