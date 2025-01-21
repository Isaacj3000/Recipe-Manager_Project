const router = require('express').Router();
const authCtrl = require('../controllers/auth');



router.get("/sign-up", authCtrl.signUp);
router.post("/sign-up", authCtrl.signUpPost);
router.get("/sign-in", authCtrl.signIn);
router.post("/sign-in", authCtrl.signinPost);
router.get("/sign-out", authCtrl.signout);

module.exports = router;
