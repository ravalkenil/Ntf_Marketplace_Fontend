import React, { useState, useEffect } from 'react'
import './Mynft_card.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";

import Modal from "../Model/Model_sell";

const Mynft_card = ({ Img, contract }) => {
  const [deatail, setdeatail] = useState()
  const [Id, setId] = useState()
  const ref = useRef(null);
  const nftimg = Img;
  const [like, setLike] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [sellnftid, setsellnftid] = useState([])
  const [fix, setfix] = useState(false)
  const Handlesort = async (event) => {
    event.preventDefault();
    setId(event.target.value)
    setShowModal(true)
  }

  const Canclenft = async (event) => {
    event.preventDefault();
    const id = event.target.value
    const cnft = await contract.Cancelsell(id)
    const cwait = await cnft.wait()
  }

  useEffect(() => {
    const Cancle_nft = async () => {
      try {

        const nft_balance = await contract.totalSupply()
        for (var i = 0; i <= nft_balance; i++) {
          const sid = await contract.NFTId(i)
          const id = Number(sid);
          if (id != 0) {
            setsellnftid([...sellnftid, id])
            sellnftid.push(id)
          }
        }

      } catch (error) {

      }
    }
    Cancle_nft()

  }, [contract])



  return (
    <div className={"NFTCard"}>
      {nftimg.map((el, i) => (
        <div className="single__nft__card" style={(sellnftid.includes(Number(el.id))) ? { border: "1px solid red" } : {}}>
          <div className="nft__img">
            <img src={el.imgUrl} alt="" className="w-100" />
          </div>

          <div className="nft__content">
            <h5 className="nft__title">
              <Link to={`/market/${el.id}`}>{el.nft_title}</Link>
            </h5>

            <div className="creator__info-wrapper d-flex gap-3">
            

              <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                <div>
                  <h6>Created By</h6>
                  <p>{el.nftcreator}</p>
                </div>

                <div>
                  <h6>Current Bid</h6>
                  <p>{Number(ethers.utils.formatEther(el.nftprice))} ETH</p>
                </div>
                <div>
                  <h6>Token id:</h6>
                  <p>{Number(el.id)}</p>
                </div>

              </div>

            </div>
            <div>
              {
                (sellnftid.includes(Number(el.id))) ?
                  (
                    <button type="button" className='btn btn-warning w-50 d-flex justify-content-center' value={el.id} onClick={Canclenft}  >Cancle</button>
                  ) : (
                    <button type="button" className='btn btn-primary w-50 d-flex justify-content-center' value={el.id} onClick={Handlesort}  >Sell</button>
                  )
              }

            </div>
            {showModal && <Modal setShowModal={setShowModal} Id={Id} contract={contract} />}
            <div className=" mt-3 d-flex align-items-center justify-content-between">
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mynft_card