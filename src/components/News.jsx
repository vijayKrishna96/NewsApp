import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Define a News component
function News() {
  // State to hold news data and loading/error status
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch news data
  const fetchNewsData = async () => {
    const GeneralNews =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=422275dc8c6c4e4db9aaa6b107110f4c";
    try {
      const response = await fetch(GeneralNews);
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        setNewsData(data.articles); // Update newsData state with fetched data
        setLoading(false); // Set loading to false after successful fetch
      } else {
        setError("Error fetching news"); // Set error message
        setLoading(false); // Set loading to false on error
      }
    } catch (error) {
      setError("Error fetching news"); // Set error message
      setLoading(false); // Set loading to false on error
    }
  };

  // Fetch news data on component mount
  useEffect(() => {
    fetchNewsData();
  }, []);

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if fetch fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display news cards once data is fetched successfully
  return (
    <div className="row row-cols-1 row-cols-md-3 gap-4 mt-5">
      {newsData.map((news, index) => (
        <div
          className="card mb-3 mx-auto shadow p-3 mb-5 bg-white rounded border-0"
          style={{ maxWidth: 540 }}
          key={index}
        >
          <div className="row">
            <div className="col-md-4 cardx">
              <img src={news.urlToImage} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{news.publishedAt}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;



