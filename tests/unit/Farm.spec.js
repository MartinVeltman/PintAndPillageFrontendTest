import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Farm from "@/components/tiles/Farm.vue";
import ConstructionTile from "@/components/tiles/ConstructionTile.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Farm.vue', () => {
    let store;
    let state;

    beforeEach(() => {
        state = {
            seasonsEnabled: false,
            currentSeason: 'summer',
        };

        store = new Vuex.Store({
            state,
        });
    });

    it('renders construction-tile when building is under construction', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { isUnderConstruction: true } },
            store,
            localVue,
        });
        expect(wrapper.findComponent(ConstructionTile).exists()).toBe(true);
    });

    it('returns the correct value for seasonsOn', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { isUnderConstruction: false } },
            store,
            localVue
        });
        expect(wrapper.vm.seasonsOn).toBe(false);
    });

    it('returns the correct value for currentSeason', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { isUnderConstruction: false } },
            store,
            localVue
        });
        expect(wrapper.vm.currentSeason).toBe('summer');
    });

    it('returns true if level is 10 or above', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { level: 10 } },
            store,
            localVue,
        });
        expect(wrapper.vm.isLevelTen()).toBe(true);
    });

    it('returns false if level is below 10', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { level: 9 } },
            store,
            localVue,
        });
        expect(wrapper.vm.isLevelTen()).toBe(false);
    });

    it('renders img element with correct src when building is not under construction', () => {
        const wrapper = shallowMount(Farm, {
            propsData: { buildingProperties: { isUnderConstruction: false } },
            store,
            localVue,
        });
        const img = wrapper.find('.tileImg');
        expect(img.exists()).toBe(true);
        expect(img.attributes('src')).toBe(wrapper.vm.getTileSource());
    });


});
