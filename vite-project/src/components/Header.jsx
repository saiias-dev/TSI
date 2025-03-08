import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <div class="bg-neutral-300 py-2.5">
                <a href='/' className='text-2xl m-1 border-r-3 rounded-md'>Главная </a>
                <a href='/blog' className='text-2xl m-1 border-r-3 rounded-md'>Блог </a>
                <a href='/about' className='text-2xl m-1 rounded-md'> О нас </a>
            </div>
        )
    }
}

export default Header