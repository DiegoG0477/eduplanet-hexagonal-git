import { UserMongodbModel } from "./MongodbUserSchema";
import { UserRepository } from "../../../domain/UserRepository";
import { User } from "../../../domain/entities/User";

export class MongodbUserRepository implements UserRepository{
    async registerUser(user: User): Promise<User | null> {
        const userMongodb = new UserMongodbModel(user);
        await userMongodb.save();
        return userMongodb;
    }

    async getUsers(): Promise<User[] | null> {
        const users = await UserMongodbModel.find();
        return users;
    }

    async getPassword(email: string): Promise<string | null> {
        const user = await UserMongodbModel.findOne({email: email});
        if(!user) return null;
        return user.password;
    }

    async changePassword(email: string, password: string): Promise<boolean | null> {
        const user = await UserMongodbModel.findOneAndUpdate({email: email}, {password: password});
        if(!user) return false;
        return true;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await UserMongodbModel.findOne({email: email});
        return user;
    }
}