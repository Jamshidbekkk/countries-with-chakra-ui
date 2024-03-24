import { MoonIcon } from '@chakra-ui/icons'
import { Heading, Container, Flex, Box } from '@chakra-ui/react'
import { useColorMode, Button } from "@chakra-ui/react";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // const bgColor = useColorModeValue("gray.100", "gray.800");
    // const textColor = useColorModeValue("gray.800", "gray.100");


  return (
    <Box boxShadow="lg" pt="23px" pb="24px">
      <Container width="100%" maxWidth="1280px" >
        <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="24px" color="#111517" fontWeight="800" textColor>Where in the world?</Heading>
            <Flex justifyContent="space-between" alignItems="center">
                <MoonIcon w={15} h={14} mr="11px"></MoonIcon>
                <Button as="h3" fontSize="16px" fontWeight="600px" onClick={toggleColorMode}> {colorMode === "light" ? "Dark Mode" : "Light Mode"} </Button>
            </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
