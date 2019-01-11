import React, {Component} from 'react';
import {DatePicker} from "antd";
import TimePicker from "antd/es/time-picker";
import moment from 'moment';
import {createAppointment, createUser, getNameTech, getStylist} from "../../services";
import UIkit from 'uikit';

class MakeAppointment extends Component {

    constructor(){
        super();
        this.state = {
            stylist: {},
            nameStylist:"",
            days:[],
            techniques:[],
            showResult: false,
            showCard: true,
            ticket:"",
            user:{
                name : "",
                email : "",
                password : "",
                confirmPass : "",
                phone : "",
                rol : "CLIENTE"
            },
            appointment: {
                client: "",
                stylist: "",
                technique: "",
                coordinates: [],
                appointment: "",
                hour: "",
                price: "",
                emailTo:""
            }
        }
    }

    componentWillMount() {
        let idStylist = this.props.id, days = [], techniques=[] ;

        getStylist(idStylist)
            .then(sty => {
                days = sty.data.info.businessDays.map(day =>{
                   switch (day) {
                       case "LU":
                           return "LUNES";
                       case "MA":
                           return "MARTES";
                       case "MI":
                           return "MIERCOLES";
                       case "JU":
                           return "JUEVES";
                       case "VI":
                           return "VIERNES";
                       case "SA":
                           return "SABADO";
                       case "DO":
                           return "DOMINGO";
                       default:
                           return "LUNES";
                   }
                });
                sty.data.info.techniques.map( tech => {
                   let technique = {name:"", id:"", price:""};
                   getNameTech(tech.technique)
                       .then(async techn => {
                           if(techn.data.technique) technique.name = `${techn.data.technique.name}`;
                           else technique.name = "SN";
                           technique.id = tech.technique;
                           technique.price = tech.price;
                           techniques.push(technique);
                           this.setState({techniques});
                       });
                   return technique;
                });
                this.setState({stylist:sty.data.info,nameStylist:this.props.name,days});
            });
    }


    onChangeTime = (time, timeString) => {
        // console.log(`time ${time}`);
        // console.log(`tring ${timeString}`);
        let {appointment} = this.state;
        appointment.hour = timeString;
        this.setState({appointment})
    }

    onChangeDate = (date, dateString)  => {
        //console.log(`date ${date} , string ${dateString}`);
        let {appointment} = this.state;
        appointment.appointment = date;
        this.setState({appointment})
    }


    makeAppointment = (e) => {
        e.preventDefault();
        let {user,appointment,techniques,stylist} = this.state, obj = {};

        user.name = e.target.name.value;
        user.email = e.target.email.value;
        user.password = "12345";
        user.confirmPass = "12345";
        user.phone = e.target.phone.value;

        appointment.stylist = this.props.idUser;
        appointment.technique = e.target.technique.value;
        obj = techniques.filter(element => element.id ===  e.target.technique.value);
        appointment.price = obj[0].price;
        appointment.coordinates = stylist.locationEstablishment.coordinates;
        appointment.emailTo = e.target.email.value;

        this.setState({user});

        createUser(this.state.user)
            .then(user => {
                appointment.client = user.data.user._id;
                this.setState({appointment});
                createAppointment(this.state.appointment)
                    .then(appo => {
                        console.log(appo);
                        this.setState({showResult:true,showCard:false,ticket:appo.data.appoi.tickect});
                    })
                    .catch(err => {
                        UIkit.notification({
                            status: "danger",
                            message: "Error al crear la cita"
                        });
                    });
            })
            .catch(err => {
                UIkit.notification({
                    status: "danger",
                    message: err.response.data.msg
                });
            });

    };

    render(){
        let {stylist,nameStylist,days,techniques,showResult,ticket,showCard} = this.state;
        return(
            <div className="uk-width-expand@l uk-grid-item-match uk-flex-middle">
                <div className="uk-panel">
                    <div className="uk-margin uk-margin-auto-center uk-text-left@l uk-text-left uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade"
                        data-uk-scrollspy-class="" data-style="">
                        <div className="el-meta uk-margin uk-h5 uk-margin-remove-adjacent">Haz tu cita con:</div>
                        <h2 className="el-title uk-margin uk-h1"> {nameStylist}</h2>
                        <p>DA SERVICIO LOS DÍAS:
                        {days.length > 0 ?
                            days.map((day,ind) => <span key={ind}> - {day} - </span> ) :
                            <span>Sin horario </span>
                        }
                        </p>
                        <p>Hora de apertura: {
                            stylist.businessHours ? <strong> {stylist.businessHours.start} horas </strong> : <span> NA </span>
                        }</p>
                        <p>Hora de cierre: {
                            stylist.businessHours ? <strong> {stylist.businessHours.end} horas </strong> : <span> NA </span>
                        }</p>
                        <div className="el-content uk-margin">{/* Servicio a domicilio incluye un costo extra*/}
                            <hr className="uk-margin-large-top uk-margin-large-bottom"/>
                            {showCard ?
                            <form className="uk-form-horizontal uk-margin-large" onSubmit={this.makeAppointment} >
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-horizontal-text">Nombre</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-horizontal-text" type="text" name="name"
                                               placeholder="Nombre Completo"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-horizontal-text">Teléfono</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-horizontal-text" type="number" name="phone"
                                               placeholder="044 (55) - 0000 - 0000"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="form-horizontal-text" type="email" name="email"
                                               placeholder="email@correo.com"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-horizontal-text">Fecha</label>
                                    <div className="uk-form-controls">
                                        <DatePicker onChange={this.onChangeDate} />
                                        <TimePicker onChange={this.onChangeTime} defaultValue={moment('15:00', 'HH:mm')} format={'HH:mm'} minuteStep={10} name="hour" />
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="form-horizontal-select">Escoge tu Técnica</label>
                                    <div className="uk-form-controls">
                                        <select className="uk-select" id="form-horizontal-select" name="technique">
                                            { techniques.length > 0 ?
                                                techniques.map((ele,ind) => <option key={ind} value={ele.id} >{ele.name}</option> ) :
                                                <option>Sin técnicas</option>
                                            }
                                        </select>
                                    </div>
                                </div>
                                {/*<div className="uk-margin">
                                    <div className="uk-form-label">Ubicación</div>
                                    <div className="uk-form-controls uk-form-controls-text">
                                        <label><input className="uk-radio" type="radio" name="radio1"/> A domicilio</label><br/>
                                        <label><input className="uk-radio" type="radio" name="radio1"/> En
                                            Establecimiento</label>
                                    </div>
                                </div>*/}
                                <div className="uk-margin">
                                    <div className="uk-form-controls uk-align-right">
                                        <button type="submit" className="uk-button uk-button-primary">Agendar</button>
                                    </div>
                                </div>
                            </form> :
                            null}
                            {showResult ?
                                <div className="uk-alert-primary" data-uk-alert>
                                    <a className="uk-alert-close" data-uk-close/>
                                    <p>Su cita se generó correctamente</p>
                                    <p>Podrá consultarla con el siguiente número de ticket {ticket}</p>
                                </div> :
                            null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MakeAppointment;