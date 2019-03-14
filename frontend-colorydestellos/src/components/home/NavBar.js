import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import UIkit from 'uikit';
import {getInfoAppointment} from "../../services";
import moment from 'moment';
import 'moment/locale/es';
import { NavBarMovil } from './NavBarMovil';

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
                let fecha = res.data.appoints.appointment.toString().substring(0,10);
                fecha = moment(fecha).format('LL');
                UIkit.modal.alert(`<p>Bienvenida <strong>${res.data.appoints.client.name}</strong>, tu cita esta confirmada con la siguiente información:</p>
                    <p>Estilista: <strong>${res.data.appoints.stylist.name}</strong> </p>
                    <p>El día: <strong>${fecha}</strong></p>
                    <p>Hora de inicio: <strong> ${res.data.appoints.hour}</strong> horas </p>
                    <p>Técnica seleccionada: <strong> ${res.data.appoints.technique.name} </strong> </p>
                    <div className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-expand" data-uk-leader>Costo por la técnica   $</div>
                    <div>${res.data.appoints.price}</div>
                    </div>
                    <p>Servicio en : <strong> ${res.data.appoints.serviceAt} </strong> </p>`)
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
                    <NavBarMovil user={user} showAppointment={this.showAppointment} ></NavBarMovil>
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
                                                    <li><NavLink to="/appointment"> <strong>Agendar</strong> </NavLink>
                                                    </li>
                                                    <li><NavLink to="/login"><strong>Ingresar</strong> </NavLink></li>
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