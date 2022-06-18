import React, { Component } from "react";

import { connect } from "react-redux";

import { createTeste } from "../../../conection/testes/actions";

import { Redirect, Link } from "react-router-dom";


class AddTeste extends Component {
    constructor(props) {
        super(props);

        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.saveTeste = this.saveTeste.bind(this);

        this.state = {
    
            name: "",
            idade: "",
            data_nascimento: "",
            type: false,

            redirect: false,
        };
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeIdade(e) {
        this.setState({
            idade: e.target.value,
        });
    }
    onChangeData_nascimento(e) {
        this.setState({
            data_nascimento: e.target.value,
        });
    }
    onChangeType(e) {
        this.setState({
            type: !this.state.type,
        });
        
    }


    async saveTeste() {

        const {name, idade, data_nascimento, type} = this.state;
        console.log(this.state);
        

        this.props
            .createTeste(name, idade, data_nascimento, type)
            .then(() => {
                this.setState({
                   
                    name: "",
                    idade: "",
                    data_nascimento: "",
                    // type: false,
                    
                    /* redirect: true, */

                });
            })
            .catch((err) => console.log(err.response));
            
    }

    render() {
        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/list-teste" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                    <div className="end" />
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-teste`}>
                                        <i class="fas fa-arrow-left" /> Voltar
                                    </Link>

                                </span>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="end" />
                            <form>
                                <div className="submit-form">

                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#0EC69A" }}>Adicionar Teste</h5>
                                            
                                            <div className="col-lg-7">
                                                <h6 htmlFor="nome">Nome <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                maxlength="30"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    required
                                                    value={this.state.name}
                                                    onChange={this.onChangeName}
                                                    name="name"
                                                />
                                            </div>
                                            <div className="col-lg-2">
                                                <h6 htmlFor="nome">Idade <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                maxlength="30"
                                                    type="number"
                                                    className="form-control"
                                                    id="idade"
                                                    required
                                                    value={this.state.idade}
                                                    onChange={this.onChangeIdade}
                                                    name="idade"
                                                />
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 htmlFor="data_nascimento">Data Nascimento <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    id="data_nascimento"
                                                    required
                                                    value={this.state.data_nascimento}
                                                    onChange={this.onChangeData_nascimento}
                                                    name="data_nascimento"
                                                />
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 htmlFor="type">Type <strong style={{ color: "red" }}>*</strong></h6>
                                                <input
                                                    type="checkbox"
                                                    className="form-control"
                                                    id="type"
                                                    required
                                                    value={this.state.type}
                                                    onChange={this.onChangeType}
                                                    name="type"
                                                />
                                            </div>
                                            

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        onClick={this.saveTeste}
                                                        className="btn-second"
                                                    >
                                                        Adicionar
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="end" />
            </>
        );
    }
}

export default connect(null, { createTeste })(AddTeste);
