'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_questionarios_perguntas_respostas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      questionarios_respostas_id: DataTypes.INTEGER,
      resposta_escolha: DataTypes.STRING,
      resposta_texto: DataTypes.STRING,
      funcao: DataTypes.STRING,      
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_questionarios_perguntas_respostas');
  }
};
