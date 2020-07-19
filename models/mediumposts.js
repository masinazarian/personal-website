const { db, Sequelize } = require('./db');

const MediumPost = db.define('mediumpost', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  content: {
    type: Sequelize.JSON,
  },
  title: {
    type: Sequelize.STRING,
  },
  uniqueSlug: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  mediumUrl: {
    type: Sequelize.STRING,
  },
  virtuals: {
    type: Sequelize.JSON,
  },
  totalClapCount: {
    type: Sequelize.INTEGER,
  },
  wordCount: {
    type: Sequelize.INTEGER,
  },
  tags: {
    type: Sequelize.JSON,
  },
}, {
  timestamps: false,
});
MediumPost.sync();

export default MediumPost;
