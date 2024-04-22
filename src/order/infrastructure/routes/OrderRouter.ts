import express from 'express';

import {
    createOrderController,
    confirmOrderController
} from '../dependencies';

const orderRouter = express.Router();

orderRouter.post('/', createOrderController.run.bind(createOrderController));
orderRouter.patch('/confirm', confirmOrderController.run.bind(confirmOrderController));

export { orderRouter };