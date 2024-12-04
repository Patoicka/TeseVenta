import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {

    const emailSupport = () => {
        window.location.href = "mailto:soporteTesegunda@gmail.com";
    };

    return (
        <div className='flex w-full h-20 bg-alabaster-400 justify-center py-4'>
            <div className='flex flex-col w-full justify-center items-center'>
                <h1
                    className='text-xl font-bold cursor-pointer'
                    onClick={emailSupport}
                >
                    Soporte <span> <FontAwesomeIcon icon={faHeadset} /> </span>
                </h1>
                <p> En caso de inconvenientes comunicate con nosotros. </p>
            </div>
        </div>
    )
}
