module.exports = function (sequelize, DataTypes) {
    let ProcessToleranceStandard = sequelize.define('ProcessToleranceStandard', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'name',
            allowNull: false
        },
        
    },
        {
            timestamps: true,
            tableName: 'process_tolerance_standard'
        })

    return ProcessToleranceStandard
}