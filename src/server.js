import { Sequelize } from 'sequelize';
import app from './app';

const sequelize = new Sequelize('backendserver', 'root', '', {
  dialect: 'sqlite',
});

sequelize.authenticate().then((errors) => { console.log(errors); });

const port = process.env.APP_PORT;
app.listen(port);
