import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from "reactstrap";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Create.css"
import { useNFtmarketplaceContext } from "../Contract_functions/index";



const Create = () => {

  // const [Data,setData] = useState({price:null,title:null,creator:null,des:null,_imgUrl:null});
  const [showModal, setShowModal] = useState(false);
  const [loading, setloading] = useState(false)
  const { changeHandler, handleImangechange, Mint_nft, Data } = useContext(useNFtmarketplaceContext)


  const Mint_NFT = async (event, imag) => {
    setloading(true)
    event.preventDefault();
    const tx = await Mint_nft()
    setloading(false)
  }
  return (
    <>
      <section className="section">

        <Container>
          <Row>

            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <div className="single__nft__card">
                <div className="nft__img">
                  <img src={Data.imgUrl} alt="" className="w-100" />
                </div>

                <div className="nft__content">
                  <h5 className="nft__title">
                    {/* <Link to={`/market/${NFTCard.id}`}>{Data.title}</Link> */}
                  </h5>

                  <div className="creator__info-wrapper d-flex gap-3">
                    <div className="creator__img">
                      <img src={Data.creatorImg} alt="" className="w-100" />
                    </div>

                    <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6>Created By</h6>
                        <p>{Data.creator}</p>
                      </div>

                      <div>
                        <h6>Current Bid</h6>
                        <p>{Data.price} ETH</p>
                      </div>
                    </div>
                  </div>

                  <div className=" mt-3 d-flex align-items-center justify-content-between">
                    
                  </div>
                </div>
              </div>
            </Col>

            {
              loading ? (
                <Col lg="9" md="8" sm="6">
                  <div className="position-absolute top-50 start-50">
                    <CircularProgress style={{ alignItems: "center", color: "white", marginTop: "70px", marginBottom: "200px" }} />
                  </div>
                </Col>
              ) : (
                <Col lg="9" md="8" sm="6">
                  <form onSubmit={Mint_NFT}>
                    <div className="create__item">

                      <div className="form__input">
                        <label htmlFor="">Upload File</label>
                        <input type="file" onChange={handleImangechange} className="upload__input" required />
                      </div>

                      <div className="form__input">
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={changeHandler} name="title" placeholder="Enter title" required />
                      </div>

                      <div className="form__input">
                        <label htmlFor="">Creator</label>
                        <input type="text" onChange={changeHandler} name="creator" placeholder="Enter title" required />
                      </div>

                      <div className="form__input">
                        <label htmlFor="">Price</label>
                        <input type="number" step="0.000001" onChange={changeHandler} name="price" placeholder="Enter price" required />
                      </div>

                      <div className="form__input">
                        <label htmlFor="">Description</label>
                        <textarea
                          name="des"
                          id=""
                          rows="7"
                          placeholder="Enter description"
                          className="w-100"
                          onChange={changeHandler}
                        ></textarea>
                      </div>
                      <button
                        className="bid__btn d-flex align-items-center gap-1"
                        type="submit"
                      // onClick={() => setShowModal(true)}
                      >
                        <i className="ri-shopping-bag-line"></i> Mint
                      </button>
                    </div>
                  </form>
                </Col>
              )
            }

          </Row>
        </Container>
        {/* <Nft_card state={Img}/> */}
      </section>
    </>
  )
}

export default Create