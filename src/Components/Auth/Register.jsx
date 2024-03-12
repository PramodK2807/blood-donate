import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "rsuite";
import Swal from "sweetalert2";

// import classNames from "classnames";

const Register = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setLoader(true);
    try {
      if (data?.password !== data?.cpassword) {
        Swal.fire({
          title: "Password not matching",
          icon: "warning",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3085d6",
        });
        return false;
      }
      let formData = {
        email: data?.email,
        password: data?.password,
        fullName: data?.name,
        age: data?.age,
      };

      let result = await fetch(
        `${process.env.REACT_APP_API}/api/user/register`,
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
        document.getElementById("reset").click();
      } else {
        Swal.fire({
          title: resp?.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3085d6",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error while login",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#3085d6",
      });
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="Full name..."
              {...register("name", {
                required: "* Name is required",
                minLength: {
                  value: 5,
                  message: "Min 5 chars",
                },
                maxLength: {
                  value: 30,
                  message: "Max 30 chars",
                },
              })}
            />
            {errors.name && <p className="errorText">{errors.name.message}</p>}
          </div>

          <div className="col-md-6">
            <label>Age:</label>
            <select
              name="age"
              id="age"
              {...register("age", {
                required: "* Age is required",
              })}
            >
              <option value="">Select Age Group</option>
              <option value="18-20">18-20</option>
              <option value="20-23">20-23</option>
              <option value="23-26">23-26</option>
              <option value="26-30">26-40</option>
              <option value="40-45">40-45</option>
              <option value="45-50">45-50</option>
            </select>
            {errors.age && <p className="errorText">{errors.age.message}</p>}
          </div>

          <div className="col-12">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email..."
              {...register("email", {
                required: "* Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "* Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="errorText">{errors.email.message}</p>
            )}
          </div>

          <div className="col-md-6">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password..."
              {...register("password", {
                required: "* Please Enter Your Password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                },
              })}
            />
            {errors.password && (
              <p className="errorText">{errors.password.message}</p>
            )}
          </div>
          <div className="col-md-6">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password..."
              {...register("cpassword", {
                required: "* Please Enter Your Confirm Password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                },
              })}
            />
            {errors.cpassword && (
              <p className="errorText">{errors.cpassword.message}</p>
            )}
          </div>
        </div>

        <div className="d-flex align-content-end justify-content-end mt-4 ">
          <Button
            className="px-5 py-3 fw-bold w-100 comman_btn"
            appearance="primary"
            loading={loader}
            type="submit"
          >
            Register
          </Button>
          <button className="d-none" id="reset" type="reset">
            reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
