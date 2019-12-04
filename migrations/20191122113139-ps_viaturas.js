'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_viaturas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      unidade: DataTypes.STRING,
      prefixo: DataTypes.STRING,
      modelo: DataTypes.STRING,		
      tipo_operacional: DataTypes.STRING,
      ano_operacao: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_viaturas');
  }
};
