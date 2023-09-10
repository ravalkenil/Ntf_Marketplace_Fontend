
import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col } from "reactstrap";
import { CircularProgress } from "@material-ui/core";
import Nft_card from '../Ui/Nft_card/Mynft_card';
import { useAccount } from 'wagmi';


import { useNFtmarketplaceContext } from "../Contract_functions/index";


const Mynft = ({ state }) => {

  const [loading, setloading] = useState(false);
  // const {  State }= useContext(useNFtmarketplaceContext);
  const { contract } = state;
  const { address } = useAccount();
  const [Img, setImg] = useState([]);
  // const contract="0x7E52317c3A4b629343Fbb0B7DFEBc0B4843c12c1";
  // const  item =[{
  //     description: "A Monkey",
  //     image: "https://bafybeiaz6wklhjsvvvuao7khio5w6ivfgcwk7hzmrwhtdj4slq2pwzyfty.ipfs.dweb.link/nft.png",
  //     name: "monkey",
  //     owner: "0x7E52317c3A4b629343Fbb0B7DFEBc0B4843c12c1",
  //     price: "1.0",
  //     seller: "0x94f565700e29f2fF44e63ADB9147a15D2A8Cd961",
  //     tokenId: 1,
  //     tokenUri: "ipfs://bafyreihbkfvgbjjqxrykxvixxf6svfeqtpaqlbnhz2fpu3pe325hwfstdi/metadata.json",
  //    }]

  useEffect(() => {
    const Show_ownernft = async () => {
      try {
        const nft_balance = await contract.balanceOf(address);
        for (var i = 0; i < nft_balance; i++) {
          const tokenId = await contract.tokenOfOwnerByIndex(address, i);
          const ID = Number(tokenId);
          const imgurl1 = await contract.NFT_DATA(ID);
          const imgurl = imgurl1;
          setImg([...Img, imgurl1]);
          Img.push(imgurl1);
        }
      } catch (error) {
        
      }
    }
    Show_ownernft()
  }, [state])




  return (
    <div>
      <section className="section">
        <Container>
          {
            loading ? (
              <Container style={{ textAlign: "center", marginTop: "60px" }}>
                <CircularProgress style={{ textAlign: "center", color: "white", marginTop: "230px", marginBottom: "230px" }} />
              </Container>
            ) : (
              // <Col lg="3" md="4" sm="6" className="mb-4" key={Img.id}>
                
              // </Col>
              <Nft_card Img={Img} contract={contract} />
            )
          }

        </Container>
      </section>
    </div>
  )
}

export default Mynft