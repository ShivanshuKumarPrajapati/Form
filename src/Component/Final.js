import React from 'react'
import { useNavigate } from 'react-router-dom'

const Final = () => {
    const navigate = useNavigate();
    
    return (
			<div className="h-screen w-screen flex flex-col justify-around items-center text-center">
				<div>
					<p className="text-black text-7xl">Hurrey!!</p>
					<p className="text-3xl mt-5">Your form submitted successfully</p>
				</div>
				<div>
					<button
						className="progress-button next"
						onClick={() => navigate("/additional")}
					>
						Home page
					</button>
				</div>
			</div>
		);
}

export default Final