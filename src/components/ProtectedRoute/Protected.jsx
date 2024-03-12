import { useContext } from 'react';
import { AuthContext } from '../Context/ContextApi';
import {Navigate,useLocation} from 'react-router-dom';
import Loader from '../Loader/Loader';

const Protected = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    
    if(loading){
        return <Loader/>
    } else if (user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace />;
};

export default Protected;