module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_questionarios_perguntas_respostas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
        questionario_id: DataTypes.INTEGER,
        viatura_id: DataTypes.INTEGER,
        pergunta_id: DataTypes.INTEGER,
        resposta_id: DataTypes.INTEGER,
        resposta_texto: DataTypes.STRING,
        funcao: DataTypes.STRING,
        unidade: DataTypes.STRING,
        email: DataTypes.STRING,
        data_resposta: DataTypes.DATE,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}