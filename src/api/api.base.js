import axios from 'axios';
import { apiBaseUrl} from '@/config.js'

/*
export const setToken =  axios => {
  const token = localStorageUtil.read('_token') || null;
  if (token) {
    axios.defaults.headers.common['token'] = `${token}`;
  } else {
    axios.defaults.headers.common['token'] = ``;
  }
}
*/
export const apiRoutesConfig = {
  main: {
    info: {
      url: 'info',
      method: 'POST',
      alertError: true,
    },
    videoList: {
      url: 'videoList',
      method: 'POST',
      alertError: true,
    },
  },
  content: {
    playContent: {
      url: 'play',
      method: 'POST',
      alertError: true,
    },
    recommendVideoList: {
      url: 'recommendVideoList',
      method: 'POST',
      alertError: true,
    },
  },
  pay: {
    pay: {
      url: 'pay',
      method: 'POST',
      alertError: true,
    },
    payCheck: {
      url: 'payCheck',
      method: 'POST',
      alertError: true,
    },
  },

}


const responseHandler = (response, alertError = false, alertSuccess = false) => {
  // console.log(response);
  return response.data
  /*
  if (response.data.status === 1) {
    return response.data
  }
  else {

    throw { msg: 'Error in api..' }
  }
*/
}



const apiWrapper = async (config, params, headers = {}) => {

  axios.defaults.headers.common['Content-Type'] = 'application/json';
  //  setToken(axios);
  for (var key in headers) {
    axios.defaults.headers.common[key] = headers[key];
  }
  return axios[config.method.toLowerCase()](`${apiBaseUrl}/${config.url}`, params, headers).then(response => {
    return responseHandler(response, config.alertError, config.alertSuccess)
  })
}

export default apiWrapper;
