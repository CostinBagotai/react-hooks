import { useEffect, useState } from "react";

/**
 * @author Costin
 * @returns object
 */

const useScroll = () => {
    const [val, setVal] = useState(0);

    const scrollFn = (e: any) => {
        setVal(window.scrollY || window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollFn);
        return () => window.removeEventListener('scroll', scrollFn);
    }, []);

    return {
        y: val
    }
}

export default useScroll;