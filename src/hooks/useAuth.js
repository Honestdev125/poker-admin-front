import { useContext } from 'react';

// auth provider
import AuthContext from 'contexts/JWTContext';
// import AuthContext from 'contexts/FirebaseContext';
// import AuthContext from 'contexts/Auth0Context';
// import AuthContext from 'contexts/AWSCognitoContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('context must be use inside provider');

    return context;
};

export default useAuth;
