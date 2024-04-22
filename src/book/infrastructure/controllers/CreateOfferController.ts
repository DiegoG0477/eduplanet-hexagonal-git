import { Request, Response } from "express";
import { CreateOfferUseCase } from "../../application/use-cases/CreateOfferUseCase";

export class CreateOfferController {
    constructor(readonly createOfferUseCase: CreateOfferUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const offerApplied = await this.createOfferUseCase.run(
                data.id,
                data.percentage
            );

            if (offerApplied) {
                res.status(200).send({
                    status: "success",
                    message: "Offer created successfully",
                    data: {
                        "offer of the book": `${data.percentage}%`,
                    },
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Offer not created",
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