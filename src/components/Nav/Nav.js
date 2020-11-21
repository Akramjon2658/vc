import React from "react";
import "./nav.css";
// import "./nav.scss"
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

function Nav({search, setSearch, ...props}){
    return <nav className="navbar navbar-expand-lg navbar-light">
    <i className="fas fa-align-justify"></i>
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Поиск" onChange={(e) => setSearch(e.target.value)} />
        <i className="fas fa-search"></i>
        <div className="dropdown">
            <a className="btn bg-white dropdown-toggle" style={{fontWeight: 700}} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"                  aria-haspopup="true" aria-expanded="false">
                Новая запись
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Разместить вакансию</a>
                <hr className="m-0" />
                <a className="dropdown-item" href="#">Опубликовать мероприятие</a>
                <hr className="m-0" />
                <a className="dropdown-item" href="#">Создать объявление</a>
            </div>
        </div>
    </form>

    <div className="user">
        <a href="#"><div className="far fa-bell"></div></a>
        <NavLink to="/signIn"> <div className="far  fa-user mx-2"><span className="ml-3 ">Войти</span></div></NavLink>
    </div>
</nav>
}

export default Nav;