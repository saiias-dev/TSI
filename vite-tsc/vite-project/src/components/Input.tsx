import React from 'react'

type InputProps = {
    size: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary' | 'third' | 'fourth';
    title: string;
    onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {size, color, title, onChange} = props;
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
        <input 
            className={ defaultClass + classes.sizes[size] + " " + classes.colors[color].back} 
            onChange={(e) => onChange(e.target.value)}
            value={title}
        />
    );
};

export default Input;