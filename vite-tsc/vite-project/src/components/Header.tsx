import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <div className="bg-neutral-300 py-2.5">
                <a href='/' className='text-2xl m-1 border-r-2'>Главная </a>
                <a href='/blog' className='text-2xl m-1 border-r-2 '>Блог </a>
                <a href='/about' className='text-2xl m-1 border-r-2'> О нас </a>
                <a href='/cart' className='text-2xl m-1 rounded-md'>Корзина </a>
            </div>
        )
    }
}

export default Header