// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// * action types
const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

// * action creator que retorna um objeto
function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}
// * action creator que retorna um objeto
function requestDog() {
  return { type: REQUEST_IMAGE };
}

// * action creator que retorna um objeto
function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

// * action creator que faz uma requisição para uma API
// * esta action retorna uma função
export function fetchDog() {
  return (dispatch) => {
    // * chama a requestDog()
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

// ! Arquivo dos reducers
const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;