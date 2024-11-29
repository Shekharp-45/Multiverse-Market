import React from 'react'
import Layout from '../components/layout/layout';
const About = () => {
  return (
    <Layout title={"About Us - E-commerce App"}>
  <div className="container my-5">
    <div className="row about-us">
      {/* Image Section */}
      <div className="col-md-6">
        <img
          src="/images/about.jpeg"
          alt="About Us"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
      {/* Content Section */}
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className="mb-3">About Us</h1>
        <p className="text-justify">
          Welcome to <strong>Your E-commerce App</strong>, your one-stop
          destination for high-quality products at unbeatable prices. We are
          passionate about delivering an exceptional shopping experience,
          ensuring that you find exactly what you need quickly and easily.
        </p>
        <p className="text-justify">
          Established with a vision to connect customers with the best brands
          worldwide, we take pride in offering an extensive range of products
          tailored to meet every lifestyle and preference.
        </p>
        <p className="text-justify">
          Our mission is simple: to make shopping delightful, reliable, and
          convenient. At <strong>Your E-commerce App</strong>, we believe in
          blending innovation with service excellence to redefine the online
          shopping experience.
        </p>
      </div>
    </div>

    {/* Mission, Vision, and Values Section */}
    <div className="row mt-5">
      <div className="col-md-4 text-center">
        <h3 className="mb-3">Our Mission</h3>
        <p>
          To empower our customers with seamless access to the best products
          through exceptional service and cutting-edge technology.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <h3 className="mb-3">Our Vision</h3>
        <p>
          To become a globally recognized e-commerce platform known for
          innovation, trust, and excellence in online shopping.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <h3 className="mb-3">Our Values</h3>
        <p>
          Integrity, customer satisfaction, innovation, and sustainability
          guide everything we do, ensuring a positive impact on our community.
        </p>
      </div>
    </div>
  </div>
</Layout>

  );
};

export default About;