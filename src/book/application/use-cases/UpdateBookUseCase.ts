import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";

export class UpdateBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(
        title: string,
        price: number,
        editorial: string,
        author: string,
        year: number,
        pages: number,
        description: string,
        image: string
    ): Promise<boolean | null> {
        const bookObject = new Book(
            '',
            title,
            author,
            editorial,
            year,
            pages,
            price,
            description,
            image
        );

        try {
            const result = await this.bookRepository.updateBook(bookObject);
            return result;
        } catch (error) {
            return null;
        }
    }
}
