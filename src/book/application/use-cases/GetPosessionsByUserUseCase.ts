import { Posession } from "../../domain/entities/Posession";
import { PosessionRepository } from "../../domain/repositories/PosessionRepository";

export class GetPosessionsByUserUseCase {
    constructor(private posessionRepository: PosessionRepository) {}

    async run(userId: string): Promise<Posession[] | null > {
        try {
            const posessions = await this.posessionRepository.getPosessionsByUser(userId);
            return posessions;
        } catch (error) {
            return null;
        }
    }
}