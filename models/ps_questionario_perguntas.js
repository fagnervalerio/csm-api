module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_questionarios_perguntas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		questionario_id: DataTypes.INTEGER,
		pergunta_id: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}