import { ObjectId } from 'mongoose';

export interface BaseEntity {
  _id: string | ObjectId;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
