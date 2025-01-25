"use strict"

module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define('Employee', {
        name: DataTypes.STRING,
        hireDate: {
            type: DataTypes.DATE,
            field: 'hire_date'
        },
        positionId: {
            type: DataTypes.INTEGER,
            field: 'position_id'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {})

    Employee.associate = function (models) {

        Employee.belongsTo(models.Position, {
            foreignKey: 'positionId'
        })
    }

    return Employee
}