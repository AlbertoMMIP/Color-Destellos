import React from 'react';

export const Instruccions = () => (
    <div className="uk-section-muted uk-section uk-section-small" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
        <div className="uk-position-relative">
            <h3>¿Como agendar tu cita?</h3>
            <div className="uk-container uk-container-large">
                <div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid="" data-uk-height-match="target: .uk-card; row: false">
                    <div className="uk-width-1-1@m uk-first-column">
                        <div className="uk-margin uk-text-center@m uk-text-center">
                            <div className="uk-child-width-1-1 uk-child-width-1-4@m uk-grid-match uk-grid" data-uk-grid="">
                                <div className="uk-first-column">
                                    <div className="el-item uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                                        <h1 className="el-title uk-margin uk-heading-primary uk-margin-remove-adjacent"> - 1 - </h1>
                                        <div className="el-meta uk-margin uk-h4">Tus Datos</div>
                                        <div className="el-content uk-margin"> Ingresa tu <br/> Nombre y Teléfono </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="el-item uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade"  data-uk-scrollspy-class="" data-style="">
                                        <h1 className="el-title uk-margin uk-heading-primary uk-margin-remove-adjacent"> - 2 - </h1>
                                        <div className="el-meta uk-margin uk-h4">La Fecha</div>
                                        <div className="el-content uk-margin">Selecciona que día deseas que se te coloquen tus uñas <br/> Fecha y Hora</div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="el-item uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                                        <h1 className="el-title uk-margin uk-heading-primary uk-margin-remove-adjacent"> - 3 - </h1>
                                        <div className="el-meta uk-margin uk-h4">La Técnica</div>
                                        <div className="el-content uk-margin">Selecciona la Técnica que quieres<br/> Del catálogo o sube tu diseño</div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="el-item uk-card uk-card-default uk-card-large uk-card-body uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                                        <h1 className="el-title uk-margin uk-heading-primary uk-margin-remove-adjacent"> - 4 - </h1>
                                        <div className="el-meta uk-margin uk-h4">El Lugar</div>
                                        <div className="el-content uk-margin">Escoge donde se te colocarán tus uñas <br/> En el establecimiento o servicio a domicilio</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p><a className="uk-button btn" href="#team" data-uk-scroll="">Agenda tu cita</a></p>
            </div>
            <div className="tm-section-title uk-position-center-left uk-position-medium uk-text-nowrap uk-visible@xl">
                <div className="tm-rotate-180">Save up to 45%</div>
            </div>
        </div>
    </div>
);