// Creating our Srticle model
module.exports = function(sequelize, DataTypes) {
  const Article = sequelize.define("Article", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
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
};
