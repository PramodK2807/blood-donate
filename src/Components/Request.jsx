import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { useForm } from "react-hook-form";
import "../assets/style/requestForm.css";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setTotalCount } from "../Redux/features/userSlice";

const Request = () => {
  const [hospitals, setHospitals] = useState([]);
  const [viewData, setViewData] = useState({});
  const dispatch = useDispatch();

  const [requests, setRequests] = useState({
    columns: [
      {
        label: "S.NO.",
        field: "sn",
        sort: "asc",
        width: 50,
      },
      {
        label: "Patient Name",
        field: "patientName",
        sort: "asc",
        width: 50,
      },
      {
        label: "Blood Group",
        field: "blood",
        sort: "asc",
        width: 50,
      },
      {
        label: "Contact Person",
        field: "contact",
        sort: "asc",
        width: 50,
      },
      {
        label: "Hospital Name",
        field: "hospital",
        sort: "asc",
        width: 50,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 50,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 50,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getAllRequests();
    getAllHospitals();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const getAllHospitals = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API}/api/hospital`);
      let data = await res.json();
      console.log(data);
      if (data && !data?.error) setHospitals(data?.hospitals);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllRequests = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API}/api/blood`);
      let data = await res.json();
      console.log(data);

      let count = {
        totalCount: 0,
      };
      const newRows = [];
      if (!data?.error) {
        let values = data?.requests;
        values?.map((list, index) => {
          const returnData = {};
          if (list?.status === "Pending") {
            count.totalCount++;
          }
          console.log(count);
          returnData.sn = index + 1 + ".";
          returnData.patientName = list?.name;
          returnData.age = list?.age;
          returnData.blood = list?.bloodGroup;
          returnData.contact = list?.contact;
          returnData.status = list?.status;
          returnData.hospital = list?.hospital?.Hospitals?.split(" ")
            .slice(0, 4)
            .join(" ");
          returnData.action = (
            <>
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => viewDetails(list?._id)}
              >
                <img
                  style={{ width: "25px", height: "25px" }}
                  className="bg-white"
                  src="/images/visual.png"
                  alt=""
                />
              </button>
            </>
          );

          newRows.push(returnData);
        });
        dispatch(setTotalCount(count.totalCount));
        setRequests({ ...requests, rows: newRows });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewDetails = async (id) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API}/api/blood/view/${id}`
      );
      let data = await res.json();
      console.log(data);
      setViewData(data?.request);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      let formData = {
        name: data?.name,
        bloodGroup: data?.bloodGroup,
        age: data?.age,
        contact: data?.contact,
        gender: data?.gender,
        hospital: data?.hospital,
      };
      let result = await fetch(
        `${process.env.REACT_APP_API}/api/blood/new-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      let resp = await result.json();
      if (resp && !resp?.error) {
        Swal.fire({
          title: resp?.message,
          icon: "Success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3085d6",
        });
        getAllRequests();
        document.getElementById("resetForm").click();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-5 pt-1">
        <div className="request_bg mt-4">
          <div className="container py-5">
            <div className="text-start text-white">
              <h1 style={{ lineHeight: "1.5" }}>
                Urgently Seeking Lifesaving Donors! <br />
              </h1>
              <h4>
                Fill out the Form Below <br /> Request Blood and Save a Life!
              </h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="my-5">
            <div className="box_shadow">
              <h4 className="text-center">
                Fill the form to request for blood
              </h4>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Please enter your/patient name..."
                      {...register("name", {
                        required: "* Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="errorText">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="col-6 col-md-6">
                    <label>Blood Group</label>
                    <select
                      {...register("bloodGroup", {
                        required: "* Blood Group is required",
                      })}
                    >
                      <option value="">Required blood group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                    {errors.bloodGroup && (
                      <p className="errorText">{errors.bloodGroup.message}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <label>Hospital</label>
                    <select
                      {...register("hospital", {
                        required: "* Hospital is required",
                      })}
                    >
                      <option value="">Select Hospital</option>
                      {hospitals &&
                        hospitals
                          ?.sort((a, b) =>
                            a.Hospitals.localeCompare(b.Hospitals)
                          )
                          ?.map((item) => (
                            <option value={item?._id}>{item?.Hospitals}</option>
                          ))}
                    </select>
                    {errors.hospital && (
                      <p className="errorText">{errors.hospital.message}</p>
                    )}
                  </div>
                  <div className="col-6 col-md-4">
                    <label>Age</label>
                    <input
                      type="number"
                      placeholder="Patient age..."
                      {...register("age")}
                    />
                  </div>
                  <div className="col-6 col-md-4">
                    <label>Contact Person</label>
                    <input
                      type="number"
                      placeholder="Mobile Number..."
                      {...register("contact", {
                        required: "* Number is required",
                        minLength: {
                          value: 10,
                          message: "Min 10 digit",
                        },
                        maxLength: {
                          value: 10,
                          message: "Max 10 digit",
                        },
                      })}
                    />
                    {errors.contact && (
                      <p className="errorText">{errors.contact.message}</p>
                    )}
                  </div>
                  <div className="col-6 col-md-4">
                    <label>Gender</label>
                    <select
                      {...register("gender", {
                        required: "* Gender is required",
                      })}
                    >
                      <option value="">Patient Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.gender && (
                      <p className="errorText">{errors.gender.message}</p>
                    )}
                  </div>

                  <p className="text-start text-primary my-3">
                    We request you to fill correct details, it help us to make
                    better communication
                  </p>
                </div>

                <div className="text-end">
                  <button className="comman_btn">Request</button>
                </div>
                <button type="reset" className="d-none" id="resetForm">
                  reset
                </button>
              </form>
            </div>
          </div>

          <div className="row my-5 position-relative">
            <div className="position-absolute top-0 start-0 border rounded-2 bg-danger py-3">
              <h6 className="d-inline-block text-light">Blood Request List</h6>
            </div>
            <div className="col-12 comman_table_design px-0">
              <div className="table-responsive border rounded-1">
                <MDBDataTable
                  bordered
                  displayEntries={false}
                  className="mt-0"
                  hover
                  data={requests}
                  noBottomColumns
                  paginationLabel={"«»"}
                  sortable
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Blood Request Details
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body py-5 blood_details_span">
                <div className="text-capitalize">
                  <p>
                    <span className="">Requested by :</span> {viewData?.name}
                  </p>
                  <div className="row align-items-center justify-content-between">
                    <p className="col-6">
                      <span className="">Blood group needed :</span>
                      {viewData?.bloodGroup}
                    </p>
                    <p className="col-6 text-end">
                      <span className="">Patient Age :</span> {viewData?.age}
                    </p>
                  </div>
                  <p>
                    <span className="">Contact person :</span>{" "}
                    {viewData?.contact}
                  </p>
                  <p>
                    <span className="">Hospital :</span>{" "}
                    {viewData?.hospital?.Hospitals}
                  </p>
                  <p>
                    <span className="">Hospital Address :</span>{" "}
                    {viewData?.hospital?.Address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Request;
