import { Order } from "../../../domain/Order";
import { OrderRepository } from "../../../domain/OrderRepository";
import { OrderMongodbModel } from "./MongodbOrderSchema";

export class MongodbOrderRepository implements OrderRepository {
    async save(order: Order): Promise<Order | null> {
        const orderMongodbModel = new OrderMongodbModel(order);
        await orderMongodbModel.save();
        return order;
    }

    async updateStatus(id: string, status: string): Promise<boolean> {
        const order = await OrderMongodbModel.findByIdAndUpdate(id, { status });
        if (!order) {
            return false;
        }
        return true;
    }

    async findByUserId(userId: string): Promise<Order[] | null> {
        const orders = await OrderMongodbModel.find({ idUser: userId });
        return orders;
    }

    async findByProductId(productId: string): Promise<Order[] | null> {
        const orders = await OrderMongodbModel.find({ idProduct: productId });
        return orders;
    }
}