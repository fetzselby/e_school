var Sequelize = require('sequelize');

var attendance = function(sequelize){
	const Attendance = sequelize.define('attendances', {
	  ward_id: {
	    type: Sequelize.INTEGER
	  },
	  level_id: {
	    type: Sequelize.INTEGER
	  },
	  school_id: {
	    type: Sequelize.INTEGER
	  },
	  teacher_id: {
	    type: Sequelize.INTEGER
	  },
	  posted_ts: {
	    type: Sequelize.DATE
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	});

	return Attendance;
}

module.exports = attendance;