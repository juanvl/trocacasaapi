import Sequelize, { Model } from 'sequelize';

export default class Property extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        address: Sequelize.STRING,
        for_sale: Sequelize.BOOLEAN,
        for_rent: Sequelize.BOOLEAN,
        for_exchange: Sequelize.BOOLEAN,
        sale_price: Sequelize.NUMERIC,
        rent_price: Sequelize.NUMERIC
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }

}
