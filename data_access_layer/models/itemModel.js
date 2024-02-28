import { sequelize } from '../dbConfig.js';
import { DataTypes } from 'sequelize';

import User from './userModel.js';

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

Item.belongsTo(User, { attributes: { exclude: ['password'] } });

export default Item;
