import React from 'react'
import { Layout } from '../Layout';
import Button from './Button';

const Initial = () => {
    return (
			<Layout>
				<div className="text-center relative">
					<div className="mt-16">
						<p className="text-black text-7xl">Welcome!!</p>
						<p className="text-3xl mt-5">
							Click on next button to view assignment
						</p>
					</div>
					<div className=" btn">
						<Button nextUrl="/party" />
					</div>
				</div>
			</Layout>
		);
}

export default Initial