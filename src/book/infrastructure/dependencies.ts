import { AddBookUseCase } from "../application/use-cases/AddBookUseCase";
import { DeleteBookUseCase } from "../application/use-cases/DeleteBookUseCase";
import { GetAllBooksUseCase } from "../application/use-cases/GetAllBooksUseCase";
import { GetByIdBookUseCase } from "../application/use-cases/GetByIdBookUseCase";
import { UpdateBookUseCase } from "../application/use-cases/UpdateBookUseCase";
import { CreateOfferUseCase } from "../application/use-cases/CreateOfferUseCase";
import { GetPosessionsByUserUseCase } from "../application/use-cases/GetPosessionsByUserUseCase";
import { AddPosessionUseCase } from "../application/use-cases/AddPosessionUseCase";

import { AddBookController } from "./controllers/AddBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { GetAllBooksController } from "./controllers/GetAllBooksController";
import { GetByIdBookController } from "./controllers/GetByIdBookController";
import { UpdateBookController } from "./controllers/UpdateBookController";
import { CreateOfferController } from "./controllers/CreateOfferController";
import { GetPosessionsByUserController } from "./controllers/GetPosessionsByUserController";

import { MongodbBookRepository } from "./adapters/mongodb/repository/MongodbBookRepository";
import { MongodbPosessionRepository } from "./adapters/mongodb/repository/MongodbPosessionRepository";
import { PriceOperationsService } from "./services/PriceOperationsService";

const mongodbBookRepository = new MongodbBookRepository();
const mongodbPosessionRepository = new MongodbPosessionRepository();
const priceService = new PriceOperationsService();

export const addBookUseCase = new AddBookUseCase(mongodbBookRepository);
export const deleteBookUseCase = new DeleteBookUseCase(mongodbBookRepository);
export const getAllBooksUseCase = new GetAllBooksUseCase(mongodbBookRepository);
export const getByIdBookUseCase = new GetByIdBookUseCase(mongodbBookRepository);
export const updateBookUseCase = new UpdateBookUseCase(mongodbBookRepository);
export const createOfferUseCase = new CreateOfferUseCase(mongodbBookRepository, priceService);
export const getPosessionsByUserUseCase = new GetPosessionsByUserUseCase(mongodbPosessionRepository);
export const addPosessionUseCase = new AddPosessionUseCase(mongodbPosessionRepository);

export const addBookController = new AddBookController(addBookUseCase);
export const deleteBookController = new DeleteBookController(deleteBookUseCase);
export const getAllBooksController = new GetAllBooksController(getAllBooksUseCase);
export const getByIdBookController = new GetByIdBookController(getByIdBookUseCase);
export const updateBookController = new UpdateBookController(updateBookUseCase);
export const createOfferController = new CreateOfferController(createOfferUseCase);
export const getPosessionsByUserController = new GetPosessionsByUserController(getPosessionsByUserUseCase);