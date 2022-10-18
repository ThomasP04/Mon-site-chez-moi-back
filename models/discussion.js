const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    return Discussion = sequelize.define('Discussion', {
        id_utilisateur:{
            type: DataTypes.INTEGER,
            notEmpty: true
        }
        
    }, {
        // Other model options go here
    });
}