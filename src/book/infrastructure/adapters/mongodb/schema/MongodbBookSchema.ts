import { Book } from '../../../../domain/entities/Book';
import mongoose, { Schema, Document } from 'mongoose';

type IBook = Book & Document;

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    editorial: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    pages: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type:String, required: false }
});

BookSchema.virtual('id').get(function (this: IBook) {
    return this._id.toHexString();
});

BookSchema.set('toJSON', {
    virtuals: true,
});


const BookMongodbModel =  mongoose.model<IBook>('Book', BookSchema);

export { BookMongodbModel };