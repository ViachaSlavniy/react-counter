import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {starterAC, reseterAC, incrementAC, changeValuesAC} from './redux/actions/actions'
import OutputerBlock from './components/OutputerBlock';
import SetterBlock from './components/SetterBlock';

const App = () => {
    const dispatch = useDispatch();

    const maxInputRef = React.createRef();
    const minInputRef = React.createRef();

    const [maxInputValue, setMaxInputValue] = React.useState(10)
    const [minInputValue, setMinInputValue] = React.useState(1)

    const onMaxInputChange = () => {
        setMaxInputValue(Number(maxInputRef.current.value));
        dispatch(changeValuesAC());
    }
    const onMinInputChange = () => {
        setMinInputValue(Number(minInputRef.current.value));
        dispatch(changeValuesAC());
    }
    const setNums = (minInputValue, maxInputValue) => {
        const numsArr = [minInputValue, maxInputValue]
        dispatch(starterAC(numsArr))
    }

      // Outputer block

    const {numsLoaded, minNum, maxNum, resetActivate} = useSelector(({countReducer}) => countReducer);

    const onStartBtnClick = (minNum) => {
        dispatch(incrementAC(minNum + 1))
    }

    const resetCounter = (minInputValue) => {
        dispatch(reseterAC(minInputValue));
    }
  
  return (
      <div className="wrap">
        <div className="counter__block">
            <div className="counter__setter-block">
                <div className="counter__inputs">
                    <div className="counter__input">
                        <label htmlFor="maxInput">max value:</label>
                        <input className={ 
                  minInputValue >= maxInputValue 
                  || minInputValue < 0 
                  || maxInputValue < 0
                  ? 'error' : ''} ref={maxInputRef} onChange={onMaxInputChange} type="number" name="maxInput" value={maxInputValue}/>
                    </div>
                    <div className="counter__input">
                        <label htmlFor="minInput">min value:</label>
                        <input className={ 
                  minInputValue >= maxInputValue 
                  || minInputValue < 0 
                  || maxInputValue < 0
                  ? 'error' : ''} ref={minInputRef} onChange={onMinInputChange} type="number" name="minInput" value={minInputValue}/>
                    </div>
                </div>
            </div>  
            <div className="counter__setter-btn">
                <button onClick={() => setNums(minInputValue, maxInputValue)} 
                className="btn btn--set"
                disabled={numsLoaded 
                || minInputValue >= maxInputValue 
                || minInputValue < 0 
                || maxInputValue < 0
                ? true : false}>Set</button>
            </div>
        </div>
        <div className="counter__block">
            <div className="counter__setter-block">
            <span className={`output ${minNum === maxNum && numsLoaded ? 'equals' : ''}`}>
                {minInputValue >= maxInputValue 
                  || minInputValue < 0 
                  || maxInputValue < 0
                  ? <b className='error-text'>Incorrect values</b> 
                  : numsLoaded 
                  ? minNum 
                  : 'Enter values and press "Set"'}
            </span>
            </div>  
            <div className="counter__setter-btn">
                <button onClick={() => onStartBtnClick(minNum)} 
                  className="btn btn--set" 
                  disabled={minNum === maxNum || !numsLoaded ? true : false}>Start</button>
                <button onClick={() => resetCounter(minInputValue)} 
                  className="btn btn--set" 
                  disabled={resetActivate}>Reset</button>
            </div>
        </div>
    </div>
  )
}
export default App;
