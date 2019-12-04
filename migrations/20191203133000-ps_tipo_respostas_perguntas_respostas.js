'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_tipo_respostas_perguntas_respostas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      tipo_respostas_id: DataTypes.INTEGER,
      perguntas_resposta_id: DataTypes.INTEGER,
      ordem: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_tipo_respostas_perguntas_respostas');
  }
};
