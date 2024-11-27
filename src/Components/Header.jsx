import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.jpg';

import React from 'react'

export const Header = () => {
    return (
        <header className='flex w-full justify-between bg-alabaster-400 h-[15%] items-center py-8 px-20'>
            <img src={logo} alt="logo" width={200} />
            <h1 className='w-full text-6xl text-center font-bold uppercase text-alabaster-900  '> Tesegunda </h1>
            <div className='flex justify-end'>
                <span className='text-alabaster-900 cursor-pointer px-5'> <FontAwesomeIcon icon={faShoppingCart} size='2xl' /> </span>
                <span className='text-alabaster-900 cursor-pointer px-5'> <FontAwesomeIcon icon={faUser} size='2xl' /> </span>
            </div>
        </header>
    )
};
