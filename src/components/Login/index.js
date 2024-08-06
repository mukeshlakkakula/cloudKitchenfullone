import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlOF =
      "https://cloudkitchenfullone-backend.onrender.com/api/loginuser";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,

        password: credentials.password,
      }),
    };
    const response = await fetch(urlOF, options);

    const data = await response.json();
    if (!data.success) {
      alert("Enter Valid Credentials");
    }

    if (data.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
    }
  };

  const setCredentialsOf = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="Logincontainer">
      <div className="innerContainer">
        <form onSubmit={handleSubmit} className=" inc2">
          <div>
            {" "}
            <h1 className="loginHead">Login</h1>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control fc2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={setCredentialsOf}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control fc2"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={setCredentialsOf}
              placeholder="password"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your password with anyone else.
            </div>{" "}
          </div>

          <div>
            <button type="submit" className="nUserBtn" onSubmit={handleSubmit}>
              Login
            </button>
            <Link to="/createuser">
              <button type="button" className="subBtn">
                I'm a new user
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
