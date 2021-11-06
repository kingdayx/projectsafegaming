import React from "react";
import styled from "styled-components";
import rainbow from "../../assets/rainbow.png";
import earth from "../../assets/earth.png";
import binance from "../../assets/binance.png";
import coinbase from "../../assets/coinbase.png";
import huobi from "../../assets/huobi.png";
import okex from "../../assets/okex.png";
import visa from "../../assets/visa.png";
import eclipse1 from "../../assets/Ellipse1.png";

const HeaderContainer = styled.div`
  background: #0f0d18;
  height: 100vh;
`;

const Rainbow = styled.img`
  height: 30rem;
  width: 35rem;
`;

const Eclipse = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 34rem;
`;

const Bar = styled.div`
  position: absolute;
  display: flex;
  top: 35rem;
  left: 15rem;
  max-height: 0.1rem;
  justify-content: space-between;
  align-items: center;
  background: #0f0d18;
`;

const Partners = styled.img`
  height: 1rem;
  padding: 0 3rem 0 3rem;
  background: #0f0d18;
`;

const Visa = styled.img`
  height: 2.5rem;
  padding: 0 3rem 0 3rem;
  align-items: center;
  background: #0f0d18;
`;

const Earth = styled.img`
  position: absolute;
  height: 23rem;
  width: 30rem;
  top: 10rem;
  left: 31%;
  z-index: 1;
`;

const Heading = styled.h1`
  position: absolute;
  top: 5rem;
  left: 26%;
  color: white;
  font-family: Gordita;
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 60px;
  /* or 115% */
  z-index: 2;
  width: 40rem;
  text-align: center;
`;

const InfoText = styled.p`
  position: absolute;
  top: 15rem;
  left: 36%;
  font-family: Gordita;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  z-index: 2;
  width: 25rem;
  color: #dbe5bf;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Rainbow src={rainbow} alt="rainbow" />
      <Eclipse src={eclipse1} alt="eclipse" />
      <Heading>The secure, low-cost and powerful blockchain</Heading>
      <InfoText>
        Daocoin is the fastest decentralised blockchain built for everyone, as
        measured by time-to-finality, and has the most validators securing its
        activity of any proof-of-stake protocol.
      </InfoText>
      <Earth src={earth} alt="earth" />
      <Bar>
        <Partners src={binance} alt="binance" />
        <Partners src={coinbase} alt="coinbase" />
        <Visa src={visa} alt="visa" />
        <Partners src={okex} alt="okex" />
        <Partners src={huobi} alt="binance" />
      </Bar>
    </HeaderContainer>
  );
}
