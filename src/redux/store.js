import { createStore } from "redux";
import rootReducer from "./reducers/index";
// import { loadState, saveState } from "./localStorage";
const defaultState = { }

// const state = loadState(defaultState)

const store = createStore(rootReducer, {});
// const store = createStore(rootReducer, defaultState);
// store.subscribe( ()=>{saveState({
// 	localeReducer: store.getState().localeReducer
// })}
// )

export default store;

