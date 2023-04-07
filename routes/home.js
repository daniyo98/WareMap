const documentName = 'Home';

function homeGET(req, res){
    res.render('home', {title: documentName});
};

module.exports.autoroute = {
    get: {
        '/home' : homeGET
    }
};