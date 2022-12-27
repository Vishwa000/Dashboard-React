import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

function Useredit() {
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    UserEditData();
  }, []);
  let submit = async (values) => {
    try {
      console.log("onsubmit");
      setLoading(true);
      const user = await axios.put(
        `https://63a5e3a8318b23efa7a03094.mockapi.io/users/${params.userid}`,
        values
      );
      alert("Update Done");
      setLoading(false);
      navigate("/portal/user-list");
    } catch (error) {
      console.log(error);
      alert("something error Please Ckeck The Form");
    }
  };
  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Please enter username";
      } else if (values.username.length < 3) {
        errors.username = "Length should be greater than 3";
      } else if (values.username.length > 15) {
        errors.username = "Length should be less than 15";
      }

      if (!values.email) {
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.country) {
        errors.country = "Please enter country";
      }
      if (!values.state) {
        errors.state = "Please enter state";
      }
      if (!values.city) {
        errors.city = "Please enter city";
      }

      return errors;
    },

    onSubmit: submit,
  });

  let UserEditData = async () => {
    try {
      let user = await axios.get(
        `https://63a5e3a8318b23efa7a03094.mockapi.io/users/${params.userid}`
      );
      myFormik.setValues(user.data);
    } catch (error) {}
  };
  return (
    <div className="container">
      <form onSubmit={myFormik.handleSubmit}>
        {params.userid}
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="username"
              value={myFormik.values.username}
              onChange={myFormik.handleChange}
              type={"text"}
              className={`form-control ${
                myFormik.errors.username ? "is-invalid" : "is-valid"
              }`}
            />
            <span className="ele">{myFormik.errors.username}</span>
          </div>
          <div className="col-lg-6">
            <label>E-Mail</label>
            <input
              name="email"
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              type={"email"}
              className={`form-control ${
                myFormik.errors.email ? "is-invalid" : "is-valid"
              }`}
            />
            <span className="ele">{myFormik.errors.email}</span>
          </div>
          <div className="col-lg-4">
            <label>Country</label>
            <select
              name="country"
              value={myFormik.values.country}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.country ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>---Select---</option>
              <option value={"IN"}>India</option>
              <option value={"USA"}>Amercia</option>
              <option value={"SL"}>SriLanka</option>
              <option value={"AF"}>Africa</option>
              <option value={"ENG"}>England</option>
            </select>
            <span className="ele">{myFormik.errors.country}</span>
          </div>
          <div className="col-lg-4">
            <label>State</label>
            <select
              name="state"
              value={myFormik.values.state}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.state ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>---Select---</option>
              <option value={"TN"}>TamilNadu</option>
              <option value={"KL"}>Kerala</option>
              <option value={"DL"}>Delhi</option>
              <option value={"PY"}>Pondicherry</option>
              <option value={"GJ"}>Gujarat</option>
            </select>
            <span className="ele">{myFormik.errors.state}</span>
          </div>
          <div className="col-lg-4">
            <label>City</label>
            <select
              name="city"
              value={myFormik.values.city}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.city ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>---Select---</option>
              <option value={"CH"}>Chennai</option>
              <option value={"PY"}>Pondicherry</option>
              <option value={"KA"}>Kovai</option>
              <option value={"OT"}>Ooty</option>
              <option value={"CL"}>Cuddalore</option>
            </select>
            <span className="ele">{myFormik.errors.city}</span>
          </div>
          <div className="col-lg-3 mt-2">
            <input
              disabled={isLoading}
              type={"submit"}
              value={isLoading ? "Loading..." : "Create"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Useredit;
