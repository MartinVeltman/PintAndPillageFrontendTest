import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import axios from 'axios';
import authentication from '@/store/modules/authentication';  // Adjust this import based on your project structure

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock('axios');

describe('authentication.js', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                authentication: {
                    ...authentication,
                    state: { ...authentication.state },
                },
            },
        });
    });


    it('should have correct initial state', () => {
        expect(store.state.authentication.status).toBeNull();
        expect(store.state.authentication.token).toBeNull();
        expect(store.state.authentication.user).toEqual({});
    });

    // Testing Getters
    it('should return correct isLoggedIn', () => {
        expect(store.getters.isLoggedIn).toBe(false);
    });

    it('should return correct authStatus', () => {
        expect(store.getters.authStatus).toBeNull();
    });

    // Testing Mutations
    it('should set status to loading when auth_request is committed', () => {
        store.commit('auth_request');
        expect(store.state.authentication.status).toBe('loading');
    });


    it('should commit auth_request and auth_success when login is successful', async () => {
        axios.mockResolvedValue({ data: { token: '123', user: {} } });
        await store.dispatch('login', {});
        expect(store.state.authentication.status).toBe('success');
        expect(store.state.authentication.token).toBe('123');
    });
});
