import React, { useState } from 'react'
import { Modal } from './Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCar } from '../store/slices';

export const ModalPayment = ({ title, show, onCancel }) => {

    const [loader, setLoader] = useState(false);
    const [payment, setPayment] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePay = () => {
        setLoader(true);

        setTimeout(() => {
            dispatch(clearCar());
            setLoader(false);
            setPayment(true);
        }, 1000);
    };

    const backHome = () => {
        setPayment(false);
        onCancel();
        navigate('/');
    }

    return (
        <Modal
            title={title}
            show={show}
            onCancel={onCancel}
        >
            {payment ?
                <>
                    <div className='flex w-full h-full'>
                        <div className='flex flex-col w-full h-full justify-center items-center mt-32'>
                            <h1 className='text-2xl mt-10 font-semibold'> Pago Acreditado </h1>
                            <p className='mt-3 px-10 text-center'> Te llegara un correo con los datos de tu compra. Gracias por comprar con nosotros. </p>
                            <button
                                className='bg-lime-600 mt-6 text-white font-bold p-4 rounded-lg border-2 hover:border-lime-600 hover:bg-white hover:text-lime-600'
                                onClick={backHome}
                            >
                                Regresar
                            </button>
                        </div>
                    </div>
                </>

                :
                <>
                    {loader ?
                        <div className="flex items-center justify-center mt-52">
                            <div className="relative w-16 h-16">
                                <span className="absolute -bottom-14 -left-0.5 text-prussianBlue-700 font-semibold mb-4"> Pagando... </span>
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
                                <label className='pl-1'> Vencimiento </label>
                                <input type="text" className='border-2 border-black p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col w-1/2 py-3'>
                                <label className='pl-1'> CCV </label>
                                <input type="text" className='border-2 border-black p-2 rounded-lg' />
                            </div>

                            <button
                                className='bg-lime-600 text-white font-semibold w-1/6 p-3 rounded-lg border hover:bg-white hover:border-lime-600 hover:text-lime-600 mt-4'
                                onClick={handlePay}
                            >
                                Pagar
                            </button>
                        </div>
                    }
                </>
            }

        </Modal>
    );
}
