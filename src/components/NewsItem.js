import React from "react";

const NewsItem = (props) => {
  let { title, description, ImageUrl, NewsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !ImageUrl
              ? "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fae83bd01-b18c-4332-ad72-80e56a41532d.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900"
              : ImageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}</p>
          <p className="text-mute">
            <small className="text-primary">
              Last updated {new Date(date).toUTCString()} by{" "}
              {author ? author : "Unknown"}
            </small>
          </p>
          <a
            href={NewsUrl}
            className="btn btn-sm btn-dark"
            style={{ cursor: "pointer" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
