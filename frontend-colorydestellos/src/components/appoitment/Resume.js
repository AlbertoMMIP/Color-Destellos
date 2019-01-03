import React from 'react';

export const Resume = () => (
    <div className="uk-width-expand@l uk-grid-item-match uk-flex-middle">
        <div className="uk-panel">
            <div className="uk-margin uk-margin-auto-center uk-text-left@l uk-text-left uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                <div className="el-meta uk-margin uk-h5 uk-margin-remove-adjacent">Haz tu cita con:</div>
                <h2 className="el-title uk-margin uk-h1"> Tu estilista </h2>
                <div className="el-content uk-margin">* Servicio a domicilio incluye un costo extra
                    <hr className="uk-margin-large-top uk-margin-large-bottom"/>
                    <form className="uk-form-horizontal uk-margin-large">
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-text">Nombre</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-horizontal-text" type="text"
                                       placeholder="Nombre Completo"/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-text">Teléfono</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-horizontal-text" type="number"
                                       placeholder="044 (55) - 1234 - 1234"/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" id="form-horizontal-text" type="email"
                                       placeholder="email@correo.com"/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-text">Fecha</label>
                            <div className="uk-form-controls">
                                <input type="text" className="uk-input" data-uk-datepicker="{format:'DD.MM.YYYY'}"/>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-horizontal-select">Escoge tu Técnica</label>
                            <div className="uk-form-controls">
                                <select className="uk-select" id="form-horizontal-select">
                                    <option>Option 01</option>
                                    <option>Option 02</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-form-label">Ubicación</div>
                            <div className="uk-form-controls uk-form-controls-text">
                                <label><input className="uk-radio" type="radio" name="radio1"/> A domicilio</label><br/>
                                <label><input className="uk-radio" type="radio" name="radio1"/> En Establecimiento</label>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-form-controls uk-align-right">
                                <button type="submit" className="uk-button uk-button-primary">Agendar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);