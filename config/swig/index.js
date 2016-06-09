"use strict";
const swig = require('swig');

const swigConfig = function (server) {
    server.engine('html', swig.renderFile);
    server.set('view engine', 'html');
    server.set('views', `${__dirname}/../../views`);
    swig.setDefaults({ cache: false });
}

module.exports = swigConfig;