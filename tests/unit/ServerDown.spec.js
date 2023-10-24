import { mount } from '@vue/test-utils';
import ServerDown from '@/components/ServerDown.vue';
import VueRouter from 'vue-router';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('ServerDown.vue', () => {
    // Test 1: Check if the component renders the correct message when the server is down
    it('displays the correct error message', () => {
        const wrapper = mount(ServerDown);
        expect(wrapper.find('h1').text()).toBe('Something went wrong!');
        expect(wrapper.find('h2').text()).toContain('It appears something technical is wrong here.');
    });

    // Test 2: Check if the image is rendered
    it('renders the image', () => {
        const wrapper = mount(ServerDown);
        expect(wrapper.find('img').attributes('src')).toBe('../assets/elwrick_exploded.png');
    });

    // Test 3: Check if the "Back to login" button exists and works
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
