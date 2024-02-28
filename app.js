import express, { json } from 'express';
import routes from './presentation_layer/routes/index.js';
import { sequelize } from './data_access_layer/dbConfig.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(json());

sequelize.sync().then(() => console.log('SQLite database synced'));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
