import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1"> Not Found </Heading>
            <Text> The page you where looking for does not exist.</Text>
            <Divider my={6} />
            <Box>
                <Button as={NextLink} href="/" colorScheme='teal'>
                    Go to Home Page
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound
