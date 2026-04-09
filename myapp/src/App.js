import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Builder from "./pages/Builder";
import Checkout from "./pages/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bouquet: [],
    };
  }

  componentDidMount() {
    document.title = `Hawaaian Floral Studio | ${this.state.bouquet.length} flowers in bouquet`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.bouquet !== this.state.bouquet) {
      document.title = `Hawaaian Floral Studio | ${this.state.bouquet.length} flowers in bouquet`;
    }
  }

  addFlower = (flower) => {
    this.setState((prevState) => {
      const existing = prevState.bouquet.find((f) => f.id === flower.id);
      if (existing) {
        return {
          bouquet: prevState.bouquet.map((f) =>
            f.id === flower.id ? { ...f, quantity: f.quantity + 1 } : f
          ),
        };
      }
      return {
        bouquet: [...prevState.bouquet, { ...flower, quantity: 1 }],
      };
    });
  };

  removeOne = (flowerId) => {
    this.setState((prevState) => {
      const updated = prevState.bouquet
        .map((f) =>
          f.id === flowerId ? { ...f, quantity: f.quantity - 1 } : f
        )
        .filter((f) => f.quantity > 0);
      return { bouquet: updated };
    });
  };

  clearBouquet = () => {
    this.setState({ bouquet: [] });
  };

  render() {
    const { bouquet } = this.state;

    return (
      <div>
        <nav className="navbar">
          <div className="navbar-logo">Hawaaian Floral Studio</div>
          <div className="navbar-links">
            <Link to="/">Builder</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Builder
                bouquet={bouquet}
                addFlower={this.addFlower}
                clearBouquet={this.clearBouquet}
                removeOne={this.removeOne}
              />
            }
          />
          <Route
            path="/builder"
            element={
              <Builder
                bouquet={bouquet}
                addFlower={this.addFlower}
                clearBouquet={this.clearBouquet}
                removeOne={this.removeOne}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout bouquet={bouquet} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
