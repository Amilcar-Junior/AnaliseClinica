import {

    CREATE_LOG,

    RETRIEVE_LOGS,

    UPDATE_LOG,

    DELETE_LOG,

} from "./actionTypes";

import { toast } from "react-toastify";
import LogsService from "./logsService";

export const createLog =

    (data, tipo, user) => async (dispatch) => {

        try {

            const res = await LogsService.create({

                data, tipo, user

            });


            dispatch({

                type: CREATE_LOG,

                payload: res.data,
                

            });

/*             toast.success('Log adicionado com sucesso!');
 */            return Promise.resolve(res.data);
            
        } catch (err) {

/*             toast.error('Log não adicionado!')
 */            return Promise.reject(err);
            

        }

    };

export const retrieveLogs = () => async (dispatch) => {

    try {

        const res = await LogsService.getAll();

        dispatch({

            type: RETRIEVE_LOGS,

            payload: res.data,

        });

    } catch (err) {

/*         toast.error('Log não encontrado!');
 */        console.log(err);

    }

};

export const updateLog = (id, data) => async (dispatch) => {

    try {

        const res = await LogsService.update(id, data);

        dispatch({

            type: UPDATE_LOG,

            payload: res.data,

        });

/*         toast.success('Log foi alterado com sucesso!')
 */        return Promise.resolve(res.data);

    } catch (err) {
/*         toast.error('Log não foi alterado!')
 */        return Promise.reject(err);

    }

};

export const deleteLog = (id) => async (dispatch) => {

    try {

        await LogsService.delete(id);

        dispatch({

            type: DELETE_LOG,

            payload: { id },

        });

/*         toast.success('Log Deletado com sucesso!')
 */
    } catch (err) {

/*         toast.error('Log não foi Deletado!')
 */        console.log(err);

    }

};