import React from "react";
import "../CSS/login.css";
import app_config from "../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const url = app_config.api_url;
  const loginForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = (formdata) => {
    console.log(formdata);
    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggedin successfully!",
          }).then(() => {
            navigate("/addmodal");
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The leading platform <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for 3D & AR on the web
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Manage your 3D assets. Distribute 3D & AR experiences.
                Collaborate with others. Showcase your work. Buy & sell 3D
                models.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <center>
                  <i className="fa-solid fa-eye fa-3x py-4" />
                  <h3 className="py-2">Login Here</h3>
                </center>
                <div className="card-body px-4 py-3 px-md-5">
                  <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        <div className=" mb-4">
                          <label className="form-label d-flex justify-content-start">
                            Email address
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className=" mb-4">
                          <label className="form-label d-flex justify-content-start">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
