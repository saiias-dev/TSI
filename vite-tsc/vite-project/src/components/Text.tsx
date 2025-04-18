import React from 'react'

type TextProps = {
    size: 'small' | 'medium' | 'large';
    color: 'primary';
    title: string;
}

export const Text = (props: TextProps) => {
    const {size, color, title} = props;
    const classes = {
        colors: {
            primary: {
                back: "bg-amber-300",
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
        <div className={ classes.sizes[size] + " " + classes.colors[color].back}>
            {title}
        </div>
    );
};

export default Text;