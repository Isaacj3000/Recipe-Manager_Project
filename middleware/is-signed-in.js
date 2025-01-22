// const isSignedIn = (req, res, next) => {
//     if (req.session.user) return next();
//     res.redirect('/auth/sign-in');
// };


// module.exports = isSignedIn;

const isSignedIn = (req, res, next) => {
    console.log('Session data:', req.session);  // Log the whole session
    if (req.session.user) {
        console.log('User is signed in:', req.session.user);  // Log the user object
        return next();
    }
    console.log('No user found, redirecting to sign-in.');
    res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;