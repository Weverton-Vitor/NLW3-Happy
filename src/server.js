// Importar dependências
const express = require("express");
const path = require("path");
const pages = require('./pages.js')

// Iniciando o express
const server = express();


server
    // Utilizar o corpo do req
    .use(express.urlencoded({extended: true}))

    // Utilizando os arquivos estáticos
    .use(express.static('public'))

    // Configurando o template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage',pages.saveOrphanage) 
    

// Ligar  o sercidor
server.listen("5500");
