var Sequelize = require('sequelize'),
	bcrypt   = require('bcrypt-nodejs');

var guardians = function(sequelize){
	const Guardians = sequelize.define('guardians', {
	  fname: {
	    type: Sequelize.STRING
	  },
	  lname: {
	    type: Sequelize.STRING
	  },
	  msisdn: {
	    type: Sequelize.STRING,
	    unique : true
	  },
	  address: {
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
	  	type : Sequelize.STRING
	  },
	  wards: {
	    type: Sequelize.STRING
	  },
	  status: {
	    type: Sequelize.STRING(1)
	  }
	},
	  {
	  	hooks : {
	  		afterValidate : function(guardian){
	  			guardian.password = bcrypt.hashSync(guardian.password, 8);
	  		}
	  	},
	  	underscored : true
	  });

	return Guardians;
}

module.exports = guardians;