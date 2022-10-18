const db = require('./db')

function clear_Discussion(){
    db.models.Discussion.destroy({
        where:{}
    })
};

function clear_Message(){
    db.models.Message.destroy({
        where:{}
    })
};

function clear_Utilisateur(){
    db.models.Utilisateur.destroy({
        where:{}
    })
};

clear_Discussion();
clear_Message();
clear_Utilisateur();