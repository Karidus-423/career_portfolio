import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { CircleOption } from './icons/circle'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { useRouter } from 'next/router'

const LinkItem = ({ href, target, children, ...props }) => {
    const router = useRouter();
    const active = router.pathname === href
    const inactiveColor = useColorModeValue('hsl(180, 12%, 5%)', 'hsl(180, 12%, 95%)')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'hsl(180,10%,72%)' : undefined}
            color={active ? 'hsl(180, 12%, 5%)' : inactiveColor}
            borderRadius={5}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('hsla(180, 10%, 72%, 0.6)', 'hsla(330, 11%, 33%,0.6)')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'initial'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        <CircleOption>Projects</CircleOption>
                    </LinkItem>
                    <LinkItem href="https://drive.google.com/file/d/1SjE7s4Vi4iJU7mjcapinmnzeJKLyA8Ov/view?usp=sharing" path={path}>
                        <CircleOption>Resume</CircleOption>
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/Karidus-423/career_portfolio"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id='navbar-menu' backgroundColor={useColorModeValue('hsl(192, 12%, 8%)', 'hsl(192, 12%, 92%)')}>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList >
                                <MenuItem as={MenuLink} href="/projects">
                                    <CircleOption> Projects </CircleOption>
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://drive.google.com/file/d/1SjE7s4Vi4iJU7mjcapinmnzeJKLyA8Ov/view?usp=sharing">
                                    <CircleOption> Resume </CircleOption>
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://github.com/Karidus-423/career_portfolio">
                                    Source Code
                                </MenuItem>
                            </MenuList>

                        </Menu>

                    </Box>
                </Box>
            </Container>
        </Box >
    )
}

Navbar.displayName = 'Navber';

export default Navbar
