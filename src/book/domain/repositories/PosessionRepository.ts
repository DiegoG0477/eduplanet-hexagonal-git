import { Posession } from "../entities/Posession";

export interface PosessionRepository {
    addPosession(posession:Posession):Promise<Posession|null>;

    getPosessionsByUser(userId: string):Promise<Posession[]|null>;
}