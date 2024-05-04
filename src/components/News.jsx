import React from "react";
import { useLoaderData } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export async function loader() {
  const GeneralNews =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=422275dc8c6c4e4db9aaa6b107110f4c";
  try {
    const response = await fetch(GeneralNews);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      const newsData = data.articles;
      return { newsData }; // Return an object with newsData
    } else {
      console.log("Error fetching news:", response.statusText);
      return null; // Return null in case of error
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return null; // Return null if an exception occurs
  }
}

function News() {
  const { newsData } = useLoaderData();
  const kv = useLoaderData();
  const newData = kv?.newsData;
  console.log(newData);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 gap-4 mt-5">
        {newsData?.map((news, index) => (
          <div
            className="card mb-3 mx-auto shadow p-3 mb-5 bg-white rounded border-0"
            style={{ maxWidth: 540 }}
            key={index} // Use a unique key, like index, or a unique ID from your data
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
    </>
  );
}

export default News;
