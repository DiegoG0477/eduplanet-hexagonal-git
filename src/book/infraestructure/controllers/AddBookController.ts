import { Request, Response } from "express";
import { AddBookUseCase } from "../../application/use-cases/AddBookUseCase";

export class AddBookController {
    constructor(readonly addBookUseCase: AddBookUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
            const book = await this.addBookUseCase.run(
                data.title,
                data.price,
                data.editorial,
                data.author,
                data.year,
                data.pages,
                data.description
            );

            if (book) {
                res.status(201).send({
                    status: "success",
                    message: "Book added successfully",
                    data: {
                        book,
                    },
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Book not added",
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
