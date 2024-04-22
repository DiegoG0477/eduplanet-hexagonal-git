import jwt from 'jsonwebtoken';
import { ITokenService } from "../../application/services/ITokenService";

export class TokenService implements ITokenService{
    async generateToken(userId: string): Promise<string> {
        const JWT_SECRET = (process.env.JWT_SECRET as string) ?? 'secret';
        const token = jwt.sign({ id: userId }, JWT_SECRET,{ expiresIn: '12h' });

        console.log('token', token);

        return token;
    }
}
