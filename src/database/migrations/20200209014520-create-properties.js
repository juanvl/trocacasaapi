module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('properties', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      for_sale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      for_rent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      for_exchange: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      sale_price: {
        type: Sequelize.NUMERIC,
        allowNull: true,
      },
      rent_price: {
        type: Sequelize.NUMERIC,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('properties');
  },
};
