const User = require("../models/user");

async function handleUserSignUp(req, res){
    const { email, name, password }  = req.body;
    await User.create({
        name, 
        email,
        password
    });

    return res.redirect('/');
}


async function handleUserLogin(req, res){
    const { email, password }  = req.body;
    const user = await User.findOne({email, password});

    if(!user){
        res.render("login", { error: "Invalid username or password "});
    }

    return res.redirect('/');
}

module.exports = {handleUserSignUp, handleUserLogin};  