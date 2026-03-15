import { useEffect, useState } from "react";
import  API, { CLOUDINARY_URL, UPLOAD_PRESET } from "../services/api";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Admin = () => {

  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  
  const navigate = useNavigate();

useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

}, []);
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    capacity: "",
    accuracy: "",
    image_url: "",
    iso_compliant: true
  });

  const uploadImage = async (file) => {

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  return data.secure_url;
};

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  const fetchInquiries = async () => {
    const res = await API.get("/inquiry/inquiries");
    setInquiries(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchInquiries();
  }, []);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = async (e) => {

  e.preventDefault();

  let imageUrl = "";

  if (newProduct.image_file) {
    imageUrl = await uploadImage(newProduct.image_file);
  }

  const productData = {
    name: newProduct.name,
    category: newProduct.category,
    capacity: newProduct.capacity,
    accuracy: newProduct.accuracy,
    iso_compliant: true,
    image_url: imageUrl
  };

  await API.post("/products", productData);

  fetchProducts();
};

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <PageWrapper>
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>
      <button
  onClick={logout}
  className="bg-red-500 text-white px-4 py-2 rounded mb-6"
>
  Logout
</button>

      {/* Add Machine */}

      <h2 className="text-xl font-semibold mb-4">
        Add New Machine
      </h2>

      <form onSubmit={addProduct} className="grid grid-cols-2 gap-4 mb-10">

        <input name="name" placeholder="Machine Name" onChange={handleChange} className="border p-2"/>
        <input name="category" placeholder="Category" onChange={handleChange} className="border p-2"/>
        <input name="capacity" placeholder="Capacity" onChange={handleChange} className="border p-2"/>
        <input name="accuracy" placeholder="Accuracy" onChange={handleChange} className="border p-2"/>
        <input
  type="file"
  onChange={(e) => setNewProduct({
    ...newProduct,
    image_file: e.target.files[0]
  })}
  className="border p-2"
/>
<button className="bg-green-600 text-white p-2 rounded">
          Add Machine
        </button>

      </form>

      {/* Machines Table */}

      <h2 className="text-xl font-semibold mb-4">
        Machines
      </h2>

      <table className="w-full border border-gray-300 mb-10 table-auto">

  <thead>
    <tr className="bg-gray-200">

      <th className="p-3 text-left">Name</th>
      <th className="p-3 text-left">Category</th>
      <th className="p-3 text-left">Capacity</th>
      <th className="p-3 text-left">Action</th>

    </tr>
  </thead>

  <tbody>

    {products.map(p => (
      <tr key={p.id} className="border-t">

        <td className="p-3">{p.machine_name}</td>
        <td className="p-3">{p.category}</td>
        <td className="p-3">{p.capacity}</td>

        <td className="p-3">
          <button
            onClick={() => deleteProduct(p.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </td>

      </tr>
    ))}

  </tbody>

</table>

      {/* Inquiries */}

      <h2 className="text-xl font-semibold mb-4">
        Customer Inquiries
      </h2>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th>Name</th>
            <th>Email</th>
            <th>Machine</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>

          {inquiries.map(i => (
            <tr key={i.id} className="border">

              <td>{i.customer_name}</td>
              <td>{i.email}</td>
              <td>{i.machine_id}</td>
              <td>{i.message}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
    </PageWrapper>
  );
};

export default Admin;