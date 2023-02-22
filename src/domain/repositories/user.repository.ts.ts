import {UserEntity} from '../entities/user.entity';
import {DomainBaseRepository} from './base.repository';

export class DomainUserRepositoryImpl extends DomainBaseRepository<UserEntity> {
  constructor() {
    super('User');
  }

  public create = async (data: Omit<UserEntity, 'id'>) => {
    const user = new UserEntity(data);
    const id = await super.create(user);
    return id;
  };
}

export const DomainUserRepository = new DomainUserRepositoryImpl();
