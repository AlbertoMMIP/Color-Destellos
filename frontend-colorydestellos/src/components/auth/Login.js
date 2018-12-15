import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import '../../'

class Login extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <form>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                            <input className="uk-input" type="text"/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                            <input className="uk-input" type="text"/>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <button className="uk-button uk-button-default" >Entrar</button>
                        </div>
                    </div>
                    <span data-uk-icon="heart"></span>
                </form>
            </div>
        );
    }
}
export default Login;