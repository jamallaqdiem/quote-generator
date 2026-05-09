import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const getQuote = async () => {
    try {
      const response = await fetch(
        "https://firstdeployedapp.hosting.codeyourfuture.io",
        {
          method: "GET",
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error, status ${response.status}`);
      }
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quotes", err);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  if (!quote) return <p>Loading Quotes...</p>;
  return (
    <div className="quote-card">
      <h1> Quote Generator </h1>
      <div className="quote-content">
        <h3>{quote.quote}</h3>
        <span>{quote.author}</span>
      </div>
      <button onClick={() => getQuote()}>Get Quote</button>
    </div>
  );
}

export default App;
