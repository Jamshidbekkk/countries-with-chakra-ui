import { Box, Card, CardBody, Image, Stack, Heading, Text, Container, Flex } from "@chakra-ui/react"
import germanyFlag from "../assets/images/germany-flag.png"
import usaFlag from "../assets/images/usa-flag.png"
import brazilFlag from "../assets/images/brazil-flag.png"
import icelandFlag from "../assets/images/iceland-flag.png"
import afghanistanFlag from "../assets/images/afghanistan-flag.png"
import alandIslandsFlag from "../assets/images/alandIslands-flag.png"
import albaniaFlag from "../assets/images/albania-flag.png"
import algeriaFlag from "../assets/images/algeria-flag.png"


const CardMain = () => {
  return (
    <Box>
        <Container width="100%" maxWidth="1280px">
            <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" >
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={germanyFlag} w="267px" h="160px" />
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Germany</Heading>
                            <Text>
                                Population: 81,770,900
                            </Text>
                            <Text >
                                Region: Europe
                            </Text>
                            <Text >
                                Capital: Berlin
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={usaFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>USA</Heading>
                            <Text>
                                Population: 323,947,000
                            </Text>
                            <Text >
                                Region: Americas
                            </Text>
                            <Text >
                                Capital: Washington DC
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={brazilFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Brazil</Heading>
                            <Text>
                                Population: 206,135,893
                            </Text>
                            <Text >
                                Region: Americas
                            </Text>
                            <Text >
                                Capital: Brasilia
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={icelandFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Iceland</Heading>
                            <Text>
                                Population: 81,770,900
                            </Text>
                            <Text >
                                Region: Europe
                            </Text>
                            <Text >
                                Capital: Dublin
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px'mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={afghanistanFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Germany</Heading>
                            <Text>
                                Population: 27,657,145
                            </Text>
                            <Text >
                                Region: Asia
                            </Text>
                            <Text >
                                Capital: Kabul
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={alandIslandsFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Germany</Heading>
                            <Text>
                                Population: 28,875
                            </Text>
                            <Text >
                                Region: Europe
                            </Text>
                            <Text >
                                Capital: Mariehamn
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={albaniaFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Albania</Heading>
                            <Text>
                                Population: 2,886,026
                            </Text>
                            <Text >
                                Region: Europe
                            </Text>
                            <Text >
                                Capital: Tirana
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='264px' mb="67px" pb="46px">
                    <CardBody px="0" pt="0">
                        <Image src={algeriaFlag} w="267px" h="160px"/>
                        <Stack mt='6' spacing='3' pl="24px">
                            <Heading size='md'>Algeria</Heading>
                            <Text>
                                Population: 40,400,900
                            </Text>
                            <Text >
                                Region: Africa
                            </Text>
                            <Text >
                                Capital: Algiers
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex>
        </Container>
    </Box>
  )
}

export default CardMain
