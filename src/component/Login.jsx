import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Validation from "./LoginValidation";
// import axios from "axios";

function Login() {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();
  // const [errors, setErrors] = useState({});
  // const handleInput = (e) => {
  //   setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(Validation(values));
  //   if (errors.name === "") {
  //     axios
  //       .post("http://localhost:8081/login", values)
  //       .then((res) => {
  //         if (res.data === "success") {
  //           navigate("/users");
  //         } else {
  //           alert("No record existed  ");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1 className="text-center pb-3">Login</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="Username">Username</label>
            <input
              type="Username"
              name="name"
              id="name"
              className="form-control rounded-0"
            />
            {/* {errors.name && (
              <span className="text-danger"> {errors.name}</span>
            )} */}
          </div>

            <Link to="/users" className="btn btn-success w-100">
            Login</Link>
          {/* <button type="submit" className="btn btn-success w-100">
            Login
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
