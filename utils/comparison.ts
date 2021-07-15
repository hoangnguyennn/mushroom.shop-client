import { IObject } from '@interfaces/index';

export const sameObject = (object1: IObject, object2: IObject) => {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
