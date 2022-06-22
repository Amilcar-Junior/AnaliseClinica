import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./conection/logs/reducers";
import pacienteReducer from "./conection/pacientes/reducers";
import profileReducer from "./conection/profile/reducers";
import testeReducer from "./conection/testes/reducers";
import utilizadorReducer from "./conection/utilizadores/reducers";

export default configureStore({

 reducer: {

   pacientes: pacienteReducer,
   users: profileReducer,
   testes: testeReducer,
   utilizadores: utilizadorReducer,
   profile: profileReducer,
   logs: logReducer
   
 },

});

