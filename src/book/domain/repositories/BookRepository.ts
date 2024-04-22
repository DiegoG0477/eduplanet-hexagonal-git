import { Book } from "../entities/Book";

export interface BookRepository {
    addBook(book:Book):Promise<Book|null>;

    getBookById(id:string):Promise<Book|null>;

    getBooks():Promise<Book[]|null>;

    updateBook(book:Book):Promise<boolean|null>;

    deleteBook(id:string):Promise<boolean|null>;

    changePrice(id:string, newPrice: number):Promise<boolean|null>;
}