import React from "react";
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component {

    render() {

        return (
            <div className="topnav">
                <NavLink activeClassName="active" exact={true} to="/" >Home</NavLink>
                <NavLink activeClassName="active" to="/todos">Todos</NavLink>
                <NavLink activeClassName="active" to="/mycomponent">Mycomponent</NavLink>
                <NavLink activeClassName="active" to="/user">ListUser</NavLink>

            </div>
        )
    }

} export default Nav;