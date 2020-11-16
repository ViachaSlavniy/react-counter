import React from 'react'
import { useDispatch } from 'react-redux';
import {starterAC} from '../redux/actions/actions'

function SetterBlock() {
    const dispatch = useDispatch();

    const maxInputRef = React.createRef();
    const minInputRef = React.createRef();

    const [maxInputValue, setMaxInputValue] = React.useState(10)
    const [minInputValue, setMinInputValue] = React.useState(1)

    const onMaxInputChange = () => {
        setMaxInputValue(maxInputRef.current.value);
    }
    const onMinInputChange = () => {
        setMinInputValue(minInputRef.current.value);
    }
    const setNums = (minInputValue, maxInputValue) => {
        const numsArr = [minInputValue, maxInputValue]
        dispatch(starterAC(numsArr))
    }

    return (
        <div className="counter__block">
            <div className="counter__setter-block">
                <div className="counter__inputs">
                    <div className="counter__input">
                        <label htmlFor="maxInput">max value:</label>
                        <input ref={maxInputRef} onChange={onMaxInputChange} type="number" name="maxInput" value={maxInputValue}/>
                    </div>
                    <div className="counter__input">
                        <label htmlFor="minInput">min value:</label>
                        <input ref={minInputRef} onChange={onMinInputChange} type="number" name="minInput" value={minInputValue}/>
                    </div>
                </div>
            </div>  
            <div className="counter__setter-btn">
                <button onClick={() => setNums(minInputValue, maxInputValue)} className="btn btn--set">Set</button>
            </div>
        </div>
    )
}

export default SetterBlock
