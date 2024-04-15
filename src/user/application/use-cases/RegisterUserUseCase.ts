import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/UserRepository";
import { IEncryptPasswordService } from "../../domain/services/IEncryptPasswordService";

export class RegisterUserUseCase{
    constructor(
        readonly userRepository: UserRepository, 
        readonly encryptService: IEncryptPasswordService
    ){}

    async run(
        role:string,
        email:string,
        password:string
    ): Promise<User|null>{
        const encodedPassword = await this.encryptService.encodePassword(password);

        const userObject = new User(
            '',
            email,
            encodedPassword,
            role,
        );

        try{
            const user = await this.userRepository.registerUser(userObject);
            return user;
        } catch(error){
            return null;
        }
    }
}