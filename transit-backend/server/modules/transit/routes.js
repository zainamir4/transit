import { Router } from 'express';
import * as TransitController from './controller';

const routes = new Router();

routes.post('/transit', TransitController.createTransit);

export default routes;
