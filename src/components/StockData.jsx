import { Component } from "react";
import StockDatum from "./StockDatum";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import obi from '../images/obipix_350_350_261404.png';

class StockData extends Component {
  state = {
    stocks: [
      {
        ticker: "GOP",
        high: 1,
        low: 2,
        open: 3,
        close: 4,
      },
      {
        ticker: "NPX",
        high: 10,
        low: 20,
        open: 30,
        close: 40,
      },
    ],
  };

  getStock = () => {
    axios
      .get("https://infinite-everglades-65126.herokuapp.com/stocks")
      .then((response) => {
        const stocks = response.data;
        this.setState({ stocks });
      });
  };

  // THIS IS GETTING CALLED OVER AND OVER AGAIN AS IS
  deleteStock = (t) => {
    console.log("ready for deletion" + t.toString());
    axios.delete("https://infinite-everglades-65126.herokuapp.com/stock/" + t.toString())
    .then((response) => {
      console.log("done with this stock it's gone!");
      const stocks = this.state.stocks.filter(s => s.ticker !== t);
      this.setState({ stocks });
      console.log(stocks);
    });
  };

  render() {
    return (
      <div>
        {this.state.stocks.map((stock) => {
          return (
            <div style={{ backgroundImage: `url(${obi})` }}>
            <StockDatum
              ticker={stock.ticker}
              high={stock.high}
              low={stock.low}
              open={stock.open}
              close={stock.close}
              deleteMe={this.deleteStock}
            ></StockDatum>
            </div>
          );
        })}
        <br></br>
        <Button variant="primary" onClick={this.getStock}>Get Hot Stocks</Button>
      </div>
    );
  }
}

export default StockData;
