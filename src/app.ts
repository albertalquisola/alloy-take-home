import bodyParser from 'body-parser';
import 'dotenv/config';
import express, { Application, Request, Response } from 'express';

import routes from './routes';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.listen(3000, () => console.log('server listening on port 3000'));
