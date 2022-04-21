import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

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
      <Card>
        <div className="text-center mb-10">
          <h3>ลงชื่อเข้าใช้</h3>
        </div>
        <form onSubmit={submitHandler}>
          <label className="text-left">อีเมล</label>
          <input
            required
            name="email"
            type="email"
            value={userData.email}
            onChange={userChangeHandler}
            placeholder="อีเมล"
            className={
              "w-full p-2 text-black rounded-md outline outline-black text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label>รหัสผ่าน</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={userChangeHandler}
            placeholder="รหัสผ่าน"
            className={
              "w-full p-2 text-black rounded-md outline outline-black text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <div className="flex items-center mt-3 justify-center">
            <Button
              className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center"
              type="submit"
              value="login"
            >
              เข้าสู่ระบบ
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
