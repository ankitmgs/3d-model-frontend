import React, { useState } from "react";
import { Formik } from "formik";
import app_config from "../config";
import Swal from "sweetalert2";
import { Slide } from "react-reveal";


const AddModal = () => {
  const url = app_config.api_url;
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  const modalForm = {
    title: "",
    description: "",
    uplodedby: "",
    data: "",
    thumbnail: "",
    category: "",
  };

  const modalSubmit = (formdata) => {
    formdata.data = selFile;
    formdata.thumbnail = selImage;
    fetch(url + "/modal/add", {
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
            text: "Added Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/modal/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myimage", file);
    fetch(url + "/modal/uploadimage", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("image uploaded");
      }
    });
  };

  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className=" text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  ",
            }}
          />
          <div className="card mb-3" style={{ height: "100vh" }}>
            <div className="row g-0 d-flex align-items-center">
              <Slide left>
                <div className="col-lg-4 d-none d-lg-flex">
                  <img
                    src="https://miro.medium.com/max/800/1*7zKy7ApAilsVT0Mzeiasyw.jpeg"
                    alt="Trendy Pants and Shoes"
                    className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                  />
                </div>
              </Slide>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <Slide top>
                    <h3 className="mb-5">Upload your Modal here..</h3>
                  </Slide>

                  <Formik initialValues={modalForm} onSubmit={modalSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                      
                      <Slide right><form onSubmit={handleSubmit}>
                        {/* input */}
                        <div className="form-label mb-4">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={values.title}
                            onChange={handleChange}
                            placeholder="Title"
                          />
                        </div>
                        <div class="form-label mb-4">
                          <textarea
                            class="form-control"
                            rows="4"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Description"
                          ></textarea>
                        </div>

                        <div className="form-label mb-4">
                          <input
                            type="text"
                            className="form-control"
                            id="uplodedby"
                            value={values.uplodedby}
                            onChange={handleChange}
                            placeholder="Uploded By"
                          />
                        </div>

                        {/*  category */}
                        <div className="mb-4">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="category"
                            value={values.category}
                            onChange={handleChange}
                          >
                            <option selected>Choose Modal Category</option>
                            <option value="1">Product</option>
                            <option value="2">Architecture</option>
                            <option value="3">Art</option>
                            <option value="4">Design</option>
                            <option value="5">Other</option>
                          </select>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="mb-4 ">
                              <label
                                class="form-label d-flex justify-content-start mb-0"
                                for="customFile"
                              >
                                <p
                                  className="m-0 "
                                  style={{ fontWeight: "bold" }}
                                >
                                  Upload Thumbnail
                                </p>
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                onChange={uploadImage}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4 ">
                              <label
                                class="form-label d-flex justify-content-start mb-0"
                                for="customFile"
                              >
                                <p
                                  className="m-0 "
                                  style={{ fontWeight: "bold" }}
                                >
                                  Upload File (must be in glTF format)
                                </p>
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                onChange={uploadFile}
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Submit
                        </button>
                      </form>
                      </Slide>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AddModal;
