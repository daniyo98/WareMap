const documentName = 'Login';
function loginGET(req, res){
    res.render('login', {title: documentName});
};

module.exports.autoroute = {
    get: {
        '/login' : loginGET
    }
};