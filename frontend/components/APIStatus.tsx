export default async function APIStatus() {
  try{
    const res = await fetch(`${process.env.API_URL}/health`);
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
