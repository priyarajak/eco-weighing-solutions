import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export default API;

export const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/dvvinxsin/image/upload";

export const UPLOAD_PRESET = "eco_upload";