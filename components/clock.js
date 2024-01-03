import { Text, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(getFormattedTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getFormattedTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function getFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    return (
        <Box ml={6} mt={8}>
            <Text fontSize={'2.3rem'}>
                {time}
            </Text>
        </Box>
    )
};

export default Clock;

