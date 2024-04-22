import { Request, Response } from 'express';
import { GetPosessionsByUserUseCase } from '../../application/use-cases/GetPosessionsByUserUseCase';

interface CustomRequest extends Request {
    userId: string;
}

export class GetPosessionsByUserController{
    constructor(readonly getPosessionsByUserUseCase: GetPosessionsByUserUseCase){}

    async run(req: Request, res: Response){
        const userId = (req as CustomRequest).userId; 

        try{
            const posessions = await this.getPosessionsByUserUseCase.run(userId);

            if (posessions) {
                res.status(200).send({
                    status: "success",
                    message: "Posessions retrieved successfully",
                    data: {
                        posessions,
                    },
                });
            } else {
                res.status(400).send({
                    status: "error",
                    message: "Posessions not retrieved",
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