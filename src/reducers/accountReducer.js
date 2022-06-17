import {DEPOSIT, WITHDRAW} from "../actions/accountActions";
import {PUT_QUOTE} from "../actions/quoteAction";

function accountReducer(state, action)
{
    switch (action.type)
    {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const temp = state.balance - action.payload
            return {...state, balance: temp < 0 ? state.balance : temp}
        case PUT_QUOTE:
            return {...state, quote: action.payload}
        default:
            return state
    }
}

export default accountReducer