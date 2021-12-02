// hooks
import { useEffect, useState } from "react";

function UseFetchGET(url) {
  // fetched data
  const [data, setData] = useState();
  // error to infrom user the condition of the request
  const [error, setError] = useState(null);
  // showing waiting... to the screen if the value is true
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    // aborting request if page got refreshed
    const controller = new AbortController();
    setWaiting(true);
    async function fetchFunc() {
      try {
        const fetchCondition = await fetch(url, { signal: controller.signal });
        if (!fetchCondition.ok) {
          throw new Error("Connection to the server was lost.");
        }
        const jsonData = await fetchCondition.json();
        setWaiting(false);
        setData(jsonData);
      } catch (err) {
        setWaiting(false);
        setError(err.message);
      }
    }
    fetchFunc();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, waiting };
}
export default UseFetchGET;
