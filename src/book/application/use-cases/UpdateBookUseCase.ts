import { Book } from "../../domain/Book";
import { BookRepository } from "../../domain/BookRepository";

export class UpdateBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(
        id: string,
        title: string,
        price: number,
        editorial: string,
        author: string,
        year: number,
        pages: number,
        description: string
    ): Promise<boolean | null> {
        const bookObject = new Book(
            id,
            title,
            author,
            editorial,
            year,
            pages,
            price,
            description
        );

        try {
            const result = await this.bookRepository.updateBook(bookObject);
            return result;
        } catch (error) {
            return null;
        }
    }
}
