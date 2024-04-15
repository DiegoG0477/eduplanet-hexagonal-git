import { Request, Response } from 'express';
import { UpdateBookUseCase } from '../../application/use-cases/UpdateBookUseCase';

export class UpdateBookController{
    constructor(readonly updateBookUseCase: UpdateBookUseCase){}

    async run(req: Request, res: Response){
        const data = req.body;

        try{
            const result = await this.updateBookUseCase.run(
                data.id,
                data.title,
                data.price,
                data.editorial,
                data.author,
                data.year,
                data.pages,
                data.description
            );

            if (result) {
                res.status(200).send({
                    status: "success",
                    message: "Book updated successfully"
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Book not updated",
                });
            }
        }catch(error){
            res.status(400).send({
                status: "error",
                message: "An error occurred",
                error: error,
            });
        }
    }
}