export const api_url = "/api/";

export function get_authorization_or_redirect() {
  // console.log("Trying to get authorization str");
  const token = localStorage.getItem("token");
  if (token == null) {
    // console.log("No token");
    window.location.href = "/login";
  }
  const authorization = "Token " + token;
  // console.log('Authorization: "' + authorization + '"');
  return authorization;
}

export const default_theme = {
  dark: false,
  compact: true,
  hide_appbar: false,
  hide_api_links: false,
};
