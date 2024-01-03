import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project-components'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Beesual">
            <Container mt={8}>
                <Title>
                    Beesual <Badge>2023 ~ </Badge>
                </Title>
                <P>
                    3D Beehive Visualization Tool for monitoring and analyzing of temperature
                    patterns inside a beehive.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Web Based</Meta>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack </Meta>
                        <span> Plotly, Dash, Python</span>
                    </ListItem>
                    <ListItem>
                        <Meta> Source Code </Meta>
                        <Link href="https://www.github.com/Karidus-423/Bee_Hive_Webapp">
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="../../images/PCBdesign.png" alt="Beesual Site Image" />
                <ProjectImage src="../../images/Beesual.png" alt="Beesual Site Image" />
            </Container>
        </Layout>
    )
}

export default Project
