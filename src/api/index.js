import _ from 'lodash';
import queryString from 'query-string';
import configUsers from './../configs/configUsers.json';

const {
  api: { baseUrl, seed, user: USER_CONFIG },
} = configUsers;

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    seed,
    results: 20,
    inc: USER_CONFIG.fields,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryParamsObject = _.pick(finalOptions, USER_CONFIG.queryParams);

  const fetchParamsString = queryString.stringify(queryParamsObject, {
    arrayFormat: 'comma',
  });

  return fetch(`${baseUrl}?${fetchParamsString}`)
    .then(res => res.json())
    .then(data => data.results);
};
