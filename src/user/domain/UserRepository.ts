import { User } from "./entities/User";

export interface UserRepository {
    registerUser(user:User):Promise<User|null>;
    getUsers():Promise<User[]|null>;
    getPassword(email:string):Promise<string|null>;
    changePassword(id:string, password:string):Promise<boolean|null>;
    getUserByEmail(email:string):Promise<User|null>;
}