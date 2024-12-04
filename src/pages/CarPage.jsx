import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalPayment } from '../Components/ModalPayment';

export const CarPage = () => {

    const { car } = useSelector((state) => state.mainSlice);
    console.log(car);

    const [seeModal, setSeeModal] = useState(false);

    const totalProducts = car ? car?.length : 0;
    const totalPrice = car ? car?.reduce((sum, product) => sum + product?.price, 0) : 0;

    return (
        <>
            <div className='flex flex-col w-full h-full bg-white p-10 items-center'>
                <h1 className='text-3xl font-bold pb-10'>TESE CARRITO</h1>

                <div className='flex w-full'>
                    <div className='w-2/3'>
                        {car ? (
                            car.map((product, index) => {
                                return (
                                    <div key={index} className='flex w-full justify-between p-4 mb-4 bg-gray-200'>
                                        <div className='flex w-2/3 items-center'>
                                            <div className='flex flex-col w-full'>
                                                <h1 className='text-lg'>
                                                    <span className='text-2xl font-semibold'>Producto:</span> {product?.name}
                                                </h1>
                                                <h1 className='text-lg'>
                                                    <span className='text-xl font-semibold'>Costo:</span> ${product?.price}
                                                </h1>
                                                <p>
                                                    <span className='text-xl font-semibold'>Descripción:</span> {product?.description}
                                                </p>
                                                <p>
                                                    <span className='text-xl font-semibold'>Nombre de vendedor:</span> {product?.vendedor}
                                                </p>
                                                <p>
                                                    <span className='text-xl font-semibold'>Télefono de contacto:</span> {product?.telefono}
                                                </p>
                                            </div>
                                        </div>
                                        <img src={product?.imgUrl} alt={product.name} width={100} className='object-contain' />
                                    </div>
                                )
                            })
                        ) : (
                            <div>Sin productos</div>
                        )}
                    </div>

                    <div className='w-1/3 pl-10'>
                        <div className='flex flex-col w-full bg-gray-100 p-6 mb-4'>
                            <h2 className='text-xl font-semibold mb-4'>Resumen de Compra</h2>
                            <div className='flex justify-between mb-2'>
                                <span className='text-lg'>Número de productos:</span>
                                <span className='text-lg'>{totalProducts}</span>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <span className='text-lg'>Total:</span>
                                <span className='text-lg'>${totalPrice}</span>
                            </div>

                            <div className='flex justify-center mt-4'>
                                <button
                                    className='bg-alabaster-800 text-white font-bold w-1/3 rounded-lg p-2'
                                    onClick={() => setSeeModal(true)}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalPayment
                title={'Proceder a Pago'}
                show={seeModal}
                onCancel={() => setSeeModal(false)}
            />

        </>
    )
}
