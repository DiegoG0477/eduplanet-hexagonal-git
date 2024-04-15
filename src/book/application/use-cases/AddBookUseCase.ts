import { Book } from "../../domain/Book";
import { BookRepository } from "../../domain/BookRepository";

export class AddBookUseCase {
    constructor(readonly bookRepository: BookRepository ){}

    async run(
        title:string,
        price:number,
        editorial:string,
        author:string,
        year:number,
        pages:number,
        description:string
    ): Promise<Book|null>{
        const bookObject = new Book(
            "",
            title,
            author,
            editorial,
            year,
            pages,
            price,
            description
        );

        try{
            const book = await this.bookRepository.addBook(bookObject);
            return book;
        } catch(error){
            return null;
        }
    }
}