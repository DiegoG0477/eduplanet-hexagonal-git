import { BookRepository } from "../../domain/repositories/BookRepository";

export class DeleteBookUseCase {
    constructor(readonly bookRepository: BookRepository ){}

    async run(id:string): Promise<boolean>{
        try{
            const result = await this.bookRepository.deleteBook(id);
            return !!result;
        } catch(error){
            return false;
        }
    }
}
