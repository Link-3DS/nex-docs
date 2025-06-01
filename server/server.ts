import express, { Request, Response} from 'express';
import cors from 'cors';
import * as database from './database';

// routes
import register from './apis/register';
import login from './apis/login';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use('/apis/', register);
app.use('/apis/', login);

app.use((request: Request, response: Response) => {
  response.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  database.connect();
  console.log(`Server listening on http://localhost:${PORT}/apis`);
});