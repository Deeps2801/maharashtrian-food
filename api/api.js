const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://maharashtrian-food.netlify.app";

export default API_URL;