import { mount } from '@vue/test-utils';
import ServerDown from '@/components/ServerDown.vue';
import VueRouter from 'vue-router';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('ServerDown.vue', () => {
    it('displays the correct error message', () => {
        const wrapper = mount(ServerDown);
        expect(wrapper.find('h1').text()).toBe('Something went wrong!');
        expect(wrapper.find('h2').text()).toContain('It appears something technical is wrong here.');
    });

    it('renders the image', () => {
        const wrapper = mount(ServerDown);
        expect(wrapper.find('img').attributes('src')).toBe('../assets/elwrick_exploded.png');
    });

    it('has a Back to login button that navigates to login', async () => {
        const wrapper = mount(ServerDown, {
            localVue,
            router
        });
        const button = wrapper.find('.baseButton');
        expect(button.text()).toBe('Back to login');
        await button.trigger('click');
        expect(wrapper.vm.$route.path).toBe('/login');
    });
});
