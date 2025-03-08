import React from "react";

export const Container = ({children}) =>
{
    return (
    <div className = 'bg-amber-300 md:bg-cyan-50 lg:bg-amber-100 w-[90%] h-[calc(100vh-300px)] m-auto mt-[100px] rounded-2xl shadow'>
        {children}
    </div>
    )
}