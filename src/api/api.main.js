import apiWrapper, { apiRoutesConfig } from './api.base';
import cdnWrapper, { cdnRoutesConfig } from './cdn.base';

const headerConfiguration = () => {
  let headers = {}
  return headers
}

const api = {
  async testCdn(params) {
    return await cdnWrapper(cdnRoutesConfig.main.testCdn, params, headerConfiguration());
  },
  async getInfo(params) {
    return await apiWrapper(
      apiRoutesConfig.main.info,
      params,
      headerConfiguration()
    );
  },
  async getVideoList(params) {
    return await apiWrapper(apiRoutesConfig.main.videoList, params, headerConfiguration());
  },
}

const contentApi = {
  async getPlayContent(params) {
    return await apiWrapper(apiRoutesConfig.content.playContent, params, headerConfiguration());
  },
  async getRecommendVideoList(params) {
    return await apiWrapper(apiRoutesConfig.content.recommendVideoList, params, headerConfiguration());
  },
}

const payApi = {
  async createPay(params) {
    return await apiWrapper(apiRoutesConfig.pay.pay, params, headerConfiguration());
  },
  async checkPayCheck(params) {
    return await apiWrapper(apiRoutesConfig.pay.payCheck, params, headerConfiguration());
  },
}

export default {
  ...api,
  ...contentApi,
  ...payApi
};