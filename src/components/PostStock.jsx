import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import obi from "../images/obipix_350_350_927829.png";

const PostStock = () => {
  const [poster, setPoster] = useState({
    ticker: "",
    high: -1,
    low: -1,
    open: -1,
    close: -1,
  });

  const [message, setMessage] = useState("");

  const handleChange = (keyId, e) => {
    const newPoster = { ...poster };
    if (keyId === "ticker") {
      newPoster.ticker = e;
    } else if (keyId === "high") {
      newPoster.high = e;
    } else if (keyId === "low") {
      newPoster.low = e;
    } else if (keyId === "open") {
      newPoster.open = e;
    } else {
      newPoster.close = e;
    }
    setPoster(newPoster);
  };

  const handleReset = () => {
    document.getElementById("testing").reset();
    setMessage("");
  };

  const handlePost = (e) => {
    e.preventDefault();
    const data = poster;
    axios
      .post("https://infinite-everglades-65126.herokuapp.com/addStock", data)
      .then((res) => console.log("im in"))
      .catch((err) => console.log(err));

    setMessage("Thanks!! Your pick has been posted!");
  };

  return (
    <div>
      <form
        id="testing"
        class="postie"
        onSubmit={handlePost}
        style={{ backgroundImage: `url(${obi})` }}
      >
        <label for="ticker">Ticker</label>
        <input
          id="ticker"
          onChange={(e) => handleChange("ticker", e.target.value)}
          type="text"
        ></input>
        <br />
        <label for="high">High</label>
        <input
          id="high"
          onChange={(e) => handleChange("high", e.target.value)}
          type="text"
        ></input>
        <br />
        <label for="low">Low</label>
        <input
          id="low"
          onChange={(e) => handleChange("low", e.target.value)}
          type="text"
        ></input>
        <br />
        <label for="open">Open</label>
        <input
          id="open"
          onChange={(e) => handleChange("open", e.target.value)}
          type="text"
        ></input>
        <br />
        <label for="close">Close</label>
        <input
          id="close"
          onChange={(e) => handleChange("close", e.target.value)}
          type="text"
        ></input>
        <br />
        <Button type="submit" variant="success">
          Add New Hot Pick!
        </Button>
        <p>{message}</p>
      </form>
      <Button onClick={handleReset} type="submit" variant="info">
        Clear Pick
      </Button>
    </div>
  );
};

export default PostStock;
