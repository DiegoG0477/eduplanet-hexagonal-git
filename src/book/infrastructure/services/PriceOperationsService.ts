import { IPriceOperationsService } from "../../application/services/IPriceOperationsService";

export class PriceOperationsService implements IPriceOperationsService {
    calculateDiscountPrice(price: number, percentage: number): number {
        return price - (price * percentage / 100);
    }
}