import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Property from '../app/models/Property';
import PropertyImages from '../app/models/PropertyImages';

const models = [User, Property, PropertyImages];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
