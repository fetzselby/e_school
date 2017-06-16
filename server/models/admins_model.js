var Sequelize = require('sequelize'),
	bcrypt   = require('bcrypt-nodejs');

var admin = function(sequelize){
	const Admin = sequelize.define('admins', {
	  school_id: {
	    type: Sequelize.INTEGER
	  },
	  fname: {
	    type: Sequelize.STRING
	  },
	  lname: {
	    type: Sequelize.STRING
	  },
	  email: {
	    type: Sequelize.STRING,
	    unique : true,
	    validate : {
	    	isEmail : true
	    }
	  },
	  password : {
	   	type : Sequelize.STRING,
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	},
	  {
	  	hooks : {
	  		afterValidate : function(admin){
	  			admin.password = bcrypt.hashSync(admin.password, 8);
	  		}
	  	}
	  });

	return Admin;
}

module.exports = admin;