import { Posession } from "../../../../domain/entities/Posession";
import { PosessionRepository } from "../../../../domain/repositories/PosessionRepository";
import { PosessionMongodbModel } from "../schema/MongodbPosessionSchema";

export class MongodbPosessionRepository implements PosessionRepository {
    async addPosession(posession: Posession): Promise<Posession | null> {
        try {
            const posessionMongodb = new PosessionMongodbModel(posession);
            const posessionSaved = await posessionMongodb.save();
            return posessionSaved;
        } catch (error) {
            return null;
        }
    }

    async getPosessionsByUser(userId: string): Promise<Posession[] | null> {
        try {
            const posessions = await PosessionMongodbModel.find({ idUser: userId });
            return posessions;
        } catch (error) {
            return null;
        }
    }
}