import express from 'express';
import { authMiddleware } from '../../../middlewares/authMiddleware';

import {
    createOrderController,
    confirmOrderController,
    getOrdersController
} from '../dependencies';

const orderRouter = express.Router();

orderRouter.get('/', authMiddleware, getOrdersController.run.bind(getOrdersController));
orderRouter.post('/', authMiddleware, createOrderController.run.bind(createOrderController));
orderRouter.post('/confirm', confirmOrderController.run.bind(confirmOrderController));


export { orderRouter };