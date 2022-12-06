import React from "react";
import "../CSS/signup.css";
import app_config from "../config";
import Swal from "sweetalert2";
import { Formik } from "formik";

const Signup = () => {
  const url = app_config.api_url;

  const signupForm = {
    email: "",
    username: "",
    password: "",
  };

  const SignupSubmit = (formdata) => {
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{backgroundColor: "#eee;"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px;"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <Formik
                        initialValues={signupForm}
                        onSubmit={SignupSubmit}
                      >
                        {({ values, handleSubmit, handleChange }) => (
                          <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw mt-4"></i>
                              <div className=" flex-fill mb-0">
                                <label className="form-label" for="form3Example1c">
                                  Username
                                </label>
                                <input
                                  type="text"
                                  id="username"
                                  className="form-control"
                                  placeholder="Enter Username"
                                  value={values.username}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw mt-4"></i>
                              <div className=" flex-fill mb-0">
                                <label className="form-label" for="form3Example3c">
                                  Your Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="form-control"
                                  placeholder="Enter Email"
                                  value={values.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw mt-4"></i>
                              <div className="flex-fill mb-0">
                                <label className="form-label" for="form3Example4c">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  className="form-control"
                                  placeholder="Enter Password"
                                  value={values.password}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>

                            

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
