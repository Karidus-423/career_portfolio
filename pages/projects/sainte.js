import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project-components'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Sainte-adresse">
            <Container mt={8}>
                <Title>
                    Sainte-Adresse <Badge>2024</Badge>
                </Title>
                <P>
                    Color scheme for Neovim inspired by
                    &quot;The Beach at Sainte-Adresse&quot; by Claude-Monet (1867).
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Plugin </Meta>
                        Neovim
                    </ListItem>
                    <ListItem>
                        <Meta> Language </Meta>
                        <span> Lua and VimScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta> Source Code </Meta>
                        <Link href="https://github.com/Karidus-423/sainte-adresse.nvim" target='_blank'>
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="../../images/ColorScheme.png" alt="Beesual Site Image" />
                <ProjectImage src="../../images/ColorPalette.png" alt="Beesual Site Image" />
            </Container>
        </Layout>
    )
}

export default Project
