import { faCheck, faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices';

export const Register = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const { user } = useSelector((state) => state.mainSlice);
    console.log(user);

    const [pass, setPass] = useState(false);

    const submitData = (data) => {
        dispatch(setUser(data));
    };

    return (
        <div className="flex w-full h-full bg-white justify-center items-center">
            <form
                onSubmit={handleSubmit(submitData)}
                className="flex flex-col items-center justify-center w-[25%] bg-alabaster-200 border-4 border-black p-4 py-10"
            >
                <h1 className="text-xl uppercase font-bold">Bienvenido al registro</h1>

                <div className="flex w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Nombre/s <FontAwesomeIcon icon={faUser} className="pl-2" />
                    </label>
                    <input
                        {...register('nombre')} // Registrar el input
                        type="text"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3"
                    />
                </div>

                <div className="flex w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Apellidos <FontAwesomeIcon icon={faUser} className="pl-2" />
                    </label>
                    <input
                        {...register('apellidos')} // Registrar el input
                        type="text"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3"
                    />
                </div>

                <div className="flex w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Correo <FontAwesomeIcon icon={faEnvelope} className="pl-2" />
                    </label>
                    <input
                        {...register('correo')} // Registrar el input
                        type="email"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-10"
                    />
                </div>

                <div className="flex w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Contraseña <FontAwesomeIcon icon={faLock} className="pl-2" />
                    </label>
                    <input
                        {...register('password')} // Registrar el input
                        type={!pass ? 'password' : 'text'}
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-12"
                    />
                    <span>
                        <FontAwesomeIcon
                            onClick={() => setPass(!pass)}
                            icon={!pass ? faEye : faEyeSlash}
                            className="absolute right-10 top-5 cursor-pointer"
                        />
                    </span>
                </div>

                <button
                    type="submit" // Importante para enviar el formulario
                    className="mt-10 text-green-800 rounded-lg border-2 border-green-700 hover:bg-green-700 hover:border-black hover:text-white w-1/2 p-3"
                >
                    <h1 className="text-lg font-semibold">Crear usuario</h1>
                </button>
            </form>
        </div>
    );
};
