import Vuex from 'vuex'

export function someMutation (/* state */) {

}
// 모달 보여줄 때 컴포넌트가 동적으로 결정될 거기 때문에 인자로 받아서 넣어줌
export function showModal(state:any, componentName:string) {
  state.modalVisible = true;
  state.modalComponent = componentName;
}
export function hideModal(state:any) {
  state.modalVisible = false;
}
