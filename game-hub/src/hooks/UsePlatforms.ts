import platforms from "../data/platforms";
import useData from "./UseData";

interface Platform {
  id: number;
  name: string;
  slug: string
}

const usePlatforms = () =>({data: platforms, error: null, isLoading: false})

export default usePlatforms;