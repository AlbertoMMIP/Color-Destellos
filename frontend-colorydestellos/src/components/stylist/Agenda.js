import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {getAppointmentbyStylist} from "../../services";
import {ItemAgenda} from "../common/ItemsAgenda";

class Agenda extends Component{

    constructor(){
        super();
        this.state = {
            name:"",
            token:"",
            estilistaID:"",
            appointments:[]
        }
    }


    componentWillMount() {
        let name = localStorage.getItem("name"),
            estilistaID = localStorage.getItem("estilistaID").replace('"','');
        this.setState({name,estilistaID});
        getAppointmentbyStylist(estilistaID.replace('"',''))
            .then(appoints => {
                this.setState({appointments:appoints.data.appoints});
            })

    }

    render(){
        let name = this.state.name.replace('"','');
        let {appointments} = this.state;
        return(
            <div>
                <NavBar user="ESTILISTA"/>
                <h3>Bienvenida {name.replace('"','')}</h3>

                <h4>Tu agenda es la siguiente</h4>
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                            {appointments.length > 0 ?
                                appointments.map((app,ind) => <ItemAgenda key={ind} appointment={app}/>)
                            :
                        null}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agenda;