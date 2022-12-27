import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./合成 1";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Userlist() {
  const [userdata, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://63a5e3a8318b23efa7a03094.mockapi.io/users"
      );
      setUserData(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let handleDelete = async (id) => {
    try {
      let confirmData = window.confirm(
        "Are Sure do you want delete this data?"
      );
      if (confirmData) {
        await axios.delete(
          `https://63a5e3a8318b23efa7a03094.mockapi.io/users/${id}`
        );
        getUsers();
      }
    } catch (error) {
      alert("Somethink went error");
    }
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">UserList</h1>
        <Link
          to={"/portal/user-create"}
          class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create New User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          {isLoading ? (
            <Lottie animationData={loadingAnimation} loop={true} />
          ) : (
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="200%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {userdata.map((data) => {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.country}</td>
                        <td>{data.state}</td>
                        <td>{data.city}</td>

                        <td>
                          <div className="action">
                            <Link
                              to={`/portal/user-view/${data.id}`}
                              className="ele-s btn btn-info btn-sm mr-2"
                            >
                              view
                            </Link>
                            <Link
                              to={`/portal/user-edit/${data.id}`}
                              className="ele-a btn btn-primary btn-sm "
                            >
                              Edit
                            </Link>

                            <button
                              onClick={() => handleDelete(data.id)}
                              className="ele-b btn btn-danger btn-sm "
                            >
                              <FontAwesomeIcon icon={faUserTimes} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userlist;
