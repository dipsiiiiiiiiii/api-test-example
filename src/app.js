import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.get('/ping', (_, res) => {
  res.json('pong');
});

app.use(router);

export default app;
