import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBarMovil = ({user,showAppointment}) => (
    <div>
        <nav className="uk-navbar-container uk-navbar" data-uk-navbar="">
            <div className="uk-navbar-left">
                <a className="uk-navbar-toggle" href="#tm-mobile" data-uk-toggle="">
                    <div uk-navbar-toggle-icon="" className="uk-navbar-toggle-icon uk-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                data-svg="navbar-toggle-icon">
                            <rect y="9" width="20" height="1"/>
                            <rect y="3" width="20" height="1"/>
                            <rect y="15" width="20" height="1"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="uk-navbar-right">
                <a className="uk-navbar-item uk-logo" href=""><img src="images/logo.svg" width="150px" height="auto" alt="Color"/></a>
            </div>
        </nav>
        <div id="tm-mobile" className="uk-modal-full uk-modal" data-uk-modal="">
            <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-height-viewport">
                <button className="uk-modal-close-full uk-close uk-icon" type="button" data-uk-close="">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"
                            data-svg="close-icon">
                        <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"/>
                        <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"/>
                    </svg>
                </button>
                <div className="uk-margin-auto-vertical uk-width-1-1">
                    <div className="uk-child-width-1-1 uk-grid uk-grid-stack" data-uk-grid="">
                        <div>
                            <div className="uk-panel" id="module-0">
                                <div className="uk-navbar-center">
                                    {user === "ADMIN" ?
                                        <ul className="uk-nav uk-nav-primary uk-nav-center">
                                            <li><NavLink to="/stylists"> Estilistas     </NavLink></li>
                                            <li><NavLink to="/techniques"> Técnicas     </NavLink></li>
                                            <li><NavLink to="/statistics"> Estadisticas </NavLink></li>
                                            <li><NavLink to="/"> Salir                  </NavLink></li>
                                        </ul> :
                                        user === "ESTILISTA" ?
                                            <ul className="uk-nav uk-nav-primary uk-nav-center">
                                                <li><NavLink to="/"> Portafolio     </NavLink></li>
                                                <li><NavLink to="/agenda"> Agenda   </NavLink></li>
                                                <li><NavLink to="/"> Perfil         </NavLink></li>
                                                <li><NavLink to="/"> Historial      </NavLink></li>
                                                <li><NavLink to="/"> Salir          </NavLink></li>
                                            </ul> :
                                            <ul className="uk-nav uk-nav-primary uk-nav-center">
                                                <li ><NavLink to="/">           <b>Inicio       </b></NavLink></li>
                                                <li ><a href="/#About">         <b> Acerca de   </b></a></li>
                                                <li ><NavLink to="/techniques"> <b>Técnicas     </b></NavLink></li>
                                                <li ><NavLink to="/appointment"><b>Citas        </b></NavLink></li>
                                                <li ><NavLink to="/login">      <b>Iniciar      </b></NavLink></li>
                                                <li>
                                                    <form className="uk-search uk-search-navbar uk-width-1-1" onSubmit={showAppointment}>
                                                        <input id='js-modal-alert' className="uk-search-input" name="ticket" type="search"
                                                                placeholder="Ingresa tu Ticket" autoFocus/>
                                                        <button className="uk-button uk-button-default" type="submit" >Consultar</button>
                                                    </form>
                                                </li>
                                            </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);