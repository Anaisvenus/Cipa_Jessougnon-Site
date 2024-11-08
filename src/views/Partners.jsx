import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import rectangle from "../image/rectangle.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";

function Partners() {
  return (
    <div className="Partners h-screen">
      
      <Navbar/>
      <main className="flex flex-wrap">
        <div className="relative absolute top-10 flex  justify-center items-center">
          {/* Image de fond */}
          <img 
            className="md:w-full transform -translate-y-10 z-0 opacity-70" style={{ height: '700px', width: '1200px' }} 
            src={rectangle} 
            alt="Thumbs Up Woman" 
          />
          <h1 className="absolute top-0 text-xl font-bold z-10 p-10 text-black">Nos Références</h1>
          {/* Texte superposé à l'image */}
          <img className="absolute top-20 z-10" style={{ height: '500px', width: '1000px' }} src={partners} alt="Logo" />
        </div>
      </main>


      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Partners;
