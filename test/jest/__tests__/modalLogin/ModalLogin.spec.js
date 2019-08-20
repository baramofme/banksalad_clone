/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import { __createMocks as createStoreMocks } from '../../../../src/store/__mocks__';
import ModalLogin from '../demo/ModalLogin.vue';
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
jest.mock(`../../../../src/store`);

describe('ModalLogin', () => {

  const localVue = createLocalVue();
  localVue.use(Quasar, { components }); // , lang: langEn

  const storeMocks = createStoreMocks();
  const wrapper = mount(ModalLogin,
    {
      store: storeMocks.store,
      localVue
    });
  const vm = wrapper.vm;

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('should close the modal when clicking cancel.', () => {
    const cancelButton = wrapper.find('.c-modalLogin__cancel');
    cancelButton.trigger('click');

    expect(storeMocks.mutations.hideModal).toBeCalled();
  });
});
