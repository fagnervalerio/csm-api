module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_perguntas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		tipo_pergunta_id: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        tipo_resposta: DataTypes.STRING,
        obrigatorio: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}