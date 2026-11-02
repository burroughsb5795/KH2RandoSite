export default async function APIStatus() {
  const apiUrl = process.env.API_URL ?? "http://localhost:8000";
  try{
    const res = await fetch(`${apiUrl}/health`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data.status;
  } catch (error) {
    console.error("Error fetching API: ", error);
    return "Unavailable";
  } 
}
