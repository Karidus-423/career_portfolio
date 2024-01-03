import { Text } from '@chakra-ui/react';
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
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
            timeZone: 'America/Tegucigalpa', // Set the timezone to Honduras
        };

        return now.toLocaleTimeString('en-US', options);
    }

    return (
        <Text fontSize={'2.3rem'}>
            {time}
        </Text>
    );
};

export default Clock;

