'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_questionarios', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      viatura_id: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      ano_base: DataTypes.INTEGER,
      data_inicio: DataTypes.DATE,		
      data_termino: DataTypes.DATE,
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_questionarios');
  }
};
