import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import UIkit from 'uikit';
import {getInfoAppointment} from "../../services";
import moment from 'moment';
import 'moment/locale/es';

class NavBar extends Component {

    constructor(){
        super();
        this.state = {
            user:""
        }
    }

    componentWillMount() {
        let user = "";
        user = this.props.user;
        this.setState({user});
    }

    showAppointment = (e) => {
        e.preventDefault();

        getInfoAppointment(e.target.ticket.value)
            .then(res => {

                UIkit.modal.alert(`<p>Bienvenida <strong>${res.data.appoints.client.name}</strong>, tu cita esta confirmada con la siguiente información:</p>
                    <p>Estilista: <strong>${res.data.appoints.stylist.name}</strong> </p>
                    <p>El día: <strong>${moment(res.data.appoints.appointment).format("DD/MM/YYYY")}</strong></p>
                    <p>Hora de inicio: <strong> ${res.data.appoints.hour}</strong> horas </p>
                    <p>Técnica seleccionada: <strong> ${res.data.appoints.technique.name} </strong> </p>
                    <div className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-expand" data-uk-leader>Costo por la técnica   $</div>
                    <div>${res.data.appoints.price}</div>
                    </div>`)
                    .then(function () {
                    });
            })
            .catch(err => {
                UIkit.modal.alert(`Ticket no registrado en la base de datos`);
            })



    };

    render() {
        let {user} = this.state;
        return (
            <div>
                <div className="uk-hidden@l">
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
                            <a className="uk-navbar-item uk-logo" href=""><img src="images/logo.svg" width="150px"
                                                                               height="auto" alt="Color"/></a>
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
                                                        <li><NavLink to="/stylists"> Estilistas </NavLink></li>
                                                        <li><NavLink to="/techniques"> Técnicas </NavLink></li>
                                                        <li><NavLink to="/statistics"> Estadisticas </NavLink></li>
                                                        <li><NavLink to="/"> Salir </NavLink></li>
                                                    </ul> :
                                                    user === "ESTILISTA" ?
                                                        <ul className="uk-nav uk-nav-primary uk-nav-center">
                                                            <li><a href="/"> Portafolio </a></li>
                                                            <li><a href="/Home"> Agenda </a></li>
                                                            <li><a href="/Home"> Perfil </a></li>
                                                            <li><a href="/Home"> Historial </a></li>
                                                            <li><a href="/"> Salir </a></li>
                                                        </ul> :
                                                        <ul className="uk-nav uk-nav-primary uk-nav-center">
                                                            <li ><NavLink to="/"><p>Inicio</p></NavLink></li>
                                                            <li ><a href="/#About"> <b> Acerca de </b> </a></li>
                                                            <li ><NavLink to="/techniques"> <b>Técnicas </b> </NavLink></li>
                                                            <li ><NavLink to="/appointment"> <b>Citas </b></NavLink></li>
                                                            <li ><NavLink to="/login"><b>Iniciar</b></NavLink></li>
                                                            <li>
                                                                <form className="uk-search uk-search-navbar uk-width-1-1" onSubmit={this.showAppointment}>
                                                                    <input id='js-modal-alert' className="uk-search-input" type="search"
                                                                           placeholder="Consulta tu cita" autoFocus/>
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
                <div className="uk-visible@l tm-header-transparent" data-uk-header="">
                    <div data-uk-sticky="" data-media="@l" data-cls-active="uk-navbar-sticky"
                         data-sel-target=".uk-navbar-container" className="uk-sticky" data-style="">
                        <div className="uk-navbar-container uk-navbar-transparent uk-dark">
                            <div className="uk-container">
                                <nav className="uk-navbar"
                                     data-uk-navbar="{&quot;align&quot;:&quot;center&quot;,&quot;boundary&quot;:&quot;!.uk-navbar-container&quot;}">
                                    <div className="uk-navbar-left">
                                        <a href="/" className="uk-navbar-item uk-logo">
                                            <img src="images/logo.svg" width="150px" height="auto" alt="Color"/>
                                            {/*<img src = "images/Logo.png" width="250px" height="auto" className = "uk-logo-inverse" alt = "Color" />*/}
                                        </a>
                                    </div>
                                    <div className="uk-navbar-center">
                                        {user === "ADMIN" ?
                                            <ul className="uk-navbar-nav">
                                                <li><NavLink to="/stylists"> Estilistas </NavLink></li>
                                                <li><NavLink to="/techniques"> Técnicas </NavLink></li>
                                                <li><NavLink to="/statistics"> Estadisticas </NavLink></li>
                                                <li><NavLink to="/"> Salir </NavLink></li>
                                            </ul> :
                                            user === "ESTILISTA" ?
                                                <ul className="uk-navbar-nav">
                                                    <li><NavLink to="/book"> Portafolio </NavLink></li>
                                                    <li><NavLink to="/agenda"> Agenda </NavLink></li>
                                                    <li><NavLink to="/profile"> Perfil </NavLink></li>
                                                    <li><NavLink to="/historial"> Historial </NavLink></li>
                                                    <li><NavLink to="/"> Salir </NavLink></li>
                                                </ul> :
                                                <ul className="uk-navbar-nav">
                                                    <li><NavLink to="/"> <strong>Inicio</strong> </NavLink></li>
                                                    <li><a href="/#About"> <strong>Acerca de </strong> </a></li>
                                                    <li><NavLink to="/techniques"> <strong>Técnicas</strong> </NavLink>
                                                    </li>
                                                    <li><NavLink to="/appointment"> <strong>Citas</strong> </NavLink>
                                                    </li>
                                                    <li><NavLink to="/login"><strong>Iniciar</strong> </NavLink></li>
                                                </ul>
                                        }
                                    </div>
                                    <div className="uk-navbar-right">
                                        <div>
                                            <a className="uk-navbar-toggle" data-uk-icon="icon: search" href="#"/>
                                            <div className="uk-drop" data-uk-drop="mode: click; pos: left-center; offset: 0">
                                                <form className="uk-search uk-search-navbar uk-width-1-1" onSubmit={this.showAppointment} >
                                                    <input className="uk-search-input" type="search" name="ticket"
                                                           placeholder="Consulta tu cita" autoFocus/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="uk-sticky-placeholder" data-style="height: 120px; margin: 0px;" hidden=""/>
                </div>
                <div className="system-message-container"/>
            </div>
        );
    }
}

export default NavBar;