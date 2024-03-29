import { useState } from "react"
import { useEffect } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://hospital-server-code.vercel.app/users/checkIsAdmin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data?.isAdmin);
                    setAdminLoading(false);
                })
        }
    }, [email]);
    return [isAdmin,adminLoading];
}

export default useAdmin;