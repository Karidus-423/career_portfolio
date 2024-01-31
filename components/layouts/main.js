import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-witdht, initial-scale=1" />
                <meta name="description" content="Homepage" />
                <meta name="author" content="Kennett Puerto" />
                <link rel="icon" href='/images/star-solid.svg' />
                <title>Kennett Puerto</title>
            </Head>
            <Navbar />
            <Container pt={14} maxW="container.md" maxWidth={'1080px'}>
                {children}
            </Container>
        </Box >
    )
}

export default Main

