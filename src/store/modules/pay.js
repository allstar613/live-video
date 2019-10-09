import api from '@/api'
import { errorLogger } from '@/util.js';

const state = {
    payList: {
        "status": '',
        "message": "",
        "data": {
          "img": "",
          "money": "",
          "time": "",
          "orderid": "" ,
        }
    },
    checkList: {
    }
};

// getters
const getters = {

};

const actions = {
    async createPay({ commit }, params) {
        await api.createPay(params).then(data => {
            if (data) {
                commit('createPay', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: createPay');
        });
    },
    async checkPayCheck({ commit }, params) {

        console.log(params);

        await api.checkPayCheck(params).then(data => {
            console.log(data);
            if (data) {
                commit('checkPayCheck', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: checkPayCheck');
        });
    },
};

const mutations = {
    createPay(state, payload) {
        state.payList = payload;
    },
    checkPayCheck(state, payload) {
        state.checkList = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}