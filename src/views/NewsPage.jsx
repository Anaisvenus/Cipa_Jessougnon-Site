import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../image/logo.png";
import actutitle from "../image/actu title.png";
import fodboss from "../image/fod boss.webp";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import "./NewsPage.css";
import axios from 'axios';

function NewsPage() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Remplacez 'YOUR_API_KEY' par votre clé d'API
        const fetchNews = async () => {
        try {
            const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=fr&apiKey=YOUR_API_KEY`
            );
            setArticles(response.data.articles);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors du chargement des actualités :", error);
        }
        };

        fetchNews();
    }, []); // Le tableau vide garantit que l'appel est fait une seule fois lors du chargement de la page

    const [createChamp, setCreateChamp] = useState(false);
    const [headerText, setHeaderText] = useState("Le FOD BOSS enfin disponible à l'aéroport de Cotonou");
  
    return (
        <div classNameName="NewsPage h-screen">
            <Navbar/>
            {/* About us on the LandingPage */}
            <div className="relative">
                {/* Title */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10">
                    <div className="text-center hover:text-blue-400">
                        <h1 className="text-7xl block font-semibold text-blue-400"> Actualités </h1>
                    </div>
                </div>
                <div className="absolute top-56 bg-lime-200 w-full transform -translate-y-10 z-0 object-cover" style={{ height: '500px' }}></div>
                
                
                
                <div className="relative absolute top-72 flex justify-center items-center gap-10">
                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover flex flex-col items-center bg-slate-600" style={{ height: '350px', width: '400px' }}>
                        <img className="rounded-xl mt-4 item-conseil transition-transform duration-300 ease-in-out hover:scale-110" src={fodboss} style={{ height: '200px', width: '350px' }} alt="Logo" />
                        <h1 className="text-white mt-4 font-bold text-center italic uppercase p-2" onClick={() => setCreateChamp(true)}>{headerText}</h1>
                    </div>

                    
                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover bg-slate-600" style={{ height: '350px', width: '400px' }}>
                        <div className="container mx-auto p-4 ">
                            <h1 className="text-3xl font-bold mb-4 text-white">Actualités du jour</h1>
                            {loading ? (
                                <p className="text-white">Chargement...</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {articles.map((article, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                                    <p className="text-gray-700 mt-2">{article.description}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 mt-4 inline-block"
                                    >
                                        Lire plus
                                    </a>
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    </div>

                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover bg-slate-600" style={{ height: '350px', width: '400px' }}>
                        <div className="container mx-auto p-4">
                            <h1 className="text-3xl font-bold mb-4 text-white">Actualités du jour</h1>
                            {loading ? (
                                <p className="text-white">Chargement...</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {articles.map((article, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                                    <p className="text-gray-700 mt-2">{article.description}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 mt-4 inline-block"
                                    >
                                        Lire plus
                                    </a>
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    </div>
                </div>

                {createChamp ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-1/2 my-6 mx-auto">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                                {/*header*/}
                                <button
                                    type="button"
                                    className="absolute right-5"
                                    onClick={() => {setCreateChamp(false)}}
                                    >
                                    <FontAwesomeIcon className="text-red-600 hover:text-orange-500" icon={faCircleXmark} />
                                </button>
                                <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                                    MOOV-Africa - Création de champ
                                </div>

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    
                                    {/* RETOUR */}
                                    <button
                                    className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {setCreateChamp(false)}}
                                    >
                                    Retour
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}


                <div className="min-h-screen flex flex-col">
                    {/* Main Content */}
                    <div className="flex-grow">
                        {/* Your main content goes here */}
                    </div>

                    

      {/* Footer */}
      <Footer/>
                </div>

                        
                </div>
        </div>
    );
}

export default NewsPage;
