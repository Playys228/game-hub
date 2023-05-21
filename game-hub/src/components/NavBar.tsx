import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={'30px'} margin={'3px'}></Image>
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar