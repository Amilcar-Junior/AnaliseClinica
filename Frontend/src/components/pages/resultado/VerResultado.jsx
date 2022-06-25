import React, { Component } from "react";

import { connect } from "react-redux";

import { Redirect, Link } from "react-router-dom";

import ResultadosService from "../../../conection/resultados/resultadosService";

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

class VerResultado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentResultado: {
        hematologia_rdw_cv: "0",
      hematologia_eritrocitos: "0",
      hematologia_hemoglobina: "0",
      hematologia_hematocrito: "0",
      hematologia_vgm: "0",
      hematologia_hgm: "0",
      hematologia_chgm: "0",
      hematologia_paquetas: "0",
      hematologia_leucocitos: "0",
      hematologia_neutrofilos: "0",
      hematologia_eosinofilos: "0",
      hematologia_basofilos: "0",
      hematologia_linfocitos: "0",
      hematologia_monocitos: "0",
      hematologia_bandas: "0",
      hematologia_a_globulos_v: "0",
      hematologia_a_hemoglobina: "0",
      hematologia_a_hematocrito: "0",
      hematologia_a_vgm: "0",
      hematologia_a_hgm: "0",
      hematologia_a_chgm: "0",
      hematologia_a_globulos_b: "0",
      hematologia_a_neutrofilos: "0",
      hematologia_a_eosinofilos: "0",
      hematologia_a_basofilos: "0",
      hematologia_a_linfocitos: "0",
      hematologia_a_monocitos: "0",
      hematologia_a_bandas: "0",
      hematologia_a_paquetas: "0",
      hematologia_b_tp: "0",
      hematologia_b_inr: "0",
      hematologia_b_pesq: "0",
      bioquimica_i_glicose: "0",
      bioquimica_i_ureia: "0",
      bioquimica_i_acido_u: "0",
      bioquimica_i_creatinina: "0",
      bioquimica_i_got: "0",
      bioquimica_i_gpt: "0",
      bioquimica_ii_ldh: "0",
      bioquimica_ii_cpk: "0",
      bioquimica_ii_ck_mb: "0",
      bioquimica_ii_troponina_i: "0",
      bioquimica_iii_sodio: "0",
      bioquimica_iii_potassio: "0",
      imunoserologia_vdrl: "",
      imunoserologia_widal: "",
      imunoserologia_a_pcr: "0",
      urina_ii_glicosuria: "0",
      urina_ii_proteinuria: "0",
      urina_ii_cetonuria: "0",
      urina_ii_sangue: "0",
      urina_ii_nitrito: "0",
      urina_ii_ph: "0",
      urina_ii_densidade: "0",
      urina_ii_celulas: "0",
      urina_ii_leucocitos: "0",
      urina_ii_eritrocitos: "0",
      observacao: "",
      data: "",
      paciente: "",
      recolha: "",
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
    this.getResultado(window.location.pathname.replace("/ver-resultado/", ""));
  }

  getResultado(id) {
    ResultadosService.get(id).then((response) => {
      this.setState({
        currentResultado: response.data,
        id: response.data.id,
      });
    });
  }

  render() {
    const { redirect, currentResultado } = this.state;
    console.log(currentResultado);
    if (redirect) {
      return <Redirect to="/list-resultado" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-resultado`}>
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
                      <h5 style={{ color: "#0EC69A" }}>Ver Dados da Resultado</h5>
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
                                {currentResultado.paciente.name}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Sexo :</strong>&nbsp;{" "}
                                {currentResultado.paciente.sexo}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Idade:</strong>&nbsp;
                                {moment().diff(
                                  currentResultado.paciente.data_nascimento,
                                  "years"
                                )}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                <strong>Contacto:</strong>&nbsp;
                                {currentResultado.paciente.telefone}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <strong>Endereço :</strong>&nbsp;{" "}
                                {currentResultado.paciente.endereco}
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <br/>
                          <h6><strong>Observação :</strong>&nbsp;{" "}
                          {currentResultado.observacao}
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
                                <strong>Resultado</strong>
                              </StyledTableCell>
                              <StyledTableCell>
                                <strong>Unidades</strong>
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>

                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_rdw_cv </TableCell>
                              <TableCell> {currentResultado.hematologia_rdw_cv}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_eritrocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_eritrocitos}</TableCell>
                              <TableCell> M/mm^2 </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_hemoglobina </TableCell>
                              <TableCell> {currentResultado.hematologia_hemoglobina}</TableCell>
                              <TableCell> g/dll </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_hematocrito </TableCell>
                              <TableCell> {currentResultado.hematologia_hematocrito}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_vgm </TableCell>
                              <TableCell> {currentResultado.hematologia_vgm}</TableCell>
                              <TableCell> fl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_hgm </TableCell>
                              <TableCell> {currentResultado.hematologia_hgm}</TableCell>
                              <TableCell> pg </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_chgm </TableCell>
                              <TableCell> {currentResultado.hematologia_chgm}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_paquetas </TableCell>
                              <TableCell> {currentResultado.hematologia_paquetas}</TableCell>
                              <TableCell> 10^3/mm^3</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_leucocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_leucocitos}</TableCell>
                              <TableCell> mm^3 </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_neutrofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_neutrofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_eosinofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_eosinofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_basofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_basofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_linfocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_linfocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_monocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_monocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_bandas </TableCell>
                              <TableCell> {currentResultado.hematologia_bandas}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_globulos_v </TableCell>
                              <TableCell> {currentResultado.hematologia_a_globulos_v}</TableCell>
                              <TableCell> xM/mm3 </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_hemoglobina </TableCell>
                              <TableCell> {currentResultado.hematologia_a_hemoglobina}</TableCell>
                              <TableCell> g/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_hematocrito </TableCell>
                              <TableCell> {currentResultado.hematologia_a_hematocrito}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_vgm </TableCell>
                              <TableCell> {currentResultado.hematologia_a_vgm}</TableCell>
                              <TableCell> fL </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_hgm </TableCell>
                              <TableCell> {currentResultado.hematologia_a_hgm}</TableCell>
                              <TableCell> pg </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_chgm </TableCell>
                              <TableCell> {currentResultado.hematologia_a_chgm}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_globulos_b </TableCell>
                              <TableCell> {currentResultado.hematologia_a_globulos_b}</TableCell>
                              <TableCell> x10&3/mm3 </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_neutrofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_a_neutrofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_eosinofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_a_eosinofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_basofilos </TableCell>
                              <TableCell> {currentResultado.hematologia_a_basofilos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_linfocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_a_linfocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_monocitos </TableCell>
                              <TableCell> {currentResultado.hematologia_a_monocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_bandas </TableCell>
                              <TableCell> {currentResultado.hematologia_a_bandas}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_a_paquetas </TableCell>
                              <TableCell> {currentResultado.hematologia_a_paquetas}</TableCell>
                              <TableCell> x10&3/mm3 </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_b_tp </TableCell>
                              <TableCell> {currentResultado.hematologia_b_tp}</TableCell>
                              <TableCell> seg </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_b_inr </TableCell>
                              <TableCell> {currentResultado.hematologia_b_inr}</TableCell>
                              <TableCell>  </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> hematologia_b_pesq </TableCell>
                              <TableCell> {currentResultado.hematologia_b_pesq}</TableCell>
                              <TableCell>  </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_glicose </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_glicose}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_ureia </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_ureia}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_acido_u </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_acido_u}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_creatinina </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_creatinina}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_got </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_got}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_i_gpt </TableCell>
                              <TableCell> {currentResultado.bioquimica_i_gpt}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_ii_ldh </TableCell>
                              <TableCell> {currentResultado.bioquimica_ii_ldh}</TableCell>
                              <TableCell> U/L </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_ii_cpk </TableCell>
                              <TableCell> {currentResultado.bioquimica_ii_cpk}</TableCell>
                              <TableCell> U/L </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_ii_ck_mb </TableCell>
                              <TableCell> {currentResultado.bioquimica_ii_ck_mb}</TableCell>
                              <TableCell> U/L </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_ii_troponina_i </TableCell>
                              <TableCell> {currentResultado.bioquimica_ii_troponina_i}</TableCell>
                              <TableCell> pg/mL </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_iii_sodio </TableCell>
                              <TableCell> {currentResultado.bioquimica_iii_sodio}</TableCell>
                              <TableCell> nmol/L </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> bioquimica_iii_potassio </TableCell>
                              <TableCell> {currentResultado.bioquimica_iii_potassio}</TableCell>
                              <TableCell> nmol/L </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> imunoserologia_vdrl </TableCell>
                              <TableCell> {currentResultado.imunoserologia_vdrl}</TableCell>
                              <TableCell>  </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> imunoserologia_widal </TableCell>
                              <TableCell> {currentResultado.imunoserologia_widal}</TableCell>
                              <TableCell>  </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> imunoserologia_a_pcr </TableCell>
                              <TableCell> {currentResultado.imunoserologia_a_pcr}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_glicosuria </TableCell>
                              <TableCell> {currentResultado.urina_ii_glicosuria}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_proteinuria </TableCell>
                              <TableCell> {currentResultado.urina_ii_proteinuria}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_cetonuria </TableCell>
                              <TableCell> {currentResultado.urina_ii_cetonuria}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_sangue </TableCell>
                              <TableCell> {currentResultado.urina_ii_sangue}</TableCell>
                              <TableCell> mg/dl </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_nitrito </TableCell>
                              <TableCell> {currentResultado.urina_ii_nitrito}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_ph </TableCell>
                              <TableCell> {currentResultado.urina_ii_ph}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_densidade </TableCell>
                              <TableCell> {currentResultado.urina_ii_densidade}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_celulas </TableCell>
                              <TableCell> {currentResultado.urina_ii_celulas}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_leucocitos </TableCell>
                              <TableCell> {currentResultado.urina_ii_leucocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableHead>
                            <TableRow>
                              <TableCell> urina_ii_eritrocitos </TableCell>
                              <TableCell> {currentResultado.urina_ii_eritrocitos}</TableCell>
                              <TableCell> % </TableCell>
                            </TableRow>
                          </TableHead>
                          <br/>
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Codigo da Recolha: {currentResultado.recolha.id}</StyledTableCell>
                              <StyledTableCell>Data Colheita: {moment(currentResultado.recolha.data).format("DD-MM-YYYY")}</StyledTableCell>
                              <StyledTableCell>Data Saida: {moment(currentResultado.data).format("DD-MM-YYYY")}</StyledTableCell>
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

export default connect(null)(VerResultado);
