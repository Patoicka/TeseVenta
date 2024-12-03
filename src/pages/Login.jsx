import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../store/slices';

export const Login = () => {
    const { register, handleSubmit, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.mainSlice);

    const [pass, setPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data) => {
        console.log(data.correo, data.password);
        if ((data.correo === user.correo) && (data.password === user.password)) {
            dispatch(setAuth(true));
            setErrorMessage('');
            navigate('/');
        } else setErrorMessage('Correo o contraseña incorrectos');
    };

    return (
        <div className='flex w-full h-full bg-white justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-[25%] bg-alabaster-200 border-4 border-black p-4 py-10'>
                <h1 className='text-xl uppercase font-bold'>
                    Inicio de sesión
                </h1>

                <div className='flex w-full justify-center relative mt-10 px-6 bg-alabaster-200'>
                    <label className='flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold'>
                        Correo <FontAwesomeIcon icon={faUser} className='pl-2' />
                    </label>
                    <input
                        {...register('correo', { required: true })}
                        type='text'
                        className='w-full border-2 border-green-700 bg-alabaster-200 p-3'
                    />
                </div>

                <div className='flex w-full justify-center relative mt-10 px-6 bg-alabaster-200'>
                    <label className='flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold'>
                        Contraseña <FontAwesomeIcon icon={faLock} className='pl-2' />
                    </label>
                    <input
                        {...register('password', { required: true })}
                        type={!pass ? 'password' : 'text'}
                        className='w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-12'
                    />
                    <span>
                        <FontAwesomeIcon
                            onClick={() => setPass(!pass)}
                            icon={!pass ? faEye : faEyeSlash}
                            className='absolute right-10 top-5 cursor-pointer'
                        />
                    </span>
                </div>

                {errorMessage && (
                    <span className="text-red-500 font-bold my-4">{errorMessage}</span>
                )}

                <button
                    type="submit"
                    className={`text-green-800 rounded-lg border-2 border-green-700 hover:bg-green-700 hover:border-black hover:text-white w-1/2 p-3 ${errorMessage.length ? 'mt-0' : 'mt-8'}`}>
                    <h1 className='text-lg font-semibold'>Iniciar sesión</h1>
                </button>
            </form>
        </div>
    );
};
