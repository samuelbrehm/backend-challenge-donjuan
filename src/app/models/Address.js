module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  })

  Address.associate = models => {
    Address.belongsTo(models.User)
  }

  return Address
}
