import React from 'react'
import { useContext } from "react";
import { Info } from '../utils/Store';


const Button = () => {

    const { state, dispatch } = useContext(Info);
    const activeStep = state.currStep;
    
return (
    <div className='my-8'>
    <div className="actions">
    {activeStep > 0 && (
        <button
        onClick={ () => dispatch({ type: "PREV_STEP" }) }
        className="progress-button prev"
        >
        Prev
        </button>
    )}
    {activeStep < 3 && (
        <button
            onClick={ () => dispatch({ type: "NEXT_STEP" }) }
        className="progress-button next"
        >
        Next
        </button>
    )}
    </div>
</div>
);
}

export default Button