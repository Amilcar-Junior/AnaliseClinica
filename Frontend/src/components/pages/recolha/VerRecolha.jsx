import React, { Component } from "react";

import { connect } from "react-redux";

import { Redirect, Link } from "react-router-dom";

import RecolhasService from "../../../conection/recolhas/recolhasService";

import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFF3E0",

    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

class VerRecolha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecolha: {
        hematologia: false,
        heamatologia_a: false,
        hematologia_b: false,
        bioquimica_i: false,
        bioquimica_ii: false,
        bioquimica_iii: false,
        imunoserologia: false,
        urina_ii: false,
        imunoserologia_a: false,
        tipo: "",
        data: "",
        assinatura: "",
        outro: "",
        paciente: "",
        dados_clinicos: "",
      },

      redirect: false,
      user: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.getRecolha(window.location.pathname.replace("/ver-recolha/", ""));
  }

  getRecolha(id) {
    RecolhasService.get(id).then((response) => {
      this.setState({
        currentRecolha: response.data,
        id: response.data.id,
      });
    });
  }

  render() {
    const { redirect, currentRecolha } = this.state;
    console.log(currentRecolha);
    if (redirect) {
      return <Redirect to="/list-recolha" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="end" />
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-recolha`}>
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
                      <h5 style={{ color: "#0EC69A" }}>Ver Dados da Recolha</h5>
                      <strong style={{ color: "red" }}>{currentRecolha.tipo}</strong>
                      <br />
                      <br />

                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 100 }}
                          size="small"
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>
                                <strong>Paciente :</strong> &nbsp;{" "}
                                {currentRecolha.paciente.name}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Sexo :</strong>&nbsp;{" "}
                                {currentRecolha.paciente.sexo}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Idade:</strong>&nbsp;
                                {moment().diff(
                                  currentRecolha.paciente.data_nascimento,
                                  "years"
                                )}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <strong>Contacto:</strong>&nbsp;
                                {currentRecolha.paciente.telefone}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Endereço :</strong>&nbsp;{" "}
                                {currentRecolha.paciente.endereco}
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <br/>
                          <h6><strong>Dados Clinicos :</strong>&nbsp;{" "}
                                  {currentRecolha.dados_clinicos}
                                  </h6>
                                  
                                
                          <TableBody>
                            <TableCell align="right">&nbsp;</TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right"> </TableCell>
                          </TableBody>
                        </Table>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>
                                <strong>Análise </strong>{" "}
                              </StyledTableCell>
                              <StyledTableCell>
                                <strong>Check</strong>
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>

                          <TableHead>
                            <TableRow>
                              <TableCell> Hematologia </TableCell>
                              <TableCell>{currentRecolha.hematologia === true && (
                            <i class="fas fa-check"></i>
                            )}
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Hematologia A </TableCell>
                              <TableCell>{currentRecolha.heamatologia_a === true && (
                            <i class="fas fa-check"></i>
                            )}</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Hematologia B </TableCell>
                              <TableCell>
                              {currentRecolha.hematologia_b === true && (
                            <i class="fas fa-check"></i>
                            )}
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Bioquimica i </TableCell>
                              <TableCell>
                              {currentRecolha.bioquimica_i === true && (
                            <i class="fas fa-check"></i>
                            )}</TableCell>
                              
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Bioquimica II </TableCell>
                              <TableCell>{currentRecolha.hematologia === true && (
                            <i class="fas fa-check"></i>
                            )}{currentRecolha.bioquimica_ii}</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Bioquimica III </TableCell>
                              <TableCell>{currentRecolha.bioquimica_iii === true && (
                            <i class="fas fa-check"></i>
                            )}</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Imunoserologia </TableCell>
                              <TableCell>
                              {currentRecolha.imunoserologia === true && (
                            <i class="fas fa-check"></i>
                            )}
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Urina II </TableCell>
                              <TableCell>{currentRecolha.urina_ii === true && (
                            <i class="fas fa-check"></i>
                            )}</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> Imunoserologia A </TableCell>
                              <TableCell>{currentRecolha.imunoserologia_a === true && (
                            <i class="fas fa-check"></i>
                            )}</TableCell>
                            </TableRow>
                          </TableHead>
                          
                          <br/>
                          <strong>Outro: </strong>{currentRecolha.outro}
                          <br/>
                          <br/>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell><strong>Assinatura: </strong>{currentRecolha.assinatura} </StyledTableCell>
                              <StyledTableCell><strong>Data Recolha: </strong>{moment(currentRecolha.data).format("DD-MM-YYYY")}</StyledTableCell>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </TableContainer>
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

export default connect(null)(VerRecolha);
