import { BookMongodbModel } from "./MongodbBookSchema";
import { BookRepository } from "../../../domain/BookRepository";
import { Book } from "../../../domain/Book";

export class MongodbBookRepository implements BookRepository{
    async addBook(book:Book):Promise<Book|null>{
        try{
            const newBook = new BookMongodbModel(book);
            await newBook.save();
            return newBook;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async getBookById(id:string):Promise<Book|null>{
        try{
            console.log('id de busqueda', id)
            const book = await BookMongodbModel.findById(id);
            console.log('book tomado por mongo', book)
            return book;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async getBooks():Promise<Book[]|null>{
        try{
            const books = await BookMongodbModel.find();
            return books;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateBook(book:Book):Promise<boolean|null>{
        try{
            const updatedBook = await BookMongodbModel.findByIdAndUpdate
            (book.id, book, {new:true});
            return !!updatedBook; //boolean value (true or false)
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteBook(id:string):Promise<boolean|null>{
        try{
            const deletedBook = await BookMongodbModel.findByIdAndDelete(id);
            return !!deletedBook;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async changePrice(id:string, newPrice: number):Promise<boolean|null>{
        try{
            const updatedBooks = await BookMongodbModel.updateOne({_id:id}, {price:newPrice})
            return !!updatedBooks;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}