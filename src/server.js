import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './app';

const { PORT } = process.env;
const server = http.createServer(app);

(async () => {
  try {
    server.listen(PORT, () => {
      console.log(`server is listening at PORT: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
