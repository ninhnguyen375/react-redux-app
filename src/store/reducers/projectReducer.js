const initialState = {
  projects: [],
  projectError: null
};

export default (state = initialState, { type, project, err }) => {
  switch (type) {
    case "CREATE_PROJECT":
      console.log("Create project success");
      return { ...state, projectError: null };
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", err);
      return { ...state, projectError: err };

    default:
      return state;
  }
};
