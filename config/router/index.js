"use strict";
const router_app = require('../../app/controllers');

const routers = function (server) {

    server.use(router_app);

}

module.exports = routers;