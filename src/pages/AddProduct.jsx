import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setProducts } from '../store/slices';

export const AddProduct = () => {
    const { user } = useSelector((state) => state.mainSlice);

    const dispatch = useDispatch();
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

        const priceNumber = Number(data?.price);
        const newData = { ...data, imgUrl: file, vendedor: user?.nombre, telefono: user?.telefono, price: priceNumber };
        dispatch(setProducts([newData]));
        reset();
        setFile(null);
    };

    return (
        <div className="flex w-full h-full justify-center px-10 py-2 bg-white overflow-auto">
            <div className="flex flex-col items-center justify-center w-[60%] px-20">
                <h1 className="text-4xl font-bold uppercase pb-2">Subir Producto</h1>

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

                            <button
                                type="submit"
                                className="flex border-2 bg-lime-600 text-white justify-center rounded-lg font-bold p-4 mt-4 hover:bg-white hover:text-lime-600 hover:border-lime-600"
                            >
                                Subir Producto
                            </button>

                        </div>

                        <div className="flex flex-col w-2/3 h-full pt-4 pl-10 items-center justify-center">
                            <div
                                className="flex w-full h-[500px] items-center justify-center bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-gray-500 overflow-hidden"
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
                    {/* <div className="flex h-full justify-center items-end mb-4">

                    </div> */}
                </form>

            </div>
        </div>
    );
};
