import express, { Application, Router } from 'express';
import { db } from './db';

const app = express();


db.authenticate().then(async () => {
  try {
    await db.sync({ force: false });
    console.log('Database connect');
    app.listen(3000, () => {
      console.log(`Server started at port ${3000}`);
    });
  } catch (e) {
    console.error(e.message);
  }
});