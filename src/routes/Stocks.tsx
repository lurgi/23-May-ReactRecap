import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
import { xml2js } from "xml-js";

const Container = styled.div`
  padding: 0px 20px;
  width: 100vw;
  max-width: 600px;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StockList = styled.ul``;

const Stock = styled.li`
  background-color: #adadad;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
`;

const Image = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;

interface IStock {
  basDt: { _text: string };
  clpr: { _text: string };
  fltRt: { _text: string };
  hipr: { _text: string };
  isinCd: { _text: string };
  itmsNm: { _text: string };
  lopr: { _text: string };
  lstgStCnt: { _text: string };
  mkp: { _text: string };
  mrktCtg: { _text: string };
  mrktTotAmt: { _text: string };
  srtnCd: { _text: string };
  trPrc: { _text: string };
  trqu: { _text: string };
  vs: { _text: string };
}

interface IStocks {
  response: {
    body: {
      items: {
        item: IStock[];
      };
    };
  };
}

function Stocks() {
  const apiKey = process.env.REACT_APP_API_DATA_KEY;
  console.log(apiKey);
  const [stockData, setStockData] = useState<IStocks>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch(
        `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${apiKey}&numOfRows=150&beginMrktTotAmt=2900000000000`
      )
        .then((response) => response.text())
        .then((xmlString) => {
          // XML 데이터를 파싱하여 JavaScript 객체로 변환합니다.
          const jsonObject = xml2js(xmlString, { compact: true }) as IStocks;
          setStockData(jsonObject);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
    setIsLoading(false);
  }, [apiKey]);
  return (
    <Container>
      <Header>
        <Title>코스피 시가총액 100위 종목</Title>
      </Header>
      {isLoading
        ? "Loading..."
        : stockData?.response.body.items.item.map((v, i) => (
            <Stock key={i}>{v.itmsNm._text}</Stock>
          ))}
    </Container>
  );
}
export default Stocks;
