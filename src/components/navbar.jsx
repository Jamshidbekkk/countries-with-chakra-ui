import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Select, Input, Container, InputGroup, InputLeftElement } from "@chakra-ui/react"

const Navbar = () => {

  return (
    <Box py="48px">
      <Container width="100%" maxWidth="1280px">
        <Flex justifyContent="space-between" alignItems="center">
            <Box >
                <InputGroup w="480px" size="lg" fontSize="14px" fontWeight="400" lineHeight="20px" color="#848484">
                    <InputLeftElement pointerEvents="none" ps="32px" pe="25px" >
                        <SearchIcon />
                    </InputLeftElement>
                    <Input placeholder="Search for a country ..." fontSize="14px" fontWeight="400" lineHeight="20px" color="#848484" />
                </InputGroup>
            </Box>
            <Select placeholder='Filter by Region' width="200px" size="lg" fontSize="14px" fontWeight="400" lineHeight="20px" color="#848484">
                <option value='option1'>Africa</option>
                <option value='option2'>America</option>
                <option value='option3'>Asia</option>
                <option value='option3'>Europe</option>
                <option value='option3'>Oceania</option>
            </Select>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
