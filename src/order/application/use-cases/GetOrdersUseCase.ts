import { Order } from "../../domain/Order";
import { OrderRepository } from "../../domain/OrderRepository";

export class GetOrdersUseCase {
    constructor(private orderRepository: OrderRepository) {}

    async run(): Promise<Order[] | null> {
        return await this.orderRepository.getAll();
    }
}