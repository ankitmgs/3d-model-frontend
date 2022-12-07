import React, { useEffect, useState } from "react";
import { Slide } from "react-reveal";
import Swal from "sweetalert2";
import app_config from "../config";

const ManageModal = () => {
  const url = app_config.api_url;
  const [threeDArray, setthreeDArray] = useState([]);

  const getDataFromBackend = async () => {
    const response = await fetch(url + "/modal/getall");
    const data = await response.json();
    console.log(data);
    setthreeDArray(data);
  };

  const deleteUser = (id) => {
    const reOpt = {
      method: "DELETE",
    };
    fetch(url + "/modal/delete/" + id, reOpt)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          getDataFromBackend();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayModels = () => {
    return threeDArray.map((model) => (
      <>
        <Slide top>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={"http://localhost:5000/images/" + model.thumbnail}
                  alt=""
                  style={{ width: 45, height: 45 }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{model.title}</p>
                  {/* <p className="text-muted mb-0">john.doe@gmail.com</p> */}
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{model.description}</p>
              {/* <p className="text-muted mb-0">IT department</p> */}
            </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline">
                Product
              </span>
            </td>
            {/* <td>Senior</td> */}
            <td>
              <button
                onClick={() => {
                  deleteUser(model._id);
                }}
                type="button"
                className="btn btn-danger btn-sm "
              >
                Delete
              </button>
            </td>
          </tr>
        </Slide>
      </>
    ));
  };

  return (
    <div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            {/* <th>Position</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: 45, height: 45 }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">John Doe</p>
              <p className="text-muted mb-0">john.doe@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">Software engineer</p>
          <p className="text-muted mb-0">IT department</p>
        </td>
        <td>
          <span className="badge badge-success rounded-pill d-inline">
            Active
          </span>
        </td>
        <td>Senior</td>
        <td>
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            Edit
          </button>
        </td>
      </tr> */}
          {displayModels()}
        </tbody>
      </table>
    </div>
  );
};

export default ManageModal;
