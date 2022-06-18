import http from "../../http";
import auth from '../../utils/auth';

class UtilizadoresService { 

 getAll() {
  const token = auth.getToken();
   return http.get("/users",
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

 }

 get(id) {
   const token = auth.getToken();
   return http.get(`/users/${id}`,
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
   );

 }

 create(data) {
  const token = auth.getToken();
   return http.post("/users", data,
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
   );

 }

 update(id, data) {
  const token = auth.getToken();
   return http.put(`/users/${id}`, data,
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
   );

 }

 delete(id) {
  const token = auth.getToken();
   return http.delete(`/users/${id}`,
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
   );

 }

}

export default new UtilizadoresService();