import { Box, Container, Heading, Image, Link, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { EmailIcon, ExternalLinkIcon, TimeIcon } from '@chakra-ui/icons'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { Meta } from './project-components'
import Clip from './copy-to-clipboard'

const MediumSmallPage = () => {
    return (
        <Container maxW="container.md">
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                color={useColorModeValue('hsl(180, 12%, 95%)', 'hsl(180, 12%, 5%)')}
                bg={useColorModeValue('hsl(180, 10%, 28%)', 'hsl(180, 10%, 72%)')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Welcome to my portfolio website!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Kennett Puerto
                    </Heading>
                    <p> Computer Science </p>
                    <p> Undergraduate Research Assistant</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center">
                    <Image
                        borderColor={useColorModeValue("hsl(180, 10%, 28%)", "hsl(180, 10%, 72%)")}
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src='/images/Profile_Pic.png'
                        alt="Profile Image"
                    />
                </Box>
            </Box>
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
            <Section delay={0.6}>
                <Heading as={"h2"} variant="time-zone">
                    <TimeIcon /> Time in Honduras
                </Heading>
                <div class="cleanslate w24tz-current-time w24tz-large" style="display: inline-block !important; visibility: hidden !important; min-width:300px !important; min-height:145px !important;"><p><a href="//24timezones.com/Honduras/time" style="text-decoration: none" class="clock24" id="tz24-1704245826-cc12955-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMSIsInNob3dzZWNvbmRzIjoiMCIsImNvbnRhaW5lcl9pZCI6ImNsb2NrX2Jsb2NrX2NiNjU5NGJhNDIwNWU3NSIsInR5cGUiOiJkYiIsImxhbmciOiJlbiJ9" title="Time - Honduras" target="_blank">Honduras time</a></p><div id="clock_block_cb6594ba4205e75"></div></div>
                <script type="text/javascript" src="//w.24timezones.com/l.js" async></script>
            </Section>
            <Section delay={0.4}>
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
        </Container>
    )
}
export default MediumSmallPage

