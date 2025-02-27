import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
            <>
            <a href='/' className='bg-pink-500 text-lg'>Главная </a>
            <a href='/blog' className='bg-pink-500 text-lg'>Блог </a>
            <a href='/about' className='bg-pink-500 text-lg'> О нас </a>
            </>
        )
    }
}

export default Footer