const moment = require('moment');

function clock(res, req, next) {
    let today = moment().format('MMMM Do YYYY, h:mm:ss A');
    console.log(today);
    next();
}

module.exports = clock;