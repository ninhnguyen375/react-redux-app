const initialState = {
  authError: null
};

export default (state = initialState, { type, err }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      console.log(err);
      return { ...state, authError: err };
    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return { ...state };
    case "SIGNOUT_FAIL":
      console.log("sign out fail");
      return { ...state };
    case "SIGNUP_SUCCESS":
      console.log("sign up success");
      return { ...state, signupError: null };
    case "SIGNUP_ERROR":
      console.log("sign up error", err);
      return { ...state, signupError: err };
    default:
      return state;
  }
};
