import React, {Component} from 'react';
import NavBar from "../home/NavBar";

class Appoitment extends Component{
    render(){
        return(
            <div>
                <NavBar user="CLIENTE"/>
                <h1>Agenda tu Cita</h1>
            </div>
        );
    }
}

export default Appoitment;