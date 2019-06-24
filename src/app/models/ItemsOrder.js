module.exports = (sequelize, DataTypes) => {
  const ItemsOrder = sequelize.define('ItemsOrder', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })

  return ItemsOrder
}
