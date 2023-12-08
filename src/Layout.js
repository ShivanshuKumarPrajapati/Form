import React from 'react'
import Wizard from './Wizard'


export const Layout = ({ children }) => {
    return (
			<div className="top w-screen border-red-500 text-center min-h-screen">
				<Wizard />
				{children}
			</div>
		);
}
