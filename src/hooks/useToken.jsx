import { useState } from "react";
import { useEffect } from "react";

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://hospital-server-code.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.accessToken) {
                        localStorage.setItem('accessToken', data?.accessToken);
                        setToken(data?.accessToken)
                    }
                })
        }
    }, [email]);
    return [token]

}

export default useToken;