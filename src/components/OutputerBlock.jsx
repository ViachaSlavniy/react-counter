import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incrementAC, reseterAC} from '../redux/actions/actions'

function OutputerBlock() {
    const dispatch = useDispatch();
    const {numsLoaded, minNum, maxNum} = useSelector(({countReducer}) => countReducer);
    console.log(minNum);

    const onStartBtnClick = (minNum) => {
        dispatch(incrementAC(minNum + 1))
    }

    const resetCounter = () => {
        dispatch(reseterAC());
    }

    return (
        <div className="counter__block">
            <div className="counter__setter-block">
            <span className={`output ${minNum === maxNum ? 'equals' : ''}`}>{minNum}</span>
            </div>  
            <div className="counter__setter-btn">
                <button onClick={() => onStartBtnClick(minNum)} className="btn btn--set" disabled={minNum === maxNum ? true : false}>Start</button>
                <button onClick={resetCounter} className="btn btn--set" disabled={minNum}>Reset</button>
            </div>
        </div>
    )
}

export default OutputerBlock
