require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const controllers = require('./controllers/index.js');
app.use('/controllers', controllers)

module.exports = app;