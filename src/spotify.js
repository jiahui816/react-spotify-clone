export const authEndpoint = "https://accounts.spotify.com/authorize";
//The above pushes the authentication towards to spotify
//When the user click login. it will take the user to authEndPoint

const redirectUri = "http://localhost:3000/";
//As soon as the user login, it will bring the user back to redirectURI

const clientId = "8f2655c000e54838a4a8aa2573240ea1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//Access to scopes, https://developer.spotify.com/documentation/general/guides/scopes/
//Access to the right permission

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("="); //#access_token=keys&name=..) << go to the first one and split it in the part that we want to exclude
      initial[parts[0]] = decodeURIComponent(parts[1]);
      //go in to the initial array being return, for the access token, decode the uri token
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//After the user is authenticated, give the user a token
//%20 is a ascii character for "space"
