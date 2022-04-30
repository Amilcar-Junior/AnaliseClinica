import http from "../../http";
import auth from '../../utils/auth';


class ProfileService {






  get() {
    const token = auth.getToken();
    return http.get(`/users/me/`,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });


  }


  update(id, data) {
    const token = auth.getToken();
    return http.put(`/users/${id}`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

  }

}

export default new ProfileService();