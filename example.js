var express = require('express');
var server = express(); // better instead
server.use(express.static('public'));
server.listen(8000);