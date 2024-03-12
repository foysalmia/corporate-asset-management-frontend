import { userUrl } from '@/Utilies/Url';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext(null);

const ContextApi = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(()=>{
        if(accessToken){
            fetch(userUrl,{
                method : 'GET',
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': 'application/json',
                },

            })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const info = {user,setUser,loading,setLoading};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;