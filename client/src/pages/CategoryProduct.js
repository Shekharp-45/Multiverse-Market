import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryProductStyles.css";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
  {products?.map((p) => (
    <div className="col-md-3 mb-4" key={p._id}>
      <div
        className="card"
        style={{ width: "100%", height: "24rem" }} // Adjust height for consistent look
      >
        <img
          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
          className="card-img-top object-fit-contain"
          alt={p.name}
          style={{ height: "10rem" }} // Fixed image height
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text">
            {p.description.substring(0, 30)}...
          </p>
          <p className="card-text">$ {p.price}</p>
          <div>
            <button
              className="btn btn-primary me-1"
              onClick={() => navigate(`/product/${p.slug}`)}
            >
              More Details
            </button>
            <button className="btn btn-secondary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </Layout>
  );
};

export default CategoryProduct;
