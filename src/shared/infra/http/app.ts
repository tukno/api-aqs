import '@config/environment';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

/** DB connection */
import '@shared/infra/typeorm';
/** Dependency injection */
import '@shared/container';

import errorHandler from '@shared/infra/http/middlewares/errorHandler';
import { router } from '@shared/infra/http/routes';
import swaggerConfig from '../../../swagger.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use('/api/v1', router);
app.use(errorHandler);

export { app };