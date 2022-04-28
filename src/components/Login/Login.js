import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PasswordInput, TextInput, Button, Box } from "@mantine/core";

import styled from "styled-components";

const StyledLogin = styled(Button)`
  color: black;
`;

function Login(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const userChangeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    nav("../home", { replace: true });
  };
  const nav = useNavigate();
  return (
    <div className="flex h-screen">
      <Box className=" w-96 m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-center text-black text-2xl mb-1">
          ลงชื่อเข้าใช้
        </div>
        <form onSubmit={submitHandler} className="px-10 space-y-6">
          <TextInput
            name="email"
            type="email"
            value={userData.email}
            onChange={userChangeHandler}
            placeholder="กรอกอีเมล"
            label="อีเมล"
            required
          />
          <PasswordInput placeholder="กรอกรหัสผ่าน" label="รหัสผ่าน" required />
          <div className="flex items-center mt-3 justify-center">
            <StyledLogin
              className=" bg-primary hover:bg-primary rounded-full p-2 h-10 w-36"
              type="submit"
              value="login"
            >
              เข้าสู่ระบบ
            </StyledLogin>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
