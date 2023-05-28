import React, {useState, useEffect} from 'react';

interface CountdownProps {
    nb: number;
    onDone: () => void;
}

const CountdownComponent: React.FC<CountdownProps> = ({nb, onDone}) => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        setTimer(30);
    }, [nb]);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);

            if (timer === 0) {
                onDone();
            }
        }, 1000);


        return () => {
            clearInterval(countdown);
        };
    }, [nb, timer, onDone]);

    return (
        <div>
            Temps restant : {timer} s
        </div>
    );
};

export default CountdownComponent;