const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    return Message = sequelize.define('Message', {
        id_utilisateur:{
            type: DataTypes.INTEGER,
            notEmpty: true
        },

        id_discussion:{
            type: DataTypes.INTEGER,
            notEmpty: true
        },

        texte:{
            type: DataTypes.STRING,
            notEmpty: true
        }

        
    }, {
        // Other model options go here
    });
}