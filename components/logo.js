import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 300ms ease;
  }

  &:hover > svg {
    animation: shake 0.8s ease-in-out;
  }

  @keyframes shake {
    0%, 100% {
      transform: rotate(20deg);
    }
    25%, 75% {
      transform: rotate(-40deg);
    }
    50% {
      transform: rotate(60deg);
    }
  }
`;

const Logo = () => {
    return (
        (<Link href="/" scroll={false} >
            <LogoBox>
                <StarIcon />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    pl={1}
                >
                    Kennett Puerto
                </Text>
            </LogoBox>
        </Link>)
    );
}

export default Logo
