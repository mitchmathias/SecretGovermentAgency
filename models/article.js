// Creating our Article model
module.exports = function(sequelize, DataTypes) {
  const Article = sequelize.define("Article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Article;
};
