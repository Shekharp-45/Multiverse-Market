import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/layout"; 
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  //get all fucntion
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong!!!");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row">
  <div className="col-md-3">
    <AdminMenu />
  </div>
  <div className="col-md-9">
    <h1 className="text-center">All Products list</h1>
    <div className="d-flex flex-wrap" style={{ gap: "1rem" }}>
      {products?.map((p) => (
        <Link
          key={p._id}
          to={`/dashboard/admin/product/${p.slug}`}
          className="product-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="card"
            style={{
              width: "18rem",
              height: "24rem", // Ensure all cards have the same height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
              style={{
                height: "12rem", // Ensure all images are the same height
                objectFit: "cover", // Maintain image aspect ratio
              }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">
                {p.description.length > 50
                  ? `${p.description.substring(0, 50)}...`
                  : p.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

    </Layout>
  );
};

export default Products;
