import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './presentation-layer/routes/index.js';
import { sequelize } from './data-access-layer/dbConfig.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(json());
app.use(cookieParser());

sequelize.sync().then(() => console.log('SQLite database synced'));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
