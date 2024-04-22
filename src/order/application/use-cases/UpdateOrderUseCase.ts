import { OrderRepository } from "../../domain/OrderRepository";

export class UpdateOrderUseCase {
    constructor(
        private orderRepository: OrderRepository
    ) {}

    async run(
        id: string,
        status: string
    ): Promise<boolean> {
        return await this.orderRepository.updateStatus(id, status);
    }
}