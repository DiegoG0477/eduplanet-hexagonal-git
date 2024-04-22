import { User } from '../../../domain/entities/User';
import mongoose, { Schema, Document } from 'mongoose';

type IUser = User & Document;

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

UserSchema.virtual('id').get(function (this: IUser) {
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
});


const UserMongodbModel =  mongoose.model<IUser>('User', UserSchema);

export { UserMongodbModel };