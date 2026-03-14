import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await API.post("/admin/login", form);

    localStorage.setItem("token", res.data.token);

    navigate("/admin");
  };

  return (

    <div className="p-20 max-w-md mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Admin Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button className="bg-green-600 text-white p-2 rounded w-full">
          Login
        </button>

      </form>

    </div>

  );
};

export default Login;