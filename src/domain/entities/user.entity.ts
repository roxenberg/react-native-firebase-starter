import {DomainBaseEntity} from './base.entity';
import * as yup from 'yup';

export class UserEntity extends DomainBaseEntity {
  name!: string;
  email!: string;
  password!: string;

  static schema = DomainBaseEntity.schema
    .shape({
      name: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .noUnknown();

  constructor(data: unknown) {
    const isValid = UserEntity.schema.isValidSync(data);

    if (!isValid) {
      throw new Error('Invalid data');
    }

    super(data.id);
    Object.assign(this, data);
  }
}
