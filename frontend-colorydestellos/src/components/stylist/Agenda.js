import React, {Component} from 'react';
import NavBar from "../home/NavBar";

class Agenda extends Component{

    constructor(){
        super();
        this.state = {
            name:"",
            token:""
        }
    }


    componentWillMount() {
        let name = localStorage.getItem("name");
        this.setState({name});
    }

    render(){
        let name = this.state.name.replace('"','')
        return(
            <div>
                <NavBar user="ESTILISTA"/>
                <h1>Bienvenida {name.replace('"','')}</h1>
            </div>
        );
    }
}

export default Agenda;