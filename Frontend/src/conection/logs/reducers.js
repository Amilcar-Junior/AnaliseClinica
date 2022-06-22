import {

    CREATE_LOG,
   
    RETRIEVE_LOGS,
   
    UPDATE_LOG,
   
    DELETE_LOG,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function logReducer(logs = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_LOG:
   
        return [...logs, payload];
   
      case RETRIEVE_LOGS:
   
        return payload;
   
      case UPDATE_LOG:
   
        return logs.map((log) => {
   
          if (log.id === payload.id) {
   
            return {
   
              ...log,
   
              ...payload,
   
            };
   
          } else {
   
            return log;
   
          }
   
        });
   
      case DELETE_LOG:
   
        return logs.filter(({ id }) => id !== payload.id);
   
      default:
   
        return logs;
   
    }
   
   }
   
   export default logReducer;