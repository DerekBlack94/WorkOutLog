const {DataTypes} = require('sequelize');
const db = require('../db');

const Log = db.define('workoutlog', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    definition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    result : {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
        

    }
})
module.exports = Log