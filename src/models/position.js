"use strict"

module.exports = (sequelize, DataTypes) => {

    const Position = sequelize.define('Position', {
        title: DataTypes.STRING,
        salary: DataTypes.FLOAT,
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    })

    Position.associate = function (models) {
        Position.hasMany(models.Employee, {
            foreignKey: 'positionId'
        })
    }

    return Position
}