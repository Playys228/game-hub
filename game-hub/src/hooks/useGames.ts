import { useEffect, useState } from "react"
import {CanceledError} from 'axios'
import apiClient from "../services/api-client";
import useData from "./UseData";
import { Genre } from "./useGenres";


export interface Game {
  id: number,
  name: string,
  background_image: string,
  parent_platforms: {platform: Platform}[];
  metacritic: number
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[]
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', [selectedGenre?.id], { params: {genres: selectedGenre?.id}})
  



export default useGames