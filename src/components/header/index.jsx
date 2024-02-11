import "./style.css";
import logo from "../../assets/img/logo.svg";
import { Filter, Fulter } from "../UI/filter/filter";
import React, { useState } from "react";
import { Input } from "components/UI/unput/input";
import { Profile } from "components/UI/profile/profile";
import { HeaderBB } from "components/UI/headerBB/HeaderBB";
import download from "assets/img/download.svg";
import favorite from "assets/img/favorite.svg";
import { Link, useNavigate } from "react-router-dom";

const filters = ["Дата", "Тэги", "Ролик", "Оценка", "Language"];
export default function Header() {
  let isBottom = true;
  const [isAuth, setisAuth] = useState(false);
  const nav = useNavigate();

  setTimeout(() => {
    nav("/main");
  }, 5000);
  return (
    <>
      <header className="header">
        <section className="header-top">
          <img src={logo} alt="" />
          <div className="header-nav">
            <Input />
          </div>
          <div className="header-main">
            <HeaderBB text="Загрузка" img={download} />
            <HeaderBB text="Избранное" img={favorite} />
            <Profile />
          </div>
        </section>
        {isBottom ? (
          <section className="header-bottom">
            <div className="header-left">
              <div className="header__filter">
                {filters.map((elem, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Filter text={elem} />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="header-sort"></div>
            </div>
            <div className="header-right">
              <div className="header-popular"></div>
            </div>
          </section>
        ) : (
          <></>
        )}

        <Link to="/Main">XDD</Link>
      </header>
    </>
  );
}
