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
            allowNull: false
        },
        positionId: {
            type: DataTypes.INTEGER,
            field: 'position_id',
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    }, {})

    Employee.associate = function (models) {

        Employee.belongsTo(models.Position, {
            foreignKey: 'positionId'
        })
    }

    return Employee
}