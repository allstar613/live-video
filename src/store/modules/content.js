import api from '@/api'
import { errorLogger } from '@/util.js';

const state = {
    playData: {

    },
    recommendVideoList: {

    }
};
// getters
const getters = {

};

const actions = {
    async getPlayContent({ commit }, params) {
        //    console.log(params)
        await api.getPlayContent(params).then(data => {
            console.log(data);
            if (data) {
                commit('getPlayContent', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: getPlayContent');
        });
    },
    async getRecommendVideoList({ commit }, params) {

        await api.getRecommendVideoList(params).then(data => {
            if (data) {
                commit('getRecommendVideoList', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: getRecommendVideoList');
        });
    },
};

const mutations = {
    getPlayContent(state, payload) {
        state.playData = payload;
    },
    getRecommendVideoList(state, payload) {
        state.recommendVideoList = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}