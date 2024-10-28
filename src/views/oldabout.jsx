import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Data_table from "../Components/Data_table";
import axios from "axios";
import { getChamp } from "../Features/champSlice";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import ModalSample from "../Modals/ModalSample";
import constants from "./../constant"

function Champ() {
  const [modalMessage, setModalMessage] = useState("");
  const [showModalMessage, setShowModalMessage] = useState(false);
  const reset = () => {
    setShowModalMessage(false);
  };
  function showSampleModal(message) {
    setModalMessage(message);
    setShowModalMessage(true);
  }

  let navigate = useNavigate();
  const [user, setUser] = useState();

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("moov_ged_token"))
  );

  // VARIABLE CONTENANT LA LISTE DES CHAMPS
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("moov_ged_token") == null) {
      navigate("/");
    }else{
      // RECUPERATION DE LA LISTE COMPLETE DES CHAMPS A CHAQUE CHARGEMENT DE LA PAGE
      axios
        .get(constants.url + "users/" + token.id, {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        })
        .then((res) => {
          setUser(res.data);
        });
  
      // RECUPERATION DE LA LISTE COMPLETE DES CHAMPS A CHAQUE CHARGEMENT DE LA PAGE
      axios
        .get(constants.url + "champs/", {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        })
        .then((res) => {
          setData(res.data);
          // dispatch(getChamp(res.data));
        });
    }
  }, []);


  // CARACTERISTIQUES DES COLUNNES DE LA DATA-TABLE
  const columns = [
    {
      name: "Champs",
      selector: "nom",
      sortable: true,
      style: {
        background: "#f5f5f4",
      },
    },

    {
      name: "Actif",
      selector: "actif",
      sortable: true,
      center: true,
      cell: (row) => {
        if (row.actif) {
          return (
            <p className="bg-green-400 rounded-full px-3 text-xs">Actif</p>
          );
        } else {
          return (
            <p className="bg-red-400 rounded-full px-3 text-xs">Non actif</p>
          );
        }
      },
      style: {
        background: "#f5f5f4",
      },
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      center: true,
      cell: (row) => [
        <button key={row.id} onClick={() => show(row)} className="mr-10">
          <FontAwesomeIcon className="text-green-600" icon={faPencil} />
        </button>
      ],
      style: {
        background: "#f5f5f4",
      },
    },
  ];

  // DONNÉES DE LA DATA-TABLE
  const tableData = {
    columns,
    data,
  };

  // FONCTION DE RETOUR D'UN MODAL
  const cancel = () => {
    axios
      .get(constants.url + "champs/", {
        headers: {
          Authorization: "Bearer " + token.token,
        },
      })
      .then((res) => {
        setData(res.data);
      });
    setChampName();
    setChampDesc();
    setChampActive();
    setChamp();
    setShowChamp(false);
    setCreateChamp(false);
    setConfirmation(false);
  };

  // CONSTANTE D'ETAT D'AFFICHAGE DU MODAL DE CONFIRMATION DE CREATION
  const [confirmCreation, setConfirmCreation] = useState(false);
  // FONCTION D'AFFICHAGE DU MODAL DE CONFIRMATION DE CREATION DE L'UTILISATEUR
  const Confirm_Creation = (row) => {
    setConfirmCreation(true);
  };

  // CONSTANTE D'ETAT D'AFFICHAGE DU MODAL DE CONFIRMATION DE MODIFICATION
  const [confirmUpdate, setConfirmUpdate] = useState(false);
  // FONCTION D'AFFICHAGE DU MODAL DE CONFIRMATION DE MODIFICATION
  const Confirm_Update = (row) => {
    setConfirmUpdate(true);
  };

  // VARIABLE CONTENANT LA VALEUR PREDEFINIE
  const [addValeurPredefinie, setAddValeurPredefinie] = useState(false);
  const handleAddValeurPredefinie = (row) => {
    setAddValeurPredefinie(true);
  };

  // VARIABLE CONTENANT LE NOM DU CHAMP
  const [champName, setChampName] = useState("");
  const handleChampName = (event) => {
    event.preventDefault();
    setChampName(event.target.value);
  };

  // VARIABLE CONTENANT LE TYPE DU CHAMP
  const [champType, setChampType] = useState("");
  const handleChampType = (event) => {
    event.preventDefault();
    setChampType(event.target.value);
  };

  // VARIABLE CONTENANT LE TYPE DU CHAMP
  const [champPredefini, setChampPredefini] = useState(false);
  const handleChampPredefini = (event) => {
    event.preventDefault();
    if (event.target.value == "true") {
      setChampPredefini(1);
    } else if (event.target.value == "false") {
      setChampPredefini(0);
    }
  };

  // VARIABLE CONTENANT LE TYPE DU CHAMP
  const [champValeurPredefinie, setChampValeurPredefinie] = useState("");
  const handleChampValeurPredefinie = (event) => {
    event.preventDefault();
    setChampValeurPredefinie(event.target.value);
  };


  // VARIABLE CONTENANT LE STATUT DU CHAMP
  const [champActive, setChampActive] = useState(false);

  // VARIABLE CONTENANT LA DESCRIPTION DU CHAMP
  const [champDesc, setChampDesc] = useState("");
  const handleChampDesc = (event) => {
    event.preventDefault();
    setChampDesc(event.target.value);
  };
  
  // CONSTANTE D'ETAT D'AFFICHAGE DU MODAL DE CREATION
  const [createChamp, setCreateChamp] = useState(false);
  // FONCTION POUR CRÉER UNE CHAMP
  const create = async () => {
    axios
      .post(
        constants.url + "champs/",
        {
          nom: champName,
          type: champType,
          predefini: champPredefini,
          description: champDesc,
        },
        {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
    )
      .then((data) => {
        if (data.data.type_error) {
          showSampleModal("Ce champ est déja créé");
          setConfirmCreation(false);
          return setCreateChamp(true);
        } else {
          return cancel();
        }
      });
  };

  // VARIABLE CONTENANT LES DONNEES DU CHAMP SELECTIONNE
  const [champ, setChamp] = useState("");
  // CONSTANTE D'ETAT D'AFFICHAGE DU MODAL DE VISUALISATION D'UN CHAMP SELECTIONNE
  const [showChamp, setShowChamp] = useState(false);
  // FONCTION D'AFFICHAGE DU MODAL D'APPERCU D'UN CHAMP SELECTIONNE
  const show = (row) => {
    setChampName(row.nom);
    setChampType(row.type);
    setChampPredefini(row.predefini);
    setChampValeurPredefinie(row.valeurPredefinies);
    setChampActive(row.actif);
    setChampDesc(row.description);
    setChamp(row);
    setShowChamp(true);
  };

  // CONSTANTE D'ETAT D'AFFICHAGE DU MODAL DE CONFIRMATION DE SUPPRESSION
  const [confirmation, setConfirmation] = useState(false);
  // FONCTION D'AFFICHAGE DU MODAL DE CONFIRMATION DE SUPRESSION DE CHAMP
  const confirm = (row) => {
    setChamp(row);
    setConfirmation(true);
  };

  // FONCTION POUR UPDATE UN CHAMP
  const update = async (id) => {
    await axios
      .patch(
        constants.url + "champs/" + id,
        {
          nom: champName,
          description: champDesc,
          // valeurPredefinie: champValeurPredefinie,
        },
        {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
      )
    cancel();
  };

  // FONCTION D'ACTIVATION OU DESACTIVATION D'UN CHAMP
  const activation = async (champ) => {
    if (champ.actif) {
      await axios.patch(
        constants.url + "champs/" + champ.id,
        {
          actif: false,
        },
        {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
      );
    } else {
      await axios.patch(
        constants.url + "champs/" + champ.id,
        {
          actif: true,
        },
        {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
      );
    }
    cancel();
    setConfirmation(false);
  };

  const [disabledValeurPredefinie, setdisabledValeurPredefinie] = useState(true)

  if (data) {
    return (
      <>
        {/* IMPORT DE LA NAVBAR DE: './Components/Navbar' */}
        <Layout>
          <div className="flex flex-row p-5 px-10 m-5 rounded-xl place-items-center bg-blue-100 ralative">
            <Link to="/accueil" className="text-xl mx-5">
              <FontAwesomeIcon icon={faHouse} />
              <span className="ml-3">Accueil</span>
            </Link>
            <FontAwesomeIcon icon={faAngleRight} />
            <p className="text-xl mx-5">Administrateur</p>
            <FontAwesomeIcon icon={faAngleRight} />
            <p className="text-xl mx-5">Champ</p>
          </div>

          <div className="flex flex-col p-5 m-5 rounded-xl h-full min-h-screen">
            <div className="text-3xl font-semibold m-5 mt-0 text-center">
              CHAMPS
            </div>
            <div className="text-3xl font-semibold m-3 relative place-items-center flex flex-row">
              {/* BOUTTON PERMETTANT L'AFFICHAGE DU MODAL DE CRÉATION DE CHAMPS */}
              <button
                onClick={() => setCreateChamp(true)}
                className="text-white bottom-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
              >
                Ajouter un Champ
              </button>
            </div>

            {/* LE MODAL CRÉATION DE CHAMPS */}
            {createChamp ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <button
                          type="button"
                          className="absolute right-5"
                          onClick={() => cancel()}
                        >
                          <FontAwesomeIcon className="text-red-600 hover:text-orange-500" icon={faCircleXmark} />
                        </button>
                      <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                        MOOV-Africa - Création de champ
                      </div>

                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <form className="w-full">
                          {/* NOM */}
                          <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
                                Nom du champ
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <input
                                value={champName}
                                onChange={handleChampName}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-full-name"
                                type="text"
                                placeholder="Example: Voyages"
                              />
                            </div>
                          </div>

                          {/* PREDEFINI */}
                          <div className="md:flex md:items-center mb-5">
                            <div className="md:w-1/3">
                              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
                                Predefini
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <select
                                onChange={(event) =>
                                  handleChampPredefini(event)
                                }
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                              >
                                <option value={false}>Non</option>
                                <option value={true}>Oui</option>
                              </select>
                              {/* <select
                                onChange={(event) => handleChampPredefini(event)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                <option value={champPredefini ? true : false}>
                                  {champPredefini ? "Oui" : "Non"}
                                </option>
                                <option value={champPredefini ? false : true}>
                                  {champPredefini ? "Non" : "Oui"}
                                </option>
                              </select> */}
                            </div>
                          </div>

                          {/* TYPE */}
                          <div className="md:flex md:items-center mt-4">
                            <div className="md:w-1/3">
                              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
                                Type du champ
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <select
                                onChange={(event) => handleChampType(event)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                <option defaultValue="Choose">
                                  Appuyer pour derouler la liste
                                </option>
                                <option defaultValue="Choose">
                                  select
                                </option><option defaultValue="Choose">
                                  string
                                </option><option defaultValue="Choose">
                                  date
                                </option><option defaultValue="Choose">
                                  file
                                </option>
                              </select>
                            </div>
                          </div>

                          {/* DESCRIPTION */}
                          <div className="md:flex md:items-center mt-4">
                            <div className="md:w-1/3">
                              <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
                                Description du champ
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <textarea
                                value={champDesc}
                                onChange={handleChampDesc}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-full-name"
                                type="text"
                                placeholder="Description"
                              />
                            </div>
                          </div>
                        </form>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        {/* CREATE */}
                        <button
                          className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            if (champName && champDesc && champType) {
                              setCreateChamp(false);
                              Confirm_Creation(champ);
                            } else {
                              showSampleModal(
                                "Veuillez entrer tous les champs s'il vous plaît !"
                              );
                            }
                          }}
                        >
                          Confirmer la creation
                        </button>

                        {/* RETOUR */}
                        <button
                          className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => cancel()}
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {/* LE MODAL DE CONFIRMATION DE CREATION */}
            {confirmCreation ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                        MOOV-Africa - Champ
                      </div>
                      {/*body*/}
                      {champName ? (
                        <div className="relative p-6 flex-auto">
                          Voulez-vous creer le champ
                          <div className="text-blue-800 uppercase font-bold">
                            {champName}
                          </div>
                        </div>
                      ) : null}
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        {champName ? (
                          <button
                            className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setConfirmCreation(false);
                              create();
                            }}
                          >
                            oui
                          </button>
                        ) : null}

                        <button
                          className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setConfirmCreation(false)
                            setCreateChamp(true)
                          }}
                        >
                          non
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {/* LE MODAL D'AFFICHAGE D'UNE CHAMPS */}
            {showChamp ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                        MOOV-Africa - Champ
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto m-auto p-auto">
                        <form className="w-full max-w-lg">

                          {/* CHAMP */}
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Champ
                              </label>
                              <input
                                value={champName}
                                onChange={handleChampName}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                              />
                            </div>
                          </div>

                          {/* DESCRIPTION */}
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Description
                              </label>
                              <textarea
                                value={champDesc}
                                onChange={handleChampDesc}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder={champ.description}
                              />
                            </div>
                          </div>

                          {/* VALEURS PREDEFINIES */}
                          {/* <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                              <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                              >
                                Valeurs predefinies
                              </label>
                              <>
                                <div className="flex justify-between">
                                  <select
                                    disabled={disabledValeurPredefinie}
                                    onChange={(event) => handleChampValeurPredefinie(event)}
                                    className="block appearance-none w-2/3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                    <option defaultValue="Choose">0 à 18</option>
                                    <option defaultValue="Choose">19 à 30</option>
                                    <option defaultValue="Choose">30 et plus</option>
                                  </select>

                                  <button
                                    className="bg-green-600 text-white font-bold uppercase text-xs p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setdisabledValeurPredefinie(false)}
                                  >
                                    Modifier la valeur predefinie
                                  </button>
                                </div>
                              </>
                            </div>
                          </div> */}

                        </form>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                         {/* STATUE */}
                        <div className="w-full pb-4 mb-6 md:mb-0">
                          <div className="w-full mb-6 md:mb-0">
                            <div className="relative">
                              {champ.actif ? (
                                <button
                                  className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => {
                                    setShowChamp(false);
                                    confirm(champ);
                                  }}
                                >
                                  Désactiver
                                </button>
                              ) : (
                                <button
                                  className=" bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => {
                                    setShowChamp(false);
                                    confirm(champ);
                                  }}
                                >
                                  Activer
                                </button>
                              )}
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                              </div>
                            </div>
                          </div>
                        </div>

                        {/* MODIFIER */}
                        <button
                          className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowChamp(false);
                            Confirm_Update(champ);
                          }}
                        >
                          Modifier
                        </button>

                        {/* RETOUR */}
                        <button
                          className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => cancel()}
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

            {/* LE MODAL DE CONFIRMATION DE CREATION */}
            {confirmUpdate ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                        MOOV-Africa - Champ
                      </div>
                      {/*body*/}
                      {champName ? (
                        <>
                          <div className="relative p-6 flex-auto">
                            Voulez-vous modifier le champ <span className="text-blue-600 uppercase font-bold">{champName}</span>?
                          </div>
                        </>
                      ) : null}
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        {/* ENREGISTRER */}
                        {champName ? (
                          <button
                            className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setConfirmUpdate(false);
                              update(champ.id);
                            }}
                          >
                            oui
                          </button>
                        ) : null}

                        {/* CANCEL */}
                        <button
                          className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setConfirmUpdate(false)
                            setShowChamp(true)}}
                        >
                          non
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {/* LE MODAL DE CONFIRMATION DE SUPPRESSION */}
            {confirmation ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between text-xl font-bold p-5 border-b border-solid border-slate-200 rounded-t">
                        MOOV-Africa - Champ
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        Confirmez vous{" "}
                        {champ.actif ? (
                          <span className="font-bold text-red-600">
                            la désactivation
                          </span>
                        ) : (
                          <span className="font-bold text-green-600">
                            l'activation
                          </span>
                        )}
                        du champ
                        <span className="font-bold">
                          "{champ.nom}"
                        </span>?
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                          className="bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => activation(champ)}
                        >
                          oui
                        </button>

                        <button
                          className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-2 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setConfirmation(false)
                            setShowChamp(true)
                          }}
                        >
                          non
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {/* LA TABLE PERMETTANT L'AFFICHAGE DES DONNÉES  */}
            <Data_table tableData={tableData} />
          </div>
          {showModalMessage ? (
            <ModalSample message={modalMessage} reset={reset} />
          ) : null}
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row h-full min-h-screen place-items-center justify-center bg-gray-100 p-5">
          <div role="status">
            <svg
              className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default Champ;