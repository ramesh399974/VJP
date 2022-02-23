module.exports = function(sequelize, DataTypes) {
    let OperationList = sequelize.define('OperationList', {

       id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(250),
            field:'name',
            allowNull: false

        },
        type:{
            type:DataTypes.INTEGER(20),
            field:'type',
        }
    },
    {
        timestamps:true,
        tableName:'operation_list'
    })

    return OperationList
}