import {IGenre} from "./IGenre";
import {ICompany} from "./ICompany";
import {ICountry} from "./ICountry";
import {ILanguage} from "./ILanguage";

export interface ISingleMovie {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: any,
  budget: number,
  genres: IGenre[]
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ICompany[]
  production_countries: ICountry[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ILanguage[],
  status: string,
  tagline: string,
  title: string,
  video: any,
  vote_average: number,
  vote_count: number,
}
