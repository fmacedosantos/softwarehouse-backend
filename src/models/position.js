"use strict"

module.exports = (sequelize, DataTypes) => {

    const Position = sequelize.define('Position', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
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
    })

    Position.associate = function (models) {
        Position.hasMany(models.Employee, {
            foreignKey: 'positionId'
        })
    }

    return Position
}