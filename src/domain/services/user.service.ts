import {DomainUserRepository} from '../repositories';
import {DomainBaseService} from './base.service';

export class UserServiceImpl extends DomainBaseService<
  typeof DomainUserRepository
> {
  constructor() {
    super(DomainUserRepository);
  }
}

export const UserService = new UserServiceImpl();
