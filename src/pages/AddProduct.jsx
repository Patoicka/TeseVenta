import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setProducts } from '../store/slices';

export const AddProduct = () => {
    const { user } = useSelector((state) => state.mainSlice);

    console.log(user);

    const dispatch = useDispatch();

    const [check, setCheck] = useState(false);
    const [file, setFile] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setFile(imageUrl);
        };
    };

    const onSubmit = (data) => {
        const productData = { ...data, imgUrl: file, vendedor: user?.nombre, telefono: user?.telefono };
        dispatch(setProducts([productData]));
        reset();
        setFile(null);
    };


    return (
        <div className="flex w-full h-full px-10 py-2 bg-white">
            <div className="flex flex-col w-[40%] mr-20">
                <h1 className="text-4xl uppercase font-bold">
                    Hola <span className="font-semibold text-2xl">{user?.nombre} </span>
                    <span className="mt-4 lowercase text-base font-semibold">
                        Antes de continuar tienes que tener algunas cosas en mente:
                    </span>
                </h1>
                <div className="flex flex-col text-lg w-full my-4 pl-5">
                    <ol className="list-decimal text-justify">
                        <li>
                            <span className='font-bold'> Respetar a los demás usuarios: </span>
                            Está prohibido el uso de lenguaje ofensivo, discriminatorio o inapropiado en publicaciones, comentarios o mensajes privados.
                        </li>
                        <li>
                            <span className='font-bold'> Subir contenido apropiado: </span>
                            Solo se permite la publicación de productos o servicios que sean legales, apropiados para el entorno universitario y que cumplan con las políticas de la institución.
                        </li>
                        <li>
                            <span className='font-bold'> Ser miembro de la comunidad universitaria: </span>
                            Únicamente estudiantes, profesores, o personal del instituto tienen permitido publicar o comprar en la plataforma. Se podría requerir un correo institucional para verificar.
                        </li>
                        <li>
                            <span className='font-bold'> Prohibido el comercio ilícito: </span>
                            Está estrictamente prohibido vender productos ilegales, falsificados, medicamentos, alcohol, tabaco u otros artículos restringidos.
                        </li>
                        <li>
                            <span className='font-bold'> Responsabilidad del vendedor y comprador: </span>
                            Los vendedores y compradores son responsables de completar sus transacciones de manera justa y ética. La página no se hace responsable por problemas entre las partes.
                        </li>
                        <li>
                            <span className='font-bold'> Evitar conflictos de interés: </span>
                            No se permite utilizar la plataforma para fines políticos, religiosos o cualquier otra actividad que pueda causar divisiones dentro de la comunidad universitaria.
                        </li>
                        <li>
                            <span className='font-bold'> Reportar contenido inapropiado: </span>
                            Si detectas publicaciones que violen las reglas, repórtalas a los administradores de la página para su revisión.
                        </li>
                        <li>
                            Solo productos relacionados con el entorno universitario: Priorizar la venta de artículos útiles para estudiantes, como libros, electrónicos, mobiliario, ropa universitaria, etc.
                        </li>
                        <li>
                            <span className='font-bold'> Aceptación de términos y condiciones: </span>
                            Al usar la plataforma, todos los usuarios aceptan las reglas y se comprometen a seguirlas.
                        </li>
                    </ol>

                    <div className="flex items-center w-full text-center mt-4">
                        <h1 className="text-xl font-semibold text-lime-700">¿Aceptas nuestras reglas?</h1>
                        <span className="pl-4">
                            Sí <input type="checkbox" onClick={() => setCheck(!check)} />
                        </span>
                    </div>
                </div>
            </div>

            {check ? (
                <div className="flex flex-col items-center justify-start w-[60%] px-20">
                    <h1 className="text-4xl font-bold uppercase">Subir Producto</h1>

                    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex w-full h-full'>

                            <div className="flex flex-col w-1/3 pt-4">
                                <div className="flex flex-col relative w-full my-4">
                                    <label className="font-semibold pb-1">Nombre producto</label>
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col relative w-full my-2">
                                    <label className="font-semibold pb-1">Tipo</label>
                                    <input
                                        type="text"
                                        {...register('type', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col relative w-full my-2">
                                    <label className="font-semibold pb-1">Costo</label>
                                    <input
                                        type="number"
                                        {...register('price', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col relative w-full my-2">
                                    <label className="font-semibold pb-1">Descripción</label>
                                    <textarea
                                        {...register('description', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div>
                                {/* <div className="flex flex-col relative w-full my-2">
                                    <label className="font-semibold pb-1">Nombre vendedor</label>
                                    <input
                                        type="number"
                                        {...register('price', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col relative w-full my-2">
                                    <label className="font-semibold pb-1">Costo</label>
                                    <input
                                        type="number"
                                        {...register('price', { required: true })}
                                        className="p-2 bg-alabaster-400 border-2 border-black rounded-lg"
                                    />
                                </div> */}
                            </div>

                            <div className="flex flex-col w-2/3 h-full pt-4 pl-10 items-center justify-center">
                                <div
                                    className="flex w-full h-[600px] items-center justify-center bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500 overflow-hidden"
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    {file ? (
                                        <img
                                            src={file}
                                            alt="Vista previa"
                                            className="object-contain w-full h-full"
                                        />
                                    ) : (
                                        <p className="text-center text-sm text-gray-500">
                                            Haz clic aquí para seleccionar una imagen
                                        </p>
                                    )}
                                </div>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        {/* Mover el botón al interior del formulario */}
                        <div className="flex h-full items-end mb-4">
                            <button
                                type="submit"
                                className="flex border border-black bg-alabaster-900 text-white rounded-lg font-bold p-4 mt-4 hover:bg-amber-100 hover:text-black hover:border-alabaster-900"
                            >
                                Subir Producto
                            </button>
                        </div>
                    </form>

                </div>
            ) : null}
        </div>
    );
};
