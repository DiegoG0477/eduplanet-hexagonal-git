import { Request, Response } from 'express';
import { GetAllBooksUseCase } from '../../application/use-cases/GetAllBooksUseCase';

export class GetAllBooksController{
    constructor(readonly getAllBooksUseCase: GetAllBooksUseCase){}

    async run(req: Request, res: Response){
        try{
            const books = await this.getAllBooksUseCase.run();
            if(books){
                res.status(200).send({
                    status: 'success',
                    message: 'Books retrieved successfully',
                    data: {
                        books,
                    },
                });
            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'Books not retrieved',
                });
            }
        } catch (error){
            res.status(400).send({
                status: 'error',
                message: 'An error occurred',
                error: error,
            });
        }
    }
}