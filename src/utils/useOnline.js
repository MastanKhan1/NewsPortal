
import { useState, useEffect } from "react";

const useOnline = ()=>{
    const handleIsOnline = ()=>{
        setOnline(true);
    }

    const handleOffline = ()=>{
        setOnline(false);
    }

    const [isOnline, setOnline] = useState(true);
    

    useEffect(()=>{
        window.addEventListener('online', handleIsOnline());
        window.addEventListener('offline', handleOffline());
    }, [])

   return(
    ()=>{
        window.removeEventListener(
            'online', handleIsOnline()   
        )
        window.removeEventListener(
            'offline', handleOffline()
        )
    }
   )
   return isOnline;

}

export default useOnline;