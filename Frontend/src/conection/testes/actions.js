import {

    CREATE_TESTE,

    RETRIEVE_TESTES,

    UPDATE_TESTE,

    DELETE_TESTE,

} from "./actionTypes";

import { toast } from "react-toastify";
import TestesService from "./testesService";

export const createTeste =

    (name, idade, data_nascimento, type) => async (dispatch) => {

        try {

            const res = await TestesService.create({

                name, idade, data_nascimento, type

            });


            dispatch({

                type: CREATE_TESTE,

                payload: res.data,
                

            });

/*             toast.success('Teste adicionado com sucesso!');
 */            return Promise.resolve(res.data);
        } catch (err) {

/*             toast.error('Teste não adicionado!')
 */            return Promise.reject(err);

        }

    };

export const retrieveTestes = () => async (dispatch) => {

    try {

        const res = await TestesService.getAll();

        dispatch({

            type: RETRIEVE_TESTES,

            payload: res.data,

        });

    } catch (err) {

/*         toast.error('Teste não encontrado!');
 */        console.log(err);

    }

};

export const updateTeste = (id, data) => async (dispatch) => {

    try {

        const res = await TestesService.update(id, data);

        dispatch({

            type: UPDATE_TESTE,

            payload: res.data,

        });

/*         toast.success('Teste foi alterado com sucesso!')
 */        return Promise.resolve(res.data);

    } catch (err) {
/*         toast.error('Teste não foi alterado!')
 */        return Promise.reject(err);

    }

};

export const deleteTeste = (id) => async (dispatch) => {

    try {

        await TestesService.delete(id);

        dispatch({

            type: DELETE_TESTE,

            payload: { id },

        });

/*         toast.success('Teste Deletado com sucesso!')
 */
    } catch (err) {

/*         toast.error('Teste não foi Deletado!')
 */        console.log(err);

    }

};