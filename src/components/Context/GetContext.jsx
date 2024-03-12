import { useContext } from 'react';
import { AuthContext } from './ContextApi';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getAuth = () => useContext(AuthContext);