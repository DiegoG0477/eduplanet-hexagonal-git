import express from 'express';
import { authMiddleware } from '../../../middlewares/authMiddleware';

import {
    createOrderController,
    confirmOrderController
} from '../dependencies';

const orderRouter = express.Router();

orderRouter.post('/', authMiddleware, createOrderController.run.bind(createOrderController));
orderRouter.post('/confirm', confirmOrderController.run.bind(confirmOrderController));

export { orderRouter };