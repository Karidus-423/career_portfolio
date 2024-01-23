import { Container, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Beesual from '../public/images/Beesual.png'
import kas23poster from '../public/images/kas23poster.png'

const Projects = () => {
    return (
        <Layout>
            <Container mt={8}>
                <Heading as="h2" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid colums={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="beesual" title="Beesual" thumbnail={Beesual}>
                            Beehive temperature visualizer
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Posters
                </Heading>
                <SimpleGrid columns={[1, 2, 1]} gap={6}>
                    <Section>
                        <ProjectGridItem id="kas23" title="KAS Poster 2023" thumbnail={kas23poster}>
                            Awarded highest score of Thoroughbred
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout >
    )
}

export default Projects
