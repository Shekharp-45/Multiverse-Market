import React from 'react'
import Layout from '../components/layout/layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          padding: "20px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div className="row contact-us">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Contact Us"
              style={{
                width: "100%",
                borderRadius: "10px", // Rounded corners for the image
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Shadow effect
                objectFit: "cover", // Ensures image covers the section
              }}
            />
          </div>
          {/* Content Section */}
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                background: "#333",
                color: "#fff",
                textAlign: "center",
                padding: "10px 0",
                marginBottom: "20px",
                borderRadius: "5px",
                fontSize: "2rem", // Larger font size
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                textAlign: "justify", // Justified text for better readability
                marginBottom: "20px",
                fontSize: "1.1rem", // Larger font size for better readability
              }}
            >
              Have any questions or need assistance? Feel free to reach out to
              us at any time! Our customer support team is available 24/7 to help
              you with your queries, product information, and support requests.
            </p>
            <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiMailSend
                  style={{
                    marginRight: "10px",
                    color: "#007bff", // Icon color
                    fontSize: "1.5rem", // Larger icon size
                  }}
                />
                <strong>Email:</strong> help@ecommerceapp.com
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiPhoneCall
                  style={{
                    marginRight: "10px",
                    color: "#007bff", // Icon color
                    fontSize: "1.5rem", // Larger icon size
                  }}
                />
                <strong>Phone:</strong> 9325008888
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiSupport
                  style={{
                    marginRight: "10px",
                    color: "#007bff", // Icon color
                    fontSize: "1.5rem", // Larger icon size
                  }}
                />
                <strong>Toll-Free Support:</strong> 1800-0000-0000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  
  
  

  
  );
};

export default Contact;