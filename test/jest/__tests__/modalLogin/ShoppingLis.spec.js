/* eslint-disable */
/**
 * @jest-environment jsdom
 */
import Vuex from 'vuex';
import { shallowMount as shallow, mount, createLocalVue, shallowMount } from '@vue/test-utils';
import { __createMocks as createStoreMocks } from '../../../../src/store/__mocks__';
import ShoppingList from '../demo/ShoppingList.vue';
import * as All from 'quasar';
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});


// Tell Jest to use the mock
// implementation of the store.
jest.mock(`../../../../src/store/`);

const localVue = createLocalVue();
localVue.use(Quasar, { components }); // , lang: langEn
localVue.use(Vuex); // , lang: langEn

describe('ShoppingList', () => {

  let storeMocks;
  let wrapper;
  let vm;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks();
    wrapper = shallow(ShoppingList, {
      store: storeMocks.store,
      localVue,
    });
    vm = wrapper.vm;
  });

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('It should fetch items.', () => {
    expect(storeMocks.actions.fetchItems).toBeCalled();
  });

  it('It should add items to the basket when an item is clicked.', () => {
    wrapper.find('.items-not-in-basket li:first-child').trigger('click');

    expect(storeMocks.mutations.addItemToBasket).toBeCalled();
  });

  it('It should remove items from the basket when an item in the basket is clicked.', () => {
    wrapper.find('.items-in-basket li:first-child').trigger('click');

    expect(storeMocks.mutations.removeItemFromBasket).toBeCalled();
  });
  it('It should not render an empty basket.', () => {
    storeMocks = createStoreMocks({ getters: { itemsInBasket: () => [] } });
    wrapper = shallow(ShoppingList, {
      store: storeMocks.store,
      localVue,
    });

    expect(wrapper.contains('.basket')).toBe(false);
  });
});
