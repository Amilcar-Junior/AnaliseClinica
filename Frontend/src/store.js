import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./conection/pacientes/reducers";


export default configureStore({

 reducer: {


   pacientes: pacienteReducer,
   

 },

});

