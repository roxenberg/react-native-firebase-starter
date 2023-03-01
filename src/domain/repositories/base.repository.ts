import {InfrDatabase} from '../../infrastructure';

export class DomainBaseRepository<TData> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  public watch = (onChange: (documents: any[]) => void) => {
    return InfrDatabase.watch(this.collectionName, onChange);
  };

  public find = async (id: string) => {
    const document = await InfrDatabase.find(this.collectionName, id);
    return document.data() as TData;
  };

  public findAll = async () => {
    const querySnapshot = await InfrDatabase.findAll(this.collectionName);
    const documents = querySnapshot.docs.map(doc => doc.data() as TData);
    return documents;
  };

  public create = async (data: any) => {
    const document = await InfrDatabase.create(this.collectionName, data);
    return document.id;
  };

  public update = async (id: string, data: any) => {
    await InfrDatabase.update(this.collectionName, id, data);
  };

  public delete = async (id: string) => {
    await InfrDatabase.delete(this.collectionName, id);
  };
}
