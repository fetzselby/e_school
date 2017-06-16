var Sequelize = require('sequelize');

const sequelize = new Sequelize('m_school', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//module.exports = {config : config};
module.exports = {config : sequelize};

