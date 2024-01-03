import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/font'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
