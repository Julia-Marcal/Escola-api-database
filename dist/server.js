"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const sequelize = new (0, _sequelize.Sequelize)('backendserver', 'root', '', {
  dialect: 'sqlite',
});

sequelize.authenticate().then((errors) => { console.log(errors); });

const port = process.env.APP_PORT;
_app2.default.listen(port);
