import { Model } from 'mongoose';

export class BaseService<T> {
  repository: Model<T>;

  constructor(repository: Model<T>) {
    this.repository = repository;
  }

  findAll(): Promise<T[]> {
    return this.repository.find().exec();
  }

  findOne(id: string): Promise<T> {
    return this.repository.findById(id).exec();
  }

  create(createDTO: T): Promise<T> {
    return this.repository.create(createDTO);
  }

  update(id: string, updateDTO: Partial<T>) {
    return this.repository.findByIdAndUpdate(id, updateDTO);
  }

  remove(id: string) {
    return this.repository.findByIdAndDelete(id).exec();
  }
}
