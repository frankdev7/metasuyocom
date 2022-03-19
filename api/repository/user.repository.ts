import { connect } from "../mongodb/config/db.config";
import { UserModel } from '../model';

export class UserRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createUser(email: string): Promise<any> {
        let user = new UserModel();
        user.email = email;
        user.date = new Date().toLocaleString();
        return await UserModel.create(user);
    }

}