import { BookRepository } from "../../domain/BookRepository";
import { IPriceOperationsService } from "../services/IPriceOperationsService";

export class CreateOfferUseCase{
    constructor(
        readonly bookRepository: BookRepository,
        readonly priceOperations: IPriceOperationsService
     ){}

    async run(
        id:string,
        percentage:number): Promise<boolean>{
        try{
            const book = await this.bookRepository.getBookById(id);

            console.log('book aplicado para offer',book)

            const priceBook = book?.price;

            if(priceBook === undefined){
                return false;
            }

            if(percentage < 0 || percentage > 100){
                return false;
            }

            const newPrice = this.priceOperations.calculateDiscountPrice(priceBook, percentage);

            const result = await this.bookRepository.changePrice(id, newPrice);
            return !!result;
        } catch(error){
            return false;
        }
    }
}
