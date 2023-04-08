const documentName = 'Home';
function homeGET(req, res){
    res.render('home', {title: documentName});
};

function homePOST(req,res){
    
    res.send('Hola');
};
module.exports.autoroute = {
    get: {
        '/home' : homeGET
    },
    post:{
        '/home':homePOST
    }
};