import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-reveal";
import { NavLink } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";

const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      <div style={{ height: "95vh" }} ref={myRef}>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-10">
                <div className="text-white pb-md-5">
                  <Slide bottom>
                    <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight">
                      <span>
                        <center>
                          The best Platform to showcase your Creativity.
                        </center>
                      </span>{" "}
                      <br />
                    </h1>
                    <center>
                      <NavLink
                        className="btn  btn-outline-light btn-lg py-3 px-5 me-2 mx-auto"
                        to="/listmodal"
                        role="button"
                        aria-controls="#picker-editor"
                      >
                        Get started
                      </NavLink>
                    </center>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* template */}

      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" style={{ position: "relative" }}></div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            ></section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10">
                <div className="d-flex justify-content-center">
                  <div className="text-center" style={{ maxWidth: 700 }}>
                    <Slide bottom>
                      <p
                        className="text-uppercase text-primary fw-bold mb-4"
                        style={{ fontSize: "3rem" }}
                      >
                        Features
                      </p>
                    </Slide>
                    <Slide bottom>
                      <h2 className="fw-bold mb-4">
                        How it made most helpful?
                      </h2>
                    </Slide>
                    <Slide bottom>
                      <p className="text-muted mb-5">
                        It works as a mediator between the client and designer
                        to showcase their work without the software requirement.
                      </p>
                    </Slide>
                  </div>
                </div>
                <div className="row">
                  <Slide left>
                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          <i className="fas fa-check-circle fa-lg text-success fa-fw" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="fw-bold mb-1">Software Free</p>
                          <p className="text-muted mb-0">
                            Run without any machine or software requirement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide left>
                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          <i className="fas fa-check-circle fa-lg text-success fa-fw" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="fw-bold mb-1">Shareable</p>
                          <p className="text-muted mb-0">
                            Share your works with one click.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide left>
                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          <i className="fas fa-check-circle fa-lg text-success fa-fw" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="fw-bold mb-1">Easy to visualize</p>
                          <p className="text-muted mb-0">
                            Easily visualize by moving 360 degree.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide left>
                    <div className="col-lg-3 col-md-6 mb-5">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0">
                          <i className="fas fa-check-circle fa-lg text-success fa-fw" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <p className="fw-bold mb-1">Fast</p>
                          <p className="text-muted mb-0">Fast Processing</p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </section>
            </section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center text-lg-start">
                <div className="px-4 py-5 px-md-5">
                  <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <Slide top>
                        <h2 className="my-5 display-5 fw-bold ls-tight">
                          <span>Are you ready</span> <br />
                          <span className="text-success">
                            for an adventure?
                          </span>
                        </h2>
                      </Slide>
                      <Slide top>
                        <NavLink
                          className="btn  btn-success btn-lg py-3 px-5 mb-2 me-2"
                          to="/addmodal"
                          role="button"
                          aria-controls="#picker-editor"
                        >
                          Get started
                        </NavLink>
                      </Slide>
                    </div>
                    <Slide right>
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        <img
                          src="https://img1.cgtrader.com/items/3559404/86796b279d/large/moon-knight-3d-model-low-poly-rigged-max-obj-3ds-fbx.jpg"
                          className="w-100 rounded-4 shadow-5"
                          alt=""
                          aria-controls="#picker-editor"
                        />
                      </div>
                    </Slide>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10">
                <Slide top>
                  <h2 className="fw-bold mb-5 text-center">Contact us</h2>
                </Slide>
                <div className="row gx-lg-5">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <form>
                      <Slide left>
                        Name input
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form4Example1"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form4Example1"
                            style={{ marginLeft: 0 }}
                          >
                            Name
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: 9 }}
                            />
                            <div
                              className="form-notch-middle"
                              style={{ width: "42.4px" }}
                            />
                            <div className="form-notch-trailing" />
                          </div>
                        </div>
                      </Slide>
                      <Slide left>
                        Email input
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form4Example2"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form4Example2"
                            style={{ marginLeft: 0 }}
                          >
                            Email address
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: 9 }}
                            />
                            <div
                              className="form-notch-middle"
                              style={{ width: "88.8px" }}
                            />
                            <div className="form-notch-trailing" />
                          </div>
                        </div>
                      </Slide>
                      <Slide left>
                        Message input
                        <div className="form-outline mb-4">
                          <textarea
                            className="form-control"
                            id="form4Example3"
                            rows={4}
                            defaultValue={""}
                          />
                          <label
                            className="form-label"
                            htmlFor="form4Example3"
                            style={{ marginLeft: 0 }}
                          >
                            Message
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: 9 }}
                            />
                            <div
                              className="form-notch-middle"
                              style={{ width: 60 }}
                            />
                            <div className="form-notch-trailing" />
                          </div>
                        </div>
                      </Slide>
                      {/* Submit button */}
                      <Slide bottom>
                        <button
                          type="submit"
                          className="btn  btn-primary btn-block mb-4"
                          aria-controls="#picker-editor"
                        >
                          Send
                        </button>
                      </Slide>
                    </form>
                  </div>
                  <div className="col-lg-7 mb-4 mb-md-0">
                    <div className="row gx-lg-5">
                      <div className="col-md-6 mb-5">
                        <Slide left>
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-headset fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Technical support</p>
                              <p className="text-muted mb-0">
                                support@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </Slide>
                      </div>
                      <div className="col-md-6 mb-5">
                        <Slide left>
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-dollar-sign fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Sales questions</p>
                              <p className="text-muted mb-0">
                                sales@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </Slide>
                      </div>
                      <div className="col-md-6 mb-5">
                        <Slide left>
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-newspaper fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Press</p>
                              <p className="text-muted mb-0">
                                press@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </Slide>
                      </div>
                      <div className="col-md-6 mb-5">
                        <Slide left>
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                                <i
                                  className="fas fa-bug fa-lg text-white fa-fw"
                                  aria-controls="#picker-editor"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <p className="fw-bold mb-1">Bug report</p>
                              <p className="text-muted mb-0">
                                bugs@example.com
                              </p>
                              <p className="text-muted mb-0">+1 234-567-89</p>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
