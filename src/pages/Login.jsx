import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Login = () => {

    const [pass, setPass] = useState(false);

    return (
        <div className='flex w-full h-full bg-white justify-center items-center'>
            <form className='flex flex-col items-center w-[25%] bg-alabaster-200 border-4 border-black p-4 py-10'>

                <h1 className='text-xl uppercase font-bold'>
                    Inicio de sesión
                </h1>

                <div className='flex w-full justify-center relative mt-10 px-6 bg-alabaster-200'>
                    <label className='flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold'>
                        Correo <FontAwesomeIcon icon={faUser} className='pl-2' />
                    </label>
                    <input type='text' className='w-full border-2 border-green-700 bg-alabaster-200 p-3' />
                </div>

                <div className='flex w-full justify-center relative mt-10 px-6 bg-alabaster-200'>
                    <label className='flex items-center absolute left-10 -top-4 ml-1 bg-alabaster-200 px-1 font-semibold'>
                        Contraseña <FontAwesomeIcon icon={faLock} className='pl-2' />
                    </label>
                    <input type={!pass ? 'password' : 'text'} className='w-full border-2 border-green-700 bg-alabaster-200 p-3 pr-12' />
                    <span>
                        <FontAwesomeIcon onClick={() => setPass(!pass)} icon={!pass ? faEye : faEyeSlash} className='absolute right-10 top-5 cursor-pointer' />
                    </span>
                </div>

                <button className='mt-10 text-green-800 rounded-lg border-2 border-green-700 hover:bg-green-700 hover:border-black hover:text-white w-1/2 p-3'>
                    <h1 className='text-lg font-semibold'>  Iniciar </h1>
                </button>

            </form>
        </div>
    )
}
