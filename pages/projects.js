import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Beesual from '../public/images/Beesual.png'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout>
            <Container mt={8}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid colums={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="beesual" title="Beesual" thumbnail={Beesual}>
                            Beehive temperature visualizer.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
