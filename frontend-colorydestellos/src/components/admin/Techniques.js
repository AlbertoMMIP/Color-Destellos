import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {TechniqueCard} from "../common/TechniqueCard";
import {createTechnique, getTechniques} from '../../services'
import UIkit from "uikit";

class Techniques extends  Component{

    constructor(){
        super();
        this.state = {
            technique:{
                name:"",
                description:"",
                imgs_url : ""
            },
            techniques:[],
            addTech:false,
            user:"CLIENTE"
        }
    }

    componentWillMount() {
        let {user} = this.state;
        user = localStorage.getItem("rol") === null ? "CLIENTE" : localStorage.getItem("rol");
        user = user.replace('"','').replace('"','');
        console.log(user);
        getTechniques()
            .then(techs => {
                this.setState({techniques: techs.data.techs,user})
            })
    };
    showForm = () => {
        let {addTech} = this.state;
        addTech = !addTech;
        this.setState({addTech});
    };

    handleChange = (e) =>{
        let {technique} = this.state;
        let field = e.target.name;
        technique[field] = e.target.files ? e.target.files[0] : e.target.value;
        this.setState({technique});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let {technique} = this.state;
        technique.imgs_url = e.target.imgs_url.files[0];
        this.setState({technique});
        console.log(this.state.technique);

        createTechnique(this.state.technique)
            .then(() => {
                UIkit.notification({
                    status: "success",
                    message: "Técnica creada correctamente"
                });
                getTechniques()
                    .then(techs => {
                        this.setState({techniques: techs.data.techs})
                    })

                this.showForm();
            })
            .catch(err => {
                UIkit.notification({
                    status: "danger",
                    message: err.response.data.msg
                });
            })
    };


    render(){
        let {techniques,addTech,user} = this.state;
        return(

            <div>
               <NavBar user={user}/>

                {user === "ADMIN" ?
                    <div className="uk-section-default">
                        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" onClick={this.showForm} >Agregar Técnica</button>
                    </div> :
                    <div className="uk-container uk-container-1 uk-text-left">
                        <h2 className="uk-margin-medium-top uk-margin-remove-bottom uk-h3">¿Que son las Técnicas?</h2>
                        <div className="uk-margin-medium-top" property="text">
                            <p className="uk-text-lead">Las técnicas son aquellos procesos que se realizan en las uñas, con las cuales se pueden generar varios diseños
                                dependiendo el gusto de las clientas.</p>

                            <p>El tiempo de colocación depende de la técnica seleccionada y al detalle que se establecerá, pude ser un procesos desde 90 minutos
                                hasta 180 minutos.</p>
                            <p>El tiempo que perdura el material depende al cuidado que se le de y a las actividades que se realicen con las manos. En promedio
                                las uñas artificiales duran 15 días.</p>
                            <p>Los precios pueden llegar a ser desde los $100.00 MXN o hasta los $1500.00 </p>
                        </div>
                        <br/>
                        <h2 className="uk-text-left uk-margin">Descripción Corta de diferentes Técnicas</h2>
                    </div>
                }

                {addTech ?
                    <div className="uk-section">
                        <div className="uk-container">
                            <form className="uk-form-stacked uk-margin-small" onSubmit={this.handleSubmit}>
                                <div className="uk-margin-right">
                                    <label className="uk-form-label" htmlFor="name">Nombre de la Técnica</label>
                                    <div className="uk-form-controls">
                                    <input className="uk-input uk-form-width-large" id="name" type="text" name="name" onChange={this.handleChange} placeholder="Nombre..."/>
                                    </div>
                                </div>
                                <div className="uk-margin-medium">
                                    <label className="uk-form-label" htmlFor="description">Descripción de la técnica</label>
                                    <textarea className="uk-textarea uk-form-width-large" id="description" name="description" rows="5" onChange={this.handleChange} placeholder="Descripción"/>
                                </div>
                                <div className="uk-margin-small">
                                    <div data-uk-form-custom="target: true">
                                    <input type="file" id="photo" name="imgs_url" onClick={this.handleChange} />
                                    <input className="uk-input uk-form-width-large" type="text" placeholder="Subir foto"/>
                                    </div>
                                </div>
                                <button className="uk-button uk-button-default">Guardar</button>
                            </form>
                        </div>
                    </div>
                    :
                    <div></div>

                }
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3@m uk-grid-small" data-uk-grid>
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