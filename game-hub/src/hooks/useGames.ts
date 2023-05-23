import { useEffect, useState } from "react"
import {CanceledError} from 'axios'
import apiClient from "../services/api-client";
import useData from "./UseData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";


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

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', [gameQuery], { params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}})
  



export default useGames