import { List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </List>
  );
};

export default GenreList;
