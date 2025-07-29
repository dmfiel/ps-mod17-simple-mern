import { useState } from "react";
import { backendClient } from "../clients/backendClient";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await backendClient.post("/users/register", formData);
      console.log(res.data);

      localStorage.setItem("social-app-token", JSON.stringify(res.data.token));

      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold mb-5">RegisterPage</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-xl mx-auto"
      >
        <h2 className="text-xl font-bold">Register</h2>
        <label htmlFor="username" />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
          className="outline p-2 rounded-md w-full"
        />

        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="outline p-2 rounded-md w-full"
          required
        />

        <label htmlFor="password" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="outline p-2 rounded-md w-full"
          required
        />

        <input
          type="submit"
          value="Register"
          className="outline p-2 rounded-md w-full hover:bg-gray-950 hover:text-white hover:cursor-pointer"
          required
        />
      </form>
    </main>
  );
}

export default RegisterPage;
