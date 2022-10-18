const path = require('path')
const db = require('./db')

const express = require('express')

const app = express()

const hostname = '127.0.0.1';
const port = 4000;


app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/discussion',(req,res)=>{
    db.models.Discussion.findAll({}).then((liste)=>{res.json(liste)});
})

app.get('/message',(req,res)=>{
    db.models.Message.findAll({
        where:{
        "id_discussion":parseInt(req.query.id_discussion)
    }
    }).then((liste)=>{res.json(liste)});
})

app.get('/utilisateur',(req,res)=>{
    db.models.Utilisateur.findAll({
        where:{
        "id":parseInt(req.query.id)
    }
    }).then((liste)=>{res.json(liste)});
})

app.post('/nouveaumessage',(req,res)=>{
    db.models.Message.create({
        id_utilisateur:5,
        //id_conversation:,
        //texte:"",
    })
})

app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html><head><title>404</title></head><body><h1>Et c'est le 404.</h1><p> ressource non trouvée</p></body></html>");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);

