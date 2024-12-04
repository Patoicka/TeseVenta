import { faDollar, faDoorClosed, faDoorOpen, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const HiddenUser = () => {

    const { show, user } = useSelector((state) => state.mainSlice);

    const closeUser = () => {
        window.location.reload();
    };

    return (
        <>
            {show ?
                <>
                    {(Object.keys(user).length === 0) ?
                        <div className='flex justify-center absolute h-[30%] right-0 bg-white w-64 top-[140px] border-2'>
                            <div className='flex flex-col w-full h-full px-2'>
                                <div className='flex flex-col h-full w-full justify-center'>
                                    <div className='flex flex-col items-start justify-center my-2 w-full h-full text-black'>
                                        <p className='text-sm'> ¿Eres nuevo por aqui? </p>
                                        <Link to={'/registro'}>
                                            <h1 className='text-lg hover:font-semibold hover:text-green-900 cursor-pointer py-1'>
                                                Crear Cuenta
                                                <FontAwesomeIcon icon={faUserPlus} className='pl-2' />
                                            </h1>
                                        </Link>
                                    </div>
                                    <div className='flex flex-col items-start justify-center my-2 w-full h-full text-black'>
                                        <p className='text-sm'> ¿Ya tienes una cuenta? </p>
                                        <Link to={'/inicioSesion'}>
                                            <h1 className='text-lg hover:font-semibold  hover:text-green-900 cursor-pointer py-1'>
                                                Iniciar Sesión
                                                <FontAwesomeIcon icon={faDoorClosed} className='pl-2' />
                                            </h1>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex justify-center absolute h-[30%] right-0 bg-white w-64 top-32 border-2'>
                            <div className='flex flex-col w-full h-full justify-between px-2'>
                                <div className='flex flex-col w-full justify-start'>
                                    <div className='flex flex-col items-start my-4 w-full text-black'>
                                        <p className='text-sm'> <span className='text-xl'> Bienvenido </span> {user?.nombre} </p>
                                        <p className='text-sm'>  <span> Correo </span> {user?.correo} </p>
                                    </div>
                                    <div className='flex flex-col items-start my-4 w-full  text-black'>
                                        <p className='text-sm'> ¿Quiéres vender algo? </p>
                                        <Link to={'/addProducto'}>
                                            <h1 className='text-lg hover:font-semibold  hover:text-green-900 cursor-pointer py-1'>
                                                Empezar a vender
                                                <FontAwesomeIcon icon={faDollar} className='pl-2' />
                                            </h1>
                                        </Link>
                                    </div>

                                </div>

                                <div className='flex w-full h-full justify-start items-end mb-3  hover:text-green-900 text-black'>
                                    <div
                                        className='flex items-center hover:font-semibold cursor-pointer'
                                        onClick={closeUser}
                                    >
                                        <h1 className='text-lg '> Cerrar sesión </h1>
                                        <FontAwesomeIcon icon={faDoorOpen} className='pl-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>
                : null
            }
        </>
    )
}
