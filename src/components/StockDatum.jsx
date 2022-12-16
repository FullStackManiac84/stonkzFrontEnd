import { Component } from "react";

class StockDatum extends Component {

  render() {

    const {ticker, high, low, open, close, deleteMe} = this.props;

    return (
      <div class="stock">
        <span>Ticker: {ticker}</span>
        <br />
        <span>High: {high}</span>
        <br />
        <span>Low: {low}</span>
        <br />
        <span>Open: {open}</span>
        <br />
        <span>Close: {close}</span>
        <br />
        <button className="delete" onClick={() => deleteMe(ticker)}>Delete Stock</button>
      </div>
    );
  }
}

export default StockDatum;
