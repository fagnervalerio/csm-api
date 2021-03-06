module.exports = (sequelize, DataTypes) => {
	const PS_Viaturas = sequelize.define('ps_viaturas', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		unidade: DataTypes.STRING,
		prefixo: DataTypes.STRING,
		modelo: DataTypes.STRING,
		tipo_operacional: DataTypes.STRING,
		ano_operacao: DataTypes.INTEGER,
	},
	{
		freezeTableName: true,
		timestamps: false,
	});

	return PS_Viaturas;
}