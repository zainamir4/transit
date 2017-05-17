import { Router } from 'express';
import * as TransitController from './controller';

const routes = new Router();

routes.post('/transit', TransitController.createTransit);
routes.get('/transit', TransitController.getAllTransits);

export default routes;
