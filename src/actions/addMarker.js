import { ADD_MARKER } from './types';

export const addAddress = Coordinates => {
  return {
    type: ADD_MARKER,
    payload: Coordinates
  }
}