import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.jpg';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../store/slices';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { show } = useSelector((state) => state.mainSlice);

    const changeShow = () => {
        dispatch(setShow(!show));
    };

    const goHome = () => {
        navigate('/');
        dispatch(setShow(false));
    };

    useEffect(() => {
        dispatch(setShow(false));
    }, []);

    return (
        <header className='flex w-full justify-between bg-alabaster-400 h-[15%] items-center py-8 px-20'>
            <img src={logo} alt="logo" width={200} className='cursor-pointer' onClick={goHome} />
            <h1 className='w-full text-6xl text-center font-bold uppercase text-alabaster-900'> Tesegunda </h1>
            <div className='flex justify-end'>
                <span
                    className='text-alabaster-900 cursor-pointer px-5'
                >
                    <FontAwesomeIcon icon={faShoppingCart} size='2xl' onClick={() => navigate('carrito')} />
                </span>
                <span className='text-alabaster-900 cursor-pointer px-5'>
                    <FontAwesomeIcon icon={faUser} size='2xl' onClick={changeShow} />
                </span>
            </div>
        </header>
    );
};
