import { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import {Navigate,useLocation} from 'react-router-dom';

const Protected = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace />
};

export default Protected;