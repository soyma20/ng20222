import {environment} from "../../environments/environment";

export const {API} = environment

export const urls = {
  movies:`${API}/discover/movie`,
  movie:`${API}/movie`,
  genres: `${API}/genre/movie/list`

}


