import React, { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { ethers } from "ethers";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Market from "../Pages/Market";
import Mynft from "../Pages/Mynft";
import Abi from "../Contract_functions/abi.json"

const Routers = () => {

  const [State, setState] = useState([])

  useEffect(() => {
    const Get_Contract = async () => {
      const contract_add = '0xa8Cb7C5d79e048Cf0F75F53F8a4725c26347bA01';
      const contract_abi = Abi.abi;
      // const { ethereum } = window;
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = await new ethers.Contract(contract_add, contract_abi, signer);
      setState({ provider, signer, contract });
    }
    Get_Contract();
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home state={State} />} />
      <Route path="/market" element={<Market state={State} />} />
      <Route path="/create" element={<Create state={State} />} />
      <Route path="/Mynft" element={<Mynft state={State} />} />
    </Routes>
  );
};

export default Routers;
