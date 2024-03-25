import "./index.css";

const Footer = () => (
  <div className="footerContainer">
    <div style={{ gap: "10px" }}>
      <img
        className="logoImg"
        src="https://i.pinimg.com/564x/c6/23/24/c62324e77b38a2f323674c10b08aa65b.jpg"
        alt="Logo"
      />
      <p className="footPara">Thank you for Choosing us</p>
      <p className="footPara">We always follow your feedback</p>
    </div>
    <div>
      <h1>Follow us on </h1>
      <div className="logoContainer">
        <img
          className="iconLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook"
        />
        <img
          className="iconLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter"
        />
        <img
          className="iconLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linkedin"
        />
      </div>
    </div>
  </div>
);

export default Footer;
