import express from 'express';
import user_routes from './routes/users.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use('/users', user_routes);

app.listen(port, () =>
  console.log(`server running on: http://localhost:${port}`)
);
