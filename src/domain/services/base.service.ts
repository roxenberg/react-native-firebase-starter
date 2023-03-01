export class DomainBaseService<TRepo> {
  public repository: TRepo;
  constructor(repository: TRepo) {
    this.repository = repository;
  }
}
