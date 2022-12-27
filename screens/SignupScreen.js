import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={'Signing up...'} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
