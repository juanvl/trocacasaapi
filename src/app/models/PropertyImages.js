import Sequelize, {Model} from 'sequelize'

export default class PropertyImages extends Model {
  static init(sequelize) {
    super.init(
      {
        url: Sequelize.STRING
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Property, { foreignKey: 'property_id' });
  }
}
