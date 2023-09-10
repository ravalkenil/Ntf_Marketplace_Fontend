import React from 'react';
import "./Main.css";
import Cryptogif from "../../Img/crypto.gif"
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="hero__section">
      <Container>
        <div className='row w-100' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className='col-sm-7'>
            <div className="hero__content">
              {/* <h2>
              Discover, Collect, And <br/>
                <span>Sell Extraordinary</span> NFTs, <br/>Currencies And GiftCards
              </h2> */}
              <h2>
                <span> DAppNFT Hub:</span> Where Innovation Meets Collectibles
              </h2>
              <div className="hero__btns d-flex align-items-center gap-4">
                <div className="borderr">
                  <button className=" create__btn d-flex align-items-center gap-2">
                    <i className="ri-ball-pen-line"></i>
                    <Link to="/create">Create</Link>

                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-5' >
            <img src={Cryptogif} className='hero_image' alt="" />

          </div >
        </div>
      </Container>
    </section>
  )
}

export default Main