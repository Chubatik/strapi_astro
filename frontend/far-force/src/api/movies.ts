import type { Movie } from "../types/movie";
import fetchApi from "./strapi";

type MoviesResponse = Base<Movie>;

export const getMovies = async () => await fetchApi<MoviesResponse[]>({
  endpoint: "movies?populate=*",
  wrappedByKey: "data",
});