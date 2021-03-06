import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {StylistCard} from "../common/StylistCard";
import {getStylists} from "../../services";
import MakeAppointment from "./MakeAppointment";

class Appointment extends Component{

    constructor(){
        super();
        this.state = {
            stylists: [],
            makeAppointment: false,
            stylistSelected: {
                id: "",
                idUser:"",
                name: "No existe",
                bussinessdays: ["LUNES", "MARTES", "MIERCOLES"]
            }
        }
    };
    componentWillMount(){
        getStylists()
            .then(arr => {
                this.setState({stylists:arr.data.stylists});
            })
    }
    showAppointment = (id,name,idUser) => {
        let stylistSelected = {
            id : id,
            name : name,
            idUser : idUser
        }
        this.setState({makeAppointment:true,stylistSelected});
    };

    render(){
        let {stylists,stylistSelected,makeAppointment} = this.state;
        return(

            <div>
                <NavBar user="CLIENTE"/>
                <div className="uk-section-default uk-section" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-left-medium; delay: false;">
                    <div className="uk-position-relative">
                        <div className="uk-container">
                            <div className="uk-grid-large uk-margin uk-grid" data-uk-grid="">
                                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle uk-first-column">
                                    <div className="uk-panel">
                                        <div className="uk-margin-medium uk-width-large@m uk-text-left@m uk-text-center uk-panel uk-scrollspy-inview uk-animation-slide-left-medium" data-uk-scrollspy-class="" data-style="">
                                            <h2 className="uk-margin uk-h1"> Estilistas cercanas </h2>
                                            {/* <div className="uk-margin">The map will be here</div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle">
                                    <div className="uk-panel">
                                        <div className="uk-margin uk-text-center@m uk-text-center">
                                            <div className="uk-child-width-1-1">
                                                {stylists.length > 0 ?
                                                    stylists.map(styl => <StylistCard key={styl._id} user="CLIENT" img={styl.estilistaID.profile_url} name={styl.name} idStylist={styl.estilistaID._id} idUser={styl._id} make={this.showAppointment} book={styl.estilistaID.imgsBook_url} /> ):
                                                    <div><p>Sin Estilistas registradas</p></div>
                                                }
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section" id="Schedule" >
                    <div className="uk-container" >
                        {makeAppointment ?
                            <MakeAppointment id={stylistSelected.id} name={stylistSelected.name} idUser={stylistSelected.idUser}/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Appointment;