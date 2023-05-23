import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";
import GameGenreContainer from "./GameGenreContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [...Array(15).keys()];
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={1}>
        Genres
      </Heading>
      <List>
        {isLoading
          ? skeletons.map((_) => (
              <ListItem key={_}>
                <GameGenreContainer>
                  <GameGenreSkeleton></GameGenreSkeleton>
                </GameGenreContainer>
              </ListItem>
            ))
          : data.map((genre) => (
              <ListItem key={genre.id}>
                <GameGenreContainer key={genre.id}>
                  <HStack>
                    <Image
                      boxSize={"48px"}
                      borderRadius={8}
                      src={getCroppedImageUrl(genre.image_background)}
                      objectFit={"cover"}
                    ></Image>
                    <Button
                      whiteSpace="normal"
                      textAlign="left"
                      fontWeight={
                        genre.id === selectedGenre?.id ? "bold" : "normal"
                      }
                      onClick={() => onSelectGenre(genre)}
                      variant="link"
                      fontSize="l"
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </GameGenreContainer>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default GenreList;
