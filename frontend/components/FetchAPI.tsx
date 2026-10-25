export default async function FetchAPI() {
  const res = await fetch("http://localhost:8000/health");
  const data = await res.json();
  return data.status;
}