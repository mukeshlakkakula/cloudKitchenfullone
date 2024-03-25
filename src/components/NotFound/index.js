import "./index.css";

const NotFound = () => {
  const notFound = "Page Not Found";
  return (
    <div className="pagenotFoundContainer">
      <img
        className="imgSm"
        src="https://i.pinimg.com/564x/9a/7c/58/9a7c58b1532f43d69be0dcaec9130495.jpg"
        alt="notFound"
      />
      <h1>{notFound}</h1>
    </div>
  );
};

export default NotFound;
