const express = require('express');
const router = express.Router();
let users = require('../models/usersArray');

const {getAllUsers} = require('../controllers/UserController');

router.get('/all-users', getAllUsers);

const {findOneUser} = require('../controllers/FindOneUser')

router.get('/single-user/:id', findOneUser);

const {createNewUser} = require('../controllers/CreateController');

router.post('/create-user', createNewUser);

const {updateUser} = require('../controllers/UpdateUser');

router.put('/update-user/:id', updateUser); 

const {deleteUser} = require('../controllers/DeleteUser')

router.delete('/delete-user/:id', deleteUser);

module.exports = router;