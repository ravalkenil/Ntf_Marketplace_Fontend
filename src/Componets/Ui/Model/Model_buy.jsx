import React, { useEffect, useState } from "react";
import "./Model.css";
import { Container, Row, Col } from "reactstrap";
import { ethers } from 'ethers';
import { CircularProgress } from "@material-ui/core";

const Model_buy = ({ setShowModal, Id, contract }) => {
  const [price, setprice] = useState()
  const [loading, setloading] = useState(false)
  const shownftprice = async () => {
    const data1 = await contract.sellData(Id);
    setprice(Number(data1.Price) / 1000000000000000000);
    //  setprice(0)
  }

  useEffect(() => {
    shownftprice()
  }, [contract])

  const Buynft = async (e) => {
    e.preventDefault();
    setloading(true);
    const options = { value: ethers.utils.parseEther(`${price}`), gasLimit: 50000, }
    const tx = await contract.BuyNFT(Id, options)
    const waittx = await tx.wait()
    setloading(false)
    setShowModal(false)
  }
  return (
    <div className="modal__wrapper">
      <div className="single__modal">

        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        {
          loading ? (
            <Container style={{ textAlign: "center", marginTop: "30px" }}>
              <CircularProgress style={{ textAlign: "center", color: "white", marginTop: "150px", marginBottom: "230px" }} />
            </Container>
          ) : (
            <form onSubmit={Buynft}>
              <h6 className="text-center text-light">Buy NFT</h6>
              <p className="text-center text-light">
                This is Buy Amount
              </p>

              <div className="input__item mb-4">
                <input type="number" value={price} required />
              </div>

              <button className="place__bid-btn" type="submit">Buy</button>
            </form>
          )
        }

      </div>
    </div>
  )
}

export default Model_buy