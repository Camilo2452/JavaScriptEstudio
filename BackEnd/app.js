'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app= express();
//Cargar archivos de Ruras

var project_routes = require('./routes/project');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', project_routes);
//Cors

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas
/*
app.get('/',(req, res)=>{
    res.status(200).send(
        '<h1>Pagina de Inicio</h1>'
    );
});

app.get('/test',(req, res)=>{
    res.status(200).send({
        message:'Hola Mundo Gonorreas'
    });
});

app.post('/prueba/:id',(req, res)=>{
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message:'Es un Post Sin Cuerpo Ñero'
    });
});*/
//Exportar
module.exports= app;