import { UserRepository } from '../repository';

export class UserService {

  userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async createUser(email: string) {
        return await this.userRepository.createUser(email);
    }
}