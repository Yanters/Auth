import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const response = await createUser(email, password);
    } catch (error) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message={'Signing up...'} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
