import { Order } from "../../domain/Order";
import { OrderRepository } from "../../domain/OrderRepository";
import { INotificationService } from "../services/INotificationService";

export class CreateOrderUseCase {
    constructor(
        private orderRepository: OrderRepository,
        private notificationService: INotificationService
    ) {}

    async run(
        userId: string,
        productId: string
    ): Promise<Order | null> {
        const orderObj = new Order(
            "",
            userId,
            productId,
            "PROCESSING",
            new Date(),
            new Date()
        );
        const order = await this.orderRepository.save(orderObj);

        if (order) {
            await this.notificationService.sendNotification(order);
        }

        return order;
    }
}