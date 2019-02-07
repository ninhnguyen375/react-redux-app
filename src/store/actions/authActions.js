export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_ERROR", err });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
      dispatch({ type: "SIGNOUT_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SIGNOUT_FAIL" });
    }
  };
};

export const signUp = newUser => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      const createRes = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
      await firestore
        .collection("users")
        .doc(createRes.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      dispatch({ type: "SIGNUP_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SIGNUP_ERROR", err });
    }
  };
};

