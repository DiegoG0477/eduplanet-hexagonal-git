import { CreateOrderUseCase } from "../application/use-cases/CreateOrderUseCase";
import { UpdateOrderUseCase } from "../application/use-cases/UpdateOrderUseCase";

import { addPosessionUseCase } from "../../book/infrastructure/dependencies";

import { CreateOrderController } from "./controllers/CreateOrderController";
import { ConfirmOrderController } from "./controllers/ConfirmOrderController";

import { MongodbOrderRepository } from "./adapters/mongodb/MongodbOrderRepository";
import { NotificationService } from "./services/rabbitMq/NotificationService";


const notificationService = new NotificationService();
const orderRepository = new MongodbOrderRepository();

const createOrderUseCase = new CreateOrderUseCase(orderRepository, notificationService);
const updateOrderUseCase = new UpdateOrderUseCase(orderRepository);

export const createOrderController = new CreateOrderController(createOrderUseCase);
export const confirmOrderController = new ConfirmOrderController(updateOrderUseCase, addPosessionUseCase);