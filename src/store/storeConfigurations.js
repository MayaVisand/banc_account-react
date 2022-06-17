import Store from "../redux/Store";
import accountReducer from "../reducers/accountReducer";
import createStore from "../redux/Store";


const initialState = {balance: 0, quote: 'some quote'}
const store = createStore(accountReducer, initialState)

export default store