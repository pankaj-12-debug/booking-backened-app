const Sequelize = require('sequelize');

const sequelize = require('./database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    age: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;