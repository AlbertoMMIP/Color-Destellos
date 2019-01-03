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
                        <div className="uk-navbar-right">
                            <a className="uk-navbar-item uk-logo" href=""><img src="images/logobw.png" width="150px" height="auto" alt="Color"/></a>
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
                                                <li><a href="/#About">Acerca de</a></li>
                                                <li><a href="/techniques">Técnicas</a></li>
                                                <li><a href="/appoitment">Citas</a></li>
                                                {/*<li><a href="/login">Iniciar</a></li>*/}
                                                <li>
                                                    <form className="uk-search uk-search-navbar uk-width-1-1">
                                                        <input className="uk-search-input" type="search" placeholder="Consulta tu cita" autoFocus/>
                                                    </form>
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
                                                        <li><a href = "/#About" > Acerca de </a></li>
                                                        <li><a href = "/techniques" > Técnicas </a></li>
                                                        <li><a href = "/appoitment" > Citas </a></li>
                                                        <li><a href="/login">Iniciar</a></li>
                                                    </ul>
                                        }
                                    </div>
                                    <div className="uk-navbar-right">
                                        <div>
                                            <a className="uk-navbar-toggle" uk-icon="icon: search" href="#"/>
                                            <div className="uk-drop" data-uk-drop="mode: click; pos: left-center; offset: 0">
                                                <form className="uk-search uk-search-navbar uk-width-1-1">
                                                    <input className="uk-search-input" type="search" placeholder="Consulta tu cita" autoFocus/>
                                                </form>
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