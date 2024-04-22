import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/use-cases/CreateOrderUseCase";

interface CustomRequest extends Request {
    userId: string;
}

export class CreateOrderController {
    constructor(readonly createOrderUseCase: CreateOrderUseCase) {}

    async run(req: Request, res: Response) {
        const userId = (req as CustomRequest).userId;
        const productId = req.body.productId;

        try {
            console.log('userid', userId);
            const order = await this.createOrderUseCase.run(userId, productId);

            if (order) {
                res.status(200).send({
                    status: "success",
                    message: "Order created successfully",
                    data: {
                        order,
                    },
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Order not created",
                });
            }
        } catch (error) {
            res.status(400).send({
                status: "error",
                message: "An error occurred",
                error: error,
            });
        }
    }
}