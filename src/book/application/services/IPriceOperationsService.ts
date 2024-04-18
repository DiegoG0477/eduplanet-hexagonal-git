export interface IPriceOperationsService {
    calculateDiscountPrice(price: number, percentage: number): number;
}