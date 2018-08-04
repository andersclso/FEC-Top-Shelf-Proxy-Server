const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request-promise');

const proxy = express();
const port = 3000;

proxy.use(express.static(path.join(__dirname, '../client')));
proxy.use(parser.json());
proxy.use(parser.urlencoded({ extended: true }));

proxy.listen(port, () => {
  console.log('Successfully connected to port:', port);
});
