import {environment} from "../../environments/environment";

export const {API} = environment

export const urls = {
  auth:`${API}/auth`,
  users: `${API}/users`,
  cars:`${API}/cars`,
}


