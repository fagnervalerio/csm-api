module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_questionarios_viaturas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		viatura_id: DataTypes.INTEGER,
		questionario_id: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return table;
}