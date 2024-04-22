import express from 'express';
import { authMiddleware } from '../../../middlewares/authMiddleware';

import {
    getPosessionsByUserController
} from '../dependencies';

const posessionRouter = express.Router();

posessionRouter.get('/', authMiddleware, (req, res) => getPosessionsByUserController.run(req, res));

export { posessionRouter };