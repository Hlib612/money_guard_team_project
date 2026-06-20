
import { useState, useEffect } from 'react';

export default function HeaderHover({ dlogo1x, dlogo2x, hlogo1x, hlogo2x, hover }) {
    const [delayedHover, setDelayedHover] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (hover) {
            timeoutId = setTimeout(() => setDelayedHover(true), 300); // затримка 300мс
        } else {
            setDelayedHover(false);
        }
        return () => clearTimeout(timeoutId);
    }, [hover]);

    return (
        <img
            src={delayedHover ? hlogo1x : dlogo1x}
            srcSet={delayedHover 
                ? `${hlogo1x} 1x, ${hlogo2x} 2x` 
                : `${dlogo1x} 1x, ${dlogo2x} 2x`}
            alt="Logo"
        />
    );
}