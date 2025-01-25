"use strict"

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
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
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW
        }
    }, {})

    return User
}