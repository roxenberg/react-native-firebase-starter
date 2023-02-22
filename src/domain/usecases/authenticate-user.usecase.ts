import {UserService} from '../services';

class DomainAuthenticateUserUseCaseImpl {
  public service: typeof UserService;
  constructor(userService: typeof UserService) {
    this.service = userService;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(email: string, password: string): Promise<string> {
    // 1. Find user by emaildo login
    return Promise.resolve('token');
  }
}

export const DomainAuthenticateUserUseCase =
  new DomainAuthenticateUserUseCaseImpl(UserService);
