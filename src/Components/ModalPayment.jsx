import React, { useState } from 'react'
import { Modal } from './Modal';

export const ModalPayment = ({ title, show, onCancel }) => {

    const [loader, setLoader] = useState(false);
    const handlePay = () => {
        setLoader(true);

        setTimeout(() => {
            onCancel();
            setLoader(false);
        }, 1000);
    };

    return (
        <Modal
            title={title}
            show={show}
            onCancel={onCancel}
        >
            {loader ?
                <div className="flex items-center justify-center mt-52">
                    <div className="relative w-16 h-16">
                        <span className="absolute -bottom-14 -left-0 text-prussianBlue-700 font-semibold mb-4"> Pagando... </span>
                        <div className="absolute w-16 h-16 border-t-4 border-l-4  border-prussianBlue-500 rounded-full animate-spin"></div>
                        <div className="absolute w-16 h-16 border-t-4 border-r-4  border-prussianBlue-500 rounded-full animate-spin-reverse"></div>
                    </div>
                </div>
                :
                <div className='flex flex-col w-full items-center pt-6'>
                    <div className='flex flex-col w-1/2'>
                        <label className='pl-1'> Nombre completo </label>
                        <input type="text" className='border-2 border-black p-2 rounded-lg' />
                    </div>
                    <div className='flex flex-col w-1/2 py-3'>
                        <label className='pl-1'> Correo </label>
                        <input type="text" className='border-2 border-black p-2 rounded-lg' />
                    </div>
                    <div className='flex flex-col w-1/2 py-3'>
                        <label className='pl-1'> Número de tarjeta </label>
                        <input type="text" className='border-2 border-black p-2 rounded-lg' />
                    </div>
                    <div className='flex flex-col w-1/2 py-3'>
                        <label className='pl-1'> Caducidad </label>
                        <input type="text" className='border-2 border-black p-2 rounded-lg' />
                    </div>
                    <div className='flex flex-col w-1/2 py-3'>
                        <label className='pl-1'> CCV </label>
                        <input type="text" className='border-2 border-black p-2 rounded-lg' />
                    </div>

                    <button
                        className='bg-lime-100 w-1/6 p-3 rounded-lg border border-black mt-4'
                        onClick={handlePay}
                    >
                        Pagar
                    </button>
                </div>
            }

        </Modal>
    );
}
