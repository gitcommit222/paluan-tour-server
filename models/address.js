"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // define association here
        }
    }
    Address.init(
        {
            barangay: {
                type: DataTypes.INTEGER, // ENUM type
                allowNull: false,
            },
            street: {
                type: DataTypes.INTEGER, // ENUM type
                allowNull: false,
            },
            region: {
                type: DataTypes.INTEGER, // ENUM type
                defaultValue: "",
            },
            province: {
                type: DataTypes.INTEGER, // ENUM type
                allowNull: false,
                defaultValue: 17,
            },
            municipality: {
                type: DataTypes.INTEGER, // ENUM type
                allowNull: false,
                defaultValue: 1751,
            },
        },
        {
            sequelize,
            modelName: "Address",
            timestamps: true,
        }
    );
    return Address;
};
