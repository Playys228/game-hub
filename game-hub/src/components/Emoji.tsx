import thumbsUp from "../assets/I wanna beat your ebalo.png";
import aim from "../assets/aim.png";
import angry from "../assets/angry_emoji.png";
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return <div>Emoji</div>;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: angry, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "meh", boxSize: "25px" },
    5: { src: aim, alt: "meh", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={2}></Image>;
};

export default Emoji;
