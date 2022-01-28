import express, { Application, json, urlencoded } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));

app.use(helmet());

// Handle GET requests to /api route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
});

try {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening to 👉🏼  http://localhost:${PORT}!`);
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log('Error listing to server: ', err);
}
