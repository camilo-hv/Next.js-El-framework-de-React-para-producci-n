'use client';
import React, { useState } from 'react'
import { Repo } from '../interface/repo'
import Link from 'next/link';

interface Props {
    repo: Repo,

}


export default function RepoCard({ repo }: Props) {

    const { name, url, curso, plataforma, lenguaje, tiempo, aprendizaje } = repo;
    const itemsAprendizaje = aprendizaje.split(",");
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div id="title" className="text-center my-10">
                <h1 className="font-bold text-4xl text-white">{name}</h1>
                <p className="text-light text-gray-500 text-xl">
                    {lenguaje}
                </p>
            </div>
            <div
                className="justify-center grid text-center"
            >
                <div
                    id="plan"
                    className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                >
                    <div id="title" className="w-full py-5 border-b border-gray-800">
                        <h2 className="font-bold text-3xl text-white">{plataforma}</h2>
                        <Link href={curso} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-normal text-indigo-500 text-xl mt-2" >
                                Ver Curso
                            </h3>
                        </Link>
                    </div>
                    <div id="content" className="">
                        <div id="icon" className="my-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-gray-500 text-sm pt-2">
                                Perfect individuals or startups
                            </p>
                        </div>
                        <div id="contain" className="leading-8 mb-10 text-lg font-light">
                            {/* <ul className="list-disc pl-0 space-y-1 text-gray-300">
                                {itemsAprendizaje.map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                                ))}
                            </ul> */}

                            {/* Acordeón de aprendizaje */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="mt-3 mb-2 text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
                            >
                                {open ? "Ocultar aprendizaje ▲" : "Ver aprendizaje ▼"}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0 leading-8 mb-10 text-lg font-light"
                                    }`}
                            >
                                <ul className="list-disc pl-0 space-y-1 text-gray-300">
                                    {itemsAprendizaje.map((item, index) => (
                                        <li key={index} className="text-gray-300">
                                            {item.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div id="choose" className="w-full mt-10 px-6">
                                <a
                                    href={url}
                                    className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                                >GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
