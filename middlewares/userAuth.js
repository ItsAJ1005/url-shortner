const { getUser } = require("../service/auth");


async function checkAuth (req, res, next){
    const userUid = res.cookies.uid;
    
    if(!userUid) res.redirect('login');

    const user = getUser(userUid);

    if(!user)   return res.redirect('/login');

    req.user = user;
    next();
}

module.exports = checkAuth;