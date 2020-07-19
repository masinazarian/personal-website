const { db, Sequelize } = require('./db');

const Tweet = db.define('tweet', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: false,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
  },
  hashtags: {
    type: Sequelize.JSON,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
}, {
  timestamps: false,
});
Tweet.sync();

export default Tweet;
