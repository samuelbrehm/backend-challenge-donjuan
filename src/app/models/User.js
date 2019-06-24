module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING
  })

  User.associate = models => {
    User.hasMany(models.Address)
    User.hasMany(models.Order)
  }

  return User
}
