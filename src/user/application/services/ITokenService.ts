export interface ITokenService{
    generateToken(userId: string): Promise<string>;
}