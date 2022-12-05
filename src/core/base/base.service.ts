import { Model } from 'mongoose';

export class BaseService<T> {
  _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  findAll(): Promise<T[]> {
    return this._repository.find().exec();
  }

  findOne(id: string): Promise<T> {
    return this._repository.findById(id).exec();
  }

  create(createDTO: any): Promise<T> {
    return this._repository.create(createDTO);
  }

  update(id: string, updateDTO: Partial<any>) {
    return this._repository.findByIdAndUpdate(id, updateDTO);
  }

  remove(id: string) {
    return this._repository.findByIdAndDelete(id).exec();
  }
}
