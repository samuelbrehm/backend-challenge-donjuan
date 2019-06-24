module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    unity: DataTypes.STRING
  })

  Size.associate = models => {
    Size.belongsToMany(models.TypeProduct, {
      through: models.TypeProductsSizes
    })
  }

  return Size
}
