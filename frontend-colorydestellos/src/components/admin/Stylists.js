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
                        <div className="uk-child-width-1-2@l uk-grid-large uk-grid-match" data-uk-grid>
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80"/>
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                            <StylistCard user="ADMIN" img="https://images.unsplash.com/photo-1503066375319-00fef06b159e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1032&q=80"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stylists;