module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_tipo_perguntas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
        codigo: DataTypes.STRING,
        descricao: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}