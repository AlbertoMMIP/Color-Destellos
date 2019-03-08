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
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
                    {appointments.length > 0 ?
                        appointments.map((app,ind) => <ItemAgenda key={ind} appointment={app}/>)
                     :
                    null}
                </div>
            </div>
        );
    }
}

export default Agenda;