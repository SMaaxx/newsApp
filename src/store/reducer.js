import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  SET_AUTH_FAILURE,
  SET_AUTH_SUCCESS
} from './types';

const initialState = {
  news: [],
  isAuth: false,
  profile: {
    name: '',
    company: '',
    phone: ''
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        profile: action.payload.profile
      };
    case SET_AUTH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;