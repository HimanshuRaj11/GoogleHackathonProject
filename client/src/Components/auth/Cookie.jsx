import Cookie from "js-cookie";

export function SetCookie(cookieName, usrin) {
  Cookie.set(cookieName, usrin, {
    expires: 1,
    // secure: true,
    sameSite: "strict",
    path: "/",
  });
}
export function GetCookie(cookieName) {
  const Cookies = Cookie.get(cookieName);
  if (Cookies) {
    return Cookies;
  } else {
    return null;
  }
}

export function RemoveCookie(cookieName) {
  Cookie.remove(cookieName);
}
