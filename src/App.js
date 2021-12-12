import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/1.png";
import i90 from "./assets/images/90.png";

export const StyledNumberInput = styled.input.attrs((props) => ({
  type: "number",
  min: 1,
  max: 1, //##done..NUMBER OF MINT BER TRANSACTION .CHANGE MINT COUNT BOX COLOR LINE 46
  defaultValue: props.value,
}))`
  border-radius: 5px;
  border: none;
  background-color: #10990000;
  padding: 9px;
  font-weight: bold;
  color: #ff0000;
  width: 50px;
  cursor: ;
  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
//##CHANGE MINT COLOR LINE 66 AND BOTTOM SHADOW COLOR LINE 73 AND SHADWO HOVER COLOER LINE 81
export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #41a7ff;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  width: 300px;
  cursor: pointer;
  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(62, 54, 62, 1);
  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 1);
    -moz-box-shadow: none;
  }
  :hover {
    -webkit-box-shadow: 2px 3px 20px -2px rgba(67, 239, 239, 0.6);
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: ;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledImg1 = styled.img`
height: 0px;
center
position: fixed;
  margin-bottom: -25px;
  margin-top: 0px;
  @media (min-width: 767px) {
    width: 200px;
    height: 200px;
  }
  transition: width 1s;
  transition: height 1s;
`;

export const StyledImg3 = styled.img`
  width: 300px;
  height: 300px;
  @media (min-width: 767px) {
    width: 300px;
    height: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg4 = styled.img`
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);
  -webkit-box-shadow: 2px 3px 10px -2px rgba(100, 0, 250, 1);
  -moz-box-shadow: 2px 8px 4px -2px rgba(100, 0, 250, 0.5);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    -webkit-box-shadow: 2px 3px 20px -2px rgba(250, 250, 0, 0.9);
  }
`;

export const Gallery = styled.div`
  height: 0px;
  position: fixed;
  margin-bottom: 0px;

  .photobanner {
    position: fixed;
    top: 0px;
    right: 0px;
    overflow: hidden;
    white-space: nowrap;
    animation: bannermove 60s linear infinite alternate;

    &:hover {
      animation-play-state: ;
    }
  }

  .photobanner img {
    height: 175px;
    margin: 0 0em;
  }

  @keyframes bannermove {
    70% {
      transform: translate(-50%, 0);
    }
    70% {
      transform: translate(50%, 0);
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(" 1 Weirdo NFT = 5 Matic");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(1);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Preparing your Weird Face...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: "285000", //#gaslimit
        to: "0x736701275C152A8C5Ff134E9857218EA19c6066E", //#done ..chang it to your smart contract addres
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (5 * _amount).toString(), //#chang the pric same is in contract
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Thank you, your transaction was successfully, do it again."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    //#change the i1 to the back round imge you whant
    <s.Screen image={i1}>
      <s.Container flex={1} ai={"center"} style={{ padding: 20 }}>
        <s.TextTitle
          style={{ textAlign: "center", fontSize: 42, fontWeight: "bold" }} //#next line 230 is for big picter above mint bottom
        >
          <StyledImg1 alt={""} src={i90} />
          <s.SpacerXSmall />
        </s.TextTitle>
        <ResponsiveWrapper flex={10} style={{ padding: 0 }}>
          <s.Container flex={10} jc={"center"} ai={"center"}>
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
            >
              {data.totalSupply} / 2022
              <s.SpacerSmall />
            </s.TextTitle>
          </s.Container>
          <s.Container
            flex={10}
            jc={"center"}
            ai={"center"}
            // style={{ backgroundColor: "#000000", padding: 1 }} //#backron for the mint boutm
          >
            {Number(data.totalSupply) == 2022 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  SOLD OUT!
                </s.TextTitle>
                <s.SpacerMedium />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still trade Weirdo NFTs at{" "}
                  <a
                    //# done LINE 218&225 CHANGE NAME
                    target={""}
                    href={"https://opensea.io/collection/"}
                  >
                    The Weird | Faces
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT WALLET
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledNumberInput
                      value={mintQuantity}
                      onChange={(e) => setMintQuantity(e.target.value)}
                    />
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(mintQuantity);
                        getData();
                      }}
                    >
                      {claimingNft
                        ? "PLEASE HOLD..."
                        : `Purchase ${mintQuantity} IC NFT`}
                    </StyledButton>
                  </s.Container>
                )}
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.TextTitle style={{ textAlign: "center", fontSize: 16 }}>
          Connect to the Polygon network
        </s.TextTitle>
        <s.TextDescription style={{ textAlign: "center", fontSize: 20 }}>
          <s.TextDescription style={{ textAlign: "center", fontSize: 16 }}>
            {" "}
          </s.TextDescription>
          {/* <button
            onClick={() =>
              navigator.clipboard.writeText(
                "https://etherscan.io/token/0x688db0131c807a3495c23bc1b25726a76ea31f49" //#but yor cotract  adres
              )
            }
          >
            Click to Copy ##change the name Address | Buy Straight from Contract
          </button> */}
        </s.TextDescription>
        <s.SpacerSmall />
      </s.Container>
    </s.Screen>
  );
}

export default App;
