import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function Login(props) {
  const [userData, setUserData] = useState({
      email: '',
      password: '',
  });
  const userChangeHandler = (event) => {
    setUserData({...userData, [event.target.name] : event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userData);
  };
  return (
    <div className="flex h-screen">
      <Card>
          <div className="text-center mb-10">
          <h3>ลงชื่อเข้าใช้</h3>
          </div>
        <form onSubmit={submitHandler}>
          <label className="text-left">Email:</label>
          <input
            required
            name="email"
            type="email"
            value={userData.email}
            onChange={userChangeHandler}
            placeholder="Email"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={userChangeHandler}
            placeholder="Password"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <div className="flex items-center mt-3 justify-center">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
