const users = require('../models/usersArray');

module.exports = {
    updateUser: (req, res) => {
        let updatedUser = req.body;
        users.filter((foundUser) => {
            if(foundUser.id === req.params.id) {
                foundUser.name = updatedUser.name 
                    ? updatedUser.name 
                    : foundUser.name;
                foundUser.password = updatedUser.password 
                    ?updatedUser.password
                    : foundUser.password
            }
        });
        return res.status(200).json({message: 'User Updated', users})
    }
};