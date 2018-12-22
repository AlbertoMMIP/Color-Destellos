import React from 'react';

const NavBar = ({user}) =>(
            <div>
                <div className="tm-header-mobile uk-hidden@l">
                    <nav className="uk-navbar-container uk-navbar" data-uk-navbar="">
                        <div className="uk-navbar-left">
                            <a className="uk-navbar-toggle" href="#tm-mobile" data-uk-toggle="">
                                <div uk-navbar-toggle-icon="" className="uk-navbar-toggle-icon uk-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon">
                                        <rect y="9" width="20" height="1"></rect>
                                        <rect y="3" width="20" height="1"></rect>
                                        <rect y="15" width="20" height="1"></rect>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="uk-navbar-center">
                            <a className="uk-navbar-item uk-logo" href="/">
                                LOGO
                            </a>
                        </div>
                    </nav>
                    <div id="tm-mobile" className="uk-modal-full uk-modal" data-uk-modal="">
                        <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-height-viewport">
                            <button className="uk-modal-close-full uk-close uk-icon" type="button" data-uk-close="">
                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"
                                     data-svg="close-icon">
                                    <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                                    <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                                </svg>
                            </button>
                            <div className="uk-margin-auto-vertical uk-width-1-1">
                                <div className="uk-child-width-1-1 uk-grid uk-grid-stack" data-uk-grid="">
                                    <div>
                                        <div className="uk-panel" id="module-0">
                                            <ul className="uk-nav uk-nav-primary uk-nav-center">
                                                <li className="uk-active"><a href="/">Inicio</a></li>
                                                <li><a href="/Home">Acerca de</a></li>
                                                <li><a href="/Home">Técnicas</a></li>
                                                <li><a href="/Home">Citas</a></li>
                                                <li><a href="/login">Iniciar</a></li>
                                                <li>
                                                    <div className="uk-navbar-item">
                                                        <form>
                                                            <input className="uk-input uk-form-width-small" type="text" placeholder="Consulta tu cita"/>
                                                        </form>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tm-header uk-visible@l tm-header-transparent" data-uk-header = "">
                    <div data-uk-sticky = "" data-media = "@l"  data-cls-active = "uk-navbar-sticky" data-sel-target = ".uk-navbar-container" className="uk-sticky" data-style = "" >
                        <div className = "uk-navbar-container uk-navbar-transparent uk-dark" >
                            <div className = "uk-container" >
                                <nav className = "uk-navbar"  data-uk-navbar = "{&quot;align&quot;:&quot;center&quot;,&quot;boundary&quot;:&quot;!.uk-navbar-container&quot;}" >
                                    <div className = "uk-navbar-left" >
                                        <a href = "/" className = "uk-navbar-item uk-logo" >
                                            {<img src = "images/logobw.png" width="150px" height="auto" alt = "Color" />
                                                /*<img src = "images/Logo.png" width="250px" height="auto" className = "uk-logo-inverse" alt = "Color" />*/}
                                        </a>
                                    </div>
                                    <div className="uk-navbar-center">
                                        {user === "ADMIN" ?
                                            <ul className="uk-navbar-nav">
                                                <li className="uk-active"><a href = "/stylists" > Estilistas </a></li>
                                                <li><a href = "/techniques" > Técnicas </a></li>
                                                <li><a href = "/statistics" > Estadisticas </a></li>
                                                <li><a href = "/" > Salir </a></li>
                                            </ul> :
                                            user === "ESTILISTA" ?
                                                <ul className="uk-navbar-nav">
                                                    <li className="uk-active"><a href = "/" > Portafolio </a></li>
                                                    <li><a href = "/Home" > Agenda </a></li>
                                                    <li><a href = "/Home" > Perfil </a></li>
                                                    <li><a href = "/Home" > Historial </a></li>
                                                    <li><a href = "/" > Salir </a></li>
                                                </ul> :
                                                    <ul className="uk-navbar-nav">
                                                        <li className="uk-active"><a href = "/" > Inicio </a></li>
                                                        <li><a href = "/Home" > Acerca de </a></li>
                                                        <li><a href = "/Home" > Técnicas </a></li>
                                                        <li><a href = "/Home" > Citas </a></li>
                                                        <li><a href="/login">Iniciar</a></li>
                                                        <li>
                                                            <div className="uk-navbar-item">
                                                                <form>
                                                                    <input className="uk-input uk-form-width-small" type="text" placeholder="Consulta tu cita"/>
                                                                </form>
                                                            </div>
                                                        </li>
                                                    </ul>
                                        }
                                    </div>
                                    <div className="uk-navbar-right">
                                        <div className="uk-navbar-item" id="module-tm-1">
                                            <div className="custom">
                                                <ul className="uk-grid-small uk-flex-inline uk-flex-middle uk-flex-nowrap uk-grid" data-uk-grid="">
                                                    <li className="uk-first-column">
                                                        <a href="https://youtube.com/" className="uk-icon-link uk-icon" data-target="_blank" data-uk-icon="youtube">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="youtube">
                                                                <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://instagram.com/" className="uk-icon-link uk-icon" data-target="_blank" data-uk-icon="instagram">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="instagram">
                                                                <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                                                                <circle cx="14.87" cy="5.26" r="1.09"></circle>
                                                                <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className = "uk-sticky-placeholder" data-style = "height: 120px; margin: 0px;" hidden = "" > </div>
                </div>
                <div className="system-message-container"></div>
            </div>
        );

export default NavBar;