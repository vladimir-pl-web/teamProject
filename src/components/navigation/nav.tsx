import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './nav.module.scss'

const Nav = () => {
  const routeList = [
    { to: "/", name: "register" },
    { to: "/profile", name: "home" },
    { to: "/login", name: "login" },
    { to: "/passRecover", name: "recover password" },
    { to: "/test", name: "test" },
  ].map(({ to, name }) => {
    return (
      <li key={name}>
        <NavLink to={to} className={classes.RouteLink}>
          {name}
        </NavLink>
      </li>
    );
  })

  return (
    <ul className = {classes.Nav}>
      {routeList}
    </ul>
  )
}
export default Nav