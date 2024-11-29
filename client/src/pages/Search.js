import React from "react";
import Layout from "./../components/layout/layout";
import { useSearch } from "../context/search";
const Search = () => {
     // eslint-disable-next-line
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
    <div className="container">
      <div className="text-center">
        <h1>Search Results</h1>
        <h6>
          {values?.results.length < 1
            ? "No Products Found"
            : `Found ${values?.results.length}`}
        </h6>
        <div
          className="d-flex flex-wrap mt-4"
          style={{ gap: "1rem", justifyContent: "center" }}
        >
          {values?.results.map((p) => (
            <div
              className="card"
              style={{
                width: "16rem",
                height: "22rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "0.5rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
              key={p._id}
            >
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
                style={{
                  height: "10rem",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <div
                className="card-body text-center"
                style={{ padding: "0.5rem", fontSize: "0.9rem" }}
              >
                <h5 className="card-title" style={{ fontSize: "1rem" }}>
                  {p.name}
                </h5>
                <p className="card-text" style={{ margin: "0.5rem 0" }}>
                  {p.description.substring(0, 30)}...
                </p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  $ {p.price}
                </p>
              </div>
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.5rem",
                  backgroundColor: "transparent",
                }}
              >
                <button
                  className="btn btn-primary"
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.3rem 0.6rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  More Details
                </button>
                <button
                  className="btn btn-secondary"
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.3rem 0.6rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
  
  

  );
};

export default Search;