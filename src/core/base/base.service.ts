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
  async findAllPaged(page_number = 0, page_size?: number) {
    const findQuery = this._repository
      .find()
      .limit(page_size * 1)
      .skip((page_number - 1) * page_size);

    const data = await findQuery;
    const count = await this._repository.count();

    return { count, data };
  }
}
