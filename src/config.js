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
  hide_appbar: false,
  hide_api_links: false,
};

export const router_links = [
  { url: "/", name: "Home", icon: "home" },
  { url: "/login/", name: "Login", icon: "login" },
  { url: "/logout/", name: "Logout", icon: "logout" },
  { url: "/registration/", name: "Registration", icon: "manage_accounts" },
  { url: "/settings/", name: "Settings", icon: "settings" },
  { url: "/welcome/", name: "New user", icon: "help" },
  { url: "/about/", name: "About", icon: "info" },
];

export const api_links = [
  { url: "http://localhost:8000/docs/redoc/", name: "API docs (1)" },
  { url: "http://localhost:8000/docs/swagger/", name: "API docs (2)" },
  { url: "http://localhost:8000/api/habits/", name: "habits" },
  { url: "http://localhost:8000/api/profiles/", name: "profiles" },
  { url: "http://localhost:8000/api/users/", name: "users" },
  { url: "http://localhost:8000/api/days/", name: "days" },
];
