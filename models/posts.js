'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    body: DataTypes.STRING,
  }, {});
  Post.associate = function(models) {
    Posts.belongsTo(models.User, {
      as: 'author',
      foreignKey: 'UserId'
    });
    Post.belongsTo(models.Club, {
      as: 'post',
      foreignKey: 'ClubId'
    });
  };
  return Post;
};
