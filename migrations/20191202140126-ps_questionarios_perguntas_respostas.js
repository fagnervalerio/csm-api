'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ps_questionarios_perguntas_respostas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      questionarios_pergunta_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      unidade: DataTypes.STRING,
      funcao: DataTypes.STRING,      
      resposta_escolha: DataTypes.STRING,
      resposta_texto: DataTypes.STRING,
      data_resposta: DataTypes.DATE,
    },
    {
      freezeTableName: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ps_questionarios_perguntas_respostas');
  }
};
