import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('hsl(192, 12%, 92%)', 'hsl(192, 12%, 8%)')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': (props) => ({
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('hsl(17, 12%, 48%)', 'hsl(17, 12%, 52%)')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            })
        }
    },
    Link: {
        baseStyle: (props) => ({
            color: mode('hsl(219, 100%, 50%)', 'hsl(323, 100%, 69%)')(props),
            textUnderlineOffset: 3
        })
    }
};

const fonts = {
    heading: "'Kanit'"
}

const colors = {
    lightteal: 'hsl(180, 10%, 72%)',
    darkteal: 'hsl(180, 10%, 28%)',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme

