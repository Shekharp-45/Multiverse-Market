import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layout/layout";   
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
     <div
  className="container"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <div className="row" style={{ display: "flex", justifyContent: "center" }}>
    {categories.map((c) => (
      <div
        className="col-md-6 mt-5 mb-3 gx-3 gy-3"
        key={c._id}
        style={{
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Link
          to={`/category/${c.slug}`}
          className="btn btn-primary"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            borderColor: "#0056b3",
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "15px 30px",
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#007bff")
          }
        >
          {c.name}
        </Link>
      </div>
    ))}
  </div>
</div>

    </Layout>
  );
};

export default Categories;