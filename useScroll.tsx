import { useEffect, useState } from "react";

/**
 * @author Costin
 * @returns object
 */

const MAX_HISTORY_STACK = 5;

const useScroll = () => {
    const [val, setVal] = useState(0);
    const [scrollBuffer, setScrollBuffer] = useState([] as number[]);
    const [direction, setDirection] = useState('');

    const scrollFn = (e: any) => {
        const scrollVal = window.scrollY;
        const floatVal = parseFloat(scrollVal.toFixed(2));
        setVal(floatVal);
        
        setScrollBuffer((prev) => {
            if (prev.length >= MAX_HISTORY_STACK) {
                prev.pop();
            }

            return [scrollVal, ...prev];
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollFn);
        return () => window.removeEventListener('scroll', scrollFn);
    }, []);

    useEffect(() => {
        setDirection(scrollBuffer[0] < scrollBuffer[1] ? 'up' : 'down');
    }, [scrollBuffer]);

    return {
        y: val,
        direction: direction,
    }
}

export default useScroll;
