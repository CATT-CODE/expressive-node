const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

// const logger = require('./middlewares/logger');

const clock = require('./middlewares/time');
const { urlencoded } = require('express');

const port = process.env.PORT || 3000;

// app.use(logger);
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended: false}))
app.use(clock);

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

