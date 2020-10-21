const users = require('../models/usersArray');

module.exports = {
    createNewUser: (req, res) => {
    
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res
                .status(400)
                .json({confirmation: 'fail', message: 'All Inputs Must Be Filled.'});
        }
    
        let existingUser = users.filter((user) => user.email === req.body.email);
        if (existingUser.length) {
                return res.status(400).send('User Already Exists');
            }
        
        const newUser = {};
    
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.id = String(users.length + 1);
    
        users.push(newUser);
        return res.status(200).json({ confirmation: 'success', newUser});
    }
}