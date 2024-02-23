import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { useForm } from "react-hook-form";
import "../assets/style/requestForm.css";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

const Request = () => {
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
  }, []);

  const getAllRequests = async () => {
    // let { data } = await AllSubjects({
    //   page: 1,
    //   search: "",
    // });
    const newRows = [];
    let data = true;
    if (!data?.error) {
      let values = data?.results?.subjects[0]?.subjects;
      values?.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1 + ".";
        returnData.subjectName = list?.name;
        returnData.Image = (
          <img
            className="table_img"
            src={list?.subjectImage}
            alt={list?.name}
          />
        );
        returnData.totalStudents = list?.students || 0;
        returnData.totalTeachers = list?.teachers || 0;
        // returnData.status = (
        //   <>
        //     <div className="check_toggle" key={list?._id}>
        //       <input
        //         type="checkbox"
        //         defaultChecked={list?.status}
        //         name="check1"
        //         id={list?._id}
        //         className="d-none"
        //         onClick={() => {
        //           updateSub(list?._id);
        //         }}
        //       />
        //       <label for={list?._id}></label>
        //     </div>
        //   </>
        // );
        returnData.action = (
          <>
            <Link
              className="comman_btn table_viewbtn"
              to={`/admin/subject-management/subject-details/${list?._id}`}
            >
              <span>View</span>
            </Link>
            {/* <a
              className="comman_btn2 table_viewbtn ms-1"
              data-bs-toggle="modal"
              data-bs-target="#edit"
              onClick={() => editSub(list?._id)}
            >
              <span>Edit</span>
            </a> */}
          </>
        );

        newRows.push(returnData);
      });
      setRequests({ ...requests, rows: newRows });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
                    <option value="AB-">AB-</option>
                    <option value="AB-">AB-</option>
                  </select>
                  {errors.bloodGroup && (
                    <p className="errorText">{errors.bloodGroup.message}</p>
                  )}
                </div>
                <div className="col-12">
                  <label>Select Hospital</label>
                  <select
                    {...register("bloodGroup", {
                      required: "* Blood Group is required",
                    })}
                  >
                    <option value="">Select Hospital</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB-">AB-</option>
                    <option value="AB-">AB-</option>
                  </select>
                  {errors.bloodGroup && (
                    <p className="errorText">{errors.bloodGroup.message}</p>
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
                    {...register("Number", {
                      required: "* Number is required",
                    })}
                  />
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

                <p className="text-start my-3">
                  We request you to fill correct details, it help us to make
                  better communication
                </p>
              </div>
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
      </div>
    </Layout>
  );
};

export default Request;
