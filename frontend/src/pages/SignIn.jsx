import { useState } from "react";
import { backendClient } from "../clients/backendClient";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await backendClient.post("/users/login", formData);
      console.log(res.data);

      localStorage.setItem("social-app-token", JSON.stringify(res.data.token));

      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold mb-5">Sign In Page</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-xl mx-auto"
      >
        <h2 className="text-xl font-bold">Sign In</h2>

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
          value="Login"
          className="outline p-2 rounded-md w-full hover:bg-gray-950 hover:text-white hover:cursor-pointer"
          required
        />
      </form>
    </main>
  );
}

export default SignInPage;
