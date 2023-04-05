import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import { GoogleButtton } from 'react-google-button';



const SignIn = () => {
  const logGoogleUser = async () => {
    // const {user} = await signInWithGoogleRedirect();
    const user = await signInWithGooglePopup();
    const userDocRef=await createUserDocumentFromAuth(user);
     console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <GoogleButtton/>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
