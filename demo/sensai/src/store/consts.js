export const API_PREFIX = 'http://sensai.powerpigger.cc'

const apiName = {
  SENSAI_LIST: '/sensai/site/list'
};

export const requestStatus = apiName => ({
  START: `REQUEST_${apiName}_START`,
  SUCCESS: `REQUEST_${apiName}_SUCCESS`,
  ERROR: `REQUEST_${apiName}_ERROR`,
});

export const REQUEST_TYPE = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export const ACTION_TYPE = {
  SENSAI_LIST: 'SENSAI_LIST'
};

export const getApiName = (api, params = {}) => (
  API_PREFIX + apiName[api] + (Object.keys(params) 
    ? `?${Object.keys(params).map(k => k + '=' + params[k]).join('&')}`
    : '')
);
