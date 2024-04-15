import { Request, Response } from 'express';
import { DeleteBookUseCase } from '../../application/use-cases/DeleteBookUseCase';

export class DeleteBookController {
    constructor(readonly deleteBookUseCase: DeleteBookUseCase) {}

    async run(req: Request, res: Response) {
        const id = req.params.idBook;
        try {
            const result = await this.deleteBookUseCase.run(id);
            if (result) {
                res.status(200).send({
                    status: 'success',
                    message: 'Book deleted successfully',
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'Book not deleted',
                });
            }
        } catch (error) {
            res.status(400).send({
                status: 'error',
                message: 'An error occurred',
                error: error,
            });
        }
    }
}