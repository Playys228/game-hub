import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameGenreSkeleton = () => {
  return (
    <Card height={"100%"}>
      <Skeleton borderRadius={8} />
      <HStack>
        <SkeletonCircle boxSize={"48px"} padding={"auto, 0"} />
        <SkeletonText />
      </HStack>
    </Card>
  );
};

export default GameGenreSkeleton;
