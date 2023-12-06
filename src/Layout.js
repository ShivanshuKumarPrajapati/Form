import React from 'react'
import Wizard from './Wizard'
import Button from './Component/Button'

export const Layout = ({ children }) => {
    console.log(children)
    return (
        <div className=" w-screen h-screen border-red-500 flex flex-col justify-between  flex-wrap text-center ">
        <Wizard />
        {children}
        <Button />
        </div>
    );
}
