import React, { useState } from 'react'
import "./Model.css"

const Model = () => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <form>

        </form>
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">1 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" required placeholder="00 : 00 ETH" onChange={handleAmountChange} />
        </div>

        {/* <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div> */}

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn" onClick={sendFund} >Place a Bid</button>
      </div>
    </div>
  )
}

export default Model