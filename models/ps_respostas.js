module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_respostas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
        descricao: DataTypes.STRING,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}