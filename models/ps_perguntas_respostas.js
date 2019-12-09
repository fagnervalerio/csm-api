module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_perguntas_respostas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		pergunta_id: DataTypes.INTEGER,
        resposta_id: DataTypes.INTEGER,
        ordem: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}