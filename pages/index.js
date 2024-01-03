import { Container, Box } from '@chakra-ui/react'
import MediumSmallPage from '../components/medium_small'
import Layout from '../components/layouts/article'
import LargePage from '../components/large'

const Page = () => {
    return (
        <Layout>
            <Container maxW={{ base: '60ch', lg: 'container.lg' }}>
                <Box display={{ base: 'block', lg: 'none' }}>
                    <MediumSmallPage />
                </Box>

                <Box mt={8} display={{ base: 'none', lg: 'block' }}>
                    <LargePage />
                </Box>
            </Container>
        </Layout>
    )
}
export default Page
