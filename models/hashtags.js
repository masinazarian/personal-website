const { db, Sequelize } = require('./db');

const Hashtag = db.define('hashtag', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tag: {
    type: Sequelize.STRING,
  },
  appearsIn: {
    type: Sequelize.BIGINT,
  },
}, {
  timestamps: false,
});
Hashtag.sync();

export default Hashtag;
