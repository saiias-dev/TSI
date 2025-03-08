import React from 'react'


export const Input = (props) => {
    const {size, color, title} = props;
    const defaultClass = 'border-1 border-b-black rounded-md shadow'
    const classes = {
        colors: {
            primary: {
                back: "bg-sky-100",
                text: "text-black",
            },
            secondary: {
                back: "bg-cyan-50",
                text: "text-black",
            },
            third: {
                back: "bg-green-50",
                text: "text-black",
            },
            fourth: {
                back: "bg-lime-50",
                text: "text-black",
            },
        },
        sizes: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg ",
        },
    };

    return (
        <input className={ defaultClass + classes.sizes[size] + " " + classes.colors[color].back} onChange={title}>
        </input>
    );
};


export default Text