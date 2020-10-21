let users = require('../models/usersArray');

module.exports = {
    deleteUser: (req, res) => {
        let removeUser = users.filter((user) => {
            return user.id !== req.params.id;
        });
        users = removeUser;
        return res.status(200).json({ confirmation: 'success', users })
    }
};