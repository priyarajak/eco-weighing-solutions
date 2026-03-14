import axios from "axios";

const API = axios.create({
  baseURL: "https://eco-weighing-solutions.onrender.com/"
});

export default API;

export const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/dvvinxsin/image/upload";

export const UPLOAD_PRESET = "eco_upload";