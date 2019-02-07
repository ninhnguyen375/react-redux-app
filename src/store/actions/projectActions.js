import moment from "moment";

export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const { profile, auth } = getState().firebase;
    try {
      await firestore.collection("projects").add({
        title: project.title,
        content: project.content,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: auth.uid,
        createAt: moment().format()
      });
      dispatch({
        type: "CREATE_PROJECT",
        project
      });
    } catch (err) {
      dispatch({
        type: "CREATE_PROJECT_ERROR",
        err
      });
    }
  };
};
