import React from "react";
import Layout from "../components/layout/layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
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
        height: "auto",
        overflowY: "auto", // Allow scrolling only if content exceeds height
        padding: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
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
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ textAlign: "justify", marginBottom: "20px" }}>
            Welcome to our Privacy Policy page! Here you will find detailed
            information on how we collect, use, and protect your personal
            information. Our commitment is to ensure transparency and the
            security of your data while using our platform.
          </p>
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              <strong>Information Collection:</strong> We collect information
              to provide a better service, which includes account details and
              browsing behavior.
            </li>
            <li>
              <strong>Use of Information:</strong> Your data helps us improve
              the platform experience, including product recommendations and
              customer support.
            </li>
            <li>
              <strong>Security:</strong> We take measures to protect your
              information using advanced security protocols.
            </li>
            <li>
              <strong>Third-Party Sharing:</strong> We never share your personal
              data without consent unless required by law.
            </li>
            <li>
              <strong>Cookies:</strong> Our website uses cookies to personalize
              user experiences and analyze traffic.
            </li>
            <li>
              <strong>Updates:</strong> This policy is subject to updates. We
              recommend revisiting this page for changes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Layout>

  );
};

export default Policy;
