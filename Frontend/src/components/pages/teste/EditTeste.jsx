import React, { Component } from "react";

import { connect } from "react-redux";

import { updateTeste } from "../../../conection/testes/actions";

import { Redirect, Link } from "react-router-dom";

import TestesService from "../../../conection/testes/testesService";


class EditTeste extends Component {
    constructor(props) {
        super(props);

        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.saveTeste = this.saveTeste.bind(this);

        this.state = {
            
            currentTeste: {               
                name: "",
                idade: "",
                data_nascimento: "",
                type: false,
            },
            
            redirect: false,
        };
    }

    componentDidMount() {
        this.getTeste(window.location.pathname.replace("/edit-teste/", ""));
    }

    onChangeBi(e) {
        const bi = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    bi: bi,
                },
            };
        });
    }
    onChangeName(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    name: name,
                },
            };
        });
    }
    onChangeData_nascimento(e) {
        const data_nascimento = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    data_nascimento: data_nascimento,
                },
            };
        });
    }
    onChangeIdade(e) {
        const idade = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    idade: idade,
                },
            };
        });
    }
    onChangeType(e) {
        const type = !this.state.currentTeste.type;

        this.setState(function (prevState) {
            return {
                currentTeste: {
                    ...prevState.currentTeste,

                    type: type,
                },
            };
        });
        console.log(this.state.currentTeste.type)
    }

    


    getTeste(id) {
        TestesService.get(id).then((response) => {
            this.setState({
                currentTeste: response.data,
                id: response.data.id
            });
        });
    }

    async saveTeste() {
        
        this.props

            .updateTeste(
                this.state.currentTeste.id,
                this.state.currentTeste
            )

            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
        console.log(this.state.currentTeste)
    }

    render() {
        const { redirect, currentTeste } = this.state;
        console.log(currentTeste)
        if (redirect) {
            return <Redirect to="/list-teste" />;
        }

        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="end"/>
                        <div className="col-1">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <Link to={`${process.env.PUBLIC_URL}/list-teste`}>
                                        <i class="fas fa-arrow-left" /> Voltar
                                    </Link>

                                </span>

                            </div>
                        </div>
                        <div className="end" />
                        <div className="col-lg-12">
                            <form>
                                <div className="submit-form">
                                    <div className="ask-inputs">
                                        <div className="row">
                                            <h5 style={{ color: "#0EC69A" }}>Editar Dados do Teste</h5>

                                            <div className="col-lg-7">
                                                <h6 htmlFor="nome">Nome <strong style={{ color: "red" }}>*</strong></h6>

                                                <input
                                                maxlength="30"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    required
                                                    value={currentTeste.name}
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
                                                    value={currentTeste.idade}
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
                                                    value={currentTeste.data_nascimento}
                                                    onChange={this.onChangeData_nascimento}
                                                    name="data_nascimento"
                                                />
                                            </div>
                                            
                                                <div className="col-lg-1">
                                                <h6 htmlFor="type">Type <strong style={{ color: "red" }}>*</strong></h6>
                                                {this.state.currentTeste.type ?(
                                                <input
                                                    type="checkbox"
                                                    checked="checked"
                                                    className="form-control"
                                                    id="type"
                                                    required
                                                    value={currentTeste.type}
                                                    onChange={this.onChangeType}
                                                    name="type"
                                                />
                                                ):( <input
                                                    type="checkbox"
                                                    className="form-control"
                                                    id="type"
                                                    required
                                                    value={currentTeste.type}
                                                    onChange={this.onChangeType}
                                                    name="type"
                                                />
                                                )}
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="center">
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}/list-teste`}
                                                        onClick={this.saveTeste}
                                                        className="btn-second"
                                                    >
                                                        Editar
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

export default connect(null, { updateTeste })(EditTeste);
