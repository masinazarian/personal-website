import Sequelize from 'sequelize';
import { dbhost, storage } from '../assets/config.js';

let sql = new Sequelize({
  host: dbhost,
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  storage,
});

const db = sql;

export {
  db,
  Sequelize,
};
