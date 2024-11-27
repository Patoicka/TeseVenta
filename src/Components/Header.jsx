import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Header = () => {
    return (
        <header className='flex relative bg-red-500 h-20 w-full justify-center items-center '>
            <h1 className='text-3xl font-bold uppercase text-gray-100'> Ventitas Tese </h1>
            <span className='text-gray-100 absolute right-40'> <FontAwesomeIcon icon={faShoppingCart} size='2xl' /> </span>
        </header>
    )
};
