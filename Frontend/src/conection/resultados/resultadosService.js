import http from "../../http";

class ResultadosService{

 getAll() {

   return http.get("/resultados");

 }

 get(id) {

   return http.get(`/resultados/${id}`);

 }

 create(data) {

   return http.post("/resultados", data);

 }

 update(id, data) {

   return http.put(`/resultados/${id}`, data);

 }

 delete(id) {

   return http.delete(`/resultados/${id}`);

 }

}

export default new ResultadosService();