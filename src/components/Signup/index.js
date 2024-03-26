import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlOF = "https://cloudkitchenfullone-backend.onrender.com/api/createuser";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        location: credentials.geoLocation,
        password: credentials.password,
      }),
    };
    const response = await fetch(urlOF, options);
    const data = await response.json();

    console.log(data);
    navigate("/login");
  };

  const setCredentialsOf = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="signupContainer">
      <div className="insideConainer">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              required
              onChange={setCredentialsOf}
              name="name"
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              required
              value={credentials.email}
              onChange={setCredentialsOf}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="geoLocation"
              value={credentials.geoLocation}
              onChange={setCredentialsOf}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
              value={credentials.password}
              onChange={setCredentialsOf}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          <Link to="/login">
            <button type="button" className="btn btn-danger m-3">
              Already user
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
