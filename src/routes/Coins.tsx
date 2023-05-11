import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  width: 100vw;
  max-width: 800px;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
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
  font-size: 52px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
`;

const Image = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        "Loading..."
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Link key={coin.id} to={`/${coin.id}`} state={{ name: coin.name }}>
              <Coin>
                <Image
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                ></Image>
                {coin.name} &rarr;
              </Coin>
            </Link>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
