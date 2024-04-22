import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

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