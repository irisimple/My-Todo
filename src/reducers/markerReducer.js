import { ADD_MARKER } from '../actions/types';

const initialState = {
  markers:[]
};

const markerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MARKER:
      return {
        ...state,
        markers:state.markers.concat({
            key: Math.random(),
            value: action.payload
        })
      };
    default:
      return state;
  }
}

export default markerReducer;