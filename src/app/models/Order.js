module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
    isAttended: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT
  })

  Order.associate = models => {
    Order.belongsTo(models.User)
    Order.belongsToMany(models.Product, { through: models.ItemsOrder })
  }

  return Order
}
