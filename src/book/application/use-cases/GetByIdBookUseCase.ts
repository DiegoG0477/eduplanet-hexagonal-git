import { Book } from "../../domain/Book";
import { BookRepository } from "../../domain/BookRepository";

export class GetByIdBookUseCase {
    constructor(readonly bookRepository: BookRepository ){}

    async run(id:string): Promise<Book|null>{
        try{
            const book = await this.bookRepository.getBookById(id);
            return book;
        } catch(error){
            return null;
        }
    }
}