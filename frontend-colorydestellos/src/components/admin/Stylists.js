import React, {Component} from 'react';
import NavBar from "../home/NavBar";

class Stylists extends Component{
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    componentWillMount() {
        let name = localStorage.getItem("name");
        this.setState({name});
    }
    render(){
        let name = this.state.name.replace('"','');
        return(
            <div>
                <NavBar user="ADMIN"/>
                <h1>Hi {name.replace('"','')}</h1>
            </div>
        );
    }
}

export default Stylists;