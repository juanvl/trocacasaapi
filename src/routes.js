import { Router } from 'express';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';

import PropertyController from './app/controllers/PropertyController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import * as SessionValidator from './app/validators/SessionValidator';
import * as UserValidator from './app/validators/UserValidator';

const routes = new Router();

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore);

routes.post('/users', UserValidator.store, UserController.store);

routes.post(
  '/sessions',
  bruteForce.prevent,
  SessionValidator.store,
  SessionController.store
);

routes.get('/properties', PropertyController.index);
routes.get('/properties/:id', PropertyController.detail);

routes.use(authMiddleware);

routes.put('/users', UserValidator.update, UserController.update);

// routes.post('/properties', PropertyController.store);
// routes.put('/properties/:id', PropertyController.update);
// routes.delete('/properties/:id', PropertyController.destroy);

export default routes;
