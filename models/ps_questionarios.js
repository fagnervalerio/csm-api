module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('ps_questionarios', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		titulo: DataTypes.STRING,
        ano_base: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_termino: DataTypes.DATE,
	},
	{
		freezeTableName: true,
		timestamps: false,
    });
    
    return table;
}
