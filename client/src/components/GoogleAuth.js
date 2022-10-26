import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

let auth;
// eslint-disable-next-line no-shadow
function GoogleAuth({ isSignedIn, signIn, signOut }) {
  // eslint-disable-next-line no-shadow
  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) signIn(auth.currentUser.get().getId());
    else signOut();
  };

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '446988413383-3l9hodm4egr15t8icns6r9edqtu1p8m7.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  if (isSignedIn === null) {
    return null;
  }

  return isSignedIn ? (
    <button
      onClick={onSignOutClick}
      type="button"
      className="ui red google button"
    >
      <i className="google icon" />
      Sign Out
    </button>
  ) : (
    <button
      onClick={onSignInClick}
      type="button"
      className="ui red google button"
    >
      <i className="google icon" />
      Sign In with Google
    </button>
  );
}

const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
