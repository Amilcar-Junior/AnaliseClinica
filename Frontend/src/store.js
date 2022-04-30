import { configureStore } from "@reduxjs/toolkit";
import pacienteReducer from "./conection/pacientes/reducers";
import profileReducer from "./conection/profile/reducers";

export default configureStore({

 reducer: {

   pacientes: pacienteReducer,
   users: profileReducer,


 },

});

