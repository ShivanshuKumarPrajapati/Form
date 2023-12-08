import React from 'react'
import { useContext } from "react";
import { Info } from '../utils/Store';
import { useNavigate } from 'react-router-dom';

const Button = ({prevUrl, nextUrl}) => {

    const { state, dispatch } = useContext(Info);
    const activeStep = state.currStep;
    const navigate = useNavigate();
    
return (
	<div className="">
		<div className="actions">
			{activeStep > 0 && (
				<button
					onClick={() => {
						dispatch({ type: "PREV_STEP" });
						navigate(prevUrl);
					}}
					className="progress-button prev"
				>
					Prev
				</button>
			)}
			{activeStep < 3 ? (
				<button
					onClick={() => {
						dispatch({ type: "NEXT_STEP" });
						navigate(nextUrl);
					}}
					className="progress-button next"
				>
					Next
				</button>
			) : (
				<button
					onClick={() => {
						dispatch({ type: "NEXT_STEP" });
						navigate(nextUrl);
					}}
					className="progress-button next"
				>
					Submit
				</button>
			)}
		</div>
	</div>
);
}

export default Button