import { UserService } from '../service';

export class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async create(email: string) {
        return await this.userService.createUser(email);
    }

}