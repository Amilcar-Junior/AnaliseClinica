import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./conection/logs/reducers";
import pacienteReducer from "./conection/pacientes/reducers";
import profileReducer from "./conection/profile/reducers";
import recolhaReducer from "./conection/recolhas/reducers";
import resultadoReducer from "./conection/resultados/reducers";
import testeReducer from "./conection/testes/reducers";
import utilizadorReducer from "./conection/utilizadores/reducers";

export default configureStore({

 reducer: {

   pacientes: pacienteReducer,
   users: profileReducer,
   testes: testeReducer,
   utilizadores: utilizadorReducer,
   profile: profileReducer,
   logs: logReducer,
   recolhas: recolhaReducer,
   resultados: resultadoReducer,
   
 },

});

