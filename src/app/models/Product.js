module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING
  })

  Product.associate = models => {
    Product.hasMany(models.TypeProduct)
    Product.belongsToMany(models.Order, { through: models.ItemsOrder })
  }

  return Product
}
