import { Request, Response } from "express";
import { GetByIdBookUseCase } from "../../application/use-cases/GetByIdBookUseCase";

export class GetByIdBookController {
    constructor(readonly getByIdBookUseCase: GetByIdBookUseCase) {}

    async run(req: Request, res: Response) {
        const id = req.params.idBook;
        try {
            const book = await this.getByIdBookUseCase.run(id);

            if (book) {
                res.status(200).send({
                    status: "success",
                    message: "Book retrieved successfully",
                    data: book,
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Book not retrieved",
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
