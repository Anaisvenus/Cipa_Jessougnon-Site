import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import "./ContactUs.css";

function ContactUs() {

  
  return (
    <div classNameName="ContactUs h-screen">
      
      <Navbar/>
      <div className="grid grid-cols-2 gap-0">
        <div className="container mx-auto">
          <div className="mx-auto">
            <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contactez-nous</h2>

              <form 
                action="mailto:aakakpovenus@gmail.com"
                method="post"
                enctype="text/plain">
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" for="name">Nom(s) & Prénom(s)</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Entrez vos noms et prénoms"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" for="email">Email</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Entrez votre email"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" for="message">Votre Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <button
                  className="w-full text-gray-800 py-2 px-4 rounded-lg hover:bg-lime-400 transition duration-300"
                  type="submit"  href="tel:+229 62 31 5172"
                  style={{ backgroundColor: '#b6d023' }}>
                  Contactez-nous
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex relative items-start justify-center w-full">
          <div className="w-full h-auto rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
            
            {/* Company's Logo */}
            <div className="text-gray-500 group-hover:scale-105 transition-all">
              <img className="h-60 mx-auto" src={logo} alt="Logo" />
            </div>

            {/* Name&fonction */}
            <div className="mb-4 transition-all duration-500 delay-200 ">
              <h1 className="font-semibold text-gray-700">Cipa Jessougnon</h1>
              <p className="text-gray-500 text-sm text-center">Hygiène Hospitalière, Entretien des bâtiments,
                Dératisation, Désinfection, Désinsectisation, Diverses Prestations de service et BTP</p>
            </div>

            {/* Social Medias */}
            <div class="card ">
              <a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==">
                <svg class="socialSvg insta" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
                <svg class="socialSvg" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </a>

              <a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d">
                <svg class="socialSvg facebook" viewBox="0 0 16 16" fill="currentColor" id="facebook">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
                <svg class="socialSvg facebook" viewBox="0 0 16 16" fill="currentColor" id="facebook">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/cipa-jessougnon-sa/">
                <svg class="socialSvg linkedIn" viewBox="0 0 448 512">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
                <svg class="socialSvg" viewBox="0 0 448 512">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>

              <a href="tel:+229 62 31 5172">
                <svg class="socialSvg whatsapp" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
                <svg class="socialSvg" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative top-[100px] bg-zinc-500 w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
        <img className="h-32 mx-auto" src={logo} alt="Logo" />
        <div className="text-white flex justify-center items-center">
          <h1>Nous sommes une entreprise de nettoyage <br />
            professionnelle dédiée à fournir des services <br />
            de nettoyage de haute qualité. Avec une  <br />
            équipe qualifiée, des pratiques  <br />
            respectueuses de l'environnement et un <br />
            engagement envers la satisfaction de nos <br />
            clients, nous assurons des espaces  <br />
            impeccables et hygiéniques. Votre partenaire <br />
            de confiance pour un environnement plus  <br />
            propre et plus sain.</h1>
        </div>

        <div className="relative absolute bottom-10">
          <h1 className="text-white font-bold flex justify-center items-start">Navigation</h1>
          <Link to="/home"><h1 className="text-white flex justify-center items-start">Accueil</h1></Link>
          <Link to="/aboutus"><h1 className="text-white flex justify-center items-start">A Propos</h1></Link>
          <Link to="/services"><h1 className="text-white flex justify-center items-start">Nos Services</h1></Link>
          <Link to="/partners"><h1 className="text-white flex justify-center items-start">Nos Références</h1></Link>
          <Link to="/contactus"><h1 className="text-white flex justify-center items-start">Contactez-nous</h1></Link>
        </div>

        <div className="relative absolute bottom-12">
          <h1 className="text-white font-bold flex justify-center items-start">Réseaux sociaux</h1>
          <div className="flex justify-start items-center grid grid-cols-1">
            <Link to="/home"><h1 className="text-white flex justify-center items-start">Facebook</h1></Link>
            <Link to="/aboutus"><h1 className="text-white flex justify-center items-start">Whatsapp</h1></Link>
            <Link to="/services"><h1 className="text-white flex justify-center items-start">LinkedIn</h1></Link>
            <Link to="/partners"><h1 className="text-white flex justify-center items-start">Instagram</h1></Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactUs;
