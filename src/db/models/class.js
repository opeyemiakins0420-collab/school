import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db";

class Class extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Class.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    Class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Section: {
      type: DataTypes.STRING,
      allownull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Class",
    indexes: [
      {
        unique: true,
        field: ["class_name", "Section"],
        name: "unnique_class_section",
      },
    ],
  },
);
