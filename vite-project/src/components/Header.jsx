import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <>
            <a href='/' className='text-lg'>Главная </a>
            <a href='/blog' className=' text-lg'>Блог </a>
            <a href='/about' className='text-lg'> О нас </a>
            </>
        )
    }
}

export default Header