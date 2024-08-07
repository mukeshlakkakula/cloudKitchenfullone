import React, { Component } from "react";
import Video from "./hero.mp4";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import "./index.css";

// <div className="imageCoroselContainer p-2">
//           <Carousel
//             showArrows={false}
//             autoPlay={true}
//             infiniteLoop={true}
//             showStatus={false}
//             showIndicators={false}
//             swipeable={false}
//             stopOnHover={false}
//             showThumbs={false}
//             className="carousel "
//           >
//             <div>
//               <img
//                 className="w-100"
//                 src="https://i.pinimg.com/564x/cf/2f/fe/cf2ffe0a0018e4d3b65107fd74c56f61.jpg"
//                 alt="h1"
//               />
//             </div>

//             <div>
//               <img
//                 src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
//                 alt="h1"
//               />
//             </div>

//             <div>
//               <img
//                 src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png"
//                 alt="h1"
//               />
//               {/* <p className="legend fs-5">.</p> */}
//             </div>
//           </Carousel>
//         </div>
class DemoCarousel extends Component {
  render() {
    return (
      <div>
        <video
          src={Video}
          autoPlay
          type="video/mp4"
          style={{ width: "100vw" }}
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default DemoCarousel;
