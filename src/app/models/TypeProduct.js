module.exports = (sequelize, DataTypes) => {
  const TypeProduct = sequelize.define('TypeProduct', {
    description: DataTypes.STRING
  })

  TypeProduct.associate = models => {
    TypeProduct.belongsTo(models.Product)
    TypeProduct.belongsToMany(models.Size, {
      through: models.TypeProductsSizes
    })
  }

  return TypeProduct
}
