import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { loginUser } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const signinHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const response = await loginUser(email, password);
      authCtx.authenticate(response);
    } catch (error) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={'Signing in...'} />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
