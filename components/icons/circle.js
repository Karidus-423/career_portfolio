import styled from "@emotion/styled"
import { Text } from "@chakra-ui/react"
const NavOption = styled.span`
display: inline-flex;
align-items: center;
float: left;
> svg {
    transition: 200ms ease;
}

&:hover > svg {
    transform: rotate(180deg);
}
`

export const CircleOption = ({ props, children }) => {
    return (
        <NavOption>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 44 43" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.609 24.2515C43.956 30.8728 41.6585 37.3608 37.2219 42.2881L28.8127 34.7164C31.2411 32.0193 32.4987 28.468 32.3088 24.8437C32.1188 21.2194 30.4969 17.8189 27.7998 15.3905C25.1027 12.962 21.5514 11.7044 17.9271 11.8943C14.3028 12.0843 10.9023 13.7062 8.47387 16.4033L0.0646421 8.83161C4.50125 3.90426 10.7135 0.941142 17.3349 0.594133C23.9562 0.247124 30.4442 2.54463 35.3715 6.98126C40.2989 11.4179 43.262 17.6301 43.609 24.2515ZM14.6285 30.0187C17.0911 32.2361 20.8848 32.0372 23.1021 29.5747C25.3194 27.1121 25.1206 23.3183 22.658 21.101C20.1955 18.8837 16.4017 19.0825 14.1844 21.5451C11.9671 24.0077 12.1659 27.8014 14.6285 30.0187Z" />
            </svg>
            <Text paddingLeft={2}>{children}</Text>
        </ NavOption >

    )
}
