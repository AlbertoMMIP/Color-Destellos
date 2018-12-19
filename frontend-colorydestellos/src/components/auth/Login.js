import React, {Component} from 'react';
import {login} from "../../services";

class Login extends Component{

    constructor(){
        super();
        this.state = {
            user:{
                email:"",
                password:""
            }
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        login(this.state.user, this.props.history);
    }

    render(){
        let {email, password} = this.state;
        return(
            <div  >

                <form onSubmit={this.handleSubmit}>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon" uk-icon="icon: user"/>
                            <input className="uk-input" type="email" onChange={this.handleChange} value={email} name="email" />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"/>
                            <input className="uk-input" type="password" onChange={this.handleChange} value={password} name="password" />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <button className="uk-button uk-button-default" type="submit" >Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;