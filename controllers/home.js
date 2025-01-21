function index(req, res) {
    // if(!req.session.user){
    
    res.render('home', { title: 'Home Page', user: req.session.user });
}

module.exports = { index }