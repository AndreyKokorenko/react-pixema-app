import axios from "axios";
import { IMovieAPI, IMovieDetailsAPI, Param } from "types";
import { IParams } from "store";

class MovieAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL as string;
  private readonly API_KEY = process.env.REACT_APP_MOVIE_API_KEY as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly words = [
    "Batman",
    "War",
    "love",
    "money",
    "friends",
    "Thor",
    "avengers",
    "women",
    "star",
    "man",
  ];

  private readonly getRandomWord = (words: string[]) => {
    const random = (Math.random() * this.words.length) | 0;
    const randomWord = words[random];
    return randomWord;
  };

  public async getByTitle(title: string): Promise<IMovieAPI> {
    const params = {
      [Param.Search]: title,
      [Param.Page]: 1,
    };

    const { data } = await this.API.get<IMovieAPI>("", { params });
    return data;
  }

  public async getByFilters(param: IParams): Promise<IMovieAPI> {
    const params = {
      [Param.Search]: param.title,
      [Param.Page]: param.page,
      [Param.Type]: param.filters.type,
      [Param.Year]: param.filters.year,
    };

    const { data } = await this.API.get<IMovieAPI>("", { params });
    return data;
  }

  public async getDetailsByID(imdbID: string) {
    const params = {
      i: imdbID,
    };
    const { data } = await this.API.get<IMovieDetailsAPI>("", {
      params,
    });

    return data;
  }

  public getTrends = async (year: string) => {
    const params = {
      s: this.getRandomWord(this.words),
      y: year,
    };

    const { data } = await this.API.get<IMovieAPI>(this.API_KEY, { params });

    return data;
  };
}

export const movieAPI = new MovieAPI();
