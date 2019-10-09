import api from '@/api'
import { errorLogger } from '@/util.js';

const state = {
    cdn: 1
};

// getters
const getters = {

};

const actions = {
    async testCDN({ commit }) {

        await api.testCdn().then(data => {
            if (data) {
                commit('testCdn', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: testCdn');
        });
    },
};

const mutations = {
    testCdn(state, payload) {
        state.cdn = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}