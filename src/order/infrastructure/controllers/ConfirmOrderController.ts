import { Request, Response } from "express";
import { UpdateOrderUseCase } from "../../application/use-cases/UpdateOrderUseCase";
import { AddPosessionUseCase } from "../../../book/application/use-cases/AddPosessionUseCase";

export class ConfirmOrderController {
    constructor(
        readonly updateOrderUseCase: UpdateOrderUseCase,
        readonly addPosessionUseCase: AddPosessionUseCase
    ){}

    async run(req: Request, res: Response) {
        const orderId = req.body.id;
        const userId = req.body.idUser;
        const productId = req.body.idProduct;
        const status = req.body.status;

        try {
            const updated = await this.updateOrderUseCase.run(orderId, status);

            if (!updated) {
                return res.status(404).send({
                    status: "error",
                    message: "Order not confirmed",
                });
            }

            if (status === "SUCCESS"){
                const posession = await this.addPosessionUseCase.run(productId, userId);
                
                if (!posession) {
                    return res.status(400).send({
                        status: "error",
                        message: "Posession not added",
                    });
                }
            }

            res.status(200).send({
                status: "success",
                message: "Order confirmed successfully",
            });
        } catch (error) {
            res.status(400).send({
                status: "error",
                message: "An error occurred",
                error: error,
            });
        }
    }

}