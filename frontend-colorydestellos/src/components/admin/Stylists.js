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
            <div className="uk-container" >
                <NavBar user="ADMIN"/>
                <div className="uk-section">
                    <div className="uk-container">
                        <strong className="uk-align-left" >Hi {name.replace('"','')}</strong>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>

                            <div className="uk-card uk-card-default uk-card-hover uk-width-1-3@m">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="30"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>

                            <div className="uk-card uk-card-default uk-card-hover uk-width-1-3@m">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>

                            <div className="uk-card uk-card-default uk-card-hover uk-width-1-3@m">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                            <div className="uk-card uk-card-default uk-width-1-3@m uk-width-1-1@s">
                                <div className="uk-card-header">
                                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                        <div className="uk-width-auto">
                                            <img className="uk-border-circle" width="40" height="40"
                                                 src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                                        </div>
                                        <div className="uk-width-expand">
                                            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            <p className="uk-text-meta uk-margin-remove-top">
                                                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="uk-card-footer">
                                    <a href="#" className="uk-button uk-button-text">Aceptar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stylists;