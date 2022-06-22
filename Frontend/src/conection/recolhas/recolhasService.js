import http from "../../http";

class RecolhasService{

 getAll() {

   return http.get("/recolhas");

 }

 get(id) {

   return http.get(`/recolhas/${id}`);

 }

 create(data) {

   return http.post("/recolhas", data);

 }

 update(id, data) {

   return http.put(`/recolhas/${id}`, data);

 }

 delete(id) {

   return http.delete(`/recolhas/${id}`);

 }

}

export default new RecolhasService();