import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaGoogle, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // ✅ already logged in → dashboard
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = (data) => {
    if (data.email && data.password.length >= 6) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">
      <StyledWrapper>
        <div className="auth-card">

          <h2 className="title">
            LOG<span>IN</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div className="input-field">
  <FaEnvelope />
  <input
    type="email"
    placeholder="EMAIL ADDRESS"
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        message: "Only valid Gmail address is allowed (example@gmail.com)",
      },
    })}
  />
</div>
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="input-field">
              <FaLock />
              <input
                type="password"
                placeholder="PASSWORD"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <button type="submit" className="main-btn">
              LOGIN <FaArrowRight />
            </button>
          </form>

          <div className="divider">OR</div>

          <button type="button" className="google-btn">
            <FaGoogle /> LOGIN WITH GOOGLE
          </button>

          <p className="footer">
            Don't have an account?
            <Link to="/register"> REGISTER</Link>
          </p>

        </div>
      </StyledWrapper>
    </div>
  );
};
const StyledWrapper = styled.div`
  .auth-card {
    background: #111;
    padding: 40px;
    border-radius: 30px;
    width: 100%;
    max-width: 420px;
    border: 1px solid #222;
  }

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  .title span {
    color: #fccb06;
  }

  .input-field {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #333;
    border-radius: 15px;
    padding: 12px;
  }

  .input-field input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    width: 100%;
  }

  .main-btn {
    width: 100%;
    background: #fccb06;
    color: black;
    padding: 15px;
    border-radius: 15px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .divider {
    text-align: center;
    margin: 25px 0;
    color: gray;
  }

  .google-btn {
    width: 100%;
    border: 1px solid #333;
    padding: 14px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .footer {
    text-align: center;
    margin-top: 20px;
    color: gray;
  }

  .footer a {
    color: #fccb06;
    font-weight: bold;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-left: 5px;
  }
`;

export default Login;
