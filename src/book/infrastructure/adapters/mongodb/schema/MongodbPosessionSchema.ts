import { Posession } from "../../../../domain/entities/Posession";
import mongoose, { Schema, Document } from 'mongoose';

type IPosession = Posession & Document;

const PosessionSchema: Schema = new Schema({
    idProduct: { type: String, required: true },
    idUser: { type: String, required: true },
    sinceDate: { type: Date, required: true }
});

PosessionSchema.virtual('id').get(function (this: IPosession) {
    return this._id.toHexString();
});

PosessionSchema.set('toJSON', {
    virtuals: true,
});

const PosessionMongodbModel =  mongoose.model<IPosession>('Posession', PosessionSchema);

export { PosessionMongodbModel };