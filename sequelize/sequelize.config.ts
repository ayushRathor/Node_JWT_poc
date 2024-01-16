import { Dialect } from 'sequelize';

const config = {
  development: {
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'dattebayo',
  },
};

export default config;