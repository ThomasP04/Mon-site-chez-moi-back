const { Sequelize, DataTypes } = require('sequelize');

path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

const discussion = require('./models/discussion');
const Discussion = discussion(sequelize);

const message = require('./models/message');
const Message = message(sequelize);

const utilisateur = require('./models/utilisateur');
const Utilisateur = utilisateur(sequelize);

(async () => {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
})();

module.exports = {
    sequelize: sequelize,
    models: {
        Discussion : Discussion,
        Message : Message,
        Utilisateur:Utilisateur
    }
};