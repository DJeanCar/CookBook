const bodyParser = require("body-parser");

const bodyParserConfig = function (server) {
  
  server.use(bodyParser.urlencoded({ 
    extended: false 
  }));
  server.use(bodyParser.json({
    extended: true,
  }));

};

module.exports = bodyParserConfig;