import axios from 'axios';
import { cdnBaseUrl } from '@/config.js'

export const cdnRoutesConfig = {
  main: {
    testCdn: {
      url: 'testCdn',
      method: 'POST',
      alertError: true,
    },
  },
}


const responseHandler = (response, alertError = false, alertSuccess = false) => {
  // console.log(response);

  if(response.status === 200){
    return 1
  }else{
    return 0
  }
}


const cndWrapper = async (config, params, headers = {}) => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  for (var key in headers) {
    axios.defaults.headers.common[key] = headers[key];
  }
  return axios[config.method.toLowerCase()](`${cdnBaseUrl}/${config.url}`, params, headers).then(response => {
    return responseHandler(response, config.alertError, config.alertSuccess)
  })
}

export default cndWrapper;
