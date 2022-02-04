import express, { Application, json, urlencoded } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.use(helmet());

// Handle GET requests to /api route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.use(routes);

try {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening to 👉🏼  http://localhost:${PORT}!`);
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log('Error listing to server: ', err);
}
