import axios from "axios";

//Fetch categories (need restaurant_id)
// export const signUpUser = data => dispatch => {
//   axios.post("http://api.virqueue.com/earlyauth/signup", data).then(res => {
//     return res;
//   });
// };

export function signUpUser(data) {
  const user = axios
    .post("http://api.virqueue.com/earlyauth/signup", data)
    .then(res => {
      const response = {
        message: res.data.message,
        status: res.status
      };
      return response;
    })
    .catch(err => {
      const error = {
        message: err.response.data.message,
        status: err.response.status
      };
      return error;
    });

  return user;
}
