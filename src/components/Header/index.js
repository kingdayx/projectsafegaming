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
import { isMobile } from "react-device-detect";

const HeaderContainer = styled.div`
  background: #0f0d18;
  height: 100vh;
`;

const Rainbow = styled.img`
  height: 30rem;
  width: 35rem;
  @media (max-width: 465px) {
    height: 20rem;
    width: 10rem;
  }
`;

const Eclipse = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 34rem;
  @media (max-width: 465px) {
    right: 0rem;
    height: 15rem;
    width: 10;
  }
`;

const Bar = styled.div`
  position: absolute;
  display: flex;
  top: 35rem;
  left: 19rem;
  max-height: 0.1rem;
  justify-content: space-between;
  align-items: center;
  background: #0f0d18;
  @media (max-width: 465px) {
    left: 0;
    flex-wrap: wrap;
    text-align: center;
  }
`;

const Partners = styled.img`
  height: 1rem;
  padding: 0 3rem 0 3rem;
  background: #0f0d18;
  @media (max-width: 465px) {
    padding: 0.5rem;
  }
`;

const Visa = styled.img`
  height: 2.5rem;
  padding: 0 3rem 0 3rem;
  align-items: center;
  background: #0f0d18;
  @media (max-width: 465px) {
    padding: 0.5rem;
  }
`;

const Earth = styled.img`
  position: absolute;
  height: 360px;
  width: 30em;
  top: 10rem;
  left: 31%;
  z-index: 1;
  @media (max-width: 465px) {
    left: ${isMobile ? 0 : "8%"};
    height: 18rem;
    width: 100%;
  }
`;

const EarthContainer = styled.div`
  width: 100%;
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
  @media (max-width: 465px) {
    top: 5rem;
    left: 7.5%;
    font-size: 40px;
    width: ${isMobile ? "18rem" : "20rem"};
  }
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
  @media (max-width: 465px) {
    top: ${isMobile ? "25rem" : "17rem"};
    left: 3%;
    width: 22rem;
  }
`;

export default function Header(props) {
  // const [mobile, setMobile] =
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
      <EarthContainer>
        <Earth src={earth} alt="earth" />
      </EarthContainer>
      <Bar>
        <Partners src={binance} alt="binance" />
        <Partners src={coinbase} alt="coinbase" />
        <Visa src={visa} alt="visa" />
        <Partners src={okex} alt="okex" />
        <Partners src={huobi} alt="binance" />
      </Bar>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
          fill="currentColor"
        />
      </svg>
    </HeaderContainer>
  );
}
