import { UPDATE_NAME } from './types';

export const updateName = name => {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}