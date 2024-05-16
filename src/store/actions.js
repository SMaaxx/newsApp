import {
  FETCH_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS, SET_AUTH, SET_AUTH_FAILURE, SET_AUTH_SUCCESS
} from './types';

export const fetchNewsSuccess = (payload) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload
  };
};

export const fetchNewsFailure = (payload) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload
  };
};

export const fetchNews = () => {
  return {
    type: FETCH_NEWS,
  };
};

export const setAuthSuccess = (payload) => {
  return {
    type: SET_AUTH_SUCCESS,
    payload
  };
};

export const setAuthFailure = (payload) => {
  return {
    type: SET_AUTH_FAILURE,
    payload
  };
};

export const setAuth = () => {
  return {
    type: SET_AUTH
  };
};