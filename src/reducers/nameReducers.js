import { UPDATE_NAME } from '../actions/types';

const initialState = {
  name: 'Rokeya Asad'
};

const nameReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name:action.payload
      };
    default:
      return state;
  }
}

export default nameReducer;