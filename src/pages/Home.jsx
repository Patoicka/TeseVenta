import React, { useEffect, useState } from 'react'

import pluma from '../assets/images/pluma.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons';
import { HiddenUser } from '../Components/HiddenUser';
import { useDispatch, useSelector } from 'react-redux';
import { setCar } from '../store/slices';

export const Home = () => {

    const { products } = useSelector((state) => state.mainSlice);

    console.log(products);

    const dispatch = useDispatch();

    const [addWarn, setAddWarn] = useState(false);

    const addCar = (product) => {
        dispatch(setCar(product));
        setAddWarn(true);

        setTimeout(() => {
            setAddWarn(false);
        }, 1000);
    };

    return (
        <>
            <div className='flex flex-col bg-white w-full items-center justify-center'>

                {addWarn &&
                    <div className='absolute bg-lime-100 h-24 p-4 rounded-lg'>
                        <p className='flex flex-col h-full justify-center text-lg italic font-semibold'> Producto agregado a carrito  <FontAwesomeIcon icon={faCheck} /></p>
                    </div>
                }

                <div className='flex w-full justify-center mt-10 border-b-2 border-black pb-8'>
                    <div className='flex w-full justify-center px-10'>
                        <p className='flex flex-col text-center text-2xl italic'>
                            <span className='text-4xl font-bold not-italic'> Bienvenidos a TESEGUNDA </span>
                            Aqui encontratas los mejores productos de segunda mano, a bajos precios y excelente calidad.
                        </p>
                    </div>
                </div>

                <h1 className='text-3xl font-semibold text-center my-10'> Algunos productos </h1>
                <div className="flex w-full justify-center items-center flex-wrap gap-6 pb-10">
                    {products && products.length > 0 ? (
                        products.map((product, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center w-[250px] border border-gray-200 rounded-lg shadow-md p-4"
                                >
                                    <img
                                        src={product.imgUrl}
                                        alt={product.name}
                                        className="w-full h-[280px] object-contain rounded-md mb-4"
                                    />
                                    <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-4">Precio: ${product.price}</p>
                                    <button
                                        className="flex items-center justify-center bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-lime-500"
                                        onClick={() => addCar(product)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCartShopping}
                                            className="mr-2"
                                        />
                                        Añadir al carrito
                                    </button>
                                </div>
                            )
                        })
                    ) : (
                        <p className="text-gray-500 text-lg">No hay productos disponibles.</p>
                    )}
                </div>

            </div>

            <HiddenUser
                show={false}
            />

        </>
    )
}
