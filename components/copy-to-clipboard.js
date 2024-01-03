import { CheckIcon } from '@chakra-ui/icons';
import { useColorModeValue, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Clip = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = children;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    return (
        <div>
            <div onClick={copyToClipboard} style={{ cursor: 'pointer', display: 'inline-flex' }}>
                <Box color={useColorModeValue('hsl(219, 100%, 50%)', 'hsl(323, 100%, 69%)')}>
                    {children}
                </Box>
                {isCopied &&
                    <Box ml={5} >
                        <CheckIcon mr={1} />
                        <Text>Copied!</Text>
                    </Box>
                }
            </div>
        </div >
    );
};

export default Clip;

