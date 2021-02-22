import React from "react";
import { useCookies } from "react-cookie";
import Nav from "react-bootstrap/Nav";

export default function Favorites() {
  const [cookies, setCookie] = useCookies(["email"]);

  if (cookies.email) {
    return <Nav.Link href="/favorites">My favorites</Nav.Link>;
  } else {
    return null;
  }
}
