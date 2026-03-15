import { useState } from "react";
import API from "../services/api";

const Inquiry = () => {

  const [form, setForm] = useState({
  customer_name: "",
  email: "",
  machine_id: "",
  machine_name: "",
  message: ""
});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/inquiry", form);
      alert("Inquiry Sent Successfully");

      setForm({
        customer_name: "",
        email: "",
        machine_id: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Product Inquiry
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="customer_name"
          placeholder="Your Name"
          value={form.customer_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="machine_id"
          placeholder="Machine ID"
          value={form.machine_id}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Submit Inquiry
        </button>

      </form>

    </div>
  );
};

export default Inquiry;