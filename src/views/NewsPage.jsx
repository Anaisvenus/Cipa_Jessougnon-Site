import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import actutitle from "../image/actu title.png";
// import "./NewsPage.css";
import React, { useEffect, useState } from 'react';
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

  
    return (
        <div classNameName="NewsPage h-screen">
            <Navbar/>
            {/* About us on the LandingPage */}
            <div className="relative">
                <div className="absolute top-40 w-full transform -translate-y-10 z-0 object-cover" style={{ backgroundColor: '#b6d023',  height: '500px' }}></div>
                
                {/* Background Image */}
                <img
                    className="relative mt-20 w-full h-64 md:h-96 lg:h-3/6 transform -translate-y-10 z-0 object-cover"
                    src={actutitle}
                    alt="Actu Title"
                />
                
                {/* Title */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10">
                    <div className="text-center hover:text-blue-400">
                        <h1 className="text-7xl font-bold text-black">
                            CIPA JESSOUGNON <br />
                            <span className="block font-semibold">Actualités</span>
                        </h1>
                    </div>
                </div>
                
                <div className="relative flex justify-center items-center gap-10">
                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover" style={{ backgroundColor: '#000000', height: '500px', width: '300px' }}></div>
                    
                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover" style={{ backgroundColor: '#000000', height: '500px', width: '300px' }}>
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

                    <div className="rounded-xl transform -translate-y-10 z-0 object-cover" style={{ backgroundColor: '#000000', height: '500px', width: '300px' }}>
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



                <div className="min-h-screen flex flex-col">
                    {/* Main Content */}
                    <div className="flex-grow">
                        {/* Your main content goes here */}
                    </div>

                    {/* Footer */}
                    <div className="bg-lime-200 text-black w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
                        <img className="h-24 mx-auto" src={logo} alt="Logo" />
                        <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">À propos de nous</h2>
                        <p>
                            Nous sommes une entreprise de nettoyage professionnelle dédiée à fournir des services
                            de haute qualité avec des pratiques respectueuses de l'environnement.
                        </p>
                        </div>
                        <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">Navigation</h2>
                        <ul>
                            <li><Link to="/home" className="hover:underline">Accueil</Link></li>
                            <li><Link to="/aboutus" className="hover:underline">A Propos</Link></li>
                            <li><Link to="/services" className="hover:underline">Nos Services</Link></li>
                            <li><Link to="/partners" className="hover:underline">Nos Références</Link></li>
                            <li><Link to="/contactus" className="hover:underline">Contactez-nous</Link></li>
                        </ul>
                        </div>
                        <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">Réseaux sociaux</h2>
                        <ul>
                            <li><a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d" className="hover:underline">Facebook</a></li>
                            <li><a href="tel:+229 62 31 5172" className="hover:underline">WhatsApp</a></li>
                            <li><a href="https://www.linkedin.com/company/cipa-jessougnon-sa/" className="hover:underline">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==" className="hover:underline">Instagram</a></li>
                        </ul>
                        </div>
                    </div>
                </div>


                </div>
        </div>
    );
}

export default NewsPage;
