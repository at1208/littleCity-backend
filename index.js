const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('tiny'));


const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Listening to ${Port}`));
