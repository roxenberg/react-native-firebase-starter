import * as yup from 'yup';

export class DomainBaseEntity {
  id?: string;

  static schema = yup.object().shape({
    id: yup.string(),
  });

  constructor(id?: string) {
    this.id = id;
  }
}
