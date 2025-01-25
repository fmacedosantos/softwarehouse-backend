"use strict"

module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define('Employee', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hireDate: {
            type: DataTypes.DATE,
            field: 'hire_date',
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        positionId: {
            type: DataTypes.INTEGER,
            field: 'position_id',
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW
        }
    }, {})

    Employee.associate = function (models) {

        Employee.belongsTo(models.Position, {
            foreignKey: 'positionId'
        })
    }

    return Employee
}