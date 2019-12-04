'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_perguntas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      tipo_pergunta_id: DataTypes.INTEGER,
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      tipo_resposta_id: DataTypes.INTEGER,		
      obrigatorio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_perguntas');
  }
};
