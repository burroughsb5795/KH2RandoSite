export default async function FetchAPI() {
  try{
    const res = await fetch("http://localhost:8000/health");
    const data = await res.json();
    return data.status;
  } catch (error) {
    console.error("Error fetching API: ", error);
    return "Unavailable";
  } 
}
