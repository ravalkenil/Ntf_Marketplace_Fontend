import React, { useState } from 'react';
import "./Model.css";
import { Container } from "reactstrap";

import { CircularProgress } from "@material-ui/core";


const Model_sell = ({ setShowModal, Id, contract }) => {
  const [price, setprice] = useState()
  const [loading, setloading] = useState(false)
  // }
  const sellnft = async (e) => {
    try {

      setloading(true)
      e.preventDefault();
      const price1 = price * 10000000000000000;
      const Tx = await contract.SellNFT(Id, price1)
      const waittx = await Tx.wait();
      setloading(false)
      setShowModal(false)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="modal__wrapper">
      <div className="single__modal">

        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        {
          loading ? (
            <Container style={{ textAlign: "center", marginTop: "60px" }}>
              <CircularProgress style={{ textAlign: "center", color: "white", marginTop: "150px", marginBottom: "230px" }} />
            </Container>
          ) : (
            <form onSubmit={sellnft}>
              <h6 className="text-center text-light">Sell NFT</h6>
              <p className="text-center text-light">
                Please Enter a Selling Price
              </p>

              <div className="input__item mb-4">
                <input type="number" step="0.00001" onChange={(e) => { setprice(e.target.value) }} placeholder="00 : 00 ETH" required />
              </div>

              <button className="place__bid-btn" type="submit">Place a Bid</button>
            </form>
          )
        }

      </div>
    </div>
  );
}

export default Model_sell