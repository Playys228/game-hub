import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={GameQuery}></GameHeading>
          <Flex gap="2" marginBottom={2}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
              selectedPlatform={GameQuery.platform}
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
              sortOrder={GameQuery.sortOrder}
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
