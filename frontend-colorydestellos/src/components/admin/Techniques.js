import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {TechniqueCard} from "../common/TechniqueCard";
import {getTechniques} from '../../services'

class Techniques extends  Component{

    constructor(){
        super();
        this.state = {
            techniques:[]
        }
    }

    componentWillMount() {
        getTechniques()
            .then(techs => {
                console.log(techs.data.techs);
                this.setState({techniques: techs.data.techs})
            })
    }

    render(){
        let {techniques} = this.state;
        return(

            <div>
               <NavBar user="ADMIN"/>
                <div className="uk-section-default">
                    <h4>Agreagar Técnica</h4>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                            {techniques.length > 0 ?
                                techniques.map(technique => <TechniqueCard key={technique._id} technique={technique} />) :
                                <p>Sin técnicas cargadas</p>
                            }

                        </div>
                    </div>
                </div>
           </div>
        );
    };
};

export default Techniques;