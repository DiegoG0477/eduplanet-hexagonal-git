import { CreateOrderUseCase } from "../application/use-cases/CreateOrderUseCase";
import { UpdateOrderUseCase } from "../application/use-cases/UpdateOrderUseCase";
import { GetOrdersUseCase } from "../application/use-cases/GetOrdersUseCase";

import { addPosessionUseCase } from "../../book/infrastructure/dependencies";

import { CreateOrderController } from "./controllers/CreateOrderController";
import { ConfirmOrderController } from "./controllers/ConfirmOrderController";
import { GetOrdersController } from "./controllers/GetOrdersController";

import { MongodbOrderRepository } from "./adapters/mongodb/MongodbOrderRepository";
import { NotificationService } from "./services/rabbitMq/NotificationService";


const notificationService = new NotificationService();
const orderRepository = new MongodbOrderRepository();

const createOrderUseCase = new CreateOrderUseCase(orderRepository, notificationService);
const updateOrderUseCase = new UpdateOrderUseCase(orderRepository);
const getOrdersUseCase = new GetOrdersUseCase(orderRepository);

export const createOrderController = new CreateOrderController(createOrderUseCase);
export const confirmOrderController = new ConfirmOrderController(updateOrderUseCase, addPosessionUseCase);
export const getOrdersController = new GetOrdersController(getOrdersUseCase);