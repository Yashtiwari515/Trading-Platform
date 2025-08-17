import { useEffect } from "react";
import axios from "axios";

function Test() {
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/allHoldings`, { withCredentials: true })
      .then(res => console.log("✅ Backend connected:", res.data))
      .catch(err => console.error("❌ Backend error:", err));
  }, []);

  return <h2>Check console for backend connection</h2>;
}

export default Test;
