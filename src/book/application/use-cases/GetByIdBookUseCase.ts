import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

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