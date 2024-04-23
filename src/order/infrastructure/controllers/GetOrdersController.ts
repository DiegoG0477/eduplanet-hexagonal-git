import { Request, Response } from 'express';
import { GetOrdersUseCase } from '../../application/use-cases/GetOrdersUseCase';

export class GetOrdersController {
    constructor(private getOrdersUseCase: GetOrdersUseCase) {}

    async run(req: Request, res: Response) {
        const orders = await this.getOrdersUseCase.run();

        if (!orders) {
            res.status(404).send();
            return;
        }

        res.status(200).send(orders);
    }
}