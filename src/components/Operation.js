import React, {useState} from 'react';
import {depositAction, withdrawAction} from "../actions/accountActions";
import {useDispatch} from "react-redux";
import {putQuoteAction} from "../actions/quoteAction";


const Operation = () => {
    const [sum, setSum] = useState(0)
    const dispatch = useDispatch()
    const handleClickQuote = () =>
    {
        fetch('https://api.kanye.rest')
            .then(response =>
            {
                if(response.ok)
                    return response.json()
                else
                    throw new Error('' + response.status)
            })
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(e => console.log(e.message))
    }

    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <button onClick={() => dispatch(withdrawAction(sum))}
                        className={'btn btn-primary btn-lg'}>Withdraw
                </button>
                <input type="number" min={0} onChange={event => setSum(+event.target.value)}
                       className={'form-control-lg text-center'}/>
                <button onClick={() => dispatch(depositAction(sum))}
                        className={'btn btn-primary btn-lg'}>Deposit
                </button>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-info btn-lg'}
                onClick={handleClickQuote}
                >Get quote</button>
            </div>
        </div>

    );
};

export default Operation;