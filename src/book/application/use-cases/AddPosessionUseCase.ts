import { Posession } from "../../domain/entities/Posession";
import { PosessionRepository } from "../../domain/repositories/PosessionRepository";

export class AddPosessionUseCase {
    constructor(private posessionRepository: PosessionRepository) {}

    async run(
        productId: string,
        userId: string,
    ): Promise<Posession | null> {
        try {
            const posession = new Posession(
                '',
                productId,
                userId,
                new Date()
            );
            const result = await this.posessionRepository.addPosession(posession);
            return result;
        } catch (error) {
            return null;
        }
    }
}