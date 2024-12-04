import { faEnvelope, faEye, faEyeSlash, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../store/slices';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [pass, setPass] = useState(false);

    const submitData = (data) => {
        if (Object.keys(data).length) {
            dispatch(setUser(data));
            navigate('/inicioSesion')
        };
    };

    return (
        <div className="flex w-full h-full bg-white justify-center items-center">
            <form
                onSubmit={handleSubmit(submitData)}
                className="flex flex-col items-center justify-center w-[25%] bg-alabaster-200 border-4 border-black p-4 py-10"
            >
                <h1 className="text-xl uppercase font-bold">Bienvenido al registro</h1>

                <div className="flex flex-col w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Nombre/s <FontAwesomeIcon icon={faUser} className="pl-2" />
                    </label>
                    <input
                        {...register('nombre', {
                            required: 'El nombre es obligatorio',
                            pattern: {
                                value: /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/,
                                message: 'El nombre no puede tener números ni signos especiales'
                            }
                        })}
                        type="text"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3"
                    />
                    {errors.nombre && <span className="text-red-500 font-bold  text-sm">{errors.nombre.message}</span>}
                </div>

                <div className="flex flex-col w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Apellidos <FontAwesomeIcon icon={faUser} className="pl-2" />
                    </label>
                    <input
                        {...register('apellidos', {
                            required: 'El apellido es obligatorio',
                            pattern: {
                                value: /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/,
                                message: 'El apellido no puede tener números ni signos especiales'
                            }
                        })}
                        type="text"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3"
                    />
                    {errors.apellidos && <span className="text-red-500 font-bold text-sm">{errors.apellidos.message}</span>}
                </div>

                <div className="flex flex-col w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Correo <FontAwesomeIcon icon={faEnvelope} className="pl-2" />
                    </label>
                    <input
                        {...register('correo', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/,
                                message: 'Correo inválido, debe ser gmail, hotmail o outlook y terminar en .com'
                            }
                        })}
                        type="email"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-10"
                    />
                    {errors.correo && <span className="text-red-500 font-bold  text-sm">{errors.correo.message}</span>}
                </div>

                <div className="flex flex-col w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Télefono <FontAwesomeIcon icon={faPhone} className="pl-2" />
                    </label>
                    <input
                        {...register('telefono', {
                            required: 'El telefono es obligatorio',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Ingresa un télefono valido.'
                            }
                        })}
                        type="telefono"
                        className="w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-10"
                    />
                    {errors.telefono && <span className="text-red-500 font-bold  text-sm">{errors.telefono.message}</span>}
                </div>

                <div className="flex flex-col w-full justify-center relative mt-10 px-6 bg-alabaster-200">
                    <label className="flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold">
                        Contraseña <FontAwesomeIcon icon={faLock} className="pl-2" />
                    </label>
                    <input
                        {...register('password', {
                            required: 'La contraseña es obligatoria',
                            minLength: {
                                value: 6,
                                message: 'La contraseña debe tener al menos 6 caracteres'
                            }
                        })}
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
                    {errors.password && <span className="text-red-500 font-bold  text-sm">{errors.password.message}</span>}
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
