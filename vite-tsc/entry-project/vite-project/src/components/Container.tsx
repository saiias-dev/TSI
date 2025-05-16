import React from "react";
import type { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    return (
    <div className = 'bg-slate-100 md:bg-neutral-50 lg:bg-zinc-200 w-[90%] h-[calc(100vh-250px)] m-auto mt-[30px] rounded-2xl shadow'>
        {children}
    </div>
    )
}

export default Container;