import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <>
            <a href='/' className='bg-green-500 text-lg'>Главная </a>
            <a href='/blog' className='bg-green-500 text-lg'>Блог </a>
            <a href='/about' className='bg-green-500 text-lg'> О нас </a>
            </>
        )
    }
}

export default Header