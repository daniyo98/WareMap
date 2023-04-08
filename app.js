const express = require('express');
const ip = require('ip');
const autoroute = require('express-autoroute');
const engine = require('ejs-mate');
const path = require('path');
const fs = require('fs');
const https = require('https');
//DB Conexion
const initDB = require('./database/connection')
initDB();
const app = express();
const port = 443;


//Motor de plantillas
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Iniciando el servidor con certificado ssl
https.createServer({
    cert: fs.readFileSync(path.join(__dirname,'certificates/cert.pem')),
    key: fs.readFileSync(path.join(__dirname, 'certificates/key.pem'))
}, app).listen(port, function(){
    console.log(`Test server is ready on http://${ip.address()}:${port}`);
});


//Autorouteo
app.use(express.static(path.join(__dirname,'public')))

autoroute(app, {
        dir: path.join(__dirname,'routes')
    });
//Ninguna ruta encontrada
app.use(function(req,res){
        let error = 404;
        res.status(error).render('error404', {title: 'Error' ,path: req.path});
    });


