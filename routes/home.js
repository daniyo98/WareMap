const documentName = 'Home';
const modelItems = require('../models/items');
function homeGET(req, res){
    res.render('home', {title: documentName});
};

async function homePOST(req,res){
    try{
        const arrayItems = await modelItems.find({name:'MonitorA'});
        console.log(arrayItems);
        res.send(arrayItems);
        //res.render('home', {})
    }catch(err){
        console.log(err);
    }
};
module.exports.autoroute = {
    get: {
        '/home' : homeGET
    },
    post:{
        '/home':homePOST
    }
};