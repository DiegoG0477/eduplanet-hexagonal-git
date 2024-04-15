import { Book } from "../../domain/Book";
import { BookRepository } from "../../domain/BookRepository";

export class GetAllBooksUseCase {
    constructor(readonly bookRepository: BookRepository ){}

    async run(): Promise<Book[] | null>{
        try{
            const books = await this.bookRepository.getBooks();
            return books;
        } catch(error){
            return null;
        }
    }
}