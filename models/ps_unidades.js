module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_unidades', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		unidade: DataTypes.STRING,
		descricao: DataTypes.STRING,
		tipo: DataTypes.STRING,		
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}