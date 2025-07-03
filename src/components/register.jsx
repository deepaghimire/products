import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          username: form.username,
          password: form.password,
          name: { firstname: form.firstname, lastname: form.lastname },
          address: {
            city: form.city,
            street: form.street,
            number: parseInt(form.number) || 0,
            zipcode: form.zipcode,
            geolocation: { lat: "0", long: "0" },
          },
          phone: form.phone,
        }),
      });
      const data = await response.json();
      if (response.ok && data.id) {
        setSuccess("Registration successful! You can now log in.");
        setForm({
          email: "",
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          city: "",
          street: "",
          number: "",
          zipcode: "",
          phone: "",
        });
      } else {
        setError("Registration failed.");
      }
    } catch {
      setError("Network error.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={form.firstname}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={form.lastname}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={form.street}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Street Number"
        value={form.number}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="zipcode"
        placeholder="Zip Code"
        value={form.zipcode}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 rounded"
      >
        Register
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-600 mt-2">{success}</div>}
    </form>
  );
};

export default RegisterPage;
