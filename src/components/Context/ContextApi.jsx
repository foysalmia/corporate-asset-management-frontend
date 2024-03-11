import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

const ContextApi = ({children}) => {
    const [user,setUser] = useState(null);
    const info = {user,setUser}
    console.log(user);
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;