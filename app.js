const express = require('express');
const ip = require('ip');
const autoroute = require('express-autoroute');
const app = express();
const port = 3000;
//Motor de plantillas
app.set('view engine', 'ejs');

app.set('views', __dirname+'/views');

app.listen(port, function(){
        console.log(`Test app is ready on http://${ip.address()}:${port}`);
    });
app.use(express.static(__dirname+'/public'))
autoroute(app, {
        dir: __dirname+'/routes'
    });

app.use(function(req,res){
        res.status(404).render('error404', {title: 'Error' ,path: req.path});
    });

