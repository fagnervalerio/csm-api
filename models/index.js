'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));    
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Relations
db.ps_questionarios_viaturas.belongsTo(db.ps_viaturas, { foreignKey: 'viatura_id' });
db.ps_viaturas.hasMany(db.ps_questionarios_viaturas, { foreignKey: 'viatura_id' });
db.ps_questionarios_viaturas.belongsTo(db.ps_questionarios, { foreignKey: 'questionario_id' });
db.ps_questionarios.hasMany(db.ps_questionarios_viaturas, { foreignKey: 'questionario_id' });
db.ps_questionarios_perguntas.belongsTo(db.ps_perguntas, { foreignKey: 'pergunta_id' });
db.ps_perguntas.hasMany(db.ps_questionarios_perguntas, { foreignKey: 'pergunta_id' });
db.ps_perguntas.belongsTo(db.ps_tipo_perguntas, { foreignKey: 'tipo_pergunta_id' });
db.ps_tipo_perguntas.hasOne(db.ps_perguntas, { foreignKey: 'tipo_pergunta_id' });
db.ps_perguntas_respostas.belongsTo(db.ps_perguntas, { foreignKey: 'pergunta_id' });
db.ps_perguntas_respostas.belongsTo(db.ps_respostas, { foreignKey: 'resposta_id' });
db.ps_perguntas.hasMany(db.ps_perguntas_respostas, { foreignKey: 'pergunta_id' });
db.ps_respostas.hasMany(db.ps_perguntas_respostas, { foreignKey: 'resposta_id' });

module.exports = db;
