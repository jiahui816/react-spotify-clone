export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing
  // token:
  //"BQDQpok4hsYo1Z1ZL8rTi1pE2JOO2bNH1YID5UHUuFNUkeE2rjDKRuMgYryFtpx2gvnNlg5Twc5A7Nu3qmjJssjOvrhQ7KLZUmjrIXvssabZjQwcPBS3DoiHeWVqcPJTFGf_96xGHtntXvV9NQ-ca6LVHBNTu5w",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
