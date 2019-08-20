import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* =========
* jest.fn() Mock 함수를 사용하면 함수의 실제 구현을 지우고
* 함수에 대한 호출 (및 해당 호출에 전달 된 매개 변수)을 캡처하고
* new로 인스턴스화 할 때 생성자 함수의 인스턴스를 캡처하고
* 반환 값의 구성 테스트 시간을 허용하여 코드 간의 링크를 쉽게 테스트 할 수 있습니다.
* https://jestjs.io/docs/en/mock-functions
* =========*/

export const getters = {
  // 실제 스토어 접근이 아닌, jest.fn() 으로 항상 동일한 모의 데이터 반환하는 함수 생성
  itemsInBasket: jest.fn().mockReturnValue([
    {
      id: 1,
      name: 'Foo',
      status: 1
    },
    {
      id: 2,
      name: 'Bar',
      status: 1
    }
  ]),
  itemsNotInBasket: jest.fn().mockReturnValue([
    {
      id: 1,
      name: 'Foo',
      status: 0
    },
    {
      id: 2,
      name: 'Bar',
      status: 0
    }
  ])
};

export const actions = {
  fetchItems: jest.fn()
};

// eslint-disable-next-line no-underscore-dangle
export function __createMockMutations(customMutations) {
  return Object.assign({
    addItems: jest.fn(),
    addItemToBasket: jest.fn(),
    removeItemFromBasket: jest.fn(),
    showModal: jest.fn(),
    hideModal: jest.fn()
  }, customMutations);
}

export const mutations = __createMockMutations();

// eslint-disable-next-line no-underscore-dangle
export function __createMockState(customState) {
  return Object.assign({
    items: [
      {
        id: 1,
        name: 'Foo',
        status: 1
      },
      {
        id: 1,
        name: 'Bar',
        status: 1
      }
    ],
    modalVisible: false,
    modalComponent: null
  }, customState);
}

export const state = __createMockState();

// eslint-disable-next-line no-underscore-dangle
// 목 객체를 만든다.
export function __createMocks(custom = {
  getters: getters,
  mutations: {},
  actions: actions,
  state: {}
}) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = __createMockMutations(custom.mutations);
  const mockActions = Object.assign({}, getters, custom.actions);
  const mockState = __createMockState(custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState
    })
  };
}

export const { store } = __createMocks();
