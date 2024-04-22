import { Order } from "./Order";

export interface OrderRepository {
    save(order: Order): Promise<Order | null>;
    findByUserId(userId: string): Promise<Order[] | null>;
    findByProductId(productId: string): Promise<Order[] | null>;
    updateStatus(id: string, status: string): Promise<boolean>;
}