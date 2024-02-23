import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "rsuite";

// import classNames from "classnames";

// ... (imports)

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="col-12">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </div>

        <div className="d-flex align-content-end justify-content-end mt-4 ">
          <Button
            className="px-5 py-2 w-100"
            appearance="primary"
            loading={loader}
            type="submit"
          >
            Login
          </Button>
        </div>
        <div className="d-flex align-content-end justify-content-end mt-4 ">
          <Button
            className="px-5 py-2 w-100"
            appearance="primary"
            color="yellow"
            loading={loader}
            type="button"
            onClick={() => {
              setEmail("pramod@gmail.com");
              setPassword("Test@1234");
            }}
          >
            Fill Credential & Click Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
