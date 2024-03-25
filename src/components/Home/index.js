import { Component } from "react";
import DemoCarousel from "../Carousel";
import Footer from "../Footer";
import Fooditems from "../FoodItems";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="HomeContainer">
          <DemoCarousel />
          <hr />
          <Fooditems />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
