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

    const [newActuality, setNewActuality] = useState(false);
    const [headerText, setHeaderText] = useState("Le FOD BOSS enfin disponible à l'aéroport de Cotonou");
  
    return (
        <div classNameName="NewsPage h-screen bg-gray-200">
            <Navbar/>
            {/* About us on the LandingPage */}
            <div className="relative">
                {/* Title */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10">
                    <div className="text-center hover:text-blue-400">
                        <h1 className="text-5xl md:text-7xl font-semibold text-blue-400">Actualités</h1>
                    </div>
                </div>

                {/* Background */}
                <div className="absolute top-56 w-full transform -translate-y-10 z-0 object-cover" style={{ height: '300px', md: '500px' }}></div>

                {/* Main Content */}
                <div className="relative top-72 flex flex-wrap justify-center items-center gap-10 px-4 md:px-0">
                    
                    {/* First Card */}
                    <div className="transform -translate-y-10 z-0 bg-slate-600 flex flex-col md:flex-row items-center w-full rounded-xl">
                        {/* Right Sidebar (Image) */}
                        <aside className="flex justify-center md:w-1/4 p-4">
                            <img 
                            className="rounded-xl w-72 h-60 mt-4 transition-transform duration-300 ease-in-out hover:scale-110" 
                            onClick={() => setNewActuality(true)} 
                            src={fodboss} 
                            alt="Logo" 
                            />
                        </aside>

                        {/* Main Section (Text) */}
                        <section className="w-full md:w-3/4 p-4 text-center md:text-left">
                            <h1 
                            className="text-white mt-4 font-bold italic uppercase p-2 text-xl md:text-2xl cursor-pointer" 
                            onClick={() => setNewActuality(true)}
                            >
                            {headerText}
                            </h1>
                        </section>
                    </div>

                    {/* News Container */}
                    <div className="rounded-xl transform -translate-y-10 z-0 bg-slate-600 w-full md:w-1/3" style={{ height: 'auto' }}>
                        <div className="container mx-auto p-4">
                        <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">Actualités du jour</h1>
                        {loading ? (
                            <p className="text-white">Chargement...</p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                            {articles.map((article, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                                <img src={article.urlToImage} alt={article.title} className="w-full h-32 md:h-48 object-cover rounded-md" />
                                <h2 className="text-lg md:text-xl font-semibold mt-2">{article.title}</h2>
                                <p className="text-gray-700 mt-2">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
                                    Lire plus
                                </a>
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                    </div>
                
                </div>

                {/* Modal for new actuality */}
                {newActuality && (
                <>
                    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 md:p-0">
                    <div className="relative w-full md:w-1/2 mx-auto bg-black rounded-lg shadow-lg">
                        
                        {/* Close Button */}
                        <button type="button" className="absolute top-4 right-4 text-red-600 hover:text-orange-500" onClick={() => setNewActuality(false)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        
                        {/* Modal Header */}
                        <div className="text-xl font-bold p-4 border-b border-slate-200">MOOV-Africa - Création de champ</div>
                        
                        {/* Modal Body */}
                        <div className="p-6 flex-auto">
                        {/* Content goes here */}
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end p-4 border-t border-slate-200">
                        <button
                            className="bg-red-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg mx-2 transition-all duration-150"
                            type="button"
                            onClick={() => setNewActuality(false)}
                        >
                            Retour
                        </button>
                        </div>
                        
                    </div>
                    </div>

                    {/* Background Overlay */}
                    <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
                </>
                )}

                <div className="min-h-screen flex flex-col mt-32 md:mt-0">
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
