import { DataTypes, Model, Sequelize } from 'sequelize';

export const db: Sequelize = new Sequelize('lessons', 'postgres', 'Rbnfqws1990' , {
  host: 'localhost',
    dialect: 'postgres',
});