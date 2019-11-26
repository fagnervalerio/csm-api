'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_unidades', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      unidade: DataTypes.STRING,
      descricao: DataTypes.STRING,
      tipo: DataTypes.STRING,		
    },
    {
      freezeTableName: true,
      timestamps: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_unidades');
  }
};
