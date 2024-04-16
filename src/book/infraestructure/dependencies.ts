import { AddBookUseCase } from "../application/use-cases/AddBookUseCase";
import { DeleteBookUseCase } from "../application/use-cases/DeleteBookUseCase";
import { GetAllBooksUseCase } from "../application/use-cases/GetAllBooksUseCase";
import { GetByIdBookUseCase } from "../application/use-cases/GetByIdBookUseCase";
import { UpdateBookUseCase } from "../application/use-cases/UpdateBookUseCase";

import { AddBookController } from "./controllers/AddBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { GetAllBooksController } from "./controllers/GetAllBooksController";
import { GetByIdBookController } from "./controllers/GetByIdBookController";
import { UpdateBookController } from "./controllers/UpdateBookController";

import { MongodbBookRepository } from "./adapters/mongodb/MongodbBookRepository";

const mongodbBookRepository = new MongodbBookRepository();

export const addBookUseCase = new AddBookUseCase(mongodbBookRepository);
export const deleteBookUseCase = new DeleteBookUseCase(mongodbBookRepository);
export const getAllBooksUseCase = new GetAllBooksUseCase(mongodbBookRepository);
export const getByIdBookUseCase = new GetByIdBookUseCase(mongodbBookRepository);
export const updateBookUseCase = new UpdateBookUseCase(mongodbBookRepository);

export const addBookController = new AddBookController(addBookUseCase);
export const deleteBookController = new DeleteBookController(deleteBookUseCase);
export const getAllBooksController = new GetAllBooksController(getAllBooksUseCase);
export const getByIdBookController = new GetByIdBookController(getByIdBookUseCase);
export const updateBookController = new UpdateBookController(updateBookUseCase);