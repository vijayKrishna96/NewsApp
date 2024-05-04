import React from "react";
import { useLoaderData } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export async function loader() {
  const GeneralNews =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=422275dc8c6c4e4db9aaa6b107110f4c";
  const response = await fetch(GeneralNews);
  let newsData = [];
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    newsData = data.articles;
    return { newsData };
  } else {
    console.log("error");
  }
}

function News() {
  const { newsData } = useLoaderData();
  console.log(newsData);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 gap-4 mt-5">
        {newsData.map((news) => (
          // <div className="col shadow p-3 mb-3 bg-white rounded" key={news.articles}>
          //   <div className="card ">
          //     <img src={news.urlToImage} className="card-img-top" alt="..." />
          //     <div className="card-body">
          //       <h5 className="card-title">{news.title}</h5>
          //       <p className="card-text">{news.description}</p>
          //     </div>
          //     <div className="card-footer">
          //       <small className="text-body-secondary">
          //         {news.publishedAt}
          //       </small>
          //     </div>
          //   </div>
          // </div>
          <div
            className="card mb-3 mx-auto shadow p-3 mb-5 bg-white rounded border-0"
            style={{ maxWidth: 540 }}
            key={news.articles}
          >
            <div className="row ">
              <div className="col-md-4 cardx">
                <img src={news.urlToImage} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 ">
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">
                    {news.description}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {news.publishedAt}
                    </small>
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
