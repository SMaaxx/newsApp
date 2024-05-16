import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchNewsFailure,
  fetchNewsSuccess,
  setAuthFailure,
  setAuthSuccess
} from './actions';
import {getNews} from '../service/news';
import {FETCH_NEWS, SET_AUTH} from './types';
import {getProfile} from '../service/profile';

function* fetchNewsSaga() {
  try {
    const data = yield call(getNews);

    yield put(fetchNewsSuccess(data));
  } catch (error) {
    yield put(fetchNewsFailure(error?.message));
  }
}

function* setAuthSaga() {
  try {
    const data = yield call(getProfile);

    yield put(setAuthSuccess({
      isAuth: true,
      profile: data
    }));
  } catch (error) {
    yield put(setAuthFailure(error?.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_NEWS, fetchNewsSaga);
  yield takeEvery(SET_AUTH, setAuthSaga);
}

export default rootSaga;
