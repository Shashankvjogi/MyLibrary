import React from "react";
import { Link } from "react-router-dom";
import { Form } from "antd";
import Button from "../../components/Button";

function Login() {
  const onFinish = (values) => {
    console.log("Success: ", values);
  };
  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="authentication-form bg-white p-3">
        <h1 className="text-secondary text-2xl font-bold mb-1">
          My Library - Login
        </h1>
        <hr></hr>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" placeholder="Password" />
          </Form.Item>

          

          <div className="text-center mt-2 flex flex-col gap-1">
          <Button title="Register" type="submit" />
            <Link to="/register" className="text-primary text-sm underline">
              Dont have an account? Click here to Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
