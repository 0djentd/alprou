export const api_url = "/api/";

export const default_theme = {
  dark: true,
  hide_appbar: true,
  hide_api_links: false,
};

export const router_links = [
  {
    requires_authentication: false,
    no_auth: true,
    url: "/",
    name: "Home",
    icon: "home",
  },
  {
    requires_authentication: false,
    no_auth: false,
    url: "/welcome/",
    name: "Welcome",
    icon: "help",
  },
  {
    requires_authentication: true,
    no_auth: false,
    url: "/habits/",
    name: "Habits",
    icon: "home",
  },
  {
    requires_authentication: true,
    no_auth: false,
    url: "/settings/",
    name: "Settings",
    icon: "settings",
  },
  {
    requires_authentication: false,
    no_auth: false,
    url: "/about/",
    name: "About",
    icon: "info",
  },
];

export const api_links = [
  { url: "https://github.com/0djentd/alprou", name: "Source code" },
  { url: "/docs/redoc/", name: "API docs (1)" },
  { url: "/docs/swagger/", name: "API docs (2)" },
  { url: "/api/habits/", name: "habits" },
  { url: "/api/profiles/", name: "profiles" },
  { url: "/api/users/", name: "users" },
  { url: "/api/days/", name: "days" },
];
