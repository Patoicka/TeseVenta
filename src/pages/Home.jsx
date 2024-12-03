import React from 'react'

import pluma from '../assets/images/pluma.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { HiddenUser } from '../Components/HiddenUser';
import { useSelector } from 'react-redux';

export const Home = () => {

    const { products } = useSelector((state) => state.mainSlice);
    console.log(products);

    return (
        <>
            <div className='flex flex-col w-full items-center justify-center px-20'>
                <div className='flex w-full justify-center mt-10'>
                    <div className='flex w-[40%]'>
                        <p className='flex flex-col text-3xl'>
                            <span className='text-4xl font-bold uppercase'> Bienvidos a TESEGUNDA </span>
                            Aqui encontratas los mejores productos de segunda mano, a bajos precios y excelente calidad.
                        </p>
                    </div>
                    <div className='flex justify-center items-center h-full w-[60%]'>
                        <p className='text-2xl'>
                            De estudiantes para estudiantes; ¡La mano que esperabas!
                        </p>
                    </div>
                </div>

                <h1 className='text-3xl font-semibold text-center my-10'> Algunos productos </h1>
                <div className='flex w-full justify-center items-center'>
                    {products.map(item => {
                        
                    })

                    }
                </div>

                {/* <div className='flex flex-col w-full items-center justify-center'>
                    <h1 className='text-3xl font-semibold text-center my-10'> Más recientes </h1>

                    <div className='flex w-full justify-center items-center'>

                        <div className='border-4 mx-2'>
                            <img src={pluma} alt="producto 1" className='w-64 h-40' />
                            <div className='flex justify-center'>
                                <p className='px-1 font-bold'> Pluma </p>
                                <p className='px-1 font-semibold text-red-600'>$500</p>
                            </div>
                        </div>

                        <div className='border-4 mx-2'>
                            <img src={pluma} alt="producto 1" className='w-64 h-40' />
                            <div className='flex justify-center'>
                                <p className='px-1 font-bold'> Pluma </p>
                                <p className='px-1 font-semibold text-red-600'>$500</p>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>

            <HiddenUser
                show={false}
            />

        </>
    )
}
