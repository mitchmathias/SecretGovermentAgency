// Creating our Article model
module.exports = function(sequelize, DataTypes) {
  const Article = sequelize.define("Article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clearance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: BOOLEAN,
      allowNull: false
    }
  });
  Article.sync();
  return Article;
};
