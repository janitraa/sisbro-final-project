const head = { "Content-Type": "application/json", Accept: "application/json" };

const baseUrl = "http://localhost:8000/api";

export function headers() {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export { baseUrl, head };
