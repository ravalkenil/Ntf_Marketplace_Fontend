import React, { useRef, useEffect, useContext } from 'react'
import "./Header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { Web3Button } from '@web3modal/react'

import { useNFtmarketplaceContext } from "../Contract_functions/index"


const LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Mynft",
    url: "/Mynft",
  },

];


const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);
  // const { test }= useContext(useNFtmarketplaceContext)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      }

    });
    // window.addEventListener("scroll");
    // return () => {
    //   window.current.removeEventListener("scroll");
    // };
  }, []);


  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">

            <h2 className=" d-flex gap-2  align-items-right" >
              <span>
              </span>
              NFT
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 " >
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i className="ri-wallet-line"></i>
              </span>
              <div>
                <Web3Button />
              </div>
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header