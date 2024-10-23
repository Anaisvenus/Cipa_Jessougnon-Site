import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
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

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Actualités du jour</h1>
                {loading ? (
                    <p>Chargement...</p>
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

            {/* Footer */}
            <div className="relative top-[100px] bg-lime-200 text-black w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
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
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/aboutus">A Propos</Link></li>
                    <li><Link to="/services">Nos Services</Link></li>
                    <li><Link to="/partners">Nos Références</Link></li>
                    <li><Link to="/contactus">Contactez-nous</Link></li>
                </ul>
                </div>
                <div className="text-center md:text-left">
                <h2 className="text-lg font-bold">Réseaux sociaux</h2>
                <ul>
                    <li><a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d">Facebook</a></li>
                    <li><a href="tel:+229 62 31 5172">WhatsApp</a></li>
                    <li><a href="https://www.linkedin.com/company/cipa-jessougnon-sa/">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==">Instagram</a></li>
                </ul>
                </div>
            </div>

        </div>
    );
}

export default NewsPage;
