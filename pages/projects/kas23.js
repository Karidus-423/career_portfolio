import { Container, Badge, Box, Link, Button, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project-components'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="KAS 2023">
            <Container mt={8}>
                <Title>
                    A Prelimenary Study on 3D temperature Simulation and Visualization for Beehive <Badge>2023</Badge>
                </Title>
                <P>
                    Poster presented as the Kentucky Academy of Science.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Score</Meta>
                        Thoroughbred
                    </ListItem>
                    <ListItem>
                        <Meta> Scoring </Meta>
                        <Link href="https://www.kyscience.org/top_scoring_students.php" target='_blank'>
                            KAS Website <ExternalLinkIcon mx="2px" />
                        </Link>
                        <Box my={3} mx="auto" maxW={'40%'}>
                            <Button
                                leftIcon=<DownloadIcon />
                                colorScheme="green">
                                <a href={"../../kas2023.pptx"}
                                    download="kas2023.pptx">
                                    Download
                                </a>
                            </Button>
                        </Box>
                    </ListItem>
                </List>
                <ProjectImage src="../../images/kas23poster.png" alt="Beesual Site Image" />
            </Container>
        </Layout>
    )
}

export default Project
