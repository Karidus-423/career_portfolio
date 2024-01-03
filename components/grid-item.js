import NextLink from 'next/link'
import Image from 'next/image'
import { Global } from '@emotion/react'
import { Box, Text, LinkOverlay, LinkBox } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign={"center"}>
        <Linkbox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </Linkbox>

    </Box>
)

export const ProjectGridItem = ({
    children,
    category = 'projects',
    id,
    title,
    thumbnail,
}) => (
    <Box w="100%" textAlign={"center"}>
        <LinkBox
            as={NextLink}
            href={`/${category}/${id}`}
            scroll={false}
            cursor="pointer"
        >
            <Image
                src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder="blur"
            />
            <LinkOverlay as="div" href={`/${category}/${id}`}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}> {children} </Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail { 
            border-radius:12px;
            }
        `}
    />
)
