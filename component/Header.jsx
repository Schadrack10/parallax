import React from "react";

const Header = () => {
  return (
    <>
      <nav
        style={{
          height: "50px",
          display: "flex",
          position: "fixed",
          width: "100%",
          top: "0",
          zIndex: "10",
        }}
      >
        <div style={{ display: "flex", width: "50%", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            Home
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            About
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            contact
          </div>
        </div>
        {/* other div */}
        <div
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "30px",
            }}
          >
            search
          </div>
        </div>
      </nav>
      {/* banner */}
      <div
        style={{
          background: `url("parallax1.jpg")`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0.7",
        }}
      >
        <div
          style={{
            background: "black",
            color: "white",
            fontSize: "30px",
            padding: "10px",
            letterSpacing: "10px",
          }}
        >
          MY WEBSITE LOGO
        </div>
      </div>
    </>
  );
};

export default Header;
