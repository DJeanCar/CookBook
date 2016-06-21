const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const knex = require("./config/knex");



server.listen(PORT, function () {
    console.log(`Server running at port ${PORT}`);
});

/* Static Files */
server.use(express.static(`${__dirname}/public`));

require("./config/body-parser")(server);
require('./config/router')(server);
require('./config/swig')(server);
