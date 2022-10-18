const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    return Utilisateur = sequelize.define('Utilisateur', {
        nom:{
            type: DataTypes.STRING,
            notEmpty: true
        },

        mot_de_passe:{
            type: DataTypes.STRING,
            notEmpty: true           
        }
        
    }, {
        // Other model options go here
    });
}