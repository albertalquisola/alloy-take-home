import bodyParser from 'body-parser';
import 'dotenv/config';
import express, { Application, Request, Response } from 'express';

import routes from './routes';
import jobs from './jobs';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
jobs();

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
