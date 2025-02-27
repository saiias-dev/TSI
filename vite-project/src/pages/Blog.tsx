import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {

    render(): ReactNode {
        return (
            <div>Блог</div>
        )
    }
}

export default Blog
