import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {StylistCard} from "../common/StylistCard";

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
            <div className="uk-container" >
                <NavBar user="ADMIN"/>
                <div className="uk-section">
                    <div className="uk-container">
                        <strong className="uk-align-left" >Hi {name.replace('"','')}</strong>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@l uk-grid-large uk-grid-match" data-uk-grid>
                            <StylistCard/>
                            <StylistCard/>
                            <StylistCard/>
                            <StylistCard/>
                            <StylistCard/>
                            <StylistCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stylists;