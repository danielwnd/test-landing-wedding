import { useLayoutEffect, useState } from "react";

const useClientComponents = () => {
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        if(typeof window !== 'undefined') {
            setIsClient(true);
        }
    },[]);

    return isClient;
}

export default useClientComponents;