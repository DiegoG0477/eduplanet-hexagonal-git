import { UserRepository } from "../../domain/UserRepository";
import { IEncryptPasswordService } from "../../domain/services/IEncryptPasswordService";
import { ITokenService } from "../services/ITokenService";

export class LoginUseCase {
    constructor(
        readonly userRepository: UserRepository,
        readonly tokenService: ITokenService,
        readonly encryptService: IEncryptPasswordService
    ) {}

    async run(email: string, password: string): Promise<string | null> {
        try {
            const encoded = await this.userRepository.getPassword(email);
            if (encoded === null) {
                return null;
            }
            const isValid = await this.encryptService.verifyPassword(
                password,
                encoded
            );

            if (!isValid) {
                return null;
            }

            const user = await this.userRepository.getUserByEmail(email);
            const id = user?.id;

            console.log('id', id);

            const token = await this.tokenService.generateToken(
                id as string,
            );

            return token;
        } catch (error) {
            return null;
        }
    }
}
