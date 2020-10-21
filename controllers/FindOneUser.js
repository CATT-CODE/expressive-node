const users = require('../models/usersArray');

module.exports = {
    findOneUser: (req, res) => {
        let foundUser = users.filter((user) => {
            if(user.id === req.params.id) {
                return res.status(200).json({ confirmation: 'success', user });
            }
        });
        if (!foundUser.length)
            return res
                .status(400)
                .json({ confirmation: 'fail', message: 'User Does Not Exist'})
    }
};