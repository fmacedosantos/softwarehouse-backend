"use strict"

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.JSON, 
            allowNull: false,
            defaultValue: JSON.stringify(['manager']), 
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        links: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        profilePicture: {
            type: DataTypes.BLOB,
            field: 'profile_picture',
            allowNull: true,
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

    return User
}