import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameGenreContainer = ({ children }: Props) => {
  return (
    <Box height={"48px"} marginY={"15px"}>
      {children}
    </Box>
  );
};

export default GameGenreContainer;
