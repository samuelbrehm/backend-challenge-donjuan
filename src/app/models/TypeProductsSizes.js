module.exports = (sequelize, DataTypes) => {
  const TypeProductSizes = sequelize.define('TypeProductsSizes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price: DataTypes.DECIMAL(10, 2)
  })

  return TypeProductSizes
}
