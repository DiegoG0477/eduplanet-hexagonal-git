import { Order } from "../../domain/Order";

export interface INotificationService {
    sendNotification(order: Order): Promise<boolean>;
}