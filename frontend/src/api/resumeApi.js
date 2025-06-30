import axios from "axios";

const BASE_URL = "http://localhost:8000";

export async function enhanceSection({ section, content }) {
  const res = await axios.post(`${BASE_URL}/ai-enhance`, { section, content });
  return res.data;
}

export async function saveResume(resume) {
  const res = await axios.post(`${BASE_URL}/save-resume`, resume);
  return res.data;
}
