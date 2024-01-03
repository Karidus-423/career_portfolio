import { Container, List, ListItem, Box, Heading, Link, Image, useColorModeValue, Grid, GridItem, ListIcon } from '@chakra-ui/react'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa"
import { Meta } from '../components/project-components'
import Section, { SectionRight } from '../components/section'
import { ExternalLinkIcon, TimeIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Clip from './copy-to-clipboard'
import UpdateClock from './clock'

const LargePage = () => {
    return (
        <Container maxW="900px">
            <Grid
                h='20rem'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(7, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={4}>
                    <Box display={{ lg: 'flex' }} alignItems={'center'}>
                        <Box
                            flexShrink={0}
                            mt={{ base: 4, md: 0 }}
                            mr={{ lg: 10 }}
                            ml={{ lg: 2 }}
                            align="left"
                            display={'inline-flex'}>
                            <Image
                                borderColor={useColorModeValue("hsl(180, 10%, 28%)", "hsl(180, 10%, 72%)")}
                                borderWidth={5}
                                borderStyle="double"
                                maxWidth="150px"
                                display="inline-block"
                                borderRadius="full"
                                src='/images/Profile_Pic.png'
                                alt="Profile Image"
                            />
                        </Box>
                        <Box flexGrow={1} align="left" display={'inline-block'}>
                            <Heading as="h2" variant="page-title">
                                Kennett Puerto
                            </Heading>
                            <p> Computer Science </p>
                            <p> Undergraduate Research Assistant</p>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} margin={3} alignSelf={'center'} pt={4}>
                    <SectionRight>
                        <Box borderRadius="lg"
                            color={useColorModeValue('hsl(180, 12%, 95%)', 'hsl(180, 12%, 5%)')}
                            bg={useColorModeValue('hsl(180, 10%, 28%)', 'hsl(180, 10%, 72%)')} p={3} align="center">
                            Welcome to my portfolio website!
                        </Box>
                    </SectionRight>
                </GridItem>
                <GridItem colSpan={4} maxW={'60ch'} >
                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            About
                        </Heading>
                        <p> Kennett is currently working as an undergraduate research assistant
                            with developing data visualization tools and developing hardware
                            to collect such data. On his off time he likes studying Japanese,
                            contributing to open source projects and reading.
                        </p>
                    </Section>
                    <Section delay={0.3}>
                        <Heading as="h3" variant="section-title">
                            Bio
                        </Heading>
                        <BioSection>
                            <BioYear>2002</BioYear>
                            Born in Tegucigalpa, Honduras
                        </BioSection>

                        <BioSection>
                            <BioYear>2020</BioYear>
                            Started college at Kentucky State University
                        </BioSection>

                        <BioSection>
                            <BioYear>2023</BioYear>
                            Undergraduate Research Assistant
                        </BioSection>
                    </Section>
                </GridItem>
                <GridItem ml={4} colSpan={3} rowSpan={10} alignItems={'center'}>
                    <SectionRight delay={0.6}>
                        <Heading as={"h2"} variant="time-zone">
                            <TimeIcon /> Time in Honduras
                        </Heading>
                        <Box mt={5} ml={5}>
                            <UpdateClock>
                                00:00:00
                            </UpdateClock>
                        </Box>
                    </SectionRight>
                </GridItem>
                <GridItem colSpan={3} rowSpan={10}>
                    <Section>
                        <Heading>
                            Contact Information
                        </Heading>
                        <List>
                            <ListItem>
                                <Box>
                                    <ListIcon as={EmailIcon} />
                                    <Meta> E-mail </Meta>
                                </Box>
                                <Clip>kennettdev1@gmail.com</Clip>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    <ListIcon as={FaLinkedin} />
                                    <Meta> LinkedIn </Meta>
                                </Box>
                                <Link href="https://www.linkedin.com/in/kennettpuerto/">
                                    kennettpuerto <ExternalLinkIcon mx="2px" />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    <ListIcon as={FaGithubAlt} />
                                    <Meta> Github </Meta>
                                </Box>
                                <Link href='https://github.com/Karidus-423'>
                                    Karidus-423
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                </GridItem>
            </Grid>
        </Container >
    )

}


export default LargePage
