export const api_url = "/api/";

export const default_theme = {
  dark: true,
  hide_appbar: true,
  hide_api_links: false,
};

export const router_links = [
  { url: "/", name: "Home", icon: "home" },
  { url: "/welcome/", name: "Welcome", icon: "help" },
  { url: "/habits/", name: "Habits", icon: "home" },
  { url: "/settings/", name: "Settings", icon: "settings" },
  { url: "/about/", name: "About", icon: "info" },
];

export const api_links = [
  { url: "https://github.com/0djentd/alprou", name: "Source code" },
  { url: "http://localhost:8000/docs/redoc/", name: "API docs (1)" },
  { url: "http://localhost:8000/docs/swagger/", name: "API docs (2)" },
  { url: "http://localhost:8000/api/habits/", name: "habits" },
  { url: "http://localhost:8000/api/profiles/", name: "profiles" },
  { url: "http://localhost:8000/api/users/", name: "users" },
  { url: "http://localhost:8000/api/days/", name: "days" },
];
