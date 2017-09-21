module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


// ALREADY LOGGED IN


        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


// UNLINK ACCOUNTS

    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });



    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/');
    }
}
