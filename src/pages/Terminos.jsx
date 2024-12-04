import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Terminos = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col text-lg h-full items-center justify-center w-full my-4 pl-5 overflow-auto relative">
            <p className='absolute top-0 left-40 cursor-pointer' onClick={() => navigate(-1)} > <FontAwesomeIcon icon={faChevronLeft} size='lg' /> </p>
            <h1 className='mb-8 text-4xl uppercase font-bold'> Términos y Condiciones </h1>
            <ol className="flex flex-col list-decimal text-justify items-center w-[40%]">
                <li>
                    <span className='font-bold text-2xl'> Respetar a los demás usuarios: </span>
                    <p>  Está prohibido el uso de lenguaje ofensivo, discriminatorio o inapropiado en publicaciones o mensajes privados. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Subir contenido apropiado: </span>
                    <p> Solo se permite la publicación de productos o servicios que sean legales, apropiados para el entorno universitario y que cumplan con las políticas de la institución. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Ser miembro de la comunidad universitaria: </span>
                    <p> Únicamente estudiantes, profesores, o personal del instituto tienen permitido publicar o comprar en la plataforma. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Prohibido el comercio ilícito: </span>
                    <p>   Está estrictamente prohibido vender productos ilegales, falsificados, medicamentos, alcohol, tabaco u otros artículos restringidos. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Evitar conflictos de interés: </span>
                    <p>  No se permite utilizar la plataforma para fines políticos, religiosos o cualquier otra actividad que pueda causar divisiones dentro de la comunidad universitaria. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Reportar contenido inapropiado: </span>
                    <p>  Si detectas publicaciones que violen las reglas, repórtalas a los administradores de la página para su revisión. </p>
                </li>
                <li>
                    <span className='font-bold text-2xl'> Solo productos relacionados con el entorno universitario: </span>
                    <p>  Priorizar la venta de artículos útiles para estudiantes, como libros, electrónicos, mobiliario, ropa universitaria, etc. </p>
                </li>
            </ol>
        </div>
    )
}
