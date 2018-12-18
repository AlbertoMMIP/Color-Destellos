import React, {Component} from 'react';
import '../../../node_modules/uikit/dist/js/uikit-icons.min';

class Login extends Component{
    render(){
        return(
            <div  >
                <h1>Color & Destellos</h1>
                <form>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon" data-uk-icon="icon: user"/>
                            <input className="uk-input" type="text"/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"/>
                            <input className="uk-input" type="text"/>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <button className="uk-button uk-button-default" >Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;