import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

class InfrDatabaseImpl {
  private db: FirebaseFirestoreTypes.Module;

  constructor() {
    this.db = firestore();
  }

  private getCollection = (collectionName: string) => {
    return this.db.collection(collectionName);
  };

  public watch = <TData>(
    collectionName: string,
    onChange: (documents: TData[]) => void,
  ) => {
    return this.getCollection(collectionName).onSnapshot(
      querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data() as TData);
        onChange(documents);
      },
      error => {
        console.log(error);
      },
    );
  };

  public find(collectionName: string, id: string) {
    return this.getCollection(collectionName).doc(id).get();
  }

  public findAll(collectionName: string) {
    return this.getCollection(collectionName).get();
  }

  public create(collectionName: string, data: any) {
    return this.getCollection(collectionName).add(data);
  }

  public update(collectionName: string, id: string, data: any) {
    return this.getCollection(collectionName).doc(id).update(data);
  }

  public delete(collectionName: string, id: string) {
    return this.getCollection(collectionName).doc(id).delete();
  }
}

export const InfrDatabase = new InfrDatabaseImpl();
